import { useEffect, useState } from "react";

const CARDS = [
  { src: "/orixas/ogum.jpg", alt: "Ogum — coragem, força e conquistas" },
  { src: "/orixas/exu.jpg", alt: "Exu — caminhos, comunicação e movimento" },
  { src: "/orixas/omolu.jpg", alt: "Omolu — transformação, proteção e renovação" },
  { src: "/orixas/oxum.jpg", alt: "Oxum — amor, beleza e prosperidade" },
  { src: "/orixas/iemanja.jpg", alt: "Iemanjá — acolhimento, proteção e família" },
  { src: "/orixas/nana.jpg", alt: "Nanã — ancestralidade, sabedoria e serenidade" },
  { src: "/orixas/oxala.jpg", alt: "Oxalá — paz, criação e sabedoria" },
  { src: "/orixas/oxaguia.jpg", alt: "Oxaguiã — renovação, estratégia e movimento" },
  { src: "/orixas/ewa.jpg", alt: "Ewá — intuição, beleza e mistério" },
  { src: "/orixas/oba.jpg", alt: "Obá — determinação, lealdade e força" },
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

export function FlashcardCarousel() {
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
      aria-label="Cards dos Orixás"
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
              width="1122"
              height="1402"
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
