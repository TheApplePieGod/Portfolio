import { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Uniform {
  name: string;
  type: string;
}

interface Props {
  fragShader: string;
  uniforms?: Uniform[];
  uniformValues?: Record<string, any>;
}

const VERT_SHADER = `
varying vec2 vUV; 

void main()
{
    vUV = uv;
    gl_Position = vec4(position, 1.0);
}
`;

const FRAG_UNIFORMS = `
varying vec2 vUV; 
uniform vec2 iResolution;
uniform float iTime;
uniform vec4 iDate;
uniform vec4 iMouse;

uniform sampler2D iChannel0;
`;

const FRAG_FN = `
void main()
{
  vec4 finalColor = vec4(0.0);
  mainImage(finalColor, vUV * iResolution);
  gl_FragColor = finalColor;
}
`;

const Quad = (props: Props) => {
  const materialRef = useRef<any>();
  const channel0 = useLoader(THREE.TextureLoader, '/shader/stars.jpg');
  const { size, gl } = useThree();

  channel0.wrapS = THREE.RepeatWrapping;
  channel0.wrapT = THREE.RepeatWrapping;

  const material = useMemo(() => {
    const uniforms = props.uniforms ?? [];
    const customUniforms = uniforms
      .map((u) => `uniform ${u.type} ${u.name};`)
      .join('\n');
    const Material = shaderMaterial(
      {
        iResolution: new THREE.Vector2(),
        iTime: 0,
        iDate: new THREE.Vector4(),
        iMouse: new THREE.Vector4(),
        iChannel0: null,
        ...uniforms.reduce((p, c) => {
          p[c.name] = null;
          return p;
        }, {} as Record<string, any>)
      },
      VERT_SHADER,
      FRAG_UNIFORMS + customUniforms + props.fragShader + FRAG_FN
    );

    return new Material();
  }, [props.fragShader, props.uniforms]);

  useEffect(() => {
    const canvas = gl.domElement;
    const handleMouseMove = (event: MouseEvent) => {
      const { pageX, pageY } = event;
      const rect = canvas.getBoundingClientRect();
      materialRef.current.iMouse.set(
        pageX - rect.left - window.scrollX,
        size.height - (pageY - rect.top - window.scrollY), // Flip Y
        0,
        0
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [gl, size]);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;

    // Builtin uniforms
    const today = new Date();
    materialRef.current.iResolution.set(size.width, size.height);
    materialRef.current.iTime = clock.getElapsedTime();
    materialRef.current.iDate.set(
      today.getFullYear(),
      today.getMonth(),
      today.getDay(),
      (today.getTime() / 1000) % 86400 // Seconds elapsed since the start of the day
    );

    // Texture uniforms
    materialRef.current.iChannel0 = channel0;

    // Custom uniforms
    Object.getOwnPropertyNames(props.uniformValues ?? {}).map(
      (u) => (materialRef.current[u] = props.uniformValues![u])
    );
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} ref={materialRef} />
    </mesh>
  );
};

export const Renderer = (props: Props) => {
  return (
    <Canvas>
      <Quad {...props} />
    </Canvas>
  );
};
