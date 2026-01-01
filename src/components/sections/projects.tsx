// src/components/sections/projects.tsx

import Image from "next/image"
import { projects } from "@/data/projects"

// Este componente é responsável apenas por:
// - Buscar os dados (projects)
// - Renderizar a interface visual
export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Projetos</h2>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-primary/5 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              {project.image && (
                <div className="relative w-full h-36 md:h-44 lg:h-56 mb-3 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-3 grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center mt-auto px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
              >
                Ver projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
