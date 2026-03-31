import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, m as motion, C as Canvas, u as useThree, a as useFrame, B as BufferGeometry, b as BufferAttribute, d as Color } from "./index-tCVNa7Va.js";
import { u as useDeviceCapability } from "./useDeviceCapability-D8inUWEr.js";
import { E as ExternalLink } from "./external-link-DDlDyznE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
const GALAXY_COLORS = [
  [0, 0.83, 1],
  // cyan
  [0.51, 0.55, 0.97],
  // indigo
  [0.96, 0.44, 0.71],
  // pink
  [0.98, 0.75, 0.14],
  // gold
  [0.2, 0.83, 0.6],
  // teal
  [1, 1, 1],
  // white
  [0.66, 0.33, 0.97]
  // purple
];
const BRIGHT_STARS = [
  {
    id: "star-red",
    pos: [1.8, 0.05, 1.2],
    color: "#ff3333"
  },
  {
    id: "star-blue",
    pos: [-2.4, -0.03, 0.8],
    color: "#4488ff"
  },
  {
    id: "star-pink",
    pos: [1, 0.08, -2.8],
    color: "#ff88ff"
  },
  {
    id: "star-cyan",
    pos: [-1.6, 0.02, -1.9],
    color: "#00ccff"
  },
  {
    id: "star-orange",
    pos: [3.2, -0.05, -0.6],
    color: "#ffaa00"
  },
  {
    id: "star-purple",
    pos: [-3, 0.04, -1],
    color: "#cc44ff"
  },
  {
    id: "star-red2",
    pos: [2.6, 0.06, 2.2],
    color: "#ff4444"
  },
  {
    id: "star-teal",
    pos: [-2, -0.02, 2.6],
    color: "#44ffcc"
  }
];
function ParticleField({ count }) {
  const ref = reactExports.useRef(null);
  const geometry = reactExports.useMemo(() => {
    const geo = new BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = GALAXY_COLORS[Math.floor(Math.random() * GALAXY_COLORS.length)];
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    geo.setAttribute("color", new BufferAttribute(colors, 3));
    return geo;
  }, [count]);
  const { camera } = useThree();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.012;
      ref.current.rotation.x += delta * 5e-3;
    }
    const mx = state.mouse.x * 0.3;
    const my = state.mouse.y * 0.3;
    camera.position.x += (mx - camera.position.x) * delta * 2;
    camera.position.y += (my - camera.position.y) * delta * 2;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("points", { ref, geometry, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "pointsMaterial",
    {
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true
    }
  ) });
}
function FloatingObject({
  position,
  color,
  speed,
  type
}) {
  const ref = reactExports.useRef(null);
  const offset = reactExports.useRef(Math.random() * Math.PI * 2);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + offset.current) * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    type === "ico" && /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [0.25, 0] }),
    type === "oct" && /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.2, 0] }),
    type === "box" && /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [0.22, 0.22, 0.22] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        wireframe: true,
        color,
        emissive: color,
        emissiveIntensity: 0.7
      }
    )
  ] });
}
function BrightStar({
  position,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.07, 8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color, transparent: true, opacity: 0.4 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.03, 8, 8] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color })
    ] })
  ] });
}
function HeroGalaxy({ isMobile }) {
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
        // near-white hot center
        new Color(1, 0.55, 0.15),
        // orange outer core
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
          // warm white
          new Color(0.75, 0.85, 1),
          // blue-white
          t * 2
        );
      } else {
        c.lerpColors(
          new Color(0.75, 0.85, 1),
          // blue-white
          new Color(0.45, 0.3, 0.85),
          // purple-blue
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
  if (isMobile) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { position: [2.8, 0, 0], scale: 1.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: groupRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("bufferGeometry", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "bufferAttribute",
          {
            attach: "attributes-position",
            args: [positions, 3]
          }
        ),
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
    BRIGHT_STARS.map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(BrightStar, { position: star.pos, color: star.color }, star.id))
  ] }) });
}
function CameraAnimator() {
  const { camera } = useThree();
  const progress = reactExports.useRef(0);
  const started = reactExports.useRef(false);
  useFrame((_, delta) => {
    if (!started.current) {
      camera.position.set(0, 0, 14);
      started.current = true;
    }
    if (progress.current < 1) {
      progress.current = Math.min(1, progress.current + delta * 0.6);
      const t = 1 - (1 - progress.current) ** 3;
      camera.position.z = 14 - t * 8;
    }
  });
  return null;
}
function HeroCanvas({
  particleCount,
  isMobile
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 14], fov: 65 },
      gl: { antialias: true, alpha: true },
      dpr: [1, 2],
      style: { position: "absolute", inset: 0, touchAction: "none" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, 5, 5], color: "#00d4ff", intensity: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CameraAnimator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleField, { count: particleCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeroGalaxy, { isMobile }),
        !isMobile && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [-4, 2, -2],
              color: "#f472b6",
              speed: 0.5,
              type: "ico"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [-5, -1, -1],
              color: "#fbbf24",
              speed: 0.3,
              type: "oct"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [5, -2, -3],
              color: "#34d399",
              speed: 0.4,
              type: "box"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [4, 3, -2],
              color: "#818cf8",
              speed: 0.6,
              type: "ico"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FloatingObject,
            {
              position: [-2, -3, -2],
              color: "#fb923c",
              speed: 0.35,
              type: "oct"
            }
          )
        ] })
      ]
    }
  );
}
function HeroSection() {
  const { particleCount } = useDeviceCapability();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const scrollToProjects = () => {
    var _a;
    (_a = document.querySelector("#projects")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    var _a;
    (_a = document.querySelector("#about")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative overflow-hidden flex items-center",
      style: {
        minHeight: "100svh",
        background: "transparent"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: { height: isMobile ? "50vh" : "100%" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              HeroCanvas,
              {
                particleCount: isMobile ? Math.floor(particleCount * 0.4) : particleCount,
                isMobile
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 40% at 70% 50%, oklch(0.82 0.18 220 / 5%) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 70% 40%, oklch(0.65 0.28 295 / 4%) 0%, transparent 50%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 80% at center, transparent 40%, oklch(0.05 0.02 254 / 60%) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-24 sm:py-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.3 },
              className: "text-sm font-medium tracking-[0.2em] uppercase mb-4",
              style: { color: "#818cf8" },
              children: "Hello, I'm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.4 },
              className: "hero-name text-gradient mb-4",
              children: [
                "Moeed Rizwan",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Farooq"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.55 },
              className: "inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 mb-5",
              style: { border: "1px solid oklch(0.82 0.18 220 / 30%)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full animate-pulse",
                    style: { background: "#34d399" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white", children: "Full Stack Developer & AI Automation Expert" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.65 },
              className: "text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl",
              children: "Building Scalable Systems, Smart Automations & High-Performance Web Apps with 7+ years of international experience."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.75 },
              className: "flex flex-wrap gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: scrollToProjects,
                    "data-ocid": "hero.primary_button",
                    className: "btn-primary text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 }),
                      "View Projects"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "hero.secondary_button",
                    className: "glass text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2 hover:border-opacity-60 transition-all w-full sm:w-auto justify-center",
                    style: { border: "1px solid oklch(0.82 0.18 220 / 30%)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
                      "Download CV"
                    ]
                  }
                )
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            onClick: scrollToAbout,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.2, duration: 0.6 },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors animate-float",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest uppercase", children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18 })
            ]
          }
        )
      ]
    }
  );
}
export {
  HeroSection as default
};
