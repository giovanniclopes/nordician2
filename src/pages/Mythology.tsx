import { Categories } from "../components/Categories";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { motion } from "framer-motion";

import mitRealms from "../assets/mythology/mit-realms.webp";
import mitBeings from "../assets/mythology/mit-beings.webp";
import mitGods from "../assets/mythology/mit-gods.webp";

export function Mythology() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <ScrollToTop />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-28 pb-10 mbl:pt-24 container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-bold mb-4 font-mjolnir tracking-wide"
          >
            Mitologia Nórdica
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explore a rica história da mitologia nórdica em seus reinos,
            criaturas e deuses
          </motion.p>
        </div>

        <div className="flex flex-row items-stretch justify-center gap-8 font-poppins mbl:flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1"
          >
            <Categories
              imageUrl={mitRealms}
              label="Asgard, Midgard, etc."
              title="Reinos"
              description="Todos os noves reinos da mitologia nórdica, desde as alturas radiantes de Asgard até as profundezas geladas de Niflheim."
              link="/realms"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1"
          >
            <Categories
              imageUrl={mitBeings}
              label="Hel, Fenrir, etc."
              title="Criaturas"
              description="Das ferozes criaturas das lendas aos seres místicos que habitam os nove reinos."
              link="/beings"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-1"
          >
            <Categories
              imageUrl={mitGods}
              label="Odin, Thor, etc."
              title="Deuses"
              description="Os poderosos Æsir e Vanir que governam os reinos e moldam o destino de todos os seres."
              link="/gods"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Mythology;
