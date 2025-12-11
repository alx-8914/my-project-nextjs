// src/data/about.ts

export type AboutData = {
  headline: string
  paragraphs: string[]
  highlights: string[]
  mission: string
}

export const aboutData: AboutData = {
  headline: "Sobre mim",
  paragraphs: [
    "Sou desenvolvedor Full Stack com foco em entregar soluções que resolvem problemas reais do usuário e do negócio. Trabalho com pilhas modernas (Next.js, TypeScript, Node) e práticas de entrega contínua.",
    "Minha prioridade é escrever código limpo, testável e com boa documentação, para acelerar o ciclo de manutenção e evolução do produto.",
    "Com mais de 3 anos de experiência em Desenvolvimento FullStack, tenho trabalhado com tecnologias como descrevo em minhas habilidades logo abaixo e buscando sempre entregar projetos de alta qualidade e performance, criar aplicações web modernas, escaláveis e focadas na experiência do usuário, sou entusiasta de boas práticas de código, arquitetura de software e experiência do usuário (UX/UI)."
  ],
  highlights: [
    "Domain-driven development",
    "Component driven UI (shadcn / Tailwind)",
    "CI/CD e infra com Docker",
    "APIs escaláveis e testadas",
  ],
  mission:
    "Meu objetivo: transformar requisitos ambíguos em aplicações robustas que geram valor mensurável para clientes e usuários.",
}
