import { Categories } from "../components/Categories";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

import mitRealms from "../assets/mythology/mit-realms.webp";
import mitBeings from "../assets/mythology/mit-beings.webp";
import mitGods from "../assets/mythology/mit-gods.webp";

export function Mythology() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollToTop />
      <Navbar />
      <h1 className="text-4xl font-bold mb-8">Mitologia Nórdica</h1>

      <div className="pt-28 pb-10 mbl:pt-24">
        <div className="flex flex-row items-center justify-center gap-7 font-poppins mbl:flex-col">
          <Categories
            imageUrl={mitRealms}
            label="Asgard, Midgard, etc."
            title="Reinos"
            description="Todos os noves reinos da mitologia."
            link="/realms"
          />
          <Categories
            imageUrl={mitBeings}
            label="Hel, Fenrir, etc."
            title="Criaturas"
            description="Algumas das criaturas da mitologia."
            link="/beings"
          />
          <Categories
            imageUrl={mitGods}
            label="Odin, Thor, etc."
            title="Deuses"
            description="Deuses da mitologia."
            link="/gods"
          />
        </div>
      </div>
    </div>
  );
}

export default Mythology;
