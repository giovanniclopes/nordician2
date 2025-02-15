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
      className="relative group rounded-xl overflow-hidden h-[450px] bg-gray-800 shadow-2xl"
    >
      <Link to={link} className="block h-full">
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-75" />
        </div>

        <div className="relative h-full flex flex-col justify-end p-6 text-white">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 text-sm bg-purple-600 rounded-full font-medium">
              {label}
            </span>
            <h3 className="text-2xl font-bold font-mjolnir tracking-wide">
              {title}
            </h3>
            <p className="text-gray-300 line-clamp-3">{description}</p>

            <motion.div
              whileHover={{ x: 5 }}
              className="pt-4 flex items-center text-purple-400 font-medium"
            >
              Explore {title.toLowerCase()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
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
