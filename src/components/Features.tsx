import { motion } from "framer-motion";
import { BooksIcon, GameIcon, GlobeIcon } from "./Icons";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="norse-card p-6 relative overflow-hidden group"
    >
      <div className="relative z-10 space-y-4">
        <div className="text-red-400 w-12 h-12">{icon}</div>
        <h3 className="text-2xl font-mjolnir text-red-200">{title}</h3>
        <p className="text-gray-300/80">{description}</p>
      </div>
      <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
    </motion.div>
  );
}

export function Features() {
  const features = [
    {
      icon: <BooksIcon size={32} weight="duotone" />,
      title: "Sagas Nórdicas",
      description:
        "Explore histórias antigas e lendas dos povos nórdicos, transmitidas através dos séculos.",
    },
    {
      icon: <GlobeIcon size={32} weight="duotone" />,
      title: "Cultura Real",
      description:
        "Descubra a verdadeira história e cultura dos povos nórdicos, além das lendas.",
    },
    {
      icon: <GameIcon size={32} weight="duotone" />,
      title: "Jogos Vikings",
      description:
        "Experimente a emoção dos mundos nórdicos através de jogos cuidadosamente selecionados.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold font-mjolnir text-red-300">
            Descubra o Mundo Nórdico
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
