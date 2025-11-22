import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const PdfChecklist = () => {
  const { t } = useTranslation('pdfChecklist');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

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

        {/* Interactive Checklist */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground">{t('intro')}</h2>
            <button
              onClick={() => setCheckedItems({})}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('preparation.title')}
            </button>
          </div>
          
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="title"
                  checked={checkedItems['title'] || false}
                  onCheckedChange={() => handleCheck('title')}
                />
                <label htmlFor="title" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">Document Title Setting:</strong> Enter a clear title in PDF properties
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="language"
                  checked={checkedItems['language'] || false}
                  onCheckedChange={() => handleCheck('language')}
                />
                <label htmlFor="language" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">Document Language Specification:</strong> Specify the primary language in document properties (e.g., ko-KR, en-US)
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="tags"
                  checked={checkedItems['tags'] || false}
                  onCheckedChange={() => handleCheck('tags')}
                />
                <label htmlFor="tags" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">Tag Structure Creation:</strong> Create logical structure tags (headings, paragraphs, lists, etc.)
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="reading-order"
                  checked={checkedItems['reading-order'] || false}
                  onCheckedChange={() => handleCheck('reading-order')}
                />
                <label htmlFor="reading-order" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">논리적 읽기 순서:</strong> 콘텐츠가 의미 있는 순서로 배열
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="alt-text"
                  checked={checkedItems['alt-text'] || false}
                  onCheckedChange={() => handleCheck('alt-text')}
                />
                <label htmlFor="alt-text" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">이미지 대체 텍스트:</strong> 모든 이미지와 그림에 설명 추가
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="table-headers"
                  checked={checkedItems['table-headers'] || false}
                  onCheckedChange={() => handleCheck('table-headers')}
                />
                <label htmlFor="table-headers" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">표 헤더 지정:</strong> 표의 행/열 헤더를 명확히 정의
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="font-embed"
                  checked={checkedItems['font-embed'] || false}
                  onCheckedChange={() => handleCheck('font-embed')}
                />
                <label htmlFor="font-embed" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">글꼴 임베딩:</strong> 모든 글꼴을 PDF에 포함
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="metadata"
                  checked={checkedItems['metadata'] || false}
                  onCheckedChange={() => handleCheck('metadata')}
                />
                <label htmlFor="metadata" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">메타데이터 완성:</strong> 저자, 주제, 키워드 등 입력
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="contrast"
                  checked={checkedItems['contrast'] || false}
                  onCheckedChange={() => handleCheck('contrast')}
                />
                <label htmlFor="contrast" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">색상 대비:</strong> 텍스트와 배경 대비 4.5:1 이상
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="bookmarks"
                  checked={checkedItems['bookmarks'] || false}
                  onCheckedChange={() => handleCheck('bookmarks')}
                />
                <label htmlFor="bookmarks" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">북마크 생성:</strong> 섹션 별 탐색을 위한 북마크 추가
                </label>
              </div>
            </div>
          </Card>
        </section>

        {/* LaTeX PDF/UA */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">LaTeX PDF/UA 설정</h2>
          
          <CodeBlock
            language="latex"
            title="pdfua_setup.tex"
            code={`% PDF/UA 준수 LaTeX 설정
\\documentclass[12pt]{article}
\\usepackage[a-2u]{pdfx}  % PDF/A-2u 표준
\\usepackage{fontspec}
\\usepackage[hidelinks]{hyperref}
\\usepackage[tagged]{accessibility}

% 문서 메타데이터
\\hypersetup{
    pdftitle={Research Article Title},
    pdfauthor={Author Name},
    pdfsubject={Subject Area},
    pdfkeywords={keyword1, keyword2, keyword3},
    pdflang={en-US},
    pdfstartview={FitH},
    pdfpagemode={UseOutlines}
}

% 압축 설정
\\pdfcompresslevel=9
\\pdfobjcompresslevel=3

% 폰트 설정 (임베딩)
\\setmainfont{Arial}
\\setsansfont{Helvetica}
\\setmonofont{Courier New}

\\begin{document}

% 구조화된 콘텐츠
\\section{Introduction}
\\label{sec:intro}

Content with proper structure and tagging...

\\subsection{Background}
More structured content...

% 접근성 높은 그림
\\begin{figure}[ht]
  \\centering
  \\includegraphics[width=0.8\\textwidth]{figure1}
  \\caption{Caption text}
  \\label{fig:example}
  \\Description{Detailed alternative text for screen readers}
\\end{figure}

% 접근성 높은 표
\\begin{table}[ht]
  \\centering
  \\caption{Sample data table}
  \\label{tab:example}
  \\begin{tabular}{lcc}
    \\hline
    \\textbf{Item} & \\textbf{Value 1} & \\textbf{Value 2} \\\\
    \\hline
    Row 1 & 10 & 20 \\\\
    Row 2 & 15 & 25 \\\\
    \\hline
  \\end{tabular}
\\end{table}

\\end{document}`}
          />
        </section>

        {/* Validation Tools */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">검증 도구</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">PAC 2024</h3>
                <p className="text-muted-foreground">
                  무료 PDF 접근성 검사 도구. PDF/UA 표준 준수 여부를 자동으로 확인합니다.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">검증 항목:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>태그 구조 검사</li>
                    <li>대체 텍스트 확인</li>
                    <li>읽기 순서 분석</li>
                    <li>메타데이터 검증</li>
                  </ul>
                </div>
                <a
                  href="https://pac.pdf-accessibility.org/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  PAC 다운로드
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Adobe Acrobat Pro</h3>
                <p className="text-muted-foreground">
                  전문가용 PDF 편집 및 접근성 검사 도구. 상세한 접근성 보고서를 제공합니다.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">주요 기능:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>자동 태그 생성</li>
                    <li>읽기 순서 편집</li>
                    <li>대체 텍스트 일괄 추가</li>
                    <li>접근성 전체 검사</li>
                  </ul>
                </div>
                <a
                  href="https://www.adobe.com/acrobat/how-to/create-accessible-pdf.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  접근성 가이드 보기
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">NVDA 스크린 리더</h3>
                <p className="text-muted-foreground">
                  무료 오픈소스 스크린 리더. PDF 문서의 실제 접근성을 테스트할 수 있습니다.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">테스트 방법:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>논리적 읽기 순서 확인</li>
                    <li>대체 텍스트 읽기 테스트</li>
                    <li>표 탐색 확인</li>
                    <li>링크 접근성 검증</li>
                  </ul>
                </div>
                <a
                  href="https://www.nvaccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  NVDA 다운로드
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">veraPDF</h3>
                <p className="text-muted-foreground">
                  PDF/A 표준 검증 도구. 장기 보존용 PDF 형식을 확인합니다.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">검증 범위:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>PDF/A-2u 준수 확인</li>
                    <li>글꼴 임베딩 검사</li>
                    <li>색상 프로파일 확인</li>
                    <li>메타데이터 검증</li>
                  </ul>
                </div>
                <a
                  href="https://verapdf.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  veraPDF 다운로드
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* Step-by-step Guide */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Adobe Acrobat Pro 접근성 검사 단계</h2>
          
          <Card className="p-6">
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">1.</span>
                <div>
                  <strong className="text-foreground">도구 열기:</strong> 도구 → 접근성 → 전체 검사
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">2.</span>
                <div>
                  <strong className="text-foreground">옵션 선택:</strong> 보고서 및 주석 만들기 체크
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">3.</span>
                <div>
                  <strong className="text-foreground">검사 실행:</strong> 시작 버튼 클릭
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">4.</span>
                <div>
                  <strong className="text-foreground">문제 수정:</strong> 빨간색 표시된 항목을 우클릭하여 수정
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">5.</span>
                <div>
                  <strong className="text-foreground">재검사:</strong> 모든 항목이 통과할 때까지 반복
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">6.</span>
                <div>
                  <strong className="text-foreground">최종 확인:</strong> PAC 2024로 추가 검증
                </div>
              </li>
            </ol>
          </Card>
        </section>

        {/* Common Issues */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">자주 발생하는 문제와 해결책</h2>
          
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">태그 누락</h3>
              <p className="text-muted-foreground mb-2">
                <strong>문제:</strong> 문서에 태그 구조가 없음
              </p>
              <p className="text-muted-foreground">
                <strong>해결:</strong> Adobe Acrobat Pro에서 "자동 태그 추가" 실행 후 읽기 순서 확인
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">이미지 대체 텍스트 누락</h3>
              <p className="text-muted-foreground mb-2">
                <strong>문제:</strong> 그림에 alt 텍스트가 없음
              </p>
              <p className="text-muted-foreground">
                <strong>해결:</strong> 각 이미지를 우클릭 → 속성 → 대체 텍스트 입력
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">잘못된 읽기 순서</h3>
              <p className="text-muted-foreground mb-2">
                <strong>문제:</strong> 콘텐츠가 논리적 순서로 읽히지 않음
              </p>
              <p className="text-muted-foreground">
                <strong>해결:</strong> 도구 → 접근성 → 읽기 순서에서 순서 재정렬
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">색상 대비 부족</h3>
              <p className="text-muted-foreground mb-2">
                <strong>문제:</strong> 텍스트와 배경의 대비가 낮음
              </p>
              <p className="text-muted-foreground">
                <strong>해결:</strong> 원본 문서에서 색상 수정 후 PDF 재생성
              </p>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PdfChecklist;
