# 🚀 Quick Setup Guide

## Step 1: Create Directory Structure

Create the following folders in your project directory:

```
my-portfolio/
├── css/           (already created - contains style.css)
├── js/            (already created - contains script.js)
├── images/        (create this folder)
└── assets/        (create this folder)
```

### Windows:
```cmd
mkdir images
mkdir assets
```

### Mac/Linux:
```bash
mkdir images assets
```

## Step 2: Add Your Images

Place your images in the `images/` folder with these exact names:

### Required Images:
- `profile.jpg` - Your profile picture (300x300px, circular crop recommended)
- `hero-image.jpg` - Main hero image (800x800px)
- `portfolio-1.jpg` to `portfolio-6.jpg` - Your project screenshots (600x400px)
- `blog-1.jpg` to `blog-4.jpg` - Blog post images (600x400px)
- `cert-logo-1.png` to `cert-logo-6.png` - Certificate issuer logos (150x150px, PNG with transparent background recommended)

### Quick Test with Placeholder Images:

You can use these free placeholder images while testing:

**Option 1: Download from Unsplash**
- Visit https://unsplash.com
- Search for relevant images
- Download and rename them

**Option 2: Use Lorem Picsum (temporary placeholders)**
- Open your browser and save these URLs as JPG files:
  - Profile: `https://picsum.photos/300/300`
  - Hero: `https://picsum.photos/800/800`
  - Portfolio 1-6: `https://picsum.photos/600/400` (save 6 times)
  - Blog 1-4: `https://picsum.photos/600/400` (save 4 times)

## Step 3: Add Your CV/Resume

Place your CV/Resume PDF in the `assets/` folder:
- File name: `cv.pdf`
- Format: PDF
- Make sure it's up to date!

## Step 4: Customize Your Information

Open `index.html` in your text editor and update:

### Personal Information (Sidebar):
- Line 36-37: Your name and title
- Line 47-48: Phone number and email

### Home Section:
- Line 84: Your title/role
- Line 85: Your name
- Line 86-87: Your bio/introduction

### Resume Section:
- Lines 116-163: Education and experience details
- Lines 169-260: Skills (adjust percentages as needed)
- Lines 267-276: Knowledge tags

### Portfolio Section:
- Lines 286-349: Update project names and descriptions

### Blog Section:
- Lines 363-424: Update blog post titles and excerpts

### Contact Section:
- Lines 438-458: Update contact information and location

### Social Media Links:
- Lines 41-45: Update social media URLs

## Step 5: Test Your Website

### Option 1: Simple File Open
- Double-click `index.html`
- Opens in your default browser

### Option 2: Local Server (Recommended)

**Using Python (if installed):**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using PHP (if installed):**
```bash
php -S localhost:8000
```
Then open: `http://localhost:8000`

**Using Node.js:**
```bash
npx http-server
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

## Step 6: Customize Colors (Optional)

Open `css/style.css` and edit lines 6-11:

```css
:root {
    --primary-color: #40b883;      /* Change to your brand color */
    --secondary-color: #2c3e50;
    --dark-bg: #1e1e1e;
    --darker-bg: #2a2a2a;
    --sidebar-bg: #3d5a5f;
}
```

Popular color schemes:
- **Blue**: #3498db
- **Purple**: #9b59b6
- **Red**: #e74c3c
- **Orange**: #f39c12
- **Pink**: #e91e63

## Step 7: Test Responsiveness

Test your website on different screen sizes:

### In Browser:
1. Open Developer Tools (F12)
2. Click device toolbar icon
3. Test different devices:
   - iPhone 12/13
   - iPad
   - Desktop

### Actual Devices:
- Test on your phone/tablet if possible
- Check all sections work correctly
- Ensure forms and navigation function properly

## Step 8: Deploy Your Website

### Option 1: GitHub Pages (Free)
1. Create GitHub account
2. Create new repository named `username.github.io`
3. Upload all files
4. Visit `https://username.github.io`

### Option 2: Netlify (Free)
1. Visit https://netlify.com
2. Drag and drop your project folder
3. Get instant live URL

### Option 3: Vercel (Free)
1. Visit https://vercel.com
2. Import your project
3. Deploy with one click

### Option 4: Traditional Hosting
- Upload files via FTP to your web host
- Popular hosts: Bluehost, HostGator, SiteGround

## ✅ Checklist

Before going live, make sure:

- [ ] All images are added and displaying correctly
- [ ] CV/Resume PDF is uploaded
- [ ] Personal information is updated
- [ ] Social media links are correct
- [ ] Contact information is accurate
- [ ] All sections have your real content
- [ ] Website tested on mobile devices
- [ ] All links work properly
- [ ] Contact form is connected (if using backend)
- [ ] Website loads quickly
- [ ] No console errors (check browser developer tools)

## 🆘 Common Issues

### Images not showing?
- Check file names match exactly (case-sensitive)
- Check files are in the `images/` folder
- Check file extensions (.jpg, .png)

### Sidebar not showing on mobile?
- Click the menu icon (hamburger icon) in top-left

### Contact form not working?
- The form currently shows an alert
- Integrate with Formspree or EmailJS for real functionality
- See README.md for integration instructions

### Sections not switching?
- Check browser console for errors (F12)
- Make sure JavaScript file is loaded correctly

## 📚 Need More Help?

- Read the full README.md file
- Check browser console for errors
- Validate HTML: https://validator.w3.org/
- Validate CSS: https://jigsaw.w3.org/css-validator/

## 🎉 You're Done!

Your portfolio website is now ready! Share it with the world:
- Add it to your resume
- Share on LinkedIn
- Include in job applications
- Add to your email signature

**Good luck with your portfolio! 🚀**
