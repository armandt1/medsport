import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const MEDSPORT_EVALUATION_SERVICE = "evaluacion-inicial";

export async function POST(request: Request) {
  const url = process.env.ATHENAS_PUBLIC_BOOKING_URL?.trim();
  const token = process.env.ATHENAS_BOOKING_TOKEN?.trim();

  if (!url || !token) {
    return NextResponse.json(
      { ok: false, message: "La confirmación de evaluaciones todavía no está habilitada en este entorno." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Solicitud inválida." }, { status: 400 });
  }

  const date = String(body.date || "");
  const slot = String(body.slot || "").slice(0, 160);
  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().slice(0, 180);
  const phone = String(body.phone || "").trim().slice(0, 60);
  const objective = String(body.objective || "").trim().slice(0, 120);
  const notes = String(body.notes || "").trim().slice(0, 400);
  const consent = body.consent === true;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !slot || !name || !email || !phone || !objective || !consent) {
    return NextResponse.json(
      { ok: false, message: "Completa los datos requeridos para reservar tu evaluación." },
      { status: 400 },
    );
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, message: "El correo ingresado no es válido." }, { status: 400 });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-VT1-Booking-Token": token,
        "X-Medsport-Channel": "website-evaluation",
      },
      body: JSON.stringify({
        service: MEDSPORT_EVALUATION_SERVICE,
        date,
        slot,
        name,
        email,
        phone,
        objective,
        notes,
        consent,
        source: "medsport-web-evaluation",
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    const data = await upstream.json().catch(() => null);
    if (!upstream.ok || data?.confirmed !== true) {
      return NextResponse.json(
        { ok: false, message: data?.message || "ATHENAS no confirmó el bloqueo del horario de evaluación." },
        { status: upstream.status >= 500 ? 502 : 409 },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        confirmed: true,
        reference: data.reference ? String(data.reference) : undefined,
        startsAt: data.startsAt ? String(data.startsAt) : undefined,
        professional: data.professional ? String(data.professional) : undefined,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "No fue posible conectar con ATHENAS para confirmar la evaluación." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timer);
  }
}
