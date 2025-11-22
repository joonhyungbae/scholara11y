import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Publishers = () => {
  const { t } = useTranslation('publishers');
  
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

        {/* Comparison Table */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('comparison.title')}</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border bg-muted/50">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Item</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Elsevier</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Springer</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Wiley</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Taylor & Francis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">Color Palette</td>
                  <td className="py-4 px-4 text-muted-foreground">Okabe-Ito</td>
                  <td className="py-4 px-4 text-muted-foreground">Wong</td>
                  <td className="py-4 px-4 text-muted-foreground">ColorBrewer</td>
                  <td className="py-4 px-4 text-muted-foreground">Okabe-Ito</td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 font-semibold text-foreground">Minimum Text Size</td>
                  <td className="py-4 px-4 text-muted-foreground">8pt</td>
                  <td className="py-4 px-4 text-muted-foreground">8pt</td>
                  <td className="py-4 px-4 text-muted-foreground">8pt</td>
                  <td className="py-4 px-4 text-muted-foreground">6pt</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">그림 텍스트</td>
                  <td className="py-4 px-4 text-muted-foreground">8-12pt</td>
                  <td className="py-4 px-4 text-muted-foreground">8-12pt</td>
                  <td className="py-4 px-4 text-muted-foreground">8-11pt</td>
                  <td className="py-4 px-4 text-muted-foreground">8-12pt</td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 font-semibold text-foreground">그림 형식</td>
                  <td className="py-4 px-4 text-muted-foreground">EPS, PDF, AI</td>
                  <td className="py-4 px-4 text-muted-foreground">EPS, PDF</td>
                  <td className="py-4 px-4 text-muted-foreground">EPS, TIFF</td>
                  <td className="py-4 px-4 text-muted-foreground">EPS, PDF</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">해상도</td>
                  <td className="py-4 px-4 text-muted-foreground">300-1200 dpi</td>
                  <td className="py-4 px-4 text-muted-foreground">300-1000 dpi</td>
                  <td className="py-4 px-4 text-muted-foreground">300-1200 dpi</td>
                  <td className="py-4 px-4 text-muted-foreground">300-600 dpi</td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 font-semibold text-foreground">명도 대비</td>
                  <td className="py-4 px-4 text-muted-foreground">4.5:1 (AA)</td>
                  <td className="py-4 px-4 text-muted-foreground">4.5:1 (AA)</td>
                  <td className="py-4 px-4 text-muted-foreground">4.5:1 (AA)</td>
                  <td className="py-4 px-4 text-muted-foreground">4.5:1 (AA)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">PDF/UA 필수</td>
                  <td className="py-4 px-4 text-muted-foreground">2025.10부터</td>
                  <td className="py-4 px-4 text-muted-foreground">권장</td>
                  <td className="py-4 px-4 text-muted-foreground">권장</td>
                  <td className="py-4 px-4 text-muted-foreground">권장</td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 font-semibold text-foreground">AI 도구</td>
                  <td className="py-4 px-4 text-muted-foreground">Alt Text AI (2025)</td>
                  <td className="py-4 px-4 text-muted-foreground">Alt Text Assistant</td>
                  <td className="py-4 px-4 text-muted-foreground">-</td>
                  <td className="py-4 px-4 text-muted-foreground">개발 중</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Publisher Details */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground">{t('intro')}</h2>
          
          {/* Elsevier */}
          <Card className="p-8 border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground">Elsevier</h3>
                <a
                  href="https://www.elsevier.com/about/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  공식 가이드 <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">색상 요구사항</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>Okabe-Ito 팔레트 사용 권장</li>
                    <li>WCAG 2.2 AA 명도 대비 4.5:1 필수</li>
                    <li>그래픽 요소 대비 3:1 이상</li>
                    <li>색상만으로 정보 전달 금지</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">그림 준비</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>형식: EPS, PDF, AI (벡터 권장)</li>
                    <li>해상도: 300-1200 dpi</li>
                    <li>최소 텍스트: 8pt, 권장 10-12pt</li>
                    <li>글꼴: Arial, Helvetica 등 산세리프</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">2025년 주요 변경사항</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li><strong>2025.10:</strong> 모든 신규 논문 태그된 PDF 의무화</li>
                    <li><strong>2026.04:</strong> 전체 콘텐츠 WCAG 2.2 AA 준수</li>
                    <li><strong>Alt Text AI:</strong> 자동 대체 텍스트 생성 도구 제공</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">제출 전 체크리스트</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>모든 그림에 대체 텍스트 포함</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>색상 대비 4.5:1 이상 확인</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>표에 헤더 행/열 지정</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>PDF 메타데이터 완성</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Springer */}
          <Card className="p-8 border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground">Springer Nature</h3>
                <a
                  href="https://www.springernature.com/gp/info/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  공식 가이드 <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">색상 가이드라인</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>Bang Wong 색상 팔레트 권장</li>
                    <li>대비율 4.5:1 필수 (일반 텍스트)</li>
                    <li>이중 인코딩 (색상 + 패턴) 권장</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">그림 사양</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>형식: EPS, PDF (벡터 우선)</li>
                    <li>해상도: 300-1000 dpi</li>
                    <li>최소 텍스트: 8pt</li>
                    <li>선 두께: 최소 0.5pt</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">저자 지원 도구</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>Alt Text Assistant: 대체 텍스트 작성 가이드</li>
                    <li>Color Contrast Checker: 대비 검증 도구</li>
                    <li>LaTeX 템플릿: 접근성 최적화 템플릿 제공</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Wiley */}
          <Card className="p-8 border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground">Wiley</h3>
                <a
                  href="https://www.wiley.com/en-us/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  공식 가이드 <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">시각화 요구사항</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>ColorBrewer 팔레트 권장</li>
                    <li>명도 대비 4.5:1 (WCAG AA)</li>
                    <li>직접 라벨링 (데이터 포인트에 값 표시)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">그림 형식</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>형식: EPS, TIFF (고품질)</li>
                    <li>해상도: 300-1200 dpi</li>
                    <li>최소 텍스트: 8pt (Arial/Helvetica)</li>
                    <li>컬러 모드: RGB (온라인), CMYK (인쇄)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">접근성 정책</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>WCAG 2.2 Level AA 준수</li>
                    <li>PDF/UA 권장 (필수 아님)</li>
                    <li>대체 텍스트 모든 그림에 필수</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Taylor & Francis */}
          <Card className="p-8 border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground">Taylor & Francis</h3>
                <a
                  href="https://taylorandfrancis.com/about/corporate-responsibility/accessibility-at-taylor-francis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  공식 가이드 <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">색상 표준</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>Okabe-Ito 팔레트 사용</li>
                    <li>WCAG 2.2 AA 명도 대비</li>
                    <li>색상 + 패턴 이중 인코딩</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">그림 사양</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>형식: EPS, PDF</li>
                    <li>해상도: 300-600 dpi</li>
                    <li>최소 텍스트: 6pt (특별한 경우), 권장 8-12pt</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">향후 계획</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>AI 기반 접근성 도구 개발 중</li>
                    <li>PDF/UA 표준 점진적 도입</li>
                    <li>저자 교육 프로그램 확대</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* General Guidelines */}
        <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('tips.title')}</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>색상 대비 최소 4.5:1 (WCAG AA) 준수</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>모든 그림과 차트에 대체 텍스트 포함</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>색맹 안전 색상 팔레트 사용 (Okabe-Ito 등)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>이중 인코딩: 색상 + 패턴/선 스타일 병행</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>직접 라벨링으로 범례 의존도 감소</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>고해상도 벡터 형식 (EPS, PDF) 우선 사용</span>
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
};

export default Publishers;
