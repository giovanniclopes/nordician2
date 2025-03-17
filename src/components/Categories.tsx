import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMouseGlow } from "../hooks/useMouseGlow";

interface CategoriesProps {
  imageUrl: string;
  label: string;
  title: string;
  description: string;
  link: string;
}

export function Categories({
  imageUrl,
  label,
  title,
  description,
  link,
}: CategoriesProps) {
  const cardRef = useMouseGlow();

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      className="norse-card rune-border h-[450px] relative group overflow-hidden"
    >
      <Link to={link} className="block h-full">
        <div className="absolute inset-0 transform transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 from-50% via-gray-900/70 to-transparent opacity-90 transition-all duration-700 ease-out group-hover:opacity-80" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-50 transform transition-all duration-700 ease-out scale-110 group-hover:scale-125 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-5 transform transition-all duration-700 ease-out scale-110 group-hover:scale-125 group-hover:opacity-35" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-t from-red-500/20 via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-between p-8">
          <div className="transform transition-all duration-500 ease-out group-hover:translate-y-[-8px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 pt-0 bg-red-900/50 rounded-full border border-red-500/20 backdrop-blur-sm transform transition-transform duration-500 ease-out group-hover:scale-105">
                <span className="text-sm font-medium text-red-200 transition-colors duration-500 group-hover:text-red-100">
                  {label}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl font-mjolnir font-semibold tracking-wider relative inline-block text-white group-hover:text-red-200 transition-all duration-500 transform group-hover:translate-x-2">
                  {title}
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 transform origin-left transition-all duration-500 ease-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-50" />
                </h3>

                <p className="text-base text-gray-300/90 group-hover:text-gray-100 transition-all duration-500 line-clamp-3 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="transform transition-all duration-500 ease-out translate-y-0 group-hover:translate-y-[-8px]"
          >
            <div className="norse-button w-full text-center py-3 font-mjolnir text-lg tracking-wide group-hover:tracking-[0.15em] transition-all duration-500">
              Explorar
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Categories;
