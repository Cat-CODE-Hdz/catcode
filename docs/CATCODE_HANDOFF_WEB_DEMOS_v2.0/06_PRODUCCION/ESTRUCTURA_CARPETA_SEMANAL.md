# ESTRUCTURA DE CARPETA SEMANAL — CLIENTES

**Versión:** 2026-09-10 · **Cómo organizar el trabajo semanal de un cliente.**

---

## ¿Dónde vive?

- Cada cliente tiene su carpeta `CCXXX_NOMBRE` (norma: [[UNIFICADO/00_REGISTRO/NOMENCLATURA_v2.md|NOMENCLATURA_v2]]).
- Dentro, el trabajo se organiza por semana.

## Nomenclatura

### Nivel cliente
```
04_CLIENTES/
  CC001_CAFETERIA_LA_ESQUINA/
```

### Semana
```
CC001_CAFETERIA_LA_ESQUINA/
  SEP_S4_2026  (o CC001_SEP_S4_2026 si se necesita más contexto)
```

La norma canónica vive en [[UNIFICADO/00_REGISTRO/NOMENCLATURA_v2.md|NOMENCLATURA_v2]] (el DOCUMENTO 16 que la definía está archivado y obsoleto):
`CC001_SEP_S4_POST03_v02` → Cliente `CC001` · Semana `SEP_S4` · Pieza `POST03` · Versión `v02`.

> **La semana pertenece al mes donde cae su lunes**, y `S#` es el número de ese lunes dentro del mes. Julio 2026 tiene lunes el 6, 13, 20 y 27 → `JUL_S1` … `JUL_S4`.

## Estructura interna sugerida por semana

```
CC001_SEP_S4_2026/
  CORE/                 → diseño y piezas gráficas (mockups, PSD, SVG)
  COPY/                 → textos de la semana (5 copys)
  FINAL/                → versión aprobada (sufijo _FINAL)
  LOG/                  → registro de envíos, aprobaciones, comentarios
```
Se adapta al nivel contratado (WEEKLY sin landing, SOCIAL con publicación, etc.).

## Flujo del contenido semanal

1. Lunes: definir las 5 piezas de la semana (promoción, consejo, inspiración, prueba social, interacción).
2. Martes: entrega del borrador al cliente de las piezas 1–3.
3. Miércoles: feedback inicial.
4. Jueves: entrega de piezas 4–5 y versión final.
5. Viernes: aprobación "APROBADO" y publicación (ver PUBLICACION.md).

> Plazos de aprobación del contenido semanal: **48h** (ver APROBACION.md).

## Reglas

- Cada pieza tiene un nombre único: `POST01`, `POST02`…
- Versiones: `_v01`, `_v02` … `_FINAL` (nunca "final-final"; norma en `NOMENCLATURA_v2.md`).
- Fechas en `YYYY-MM-DD` en nombres de archivo de entregas.
- Prohibido reutilizar la misma pieza dos semanas seguidas (REGLAS WEEKLY).