import { motion } from "motion/react";

const PALETTE = ["#fbbf24", "#fb923c", "#fbbf24", "#fb923c", "#fbbf24"];

const EXPERIENCES = [
  {
    id: 1,
    role: "CTO",
    company: "The Vertex Technologies",
    period: "2022 – Present",
    description:
      "Leading technology strategy and engineering teams, architecting scalable cloud infrastructure, and driving product innovation across multiple platforms.",
    tags: ["Leadership", "Cloud", "Architecture"],
  },
  {
    id: 2,
    role: "Co-Founder",
    company: "The Vertex Institute",
    period: "2021 – Present",
    description:
      "Co-founded a developer education platform mentoring 500+ students in modern web technologies, system design, and software engineering best practices.",
    tags: ["Education", "Mentoring", "Entrepreneurship"],
  },
  {
    id: 3,
    role: "AI Automations Expert",
    company: "Freelance",
    period: "2023 – Present",
    description:
      "Building intelligent automation workflows, AI integrations with OpenAI APIs, and LLM-powered applications for international clients across multiple industries.",
    tags: ["AI", "OpenAI", "Automation", "LLMs"],
  },
  {
    id: 4,
    role: "Web Developer",
    company: "Octet Solutions",
    period: "2019 – 2022",
    description:
      "Developed full-stack web applications, RESTful APIs, and e-commerce solutions for a portfolio of international clients using MERN stack and Django.",
    tags: ["Full Stack", "REST APIs", "E-commerce"],
  },
  {
    id: 5,
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2017 – Present",
    description:
      "Delivering end-to-end web solutions using MERN stack, Python/Django, and modern frontend frameworks for 50+ clients worldwide.",
    tags: ["MERN", "Python", "Django", "Next.js"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Gold nebula glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fbbf2412 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase mb-3"
            style={{ color: "#fbbf24" }}
          >
            Career Path
          </p>
          <h2 className="section-title text-white">
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fbbf24, #fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, #fbbf24 0%, #fb923c 50%, #fbbf24 100%)",
              opacity: 0.5,
            }}
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => {
              const color = PALETTE[i % PALETTE.length];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex items-start gap-6"
                  data-ocid={`experience.item.${i + 1}`}
                >
                  {/* Card */}
                  <motion.div
                    className="flex-1 ml-14"
                    whileHover={{ rotateX: 2, rotateY: 4 }}
                    style={{
                      transformPerspective: 800,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="glass rounded-2xl p-6 transition-all duration-300"
                      style={{
                        borderColor: `${color}30`,
                        boxShadow: `0 4px 24px ${color}10`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          `0 8px 40px ${color}30`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          `0 4px 24px ${color}10`;
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium" style={{ color }}>
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-full glass-light"
                          style={{ color, border: `1px solid ${color}30` }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-md"
                            style={{ background: `${color}15`, color }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Dot on timeline with pulsing ring */}
                  <div
                    className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
                    style={{
                      borderColor: color,
                      background: "#050814",
                      boxShadow: `0 0 12px ${color}60`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: color }}
                    />
                    {/* Pulsing ring */}
                    <div
                      className="absolute w-full h-full rounded-full animate-ping-ring"
                      style={{ border: `1px solid ${color}`, opacity: 0.6 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
