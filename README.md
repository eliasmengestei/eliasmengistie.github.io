# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML5, CSS3, Bootstrap 5, and JavaScript. Features a clean dark theme with smooth animations and an intuitive user interface.

## 🌟 Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional dark theme with teal accents
- **Fixed Sidebar**: Profile information always accessible
- **Multiple Sections**:
  - Home - Hero section with typing animation and stats
  - Resume - Education, experience, skills with animated progress bars
  - Portfolio - Filterable project gallery
  - Blog - Filterable blog posts
  - Contact - Contact form with Google Maps integration
- **Smooth Animations**: Page transitions, hover effects, and scroll animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation support
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Custom styles
├── js/
│   └── script.js          # JavaScript functionality
├── images/                # Image assets
│   ├── profile.jpg        # Profile picture
│   ├── hero-image.jpg     # Hero section image
│   ├── portfolio-*.jpg    # Portfolio project images
│   └── blog-*.jpg         # Blog post images
├── assets/
│   └── cv.pdf            # Downloadable CV/Resume
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Download or clone the project**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Add your images**
   - Replace placeholder images in the `images/` folder:
     - `profile.jpg` - Your profile picture (recommended: 300x300px)
     - `hero-image.jpg` - Hero section image (recommended: 800x800px)
     - `portfolio-1.jpg` to `portfolio-6.jpg` - Your project images
     - `blog-1.jpg` to `blog-4.jpg` - Blog post images

3. **Add your CV**
   - Place your CV/Resume PDF in the `assets/` folder as `cv.pdf`

4. **Customize content**
   - Open `index.html` in your text editor
   - Replace placeholder text with your information:
     - Name, title, bio
     - Contact information
     - Education and experience
     - Skills and knowledge areas
     - Portfolio projects
     - Blog posts
   - Update social media links

5. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using PHP
     php -S localhost:8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

## 🎨 Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #40b883;      /* Main accent color */
    --secondary-color: #2c3e50;    /* Secondary color */
    --dark-bg: #1e1e1e;            /* Main background */
    --darker-bg: #2a2a2a;          /* Card backgrounds */
    --sidebar-bg: #3d5a5f;         /* Sidebar background */
}
```

### Fonts

The website uses **Poppins** from Google Fonts. To change:

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your preferred font
3. Replace the font link in `index.html`
4. Update the font-family in `css/style.css`

### Sections

To add or remove sections:

1. Add/remove section in `index.html`
2. Add/remove navigation link in the right navigation
3. Update JavaScript in `js/script.js` if needed

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Bootstrap 5.3.2** - Responsive grid and components
- **Font Awesome 6.4.2** - Icons
- **JavaScript (ES6+)** - Interactivity and animations
- **Google Fonts** - Typography (Poppins)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📧 Contact Form Integration

The contact form currently shows an alert. To integrate with a backend:

### Option 1: Formspree
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### Option 2: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add their SDK
3. Update the form submission handler in `js/script.js`

### Option 3: Custom Backend
Update the fetch call in `js/script.js` with your API endpoint.

## 🗺️ Google Maps Integration

To use your own location:

1. Go to [Google Maps Embed API](https://developers.google.com/maps/documentation/embed)
2. Generate your embed code
3. Replace the iframe src in the Contact section

## 📝 Adding Blog Posts

To add a new blog post:

```html
<div class="col-lg-4 col-md-6 mb-4 blog-item" data-category="your-category">
    <div class="blog-card">
        <div class="blog-image">
            <img src="images/your-blog-image.jpg" alt="Blog Post Title">
            <span class="blog-category">Category</span>
        </div>
        <div class="blog-content">
            <p class="blog-date"><i class="far fa-calendar"></i> Date</p>
            <h4 class="blog-title"><a href="#">Your Blog Title</a></h4>
            <p class="blog-excerpt">Your excerpt...</p>
            <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</div>
```

## 🎯 Performance Optimization

- Optimize images (use WebP format, compress images)
- Minify CSS and JavaScript for production
- Enable browser caching
- Use a CDN for libraries
- Consider lazy loading for images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Made with ❤️ by [Your Name]**

*Last Updated: July 2026*
