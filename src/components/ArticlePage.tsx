import Navbar from "./Navbar";
import { ArticleRecommend } from "./ArticleRecommend";

import MusphelheimImg from "../assets/mythology/realms/bg-musphelheim.webp";
import JormungandrImg from "../assets/mythology/beings/bg-jormungandr.webp";
import TyrImg from "../assets/mythology/gods/bg-tyr.webp";

import ScrollToTop from "./ScrollToTop";

interface BlogPageProps {
  imageUrl: string;
  title: string;
  baseText: string;
}

export function ArticlePage(props: BlogPageProps) {
  return (
    <div className="h-full bg-main bg-cover bg-right">
      <div className="pt-36 pb-12 bg-gray-0.5">
        <Navbar />
        <ScrollToTop />
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-center">
            <img
              className="w-1/2 rounded-lg mbl:w-auto mbl:px-5"
              src={props.imageUrl}
              alt="Article Image"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-mjolnir font-bold text-maroon-100 mbl:text-4xl">
              {props.title}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center h-max text-center mbl:text-left">
            <hr className="w-96 mbl:w-80" />
            <p className="py-12 pl-2 w-10/12 leading-loose mbl:w-11/12">{props.baseText}</p>
            <hr className="w-96 mbl:w-80" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mt-16">
            <h2 className="text-3xl font-poppins text-maroon-100">
              Recomendados
            </h2>
          </div>
          <div className="grid grid-cols-3 items-center justify-center gap-8 mt-12 mbl:grid-cols-1">
            <ArticleRecommend
              backgroundUrl={MusphelheimImg}
              title="Musphelheim"
              description="Reino primordial do fogo."
              link="/realms/musphelheim"
            />
            <ArticleRecommend
              backgroundUrl={JormungandrImg}
              title="Jormungandr"
              description="A serpente de midgard."
              link="/beings/jormungandr"
            />
            <ArticleRecommend
              backgroundUrl={TyrImg}
              title="Tyr"
              description="O deus da guerra."
              link="/gods/tyr"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
