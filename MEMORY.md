# MEMORY.md - Smoky Burger

## Estado actual
- Astro 5 + Tailwind 4. `npm run build` OK (9 páginas, 2026-11-10).
- Paleta Godo Facts: fondo #EFE9DC, primario #FF520D, tinta #262626, destacado #FFC03C.
- Header: nav desktop (`md:flex`) + menú móvil hamburguesa con enlaces Inicio, Pedir, Ubicación y Paga aquí (`src/components/Header.astro`), verificado en 390px (toggle/selección, consola limpia, 2026-11-10).
- Botón carrito naranja (#FF520D), contador blanco sobre naranja.
- Domicilio $5.000 (en `src/config.ts`, una vez por pedido): drawer muestra Subtotal / Domicilio / Total y WhatsApp incluye las 3 líneas.
- Checkout (CartDrawer): pago `Efectivo` o `Bre-B` (flujo actual envía QR Bre-B al WhatsApp del cliente; confirmar intención). Form responsive (1 col móvil, 2 cols desde `sm`); inputs/select/textarea con `text-base md:text-sm` para evitar zoom en iOS.
- Al iniciar se limpia el carrito. Móvil: hero con `clamp()` y `overflow-x: clip` en `html/body`.
- Burgers: `explosion-de-barril.jpg` (1792x2291, ~828 KB) y `alma-barrica.jpg` (1792x1983, ~572 KB) en `public/img/burgers/` (Gaucha usa la foto de Explosión; home usa la de Alma de Barrica). Logo: `smoky-logo.jpg` 600x494, 62 KB. SVG originales en `public/` sin usar: decidir si borrarlos.
- Hero home (`src/pages/index.astro`): fondo con `video-barril.mp4` (`public/img/burgers/`, ~3.2 MB) en todos los dispositivos (autoplay/muted/loop/playsinline, poster imagen hero) y fallback a imagen estática solo con `prefers-reduced-motion: reduce` (overlay y contenido iguales). `dist/img/burgers/video-barril.mov` (~11 MB) existe pero no se usa en web.
- Instagram @smoky_burgercartago. WhatsApp +57 320 849 7584. Horario/ubicación en `src/config.ts` (revisar coherencia).
- 3 burgers: Explosión de Barril, Alma de Barrica, Gaucha.
- `opencode.json` tiene MCP `chrome-devtools`; requiere Chrome/entorno que permita lanzar/conectar para pruebas automáticas. Validar en navegador el flujo Bre-B → QR en WhatsApp.
- Postman (CLI 1.76.0): `postman init -y --visibility personal` ejecutado (2026-11-10). Se crearon `.postman/resources.yaml` y `.postman/skills.json`, carpeta `postman/` (collections/environments/flows/globals/sdks/skills/specs) y 19 skills; `AGENTS.md` actualizado con bloque `<API_TASKS>`. Workspace **no vinculado** aún (`workspace.id` vacío) porque no hay sesión iniciada (`postman whoami` sin cuenta).

## Decisiones importantes
- Web propia + WhatsApp (sin Justo): bajo costo, sin mensualidad.
- Astro estático, sin backend. Tarjeta horizontal tipo Godo Facts (texto 60% / imagen 40%).
- Imágenes: se extrajo el JPEG embebido en el SVG y se optimizó (de 2,36 MB a 152 KB).
- Domicilio fijo $2.000 por pedido. Consu: no aplica gratis ni por distancia (pendiente ajustar si hace falta).
- Línea secundaria del héroe ajustada a "Ahumado en barril, siempre" para no contradecir el nuevo claim.
- Héroe con video de fondo en todos los dispositivos y fallback solo con `prefers-reduced-motion: reduce` (2026-11-10): ajuste para que el video se visualice también en móvil/dispositivo. Recurso usado: `video-barril.mp4` existente (no se añadió `.webm` ni recorte de bucle); evaluar peso/LCP en datos móviles si hace falta.

## Errores a evitar
- No volver a `object-contain` con padding en tarjeta/héroe: la foto a color deja bandas laterales.
- No usar nombres `logo.svg` en `public/`: el dev server devolvía 404. Usar `smoky-logo.jpg`.
- No poner inputs del formulario con fuente < 16px en móvil: provoca zoom automático en iOS al enfocar.
- No guardar datos sensibles en el repo.
