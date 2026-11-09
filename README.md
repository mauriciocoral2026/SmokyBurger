# SmokyBurger

Landing + menú + carrito + pedido por WhatsApp para cocina oculta de burgers.  
Stack: **Astro 5 + Tailwind CSS 4** — estático, sin backend, deploy gratis en Vercel/Cloudflare.

## Arranque rápido

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # previsualiza el build
```

## Dónde editas qué

| Quieres cambiar... | Edita |
|---|---|
| Menú, precios, descripciones | `src/data/menu.ts` |
| Nombre, WhatsApp, horarios, Instagram | `src/config.ts` |
| Fotos (temporales) | `public/img/burgers/*.svg` → reemplaza por `.jpg/.webp` y actualiza `foto` en `menu.ts` |
| Textos de portada | `src/pages/index.astro` |
| Anuncios / cobertura | `src/pages/ubicacion.astro` |

## Fotos reales (pendiente)

Los archivos actuales en `public/img/burgers/` son placeholders SVG con el nombre del producto.
Para subir fotos reales:

1. Copia tu foto como `public/img/burgers/smoky-classic.jpg` (ideal 800×600, <200 KB, fondo claro).
2. En `src/data/menu.ts`, cambia `foto: "/img/burgers/smoky-classic.svg"` → `foto: "/img/burgers/smoky-classic.jpg"`.
3. Corre `npm run build` y despliega.

## Pedidos por WhatsApp

El botón de checkout abre:

```
https://wa.me/573001234567?text=Hola SmokyBurger, quiero pedir:...
```

Cambia el número en `src/config.ts` → `whatsappNumber` (solo dígitos con código país, sin `+` ni espacios).

## Deploy

- **Vercel:** importa el repo, framework preset = Astro, `npm run build`, output `dist`.
- **Cloudflare Pages:** Build command `npm run build`, output `dist`.

## Estructura

```
src/
  components/  Header, Footer, ProductCard, CartDrawer
  data/menu.ts Menú (3 burgers placeholder)
  config.ts    Marca y contacto
  layouts/Base.astro
  pages/       index, menu, menu/[slug], ubicacion, terminos, privacidad
  styles/global.css
public/img/burgers/  placeholders SVG
```
