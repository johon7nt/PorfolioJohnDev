/**
 * animations.js
 * Handles: scroll reveal, hero entrance, counter animation
 */

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
