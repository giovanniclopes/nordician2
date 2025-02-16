import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Rune {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  character: string;
}

const runeCharacters = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];

export function BackgroundRunes() {
  const [runes, setRunes] = useState<Rune[]>([]);

  useEffect(() => {
    const generateRunes = () => {
      return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 0.5 + Math.random() * 1.5,
        rotation: Math.random() * 360,
        opacity: 0.1 + Math.random() * 0.3,
        character: runeCharacters[Math.floor(Math.random() * runeCharacters.length)]
      }));
    };

    setRunes(generateRunes());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {runes.map((rune) => (
        <motion.div
          key={rune.id}
          initial={{
            x: `${rune.x}vw`,
            y: `${rune.y}vh`,
            scale: rune.scale,
            rotate: rune.rotation,
            opacity: 0
          }}
          animate={{
            y: [`${rune.y}vh`, `${rune.y - 20}vh`],
            rotate: [rune.rotation, rune.rotation + 360],
            opacity: [0, rune.opacity, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute font-mjolnir text-4xl text-red-500/20"
        >
          {rune.character}
        </motion.div>
      ))}
    </div>
  );
}