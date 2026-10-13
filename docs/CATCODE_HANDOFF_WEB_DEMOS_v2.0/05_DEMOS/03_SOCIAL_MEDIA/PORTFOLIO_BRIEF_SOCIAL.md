# PORTFOLIO — BRIEF SOCIAL MEDIA · IMÁGENES

> Ruta: `Proyectos/Portafolio`
> Alcance: 4 demos del portafolio de CAT CODE.
> Rol objetivo: Social Media / Dirección de imágenes.
> Estado: borrador para entregar a desarrollo.

---

## 0. REGLA INVIOLABLE DE LAS DEMOS

- Los 4 proyectos son **conceptuales / placeholder**. No inventar clientes, seguidores, reservas, reseñas, estadísticas ni testimonios reales.
- Las imágenes NO llevan texto, logos ni watermark: los títulos, etiquetas, CTA y demás los coloca el frontend/HTML encima. Todo lo que la IA genere debe pedir explícitamente "no text, no logo, no watermark".
- Todo el material visual es para **generar/demostrar el caso del portafolio**, no para publicar en cuentas reales.

---

## 1. DIRECCIÓN ARTÍSTICA POR PROYECTO

Cada demo tiene **un pack de prompts de imágenes YA definido** — los briefs NO duplican los prompts, referencian los archivos como fuente de verdad:

| Proyecto | Fuente de verdad (prompts) |
|---|---|
| Casa Nora | `DEMO02_CASA_NORA_PROMPTS_IA.md` |
| Estudio Lumen | `DEMO04_ESTUDIO_LUMEN_PROMPTS_IA.md` |
| Ruta Norte | `DEMO03_RUTA_NORTE_PROMPTS_IA.md` |

### Estilo global por proyecto (síntesis)

- **Casa Nora** — restaurante mediterráneo contemporáneo · Madrid · CUSTOM. Editorial gastronómica elegante y cálida. Hero 16:9 (interior, luz de tarde). Coherente con la landing pulida.
- **Estudio Lumen** — belleza/estética premium · Valencia · SOCIAL. Dirección artística: "Editorial beauty + minimalismo premium + estética mediterránea contemporánea". Paleta: crema, beige suave, taupe, dusty rose. Modelos realistas, piel natural, sin exceso de retoque.
- **Ruta Norte** — turismo/experiencias · norte de España · FULL. Boutique/cinematográfica: verde bosque, piedra, mar, niebla, tonos tierra. Personas reales (no modelos perfectos), nada de estética de agencia turística genérica.

> Recomendación consistencia (ambos packs): generar primero **Hero → Interior/Featured → Sobre -> Servicios/Experiencias** y usar esas imágenes como **referencia visual** para el resto, para que personas, iluminación y color parezcan una misma sesión/campaña.

---

## 2. MATRIZ DE ENTREGABLES POR PROYECTO (imágenes locales)

Los archivos referenciados definen la estructura de carpetas exacta (en `/public/images/<proyecto>/`). Resumen del inventario objetivo:

| Slot | Casa Nora (CUSTOM) | Estudio Lumen (SOCIAL) | Ruta Norte (FULL) |
|---|---|---|---|
| Hero desktop | 16:9 | 16:9 | 16:9 (x2) |
| Hero mobile | 4:5 | 4:5 | — |
| Servicios / Experiencias | per-sección | facial, pelo, uñas, cejas | naturaleza, gastronomía, aventura, escapadas |
| Featured / Results | destacada | results (pelo, piel, uñas, cejas, styling) | montaña+mar |
| Destinos | — | — | Bilbao, Asturias, Cantabria, País Vasco, Galicia |
| Galería / Studio / About | interior | estudio (interior, recepción, espera), equipo | travelers (about) |
| Journal (inspiración) | (si aplica) | — | 5 lugares, mar+montaña, gastronomía, escapada |
| CTA final | — | reserva / cta | "tu próxima historia" |
| Redes (feed mock) | social preview | 6 posts Instagram 1:1 (definidos en pack) | 6 posts Instagram 1:1 |
| Open Graph (OG) | og | og | og (para el portfolio) |
| Favicon | sí | sí | sí |

Cantidades objetivo ya acordadas en los packs:

- **Estudio Lumen**: 18–20 imágenes totales.
- **Ruta Norte**: 24 imágenes totales (`ruta-norte/` con subcarpetas hero, experiences, featured, destinations, journal, instagram, about, cta, og).
- **Casa Nora**: su pack de prompts define el inventario (consultar archivo fuente).

Formato final: **WebP** (generar alta resolución y convertir).

---

## 3. CONTENIDO SOCIAL POR PAQUETE

### Estudio Lumen (SOCIAL) — feed + reserva online

Propósito de la demo: demostrar que la web convierte **contenido visual profesional + presencia social** en reservas (no solo una landing bonita).

- **12 posts** de Instagram (plantilla base de contenido; apoyado en los 6 posts de imagen + variaciones/reutilización de servicio).
- **3 carruseles** (p.ej.: tras bambalinas del estudio, cuidado facial paso a paso, "qué esperar en tu primera cita").
- **3 stories** (plantilla de formato vertical 9:16: anuncio de temporada, promoción, tip de belleza).
- Todos los textos/captions con tono de la marca y marcados como **demo** si hacen referencia a resultados inexistentes.

### Ruta Norte (FULL) — publicación simulada

Propósito de la demo: mostrar **publiscación (publicación simulada de Instagram/Facebook)** + CTA WhatsApp.

- **6 posts** con sus **captions** (basados en paisaje, viajero, gastronomía, naturaleza, pueblo, mar).
- Simulación de contenidos/estado en el mini panel `/admin-demo` (aprobado/pendiente/publicado + calendario). Ver Brief Backend §6.
- Links sociales funcionales apuntando a perfiles **mock / marca desactivada** según decida el equipo (nunca cuentas reales ajenas).

### Casa Nora (CUSTOM)

- Social preview mínimo (la fuerza está en la landing): definir 1–2 plantillas de post de reserva/menú como guiño del paquete, marcadas como demo. Referencia `DEMO02_CASA_NORA_PROMPTS_IA.md`.

---

## 4. REGLAS DE CONSISTENCIA VISUAL

1. **Misma sesión / misma iluminación** por proyecto: el hero y el resto deben parecer una misma campaña fotográfica (misma modelo/personas, misma tratamiento de color).
2. **Imágenes SIN texto/logos**: los títulos, etiquetas, precios y CTAs los coloca el frontend. Esto vale para web y para mock de redes.
3. **WebP** para todo lo que use el frontend local.
4. **Realismo y sin CGI aparente**: las demos de CAT CODE venden calidad editorial; evitar render/IA evidente, piel de plastilina y exceso de retoque (Lumen y Ruta Norte lo exigen explícitamente en sus packs).
5. **Accesibilidad de contraste**: si una imagen lleva overlay de texto del frontend, dejar espacio negativo limpio definido en el prompt (hero y CTA ya lo diseñan así).
6. Al final, el frontend debe poder decidir `priority`/`lazy` (ver Brief Frontend §4).

---

## 5. QA / CHECKLIST DE SOCIAL

- [ ] Producción usa los prompts de los 3 packs, no versiones nuevas inconsistentes.
- [ ] Todas las imágenes en WebP y locales (sin URLs externas para producción).
- [ ] Sin texto/logos/watermark dentro de las imágenes.
- [ ] Cantidades objetivo por proyecto respetadas (Lumen 18–20, Ruta Norte 24, Casa Nora según pack).
- [ ] OG listo para compartir en redes (16:9).
- [ ] Captions de marca, en español, UTF-8, y con lenguaje de proyecto conceptual donde corresponda.
- [ ] `/admin-demo` de Ruta Norte muestra solo estados mock. No crear infraestructura real de redes.

---

## 6. FUERA DE ALCANCE

- No conectar cuentas reales (Instagram/Facebook API) en V1. Documentado como hook futuro (ver Brief Backend §7).
- **Urban Market (WEEKLY): fuera de alcance** — con los 3 proyectos el portafolio quedaba cubierto.

> ⚠️ **Superado el 2026-09-30.** Ahora el portafolio tiene **4 demos** y una de ellas es **Estudio Lumen en estado FULL** (FULL = CUSTOM Pro + **WEEKLY** + SOCIAL). **Esta capa entra en alcance:** hay que producir el **calendario editorial** (5 semanas × 5 piezas, con fechas reales y copy escrito) y la **rejilla de Instagram** que lo alimenta. Es el trabajo de contenido nuevo más grande de la tanda.
>
> **Lo que sigue fuera de alcance:** conectar cuentas reales de Instagram o Facebook. Los datos del calendario y la rejilla son estáticos del demo, no vienen de ninguna API.
> Canónico: `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §7.2.

---

> **Este archivo es canónico** (decisión del CEO, 2026-09-30). Origen histórico con la misma referencia: `Proyectos/Portafolio/PORTFOLIO_BRIEF_SOCIAL.md` — **no editar ahí.**
