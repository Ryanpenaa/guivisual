import { useEffect, useState, useCallback } from "react";
import { CheckCircle2 } from "lucide-react";

type Notification = {
  name: string;
  plan: string;
};

const NOTIFICATIONS: Notification[] = [
  { name: "Ana Paula", plan: "Plano Completo" },
  { name: "Marcos S.", plan: "Plano Básico" },
  { name: "Juliana R.", plan: "Plano Completo" },
  { name: "Roberto C.", plan: "Plano Completo" },
  { name: "Fernanda L.", plan: "Plano Básico" },
  { name: "Camila M.", plan: "Plano Completo" },
  { name: "Lucas A.", plan: "Plano Básico" },
  { name: "Patrícia H.", plan: "Plano Completo" },
  { name: "Diego T.", plan: "Plano Básico" },
  { name: "Beatriz O.", plan: "Plano Completo" },
];

const CYCLE_MS = 5200;
const VISIBLE_MS = 4200;

function formatTimeAgo(date: Date) {
  const now = new Date();
  const diff = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 60000));
  if (diff < 1) return "agora";
  if (diff === 1) return "1 min";
  if (diff < 60) return `${diff} min`;
  const hours = Math.floor(diff / 60);
  return hours === 1 ? "1 h" : `${hours} h`;
}

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState<Notification>(NOTIFICATIONS[0]);

  const showNext = useCallback(() => {
    setIndex((prev) => {
      const next = (prev + 1) % NOTIFICATIONS.length;
      setCurrent(NOTIFICATIONS[next]);
      return next;
    });
    setVisible(true);
    window.setTimeout(() => setVisible(false), VISIBLE_MS);
  }, []);

  useEffect(() => {
    setMounted(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const initial = window.setTimeout(showNext, 2400);
    const interval = window.setInterval(showNext, CYCLE_MS);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
    };
  }, [showNext]);

  if (!mounted) return null;

  return (
    <div
      className={`social-proof-toast ${visible ? "is-visible" : ""}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <CheckCircle2 className="social-proof-icon" aria-hidden="true" />
      <div className="social-proof-body">
        <p className="social-proof-name">{current.name}</p>
        <p className="social-proof-action">
          comprou o <strong>{current.plan}</strong>
        </p>
        <p className="social-proof-time">{formatTimeAgo(new Date())}</p>
      </div>
    </div>
  );
}
