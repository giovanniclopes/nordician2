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
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`relative ${sizes[size]}`}>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M50 70 L30 90 M50 70 L50 90 M50 70 L70 90"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="text-red-400"
            />

            <motion.path
              d="M50 70 L50 30"
              stroke="currentColor"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-red-500"
            />

            <motion.path
              d="M50 50 L30 40 M50 50 L70 40 M50 40 L30 30 M50 40 L70 30 M50 30 L30 20 M50 30 L70 20"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="text-red-300"
            />

            <motion.circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="text-red-400"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.5 }}
              className="text-red-300"
            />
          </svg>
        </motion.div>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-lg font-mjolnir tracking-wider text-red-400"
      >
        {text}
      </motion.span>
    </div>
  );
};
