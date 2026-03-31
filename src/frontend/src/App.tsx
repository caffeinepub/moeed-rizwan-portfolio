import { Toaster } from "@/components/ui/sonner";
import { Suspense, lazy, useEffect, useState } from "react";
import AIAssistantOrb from "./components/AIAssistantOrb";
import GalaxyBackground from "./components/GalaxyBackground";
import Navbar from "./components/Navbar";

const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const WhyHireMeSection = lazy(() => import("./components/WhyHireMeSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-neon-cyan border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  return (
    <div
      className="min-h-screen relative"
      style={{ background: "transparent" }}
    >
      <GalaxyBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <main>
          <Suspense fallback={<SectionFallback />}>
            <HeroSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ExperienceSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <SkillsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <WhyHireMeSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </main>
        <footer
          className="py-8 text-center border-t"
          style={{ borderColor: "oklch(0.82 0.18 220 / 10%)" }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient hover:opacity-80 transition-opacity"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
        <AIAssistantOrb />
        <Toaster />
      </div>
    </div>
  );
}
