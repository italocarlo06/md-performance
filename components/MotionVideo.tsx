"use client";

import { useEffect, useRef } from "react";

/** Vídeo de fundo em loop, sem som. Fica parado para quem pediu menos movimento no sistema. */
export default function MotionVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduce.matches) video.pause();
      else video.play().catch(() => {});
    };
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      className="motion__video"
      src="/video/treino-loop.mp4"
      poster="/images/treino-poster.webp"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Homem fazendo remada unilateral com halter numa academia escura, em câmera lenta"
    />
  );
}
