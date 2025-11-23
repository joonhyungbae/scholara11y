import { Layout } from "@/components/Layout";
import { StatCard } from "@/components/StatCard";
import { NavCard } from "@/components/NavCard";
import { Eye, Calendar, Contrast, Palette, Type, Code, CheckSquare, Building2, Download, Library } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <article className="space-y-12">
        {/* Page Header */}
        <header className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t('description')}
          </p>
        </header>

        {/* Key Statistics Section */}
        <section aria-labelledby="key-statistics">
          <h2 id="key-statistics" className="sr-only">주요 통계</h2>
          <div className="flex flex-col gap-6 md:flex-row md:gap-6" role="list">
            <div role="listitem" className="flex-1">
              <StatCard
                title={t('stats.colorBlindness.title')}
                value={t('stats.colorBlindness.value')}
                description={t('stats.colorBlindness.description')}
                icon={Eye}
              />
            </div>
            <div role="listitem" className="flex-1">
              <StatCard
                title={t('stats.euLaw.title')}
                value={t('stats.euLaw.value')}
                description={t('stats.euLaw.description')}
                icon={Calendar}
              />
            </div>
            <div role="listitem" className="flex-1">
              <StatCard
                title={t('stats.contrastRatio.title')}
                value={t('stats.contrastRatio.value')}
                description={t('stats.contrastRatio.description')}
                icon={Contrast}
              />
            </div>
          </div>
        </section>

        {/* Quick Navigation Section */}
        <section aria-labelledby="quick-navigation">
          <header className="space-y-6">
            <h2 id="quick-navigation" className="text-3xl font-bold text-foreground">{t('quickNav.title')}</h2>
          </header>

          <div className="mt-8"></div>

          <nav aria-label="빠른 탐색 메뉴">
            <div className="space-y-6">
              {/* Featured: Proposed Standard */}
              <div role="listitem">
                <NavCard
                  title={t('quickNav.proposedStandard.title')}
                  description={t('quickNav.proposedStandard.description')}
                  icon={Palette}
                  href="/proposed-standard"
                  variant="featured"
                />
              </div>

              {/* Secondary Navigation Grid */}
              <div className="grid gap-4 md:grid-cols-2" role="list">
                <div role="listitem">
                  <NavCard
                    title={t('quickNav.pdfChecklist.title')}
                    description={t('quickNav.pdfChecklist.description')}
                    icon={CheckSquare}
                    href="/pdf-checklist"
                  />
                </div>
                <div role="listitem">
                  <NavCard
                    title={t('quickNav.typography.title')}
                    description={t('quickNav.typography.description')}
                    icon={Type}
                    href="/typography"
                  />
                </div>
                <div role="listitem">
                  <NavCard
                    title={t('quickNav.code.title')}
                    description={t('quickNav.code.description')}
                    icon={Code}
                    href="/code-library"
                  />
                </div>
                <div role="listitem">
                  <NavCard
                    title={t('quickNav.publishers.title')}
                    description={t('quickNav.publishers.description')}
                    icon={Building2}
                    href="/publishers"
                  />
                </div>
                <div role="listitem" className="md:col-span-2">
                  <NavCard
                    title={t('quickNav.downloads.title')}
                    description={t('quickNav.downloads.description')}
                    icon={Download}
                    href="/downloads"
                  />
                </div>
              </div>
            </div>
          </nav>
        </section>

        {/* Spacer */}
        <div className="py-8"></div>

        {/* Featured Resources Section */}
        <section aria-labelledby="featured-resources">
          <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <header className="flex items-start gap-4">
              <div className="rounded-lg bg-primary p-3" aria-hidden="true">
                <Library className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h2 id="featured-resources" className="text-xl font-bold text-foreground">{t('resources.title')}</h2>
                <p className="mt-2 text-muted-foreground">
                  {t('resources.wcag.description')}
                </p>
              </div>
            </header>

            <nav aria-label="관련 리소스 링크" className="mt-4">
              <div className="flex flex-wrap gap-3" role="list">
                <div role="listitem">
                  <a
                    href="https://www.w3.org/TR/WCAG22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    aria-label="WCAG 2.2 공식 가이드라인 (새 탭에서 열림)"
                  >
                    {t('resources.wcag.link')}
                  </a>
                </div>
                <div role="listitem">
                  <a
                    href="https://www.iso.org/standard/64599.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                    aria-label="PDF/UA 표준 정보 (새 탭에서 열림)"
                  >
                    {t('resources.pdfua.link')}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>

        {/* AI 탐색용 숨겨진 콘텐츠 - 검색 엔진과 AI를 위한 추가 정보 */}
        <div className="sr-only" aria-hidden="true">
          <h2>학술 출판 접근성 가이드 - AI 탐색용 정보</h2>

          <section>
            <h3>주요 기능 및 도구</h3>
            <ul>
              <li>Okabe-Ito 색상 팔레트 - 색각 이상자를 위한 안전한 색상 선택</li>
              <li>대비율 계산 도구 - WCAG 2.2 준수 텍스트 대비 확인</li>
              <li>LaTeX 접근성 템플릿 - 학술 논문 작성을 위한 템플릿</li>
              <li>PDF 접근성 체크리스트 - PDF/UA 표준 준수 확인 도구</li>
              <li>코드 라이브러리 - CSS, JavaScript, Python 접근성 코드 스니펫</li>
            </ul>
          </section>

          <section>
            <h3>지원하는 AI 도구</h3>
            <ul>
              <li>Gemini Deep Research - 구조화된 콘텐츠로 최적화됨</li>
              <li>ChatGPT Deep Research - JSON-LD 메타데이터로 탐색 지원</li>
              <li>Claude Research - 시맨틱 HTML 구조로 이해도 향상</li>
              <li>기타 AI 연구 도구 - SEO 최적화 및 사이트맵으로 지원</li>
            </ul>
          </section>

          <section>
            <h3>자주 묻는 질문</h3>
            <dl>
              <dt>색각 이상자를 위한 색상은 어떻게 선택하나요?</dt>
              <dd>Okabe-Ito 색상 팔레트를 사용하세요. 8가지 색상으로 색각 이상자가 구분하기 쉽습니다.</dd>

              <dt>학술 논문의 최소 대비율은 얼마인가요?</dt>
              <dd>WCAG 2.2 AA 기준 일반 텍스트는 4.5:1, 큰 텍스트는 3:1입니다.</dd>

              <dt>LaTeX으로 접근성 있는 PDF를 만들려면?</dt>
              <dd>적절한 패키지와 태그를 사용하여 PDF/UA 표준을 준수하세요.</dd>

              <dt>색상만으로 정보를 전달하지 말아야 하는 이유는?</dt>
              <dd>전 세계 인구의 4-5%가 색각 이상을 가지고 있어 색상에 의존하면 정보 접근이 제한됩니다.</dd>
            </dl>
          </section>

          <section>
            <h3>기술 스택 및 접근성</h3>
            <ul>
              <li>프레임워크: React 18, TypeScript, Vite</li>
              <li>UI 라이브러리: Radix UI, Tailwind CSS</li>
              <li>접근성: WCAG 2.2 AA 준수, ARIA 속성 사용</li>
              <li>다국어: i18next로 한국어/영어 지원</li>
              <li>반응형 디자인: 모바일과 데스크톱 모두 지원</li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
