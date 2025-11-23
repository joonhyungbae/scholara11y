import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
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
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* Interactive Checklist */}
        <PageSection title={t('intro')} className="space-y-6">
          <div className="flex justify-end mb-4">
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
                  <strong className="text-foreground">{t('checklistItems.logicalOrder')}</strong> {t('checklistItems.logicalOrderDesc')}
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="alt-text"
                  checked={checkedItems['alt-text'] || false}
                  onCheckedChange={() => handleCheck('alt-text')}
                />
                <label htmlFor="alt-text" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">{t('checklistItems.altText')}</strong> {t('checklistItems.altTextDesc')}
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="table-headers"
                  checked={checkedItems['table-headers'] || false}
                  onCheckedChange={() => handleCheck('table-headers')}
                />
                <label htmlFor="table-headers" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">{t('checklistItems.tableHeaders')}</strong> {t('checklistItems.tableHeadersDesc')}
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="font-embed"
                  checked={checkedItems['font-embed'] || false}
                  onCheckedChange={() => handleCheck('font-embed')}
                />
                <label htmlFor="font-embed" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">{t('checklistItems.embedFonts')}</strong> {t('checklistItems.embedFontsDesc')}
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="metadata"
                  checked={checkedItems['metadata'] || false}
                  onCheckedChange={() => handleCheck('metadata')}
                />
                <label htmlFor="metadata" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">{t('checklistItems.completeMetadata')}</strong> {t('checklistItems.completeMetadataDesc')}
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="contrast"
                  checked={checkedItems['contrast'] || false}
                  onCheckedChange={() => handleCheck('contrast')}
                />
                <label htmlFor="contrast" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">{t('checklistItems.colorContrast')}</strong> {t('checklistItems.colorContrastDesc')}
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="bookmarks"
                  checked={checkedItems['bookmarks'] || false}
                  onCheckedChange={() => handleCheck('bookmarks')}
                />
                <label htmlFor="bookmarks" className="text-muted-foreground cursor-pointer">
                  <strong className="text-foreground">{t('checklistItems.addBookmarks')}</strong> {t('checklistItems.addBookmarksDesc')}
                </label>
              </div>
            </div>
          </Card>
        </PageSection>

        {/* LaTeX PDF/UA */}
        <PageSection title={t('latexSettings.title')}>
          
          <CodeBlock
            language="latex"
            title="pdfua_setup.tex"
            code={`% PDF/UA compliant LaTeX settings
\\documentclass[12pt]{article}
\\usepackage[a-2u]{pdfx}  % PDF/A-2u standard
\\usepackage{fontspec}
\\usepackage[hidelinks]{hyperref}
\\usepackage[tagged]{accessibility}

% Document metadata
\\hypersetup{
    pdftitle={Research Article Title},
    pdfauthor={Author Name},
    pdfsubject={Subject Area},
    pdfkeywords={keyword1, keyword2, keyword3},
    pdflang={en-US},
    pdfstartview={FitH},
    pdfpagemode={UseOutlines}
}

% Compression settings
\\pdfcompresslevel=9
\\pdfobjcompresslevel=3

% Font settings (embedding)
\\setmainfont{Arial}
\\setsansfont{Helvetica}
\\setmonofont{Courier New}

\\begin{document}

% Structured content
\\section{Introduction}
\\label{sec:intro}

Content with proper structure and tagging...

\\subsection{Background}
More structured content...

% Accessible figures
\\begin{figure}[ht]
  \\centering
  \\includegraphics[width=0.8\\textwidth]{figure1}
  \\caption{Caption text}
  \\label{fig:example}
  \\Description{Detailed alternative text for screen readers}
\\end{figure}

% Accessible tables
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
        </PageSection>

        {/* Validation Tools */}
        <PageSection title={t('tools.pac.title')}>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">PAC 2024</h3>
                <p className="text-muted-foreground">
                  {t('tools.pac.description')}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">{t('tools.pac.featuresTitle')}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>{t('tools.pac.features.tags')}</li>
                    <li>{t('tools.pac.features.alt')}</li>
                    <li>{t('tools.pac.features.reading')}</li>
                    <li>{t('tools.pac.features.metadata')}</li>
                  </ul>
                </div>
                <a
                  href="https://pac.pdf-accessibility.org/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  {t('tools.pac.download')}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Adobe Acrobat Pro</h3>
                <p className="text-muted-foreground">
                  {t('tools.acrobat.description')}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">{t('tools.acrobat.featuresTitle')}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>{t('tools.acrobat.features.autoTag')}</li>
                    <li>{t('tools.acrobat.features.readingOrder')}</li>
                    <li>{t('tools.acrobat.features.bulkAlt')}</li>
                    <li>{t('tools.acrobat.features.fullCheck')}</li>
                  </ul>
                </div>
                <a
                  href="https://www.adobe.com/acrobat/how-to/create-accessible-pdf.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  {t('tools.acrobat.guide')}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{t('tools.nvda.title')}</h3>
                <p className="text-muted-foreground">
                  {t('tools.nvda.description')}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">{t('tools.nvda.methodsTitle')}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>{t('tools.nvda.methods.readingOrder')}</li>
                    <li>{t('tools.nvda.methods.altText')}</li>
                    <li>{t('tools.nvda.methods.tables')}</li>
                    <li>{t('tools.nvda.methods.links')}</li>
                  </ul>
                </div>
                <a
                  href="https://www.nvaccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  {t('tools.nvda.download')}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">veraPDF</h3>
                <p className="text-muted-foreground">
                  {t('tools.verapdf.description')}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">{t('tools.verapdf.scopeTitle')}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>{t('tools.verapdf.scope.compliance')}</li>
                    <li>{t('tools.verapdf.scope.fonts')}</li>
                    <li>{t('tools.verapdf.scope.colors')}</li>
                    <li>{t('tools.verapdf.scope.metadata')}</li>
                  </ul>
                </div>
                <a
                  href="https://verapdf.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  {t('tools.verapdf.download')}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </div>
        </PageSection>

        {/* Step-by-step Guide */}
        <PageSection title={t('adobeSteps.title')}>
          
          <Card className="p-6">
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">1.</span>
                <div>
                  <strong className="text-foreground">{t('checklistItems.adobeTitle')}</strong> {t('checklistItems.adobeTitleDesc')}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">2.</span>
                <div>
                  <strong className="text-foreground">{t('checklistItems.adobeOption')}</strong> {t('checklistItems.adobeOptionDesc')}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">3.</span>
                <div>
                  <strong className="text-foreground">{t('checklistItems.adobeExecute')}</strong> {t('checklistItems.adobeExecuteDesc')}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">4.</span>
                <div>
                  <strong className="text-foreground">{t('checklistItems.adobeFix')}</strong> {t('checklistItems.adobeFixDesc')}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">5.</span>
                <div>
                  <strong className="text-foreground">{t('checklistItems.adobeRecheck')}</strong> {t('checklistItems.adobeRecheckDesc')}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">6.</span>
                <div>
                  <strong className="text-foreground">{t('checklistItems.adobeFinal')}</strong> {t('checklistItems.adobeFinalDesc')}
                </div>
              </li>
            </ol>
          </Card>
        </PageSection>

        {/* Common Issues */}
        <PageSection title={t('commonIssues.title')}>
          
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">{t('checklistItems.issueTagMissing')}</h3>
              <p className="text-muted-foreground mb-2">
                <strong>{t('remediation.issues.untagged.issue')}:</strong> {t('checklistItems.issueTagMissingDesc')}
              </p>
              <p className="text-muted-foreground">
                <strong>{t('remediation.issues.untagged.fix')}:</strong> {t('checklistItems.issueTagMissingFix')}
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">{t('checklistItems.issueAltMissing')}</h3>
              <p className="text-muted-foreground mb-2">
                <strong>{t('remediation.issues.missingAlt.issue')}:</strong> {t('checklistItems.issueAltMissingDesc')}
              </p>
              <p className="text-muted-foreground">
                <strong>{t('remediation.issues.missingAlt.fix')}:</strong> {t('checklistItems.issueAltMissingFix')}
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">{t('checklistItems.issueWrongOrder')}</h3>
              <p className="text-muted-foreground mb-2">
                <strong>{t('remediation.issues.readingOrder.issue')}:</strong> {t('checklistItems.issueWrongOrderDesc')}
              </p>
              <p className="text-muted-foreground">
                <strong>{t('remediation.issues.readingOrder.fix')}:</strong> {t('checklistItems.issueWrongOrderFix')}
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-3">{t('checklistItems.issueLowContrast')}</h3>
              <p className="text-muted-foreground mb-2">
                <strong>{t('remediation.issues.contrast.issue')}:</strong> {t('checklistItems.issueLowContrastDesc')}
              </p>
              <p className="text-muted-foreground">
                <strong>{t('remediation.issues.contrast.fix')}:</strong> {t('checklistItems.issueLowContrastFix')}
              </p>
            </Card>
          </div>
        </PageSection>
      </div>
    </Layout>
  );
};

export default PdfChecklist;
