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
                    <h3 className="text-xl font-semibold text-foreground">{t('standards.pdfua.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('standards.pdfua.description')}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span className="font-medium">{t('standards.pdfua.title')}</span>
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
                    <h3 className="text-xl font-semibold text-foreground">{t('mathml.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('standards.aria.description')}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span className="font-medium">{t('standards.aria.title')}</span>
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
                    <h3 className="text-xl font-semibold text-foreground">{t('aria.authoring.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('guidelines.w3cTechniques.description')}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span className="font-medium">{t('guidelines.w3cTechniques.title')}</span>
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
                  <h3 className="text-lg font-semibold text-foreground">{t('tools.checkers.pac.name')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('tools.checkers.pac.description')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    {t('download')}
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
                  <h3 className="text-lg font-semibold text-foreground">{t('tools.simulators.colorOracle.name')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('tools.simulators.colorOracle.description')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    {t('download')}
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
                  <h3 className="text-lg font-semibold text-foreground">{t('tools.checkers.axe.name')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('tools.checkers.axe.description')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    {t('download')}
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
                  <h3 className="text-lg font-semibold text-foreground">{t('tools.checkers.wave.name')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('tools.checkers.wave.description')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
{t('buttons.use')}
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
                  <h3 className="text-lg font-semibold text-foreground">{t('tools.contrast.webaim.name')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('tools.contrast.webaim.description')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
{t('buttons.use')}
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
                  <h3 className="text-lg font-semibold text-foreground">{t('tools.screenReaders.nvda.name')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('tools.screenReaders.nvda.description')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
                    {t('download')}
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
                    <h3 className="text-xl font-semibold text-foreground">{t('organizations.webaim.name')}</h3>
                    <p className="text-muted-foreground">
                      {t('organizations.webaim.description')}
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
                    <h3 className="text-xl font-semibold text-foreground">{t('organizations.courses.deque.name')}</h3>
                    <p className="text-muted-foreground">
                      {t('learning.courses.deque.description')}
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
                    <h3 className="text-xl font-semibold text-foreground">{t('organizations.a11y.name')}</h3>
                    <p className="text-muted-foreground">
                      {t('organizations.a11y.description')}
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
                    <h3 className="text-xl font-semibold text-foreground">{t('organizations.tutorials.name')}</h3>
                    <p className="text-muted-foreground">
                      {t('learning.tutorials.description')}
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
                  <h3 className="text-lg font-semibold text-foreground">{t('organizations.w3c.communityName')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('organizations.w3c.community')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
{t('buttons.join')}
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
                  <h3 className="text-lg font-semibold text-foreground">{t('organizations.reddit.name')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('organizations.reddit.description')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
{t('buttons.join')}
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
                  <h3 className="text-lg font-semibold text-foreground">{t('organizations.newsletter.name')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('learning.additional.communities.newsletter.name')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink className="h-4 w-4" />
{t('buttons.subscribe')}
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
              <h3 className="text-xl font-semibold text-foreground">{t('research.title')}</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-primary pl-4">
                  <p className="font-semibold text-foreground">
                    "Color Universal Design (CUD)" - Okabe & Ito (2008)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('research.okabe.description')}
                  </p>
                </li>
                <li className="border-l-2 border-primary pl-4">
                  <p className="font-semibold text-foreground">
                    "Accessible Data Visualization" - IEEE VIS (2021)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('research.visualization.description')}
                  </p>
                </li>
                <li className="border-l-2 border-primary pl-4">
                  <p className="font-semibold text-foreground">
                    "Evaluating the Accessibility of Scientific Documents" - CHI (2022)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('research.framework.description')}
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Additional Resources */}
        <Card className="p-6 bg-muted/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('learning.additional.title')}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('learning.additional.blogs.title')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t('learning.additional.blogs.items.inclusive')}</li>
                <li>• {t('learning.additional.blogs.items.deque')}</li>
                <li>• {t('learning.additional.blogs.items.adrian')}</li>
                <li>• {t('learning.additional.blogs.items.sara')}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('learning.additional.podcasts.title')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t('learning.additional.podcasts.items.rules')}</li>
                <li>• {t('learning.additional.podcasts.items.craft')}</li>
                <li>• {t('learning.additional.podcasts.items.ebu')}</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default References;
