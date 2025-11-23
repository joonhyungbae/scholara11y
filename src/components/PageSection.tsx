import { ReactNode } from "react";

interface PageSectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  icon?: ReactNode;
}

export function PageSection({ title, subtitle, children, className = "", id, icon }: PageSectionProps) {
  return (
    <section className={`space-y-6 ${className}`} id={id}>
      {(title || subtitle) && (
        <header className="space-y-2">
          {title && (
            <div className="flex items-center gap-3">
              {icon && <div className="text-primary">{icon}</div>}
              <h2 className="text-2xl font-bold text-foreground">
                {title}
              </h2>
            </div>
          )}
          {subtitle && (
            <p className="text-muted-foreground ml-9">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
