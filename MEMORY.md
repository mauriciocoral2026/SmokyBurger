# MEMORY.md - Smoky Burger

## Estado actual
- Astro 5 + Tailwind 4, dev en http://127.0.0.1:4321. Build 8 páginas OK.
- Paleta Godo Facts: fondo #EFE9DC, primario #FF520D, tinta #262626, destacado #FFC03C.
- Titular héroe: "Burger ahumadas en barril." Subtítulo: "No es parrilla es humo".
- Botón carrito naranja (#FF520D, como "Ver menú"), contador blanco sobre naranja.
- Domicilio $2.000 (en `src/config.ts`, una vez por pedido, no por ítem):
  drawer muestra Subtotal / Domicilio / Total y el mensaje de WhatsApp incluye las 3 líneas.
- Burger: `explosion-de-barril.jpg` 720x959, 152 KB. Logo: `smoky-logo.jpg` 600x494, 62 KB.
  Los SVG originales quedan en `public/` sin usar (2,7 MB en dist): decidir si borrarlos.
- Tarjeta horizontal tipo Godo Facts con `object-cover`. Héroe `object-cover` 4:3,
  detalle `object-contain` sobre blanco, carrito `object-cover`.
- Instagram @smoky_burgercartago. WhatsApp +57 320 849 7584.
- Horario: miércoles a viernes 12:00 pm – 9:00 pm. Ubicación Cartago, Valle del Cauca.
- 3 burgers: Explosión de Barril, Alma de Barrica, Gaucha.
- Verificado con Chrome DevTools 2026-11-06: desktop 1280px y móvil 390px sin errores
  en consola, sin overflow; carrito 2x $28.500 = $57.000 + $2.000 domicilio = $59.000.

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
