import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  User,
  Mail,
  Globe,
  Heart,
  GraduationCap,
  Palette,
  FileText,
  ExternalLink,
  Crown,
  Sparkles
} from "lucide-react";

const Credit = () => {
  const { t } = useTranslation('credit');

  const handleEmailClick = () => {
    window.location.href = 'mailto:jh.bae@kaist.ac.kr';
  };

  const handleWebsiteClick = () => {
    window.open('https://joonhyungbae.com', '_blank', 'noopener,noreferrer');
  };


  return (
    <Layout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Crown className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              {t('project.name')}
            </h1>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('project.description')}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <GraduationCap className="h-4 w-4 mr-2" />
              {t('project.creator.roles.researcher')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <FileText className="h-4 w-4 mr-2" />
              {t('project.creator.roles.writer')}
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Palette className="h-4 w-4 mr-2" />
              {t('project.creator.roles.designer')}
            </Badge>
          </div>
        </div>

        {/* Creator Section */}
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <User className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('title')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                {t('project.creator.name')}
              </h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium text-primary mb-2">
                  {t('project.creator.education')}
                </p>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('project.creator.description.part1')}
                <a
                  href="https://ct.kaist.ac.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t('project.creator.description.kaist_ct_link')}
                </a>
                {t('project.creator.description.part2')}
                <a
                  href="https://mac.kaist.ac.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t('project.creator.description.maclab_link')}
                </a>
                {t('project.creator.description.part3')}
                <a
                  href="https://ismir2025.ismir.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t('project.creator.description.ismir_link')}
                </a>
                {t('project.creator.description.part4')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
              <Button
                variant="outline"
                onClick={handleEmailClick}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                jh.bae@kaist.ac.kr
              </Button>
              <Button
                variant="outline"
                onClick={handleWebsiteClick}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                joonhyungbae.com
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* License Section */}
        <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl text-green-800 dark:text-green-200">
                {t('license.title')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                {t('license.description')}
              </p>
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                  🎓 {t('license.researchUse')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground">
            {t('footer')}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Credit;
