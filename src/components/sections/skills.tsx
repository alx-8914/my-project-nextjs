// src/components/sections/skills.tsx
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 variants={fadeUp} className="text-3xl font-bold">
        Habilidades
      </motion.h2>

      <div className="mt-10">
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <motion.div
              variants={fadeUp}
              key={skill.name}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/20 text-primary hover:scale-105 transition-transform duration-200">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-muted-foreground/70">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
