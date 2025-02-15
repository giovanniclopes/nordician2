import { useEffect, useState } from "react";
import { client } from "../lib/graphql/client";
import { GET_POST_BY_SLUG } from "../lib/graphql/queries";
import { Post } from "../lib/graphql/types";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";

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
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        <div className="text-red-600 bg-red-100 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <article className="max-w-4xl mx-auto">
        {post.coverPhoto && (
          <img
            src={post.coverPhoto.url}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.author && (
          <div className="flex items-center mb-8">
            {post.author.avatar && (
              <img
                src={post.author.avatar.url}
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-4"
              />
            )}
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-gray-500">
                {new Date(post.datePublished).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
        {post.content && (
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        )}
      </article>
    </div>
  );
};
