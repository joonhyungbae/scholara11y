import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function NavCard({ title, description, icon: Icon, href }: NavCardProps) {
  return (
    <Link to={href}>
      <Card className="group h-full border-2 transition-all hover:border-primary hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground group-hover:text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
