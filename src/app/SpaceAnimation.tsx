import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Renderer } from '../components/Renderer';

interface Props {
  centerScale: number;
  backdropScale: number;
  moveRate?: number;
}

const FRAG_SHADER = `
#define FAR_PLANE 20.0
#define RAY_STEPS 20
#define CAM_DIST 2.0
#define CENTER_HSV vec3(0.97, 0.85, 0.36) // Red
//#define CENTER_HSV vec3(0.6, 1.0, 0.75) // Blue
//#define CENTER_HSV vec3(0.35, 1.0, 0.75) // Green
#define BUTTON_HSV vec3(0.6, 1.0, 0.75) // Blue

#define PI 3.14159

float hashf(float n){
    return fract(sin(n)*43758.5453);
}

// https://www.shadertoy.com/view/ld3SDl
float noise(in vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);

    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    return mix(mix( hashf(n +  0.0), hashf(n +  1.0), f.x), mix( hashf(n + 57.0), hashf(n + 58.0), f.x), f.y);
}


vec3 noise2(vec2 x) {
	//return vec3(noise(x+vec2(123.456,.567)), 0.0, noise(x));
    return vec3(x.x, 0.0, x.y);
}

vec3 noise3(vec2 x) {
	return vec3(noise(x+vec2(123.456,.567)), 0.0, noise(x));
}

// https://stackoverflow.com/questions/15095909/from-rgb-to-hsv-in-opengl-glsl
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// https://iquilezles.org/articles/sdfrepetition/
vec3 repeated(vec3 p, float s)
{
    vec3 id = round(p/s);
    vec3 r = p - s*id;
    vec3 m = vec3( ((int(id.x)&1)==0) ? r.x : -r.x,
                   ((int(id.y)&1)==0) ? r.y : -r.y,
                   ((int(id.z)&1)==0) ? r.z : -r.z );
    return m;
}

float sdSphere(vec3 pos, float rad, vec3 n)
{
    vec3 noise = (noise2((pos + n).xz) - 0.5) * 0.4;
    return length(pos + noise) - rad;
    //return length(pos) - rad;
}

float sdCutHollowSphere(vec3 p, float r, float h, float t, vec3 n)
{
    r *= centerScale;
    h *= centerScale;
    float w = sqrt(r*r-h*h);
    vec3 noise = (noise2((p + n).xz) - 0.5) * 0.2;
    vec2 q = vec2( length(p.xz + noise.xy), p.y );
    float d = ((h*q.x<w*q.y) ? length(q-vec2(w,h)) : 
                              abs(length(q)-r) ) - t;
    return d;
}

float sdStars(vec3 p, float s, vec3 n)
{
    p += mod(iTime, 500.0);
    float r = 0.25;
    vec3 id = round(p/s);
    float h = hashf(abs(id.x) + hashf(abs(id.z)) + hashf(hashf(abs(id.y))));
    if (h < 0.2) // Random visibility
        return s * 0.5;
    return sdSphere(repeated(p, s), r, n);
}

float sdRoundBox(vec3 p, vec3 b, float r, vec3 n)
{
    vec3 noise = vec3(0.f);//(noise2((p + n).xz) - 0.5) * 0.05;
    vec3 q = abs(p + noise) - b + r;
    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0) - r;
}

vec2 takeClosest(vec2 og, vec2 new)
{
    // Check distance (x) and take closest value
    return new.x < og.x ? new : og;
}

vec2 computeScene(vec3 pos, vec3 n)
{
    vec2 res = vec2(FAR_PLANE, 0.0);
  
    // Stars
    res = takeClosest(res, vec2(sdStars(pos - vec3(0.0, 0.0, 0.0), 4.0, n), 1.0));

    float posLen = length(pos);
    if (posLen < 3.0) // Early intersection test
    {
        // Center
        res = takeClosest(res, vec2(sdCutHollowSphere(pos - vec3(0.0, 0.0, -0.09), 1.0, -0.52, 0.05, n), CENTER_HSV.r));

        // Buttons
        if (posLen > 0.6)
        {
            float y = -0.6;
            vec3 extent = vec3(0.25, 0.02, 0.15);

            if (backdropScale > 0.0)
            {
                res = takeClosest(res, vec2(
                    sdRoundBox(pos - vec3(0.0, -1.25, 0.0), vec3(15.0, 1.0, 5.0) * backdropScale, 0.02, n), 3.0
                ));
            }

/*
            if (centerScale > 0.0)
            {
                extent *= centerScale;
                res = takeClosest(res, vec2(sdRoundBox(pos - vec3(-1.5, y, 0.4), extent, 0.02, n), 2.0));
                res = takeClosest(res, vec2(sdRoundBox(pos - vec3(1.5, y, 0.4), extent, 0.02, n), 2.0));
                res = takeClosest(res, vec2(sdRoundBox(pos - vec3(-1.5, y, -0.4), extent, 0.02, n), 2.0));
                res = takeClosest(res, vec2(sdRoundBox(pos - vec3(1.5, y, -0.4), extent, 0.02, n), 2.0));
            }
*/
        }
    }
    
    return res;
}

mat3 makeCameraMatrix(vec3 lookDir)
{
    vec3 upDir = vec3(0.0, 1.0, 0.0);
    vec3 xDir = normalize(cross(lookDir, upDir));
    vec3 yDir = normalize(cross(xDir, lookDir));
    return mat3(xDir, yDir, lookDir);
}

// https://iquilezles.org/articles/normalsSDF
vec3 calcNormal(in vec3 pos, vec3 n)
{
    vec2 e = vec2(1.0,-1.0)*0.5773*0.0005;
    return normalize( e.xyy*computeScene(pos + e.xyy, n).x + 
					  e.yyx*computeScene(pos + e.yyx, n).x + 
					  e.yxy*computeScene(pos + e.yxy, n).x + 
					  e.xxx*computeScene(pos + e.xxx, n).x );
}

vec2 raymarch(vec3 rayOrigin, vec3 rayDir, float maxT, vec3 n)
{    
    vec2 intersect = vec2(-1.0);
    float t = 0.0;
    
    int MAX_STEPS = RAY_STEPS;
    for (int i = 0; i < MAX_STEPS && t < maxT; i++)
    {
        vec2 scene = computeScene(rayOrigin + rayDir * t, n);
        if(abs(scene.x) < 0.0001 * t)
        { 
            intersect = vec2(t, scene.y); 
            break;
        }
        
        t += scene.x;
    }
    
    return intersect;
}

float DistributionGGX(float NdotH, float roughness)
{
    float a      = roughness*roughness;
    float a2     = a*a;
    float NdotH2 = NdotH*NdotH;
	
    float num   = a2;
    float denom = (NdotH2 * (a2 - 1.0) + 1.0);
    denom = PI * denom * denom;
	
    return num / denom;
}

vec3 FresnelSchlick(float cosTheta, vec3 F0)
{
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
}

vec3 FresnelSchlickRoughness(float cosTheta, vec3 F0, float roughness)
{
    return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(1.0 - cosTheta, 5.0);
}   

float GeometrySchlickGGX(float NdotV, float roughness)
{
    float r = (roughness + 1.0);
    float k = (r*r) / 8.0;

    float num   = NdotV;
    float denom = NdotV * (1.0 - k) + k;
	
    return num / denom;
}

float GeometrySmith(float NdotV, float NdotL, float roughness)
{
    float ggx2  = GeometrySchlickGGX(NdotV, roughness);
    float ggx1  = GeometrySchlickGGX(NdotL, roughness);
	
    return ggx1 * ggx2;
}

vec2 PrefilteredDFG_Karis(float roughness, float NoV) {
    // Karis 2014, "Physically Based Material on Mobile"
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);

    vec4 r = roughness * c0 + c1;
    float a004 = min(r.x * r.x, exp2(-9.28 * NoV)) * r.x + r.y;

    return vec2(-1.04, 1.04) * a004 + r.zw;
}

vec3 ComputeSpecularBRDF(float roughness, vec3 F, float NdotV, float NdotL, float NdotH)
{
    float NDF = DistributionGGX(NdotH, roughness);
    float G = GeometrySmith(NdotV, NdotL, roughness);
    float denominator = 4.0 * NdotV * NdotL + 0.0001;
    return min(vec3(1.f), (NDF * G * F) / denominator);
}

vec3 ComputeDiffuseBRDF(vec3 diffuse)
{
    return diffuse / PI;
}

vec3 ComputeBRDF(vec3 diffuse, float roughness, float NdotL, vec3 F0, vec3 N, vec3 V, vec3 H)
{
    float NdotV = max(dot(N, V), 0.0);
    float NdotH = max(dot(N, H), 0.0);
    float VdotH = max(dot(V, H), 0.0);

    vec3 F = FresnelSchlick(VdotH, F0);
    diffuse = ComputeDiffuseBRDF(diffuse);
    vec3 specular = ComputeSpecularBRDF(roughness, F, NdotV, NdotL, NdotH);

    return (vec3(1.0) - F) * diffuse + specular;
}

vec3 calcLighting(vec3 rayOrigin, vec3 rayDir)
{
    vec3 finalColor = vec3(0.0980, 0.0941, 0.1137);

    // Noise seed
    vec3 n = vec3(sin(iDate.w * 0.5), sin(iDate.w * 0.2), cos(iDate.w * 0.3));

    // Mouse
    vec2 mo = (iMouse.xy/iResolution.xy * 2.0 - 1.0) * 0.8;
    
    bool trace = true;
    int depth = 0;
    while (depth < 1 && trace)
    {
        vec2 intersect = raymarch(rayOrigin, rayDir, FAR_PLANE, n);
        
        if (intersect.y <= -0.5)
        {
            // Miss
            break;
        }
    
        vec3 P = rayOrigin + rayDir * intersect.x;
        vec3 N = calcNormal(P, n);
        vec3 V = -rayDir;
        vec3 R = reflect(rayDir, N);
        vec3 Peps = P + N * 0.001;

        float metalness = 0.5;
        float roughness = 0.2;
        float ambient = 0.01;
        
        vec3 albedo = hsv2rgb(vec3(intersect.y + P.x * 0.1, CENTER_HSV.g, CENTER_HSV.b));
        if (intersect.y == 1.0) // Stars
        {
            albedo = vec3(1.0, 1.0, 0.9);
            roughness = 0.0;
            metalness = 0.2;
            ambient = 1.0;
            trace = false;
        }
        else if (intersect.y == 2.0) // Buttons
        {
            //albedo = vec3(0.474, 0.055, 0.143);
            albedo = vec3(0.321, 0.078, 0.149);
            roughness = 1.0;
            metalness = 0.1;
            trace = false;
        }
        else if (intersect.y == 3.0) // Backdrop
        {
            albedo = hsv2rgb(vec3(-0.0 + P.x * 0.02 + P.z * 0.02, CENTER_HSV.g, CENTER_HSV.b));
            roughness = 1.0;
            metalness = 0.1;
            trace = false;
        }
        
        vec3 F0 = mix(vec3(0.04), albedo, metalness);
        vec3 diffuse = mix(albedo * (vec3(1.0) - F0), vec3(0.0), metalness);

        vec3 localColor = vec3(0.0);

        // Ambient
        localColor += diffuse * ambient;

        // Directional light
        {
            vec3 L = -normalize(vec3(-1.25, -1.2, 1));
            vec3 color = max(dot(N, L), 0.0) * diffuse * 5.f;
            localColor += color;
        }
        
        // Point light
        {
            vec3 pos = vec3(-mo.x * 3.f, 1.5, mo.y * 3.f);
            float intensity = 2.f;
            
            vec3 L = -normalize(Peps - pos);
            vec3 H = normalize(V + L);
            
            float NdotL = max(dot(N, L), 0.0);
            float dist = length(Peps - pos);
            vec3 BRDF = ComputeBRDF(diffuse, roughness, NdotL, F0, N, V, H);
            vec3 color = NdotL * BRDF * intensity;
            float attenuation = 1.0/pow(dist * 0.25, 2.0);
            localColor += color * attenuation;
        }
        

        finalColor += localColor * 1.0/exp(float(depth));
        rayOrigin = Peps;
        rayDir = R;
        depth++;
    }
    
    return finalColor;
}

void mainImage(out vec4 fragColor, in vec2 _fragCoord)
{
    //vec2 fragCoord = floor(_fragCoord / 2.0) * 2.0;
    vec2 fragCoord = _fragCoord;

    int factor = 3;
    if (int(fragCoord.x) % (factor * 2) < 2 || int(fragCoord.y) % (factor * 2) < 2)
    {
        fragColor = vec4(0.0);
        return;
    }

    if (int(fragCoord.x) % 6 > 4 || int(fragCoord.y) % 6 > 4)
        discard;

    // Normalized pixel coordinates (from -1 to 1)
    vec2 uv = fragCoord / iResolution.xy * 2.0 - 1.0;
    
    // UV with applied aspect ratio 
    vec2 uvRatio = vec2(uv.x * (iResolution.x / iResolution.y), uv.y);

    float eps = 0.0001;
    vec3 camPos = vec3(0.0, CAM_DIST, eps);
    // float dist = 4.0;
     //vec2 mo = (iMouse.xy/iResolution.xy * 2.0 - 1.0);
    //vec3 camPos = vec3(dist*cos(7.0*mo.x), (1.0 - mo.y) * 2.0, dist*sin(7.0*mo.x));
    mat3 camMat = makeCameraMatrix(-normalize(camPos));
    vec3 rayOrigin = camPos;

    vec3 noise = noise3(fragCoord * 0.075);
    noise.x -= 0.5f;
    //noise.y -= 0.2f;
    noise.z -= 0.9f;
    //vec3 rayDir = camMat * normalize(vec3(uvRatio, 2));
    //vec3 rayDir = camMat * normalize(vec3(uvRatio, 2) + noise);
    //vec3 rayDir = camMat * (normalize(vec3(uvRatio, 2)) + noise);
    //vec3 rayDir = camMat * normalize(vec3(uvRatio, 3) + noise);
    vec3 rayDir = camMat * normalize(vec3(uvRatio, 3)) + noise;

    vec3 finalColor = calcLighting(rayOrigin, rayDir);

    fragColor = vec4(finalColor, 1.0);
}
`;

export const SpaceAnimation = (props: Props) => {
  const requestRef = useRef<number>(0);

  const [scales, setScales] = useState({
    center: 1.0,
    backdrop: 0.0
  });

  // TODO: incorporate framerate

  const moveRate = props.moveRate ?? 0.005;

  const animate = useCallback(() => {
    if (props.centerScale !== scales.center) {
      const sign = Math.sign(props.centerScale - scales.center);
      setScales((p) => ({
        ...p,
        center: Math.max(Math.min(p.center + moveRate * sign, 1.0), 0.0)
      }));
    }

    if (props.backdropScale !== scales.backdrop) {
      const sign = Math.sign(props.backdropScale - scales.backdrop);
      setScales((p) => ({
        ...p,
        backdrop: Math.max(
          Math.min(p.backdrop + moveRate * sign * 0.75, 1.0),
          0.0
        )
      }));
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [props.backdropScale, props.centerScale, moveRate, scales]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const uniforms = useMemo(
    () => [
      { name: 'centerScale', type: 'float' },
      { name: 'backdropScale', type: 'float' }
    ],
    []
  );
  return (
    <div className="w-full h-full">
      <Renderer
        fragShader={FRAG_SHADER}
        uniforms={uniforms}
        uniformValues={{
          centerScale: scales.center,
          backdropScale: scales.backdrop
        }}
      />
    </div>
  );
};
