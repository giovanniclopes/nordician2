import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../lib/graphql/client";
import { GET_ALL_POSTS } from "../../lib/graphql/queries";
import { Post } from "../../lib/graphql/types";
import Navbar from "../../components/Navbar";

export function Realms() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.request<{ posts: Post[] }>(GET_ALL_POSTS);
        setPosts(
          data.posts?.filter((post) => post.tags?.includes("realms")) || []
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
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8">Norse Realms</h1>

      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Carregando reinos...</p>
        </div>
      )}

      {error && (
        <div className="text-red-600 bg-red-100 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-8">
          <p>Nenhum reino disponível ainda.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/realms/${post.slug}`}
            className="block hover:opacity-90 transition-opacity"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {post.coverPhoto && (
                <img
                  src={post.coverPhoto.url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                {post.author && (
                  <div className="flex items-center text-sm text-gray-600">
                    {post.author.avatar && (
                      <img
                        src={post.author.avatar.url}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                    )}
                    <span>{post.author.name}</span>
                    <span className="mx-2">•</span>
                    <span>
                      {new Date(post.datePublished).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
