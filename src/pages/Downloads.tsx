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
                <span className="text-sm text-muted-foreground">{t('scripts.python.dependency')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('scripts.python.dependencyDesc')}
              </p>
              <CodeBlock
                language="text"
                title="requirements.txt"
                code={`# data visualization
matplotlib==3.7.1
seaborn==0.12.2
plotly==5.14.1

# data processing
numpy==1.24.3
pandas==2.0.2

# colorblind simulation
colorspacious==1.1.2

# color palette
colorcet==3.0.1

# image processing
Pillow==10.0.0

# PDF generation
reportlab==4.0.4`}
              />
              <div className="text-sm text-muted-foreground mt-4">
                <strong>{t('scripts.python.installTitle')}</strong>
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
                <span className="text-sm text-muted-foreground">{t('scripts.python.config')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('scripts.python.configDesc')}
              </p>
              <CodeBlock
                language="ini"
                title="matplotlibrc"
                code={`# accessibility-optimized matplotlib settings

# font settings
font.family: sans-serif
font.sans-serif: Arial, Helvetica, DejaVu Sans
font.size: 12

# axis settings
axes.labelsize: 14
axes.titlesize: 16
axes.linewidth: 1.5
axes.edgecolor: black
axes.prop_cycle: cycler('color', ['000000', 'E69F00', '56B4E9', '009E73', 'F0E442', '0072B2', 'D55E00', 'CC79A7'])

# legend settings
legend.fontsize: 12
legend.frameon: True
legend.fancybox: False
legend.shadow: False
legend.edgecolor: black

# grid settings
grid.alpha: 0.3
grid.linestyle: --

# line settings
lines.linewidth: 2.5
lines.markersize: 6

# Tick settings
xtick.labelsize: 12
ytick.labelsize: 12
xtick.major.width: 1.5
ytick.major.width: 1.5

# Figure settings
figure.titlesize: 18
figure.dpi: 100
savefig.dpi: 300
savefig.bbox: tight
savefig.format: pdf`}
              />
              <div className="text-sm text-muted-foreground mt-4">
                <strong>{t('scripts.python.installPath')}</strong>
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
                <span className="text-sm text-muted-foreground">{t('scripts.r.package')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('scripts.r.packageDesc')}
              </p>
              <CodeBlock
                language="r"
                title="install_packages.R"
                code={`# Accessible Data Visualization Package Installation Script

# Basic visualization
install.packages("ggplot2")
install.packages("lattice")

# color palette
install.packages("viridis")
install.packages("RColorBrewer")
install.packages("colorspace")

# colorblind simulation
install.packages("colorBlindness")
install.packages("dichromat")

# Themes and styles
install.packages("ggthemes")
install.packages("scales")

# Multiple plots
install.packages("gridExtra")
install.packages("patchwork")

# Interactive charts
install.packages("plotly")

# Data manipulation
install.packages("dplyr")
install.packages("tidyr")

# Package installation verification
cat("\\nAll packages have been installed!\\n")`}
              />
              <div className="text-sm text-muted-foreground mt-4">
                <strong>{t('scripts.r.runTitle')}</strong>
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
                <span className="text-sm text-muted-foreground">{t('scripts.r.env')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('scripts.r.envDesc')}
              </p>
              <CodeBlock
                language="r"
                title=".Rprofile"
                code={`# accessibility-optimized R environment settings

# Okabe-Ito color palette
.okabe_ito <- c(
  "#000000", "#E69F00", "#56B4E9", "#009E73",
  "#F0E442", "#0072B2", "#D55E00", "#CC79A7"
)

# Default color palette settings
options(
  ggplot2.discrete.colour = .okabe_ito,
  ggplot2.discrete.fill = .okabe_ito
)

# Default theme settings
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

# Environment variables
Sys.setenv(R_HISTSIZE = 10000)

cat("Accessibility settings loaded!\\n")`}
              />
              <div className="text-sm text-muted-foreground mt-4">
                <strong>{t('scripts.python.installPath')}</strong>
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
                <span className="text-sm text-muted-foreground">{t('templates.paper')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('templates.paperDesc')}
              </p>
              <CodeBlock
                language="latex"
                title="accessible_article.tex"
                code={`\\documentclass[12pt]{article}

% Accessibility packages
\\usepackage[a-2u]{pdfx}
\\usepackage[tagged]{accessibility}
\\usepackage{fontspec}
\\usepackage[hidelinks]{hyperref}
\\usepackage{graphicx}

% Font settings
\\setmainfont{Arial}
\\setsansfont{Helvetica}
\\setmonofont{Courier New}

% Line spacing settings
\\linespread{1.5}

% Document metadata
\\hypersetup{
    pdftitle={Your Article Title},
    pdfauthor={Author Name},
    pdfsubject={Subject Area},
    pdfkeywords={keyword1, keyword2, keyword3},
    pdflang={en-US}
}

% Figure macro
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

% Accessible figure example
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
                <span className="text-sm text-muted-foreground">{t('templates.css')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('templates.cssDesc')}
              </p>
              <CodeBlock
                language="css"
                title="accessible_styles.css"
                code={`/* accessibility-optimized CSS */

/* basic typography */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
               Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  word-spacing: 0.05em;
  color: hsl(222 47% 11%);
  background: hsl(0 0% 98%);
}

/* headings */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  margin-top: 2em;
  margin-bottom: 1em;
  font-weight: bold;
}

h1 { font-size: 2.5em; }
h2 { font-size: 2em; }
h3 { font-size: 1.5em; }

/* paragraphs */
p {
  margin-bottom: 1.5em;
  max-width: 70ch;
}

/* links */
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

/* buttons */
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

/* screen reader only */
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

/* high contrast mode */
@media (prefers-contrast: high) {
  body {
    background: hsl(222 47% 11%);
    color: hsl(0 0% 98%);
  }

  a {
    color: #56B4E9;
  }
}

/* dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: hsl(217 33% 17%);
    color: hsl(0 0% 98%);
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
                <span className="text-sm text-muted-foreground">{t('standards.coding')}</span>
              </div>
              <p className="text-muted-foreground">
                {t('standards.codingDesc')}
              </p>
              <CodeBlock
                language="ini"
                title=".editorconfig"
                code={`# EditorConfig - accessibility code standards

root = true

# All files
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
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('instructions.title')}</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('instructions.step1.title')}</h3>
              <p>{t('instructions.step1.desc')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('instructions.step2.title')}</h3>
              <p>{t('instructions.step2.desc')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('instructions.step3.title')}</h3>
              <p>{t('instructions.step3.desc')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('instructions.step4.title')}</h3>
              <p>{t('instructions.step4.desc')}</p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Downloads;
