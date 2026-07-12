# 🎨 Customization Examples

This guide provides examples and tips for customizing your portfolio website.

## 1. Color Schemes

### Professional Blue
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --dark-bg: #1a1a2e;
    --darker-bg: #16213e;
    --sidebar-bg: #0f3460;
}
```

### Creative Purple
```css
:root {
    --primary-color: #9b59b6;
    --secondary-color: #34495e;
    --dark-bg: #1e1e2f;
    --darker-bg: #2a2a3e;
    --sidebar-bg: #4a4a6a;
}
```

### Modern Orange
```css
:root {
    --primary-color: #f39c12;
    --secondary-color: #2c3e50;
    --dark-bg: #1c1c1c;
    --darker-bg: #2b2b2b;
    --sidebar-bg: #3a3a3a;
}
```

### Elegant Pink
```css
:root {
    --primary-color: #e91e63;
    --secondary-color: #212121;
    --dark-bg: #1a1a1a;
    --darker-bg: #252525;
    --sidebar-bg: #3d3d3d;
}
```

### Tech Green (Default)
```css
:root {
    --primary-color: #40b883;
    --secondary-color: #2c3e50;
    --dark-bg: #1e1e1e;
    --darker-bg: #2a2a2a;
    --sidebar-bg: #3d5a5f;
}
```

## 2. Adding New Portfolio Projects

### Example: Adding Project 7

```html
<div class="col-lg-4 col-md-6 mb-4 portfolio-item" data-category="detailed">
    <div class="portfolio-card">
        <img src="images/portfolio-7.jpg" alt="E-Commerce Platform" class="img-fluid">
        <div class="portfolio-overlay">
            <h4>E-Commerce Platform</h4>
            <p>Web Development</p>
            <a href="images/portfolio-7.jpg" class="portfolio-link">
                <i class="fas fa-search-plus"></i>
            </a>
        </div>
    </div>
</div>
```

### With External Link:

```html
<div class="col-lg-4 col-md-6 mb-4 portfolio-item" data-category="detailed">
    <div class="portfolio-card">
        <img src="images/portfolio-7.jpg" alt="E-Commerce Platform" class="img-fluid">
        <div class="portfolio-overlay">
            <h4>E-Commerce Platform</h4>
            <p>Web Development</p>
            <a href="https://yourproject.com" target="_blank" class="portfolio-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
</div>
```

## 3. Adding New Blog Posts

### Example: Adding Blog Post 5

```html
<div class="col-lg-4 col-md-6 mb-4 blog-item" data-category="design">
    <div class="blog-card">
        <div class="blog-image">
            <img src="images/blog-5.jpg" alt="Responsive Design Tips" class="img-fluid">
            <span class="blog-category">Design</span>
        </div>
        <div class="blog-content">
            <p class="blog-date">
                <i class="far fa-calendar"></i> 15 September, 2026
            </p>
            <h4 class="blog-title">
                <a href="blog-post-5.html">10 Essential Responsive Design Tips</a>
            </h4>
            <p class="blog-excerpt">
                Learn the best practices for creating responsive websites that look great on all devices.
            </p>
            <a href="blog-post-5.html" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</div>
```

## 4. Customizing Skills

### Adding New Skills:

```html
<!-- Design Skills -->
<div class="skill-item">
    <div class="skill-header">
        <span>UI/UX Design</span>
        <span>92%</span>
    </div>
    <div class="progress">
        <div class="progress-bar" style="width: 92%"></div>
    </div>
</div>

<!-- Coding Skills -->
<div class="skill-item">
    <div class="skill-header">
        <span>React.js</span>
        <span>88%</span>
    </div>
    <div class="progress">
        <div class="progress-bar" style="width: 88%"></div>
    </div>
</div>

<!-- New Technology -->
<div class="skill-item">
    <div class="skill-header">
        <span>TypeScript</span>
        <span>85%</span>
    </div>
    <div class="progress">
        <div class="progress-bar" style="width: 85%"></div>
    </div>
</div>
```

## 5. Adding New Timeline Items

### Education Example:

```html
<div class="timeline-item">
    <span class="timeline-date">2015</span>
    <div class="timeline-content">
        <h4>Bachelor's in Computer Science</h4>
        <p class="timeline-company">Stanford University</p>
        <p>
            Graduated with honors, specializing in software engineering and web development.
            Completed thesis on modern JavaScript frameworks and their performance optimization.
        </p>
    </div>
</div>
```

### Experience Example:

```html
<div class="timeline-item">
    <span class="timeline-date">2020 - 2023</span>
    <div class="timeline-content">
        <h4>Full Stack Developer</h4>
        <p class="timeline-company">Microsoft</p>
        <p>
            Developed and maintained enterprise-level web applications using React, Node.js, 
            and Azure cloud services. Led a team of 5 developers on multiple projects.
        </p>
    </div>
</div>
```

## 6. Social Media Icons

### Available Icons (Font Awesome):

```html
<!-- Twitter -->
<a href="https://twitter.com/yourhandle" aria-label="Twitter">
    <i class="fab fa-twitter"></i>
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">
    <i class="fab fa-linkedin-in"></i>
</a>

<!-- GitHub -->
<a href="https://github.com/yourusername" aria-label="GitHub">
    <i class="fab fa-github"></i>
</a>

<!-- Instagram -->
<a href="https://instagram.com/yourhandle" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
</a>

<!-- Facebook -->
<a href="https://facebook.com/yourprofile" aria-label="Facebook">
    <i class="fab fa-facebook-f"></i>
</a>

<!-- Dribbble -->
<a href="https://dribbble.com/yourhandle" aria-label="Dribbble">
    <i class="fab fa-dribbble"></i>
</a>

<!-- Behance -->
<a href="https://behance.net/yourhandle" aria-label="Behance">
    <i class="fab fa-behance"></i>
</a>

<!-- YouTube -->
<a href="https://youtube.com/c/yourchannel" aria-label="YouTube">
    <i class="fab fa-youtube"></i>
</a>

<!-- Medium -->
<a href="https://medium.com/@yourusername" aria-label="Medium">
    <i class="fab fa-medium"></i>
</a>

<!-- CodePen -->
<a href="https://codepen.io/yourhandle" aria-label="CodePen">
    <i class="fab fa-codepen"></i>
</a>

<!-- Stack Overflow -->
<a href="https://stackoverflow.com/users/yourid" aria-label="Stack Overflow">
    <i class="fab fa-stack-overflow"></i>
</a>

<!-- Dev.to -->
<a href="https://dev.to/yourusername" aria-label="Dev.to">
    <i class="fab fa-dev"></i>
</a>
```

## 7. Adding New Sections

### Example: Adding a "Services" Section

```html
<!-- Add to navigation (right-nav) -->
<li><a href="#services" class="nav-link" data-section="services" title="Services">
    <i class="fas fa-concierge-bell"></i>
</a></li>

<!-- Add section content -->
<section id="services" class="section">
    <div class="container-fluid">
        <div class="section-header">
            <h2 class="section-title">Services</h2>
            <p class="section-subtitle">What I Offer</p>
        </div>
        
        <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-card">
                    <i class="fas fa-laptop-code service-icon"></i>
                    <h3>Web Development</h3>
                    <p>Creating responsive and modern websites using latest technologies.</p>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-card">
                    <i class="fas fa-mobile-alt service-icon"></i>
                    <h3>Mobile Apps</h3>
                    <p>Building cross-platform mobile applications for iOS and Android.</p>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-card">
                    <i class="fas fa-paint-brush service-icon"></i>
                    <h3>UI/UX Design</h3>
                    <p>Designing beautiful and intuitive user interfaces and experiences.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Add CSS for Services Section:

```css
.service-card {
    background: var(--darker-bg);
    padding: 40px 30px;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
    border: 2px solid transparent;
    height: 100%;
}

.service-card:hover {
    border-color: var(--primary-color);
    transform: translateY(-10px);
}

.service-icon {
    font-size: 50px;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.service-card h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--text-light);
}

.service-card p {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.8;
}
```

## 8. Custom Fonts

### Using Different Google Fonts:

**Step 1:** Replace font link in `index.html`:

```html
<!-- Replace Poppins with Montserrat -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Step 2:** Update CSS:

```css
body {
    font-family: 'Montserrat', sans-serif;
}
```

### Popular Font Combinations:

```css
/* Modern & Clean */
font-family: 'Inter', sans-serif;

/* Professional */
font-family: 'Roboto', sans-serif;

/* Elegant */
font-family: 'Playfair Display', serif;

/* Creative */
font-family: 'Raleway', sans-serif;

/* Tech/Modern */
font-family: 'Space Grotesk', sans-serif;
```

## 9. Adding Animations

### Custom Animation Example:

```css
/* Add to style.css */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.home-content {
    animation: slideInLeft 0.8s ease-out;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

.home-image img {
    animation: float 3s ease-in-out infinite;
}
```

## 10. Contact Form Backend Integration

### Using Formspree (Easiest):

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
    <input type="text" name="name" placeholder="Full Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="text" name="subject" placeholder="Subject" required>
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

### Using EmailJS (JavaScript):

```javascript
// Add EmailJS script in index.html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// In script.js
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Message sent successfully!');
            contactForm.reset();
        }, function(error) {
            alert('Failed to send message: ' + error);
        });
});
```

## 11. SEO Optimization

### Update Meta Tags in `index.html`:

```html
<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="John Doe - Full Stack Web Developer specializing in React, Node.js, and modern web technologies.">
    <meta name="keywords" content="web developer, full stack, React, Node.js, JavaScript, portfolio">
    <meta name="author" content="John Doe">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourwebsite.com">
    <meta property="og:title" content="John Doe - Web Developer Portfolio">
    <meta property="og:description" content="Explore my portfolio featuring web development projects and professional experience.">
    <meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://yourwebsite.com">
    <meta property="twitter:title" content="John Doe - Web Developer Portfolio">
    <meta property="twitter:description" content="Explore my portfolio featuring web development projects and professional experience.">
    <meta property="twitter:image" content="https://yourwebsite.com/images/og-image.jpg">
    
    <title>John Doe - Web Developer Portfolio</title>
</head>
```

## 12. Performance Optimization Tips

### Optimize Images:
```bash
# Use image compression tools
- TinyPNG (https://tinypng.com)
- Squoosh (https://squoosh.app)
- ImageOptim (Mac)
```

### Minify CSS and JS (for production):
```bash
# Use online tools or build tools
- CSS Minifier: https://cssminifier.com
- JS Minifier: https://javascript-minifier.com
```

### Lazy Load Images:
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

## Need More Help?

Check out:
- Font Awesome Icons: https://fontawesome.com/icons
- Google Fonts: https://fonts.google.com
- Color Palette Generator: https://coolors.co
- CSS Gradient Generator: https://cssgradient.io

---

**Happy Customizing! 🎨**
