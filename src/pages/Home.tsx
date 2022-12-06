import { Link } from "react-router-dom";
import GamesIllustration from "../assets/GamesIllustration.gif";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div id="section1" className="h-fit bg-main bg-cover pt-32 mbl:pt-12">
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
                <Link to="/mythology">
                  <button className="bg-red-400 text-gray-500 border-[3px] border-transparent rounded-md text-3xl py-4 px-14 transition-all hover:bg-opacity-80 mbl:text-2xl mbl:px-9 mbl:py-3">
                    Mitologia
                  </button>
                </Link>
                <Link to="/reality">
                  <button className="bg-transparent border-[3px] border-red-400 rounded-md text-red-400 text-3xl py-4 px-14 transition-all hover:border-opacity-80 hover:text-opacity-80 mbl:text-2xl mbl:px-9 mbl:py-3">
                    Realidade
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section2" className="flex flex-col items-center justify-center gap-6 p-12">
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
              <h1 className="text-7xl text-maroon-100 mbl:text-5xl">
                Jogos Nórdicos
              </h1>
              <p className="w-full">
                Aqui coloquei diversos jogos digitais, que tem como tema
                principal o mundo viking.
              </p>
            </div>
            <div className="w-fit">
              <Link to="/games">
                <button className="flex items-center justify-center w-60 bg-red-400 text-gray-500 rounded p-3 mbl:w-72 transition-all hover:bg-opacity-80">
                  Ver Jogos
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img className="mbl:w-80" src={GamesIllustration} alt="" />
          </div>
        </div>
      </div>
      <div id="section4" className="flex flex-col justify-center mt-10 p-16 bg-contact bg-cover">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="text-6xl">Alguma dúvida?</h3>
            <p>Entre em contato</p>
            <hr className="border border-red-400 w-24" />
          </div>
          <div className="max-w-xl w-full">
            <form
              action="https://formsubmit.co/giovanniclopes@gmail.com"
              method="post"
              className="flex flex-col gap-7 w-full"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name">
                  Nome <span className="text-red-400">*</span>
                </label>
                <input
                  className="bg-gray-500 p-3 rounded font-poppins text-lg transition-all outline-none placeholder:text-opacity-80 focus:p-4 focus:border focus:border-red-400 focus:rounded-lg"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="me diga seu nome"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  className="bg-gray-500 p-3 rounded font-poppins text-lg transition-all outline-none placeholder:text-opacity-80 focus:p-4 focus:border focus:border-red-400 focus:rounded-lg"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="me diga seu email"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message">
                  Sua mensagem <span className="text-red-400">*</span>
                </label>
                <textarea
                  className="bg-gray-500 p-2 px-3 rounded font-poppins text-lg transition-all outline-none placeholder:text-opacity-80 focus:p-3 focus:border focus:border-red-400 focus:rounded-lg"
                  name="message"
                  id="message"
                  cols={30}
                  rows={2}
                  placeholder="Olá! Eu gostaria de falar sobre {assunto}."
                  required
                ></textarea>
              </div>
              <input
                className="bg-red-400 p-3 cursor-pointer rounded hover:bg-opacity-75"
                type="submit"
                value="Enviar mensagem"
              />
              <input type="hidden" name="_template" value="table"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
