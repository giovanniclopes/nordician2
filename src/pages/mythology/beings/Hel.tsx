import ArticlePage from "../../../components/ArticlePage";
import HelImg from "../../../assets/mythology/beings/bg-hel.webp";

export function Hel() {
  return (
    <div>
      <div>
        <ArticlePage
          imageUrl={HelImg}
          title="Hel"
          baseText="Hel é a rainha do reino da vida após a morte de Hel na mitologia nórdica. Ela é a filha do deus Loki e da gigante Angrboda e irmã de Fenrir o lobo e Jörmungandr a Serpente Mundial. Embora frequentemente referida como uma deusa, Hel é mais uma meia deusa e jötunn, uma entidade de Jotunheim, reino dos gigantes. O seu nome significa 'escondida' e refere-se aos mortos que estão enterrados ou cremados e cujas almas são invisíveis para os vivos.
          
          Anteriormente, parece que Hel era um lugar e sinónimo de 'a sepultura' não tendo nenhum ser sobrenatural a supervisioná-la. A entidade Hel é retratada como metade bela mulher e metade azul, como um cadáver em decomposição. Por vezes é referida como uma gigante desde que a sua mãe, Angrboda, foi uma delas e viveu em Jotunheim."
        />
      </div>
    </div>
  );
}

export default Hel;
