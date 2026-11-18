# MEMORY.md - Smoky Burger

## Estado actual
- Astro 5 + Tailwind 4. `npm run build` OK (9 páginas, 2026-11-10).
- PASO 1 rediseño (2026-11-18): paleta Dark Smokehouse global — fondo #0D0D0D (ruido sutil), superficies #181818, bordes #2A2A2A, acento #FF5500/#E04800, texto #F5F5F5/#A3A3A3 (`src/styles/global.css`).
- Tipografía global: display Oswald (títulos, mayúsculas) y texto/precios Plus Jakarta Sans (`src/layouts/Base.astro`, `global.css`).
- Navbar (`src/components/Header.astro`): sticky `top-0 z-50`, glassmorphism oscuro (`bg #0D0D0D/70`, `backdrop-blur-md`, borde inferior #2A2A2A), enlaces Inicio/Pedir/Ubicación/Paga aquí y botón carrito destacado en naranja con contador visible; menú móvil con estilo oscuro coherente. Verificado en desktop/móvil (390px), consola limpia.
- Tarjetas del menú y carrito lateral aún sin rediseño específico (solo heredan estilos globales del PASO 1).
- Domicilio $5.000 (en `src/config.ts`, una vez por pedido): drawer muestra Subtotal / Domicilio / Total y WhatsApp incluye las 3 líneas.
- Checkout (CartDrawer): pago `Efectivo` o `Bre-B` (flujo actual envía QR Bre-B al WhatsApp del cliente; confirmar intención). Form responsive (1 col móvil, 2 cols desde `sm`); inputs/select/textarea con `text-base md:text-sm` para evitar zoom en iOS.
- Al iniciar se limpia el carrito. Móvil: hero con `clamp()` y `overflow-x: clip` en `html/body`.
- Burgers: `explosion-de-barril.jpg` (1792x2291, ~828 KB) y `alma-barrica.jpg` (1792x1983, ~572 KB) en `public/img/burgers/` (Gaucha usa la foto de Explosión; home usa la de Alma de Barrica). Logo: `smoky-logo.jpg` 600x494, 62 KB. SVG originales en `public/` sin usar: decidir si borrarlos.
- Hero home (`src/pages/index.astro`, PASO 2 corregido 2026-11-18): se conserva la estructura funcional (video de fondo `video-barril.mp4`, script de transición a los 10s imagen→video y animación `hero-zoom`/clases `hero-bg hero-fallback` de reducción de la burger). Ajustes visuales: overlay `bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/80`, badge translúcido "AHUMADAS AL BARRIL", título display grande con "HUMO" en `#FF5500` y sombra de texto, botón "PEDIR AHORA" (`rounded-xl`, sombra luminosa) y brillo cálido sutil en la imagen animada.
- Instagram @smoky_burgercartago. WhatsApp +57 320 849 7584. Horario/ubicación en `src/config.ts` (revisar coherencia).
- 3 burgers: Explosión de Barril, Alma de Barrica, Gaucha.
- `opencode.json` tiene MCP `chrome-devtools`; requiere Chrome/entorno que permita lanzar/conectar para pruebas automáticas. Validar en navegador el flujo Bre-B → QR en WhatsApp.
- Postman (CLI 1.76.0): `postman init -y --visibility personal` ejecutado (2026-11-10). Se crearon `.postman/resources.yaml` y `.postman/skills.json`, carpeta `postman/` (collections/environments/flows/globals/sdks/skills/specs) y 19 skills; `AGENTS.md` actualizado con bloque `<API_TASKS>`. Workspace **no vinculado** aún (`workspace.id` vacío) porque no hay sesión iniciada (`postman whoami` sin cuenta).

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
- No volver a `object-contain` con padding en tarjeta/héroe: la foto a color deja bandas laterales.
- No usar nombres `logo.svg` en `public/`: el dev server devolvía 404. Usar `smoky-logo.jpg`.
- No poner inputs del formulario con fuente < 16px en móvil: provoca zoom automático en iOS al enfocar.
- No guardar datos sensibles en el repo.
