import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NavCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  variant?: 'default' | 'featured';
}

export function NavCard({ title, description, icon: Icon, href, variant = 'default' }: NavCardProps) {
  const { t } = useTranslation('common');
  const isFeatured = variant === 'featured';

  return (
    <Link to={href}>
      <Card className={`group h-full transition-all hover:shadow-lg ${
        isFeatured
          ? 'border-2 border-primary bg-primary/5 hover:border-primary/80 ring-2 ring-primary/20'
          : 'border-2 hover:border-primary'
      }`}>
        <CardContent className={`p-6 ${isFeatured ? 'relative' : ''}`}>
          {isFeatured && (
            <div className="absolute -top-2 -right-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-sm">
              {t('featured')}
            </div>
          )}
          <div className="flex items-start gap-4">
            <div className={`rounded-lg p-3 transition-colors ${
              isFeatured
                ? 'bg-primary text-primary-foreground'
                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
            }`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold transition-colors ${
                isFeatured
                  ? 'text-primary'
                  : 'text-foreground group-hover:text-primary'
              }`}>
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
            <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
              isFeatured
                ? 'text-primary'
                : 'text-muted-foreground group-hover:text-primary'
            }`} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
