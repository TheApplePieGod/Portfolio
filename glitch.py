from PIL import Image
import numpy as np
import imageio

def glitch_image(img, max_shift=10):
    np_img = np.array(img)
    for ch in range(3):  # Apply shift per color channel
        for i in range(len(np_img)):
            shift_value = np.random.randint(-max_shift, max_shift)
            np_img[...,ch][i] = np.roll(np_img[...,ch][i], shift_value, axis=0)
    return Image.fromarray(np_img)

# Load the image
image_path = 'public/img/me4.jpeg'
img = Image.open(image_path)
base_img = np.array(img)

# Total number of frames
num_frames = 30

# Generate random control points
control_points = [
    (0, np.random.choice([0, 1])),  # Start with either full glitch or full image
    (num_frames, np.random.choice([0, 1]))  # End with either full glitch or full image
]

# Number of random transitions
num_transitions = 6

for _ in range(num_transitions):
    frame = np.random.randint(0, num_frames)
    alpha = np.random.choice([0, 1])  # Full glitch or Full image
    control_points.append((frame, alpha))

control_points.sort()

# Generate frames with random blend animations
frames = []
for i in range(num_frames):
    for (frame0, alpha0), (frame1, alpha1) in zip(control_points[:-1], control_points[1:]):
        if frame0 <= i < frame1:
            # Linearly interpolate alpha
            alpha = alpha0 + (alpha1 - alpha0) * ((i - frame0) / (frame1 - frame0)) ** 3
            break
    else:
        alpha = control_points[-1][1]  # Use the last control point

    # Apply the glitch effect
    glitched_img = glitch_image(img, max_shift=8)

    # Blend the glitched image with the base image
    blended_frame = Image.blend(Image.fromarray(base_img), glitched_img, alpha=alpha)
    frames.append(np.array(blended_frame))

# Save frames as GIF with looping
imageio.mimsave('random_blend_glitched_image.gif', frames, fps=10, loop=0, quantizer='wu')
