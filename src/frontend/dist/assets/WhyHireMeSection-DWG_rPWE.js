import { j as jsxRuntimeExports, m as motion } from "./index-D51SvF1s.js";
const RAINBOW = [
  "#00d4ff",
  "#a855f7",
  "#f472b6",
  "#fbbf24",
  "#34d399",
  "#818cf8",
  "#fb923c"
];
const REASONS = [
  {
    icon: "🏆",
    title: "7+ Years Real Experience",
    description: "Battle-tested across dozens of production applications, international clients, and high-stakes projects."
  },
  {
    icon: "✅",
    title: "End-to-End Delivery",
    description: "From concept and architecture to deployment and monitoring — I own the full product lifecycle."
  },
  {
    icon: "⚙️",
    title: "Scalable Architecture",
    description: "Systems built to grow — microservices, cloud-native patterns, and performance-first engineering."
  },
  {
    icon: "🤖",
    title: "AI Automation Expert",
    description: "Integrating LLMs, OpenAI APIs, and smart automation workflows to supercharge your business."
  },
  {
    icon: "🌍",
    title: "International Clients",
    description: "Proven track record delivering for clients across North America, Europe, and the Middle East."
  },
  {
    icon: "💎",
    title: "Clean, Maintainable Code",
    description: "Readable, well-documented code with consistent patterns your team will love to work with."
  },
  {
    icon: "⚡",
    title: "Performance-Focused",
    description: "Every millisecond matters. Core Web Vitals, lazy loading, and optimization are built in from day one."
  }
];
function WhyHireMeSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "why-hire-me",
      className: "py-24 px-4 sm:px-6 relative overflow-hidden",
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 50% at 50% 50%, #a855f708 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
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
                    children: "Value Proposition"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title text-white", children: [
                  "Why Hire",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, #fbbf24, #f472b6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "Me?"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Not just a developer — a partner who cares about your product's success." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
              "data-ocid": "whyhireme.list",
              children: REASONS.map((reason, i) => {
                const color = RAINBOW[i % RAINBOW.length];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30, scale: 0.95 },
                    whileInView: { opacity: 1, y: 0, scale: 1 },
                    viewport: { once: true, margin: "-40px" },
                    transition: { delay: i * 0.08, duration: 0.5 },
                    whileHover: { rotateX: 4, rotateY: 6, y: -5 },
                    "data-ocid": `whyhireme.item.${i + 1}`,
                    className: "glass rounded-2xl p-6 transition-all duration-300 group",
                    style: {
                      border: `1px solid ${color}15`,
                      transformPerspective: 800,
                      transformStyle: "preserve-3d"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.borderColor = `${color}45`;
                      e.currentTarget.style.boxShadow = `0 8px 32px ${color}25`;
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.borderColor = `${color}15`;
                      e.currentTarget.style.boxShadow = "none";
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110",
                          style: {
                            background: `${color}15`,
                            border: `1px solid ${color}30`,
                            boxShadow: `0 0 20px ${color}20`
                          },
                          children: reason.icon
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white mb-2 leading-snug", children: reason.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: reason.description })
                    ]
                  },
                  reason.title
                );
              })
            }
          )
        ] })
      ]
    }
  );
}
export {
  WhyHireMeSection as default
};
