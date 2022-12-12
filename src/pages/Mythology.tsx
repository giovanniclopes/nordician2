import { Categories } from "../components/Categories";
import img1 from "../assets/bg-games.png";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export function Mythology() {
  return (
    <div className="h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="pt-32 mbl:pt-12">
        <h1 className="ml-10">Mitologia</h1>
        <div className="flex flex-row items-center justify-center gap-7 font-poppins">
          <Categories
            imageUrl={img1}
            label="Label"
            title="Heading"
            description="This is a short description about this card."
            link="/"
          />
          <Categories
            imageUrl={img1}
            label="Label"
            title="Heading"
            description="This is a short description about this card."
            link="/"
          />
          <Categories
            imageUrl={img1}
            label="Label"
            title="Heading"
            description="This is a short description about this card."
            link="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Mythology;
