import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function StarField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      [1.0, 1.0, 1.0],
      [0.6, 0.8, 1.0],
      [0.0, 0.83, 1.0],
      [0.98, 0.75, 0.14],
      [0.96, 0.44, 0.71],
      [0.2, 0.83, 0.6],
      [0.51, 0.55, 0.97],
      [0.98, 0.57, 0.24],
    ];

    for (let i = 0; i < count; i++) {
      const r = 20 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.008;
      ref.current.rotation.x += delta * 0.003;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

function NebulaSphere({
  position,
  color,
  radius,
}: {
  position: [number, number, number];
  color: string;
  radius: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.12}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function ShootingStar() {
  const ref = useRef<THREE.Mesh>(null);
  const state = useRef({
    active: false,
    timer: Math.random() * 5,
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    life: 0,
  });

  useFrame((_, delta) => {
    const s = state.current;
    s.timer -= delta;

    if (s.timer <= 0 && !s.active) {
      // Launch a new shooting star
      s.active = true;
      s.life = 0;
      s.x = (Math.random() - 0.5) * 60;
      s.y = 15 + Math.random() * 10;
      s.dx = (Math.random() * 0.4 + 0.3) * (Math.random() > 0.5 ? 1 : -1);
      s.dy = -(Math.random() * 0.3 + 0.2);
      s.timer = 4 + Math.random() * 6;
    }

    if (s.active && ref.current) {
      s.life += delta;
      s.x += s.dx * 60 * delta;
      s.y += s.dy * 60 * delta;
      ref.current.position.set(s.x, s.y, -5);

      const fade = Math.max(0, 1 - s.life / 0.8);
      (ref.current.material as THREE.MeshBasicMaterial).opacity = fade * 0.9;

      if (s.life > 0.8) {
        s.active = false;
        ref.current.position.set(9999, 9999, 9999);
      }
    }
  });

  return (
    <mesh ref={ref} position={[9999, 9999, 9999]}>
      <boxGeometry args={[3, 0.03, 0.03]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0} />
    </mesh>
  );
}

function GalaxyScene({ starCount }: { starCount: number }) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <StarField count={starCount} />
      <NebulaSphere position={[-15, 10, -20]} color="#a855f7" radius={12} />
      <NebulaSphere position={[20, -8, -15]} color="#34d399" radius={10} />
      <NebulaSphere position={[-5, -15, -25]} color="#f472b6" radius={14} />
      <NebulaSphere position={[15, 12, -18]} color="#818cf8" radius={9} />
      <NebulaSphere position={[0, 0, -30]} color="#00d4ff" radius={18} />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
    </>
  );
}

export default function GalaxyBackground() {
  const starCount =
    typeof navigator !== "undefined" && navigator.hardwareConcurrency < 4
      ? 1200
      : 5000;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "#000005",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        dpr={1}
        style={{
          width: "100%",
          height: "100%",
          touchAction: "none",
          background: "#000005",
        }}
      >
        <Suspense fallback={null}>
          <GalaxyScene starCount={starCount} />
        </Suspense>
      </Canvas>
    </div>
  );
}
