import { Routes, Route, useParams } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { Home } from "./pages/Home";
import { Mythology } from "./pages/Mythology";
import { DynamicArticle } from "./components/DynamicArticle";
import { Gods } from "./pages/mythology/Gods";
import { Beings } from "./pages/mythology/Beings";
import { Realms } from "./pages/mythology/Realms";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mythology" element={<Mythology />} />

      <Route path="/gods" element={<Gods />} />
      <Route path="/beings" element={<Beings />} />
      <Route path="/realms" element={<Realms />} />

      <Route
        path="/gods/:slug"
        element={<CategoryArticleWrapper category="gods" />}
      />
      <Route
        path="/beings/:slug"
        element={<CategoryArticleWrapper category="beings" />}
      />
      <Route
        path="/realms/:slug"
        element={<CategoryArticleWrapper category="realms" />}
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
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
