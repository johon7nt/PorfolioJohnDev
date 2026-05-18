/**
 * main.js
 * Handles: navbar scroll, hamburger menu, FAQ accordion, project modal, contact form
 */

'use strict';

// ── Project data ────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        title: 'Le Papillon Peluquerías',
        description:
            'Un proyecto enfocado en trasladar la sofisticación del salón al entorno digital. Diseñado en Figma y desarrollado en WordPress + Elementor Pro, logramos una interfaz minimalista de estética refinada. La paleta de tonos pastel y la tipografía fina reflejan la elegancia y el cuidado al detalle que definen a la marca.',
        tags: ['WordPress', 'Figma', 'Elementor'],
        imgSrc: 'images/CapturaLePapillon.png',
        challenges:
            'Le Papillon consistió en crear una presencia online que estuviera a la altura de su servicio premium. El objetivo era claro: una web que no solo informara, sino que hiciera sentir al usuario la atmósfera del salón antes de visitarlo. Diseño y Concepto: Utilicé Figma para prototipar una experiencia de usuario fluida, priorizando los espacios en blanco y una jerarquía visual clara. La dirección de arte se centró en un enfoque minimalista, utilizando una paleta de tonos pastel y líneas finas que aportan una sensación de calma y profesionalismo. Implementación Técnica: El desarrollo se realizó sobre WordPress, utilizando Elementor Pro para lograr una personalización total del diseño sin sacrificar el rendimiento. El resultado es un sitio visualmente impactante, totalmente responsive y fácil de gestionar para el cliente, permitiendo que la marca mantenga su comunicación actualizada con facilidad.',
        live: 'https://lepapillonpeluquerias.com/',
    },
    {
        title: 'The Park Estudio',
        description:
            'Un desarrollo con una estética urbana y disruptiva, donde el negro y el verde eléctrico dominan la escena. Implementé una solución robusta utilizando WordPress, WooCommerce y FooEvents, permitiendo la gestión técnica de clases y eventos en tiempo real. Un sitio que refleja la fuerza y la rebeldía del estudio con un rendimiento optimizado.',
        tags: ['Wordpress', 'Elementor', 'WooCommerce', 'FooEvents', 'PHP'],
        imgSrc: 'images/CapturaThePark.png',
        challenges:
            'Para The Park, el objetivo no era solo diseñar una web, sino construir una plataforma operativa para un estudio de danza de alta performance. El concepto visual rompe con lo tradicional, utilizando una paleta de negros profundos y verdes vibrantes para transmitir esa esencia rebelde y urbana que caracteriza a sus bailarines. Diseño y Concepto: > La interfaz fue diseñada para impactar desde el primer segundo. Utilicé tipografías con peso y contrastes altos para evocar fuerza. Cada sección fue pensada para guiar al usuario desde la inspiración visual hasta la acción directa, manteniendo siempre una estética "street" y profesional. Implementación Técnica: > Este proyecto demandó una arquitectura compleja. Integré WooCommerce con FooEvents para automatizar la venta de pases y la reserva de clases, asegurando un flujo de checkout impecable. Además, utilicé PHP para realizar ajustes a medida en las funcionalidades del core, logrando una herramienta que no solo se ve potente, sino que gestiona el negocio de forma eficiente y escalable.',
        live: 'https://estudiothepark.com/',
    },
    {
        title: 'Uno7Street',
        description:
            'Un proyecto de identidad visual pura. Configuré la tienda online sobre la plataforma Empretienda, centrando el impacto en una estética GRUNGE, urbana y rebelde. Me encargué íntegramente de la edición del producto y el diseño del banner principal, logrando una coherencia visual que respira la esencia "street" de la marca.',
        tags: ['Empretienda', 'Figma', 'Edición Audiovisual'],
        imgSrc: 'images/CapturaUno7Street.png',
        challenges:
            'Para Uno7Street, el desafío fue transformar una tienda online estándar en una experiencia de marca auténtica. Al ser una marca de indumentaria urbana, la clave no estaba solo en la funcionalidad, sino en transmitir una actitud rebelde y un estilo GRUNGE que conecte con su audiencia. Producción Visual: Mi rol fue integral. Realicé la edición de producto, buscando ángulos y contrastes que resaltaran las texturas y el diseño de las prendas. También diseñé el banner principal, actuando como la pieza central de comunicación que establece el tono visual desde el primer segundo. Implementación en Empretienda: Utilicé la plataforma Empretienda como base, optimizando cada recurso visual para que el sitio cargue rápido sin perder calidad. Este proyecto demuestra mi capacidad para manejar la identidad visual de punta a punta, asegurando que la tecnología y la imagen trabajen juntas para potenciar el negocio.',
        live: 'https://uno7street.empretienda.com.ar/',
    },
    {
        title: 'TomixVisuals',
        description:
            'Mi mayor desafío técnico y creativo hasta la fecha. Una plataforma desarrollada con React que lleva el diseño minimalista al siguiente nivel. Logré una experiencia sumamente balanceada, fusionando una estética elegante con una navegación intuitiva que puso a prueba mis límites en lógica de componentes y precisión visual.',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'],
        imgSrc: 'images/CapturaTomixVisuals.png',
        challenges:
            'Tomix Visuals no fue solo un encargo, fue un laboratorio personal de experimentación. Este proyecto representa la culminación de un proceso intenso donde el objetivo era lograr un balance absoluto entre el impacto visual y la usabilidad intuitiva. El Desafío Técnico: Fue el proyecto que puso al límite mis conocimientos. Utilicé React para construir una arquitectura modular que permitiera transiciones suaves y una interactividad fluida. Cada línea de CSS y cada función de JS fue escrita con el propósito de mantener la elegancia sin comprometer el rendimiento, enfrentando retos de maquetación que exigieron una precisión de píxel. Filosofía de Diseño: Prototipado en Figma, el sitio sigue una línea minimalista donde "menos es más". El resultado es una experiencia de usuario donde la estética sofisticada guía al visitante de forma natural, demostrando que la complejidad técnica puede traducirse en una interfaz simple, potente y equilibrada.',
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
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalChall.textContent = project.challenges;

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
            clone.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
            track.insertBefore(clone, track.firstElementChild);
        }
        for (let i = 0; i < BUFFER; i++) {
            const clone = origSlides[i].cloneNode(true);
            clone.classList.add('svc-clone');
            clone.classList.remove('is-active');
            clone.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
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

            if (response.ok && json.success === 'true') {
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
