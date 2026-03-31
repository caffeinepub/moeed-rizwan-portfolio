import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useDeviceCapability } from "../hooks/useDeviceCapability";

const STATS = [
  { value: "7+", label: "Years Experience", color: "#34d399" },
  { value: "18+", label: "Live Projects", color: "#00d4ff" },
  { value: "50+", label: "Happy Clients", color: "#a855f7" },
  { value: "5", label: "Roles Held", color: "#fbbf24" },
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

function Galaxy() {
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

  return (
    <group ref={groupRef}>
      {/* Galaxy particle field */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
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
  );
}

function GalaxyCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 2.5, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ touchAction: "none" }}
    >
      <ambientLight intensity={0.1} />
      <Suspense fallback={null}>
        <Galaxy />
      </Suspense>
    </Canvas>
  );
}

export default function AboutSection() {
  const { enable3D } = useDeviceCapability();

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Subtle nebula ambient */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a855f715 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase mb-3"
            style={{ color: "#34d399" }}
          >
            Who Am I
          </p>
          <h2 className="section-title text-white">
            About <span style={{ color: "#a855f7" }}>Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Galaxy — shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div
                className="w-full h-48 sm:h-64 lg:h-72 mx-auto"
                style={{ background: "transparent" }}
              >
                {enable3D ? (
                  <Suspense fallback={null}>
                    <GalaxyCanvas />
                  </Suspense>
                ) : (
                  /* CSS galaxy fallback */
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className="w-48 h-32 rounded-full"
                      style={{
                        background:
                          "radial-gradient(ellipse at 40% 50%, #ffaa44 0%, #a855f7 30%, #4488ff 60%, transparent 80%)",
                        filter: "blur(8px)",
                        opacity: 0.8,
                      }}
                    />
                  </div>
                )}
              </div>
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-light rounded-full px-4 py-2 text-xs font-medium text-center whitespace-nowrap"
                style={{ color: "#a855f7" }}
              >
                ✨ Galaxy of Solutions · Innovation at Scale
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="order-last lg:order-first"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Moeed Rizwan Farooq
              </h3>
              <p
                className="text-sm font-semibold tracking-wide uppercase mb-6"
                style={{ color: "#a855f7" }}
              >
                Full Stack Developer | AI Automation Expert
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Full Stack Developer with{" "}
                <span className="text-white font-medium">7+ years</span> of
                experience building modern applications, scalable backends, and
                high-performing e-commerce systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in{" "}
                <span className="text-white font-medium">
                  Python (Django, Flask, REST APIs)
                </span>{" "}
                and the{" "}
                <span className="text-white font-medium">MERN stack</span>,
                delivering complete end-to-end solutions for international
                clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond development, I actively{" "}
                <span className="text-white font-medium">
                  teach and mentor developers
                </span>
                , helping individuals and teams master modern web technologies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ rotateX: 5, rotateY: 8, scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center cursor-default"
                  style={{
                    transformPerspective: 800,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
