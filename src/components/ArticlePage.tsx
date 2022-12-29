import Navbar from "./Navbar";
import { ArticleRecommend } from "./ArticleRecommend";

import AsgardImg from "../assets/mythology/realms/bg-asgard.webp";
import HelheimImg from "../assets/mythology/realms/bg-helheim.webp";
import MusphelheimImg from "../assets/mythology/realms/bg-musphelheim.webp";

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
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-center">
            <img
              className="w-1/2 rounded-md"
              src={props.imageUrl}
              alt="Article Image"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-mjolnir font-bold text-maroon-100">
              {props.title}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <hr className="w-96" />
            <p className="py-12 w-10/12">{props.baseText}</p>
            <hr className="w-96" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mt-16">
            <h2 className="text-3xl font-poppins text-maroon-100">Recomendados</h2>
          </div>
          <div className="grid grid-cols-3 items-center justify-center gap-8 mt-12">
            <ArticleRecommend
              backgroundUrl={MusphelheimImg}
              title="Musphelheim"
              description="Reino primordial do fogo."
              link="/realms/musphelheim"
            />
            <ArticleRecommend
              backgroundUrl={HelheimImg}
              title="Helheim"
              description="Reino do pós-vida."
              link="/realms/helheim"
            />
            <ArticleRecommend
              backgroundUrl={AsgardImg}
              title="Asgard"
              description="Reino dos deuses Æsir."
              link="/realms/asgard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
