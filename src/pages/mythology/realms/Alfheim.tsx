import ArticlePage from "../../../components/ArticlePage";

import AlfheimImg from "../../../assets/mythology/realms/bg-alfheim.webp";

export function Alfheim() {
  return (
    <div>
      <div>
        <ArticlePage
          imageUrl={AlfheimImg}
          title="Alfheim"
          baseText="Vanaheim, a casa dos Vanir foi descrita como um reino com jardins exuberantes e campos abundantes. No entanto, foi também um dos campos de batalha na guerra furiosa dos Vanir contra o Aesir, tendo sido assim devastado após a guerra de séculos. Foi o casamento da Freya, um dos líderes dos Vanir, com Odin, o Rei de Aesir, que finalmente trouxe paz a Vanaheim e ao resto dos reinos.
        
        Depois das consequências do casamento, Odin trancou o caminho para Vanaheim através do Templo de Týr, não permitindo que ninguém visitasse o reino. A casa da Freya tem uma vista mágica de Vanaheim através de uma das suas janelas. Descreve uma floresta de árvores espessas e altas sem folhas, florescendo no seu solo e céu de Outono."
        />
      </div>
    </div>
  );
}

export default Alfheim;