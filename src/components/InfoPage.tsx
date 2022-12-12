import Navbar from "./Navbar";
import { ScrollToTop } from "./ScrollToTop";

interface infoPageProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function Categories(props: infoPageProps) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div>
        
      </div>
    </>
  );
}
