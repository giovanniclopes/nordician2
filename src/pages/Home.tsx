import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import Navbar2 from "../components/Navbar2";
import Navbar from "../components/Navbar";

export function Home() {
  return (
    <>
      <Navbar2 />
      <div className="h-fit bg-main bg-cover">
        <div className="flex items-center justify-center py-40 sm:py-32">
          <div className="flex flex-col items-center justify-center gap-12 font-nordica font-bold">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white text-8xl text-center mbl:text-5xl">
                Boas-vindas ao Mundo Nórdico
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 text-gray-normal">
              <p className="text-white text-opacity-50 text-xl font-light">
                Escolha uma opção para saber mais
              </p>
              <div className="flex flex-row gap-6 items-center justify-center">
                <a href="">
                  <button className="bg-red-500 border-[3px] border-transparent rounded-md text-3xl py-4 px-14 transition-all hover:bg-opacity-80 mbl:text-2xl mbl:px-9 mbl:py-3">
                    Mitologia
                  </button>
                </a>
                <a href="">
                  <button className="bg-transparent border-[3px] border-red-500 rounded-md text-red-500 text-3xl py-4 px-14 transition-all hover:border-opacity-80 hover:text-opacity-80 mbl:text-2xl mbl:px-9 mbl:py-3">
                    Realidade
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Home;
