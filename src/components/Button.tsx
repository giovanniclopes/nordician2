import classNames from "classnames";
import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  type: "PRIMARY" | "SECUNDARY";
}

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      className={`
        relative overflow-hidden px-8 py-3 rounded-lg font-mjolnir text-xl tracking-wider
        transition-all duration-500 ease-out transform
        ${type === "PRIMARY" 
          ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600" 
          : "bg-transparent border-2 border-red-500/30 text-red-400 hover:border-red-400 hover:text-red-300"
        }
      `}
    >
      <span className="relative z-10">{title}</span>
      
      {/* Animated background effect */}
      <div className={`
        absolute inset-0 -z-10 transition-opacity duration-500 ease-out opacity-0
        bg-[url('/src/assets/mythology/rune-pattern.svg')] bg-repeat bg-center
        hover:opacity-10
      `}/>
      
      {/* Glowing effect on hover */}
      <div className={`
        absolute inset-0 -z-20 transition-opacity duration-500 ease-out opacity-0
        ${type === "PRIMARY"
          ? "bg-gradient-to-r from-red-500/50 to-red-600/50 blur-xl"
          : "bg-gradient-to-r from-red-500/20 to-red-600/20 blur-lg"
        }
        hover:opacity-100
      `}/>
    </motion.button>
  );
}

export default Button;
