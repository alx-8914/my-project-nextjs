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
import { cn, smoothScrollTo } from "@/lib/utils"
import { ProjectsSection } from "@/components/sections/projects"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"

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
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center pb-24">
      <div className="mt-8 flex flex-col items-center gap-2'  ">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </div>
      <ProjectsSection />
        <ContactSection />
      <TooltipProvider>
        <Dock
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg backdrop-blur-md px-2"
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
                    onClick={(e) => {
                      e.preventDefault()
                      smoothScrollTo(item.href)
                    }}
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
