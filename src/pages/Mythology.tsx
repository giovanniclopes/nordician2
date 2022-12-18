import { Categories } from "../components/Categories";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

import mitRealms from "../assets/mythology/mit-realms.webp";
import mitBeings from "../assets/mythology/mit-beings.webp";
import mitGods from "../assets/mythology/mit-gods.webp";

export function Mythology() {
  return (
    <div className="h-screen overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <div className="pt-28 mbl:pt-12">
        <h1 className="ml-10">Mitologia</h1>
        <div className="flex flex-row items-center justify-center gap-7 font-poppins">
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
            description="Deuses  da mitologia."
            link="/gods"
          />
        </div>
      </div>
    </div>
  );
}

export default Mythology;
