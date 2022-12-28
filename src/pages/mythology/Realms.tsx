import { CategoryOptions } from "../../components/CategoryOptions";
import Navbar from "../../components/Navbar";
import { ScrollToTop } from "../../components/ScrollToTop";

import AlfheimImg from "../../assets/mythology/realms/bg-alfheim.webp";
import AsgardImg from "../../assets/mythology/realms/bg-asgard.webp";
import HelheimImg from "../../assets/mythology/realms/bg-helheim.webp";
import JotunheimImg from "../../assets/mythology/realms/bg-jotunheim.webp";
import MidgardImg from "../../assets/mythology/realms/bg-midgard.webp";
import MusphelheimImg from "../../assets/mythology/realms/bg-musphelheim.webp";
import NiflheimImg from "../../assets/mythology/realms/bg-niflheim.webp";
import SvartalfheimImg from "../../assets/mythology/realms/bg-svartalfheim.webp";
import VanaheimImg from "../../assets/mythology/realms/bg-vanaheim.webp";

export function Realms() {
  return (
    <div className="h-fit">
      <ScrollToTop />
      <Navbar />
      <div className="pt-28 mb-5 mbl:pt-24">
        <h1 className="ml-10 mb-2">Reinos</h1>
        <div className="grid grid-cols-3 font-poppins mbl:grid-cols-1">
          <CategoryOptions
            backgroundUrl={AlfheimImg}
            title="Alfheim"
            description="Reino dos elfos."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={AsgardImg}
            title="Asgard"
            description="Reino dos deuses Æsir."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={HelheimImg}
            title="Helheim"
            description="Reino do pós-vida."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={JotunheimImg}
            title="Jotunheim"
            description="Reino dos gigantes."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={MidgardImg}
            title="Midgard"
            description="Reino dos seres humanos e trolls."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={MusphelheimImg}
            title="Musphelheim"
            description="Reino primordial do fogo."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={NiflheimImg}
            title="Niflheim"
            description="Reino primordial do gelo."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={SvartalfheimImg}
            title="Svartalfheim"
            description="Reino dos anões e elfos escuros."
            link="/realms"
          />
          <CategoryOptions
            backgroundUrl={VanaheimImg}
            title="Vanaheim"
            description="Reino dos deuses Vanir."
            link="/realms"
          />
        </div>
      </div>
    </div>
  );
}
