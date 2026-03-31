import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useDeviceCapability } from "../hooks/useDeviceCapability";

const GALAXY_COLORS = [
  [0.0, 0.83, 1.0], // cyan
  [0.51, 0.55, 0.97], // indigo
  [0.96, 0.44, 0.71], // pink
  [0.98, 0.75, 0.14], // gold
  [0.2, 0.83, 0.6], // teal
  [1.0, 1.0, 1.0], // white
  [0.66, 0.33, 0.97], // purple
];

const BRIGHT_STARS = [
  {
    id: "star-red",
    pos: [1.8, 0.05, 1.2] as [number, number, number],
    color: "#ff3333",
  },
  {
    id: "star-blue",
    pos: [-2.4, -0.03, 0.8] as [number, number, number],
    color: "#4488ff",
  },
  {
    id: "star-pink",
    pos: [1.0, 0.08, -2.8] as [number, number, number],
    color: "#ff88ff",
  },
  {
    id: "star-cyan",
    pos: [-1.6, 0.02, -1.9] as [number, number, number],
    color: "#00ccff",
  },
  {
    id: "star-orange",
    pos: [3.2, -0.05, -0.6] as [number, number, number],
    color: "#ffaa00",
  },
  {
    id: "star-purple",
    pos: [-3.0, 0.04, -1.0] as [number, number, number],
    color: "#cc44ff",
  },
  {
    id: "star-red2",
    pos: [2.6, 0.06, 2.2] as [number, number, number],
    color: "#ff4444",
  },
  {
    id: "star-teal",
    pos: [-2.0, -0.02, 2.6] as [number, number, number],
    color: "#44ffcc",
  },
];

function ParticleField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
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
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [count]);

  const { camera } = useThree();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.012;
      ref.current.rotation.x += delta * 0.005;
    }
    // Mouse parallax
    const mx = state.mouse.x * 0.3;
    const my = state.mouse.y * 0.3;
    camera.position.x += (mx - camera.position.x) * delta * 2;
    camera.position.y += (my - camera.position.y) * delta * 2;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingObject({
  position,
  color,
  speed,
  type,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  type: "ico" | "oct" | "box";
}) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      ref.current.position.y =
        position[1] +
        Math.sin(state.clock.elapsedTime * 0.5 + offset.current) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {type === "ico" && <icosahedronGeometry args={[0.25, 0]} />}
      {type === "oct" && <octahedronGeometry args={[0.2, 0]} />}
      {type === "box" && <boxGeometry args={[0.22, 0.22, 0.22]} />}
      <meshStandardMaterial
        wireframe
        color={color}
        emissive={color}
        emissiveIntensity={0.7}
      />
    </mesh>
  );
}

function BrightStar({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <group position={position}>
      {/* Glow halo */}
      <mesh>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
      {/* Star core */}
      <mesh>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function HeroGalaxy({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, colors } = useMemo(() => {
    const totalParticles = 7000;
    const coreCount = Math.floor(totalParticles * 0.25);
    const armCount = totalParticles - coreCount;

    const pos = new Float32Array(totalParticles * 3);
    const col = new Float32Array(totalParticles * 3);

    const coreRadius = 0.4;
    const maxRadius = 3.2;

    // Core particles — warm, tightly packed
    for (let i = 0; i < coreCount; i++) {
      const r = Math.random() * coreRadius;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.3;
      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * 0.12;
      pos[i * 3 + 2] = r * Math.sin(theta);

      // Warm white → orange → pale yellow
      const t = r / coreRadius;
      const c = new THREE.Color();
      c.lerpColors(
        new THREE.Color(1.0, 0.98, 0.95), // near-white hot center
        new THREE.Color(1.0, 0.55, 0.15), // orange outer core
        t,
      );
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    // Arm particles — spiral logarithmic layout
    for (let i = 0; i < armCount; i++) {
      const idx = coreCount + i;
      const armIndex = Math.floor(Math.random() * 3);
      const baseAngle = (armIndex / 3) * Math.PI * 2;
      const radius =
        coreRadius + Math.random() ** 0.6 * (maxRadius - coreRadius);
      const spiralAngle =
        baseAngle + radius * 1.8 + (Math.random() - 0.5) * 0.5;
      const x = radius * Math.cos(spiralAngle);
      const z = radius * Math.sin(spiralAngle);
      const y = (Math.random() - 0.5) * radius * 0.08;

      pos[idx * 3] = x;
      pos[idx * 3 + 1] = y;
      pos[idx * 3 + 2] = z;

      // Warm white near center → blue-white → purple-blue at edge
      const t = (radius - coreRadius) / (maxRadius - coreRadius);
      const c = new THREE.Color();
      if (t < 0.5) {
        c.lerpColors(
          new THREE.Color(1.0, 0.95, 0.88), // warm white
          new THREE.Color(0.75, 0.85, 1.0), // blue-white
          t * 2,
        );
      } else {
        c.lerpColors(
          new THREE.Color(0.75, 0.85, 1.0), // blue-white
          new THREE.Color(0.45, 0.3, 0.85), // purple-blue
          (t - 0.5) * 2,
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

  return (
    <group position={[2.8, 0, 0]} scale={1.2}>
      <group ref={groupRef}>
        {/* Galaxy particle field */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[positions, 3]}
            />
            <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          </bufferGeometry>
          <pointsMaterial
            size={0.025}
            vertexColors
            transparent
            opacity={0.95}
            sizeAttenuation
          />
        </points>

        {/* Bright core glow — outer halo */}
        <mesh>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshBasicMaterial color="#ff6600" transparent opacity={0.3} />
        </mesh>

        {/* Bright core — inner bright spot */}
        <mesh>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color="#ffaa44" />
        </mesh>

        {/* Colored bright stars scattered around the disk */}
        {BRIGHT_STARS.map((star) => (
          <BrightStar key={star.id} position={star.pos} color={star.color} />
        ))}
      </group>
    </group>
  );
}

function CameraAnimator() {
  const { camera } = useThree();
  const progress = useRef(0);
  const started = useRef(false);

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
  isMobile,
}: {
  particleCount: number;
  isMobile: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 65 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ position: "absolute", inset: 0, touchAction: "none" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[-5, 5, 5]} color="#00d4ff" intensity={1} />
      <CameraAnimator />
      <ParticleField count={particleCount} />
      <HeroGalaxy isMobile={isMobile} />
      {!isMobile && (
        <>
          <FloatingObject
            position={[-4, 2, -2]}
            color="#f472b6"
            speed={0.5}
            type="ico"
          />
          <FloatingObject
            position={[-5, -1, -1]}
            color="#fbbf24"
            speed={0.3}
            type="oct"
          />
          <FloatingObject
            position={[5, -2, -3]}
            color="#34d399"
            speed={0.4}
            type="box"
          />
          <FloatingObject
            position={[4, 3, -2]}
            color="#818cf8"
            speed={0.6}
            type="ico"
          />
          <FloatingObject
            position={[-2, -3, -2]}
            color="#fb923c"
            speed={0.35}
            type="oct"
          />
        </>
      )}
    </Canvas>
  );
}

export default function HeroSection() {
  const { particleCount } = useDeviceCapability();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: "100svh",
        background: "transparent",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ height: isMobile ? "50vh" : "100%" }}
      >
        <Suspense fallback={null}>
          <HeroCanvas
            particleCount={
              isMobile ? Math.floor(particleCount * 0.4) : particleCount
            }
            isMobile={isMobile}
          />
        </Suspense>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 50%, oklch(0.82 0.18 220 / 5%) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 70% 40%, oklch(0.65 0.28 295 / 4%) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at center, transparent 40%, oklch(0.05 0.02 254 / 60%) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-24 sm:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: "#818cf8" }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hero-name text-gradient mb-4"
          >
            Moeed Rizwan
            <br />
            Farooq
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 mb-5"
            style={{ border: "1px solid oklch(0.82 0.18 220 / 30%)" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#34d399" }}
            />
            <span className="text-sm font-medium text-white">
              Full Stack Developer &amp; AI Automation Expert
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Building Scalable Systems, Smart Automations &amp; High-Performance
            Web Apps with 7+ years of international experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={scrollToProjects}
              data-ocid="hero.primary_button"
              className="btn-primary text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <ExternalLink size={16} />
              View Projects
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              className="glass text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2 hover:border-opacity-60 transition-all w-full sm:w-auto justify-center"
              style={{ border: "1px solid oklch(0.82 0.18 220 / 30%)" }}
            >
              <Download size={16} />
              Download CV
            </button>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors animate-float"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
