import { useEffect, useState } from "react";
import { client } from "../lib/graphql/client";
import { GET_POST_BY_SLUG } from "../lib/graphql/queries";
import { Post } from "../lib/graphql/types";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

interface DynamicArticleProps {
  slug: string;
  category: "gods" | "beings" | "realms";
}

export const DynamicArticle = ({ slug, category }: DynamicArticleProps) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.request<{ post: Post }>(GET_POST_BY_SLUG, {
          slug,
        });
        if (!data.post) {
          setError("Artigo não encontrado");
          return;
        }
        if (!data.post.tags?.includes(category)) {
          setError("Artigo não encontrado nessa categoria");
          return;
        }
        setPost(data.post);
      } catch (error) {
        console.error("Erro ao buscar artigo:", error);
        setError(
          "Erro ao carregar artigo. Por favor tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, category]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-300">Carregando artigo...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="bg-red-900/20 border border-red-500/50 text-red-200 p-6 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-2">Erro</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      <article className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {post.coverPhoto && (
            <div className="relative h-[60vh] mb-12 rounded-2xl overflow-hidden">
              <img
                src={post.coverPhoto.url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl font-bold mb-4 font-mjolnir tracking-wide"
                >
                  {post.title}
                </motion.h1>
                {post.author && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex items-center"
                  >
                    {post.author.avatar && (
                      <img
                        src={post.author.avatar.url}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full border-2 border-purple-500 mr-4"
                      />
                    )}
                    <div>
                      <p className="font-medium text-lg text-gray-200">{post.author.name}</p>
                      <p className="text-purple-400">
                        {new Date(post.datePublished).toLocaleDateString('pt-BR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}
          
          {post.content && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          )}
        </motion.div>
      </article>
    </div>
  );
};
