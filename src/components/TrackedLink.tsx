"use client";

import { ReactNode } from "react";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  eventName: AnalyticsEvent;
  children: ReactNode;
  className?: string;
  focusContact?: boolean;
};

export function TrackedLink({ href, eventName, children, className, focusContact }: TrackedLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName);
    if (!focusContact) return;

    event.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      document.querySelector<HTMLInputElement>("#brand-link")?.focus({ preventScroll: true });
    }, 700);
  };

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
