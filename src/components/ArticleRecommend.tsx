import { Link } from "react-router-dom";

interface ArticleRecommendProps {
  backgroundUrl: string;
  title: string;
  description: string;
  link: string;
}

export function ArticleRecommend(props: ArticleRecommendProps) {
  return (
    <Link to={props.link} className="block w-full">
      <div className="w-full h-60 transition-all hover:opacity-80 relative">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl"
          style={{
            backgroundImage: `url(${props.backgroundUrl})`,
          }}
        >
          <div
            className="w-full h-full rounded-xl absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, .6) 50%, 
          rgba(0, 0, 0, 1) 100%)`,
            }}
          >
            <div className="flex flex-col items-center justify-center p-5 pt-16 text-center h-full">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-100 line-clamp-2">
                  {props.title}
                </h2>
              </div>
              <div>
                <p className="my-2 -tracking-normal font-normal text-white text-sm md:text-base text-opacity-60">
                  {props.description}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <button className="flex justify-center items-center w-full p-2 py-2 bg-gray-300 font-normal text-base md:text-lg rounded-b-xl transition-all bg-opacity-30 hover:bg-opacity-20">
                Conhecer
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
