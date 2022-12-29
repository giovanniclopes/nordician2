import { Link } from "react-router-dom";

interface ArticleRecommendProps {
  backgroundUrl: string;
  title: string;
  description: string;
  link: string;
}

export function ArticleRecommend(props: ArticleRecommendProps) {
  return (
    <Link to={props.link}>
      <div className="w-96 h-60 transition-all hover:opacity-80">
        <div
          className="w-full h-full bg-cover bg-no-repeat rounded-xl"
          style={{
            backgroundImage: `url(${props.backgroundUrl})`,
          }}
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, .6) 50%, 
          rgba(0, 0, 0, 1) 100%)`,
            }}
          >
            <div className="flex flex-col items-center justify-center p-5 pt-16 text-center">
              <div>
                <h2 className="mt-2 text-4xl font-medium text-gray-100">
                  {props.title}
                </h2>
              </div>
              <div>
                <p className="my-2 -tracking-normal font-normal text-white text-lg text-opacity-60">
                  {props.description}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <Link to={props.link}>
                <button className="flex justify-center items-center w-full p-2 py-2 bg-gray-300 font-normal text-lg rounded-b-xl transition-all bg-opacity-30 hover:bg-opacity-20">
                  Conhecer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
