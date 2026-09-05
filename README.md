# CatCode Landing Page

Landing page oficial de [CatCode](https://cat-code-hdz.github.io/catcode/) — servicios de desarrollo web para PyMEs en México.

## Stack

- **Frontend:** React 19 + TypeScript
- **Estilos:** Tailwind CSS 4
- **Build:** Vite 8
- **Lint:** OxLint
- **i18n:** react-i18next (ES / EN)
- **Deploy:** GitHub Pages via GitHub Actions

## Estructura

```
src/
├── components/
│   ├── layout/       # TopBar, Header, Footer
│   └── sections/     # Hero, Problem, Solution, HowItWorks, Pricing, FAQ, CTA, etc.
├── data/             # Datos de pricing y FAQ
├── hooks/            # usePricingTabs, useFaqAccordion
├── i18n/             # Traducciones ES/EN
├── assets/           # Imágenes y SVGs
├── App.tsx
├── index.css
└── main.tsx
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Scripts

| Comando          | Descripción                     |
| ---------------- | ------------------------------- |
| `npm run dev`    | Servidor de desarrollo (Vite)   |
| `npm run build`  | Build de producción             |
| `npm run preview` | Preview del build localmente   |
| `npm run lint`   | Linting con OxLint             |

## Deploy

El deploy a GitHub Pages se ejecuta automáticamente al hacer push al branch `main` vía el workflow `.github/workflows/deploy.yml`.

Para ejecutarlo manualmente, ir a **Actions → Deploy CatCode to GitHub Pages → Run workflow**.

### Configuración de GitHub Pages

En **Settings → Pages → Source**, seleccionar **"GitHub Actions"**.
