import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
export function DeferredCarousel({ children, portrait = false }: { children: ReactNode; portrait?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    if (!("IntersectionObserver" in window)) { setReady(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setReady(true); observer.disconnect(); }
    }, { rootMargin: "250px 0px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={portrait ? "deferred-carousel portrait" : "deferred-carousel"}>
    {ready ? <Suspense fallback={<div className="carousel-placeholder" aria-hidden="true" />}>{children}</Suspense> : <div className="carousel-placeholder" aria-hidden="true" />}
  </div>;
}
