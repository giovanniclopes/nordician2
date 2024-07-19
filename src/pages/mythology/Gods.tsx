import { CategoryOptions } from "../../components/CategoryOptions";
import Navbar from "../../components/Navbar";
import { ScrollToTop } from "../../components/ScrollToTop";

import OdinImg from "../../assets/mythology/gods/bg-odin.webp";
import FreyaImg from "../../assets/mythology/gods/bg-freya.webp";
import ThorImg from "../../assets/mythology/gods/bg-thor.webp";
// import LokiImg from "../../assets/mythology/gods/bg-loki.webp";

export function Gods() {
  return (
    <div className="h-fit">
      <ScrollToTop />
      <Navbar />
      <div className="pt-28 mb-5 mbl:pt-24">
        <h1 className="ml-10 mb-2">Deuses</h1>
        <div className="grid grid-cols-3 font-poppins mbl:grid-cols-1">
          <CategoryOptions
            backgroundUrl={OdinImg}
            title="Odin"
            description="O pais de todos."
            link="/gods/odin"
          />
          <CategoryOptions
            backgroundUrl={FreyaImg}
            title="Freya"
            description="A deusa da natureza."
            link="/gods/freya"
          />
          <CategoryOptions
            backgroundUrl={ThorImg}
            title="Thor"
            description="O deus do trovão."
            link="/gods/thor"
          />
          {/* <CategoryOptions
            backgroundUrl={LokiImg}
            title="Loki"
            description="O deus da enganação."
            link="/gods/loki"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Gods();
