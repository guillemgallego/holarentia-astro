# Hola Rentia — Landing Page Clone
### Stack: Astro 4 · Tailwind CSS 3 · Vercel

---

## 📁 Estructura del proyecto

```
holarentia/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   └── favicon.svg         ← (añade tu favicon aquí)
└── src/
    ├── layouts/
    │   └── Layout.astro    ← Base HTML, SEO meta tags, fonts
    ├── pages/
    │   └── index.astro     ← Página principal (ensambla todos los componentes)
    └── components/
        ├── Navbar.astro
        ├── Hero.astro
        ├── LogoBar.astro
        ├── HowItWorks.astro
        ├── PainPoints.astro
        ├── Pricing.astro
        ├── Comparison.astro
        ├── Testimonials.astro
        ├── FAQ.astro
        ├── CTA.astro
        └── Footer.astro
```

---

## 🚀 Inicialización del proyecto

### Opción A — Usar este repo directamente

```bash
# 1. Entra al directorio
cd holarentia

# 2. Instala dependencias
npm install

# 3. Servidor de desarrollo local
npm run dev
# → http://localhost:4321
```

### Opción B — Proyecto Astro desde cero

```bash
# 1. Crea un nuevo proyecto Astro
npm create astro@latest holarentia
# Selecciona: "Empty" template, TypeScript: "Strict" (o No), Install deps: Yes

cd holarentia

# 2. Añade Tailwind CSS
npx astro add tailwind
# Acepta instalar dependencias y sobreescribir archivos de configuración

# 3. Copia los archivos de /src de este repo a tu proyecto

# 4. Reemplaza tailwind.config.mjs con el de este repo

# 5. Lanza el servidor
npm run dev
```

---

## 🌐 Subir a GitHub

```bash
# Inicia git en el proyecto (si no lo está)
git init
git add .
git commit -m "feat: initial landing page clone"

# Crea repo en GitHub (sin README) y conecta
git remote add origin https://github.com/TU_USUARIO/holarentia.git
git branch -M main
git push -u origin main
```

---

## ▲ Despliegue en Vercel

### Opción 1: Vercel CLI (más rápido)

```bash
npm i -g vercel
vercel
# Sigue el wizard: framework → Astro, auto-detectado
```

### Opción 2: Vercel Dashboard (GitHub integration)

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa tu repo de GitHub
3. Vercel detecta Astro automáticamente
4. Click **Deploy** ✅

> **Framework Preset:** Astro  
> **Build Command:** `npm run build`  
> **Output Directory:** `dist`  
> **No se necesitan variables de entorno**

---

## 🎨 Personalización rápida

| Qué cambiar              | Dónde                              |
|--------------------------|------------------------------------|
| Colores de marca         | `tailwind.config.mjs` → `colors.brand` |
| Fuentes                  | `Layout.astro` → Google Fonts link + `tailwind.config.mjs` → `fontFamily` |
| Textos hero              | `Hero.astro`                       |
| Precios y features       | `Pricing.astro` → array `plans`    |
| Testimonios              | `Testimonials.astro` → array `testimonials` |
| FAQ                      | `FAQ.astro` → array `faqs`        |
| Colores SEO/OG           | `Layout.astro` → props por defecto |

---

## 🔍 SEO — Palabras Clave Investigadas

### Transaccionales (alta intención de compra)
- `gestión airbnb españa`
- `gestionar airbnb sin comisiones`
- `empresa gestión alquiler vacacional`
- `gestión airbnb tarifa fija`
- `gestión apartamentos turísticos precio fijo`

### Informacionales (educar al propietario)
- `cómo gestionar airbnb a distancia`
- `cuánto cobra un gestor de airbnb`
- `es rentable alquilar airbnb en españa`
- `automatizar airbnb mensajes`
- `precios dinámicos airbnb cómo funcionan`

### Long-Tail (baja competencia, alta conversión)
- `gestión airbnb madrid sin comisiones`
- `empresa gestión alquiler vacacional barcelona`
- `gestionar piso airbnb viviendo en el extranjero`
- `alternativa gestor airbnb comision 0`
- `gestión airbnb booking sincronización calendario`

---

## 🏆 Competidores en España

| Empresa          | Modelo          | Punto diferencial          |
|------------------|-----------------|----------------------------|
| Homming.es       | % comisión (15-25%) | Cobertura Madrid/BCN     |
| Sejour.es        | % comisión      | App propietario            |
| Lodgify.com      | SaaS mensual    | PMS + channel manager      |

---

## 💡 Tips para escalar la landing

- Añade páginas de ciudad: `/gestion-airbnb-madrid/`, `/gestion-airbnb-barcelona/`
- Crea un blog con artículos informativos (schema `Article`) para posicionamiento orgánico
- Añade una calculadora de ingresos interactiva (island de Astro con React/Vue)
- Implementa chat de WhatsApp flotante con `@floating-ui`
