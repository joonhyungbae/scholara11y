import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "elevated";
  icon?: ReactNode;
}

export function ContentCard({
  title,
  description,
  children,
  className = "",
  variant = "default",
  icon
}: ContentCardProps) {
  const variantStyles = {
    default: "",
    bordered: "border-2 border-primary/20",
    elevated: "shadow-lg border-2 border-border/50"
  };

  return (
    <Card className={cn(variantStyles[variant], className)}>
      {(title || description || icon) && (
        <CardHeader>
          <div className="flex items-start gap-3">
            {icon && <div className="text-primary mt-1">{icon}</div>}
            <div className="flex-1">
              {title && <CardTitle className="text-lg">{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </div>
          </div>
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
