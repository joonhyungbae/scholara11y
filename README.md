# Scholara11y

**Scholar + Accessibility = Scholara11y**

A web application proposing accessibility standards for academic publishing data visualization. Scholara11y is designed to ensure that visually impaired individuals, colorblind people, and all users can equally access academic content.

학술 출판 데이터 시각화의 접근성 표준을 제안하는 웹 애플리케이션입니다. Scholara11y는 시각장애인, 색각이상자, 그리고 모든 사용자가 학술 콘텐츠를 동등하게 접근할 수 있도록 설계되었습니다.

## 🎯 Project Goals

The 2025 Proposed Standard revolutionizes accessibility in data visualization for academic publishing:

Proposed Standard 2025 혁신적으로 학술 출판에서 데이터 시각화의 접근성을 향상시킵니다:

- **Okabe-Ito Colorblind-Safe Palette** implementation / **Okabe-Ito 색각 이상 안전 팔레트** 적용
- **WCAG 2.2 Level AA** compliance / **WCAG 2.2 Level AA** 준수
- **Dual Encoding** (color + patterns/textures) / **이중 인코딩** (색상 + 패턴/텍스처)
- **Screen Reader Support** with metadata embedding / **스크린 리더 지원**을 위한 메타데이터 임베딩
- **Vector-First Approach** (SVG/PDF output) / **벡터 우선** 접근법 (SVG/PDF 출력)

## ✨ Key Features

### 📊 Proposed Standard 2025
Standard implementation for accessible data visualization:
표준 구현체로 접근성 데이터 시각화를 제공합니다:

- **Python Library**: matplotlib-based implementation / **Python 라이브러리**: matplotlib 기반 구현
- **Okabe-Ito Palette**: 8 colorblind-safe colors / **Okabe-Ito 팔레트**: 8가지 색각 이상 안전 색상
- **WCAG 2.2 Compliant**: 4.5:1+ contrast ratios / **WCAG 2.2 준수**: 4.5:1 이상의 명암비
- **Dual Encoding**: Color + pattern combinations / **듀얼 인코딩**: 색상과 패턴의 조합
- **Accessibility Metadata**: Screen reader support / **접근성 메타데이터**: 스크린 리더 지원

### 📋 PDF Accessibility Checklist
Automated tool for checking PDF document accessibility compliance:
PDF 문서의 접근성 준수를 위한 자동화된 검사 도구:

- **Automated Checks**: Based on WCAG 2.2 and PDF/UA standards / **자동화된 검사**: WCAG 2.2 및 PDF/UA 표준 기반
- **Real-time Feedback**: Issues and improvement suggestions / **실시간 피드백**: 문제점과 개선 방안 제시
- **Multilingual Support**: English/Korean check results / **다국어 지원**: 영어/한국어 검사 결과

### 💻 Code Library
Collection of practical implementation examples and templates:
실제 구현 예제와 템플릿 모음:

- **Python/matplotlib**: Data visualization examples / **Python/matplotlib**: 데이터 시각화 예제
- **JavaScript/D3**: Web-based chart implementations / **JavaScript/D3**: 웹 기반 차트 구현
- **R/ggplot2**: Statistical graph implementations / **R/ggplot2**: 통계 그래프 구현
- **Real-world Cases**: Academic paper examples / **실무 적용 사례**: 학술 논문 예제

### 🎨 Interactive Color Palette
Experience the Okabe-Ito color palette in real-time:
Okabe-Ito 색상 팔레트를 실시간으로 체험:

- **Color Contrast Checker**: Automatic contrast ratio calculation / **색상 대비 검사**: 자동 명암비 계산
- **Accessibility Verification**: Colorblindness simulation / **접근성 검증**: 색각 이상 시뮬레이션
- **Code Generation**: Export in various formats / **코드 생성**: 다양한 포맷으로 내보내기

### 📖 Typography Guidelines
Accessibility-focused typography guidelines:
접근성 중심 타이포그래피 가이드:

- **Atkinson Hyperlegible**: Optimized readability font / **Atkinson Hyperlegible**: 가독성 최적화 폰트
- **Size & Spacing**: WCAG recommendations compliance / **크기 및 간격**: WCAG 권장 사항 준수
- **Dark Mode Support**: Low-light environment consideration / **다크 모드 지원**: 저조도 환경 고려

## 🌐 Multilingual Support

Scholara11y provides a complete multilingual environment:
Scholara11y는 완전한 다국어 환경을 제공합니다:

- **English/Korean** full support / **영어/한국어** 완전 지원
- **Automatic Language Detection**: Based on browser settings / **자동 언어 감지**: 브라우저 설정 기반
- **All Content** provided in dual languages / **모든 콘텐츠** 이중 언어 제공
- **Real-time Language Switching** available / **실시간 언어 전환** 가능

## Getting Started

This project requires Node.js & npm to be installed. [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory:
```sh
cd <YOUR_PROJECT_NAME>
```

3. Install the necessary dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

### Python Library Usage

Install and try Scholara11y's Python library:
Scholara11y의 Python 라이브러리를 설치하고 사용해보세요:

```bash
# Download the library / 라이브러리 다운로드
curl -O https://your-domain.com/proposed_standard_2025.py

# Or use directly / 또는 직접 복사하여 사용
pip install matplotlib numpy
```

```python
from proposed_standard_2025 import ProposedStandard2025

# Create standard instance / 표준 인스턴스 생성
gs = ProposedStandard2025()

# Create accessible chart / 접근성 차트 생성
data = [23.5, 45.2, 67.8, 34.1, 89.3, 12.6]
gs.create_accessible_chart(
    data,
    'Research Results',  # English title / 영어 제목
    'Bar chart showing research results'  # alt text / 대체 텍스트
)
```

### Explore the Web Application

Once the development server is running, experience these features:
개발 서버가 실행되면 다음 기능들을 체험해보세요:

- **Color Palette Tool**: Real-time Okabe-Ito color testing / **색상 팔레트 도구**: Okabe-Ito 색상 실시간 테스트
- **PDF Checker**: Analyze existing PDF document accessibility / **PDF 검사기**: 기존 PDF 문서 접근성 분석
- **Code Examples**: Implementation cases in various programming languages / **코드 예제**: 다양한 프로그래밍 언어 구현 사례
- **Standard Guidelines**: Comprehensive accessibility guidelines / **표준 가이드**: 포괄적인 접근성 지침

## Design System

This project uses a comprehensive design system built on Tailwind CSS and shadcn/ui for consistent user experience.

### Color System

Scholara11y implements an accessibility-focused color system:
Scholara11y는 접근성 중심의 색상 시스템을 구현합니다:

#### Okabe-Ito Colorblind-Safe Palette
```css
/* Main color definitions / 주요 색상 정의 */
--okabe-black: #000000;
--okabe-orange: #E69F00;
--okabe-skyblue: #56B4E9;
--okabe-bluishgreen: #009E73;
--okabe-yellow: #F0E442;
--okabe-blue: #0072B2;
--okabe-vermillion: #D55E00;
--okabe-reddishpurple: #CC79A7;
```

**Color Selection Criteria:**
- **Colorblind Safe**: Considers deuteranopia, protanopia, tritanopia / **색각 이상 안전**: deuteranopia, protanopia, tritanopia 고려
- **Contrast Compliant**: WCAG 2.2 AA standard (4.5:1+) / **명암비 준수**: WCAG 2.2 AA 기준 (4.5:1 이상)
- **Print Safe**: Distinguishable in black & white printing / **인쇄 안전**: 흑백 인쇄 시 구분 가능

#### Design Tokens
- **Primary Colors**: Blue tones (#0072B2, #56B4E9) / **Primary Colors**: 파란색 계열 (#0072B2, #56B4E9)
- **Semantic Colors**: Green (success), Red (error), Yellow (warning) / **Semantic Colors**: 녹색(성공), 적색(오류), 노란색(경고)
- **Neutral Colors**: Gray tones for text and backgrounds / **Neutral Colors**: 회색 계열 텍스트 및 배경
- **Dark Mode**: Automatic dark theme for all colors / **Dark Mode**: 모든 색상 자동 어두운 테마 지원

### Typography

Accessibility-optimized typography system:
접근성 최적화된 타이포그래피 시스템:

#### Atkinson Hyperlegible Font
Scholara11y uses special fonts for people with reading difficulties:
Scholara11y는 읽기 어려움을 겪는 사람들을 위한 특수 폰트를 사용합니다:

- **Enhanced Readability**: Solves problems with existing fonts / **개선된 가독성**: 기존 폰트의 문제점 해결
- **Cognitive Accessibility**: Supports dyslexia and visual processing disorders / **인지적 접근성**: 난독증 및 시각처리 장애 지원
- **Universal Design**: Typography that benefits all users / **범용 디자인**: 모든 사용자에게 이로운 타이포그래피

#### Typography Scale
```css
/* Consistent hierarchy / 일관된 계층 구조 */
--text-5xl: 3rem;    /* Page title / 페이지 제목 */
--text-2xl: 1.5rem;  /* Section title / 섹션 제목 */
--text-base: 1rem;   /* Body text (minimum 16px) / 본문 (최소 16px) */
--text-sm: 0.875rem; /* Secondary text / 보조 텍스트 */
```

#### Accessibility Considerations
- **Minimum Font Size**: 16px (WCAG AA standard) / **최소 글자 크기**: 16px (WCAG AA 기준)
- **Line Height**: 1.5x for body, 1.2x for headings / **행간**: 본문 1.5배, 제목 1.2배
- **Letter Spacing**: Appropriate spacing for improved readability / **글자 간격**: 가독성 향상을 위한 적절한 자간
- **Contrast Ratio**: All text maintains 4.5:1+ contrast / **명암비**: 모든 텍스트 4.5:1 이상 유지

### Spacing

- **Scale**: Uses Tailwind's spacing scale (space-y-12, space-y-6, etc.)
- **Consistent Layout**: 2rem container padding, responsive margins

### Components

#### Layout Components
- `Layout`: Main layout with sidebar navigation / `Layout`: 사이드바 내비게이션이 포함된 메인 레이아웃
- `PageHeader`: Consistent page headers (title + subtitle) / `PageHeader`: 일관된 페이지 헤더 (제목 + 부제)
- `PageSection`: Reusable section wrapper / `PageSection`: 재사용 가능한 섹션 래퍼

#### UI Components
- **shadcn/ui Based**: Accessibility-first component library / **shadcn/ui 기반**: 접근성 우선 컴포넌트 라이브러리
- **Keyboard Navigation**: All interactions keyboard accessible / **키보드 내비게이션**: 모든 인터랙션 키보드 지원
- **Screen Reader Support**: ARIA attributes and semantic markup / **스크린 리더 지원**: ARIA 속성 및 의미론적 마크업
- **Responsive Design**: Mobile and desktop optimization / **반응형 디자인**: 모바일 및 데스크톱 최적화

#### Accessibility-Specific Components
- `CodeBlock`: Syntax highlighting and copy functionality / `CodeBlock`: 구문 강조 및 복사 기능
- `ColorPalette`: Real-time color contrast checking / `ColorPalette`: 색상 대비 실시간 검사
- `AccessibilityChecker`: Automated accessibility validation / `AccessibilityChecker`: 자동화된 접근성 검증

### Usage Guidelines

#### Using Okabe-Ito Palette
```python
from proposed_standard_2025 import ProposedStandard2025

# Use Okabe-Ito colors / Okabe-Ito 색상 사용
gs = ProposedStandard2025()
colors = gs.COLORS  # ['#000000', '#E69F00', '#56B4E9', ...]

# Check color contrast / 색상 대비 확인
contrast_ratio = gs.check_contrast('#000000', '#FFFFFF')  # 21:1
```

#### CSS Color Variables Usage
```css
/* Use design tokens / 디자인 토큰 활용 */
.chart-element {
  color: hsl(var(--okabe-blue));
  background: hsl(var(--okabe-skyblue));
}

/* Responsive colors / 반응형 색상 */
@media (prefers-color-scheme: dark) {
  .chart-element {
    color: hsl(var(--okabe-yellow));
  }
}
```

#### Typography
```jsx
// Consistent heading hierarchy / 일관된 제목 계층 구조
<h1 className="text-5xl font-bold tracking-tight text-foreground">
  Page Title  {/* English / 영어 */}
</h1>
<h2 className="text-2xl font-bold text-foreground">
  Section Title  {/* English / 영어 */}
</h2>
<p className="text-base text-muted-foreground">
  Body text  {/* English / 영어 */}
</p>
```

#### Accessibility-Focused Spacing System
```jsx
// Consistent spacing patterns (accessibility considered)
// 일관된 간격 패턴 (접근성 고려)
<div className="space-y-12"> {/* Major sections (48px) / 주요 섹션 (48px) */}
  <div className="space-y-6"> {/* Subsections (24px) / 하위 섹션 (24px) */}
    <div className="space-y-4"> {/* Content blocks (16px) / 콘텐츠 블록 (16px) */}</div>
  </div>
</div>
```

#### React Component Accessibility Patterns
```jsx
// Accessibility-first components / 접근성 우선 컴포넌트
import { Button } from "@/components/ui/button";

<Button
  aria-label="Download chart data"  // English label / 영어 라벨
  onClick={handleDownload}
>
  <DownloadIcon aria-hidden="true" />
  Download  {/* English text / 영어 텍스트 */}
</Button>
```

## 🛠️ Technologies Used

Scholara11y is built with modern web technologies and accessibility standards:
Scholara11y는 최신 웹 기술과 접근성 표준을 기반으로 구축되었습니다:

### Frontend Stack
- **Vite** - High-performance build tool and dev server / **Vite** - 고성능 빌드 도구 및 개발 서버
- **TypeScript** - Type safety assurance / **TypeScript** - 타입 안전성 보장
- **React 18** - Component-based UI library / **React 18** - 컴포넌트 기반 UI 라이브러리
- **shadcn/ui** - Accessibility-first component system / **shadcn/ui** - 접근성 우선 컴포넌트 시스템
- **Tailwind CSS** - Utility-first CSS framework / **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **React Router** - Client-side routing / **React Router** - 클라이언트 사이드 라우팅

### Accessibility & Internationalization
- **React i18next** - Complete multilingual support (English/Korean) / **React i18next** - 완전한 다국어 지원 (영어/한국어)
- **React Helmet Async** - SEO and metadata management / **React Helmet Async** - SEO 및 메타데이터 관리
- **WCAG 2.2 AA** - Web accessibility standard compliance / **WCAG 2.2 AA** - 웹 접근성 표준 준수

### Data Visualization
- **Recharts** - React-based charting library / **Recharts** - React 기반 차트 라이브러리
- **Matplotlib** - Python data visualization (backend) / **Matplotlib** - Python 데이터 시각화 (백엔드)
- **Okabe-Ito Palette** - Colorblind-safe color system / **Okabe-Ito 팔레트** - 색각 이상 안전 색상 시스템

### Development Tools
- **ESLint** - Code quality management / **ESLint** - 코드 품질 관리
- **PostCSS** - CSS processing and optimization / **PostCSS** - CSS 처리 및 최적화
- **GitHub Pages** - Static site deployment / **GitHub Pages** - 정적 사이트 배포

## 📜 Available Scripts

### Development & Build
- `npm run dev` - Start development server (http://localhost:5173) / `npm run dev` - 개발 서버 시작 (http://localhost:5173)
- `npm run build` - Generate production build / `npm run build` - 프로덕션 빌드 생성
- `npm run build:dev` - Generate development build / `npm run build:dev` - 개발용 빌드 생성
- `npm run preview` - Preview production build / `npm run preview` - 프로덕션 빌드 미리보기

### Quality Management & Deployment
- `npm run lint` - ESLint code quality check / `npm run lint` - ESLint 코드 품질 검사
- `npm run deploy` - Automatic GitHub Pages deployment / `npm run deploy` - GitHub Pages 자동 배포

### Additional Scripts
- `npm run predeploy` - Automatic build before deployment / `npm run predeploy` - 배포 전 빌드 자동 실행

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:
이 프로젝트는 GitHub Pages 배포용으로 구성되었습니다:

1. Create a new GitHub repository / 새 GitHub 저장소 생성
2. Push your code to the repository / 코드를 저장소에 푸시
3. Go to repository Settings > Pages / 저장소 Settings > Pages 이동
4. Set source to "Deploy from a branch" / Source를 "Deploy from a branch"로 설정
5. Set branch to "gh-pages" (created automatically) / Branch를 "gh-pages"로 설정 (자동 생성)
6. Run the deploy command: / 배포 명령 실행:

```sh
npm run deploy
```

**Note**: If your repository name differs from "scholara11y", update the `base` path in `vite.config.ts`:
**참고**: 저장소 이름이 "scholara11y"와 다르면 `vite.config.ts`의 `base` 경로를 업데이트하세요:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

### Custom Domain Setup

For custom domain deployment (e.g., scholara11y.com):
커스텀 도메인 배포를 위해 (예: scholara11y.com):

1. **DNS Settings**: Configure your domain's DNS records: / **DNS 설정**: 도메인의 DNS 레코드 구성:
   - **Type**: CNAME / **Type**: CNAME
   - **Name**: `www` (or `@` for apex domain) / **Name**: `www` (또는 apex 도메인을 위한 `@`)
   - **Value**: `your-username.github.io` / **Value**: `your-username.github.io`
   - **TTL**: 3600 (or default) / **TTL**: 3600 (또는 기본값)

   Or for apex domain: / 또는 apex 도메인을 위해:
   - **Type**: A / **Type**: A
   - **Name**: `@` / **Name**: `@`
   - **Values**: / **Values**:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

2. **GitHub Repository Settings**: / **GitHub 저장소 설정**:
   - Go to repository Settings → Pages / 저장소 Settings → Pages 이동
   - Set source to "Deploy from a branch" / Source를 "Deploy from a branch"로 설정
   - Set branch to "gh-pages" / Branch를 "gh-pages"로 설정
   - **Custom domain**: Enter your domain name / **Custom domain**: 도메인 이름 입력
   - Enable "Enforce HTTPS" / "Enforce HTTPS" 활성화

## 🤝 Contributing

Scholara11y welcomes your contributions as an open-source project!
Scholara11y는 오픈소스 프로젝트로서 여러분의 기여를 환영합니다!

### Development Participation
1. **Fork** and set up local development environment / **Fork**하고 로컬에서 개발 환경 설정
2. **Create feature branch**: `git checkout -b feature/your-feature` / **기능 브랜치** 생성: `git checkout -b feature/your-feature`
3. **Commit changes**: `git commit -m "Add: new feature description"` / **변경사항 커밋**: `git commit -m "Add: 새로운 기능 설명"`
4. **Create Pull Request** with detailed description / **Pull Request** 생성 및 설명 작성

### Contribution Areas
- **Python Library**: Data visualization feature improvements / **Python 라이브러리**: 데이터 시각화 기능 개선
- **Web Interface**: UI/UX and accessibility enhancements / **웹 인터페이스**: UI/UX 및 접근성 향상
- **Multilingual Support**: Translation and localization / **다국어 지원**: 번역 및 현지화
- **Documentation**: Tutorial and guide writing / **문서화**: 튜토리얼 및 가이드 작성
- **Testing**: Accessibility and functionality testing / **테스트**: 접근성 및 기능 테스트

### Coding Standards
- **ESLint**: Automated code quality checks / **ESLint**: 코드 품질 자동 검사
- **TypeScript**: Type safety assurance / **TypeScript**: 타입 안전성 보장
- **Accessibility First**: All changes must comply with WCAG 2.2 / **접근성 우선**: 모든 변경사항 WCAG 2.2 준수
- **Multilingual Support**: Add text in both English and Korean / **다국어 지원**: 새로운 텍스트는 영어/한국어 모두 추가

## 📄 License

This project is distributed under the **MIT License**.
이 프로젝트는 **MIT License** 하에 배포됩니다.

For details, please refer to the [LICENSE](LICENSE) file.
자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📚 Additional Resources

### Related Standards & Guidelines
### 관련 표준 및 가이드라인
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [PDF/UA Standard](https://www.pdfa.org/pdfua/)
- [Okabe-Ito Color Palette](https://jfly.uni-koeln.de/color/)

### Academic References
### 학술 자료
- **"Color Universal Design"** - Okabe & Ito (2008)
- **"The case for data visualization accessibility"** - Lundgard & Satyanarayan
- **"Accessible data visualization"** - IEEE VIS 2023

### Community
### 커뮤니티
- [GitHub Issues](https://github.com/your-repo/issues) - Bug reports and feature requests / 버그 리포트 및 기능 요청
- [Discussions](https://github.com/your-repo/discussions) - General discussion and Q&A / 일반 토론 및 Q&A

---

**Scholara11y** - An open standard for academic publishing accessibility ✨
**Scholara11y** - 학술 출판의 접근성을 위한 열린 표준 ✨
