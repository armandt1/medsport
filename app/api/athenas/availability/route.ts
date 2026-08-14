import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function endpoint() {
  return process.env.ATHENAS_PUBLIC_AVAILABILITY_URL?.trim();
}

export async function POST(request: Request) {
  const url = endpoint();
  const token = process.env.ATHENAS_BOOKING_TOKEN?.trim();
  if (!url || !token) {
    return NextResponse.json({ ok: false, message: "La agenda online todavía no está habilitada en este entorno." }, { status: 503 });
  }

  let body: { service?: string; date?: string };
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, message: "Solicitud inválida." }, { status: 400 }); }
  if (!body.service || !/^\d{4}-\d{2}-\d{2}$/.test(body.date || "")) {
    return NextResponse.json({ ok: false, message: "Servicio o fecha inválidos." }, { status: 400 });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-VT1-Booking-Token": token,
        "X-Medsport-Channel": "website",
      },
      body: JSON.stringify({ service: body.service, date: body.date }),
      cache: "no-store",
      signal: controller.signal,
    });
    const data = await upstream.json().catch(() => null);
    if (!upstream.ok) {
      return NextResponse.json({ ok: false, message: data?.message || "ATHENAS no pudo consultar la disponibilidad." }, { status: upstream.status >= 500 ? 502 : 400 });
    }
    const source = Array.isArray(data?.slots) ? data.slots : [];
    const slots = source.slice(0, 40).map((slot: any, index: number) => ({
      id: String(slot.id ?? slot.slot ?? index),
      time: String(slot.time ?? slot.label ?? ""),
      professional: slot.professional ? String(slot.professional) : undefined,
      location: slot.location ? String(slot.location) : undefined,
      remaining: Number.isFinite(Number(slot.remaining)) ? Number(slot.remaining) : undefined,
      startsAt: slot.startsAt ? String(slot.startsAt) : undefined,
    })).filter((slot: any) => slot.id && slot.time);
    return NextResponse.json({ ok: true, slots }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false, message: "No fue posible conectar con ATHENAS." }, { status: 502 });
  } finally {
    clearTimeout(timer);
  }
}
