import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion, useIsTouchDevice } from "../hooks/usePrefersReducedMotion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

/**
 * A tasteful, desktop-only custom cursor: a small gold dot with a
 * trailing navy/gold ring that eases toward the pointer, and a soft
 * gold ripple that "splashes" outward on click. Disabled entirely on
 * touch devices and simplified when the user prefers reduced motion.
 */
export default function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pointer = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  const disabled = isTouch;

  useEffect(() => {
    if (disabled) return;

    const handleMove = (e: MouseEvent) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor-hover], input, select, textarea"
      );
      setHovering(Boolean(interactive));
    };

    const handleDown = (e: MouseEvent) => {
      setPressed(true);
      const id = rippleId.current++;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 650);
    };

    const handleUp = () => setPressed(false);
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, visible]);

  useEffect(() => {
    if (disabled) return;

    const animate = () => {
      // Dot: snaps almost instantly to the pointer.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pointer.current.x}px, ${pointer.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Ring: eases toward the pointer for a soft trailing feel.
      const ease = prefersReducedMotion ? 1 : 0.18;
      ring.current.x += (pointer.current.x - ring.current.x) * ease;
      ring.current.y += (pointer.current.y - ring.current.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [disabled, prefersReducedMotion]);

  if (disabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease" }}
    >
      {/* trailing ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border transition-[width,height,border-color] duration-200 ease-out"
        style={{
          width: hovering ? 44 : 30,
          height: hovering ? 44 : 30,
          borderColor: hovering ? "#c8a24d" : "rgba(200,162,77,0.55)",
          borderWidth: hovering ? 1.5 : 1,
          backgroundColor: hovering ? "rgba(200,162,77,0.08)" : "transparent",
        }}
      />
      {/* precise dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 rounded-full bg-gold transition-transform duration-150 ease-out"
        style={{
          width: pressed ? 6 : 5,
          height: pressed ? 6 : 5,
          transform: `scale(${pressed ? 0.7 : 1})`,
        }}
      />
      {/* click ripples */}
      {!prefersReducedMotion &&
        ripples.map((r) => (
          <span
            key={r.id}
            className="fixed rounded-full border border-gold animate-ripple"
            style={{
              left: r.x,
              top: r.y,
              width: 64,
              height: 64,
              marginLeft: -32,
              marginTop: -32,
            }}
          />
        ))}
    </div>
  );
}
