import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Mitologia", path: "/mythology" },
    { title: "História", path: "/history" },
    // { title: "Deuses", path: "/gods" },
    // { title: "Criaturas", path: "/beings" },
    // { title: "Reinos", path: "/realms" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-gray-900/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.img
                src={logo}
                alt="Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.5 }}
              />
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-lg transition-all duration-200 font-medium hover:bg-white/10 ${
                    location.pathname === link.path
                      ? "text-red-400 bg-white/5"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
            >
              {isOpen ? (
                <CloseIcon
                  weight="bold"
                  className="text-red-400 hover:text-red-300 transition-colors"
                />
              ) : (
                <MenuIcon
                  weight="bold"
                  className="text-red-400 hover:text-red-300 transition-colors"
                />
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2 text-lg rounded-lg transition-colors duration-200 ${
                        location.pathname === link.path
                          ? "text-red-400 bg-white/5"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      <div className="h-20" />
    </>
  );
}
