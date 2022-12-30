import ArticlePage from "../../../components/ArticlePage";
import SurtrImg from "../../../assets/mythology/beings/bg-surtr.webp";

export function Surtr() {
  return (
    <div>
      <div>
        <ArticlePage
          imageUrl={SurtrImg}
          title="Surtr"
          baseText="Surt, também chamado Surtur ou Surt, é um Jötunn (gigante) primordial. É considerado aquele que terminará o mundo durante Ragnarök. Ele é também um dos dois 'males supremos', sendo o outro Loki. Os antigos manuscritas nórdicos descrevem Surtr como o primeiro dos gigantes do fogo a emergir das chamas de Musphelheim, o reino do fogo. Ele é um jötunn, meio-irmão de Ymir e Audhumbla, encarnação do caos e do fogo. É também representado como detentor de uma imensa espada de fogo.
          
          No Ragnarök, Surtr levará o exército de jotnar de fogo de Musphelheim a invadir Asgard pela ponte Bifrost e a entrar em campo de batalha. Surtr está destinado a lutar com o deus Frey, que infelizmente é morto pela espada de fogo do gigante porque presenteou a sua própria espada ao seu amigo Skírnir muito antes da batalha. No final da batalha, Surtr sacudirá a sua arma e espalhará o fogo primordial de Musphelheim a todos os Yggdrasil, consumindo os Nove Reinos e matando praticamente todos os seres vivos do cosmos, incluindo ele próprio e a sua própria espécie."
        />
      </div>
    </div>
  );
}

export default Surtr;
