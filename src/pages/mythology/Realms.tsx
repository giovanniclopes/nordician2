import { CategoryOptions } from "../../components/CategoryOptions";
import Navbar from "../../components/Navbar";
import { ScrollToTop } from "../../components/ScrollToTop";
import mitGods from "../../assets/mythology/mit-gods.webp";

export function Realms() {
  return (
    <div className="h-fit">
      <ScrollToTop />
      <Navbar />
      <div className="pt-28 mb-10 mbl:pt-24">
        <h1 className="ml-10">Reinos</h1>
        <div className="grid grid-cols-3 font-poppins mbl:grid-cols-1">
          <CategoryOptions
            backgroundUrl={mitGods}
            title="Reinos"
            description="Todos os noves reinos da mitologia."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={mitGods}
            title="Reinos"
            description="Todos os noves reinos da mitologia."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={mitGods}
            title="Reinos"
            description="Todos os noves reinos da mitologia."
            link="/realms"
          />
        </div>
        <div className="grid grid-cols-3 font-poppins mbl:grid-cols-1">
          <CategoryOptions
            backgroundUrl={mitGods}
            title="Reinos"
            description="Todos os noves reinos da mitologia."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={mitGods}
            title="Reinos"
            description="Todos os noves reinos da mitologia."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={mitGods}
            title="Reinos"
            description="Todos os noves reinos da mitologia."
            link="/realms"
          />
        </div>
      </div>
    </div>
  );
}
