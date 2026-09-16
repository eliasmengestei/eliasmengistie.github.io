// ===================================
// Portfolio Website - Navigation JS
// ===================================

document.addEventListener('DOMContentLoaded', function () {

    // --------------------------------------------------
    // 1. LOADING SCREEN
    // --------------------------------------------------
    var loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(function () {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.pointerEvents = 'none';
        }, 600);
    }

    // --------------------------------------------------
    // 2. GRAB ALL NAV LINKS & SECTIONS
    // --------------------------------------------------
    var navLinks = document.querySelectorAll('.right-nav .nav-link');
    var sections = document.querySelectorAll('main .section');
    var sidebar  = document.getElementById('sidebar');

    // Debug: log how many links and sections were found
    console.log('Nav links found:', navLinks.length);
    console.log('Sections found:', sections.length);

    // --------------------------------------------------
    // 3. CORE showSection() FUNCTION with DYNAMIC RANDOM TRANSITIONS
    // --------------------------------------------------
    
    // Array of VERY DRAMATIC transition effects
    var transitions = [
        { name: '⬇️ SLIDE DOWN (from top)', transform: 'translateY(-100px)', duration: '0.8s' },
        { name: '⬆️ SLIDE UP (from bottom)', transform: 'translateY(100px)', duration: '0.8s' },
        { name: '⬅️ SLIDE LEFT (from right)', transform: 'translateX(100px)', duration: '0.8s' },
        { name: '➡️ SLIDE RIGHT (from left)', transform: 'translateX(-100px)', duration: '0.8s' },
        { name: '🔍 ZOOM IN (small to big)', transform: 'scale(0.6)', duration: '0.9s' },
        { name: '🔎 ZOOM OUT (big to small)', transform: 'scale(1.4)', duration: '0.9s' },
        { name: '🔄 ROTATE LEFT + FADE', transform: 'rotate(-20deg) scale(0.8)', duration: '1s' },
        { name: '🔃 ROTATE RIGHT + FADE', transform: 'rotate(20deg) scale(0.8)', duration: '1s' },
        { name: '↙️ DIAGONAL DOWN-LEFT', transform: 'translate(-70px, -70px)', duration: '0.9s' },
        { name: '↘️ DIAGONAL DOWN-RIGHT', transform: 'translate(70px, -70px)', duration: '0.9s' },
        { name: '↖️ DIAGONAL UP-LEFT', transform: 'translate(-70px, 70px)', duration: '0.9s' },
        { name: '↗️ DIAGONAL UP-RIGHT', transform: 'translate(70px, 70px)', duration: '0.9s' },
        { name: '🔄 FLIP HORIZONTAL (3D)', transform: 'rotateY(90deg) scale(0.7)', duration: '1s' },
        { name: '🔄 FLIP VERTICAL (3D)', transform: 'rotateX(90deg) scale(0.7)', duration: '1s' },
        { name: '🌀 TWIST SPIN', transform: 'rotate(180deg) scale(0.5)', duration: '1.1s' },
        { name: '💥 BOUNCE ZOOM', transform: 'scale(0.2)', duration: '1s' }
    ];
    
    function showSection(id) {
        if (!id) id = 'home';

        console.log('═══════════════════════════════════════');
        console.log('🎯 TARGET SECTION:', id.toUpperCase());

        // -- hide all sections immediately --
        sections.forEach(function (sec) {
            sec.classList.remove('active');
            sec.style.display = 'none';
            sec.style.transform = '';
            sec.style.transition = 'none';
            sec.style.opacity = '0';
        });

        // -- de-activate all nav buttons --
        navLinks.forEach(function (a) {
            a.classList.remove('active');
        });

        // -- show target section with RANDOM DYNAMIC transition --
        var target = document.getElementById(id);
        if (target) {
            // Pick a random transition
            var randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
            console.log('🎬 ANIMATION:', randomTransition.name);
            console.log('⏱️ DURATION:', randomTransition.duration);
            
            // Set initial transform state (where animation starts FROM)
            target.style.transform = randomTransition.transform;
            target.style.opacity = '0';
            target.style.display = 'block';
            target.style.transition = 'none';
            
            // Force browser to paint the initial state
            target.offsetHeight; // trigger reflow
            
            // Apply transition and animate TO final state
            setTimeout(function () {
                console.log('✨ ANIMATING NOW...');
                target.style.transition = 'opacity ' + randomTransition.duration + ' cubic-bezier(0.25, 0.46, 0.45, 0.94), ' +
                                         'transform ' + randomTransition.duration + ' cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                target.classList.add('active');
                target.style.transform = 'translate(0, 0) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg)';
                target.style.opacity = '1';
                
                setTimeout(function() {
                    console.log('✅ ANIMATION COMPLETE');
                }, parseFloat(randomTransition.duration) * 1000);
            }, 50);
        } else {
            console.warn('⚠️ Section not found:', id);
            return;
        }

        // -- mark matching nav button active --
        var btn = document.querySelector('.right-nav .nav-link[data-section="' + id + '"]');
        if (btn) {
            btn.classList.add('active');
            console.log('🟢 Nav button activated');
        }

        // -- trigger skill bars when Resume shown --
        if (id === 'resume') {
            setTimeout(function() {
                console.log('📊 Animating skill bars...');
                animateSkillBars();
            }, 700);
        }

        // -- scroll to top --
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // -- close mobile sidebar --
        if (sidebar && window.innerWidth <= 991) {
            closeSidebar();
        }
        
        console.log('═══════════════════════════════════════');
    }

    // --------------------------------------------------
    // 4. WIRE UP EVERY NAV BUTTON
    // --------------------------------------------------
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var id = this.getAttribute('data-section');
            console.log('Nav clicked:', id);
            showSection(id);
            history.pushState(null, '', '#' + id);
        });
    });

    // --------------------------------------------------
    // 5. HERO "Contact" BUTTON  (inside main content)
    // --------------------------------------------------
    var heroContactBtn = document.querySelector('.home-buttons a[href="#contact"]');
    if (heroContactBtn) {
        heroContactBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showSection('contact');
            history.pushState(null, '', '#contact');
        });
    }

    // --------------------------------------------------
    // 6. SIDEBAR "Download CV" – prevent jump if no file
    // --------------------------------------------------
    // (href="assets/cv.pdf" is fine – browser handles download naturally)

    // --------------------------------------------------
    // 7. BROWSER BACK / FORWARD
    // --------------------------------------------------
    window.addEventListener('popstate', function () {
        var hash = window.location.hash.replace('#', '') || 'home';
        showSection(hash);
    });

    // --------------------------------------------------
    // 8. INITIAL LOAD – show section from URL hash
    // --------------------------------------------------
    var initHash = window.location.hash.replace('#', '') || 'home';
    showSection(initHash);

    // --------------------------------------------------
    // 9. MOBILE SIDEBAR TOGGLE + OVERLAY
    // --------------------------------------------------
    var sidebarToggle = document.getElementById('sidebarToggle');

    // Create overlay element dynamically
    var overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    function openSidebar() {
        if (sidebar) sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scroll
    }

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            sidebar.classList.contains('active') ? closeSidebar() : openSidebar();
        });
    }

    // Clicking overlay closes sidebar
    overlay.addEventListener('click', closeSidebar);

    // ESC key closes sidebar
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSidebar();
    });

    // On window resize — close sidebar if switching to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 991) {
            closeSidebar();
        }
    });

    // --------------------------------------------------
    // 10. SKILL BAR ANIMATION
    // --------------------------------------------------
    function animateSkillBars() {
        document.querySelectorAll('.progress-bar').forEach(function (bar) {
            // save target width once
            if (!bar.getAttribute('data-width')) {
                bar.setAttribute('data-width', bar.style.width || '0%');
            }
            bar.style.width = '0%';
            setTimeout(function () {
                bar.style.width = bar.getAttribute('data-width');
            }, 200);
        });
    }

    // --------------------------------------------------
    // 11. PORTFOLIO FILTER
    // --------------------------------------------------
    document.querySelectorAll('.portfolio-filters .filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.portfolio-filters .filter-btn')
                .forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            var filter = this.getAttribute('data-filter');
            document.querySelectorAll('.portfolio-item').forEach(function (item) {
                var cat = item.getAttribute('data-category');
                if (filter === 'all' || cat === filter) {
                    item.classList.remove('portfolio-hidden');
                } else {
                    item.classList.add('portfolio-hidden');
                }
            });
        });
    });

    // --------------------------------------------------
    // 12. BLOG FILTER
    // --------------------------------------------------
    document.querySelectorAll('.blog-filters .filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.blog-filters .filter-btn')
                .forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            var filter = this.getAttribute('data-filter');
            document.querySelectorAll('.blog-item').forEach(function (item) {
                var cat = item.getAttribute('data-category');
                item.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
            });
        });
    });

    // --------------------------------------------------
    // 13. CONTACT FORM – validation + real email via FormSubmit
    // --------------------------------------------------
    var FORM_ENDPOINT = 'https://formsubmit.co/ajax/mengesteielias7@gmail.com';

    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var isValid = true;

            var fullname = document.getElementById('fullname');
            var email    = document.getElementById('email');
            var subject  = document.getElementById('subject');
            var message  = document.getElementById('message');
            var inputs   = [fullname, email, subject, message];

            // Clear previous errors
            inputs.forEach(function (input) { input.classList.remove('is-invalid'); });

            // Validate
            if (!fullname.value.trim()) { fullname.classList.add('is-invalid'); isValid = false; }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                email.classList.add('is-invalid'); isValid = false;
            }

            if (!subject.value.trim()) { subject.classList.add('is-invalid'); isValid = false; }
            if (!message.value.trim()) { message.classList.add('is-invalid'); isValid = false; }

            if (!isValid) {
                var firstError = contactForm.querySelector('.is-invalid');
                if (firstError) { firstError.scrollIntoView({ behavior: 'smooth', block: 'center' }); firstError.focus(); }
                return;
            }

            // Send button loading state
            var submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';

            // Send to FormSubmit
            fetch(FORM_ENDPOINT, {
                method:  'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body:    JSON.stringify({
                    name:    fullname.value.trim(),
                    email:   email.value.trim(),
                    subject: subject.value.trim(),
                    message: message.value.trim(),
                    _subject: 'Portfolio message: ' + subject.value.trim(),
                    _template: 'table',
                    _honey: ''
                })
            })
            .then(function (response) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> Send Message';

                if (response.ok) {
                    showToast('✅ Message sent! I will get back to you soon.');
                    contactForm.reset();
                    inputs.forEach(function (input) { input.classList.remove('is-invalid'); });
                } else {
                    showToast('❌ Something went wrong. Please email me directly at mengesteielias7@gmail.com');
                }
            })
            .catch(function () {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> Send Message';
                showToast('❌ Network error. Please email me directly at mengesteielias7@gmail.com');
            });
        });

        // Remove validation error on input
        ['fullname', 'email', 'subject', 'message'].forEach(function (fieldId) {
            var field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('input', function () { this.classList.remove('is-invalid'); });
            }
        });
    }

    function showToast(msg) {
        var toast = document.getElementById('portfolioToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'portfolioToast';
            toast.style.cssText =
                'position:fixed;bottom:30px;right:30px;' +
                'background:#40b883;color:#fff;padding:14px 22px;' +
                'border-radius:8px;font-size:14px;font-weight:600;' +
                'z-index:99999;opacity:0;transition:opacity .4s ease;' +
                'box-shadow:0 4px 20px rgba(0,0,0,.35);pointer-events:none;';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.style.opacity = '1';
        setTimeout(function () { toast.style.opacity = '0'; }, 3500);
    }

    // --------------------------------------------------
    // 14. TYPING ANIMATION - loops forever
    // --------------------------------------------------
    var subtitleEl = document.querySelector('.home-content .subtitle');
    if (subtitleEl) {
        var title      = 'Full Stack Developer';
        var cIdx       = 0;
        var deleting   = false;

        // Blinking cursor
        subtitleEl.style.borderRight  = '2px solid #40b883';
        subtitleEl.style.paddingRight = '4px';
        subtitleEl.textContent        = '';

        function loop() {
            if (!deleting) {
                // Typing forward
                subtitleEl.textContent = title.substring(0, cIdx + 1);
                cIdx++;
                if (cIdx === title.length) {
                    // Finished typing → pause 2s then start deleting
                    deleting = true;
                    setTimeout(loop, 2000);
                    return;
                }
                setTimeout(loop, 100); // typing speed
            } else {
                // Deleting backward
                subtitleEl.textContent = title.substring(0, cIdx - 1);
                cIdx--;
                if (cIdx === 0) {
                    // Finished deleting → pause 0.5s then start typing again
                    deleting = false;
                    setTimeout(loop, 500);
                    return;
                }
                setTimeout(loop, 60); // deleting speed (faster)
            }
        }

        // Start after 800ms
        setTimeout(loop, 800);
    }

    // --------------------------------------------------
    // 15. COUNTER ANIMATION (stats)
    // --------------------------------------------------
    var statsRow = document.querySelector('.stats-row');
    if (statsRow) {
        var counted = false;
        var obs = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting && !counted) {
                counted = true;
                document.querySelectorAll('.stat-number').forEach(function (el) {
                    var target = parseInt(el.textContent);
                    var start  = 0;
                    var step   = target / (2000 / 16);
                    var t = setInterval(function () {
                        start += step;
                        if (start >= target) { el.textContent = target + '+'; clearInterval(t); }
                        else el.textContent = Math.floor(start) + '+';
                    }, 16);
                });
                obs.disconnect();
            }
        }, { threshold: 0.4 });
        obs.observe(statsRow);
    }

    console.log('%c Portfolio ready!', 'color:#40b883;font-weight:bold;font-size:14px;');
});
