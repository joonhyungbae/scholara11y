import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { CheckCircle, Calendar, ExternalLink, AlertCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Regulations = () => {
  const { t } = useTranslation('regulations');
  
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

        {/* WCAG 2.2 POUR Principles */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('wcag.principles.title')}</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t('wcag.principles.perceivable.title')}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t('wcag.principles.perceivable.description')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('wcag.principles.perceivable.examples')}
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t('wcag.principles.operable.title')}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t('wcag.principles.operable.description')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('wcag.principles.operable.examples')}
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t('wcag.principles.understandable.title')}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t('wcag.principles.understandable.description')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('wcag.principles.understandable.examples')}
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary p-3">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t('wcag.principles.robust.title')}</h3>
                </div>
                <p className="text-muted-foreground">
                  {t('wcag.principles.robust.description')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('wcag.principles.robust.examples')}
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Success Criteria */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('wcag.title')}</h2>
          
          <Card className="p-6 border-primary/50">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{t('wcag.contrast.title')}</h3>
              <p className="text-muted-foreground">
                {t('wcag.contrast.description')}
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold text-foreground">{t('wcag.contrast.table.element')}</th>
                      <th className="text-left py-2 font-semibold text-foreground">{t('wcag.contrast.table.levelAA')}</th>
                      <th className="text-left py-2 font-semibold text-foreground">{t('wcag.contrast.table.levelAAA')}</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="py-2">{t('wcag.contrast.table.normalText')}</td>
                      <td className="py-2 font-semibold">4.5:1</td>
                      <td className="py-2 font-semibold">7:1</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">{t('wcag.contrast.table.largeText')}</td>
                      <td className="py-2 font-semibold">3:1</td>
                      <td className="py-2 font-semibold">4.5:1</td>
                    </tr>
                    <tr>
                      <td className="py-2">{t('wcag.contrast.table.boldText')}</td>
                      <td className="py-2 font-semibold">3:1</td>
                      <td className="py-2 font-semibold">4.5:1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-primary/50">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{t('wcag.nonText.title')}</h3>
              <p className="text-muted-foreground">
                {t('wcag.nonText.description')}
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
                {(t('wcag.nonText.items', { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Conformance Levels */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('wcag.levels.title')}</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('wcag.levels.headers.level')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('wcag.levels.headers.meaning')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('wcag.levels.headers.requirements')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">{t('wcag.levels.headers.target')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-foreground font-semibold">
                      {t('wcag.levels.a.level')}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {t('wcag.levels.a.description')}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">
                    <ul className="list-disc list-inside space-y-1">
                      {(t('wcag.levels.a.requirements', { returnObjects: true }) as string[]).map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {t('wcag.levels.a.target')}
                  </td>
                </tr>
                <tr className="border-b border-border bg-primary/5">
                  <td className="py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground font-semibold">
                      {t('wcag.levels.aa.level')}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {t('wcag.levels.aa.description')}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">
                    <ul className="list-disc list-inside space-y-1">
                      {(t('wcag.levels.aa.requirements', { returnObjects: true }) as string[]).map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">
                    <strong>{t('wcag.levels.aa.target')}</strong>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-foreground font-semibold">
                      {t('wcag.levels.aaa.level')}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {t('wcag.levels.aaa.description')}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">
                    <ul className="list-disc list-inside space-y-1">
                      {(t('wcag.levels.aaa.requirements', { returnObjects: true }) as string[]).map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">
                    {t('wcag.levels.aaa.target')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Legal Timeline */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('timeline.title')}</h2>
          
          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{t('timeline.june2025.date')}</h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {t('timeline.june2025.region')}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-semibold mb-2">
                    {t('timeline.june2025.title')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('timeline.june2025.description')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{t('timeline.oct2025.date')}</h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {t('timeline.oct2025.region')}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-semibold mb-2">
                    {t('timeline.oct2025.title')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('timeline.oct2025.description')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{t('timeline.jan2026.date')}</h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {t('timeline.jan2026.region')}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-semibold mb-2">
                    {t('timeline.jan2026.title')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('timeline.jan2026.description')}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{t('timeline.apr2026.date')}</h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {t('timeline.apr2026.region')}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-semibold mb-2">
                    {t('timeline.apr2026.title')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('timeline.apr2026.description')}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Publisher Policies */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">{t('publishers.title')}</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://www.elsevier.com/about/accessibility"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{t('publishers.elsevier.name')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('publishers.elsevier.description')}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </Card>
            </a>

            <a
              href="https://www.springernature.com/gp/info/accessibility"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{t('publishers.springer.name')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('publishers.springer.description')}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </Card>
            </a>

            <a
              href="https://www.wiley.com/en-us/accessibility"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Wiley</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('publishers.wiley.description')}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </Card>
            </a>

            <a
              href="https://taylorandfrancis.com/about/corporate-responsibility/accessibility-at-taylor-francis/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{t('publishers.taylor.name')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('publishers.taylor.description')}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </Card>
            </a>
          </div>
        </section>

        {/* Important Note */}
        <Card className="p-6 bg-muted/50 border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-primary mt-1" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{t('note.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('note.content')}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Regulations;
