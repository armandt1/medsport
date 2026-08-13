export type MedsportPlan = {
  slug: string;
  name: string;
  category: string;
  price: string;
  priceNumber: number;
  oldPrice?: string;
  suffix?: string;
  description: string;
  badge?: string;
  schedule: string;
  frequency: string;
  availability: string;
  benefit: string;
};

export const medsportPlans: MedsportPlan[] = [
  {
    slug: "mensual",
    name: "Plan Mensual",
    category: "Entrenamiento personalizado",
    price: "$60.000",
    priceNumber: 60000,
    oldPrice: "$80.000",
    suffix: "/ mes",
    description:
      "Entrenamiento planificado por el equipo kinésico a partir de una evaluación inicial y de tus objetivos personales o deportivos.",
    badge: "Valor actualizado",
    schedule: "Horario según disponibilidad",
    frequency: "3 veces por semana · aprox. 1 hora",
    availability: "Cupos sujetos a disponibilidad de horario.",
    benefit: "Evaluación, preparación kinésica y entrenamiento completamente personalizado."
  },
  {
    slug: "estudiante",
    name: "Plan Estudiante",
    category: "Universitarios",
    price: "$29.990",
    priceNumber: 29990,
    suffix: "/ mes",
    description:
      "Plan para estudiantes universitarios que buscan entrenar con evaluación, planificación y acompañamiento profesional.",
    badge: "Estudiantes",
    schedule: "Horario según disponibilidad",
    frequency: "3 veces por semana",
    availability: "Sujeto a cupos y disponibilidad de horarios. Se solicitará acreditación de estudiante.",
    benefit: "Mismo sistema Medsport de evaluación y planificación individual."
  },
  {
    slug: "adulto-mayor",
    name: "Plan Adulto Mayor",
    category: "Entrenamiento AM",
    price: "$50.000",
    priceNumber: 50000,
    suffix: "/ mes",
    description:
      "Entrenamiento personalizado orientado a capacidad física, fuerza, movilidad y objetivos individuales en horario AM.",
    badge: "Horario AM",
    schedule: "Entre 09:00 y 14:00 hrs",
    frequency: "3 veces por semana",
    availability: "Cupos sujetos a disponibilidad dentro del bloque AM.",
    benefit: "Evaluación inicial y progresión individual definida por el equipo kinésico."
  },
  {
    slug: "empresas",
    name: "Convenios Empresas",
    category: "Beneficio corporativo",
    price: "$39.990",
    priceNumber: 39990,
    suffix: "/ mes",
    description:
      "Valor preferente para personas incorporadas a convenios activos entre su empresa y Medsport.",
    badge: "Convenios",
    schedule: "Horario a convenir",
    frequency: "3 veces por semana",
    availability: "Disponibilidad coordinada según convenio, cupos y horarios.",
    benefit: "Planificación individual con el mismo modelo de evaluación y entrenamiento Medsport."
  }
];

export function getPlan(slug?: string) {
  return medsportPlans.find((plan) => plan.slug === slug) ?? medsportPlans[0];
}
