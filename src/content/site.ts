export type VerificationState = "verified" | "needs-review" | "draft";
export type PublishState = "published" | "placeholder" | "hidden";

export const siteConfig = {
  name: "HARAN PARK",
  role: "PERFORMANCE SHORT-FORM MARKETER",
  email: "8rineun.mkt@gmail.com",
  phone: "010-2723-0019",
  showPhone: false,
  navigation: [
    { label: "차이", href: "#difference" },
    { label: "성과", href: "#proof" },
    { label: "작업 방식", href: "#process" },
    { label: "포트폴리오", href: "#portfolio" },
    { label: "문의", href: "#contact" },
  ],
} as const;

export const hero = {
  eyebrow: "1인 퍼포먼스 숏폼 마케터 박하란",
  title: ["예쁜 영상에서 끝나지 않게,", "팔릴 이유까지", "설계합니다."],
  description:
    "브랜드·타깃·페인포인트를 먼저 분석하고, 후킹부터 CTA, 편집과 수정까지 한 사람이 끝까지 책임합니다.",
  primaryCta: "브랜드 링크 보내기",
  secondaryCta: "성과 사례 보기",
  positioning: "인하우스의 밀착감, 외부 파트너의 유연함.",
};

export const trustNumbers: Array<{
  value: string;
  label: string;
  status: VerificationState;
  verified: boolean;
  sourceNote: string;
}> = [
  {
    value: "30+",
    label: "협업 브랜드",
    status: "needs-review",
    verified: false,
    sourceNote: "제안서 기준. 공개 전 집계 범위 확인 필요.",
  },
  {
    value: "150+",
    label: "제작 숏폼",
    status: "needs-review",
    verified: false,
    sourceNote: "제안서 기준. 공개 전 집계 범위 확인 필요.",
  },
  {
    value: "30K+",
    label: "평균 조회수",
    status: "needs-review",
    verified: false,
    sourceNote: "제안서 기준. 플랫폼과 산정 기간 확인 필요.",
  },
];

export const difference = {
  title: "보기 좋은 영상과, 행동을 만드는 영상의 차이",
  passive: {
    kicker: "01 / LOOKS GOOD",
    title: "보이기에서 끝나는 콘텐츠",
    items: [
      "감각적인 장면과 모델 이미지가 중심",
      "제품 정보 전달에서 메시지가 끝남",
      "다음 행동이 불분명한 CTA",
      "높은 조회수가 구매로 이어지지 않을 수 있음",
    ],
  },
  active: {
    kicker: "02 / MOVES PEOPLE",
    title: "행동까지 설계한 콘텐츠",
    items: [
      "뾰족한 타깃의 고민에서 시작",
      "USP와 구매 이유를 순서대로 연결",
      "명확한 CTA와 소재 변형 방향",
      "전환 가능성을 높이도록 구조화",
    ],
  },
  closing: "감이 아니라, 왜 반응하고 왜 행동하는지 설명할 수 있는 구조로.",
};

export const featuredCase = {
  eyebrow: "FEATURED CASE / ANONYMOUS",
  title: "숫자가 달라진 데에는, 구조의 변화가 있었습니다.",
  project: "익명 헤어케어 브랜드 캠페인",
  period: "2024.03–2024.04",
  channels: "Meta Instagram Reels / Facebook",
  metrics: [
    { label: "CVR", before: "0.92%", after: "2.51%" },
    { label: "CPA", before: "12,800원", after: "6,250원" },
    { label: "ROAS", before: "1.45", after: "3.58" },
  ],
  improvements: [
    "타깃을 탈모 고민이 있는 직장인으로 재정의",
    "일상적인 공감 상황을 활용한 페인포인트 후킹",
    "USP 순서를 성분 → 효능·효과 → 신뢰 요소로 재구성",
    "혜택과 긴급성을 담은 CTA 강화",
    "소재 A/B 테스트 진행",
  ],
  disclaimer:
    "프로젝트 성과는 브랜드, 상품, 예산, 매체 환경과 집행 조건에 따라 달라질 수 있습니다.",
  status: "needs-review" as VerificationState,
  sourceNote: "성과 수치의 공개 권한과 원본 자료를 배포 전 확인해야 합니다.",
};

export const testimonials: Array<{
  quote: string;
  attribution: string;
  consentStatus: VerificationState;
}> = [
  {
    quote: "알아서 진행해주셔서 직원들의 업무가 많이 줄었습니다.",
    attribution: "브랜드 담당자 · 익명",
    consentStatus: "needs-review",
  },
  {
    quote: "영상 반응이 좋아 추가 소재 제작을 요청드렸어요.",
    attribution: "마케팅 담당자 · 익명",
    consentStatus: "needs-review",
  },
  {
    quote: "기획 고민이 생길 때마다 가장 먼저 찾게 될 것 같아요.",
    attribution: "브랜드 운영자 · 익명",
    consentStatus: "needs-review",
  },
];

export const whyHaran = {
  eyebrow: "WHY HARAN",
  title: "외주처럼 가볍게 시작하고, 인하우스처럼 깊게 이해합니다.",
  description:
    "전략과 커뮤니케이션은 박하란이 직접 맡고, 필요한 제작 리소스만 검증된 전문가와 연결합니다.",
  strengths: [
    {
      number: "01",
      label: "ONE POINT",
      description: "전략·기획·피드백이 한 사람을 통해 연결되는 단일 창구",
    },
    {
      number: "02",
      label: "IN-HOUSE LIKE",
      description: "브랜드 이해를 바탕으로 먼저 제안하고 진행 상황을 밀도 있게 공유",
    },
    {
      number: "03",
      label: "PERFORMANCE",
      description: "USP → Hook → CTA를 연결해 조회가 아니라 다음 행동을 목표로 설계",
    },
  ],
};

export const thinkingProcess = [
  { step: "01", label: "BRAND", detail: "USP, 경쟁사, 제품 강점 파악" },
  { step: "02", label: "TARGET", detail: "누가, 언제, 왜 필요한지 정의" },
  { step: "03", label: "PAIN POINT", detail: "실제 고객의 문제 발견" },
  { step: "04", label: "STRUCTURE", detail: "Hook → Bridge → Solution → CTA" },
  { step: "05", label: "CONVERSION", detail: "조회 → 관심 → 설득 → 행동 연결" },
];

export const productionProcess = [
  "USP 및 목표 분석",
  "타깃 설정",
  "기획안과 스크립트 작성",
  "1차 컨펌",
  "영상 제작, 컨펌 및 수정",
  "최종본 전달",
];

export const productionRoutes = [
  {
    label: "보유 영상 있음",
    description: "기존 장면을 분석·선별해 광고형 숏폼 소재로 재구성합니다.",
  },
  {
    label: "촬영 필요",
    description: "모델, 인플루언서, 촬영 리소스를 연결해 원본 영상부터 제작합니다.",
  },
];

export const portfolio: Array<{
  id: number;
  category: string;
  title: string;
  challenge: string;
  strategy: string[];
  role: string;
  trafficType: "unknown" | "organic" | "paid";
  result: string;
  media: string | null;
  mediaApproved: boolean;
  publishStatus: PublishState;
  verificationStatus: VerificationState;
  sourceNote: string;
}> = [
  {
    id: 1,
    category: "BEAUTY / MAKEUP",
    title: "메이크업 제품 숏폼",
    challenge: "",
    strategy: ["Pain Point Hook", "Conversion"],
    role: "담당 범위 확인 필요",
    trafficType: "unknown",
    result: "191.6만 조회",
    media: null,
    mediaApproved: false,
    publishStatus: "placeholder",
    verificationStatus: "needs-review",
    sourceNote: "실제 썸네일, 조회수 근거, 담당 범위 확인 필요.",
  },
  {
    id: 2,
    category: "BEAUTY / MAKEUP",
    title: "제품 USP 리뷰 숏폼",
    challenge: "",
    strategy: ["Review", "Product USP"],
    role: "담당 범위 확인 필요",
    trafficType: "unknown",
    result: "13.9만 조회",
    media: null,
    mediaApproved: false,
    publishStatus: "placeholder",
    verificationStatus: "needs-review",
    sourceNote: "실제 썸네일, 조회수 근거, 담당 범위 확인 필요.",
  },
  {
    id: 3,
    category: "FASHION",
    title: "타깃 스타일링 숏폼",
    challenge: "",
    strategy: ["타깃 재정의", "스타일링"],
    role: "담당 범위 확인 필요",
    trafficType: "unknown",
    result: "18.7만 조회",
    media: null,
    mediaApproved: false,
    publishStatus: "placeholder",
    verificationStatus: "needs-review",
    sourceNote: "실제 썸네일, 조회수 근거, 담당 범위 확인 필요.",
  },
  {
    id: 4,
    category: "FOOD",
    title: "문제 해결형 푸드 숏폼",
    challenge: "",
    strategy: ["Pain Point Hook", "문제 해결"],
    role: "담당 범위 확인 필요",
    trafficType: "unknown",
    result: "22.1만 조회",
    media: null,
    mediaApproved: false,
    publishStatus: "placeholder",
    verificationStatus: "needs-review",
    sourceNote: "실제 썸네일, 조회수 근거, 담당 범위 확인 필요.",
  },
  {
    id: 5,
    category: "LIFESTYLE",
    title: "사용 맥락 중심 숏폼",
    challenge: "",
    strategy: ["사용 맥락", "편의성"],
    role: "담당 범위 확인 필요",
    trafficType: "unknown",
    result: "16.4만 조회",
    media: null,
    mediaApproved: false,
    publishStatus: "placeholder",
    verificationStatus: "needs-review",
    sourceNote: "실제 썸네일, 조회수 근거, 담당 범위 확인 필요.",
  },
  {
    id: 6,
    category: "LIFESTYLE",
    title: "솔루션 제안형 숏폼",
    challenge: "",
    strategy: ["문제 제거", "솔루션 및 추천"],
    role: "담당 범위 확인 필요",
    trafficType: "unknown",
    result: "31.8만 조회",
    media: null,
    mediaApproved: false,
    publishStatus: "placeholder",
    verificationStatus: "needs-review",
    sourceNote: "실제 썸네일, 조회수 근거, 담당 범위 확인 필요.",
  },
];

export const contact = {
  eyebrow: "START WITH ONE LINK",
  title: "브랜드 링크 하나면, 첫 대화는 충분합니다.",
  description: ["브랜드 링크를 보내주시면, 기존 콘텐츠와 목표를 살펴보고 필요한 숏폼 방향과 개선 지점을 말씀드립니다."],
  closing: "한 번의 납품보다, 함께 개선하고 성장하는 파트너가 되겠습니다.",
};

export const draftCareerItems = [
  "마케팅 실행사 2년",
  "대행사 3년차",
  "외국계 뷰티기업 프로모션팀 경험",
  "뷰티 인플루언서 경험",
  "Wadiz 상세페이지 1위 관련 주장",
  "‘코덕’ 표현",
].map((label) => ({
  label,
  status: "draft" as VerificationState,
  publishStatus: "hidden" as PublishState,
  verified: false,
}));
