import { Routes, Route } from "react-router-dom";
import { Games } from "./pages/Games";
import { Home } from "./pages/Home";
import { Mythology } from "./pages/Mythology";
import { Reality } from "./pages/Reality";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mythology" element={<Mythology />} />
      <Route path="/reality" element={<Reality />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  );
}
