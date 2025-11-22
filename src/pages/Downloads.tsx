import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { Card } from "@/components/ui/card";
import { Download, FileCode, FileText } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Downloads = () => {
  const { t } = useTranslation('downloads');
  
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

        {/* Python Resources */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileCode className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('scripts.python.title')}</h2>
          </div>
          
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">requirements.txt</h3>
                <span className="text-sm text-muted-foreground">Python 의존성</span>
              </div>
              <p className="text-muted-foreground">
                접근성 준수 데이터 시각화에 필요한 Python 패키지 목록
              </p>
              <CodeBlock
                language="text"
                title="requirements.txt"
                code={`# 데이터 시각화
matplotlib==3.7.1
seaborn==0.12.2
plotly==5.14.1

# 데이터 처리
numpy==1.24.3
pandas==2.0.2

# 색맹 시뮬레이션
colorspacious==1.1.2

# 색상 팔레트
colorcet==3.0.1

# 이미지 처리
Pillow==10.0.0

# PDF 생성
reportlab==4.0.4`}
              />
              <div className="text-sm text-muted-foreground mt-4">
                <strong>설치 방법:</strong>
                <code className="block mt-2 p-3 bg-muted rounded">
                  pip install -r requirements.txt
                </code>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">matplotlibrc</h3>
                <span className="text-sm text-muted-foreground">matplotlib 설정</span>
              </div>
              <p className="text-muted-foreground">
                접근성 최적화된 matplotlib 기본 설정 파일
              </p>
              <CodeBlock
                language="ini"
                title="matplotlibrc"
                code={`# 접근성 최적화 matplotlib 설정

# 폰트 설정
font.family: sans-serif
font.sans-serif: Arial, Helvetica, DejaVu Sans
font.size: 12

# 축 설정
axes.labelsize: 14
axes.titlesize: 16
axes.linewidth: 1.5
axes.edgecolor: black
axes.prop_cycle: cycler('color', ['000000', 'E69F00', '56B4E9', '009E73', 'F0E442', '0072B2', 'D55E00', 'CC79A7'])

# 범례 설정
legend.fontsize: 12
legend.frameon: True
legend.fancybox: False
legend.shadow: False
legend.edgecolor: black

# 그리드 설정
grid.alpha: 0.3
grid.linestyle: --

# 선 설정
lines.linewidth: 2.5
lines.markersize: 6

# 틱 설정
xtick.labelsize: 12
ytick.labelsize: 12
xtick.major.width: 1.5
ytick.major.width: 1.5

# 그림 설정
figure.titlesize: 18
figure.dpi: 100
savefig.dpi: 300
savefig.bbox: tight
savefig.format: pdf`}
              />
              <div className="text-sm text-muted-foreground mt-4">
                <strong>설치 위치:</strong>
                <code className="block mt-2 p-3 bg-muted rounded">
                  ~/.matplotlib/matplotlibrc
                </code>
              </div>
            </div>
          </Card>
        </section>

        {/* R Resources */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileCode className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('scripts.r.title')}</h2>
          </div>
          
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">install_packages.R</h3>
                <span className="text-sm text-muted-foreground">R 패키지 설치</span>
              </div>
              <p className="text-muted-foreground">
                접근성 준수 시각화를 위한 R 패키지 일괄 설치 스크립트
              </p>
              <CodeBlock
                language="r"
                title="install_packages.R"
                code={`# 접근성 데이터 시각화 패키지 설치 스크립트

# 기본 시각화
install.packages("ggplot2")
install.packages("lattice")

# 색상 팔레트
install.packages("viridis")
install.packages("RColorBrewer")
install.packages("colorspace")

# 색맹 시뮬레이션
install.packages("colorBlindness")
install.packages("dichromat")

# 테마 및 스타일
install.packages("ggthemes")
install.packages("scales")

# 다중 플롯
install.packages("gridExtra")
install.packages("patchwork")

# 인터랙티브 차트
install.packages("plotly")

# 데이터 조작
install.packages("dplyr")
install.packages("tidyr")

# 패키지 설치 확인
cat("\\n모든 패키지가 설치되었습니다!\\n")`}
              />
              <div className="text-sm text-muted-foreground mt-4">
                <strong>실행 방법:</strong>
                <code className="block mt-2 p-3 bg-muted rounded">
                  source("install_packages.R")
                </code>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">.Rprofile</h3>
                <span className="text-sm text-muted-foreground">R 환경 설정</span>
              </div>
              <p className="text-muted-foreground">
                R 시작 시 자동으로 로드되는 접근성 설정
              </p>
              <CodeBlock
                language="r"
                title=".Rprofile"
                code={`# 접근성 최적화 R 환경 설정

# Okabe-Ito 색상 팔레트
.okabe_ito <- c(
  "#000000", "#E69F00", "#56B4E9", "#009E73",
  "#F0E442", "#0072B2", "#D55E00", "#CC79A7"
)

# 기본 색상 팔레트 설정
options(
  ggplot2.discrete.colour = .okabe_ito,
  ggplot2.discrete.fill = .okabe_ito
)

# 기본 테마 설정
library(ggplot2)
theme_set(
  theme_minimal(base_size = 14) +
  theme(
    text = element_text(family = "Arial"),
    plot.title = element_text(size = 16, face = "bold"),
    axis.title = element_text(size = 14, face = "bold"),
    legend.position = "bottom"
  )
)

# 환경 변수
Sys.setenv(R_HISTSIZE = 10000)

cat("접근성 설정이 로드되었습니다!\\n")`}
              />
              <div className="text-sm text-muted-foreground mt-4">
                <strong>설치 위치:</strong>
                <code className="block mt-2 p-3 bg-muted rounded">
                  ~/.Rprofile
                </code>
              </div>
            </div>
          </Card>
        </section>

        {/* LaTeX Templates */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('templates.title')}</h2>
          </div>
          
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">accessible_article.tex</h3>
                <span className="text-sm text-muted-foreground">논문 템플릿</span>
              </div>
              <p className="text-muted-foreground">
                PDF/UA 준수 학술 논문 LaTeX 템플릿
              </p>
              <CodeBlock
                language="latex"
                title="accessible_article.tex"
                code={`\\documentclass[12pt]{article}

% 접근성 패키지
\\usepackage[a-2u]{pdfx}
\\usepackage[tagged]{accessibility}
\\usepackage{fontspec}
\\usepackage[hidelinks]{hyperref}
\\usepackage{graphicx}

% 폰트 설정
\\setmainfont{Arial}
\\setsansfont{Helvetica}
\\setmonofont{Courier New}

% 행간 설정
\\linespread{1.5}

% 문서 메타데이터
\\hypersetup{
    pdftitle={Your Article Title},
    pdfauthor={Author Name},
    pdfsubject={Subject Area},
    pdfkeywords={keyword1, keyword2, keyword3},
    pdflang={en-US}
}

% 그림 매크로
\\newcommand{\\accessiblefigure}[4]{
  \\begin{figure}[ht]
    \\centering
    \\includegraphics[width=#1\\textwidth]{#2}
    \\caption{#3}
    \\label{fig:#2}
    \\Description{#4}
  \\end{figure}
}

\\begin{document}

\\title{Your Article Title}
\\author{Author Name}
\\date{\\today}
\\maketitle

\\begin{abstract}
Your abstract here...
\\end{abstract}

\\section{Introduction}
Your content here...

% 접근성 높은 그림 예시
\\accessiblefigure{0.8}{figure1}{
  Caption text
}{
  Detailed alternative text description for screen readers
}

\\section{Methods}
More content...

\\section{Results}
Results content...

\\section{Conclusion}
Conclusion...

\\end{document}`}
              />
            </div>
          </Card>
        </section>

        {/* CSS Templates */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileCode className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t('templates.css.title')}</h2>
          </div>
          
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">accessible_styles.css</h3>
                <span className="text-sm text-muted-foreground">CSS 템플릿</span>
              </div>
              <p className="text-muted-foreground">
                WCAG 2.2 AA 준수 CSS 스타일 템플릿
              </p>
              <CodeBlock
                language="css"
                title="accessible_styles.css"
                code={`/* 접근성 최적화 CSS */

/* 기본 타이포그래피 */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
               Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  word-spacing: 0.05em;
  color: #000;
  background: #fff;
}

/* 제목 */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  margin-top: 2em;
  margin-bottom: 1em;
  font-weight: bold;
}

h1 { font-size: 2.5em; }
h2 { font-size: 2em; }
h3 { font-size: 1.5em; }

/* 문단 */
p {
  margin-bottom: 1.5em;
  max-width: 70ch;
}

/* 링크 */
a {
  color: #0072B2;
  text-decoration: underline;
}

a:hover {
  color: #005a8f;
}

a:focus {
  outline: 3px solid #0072B2;
  outline-offset: 2px;
}

/* 버튼 */
button {
  min-width: 44px;
  min-height: 44px;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
}

button:focus {
  outline: 3px solid #0072B2;
  outline-offset: 2px;
}

/* 스크린 리더 전용 */
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

/* 고대비 모드 */
@media (prefers-contrast: high) {
  body {
    background: #000;
    color: #fff;
  }
  
  a {
    color: #56B4E9;
  }
}

/* 다크 모드 */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #e0e0e0;
  }
  
  a {
    color: #56B4E9;
  }
}`}
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">.editorconfig</h3>
                <span className="text-sm text-muted-foreground">코딩 표준</span>
              </div>
              <p className="text-muted-foreground">
                일관된 코드 스타일을 위한 EditorConfig 설정
              </p>
              <CodeBlock
                language="ini"
                title=".editorconfig"
                code={`# EditorConfig - 접근성 코드 표준

root = true

# 모든 파일
[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

# Python
[*.py]
indent_size = 4
max_line_length = 88

# R
[*.R]
indent_size = 2

# Markdown
[*.md]
trim_trailing_whitespace = false

# LaTeX
[*.tex]
indent_size = 2`}
              />
            </div>
          </Card>
        </section>

        {/* Usage Guide */}
        <Card className="p-6 bg-muted/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">사용 안내</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. 코드 복사</h3>
              <p>각 코드 블록 우측 상단의 복사 버튼을 클릭하여 코드를 복사하세요.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2. 파일 생성</h3>
              <p>복사한 코드를 해당 파일명으로 저장하세요 (예: requirements.txt).</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">3. 환경 적용</h3>
              <p>각 파일의 설명에 따라 적절한 위치에 배치하고 설치/적용하세요.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">4. 커스터마이즈</h3>
              <p>필요에 따라 설정을 수정하여 사용하세요.</p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Downloads;
