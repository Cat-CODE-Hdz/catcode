<!-- Copia de conveniencia para el flujo de Frontend (misma numeración que el canónico). Canónico: `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md` — decisión del CEO, 2026-09-30. -->

> ⚠️ **Esta copia está desfasada desde el 2026-10-05. Canónico: `01_BACKEND/PORTFOLIO_BRIEF_BACKEND.md`.**
> Ese día se añadió el **§2.1 · Las marcas discretas de `DEMO_MODE`**, que no está aquí. Como la regla nº 1 del vault prohíbe sobrescribir sin aprobación, **no se ha vuelto a copiar**: se deja constancia y quien necesite el contenido va al canónico.
> Comprueba el desfase antes de citar numeración desde aquí: la copia tiene 275 líneas y el canónico 309.

# PORTFOLIO — BRIEF BACKEND

> **⚠️ Stack histórico (Next.js/React).** El estándar actual de las landings de cliente es **Astro + Tailwind CSS en Vercel** (decisión del 2026-09-27, `Cambios Listos para Actualizar/04_STACK_ASTRO_Y_DEMO.md`). Este documento se conserva como registro del stack con el que se concibieron las demos: **no se reescribe todavía**. El demo nuevo en Astro se construirá aparte.

> Ruta: `Proyectos/Portafolio`
> Alcance: 4 demos del portafolio de CAT CODE.
> Rol objetivo: Backend.
> Estado: borrador para entregar a desarrollo.

---

## 0. REGLA INVIOLABLE DE LAS DEMOS

Los 4 proyectos son **conceptuales / placeholder** del portafolio de CAT CODE:

- NO inventar clientes, reservas, citas, contactos, reseñas, estadísticas, premios ni testimonios reales.
- Todo dato generado debe marcarse como demo o "Proyecto conceptual".
- NO conectar a números de WhatsApp reales, APIs reales de terceros ni bases de datos en V1.
- Si una integración real no existe, se muestra el **estado demo** correspondiente (ver §5).

---

## 1. ALCANCE Y ARQUITECTURA OBJETIVO

### 1.1 Lo que SÍ se construye en esta fase

Una **capa de integración/configuración** compartida que los 4 proyectos usan como base:

- Utilidad única de WhatsApp (`createWhatsAppUrl`).
- Manejo de estados de formulario (idle / loading / success / error) que **nunca finge envíos reales**.
- Contratos de datos por proyecto (payload tipado por formulario).
- Preferencias de proyecto vía variables de entorno.
- Rutas demo internas que se activan con flags de entorno.

### 1.2 Lo que NO se construye en esta fase (V1)

| No construir | Por qué |
|---|---|
| Backend propio (Node/Express server) | La demo es estática/frontend-first. No hay requisito funcional que lo necesite. |
| Envío de emails reales | Los formularios son conceptuales. |
| Persistencia en base de datos | No hay servidor ni cliente real que consultar. |
| Integración con Instagram API | Referencia en `CAT_CODE_DEMO_SYSTEM_v1.0` §15: "No conectar Instagram en V1". |
| Numeración real de WhatsApp | Prohibido hardcodear números reales. |
| Negocio de terceros (pagos, reservas externas) | Fuera de alcance V1. |

### 1.3 Urban Market (paquete WEEKLY)

**Fuera de alcance de los briefs del portafolio.** Con los 3 proyectos activos (Casa Nora, Estudio Lumen, Ruta Norte) el portafolio queda cubierto. Se menciona aquí únicamente para dejar constancia de la decisión y evitar que se agregue a este trabajo.

> ⚠️ **Superado el 2026-09-30.** El motivo era "con los 3 proyectos el portafolio queda cubierto", y **ahora hay 4**. Uno de ellos es **Estudio Lumen en estado FULL**, y FULL = CUSTOM Pro + **WEEKLY** + SOCIAL (`PRECIOS.md` §5). **La capa WEEKLY entra en alcance** como pieza de la demo: calendario editorial de 5 semanas × 5 piezas, con fechas reales y copy escrito, alimentando la rejilla de Instagram. Ver `MAPEOS_Y_NIVELES.md` §7.2.
> **Lo que sigue fuera de alcance:** la **API de Instagram** (los datos del calendario y la rejilla son estáticos del demo, no vienen de la API).

---

## 2. VARIABLES DE ENTORNO

Un único archivo `.env.example` documentado para el repo del portafolio:

```env
# WhatsApp — número de demo (NO usar un número real)
NEXT_PUBLIC_WHATSAPP_NUMBER=

# Alterna la app en "modo demo": muestra el badge "PROYECTO DEMO"
# y habilita rutas internas como /admin-demo
NEXT_PUBLIC_DEMO_MODE=false
```

Reglas:

- Si `NEXT_PUBLIC_WHATSAPP_NUMBER` está **vacío**, los botones de WhatsApp no abren `wa.me`; en su lugar se muestra el feedback demo de §5.
- `NEXT_PUBLIC_DEMO_MODE=true` activa de forma **discreta** el badge "PROYECTO DEMO" (debe respetar la estética del proyecto) y permite acceder a `/admin-demo`.
- Ruta Norte usa la misma variable `NEXT_PUBLIC_WHATSAPP_NUMBER`; en su docu interna se refería como `WHATSAPP_DEMO_NUMBER` — consolidar a un solo nombre. No hardcodear ningún número.
- En desarrollo, los .env NO se suben al repo. El `.env.example` sí.

---

## 3. UTILIDAD ÚNICA DE WHATSAPP

Referencia canónica: `CAT_CODE_DEMO_SYSTEM_v1.0` §16 (WHATSAPP SYSTEM).

Todos los botones de las 4 demos usan **la misma función**:

```ts
export function createWhatsAppUrl(
  phone: string,
  message?: string
): string
```

- `phone`: número completo en formato internacional (solo dígitos, con prefijo de país), nunca hardcodeado en componentes → proviene de la configuración/env.
- `message`: texto predefinido por proyecto, configurable, UTF-8, codificado correctamente.
- La función debe devolver la URL lista para `window.open` o un `<a href>`.

### Mensajes predefinidos por proyecto

| Proyecto | Mensaje que debe pre-cargarse en WhatsApp |
|---|---|
| Casa Nora | `Hola 👋 Me gustaría recibir más información sobre Casa Nora.` |
| Estudio Lumen | Mensaje de interés/cita (definir en el config del proyecto, mismo patrón que Casa Nora). |
| Ruta Norte | Mensaje de idea de viaje (pre-cargado desde la sección "¿Tienes una idea de viaje?"). |

El microcopy exacto vive en cada `PROYECTO DEMO`/`LANDING PAGE`; el Backend solo expone el mecanismo y lee el texto desde la configuración del proyecto (nunca duplicado en componentes).

Comportamiento demo: si no hay número configurado o `NEXT_PUBLIC_DEMO_MODE=true`, mostrar el estado demo de §5 en lugar de abrir WhatsApp real.

---

## 4. CONTRATOS DE DATOS (FORMULARIOS)

Cada proyecto define **un payload tipado** (interfaz TS) para su formulario. **Cuatro contratos, uno por demo** — todos sin envío real.

> 🛑 **Ningún nivel de CUSTOM incluye formulario** (`PRECIOS.md:40`). El formulario es el **add-on "Formulario + páginas legales · a presupuestar"** (`PRECIOS.md` §6.2). Por eso los cuatro contratos de aquí son **la demostración del extra**, no un camino de conversión: el CTA real de las cuatro demos es **WhatsApp**.
> Canónico: `UNIFICADO/00_REGISTRO/CONTACTO_Y_DATOS_EN_LANDINGS.md` §3. Niveles y demos: `UNIFICADO/09_PORTFOLIO/DEMOS/MAPEOS_Y_NIVELES.md` §8.

| # | Demo | Nivel | Contrato |
|---|---|---|---|
| 1 | Taller Recambios *(nuevo)* | Basic · 5 | `PresupuestoRecambios` |
| 2 | Casa Nora | Pro · 8 · ★ | `ReservaCasaNora` |
| 3 | Ruta Norte | Premium · 11 | `ContactoRutaNorte` |
| 4 | Estudio Lumen | FULL | `CitaEstudioLumen` |

### 4.0 Taller Recambios — Solicitud de presupuesto

```ts
interface PresupuestoRecambios {
  nombre: string;
  tipoBicicleta: 'ciudad' | 'montana' | 'carretera' | 'electrica';
  queNecesita: string;   // descripción libre de la reparación
  telefono?: string;
}
```

- Origen: sección "Servicios" de la landing (los precios ya están publicados; el formulario es para lo que no entra en la lista).
- Al enviar → estado demo §5.
- Es el contrato más simple de los cuatro, y el primero que se implementa.

### 4.1 Casa Nora — Solicitud de reserva

### 4.1 Casa Nora — Solicitud de reserva

```ts
interface ReservaCasaNora {
  nombre: string;      // nombre de la persona
  telefono?: string;
  personas: number;    // comensales
  fecha: string;       // ISO YYYY-MM-DD
  hora: string;        // HH:mm
  mensaje?: string;
}
```

- Origen: sección "SOLICITAR RESERVA" de la landing. **Posición secundaria** — el CTA de la landing es WhatsApp.
- Al enviar → estado demo §5 (modal "¡Gracias! ... demostración del sistema de reservas").
- 🛑 **Badge reforzado**: pide `personas` + `fecha` + `hora`, y eso aparenta un sistema con disponibilidad real en un nivel de 249 €. El estado success **debe decir que no comprueba disponibilidad**. Ver `MAPEOS_Y_NIVELES.md` §8.

### 4.2 Estudio Lumen — Reserva de cita

```ts
interface CitaEstudioLumen {
  nombre: string;
  telefono?: string;
  servicio: string;    // Cuidado facial | Pelo | Manicura | Cejas & Mirada
  fechaPreferida?: string;
  mensaje?: string;
}
```

- Origen: formulario de la landing, **detrás del CTA de WhatsApp del hero** (`ESTUDIO LUMEN:143` ya lo resolvió a "RESERVA TU CITA POR WHATSAPP" en la barra de anuncio (`:143`) y tiene su propia sección `# 15 · CTA WHATSAPP` (`:523`, botón en `:540`)).
- ⚠️ **Este origen estaba mal.** Decía "RESERVAR CITA del hero/CTA" y el CTA **no** es un formulario, es un botón de WhatsApp. **Gana WhatsApp**; este contrato es la demo del extra.
- Mismo ciclo de estados (idle → loading → success demo).

### 4.3 Ruta Norte — Contacto / idea de viaje

```ts
interface ContactoRutaNorte {
  nombre: string;
  email?: string;
  tipoExperiencia: 'naturaleza' | 'gastronomia' | 'aventura' | 'escapadas' | 'personalizada';
  destino?: string;     // Asturias | Cantabria | País Vasco | Galicia
  mensaje: string;
}
```

- Origen: formulario de contacto + sección "¿Tienes una idea de viaje?".
- Su envio dispara la misma lógica demo (success sin envío real).

Reglas transversales:

- Los formularios **nunca** deben ejecutar `fetch` a un endpoint propio en V1.
- El estado `loading` puede simularse con un breve retardo para que la UI muestre el patrón real, pero el resultado es siempre el estado demo.
- Los datos no se persisten ni se envían a ningún servicio.

---

## 5. ESTADOS DEMO (FEEDBACK AL USUARIO)

Cuando una integración no existe (WhatsApp, formulario, panel), la app muestra un feedback **demo claro y discreto**:

- Badge permanente cuando `NEXT_PUBLIC_DEMO_MODE=true`:

  ```text
  PROYECTO DEMO
  ```

- WhatsApp sin número configurado:

  ```text
  Esta es una demostración
  de la integración con WhatsApp.
  ```

- Formulario enviado (modal o toast), referencia Casa Nora:

  ```text
  ¡Gracias!

  Tu solicitud ha sido recibida.

  Esta es una demostración
  del sistema de reservas.
  ```

Estos textos también viven en la configuración del proyecto (no hardcodeados en componentes).

---

## 6. PANEL DEMO — /admin-demo (Ruta Norte)

La demo FULL (Ruta Norte) incluye una **mini-sección interna visual** en `/admin-demo` para mostrar el modelo de negocio de CAT CODE (LANDING → EXPERIENCIA → WHATSAPP → CLIENTE).

Referencia: `CAT_CODE_PLANTILLAS_DEMOS.md` §10.

- Acceso: solo visible cuando `NEXT_PUBLIC_DEMO_MODE=true`.
- No requiere backend, login ni persistencia: todo es visual/mock.
- Contenido mínimo (mock):
  - Saludo "Hola 👋 Esta semana"
  - Conteo: ✓ 5 publicaciones · ✓ 2 promociones · ✓ Calendario semanal
  - Estados: 🟢 Aprobado · 🟡 Pendiente · 🔵 Publicado
  - Calendario de la semana (LUN/MAR/... → DESTINO/TIP)
- Si no está en modo demo, mostrar 404 o redirección a la home (nunca exponer la ruta).

---

## 7. HOOKS FUTUROS (DOCUMENTADOS, NO IMPLEMENTADOS)

Dejar constancia en el código/README del repo (sin implementar) para que la integración posterior no requiera refactor:

| Hook futuro | Dónde encaja |
|---|---|
| API de Instagram | Feed del proyecto SOCIAL (Estudio Lumen) e Instagram/Facebook de Ruta Norte. Regla actual: no conectar en V1. |
| Envío de emails / notificaciones | Sustituir los estados demo de formularios. |
| Persistencia (DB/Supabase) | Guardar solicitudes y breadcrumb del cliente. |
| Calendario / booking real | Reservas de Casa Nora y citas de Estudio Lumen. |
| CRM de clientes | Evidenciar "CLIENTE" del flujo FULL (Ruta Norte). |

Toda integración futura debe mantener **el mismo contrato de datos** definido en §4 para no romper los componentes.

---

## 8. CHECKLIST DE CALIDAD

- [ ] `createWhatsAppUrl` única y reutilizada por los 4 proyectos.
- [ ] Ningún número de teléfono real en el código.
- [ ] `.env.example` documentado + `.env` ignorado por git.
- [ ] Formularios sin envío real; estados demo claros y no invasivos.
- [ ] Badge "PROYECTO DEMO" discreto y respetuoso con la estética.
- [ ] `/admin-demo` solo con `NEXT_PUBLIC_DEMO_MODE=true`.
- [ ] Sin dependencias nuevas innecesarias para esta capa.
- [ ] UTF-8 en todos los textos (acentos y emojis intactos).

---

> **Este archivo es canónico** (decisión del CEO, 2026-09-30). Origen histórico con la misma referencia: `Proyectos/Portafolio/PORTFOLIO_BRIEF_BACKEND.md` — **no editar ahí.**
