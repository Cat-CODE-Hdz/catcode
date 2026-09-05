export interface PricingPlan {
  name: string;
  tier: string;
  setupPrice?: string;
  monthlyPrice: string;
  description: string;
  features?: string[];
  highlighted?: boolean;
  badge?: string;
  ctaText: string;
}

export interface PricingCategory {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  note?: string;
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'custom',
    label: 'CUSTOM (Landing)',
    title: 'CUSTOM — Tu landing',
    subtitle: 'Una presencia digital profesional con infraestructura dedicada y mantenimiento continuo.',
    note: 'Nota: El dominio no está incluido. Se contrata y renueva a nombre del cliente.',
    plans: [
      {
        name: 'PLAN START',
        tier: 'TIER 01',
        setupPrice: '€249',
        monthlyPrice: '+ €19/mes',
        description: 'Para negocios locales que necesitan estar online con garantías y rapidez.',
        ctaText: 'Elegir START',
      },
      {
        name: 'PLAN BUSINESS',
        tier: 'TIER 02',
        setupPrice: '€499',
        monthlyPrice: '+ €39/mes',
        description: 'Estructura ampliada para servicios consolidados que requieren reservas directas.',
        highlighted: true,
        badge: 'MÁS ELEGIDO',
        ctaText: 'Elegir BUSINESS',
      },
      {
        name: 'PLAN PRO',
        tier: 'TIER 03',
        setupPrice: '€799',
        monthlyPrice: '+ €69/mes',
        description: 'Máximo rendimiento, arquitectura técnica avanzada y soporte prioritario.',
        ctaText: 'Elegir PRO',
      },
    ],
  },
  {
    id: 'weekly',
    label: 'WEEKLY (Contenido)',
    title: 'WEEKLY — Producción de contenido',
    subtitle: 'Generación de material editorial y gráfico periódico para tus canales. (Producción, no incluye publicación).',
    plans: [
      {
        name: 'BASIC',
        tier: '',
        monthlyPrice: '€79',
        description: 'Diseño y copys redactados listos para que los compartas a tu ritmo.',
        features: ['5 publicaciones por semana'],
        ctaText: 'Elegir BASIC',
      },
      {
        name: 'PRO',
        tier: '',
        monthlyPrice: '€129',
        description: 'Diseño personalizado de alta gama con adaptación a Facebook e Instagram.',
        features: ['5 publicaciones por semana'],
        highlighted: true,
        badge: 'MÁS ELEGIDO',
        ctaText: 'Elegir PRO',
      },
      {
        name: 'PREMIUM',
        tier: '',
        monthlyPrice: '€199',
        description: 'Estrategia gráfica exhaustiva y calendarización optimizada de máxima calidad.',
        features: ['5 publicaciones por semana'],
        ctaText: 'Elegir PREMIUM',
      },
    ],
  },
  {
    id: 'social',
    label: 'SOCIAL (Gestión)',
    title: 'SOCIAL — Gestión completa de redes',
    subtitle: 'Servicio independiente donde nos encargamos de todo el flujo: redacción, diseño, programación y publicación continua.',
    plans: [
      {
        name: 'BASIC',
        tier: '',
        monthlyPrice: '€99',
        description: 'Gestión completa, creación y publicación automática en perfiles de Instagram y Facebook.',
        features: ['5 publicaciones por semana'],
        ctaText: 'Elegir BASIC',
      },
      {
        name: 'PRO',
        tier: '',
        monthlyPrice: '€149',
        description: 'Gestión integral, 5 publicaciones semanales, stories según plan y supervisión técnica constante.',
        features: ['5 publicaciones por semana'],
        highlighted: true,
        badge: 'MÁS ELEGIDO',
        ctaText: 'Elegir PRO',
      },
    ],
  },
  {
    id: 'full',
    label: 'FULL (Integral)',
    title: 'FULL — Solución integral integrada',
    subtitle: 'Posicionada como una solución unificada y conectada, no una simple suma matemática de servicios sueltos.',
    plans: [
      {
        name: 'PLAN FULL INTEGRAL',
        tier: '',
        monthlyPrice: '€229',
        description: 'Incluye Landing profesional, producción de contenido y gestión y publicación completa de redes bajo un único punto de contacto.',
        features: [
          'Landing profesional personalizada y optimizada',
          'Hosting ultra-rápido, SSL y mantenimiento técnico activo',
          'Creación y publicación regular en Facebook e Instagram',
          'Coordinación visual armónica entre la web y tus redes',
        ],
        highlighted: true,
        badge: 'RECOMENDADO',
        ctaText: 'Contratar FULL',
      },
    ],
  },
];
