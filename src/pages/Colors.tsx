import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Colors = () => {
  const { t } = useTranslation('colors');
  
  const okabeItoColors = [
    { name: t('okabePalette.colors.black'), hex: "#000000", rgb: "0, 0, 0" },
    { name: t('okabePalette.colors.orange'), hex: "#E69F00", rgb: "230, 159, 0" },
    { name: t('okabePalette.colors.skyBlue'), hex: "#56B4E9", rgb: "86, 180, 233" },
    { name: t('okabePalette.colors.blueGreen'), hex: "#009E73", rgb: "0, 158, 115" },
    { name: t('okabePalette.colors.yellow'), hex: "#F0E442", rgb: "240, 228, 66" },
    { name: t('okabePalette.colors.blue'), hex: "#0072B2", rgb: "0, 114, 178" },
    { name: t('okabePalette.colors.vermillion'), hex: "#D55E00", rgb: "213, 94, 0" },
    { name: t('okabePalette.colors.purple'), hex: "#CC79A7", rgb: "204, 121, 167" },
  ];

  const cssCode = `:root {
  --oi-black: #000000;
  --oi-orange: #E69F00;
  --oi-sky-blue: #56B4E9;
  --oi-bluish-green: #009E73;
  --oi-yellow: #F0E442;
  --oi-blue: #0072B2;
  --oi-vermillion: #D55E00;
  --oi-reddish-purple: #CC79A7;
}`;

  const pythonCode = `import matplotlib.pyplot as plt
import matplotlib as mpl

# Okabe-Ito color palette
OKABE_ITO_COLORS = ['#000000', '#E69F00', '#56B4E9', '#009E73',
                    '#F0E442', '#0072B2', '#D55E00', '#CC79A7']

# Global settings
plt.rcParams['axes.prop_cycle'] = plt.cycler(color=OKABE_ITO_COLORS)

def create_accessible_bar_chart(data, labels):
    """Create colorblind-safe bar chart"""
    patterns = ['/', '\\\\', '|', '-', '+', 'x', 'o', '.']
    colors = OKABE_ITO_COLORS[:len(data)]
    
    fig, ax = plt.subplots(figsize=(10, 6))
    bars = ax.bar(labels, data, color=colors, 
                  edgecolor='black', linewidth=2)
    
    # Add patterns for dual encoding
    for bar, pattern in zip(bars, patterns):
        bar.set_hatch(pattern)
    
    # Direct labeling
    for bar in bars:
        height = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2., height,
                f'{height:.1f}', ha='center', va='bottom', 
                fontsize=12, fontweight='bold')
    
    ax.set_ylabel('Values', fontsize=14, fontweight='bold')
    ax.set_title('Accessible Bar Chart', fontsize=16, fontweight='bold')
    ax.grid(axis='y', alpha=0.3, linestyle='--')
    ax.set_axisbelow(True)
    
    plt.tight_layout()
    return fig

# Usage example
data = [25, 32, 28, 35]
labels = ['Q1', 'Q2', 'Q3', 'Q4']
fig = create_accessible_bar_chart(data, labels)
plt.savefig('accessible_chart.pdf', dpi=300, bbox_inches='tight')`;

  const rCode = `library(ggplot2)

# Okabe-Ito palette definition
okabe_ito <- c("#000000", "#E69F00", "#56B4E9", "#009E73",
               "#F0E442", "#0072B2", "#D55E00", "#CC79A7")

# Accessible theme
theme_accessible <- function() {
  theme_minimal(base_size = 14) +
  theme(
    text = element_text(family = "Arial"),
    plot.title = element_text(size = 16, face = "bold"),
    axis.text = element_text(size = 12),
    legend.position = "bottom",
    panel.grid.minor = element_blank(),
    panel.border = element_rect(colour = "black", 
                                 fill = NA, linewidth = 1)
  )
}

# Usage example
ggplot(data, aes(x = category, y = value, fill = group)) +
  geom_bar(stat = "identity", position = "dodge",
           color = "black", linewidth = 1) +
  geom_text(aes(label = value), 
            position = position_dodge(width = 0.9),
            vjust = -0.5, fontface = "bold") +
  scale_fill_manual(values = okabe_ito) +
  labs(title = "Accessible Bar Chart",
       x = "Category", y = "Values") +
  theme_accessible()`;

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "색상 - 학술 출판 접근성 가이드",
    "description": "색각 이상자를 위한 Okabe-Ito 색상 팔레트, 대비율 계산, 접근성 있는 시각화 디자인 가이드라인",
    "url": "https://scholara11y.vercel.app/colors",
    "isPartOf": {
      "@type": "WebSite",
      "name": "학술 출판 접근성 표준 가이드 2025",
      "url": "https://scholara11y.vercel.app/"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Okabe-Ito 색상 팔레트",
        "description": "색각 이상자가 구분하기 쉬운 8가지 색상 팔레트"
      },
      {
        "@type": "Thing",
        "name": "색상 대비율",
        "description": "WCAG 2.2 기반 텍스트와 배경 간 대비율 계산"
      },
      {
        "@type": "Thing",
        "name": "색각 이상 접근성",
        "description": "색맹, 색약 등 색각 이상자를 위한 디자인 가이드라인"
      }
    ],
    "mainEntity": {
      "@type": "ItemList",
      "name": "색상 페이지 주요 섹션",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Okabe-Ito 색상 팔레트"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "대비율 계산 도구"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "코드 예제"
        }
      ]
    }
  };

  return (
    <Layout
      pageTitle="색상"
      pageDescription="색각 이상자를 위한 Okabe-Ito 색상 팔레트와 WCAG 2.2 기반 대비율 가이드라인. 접근성 있는 시각화 디자인을 위한 색상 선택 도구와 코드 예제 제공."
      pageKeywords={["Okabe-Ito", "색상 팔레트", "색맹", "색각 이상", "대비율", "색상 접근성", "WCAG 색상 가이드라인", "접근성 색상"]}
      structuredData={pageStructuredData}
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Okabe-Ito Palette */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t('okabePalette.title')}</h2>
            <p className="mt-2 text-muted-foreground">
              {t('okabePalette.description')}
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {okabeItoColors.map((color) => (
              <Card key={color.hex}>
                <CardContent className="p-4">
                  <div
                    className="mb-3 h-20 w-full rounded-lg border-2 border-border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <h4 className="font-semibold text-foreground">{color.name}</h4>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">
                    {color.hex}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    RGB: {color.rgb}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <CodeBlock
            code={cssCode}
            language="CSS"
            title={t('okabePalette.cssTitle')}
          />
        </div>

        {/* Contrast Ratios */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t('contrastRatios.title')}</h2>
            <p className="mt-2 text-muted-foreground">
              {t('contrastRatios.description')}
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('contrastRatios.table.element')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('contrastRatios.table.levelAA')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('contrastRatios.table.levelAAA')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('contrastRatios.table.normalText')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground">{t('contrastRatios.table.normalText')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('contrastRatios.table.ratio45')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('contrastRatios.table.ratio7')}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">&lt; 18pt (24px)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground">{t('contrastRatios.table.largeText')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('contrastRatios.table.ratio3')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('contrastRatios.table.ratio45')}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">≥ 18pt or 14pt Bold</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground">{t('contrastRatios.table.uiComponents')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{t('contrastRatios.table.ratio3')}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">-</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">Charts, icons, buttons</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Python Code */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t('pythonExample.title')}</h2>
            <p className="mt-2 text-muted-foreground">
              {t('pythonExample.description')}
            </p>
          </div>

          <CodeBlock
            code={pythonCode}
            language="Python"
            title={t('pythonExample.title')}
          />
        </div>

        {/* R Code */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t('rExample.title')}</h2>
            <p className="mt-2 text-muted-foreground">
              {t('rExample.description')}
            </p>
          </div>

          <CodeBlock
            code={rCode}
            language="R"
            title={t('rExample.title')}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <span>⚠️</span>
              {t('bestPractices.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p><strong>{t('bestPractices.items.palette')}:</strong> {t('bestPractices.items.palette')}</p>
            <p><strong>{t('bestPractices.items.patterns')}:</strong> {t('bestPractices.items.patterns')}</p>
            <p><strong>{t('bestPractices.items.contrast')}:</strong> {t('bestPractices.items.contrast')}</p>
            <p><strong>{t('bestPractices.items.labels')}:</strong> {t('bestPractices.items.labels')}</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Colors;
