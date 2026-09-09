import { ArrowRight, Check, LockKeyhole, ShieldCheck } from "lucide-react";

export const PLAN_BONUSES = [
  [
    "Conhecendo a Umbanda Dentro do Terreiro",
    "Perguntas frequentes e explicações introdutórias sobre a Umbanda, o terreiro, as giras e algumas diferenças em relação ao Candomblé.",
  ],
  [
    "África de A a Z: Um Olhar pela Cultura Africana",
    "Material introdutório sobre a cultura africana, suas raízes, tradições e sua relação histórica com a compreensão dos Orixás.",
  ],
  [
    "Histórias e Cantigas dos Orixás",
    "Material educativo com histórias, significados e introdução às cantigas tradicionais relacionadas aos Orixás.",
  ],
];

// Populate only with the seller's verified checkout destinations.
const CHECKOUT_URLS = { basic: "", complete: "" };

const PLANS = [
  {
    id: "basic" as const,
    label: "PLANO BÁSICO",
    title: "Significado dos Orixás",
    price: "9",
    description: "Uma base visual para começar a aprender.",
    features: [
      "Cards explicativos dos Orixás",
      "Características, símbolos e elementos relacionados",
      "Conteúdo introdutório para iniciantes",
      "Material visual, simples e fácil de entender",
      "Acesso imediato após a confirmação do pagamento",
    ],
  },
  {
    id: "complete" as const,
    label: "PLANO COMPLETO",
    title: "Significado dos Orixás — Completo",
    price: "19",
    description: "Todo o Plano Básico, mais três materiais para ampliar seus estudos.",
    features: [
      "Tudo do Plano Básico",
      "Conhecendo a Umbanda Dentro do Terreiro",
      "África de A a Z",
      "Histórias e Cantigas dos Orixás",
      "Acesso imediato após a confirmação do pagamento",
      "Melhor custo-benefício",
    ],
  },
];

export function PlansOffer() {
  return (
    <section id="oferta" className="section offer-section" aria-labelledby="plans-title">
      <div className="container">
        <div className="section-heading plans-heading">
          <div>
            <p className="eyebrow">UM PRIMEIRO PASSO NO SEU RITMO</p>
            <h2 id="plans-title">
              Escolha seu plano.
              <br />
              <em>Comece a conhecer.</em>
            </h2>
          </div>
          <p>
            Compare o que está incluído e escolha o material que faz sentido para os seus estudos.
          </p>
        </div>
        <div className="plans-grid">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`offer-card plan-card ${plan.id === "complete" ? "plan-complete" : ""}`}
              aria-labelledby={`plan-${plan.id}`}
            >
              <span className="offer-label">{plan.label}</span>
              {plan.id === "complete" && <span className="plan-highlight">Oferta completa</span>}
              <h3 id={`plan-${plan.id}`}>{plan.title}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="price" aria-label={`R$ ${plan.price},90`}>
                <strong aria-hidden="true">
                  <small>R$</small> {plan.price}
                  <span>,90</span>
                </strong>
              </div>
              <ul className="offer-checks plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="plan-action">
                {CHECKOUT_URLS[plan.id] ? (
                  <a className="cta offer-button" href={CHECKOUT_URLS[plan.id]}>
                    Quero o Plano {plan.id === "basic" ? "Básico" : "Completo"}
                    <ArrowRight size={18} />
                  </a>
                ) : (
                  <>
                    <button className="cta offer-button" disabled>
                      Plano {plan.id === "basic" ? "Básico" : "Completo"} — em breve
                    </button>
                    <p className="checkout-note">Compra disponível em breve.</p>
                  </>
                )}
              </div>
              <div className="offer-trust">
                <span>
                  <LockKeyhole /> Pagamento seguro
                </span>
                <span>
                  <ShieldCheck /> Garantia de 7 dias
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="plans-common">
          O Glossário Visual dos Orixás e o Mapa de Estudos dos Orixás fazem parte do conteúdo
          principal, incluído nos dois planos.
        </p>
      </div>
    </section>
  );
}
