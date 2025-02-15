import { useEffect, useState } from "react";
import { client } from "../lib/graphql/client";
import { GET_POST_BY_SLUG } from "../lib/graphql/queries";
import { Post } from "../lib/graphql/types";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loading } from "./Loading";

interface DynamicArticleProps {
  slug: string;
  category: "gods" | "beings" | "realms";
}

const CategoryIcons = {
  gods: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L3 9V21H21V9L12 3Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  beings: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14" stroke="currentColor" strokeWidth="2" />
      <path d="M9 10H9.01M15 10H15.01" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  realms: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21M12 3V21M12 3L21 12M12 3L3 12" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

export const DynamicArticle = ({ slug, category }: DynamicArticleProps) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.request<{ post: Post }>(GET_POST_BY_SLUG, { slug });
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
        setError("Erro ao carregar artigo. Por favor tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, category]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white norse-container">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <Loading size="large" text="Carregando saga..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white norse-container">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="norse-card max-w-2xl mx-auto p-6">
            <h2 className="text-xl font-bold mb-2 norse-title text-red-400">Erro</h2>
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white norse-container">
      <Navbar />
      
      <article className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden mb-12 rune-border">
            {post.coverPhoto && (
              <div className="relative h-[60vh]">
                <img
                  src={post.coverPhoto.url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute inset-0 bg-[url('/src/assets/mythology/rune-pattern.svg')] opacity-5" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="norse-button px-4 py-1 text-sm rounded-full flex items-center gap-2">
                      {CategoryIcons[category]}
                      <span className="capitalize">{category}</span>
                    </span>
                  </div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="norse-title text-5xl mb-4 relative inline-block"
                  >
                    {post.title}
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
                  </motion.h1>
                  
                  {post.author && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="flex items-center"
                    >
                      {post.author.avatar && (
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full border border-red-500/50 rune-glow" />
                          <img
                            src={post.author.avatar.url}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full relative z-10"
                          />
                        </div>
                      )}
                      <div className="ml-4">
                        <p className="font-medium text-lg text-gray-200">{post.author.name}</p>
                        <p className="text-red-400">
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
          </div>
          
          {post.content && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="prose prose-lg prose-invert max-w-none norse-content"
            >
              <div 
                dangerouslySetInnerHTML={{ __html: post.content.html }}
                className="relative"
              />
              <div className="mt-16 pt-8 border-t border-red-500/20">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="text-red-400">{CategoryIcons[category]}</span>
                  <span>Categoria: </span>
                  <span className="text-red-400 capitalize">{category}</span>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </article>
    </div>
  );
};
