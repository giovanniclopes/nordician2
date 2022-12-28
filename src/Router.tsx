import { Routes, Route } from "react-router-dom";
import { Games } from "./pages/Games";
import { Home } from "./pages/Home";
import { Mythology } from "./pages/Mythology";
import { Reality } from "./pages/Reality";

import { Beings } from "./pages/mythology/Beings";
import { Gods } from "./pages/mythology/Gods";
import { Realms } from "./pages/mythology/Realms";
import { Alfheim } from "./pages/mythology/realms/Alfheim";
import { Asgard } from "./pages/mythology/realms/Asgard";
import { Helheim } from "./pages/mythology/realms/Helheim";
import { Jotunheim } from "./pages/mythology/realms/Jotunheim";
import { Midgard } from "./pages/mythology/realms/Midgard";
import { Musphelheim } from "./pages/mythology/realms/Musphelheim";
import { Niflheim } from "./pages/mythology/realms/Niflheim";
import { Svartalfheim } from "./pages/mythology/realms/Svartalfheim";
import { Vanaheim } from "./pages/mythology/realms/Vanaheim";

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

      {/* Realms */}

      <Route path="/realms/alfheim" element={<Alfheim />} />
      <Route path="/realms/asgard" element={<Asgard />} />
      <Route path="/realms/helheim" element={<Helheim />} />
      <Route path="/realms/jotunheim" element={<Jotunheim />} />
      <Route path="/realms/midgard" element={<Midgard />} />
      <Route path="/realms/musphelheim" element={<Musphelheim />} />
      <Route path="/realms/niflheim" element={<Niflheim />} />
      <Route path="/realms/svartalfheim" element={<Svartalfheim />} />
      <Route path="/realms/vanaheim" element={<Vanaheim />} />
    </Routes>
  );
}
