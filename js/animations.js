/**
 * animations.js
 * Handles: scroll reveal, hero entrance, counter animation,
 * scroll progress, cursor glow, spotlight cards, 3D tilt,
 * magnetic buttons, background parallax
 */

// Capacidades del dispositivo — los efectos de puntero solo corren
// en desktop con mouse y respetando prefers-reduced-motion
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER   = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// ── Hero entrance ──────────────────────────────────────────────────────────
(function initHeroAnimation() {
    // Trigger hero animations after paint
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => document.body.classList.add('loaded'));
        });
    } else {
        requestAnimationFrame(() => document.body.classList.add('loaded'));
    }
})();


// ── Scroll reveal via IntersectionObserver ─────────────────────────────────
(function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');

    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px',
        }
    );

    revealEls.forEach((el) => observer.observe(el));
})();


// ── Animated counter ───────────────────────────────────────────────────────
(function initCounters() {
    const counters = document.querySelectorAll('.counter');

    if (!counters.length) return;

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1400;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.round(easeOut(progress) * target);
            el.textContent = value;
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
})();


// ── Scroll progress bar ────────────────────────────────────────────────────
(function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    let ticking = false;

    function update() {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? Math.min(doc.scrollTop / max, 1) : 0;
        bar.style.transform = `scaleX(${p})`;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }, { passive: true });

    update();
})();


// ── Cursor glow (aura que sigue al mouse con inercia) ─────────────────────
(function initCursorGlow() {
    if (!FINE_POINTER || REDUCED_MOTION) return;

    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let x = tx, y = ty;

    document.addEventListener('mousemove', (e) => {
        tx = e.clientX;
        ty = e.clientY;
    }, { passive: true });

    (function loop() {
        x += (tx - x) * 0.09;
        y += (ty - y) * 0.09;
        glow.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        requestAnimationFrame(loop);
    })();
})();


// ── Spotlight en glass cards (radial que sigue al mouse) ──────────────────
(function initCardSpotlight() {
    if (!FINE_POINTER) return;

    const cards = document.querySelectorAll(
        '.service-card, .project-card, .faq-item, .stack-item, .contact-form, .contact-info-card'
    );

    cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        }, { passive: true });
    });
})();


// ── 3D tilt en cards de proyectos y servicios ─────────────────────────────
(function initTilt() {
    if (!FINE_POINTER || REDUCED_MOTION) return;

    const MAX_X = 5;   // rotateX máx (deg)
    const MAX_Y = 7;   // rotateY máx (deg)

    document.querySelectorAll('.project-card, .service-card').forEach((el) => {
        const lift = el.classList.contains('project-card') ? -8 : -6;
        let raf = null;

        el.addEventListener('mousemove', (e) => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                const r = el.getBoundingClientRect();
                const px = Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5));
                const py = Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5));
                el.style.transform =
                    `perspective(900px) rotateX(${(-py * MAX_X).toFixed(2)}deg) ` +
                    `rotateY(${(px * MAX_Y).toFixed(2)}deg) translateY(${lift}px)`;
                raf = null;
            });
        });

        el.addEventListener('mouseleave', () => {
            if (raf) { cancelAnimationFrame(raf); raf = null; }
            el.style.transform = '';
        });
    });
})();


// ── Botones magnéticos (se acercan sutilmente al cursor) ──────────────────
(function initMagneticButtons() {
    if (!FINE_POINTER || REDUCED_MOTION) return;

    const STRENGTH = 0.22;
    const MAX_PULL = 6; // px

    document.querySelectorAll('.btn').forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const r = btn.getBoundingClientRect();
            const dx = Math.max(-MAX_PULL, Math.min(MAX_PULL, (e.clientX - r.left - r.width / 2) * STRENGTH));
            const dy = Math.max(-MAX_PULL, Math.min(MAX_PULL, (e.clientY - r.top - r.height / 2) * STRENGTH));
            btn.style.transform = `translate(${dx.toFixed(1)}px, ${(dy - 2).toFixed(1)}px)`;
        }, { passive: true });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
})();


// ── Tarjeta brillante "Quién Soy" (tilt 3D + brillo + holográfico) ─────────
(function initAboutCardHolo() {
    if (!FINE_POINTER || REDUCED_MOTION) return;

    const card = document.getElementById('about-card');
    const tilt = document.getElementById('about-card-tilt');
    if (!card || !tilt) return;

    const MAX_ROT = 8; // deg

    card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
        const py = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));

        const rotY = (px - 0.5) * MAX_ROT * 2;
        const rotX = -(py - 0.5) * MAX_ROT * 2;

        tilt.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
        tilt.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
        tilt.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
        tilt.classList.add('is-active');
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
        tilt.classList.remove('is-active');
        tilt.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
})();


// ── Hero: se desvanece y desplaza al scrollear (estilo apple.com) ──────────
(function initHeroScrollFade() {
    if (REDUCED_MOTION) return;

    const heroContent = document.querySelector('.hero-container');
    if (!heroContent) return;

    let raf = null;

    window.addEventListener('scroll', () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
            const y = window.scrollY;
            const vh = window.innerHeight;
            if (y <= vh) {
                heroContent.style.opacity = Math.max(0, 1 - y / (vh * 0.85)).toFixed(3);
                heroContent.style.transform = `translateY(${(y * 0.18).toFixed(1)}px)`;
            }
            raf = null;
        });
    }, { passive: true });
})();


// ── Parallax sutil del fondo global con el mouse ───────────────────────────
(function initBgParallax() {
    if (!FINE_POINTER || REDUCED_MOTION) return;

    const bg = document.getElementById('global-bg');
    if (!bg) return;

    let raf = null;

    document.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
            const dx = (e.clientX / window.innerWidth - 0.5) * -22;
            const dy = (e.clientY / window.innerHeight - 0.5) * -14;
            bg.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
            raf = null;
        });
    }, { passive: true });
})();


// ── Navbar active link highlight on scroll ─────────────────────────────────
(function initActiveLinkHighlight() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.toggle(
                            'active',
                            link.getAttribute('href') === `#${entry.target.id}`
                        );
                    });
                }
            });
        },
        { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
})();
