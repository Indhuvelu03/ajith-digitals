"use client";

import { CSSProperties, useEffect, useState } from "react";

export function Cursor() {
  const [position, setPosition] = useState({ x: -20, y: -20 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
      setActive(Boolean((event.target as Element).closest("a, button, input, textarea, select, [data-carousel]")));
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  const style = {
    "--cursor-x": `${position.x}px`,
    "--cursor-y": `${position.y}px`,
  } as CSSProperties;

  return <span className={`custom-cursor${visible ? " is-visible" : ""}${active ? " is-active" : ""}`} style={style} aria-hidden="true" />;
}
