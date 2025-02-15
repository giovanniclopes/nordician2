import { motion } from "framer-motion";

interface LoadingProps {
  size?: "small" | "medium" | "large";
  text?: string;
}

export const Loading = ({
  size = "medium",
  text = "Carregando...",
}: LoadingProps) => {
  const sizes = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`relative ${sizes[size]}`}>
        {/* Yggdrasil (World Tree) inspired loading animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g fill="none" stroke="currentColor" strokeWidth="2">
              {/* Tree trunk */}
              <motion.path
                d="M50,80 L50,20"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              />
              {/* Branches */}
              {[0, 1, 2].map((i) => (
                <motion.path
                  key={i}
                  d={`M50,${40 + i * 15} L${30 + i * 5},${30 + i * 15} M50,${
                    40 + i * 15
                  } L${70 - i * 5},${30 + i * 15}`}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                  className="text-red-400"
                />
              ))}
              {/* Roots */}
              {[0, 1, 2].map((i) => (
                <motion.path
                  key={i}
                  d={`M50,80 L${30 + i * 20},95`}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                  className="text-red-600"
                />
              ))}
            </g>
          </svg>
        </motion.div>

        {/* Rotating rune circle */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50,5 A45,45 0 1,1 49.9999,5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-red-500/30"
            />
            {/* Add 8 runes around the circle */}
            {[...Array(8)].map((_, i) => (
              <g
                key={i}
                transform={`rotate(${i * 45} 50 50) translate(50 10)`}
                className="text-red-400"
              >
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  fontSize="8"
                  fill="currentColor"
                  transform="rotate(90)"
                >
                  ᚨ
                </text>
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
      <motion.p
        className="mt-4 text-lg text-gray-300 norse-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.p>
    </div>
  );
};
