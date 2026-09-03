# Haran Park

박하란 1인 퍼포먼스 숏폼 마케터를 위한 전환형 원페이지 랜딩 사이트입니다. 브랜드 담당자가 서비스의 차이, 성과, 작업 방식, 포트폴리오를 빠르게 이해하고 브랜드 링크로 문의를 시작하도록 설계했습니다.

## 실행 방법

```bash
npm install
npm run dev
```

기본 개발 주소는 `http://localhost:3000`입니다.

## 검증 명령

```bash
npm run lint
npm run typecheck
npm run build
```

## 주요 구조

```text
src/
├── app/                 # 페이지, 전역 스타일, SEO 이미지, sitemap, robots
├── components/          # 메뉴, 문의 폼, 포트폴리오, 모바일 CTA, 모션
├── content/site.ts      # 카피, 수치, 연락처, 공개 및 검증 상태
└── lib/analytics.ts     # 분석 이벤트 연결 지점
```

## 콘텐츠 수정

주요 카피, 수치, 연락처, 포트폴리오 데이터는 `src/content/site.ts`에서 관리합니다. 컴포넌트 내부에 핵심 데이터를 반복해서 넣지 않습니다.

전화번호는 `siteConfig.showPhone`이 `false`인 동안 공개 화면에 표시되지 않습니다. 공개가 확정된 뒤 `true`로 바꾸면 됩니다.

## 폰트 교체

현재 저장소에 정식 폰트 파일이 없어 한국어 시스템 폰트를 사용합니다. 정식 Paperlogy와 Pretendard 웹폰트 파일을 확보하면 `src/app/globals.css`의 `--font-display`, `--font-sans` 변수와 `@font-face` 선언만 교체하면 됩니다. 비공식 외부 CDN은 연결하지 않았습니다.

## 포트폴리오 미디어 교체

현재 미디어는 실제 고객사 작업으로 오인되지 않는 타이포그래피 기반 플레이스홀더입니다.

1. 사용 허가된 이미지를 `public/portfolio/`에 추가합니다.
2. `src/content/site.ts`의 해당 항목 `media`에 경로를 입력합니다.
3. `mediaApproved`, `publishStatus`, `verificationStatus`를 실제 상태에 맞게 변경합니다.
4. `src/components/PortfolioGrid.tsx`에서 `media`가 있을 때 `next/image`를 렌더링하도록 연결합니다.

## 문의 폼 연결

현재 폼은 URL과 이메일을 브라우저에서 검증한 뒤, 입력 내용을 정리해 `8rineun.mkt@gmail.com`으로 보내는 사용자의 기본 메일 앱을 엽니다. 실제 발송 성공으로 표시하지 않습니다.

폼 백엔드를 연결할 때는 다음 원칙을 지킵니다.

- 비밀키는 서버 환경변수로만 관리합니다.
- `.env.example`의 `FORM_ENDPOINT`를 실제 서비스에 맞게 확장합니다.
- 로딩, 성공, 실패 상태는 실제 API 응답을 기준으로 표시합니다.
- 폼 값과 개인정보를 콘솔 또는 분석 도구에 기록하지 않습니다.
- 개인정보 수집 및 이용 안내와 스팸 방지 방식을 함께 준비합니다.

## Analytics 연결

`src/lib/analytics.ts`의 `trackEvent`가 모든 측정 이벤트의 단일 연결 지점입니다. 현재는 운영 환경에서 아무 것도 전송하지 않으며, 개발 환경에서 이벤트 이름만 확인합니다. 폼 입력값은 전달하지 않습니다.

준비된 이벤트:

- `header_cta_click`
- `hero_cta_click`
- `proof_cta_click`
- `portfolio_open`
- `email_click`
- `phone_click`
- `contact_submit`

## 환경변수

`.env.example`을 참고해 로컬 `.env.local` 또는 배포 환경에 설정합니다.

- `NEXT_PUBLIC_SITE_URL`: canonical, Open Graph, sitemap, robots에 사용할 실제 배포 주소
- `FORM_ENDPOINT`: 향후 서버 기반 문의 폼을 연결할 위치

실제 배포 도메인이 정해지기 전에는 임의 주소를 사용하지 않습니다.

## 배포 전 확인 체크리스트

- [ ] `30+ / 150+ / 30K+` 수치와 집계 기준 검증
- [ ] 익명 헤어케어 캠페인 성과 수치 및 공개 권한 확인
- [ ] 고객 의견 3건의 공개 동의 확인
- [ ] 포트폴리오 조회수와 실제 담당 범위 검증
- [ ] 각 포트폴리오의 Organic/Paid 구분 확인
- [ ] 프로젝트 이미지, 영상, 브랜드명, 로고 사용 권한 확인
- [ ] 공개할 경력 정보와 기간 확인
- [ ] 전화번호 공개 여부 최종 결정
- [ ] 실제 배포 도메인과 `NEXT_PUBLIC_SITE_URL` 설정
- [ ] 개인정보 수집 및 이용 안내 필요 여부 검토
- [ ] 정식 Paperlogy/Pretendard 웹폰트 사용 권한과 파일 준비

검증되지 않은 경력 후보는 `src/content/site.ts`의 `draftCareerItems`에 숨김 상태로만 보관하며 공개 화면에는 렌더링하지 않습니다.
