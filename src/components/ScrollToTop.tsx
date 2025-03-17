import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ScrollUpIcon } from "./Icons";

type ScrollToTopProps = {
  children?: React.ReactNode;
};

export const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-red-500/30 text-red-400 hover:text-red-300 transition-colors duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <ScrollUpIcon
                className="text-red-400 group-hover:text-red-300 transition-colors"
                weight="bold"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500/20 blur-md" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
