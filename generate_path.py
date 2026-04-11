import random
import math

# Keyframes: (x, y)
keyframes = [
    (0, 42),
    (20, 48),
    (25, 45),
    (28, 30), # spike
    (32, 38),
    (40, 38),
    (50, 43),
    (60, 41),
    (70, 37),
    (80, 39),
    (90, 45),
    (100, 50),
    (110, 49),
    (120, 45),
    (130, 47),
    (140, 43),
    (150, 33),
    (160, 28),
    (170, 27),
    (180, 34),
    (190, 25),
    (200, 36),
    (205, 23),
    (208, 10),
    (215, 12),
    (220, 18),
    (225, 12),
    (230, 19),
    (235, 12),
    (240, 22),
    (245, 12),
    (255, 15),
    (265, 8),
    (275, 12),
    (285, 8),
    (290, 15),
    (295, 16),
    (300, 14)
]

path = []
for i in range(len(keyframes) - 1):
    x1, y1 = keyframes[i]
    x2, y2 = keyframes[i+1]
    
    steps = int((x2 - x1) / 1.5)
    if steps < 1: steps = 1
    
    for j in range(steps):
        t = j / steps
        x = x1 + (x2 - x1) * t
        y = y1 + (y2 - y1) * t
        
        # Add noise
        noise = random.uniform(-2.5, 2.5)
        # Reduce noise near spike to preserve shape
        if y < 15 or y > 45:
            noise *= 0.5
            
        path.append(f"L{x:.1f},{y + noise:.1f}")

path[0] = path[0].replace('L', 'M')
path.append(f"L300,{keyframes[-1][1]:.1f}")
print(" ".join(path))
