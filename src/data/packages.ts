export interface Package {
  id: string;
  name: string;
  badge?: string; // "Popular", "Recomendado", "Premium", etc.
  description: string;
  suggestedGuests: string;
  hoursOfService: number;
  bartendersCount: number;
  cocktailsIncludedCount: number;
  cocktailsDescription: string;
  features: string[];
}

export const PACKAGES: Package[] = [
  {
    id: 'paquete-ola-tiki',
    name: 'Paquete Ola Tiki',
    badge: 'Esencial',
    description: 'Ideal para reuniones íntimas, reuniones de amigos y celebraciones pequeñas donde buscas un toque tropical y profesional sin complicaciones.',
    suggestedGuests: 'Hasta 20 personas',
    hoursOfService: 3,
    bartendersCount: 1,
    cocktailsIncludedCount: 3,
    cocktailsDescription: '3 tipos de cocteles a elegir entre nuestra carta de Clásicos y Shots.',
    features: [
      '1 Bartender profesional certificado',
      '3 Horas de servicio continuo',
      'Barra móvil estándar compacta',
      'Hielo premium y cristalería compostable',
      'Menú digital QR para los invitados'
    ]
  },
  {
    id: 'paquete-fuego-tribal',
    name: 'Paquete Fuego Tribal',
    badge: 'Popular',
    description: 'Perfecto para cumpleaños, fiestas privadas y eventos medianos que requieren dinamismo, velocidad y una puesta en escena con vibra tropical.',
    suggestedGuests: '20 a 50 personas',
    hoursOfService: 4,
    bartendersCount: 2,
    cocktailsIncludedCount: 4,
    cocktailsDescription: '4 tipos de cocteles a elegir (Clásicos, Especiales Tiki o Autóctonos).',
    features: [
      '2 Bartenders profesionales uniformados',
      '4 Horas de servicio de barra',
      'Barra móvil con iluminación LED tropical',
      'Decoración temática Tiki (máscaras de madera, follaje)',
      'Cristalería de vidrio premium para cocteles',
      'Menú impreso personalizado sobre la barra'
    ]
  },
  {
    id: 'paquete-paraiso-tropical',
    name: 'Paquete Paraíso Tropical',
    badge: 'Destacado',
    description: 'Diseñado para bodas, aniversarios y eventos corporativos exigentes. Ofrece un flujo constante de bebidas elegantes y una gran atención al detalle.',
    suggestedGuests: '50 a 100 personas',
    hoursOfService: 5,
    bartendersCount: 2, // 2 bartenders + 1 asistente
    cocktailsIncludedCount: 5,
    cocktailsDescription: '5 tipos de cocteles a elegir (incluye coctelería premium y opciones mocktail).',
    features: [
      '2 Bartenders profesionales + 1 Asistente de barra',
      '5 Horas de servicio premium',
      'Barra tiki artesanal de bambú y madera exótica',
      'Decoración premium con antorchas, flores caribeñas y neón',
      'Cristalería temática exclusiva (tiki mugs de cerámica y copas)',
      'Cocteles de bienvenida especiales para todos los invitados'
    ]
  },
  {
    id: 'paquete-experiencia-tiki-house',
    name: 'Paquete Experiencia Tiki House',
    badge: 'Premium VIP',
    description: 'La experiencia de barra libre ilimitada definitiva. Convertimos tu evento en una fiesta exótica inolvidable con la máxima personalización y show.',
    suggestedGuests: 'Más de 100 personas',
    hoursOfService: 6,
    bartendersCount: 3, // 3 bartenders + 2 asistentes
    cocktailsIncludedCount: 8, // Carta completa y personalizada
    cocktailsDescription: 'Barra libre total e ilimitada de toda la carta de cocteles y shots + 2 tragos personalizados creados para los anfitriones.',
    features: [
      '3 Bartenders de alta gama + 2 Asistentes de servicio',
      '6 Horas de barra libre ilimitada',
      'Estación de barra Tiki XXL iluminada de lujo',
      'Creación de 2 cocteles de firma exclusivos para el evento',
      'Show interactivo de Shots y animación en barra (Flair básico)',
      'Cristalería premium completa y vajilla tiki exótica',
      'Regalo temático tiki biodegradable para los anfitriones'
    ]
  }
];
