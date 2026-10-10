#!/usr/bin/env python3
"""Render the Renovix Home Services invoice sample as a high-res A4 PNG."""
import os
from PIL import Image, ImageDraw, ImageFont

BASE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(BASE)
FONT_DIR = "/usr/share/fonts/truetype/dejavu"

W, H = 1240, 1754  # A4 @ ~150dpi
M = 70             # side margin

NAVY = (22, 50, 79)
NAVY_D = (15, 36, 57)
ORANGE = (247, 164, 29)
GRAY = (91, 107, 123)
LIGHT = (244, 247, 250)
LINE = (217, 226, 236)
INK = (34, 48, 60)
GREEN = (46, 125, 50)
WHITE = (255, 255, 255)


def font(size, bold=False, italic=False):
    name = "DejaVuSans-Bold.ttf" if bold else ("DejaVuSans-Oblique.ttf" if italic and os.path.exists(f"{FONT_DIR}/DejaVuSans-Oblique.ttf") else "DejaVuSans.ttf")
    return ImageFont.truetype(os.path.join(FONT_DIR, name), size)


img = Image.new("RGB", (W, H), WHITE)
d = ImageDraw.Draw(img)


def wrap(text, f, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if d.textlength(t, font=f) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def pair(x, y, label, value, f_lab, f_val, color=INK):
    d.text((x, y), label, font=f_lab, fill=NAVY)
    lw = d.textlength(label, font=f_lab)
    d.text((x + lw + 6, y), value, font=f_val, fill=color)


# ---------- watermark ----------
wm = Image.new("RGBA", (W, H), (0, 0, 0, 0))
wd = ImageDraw.Draw(wm)
wf = font(190, bold=True)
wd.text((W / 2, H / 2), "SAMPLE", font=wf, fill=(22, 50, 79, 14), anchor="mm")
wm = wm.rotate(24, expand=False, center=(W / 2, H / 2))
img.paste(wm, (0, 0), wm)

# ---------- top bar ----------
d.rectangle([0, 0, W, 14], fill=NAVY)
d.rectangle([int(W * 0.6), 0, W, 14], fill=ORANGE)

y = 64
# ---------- header left: logo + website details ----------
logo = Image.open(os.path.join(REPO, "public/images/logo/renovix-home-services-logo.png")).convert("RGBA")
lw = 360
lh = int(logo.height * lw / logo.width)
logo = logo.resize((lw, lh), Image.LANCZOS)
img.paste(logo, (M, y), logo)
y += lh + 22

fy = y
d.rectangle([M, fy, M + 5, fy + 128], fill=ORANGE)
fx = M + 20
f_lab, f_val = font(17, bold=True), font(17)
pair(fx, fy, "Website:", "renovixhomeservices.my", f_lab, f_val)
pair(fx, fy + 26, "Phone / WhatsApp:", "+60 11-5925 9521", f_lab, f_val)
pair(fx, fy + 52, "Email:", "renovixhomeservices@gmail.com", f_lab, f_val)
d.text((fx, fy + 78), "Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Malaysia", font=f_val, fill=GRAY)
d.text((fx, fy + 104), "Business hours: 9:00 AM – 6:00 PM", font=f_val, fill=GRAY)
left_end = fy + 135

# ---------- header right: registered company ----------
rx0, rx1 = 690, W - M
ry0 = 64
reg_lines = [
    "Registration No: 202603257989 (CA0428344-H)",
    "Registered Address: 41X Lorong Keramat Tepi 4,",
    "Kampung Datu Keramat, 54000 Kuala Lumpur,",
    "Wilayah Persekutuan",
    "Registered until: 27 September 2027",
    "SSM — Borang D (Kaedah 13), Akta Pendaftaran",
    "Perniagaan 1956",
]
ry1 = ry0 + 8 + 34 + 30 + len(reg_lines) * 24 + 16
d.rectangle([rx0, ry0, rx1, ry1], fill=LIGHT, outline=LINE, width=2)
d.rectangle([rx0, ry0, rx1, ry0 + 7], fill=NAVY)
t = "REGISTERED COMPANY"
tf = font(14, bold=True)
d.text((rx0 + 18, ry0 + 20), t, font=tf, fill=NAVY)
d.text((rx0 + 18, ry0 + 44), "KL RENOVATOR & HOME SERVICES", font=font(19, bold=True), fill=NAVY_D)
ry = ry0 + 44 + 32
rf = font(15)
for ln in reg_lines:
    d.text((rx0 + 18, ry), ln, font=rf, fill=INK)
    ry += 24
header_end = max(left_end, ry1)

# ---------- invoice meta ----------
y = header_end + 40
d.text((M, y), "INVOICE", font=font(58, bold=True), fill=NAVY)
tw = d.textlength("INVOICE", font=font(58, bold=True))
d.text((M + tw + 4, y), ".", font=font(58, bold=True), fill=ORANGE)

mf_lab, mf_val = font(13, bold=True), font(17, bold=True)
rows = [("INVOICE NO.", "RNX-2026-0001"), ("DATE OF ISSUE", "____ / ____ / 20____"), ("PAYMENT DUE", "____ / ____ / 20____")]
my = y + 4
for k, v in rows:
    d.text((W - M, my), v, font=mf_val, fill=NAVY_D, anchor="ra")
    vw = d.textlength(v, font=mf_val)
    d.text((W - M - vw - 16, my + 4), k, font=mf_lab, fill=GRAY, anchor="ra")
    my += 28
y = y + 92
d.rectangle([M, y, W - M, y + 3], fill=NAVY)
y += 26

# ---------- parties ----------
box_w = (W - 2 * M - 40) // 2
for i, (title, body) in enumerate([
    ("BILLED TO", ["Customer name", "Customer address", "Customer phone"]),
    ("WORK / PROJECT SITE", ["Property address where the", "work is carried out"]),
]):
    x0 = M + i * (box_w + 40)
    h_box = 150
    d.rectangle([x0, y, x0 + box_w, y + h_box], fill=LIGHT, outline=LINE, width=2)
    d.text((x0 + 18, y + 14), title, font=font(14, bold=True), fill=ORANGE)
    by = y + 42
    for j, ln in enumerate(body):
        f = font(17, bold=True) if j == 0 else font(16, italic=True)
        d.text((x0 + 18, by), ln, font=f, fill=(NAVY_D if j == 0 else (138, 153, 168)))
        by += 28
y += 150 + 30

# ---------- items table ----------
cols = [("num", 60), ("desc", W - 2 * M - 60 - 80 - 160 - 160), ("qty", 80), ("price", 160), ("amt", 160)]
x = M
th = 46
d.rectangle([M, y, W - M, y + th], fill=NAVY)
hf = font(14, bold=True)
hdr = ["#", "DESCRIPTION OF WORK / SERVICE", "QTY", "UNIT PRICE (RM)", "AMOUNT (RM)"]
cx = M
for (key, cw), label in zip(cols, hdr):
    if key in ("qty", "price", "amt"):
        d.text((cx + cw - 12, y + 15), label, font=hf, fill=WHITE, anchor="ra")
    else:
        d.text((cx + 12, y + 15), label, font=hf, fill=WHITE)
    cx += cw
y += th

items = [
    ("1", "Bathroom wall & floor tiling work (labour + materials)", "1", "2,500.00", "2,500.00"),
    ("2", "Interior wall painting — 2 coats", "1", "1,200.00", "1,200.00"),
    ("3", "Add more rows as needed…", "", "", ""),
]
rf, rf_b = font(16), font(16, bold=True)
for idx, (num, desc, qty, price, amt) in enumerate(items):
    rh = 52
    if idx % 2 == 1:
        d.rectangle([M, y, W - M, y + rh], fill=(250, 252, 254))
    cx = M
    vals = [num, desc, qty, price, amt]
    for (key, cw), v in zip(cols, vals):
        if desc.startswith("Add more"):
            f = font(16, italic=True)
            col = (138, 153, 168)
        else:
            f, col = rf, INK
        if key in ("qty", "price", "amt"):
            d.text((cx + cw - 12, y + 16), v, font=f, fill=col, anchor="ra")
        else:
            d.text((cx + 12, y + 16), v, font=f, fill=col)
        cx += cw
    y += rh
    d.line([M, y, W - M, y], fill=LINE, width=2)
y += 24

# ---------- totals ----------
tw_box = 440
tx1 = W - M
ty = y
trows = [("Subtotal", "RM 3,700.00", None), ("TOTAL", "RM 3,700.00", "grand"),
         ("Deposit Received (50%)", "− RM 1,850.00", "dep"), ("Balance Due", "RM 1,850.00", "bal")]
for k, v, style in trows:
    rh = 44 if style == "grand" else 36
    if style == "grand":
        d.rectangle([tx1 - tw_box, ty, tx1, ty + rh], fill=NAVY)
        d.text((tx1 - tw_box + 14, ty + 10), k, font=font(18, bold=True), fill=WHITE)
        d.text((tx1 - 14, ty + 10), v, font=font(19, bold=True), fill=ORANGE, anchor="ra")
    else:
        col = GREEN if style == "dep" else (NAVY_D if style == "bal" else GRAY)
        vf = font(17, bold=True) if style in ("dep", "bal") else font(16)
        d.text((tx1 - tw_box + 14, ty + 9), k, font=font(16, bold=True) if style == "bal" else font(16), fill=col)
        d.text((tx1 - 14, ty + 9), v, font=vf, fill=col, anchor="ra")
        d.line([tx1 - tw_box, ty + rh, tx1, ty + rh], fill=LINE, width=1)
    ty += rh
y = ty + 34

# ---------- payment + terms ----------
col_w = (W - 2 * M - 50)
pay_w = int(col_w * 0.45)
terms_w = col_w - pay_w - 50
px0, tx0 = M, M + pay_w + 50

d.text((px0, y), "PAYMENT DETAILS", font=font(15, bold=True), fill=NAVY)
uw = d.textlength("PAYMENT DETAILS", font=font(15, bold=True))
d.rectangle([px0, y + 24, px0 + uw, y + 27], fill=ORANGE)
py = y + 40
pf = font(15)
pay_rows = [
    ("Bank Transfer", ["[Bank name — to be added]", "[Account name — to be added]", "[Account no. — to be added]"]),
    ("Cash / Other", ["By arrangement with Renovix Home Services"]),
    ("Reference", ["Kindly use the invoice number as payment reference"]),
]
for k, vals in pay_rows:
    d.text((px0, py), k, font=font(15, bold=True), fill=GRAY)
    py += 24
    for v in vals:
        d.text((px0 + 8, py), v, font=pf, fill=INK)
        py += 23
    py += 8

d.text((tx0, y), "TERMS & CONDITIONS", font=font(15, bold=True), fill=NAVY)
uw = d.textlength("TERMS & CONDITIONS", font=font(15, bold=True))
d.rectangle([tx0, y + 24, tx0 + uw, y + 27], fill=ORANGE)
ty2 = y + 40
terms = [
    "A 50% deposit is required to confirm the booking and schedule the work; the balance is payable upon completion of the job.",
    "Payment is due within 7 days of the invoice date unless otherwise agreed in writing.",
    "Quotations and prices stated are valid for 30 days from the date of issue.",
    "Any additional work requested beyond the agreed scope will be quoted and charged separately.",
    "Workmanship is guaranteed for 30 days from completion; materials carry the manufacturer's warranty where applicable.",
    "KL Renovator & Home Services is not liable for delays caused by circumstances beyond its reasonable control (e.g. weather, site access).",
]
tfm = font(14)
for i, t in enumerate(terms, 1):
    lines = wrap(f"{i}.  {t}", tfm, terms_w)
    for ln in lines:
        d.text((tx0, ty2), ln, font=tfm, fill=INK)
        ty2 += 21
    ty2 += 5
lower_end = max(py, ty2)

# ---------- footer ----------
fh = 92
d.rectangle([0, H - fh, W, H], fill=NAVY)
d.text((W / 2, H - fh + 22), "Thank you for your business!", font=font(20, bold=True), fill=WHITE, anchor="mm")
d.text((W / 2, H - fh + 56), "renovixhomeservices.my   •   +60 11-5925 9521   •   renovixhomeservices@gmail.com",
       font=font(15), fill=(223, 232, 242), anchor="mm")

out = os.path.join(BASE, "renovix-invoice-sample.png")
img.save(out, "PNG")
print("saved", out, img.size)
