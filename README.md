# Portfolio — Juan Cruz Romero

Landing page profesional para desarrollador Front-End. Diseño dark, glassmorphism, animaciones suaves y 100% responsive.

---

## Estructura

```
portfolio/
├── index.html          # Página principal
├── css/
│   ├── styles.css      # Estilos principales + responsive
│   └── animations.css  # Keyframes + clases de animación
├── js/
│   ├── main.js         # Interacciones (navbar, FAQ, modal, formulario)
│   └── animations.js   # IntersectionObserver + contador animado
├── images/             # Fotos reales (ver sección "Imágenes")
├── assets/             # CV PDF y otros archivos
└── README.md
```

---

## Personalización rápida

### 1. Datos personales
Buscá y reemplazá en `index.html`:
- `juancruzromero` → tu usuario real de LinkedIn/GitHub/Instagram
- `+54 9 11 0000-0000` → tu número de WhatsApp
- `jcruzromero2003@gmail.com` → tu email de contacto

### 2. Colores
Editá las variables en `css/styles.css` (líneas 1-50):
```css
--accent: #007AFF;   /* Azul principal */
--bg-primary: #0A0A0A;  /* Fondo negro */
```

### 3. Imágenes de perfil
Reemplazá los `<div class="photo-placeholder">` por:
```html
<img src="images/profile.jpg" alt="Juan Cruz Romero - Desarrollador Front-End" loading="lazy">
```

### 4. Proyectos
Editá el array `PROJECTS` en `js/main.js` con tus proyectos reales. Cada objeto tiene:
- `title`, `description`, `tags`
- `challenges` (desafíos y soluciones)
- `live` y `github` (URLs)
- `imgClass` (clase CSS para color de fondo — podés reemplazar con imágenes reales)

Para usar imágenes reales en los proyectos, reemplazá los estilos `.project-img-X` en `styles.css`:
```css
.project-img-0 {
  background-image: url('../images/proyecto-1.jpg');
  background-size: cover;
  background-position: center;
}
```

### 5. Formulario de contacto
Registrate en [Formspree](https://formspree.io), creá un formulario y reemplazá en `index.html`:
```html
action="https://formspree.io/f/TU_ID_REAL"
```

### 6. Precios (FAQ)
Actualizá los valores en la sección FAQ dentro de `index.html` según tus tarifas actuales.

### 7. CV
Colocá tu CV en `assets/cv-juan-cruz-romero.pdf` para que el botón "Descargar CV" funcione.

---

## Deploy

### Opción A — Vercel (recomendado)
```bash
npm i -g vercel
vercel
```

### Opción B — Netlify
Arrastrá la carpeta a [app.netlify.com/drop](https://app.netlify.com/drop)

### Opción C — GitHub Pages
1. Subí el repo a GitHub
2. Settings → Pages → Branch: main → / (root)
3. Esperá unos minutos → `https://tuusuario.github.io/portfolio`

---

## Checklist antes del deploy

- [ ] Reemplazaste las URLs de LinkedIn, GitHub e Instagram
- [ ] Agregaste tu foto real (profile.jpg)
- [ ] Actualizaste los proyectos en `js/main.js`
- [ ] Colocaste capturas reales de proyectos en `images/`
- [ ] Configuraste Formspree con tu ID real
- [ ] Colocaste tu CV en `assets/`
- [ ] Ajustaste los precios en el FAQ
- [ ] Testeaste en mobile (Chrome DevTools)
- [ ] Validaste HTML en [validator.w3.org](https://validator.w3.org)

---

## Stack utilizado

- HTML5 semántico
- CSS3 con variables custom (sin frameworks)
- Vanilla JavaScript ES6+ (sin dependencias)
- Intersection Observer API para animaciones al scroll
- Formspree para el formulario de contacto
- Devicons CDN para los íconos del stack tecnológico
