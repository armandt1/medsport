# Medsport → ATHENAS | Reservas de evaluación

## Alcance

La ruta pública `/reservas` de Medsport se utiliza exclusivamente para reservar la **evaluación inicial Medsport**.
No permite reservar entrenamientos, sesiones kinésicas ni otras prestaciones desde el selector público.

Servicio fijo enviado por el servidor:

```text
evaluacion-inicial
```

El navegador no decide el tipo de servicio y nunca recibe el token de ATHENAS.

## Arquitectura

Medsport `/reservas`
→ `/api/athenas/availability`
→ ATHENAS public availability

Medsport `/reservas`
→ `/api/athenas/book`
→ ATHENAS public bookings

## Requisito de ATHENAS

ATHENAS debe mapear `evaluacion-inicial` a la prestación/agenda de evaluación correspondiente al centro Medsport y reutilizar la lógica real de reservas para validar cupos, conflictos y bloqueo transaccional del horario.

### POST availability
Entrada enviada por Medsport:

```json
{"service":"evaluacion-inicial","date":"2026-08-20"}
```

Respuesta esperada:

```json
{"slots":[{"id":"slot-firmado","time":"10:30","professional":"Profesional","remaining":1}]}
```

### POST bookings
Entrada enviada por Medsport:

```json
{
  "service":"evaluacion-inicial",
  "date":"2026-08-20",
  "slot":"slot-firmado",
  "name":"Nombre",
  "email":"correo@example.com",
  "phone":"+569...",
  "objective":"iniciar-entrenamiento",
  "consent":true,
  "source":"medsport-web-evaluation"
}
```

Respuesta de éxito:

```json
{"confirmed":true,"reference":"ABC123","startsAt":"2026-08-20 10:30","professional":"Profesional"}
```

## Seguridad

- HTTPS obligatorio.
- Token únicamente servidor-servidor.
- Rate limiting en ATHENAS.
- Canal `website-evaluation` autorizado para Medsport.
- El servicio se fija en servidor como `evaluacion-inicial`; no se confía en un servicio enviado por el navegador.
- No aceptar `organization_id` desde el navegador.
- No exponer datos de otros deportistas.
- Solicitar solo contacto y objetivo general; no solicitar antecedentes clínicos detallados en el formulario público.
- La interfaz solo muestra “Evaluación confirmada” si ATHENAS responde `confirmed: true`.

## Despliegue Netlify

Añadir en Site configuration → Environment variables:

- `ATHENAS_PUBLIC_AVAILABILITY_URL`
- `ATHENAS_PUBLIC_BOOKING_URL`
- `ATHENAS_BOOKING_TOKEN`
- `NEXT_PUBLIC_ATHENAS_BOOKING_URL`

Después realizar un redeploy.
