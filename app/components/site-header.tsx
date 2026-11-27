"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "ADVENTURES", href: "/adventures" },
  { label: "DESTINATIONS", href: "/destinations" },
  { label: "TRAINING", href: "/training" },
  { label: "PRIVATE EXPERIENCES", href: "/private-experiences" },
  { label: "FOR BRANDS", href: "/for-brands" },
  { label: "ABOUT", href: "/#story" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header className="topbar">
        <a className="wordmark wordmark-header" href="/" aria-label="Crossborder Adventures home">
          <img className="wordmark-logo" src="/MASTER%20LOGO%201.png" alt="Crossborder Adventures" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} className={pathname === link.href ? "active" : ""} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="nav-contact" href="/#contact">CONTACT</a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>{open ? "×" : "☰"}</button>
      </header>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="/#contact" onClick={() => setOpen(false)}>CONTACT</a>
      </nav>}
    </>
  );
}
