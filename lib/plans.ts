export type MedsportPlan = {
  slug: string;
  name: string;
  category: string;
  price: string;
  priceNumber: number;
  suffix?: string;
  description: string;
  badge?: string;
  decisionCue: string;
  benefit: string;
};

export const medsportPlans: MedsportPlan[] = [
  {
    slug: "one-training",
    name: "ONE Training",
    category: "Entrenamiento personalizado",
    price: "$160.000",
    priceNumber: 160000,
    suffix: "p/p",
    description: "Formato individual para trabajar con atención personalizada y objetivos propios.",
    badge: "1 persona",
    decisionCue: "Si quieres un proceso centrado completamente en ti.",
    benefit: "Más foco individual, seguimiento cercano y decisiones ajustadas a tu progreso."
  },
  {
    slug: "duo-training",
    name: "DÚO Training",
    category: "Entrenamiento personalizado",
    price: "$110.000",
    priceNumber: 110000,
    suffix: "p/p",
    description: "Entrena junto a otra persona manteniendo una experiencia guiada y cercana.",
    badge: "2 personas",
    decisionCue: "Si avanzar acompañado te ayuda a sostener la constancia.",
    benefit: "Comparte la experiencia sin perder una planificación guiada."
  },
  {
    slug: "trio-training",
    name: "TRÍO Training",
    category: "Entrenamiento personalizado",
    price: "$90.000",
    priceNumber: 90000,
    suffix: "p/p",
    description: "Formato para tres personas que combina acompañamiento profesional y dinámica grupal.",
    badge: "3 personas",
    decisionCue: "Si buscas una dinámica compartida con objetivos claros.",
    benefit: "Motivación grupal, estructura y acompañamiento dentro de un formato reducido."
  },
  {
    slug: "free-training",
    name: "FREE Training",
    category: "Entrenamiento semi personalizado",
    price: "$70.000",
    priceNumber: 70000,
    description: "Alternativa semi personalizada para entrenar con guía profesional dentro de Medsport.",
    badge: "Semi personalizado",
    decisionCue: "Si quieres más autonomía sin entrenar completamente por tu cuenta.",
    benefit: "Un formato flexible para mantener dirección y continuidad."
  }
];

export function getPlan(slug?: string) {
  return medsportPlans.find((plan) => plan.slug === slug) ?? medsportPlans[0];
}
