# TIPOGRAFÍA — CAT CODE

**Décision canónica (2026-09-10):** JURA se usa **ÚNICAMENTE** para el logotipo (nombre + tagline). La web usa **Geist (principal) + Inter (fallback)**. Los documentos internos usan **system-ui**.

---

## Mapa de fuentes (dónde se usa cada una)

| Uso | Fuente | Detalle |
|---|---|---|
| **Logotipo (nombre "CAT CODE" + tagline)** | **JURA** | Única excepción. Es la fuente del logotipo. NO se usa en web ni en docs |
| **Web — tipografía principal** | **Geist** | Títulos + cuerpo en la web pública |
| **Web — fallback** | **Inter** | Si Geist no carga, se usa Inter |
| **Web — mono/anotaciones técnicas** | Geist Mono / Inter Mono | Código, etiquetas, "catcode" |
| **Documentos internos (UNIFICADO/)** | system-ui | Sin fuentes descargadas; tips nativas del sistema |

## JURA (logotipo)

- Uso restringido a: nombre del logotipo ("CAT CODE") y tagline ("We Program . We Create . We Purr").
- No usar JURA en: párrafos, headings de web, botones, documentos.
- JURA está empaquetada en el archivo MANUAL_MARCA_v3.html (base64) y en `99_ARCHIVO/FONTS_EXTRAIDAS/`.

## Geist (web)

- Presenta según el sistema web (`07_WEB/`). Usar la fuente variable (100–900).
- Headings: weight 700. Body: weight 400–500.
- Fallback a Inter (misma métrica aproximada) para evitar salto de layout.

## system-ui (docs/producción)

- Todos los `.md`, plantillas y documentos internos: fuente del sistema.
- Sin descargas, sin enlaces externos, 100% offline.

## Lista de fuentes en el negocio (asociadas a CAT CODE)

Las fuentes que conviven en la empresa (JURA, Michroma, Eurostile Extended, Orbitron, Oxanium) están archivadas en `99_ARCHIVO/FONTS_*`. Solo JURA se usa en el logotipo según esta decisión. Las demás se conservan por histórico (no se deduplica ni se borra nada — AGENTS.md).

## Reglas de tipografía

1. **Jerarquía horizontal de marca:** CAT CODE > CAT Yellow siempre de acento.
2. Use the escale tipográfica estable definida en `07_WEB/DISENO_WEB.md`.
3. Nada en mayúsculas forzado excepto "CAT CODE" en el logo.
4. No usar más de 2 familias por página web (Geist + mono).