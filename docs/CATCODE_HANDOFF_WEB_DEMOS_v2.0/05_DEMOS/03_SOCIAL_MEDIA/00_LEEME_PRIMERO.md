# SOCIAL MEDIA · IMÁGENES — LEEME PRIMERO

**Rol**: generar todas las imágenes de las 4 demos con IA, siguiendo las paquetes de prompts y la dirección artística de cada proyecto.

---

## Archivos en esta carpeta

| Archivo | Para qué sirve |
|---------|---------------|
| `PORTFOLIO_BRIEF_SOCIAL.md` | Tu brief completo: qué generar, reglas de estilo, por proyecto |
| `IDENTIDAD_VISUAL_DE_CADA_DEMO.md` | Paleta de colores y tipografía por proyecto (se usa para consistencia visual) |
| `DEMO02_CASA_NORA_PROMPTS_IA.md` | Pack de prompts: hero, platos, experiencia, galería, social, OG |
| `DEMO04_ESTUDIO_LUMEN_PROMPTS_IA.md` | Pack de prompts: hero, servicios, Instagram, social, ambiente |
| `DEMO03_RUTA_NORTE_PROMPTS_IA.md` | Pack de prompts: hero, experiencias, destinos, journal, Instagram, social |
| `DEMO01_TALLER_RECAMBIOS_PROMPTS_IA.md` | Pack de prompts: hero, taller, servicios (revisión, rueda, frenos, montaje, recambios, cadena), ubicación, social y OG. **Sin galería a propósito** — es CUSTOM Basic, 5 secciones. Añadido el 2026-09-30. |

---

## Orden de lectura (desde el min 0)

1. **Brief Social Media** — entiende qué generas, qué NO generas, reglas, cantidades
2. **Identidad visual** — paleta de cada proyecto para consistencia en tonos
3. **Pack de prompts de cada proyecto** — los prompts son la source of truth (no duplicar en brief)

---

## Qué generas

- Imágenes para hero (desktop + mobile)
- Imágenes de servicios/categorías
- Imágenes de experiencia
- Imágenes para Instagram grid (6 por proyecto)
- Imágenes para journal/artículos
- Imagen Open Graph
- Imagen para favicon/elementos gráficos

---

## Reglas de imagen

1. **Sin texto, sin logo, sin marca de agua** — Frontend agrega overlays después
2. **WebP local** — no URLs externas, archivos en `/public/images/<proyecto>/`
3. **Formato**: 16:9 para hero desktop, 4:5 para hero mobile/social, 1:1 para Instagram grid
4. **Dirección artística**: sigue la paleta y tipografía de cada proyecto (identidad visual)
5. **No inventar contenido** — solo lo que esté en los packs de prompts
6. **Máximo por proyecto**: Lumen 18-20, Ruta Norte 24, Casa Nora según pack

---

## Flujo de generación recomendado

```text
1. CASA NORA — hero, platos, experiencia, galería
2. ESTUDIO LUMEN — hero, servicios, Instagram, ambiente
3. RUTA NORTE — hero, experiencias, destinos, journal, Instagram
```

---

## Entregable

Archivos WebP en `/public/images/<proyecto>/` con nombres descriptivos:
```text
public/images/
├── casa-nora/
│   ├── hero.webp
│   ├── hero-mobile.webp
│   ├── burrata.webp
│   ├── arroz.webp
│   └── ...
├── estudio-lumen/
│   ├── hero.webp
│   ├── hero-mobile.webp
│   ├── servicio-pelo.webp
│   └── ...
└── ruta-norte/
    ├── hero.webp
    ├── hero-mobile.webp
    ├── experiencia-naturaleza.webp
    └── ...
```

---

## Coordinación

- **Frontend**: espera las imágenes para integrarlas en la UI. Puedes trabajar en paralelo.
- **Deadline**: las imágenes son el bloque 2 de la cadena de producción (después de contenido, antes de QA).
