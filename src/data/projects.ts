export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  link: string
  image?: string
  imageAlt?: string
}

// Este array é a sua "base de dados" local.
// Ele separa os dados da interface (UI), seguindo o padrão do template.

export const projects: Project[] = [
  {
    id: "1",
    title: "🥗Dieta Project",
    description: "O Dieta Project é uma aplicação web que utiliza inteligência artificial para gerar planos de dieta personalizados baseados nas informações do usuário.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Radix UI + shadcn/ui", "node.js", "IA: OpenAI GPT", "Zod", "React Hook Form",],
    link: "https://github.com/alx-8914/diet-project-IA",
    image: "/Diet.png",
    imageAlt: "Interface do Dieta Project mostrando formulário de cálculo de dieta",
  },
  {
    id: "2",
    title: "✅Cadastro de Clientes",
    description: "Este projeto consiste em um backend desenvolvido em Node.js (Fastify) integrado a um banco de dados, e um frontend utilizando ReactJS + TypeScript.",
    tech: ["ReactJS", "TypeScript", "Fastify", "Banco de Dados MySQL", "node.js", "IA: OpenAI GPT", "Zod", "API-REST"],
    link: "https://github.com/alx-8914/sign-in-client",
    image: "/Clientes.png",
    imageAlt: "Interface do Cadastro de Clientes mostrando formulário de cadastro",
  },
  {
    id: "3",
    title: "🔏password-generator",
    description: "A aplicação 'Gerador de Senhas' aleaatórias, projeto de persistência de dados salvos em localStorage do app.",
    tech: ["TypeScript", "Tailwind", "Javascript", "React-Native", "Expo-app",],
    link: "https://github.com/alx-8914/password-generator",
    image: "/Password.png",
    imageAlt: "Interface do Gerador de Senhas"
  },
  {
    id: "4",
    title: "📌Gestão Escolar na Google Cloud e DevOps",
    description: "Este projeto é uma API desenvolvida com FastAPI para gerenciar alunos, cursos e matrículas em uma instituição de ensino.",
    tech: ["Python", "Docker", "docker-compose", "google-cloud-platform", "node.js", "github-actions", "Dockerfil", "Docker-image",],
    link: "https://github.com/alx-8914/imersao-devops",
    image: "/Api-gestao.png",
    imageAlt: "Interface do Gerador de Senhas"
  },
  {
    id: "5",
    title: "🤖 Agente de IA",
    description: "Projeto de Agente de IA para agendamento de consultas odontológicas, utilizando N8N para automação de fluxos de trabalho e Docker para containerização.",
    tech: ["Agentes de IA", "N8N", "NGROK", "Docker", "docker-compose", "Evolution-api", "github", "Dockerfile", "Docker-image",],
    link: "https://agendamentos-clinica-eight.vercel.app/",
    image: "/OdontoVida.png",
    imageAlt: "Dashboard do Agente de IA para agendamento de consultas odontológicas"
  },
  {
    id: "6",
    title: "🤖Agente de IA-ShowCard",
    description: "Projeto de Agente de IA para recomendação de cartões de crédito personalizados, utilizando N8N para automação de fluxos de trabalho e Docker para containerização.",
    tech: ["Agentes de IA", "N8N", "NGROK", "Docker", "docker-compose", "Evolution-api", "github", "Dockerfile", "Docker-image",],
    link: "https://chat-autoai-nu.vercel.app/",
    image: "/whatsCar.png",
    imageAlt: "Chatbot do Agente de IA-ShowCard"
  }
]
