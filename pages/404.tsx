import Link from "next/link";

export default function Custom404() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#081521",
        color: "#ffffff",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gap: "48px",
        }}
      >
        <div>
          <div
            aria-hidden="true"
            style={{
              fontSize: "clamp(7rem, 22vw, 15rem)",
              lineHeight: 0.75,
              fontWeight: 700,
              letterSpacing: "-0.08em",
              color: "rgba(255,255,255,.08)",
            }}
          >
            404
          </div>

          <h1
            style={{
              margin: "-24px 0 0",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.06em",
              maxWidth: "820px",
            }}
          >
            Esta ruta
            <br />
            <span style={{ color: "#35D4E6" }}>no existe.</span>
          </h1>

          <p
            style={{
              marginTop: "28px",
              maxWidth: "620px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,.82)",
            }}
          >
            La página que buscas pudo cambiar de dirección o ya no estar
            disponible. Puedes volver al inicio o continuar hacia nuestros
            servicios.
          </p>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "48px",
                padding: "0 24px",
                borderRadius: "999px",
                background: "#2B63F2",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Volver al inicio
            </Link>

            <Link
              href="/planes"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "48px",
                padding: "0 24px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,.22)",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Ver planes
            </Link>

            <Link
              href="/kinesiologia-temuco"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "48px",
                padding: "0 24px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,.22)",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Kinesiología
            </Link>
          </div>
        </div>

        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,.12)",
            paddingTop: "24px",
            color: "rgba(255,255,255,.65)",
            fontSize: "14px",
          }}
        >
          Medsport · Rehabilitación y Entrenamiento · Temuco
        </footer>
      </section>
    </main>
  );
}
