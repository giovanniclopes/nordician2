import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GamesIllustration from "../assets/GamesIllustration.gif";
import { BackgroundRunes } from "../components/BackgroundRunes";
import { Features } from "../components/Features";
import Navbar from "../components/Navbar";
import { useMouseGlow } from "../hooks/useMouseGlow";
import { Button } from "./../components/Button";

export function Home() {
  const heroCardRef = useMouseGlow();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <BackgroundRunes />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen pb-16 bg-main bg-cover bg-fixed overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/30 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-10"></div>

        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "linear-gradient(0deg, transparent 70%, rgba(94, 129, 172, 0.3) 100%)",
              "linear-gradient(0deg, transparent 70%, rgba(163, 190, 140, 0.3) 100%)",
              "linear-gradient(0deg, transparent 70%, rgba(94, 129, 172, 0.3) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.div
            ref={heroCardRef}
            className="text-center space-y-8 p-12 rounded-lg max-w-5xl z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex items-center justify-center gap-6 mb-4">
                <motion.div
                  className="h-1 w-16 bg-gradient-to-r from-transparent to-red-500/80"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <svg
                  className="w-8 h-8 text-red-300 opacity-70"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,2L1,21H23L12,2M12,6L19.5,18H4.5L12,6z" />
                </svg>
                <motion.div
                  className="h-1 w-16 bg-gradient-to-l from-transparent to-red-500/80"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>

              <motion.h1
                className="text-8xl font-extrabold font-mjolnir tracking-wider mbl:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-white to-red-200/90">
                  NORDICIAN
                </span>
              </motion.h1>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-4"
              >
                <h2 className="text-4xl font-mjolnir tracking-wide mbl:text-3xl text-red-300/90">
                  Portal para o Mundo Nórdico
                </h2>
              </motion.div>

              <div className="absolute -inset-x-6 -inset-y-4 bg-red-500/10 blur-3xl -z-10 rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="space-y-8 relative"
            >
              <p className="text-red-100/90 text-xl font-light leading-relaxed max-w-3xl mx-auto">
                Descubra os segredos ancestrais dos povos do norte. Navegue
                pelas sagas épicas dos
                <span className="text-red-300 font-medium">
                  {" "}
                  deuses nórdicos
                </span>
                , explore as tradições e
                <span className="text-red-300 font-medium">
                  {" "}
                  lendas vikings
                </span>{" "}
                que ecoam através dos tempos.
              </p>

              <motion.div
                className="flex flex-row gap-8 items-center justify-center mbl:flex-col mbl:gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1 }}
              >
                <Link to="/mythology" className="group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <Button title="EXPLORAR MITOLOGIA" type="PRIMARY" />
                  </motion.div>
                </Link>

                <Link to="/reality" className="group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition duration-300"></div>
                    <Button title="DESCOBRIR REALIDADE" type="SECUNDARY" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="absolute left-10 top-1/4 hidden xl:block">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-500/20 text-5xl font-mjolnir"
                initial={{ y: 0, opacity: 0.2 }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
                style={{ left: `${i * 30}px`, top: `${i * 40}px` }}
              >
                ᚠ
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="absolute right-10 top-1/3 hidden xl:block">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-500/20 text-5xl font-mjolnir"
                initial={{ y: 0, opacity: 0.2 }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{ right: `${i * 30}px`, top: `${i * 40}px` }}
              >
                ᛟ
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-red-300/80 text-sm font-mjolnir tracking-widest mb-2">
              EXPLORE
            </span>
            <svg
              className="w-6 h-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-32 px-6"
      >
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold font-mjolnir text-red-300 tracking-wide">
              O portal para a cultura nórdica
            </h2>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="norse-card p-8 relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 
                           group-hover:opacity-20 transition-opacity duration-700"
              >
                <div className="w-full h-full bg-[url('/src/assets/mythology/rune-pattern.svg')] bg-contain"></div>
              </div>

              <h3 className="text-2xl font-mjolnir mb-4 text-red-300">
                Sagas Mitológicas
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mergulhe em contos da sabedoria de Odin, a força de Thor e a
                astúcia de Loki. Explore uma rica tapeçaria de deuses, gigantes
                e criaturas míticas que moldaram a visão de mundo nórdica.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="norse-card p-8 relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 
                           group-hover:opacity-20 transition-opacity duration-700"
              >
                <div className="w-full h-full bg-[url('/src/assets/mythology/rune-pattern.svg')] bg-contain"></div>
              </div>

              <h3 className="text-2xl font-mjolnir mb-4 text-red-300">
                Realidade Viking
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Descubra a história autêntica da cultura viking, suas
                explorações, artesanato e sociedade. Separe fato de ficção nos
                relatos históricos nórdicos.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="norse-card p-8 relative overflow-hidden text-center"
          >
            <h3 className="text-2xl font-mjolnir mb-4 text-red-300">
              Conteúdo Autêntico
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Nosso conteúdo é extraído de fontes nórdicas autênticas, com
              textos ocasionalmente em dinamarquês ou norueguês para preservar a
              integridade cultural.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Use recursos de tradução do seu navegador para vivenciar o
              conteúdo em seu idioma preferido.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Features />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-32 px-6 bg-gradient-to-b from-gray-900 via-gray-800/90 to-gray-900"
      >
        <div className="absolute inset-0 bg-[url('/src/assets/bg-games.png')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div>
                <h2 className="text-6xl font-mjolnir font-bold text-red-300 tracking-wide mbl:text-4xl inline-block">
                  Jogos Vikings
                </h2>
                <div className="h-px bg-gradient-to-r from-red-500 to-transparent opacity-50 mt-4"></div>
              </div>

              <p className="text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                Explore jogos eletrônicos modernos inspirados na mitologia
                nórdica. Mergulhe em aventuras épicas, batalhas e descobertas
                com personagens lendários
              </p>

              <ul className="text-left space-y-4 ml-6">
                {[
                  "God of War: Ragnarök",
                  "Assassin's Creed Valhalla",
                  "Hellblade: Senua's Sacrifice",
                ].map((game, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <span className="text-gray-300">{game}</span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/games" className="inline-block">
                <Button title="EXPLORAR TODOS OS JOGOS" type="PRIMARY" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 via-red-900/10 to-transparent rounded-lg blur-xl -z-10"></div>
              <div className="norse-card p-2 overflow-hidden">
                <img
                  className="w-full rounded-md object-cover"
                  src={GamesIllustration}
                  alt="Norse Mythology in Modern Gaming"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center p-4 bg-gray-900/70 backdrop-blur-sm rounded-md border border-red-500/20">
                  <p className="text-red-300 font-mjolnir">
                    Entre na imersão dos jogos vikings
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-32 px-6 bg-effect bg-cover bg-fixed"
      >
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-5"></div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-6xl font-bold font-mjolnir text-red-300">
              Participe da jornada nórdica
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tem perguntas sobre mitologia nórdica? Procurando por conteúdo
              específico? Os corvos de Odin entregarão sua mensagem para nós.
            </p>
            <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 space-y-8 text-center md:text-left"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-mjolnir text-red-200">
                  Se conecte conosco
                </h3>
                <p className="text-gray-300">
                  Compartilhe seus pensamentos, sugira tópicos ou faça perguntas
                  sobre mitologia nórdica e cultura viking.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">contact@nordician.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Entre na nossa comunidade no Discord
                  </span>
                </div>
              </div>

              <div className="py-6">
                <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
              </div>

              <p className="text-gray-400 italic">
                "Kemst þó hægt fari."
                <span className="block text-right">— Provérbio nórdico</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-3"
            >
              <motion.div
                whileHover={{ boxShadow: "0 0 50px rgba(220,38,38,0.15)" }}
                className="norse-card p-8"
              >
                <form
                  action="https://formsubmit.co/giovanniclopes@gmail.com"
                  method="post"
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="block text-red-300 font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full bg-gray-800/50 border border-red-500/20 p-3 rounded-lg text-gray-100 placeholder-gray-400
                               focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                      type="text"
                      name="name"
                      placeholder="Your name"
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
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-red-300 font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full bg-gray-800/50 border border-red-500/20 p-3 rounded-lg text-gray-100 placeholder-gray-400
                               focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 min-h-[120px]"
                      name="message"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="norse-button w-full py-4 text-lg font-mjolnir tracking-wide group"
                  >
                    <span className="group-hover:mr-2 transition-all duration-300">
                      Enviar Mensagem
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </button>
                  <input type="hidden" name="_template" value="table" />
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-6 bg-gray-900"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-mjolnir text-red-300"
          >
            Receba novidades exclusivas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Inscreva-se em nossa newsletter para receber os últimos artigos,
            atualizações sobre mitologia nórdica e conteúdo exclusivo entregue
            diretamente na sua caixa de entrada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="flex mbl:flex-col gap-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 bg-gray-800/50 border border-red-500/20 p-3 rounded-lg text-gray-100 placeholder-gray-400
                         focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
              />
              <button className="norse-button px-6 whitespace-nowrap font-mjolnir">
                Inscrever-se
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Respeitamos sua privacidade. Cancele a inscrição a qualquer
              momento.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative py-16 px-6 bg-gray-900/80">
        <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-5"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-gray-400">
            <div className="space-y-4">
              <h3 className="text-red-300 font-mjolnir text-xl">Sobre</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Missão
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Equipe
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contribute"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Contribuir
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-red-300 font-mjolnir text-xl">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/mythology"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Mitologia
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reality"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Realidade
                  </Link>
                </li>
                <li>
                  <Link
                    to="/games"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Jogos
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-red-300 font-mjolnir text-xl">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/glossary"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Glossário Nórdico
                  </Link>
                </li>
                <li>
                  <Link
                    to="/timeline"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Linha do Tempo Nórdica
                  </Link>
                </li>
                <li>
                  <Link
                    to="/references"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Referências
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-red-300 font-mjolnir text-xl">Conectar</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-300 transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent my-12"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/logo.png"
                alt="Nordician Logo"
                className="h-10"
              />
              <span className="font-mjolnir text-red-300 text-xl">
                NORDICIAN
              </span>
            </div>

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nordician. Todos os direitos
              reservados. | Feito com{" "}
              <span role="img" aria-label="coração">
                ❤️
              </span>{" "}
              pela Mitologia Nórdica por{" "}
              <a
                href="https://giovannilopes.vercel.app"
                target="_blank"
                className="hover:text-red-300 transition-colors duration-300"
              >
                Giovanni Lopes
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
