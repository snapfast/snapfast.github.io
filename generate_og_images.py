import os
from PIL import Image, ImageDraw, ImageFont

# Canvas dimensions
WIDTH = 1200
HEIGHT = 630

# Colors: Deep Purple and Crisp White Theme
BG_TOP = (46, 16, 101)       # Deep Rich Purple (#2e1065)
BG_BOTTOM = (24, 9, 56)      # Darker Purple/Violet
WHITE = (255, 255, 255)      # Crisp White
LIGHT_PURPLE = (221, 214, 254)# Light Violet (#ddd6fe)
ACCENT_VIOLET = (192, 132, 252) # Accent Light Purple (#c084fc)
ACCENT_LINE = (147, 51, 234) # Purple 600

# Fonts
FONT_BOLD_PATH = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
FONT_REGULAR_PATH = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"

font_page_title = ImageFont.truetype(FONT_BOLD_PATH, 76)
font_page_title_large = ImageFont.truetype(FONT_BOLD_PATH, 80)
font_subtitle = ImageFont.truetype(FONT_REGULAR_PATH, 34)
font_brand = ImageFont.truetype(FONT_BOLD_PATH, 28)

cards = [
    {
        "filename": "og-image.png",
        "title": "Rahul Bali",
        "subtitle": "Engineer, technologist, and explorer of consciousness",
        "is_default": True
    },
    {
        "filename": "og-about.png",
        "title": "About",
        "subtitle": "Rahul Bali"
    },
    {
        "filename": "og-writings.png",
        "title": "Writings",
        "subtitle": "Rahul Bali"
    },
    {
        "filename": "og-projects.png",
        "title": "Projects",
        "subtitle": "Rahul Bali"
    },
    {
        "filename": "og-engineering-blogs.png",
        "title": "Engineering Blogs",
        "subtitle": "Rahul Bali"
    },
    {
        "filename": "og-careers.png",
        "title": "Careers",
        "subtitle": "Rahul Bali"
    },
    {
        "filename": "og-resume.png",
        "title": "Resume",
        "subtitle": "Rahul Bali"
    },
    {
        "filename": "og-contact.png",
        "title": "Contact",
        "subtitle": "Rahul Bali"
    }
]

output_dir = "assets/images"
os.makedirs(output_dir, exist_ok=True)

for card in cards:
    img = Image.new("RGB", (WIDTH, HEIGHT))
    draw = ImageDraw.Draw(img)

    # Create rich deep purple gradient background
    for y in range(HEIGHT):
        r = int(BG_TOP[0] + (BG_BOTTOM[0] - BG_TOP[0]) * (y / HEIGHT))
        g = int(BG_TOP[1] + (BG_BOTTOM[1] - BG_TOP[1]) * (y / HEIGHT))
        b = int(BG_TOP[2] + (BG_BOTTOM[2] - BG_TOP[2]) * (y / HEIGHT))
        draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))

    # Top decorative horizontal accent line
    draw.rectangle([100, 110, WIDTH - 100, 116], fill=ACCENT_VIOLET)

    # Layout Rearrangement:
    # 1. Page Name / Title at the Top
    content_x = 100
    title_y = 160

    title_font = font_page_title_large if card.get("is_default") else font_page_title
    draw.text((content_x, title_y), card["title"], font=title_font, fill=WHITE)

    # Divider line under title
    divider_y = title_y + (100 if card.get("is_default") else 95)
    draw.rectangle([content_x, divider_y, content_x + 120, divider_y + 6], fill=ACCENT_LINE)

    # 2. Subtitle / Tagline below divider line
    sub_y = divider_y + 35
    draw.text((content_x, sub_y), card["subtitle"], font=font_subtitle, fill=LIGHT_PURPLE)

    # 3. Domain Branding at the bottom
    domain_y = HEIGHT - 140
    draw.text((content_x, domain_y), "rahulbali.in", font=font_brand, fill=ACCENT_VIOLET)

    # Bottom border accent line
    draw.rectangle([0, HEIGHT - 10, WIDTH, HEIGHT], fill=ACCENT_VIOLET)

    out_path = os.path.join(output_dir, card["filename"])
    img.save(out_path, "PNG")
    print(f"Redesigned {out_path} (Purple & White)")

print("All social preview cards redesigned with purple and white successfully!")
