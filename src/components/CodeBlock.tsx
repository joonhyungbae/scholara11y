import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string | ReactNode;
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('common');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success(t('codeBlock.copied'));
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error(t('codeBlock.copyFailed') || "복사에 실패했습니다");
    }
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border border-border">
      {title && (
        <div className="border-b border-border bg-muted px-4 py-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
        </div>
      )}
      
      <div className="relative">
        <pre className="m-0 overflow-x-auto p-4">
          <code className="text-sm">{code}</code>
        </pre>
        
        <Button
          size="sm"
          variant="secondary"
          className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-3 w-3" />
              {t('codeBlock.copied')}
            </>
          ) : (
            <>
              <Copy className="mr-2 h-3 w-3" />
              {t('codeBlock.copy')}
            </>
          )}
        </Button>
      </div>

      <div className="border-t border-border bg-muted/50 px-4 py-1.5">
        <span className="text-xs font-mono text-muted-foreground">{language}</span>
      </div>
    </div>
  );
}
