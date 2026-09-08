import { useEffect, useRef, useState } from "react";
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

// Three copies so the track can slide forward forever and wrap seamlessly.
const SLIDES = [...CARDS, ...CARDS, ...CARDS];
const N = CARDS.length;
const DWELL_MS = 2800;
const SLIDE_MS = 600;

export function FlashcardCarousel() {
  const [index, setIndex] = useState(N);
  const [animate, setAnimate] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, DWELL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    // Reached the end of the middle copy: jump back silently (no visible rewind).
    if (index >= 2 * N) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex((i) => i - N);
      }, SLIDE_MS);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [index]);

  useEffect(() => {
    if (!animate) {
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      return () => cancelAnimationFrame(raf);
    }
    return undefined;
  }, [animate]);

  return (
    <div
      className="fc-carousel"
      role="region"
      aria-label="Flashcards dos Orixás em carrossel automático"
    >
      <div
        className="fc-track"
        style={{
          transform: `translateX(calc(50% - (var(--fc-w) / 2) - (var(--fc-w) * ${index})))`,
          transition: animate ? `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)` : "none",
        }}
      >
        {SLIDES.map((card, i) => (
          <figure
            key={i}
            className={`fc-card${i === index ? " is-active" : ""}`}
            aria-hidden={i === index ? undefined : true}
          >
            <img src={card.src} alt={i === index ? card.alt : ""} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}
