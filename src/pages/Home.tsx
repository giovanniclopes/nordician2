import GamesIllustration from "../assets/GamesIllustration.gif";
import Navbar from "../components/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <div id="section1" className="h-fit bg-main bg-cover">
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
                  <button className="bg-red-400 text-gray-500 border-[3px] border-transparent rounded-md text-3xl py-4 px-14 transition-all hover:bg-opacity-80 mbl:text-2xl mbl:px-9 mbl:py-3">
                    Mitologia
                  </button>
                </a>
                <a href="">
                  <button className="bg-transparent border-[3px] border-red-400 rounded-md text-red-400 text-3xl py-4 px-14 transition-all hover:border-opacity-80 hover:text-opacity-80 mbl:text-2xl mbl:px-9 mbl:py-3">
                    Realidade
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section2"
        className="flex flex-col items-center justify-center gap-6 p-12"
      >
        <hr className="border border-maroon-100 w-2/3 mb-10" />
        <p className="text-center w-3/4 mbl:w-auto">
          Olá viajante, bem vinda(o) ao Nordician! <br />
          Aqui forneço diversos artigos para quem busca por informações sobre a
          cultura nórdica. <br /> Contendo artigos sobre o mundo real, e sobre o
          mundo místico. <br /> No topo/menu deste site, você encontrará os
          links:
          <span className="text-maroon-100"> 'Mitologia'</span> e{" "}
          <span className="text-maroon-100">'Realidade'</span>, onde estão
          localizados todo o conteúdo nórdico. Aproveite! <br />
        </p>
        <p className="text-center w-3/4 text-maroon-100 mbl:w-auto">
          E lembrando! os textos de todos os artigos podem estar no idioma
          Dinamarquês ou Norueguês, para preservar a cultura e dar um aspecto
          mais nórdico. Porém você pode facilmente traduzir a página, com a
          solitação que você irá receber do Google Tradutor.
        </p>
        <hr className="border border-maroon-100 w-2/3 mt-10" />
      </div>
      <div id="section3" className="flex items-center justify-center p-5 mx-5">
        <div className="flex flex-row justify-center items-center gap-52 mbl:flex-col-reverse mbl:gap-20">
          <div className="flex flex-col gap-10 mbl:items-center mbl:text-center">
            <div className="flex flex-col gap-7 w-96">
              <h1 className="text-7xl text-maroon-100 mbl:text-5xl">Jogos Nórdicos</h1>
              <p className="w-full">
                Aqui coloquei diversos jogos digitais, que tem como tema
                principal o mundo viking.
              </p>
            </div>
            <div>
              <button className="flex items-center justify-center w-2/3 bg-red-400 text-gray-500 rounded p-3 mbl:w-72 hover:bg-opacity-80">
                Ver Jogos
              </button>
            </div>
          </div>
          <div>
            <img className="mbl:w-80" src={GamesIllustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
