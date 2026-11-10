export type Producto = {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  ingredientes: string[];
  precio: number; // COP
  foto: string;
  fotoW: number;
  fotoH: number;
  categoria: string;
  badge?: string;
  popular?: boolean;
};

export const categorias = ['Burgers'] as const;

export const productos: Producto[] = [
  {
    id: 'explosion-de-barril',
    slug: 'explosion-de-barril',
    nombre: 'Explosión de Barril — Smoky Burger',
    descripcion:
      'Una verdadera explosión de sabor artesanal, pan brioche perfectamente tostado, carne jugosa ahumada al barril con trocitos de plátano maduro, cebolla caramelizada que aporta el toque dulce ideal y queso fundido de calidad. Una combinación irresistible que no vas a querer compartir.',
    ingredientes: ['Pan brioche tostado', 'Carne jugosa ahumada al barril', 'Plátano maduro', 'Cebolla caramelizada', 'Queso colby jack'],
    precio: 28000,
    foto: '/img/burgers/explosion-de-barril.jpg',
    fotoW: 1792,
    fotoH: 2291,
    categoria: 'Burgers',
    popular: true,
  },
  {
    id: 'alma-de-barrica',
    slug: 'alma-de-barrica',
    nombre: 'Alma de Barrica — Smoky Burger',
    descripcion:
      'Carne de costilla y morrillo, queso colby jack y philadelphia, cebolla caramelizada, trocitos de chicharrón y salsa especial de la casa.',
    ingredientes: ['Carne de costilla y morrillo', 'Queso colby jack', 'Queso philadelphia', 'Cebolla caramelizada', 'Chicharrón', 'Salsa especial de la casa'],
    precio: 28000,
    foto: '/img/burgers/alma-barrica.jpg',
    fotoW: 1792,
    fotoH: 1983,
    categoria: 'Burgers',
    badge: 'Alma de Barrica',
    popular: true,
  },
  {
    id: 'gaucha',
    slug: 'gaucha',
    nombre: 'Gaucha — Smoky Burger',
    descripcion:
      'Una explosión de sabor con espíritu argentino. Jugoso chorizo bañado en chimichurri, queso Gouda fundido y nuestro suave pan brioche, acompañado de una irresistible salsa de la casa a base de Jack Daniel’s. Una combinación ahumada, intensa y llena de carácter, creada para quienes disfrutan una burger fuera de lo común.',
    ingredientes: ['Chorizo jugoso', 'Chimichurri', 'Queso Gouda fundido', 'Pan brioche', 'Salsa de la casa a base de Jack Daniel’s'],
    precio: 29000,
    foto: '/img/burgers/explosion-de-barril.jpg',
    fotoW: 1792,
    fotoH: 2291,
    categoria: 'Burgers',
    badge: 'Argentina',
    popular: true,
  },
];

export function formatCOP(n: number) {
  return '$' + n.toLocaleString('es-CO');
}

export function getProducto(slug: string) {
  return productos.find((p) => p.slug === slug);
}
