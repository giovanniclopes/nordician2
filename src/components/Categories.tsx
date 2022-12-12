import { Link } from "react-router-dom";

interface CategorieProps {
  imageUrl: string;
  label: string;
  title: string;
  description: string;
  link: string;
}

export function Categories(props: CategorieProps) {
  return (
    <Link to={props.link}>
      <div className="flex flex-col p-2 w-96 rounded-2xl bg-gray-500 transition-all hover:brightness-110">
        <div className="mb-4">
          {/* <img className="w-32 h-32 rounded-2xl" src={props.imageUrl} alt="" /> */}
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded-2xl sm:w-96 dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-3">
          <div>
            <span className="flex items-center justify-center w-1/4 p-2 rounded-xl bg-gray-300 text-black text-xs">
              {props.label}
            </span>
          </div>
          <div>
            <h2 className="mt-2 font-medium text-gray-100">{props.title}</h2>
          </div>
          <div>
            <p className="w-fit my-2 -tracking-normal font-thin text-white text-lg text-opacity-60">
              {props.description}
            </p>
          </div>
        </div>
        <div className="mb-2  mt-3">
          <Link to={props.link}>
            <button className="flex justify-center items-center w-full p-2 py-3 bg-red-400 rounded-xl font-normal text-lg transition-all hover:opacity-80">
              Conhecer
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default Categories;
