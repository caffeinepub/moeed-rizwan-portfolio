import { j as jsxRuntimeExports, m as motion } from "./index-D51SvF1s.js";
const CORE_SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "Python",
  "Django",
  "Flask",
  "REST APIs",
  "MongoDB",
  "Express.js",
  "Node.js",
  "Next.js",
  "WordPress",
  "Shopify"
];
const ADVANCED_SKILLS = [
  "TypeScript",
  "Redux / Zustand",
  "GraphQL",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "AWS",
  "CI/CD Pipelines",
  "Web Performance",
  "System Design",
  "Microservices",
  "Web Security",
  "AI Integrations"
];
const PROFICIENCY_BARS = [
  { label: "MERN Stack", pct: 96, color: "#00d4ff", color2: "#34d399" },
  { label: "Python / Django", pct: 93, color: "#a855f7", color2: "#f472b6" },
  { label: "AI / Automation", pct: 88, color: "#34d399", color2: "#818cf8" },
  { label: "Cloud / DevOps", pct: 82, color: "#fbbf24", color2: "#fb923c" }
];
function SkillPill({
  skill,
  index,
  color,
  color2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { delay: index * 0.04, duration: 0.4 },
      whileHover: { scale: 1.08, rotateY: 10, y: -3 },
      className: "glass rounded-xl px-4 py-2.5 text-sm font-medium cursor-default transition-all duration-200",
      style: {
        color,
        border: `1px solid ${color}25`,
        boxShadow: `0 2px 12px ${color}10`,
        transformPerspective: 600
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.boxShadow = `0 4px 28px ${color}45, 0 0 0 1px ${color}40`;
        e.currentTarget.style.borderColor = `${color}60`;
        e.currentTarget.style.background = `linear-gradient(135deg, ${color}10, ${color2}08)`;
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.boxShadow = `0 2px 12px ${color}10`;
        e.currentTarget.style.borderColor = `${color}25`;
        e.currentTarget.style.background = "";
      },
      children: skill
    }
  );
}
function SkillsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "skills",
      className: "py-24 px-4 sm:px-6 relative overflow-hidden",
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, #00d4ff0a 0%, transparent 70%)",
              filter: "blur(40px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, #f472b60a 0%, transparent 70%)",
              filter: "blur(40px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
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
                    style: { color: "#34d399" },
                    children: "Technical Arsenal"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title text-white", children: [
                  "Skills &",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, #00d4ff, #34d399)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "Expertise"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Full-spectrum development capabilities — from frontend pixels to backend architecture." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.5 },
              className: "mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center text-base",
                      style: {
                        background: "#00d4ff18",
                        border: "1px solid #00d4ff35"
                      },
                      children: "⚡"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "Core Stack" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px", style: { background: "#00d4ff20" } })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: CORE_SKILLS.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SkillPill,
                  {
                    skill,
                    index: i,
                    color: "#00d4ff",
                    color2: "#34d399"
                  },
                  skill
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.5, delay: 0.1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center text-base",
                      style: {
                        background: "#f472b618",
                        border: "1px solid #f472b635"
                      },
                      children: "🚀"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "Advanced Stack" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px", style: { background: "#f472b620" } })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ADVANCED_SKILLS.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SkillPill,
                  {
                    skill,
                    index: i,
                    color: "#f472b6",
                    color2: "#818cf8"
                  },
                  skill
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.6, delay: 0.2 },
              className: "mt-16 grid sm:grid-cols-2 gap-6",
              children: PROFICIENCY_BARS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-sm font-bold",
                      style: { color: item.color },
                      children: [
                        item.pct,
                        "%"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-2 rounded-full",
                    style: { background: `${item.color}20` },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "h-full rounded-full relative overflow-hidden",
                        style: {
                          background: `linear-gradient(90deg, ${item.color}, ${item.color2})`
                        },
                        initial: { width: 0 },
                        whileInView: { width: `${item.pct}%` },
                        viewport: { once: true },
                        transition: { duration: 1.2, delay: 0.3, ease: "easeOut" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute inset-0",
                            style: {
                              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                              backgroundSize: "200% 100%",
                              animation: "shimmer 2s linear infinite"
                            }
                          }
                        )
                      }
                    )
                  }
                )
              ] }, item.label))
            }
          )
        ] })
      ]
    }
  );
}
export {
  SkillsSection as default
};
