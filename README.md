# Medsport Web v1.0.10 — SEO local, IA, conversión y coberturas de kinesiología

Sitio de Centro Medsport Temuco construido con Next.js 14, React 18, TypeScript, Tailwind CSS, estructura shadcn-ready, lucide-react y parallax GSAP cargado bajo demanda.

## Cambio v1.0.10 — FONASA, Isapres y seguros

- Se indica de forma visible que Medsport atiende kinesiología con bono FONASA.
- Se agregan preguntas frecuentes sobre reembolso de atenciones kinésicas por Isapres según plan.
- Se indica que los seguros complementarios requieren derivación médica y que cobertura/documentación dependen de cada asegurador.
- La información también se incorpora a las páginas SEO de Kinesiología y Rehabilitación y al FAQPage estructurado de la portada.


## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Cambio principal v1.0.7

### Conversión / psicología de comunicación

Los planes y el checkout usan persuasión ética orientada a disminuir fricción, sin falsas urgencias ni escasez inventada:

- compromiso y consistencia: después de elegir un plan, el mensaje conecta esa decisión con un siguiente paso concreto;
- reducción de carga cognitiva: el checkout explica `Elegir → Pagar seguro → Coordinar`;
- encuadre de beneficio: se enfatiza dejar resuelta la inscripción para concentrarse en entrenar;
- congruencia contenido/relación: tono profesional, claro y no agresivo;
- autonomía: antes de pagar se invita a comprobar plan, monto y modalidad y a volver atrás si todavía existen dudas.

No se usan contadores falsos, “últimos cupos”, descuentos inexistentes ni presión artificial.

### SEO local Temuco

Se agregaron páginas indexables con contenido propio para intenciones de búsqueda relevantes:

- `/kinesiologia-temuco`
- `/rehabilitacion-deportiva-temuco`
- `/entrenamiento-personalizado-temuco`
- `/entrenamiento-deportivo-temuco`
- `/planes`

La home incorpora contenido local natural para Temuco, Av. Alemania, Paseo Los Suizos y sectores cercanos, evitando repetir palabras clave de forma artificial.

### SEO técnico / búsquedas con IA

Incluye:

- metadata única por página;
- títulos y descripciones orientados a intención de búsqueda;
- canonical URLs;
- Open Graph y Twitter cards;
- imagen OG generada por Next.js;
- `robots.txt` generado desde `app/robots.ts`;
- `sitemap.xml` generado desde `app/sitemap.ts`;
- PWA manifest básico;
- JSON-LD de `Organization`, `WebSite`, `LocalBusiness`, `SportsActivityLocation`, `Service`, `Offer`, `BreadcrumbList` y `FAQPage`;
- NAP consistente: nombre, dirección y teléfono;
- enlaces internos entre servicios y planes;
- contenido FAQ visible y estructurado;
- HTML semántico y contenido crítico renderizado en servidor;
- `data-nosnippet` en Team mientras los perfiles sean demostrativos;
- `public/llms.txt` como índice opcional para sistemas que decidan leerlo. Google no necesita `llms.txt` para Search ni para sus funciones generativas; el HTML público, la indexación y el SEO tradicional siguen siendo la base.

## URL pública: obligatorio antes de publicar

Copia el archivo de variables:

```bash
cp .env.example .env.local
```

Verifica:

```text
NEXT_PUBLIC_SITE_URL=https://TU-DOMINIO-REAL.cl
```

El proyecto usa `https://www.vt1performance.cl` como fallback porque existe una referencia pública histórica de Medsport a ese dominio. Si el nuevo sitio quedará en otro dominio o subdominio, cambia `NEXT_PUBLIC_SITE_URL` antes de producción. Esto afecta canonical, sitemap, Open Graph y JSON-LD.

## Pago con tarjeta

Configura las URLs públicas de checkout de la pasarela:

```text
NEXT_PUBLIC_PAYMENT_ONE_URL=
NEXT_PUBLIC_PAYMENT_DUO_URL=
NEXT_PUBLIC_PAYMENT_TRIO_URL=
NEXT_PUBLIC_PAYMENT_FREE_URL=
```

El sitio nunca solicita ni almacena PAN/CVV. Si estas variables están vacías, el usuario solicita el link seguro por WhatsApp.

## Rendimiento / PageSpeed Insights

Optimización aplicada:

- `next/image` para hero y FAQ con AVIF/WebP y tamaños responsivos;
- hero marcado como imagen prioritaria para LCP;
- imágenes secundarias con carga diferida de Next Image;
- fuentes con `next/font`, `display: swap` y sin CSS de Google Fonts externo;
- Home principal convertida a Server Component;
- GSAP ya no entra en el bundle crítico: se importa dinámicamente solo cuando el usuario comienza a hacer scroll;
- Lenis eliminado para reducir JavaScript y trabajo del hilo principal;
- `lucide-react` con `optimizePackageImports`;
- compresión activada;
- cache de imágenes optimizadas configurada;
- soporte `prefers-reduced-motion`;
- checkout fuera del índice (`noindex`) y fuera del sitemap.

Un puntaje 100/100 no puede garantizarse desde código aislado: también depende del hosting, TTFB, CDN, peso de las fotografías reales, scripts de analítica, pasarela, conexión del usuario y datos de campo. La validación final debe hacerse sobre la URL pública en PageSpeed Insights.

## Después de publicar

1. Verificar dominio en Google Search Console.
2. Enviar `/sitemap.xml`.
3. Probar páginas principales con URL Inspection.
4. Validar JSON-LD con Rich Results Test.
5. Mantener Google Business Profile, AgendaPro y redes con el mismo nombre, dirección, teléfono y URL. Antes de publicar, revisar especialmente AgendaPro: resultados públicos todavía pueden mostrar una dirección antigua, mientras los canales recientes de Medsport indican Av. Alemania 425, local 205, Paseo Los Suizos. La consistencia NAP es prioritaria para SEO local y confianza.
6. Reemplazar imágenes de Unsplash por fotos reales optimizadas de Medsport en WebP/AVIF.
7. Reemplazar los 5 perfiles demostrativos del Team por nombres, fotografías, formación, registro y certificaciones reales.
8. Ejecutar PageSpeed Insights en móvil y escritorio después del despliegue.
9. Revisar el rendimiento de consultas como `kinesiología Temuco`, `rehabilitación deportiva Temuco`, `entrenamiento personalizado Temuco` y `entrenamiento deportivo Temuco` en Search Console; no crear páginas repetitivas solo para capturar variaciones de keywords.

## Estructura clave

```text
app/
  page.tsx
  layout.tsx
  sitemap.ts
  robots.ts
  manifest.ts
  opengraph-image.tsx
  pago/page.tsx
  planes/page.tsx
  kinesiologia-temuco/page.tsx
  rehabilitacion-deportiva-temuco/page.tsx
  entrenamiento-personalizado-temuco/page.tsx
  entrenamiento-deportivo-temuco/page.tsx
components/
  home-page.tsx
  service-landing.tsx
  site-header.tsx
  json-ld.tsx
  ui/
lib/
  site.ts
  services.ts
  plans.ts
  seo.ts
public/
  llms.txt
```

## Logo y Team

El wordmark `MEDSPORT` con la letra M sigue siendo temporal. Para producción debe reemplazarse por el logo original del cliente. Los cinco perfiles de profesionales continúan como plantilla; no se inventaron nombres ni certificaciones.


## Cambio v1.0.7

Nuevo concepto de hero:

- **TU OBJETIVO MERECE MÁS QUE UNA RUTINA.**
- **Merece evaluación. Estrategia. Seguimiento.**

Se ajustó la escala tipográfica responsive del H1 para conservar impacto sin provocar desbordes en móvil o tablet.
