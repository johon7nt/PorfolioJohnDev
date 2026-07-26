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


// ── Click Spark (chispas al hacer click, portado de React Bits) ───────────
(function initClickSpark() {
    if (REDUCED_MOTION) return;

    const canvas = document.getElementById('click-spark');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Config — igual a la usage example del componente original
    const SPARK_COLOR = '#fff';
    const SPARK_SIZE   = 10;
    const SPARK_RADIUS = 15;
    const SPARK_COUNT  = 8;
    const DURATION     = 400;
    const EASING       = 'ease-out';

    function ease(t) {
        switch (EASING) {
            case 'linear':      return t;
            case 'ease-in':     return t * t;
            case 'ease-in-out': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            default:            return t * (2 - t); // ease-out
        }
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeCanvas, 100);
    });

    let sparks = [];

    function draw(timestamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        sparks = sparks.filter((spark) => {
            const elapsed = timestamp - spark.startTime;
            if (elapsed >= DURATION) return false;

            const progress = elapsed / DURATION;
            const eased = ease(progress);
            const distance = eased * SPARK_RADIUS;
            const lineLength = SPARK_SIZE * (1 - eased);

            const x1 = spark.x + distance * Math.cos(spark.angle);
            const y1 = spark.y + distance * Math.sin(spark.angle);
            const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
            const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

            ctx.strokeStyle = SPARK_COLOR;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            return true;
        });

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);

    document.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const now = performance.now();

        for (let i = 0; i < SPARK_COUNT; i++) {
            sparks.push({
                x, y,
                angle: (2 * Math.PI * i) / SPARK_COUNT,
                startTime: now,
            });
        }
    });
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


// ── 3D tilt en cards de servicios ──────────────────────────────────────────
// (las cards de proyectos no llevan tilt: ya tienen su propio movimiento
// de scroll-stack y sumarle el tilt del cursor generaba temblor/jitter)
(function initTilt() {
    if (!FINE_POINTER || REDUCED_MOTION) return;

    const MAX_X = 5;   // rotateX máx (deg)
    const MAX_Y = 7;   // rotateY máx (deg)

    document.querySelectorAll('.service-card').forEach((el) => {
        const lift = -6;
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


// ── ScrollStack (port vanilla de React Bits, sin Lenis) ────────────────────
// Las cards de "Proyectos Destacados" se apilan y escalan a medida que
// se scrollea, ancladas con la posición nativa de la ventana.
(function initScrollStack() {
    if (REDUCED_MOTION) return;

    const scroller = document.getElementById('proj-stack');
    const endEl = document.getElementById('proj-stack-end');
    if (!scroller || !endEl) return;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'));
    if (!cards.length) return;

    // Config — igual a los defaults documentados del componente
    const ITEM_SCALE          = 0.03;
    const ITEM_STACK_DISTANCE = 30;
    const STACK_POSITION      = '20%';
    const SCALE_END_POSITION  = '10%';
    const BASE_SCALE          = 0.85;

    const lastTransforms = new Map();
    let isUpdating = false;
    let cardTops = [];
    let endElementTop = 0;

    function parsePercentage(value, containerHeight) {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    }

    function calculateProgress(scrollTop, start, end) {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }

    // Medir la posición ORIGINAL de cada card (sin transform) una sola vez.
    // Si se remidiera con getBoundingClientRect() en cada frame, el propio
    // transform ya aplicado desplazaría ese rect, y el próximo cálculo
    // partiría de una base incorrecta — un circuito de realimentación que
    // hace oscilar el valor entre dos posiciones (el "temblor" al scrollear
    // lento). Por eso se cachea la posición estática y solo se recalcula
    // en resize.
    function measureOffsets() {
        cards.forEach((card) => { card.style.transform = 'none'; });
        cardTops = cards.map((card) => card.getBoundingClientRect().top + window.scrollY);
        endElementTop = endEl.getBoundingClientRect().top + window.scrollY;
    }

    function updateCardTransforms() {
        if (isUpdating) return;
        isUpdating = true;

        const scrollTop = window.scrollY;
        const containerHeight = window.innerHeight;
        const stackPositionPx = parsePercentage(STACK_POSITION, containerHeight);
        const scaleEndPositionPx = parsePercentage(SCALE_END_POSITION, containerHeight);
        const pinEnd = endElementTop - containerHeight / 2;

        cards.forEach((card, i) => {
            const cardTop = cardTops[i];
            const triggerStart = cardTop - stackPositionPx - ITEM_STACK_DISTANCE * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = triggerStart;

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = BASE_SCALE + i * ITEM_SCALE;
            const scale = 1 - scaleProgress * (1 - targetScale);

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + ITEM_STACK_DISTANCE * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + ITEM_STACK_DISTANCE * i;
            }

            const next = {
                translateY: Math.round(translateY * 100) / 100,
                scale: Math.round(scale * 1000) / 1000,
            };

            const prev = lastTransforms.get(i);
            const changed = !prev ||
                Math.abs(prev.translateY - next.translateY) > 0.1 ||
                Math.abs(prev.scale - next.scale) > 0.001;

            if (changed) {
                card.style.transform = `translate3d(0, ${next.translateY}px, 0) scale(${next.scale})`;
                lastTransforms.set(i, next);
            }
        });

        isUpdating = false;
    }

    cards.forEach((card) => {
        card.style.willChange = 'transform';
        card.style.transformOrigin = 'top center';
        card.style.backfaceVisibility = 'hidden';
    });

    measureOffsets();

    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateCardTransforms();
            ticking = false;
        });
    }

    let resizeTimer;
    function onResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            measureOffsets();
            updateCardTransforms();
        }, 150);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    updateCardTransforms();
})();


// ── Variable Proximity (port vanilla de React Bits, sin Motion/Framer) ─────
// El título del CTA reacciona al cursor: cada letra interpola su peso/óptica
// (ejes 'wght'/'opsz' de Roboto Flex) según qué tan cerca está el mouse.
(function initVariableProximity() {
    if (!FINE_POINTER || REDUCED_MOTION) return;

    const el = document.getElementById('cta-proximity-title');
    if (!el) return;

    const RADIUS  = 120;
    const FALLOFF = 'linear'; // 'linear' | 'exponential' | 'gaussian'
    const FROM = [['wght', 500], ['opsz', 9]];   // en reposo
    const TO   = [['wght', 900], ['opsz', 40]];  // pegado al cursor
    const FROM_CSS = FROM.map(([k, v]) => `'${k}' ${v}`).join(', ');

    let letterEls = [];
    const mouse = { x: -9999, y: -9999 };

    // Reconstruye el contenido letra por letra, preservando cualquier
    // elemento anidado (como el <span class="gradient-text">) y dejando
    // un duplicado accesible para lectores de pantalla.
    function wrapLetters() {
        letterEls = [];
        const source = el.cloneNode(true);
        const srText = el.textContent;

        function processInto(sourceNode, destNode) {
            Array.from(sourceNode.childNodes).forEach((child) => {
                if (child.nodeType === Node.TEXT_NODE) {
                    child.textContent.split(/(\s+)/).forEach((chunk) => {
                        if (!chunk) return;
                        if (/^\s+$/.test(chunk)) {
                            destNode.appendChild(document.createTextNode(chunk));
                            return;
                        }
                        // Cada palabra se agrupa en su propio inline-block
                        // con white-space:nowrap para que el navegador nunca
                        // la corte a la mitad (las letras sueltas, cada una
                        // su propio span, son puntos de quiebre válidos).
                        const wordSpan = document.createElement('span');
                        wordSpan.className = 'vp-word';
                        chunk.split('').forEach((ch) => {
                            const span = document.createElement('span');
                            span.className = 'vp-letter';
                            span.style.fontVariationSettings = FROM_CSS;
                            span.textContent = ch;
                            wordSpan.appendChild(span);
                            letterEls.push(span);
                        });
                        destNode.appendChild(wordSpan);
                    });
                } else if (child.nodeType === Node.ELEMENT_NODE) {
                    const clone = child.cloneNode(false);
                    destNode.appendChild(clone);
                    processInto(child, clone);
                }
            });
        }

        while (el.firstChild) el.removeChild(el.firstChild);

        const visual = document.createElement('span');
        visual.setAttribute('aria-hidden', 'true');
        processInto(source, visual);
        el.appendChild(visual);

        const sr = document.createElement('span');
        sr.className = 'vp-sr-only';
        sr.textContent = srText;
        el.appendChild(sr);
    }

    function falloff(d) {
        const norm = Math.min(Math.max(1 - d / RADIUS, 0), 1);
        if (FALLOFF === 'exponential') return norm ** 2;
        if (FALLOFF === 'gaussian') return Math.exp(-((d / (RADIUS / 2)) ** 2) / 2);
        return norm;
    }

    function tick() {
        if (letterEls.length) {
            letterEls.forEach((span) => {
                const r = span.getBoundingClientRect();
                const cx = r.left + r.width / 2;
                const cy = r.top + r.height / 2;
                const d = Math.hypot(mouse.x - cx, mouse.y - cy);

                if (d >= RADIUS) {
                    span.style.fontVariationSettings = FROM_CSS;
                    return;
                }

                const f = falloff(d);
                span.style.fontVariationSettings = FROM
                    .map(([axis, fromV], i) => `'${axis}' ${(fromV + (TO[i][1] - fromV) * f).toFixed(2)}`)
                    .join(', ');
            });
        }
        requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, { passive: true });

    wrapLetters();
    requestAnimationFrame(tick);

    // El swap de idioma reemplaza el innerHTML (ver i18n.js) y borra las
    // letras envueltas; se exponen para reconstruirlas después de traducir.
    window.refreshVariableProximity = wrapLetters;
})();


// ── ShapeGrid (port vanilla de React Bits) ─────────────────────────────────
// Fondo de las páginas de proyecto: grilla que se desliza en diagonal y
// cuyas celdas se iluminan (con una breve estela) al pasar el cursor.
(function initShapeGrid() {
    if (REDUCED_MOTION) return;

    const canvas = document.getElementById('pp-shapegrid');
    const ppPage = document.getElementById('proj-page');
    if (!canvas || !ppPage) return;
    const ctx = canvas.getContext('2d');

    const DIRECTION         = 'diagonal';
    const SPEED              = 0.4;
    const BORDER_COLOR       = 'rgba(255, 255, 255, 0.07)';
    const SQUARE_SIZE        = 44;
    const HOVER_FILL_COLOR   = 'rgba(0, 122, 255, 0.18)';
    const HOVER_TRAIL_AMOUNT = 4;

    const gridOffset = { x: 0, y: 0 };
    let hoveredSquare = null;
    let trailCells = [];
    const cellOpacities = new Map();

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const offsetX = ((gridOffset.x % SQUARE_SIZE) + SQUARE_SIZE) % SQUARE_SIZE;
        const offsetY = ((gridOffset.y % SQUARE_SIZE) + SQUARE_SIZE) % SQUARE_SIZE;

        const cols = Math.ceil(canvas.width / SQUARE_SIZE) + 3;
        const rows = Math.ceil(canvas.height / SQUARE_SIZE) + 3;

        for (let col = -2; col < cols; col++) {
            for (let row = -2; row < rows; row++) {
                const sx = col * SQUARE_SIZE + offsetX;
                const sy = row * SQUARE_SIZE + offsetY;

                const cellKey = `${col},${row}`;
                const alpha = cellOpacities.get(cellKey);
                if (alpha) {
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = HOVER_FILL_COLOR;
                    ctx.fillRect(sx, sy, SQUARE_SIZE, SQUARE_SIZE);
                    ctx.globalAlpha = 1;
                }

                ctx.strokeStyle = BORDER_COLOR;
                ctx.strokeRect(sx, sy, SQUARE_SIZE, SQUARE_SIZE);
            }
        }

        const gradient = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2,
            Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function updateCellOpacities() {
        const targets = new Map();

        if (hoveredSquare) {
            targets.set(`${hoveredSquare.x},${hoveredSquare.y}`, 1);
        }

        if (HOVER_TRAIL_AMOUNT > 0) {
            trailCells.forEach((cell, i) => {
                const key = `${cell.x},${cell.y}`;
                if (!targets.has(key)) {
                    targets.set(key, (trailCells.length - i) / (trailCells.length + 1));
                }
            });
        }

        targets.forEach((_, key) => {
            if (!cellOpacities.has(key)) cellOpacities.set(key, 0);
        });

        cellOpacities.forEach((opacity, key) => {
            const target = targets.get(key) || 0;
            const next = opacity + (target - opacity) * 0.15;
            if (next < 0.005) cellOpacities.delete(key);
            else cellOpacities.set(key, next);
        });
    }

    function updateAnimation() {
        const effectiveSpeed = Math.max(SPEED, 0.1);
        const wrap = SQUARE_SIZE;

        switch (DIRECTION) {
            case 'right':
                gridOffset.x = (gridOffset.x - effectiveSpeed + wrap) % wrap;
                break;
            case 'left':
                gridOffset.x = (gridOffset.x + effectiveSpeed + wrap) % wrap;
                break;
            case 'up':
                gridOffset.y = (gridOffset.y + effectiveSpeed + wrap) % wrap;
                break;
            case 'down':
                gridOffset.y = (gridOffset.y - effectiveSpeed + wrap) % wrap;
                break;
            case 'diagonal':
                gridOffset.x = (gridOffset.x - effectiveSpeed + wrap) % wrap;
                gridOffset.y = (gridOffset.y - effectiveSpeed + wrap) % wrap;
                break;
            default:
                break;
        }

        updateCellOpacities();
        drawGrid();
    }

    function handleMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const offsetX = ((gridOffset.x % SQUARE_SIZE) + SQUARE_SIZE) % SQUARE_SIZE;
        const offsetY = ((gridOffset.y % SQUARE_SIZE) + SQUARE_SIZE) % SQUARE_SIZE;

        const col = Math.floor((mouseX - offsetX) / SQUARE_SIZE);
        const row = Math.floor((mouseY - offsetY) / SQUARE_SIZE);

        if (!hoveredSquare || hoveredSquare.x !== col || hoveredSquare.y !== row) {
            if (hoveredSquare && HOVER_TRAIL_AMOUNT > 0) {
                trailCells.unshift({ ...hoveredSquare });
                if (trailCells.length > HOVER_TRAIL_AMOUNT) trailCells.length = HOVER_TRAIL_AMOUNT;
            }
            hoveredSquare = { x: col, y: row };
        }
    }

    function handleMouseLeave() {
        if (hoveredSquare && HOVER_TRAIL_AMOUNT > 0) {
            trailCells.unshift({ ...hoveredSquare });
            if (trailCells.length > HOVER_TRAIL_AMOUNT) trailCells.length = HOVER_TRAIL_AMOUNT;
        }
        hoveredSquare = null;
    }

    resizeCanvas();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeCanvas, 150);
    });

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let wasOpen = false;
    function loop() {
        const isOpen = ppPage.classList.contains('open');
        if (!isOpen) {
            wasOpen = false;
            requestAnimationFrame(loop);
            return;
        }
        if (!wasOpen) {
            // El hero pudo cambiar de tamaño mientras la página estaba cerrada
            resizeCanvas();
            wasOpen = true;
        }
        updateAnimation();
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
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
    const navLinks = document.querySelectorAll('.sm-panel-item');

    if (!sections.length || !navLinks.length) return;

    // rootMargin achica el viewport efectivo a una franja fina en el centro
    // vertical de la pantalla: la sección se marca activa cuando ESA franja
    // la toca, sin importar qué tan alta sea la sección. Con un threshold
    // fijo (ej. 0.4) las secciones muy altas —como "Proyectos", que ahora
    // incluye el recorrido de scroll del ScrollStack— nunca llegaban a
    // cubrir el 40% del viewport y por eso jamás se marcaban activas.
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
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
})();
