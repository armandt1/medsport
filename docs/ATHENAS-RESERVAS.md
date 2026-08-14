# Medsport → ATHENAS | Reservas web

## Arquitectura

El navegador nunca recibe el token de ATHENAS.

Medsport `/reservas`
→ `/api/athenas/availability`
→ ATHENAS public availability

Medsport `/reservas`
→ `/api/athenas/book`
→ ATHENAS public bookings

## Requisito de ATHENAS

ATHENAS debe exponer un gateway público limitado al centro Medsport que reutilice la lógica real de `booking_lib.php` y confirme una reserva únicamente después de bloquear el horario de forma transaccional.

Contrato esperado:

### POST availability
Entrada mínima:
```json
{"service":"kinesiologia","date":"2026-08-20"}
```
Respuesta:
```json
{"slots":[{"id":"slot-firmado","time":"10:30","professional":"Profesional","remaining":1}]}
```

### POST bookings
Entrada mínima:
```json
{"service":"kinesiologia","date":"2026-08-20","slot":"slot-firmado","name":"Nombre","email":"correo@example.com","phone":"+569...","consent":true,"source":"medsport-web"}
```
Respuesta de éxito:
```json
{"confirmed":true,"reference":"ABC123","startsAt":"2026-08-20 10:30","professional":"Profesional"}
```

## Seguridad
- HTTPS.
- Token solo servidor-servidor.
- Rate limiting en ATHENAS.
- Origen/canal Medsport autorizado.
- No aceptar `organization_id` desde el navegador.
- No exponer datos de otros deportistas.
- Solo datos de contacto mínimos; no solicitar información clínica detallada en el formulario público.
- La UI solo muestra “Hora confirmada” si ATHENAS responde `confirmed: true`.

## Despliegue Netlify
Añadir en Site configuration → Environment variables:
- `ATHENAS_PUBLIC_AVAILABILITY_URL`
- `ATHENAS_PUBLIC_BOOKING_URL`
- `ATHENAS_BOOKING_TOKEN`
- `NEXT_PUBLIC_ATHENAS_BOOKING_URL`

Después redeploy.
