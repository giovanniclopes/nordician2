import { Routes, Route } from "react-router-dom";
import { Games } from "./pages/Games";
import { Home } from "./pages/Home";
import { Mythology } from "./pages/Mythology";
import { Reality } from "./pages/Reality";

import { Beings } from "./pages/mythology/Beings";
import { Gods } from "./pages/mythology/Gods";
import { Realms } from "./pages/mythology/Realms";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mythology" element={<Mythology />} />
      <Route path="/reality" element={<Reality />} />
      <Route path="/games" element={<Games />} />

      {/* info pages */}

      <Route path="/realms" element={<Realms />} />
      <Route path="/beings" element={<Beings />} />
      <Route path="/gods" element={<Gods />} />
    </Routes>
  );
}
