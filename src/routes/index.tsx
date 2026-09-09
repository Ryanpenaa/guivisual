import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDown,
  BookOpen,
  Check,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Leaf,
  Compass,
  Gift,
  Infinity as InfinityIcon,
  Printer,
  LockKeyhole,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FlashcardCarousel } from "@/components/flashcard-carousel";
export const Route = createFileRoute("/")({ component: Index });
function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Guia Visual dos Orixás — início">
      <span className="brand-mark">
        <Sparkles size={23} strokeWidth={1.3} />
      </span>
      <span>
        Guia Visual<span className="brand-sub">DOS ORIXÁS</span>
      </span>
    </a>
  );
}
function Index() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="announcement">
        Um primeiro passo para conhecer. Um novo olhar para compreender.
      </div>
      <header className="site-header">
        <div className="container nav">
          <Brand />
          <nav aria-label="Navegação principal">
            <a href="#conteudo">O guia</a>
            <a href="#bonus">Bônus</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="nav-cta" href="#oferta">
            Quero meu guia <ArrowRight size={16} />
          </a>
        </div>
      </header>
      <main id="inicio">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> CONHECIMENTO QUE APROXIMA
            </p>
            <h1 id="hero-title">
              Entenda o significado dos <em>Orixás.</em>
            </h1>
            <figure className="hero-visual">
              <div className="mockup-panel">
                <img
                  src="/guia-mockup.png"
                  width="1254"
                  height="1254"
                  alt="Guia Significado dos Orixás apresentado em livro, celular e tablet, com mapas visuais de Oxalá, Iemanjá, Ogum e Xangô"
                  fetchPriority="high"
                />
              </div>
              <figcaption>
                Material 100% digital · imagens ilustrativas · sem envio físico
              </figcaption>
            </figure>
            <p className="hero-description">
              Conheça histórias, características, símbolos, cores e ensinamentos dos principais
              Orixás — sem se perder em informações complicadas.
            </p>
            <a className="cta" href="#oferta">
              Quero conhecer os Orixás <ArrowRight size={19} />
            </a>
            <div className="trust">
              <span>
                <Check /> Acesso imediato
              </span>
              <span>
                <Smartphone /> Material digital
              </span>
              <span>
                <ShieldCheck /> 7 dias de garantia
              </span>
            </div>
          </div>
        </section>
        <div className="values-strip">
          <div className="container">
            <span>
              <BookOpen /> Feito para iniciantes
            </span>
            <span>
              <Smartphone /> Leia onde quiser
            </span>
            <span>
              <Leaf /> Respeito às tradições
            </span>
            <span>
              <InfinityIcon /> Acesso vitalício
            </span>
          </div>
        </div>
        <section id="conteudo" className="section container intro">
          <div>
            <p className="eyebrow">SEU PONTO DE PARTIDA</p>
            <h2>
              Curiosidade você já tem.
              <br />
              <em>Clareza é o próximo passo.</em>
            </h2>
          </div>
          <div className="prose">
            <p>
              Talvez você já tenha ouvido falar em Oxalá, Iemanjá, Ogum, Xangô, Oxum e outros
              Orixás, mas ainda não compreenda o que cada um representa.
            </p>
            <p>
              Ou encontre informações espalhadas, contraditórias e difíceis de entender. Você não
              precisa começar por livros extensos ou depender de vídeos aleatórios.
            </p>
            <p>
              <strong>
                O Guia Visual dos Orixás foi organizado para facilitar o aprendizado de quem está
                começando.
              </strong>{" "}
              Leia pelo celular, revise rapidamente ou imprima para estudar quando quiser.
            </p>
          </div>
        </section>
        <section className="section contents-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">UM OLHAR MAIS CLARO</p>
                <h2>
                  Conheça os Orixás.
                  <br />
                  <em>Conecte os significados.</em>
                </h2>
              </div>
              <p>
                Conteúdos resumidos e visuais para transformar a curiosidade em uma base de estudos
                organizada.
              </p>
            </div>
          </div>
          <FlashcardCarousel />
        </section>
        <section className="section container method-summary" aria-label="Sobre o material">
          <p>
            Um material de apoio criado para transformar informações complexas em conteúdos simples,
            organizados e fáceis de revisar.
          </p>
        </section>
        <section id="recebe" className="section receive-section">
          <div className="container receive-grid">
            <div>
              <p className="eyebrow">TUDO EM UM SÓ LUGAR</p>
              <h2>
                Seu guia de consulta.
                <br />
                <em>No seu ritmo.</em>
              </h2>
              <p>Com o Guia Visual dos Orixás, você terá acesso a:</p>
              <ul className="check-list">
                {[
                  "Mapas visuais dos principais Orixás",
                  "Significados e características",
                  "Cores, símbolos e elementos",
                  "Histórias e ensinamentos",
                  "Glossário de termos",
                  "Conteúdo para leitura no celular",
                  "Arquivos prontos para impressão",
                  "Acesso vitalício ao material",
                ].map((x) => (
                  <li key={x}>
                    <Check size={18} />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="format-tags">
                <span>
                  <Smartphone /> Digital
                </span>
                <span>
                  <Printer /> Imprimível
                </span>
                <span>
                  <InfinityIcon /> Vitalício
                </span>
              </div>
            </div>
            <aside className="for-you">
              <Compass size={35} strokeWidth={1.2} />
              <h3>
                Ideal para você
                <br />
                que deseja…
              </h3>
              <ul>
                {[
                  "Começar a estudar os Orixás",
                  "Entender melhor a cultura afro-brasileira",
                  "Organizar informações que já ouviu",
                  "Conhecer os símbolos e significados",
                  "Aprender de maneira simples e visual",
                  "Ter um material rápido para consultar",
                  "Diminuir a confusão causada por informações aleatórias na internet",
                ].map((x) => (
                  <li key={x}>
                    <span>✦</span>
                    {x}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
        <section id="bonus" className="section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PARA IR UM POUCO ALÉM</p>
              <h2>
                Um guia. <em>Cinco bônus.</em>
                <br />
                Mais caminhos para aprender.
              </h2>
            </div>
            <div className="bonus-value">
              <Gift size={22} />
              <span>
                Valor dos bônus<strong>R$ 97,00</strong>
                <small>Incluídos na sua compra</small>
              </span>
            </div>
          </div>
          <div className="bonus-list">
            {[
              [
                "Glossário Visual dos Orixás",
                "Termos importantes explicados de maneira simples para facilitar seus primeiros estudos.",
              ],
              [
                "Tabela de Cores, Símbolos e Elementos",
                "Uma tabela rápida para consultar as principais associações de cada Orixá.",
              ],
              [
                "Checklist “Por Onde Começar”",
                "Um roteiro simples para organizar seus primeiros passos no estudo.",
              ],
              [
                "Guia de Diferenças entre Umbanda e Candomblé",
                "Uma introdução às diferenças entre as tradições, sem tratar suas práticas como se fossem iguais.",
              ],
              [
                "Mapa de Estudos dos Orixás",
                "Uma sequência recomendada para você estudar os conteúdos com mais clareza.",
              ],
            ].map(([title, text], i) => (
              <article key={title}>
                <span className="bonus-number">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="included">
                  INCLUÍDO <Check size={14} />
                </span>
              </article>
            ))}
          </div>
        </section>
        <section id="oferta" className="section offer-section">
          <div className="container offer-grid">
            <div className="offer-copy">
              <p className="eyebrow">SEU PRIMEIRO PASSO COMEÇA AQUI</p>
              <h2>
                Você não precisa
                <br />
                saber tudo <em>agora.</em>
              </h2>
              <p>
                Comece entendendo os fundamentos, conhecendo os principais Orixás e construindo uma
                base de estudos organizada.
              </p>
              <p className="offer-signature">
                Conheça os Orixás
                <br />
                com mais clareza.
              </p>
            </div>
            <div className="offer-card">
              <span className="offer-label">GUIA COMPLETO + 5 BÔNUS</span>
              <h3>Guia Visual dos Orixás</h3>
              <p>Para iniciantes</p>
              <div className="price">
                <span>
                  De <s>R$ 47,00</s>
                </span>
                <span className="price-today">Hoje por apenas</span>
                <strong>
                  <small>R$</small> 9<span>,90</span>
                </strong>
              </div>
              <ul className="offer-checks">
                <li>
                  <Check /> Material digital completo
                </li>
                <li>
                  <Check /> Todos os 5 bônus incluídos
                </li>
                <li>
                  <Check /> Acesso vitalício
                </li>
              </ul>
              <button className="cta offer-button" disabled>
                Compra disponível em breve <ArrowRight size={19} />
              </button>
              <p className="checkout-note">Estamos preparando o acesso para você.</p>
              <div className="offer-trust">
                <span>
                  <LockKeyhole /> Pagamento seguro
                </span>
                <span>
                  <ShieldCheck /> Garantia de 7 dias
                </span>
              </div>
              <p className="delivery-note">Acesso imediato após a confirmação do pagamento.</p>
            </div>
          </div>
        </section>
        <section className="container guarantee">
          <div className="guarantee-icon">
            <ShieldCheck size={50} strokeWidth={1.2} />
            <span>7 DIAS</span>
          </div>
          <div>
            <p className="eyebrow">TRANQUILIDADE PARA CONHECER</p>
            <h2>Seu primeiro passo tem garantia.</h2>
            <p>
              Você pode acessar o material e conhecer o conteúdo com tranquilidade. Se dentro de 7
              dias entender que o guia não é para você, basta solicitar o reembolso dentro do prazo
              da garantia.
            </p>
          </div>
        </section>
        <section id="duvidas" className="section faq-section">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">ANTES DE COMEÇAR</p>
              <h2>
                Alguma
                <br />
                <em>dúvida?</em>
              </h2>
              <p>
                Respostas para acompanhar
                <br />
                seus primeiros passos.
              </p>
            </div>
            <Accordion type="single" collapsible className="faq-list">
              {[
                [
                  "Preciso fazer parte de uma religião para comprar?",
                  "Não. O material foi criado para iniciantes, curiosos e pessoas que desejam conhecer melhor os Orixás e a cultura afro-brasileira.",
                ],
                [
                  "O material é sobre Umbanda ou Candomblé?",
                  "O guia apresenta uma introdução geral e informa quando existem diferenças entre tradições. Umbanda e Candomblé possuem fundamentos próprios e não são tratados como religiões idênticas.",
                ],
                [
                  "É um curso em vídeo?",
                  "Não. É um material digital visual, com mapas, explicações, tabelas e conteúdos de consulta rápida.",
                ],
                [
                  "Posso ler pelo celular?",
                  "Sim. Você poderá acessar o material pelo celular, tablet ou computador e também poderá imprimir os arquivos.",
                ],
                ["Tenho acesso por quanto tempo?", "O acesso é vitalício."],
                [
                  "Recebo na hora?",
                  "Sim. Após a confirmação do pagamento, você receberá as instruções de acesso.",
                ],
                ["Existe garantia?", "Sim. Você tem 7 dias de garantia."],
              ].map(([q, a], i) => (
                <AccordionItem value={`faq-${i}`} key={q}>
                  <AccordionTrigger className="faq-question">{q}</AccordionTrigger>
                  <AccordionContent className="faq-answer">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-top">
          <Brand />
          <p>
            Conhecer é o primeiro passo
            <br />
            para compreender e respeitar.
          </p>
          <a href="#inicio" className="text-link">
            Voltar ao início <ArrowRight size={17} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Guia Visual dos Orixás</span>
          <span>Material introdutório · Respeito à diversidade das tradições</span>
        </div>
      </footer>
    </>
  );
}
