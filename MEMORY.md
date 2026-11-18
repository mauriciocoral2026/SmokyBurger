# MEMORY.md - Smoky Burger

## Estado actual
- Astro 5 + Tailwind 4. `npm run build` OK (9 páginas, 2026-11-18).
- PASO 1 rediseño (2026-11-18): paleta Dark Smokehouse global — fondo #0D0D0D (ruido sutil), superficies #181818, bordes #2A2A2A, acento #FF5500/#E04800, texto #F5F5F5/#A3A3A3 (`src/styles/global.css`).
- Tipografía global: display Oswald (títulos, mayúsculas) y texto/precios Plus Jakarta Sans (`src/layouts/Base.astro`, `global.css`).
- Navbar (`src/components/Header.astro`): sticky `top-0 z-50`, glassmorphism oscuro (`bg #0D0D0D/70`, `backdrop-blur-md`, borde inferior #2A2A2A), enlaces Inicio/Pedir/Ubicación/Paga aquí y botón carrito destacado en naranja con contador visible; menú móvil con estilo oscuro coherente. Verificado en desktop/móvil (390px), consola limpia.
- Tarjetas del menú (`ProductCard.astro`): imagen en contenedor `aspect-[4/5]` con fondo estudio `bg-gradient-to-b from-[#1F1F1F] to-[#141414]` e `<Image>` `w-full h-full object-contain p-2` + hover `group-hover:scale-105` para mostrar burger completa sin recortar.
- Modal de producto (`menu.astro`) y detalle (`menu/[slug].astro`): contenedor de imagen `bg-[#0B0B0B] flex items-center justify-center p-4 md:p-6`; imagen completa `w-full h-auto object-contain rounded-xl` con `max-h-[42vh] md:max-h-[65vh]` en modal y `max-h-[50vh] md:max-h-[65vh]` en slug. Lógica de carga y scripts intactos.
- Carrito (`CartDrawer.astro`): al agregar desde tarjeta/modal se muestra toast 2.5s `fixed top-20 right-4 z-50` "✓ Agregada al pedido" (`#1C1C1C`, `border-orange-500/60`) sin abrir drawer; en móvil (`md:hidden`) barra flotante inferior fija (`#cart-bar`, `bottom-4 inset-x-4 z-40`) con cantidad, "Ver mi pedido" y total en tiempo real que abre el drawer y se oculta si el carrito queda en 0. `menu/[slug].astro` conserva apertura explícita del drawer tras agregar. Lógica/estado, precios, pagos (Efectivo/Bre-B) y WhatsApp intactos.
- Ubicación (`src/pages/ubicacion.astro`, `#ubicacion`): sección 2 columnas (`bg-[#161616] border border-white/10 rounded-3xl`) con badge, título "ENCUÉNTRANOS AFUERA DE NEW PEOPLE", horario, botones "Cómo llegar (Google Maps) ↗" y "Escribir al WhatsApp", e iframe mapa `rounded-2xl h-64 md:h-80 grayscale contrast-125 opacity-90 hover:opacity-100`.
- Pulido UI: separador brasa antes del footer (`via-orange-500/30`) en `Base.astro`; micro-interacciones `cursor-pointer active:scale-95 transition-*` en botones clave (agregar, +/- , pago Efectivo/Bre-B, modal). Imágenes de tarjetas ya con `loading="lazy"`/`decoding="async"`.
- Domicilio $5.000 (`src/config.ts`): drawer muestra Subtotal/Domicilio/Total y WhatsApp incluye las 3 líneas. Checkout responsive; inputs/select/textarea `text-base md:text-sm`.
- Al iniciar se limpia el carrito. Móvil: hero con `clamp()` y `overflow-x: clip` en `html/body`.
- Burgers: `explosion-de-barril.jpg` (1792x2291, ~828 KB) y `alma-barrica.jpg` (1792x1983, ~572 KB) en `public/img/burgers/` (Gaucha usa la foto de Explosión; home usa la de Alma de Barrica). Logo: `smoky-logo.jpg` 600x494, 62 KB. SVG originales en `public/` sin usar: decidir si borrarlos.
- Hero home (`src/pages/index.astro`, PASO 2 corregido 2026-11-18): conserva video `video-barril.mp4`, transición imagen→video y animación `hero-zoom`; overlay `bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/80`, badge "AHUMADAS AL BARRIL • AFUERA DE NEW PEOPLE", "HUMO" en `#FF5500`, botón "PEDIR AHORA".
- Instagram @smoky_burgercartago. WhatsApp +57 320 849 7584. Horario/ubicación en `src/config.ts` (revisar coherencia). 3 burgers: Explosión de Barril, Alma de Barrica, Gaucha.
- `opencode.json` tiene MCP `chrome-devtools`. Postman CLI 1.76.0 inicializado (2026-11-10), workspace no vinculado (`workspace.id` vacío). Validar en navegador el flujo Bre-B → QR en WhatsApp.

## Decisiones importantes
- Web propia + WhatsApp (sin Justo): bajo costo, sin mensualidad.
- Astro estático, sin backend. Tarjeta horizontal tipo Godo Facts (texto 60% / imagen 40%) — pendiente adaptar en pasos de rediseño.
- Imágenes: se extrajo el JPEG embebido en el SVG y se optimizó (de 2,36 MB a 152 KB).
- Domicilio fijo $2.000 por pedido. Consu: no aplica gratis ni por distancia (pendiente ajustar si hace falta).
- Línea secundaria del héroe ajustada a "Ahumado en barril, siempre" para no contradecir el nuevo claim.
- Rediseño UI por pasos (2026-11-18): PASO 1 global Dark Smokehouse + navbar; PASO 2 corregido hero (conserva video/script/animación funcional); PASO 3 menú/tarjetas (`ProductCard.astro`, `data-add-to-cart` intacto); PASO 4 carrito (`CartDrawer.astro`, lógica/IDs/nombres intactos, Efectivo/Bre-B por radios); PASO 5 footer/secciones informativas con enlaces/mapas/scripts preservados. Ajuste móvil carrito (2026-11-18): drawer `h-[100dvh]`/`overflow-hidden`, header y pie fijos compactos, zona central única scrolleable (productos + formulario) para evitar bloqueo en pantallas pequeñas. UX carrito (2026-11-18): header con `← Volver al menú` (`#cart-back-menu`) y cierre `✕` (`#cart-close`), botón `#cart-add-more` bajo ítems (cierra y hace scroll a `#menu/#pedir` si existe) y cierre por backdrop verificado.
- Menú (2026-11-18): modal/lightbox en `menu.astro` al clic en foto/título (datos desde `data-product`, cierre ✕/backdrop/Escape, sin recarga), agrega al carrito reutilizando `data-add-to-cart`; `menu/[slug].astro` con estética 2 columnas, "← Volver al menú" e IDs/scripts de cantidad/carrito intactos.
- Textos (2026-11-18): eliminadas menciones a "cocina oculta" y "punto físico"; comunicación actualizada a venta **afuera de New People, Cartago** (come al paso, recoge o domicilio) en hero/footer/ubicación, con badge "🔥 AHUMADAS AL BARRIL • AFUERA DE NEW PEOPLE" y acceso claro a "Cómo llegar"/mapa.

## Errores a evitar
- Evitar `object-contain` con padding en el hero: puede dejar bandas laterales. En tarjetas/modal/slug sí se usa `object-contain` (con `aspect-[4/5]` o `max-h` y fondo oscuro) para mostrar la burger completa sin recortar.
- No usar nombres `logo.svg` en `public/`: el dev server devolvía 404. Usar `smoky-logo.jpg`.
- No poner inputs del formulario con fuente < 16px en móvil: provoca zoom automático en iOS al enfocar.
- No guardar datos sensibles en el repo.
