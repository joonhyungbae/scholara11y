import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { BookOpen, Palette, Type, FileText, Code, CheckSquare, Building2, Download, Library, Menu, X, Star } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
  structuredData?: object;
}

export function Layout({ children, pageTitle, pageDescription, pageKeywords, structuredData }: LayoutProps) {
  const location = useLocation();
  const { t, i18n } = useTranslation('common');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: t('nav.home'), href: "/", icon: BookOpen },
    { name: t('nav.goldenStandard'), href: "/golden-standard", icon: Star },
    { name: t('nav.regulations'), href: "/regulations", icon: FileText },
    { name: t('nav.colors'), href: "/colors", icon: Palette },
    { name: t('nav.typography'), href: "/typography", icon: Type },
    { name: t('nav.altText'), href: "/alt-text", icon: FileText },
    { name: t('nav.codeLibrary'), href: "/code-library", icon: Code },
    { name: t('nav.pdfChecklist'), href: "/pdf-checklist", icon: CheckSquare },
    { name: t('nav.publishers'), href: "/publishers", icon: Building2 },
    { name: t('nav.downloads'), href: "/downloads", icon: Download },
    { name: t('nav.references'), href: "/references", icon: Library },
  ];

  const fullTitle = pageTitle ? `${pageTitle} | Scholara11y` : "Scholara11y";
  const description = pageDescription || "연구자와 편집자를 위한 WCAG 2.2 기반 학술 출판 접근성 종합 가이드. 색상 팔레트, 타이포그래피, 코드 스니펫, PDF 체크리스트 제공.";
  const keywords = pageKeywords ? ["WCAG 2.2", "학술 출판", "접근성", ...pageKeywords].join(", ") : "WCAG 2.2, 학술 출판, 접근성, Okabe-Ito, 색맹, PDF/UA, LaTeX, 학술 논문, 시각화";

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://scholara11y.vercel.app${location.pathname}`} />
        {pageKeywords && pageKeywords.length > 0 && (
          <meta name="article:tag" content={pageKeywords.join(",")} />
        )}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      <div key={i18n.language} className="min-h-screen bg-background">
      {/* Mobile/Tablet Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 border-b border-sidebar-border bg-sidebar flex items-center px-4" role="banner">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
          aria-label="메뉴 토글"
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        <div className="ml-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-base font-semibold text-sidebar-foreground">
            Scholara11y
          </span>
        </div>
      </header>

      {/* Overlay for mobile/tablet */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 border-r border-sidebar-border bg-sidebar transition-transform duration-300",
          "lg:translate-x-0 lg:z-40",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="주요 네비게이션"
      >
        <div className="flex h-full flex-col">
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 pb-2 lg:pt-4 pt-20" aria-label="사이트 네비게이션">
            <ul role="list">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <li key={item.name} role="listitem">
                    <Link
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <footer className="border-t border-sidebar-border px-3 py-3 flex-shrink-0" role="contentinfo">
            <LanguageSwitcher />
          </footer>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0" role="main">
        <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-4 py-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
    </>
  );
}
