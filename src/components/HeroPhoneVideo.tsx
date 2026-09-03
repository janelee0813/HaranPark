"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const desktopQuery = "(min-width: 981px)";

export function HeroPhoneVideo() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopQuery);
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="hero-phone-video" aria-hidden="true">
      <video autoPlay loop muted playsInline preload="metadata">
        <source src="/videos/150-doraji-shortform.mp4" type="video/mp4" />
      </video>
      <span className="hero-phone-video__island" />
      <span className="hero-phone-video__like">
        <Heart aria-hidden="true" />
        <small>1.5K</small>
      </span>
    </div>
  );
}
