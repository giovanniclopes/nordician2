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
      <div className="flex flex-col p-2 py-4 w-96 rounded-2xl bg-gray-500 transition-all hover:brightness-110">
        <div className="flex items-center justify-center mb-4">
          <img className="w-96 h-56 rounded-2xl" src={props.imageUrl} alt="" />
        </div>
        <div className="px-3">
          <div>
            <span className="flex items-center justify-center w-max p-2 rounded-xl bg-gray-300 text-black text-xs">
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
        <div className="mt-3">
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
