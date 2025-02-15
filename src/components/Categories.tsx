import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="norse-card rune-border h-[450px] relative group"
    >
      <Link to={link} className="block h-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Rune Overlay Pattern */}
          <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-5 group-hover:opacity-10 transition-opacity duration-700" />
        </div>

        <div className="relative h-full flex flex-col justify-end p-8">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1 text-sm bg-red-900/50 rounded-full font-medium border border-red-500/20 backdrop-blur-sm">
              {label}
            </span>

            <h3 className="norse-title text-3xl relative">
              {title}
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
            </h3>

            <p className="text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {description}
            </p>

            <motion.div
              whileHover={{ x: 5 }}
              className="pt-4 flex items-center text-red-400 font-medium group-hover:text-red-300"
            >
              <span className="rune-text">Explorar {title.toLowerCase()}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Categories;
