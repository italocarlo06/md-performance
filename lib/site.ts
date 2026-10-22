/**
 * Conteúdo editável do site.
 * Troque aqui textos, preços, equipe e contatos sem mexer no layout.
 * Itens entre colchetes [ASSIM] ainda precisam ser preenchidos.
 */

export const site = {
  name: "MD Performance",
  city: "Arapiraca/AL",
  description:
    "Academia com acompanhamento personalizado em Arapiraca/AL. Personal compartilhado em pequenos grupos, com planos de 2, 3 ou 4 treinos por semana.",
  url: "https://mdperformance.com.br", // troque pelo domínio final
  whatsapp: {
    number: "5582999809200",
    display: "(82) 99980-9200",
    message: "Olá! Quero agendar uma aula experimental na MD Performance.",
  },
  email: "[contato@mdperformance.com.br]",
  instagram: "#", // ex.: https://instagram.com/mdperformance
  youtube: "#",
  address: {
    street: "R. Minervina Francisca da Conceição, 166",
    district: "Novo Horizonte",
    city: "Arapiraca",
    state: "AL",
    zip: "57312-640",
  },
  hours: ["Segunda a sexta: [00h às 00h]", "Sábado: [00h às 00h]"],
  mapsLink: "https://maps.app.goo.gl/JVi2AoRn6wegFgPr8",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.258549386193!2d-36.64869378804716!3d-9.744153203274848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x705d5646fb27ebd%3A0x7facacd047ad9aaf!2sMD%20Performance!5e0!3m2!1spt-BR!2sbr!4v1792674489014!5m2!1spt-BR!2sbr",
  legal: {
    cnpj: "[00.000.000/0001-00]",
    technicalLead: "[NOME]",
    cref: "[000000-G/AL]",
  },
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp.number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#equipe", label: "Equipe" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

export type Period = "trimestral" | "semestral" | "anual";

export const periods: { id: Period; label: string }[] = [
  { id: "trimestral", label: "Trimestral" },
  { id: "semestral", label: "Semestral" },
  { id: "anual", label: "Anual" },
];

/** Valor mensal de cada plano em cada período. Troque "[R$ 000]" pelos valores reais, ex.: "R$ 289". */
export const plans: {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  prices: Record<Period, string>;
  features: string[];
  cta: string;
}[] = [
  {
    id: "2x",
    title: "2x por semana",
    description: "Para começar ou manter a rotina com acompanhamento.",
    prices: { trimestral: "[R$ 000]", semestral: "[R$ 000]", anual: "[R$ 000]" },
    features: [
      "2 treinos por semana",
      "Personal compartilhado em pequeno grupo",
      "Treino montado para o seu objetivo",
      "Acompanhamento em todas as sessões",
    ],
    cta: "Quero treinar 2x",
  },
  {
    id: "3x",
    title: "3x por semana",
    description: "O equilíbrio ideal para evoluir com constância.",
    featured: true,
    prices: { trimestral: "[R$ 000]", semestral: "[R$ 000]", anual: "[R$ 000]" },
    features: [
      "3 treinos por semana",
      "Personal compartilhado em pequeno grupo",
      "Treino montado para o seu objetivo",
      "Acompanhamento em todas as sessões",
    ],
    cta: "Quero treinar 3x",
  },
  {
    id: "4x",
    title: "4x por semana",
    description: "Para quem quer acelerar os resultados.",
    prices: { trimestral: "[R$ 000]", semestral: "[R$ 000]", anual: "[R$ 000]" },
    features: [
      "4 treinos por semana",
      "Personal compartilhado em pequeno grupo",
      "Treino montado para o seu objetivo",
      "Acompanhamento em todas as sessões",
    ],
    cta: "Quero treinar 4x",
  },
];

export const team = [
  {
    name: "Dunga Araújo",
    role: "Personal trainer",
    cref: "[000000-G/AL]",
    photo: "/images/dunga-araujo.webp",
    alt: "Dunga Araújo correndo uma prova de 10 km",
    bio: "[Formação e uma frase sobre como trabalha com os alunos.]",
    specialties: ["[ESPECIALIDADE]", "[ESPECIALIDADE]"],
  },
  {
    name: "Malu Oliveira",
    role: "Personal trainer",
    cref: "[000000-G/AL]",
    photo: "/images/malu-oliveira.webp",
    alt: "Malu Oliveira sorrindo e mostrando a medalha de uma prova",
    bio: "[Formação e uma frase sobre como trabalha com os alunos.]",
    specialties: ["[ESPECIALIDADE]", "[ESPECIALIDADE]"],
  },
  {
    name: "Eduardo Silva",
    role: "Coordenador",
    cref: "[000000-G/AL]",
    photo: "/images/eduardo-silva.webp",
    alt: "Eduardo Silva, coordenador, com a camiseta da MD Performance",
    bio: "[Formação e uma frase sobre como trabalha com os alunos.]",
    specialties: ["Força", "Mobilidade", "Prevenção de lesão"],
  },
];

export const testimonials = [
  { initial: "A", quote: "[Depoimento real do aluno, em 2 a 4 linhas, contando o antes e o depois.]", name: "[NOME DO ALUNO]", detail: "[Objetivo · tempo de treino]" },
  { initial: "B", quote: "[Depoimento real do aluno, em 2 a 4 linhas, contando o antes e o depois.]", name: "[NOME DO ALUNO]", detail: "[Objetivo · tempo de treino]" },
  { initial: "C", quote: "[Depoimento real do aluno, em 2 a 4 linhas, contando o antes e o depois.]", name: "[NOME DO ALUNO]", detail: "[Objetivo · tempo de treino]" },
];

export const faq = [
  { q: "Nunca treinei. Posso começar?", a: "Pode, e é para você que o acompanhamento faz mais diferença. O treino começa no seu nível e evolui aos poucos." },
  { q: "Como funciona a aula experimental?", a: "[Explique duração, se é gratuita e o que a pessoa precisa levar.]" },
  { q: "Posso remarcar uma sessão?", a: "[Explique a regra de remarcação, como a antecedência mínima.]" },
  { q: "Preciso de exame médico?", a: "[Informe a exigência da MD Performance sobre atestado ou liberação médica.]" },
  { q: "Quais as formas de pagamento?", a: "[Pix, cartão, plano trimestral, semestral ou anual: liste o que você aceita.]" },
];
