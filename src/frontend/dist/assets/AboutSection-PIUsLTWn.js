import { j as jsxRuntimeExports, m as motion, r as reactExports, C as Canvas, f as Color, d as useFrame } from "./index-BHvqWtiJ.js";
import { u as useDeviceCapability, H as Html } from "./useDeviceCapability-Dm0MY_lC.js";
const STATS = [
  { value: "7+", label: "Years Experience", color: "#34d399" },
  { value: "15+", label: "Live Projects", color: "#00d4ff" },
  { value: "50+", label: "Happy Clients", color: "#a855f7" },
  { value: "5", label: "Roles Held", color: "#fbbf24" }
];
const SKILL_PLANETS = [
  {
    id: "star-red",
    pos: [1.8, 0.05, 1.2],
    color: "#ff4466",
    skill: "React"
  },
  {
    id: "star-blue",
    pos: [-2.4, -0.03, 0.8],
    color: "#4488ff",
    skill: "Next.js"
  },
  {
    id: "star-pink",
    pos: [1, 0.08, -2.8],
    color: "#ff88ff",
    skill: "AI / ML"
  },
  {
    id: "star-cyan",
    pos: [-1.6, 0.02, -1.9],
    color: "#00ccff",
    skill: "Node.js"
  },
  {
    id: "star-orange",
    pos: [3.2, -0.05, -0.6],
    color: "#ffaa00",
    skill: "WordPress"
  },
  {
    id: "star-purple",
    pos: [-3, 0.04, -1],
    color: "#cc44ff",
    skill: "Python"
  },
  {
    id: "star-red2",
    pos: [2.6, 0.06, 2.2],
    color: "#ff6644",
    skill: "TypeScript"
  },
  {
    id: "star-teal",
    pos: [-2, -0.02, 2.6],
    color: "#44ffcc",
    skill: "MongoDB"
  }
];
function SkillPlanet({
  position,
  color,
  skill
}) {
  const meshRef = reactExports.useRef(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.06;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.1, 12, 12] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color, transparent: true, opacity: 0.25 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: meshRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.055, 12, 12] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Html,
      {
        position: [0, 0.22, 0],
        center: true,
        distanceFactor: 6,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              color,
              fontSize: "9px",
              fontWeight: 700,
              fontFamily: "monospace",
              whiteSpace: "nowrap",
              textShadow: `0 0 8px ${color}99, 0 0 2px #000`,
              letterSpacing: "0.08em",
              padding: "2px 5px",
              borderRadius: "4px",
              background: `${color}14`,
              border: `1px solid ${color}35`,
              backdropFilter: "blur(4px)"
            },
            children: skill
          }
        )
      }
    )
  ] });
}
function Galaxy() {
  const groupRef = reactExports.useRef(null);
  const { positions, colors } = reactExports.useMemo(() => {
    const totalParticles = 7e3;
    const coreCount = Math.floor(totalParticles * 0.25);
    const armCount = totalParticles - coreCount;
    const pos = new Float32Array(totalParticles * 3);
    const col = new Float32Array(totalParticles * 3);
    const coreRadius = 0.4;
    const maxRadius = 3.2;
    for (let i = 0; i < coreCount; i++) {
      const r = Math.random() * coreRadius;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.3;
      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * 0.12;
      pos[i * 3 + 2] = r * Math.sin(theta);
      const t = r / coreRadius;
      const c = new Color();
      c.lerpColors(
        new Color(1, 0.98, 0.95),
        new Color(1, 0.55, 0.15),
        t
      );
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    for (let i = 0; i < armCount; i++) {
      const idx = coreCount + i;
      const armIndex = Math.floor(Math.random() * 3);
      const baseAngle = armIndex / 3 * Math.PI * 2;
      const radius = coreRadius + Math.random() ** 0.6 * (maxRadius - coreRadius);
      const spiralAngle = baseAngle + radius * 1.8 + (Math.random() - 0.5) * 0.5;
      const x = radius * Math.cos(spiralAngle);
      const z = radius * Math.sin(spiralAngle);
      const y = (Math.random() - 0.5) * radius * 0.08;
      pos[idx * 3] = x;
      pos[idx * 3 + 1] = y;
      pos[idx * 3 + 2] = z;
      const t = (radius - coreRadius) / (maxRadius - coreRadius);
      const c = new Color();
      if (t < 0.5) {
        c.lerpColors(
          new Color(1, 0.95, 0.88),
          new Color(0.75, 0.85, 1),
          t * 2
        );
      } else {
        c.lerpColors(
          new Color(0.75, 0.85, 1),
          new Color(0.45, 0.3, 0.85),
          (t - 0.5) * 2
        );
      }
      col[idx * 3] = c.r;
      col[idx * 3 + 1] = c.g;
      col[idx * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: groupRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("bufferGeometry", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-color", args: [colors, 3] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "pointsMaterial",
        {
          size: 0.025,
          vertexColors: true,
          transparent: true,
          opacity: 0.95,
          sizeAttenuation: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.22, 16, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#ff6600", transparent: true, opacity: 0.3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.12, 16, 16] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#ffaa44" })
    ] }),
    SKILL_PLANETS.map((planet) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      SkillPlanet,
      {
        position: planet.pos,
        color: planet.color,
        skill: planet.skill
      },
      planet.id
    ))
  ] });
}
function GalaxyCanvas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 2.5, 5], fov: 50 },
      gl: { antialias: true, alpha: true },
      dpr: [1, 2],
      style: { touchAction: "none" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Galaxy, {}) })
      ]
    }
  );
}
function AboutSection() {
  const { enable3D } = useDeviceCapability();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "about",
      className: "py-24 px-4 sm:px-6 relative overflow-hidden",
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, #a855f715 0%, transparent 70%)",
              filter: "blur(60px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
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
                    children: "Who Am I"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title text-white", children: [
                  "About ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#a855f7" }, children: "Me" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-80px" },
                transition: { duration: 0.7 },
                className: "flex flex-col items-center order-first lg:order-last",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-sm mx-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full h-48 sm:h-64 lg:h-72 mx-auto",
                      style: { background: "transparent" },
                      children: enable3D ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GalaxyCanvas, {}) }) : (
                        /* CSS galaxy fallback */
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-48 h-32 rounded-full",
                            style: {
                              background: "radial-gradient(ellipse at 40% 50%, #ffaa44 0%, #a855f7 30%, #4488ff 60%, transparent 80%)",
                              filter: "blur(8px)",
                              opacity: 0.8
                            }
                          }
                        ) })
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute bottom-4 left-1/2 -translate-x-1/2 glass-light rounded-full px-4 py-2 text-xs font-medium text-center whitespace-nowrap",
                      style: { color: "#a855f7" },
                      children: "✨ Galaxy of Skills · Innovation at Scale"
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-80px" },
                transition: { duration: 0.7 },
                className: "order-last lg:order-first",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 sm:p-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Moeed Rizwan Farooq" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm font-semibold tracking-wide uppercase mb-6",
                        style: { color: "#a855f7" },
                        children: "Full Stack Developer | AI Automation Expert"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
                      "I'm a Full Stack Developer with",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: "7+ years" }),
                      " of experience building modern applications, scalable backends, and high-performing e-commerce systems."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
                      "I specialize in",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: "Python (Django, Flask, REST APIs)" }),
                      " ",
                      "and the",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: "MERN stack" }),
                      ", delivering complete end-to-end solutions for international clients."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
                      "Beyond development, I actively",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: "teach and mentor developers" }),
                      ", helping individuals and teams master modern web technologies."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: i * 0.1, duration: 0.5 },
                      whileHover: { rotateX: 5, rotateY: 8, scale: 1.05 },
                      className: "glass rounded-xl p-4 text-center cursor-default",
                      style: {
                        transformPerspective: 800,
                        transformStyle: "preserve-3d"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "text-2xl font-bold",
                            style: { color: stat.color },
                            children: stat.value
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: stat.label })
                      ]
                    },
                    stat.label
                  )) })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  AboutSection as default
};
