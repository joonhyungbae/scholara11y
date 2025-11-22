import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { ExternalLink, BookOpen, Wrench, GraduationCap, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';

const References = () => {
  const { t } = useTranslation('references');
  
  return (
    <Layout>
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Standards */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('standards.title')}</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{t('standards.wcag.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('standards.wcag.description')}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span className="font-medium">{t('standards.wcag.org')}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </Card>
            </a>

            <a
              href="https://www.iso.org/standard/64599.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">PDF/UA (ISO 14289-1)</h3>
                    <p className="text-muted-foreground">
                      PDF Universal Accessibility international standard.
                      Requirements and validation methods for creating accessible PDF documents.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span className="font-medium">ISO 표준</span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </Card>
            </a>

            <a
              href="https://www.w3.org/Math/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">MathML Accessibility</h3>
                    <p className="text-muted-foreground">
                      수학 표기법의 접근성 표준. 
                      스크린 리더가 읽을 수 있는 수식 작성 가이드.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span className="font-medium">W3C 권장사항</span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </Card>
            </a>

            <a
              href="https://www.w3.org/WAI/standards-guidelines/aria/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">ARIA Authoring Practices</h3>
                    <p className="text-muted-foreground">
                      웹 애플리케이션 접근성 향상을 위한 ARIA 속성 사용 가이드.
                      역할, 상태, 속성 패턴 모음.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span className="font-medium">WAI 가이드</span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </Card>
            </a>
          </div>
        </section>

        {/* Tools */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Wrench className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('tools.title')}</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://pac.pdf-accessibility.org/en"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">PAC 2024</h3>
                  <p className="text-sm text-muted-foreground">
                    무료 PDF 접근성 검사 도구. PDF/UA 표준 검증.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    다운로드
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://colororacle.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Color Oracle</h3>
                  <p className="text-sm text-muted-foreground">
                    실시간 색맹 시뮬레이터. 화면을 색맹 시점으로 확인.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    다운로드
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://www.deque.com/axe/devtools/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Axe DevTools</h3>
                  <p className="text-sm text-muted-foreground">
                    브라우저 확장 프로그램. 웹 페이지 접근성 자동 검사.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    다운로드
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://wave.webaim.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">WAVE</h3>
                  <p className="text-sm text-muted-foreground">
                    웹 접근성 평가 도구. 시각적 피드백 제공.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    사용하기
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://contrast-ratio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Contrast Ratio</h3>
                  <p className="text-sm text-muted-foreground">
                    색상 대비율 계산기. WCAG 준수 여부 즉시 확인.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    사용하기
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://www.nvaccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">NVDA</h3>
                  <p className="text-sm text-muted-foreground">
                    무료 오픈소스 스크린 리더. 실제 사용자 경험 테스트.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    다운로드
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('learning.title')}</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="http://diagramcenter.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">DIAGRAM Center</h3>
                    <p className="text-muted-foreground">
                      이미지와 시각 자료의 접근성 향상에 특화된 리소스 센터.
                      대체 텍스트 작성 가이드와 모범 사례.
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </Card>
            </a>

            <a
              href="https://webaim.org/training/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">WebAIM Training</h3>
                    <p className="text-muted-foreground">
                      웹 접근성 전문 교육 기관. 온라인 강좌, 워크샵, 
                      인증 프로그램 제공.
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </Card>
            </a>

            <a
              href="https://www.a11yproject.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">The A11y Project</h3>
                    <p className="text-muted-foreground">
                      커뮤니티 기반 접근성 리소스. 체크리스트, 가이드, 
                      실용적 팁 모음.
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </Card>
            </a>

            <a
              href="https://www.w3.org/WAI/tutorials/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">WAI Tutorials</h3>
                    <p className="text-muted-foreground">
                      W3C 공식 접근성 튜토리얼. 페이지 구조, 메뉴, 이미지, 
                      표, 폼 등 실전 가이드.
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </Card>
            </a>
          </div>
        </section>

        {/* Communities */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('organizations.title')}</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://www.w3.org/community/accessibility/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">W3C Accessibility Community</h3>
                  <p className="text-sm text-muted-foreground">
                    공식 W3C 접근성 커뮤니티 그룹
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    참여하기
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://www.reddit.com/r/accessibility/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">r/accessibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Reddit 접근성 커뮤니티
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    참여하기
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://a11y.coffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">a11y.coffee</h3>
                  <p className="text-sm text-muted-foreground">
                    접근성 뉴스레터 및 블로그
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    구독하기
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </section>

        {/* Academic Papers */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('research.title')}</h2>
          
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">주요 참고 논문</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-primary pl-4">
                  <p className="font-semibold text-foreground">
                    "Color Universal Design (CUD)" - Okabe & Ito (2008)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    색맹 안전 색상 팔레트 개발과 적용. 학술 출판에서 널리 사용되는 Okabe-Ito 팔레트의 원론.
                  </p>
                </li>
                <li className="border-l-2 border-primary pl-4">
                  <p className="font-semibold text-foreground">
                    "Accessible Data Visualization" - IEEE VIS (2021)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    데이터 시각화의 접근성 향상 방법. 다중 모달리티와 대체 표현 전략.
                  </p>
                </li>
                <li className="border-l-2 border-primary pl-4">
                  <p className="font-semibold text-foreground">
                    "Evaluating the Accessibility of Scientific Documents" - CHI (2022)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    학술 문서의 접근성 평가 프레임워크. PDF/UA 준수 현황과 개선 방향.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Additional Resources */}
        <Card className="p-6 bg-muted/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">추가 리소스</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground mb-2">유용한 블로그</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Inclusive Design 24 - 연례 온라인 컨퍼런스</li>
                <li>• Deque Blog - 접근성 기술 동향</li>
                <li>• Adrian Roselli - 실무 접근성 팁</li>
                <li>• Sara Soueidan - 프론트엔드 접근성</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">팟캐스트</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• A11y Rules - 접근성 규칙과 사례</li>
                <li>• Accessibility Craft - 실전 기법</li>
                <li>• EBU Access Cast - 유럽 방송 접근성</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default References;
