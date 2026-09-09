import { ArrowRight, Check, LockKeyhole, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
const CHECKOUT_URLS = {
  basic: "https://checkout.kitpro.store/VCCL1O8SD8XS",
  complete: "https://checkout.kitpro.store/VCCL1O8SD8XT",
  upgrade: "https://checkout.kitpro.store/VCCL1O8SD8XU",
};

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
    price: "28",
    description: "Todo o Plano Básico, mais três materiais para ampliar seus estudos.",
    features: [
      "Cards explicativos dos Orixás",
      "Características, símbolos e elementos relacionados",
      "Conteúdo introdutório para iniciantes",
      "Material visual, simples e fácil de entender",
      "Bônus 1 — Conhecendo a Umbanda Dentro do Terreiro",
      "Bônus 2 — África de A a Z",
      "Bônus 3 — Histórias e Cantigas dos Orixás",
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
                {plan.id === "basic" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="cta offer-button">
                        Quero o Plano Básico <ArrowRight size={18} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="upgrade-dialog">
                      <p className="eyebrow">UMA OPORTUNIDADE PARA VOCÊ</p>
                      <DialogTitle className="upgrade-title">
                        Leve o kit completo por R$ 19,90
                      </DialogTitle>
                      <DialogDescription className="upgrade-description">
                        Por R$ 10,00 a mais que o Básico, você recebe todos os conteúdos abaixo e os
                        três bônus educativos.
                      </DialogDescription>
                      <div className="upgrade-comparison">
                        <div>
                          <h3>Seu conteúdo do Básico</h3>
                          <ul>
                            {plan.features.map((feature) => (
                              <li key={feature}>
                                <Check aria-hidden="true" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="upgrade-bonuses">
                          <h3>Mais 3 bônus no Completo</h3>
                          <ul>
                            {PLAN_BONUSES.map(([title], index) => (
                              <li key={title}>
                                <Check aria-hidden="true" />
                                <span>
                                  Bônus {index + 1} — {title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="upgrade-price">
                        <span>De R$ 28,90 por</span> <strong>R$ 19,90</strong>
                        <small>Valor total do kit completo</small>
                      </p>
                      <a className="cta offer-button" href={CHECKOUT_URLS.upgrade}>
                        Quero o Completo por R$ 19,90 <ArrowRight size={18} />
                      </a>
                      <a className="upgrade-basic" href={CHECKOUT_URLS.basic}>
                        Continuar com o Básico por R$ 9,90
                      </a>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <a className="cta offer-button" href={CHECKOUT_URLS.complete}>
                    Quero o Plano Completo <ArrowRight size={18} />
                  </a>
                )}{" "}
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
