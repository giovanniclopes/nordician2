import Navbar from "./Navbar";
import { ArticleRecommend } from "./ArticleRecommend";

import AsgardImg from '../assets/mythology/realms/bg-asgard.webp';
import HelheimImg from '../assets/mythology/realms/bg-helheim.webp';
import MusphelheimImg from '../assets/mythology/realms/bg-musphelheim.webp';

interface BlogPageProps {
  imageUrl: string;
  title: string;
  baseText: string;
}

export function ArticlePage(props: BlogPageProps) {
  return (
    <div className="h-fit">
      <Navbar />
      <div>
        <div>
          <img className="w-1/2 rounded-md" src={props.imageUrl} alt="Article Image" />
        </div>
        <div>
          <h1>{props.title}</h1>
        </div>
        <div className="h-1/2">
          <p>{props.baseText}</p>
        </div>
      </div>
      <div className="border-t border-red-500">
        <div className="text-center">
          <h2 className="text-2xl font-poppins">Recomendados</h2>
        </div>
        <div className="grid grid-cols-3 items-center justify-center">
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
  );
}

export default ArticlePage;
