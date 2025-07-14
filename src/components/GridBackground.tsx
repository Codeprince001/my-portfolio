// File: components/GridBackground.tsx
import { motion } from "framer-motion";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-visible">
  {/* Diagonal Lines */}
  <div className="absolute inset-0 overflow-visible">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[1px] h-[150vh] bg-gray-500/20"
        style={{
          left: `${i * 5}%`,
          transformOrigin: "top left",
          transform: "rotate(45deg)",
        }}
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 15 + Math.random() * 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      />
    ))}
  </div>

  {/* Pulse Dots */}
  <div className="absolute inset-0 overflow-visible">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-gray-400/20 hover:bg-white/30"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        whileHover={{
          scale: [1, 3],
          opacity: [0.5, 0],
          transition: { duration: 1.2, ease: "easeOut" },
        }}
      />
    ))}
  </div>
</div>

  );
};

export default GridBackground;
