import { useEffect, useState } from "react";

const CARDS = [
  {
    "src": "/intro-cards/n1.jpg",
    "alt": "Oxalá — pureza e equilíbrio"
  },
  {
    "src": "/intro-cards/n2.jpg",
    "alt": "Iemanjá — vida e proteção"
  },
  {
    "src": "/intro-cards/n3.jpg",
    "alt": "Ogum — força e caminhos"
  },
  {
    "src": "/intro-cards/n5.jpg",
    "alt": "Umbanda para iniciantes"
  },
  {
    "src": "/intro-cards/n6.jpg",
    "alt": "Os Orixás e seus atributos"
  },
  {
    "src": "/intro-cards/n7.jpg",
    "alt": "Rituais e oferendas"
  },
  {
    "src": "/intro-cards/n8.jpg",
    "alt": "Sabedoria para o dia a dia"
  }
];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const DWELL_MS = 2800;

export function IntroCardCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!api) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const clear = () => {
      if (timer) clearTimeout(timer);
    };
    const schedule = () => {
      clear();
      if (paused || focused || document.hidden || reducedMotion.matches) return;
      timer = setTimeout(() => api.scrollNext(), DWELL_MS);
    };
    // Start a full dwell only after a slide has settled in the center.
    api.on("settle", schedule);
    api.on("select", clear);
    api.on("pointerDown", clear);
    api.on("pointerUp", schedule);
    api.on("reInit", schedule);
    document.addEventListener("visibilitychange", schedule);
    reducedMotion.addEventListener("change", schedule);
    schedule();
    return () => {
      clear();
      api.off("settle", schedule);
      api.off("select", clear);
      api.off("pointerDown", clear);
      api.off("pointerUp", schedule);
      api.off("reInit", schedule);
      document.removeEventListener("visibilitychange", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, [api, paused, focused]);

  return (
    <Carousel
      className="fc-carousel"
      opts={{ loop: true, align: "center", duration: 30 }}
      setApi={setApi}
      aria-label="Prévias do Guia Visual dos Orixás"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <button className="fc-pause" onClick={() => setPaused((value) => !value)}>
        {paused ? "Retomar passagem automática" : "Pausar passagem automática"}
      </button>
      <CarouselContent className="fc-track" aria-live="off">
        {CARDS.map((card, index) => (
          <CarouselItem
            className="fc-card"
            key={card.src}
            aria-label={`${index + 1} de ${CARDS.length}`}
          >
            <img
              src={card.src}
              alt={card.alt}
              width="1024"
              height="1536"
              style={{ aspectRatio: "2 / 3" }}
              loading="lazy"
              draggable={false}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="fc-arrow fc-prev" aria-label="Card anterior" />
      <CarouselNext className="fc-arrow fc-next" aria-label="Próximo card" />
    </Carousel>
  );
}
