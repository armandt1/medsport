export type ServiceLandingData = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  whoFor: string[];
  includes: string[];
  process: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
};

export const serviceLandings: Record<string, ServiceLandingData> = {
  "kinesiologia-temuco": {
    slug: "kinesiologia-temuco",
    name: "Kinesiología en Temuco",
    shortName: "Kinesiología",
    eyebrow: "KINESIOLOGÍA · TEMUCO",
    title: "Kinesiología en Temuco para recuperar movimiento, función y capacidad.",
    description: "Kinesiología en Centro Medsport Temuco: evaluación funcional, tratamiento y progresión de carga para recuperar movimiento y volver a tus actividades.",
    intro: "La kinesiología en Medsport parte por comprender qué necesitas recuperar y qué actividad quieres volver a realizar. La evaluación orienta el proceso y permite definir objetivos progresivos en movilidad, fuerza, control y tolerancia a la carga.",
    whoFor: [
      "Personas con molestias o limitaciones que afectan su actividad cotidiana o deportiva.",
      "Deportistas que necesitan recuperar capacidad después de una lesión.",
      "Personas que buscan una transición progresiva entre rehabilitación y entrenamiento."
    ],
    includes: ["Evaluación funcional", "Plan de intervención", "Progresión de ejercicios", "Seguimiento de respuesta", "Orientación para retorno a actividad"],
    process: [
      { title: "Evaluar", text: "Identificamos tu situación actual, antecedentes, síntomas, restricciones y demandas de la actividad a la que quieres volver." },
      { title: "Intervenir", text: "Seleccionamos ejercicios y estrategias acordes a los objetivos definidos, ajustando dificultad y carga según respuesta." },
      { title: "Progresar", text: "Elevamos gradualmente la exigencia para acercar el trabajo a las tareas de tu vida diaria, entrenamiento o deporte." }
    ],
    faqs: [
      { question: "¿Cuándo conviene consultar a kinesiología?", answer: "Cuando una molestia, lesión o limitación está afectando cómo te mueves, entrenas o realizas tus actividades. Una evaluación permite definir si el servicio es adecuado para tu situación." },
      { question: "¿La kinesiología puede conectarse con el gimnasio?", answer: "Sí. Cuando corresponde, el proceso puede progresar hacia tareas de readaptación y entrenamiento para reducir el salto entre terminar una rehabilitación y volver a exigir el cuerpo." },
      { question: "¿Medsport atiende kinesiología con bono FONASA?", answer: "Sí. En Medsport la atención kinésica se realiza con bono FONASA. Al agendar puedes consultar los requisitos y la modalidad correspondiente a tu atención." },
      { question: "¿Puedo solicitar reembolso en Isapre o seguro complementario?", answer: "Las atenciones kinésicas pueden ser reembolsables por Isapres según las condiciones de tu plan y por seguros complementarios siempre que exista una derivación médica. La cobertura y documentación requerida dependen de cada Isapre o seguro." },
      { question: "¿Dónde está Medsport en Temuco?", answer: "Centro Medsport está en Av. Alemania 0425, local 205, Paseo Los Suizos, Temuco." }
    ],
    related: [
      { label: "Rehabilitación deportiva", href: "/rehabilitacion-deportiva-temuco" },
      { label: "Entrenamiento personalizado", href: "/entrenamiento-personalizado-temuco" }
    ]
  },
  "rehabilitacion-deportiva-temuco": {
    slug: "rehabilitacion-deportiva-temuco",
    name: "Rehabilitación deportiva en Temuco",
    shortName: "Rehabilitación deportiva",
    eyebrow: "REHABILITACIÓN DEPORTIVA · TEMUCO",
    title: "Rehabilitación deportiva en Temuco con progresión hacia el retorno a la actividad.",
    description: "Rehabilitación deportiva en Temuco en Centro Medsport. Evaluación, fuerza, movilidad, control y progresión de cargas para volver al entrenamiento o deporte.",
    intro: "La rehabilitación deportiva busca recuperar la capacidad necesaria para volver a entrenar o practicar deporte con una progresión coherente. El foco no está solo en disminuir molestias: también en reconstruir tolerancia, fuerza, control y demandas específicas de la actividad.",
    whoFor: [
      "Deportistas en proceso de recuperación después de una lesión.",
      "Personas que terminaron una etapa clínica y necesitan recuperar capacidad física.",
      "Quienes necesitan una transición gradual antes de volver a entrenar con normalidad."
    ],
    includes: ["Evaluación funcional", "Movilidad y control", "Fuerza progresiva", "Tolerancia a la carga", "Tareas específicas del deporte", "Retorno gradual al entrenamiento"],
    process: [
      { title: "Punto de partida", text: "Definimos qué capacidades necesitas recuperar y qué exigencias tendrá tu retorno." },
      { title: "Construcción de capacidad", text: "Progresamos volumen, intensidad y complejidad para recuperar fuerza, movilidad, control y tolerancia." },
      { title: "Retorno", text: "Acercamos las tareas a las demandas reales del entrenamiento o deporte antes de aumentar la exposición." }
    ],
    faqs: [
      { question: "¿Rehabilitación deportiva y kinesiología son lo mismo?", answer: "Se relacionan, pero la rehabilitación deportiva pone especial atención en recuperar capacidades necesarias para volver al entrenamiento o deporte. El proceso puede incluir evaluación kinesiológica y progresiones físicas específicas." },
      { question: "¿Puedo comenzar si todavía tengo molestias?", answer: "Depende de la evaluación y de tu etapa de recuperación. La carga y los ejercicios deben ajustarse a tu situación, por lo que el primer paso es evaluar." },
      { question: "¿La atención kinésica se puede realizar con bono FONASA?", answer: "Sí. En Medsport la atención kinésica se realiza con bono FONASA. Al agendar puedes consultar los requisitos y la modalidad correspondiente a tu atención." },
      { question: "¿Las atenciones se pueden reembolsar por Isapre o seguro complementario?", answer: "Las atenciones kinésicas pueden ser reembolsables por Isapres según las condiciones de tu plan y por seguros complementarios siempre que exista una derivación médica. La cobertura y documentación requerida dependen de cada Isapre o seguro." },
      { question: "¿Medsport está en Temuco?", answer: "Sí. Centro Medsport está en Av. Alemania 0425, local 205, Paseo Los Suizos, Temuco." }
    ],
    related: [
      { label: "Kinesiología", href: "/kinesiologia-temuco" },
      { label: "Entrenamiento deportivo", href: "/entrenamiento-deportivo-temuco" }
    ]
  },
  "entrenamiento-personalizado-temuco": {
    slug: "entrenamiento-personalizado-temuco",
    name: "Entrenamiento personalizado en Temuco",
    shortName: "Entrenamiento personalizado",
    eyebrow: "ENTRENAMIENTO PERSONALIZADO · TEMUCO",
    title: "Entrenamiento personalizado en Temuco con objetivos, seguimiento y progresión.",
    description: "Entrenamiento personalizado en Temuco en Centro Medsport. Evaluación, planificación de fuerza y acondicionamiento, seguimiento técnico y planes individuales o en grupos reducidos.",
    intro: "El entrenamiento personalizado se construye desde tu nivel actual y el objetivo que quieres alcanzar. La planificación se ajusta a tus antecedentes, disponibilidad y respuesta al trabajo para evitar programas genéricos y sostener una progresión medible.",
    whoFor: [
      "Personas que quieren mejorar fuerza, condición física o composición corporal con guía profesional.",
      "Quienes necesitan una estructura clara para sostener constancia y progresión.",
      "Personas que prefieren formatos individuales, dúo, trío o semi personalizados."
    ],
    includes: ["Evaluación inicial", "Planificación de entrenamiento", "Fuerza y acondicionamiento", "Técnica de ejercicios", "Control de carga", "Seguimiento de progreso"],
    process: [
      { title: "Objetivo", text: "Definimos qué quieres mejorar y qué restricciones o antecedentes deben considerarse." },
      { title: "Plan", text: "Organizamos ejercicios, volumen, intensidad y frecuencia según tu nivel y disponibilidad." },
      { title: "Seguimiento", text: "Revisamos respuesta y progreso para ajustar la planificación cuando corresponde." }
    ],
    faqs: [
      { question: "¿Necesito experiencia para comenzar?", answer: "No. El entrenamiento se adapta a tu nivel y antecedentes. La evaluación inicial permite definir un punto de partida razonable." },
      { question: "¿Qué formatos de entrenamiento tiene Medsport?", answer: "El sitio presenta formatos ONE, DÚO, TRÍO y FREE Training. Revisa la sección de planes para comparar precios y modalidad." },
      { question: "¿Dónde puedo entrenar en Medsport?", answer: "Centro Medsport está en Av. Alemania 0425, local 205, Paseo Los Suizos, Temuco." }
    ],
    related: [
      { label: "Planes Medsport", href: "/planes" },
      { label: "Entrenamiento deportivo", href: "/entrenamiento-deportivo-temuco" }
    ]
  },
  "entrenamiento-deportivo-temuco": {
    slug: "entrenamiento-deportivo-temuco",
    name: "Entrenamiento deportivo en Temuco",
    shortName: "Entrenamiento deportivo",
    eyebrow: "ENTRENAMIENTO DEPORTIVO · TEMUCO",
    title: "Entrenamiento deportivo en Temuco orientado a capacidades que importan para tu deporte.",
    description: "Entrenamiento deportivo en Temuco en Centro Medsport: fuerza, potencia, acondicionamiento, control de carga y seguimiento según nivel y objetivos deportivos.",
    intro: "El entrenamiento deportivo organiza el trabajo físico según las demandas de tu disciplina, tu nivel y el momento de la temporada. El objetivo es que fuerza, potencia, resistencia, movilidad y control de carga tengan una relación concreta con lo que necesitas rendir.",
    whoFor: [
      "Deportistas que quieren desarrollar capacidades físicas de forma planificada.",
      "Personas que necesitan complementar la práctica de su deporte con entrenamiento de fuerza y acondicionamiento.",
      "Deportistas que vuelven desde una etapa de readaptación y necesitan aumentar exigencia de manera progresiva."
    ],
    includes: ["Evaluación física", "Fuerza y potencia", "Acondicionamiento", "Movilidad", "Control de carga", "Seguimiento de rendimiento"],
    process: [
      { title: "Demanda", text: "Definimos las capacidades relevantes para tu deporte, calendario y objetivo." },
      { title: "Preparación", text: "Planificamos sesiones y cargas para desarrollar las capacidades priorizadas." },
      { title: "Ajuste", text: "La planificación cambia según tu respuesta, continuidad, competencia y evolución." }
    ],
    faqs: [
      { question: "¿El entrenamiento deportivo sirve solo para alto rendimiento?", answer: "No. Puede adaptarse a distintos niveles. Lo importante es que la planificación responda a las demandas de tu deporte y a tu capacidad actual." },
      { question: "¿Puedo combinarlo con rehabilitación?", answer: "Cuando corresponde, sí. Una transición ordenada entre rehabilitación, readaptación y entrenamiento ayuda a aumentar la exigencia de forma progresiva." },
      { question: "¿Dónde está Centro Medsport?", answer: "En Av. Alemania 0425, local 205, Paseo Los Suizos, Temuco." }
    ],
    related: [
      { label: "Rehabilitación deportiva", href: "/rehabilitacion-deportiva-temuco" },
      { label: "Entrenamiento personalizado", href: "/entrenamiento-personalizado-temuco" }
    ]
  }
};
