// src/data/skills.ts

export type Skill = {
  name: string
  level: string
  detail?: string
  category: "frontend" | "backend" | "devops" | "mobile" | "fullstack"
}

export const skills = [
  { name: "Next.js", level: "Avançado", category: "frontend", details: "Framework"},
  { name: "TypeScript", level: "Avançado", category: "frontend", detail: "SuperSet de JavaScript"},
  { name: "Tailwind", level: "Avançado", category: "frontend", detail: "Estilização de interfaces"},
  { name: "Node.js", level: "Intermediário", category: "backend", detail: "Servidor backend"},
  { name: "Fastify", level: "Intermediário", category: "backend", detail: "Framework"},
  { name: "PostgreSQL", level: "Intermediário", category: "backend", detail: "Banco de dados"},
  { name: "MySQL", level: "Intermediário", category: "backend", detail: "Banco de dados"},
  { name: "Docker", level: "Intermediário", category: "devops", detail: "Containerização"},
  { name: "N8N", level: "Intermediário", category: "devops", detail: "Automação de processos"},
  { name: "React Native", level: "Básico", category: "mobile", detail: "Framework"},
  { name: "Expo", level: "Básico", category: "mobile", detail: "Framework"},
  { name: "Fullstack", level: "Avançado", category: "fullstack", detail: "FullStack Developer"},
  { name: "Java", level: "Básico", category: "backend", detail: "Linguagem de Programação"},
  { name: "PHP", level: "Básico", category: "backend", detail: "Linguagem de Programação"},
  { name: "Python", level: "Básico", category: "backend", detail: "Linguagem de Programação"},
  { name: "React", level: "Intermediário", category: "frontend", detail: "Framework"},
  { name: "JavaScript", level: "Intermediário", category: "frontend", detail: "Parte deinâmica da interface"},
  { name: "HTML", level: "Intermediário", category: "frontend", detail: "Linguagem"},
  { name: "CSS", level: "Intermediário", category: "frontend", details: "Estilos Cascata" },
  { name: "Git", level: "Intermediário", category: "devops", detail: "Controle de Versão"},
  { name: "GitHub", level: "Intermediário", category: "devops", detail: "Gestão de Repositórios"},
  { name: "Figma", level: "Intermediário", category: "frontend", detail: "Design Gráfico"},
  { name: "C#", level: "Básico", category: "backend", detail: "Linguagem de Programação"},
  { name: ".NET", level: "Básico", category: "backend", deail: "Linguagem de Programação" },
] as const
