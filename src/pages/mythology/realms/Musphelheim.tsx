import ArticlePage from "../../../components/ArticlePage";

import MusphelheimImg from "../../../assets/mythology/realms/bg-musphelheim.webp";

export function Musphelheim() {
  return (
    <div>
      <div>
        <ArticlePage
          imageUrl={MusphelheimImg}
          title="Musphelheim"
          baseText="A palavra 'Musphelheim' é registada apenas na Edda em Prosa de Snorri Sturluson. O seu significado mais antigo, quando se compara estas várias fontes, parece ter sido 'o fim do mundo através do fogo'. Na poesia anterior do Velho Nórdico, a palavra parece referir-se a um gigante que conduz o seu 'povo' ou 'filhos' à batalha contra os deuses durante Ragnarok. Mesmo que a ideia de Muspelheim como um lugar em vez de um evento ou uma pessoa seja uma invenção de Snorri, é um acreção relativamente menor, e que é amplamente consistente com os usos anteriores de Múspell.
          
          Musphelheim caracteriza-se tanto na criação do mundo como na sua ruína. Na narrativa de criação dada por Snorri, o fogo de Muspelheim e o gelo de Niflheim encontram-se no meio do Ginnungagap e forjam o gigante Ymir, que teve seu corpo como base para o mundo. Durante o Ragnarok, o gigante do fogo Surt, chega do sul com uma espada flamejante para matar os deuses e queimar o mundo. Para os Vikings, então, o cosmos começa e acaba em fogo (juntamente com o gelo)."
        />
      </div>
    </div>
  );
}

export default Musphelheim;
