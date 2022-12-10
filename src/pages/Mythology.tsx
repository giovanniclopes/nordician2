import { Categories } from "../components/Categories";
import img1 from "../assets/bg-games.png";
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
          <Categories title="item1" imageUrl={img1} link="/" />
          <Categories title="item2" imageUrl={img1} link="/" />
          <Categories title="item3" imageUrl={img1} link="/" />
        </div>
      </div>
    </div>
  );
}

export default Mythology;
