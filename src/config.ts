export const config = {
  brand: 'SmokyBurger',
  tagline: 'Burgers ahumadas en barril',
  description:
    'SmokyBurger — burgers ahumadas al barril, pide online. Cocina oculta, despacho a domicilio rápido y caliente.',
  /** Número de WhatsApp en formato internacional, solo dígitos: 57 + tu número */
  whatsappNumber: '573208497584',
  whatsappDisplay: '+57 320 849 7584',
  email: 'hola@smokyburger.co',
  instagram: 'https://instagram.com/smoky_burgercartago',
  instagramHandle: '@smoky_burgercartago',
  address: 'Cocina oculta — Cartago, Valle del Cauca, Colombia',
  hours: [
    { days: 'viernes', time: '14:00 pm – 9:00 pm' },
  ],
  deliveryZone: 'Cartago, Valle del Cauca',
  deliveryCost: 5000,
  baseUrl: 'https://smokyburger.vercel.app',
};

export function whatsappLink(message: string) {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
