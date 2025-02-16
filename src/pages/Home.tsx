import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GamesIllustration from "../assets/GamesIllustration.gif";
import Navbar from "../components/Navbar";
import { Button } from "./../components/Button";
import { useMouseGlow } from "../hooks/useMouseGlow";
import { Features } from "../components/Features";
import { BackgroundRunes } from "../components/BackgroundRunes";

export function Home() {
  const heroCardRef = useMouseGlow();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <BackgroundRunes />
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen bg-main bg-cover bg-fixed overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-5"></div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            ref={heroCardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-8 p-12 rounded-lg backdrop-blur-sm border border-red-500/20 max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative inline-block"
            >
              <h1 className="text-8xl font-mjolnir tracking-wide mbl:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-red-200/80">
                Boas-vindas ao Mundo Nórdico
              </h1>
              <div className="absolute -inset-x-6 -inset-y-4 bg-red-500/5 blur-xl -z-10 rounded-full"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <p className="text-red-200/80 text-xl font-light tracking-wide">
                Explore as sagas dos deuses, mergulhe nas lendas dos reinos
              </p>
              <div className="flex flex-row gap-6 items-center justify-center mbl:flex-col">
                <Link to="/mythology">
                  <Button title="Mitologia" type="PRIMARY" />
                </Link>
                <Link to="/reality">
                  <Button title="Realidade" type="SECUNDARY" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-red-400"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-6"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="norse-card p-8 relative overflow-hidden"
            >
              <h2 className="text-3xl font-mjolnir mb-6 text-red-300">Bem-vindo ao Nordician</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Aqui você encontrará diversos artigos sobre a rica cultura nórdica, 
                abrangendo tanto o mundo real quanto o místico.
              </p>
              <p className="text-red-400/80 italic">
                Os textos podem estar em Dinamarquês ou Norueguês para preservar a autenticidade,
                mas você pode facilmente traduzi-los com o tradutor do seu navegador.
              </p>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="w-full h-full bg-[url('/src/assets/mythology/rune-pattern.svg')] bg-contain"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <Features />

      {/* Games Section with Enhanced Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center mbl:flex mbl:flex-col-reverse">
            <motion.div
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-center"
            >
              <h2 className="text-6xl font-mjolnir text-red-300 tracking-wide mbl:text-4xl">
                Jogos Nórdicos
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
              <p className="text-xl text-gray-300 max-w-xl mx-auto">
                Descubra uma seleção cuidadosa de jogos digitais que mergulham profundamente
                no universo viking e na mitologia nórdica.
              </p>
              <Link to="/games">
                <Button title="EXPLORAR JOGOS" type="PRIMARY" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
              <img
                className="w-full max-w-2xl mx-auto rounded-lg mbl:w-80"
                src={GamesIllustration}
                alt="Jogos Nórdicos"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Contact Form Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-6 bg-effect bg-cover bg-fixed border-t-2 border-red-500/30"
      >
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-5xl font-mjolnir text-red-300">Alguma dúvida?</h2>
            <p className="text-xl text-gray-300">Entre em contato conosco</p>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="norse-card p-8"
          >
            <form
              action="https://formsubmit.co/giovanniclopes@gmail.com"
              method="post"
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="block text-red-300 font-medium">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full bg-gray-800/50 border border-red-500/20 p-3 rounded-lg text-gray-100 placeholder-gray-400
                           focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-red-300 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full bg-gray-800/50 border border-red-500/20 p-3 rounded-lg text-gray-100 placeholder-gray-400
                           focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                  type="email"
                  name="email"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-red-300 font-medium">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full bg-gray-800/50 border border-red-500/20 p-3 rounded-lg text-gray-100 placeholder-gray-400
                           focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 min-h-[120px]"
                  name="message"
                  placeholder="Sua mensagem aqui..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="norse-button w-full py-4 text-lg font-mjolnir tracking-wide"
              >
                Enviar Mensagem
              </button>
              <input type="hidden" name="_template" value="table" />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
