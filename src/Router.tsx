import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

import { Games } from "./pages/Games";
import { Home } from "./pages/Home";
import { Mythology } from "./pages/Mythology";
import { Reality } from "./pages/Reality";

import { Beings } from "./pages/mythology/Beings";
import { Gods } from "./pages/mythology/Gods";
import { Realms } from "./pages/mythology/Realms";

import Alfheim from "./pages/mythology/realms/Alfheim";
import Asgard from "./pages/mythology/realms/Asgard";
import Helheim from "./pages/mythology/realms/Helheim";
import Jotunheim from "./pages/mythology/realms/Jotunheim";
import Midgard from "./pages/mythology/realms/Midgard";
import Musphelheim from "./pages/mythology/realms/Musphelheim";
import Niflheim from "./pages/mythology/realms/Niflheim";
import Svartalfheim from "./pages/mythology/realms/Svartalfheim";
import Vanaheim from "./pages/mythology/realms/Vanaheim";

import Angrboda from "./pages/mythology/beings/Angrboda";
import Hel from "./pages/mythology/beings/Hel";
import Jormungandr from "./pages/mythology/beings/Jormungandr";
import Surtr from "./pages/mythology/beings/Surtr";

import Tyr from "./pages/mythology/gods/Tyr";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mythology" element={<Mythology />} />
      {/* <Route path="/reality" element={<Reality />} /> */}
      {/* <Route path="/games" element={<Games />} /> */}

      {/* info pages */}
      <Route path="/realms" element={<Realms />} />
      <Route path="/beings" element={<Beings />} />
      <Route path="/gods" element={<Gods />} />

      {/* Error */}
      <Route path="*" element={<PageNotFound />} />

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

      {/* Beings */}
      <Route path="/beings/angrboda" element={<Angrboda />} />
      <Route path="/beings/hel" element={<Hel />} />
      <Route path="/beings/jormungandr" element={<Jormungandr />} />
      <Route path="/beings/surtr" element={<Surtr />} />

      {/* Gods */}
      <Route path="/gods/tyr" element={<Tyr />} />
    </Routes>
  );
}
