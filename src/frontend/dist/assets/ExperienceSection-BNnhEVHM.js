import { j as jsxRuntimeExports, m as motion } from "./index-D51SvF1s.js";
const PALETTE = ["#fbbf24", "#fb923c", "#fbbf24", "#fb923c", "#fbbf24"];
const EXPERIENCES = [
  {
    id: 1,
    role: "CTO",
    company: "The Vertex Technologies",
    period: "2022 – Present",
    description: "Leading technology strategy and engineering teams, architecting scalable cloud infrastructure, and driving product innovation across multiple platforms.",
    tags: ["Leadership", "Cloud", "Architecture"]
  },
  {
    id: 2,
    role: "Co-Founder",
    company: "The Vertex Institute",
    period: "2021 – Present",
    description: "Co-founded a developer education platform mentoring 500+ students in modern web technologies, system design, and software engineering best practices.",
    tags: ["Education", "Mentoring", "Entrepreneurship"]
  },
  {
    id: 3,
    role: "AI Automations Expert",
    company: "Freelance",
    period: "2023 – Present",
    description: "Building intelligent automation workflows, AI integrations with OpenAI APIs, and LLM-powered applications for international clients across multiple industries.",
    tags: ["AI", "OpenAI", "Automation", "LLMs"]
  },
  {
    id: 4,
    role: "Web Developer",
    company: "Octet Solutions",
    period: "2019 – 2022",
    description: "Developed full-stack web applications, RESTful APIs, and e-commerce solutions for a portfolio of international clients using MERN stack and Django.",
    tags: ["Full Stack", "REST APIs", "E-commerce"]
  },
  {
    id: 5,
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2017 – Present",
    description: "Delivering end-to-end web solutions using MERN stack, Python/Django, and modern frontend frameworks for 50+ clients worldwide.",
    tags: ["MERN", "Python", "Django", "Next.js"]
  }
];
function ExperienceSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "experience",
      className: "py-24 px-4 sm:px-6 relative overflow-hidden",
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, #fbbf2412 0%, transparent 70%)",
              filter: "blur(60px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.6 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-medium tracking-[0.2em] uppercase mb-3",
                    style: { color: "#fbbf24" },
                    children: "Career Path"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title text-white", children: [
                  "My",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, #fbbf24, #fb923c)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "Experience"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-6 top-0 bottom-0 w-px",
                style: {
                  background: "linear-gradient(180deg, #fbbf24 0%, #fb923c 50%, #fbbf24 100%)",
                  opacity: 0.5
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: EXPERIENCES.map((exp, i) => {
              const color = PALETTE[i % PALETTE.length];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -40 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, margin: "-60px" },
                  transition: { duration: 0.6, delay: i * 0.1 },
                  className: "relative flex items-start gap-6",
                  "data-ocid": `experience.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "flex-1 ml-14",
                        whileHover: { rotateX: 2, rotateY: 4 },
                        style: {
                          transformPerspective: 800,
                          transformStyle: "preserve-3d"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "glass rounded-2xl p-6 transition-all duration-300",
                            style: {
                              borderColor: `${color}30`,
                              boxShadow: `0 4px 24px ${color}10`
                            },
                            onMouseEnter: (e) => {
                              e.currentTarget.style.boxShadow = `0 8px 40px ${color}30`;
                            },
                            onMouseLeave: (e) => {
                              e.currentTarget.style.boxShadow = `0 4px 24px ${color}10`;
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-2 mb-3", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: exp.role }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", style: { color }, children: exp.company })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "text-xs font-medium px-3 py-1 rounded-full glass-light",
                                    style: { color, border: `1px solid ${color}30` },
                                    children: exp.period
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: exp.description }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: exp.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-xs px-2 py-1 rounded-md",
                                  style: { background: `${color}15`, color },
                                  children: tag
                                },
                                tag
                              )) })
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "absolute left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10",
                        style: {
                          borderColor: color,
                          background: "#050814",
                          boxShadow: `0 0 12px ${color}60`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-2 h-2 rounded-full",
                              style: { background: color }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute w-full h-full rounded-full animate-ping-ring",
                              style: { border: `1px solid ${color}`, opacity: 0.6 }
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                exp.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
}
export {
  ExperienceSection as default
};
