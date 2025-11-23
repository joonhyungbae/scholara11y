import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  subtitleClassName?: string;
}

export function PageHeader({ title, subtitle, description, children, subtitleClassName }: PageHeaderProps) {
  return (
    <header className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      {subtitle && (
        <p className={`text-xl ${subtitleClassName || 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      {children}
    </header>
  );
}
