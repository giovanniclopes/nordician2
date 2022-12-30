import ArticlePage from "../../../components/ArticlePage";

import HelheimImg from "../../../assets/mythology/realms/bg-helheim.webp";

export function Helheim() {
  return (
    <div>
      <div>
        <ArticlePage
          imageUrl={HelheimImg}
          title="Helheim"
          baseText="Helheim, que significa literalmente 'casa de Hel' em Old Norse, era um dos nove mundos dentro do universo da mitologia nórdica. Era um reino do submundo dos mortos, onde aqueles que não se encontravam em Valhalla, a vida após a morte de bravos guerreiros, estavam destinados a passar a eternidade. Mas apesar da semelhança nos seus nomes, Helheim nunca deve ser confundido com o Inferno cristão. Era um mundo unicamente viking que reflectia os valores e crenças vikings. Assim, Helheim era um dos reinos do além na mitologia nórdica, mas não era o único.
          
          Os Vikings acreditavam que aqueles que morriam corajosamente em batalha eram levados a viver em Valhalla ou Folkvangr, salões dentro de Asgard onde viveriam no paraíso de um guerreiro até serem novamente chamados a lutar ao lado dos deuses no fim do mundo. Os vikings que se afogaram no mar podem encontrar-se em Ran, uma vida após a morte no fundo do mar governada por uma gigante marinha com o mesmo nome. Os vikings também falavam de um lugar chamado Helgafjell, que parece ser uma montanha sagrada onde alguns dos mortos passariam os seus dias fazendo praticamente as mesmas coisas que faziam quando estavam vivos. Depois havia Helheim. Foi o autor do século XIII Snorri Sturluson, fortemente influenciado por ideias cristãs, que sugeriu que enquanto guerreiros corajosos se encontravam em Valhalla, todos os outros se encontravam em Helheim. Mas isto não parece reflectir realmente ideias anteriores, pois em relatos anteriores é praticamente impossível distinguir entre Valhalla, Folkvangr, e Helheim, pois raramente são nomeados. Portanto, é muito provável que Helheim fosse apenas um dos vários lugares onde um Viking se poderia encontrar após a morte."
        />
      </div>
    </div>
  );
}

export default Helheim;
