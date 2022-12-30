import ArticlePage from "../../../components/ArticlePage";

import AsgardImg from "../../../assets/mythology/realms/bg-asgard.webp";

export function Asgard() {
  return (
    <div>
      <div>
        <ArticlePage
          imageUrl={AsgardImg}
          title="Asgard"
          baseText="é o reino dos deuses, os Aesirs, na mitologia nórdica, um mundo separado do reino dos mortais, a Terra Média. Asgard era originalmente conhecido como Godheim (Resto dos Deuses), pois os primeiros mitólogos confundiram o nome do mundo dos deuses com o seu castelo principal, e em muitas fontes históricas Godheim tornou-se Asgard.
          
          As paredes em volta de Asgard foram construídas por um gigante (muitas vezes mal identificado como Hrimthurs). Como pagamento pelo seu trabalho, receberia a mão da Freya em casamento, uma das mais belas deusas e também a deusa da fertilidade, sol e lua. O acordo só é válido enquanto o trabalho estiver concluído no prazo de seis dias. O gigante tinha um cavalo muito rápido e forte. Odin, temendo perder as maçãs douradas da juventude, ameaçou matar Loki se ele não salvasse os deuses do acordo. O vigarista transformou-se numa égua, e no último dia do acordo foi ao local e seduziu o cavalo mágico do gigante, Svadilfari. Desta forma, o trabalho não foi concluído a tempo e os deuses evitaram ser pagos. Loki deu à luz Sleipnir, o cavalo de oito patas, que mais tarde foi dado a Odin como um presente para compensar a 'distracção' do cavalo dos gigantes. O guardião de Asgard é Heimdall. A planície de Hilda é o centro de Asgard. Os Aesirs reúnem-se lá para discutir assuntos importantes - os deuses masculinos encontram-se num salão chamado Gladsheim, e as deusas num salão chamado Vingolf. Também se encontram diariamente no Poço de Urd, sob Yggdrasil."
        />
      </div>
    </div>
  );
}

export default Asgard;