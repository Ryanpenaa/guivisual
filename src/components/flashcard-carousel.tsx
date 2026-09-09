import { useEffect, useState } from "react";
import oxumare from "@/assets/1fa5f682-a6fd-41e6-81d6-e0a18dae1f8a.webp.asset.json";
import ogum from "@/assets/3c5fdbd2-7f5b-4770-9344-f4ccfff4a8c2.webp.asset.json";
import iemanja from "@/assets/7d0fb290-4500-40c5-9237-0f350c8c3179.webp.asset.json";
import oxum from "@/assets/93a1e858-f55f-4fd2-9c73-efe930b1ed5a.webp.asset.json";
import oxala from "@/assets/624fbd4d-bb96-4d56-8d07-ee291a519608.png.asset.json";
import xango from "@/assets/60055ff4-5ea5-46f5-bfd0-51df7a22f9fe.webp.asset.json";
import exu from "@/assets/da2da9ae-2e97-4872-9e7e-db89f105fa2a.png.asset.json";

const CARDS = [
  { src: oxala.url, alt: "Flashcard de Oxalá — paz, criação e sabedoria" },
  { src: iemanja.url, alt: "Flashcard de Iemanjá — acolhimento, proteção e família" },
  { src: ogum.url, alt: "Flashcard de Ogum — coragem, força e conquistas" },
  { src: xango.url, alt: "Flashcard de Xangô — justiça, liderança e equilíbrio" },
  { src: oxum.url, alt: "Flashcard de Oxum — amor, beleza e prosperidade" },
  { src: oxumare.url, alt: "Flashcard de Oxumarê — ciclos, movimento e renovação" },
  { src: exu.url, alt: "Flashcard de Exu — caminhos, comunicação e movimento" },
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
