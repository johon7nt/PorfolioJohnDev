/**
 * main.js
 * Handles: navbar scroll, hamburger menu, FAQ accordion, project modal, contact form
 */

'use strict';

// ── Project data ────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        title: 'Le Papillon Peluquerías',
        title_en: 'Le Papillon Hair Salon',
        description: 'Un proyecto enfocado en trasladar la sofisticación del salón al entorno digital. Diseñado en Figma y desarrollado en WordPress + Elementor Pro, logramos una interfaz minimalista de estética refinada. La paleta de tonos pastel y la tipografía fina reflejan la elegancia y el cuidado al detalle que definen a la marca.',
        description_en: 'A project focused on bringing the salon\'s sophistication to the digital world. Designed in Figma and built with WordPress + Elementor Pro, we achieved a minimalist interface with a refined aesthetic. The pastel palette and fine typography reflect the elegance and attention to detail that define the brand.',
        tags: ['WordPress', 'Figma', 'Elementor'],
        imgSrc: 'images/CapturaLePapillon.png',
        challenges: `
            <div class="ch-block">
                <p class="ch-block-title">Diseño &amp; Concepto</p>
                <p>El objetivo era trasladar la <strong class="ch-mark">sofisticación del salón</strong> al mundo digital. Usé <strong class="ch-mark">Figma</strong> para prototipar una experiencia fluida, priorizando los espacios en blanco y una jerarquía visual clara. La dirección de arte giró en torno a un enfoque <strong class="ch-mark">minimalista</strong>: tonos pastel y líneas finas que transmiten calma y elegancia desde el primer scroll.</p>
            </div>
            <div class="ch-block">
                <p class="ch-block-title">Implementación Técnica</p>
                <p>El desarrollo sobre <strong class="ch-mark">WordPress + Elementor Pro</strong> permitió una personalización total sin sacrificar el rendimiento. El resultado es un sitio <strong class="ch-mark">totalmente responsive</strong> y fácil de gestionar, para que el cliente mantenga su comunicación actualizada de forma completamente autónoma.</p>
            </div>`,
        challenges_en: `
            <div class="ch-block">
                <p class="ch-block-title">Design &amp; Concept</p>
                <p>The goal was to bring the <strong class="ch-mark">salon's sophistication</strong> to the digital world. I used <strong class="ch-mark">Figma</strong> to prototype a fluid experience, prioritizing white space and a clear visual hierarchy. The art direction centered on a <strong class="ch-mark">minimalist</strong> approach: pastel tones and fine lines that convey calm and elegance from the first scroll.</p>
            </div>
            <div class="ch-block">
                <p class="ch-block-title">Technical Implementation</p>
                <p>Development on <strong class="ch-mark">WordPress + Elementor Pro</strong> allowed full customization without sacrificing performance. The result is a <strong class="ch-mark">fully responsive</strong> site that's easy to manage, letting the client keep their content updated completely on their own.</p>
            </div>`,
        live: 'https://lepapillonpeluquerias.com/',
    },
    {
        title: 'The Park Estudio',
        title_en: 'The Park Studio',
        description: 'Un desarrollo con una estética urbana y disruptiva, donde el negro y el verde eléctrico dominan la escena. Implementé una solución robusta utilizando WordPress, WooCommerce y FooEvents, permitiendo la gestión técnica de clases y eventos en tiempo real. Un sitio que refleja la fuerza y la rebeldía del estudio con un rendimiento optimizado.',
        description_en: 'A development with an urban and disruptive aesthetic, where deep blacks and electric greens dominate the scene. I implemented a robust solution using WordPress, WooCommerce, and FooEvents, enabling real-time technical management of classes and events. A site that reflects the studio\'s strength and rebellious spirit with optimized performance.',
        tags: ['Wordpress', 'Elementor', 'WooCommerce', 'FooEvents', 'PHP'],
        imgSrc: 'images/CapturaThePark.png',
        challenges: `
            <div class="ch-block">
                <p class="ch-block-title">Concepto Visual</p>
                <p>No era solo diseñar una web, sino construir una <strong class="ch-mark">plataforma de alta performance</strong> para un estudio de danza. La paleta de <strong class="ch-mark">negros profundos y verdes vibrantes</strong> rompe con lo tradicional, evocando la energía rebelde y urbana que define a sus bailarines. Tipografías de alto contraste y composiciones que guían al usuario desde la inspiración hasta la acción.</p>
            </div>
            <div class="ch-block">
                <p class="ch-block-title">Arquitectura Técnica</p>
                <p>Este proyecto exigió una integración compleja: <strong class="ch-mark">WooCommerce + FooEvents</strong> para automatizar la venta de pases y reserva de clases con un checkout impecable. Sumé <strong class="ch-mark">PHP a medida</strong> para extender las funcionalidades del core, logrando una herramienta que no solo impacta visualmente, sino que gestiona el negocio de forma eficiente y escalable.</p>
            </div>`,
        challenges_en: `
            <div class="ch-block">
                <p class="ch-block-title">Visual Concept</p>
                <p>This wasn't just about designing a website — it was about building a <strong class="ch-mark">high-performance platform</strong> for a dance studio. The palette of <strong class="ch-mark">deep blacks and vibrant greens</strong> breaks with tradition, evoking the rebellious urban energy that defines its dancers. High-contrast typography and layouts guiding users from inspiration to action.</p>
            </div>
            <div class="ch-block">
                <p class="ch-block-title">Technical Architecture</p>
                <p>This project demanded complex integration: <strong class="ch-mark">WooCommerce + FooEvents</strong> to automate class pass sales and reservations with a flawless checkout. I added <strong class="ch-mark">custom PHP</strong> to extend core functionality, creating a tool that not only makes a visual impact but manages the business efficiently and scalably.</p>
            </div>`,
        live: 'https://estudiothepark.com/',
    },
    {
        title: 'Uno7Street',
        title_en: 'Uno7Street',
        description: 'Un proyecto de identidad visual pura. Configuré la tienda online sobre la plataforma Empretienda, centrando el impacto en una estética GRUNGE, urbana y rebelde. Me encargué íntegramente de la edición del producto y el diseño del banner principal, logrando una coherencia visual que respira la esencia "street" de la marca.',
        description_en: 'A pure visual identity project. I set up the online store on the Empretienda platform, focusing the impact on a GRUNGE, urban and rebellious aesthetic. I was fully responsible for product editing and the design of the main banner, achieving visual coherence that breathes the "street" essence of the brand.',
        tags: ['Empretienda', 'Figma', 'Edición Audiovisual'],
        imgSrc: 'images/CapturaUno7Street.png',
        challenges: `
            <div class="ch-block">
                <p class="ch-block-title">Producción Visual</p>
                <p>El desafío fue transformar una tienda estándar en una <strong class="ch-mark">experiencia de marca auténtica</strong>. Mi rol fue integral: edición de producto buscando ángulos y contrastes que resalten texturas y diseño de prendas, más el <strong class="ch-mark">banner principal</strong> como pieza central que establece el tono visual GRUNGE desde el primer segundo.</p>
            </div>
            <div class="ch-block">
                <p class="ch-block-title">Plataforma &amp; Optimización</p>
                <p>Trabajé sobre <strong class="ch-mark">Empretienda</strong> optimizando cada recurso visual para que el sitio cargue rápido sin perder calidad ni impacto estético. Un proyecto que demuestra que <strong class="ch-mark">tecnología e identidad visual</strong> pueden trabajar juntas para potenciar un negocio de punta a punta.</p>
            </div>`,
        challenges_en: `
            <div class="ch-block">
                <p class="ch-block-title">Visual Production</p>
                <p>The challenge was transforming a standard store into an <strong class="ch-mark">authentic brand experience</strong>. My role was integral: product editing to find angles and contrasts that highlight textures and garment design, plus the <strong class="ch-mark">main banner</strong> as the central piece that establishes the GRUNGE visual tone from the first second.</p>
            </div>
            <div class="ch-block">
                <p class="ch-block-title">Platform &amp; Optimization</p>
                <p>I worked on <strong class="ch-mark">Empretienda</strong>, optimizing every visual resource so the site loads fast without losing quality or aesthetic impact. A project that proves <strong class="ch-mark">technology and visual identity</strong> can work together to power a business end to end.</p>
            </div>`,
        live: 'https://uno7street.empretienda.com.ar/',
    },
    {
        title: 'TomixVisuals',
        title_en: 'TomixVisuals',
        description: 'Mi mayor desafío técnico y creativo hasta la fecha. Una plataforma desarrollada con React que lleva el diseño minimalista al siguiente nivel. Logré una experiencia sumamente balanceada, fusionando una estética elegante con una navegación intuitiva que puso a prueba mis límites en lógica de componentes y precisión visual.',
        description_en: 'My greatest technical and creative challenge to date. A platform built with React that takes minimalist design to the next level. I achieved an exceptionally balanced experience, merging an elegant aesthetic with intuitive navigation that pushed my limits in component logic and visual precision.',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'],
        imgSrc: 'images/CapturaTomixVisuals.png',
        challenges: `
            <div class="ch-block">
                <p class="ch-block-title">El Desafío Técnico</p>
                <p>Fue el proyecto que puso al límite mis conocimientos. Usé <strong class="ch-mark">React</strong> para construir una arquitectura modular con transiciones suaves e interactividad fluida. Cada línea de CSS y cada función JS fue escrita para mantener la <strong class="ch-mark">elegancia sin comprometer el rendimiento</strong>, enfrentando retos de maquetación que exigieron precisión de píxel.</p>
            </div>
            <div class="ch-block">
                <p class="ch-block-title">Filosofía de Diseño</p>
                <p>Prototipado en <strong class="ch-mark">Figma</strong>, el sitio sigue una línea minimalista donde <em>"menos es más"</em>. El resultado es una experiencia donde la <strong class="ch-mark">estética sofisticada</strong> guía al visitante de forma natural, demostrando que la complejidad técnica puede traducirse en una interfaz simple, potente y equilibrada.</p>
            </div>`,
        challenges_en: `
            <div class="ch-block">
                <p class="ch-block-title">The Technical Challenge</p>
                <p>This project pushed my knowledge to the limit. I used <strong class="ch-mark">React</strong> to build a modular architecture with smooth transitions and fluid interactivity. Every line of CSS and every JS function was written to maintain <strong class="ch-mark">elegance without compromising performance</strong>, facing layout challenges that required pixel-perfect precision.</p>
            </div>
            <div class="ch-block">
                <p class="ch-block-title">Design Philosophy</p>
                <p>Prototyped in <strong class="ch-mark">Figma</strong>, the site follows a minimalist line where <em>"less is more"</em>. The result is an experience where <strong class="ch-mark">sophisticated aesthetics</strong> guide visitors naturally, proving that technical complexity can be translated into a simple, powerful, and balanced interface.</p>
            </div>`,
        live: 'https://tomixvisuals.vercel.app/',
    },
];

// ── Navbar ──────────────────────────────────────────────────────────────────
(function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;

    function onScroll() {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 40);
        lastScroll = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Smooth scroll for all in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });

            // Close mobile menu if open
            closeMobileMenu();
        });
    });
})();


// ── Hamburger / Mobile menu ─────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
}

(function initHamburger() {
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
        mobileMenu.classList.toggle('open', isOpen);
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });
})();


// ── FAQ Accordion ───────────────────────────────────────────────────────────
(function initFAQ() {
    const faqBtns = document.querySelectorAll('.faq-btn');

    faqBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const answerId = btn.getAttribute('aria-controls');
            const answer = document.getElementById(answerId);

            // Collapse all others
            faqBtns.forEach((other) => {
                if (other !== btn) {
                    other.setAttribute('aria-expanded', 'false');
                    const otherId = other.getAttribute('aria-controls');
                    const otherAnswer = document.getElementById(otherId);
                    if (otherAnswer) otherAnswer.classList.remove('open');
                }
            });

            // Toggle current
            btn.setAttribute('aria-expanded', String(!isExpanded));
            if (answer) answer.classList.toggle('open', !isExpanded);
        });
    });
})();


// ── Project Modal ───────────────────────────────────────────────────────────
const modalOverlay  = document.getElementById('modal-overlay');
const modalClose    = document.getElementById('modal-close');
const modalImg      = document.getElementById('modal-img');
const modalTitle    = document.getElementById('modal-title');
const modalDesc     = document.getElementById('modal-desc');
const modalTags     = document.getElementById('modal-tags');
const modalChall    = document.getElementById('modal-challenges');
const modalLive     = document.getElementById('modal-live');

let previouslyFocused = null;

window.openModal = function openModal(index) {
    const project = PROJECTS[index];
    if (!project || !modalOverlay) return;

    // Populate content
    modalImg.className = 'modal-img';
    modalImg.style.backgroundImage = `url('${project.imgSrc}')`;
    modalImg.style.backgroundSize = 'cover';
    modalImg.style.backgroundPosition = 'center top';
    const en = window.currentLang === 'en';
    modalTitle.textContent = en && project.title_en ? project.title_en : project.title;
    modalDesc.textContent  = en && project.description_en ? project.description_en : project.description;
    modalChall.innerHTML   = en && project.challenges_en ? project.challenges_en : project.challenges;

    modalTags.innerHTML = project.tags
        .map((t) => `<span>${t}</span>`)
        .join('');

    modalLive.href = project.live;

    // Open
    previouslyFocused = document.activeElement;
    modalOverlay.removeAttribute('aria-hidden');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus the close button
    requestAnimationFrame(() => modalClose.focus());
};

function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previouslyFocused) previouslyFocused.focus();
}

(function initModal() {
    if (!modalOverlay) return;

    modalClose?.addEventListener('click', closeModal);

    // Close on backdrop click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
            closeModal();
        }
    });

    // Focus trap inside modal
    modalOverlay.addEventListener('keydown', trapFocus);
})();

function trapFocus(e) {
    if (e.key !== 'Tab' || !modalOverlay.classList.contains('open')) return;
    const focusable = modalOverlay.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
}


// ── Services Carousel (infinite loop) ───────────────────────────────────────
(function initServicesCarousel() {
    const track    = document.getElementById('svc-track');
    const prevBtn  = document.getElementById('svc-prev');
    const nextBtn  = document.getElementById('svc-next');
    const dotsEl   = document.getElementById('svc-dots');
    const viewport = document.querySelector('.svc-viewport');

    if (!track || !viewport) return;

    const origSlides = Array.from(track.querySelectorAll('.svc-slide'));
    const TOTAL  = origSlides.length; // 6
    const BUFFER = 3;                 // clones on each side
    let current  = BUFFER;            // points to real slide 0

    // ── Build buffer clones ─────────────────────────────────────────────────
    (function buildClones() {
        for (let i = BUFFER - 1; i >= 0; i--) {
            const clone = origSlides[TOTAL - BUFFER + i].cloneNode(true);
            clone.classList.add('svc-clone');
            clone.classList.remove('is-active');
            clone.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
            track.insertBefore(clone, track.firstElementChild);
        }
        for (let i = 0; i < BUFFER; i++) {
            const clone = origSlides[i].cloneNode(true);
            clone.classList.add('svc-clone');
            clone.classList.remove('is-active');
            clone.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
            track.appendChild(clone);
        }
    })();

    // ── Helpers ─────────────────────────────────────────────────────────────
    function allSlides()      { return Array.from(track.querySelectorAll('.svc-slide')); }
    function inCarouselMode() { return window.innerWidth <= 1024; }
    function visibleCount()   { return window.innerWidth > 768 ? 3 : 1; }
    function realIndex()      { return ((current - BUFFER) % TOTAL + TOTAL) % TOTAL; }

    function computeOffset(idx) {
        const count  = visibleCount();
        const slideW = viewport.offsetWidth / count;
        return count === 3 ? (1 - idx) * slideW : -idx * slideW;
    }

    // ── Dots ────────────────────────────────────────────────────────────────
    function buildDots() {
        dotsEl.innerHTML = '';
        for (let i = 0; i < TOTAL; i++) {
            const btn = document.createElement('button');
            btn.className = 'svc-dot' + (i === 0 ? ' is-active' : '');
            btn.setAttribute('aria-label', `Servicio ${i + 1}`);
            btn.addEventListener('click', () => goTo(BUFFER + i));
            dotsEl.appendChild(btn);
        }
    }

    function syncDots() {
        const ri = realIndex();
        dotsEl.querySelectorAll('.svc-dot').forEach((d, i) => d.classList.toggle('is-active', i === ri));
    }

    function syncSlides() {
        allSlides().forEach((s, i) => s.classList.toggle('is-active', i === current));
    }

    // ── Position ─────────────────────────────────────────────────────────────
    function applyPosition() {
        track.style.transform = `translateX(${computeOffset(current)}px)`;
    }

    // Instant jump without animation (for infinite wrap-around)
    function jumpTo(idx) {
        track.style.transition = 'none';
        current = idx;
        track.style.transform = `translateX(${computeOffset(current)}px)`;
        syncSlides();
        track.getBoundingClientRect(); // force reflow
        requestAnimationFrame(() => { track.style.transition = ''; });
        syncDots();
    }

    function goTo(idx) {
        current = idx;
        applyPosition();
        syncSlides();
        syncDots();
    }

    // After each animated transition, wrap if we're on a clone
    track.addEventListener('transitionend', e => {
        if (e.propertyName !== 'transform') return;
        if (current < BUFFER)               jumpTo(current + TOTAL);
        else if (current >= BUFFER + TOTAL) jumpTo(current - TOTAL);
    });

    // ── Setup / resize ────────────────────────────────────────────────────────
    function setup() {
        if (!inCarouselMode()) {
            track.style.transform = '';
            track.style.transition = '';
            current = BUFFER;
            syncSlides();
            return;
        }
        buildDots();
        jumpTo(BUFFER);
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Touch swipe
    let tx = 0;
    viewport.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener('touchend',   e => {
        const dx = tx - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 48) goTo(dx > 0 ? current + 1 : current - 1);
    }, { passive: true });

    setup();

    let rTimer;
    window.addEventListener('resize', () => { clearTimeout(rTimer); rTimer = setTimeout(setup, 150); });
})();


// ── Contact Form ─────────────────────────────────────────────────────────────
(function initContactForm() {
    const form      = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const success   = document.getElementById('form-success');

    if (!form) return;

    // Validation rules
    const rules = {
        name:    { required: true, minLength: 2, label: 'El nombre' },
        email:   { required: true, isEmail: true, label: 'El email' },
        mensaje: { required: true, minLength: 10, label: 'El mensaje' },
    };

    function getError(id, value) {
        const rule = rules[id];
        if (!rule) return '';

        const trimmed = value.trim();

        if (rule.required && !trimmed)
            return `${rule.label} es requerido.`;

        if (rule.minLength && trimmed.length < rule.minLength)
            return `${rule.label} debe tener al menos ${rule.minLength} caracteres.`;

        if (rule.isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
            return 'Ingresá un email válido.';

        return '';
    }

    function showError(input, message) {
        const errEl = document.getElementById(`${input.id}-err`);
        input.classList.toggle('error', !!message);
        if (errEl) errEl.textContent = message;
    }

    function clearError(input) {
        showError(input, '');
    }

    // Validate on blur
    ['name', 'email', 'mensaje'].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.addEventListener('blur', () => {
            showError(el, getError(id, el.value));
        });

        el.addEventListener('input', () => {
            if (el.classList.contains('error')) clearError(el);
        });
    });

    // Submit
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isValid = true;

        ['name', 'email', 'mensaje'].forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const err = getError(id, el.value);
            showError(el, err);
            if (err) isValid = false;
        });

        if (!isValid) return;

        // Loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
            const data = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });

            const json = await response.json();

            if (response.ok && json.success) {
                form.reset();
                if (success) {
                    success.removeAttribute('hidden');
                    success.focus();
                }
            } else {
                throw new Error('Server error');
            }
        } catch {
            alert('Hubo un error al enviar el mensaje. Por favor intentá de nuevo o escribinos por WhatsApp.');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
})();
