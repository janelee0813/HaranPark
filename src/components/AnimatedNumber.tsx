"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
};

type ParsedNumber = {
  prefix: string;
  amount: number;
  suffix: string;
  fractionDigits: number;
  useGrouping: boolean;
};

function parseNumber(value: string): ParsedNumber | null {
  const match = value.match(/^([^0-9-]*)(-?[\d,.]+)(.*)$/);
  if (!match) return null;

  const rawNumber = match[2];
  const amount = Number(rawNumber.replaceAll(",", ""));
  if (!Number.isFinite(amount)) return null;

  return {
    prefix: match[1],
    amount,
    suffix: match[3],
    fractionDigits: rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0,
    useGrouping: rawNumber.includes(","),
  };
}

function formatNumber(parsed: ParsedNumber, amount: number) {
  const formatted = new Intl.NumberFormat("ko-KR", {
    minimumFractionDigits: parsed.fractionDigits,
    maximumFractionDigits: parsed.fractionDigits,
    useGrouping: parsed.useGrouping,
  }).format(amount);

  return `${parsed.prefix}${formatted}${parsed.suffix}`;
}

export function AnimatedNumber({ value, duration = 1300, delay = 0, className }: AnimatedNumberProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseNumber(value), [value]);
  const [displayValue, setDisplayValue] = useState(() => (parsed ? formatNumber(parsed, 0) : value));

  useEffect(() => {
    if (!parsed) return;

    const element = elementRef.current;
    if (!element) return;

    let frameId = 0;
    let timerId = 0;
    let hasStarted = false;

    const showFinalValue = () => setDisplayValue(formatNumber(parsed, parsed.amount));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      frameId = window.requestAnimationFrame(showFinalValue);
      return () => window.cancelAnimationFrame(frameId);
    }

    const startAnimation = () => {
      if (hasStarted) return;
      hasStarted = true;

      timerId = window.setTimeout(() => {
        const startedAt = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(formatNumber(parsed, parsed.amount * easedProgress));

          if (progress < 1) {
            frameId = window.requestAnimationFrame(tick);
          } else {
            showFinalValue();
          }
        };

        frameId = window.requestAnimationFrame(tick);
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.clearTimeout(timerId);
      window.cancelAnimationFrame(frameId);
    };
  }, [delay, duration, parsed, value]);

  return (
    <span className={`animated-number${className ? ` ${className}` : ""}`} ref={elementRef} aria-label={value}>
      <span aria-hidden="true">{parsed ? displayValue : value}</span>
    </span>
  );
}
