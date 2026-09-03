"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { portfolio } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

export function PortfolioGrid() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? portfolio : portfolio.slice(0, 4);

  return (
    <>
      <div className="portfolio-grid">
        {visibleItems.map((item, index) => (
          <article
            className="portfolio-card"
            key={item.id}
            data-reveal="scale"
            style={{ "--reveal-delay": `${Math.min(index, 3) * 100}ms` } as React.CSSProperties}
          >
            <div className={`portfolio-card__media media-variant-${item.id}`} aria-hidden="true">
              <span className="portfolio-card__index">0{item.id}</span>
              <span className="portfolio-card__shape" />
              <span className="portfolio-card__media-label">SHORT FORM</span>
            </div>
            <div className="portfolio-card__body">
              <div className="portfolio-card__meta">
                <span>{item.category}</span>
                <strong><AnimatedNumber value={item.result} duration={1200} /></strong>
              </div>
              <h3>{item.title}</h3>
              <ul aria-label="적용 전략">
                {item.strategy.map((strategy) => (
                  <li key={strategy}>{strategy}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <button
        className="portfolio-more"
        type="button"
        aria-expanded={expanded}
        aria-controls="portfolio-list"
        onClick={() => {
          setExpanded((current) => !current);
          if (!expanded) trackEvent("portfolio_open");
        }}
      >
        {expanded ? "접기" : "프로젝트 더 보기"}
        {expanded ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
      </button>
    </>
  );
}
