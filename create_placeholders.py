#!/usr/bin/env python3
"""创建照片占位图"""
from PIL import Image, ImageDraw, ImageFont
import os

# 创建输出目录
img_dir = r"D:\chi157\portfolio\public\assets\img"
os.makedirs(img_dir, exist_ok=True)

# 颜色调色板
colors = {
    'photo1': '#60A5FA',  # 淡蓝
    'photo2': '#2563EB',  # 中蓝
    'photo3': '#1E40AF',  # 深蓝
    'photo4': '#0EA5E9',  # 天蓝
    'photo5': '#3B82F6',  # 宝蓝
    'photo6': '#06B6D4',  # 青蓝
}

text_labels = {
    'photo1': '生活照1',
    'photo2': '生活照2',
    'photo3': '生活照3',
    'photo4': '生活照4',
    'photo5': '生活照5',
    'photo6': '生活照6',
}

# 生成占位图片
for name, color in colors.items():
    width, height = 400, 300
    
    # 将十六进制颜色转换为RGB
    color = color.lstrip('#')
    rgb = tuple(int(color[i:i+2], 16) for i in (0, 2, 4))
    
    # 创建图片
    img = Image.new('RGB', (width, height), rgb)
    draw = ImageDraw.Draw(img)
    
    # 添加文字
    text = text_labels[name]
    try:
        # 尝试使用系统字体
        font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 60)
    except:
        # 如果找不到，使用默认字体
        font = ImageFont.load_default()
    
    # 文字位置（居中）
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # 绘制文字（白色）
    draw.text((x, y), text, fill=(255, 255, 255), font=font)
    
    # 保存
    file_path = os.path.join(img_dir, f'{name}.jpg')
    img.save(file_path, 'JPEG', quality=85)
    print(f'✓ 已创建: {name}.jpg')

print('\n✅ 所有占位图已创建完成！')
print(f'位置: {img_dir}')
print('\n📸 现在您可以：')
print('1. 用您的真实照片替换这些文件')
print('2. 运行 "npm run deploy" 更新网站')
