import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Image } from "lucide-react";
import { useTranslation } from 'react-i18next';

const AltText = () => {
  const { t } = useTranslation('altText');
  
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

        {/* Template Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('template.title')}</h2>
          
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary p-3">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{t('template.cardTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('template.cardText')}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">{t('template.exampleTitle')}</h4>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {t('template.exampleText')}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Image Type Guidelines */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('imageTypes.title')}</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{t('imageTypes.charts.title')}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t('imageTypes.charts.description')}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>{t('imageTypes.charts.list1')}</li>
                  <li>{t('imageTypes.charts.list2')}</li>
                  <li>{t('imageTypes.charts.list3')}</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{t('imageTypes.diagrams.title')}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t('imageTypes.diagrams.description')}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>{t('imageTypes.diagrams.list1')}</li>
                  <li>{t('imageTypes.diagrams.list2')}</li>
                  <li>{t('imageTypes.diagrams.list3')}</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{t('imageTypes.photos.title')}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t('imageTypes.photos.description')}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>{t('imageTypes.photos.list1')}</li>
                  <li>{t('imageTypes.photos.list2')}</li>
                  <li>{t('imageTypes.photos.list3')}</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Image className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{t('imageTypes.complex.title')}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t('imageTypes.complex.description')}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>{t('imageTypes.complex.list1')}</li>
                  <li>{t('imageTypes.complex.list2')}</li>
                  <li>{t('imageTypes.complex.list3')}</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* HTML/ARIA Implementation */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('htmlAria.title')}</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{t('htmlAria.basic.title')}</h3>
            <CodeBlock
              language="html"
              title={t('htmlAria.basic.codeTitle')}
              code={`<!-- 이미지에 대체 텍스트 적용 -->
<figure>
  <img src="chart.svg" 
       alt="2020-2024년 성장률 막대 그래프"
       aria-describedby="chart-desc">
  <figcaption>그림 1: 연간 성장률</figcaption>
  <div id="chart-desc" class="sr-only">
    막대 그래프는 연간 성장률 변화를 보여줍니다. 
    2020년 15%, 2021년 28%, 2022년 45%, 2023년 38%, 2024년 30%입니다.
  </div>
</figure>`}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{t('htmlAria.complex.title')}</h3>
            <CodeBlock
              language="html"
              title={t('htmlAria.complex.codeTitle')}
              code={`<!-- 복잡한 차트: 간단한 요약 + 상세 설명 -->
<figure role="group" aria-labelledby="chart-title">
  <h3 id="chart-title">분기별 매출 및 수익률 비교</h3>
  
  <img src="complex-chart.svg"
       alt="2개의 Y축을 가진 복합 차트. 막대는 매출액, 선은 수익률을 나타냄"
       aria-describedby="chart-summary chart-details">
  
  <!-- 간단한 요약 -->
  <div id="chart-summary" class="sr-only">
    4개 분기 동안 매출은 증가했으나 수익률은 감소하는 추세입니다.
  </div>
  
  <!-- 상세 데이터 -->
  <details>
    <summary>상세 데이터 보기</summary>
    <div id="chart-details">
      <table>
        <caption>분기별 매출 및 수익률 상세 데이터</caption>
        <thead>
          <tr>
            <th>분기</th>
            <th>매출액 (억원)</th>
            <th>수익률 (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Q1</td><td>120</td><td>25</td></tr>
          <tr><td>Q2</td><td>145</td><td>22</td></tr>
          <tr><td>Q3</td><td>168</td><td>19</td></tr>
          <tr><td>Q4</td><td>185</td><td>18</td></tr>
        </tbody>
      </table>
    </div>
  </details>
</figure>`}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{t('htmlAria.multiPanel.title')}</h3>
            <CodeBlock
              language="html"
              title={t('htmlAria.multiPanel.codeTitle')}
              code={`<!-- 다중 패널 이미지 설명 -->
<figure>
  <img src="multi-panel.svg"
       alt="3개 패널로 구성된 실험 결과"
       aria-describedby="panel-desc">
  <figcaption>그림 2: 온도별 반응 속도 변화</figcaption>
  
  <div id="panel-desc" class="sr-only">
    <p>패널 A: 25°C에서 선형 증가 패턴 (R² = 0.95)</p>
    <p>패널 B: 37°C에서 지수 증가 패턴 (R² = 0.89)</p>
    <p>패널 C: 50°C에서 포화 곡선 패턴 (최대값 도달)</p>
  </div>
</figure>`}
            />
          </div>
        </section>

        {/* LaTeX Implementation */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('latex.title')}</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {t('latex.description')}
            </p>
            
            <CodeBlock
              language="latex"
              title={t('latex.basic.codeTitle')}
              code={`% 접근성 패키지 포함
\\usepackage[tagged]{accessibility}

% 그림 접근성 매크로
\\newcommand{\\accessiblefigure}[4]{
  \\begin{figure}[ht]
    \\centering
    \\includegraphics[width=#1\\textwidth]{#2}
    \\caption{#3}
    \\label{fig:#2}
    \\Description{#4} % 대체 텍스트
  \\end{figure}
}

% 사용 예시
\\accessiblefigure{0.8}{results-chart}{실험 결과}{
  막대 그래프는 3개 조건에서의 평균 반응 시간을 보여줍니다.
  대조군 250ms, 조건A 180ms, 조건B 150ms로 
  조건B에서 가장 빠른 반응을 보였습니다.
}`}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{t('latex.detailed.title')}</h3>
            <CodeBlock
              language="latex"
              title={t('latex.detailed.codeTitle')}
              code={`\\begin{figure}[ht]
  \\centering
  \\includegraphics[width=\\textwidth]{complex-diagram}
  \\caption{시스템 아키텍처 다이어그램}
  \\label{fig:architecture}
  
  \\Description{
    계층형 시스템 아키텍처 다이어그램. 
    최상단에 프레젠테이션 레이어 (UI 컴포넌트 3개), 
    중간에 비즈니스 로직 레이어 (서비스 모듈 5개), 
    하단에 데이터 레이어 (데이터베이스 2개).
    화살표는 단방향 데이터 흐름을 나타냅니다.
  }
\\end{figure}`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('principles.title')}</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 border-primary/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{t('principles.do.title')}</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('principles.do.item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('principles.do.item2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('principles.do.item3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('principles.do.item4')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('principles.do.item5')}</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 border-destructive/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                  <h3 className="text-lg font-semibold text-foreground">{t('principles.dont.title')}</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>{t('principles.dont.item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>{t('principles.dont.item2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>{t('principles.dont.item3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>{t('principles.dont.item4')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>{t('principles.dont.item5')}</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* CSS for screen readers */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('cssTitle')}</h2>
          
          <CodeBlock
            language="css"
            title={t('cssCodeTitle')}
            code={`/* Screen reader only content (visually hidden) */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* 포커스 시 표시 (키보드 탐색 지원) */
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}`}
          />
        </section>
      </div>
    </Layout>
  );
};

export default AltText;
