// src/data/hero.ts

// Define o formato dos dados da seção Hero
export type HeroData = {
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaPrimary: { text: string; link: string };
  ctaSecondary: { text: string; link: string };
};

export const heroDataVariantB: HeroData = {
  name: "Alexsandro",
  title: "Full Stack Developer",
  subtitle: "Web • Frontend • MobileFirst • APIs • Next.js • Node • Backend • DevOps • Automação com N8N • Agentes de IA",
  description:
    "Faço aplicações rápidas, SaaS, escaláveis e confiáveis e fáceis de manter. Demonstro resultados tangíveis com Automação com N8N, integração com agentes de IA, testes e deploys contínuos.",
  ctaPrimary: { text: "Ver estudos de caso", link: "#projects" },
  ctaSecondary: { text: "Solicitar avaliação grátis", link: "#contact" },
}

// Conteúdo centralizado do Hero
export const heroData: HeroData = {
  name: "Alexsandro",
  title: "Desenvolvedor Full Stack",
  subtitle:"Hi, I'm",
  description:
    "Transformo ideias em produtos digitais escaláveis — do protótipo ao deploy. Especialista em Next.js, TypeScript e arquitetura server-side que prioriza performance e UI/UX.",
  ctaPrimary: {
    text: "Baixar CV",
    link: "/Alexsandro-Developer.pdf",
  },
  ctaSecondary: {
    text: "My Projects",
    link: "#projects",
  },
};
