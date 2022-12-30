import { CategoryOptions } from "../../components/CategoryOptions";
import Navbar from "../../components/Navbar";
import { ScrollToTop } from "../../components/ScrollToTop";

import AngrbodaImg from "../../assets/mythology/beings/bg-angrboda.webp";
import HelImg from "../../assets/mythology/beings/bg-hel.webp";
import JormungandrImg from "../../assets/mythology/beings/bg-jormungandr.webp";
import SurtrImg from "../../assets/mythology/beings/bg-surtr.webp";


// -->Surtr, -->Jormungandr, -->Hel, -->Angrboda, 
// Ratatorsk, Garmr, Hræsvelgr, Sköll e Hati, Fenrir, Ymir,

export function Beings() {
  return (
    <div className="h-fit">
      <ScrollToTop />
      <Navbar />
      <div className="pt-28 mb-5 mbl:pt-24">
        <h1 className="ml-10 mb-2">Criaturas</h1>
        <div className="grid grid-cols-3 font-poppins mbl:grid-cols-1">
          <CategoryOptions
            backgroundUrl={AngrbodaImg}
            title="Angrboda"
            description="Uma gigante e amante de Loki."
            link="/beings/angrboda"
          />
          <CategoryOptions
            backgroundUrl={HelImg}
            title="Hel"
            description="A rainha de Helheim."
            link="/beings/hel"
          />
          <CategoryOptions
            backgroundUrl={JormungandrImg}
            title="Jormungandr"
            description="A serpente de Midgard."
            link="/beings/jormungandr"
          />
          <CategoryOptions
            backgroundUrl={SurtrImg}
            title="Surtr"
            description="O gigante primordial de fogo."
            link="/beings/surtr"
          />
        </div>
      </div>
    </div>
  );
}

export default Beings();