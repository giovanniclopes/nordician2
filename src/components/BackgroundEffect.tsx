import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const runeSymbols = [
  "ᚨ",
  "ᚩ",
  "ᚦ",
  "ᚢ",
  "ᚱ",
  "ᚳ",
  "ᚷ",
  "ᚹ",
  "ᚻ",
  "ᚾ",
  "ᛁ",
  "ᛂ",
];

export const BackgroundEffect = () => {
  const [runes, setRunes] = useState<
    Array<{ symbol: string; x: number; y: number; id: number }>
  >([]);

  useEffect(() => {
    const createRune = () => {
      const symbol =
        runeSymbols[Math.floor(Math.random() * runeSymbols.length)];
      const x = Math.random() * 100;
      const y = -10;
      const id = Date.now();

      setRunes((prev) => [...prev, { symbol, x, y, id }]);

      setTimeout(() => {
        setRunes((prev) => prev.filter((rune) => rune.id !== id));
      }, 10000); // Remove rune after animation
    };

    const interval = setInterval(createRune, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {runes.map((rune) => (
        <motion.div
          key={rune.id}
          initial={{ y: rune.y + "%", x: rune.x + "%", opacity: 0 }}
          animate={{
            y: "120%",
            opacity: [0, 0.3, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            ease: "linear",
          }}
          className="absolute text-red-500/20 text-2xl font-mjolnir"
        >
          {rune.symbol}
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-radial from-transparent to-gray-900/30" />

      <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-[0.02]" />
    </div>
  );
};
