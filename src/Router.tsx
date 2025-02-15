import { Routes, Route, useParams } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { Home } from "./pages/Home";
import { Mythology } from "./pages/Mythology";
import { DynamicArticle } from "./components/DynamicArticle";
import { Gods } from "./pages/mythology/Gods";
import { Beings } from "./pages/mythology/Beings";
import { Realms } from "./pages/mythology/Realms";
import { useLoading } from "./components/LoadingProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          navigate(link.href.replace(window.location.origin, ""));
        }, 200);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate, setLoading]);

  return children;
}

export function Router() {
  return (
    <NavigationWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mythology" element={<Mythology />} />
        <Route path="/mythology/gods" element={<Gods />} />
        <Route path="/mythology/beings" element={<Beings />} />
        <Route path="/mythology/realms" element={<Realms />} />
        <Route
          path="/mythology/gods/:slug"
          element={<CategoryArticleWrapper category="gods" />}
        />
        <Route
          path="mythology//beings/:slug"
          element={<CategoryArticleWrapper category="beings" />}
        />
        <Route
          path="/mythology/realms/:slug"
          element={<CategoryArticleWrapper category="realms" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </NavigationWrapper>
  );
}

interface CategoryArticleWrapperProps {
  category: "gods" | "beings" | "realms";
}

function CategoryArticleWrapper({ category }: CategoryArticleWrapperProps) {
  const { slug } = useParams();
  return slug ? (
    <DynamicArticle slug={slug} category={category} />
  ) : (
    <PageNotFound />
  );
}
