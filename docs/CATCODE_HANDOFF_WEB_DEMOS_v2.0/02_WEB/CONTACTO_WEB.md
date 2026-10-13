# CONTACTO WEB — FORMULARIO Y CANALES

**Página /contacto. Copy base + campos + flujo.**

---

## Objetivo

Recoger leads cualificados: negocio + qué necesita + plan de interés. Derivar a WhatsApp/email.

## Copy canónico de la página

- **Título:** `Cuéntanos qué necesita tu negocio.`
- Sub: `Sin compromiso. Te respondemos en menos de 24h.`
- CTA botón: `Enviar`

## Campos del formulario

| Campo | Tipo | Requerido |
|---|---|---|
| Nombre | text | ✅ |
| Nombre del negocio | text | ✅ |
| Email | email | ✅ |
| Teléfono / WhatsApp | tel | opcional (acelerador) |
| **Plan de interés** | select: CUSTOM / WEEKLY / SOCIAL / FULL / No lo sé todavía | ✅ |
| Mensaje | textarea | opcional |

Regla: el campo "Plan de interés" SIEMPRE visible (es decisión del usuario; ayuda a clasificar).

## Mensajes de estado

- **Éxito:** `¡Recibido! Te escribimos en menos de 24h.`
- **Error validación:** mensaje inline por campo, en rojo contraste.
- **Error servidor:** `Ups, algo falló al enviar. Inténtalo otra vez o escríbenos por WhatsApp.`

## Flujo tras envío

1. Web muestra éxito + referencia (`PROP-…` se genera al contacto).
2. Notificación a CAT CODE (email/panel).
3. CEO responde en <24h laborables: WhatsApp/email con 1ª preguntas.
4. Se abre propuesta (ver 08_PLANTILLAS/PROPUESTA).

## Canales secundarios

- WhatsApp (primario): mensaje predefinido (ver COPY_CTA.md).
- Email: info@catcode.es (definir) — buzón compartido del equipo.
- Referidos: vía contacto directo con CEO.

## Seguridad / privacidad

- Consentimiento GDPR implícito: checkbox `Acepto recibir información sobre mi plan.` (opt-in, no pre-marcado).
- Datos solo para contacto interno CAT CODE; no se comparten con terceros.
- Backend: supabase/Next (forma = server action o edge function) — ver stack en MASTER_WEB.md.