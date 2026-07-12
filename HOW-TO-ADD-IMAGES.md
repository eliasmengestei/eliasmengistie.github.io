# 📸 How to Add Your Images - Complete Guide

## Profile Pictures

### Where They Appear:
1. **Sidebar (Left)** - Small circular profile picture
2. **About Me Section (Right)** - Large hero image

### File Locations:
```
my-portfolio/
└── images/
    ├── profile.jpg      ← Sidebar profile (300x300px)
    └── hero-image.jpg   ← About Me hero image (800x800px)
```

---

## Step-by-Step: Replace Images

### Method 1: Replace Existing Files (Recommended ✅)

1. **Prepare your photo:**
   - Square crop for best results
   - Recommended sizes:
     - `profile.jpg`: 300x300 pixels
     - `hero-image.jpg`: 800x800 pixels
   - Format: JPG or PNG

2. **Navigate to the images folder:**
   ```
   C:\Users\menge\Desktop\my-portfolio\images\
   ```

3. **Replace the files:**
   - Delete or rename the old `profile.jpg`
   - Copy your photo and name it `profile.jpg`
   - Delete or rename the old `hero-image.jpg`
   - Copy your photo and name it `hero-image.jpg`

4. **Refresh your browser** - Your photo should now appear!

---

### Method 2: Use Your Own File Names

If your photo is named something like `my-photo.jpg`, you can either:

**Option A: Rename your file to `profile.jpg`** (easier)

**Option B: Update the HTML** (if you want to keep your filename):

1. Open `index.html` in a text editor
2. Find line 39: `<img src="images/profile.jpg" ...`
3. Change to: `<img src="images/YOUR-FILENAME.jpg" ...`
4. Find line 118: `<img src="images/hero-image.jpg" ...`
5. Change to: `<img src="images/YOUR-FILENAME.jpg" ...`
6. Save the file

---

## All Images You Need to Add

Here's the complete list of images your portfolio needs:

### Profile & Hero:
- ✅ `images/profile.jpg` (300x300px) - Already exists, replace with yours
- ✅ `images/hero-image.jpg` (800x800px) - Already exists, replace with yours

### Portfolio Projects (6 images):
- ✅ `images/portfolio-1.jpg` (600x400px) - Already exists
- ✅ `images/portfolio-2.jpg` (600x400px) - Already exists
- ✅ `images/portfolio-3.jpg` (600x400px) - Already exists
- ✅ `images/portfolio-4.jpg` (600x400px) - Already exists
- ✅ `images/portfolio-5.jpg` (600x400px) - Already exists
- ✅ `images/portfolio-6.jpg` (600x400px) - Already exists

### Blog Posts (4 images):
- ✅ `images/blog-1.jpg` (600x400px) - Already exists
- ✅ `images/blog-2.jpg` (600x400px) - Already exists
- ✅ `images/blog-3.jpg` (600x400px) - Already exists
- ✅ `images/blog-4.jpg` (600x400px) - Already exists

### Certificate Logos (6 images):
- ❌ `images/cert-logo-1.png` (150x150px, PNG with transparency)
- ❌ `images/cert-logo-2.png` (150x150px, PNG with transparency)
- ❌ `images/cert-logo-3.png` (150x150px, PNG with transparency)
- ❌ `images/cert-logo-4.png` (150x150px, PNG with transparency)
- ❌ `images/cert-logo-5.png` (150x150px, PNG with transparency)
- ❌ `images/cert-logo-6.png` (150x150px, PNG with transparency)

**Note:** Most images already have placeholders. Certificate logos need to be added if you want to show actual certificate issuer logos (like Udemy, Coursera, etc.)

---

## Image Specifications

### Profile & Hero Images:
- **Format:** JPG or PNG
- **Shape:** Square (1:1 ratio)
- **Quality:** High quality, well-lit
- **Background:** Clean, professional
- **Face:** Clearly visible, centered

### Portfolio Images:
- **Format:** JPG or PNG
- **Size:** 600x400 pixels (3:2 ratio)
- **Content:** Screenshots of your projects, designs, or work

### Blog Images:
- **Format:** JPG or PNG
- **Size:** 600x400 pixels (3:2 ratio)
- **Content:** Relevant to blog post topic

### Certificate Logos:
- **Format:** PNG (with transparent background preferred)
- **Size:** 150x150 pixels (square)
- **Content:** Logo of certificate issuer (Udemy, Coursera, Google, etc.)

---

## Quick Image Editing Tips

### Free Tools to Resize/Crop Images:

**Online (No Install):**
- [Photopea](https://www.photopea.com/) - Like Photoshop, free
- [Pixlr](https://pixlr.com/) - Simple image editor
- [Remove.bg](https://www.remove.bg/) - Remove background

**Windows Built-in:**
- **Paint 3D** - Comes with Windows 10/11
  1. Open image in Paint 3D
  2. Click "Canvas"
  3. Set size (e.g., 300x300)
  4. Click "Crop"
  5. Save

**Mac Built-in:**
- **Preview** - Built into macOS
  1. Open image in Preview
  2. Tools → Adjust Size
  3. Set dimensions
  4. Save

---

## Troubleshooting

### Image Not Showing?
1. **Check file name** - Must match exactly (case-sensitive on some servers)
2. **Check file location** - Must be in `images/` folder
3. **Check file format** - Use JPG or PNG, not HEIC or other formats
4. **Hard refresh browser** - Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Image Too Large/Small?
- Use an image editor to resize before uploading
- Don't rely on HTML/CSS to resize - it affects loading speed

### Image Quality Poor?
- Use higher resolution source image
- Don't upscale small images - they'll look blurry
- Compress images to reduce file size: [TinyPNG](https://tinypng.com/)

---

## Example: Adding Your Profile Picture

**Scenario:** Your photo is `john-photo.jpg` on your Desktop

### Quick Method:
1. Copy `john-photo.jpg` from Desktop
2. Navigate to: `C:\Users\menge\Desktop\my-portfolio\images\`
3. Delete old `profile.jpg`
4. Paste your photo
5. Rename it to `profile.jpg`
6. Do the same for `hero-image.jpg`
7. Refresh browser - Done! ✅

---

## Pro Tips

✅ **Use Square Photos** - They look better in circular frames  
✅ **Professional Appearance** - Good lighting, clean background  
✅ **Optimize File Size** - Compress images to load faster  
✅ **Consistent Style** - All images should have similar quality/style  
✅ **Backup Originals** - Keep original high-res versions elsewhere  

---

## Need Help?

If you're having trouble:
1. Check the file name matches exactly
2. Make sure file is in `images/` folder
3. Try hard refresh (Ctrl+F5)
4. Check browser console (F12) for errors

---

**That's it! Your profile picture is now ready to shine! ✨**
