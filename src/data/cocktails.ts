export interface Cocktail {
  id: string;
  name: string;
  description: string;
  category: 'Clásicos' | 'Especiales Tiki' | 'Autóctonos & Shots';
  hasAlcohol: boolean;
  gradient: string; // Tailwind background gradient for visual presentation
  tags: string[];
}

export const COCKTAILS: Cocktail[] = [
  {
    id: 'mojito-clasico',
    name: 'Mojito Clásico',
    description: 'La frescura definitiva: ron blanco premium, hojas de menta fresca cultivada localmente, azúcar de caña y un toque cítrico de limón criollo con soda carbonatada.',
    category: 'Clásicos',
    hasAlcohol: true,
    gradient: 'from-emerald-500/20 to-teal-700/20 border-emerald-500/35',
    tags: ['Fresco', 'Menta', 'Ron', 'Cítrico']
  },
  {
    id: 'mojito-fresa',
    name: 'Mojito de Fresa',
    description: 'Un giro tropical dulce al clásico cubano, incorporando fresas frescas costarricenses maceradas que aportan un color vibrante y un sabor irresistible.',
    category: 'Clásicos',
    hasAlcohol: true,
    gradient: 'from-rose-500/20 to-red-700/20 border-rose-500/35',
    tags: ['Frutal', 'Dulce', 'Ron', 'Fresas']
  },
  {
    id: 'cacique-sour',
    name: 'Cacique Sour',
    description: 'Orgullo de nuestra tierra. El icónico Guaro Cacique mezclado con almíbar simple, abundante jugo de limón fresco y una clara de huevo batida para una espuma sedosa.',
    category: 'Autóctonos & Shots',
    hasAlcohol: true,
    gradient: 'from-lime-500/20 to-green-700/20 border-lime-500/35',
    tags: ['Nacional', 'Ácido', 'Cacique', 'Tradicional']
  },
  {
    id: 'guaro-tiki',
    name: 'Guaro Tiki',
    description: 'La creación insignia de la casa: Guaro Cacique Superior infusionado con maracuyá, jugo de piña, sirope de granadina artesanal y un toque secreto de especias tropicales.',
    category: 'Especiales Tiki',
    hasAlcohol: true,
    gradient: 'from-orange-500/20 to-yellow-600/20 border-orange-500/35',
    tags: ['Firma', 'Maracuyá', 'Exótico', 'Especias']
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    description: 'La reina de la playa: crema de coco densa, jugo de piña fresca y ron dorado, licuado a la perfección. Servido con una rodaja de piña asada.',
    category: 'Clásicos',
    hasAlcohol: true,
    gradient: 'from-amber-400/20 to-yellow-600/20 border-amber-500/35',
    tags: ['Cremoso', 'Coco', 'Piña', 'Ron']
  },
  {
    id: 'margarita-tropical',
    name: 'Margarita Tropical',
    description: 'Tequila reposado, triple sec, y una mezcla refrescante de pulpa de mango, maracuyá y limón criollo, con un borde escarchado de sal de mar de Costa Rica y chile tajín.',
    category: 'Especiales Tiki',
    hasAlcohol: true,
    gradient: 'from-yellow-500/20 to-orange-600/20 border-yellow-500/35',
    tags: ['Tequila', 'Fruta', 'Mango', 'Picante']
  },
  {
    id: 'chiliguaro-premium',
    name: 'Chiliguaro Premium',
    description: 'El shot definitivo costarricense: Guaro Cacique, jugo de tomate sazonado con nuestra salsa secreta de chiles locales, limón criollo y una pizca de sal marina.',
    category: 'Autóctonos & Shots',
    hasAlcohol: true,
    gradient: 'from-red-600/20 to-orange-700/20 border-red-500/35',
    tags: ['Shot', 'Nacional', 'Picante', 'Popular']
  },
  {
    id: 'cervezas-costarricenses',
    name: 'Cervezas Costarricenses',
    description: 'Selección de cervezas nacionales bien frías: Imperial, Pilsen, o alternativas artesanales locales de microcervecerías costarricenses según tu preferencia.',
    category: 'Autóctonos & Shots',
    hasAlcohol: true,
    gradient: 'from-blue-500/20 to-indigo-700/20 border-blue-500/35',
    tags: ['Fría', 'Nacional', 'Lager', 'Artesanal']
  }
];
