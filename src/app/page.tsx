"use client"

import Link from "next/link"
import { HomeIcon, MailIcon } from "lucide-react"

import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Dock, DockIcon } from "@/components/ui/dock"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" }
  ],
  Contact: {
    social: {
      whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/5511967072184?text=Ol%C3%A1%2C%20sou%20Alexsandro%20Desenvolvedor%20Web%20Full%20Stack%20fale%20comigo%20no%20WhatsApp...%20",
        icon: FaWhatsapp,
      },
      github: {
        name: "GitHub",
        url: "https://github.com/alx-8914",
        icon: FaGithub,
      },
      linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexsandro-da-silva-developer",
        icon: FaLinkedin,
      },
      email: {
        name: "Email",
        url: "mailto:alexdevsilva@gmail.com",
        icon: MailIcon,
      },
    },
  }
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center">
      <span className="pointer-events-none bg-linear-to-b from-zinc-950 via-zinc-700 to-zinc-400 bg-clip-text text-center text-8xl leading-none font-extrabold tracking-tight whitespace-pre-wrap text-transparent dark:from-zinc-50 dark:via-zinc-300 dark:to-zinc-500 drop-shadow-[0_0_25px_rgba(0,0,0,0.55)] dark:drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]">
        Hi, I'm Alex!
      </span>
      <div className="mt-8 flex flex-col items-center gap-4">
        <h2 className="w-full max-w-4xl text-left text-foreground text-4xl font-semibold">
          About
        </h2>
        <h3 className="w-full max-w-4xl text-left text-foreground text-xl leading-relaxed">
          Olá! Meu nome é Alexsandro da Silva,
          tenho 43 anos e sou um Desenvolvedor FullStack e  sou apaixonado por desenvolver aplicações e soluções Web´s digitais que impactam positivamente a vida das pessoas trazendo uma experiência incrível ao usuário.
          Com mais de 1 ano de experiência em desenvolvimento web, tenho trabalhado com tecnologias como descrevo em minhas habilidades logo abaixo e buscando sempre entregar projetos de alta qualidade e performance.
          Além do Desenvolvimento, atualmente trabalho em outra área e sigo na minha nova transição de carreira, sou entusiasta de boas práticas de código, arquitetura de software e experiência do usuário (UX/UI). Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.
        </h3>
      </div>
      <TooltipProvider>
        <Dock
          className="bg-zinc-100/95 dark:bg-zinc-900/95 border border-border/60 rounded-2xl shadow-lg backdrop-blur px-2"
          iconMagnification={80}
          iconDistance={140}
        >
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full bg-transparent hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80"
                    )}
                  >
                    <item.icon className="w-6 h-6 text-zinc-950 dark:text-zinc-50 drop-shadow-sm" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          {Object.entries(DATA.Contact.social).map(([key, social]) => (
            <DockIcon key={key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target={key !== "email" ? "_blank" : undefined}
                    rel={key !== "email" ? "noopener noreferrer" : undefined}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full bg-transparent hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80"
                    )}
                  >
                    <social.icon className="w-6 h-6 text-zinc-950 dark:text-zinc-50 drop-shadow-sm" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator
            orientation="vertical"
            className="mx-1 h-8 w-px bg-zinc-400/70 dark:bg-zinc-500/80"
          />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle asIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  )
}
