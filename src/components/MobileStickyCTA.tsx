"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#top");
    const contact = document.querySelector("#contact");
    if (!hero || !contact) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0.05 },
    );
    const contactObserver = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { threshold: 0.08 },
    );
    heroObserver.observe(hero);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    trackEvent("hero_cta_click");
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      document.querySelector<HTMLInputElement>("#brand-link")?.focus({ preventScroll: true });
    }, 700);
  };

  return (
    <a
      className={`mobile-sticky-cta${pastHero && !atContact ? " is-visible" : ""}`}
      href="#contact"
      onClick={handleClick}
      aria-hidden={!pastHero || atContact}
      tabIndex={pastHero && !atContact ? 0 : -1}
    >
      브랜드 링크 보내기
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}
