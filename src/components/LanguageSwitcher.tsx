import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  const currentLang = i18n.language?.startsWith('ko') ? 'ko' : 'en';

  return (
    <div className="w-full flex items-center gap-0.5 rounded-lg border border-sidebar-border bg-sidebar-accent/50 p-1">
      <Button
        variant={currentLang === 'en' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className={cn(
          "flex-1 font-medium h-8 transition-all",
          currentLang === 'en' 
            ? "bg-background text-foreground shadow-sm" 
            : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
        )}
        aria-label="Switch to English"
        aria-pressed={currentLang === 'en'}
      >
        EN
      </Button>
      <Button
        variant={currentLang === 'ko' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('ko')}
        className={cn(
          "flex-1 font-medium h-8 transition-all",
          currentLang === 'ko' 
            ? "bg-background text-foreground shadow-sm" 
            : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
        )}
        aria-label="Switch to Korean"
        aria-pressed={currentLang === 'ko'}
      >
        한글
      </Button>
    </div>
  );
}
