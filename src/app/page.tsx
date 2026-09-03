import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { RevealController } from "@/components/RevealController";
import { TrackedLink } from "@/components/TrackedLink";
import {
  contact,
  difference,
  featuredCase,
  hero,
  productionProcess,
  productionRoutes,
  siteConfig,
  testimonials,
  thinkingProcess,
  trustNumbers,
  whyHaran,
} from "@/content/site";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="후킹부터 행동 유도까지 이어지는 숏폼 구조를 표현한 그래픽">
      <div className="hero-visual__topline">
        <span>SHORTFORM / 9:16</span>
        <span>00:15</span>
      </div>
      <div className="hero-visual__frame">
        <div className="hero-visual__scene scene-one">
          <span>01</span>
          <strong>HOOK</strong>
          <p>멈춰 보게 만드는 첫 문장</p>
        </div>
        <div className="hero-visual__scene scene-two">
          <span>02</span>
          <strong>REASON</strong>
          <p>제품이 필요한 이유와 근거</p>
        </div>
        <div className="hero-visual__scene scene-three">
          <span>03</span>
          <strong>ACTION</strong>
          <p>다음 행동을 만드는 CTA</p>
        </div>
      </div>
      <div className="hero-visual__caption">
        <span>STRATEGY</span>
        <span>WRITING</span>
        <span>EDITING</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>
      <Header />
      <RevealController />

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-stripes" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="container hero__grid">
            <div className="hero__content" data-reveal>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>
                {hero.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className="hero__description">{hero.description}</p>
              <div className="hero__actions">
                <TrackedLink
                  className="button button--primary"
                  href="#contact"
                  eventName="hero_cta_click"
                  focusContact
                >
                  {hero.primaryCta}
                  <ArrowUpRight aria-hidden="true" />
                </TrackedLink>
                <a className="button button--text" href="#proof">
                  {hero.secondaryCta}
                  <ArrowDown aria-hidden="true" />
                </a>
              </div>
              <p className="hero__positioning">{hero.positioning}</p>
            </div>
            <div className="hero__media" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
              <HeroVisual />
            </div>
          </div>
          <div className="container hero__footer" aria-hidden="true">
            <span>SCROLL TO EXPLORE</span>
            <span className="hero__footer-line" />
            <span>01 — 07</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="주요 작업 수치">
          <div className="container trust-strip__inner">
            <p>충분히 만들고, 계속 개선해왔습니다.</p>
            <dl>
              {trustNumbers.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section difference" id="difference">
          <div className="container">
            <div className="section-heading" data-reveal>
              <SectionLabel number="01">DIFFERENCE</SectionLabel>
              <h2>{difference.title}</h2>
            </div>

            <div className="difference-grid">
              {[difference.passive, difference.active].map((column, columnIndex) => (
                <article className={`difference-panel difference-panel--${columnIndex + 1}`} key={column.title} data-reveal>
                  <p>{column.kicker}</p>
                  <h3>{column.title}</h3>
                  <ol>
                    {column.items.map((item, index) => (
                      <li key={item}>
                        <span>0{index + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
            <p className="difference__closing" data-reveal>
              {difference.closing}
            </p>
          </div>
        </section>

        <section className="section proof" id="proof">
          <div className="container">
            <div className="proof__heading" data-reveal>
              <SectionLabel number="02">PROOF</SectionLabel>
              <p>{featuredCase.eyebrow}</p>
              <h2>{featuredCase.title}</h2>
              <div className="proof__meta">
                <strong>{featuredCase.project}</strong>
                <span>{featuredCase.period}</span>
                <span>{featuredCase.channels}</span>
              </div>
            </div>

            <div className="metrics" data-reveal>
              <div className="metrics__labels" aria-hidden="true">
                <span>BEFORE</span>
                <span>AFTER</span>
              </div>
              {featuredCase.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <p>{metric.label}</p>
                  <div>
                    <span>{metric.before}</span>
                    <ArrowRight aria-hidden="true" />
                    <strong>{metric.after}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="proof__details">
              <div className="proof__change" data-reveal>
                <p>WHAT CHANGED</p>
                <ol>
                  {featuredCase.improvements.map((item, index) => (
                    <li key={item}>
                      <span>0{index + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="proof__conclusion" data-reveal>
                <p>핵심은 영상 자체가 아니라,</p>
                <strong>제품의 가치를 타깃에게 맞게 연결해 행동으로 이어지게 만드는 것입니다.</strong>
                <TrackedLink
                  className="button button--cream"
                  href="#contact"
                  eventName="proof_cta_click"
                  focusContact
                >
                  내 브랜드 방향 문의하기
                  <ArrowUpRight aria-hidden="true" />
                </TrackedLink>
              </div>
            </div>
            <p className="proof__disclaimer">{featuredCase.disclaimer}</p>
          </div>
        </section>

        <section className="testimonials" aria-labelledby="testimonial-title">
          <div className="container">
            <div className="testimonials__heading" data-reveal>
              <p>CLIENT NOTES</p>
              <h2 id="testimonial-title">일이 줄고, 다음 소재가 이어졌습니다.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <figure key={item.quote} data-reveal style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}>
                  <blockquote>“{item.quote}”</blockquote>
                  <figcaption>{item.attribution}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section why" id="why-haran">
          <div className="container">
            <div className="why__intro" data-reveal>
              <SectionLabel number="03">{whyHaran.eyebrow}</SectionLabel>
              <h2>{whyHaran.title}</h2>
              <p>{whyHaran.description}</p>
            </div>
            <div className="strength-grid">
              {whyHaran.strengths.map((strength, index) => (
                <article key={strength.label} data-reveal style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}>
                  <span>{strength.number}</span>
                  <h3>{strength.label}</h3>
                  <p>{strength.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="container">
            <div className="section-heading process__heading" data-reveal>
              <SectionLabel number="04">HOW IT WORKS</SectionLabel>
              <h2>만드는 순서보다 먼저, 생각하는 순서를 설계합니다.</h2>
            </div>

            <div className="thinking-flow" data-reveal>
              {thinkingProcess.map((item) => (
                <article key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="production-layout">
              <div className="production-steps" data-reveal>
                <p className="subsection-label">ACTUAL PROCESS</p>
                <h3>실제 제작은 한 사람과 선명하게 진행됩니다.</h3>
                <ol>
                  {productionProcess.map((item, index) => (
                    <li key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="production-routes" data-reveal>
                <p className="subsection-label">TWO ROUTES</p>
                {productionRoutes.map((route, index) => (
                  <article key={route.label}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{route.label}</h3>
                      <p>{route.description}</p>
                    </div>
                  </article>
                ))}
                <p className="production-routes__note">
                  프로젝트 범위와 일정은 보유 자료, 촬영 여부, 제작 편수에 따라 협의합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section portfolio" id="portfolio">
          <div className="container">
            <div className="portfolio__heading" data-reveal>
              <SectionLabel number="05">PORTFOLIO</SectionLabel>
              <h2>카테고리는 달라도, 반응을 만드는 순서는 같습니다.</h2>
              <p>공개 승인된 작업 이미지는 같은 구조 안에서 바로 교체할 수 있도록 준비했습니다.</p>
            </div>
            <div id="portfolio-list">
              <PortfolioGrid />
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact__header" data-reveal>
              <SectionLabel number="06">{contact.eyebrow}</SectionLabel>
              <h2>{contact.title}</h2>
              <div>
                {contact.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="contact__layout">
              <ContactForm />
              <aside className="contact__aside" data-reveal>
                <p>DIRECT CONTACT</p>
                <TrackedLink href={`mailto:${siteConfig.email}`} eventName="email_click">
                  <Mail aria-hidden="true" />
                  {siteConfig.email}
                </TrackedLink>
                {siteConfig.showPhone && (
                  <TrackedLink href={`tel:${siteConfig.phone.replaceAll("-", "")}`} eventName="phone_click">
                    {siteConfig.phone}
                  </TrackedLink>
                )}
                <strong>{contact.closing}</strong>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a className="brand-mark brand-mark--footer" href="#top">
            <span>{siteConfig.name}</span>
            <small>{siteConfig.role}</small>
          </a>
          <div className="footer__links">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} HARAN PARK. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
      <MobileStickyCTA />
    </>
  );
}
