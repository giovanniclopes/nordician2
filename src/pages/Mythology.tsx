import { Categories } from "../components/Categories";
import img1 from "../assets/bg-games.png";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export function Mythology() {
  return (
    <div className="bg-effect bg-cover bg-no-repeat h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="pt-32 mbl:pt-12">
        <h1 className="ml-10">Mitologia</h1>
        <div className="flex flex-row items-center justify-center">
          <Categories title="item1" imageUrl={img1} link="/" />
          <Categories title="item2" imageUrl={img1} link="/" />
          <Categories title="item3" imageUrl={img1} link="/" />
        </div>
      </div>
    </div>
  );
}

export default Mythology;
