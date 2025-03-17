import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../lib/graphql/client";
import { GET_ALL_POSTS } from "../../lib/graphql/queries";
import { Post } from "../../lib/graphql/types";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export function Beings() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = (await client.request(GET_ALL_POSTS)) as { posts: Post[] };
        setPosts(
          data.posts?.filter((post) => post.tags?.includes("beings")) || []
        );
      } catch (error) {
        console.error("Erro ao atualizar artigos:", error);
        setError(
          "Erro ao atualizar artigos. Por favor tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />

      <div className="pt-28 pb-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl font-bold mb-4 font-mjolnir tracking-wide"
            >
              Criaturas Nórdicas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Conheça as criaturas místicas e os seres lendários da mitologia
              nórdica
            </motion.p>
          </div>

          {loading && (
            <div className="flex items-center justify-center h-[40vh]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500 mx-auto"></div>
                <p className="mt-4 text-xl text-gray-300">
                  Carregando criaturas...
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-red-900/20 border border-red-500/50 text-red-200 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-2">Erro</h2>
                <p>{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-300">
                Nenhuma criatura disponível ainda.
              </p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <Link
                  to={`/mythology/beings/${post.slug}`}
                  className="block group"
                >
                  <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
                    {post.coverPhoto && (
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={post.coverPhoto.url}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 font-mjolnir tracking-wide">
                        {post.title}
                      </h2>
                      {post.author && (
                        <div className="flex items-center text-sm text-gray-300">
                          {post.author.avatar && (
                            <img
                              src={post.author.avatar.url}
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full border-2 border-red-500 mr-3"
                            />
                          )}
                          <div>
                            <span className="block font-medium">
                              {post.author.name}
                            </span>
                            <span className="text-red-400">
                              {new Date(post.datePublished).toLocaleDateString(
                                "pt-BR",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Beings;
