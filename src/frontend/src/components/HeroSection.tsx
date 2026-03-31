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

function IcosahedronWireframe({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const ring4Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.4;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.3;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.2;
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.15;
    if (ring4Ref.current) ring4Ref.current.rotation.z -= delta * 0.25;
  });

  if (isMobile) return null;

  return (
    <group position={[2.8, 0, 0]}>
      <pointLight color="#00d4ff" intensity={3} distance={8} />
      <pointLight
        color="#f472b6"
        intensity={2}
        distance={6}
        position={[0, 2, 2]}
      />
      <pointLight
        color="#fbbf24"
        intensity={1.5}
        distance={5}
        position={[-2, -1, 1]}
      />

      <mesh>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          wireframe
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.6}
        />
      </mesh>

      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0.3, 0]}>
        <torusGeometry args={[2.1, 0.015, 8, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.9}
        />
      </mesh>
      <mesh ref={ring2Ref} rotation={[0, 0.5, Math.PI / 4]}>
        <torusGeometry args={[2.4, 0.01, 8, 100]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh ref={ring3Ref} rotation={[Math.PI / 2, 0.2, 0.3]}>
        <torusGeometry args={[1.8, 0.012, 8, 100]} />
        <meshStandardMaterial
          color="#34d399"
          emissive="#34d399"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh ref={ring4Ref} rotation={[0.4, Math.PI / 3, 0.1]}>
        <torusGeometry args={[2.6, 0.008, 8, 100]} />
        <meshStandardMaterial
          color="#f472b6"
          emissive="#f472b6"
          emissiveIntensity={0.7}
        />
      </mesh>
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
      camera.position.z = 14 - t * 9;
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
      camera={{ position: [0, 0, 14], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ position: "absolute", inset: 0, touchAction: "none" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[-5, 5, 5]} color="#00d4ff" intensity={1} />
      <CameraAnimator />
      <ParticleField count={particleCount} />
      <IcosahedronWireframe isMobile={isMobile} />
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
