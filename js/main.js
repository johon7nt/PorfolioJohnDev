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
        // Métricas de impacto — REEMPLAZAR con datos reales del proyecto
        // pct = llenado del anillo (0-100); value = número que se muestra
        metrics: [
            { value: 95, suffix: '/100', pct: 95, label: 'PageSpeed móvil', label_en: 'Mobile PageSpeed' },
            { value: 1.8, suffix: 's', decimals: 1, pct: 84, label: 'Tiempo de carga', label_en: 'Load time' },
            { value: 40, prefix: '+', suffix: '%', pct: 40, label: 'Reservas online', label_en: 'Online bookings' },
        ],
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
        // Métricas de impacto — REEMPLAZAR con datos reales del proyecto
        // pct = llenado del anillo (0-100); value = número que se muestra
        metrics: [
            { value: 300, prefix: '+', pct: 86, label: 'Entradas vendidas', label_en: 'Tickets sold' },
            { value: 100, suffix: '%', pct: 100, label: 'Venta automatizada', label_en: 'Automated sales' },
            { value: 2.1, suffix: 's', decimals: 1, pct: 78, label: 'Tiempo de carga', label_en: 'Load time' },
        ],
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
        // Métricas de impacto — REEMPLAZAR con datos reales del proyecto
        // pct = llenado del anillo (0-100); value = número que se muestra
        metrics: [
            { value: 35, prefix: '+', suffix: '%', pct: 35, label: 'Conversión', label_en: 'Conversion' },
            { value: 40, prefix: '+', pct: 62, label: 'Productos editados', label_en: 'Products edited' },
            { value: 1.5, suffix: 's', decimals: 1, pct: 88, label: 'Tiempo de carga', label_en: 'Load time' },
        ],
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
        // Métricas de impacto — REEMPLAZAR con datos reales del proyecto
        // pct = llenado del anillo (0-100); value = número que se muestra
        metrics: [
            { value: 98, suffix: '/100', pct: 98, label: 'Lighthouse', label_en: 'Lighthouse' },
            { value: 1.2, suffix: 's', decimals: 1, pct: 92, label: 'First Paint', label_en: 'First Paint' },
            { value: 60, suffix: 'fps', pct: 100, label: 'Animaciones fluidas', label_en: 'Smooth animations' },
        ],
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
    // (excluye href="#" pelado: los usan los botones del case study antes de poblarse)
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((link) => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });

            // Close staggered menu if open
            closeStaggeredMenu();
        });
    });
})();


// ── Staggered Menu (port vanilla de React Bits, sin GSAP) ───────────────────
// Toda la coreografía (capas de color, panel, stagger de links, socials)
// la resuelve el CSS con transition-delay; acá solo se togglea un atributo.
const smWrapper = document.getElementById('sm-wrapper');
const smToggle  = document.getElementById('sm-toggle');
const smPanel   = document.getElementById('sm-panel');

function closeStaggeredMenu() {
    if (!smWrapper || !smWrapper.hasAttribute('data-open')) return;
    smWrapper.removeAttribute('data-open');
    smToggle.setAttribute('aria-expanded', 'false');
    smToggle.setAttribute('aria-label', window.currentLang === 'en' ? 'Open menu' : 'Abrir menú');
    smPanel.setAttribute('aria-hidden', 'true');
}

function openStaggeredMenu() {
    if (!smWrapper) return;
    smWrapper.setAttribute('data-open', '');
    smToggle.setAttribute('aria-expanded', 'true');
    smToggle.setAttribute('aria-label', window.currentLang === 'en' ? 'Close menu' : 'Cerrar menú');
    smPanel.removeAttribute('aria-hidden');
}

(function initStaggeredMenu() {
    if (!smWrapper || !smToggle || !smPanel) return;

    smToggle.addEventListener('click', () => {
        if (smWrapper.hasAttribute('data-open')) closeStaggeredMenu();
        else openStaggeredMenu();
    });

    // Cerrar al hacer click afuera del panel/botón
    document.addEventListener('click', (e) => {
        if (!smWrapper.hasAttribute('data-open')) return;
        if (!smPanel.contains(e.target) && !smToggle.contains(e.target)) {
            closeStaggeredMenu();
        }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeStaggeredMenu();
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
const ppPage        = document.getElementById('proj-page');
const ppScroll      = document.getElementById('pp-scroll');
const ppTopbar      = document.getElementById('pp-topbar');
const ppTopbarTitle = document.getElementById('pp-topbar-title');
const ppTopbarLive  = document.getElementById('pp-topbar-live');
const ppBack        = document.getElementById('pp-back');
const ppHero        = ppPage ? ppPage.querySelector('.pp-hero') : null;
const ppHeroMedia   = document.getElementById('pp-hero-media');
const ppHeroImg     = document.getElementById('pp-hero-img');
const ppHeroText    = document.getElementById('pp-hero-text');
const ppTitle       = document.getElementById('pp-title');
const ppTags        = document.getElementById('pp-tags');
const ppDesc        = document.getElementById('pp-desc');
const ppRingsEl     = document.getElementById('pp-rings');
const ppChallenges  = document.getElementById('pp-challenges');
const ppLive        = document.getElementById('pp-live');
const ppPrev        = document.getElementById('pp-prev');
const ppNext        = document.getElementById('pp-next');
const ppPrevTitle   = document.getElementById('pp-prev-title');
const ppNextTitle   = document.getElementById('pp-next-title');

const PREFERS_REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let previouslyFocused = null;
let currentProject    = -1;
let historyPushed     = false;   // true si esta sesión hizo pushState al abrir
let ringObserver      = null;

// ── Contador animado (soporta decimales) ────────────────────────────────────
function animateValue(el, target, decimals, duration = 1400) {
    if (PREFERS_REDUCED) {
        el.textContent = target.toFixed(decimals);
        return;
    }
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const start = performance.now();

    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = (easeOut(progress) * target).toFixed(decimals);
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

// ── Ring charts (métricas estilo Apple Watch) ───────────────────────────────
const RING_R = 56;
const RING_C = 2 * Math.PI * RING_R;
const RING_COLORS = [
    ['#0A84FF', '#5E5CE6'],
    ['#5E5CE6', '#BF5AF2'],
    ['#BF5AF2', '#FF6482'],
];

function buildRings(project) {
    if (!ppRingsEl) return;

    if (ringObserver) {
        ringObserver.disconnect();
        ringObserver = null;
    }

    const metrics = project.metrics || [];
    const en = window.currentLang === 'en';

    ppRingsEl.classList.remove('ring-go');
    ppRingsEl.innerHTML = metrics
        .map((m, i) => {
            const [c1, c2] = RING_COLORS[i % RING_COLORS.length];
            const pct = Math.max(0, Math.min(100, m.pct != null ? m.pct : m.value));
            const off = (RING_C * (1 - pct / 100)).toFixed(2);
            const label = en && m.label_en ? m.label_en : m.label;
            return `
            <div class="ring-card">
                <div class="ring-wrap">
                    <svg viewBox="0 0 132 132" aria-hidden="true">
                        <defs>
                            <linearGradient id="ppg-${i}" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stop-color="${c1}"/>
                                <stop offset="1" stop-color="${c2}"/>
                            </linearGradient>
                        </defs>
                        <circle class="ring-track" cx="66" cy="66" r="${RING_R}"/>
                        <circle class="ring-value" cx="66" cy="66" r="${RING_R}"
                                stroke="url(#ppg-${i})"
                                style="--ring-c: ${RING_C.toFixed(2)}; --ring-off: ${off}; --ring-delay: ${(i * 0.15).toFixed(2)}s"/>
                    </svg>
                    <div class="ring-center">
                        <span class="ring-number">
                            ${m.prefix ? `<span class="ring-prefix">${m.prefix}</span>` : ''}
                            <span class="ring-num">0</span>
                            ${m.suffix ? `<span class="ring-suffix">${m.suffix}</span>` : ''}
                        </span>
                    </div>
                </div>
                <span class="ring-label">${label}</span>
            </div>`;
        })
        .join('');

    if (!metrics.length) return;

    const fire = () => {
        ppRingsEl.classList.add('ring-go');
        ppRingsEl.querySelectorAll('.ring-num').forEach((el, i) => {
            animateValue(el, metrics[i].value, metrics[i].decimals || 0);
        });
    };

    if (PREFERS_REDUCED) {
        fire();
        return;
    }

    // Los anillos se llenan recién cuando entran en el viewport del case study
    ringObserver = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
            fire();
            ringObserver.disconnect();
            ringObserver = null;
        }
    }, { root: ppScroll, threshold: 0.35 });
    ringObserver.observe(ppRingsEl);
}

// ── Poblar la página de proyecto ────────────────────────────────────────────
function localized(obj, field) {
    const en = window.currentLang === 'en';
    return en && obj[`${field}_en`] ? obj[`${field}_en`] : obj[field];
}

function populateProject(index) {
    const project = PROJECTS[index];
    currentProject = index;

    const title = localized(project, 'title');
    ppHeroImg.src = project.imgSrc;
    ppHeroImg.alt = title;
    ppTitle.textContent = title;
    ppTopbarTitle.textContent = title;
    ppDesc.textContent = localized(project, 'description');
    ppChallenges.innerHTML = localized(project, 'challenges');
    ppTags.innerHTML = project.tags.map((t) => `<span>${t}</span>`).join('');
    ppLive.href = project.live;
    ppTopbarLive.href = project.live;

    const prevI = (index - 1 + PROJECTS.length) % PROJECTS.length;
    const nextI = (index + 1) % PROJECTS.length;
    ppPrevTitle.textContent = localized(PROJECTS[prevI], 'title');
    ppNextTitle.textContent = localized(PROJECTS[nextI], 'title');
    ppPrev.dataset.target = prevI;
    ppNext.dataset.target = nextI;

    buildRings(project);

    // Reset del estado visual de scroll
    ppTopbar.classList.remove('scrolled');
    ppHeroMedia.style.transform = '';
    ppHeroText.style.opacity = '';
    ppHeroText.style.transform = '';
}

// ── Transición FLIP: la card se expande hasta el hero ───────────────────────
function runFlip(index) {
    // Con la pestaña oculta las animaciones quedan pausadas: mejor abrir directo
    if (document.hidden) return;
    const cardImg = document.querySelector(`.project-card[data-project="${index}"] .project-img img`);
    if (!cardImg || !ppHeroMedia || typeof ppHeroMedia.animate !== 'function') return;

    const from = cardImg.getBoundingClientRect();
    if (!from.width || !from.height) return;
    const to = ppHeroMedia.getBoundingClientRect();

    const clone = document.createElement('div');
    clone.className = 'pp-flip-clone';
    clone.style.top = `${from.top}px`;
    clone.style.left = `${from.left}px`;
    clone.style.width = `${from.width}px`;
    clone.style.height = `${from.height}px`;
    clone.style.backgroundImage = `url('${PROJECTS[index].imgSrc}')`;
    document.body.appendChild(clone);

    ppHeroMedia.style.opacity = '0';

    const anim = clone.animate([
        { transform: 'translate(0, 0) scale(1, 1)', borderRadius: '14px' },
        {
            transform: `translate(${to.left - from.left}px, ${to.top - from.top}px) ` +
                       `scale(${to.width / from.width}, ${to.height / from.height})`,
            borderRadius: '0px',
        },
    ], { duration: 560, easing: 'cubic-bezier(0.32, 0.72, 0, 1)' });

    anim.onfinish = anim.oncancel = () => {
        ppHeroMedia.style.opacity = '';
        clone.remove();
    };
}

// ── Crossfade al navegar entre proyectos (prev/next) ────────────────────────
function crossfadeTo(index) {
    if (PREFERS_REDUCED || document.hidden || typeof ppScroll.animate !== 'function') {
        populateProject(index);
        ppScroll.scrollTop = 0;
        return;
    }

    const fadeOut = ppScroll.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 180, easing: 'ease-in', fill: 'forwards' }
    );
    fadeOut.onfinish = () => {
        populateProject(index);
        ppScroll.scrollTop = 0;
        fadeOut.cancel();
        ppScroll.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 300, easing: 'ease-out' }
        );
    };
}

// ── Abrir / cerrar ──────────────────────────────────────────────────────────
window.openProject = function openProject(index, opts = {}) {
    const project = PROJECTS[index];
    if (!project || !ppPage) return;

    const alreadyOpen = ppPage.classList.contains('open');

    if (!opts.fromHistory) {
        if (alreadyOpen) {
            history.replaceState({ proj: index }, '', `#proyecto-${index + 1}`);
        } else {
            history.pushState({ proj: index }, '', `#proyecto-${index + 1}`);
            historyPushed = true;
        }
    }

    if (alreadyOpen) {
        crossfadeTo(index);
        return;
    }

    populateProject(index);
    ppScroll.scrollTop = 0;

    previouslyFocused = document.activeElement;
    ppPage.removeAttribute('aria-hidden');
    ppPage.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (!opts.instant && !PREFERS_REDUCED) runFlip(index);

    requestAnimationFrame(() => ppBack.focus());
};

function doCloseProject() {
    if (!ppPage || !ppPage.classList.contains('open')) return;
    ppPage.classList.remove('open');
    ppPage.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previouslyFocused && document.contains(previouslyFocused)) {
        previouslyFocused.focus();
    }
}

function requestCloseProject() {
    if (historyPushed) {
        // El popstate resultante hace el cierre real
        history.back();
    } else {
        doCloseProject();
        if (/^#proyecto-/.test(location.hash)) {
            history.replaceState(null, '', location.pathname + location.search);
        }
    }
}

// ── Listeners de la página de proyecto ──────────────────────────────────────
(function initProjectPage() {
    if (!ppPage) return;

    ppBack.addEventListener('click', requestCloseProject);

    ppPrev.addEventListener('click', () => window.openProject(Number(ppPrev.dataset.target)));
    ppNext.addEventListener('click', () => window.openProject(Number(ppNext.dataset.target)));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && ppPage.classList.contains('open')) {
            requestCloseProject();
        }
    });

    // Focus trap
    ppPage.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || !ppPage.classList.contains('open')) return;
        const focusable = ppPage.querySelectorAll(
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
    });

    // Parallax del hero + topbar translúcida al scrollear el case study
    let scrollRaf = null;
    ppScroll.addEventListener('scroll', () => {
        if (scrollRaf) return;
        scrollRaf = requestAnimationFrame(() => {
            const y = ppScroll.scrollTop;
            const heroH = (ppHero && ppHero.offsetHeight) || 1;
            ppTopbar.classList.toggle('scrolled', y > heroH - 90);

            if (!PREFERS_REDUCED && y <= heroH) {
                ppHeroMedia.style.transform = `translateY(${(y * 0.38).toFixed(1)}px)`;
                ppHeroText.style.opacity = Math.max(0, 1 - y / (heroH * 0.55)).toFixed(3);
                ppHeroText.style.transform = `translateY(${(y * 0.14).toFixed(1)}px)`;
            }
            scrollRaf = null;
        });
    }, { passive: true });

    // Navegación con botón atrás/adelante del navegador
    window.addEventListener('popstate', (e) => {
        const s = e.state;
        if (s && s.proj != null && PROJECTS[s.proj]) {
            window.openProject(s.proj, { fromHistory: true });
        } else {
            historyPushed = false;
            doCloseProject();
        }
    });

    // Deep link: abrir directamente #proyecto-N
    const m = location.hash.match(/^#proyecto-(\d+)$/);
    if (m && PROJECTS[m[1] - 1]) {
        const idx = m[1] - 1;
        history.replaceState({ proj: idx }, '', location.hash);
        window.openProject(idx, { fromHistory: true, instant: true });
    }
})();


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
