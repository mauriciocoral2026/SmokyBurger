# MEMORY.md - Smoky Burger

## Estado actual
- Astro 5 + Tailwind 4. `npm run build` OK (8 páginas, 2026-11-09).
- Paleta Godo Facts: fondo #EFE9DC, primario #FF520D, tinta #262626, destacado #FFC03C.
- Titular héroe: "Burger ahumadas en barril." Subtítulo: "No es parrilla es humo".
- Botón carrito naranja (#FF520D, como "Ver menú"), contador blanco sobre naranja.
- Domicilio $5.000 (en `src/config.ts`, una vez por pedido, no por ítem):
  drawer muestra Subtotal / Domicilio / Total y el mensaje de WhatsApp incluye las 3 líneas.
- Checkout (CartDrawer): pago `Efectivo` o `Bre-B` (el flujo actual en disco envía el QR
  Bre-B al WhatsApp del cliente; confirmar intención). Form responsive: grids 1 col en
  móvil, 2 cols desde `sm`; inputs/select con `min-w-0`, teléfono `inputmode="numeric"`.
- Al iniciar la app se limpia el carrito (`localStorage` + render vacío). Móvil: hero con
  `clamp()` y `overflow-x: clip` en `html/body` para evitar desborde (validado 320/390/430,
  sin overflow ni errores de consola, 2026-11-09).
- Burger: `explosion-de-barril.jpg` 720x959, 152 KB. Logo: `smoky-logo.jpg` 600x494, 62 KB.
  SVG originales en `public/` sin usar (2,7 MB en dist): decidir si borrarlos.
- Instagram @smoky_burgercartago. WhatsApp +57 320 849 7584.
- Horario y ubicación en `src/config.ts` (revisar coherencia: memoria decía mié-vie; config lista viernes).
- 3 burgers: Explosión de Barril, Alma de Barrica, Gaucha.
- Verificado 2026-11-06 (Chrome DevTools) y build 2026-11-09. `opencode.json` tiene MCP
  `chrome-devtools` (`chrome-devtools-mcp@latest`, sin `--autoConnect`); requiere Chrome/
  entorno que permita lanzar o conectar el navegador para pruebas automáticas. Validar en
  navegador el flujo Bre-B → QR en WhatsApp (390px/320px, consola limpia).

## Decisiones importantes
- Web propia + WhatsApp (sin Justo): bajo costo, sin mensualidad.
- Astro estático, sin backend. Tarjeta horizontal tipo Godo Facts (texto 60% / imagen 40%).
- Imágenes: se extrajo el JPEG embebido en el SVG y se optimizó (de 2,36 MB a 152 KB).
- Domicilio fijo $2.000 por pedido. Consu: no aplica gratis ni por distancia (pendiente ajustar si hace falta).
- Línea secundaria del héroe ajustada a "Ahumado en barril, siempre" para no contradecir el nuevo claim.

## Errores a evitar
- No volver a `object-contain` con padding en tarjeta/héroe: la foto a color deja bandas laterales.
- No usar nombres `logo.svg` en `public/`: el dev server devolvía 404. Usar `smoky-logo.jpg`.
- No guardar datos sensibles en el repo.
