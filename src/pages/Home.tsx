import Navbar from "../components/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="h-fit bg-main bg-cover">
        <div className="flex items-center justify-center py-40">
          <div className="flex gap-8 flex-col font-nordica font-bold">
            <div>
              <h1 className="text-white text-6xl">
                Boas-vindas ao Mundo Nórdico
              </h1>
            </div>
            <div className="flex items-center justify-center gap-6 text-gray-normal">
              <a href="">
                <button className="bg-red-main border-[3px] border-transparent rounded-md text-3xl py-4 px-14 transition-all hover:bg-opacity-80">
                  Mitologia
                </button>
              </a>
              <a href="">
                <button className="bg-transparent border-[3px] border-red-main rounded-md text-red-main text-3xl py-4 px-14 transition-all hover:border-opacity-80 hover:text-opacity-80">
                  Realidade
                </button>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Home;
