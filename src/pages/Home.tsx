import { Link } from "react-router-dom";
import GamesIllustration from "../assets/GamesIllustration.gif";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { Button } from "./../components/Button";

export function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div
        id="section1"
        className="h-max bg-main bg-cover pt-24 pb-16 mbl:pt-12 mbl:pb-0"
      >
        <div className="flex items-center justify-center py-40 sm:py-32">
          <div className="flex flex-col items-center justify-center gap-20">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-white text-8xl text-center font-bold mbl:text-5xl">
                Boas-vindas ao Mundo Nórdico
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 text-gray-normal">
              <p className="text-white text-opacity-50 text-xl font-light">
                Escolha uma opção para saber mais
              </p>
              <div className="flex flex-row gap-6 items-center justify-center">
                <Link to="/mythology">
                  <Button title="Mitologia" type="PRIMARY" />
                </Link>
                <Link to="/reality">
                  <Button title="Realidade" type="SECUNDARY" />
                </Link>
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
      <div
        id="section3 games"
        className="flex items-center justify-center p-5 mx-5 my-16"
      >
        <div className="grid grid-cols-2 gap-28  mbl:flex flex-col-reverse mbl:gap-20">
          <div className="flex flex-col items-center justify-center gap-10 text-center mbl:items-center">
            <div className="flex flex-col items-center gap-7 w-max mbl:w-96">
              <h1 className="text-6xl mbl:text-5xl">Jogos Nórdicos</h1>
              <hr className="border border-maroon-100 w-2/3" />
              <p className="w-[35rem]">
                Aqui coloquei diversos jogos digitais, que tem como tema
                principal o mundo viking.
              </p>
            </div>
            <div>
              <Link to="/games">
                <Button title="VER JOGOS" type="PRIMARY" />
              </Link>
            </div>
          </div>
          <div>
            <img
              className="w-[30rem] mbl:w-80"
              src={GamesIllustration}
              alt="Páginas de jogos"
            />
          </div>
        </div>
      </div>
      <div
        id="section4 form"
        className="flex flex-col justify-center mt-10 p-16 bg-contact bg-cover bg-fixed bg-no-repeat border-t-4 border-red-400"
      >
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
