import { Categories } from "../components/Categories";
import img1 from "../assets/bg-games.png";
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
            label="Label"
            title="Reinos"
            description="This is a short description about this card."
            link="/realms"
          />
          <Categories
            imageUrl={mitBeings}
            label="Label"
            title="Seres"
            description="This is a short description about this card."
            link="/beings"
          />
          <Categories
            imageUrl={mitGods}
            label="Label"
            title="Deuses"
            description="This is a short description about this card."
            link="/gods"
          />
        </div>
      </div>
    </div>
  );
}

export default Mythology;
