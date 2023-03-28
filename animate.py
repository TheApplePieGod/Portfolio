from PIL import Image
import math
import random
import numpy as np
import copy


BACKGROUND_COL = (25, 24, 29)
BACKGROUND_THRESH = 10


def is_background(pixel):
    for i, val in enumerate(pixel):
        if abs(val - BACKGROUND_COL[i]) > BACKGROUND_THRESH:
            return False
    return True


def get_distance(pos1, pos2):
    return math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2)


def get_luminance(pixel):
    return (0.2126 * pixel[0] + 0.7152 * pixel[1] + 0.0722 * pixel[2]) / 255


def set_dot_color(dot, new_color, pixels):
    for pixel in dot:
        pixels[pixel[1]][pixel[0]] = [
            round(c * get_luminance(pixels[pixel[1]][pixel[0]])) for c in new_color
        ]


def set_dot_brightness(dot, factor, pixels, old_pixels):
    factor = 1 - factor
    for pixel in dot:
        pixels[pixel[1]][pixel[0]] = [
            round(c * factor + (BACKGROUND_COL[i] * (1 - factor)))
            for i, c in enumerate(old_pixels[pixel[1]][pixel[0]])
        ]


with Image.open("./public/images/background-nomoon.jpg") as img:
    width, height = img.size
    # pixels = img.load()
    pixels = np.array(img)
    og_pixels = copy.deepcopy(pixels)

    # Represent each dot in the image as an element in the dots array
    # Each dot contains a list of pixel coords in that dot
    dots = []
    for row in range(height):
        for col in range(width):
            pixel = pixels[row][col]
            pos = (col, row)
            if not is_background(pixel):
                pixels[row][col] = [i for i in BACKGROUND_COL]
                found = False
                for dot in dots:
                    if get_distance(pos, dot[0]) < 25:
                        dot.append(pos)
                        found = True
                        break
                if not found:
                    dots.append([pos])

    frames = [pixels]
    animating = {}
    anim_step = 0.025
    for frame_idx in range(170):
        frame = copy.deepcopy(frames[-1])

        animate_count = random.randint(0, 20)
        for _ in range(animate_count):
            to_animate = random.randint(0, len(dots) - 1)
            if to_animate not in animating:
                animating[to_animate] = (1.0, -anim_step)  # (factor, step)

        to_del = []
        for key, value in animating.items():
            factor, step = value
            if factor <= 0.0:
                step = -step
                factor = 0
            set_dot_brightness(dots[key], factor, frame, og_pixels)
            if factor >= 1.0 and step > 0:
                to_del.append(key)
            else:
                animating[key] = (factor + step, step)
        for key in to_del:
            del animating[key]

        # Ignore first 20 frames so the image can get 'warmed up'
        if frame_idx == 20:
            frames.clear()
        frames.append(frame)

    # newColor = tuple(random.randint(0, 255) for i in range(3))

    final_frames = [Image.fromarray(arr) for arr in frames]

    # Include reversed to allow seamless looping
    final_frames.extend(reversed(final_frames))

    final_frames[0].save(
        'animated.webp',
        'webp',
        save_all=True,
        append_images=final_frames[1:],
        optimize=True,
        duration=35,
        quality=50,
        loop=0
    )
