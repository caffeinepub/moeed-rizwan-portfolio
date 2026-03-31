import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function AIAssistantOrb() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50" data-ocid="ai_orb.button">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full right-0 mb-3 px-3 py-2 rounded-xl text-xs font-medium text-white whitespace-nowrap"
            style={{
              background: "oklch(0.12 0.04 254 / 95%)",
              border: "1px solid oklch(0.82 0.18 220 / 30%)",
              backdropFilter: "blur(12px)",
            }}
          >
            💬 AI Assistant · Click to contact
            <div
              className="absolute top-full right-4 border-4 border-transparent"
              style={{ borderTopColor: "oklch(0.82 0.18 220 / 30%)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #00d4ff, #a855f7)",
          boxShadow:
            "0 0 25px rgba(0,212,255,0.5), 0 0 50px rgba(168,85,247,0.3)",
        }}
        aria-label="AI Assistant - Click to contact"
      >
        {/* Pulsing ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #a855f7)",
          }}
        />
        {/* Inner orb */}
        <span className="relative z-10 text-xl">✨</span>
      </motion.button>
    </div>
  );
}
