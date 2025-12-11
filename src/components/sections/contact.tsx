// src/components/sections/contact.tsx

import { Mail, Github, Linkedin, Instagram } from "lucide-react"
import { contactData } from "@/data/contact"

type ContactLink = {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  isExternal?: boolean
}

export function ContactSection() {
  const contactLinks: ContactLink[] = [
    {
      label: "E-mail",
      href: `mailto:${contactData.email}`,
      icon: Mail,
      isExternal: false,
    },
    {
      label: "GitHub",
      href: contactData.github,
      icon: Github,
      isExternal: true,
    },
    {
      label: "LinkedIn",
      href: contactData.linkedin,
      icon: Linkedin,
      isExternal: true,
    },
    {
      label: "Instagram",
      href: contactData.instagram,
      icon: Instagram,
      isExternal: true,
    },
  ]

  const linkClassName =
    "inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition-all duration-200 hover:scale-105 hover:bg-green-400 hover:text-white dark:hover:bg-green-300 dark:hover:text-black"

  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold">{contactData.title}</h2>

      <p className="mt-4 text-muted-foreground max-w-2xl">
        {contactData.description}
      </p>

      <div className="mt-10 flex flex-col items-center sm:flex-row gap-6">
        {contactLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              aria-label={`Abrir ${link.label}`}
              className={linkClassName}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </a>
          )
        })}
      </div>
    </section>
  )
}
