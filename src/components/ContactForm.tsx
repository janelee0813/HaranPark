"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

type FormErrors = Partial<Record<"brandLink" | "email", string>>;

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const brandLink = String(form.get("brandLink") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const name = String(form.get("name") ?? "").trim();
    const goal = String(form.get("goal") ?? "").trim();
    const productionType = String(form.get("productionType") ?? "선택 안 함");
    const nextErrors: FormErrors = {};

    if (!isValidUrl(brandLink)) {
      nextErrors.brandLink = "https://로 시작하는 브랜드 또는 제품 링크를 입력해주세요.";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "회신받을 이메일 주소를 확인해주세요.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setNotice("입력 내용을 확인해주세요.");
      return;
    }

    trackEvent("contact_submit");
    const subject = encodeURIComponent(`[숏폼 문의] ${name || "새 브랜드 문의"}`);
    const body = encodeURIComponent(
      [
        `브랜드·제품 링크: ${brandLink}`,
        `회신 이메일: ${email}`,
        `브랜드명·담당자명: ${name || "미입력"}`,
        `제작 조건: ${productionType}`,
        "",
        "목표 및 필요한 작업:",
        goal || "미입력",
      ].join("\n"),
    );
    setNotice("메일 앱이 열립니다. 내용을 확인한 뒤 직접 발송해주세요.");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" data-reveal="left" noValidate onSubmit={handleSubmit}>
      <div className="field field--full">
        <label htmlFor="brand-link">
          브랜드·제품·스토어 링크 <span>필수</span>
        </label>
        <input
          id="brand-link"
          name="brandLink"
          type="url"
          inputMode="url"
          placeholder="https://"
          aria-invalid={Boolean(errors.brandLink)}
          aria-describedby={errors.brandLink ? "brand-link-error" : undefined}
        />
        {errors.brandLink && (
          <p className="field-error" id="brand-link-error">
            {errors.brandLink}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">
          회신받을 이메일 <span>필수</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          placeholder="name@brand.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p className="field-error" id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="name">브랜드명 또는 담당자명</label>
        <input id="name" name="name" type="text" autoComplete="organization" placeholder="선택 입력" />
      </div>

      <fieldset className="field field--full production-choice">
        <legend>현재 제작 조건</legend>
        <label>
          <input type="radio" name="productionType" value="보유 영상 있음" />
          <span>보유 영상 있음</span>
        </label>
        <label>
          <input type="radio" name="productionType" value="촬영 필요" />
          <span>촬영 필요</span>
        </label>
      </fieldset>

      <div className="field field--full">
        <label htmlFor="goal">목표 및 필요한 작업</label>
        <textarea id="goal" name="goal" rows={4} placeholder="현재 고민이나 만들고 싶은 숏폼을 알려주세요." />
      </div>

      <div className="contact-form__footer">
        <p aria-live="polite">{notice}</p>
        <button type="submit">
          개선 방향 문의하기
          <ArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
