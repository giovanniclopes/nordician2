import { Categories } from "../components/Categories";
import img1 from "../assets/bg-games.png";
import img2 from "../assets/gamesIllustration.gif";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export function Mythology() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="pt-32 mbl:pt-12">
        <h1>Mitologia</h1>
        <div className="flex flex-row">
          <Categories title="item1" cover={img1} />
          <Categories title="item2" cover={img2} />
          <Categories title="item3" />
        </div>
      </div>
    </div>
  );
}

export default Mythology;
