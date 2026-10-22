"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { Menu, X } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <a href="#inicio" className="header__logo" aria-label="MD Performance, início">
        <Image src="/images/logo-md.png" alt="MD Performance" width={384} height={258} priority />
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="menu-principal"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav id="menu-principal" className="nav" aria-label="Principal" data-open={open}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contato" className="nav-cta" onClick={() => setOpen(false)}>
          Fale com a gente
        </a>
      </nav>
    </header>
  );
}
