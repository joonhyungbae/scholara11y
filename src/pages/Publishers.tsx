import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Publishers = () => {
  const { t } = useTranslation('publishers');
  
  return (
    <Layout>
      <div className="space-y-12">
        {/* Header */}
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* Comparison Table */}
        <PageSection title={t('comparison.title')}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border bg-muted/50">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.item')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('comparison.publishers.elsevier')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('comparison.publishers.springer')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('comparison.publishers.wiley')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('comparison.publishers.taylorFrancis')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.colorPalette')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.colorPalettes.elsevier')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.colorPalettes.springer')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.colorPalettes.wiley')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.colorPalettes.taylorFrancis')}</td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.minTextSize')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.minTextSizes.elsevier')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.minTextSizes.springer')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.minTextSizes.wiley')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.minTextSizes.taylorFrancis')}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.altText')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.altTextSizes.elsevier')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.altTextSizes.springer')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.altTextSizes.wiley')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.altTextSizes.taylorFrancis')}</td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.format')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.formats.elsevier')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.formats.springer')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.formats.wiley')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.formats.taylorFrancis')}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.resolution')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.resolutions.elsevier')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.resolutions.springer')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.resolutions.wiley')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.resolutions.taylorFrancis')}</td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.luminance')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.luminance')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.luminance')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.luminance')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.luminance')}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.pdfuaRequired')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.headers.from202510')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.headers.recommended')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.headers.recommended')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.headers.recommended')}</td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 font-semibold text-foreground">{t('comparison.table.headers.aiTools')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.aiTools.elsevier')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.aiTools.springer')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.aiTools.wiley')}</td>
                  <td className="py-4 px-4 text-muted-foreground">{t('comparison.table.values.aiTools.taylorFrancis')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </PageSection>

        {/* Publisher Details */}
        <PageSection title={t('intro')} className="space-y-8">
          
          {/* Elsevier */}
          <Card className="p-8 border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground">{t('publishers.elsevier')}</h3>
                <a
                  href="https://www.elsevier.com/about/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  {t('elsevier.guideLink')} <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('elsevier.colorTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('elsevier.colorItems.palette')}</li>
                    <li>{t('elsevier.colorItems.contrast')}</li>
                    <li>{t('elsevier.colorItems.graphics')}</li>
                    <li>{t('elsevier.colorItems.noColorOnly')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('elsevier.figureTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('elsevier.figureItems.format')}</li>
                    <li>{t('elsevier.figureItems.resolution')}</li>
                    <li>{t('elsevier.figureItems.textSize')}</li>
                    <li>{t('elsevier.figureItems.fonts')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('elsevier.changesTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li><strong>{t('elsevier.changes.oct2025')}</strong></li>
                    <li><strong>{t('elsevier.changes.apr2026')}</strong></li>
                    <li><strong>{t('elsevier.changes.aiAltText')}</strong></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('elsevier.checklistTitle')}</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>{t('elsevier.checklist.altText')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>{t('elsevier.checklist.contrast')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>{t('elsevier.checklist.tableHeaders')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>{t('elsevier.checklist.metadata')}</span>
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
                <h3 className="text-2xl font-bold text-foreground">{t('publishers.springer')}</h3>
                <a
                  href="https://www.springernature.com/gp/info/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  {t('springer.guideLink')} <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('springer.colorTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('springer.colorItems.palette')}</li>
                    <li>{t('springer.colorItems.contrast')}</li>
                    <li>{t('springer.colorItems.dualEncoding')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('springer.figureTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('springer.figureItems.format')}</li>
                    <li>{t('springer.figureItems.resolution')}</li>
                    <li>{t('springer.figureItems.textSize')}</li>
                    <li>{t('springer.figureItems.lineWidth')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('springer.supportTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('springer.supportItems.altAssistant')}</li>
                    <li>{t('springer.supportItems.contrastChecker')}</li>
                    <li>{t('springer.supportItems.latexTemplate')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Wiley */}
          <Card className="p-8 border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground">{t('publishers.wiley')}</h3>
                <a
                  href="https://www.wiley.com/en-us/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  {t('wiley.guideLink')} <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('wiley.visualTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('wiley.visualItems.palette')}</li>
                    <li>{t('wiley.visualItems.contrast')}</li>
                    <li>{t('wiley.visualItems.labeling')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('wiley.figureTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('wiley.figureItems.format')}</li>
                    <li>{t('wiley.figureItems.resolution')}</li>
                    <li>{t('wiley.figureItems.textSize')}</li>
                    <li>{t('wiley.figureItems.colorMode')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('wiley.policyTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('wiley.policyItems.wcag')}</li>
                    <li>{t('wiley.policyItems.pdfua')}</li>
                    <li>{t('wiley.policyItems.altText')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Taylor & Francis */}
          <Card className="p-8 border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground">{t('publishers.taylorFrancis')}</h3>
                <a
                  href="https://taylorandfrancis.com/about/corporate-responsibility/accessibility-at-taylor-francis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  {t('taylorFrancis.guideLink')} <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('taylorFrancis.colorTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('taylorFrancis.colorItems.palette')}</li>
                    <li>{t('taylorFrancis.colorItems.contrast')}</li>
                    <li>{t('taylorFrancis.colorItems.dualEncoding')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('taylorFrancis.figureTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('taylorFrancis.figureItems.format')}</li>
                    <li>{t('taylorFrancis.figureItems.resolution')}</li>
                    <li>{t('taylorFrancis.figureItems.textSize')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('taylorFrancis.futureTitle')}</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                    <li>{t('taylorFrancis.futureItems.aiTools')}</li>
                    <li>{t('taylorFrancis.futureItems.pdfua')}</li>
                    <li>{t('taylorFrancis.futureItems.education')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </PageSection>

        {/* General Guidelines */}
        <PageSection title={t('tips.title')}>
          <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>{t('tips.items.contrast')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>{t('tips.items.altText')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>{t('tips.items.colorPalette')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>{t('tips.items.dualEncoding')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>{t('tips.items.directLabeling')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1" />
              <span>{t('tips.items.vectorFormat')}</span>
            </li>
          </ul>
          </Card>
        </PageSection>
      </div>
    </Layout>
  );
};

export default Publishers;
