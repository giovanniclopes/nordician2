import { Link } from "react-router-dom";
import VikingImg from "../assets/viking.jpg";

export function PageNotFound() {
  return (
    <div className="grid grid-cols-2 bg-white text-gray-900 text-center h-screen">
      <div className="flex flex-col items-center justidy-center my-auto font-poppins">
        <h1 className="bg-bgText bg-bottom bg-cover bg-no-repeat bg-clip-text text-transparent font-black text-9xl select-none">
          Oops!
        </h1>
        <h2 className="m-6 font-bold uppercase text-3xl">
          404 - Página não encontrada
        </h2>
        <p className="w-11/12 font-medium">
          A página que você está procurando pode ter sido removida, teve seu nome
          alterado ou está temporariamente indisponível.
        </p>
        <div className="mt-10">
          <Link to="/">
            <button
              className="text-2xl font-poppins p-4 px-14 rounded-xl text-white bg-gray-500 transition-all hover:bg-black"
              type="submit"
            >
              Voltar ao início
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
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
