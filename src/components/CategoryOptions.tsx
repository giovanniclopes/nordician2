import { Link } from "react-router-dom";

interface CategoryOptionsProps {
  backgroundUrl: string;
  title: string;
  description: string;
  link: string;
}

export function CategoryOptions(props: CategoryOptionsProps) {
  return (
    <Link to={props.link}>
      <div className="w-full h-[530px] transition-all hover:opacity-80">
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.backgroundUrl})`,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, .6) 50%, 
          rgba(0, 0, 0, 1) 100%)`,
            }}
          >
            <div className="flex flex-col items-center justify-center p-5 pt-40 text-center">
              <div>
                <h2 className="mt-2 text-5xl font-medium text-gray-100">
                  {props.title}
                </h2>
              </div>
              <div>
                <p className="my-2 -tracking-normal font-normal text-white text-lg text-opacity-60">
                  {props.description}
                </p>
              </div>
            </div>
            <div className="mt-[7.3rem]">
              <Link to={props.link}>
                <button className="flex justify-center items-center w-full p-2 py-6 bg-gray-300 font-normal text-lg transition-all bg-opacity-30 hover:bg-opacity-20">
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

export default CategoryOptions;
