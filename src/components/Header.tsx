"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

function moveToContact(event: React.MouseEvent<HTMLAnchorElement>, source: "header" | "sticky") {
  event.preventDefault();
  trackEvent(source === "header" ? "header_cta_click" : "hero_cta_click");
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => {
    document.querySelector<HTMLInputElement>("#brand-link")?.focus({ preventScroll: true });
  }, 700);
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <a className="brand-mark" href="#top" aria-label="박하란 홈페이지 처음으로">
          <span>{siteConfig.name}</span>
          <small>{siteConfig.role}</small>
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact" onClick={(event) => moveToContact(event, "header")}>
          브랜드 링크 보내기
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${isOpen ? " is-open" : ""}`}
        aria-label="모바일 메뉴"
        aria-hidden={!isOpen}
      >
        {siteConfig.navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
        <a
          className="mobile-nav__cta"
          href="#contact"
          tabIndex={isOpen ? 0 : -1}
          onClick={(event) => {
            setIsOpen(false);
            moveToContact(event, "header");
          }}
        >
          브랜드 링크 보내기
          <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
