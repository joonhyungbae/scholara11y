import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { CodeBlock } from "@/components/CodeBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Typography = () => {
  const { t } = useTranslation('typography');
  
  const latexCode = `% Accessibility-optimized LaTeX settings
\\documentclass[12pt]{article}
\\usepackage{fontspec}
\\usepackage[hidelinks]{hyperref}
\\usepackage[tagged]{accessibility}

% Font settings
\\setmainfont{Arial}
\\setsansfont{Helvetica}
\\setmonofont{Courier New}

% Line spacing (1.5x)
\\linespread{1.5}

% Paragraph spacing
\\setlength{\\parskip}{1.5em}

% Accessible figure macro
\\newcommand{\\accessiblefigure}[4]{
  \\begin{figure}[ht]
    \\centering
    \\includegraphics[width=#1\\textwidth]{#2}
    \\caption{#3}
    \\label{fig:#2}
    \\Description{#4} % Alternative text
  \\end{figure}
}

% PDF metadata
\\hypersetup{
  pdftitle={Paper Title},
  pdfauthor={Author Name},
  pdfsubject={Subject},
  pdfkeywords={keyword1, keyword2},
  pdflang={en-US}
}

\\begin{document}

\\title{Research Article Title}
\\author{Author Name}
\\date{\\today}
\\maketitle

\\section{Introduction}
Your content here...

% Insert accessible figure
\\accessiblefigure{0.8}{figure1.pdf}
  {Descriptive Caption}
  {Detailed description of the figure for screen readers}

\\end{document}`;

  const cssCode = `/* Accessible Typography for Web Publications */

/* Using design system colors */
:root {
  --text-primary: hsl(222 47% 11%);
  --bg-primary: hsl(0 0% 98%);
  --link-color: hsl(221 83% 53%);
  --link-hover: hsl(221 83% 43%);
  --code-bg: hsl(210 40% 96%);
}

/* Base settings */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
               Arial, Helvetica, sans-serif;
  font-size: 16px;  /* Minimum 16px */
  line-height: 1.5; /* 150% line height */
  letter-spacing: 0.02em;
  word-spacing: 0.05em;
  color: var(--text-primary);
  background: var(--bg-primary);
}

/* Heading hierarchy */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
  margin-top: 2em;
  margin-bottom: 1em;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }

/* Body paragraphs */
p {
  margin-bottom: 1.5em;
  max-width: 70ch; /* Max width for readability */
}

/* Links */
a {
  color: var(--link-color);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

a:hover {
  color: var(--link-hover);
}

a:focus {
  outline: 3px solid var(--link-color);
  outline-offset: 2px;
}

/* Code */
code {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9em;
  background: var(--code-bg);
  padding: 0.2em 0.4em;
  border-radius: 3px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  body {
    background: hsl(222 47% 11%);
    color: hsl(0 0% 98%);
  }

  a {
    color: hsl(221 83% 63%);
  }

  code {
    background: hsl(217 33% 17%);
    color: hsl(0 0% 98%);
  }
}`;

  return (
    <Layout>
      <div className="space-y-12">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* Core Requirements */}
        <PageSection
          title={t('coreRequirements.title')}
          subtitle={t('subtitle')}
        >

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('coreRequirements.items.fonts')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('coreRequirements.items.size')}</span>
                  <span className="font-semibold">16px (12pt)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('coreRequirements.items.spacing')}</span>
                  <span className="font-semibold">1.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('coreRequirements.items.alignment')}</span>
                  <span className="font-semibold">{t('coreRequirements.items.alignment')}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('coreRequirements.items.contrast')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('coreRequirements.items.spacing')}</span>
                  <span className="font-semibold">1.5 (150%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('coreRequirements.items.contrast')}</span>
                  <span className="font-semibold">4.5:1</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        {/* LaTeX Template */}
        <PageSection
          title={t('latexTitle')}
          subtitle={t('latexDescription')}
        >
          <CodeBlock
            code={latexCode}
            language="LaTeX"
            title={t('latexTitle')}
          />
        </PageSection>

        {/* CSS Template */}
        <PageSection
          title={t('cssTitle')}
          subtitle={t('cssDescription')}
        >
          <CodeBlock
            code={cssCode}
            language="CSS"
            title={t('cssTitle')}
          />
        </PageSection>

        {/* Publisher Requirements */}
        <PageSection
          title={t('publisherFonts.title')}
          subtitle={t('subtitle')}
        >

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('publisherFonts.table.publisher')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('publisherFonts.table.font')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('publisherFonts.table.size')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('publisherFonts.table.spacing')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">Elsevier</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('publisherFonts.table.elsevier.font')}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('publisherFonts.table.elsevier.size')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('publisherFonts.table.elsevier.spacing')}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">Nature</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('publisherFonts.table.nature.font')}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('publisherFonts.table.nature.size')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('publisherFonts.table.nature.spacing')}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">Springer</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('publisherFonts.table.springer.font')}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('publisherFonts.table.springer.size')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('publisherFonts.table.springer.spacing')}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">Wiley</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('publisherFonts.table.wiley.font')}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('publisherFonts.table.wiley.size')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('publisherFonts.table.wiley.spacing')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </PageSection>

        {/* Best Practices */}
        <Card className="border-2 border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <span>✓</span>
              {t('bestPractices.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p><strong>{t('bestPractices.items.consistent')}:</strong> {t('bestPractices.items.consistent')}</p>
            <p><strong>{t('bestPractices.items.hierarchy')}:</strong> {t('bestPractices.items.hierarchy')}</p>
            <p><strong>{t('bestPractices.items.emphasis')}:</strong> {t('bestPractices.items.emphasis')}</p>
            <p><strong>{t('bestPractices.items.color')}:</strong> {t('bestPractices.items.color')}</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Typography;
