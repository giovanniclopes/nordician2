import { Link } from "react-router-dom";
import VikingImg from "../assets/viking.jpg";
import VikingSmImg from "../assets/viking-sm.jpg";

export function PageNotFound() {
  return (
    <div className="grid grid-cols-2 bg-white text-red-900 text-center h-screen mbl:flex mbl:fixed">
      <div className="flex flex-col items-center justify-center my-auto font-poppins">
        <div className="flex flex-row-reverse justify-center items-center mbl:mr-5">
          <div>
            <h1 className="font-black text-9xl select-none mbl:text-7xl">
              Oops!
            </h1>
          </div>
          <div>
            <img
              className="hidden mbl:block w-24"
              src={VikingSmImg}
              alt=""
              draggable="false"
            />
          </div>
        </div>
        <h2 className="flex flex-col items-center gap-0 m-6 mt-9 font-bold uppercase text-3xl mbl:mt-5 mbl:text-xl">
          <span className="flex items-center gap-1 w-fit py-1 px-8 font-bold -tracking-[-0.3rem] border-[4px] border-red-900 rounded-full">
            <span className="font-normal lowercase text-xs">error</span> 
            404
          </span>
          <br />- Página não encontrada -
        </h2>
        <p className="w-11/12 text-black font-medium mbl:text-lg">
          A página que você está procurando pode ter sido removida, teve seu
          nome alterado ou está temporariamente indisponível.
        </p>
        <div className="mt-10">
          <Link to="/">
            <button
              className="text-2xl font-poppins p-4 px-14 rounded-xl text-white bg-red-900 transition-all hover:brightness-50"
              type="submit"
            >
              Voltar ao início
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center mbl:hidden">
        <img
          className="w-9/12 select-none"
          src={VikingImg}
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
}

export default PageNotFound;
