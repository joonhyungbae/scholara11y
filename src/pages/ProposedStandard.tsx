import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CodeBlock } from "@/components/CodeBlock";
import { Download, Palette, Type, Contrast, Layers, FileImage, ExternalLink, Check, Code } from "lucide-react";
import { toast } from "sonner";

const ProposedStandard = () => {
  const { t } = useTranslation('proposedStandard');

  const okabeItoColors = [
    { name: "Black", hex: "#000000", rgb: "0, 0, 0" },
    { name: "Orange", hex: "#E69F00", rgb: "230, 159, 0" },
    { name: "Sky Blue", hex: "#56B4E9", rgb: "86, 180, 233" },
    { name: "Bluish Green", hex: "#009E73", rgb: "0, 158, 115" },
    { name: "Yellow", hex: "#F0E442", rgb: "240, 228, 66" },
    { name: "Blue", hex: "#0072B2", rgb: "0, 114, 178" },
    { name: "Vermillion", hex: "#D55E00", rgb: "213, 94, 0" },
    { name: "Reddish Purple", hex: "#CC79A7", rgb: "204, 121, 167" }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t('principles.color.copied'));
  };

  const pythonCode = `# proposed_standard_2025.py
import matplotlib.pyplot as plt
import numpy as np

class ProposedStandard2025:
    # Okabe-Ito Palette
    COLORS = ['#000000', '#E69F00', '#56B4E9', '#009E73',
              '#F0E442', '#0072B2', '#D55E00', '#CC79A7']

    # Hatching Patterns
    PATTERNS = ['/', '\\\\', '|', '-', '+', 'x', 'o', '.']

    def create_accessible_chart(self, data, title, alt_text):
        plt.rcParams.update({
            'font.size': 12,
            'font.family': 'Arial',
            'axes.titlesize': 16,
            'axes.labelsize': 14,
            'axes.linewidth': 1.5,
            'axes.spines.top': False,
            'axes.spines.right': False
        })

        fig, ax = plt.subplots(figsize=(10, 6))

        # Bar chart example
        bars = ax.bar(range(len(data)), data,
                      color=self.COLORS[:len(data)],
                      edgecolor='black', linewidth=2)

        # Add patterns
        for bar, pattern in zip(bars, self.PATTERNS):
            bar.set_hatch(pattern)

        # Direct labeling
        for bar in bars:
            height = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., height,
                   f'{height:.1f}', ha='center', va='bottom',
                   fontweight='bold')

        ax.set_title(title, fontweight='bold', pad=20)
        ax.grid(axis='y', alpha=0.3, linestyle='--')

        # Save with metadata in multiple formats
        metadata = {'Title': title, 'Description': alt_text}
        # SVG for vector graphics (recommended)
        plt.savefig('accessible_chart.svg', format='svg',
                   metadata=metadata, dpi=300, bbox_inches='tight')
        # PNG for web display
        plt.savefig('accessible_chart.png', format='png',
                   dpi=300, bbox_inches='tight')

        return fig

    def create_line_chart(self, x_data, y_data, title):
        """Create accessible line chart with multiple series"""
        fig, ax = plt.subplots(figsize=(10, 6))

        colors = self.COLORS[1:4]  # Skip black for lines
        linestyles = ['-', '--', '-.']

        for i, (y, label) in enumerate(zip(y_data, ['Series A', 'Series B', 'Series C'])):
            ax.plot(x_data, y, color=colors[i], linewidth=2.5,
                   linestyle=linestyles[i], label=label, marker='o',
                   markersize=4, markevery=5)

        ax.set_xlabel('Time (s)', fontweight='bold')
        ax.set_ylabel('Amplitude', fontweight='bold')
        ax.set_title(title, fontweight='bold', pad=20)
        ax.legend(loc='best', frameon=True, fancybox=False, shadow=False)
        ax.grid(True, alpha=0.3, linestyle='--')

        return fig

# Usage examples
gs = ProposedStandard2025()

# Bar chart
data = [23.5, 45.2, 67.8, 34.1, 89.3, 12.6]
gs.create_accessible_chart(data, 'Research Results',
    'Bar chart showing research results across 6 conditions')

# Line chart
x = np.linspace(0, 10, 50)
y1 = np.sin(x)
y2 = np.cos(x)
y3 = np.sin(x) * np.exp(-x/10)
gs.create_line_chart(x, [y1, y2, y3], 'Time Series Comparison')`;

  const rCode = `# proposed_standard.R
library(ggplot2)

# Okabe-Ito Palette
okabe_ito <- c("#000000", "#E69F00", "#56B4E9", "#009E73",
               "#F0E442", "#0072B2", "#D55E00", "#CC79A7")

# Accessible theme
theme_accessible <- function() {
  theme_minimal(base_size = 14) +
  theme(
    text = element_text(family = "Arial"),
    plot.title = element_text(size = 16, face = "bold"),
    axis.text = element_text(size = 12),
    axis.title = element_text(size = 14, face = "bold"),
    legend.position = "bottom",
    legend.title = element_text(face = "bold"),
    panel.grid.minor = element_blank(),
    panel.grid.major = element_line(color = "gray90"),
    plot.background = element_rect(fill = "white", color = NA),
    panel.background = element_rect(fill = "white", color = NA)
  )
}

# Bar chart function
create_accessible_bar_chart <- function(data, title) {
  ggplot(data, aes(x = category, y = value, fill = group)) +
    geom_bar(stat = "identity", position = "dodge",
             color = "black", linewidth = 1) +
    scale_fill_manual(values = okabe_ito[2:4]) +
    labs(
      title = title,
      x = "Category",
      y = "Value",
      fill = "Group"
    ) +
    theme_accessible() +
    geom_text(aes(label = value),
              position = position_dodge(width = 0.9),
              vjust = -0.5, size = 4, fontface = "bold")
}

# Line chart function
create_accessible_line_chart <- function(data, title) {
  ggplot(data, aes(x = time, y = value, color = series, linetype = series)) +
    geom_line(linewidth = 1.2) +
    geom_point(size = 2, shape = 21, fill = "white") +
    scale_color_manual(values = okabe_ito[2:4]) +
    scale_linetype_manual(values = c("solid", "dashed", "dotted")) +
    labs(
      title = title,
      x = "Time (s)",
      y = "Amplitude",
      color = "Series",
      linetype = "Series"
    ) +
    theme_accessible()
}

# Usage examples

# Bar chart data
bar_data <- data.frame(
  category = rep(c("A", "B", "C", "D"), each = 3),
  group = rep(c("Group 1", "Group 2", "Group 3"), 4),
  value = c(23, 45, 32, 56, 43, 54, 67, 45, 38, 34, 56, 48)
)

bar_plot <- create_accessible_bar_chart(bar_data, "Accessible Bar Chart with ggplot2")
ggsave("accessible_bar_chart.pdf", bar_plot, width = 10, height = 6, dpi = 300)

# Line chart data
line_data <- data.frame(
  time = rep(1:50, 3),
  value = c(
    sin(1:50 / 5) + rnorm(50, 0, 0.1),
    cos(1:50 / 5) + rnorm(50, 0, 0.1),
    sin(1:50 / 5) * 0.5 + rnorm(50, 0, 0.1)
  ),
  series = rep(c("Series A", "Series B", "Series C"), each = 50)
)

line_plot <- create_accessible_line_chart(line_data, "Time Series with Multiple Encoding")
ggsave("accessible_line_chart.pdf", line_plot, width = 10, height = 6, dpi = 300)`;

  const cssCode = `/* proposed-standard-2025.css */
:root {
  /* Okabe-Ito Color Variables */
  --ps-black: #000000;
  --ps-orange: #E69F00;
  --ps-sky-blue: #56B4E9;
  --ps-bluish-green: #009E73;
  --ps-yellow: #F0E442;
  --ps-blue: #0072B2;
  --ps-vermillion: #D55E00;
  --ps-reddish-purple: #CC79A7;
  
  /* Typography */
  --ps-font-stack: 'Atkinson Hyperlegible', -apple-system, Arial, sans-serif;
  --ps-font-size: clamp(16px, 2.5vw, 18px);
  --ps-line-height: 1.5;
  --ps-heading-weight: 700;
  
  /* Contrast */
  --ps-contrast-aa: 4.5;
  --ps-contrast-aaa: 7.0;
}

.accessible-content {
  font-family: var(--ps-font-stack);
  font-size: var(--ps-font-size);
  line-height: var(--ps-line-height);
  color: var(--ps-black);
  background: white;
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
  .accessible-content {
    --gs-black: #000000;
    background: #FFFFFF;
    font-weight: 500;
  }
}

/* Color Classes */
.color-orange { color: var(--ps-orange); }
.color-sky-blue { color: var(--ps-sky-blue); }
.color-bluish-green { color: var(--ps-bluish-green); }
.color-yellow { color: var(--ps-yellow); }
.color-blue { color: var(--ps-blue); }
.color-vermillion { color: var(--ps-vermillion); }
.color-reddish-purple { color: var(--ps-reddish-purple); }`;

  const latexCode = `% proposed-standard.sty
\\ProvidesPackage{proposed-standard}[2025/01/01 Proposed Standard Accessibility]

\\RequirePackage{graphicx}
\\RequirePackage{xcolor}
\\RequirePackage[tagged]{accessibility}
\\RequirePackage{hyperref}

% Okabe-Ito Color Definitions
\\definecolor{oiOrange}{HTML}{E69F00}
\\definecolor{oiSkyBlue}{HTML}{56B4E9}
\\definecolor{oiBluishGreen}{HTML}{009E73}
\\definecolor{oiYellow}{HTML}{F0E442}
\\definecolor{oiBlue}{HTML}{0072B2}
\\definecolor{oiVermillion}{HTML}{D55E00}
\\definecolor{oiPurple}{HTML}{CC79A7}

% Accessible Figure Macro
\\newcommand{\\accessfig}[4]{
  \\begin{figure}[ht]
    \\centering
    \\includegraphics[width=#1\\textwidth]{#2}
    \\caption{#3}
    \\Description{#4}
  \\end{figure}
}

% Usage:
% \\accessfig{0.8}{chart.pdf}{Research Results}{Bar chart showing...}`;

  const integratedPythonCode = `def create_proposed_standard_visualization(data):
    """${t('code.comments.integratedFunction')}"""

    # ${t('code.comments.color')}
    colors = ['#E69F00', '#56B4E9', '#009E73', '#0072B2']

    # ${t('code.comments.typography')}
    plt.rcParams.update({
        'font.family': ['Atkinson Hyperlegible', 'Arial'],
        'font.size': 12,  # ${t('code.comments.minSize')}
        'axes.labelweight': 'bold'  # ${t('code.comments.clarity')}
    })

    # ${t('code.comments.contrast')}
    bars = plt.bar(x, y, color=colors,
                   edgecolor='black', linewidth=2)

    # ${t('code.comments.dualEncoding')}
    patterns = ['///', '\\\\\\\\\\\\', '|||', '---']
    for bar, pattern in zip(bars, patterns):
        bar.set_hatch(pattern)

    # ${t('code.comments.vectorFirst')}
    plt.savefig('chart.svg', format='svg',
                metadata={'Description': 'Accessible chart'})`;

  const validationItems = [
    {
      item: t('validation.items.contrast.item'),
      value: t('validation.items.contrast.value'),
      tool: t('validation.items.contrast.tool'),
      link: "https://webaim.org/resources/contrastchecker/"
    },
    {
      item: t('validation.items.colorblind.item'),
      value: t('validation.items.colorblind.value'),
      tool: t('validation.items.colorblind.tool'),
      link: "https://colororacle.org/"
    },
    {
      item: t('validation.items.pdf.item'),
      value: t('validation.items.pdf.value'),
      tool: t('validation.items.pdf.tool'),
      link: "https://pac.pdf-accessibility.org/"
    },
    {
      item: t('validation.items.web.item'),
      value: t('validation.items.web.value'),
      tool: t('validation.items.web.tool'),
      link: "https://wave.webaim.org/"
    }
  ];

  return (
    <Layout>
      <div className="space-y-12">
        <PageHeader
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          subtitleClassName="text-primary font-semibold"
          description={t('hero.description')}
        />


        {/* Generated Examples */}
        <PageSection
          title={t('charts.title')}
          subtitle={t('charts.subtitle')}
          icon={<FileImage className="h-5 w-5" />}
        >
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {/* Bar Chart Example */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="h-5 w-5" />
                  {t('charts.barChart.title')}
                </CardTitle>
                <CardDescription>
                  {t('charts.barChart.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border overflow-hidden">
                    <img
                      src="/accessible_bar_chart.png"
                      alt="Quarterly Research Results - Bar chart showing research results across 6 quarters"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="/accessible_bar_chart.svg" download="accessible_bar_chart.svg">
                        <Download className="h-3 w-3 mr-2" />
                        Download SVG
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="/accessible_bar_chart.png" download="accessible_bar_chart.png">
                        <Download className="h-3 w-3 mr-2" />
                        Download PNG
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Line Chart Example */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="h-5 w-5" />
                  {t('charts.lineChart.title')}
                </CardTitle>
                <CardDescription>
                  {t('charts.lineChart.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border overflow-hidden">
                    <img
                      src="/accessible_line_chart.png"
                      alt="Time Series Comparison - Line chart with multiple series"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="/accessible_line_chart.svg" download="accessible_line_chart.svg">
                        <Download className="h-3 w-3 mr-2" />
                        Download SVG
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="/accessible_line_chart.png" download="accessible_line_chart.png">
                        <Download className="h-3 w-3 mr-2" />
                        Download PNG
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scatter Plot Example */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="h-5 w-5" />
                  {t('charts.scatterPlot.title')}
                </CardTitle>
                <CardDescription>
                  {t('charts.scatterPlot.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border overflow-hidden">
                    <img
                      src="/accessible_scatter_plot.png"
                      alt="Performance vs Experience Scatter Plot - Scatter plot with data points"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="/accessible_scatter_plot.svg" download="accessible_scatter_plot.svg">
                        <Download className="h-3 w-3 mr-2" />
                        Download SVG
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="/accessible_scatter_plot.png" download="accessible_scatter_plot.png">
                        <Download className="h-3 w-3 mr-2" />
                        Download PNG
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        {/* Integrated Code Examples */}
        <PageSection
          title={t('code.title')}
          icon={<Code className="h-5 w-5" />}
        >
          
          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="python">{t('code.python.title')}</TabsTrigger>
              <TabsTrigger value="r">{t('code.r.title')}</TabsTrigger>
              <TabsTrigger value="css">{t('code.css.title')}</TabsTrigger>
              <TabsTrigger value="latex">{t('code.latex.title')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="python">
              <div className="space-y-4">
                <CodeBlock
                  code={pythonCode}
                  language="python"
                  title={
                    <div className="flex items-center justify-between">
                      <span>{t('code.python.description')}</span>
                      <Button variant="outline" size="sm" asChild className="gap-2">
                        <a href="/proposed_standard_2025.py" download="proposed_standard_2025.py">
                          <Download className="h-3 w-3" />
                          {t('code.pythonFileDownload')}
                        </a>
                      </Button>
                    </div>
                  }
                />
              </div>
            </TabsContent>
            
            <TabsContent value="r">
              <CodeBlock code={rCode} language="r" title={t('code.r.description')} />
            </TabsContent>
            
            <TabsContent value="css">
              <CodeBlock code={cssCode} language="css" title={t('code.css.description')} />
            </TabsContent>
            
            <TabsContent value="latex">
              <CodeBlock code={latexCode} language="latex" title={t('code.latex.description')} />
            </TabsContent>
          </Tabs>
        </PageSection>

        {/* 5 Core Principles */}
        <PageSection
          title={t('principles.title')}
          icon={<Palette className="h-5 w-5" />}
        >
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - Color Palette */}
            <Card className="col-span-full lg:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{t('principles.color.title')}</CardTitle>
                    <CardDescription>{t('principles.color.description')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-3">
                  {okabeItoColors.map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => copyToClipboard(color.hex)}
                      className="group relative aspect-square rounded-lg transition-all hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      style={{ backgroundColor: color.hex }}
                      aria-label={`${color.name}: ${color.hex}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                        <span className="text-white text-xs font-mono">{color.hex}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Card 2 - Typography */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Type className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{t('principles.typography.title')}</CardTitle>
                    <CardDescription>{t('principles.typography.description')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-2xl font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>
                      Aa Bb Cc 123
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{t('principles.typography.settings')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 - Contrast */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Contrast className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{t('principles.contrast.title')}</CardTitle>
                    <CardDescription>{t('principles.contrast.description')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="rounded-lg bg-foreground p-4">
                    <p className="text-background font-semibold">{t('principles.contrast.aa')}</p>
                  </div>
                  <div className="rounded-lg bg-foreground p-4">
                    <p className="text-background font-semibold">{t('principles.contrast.aaa')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 - Dual Encoding */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{t('principles.dualEncoding.title')}</CardTitle>
                    <CardDescription>{t('principles.dualEncoding.description')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded border-2 border-border"
                      style={{
                        backgroundColor: okabeItoColors[i + 1].hex,
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px)`
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Card 5 - File Format */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <FileImage className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{t('principles.fileFormat.title')}</CardTitle>
                    <CardDescription>{t('principles.fileFormat.description')}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <p className="font-mono font-semibold text-primary">{t('principles.fileFormat.priority')}</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {t('principles.fileFormat.resolution')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        {/* Contrast Ratios Table */}
        <PageSection
          title={t('contrastTable.title')}
          subtitle={t('contrastTable.subtitle')}
        >
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('contrastTable.elementType')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('contrastTable.aaGrade')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('contrastTable.aaaGrade')}
                      </th>
                      <th className="border-b border-border px-6 py-4 text-left text-sm font-semibold text-foreground">
                        {t('contrastTable.textSizeCriteria')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground">{t('contrastTable.normalText')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">4.5:1</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">7:1</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">&lt; 18pt (24px)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground">{t('contrastTable.largeText')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">3:1</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">4.5:1</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">≥ 18pt or 14pt Bold</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-foreground">{t('contrastTable.uiComponents')}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">3:1</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">-</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{t('contrastTable.chartsIconsButtons')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </PageSection>

        {/* Integration Synergy Section */}
        <PageSection
          title={t('synergy.title')}
          subtitle={t('synergy.intro')}
          className="space-y-8"
        >
          <div className="text-center space-y-2 mb-6">
            <p className="text-xl text-primary font-semibold">{t('synergy.subtitle')}</p>
          </div>

          {/* Integration Matrix - 4 Layers */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">{t('synergy.layers.title')}</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Layer 1 */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{t('synergy.layers.layer1.title')}</Badge>
                  <CardTitle className="text-lg">{t('synergy.layers.layer1.combination')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.synergy')}</Badge>
                    <p className="text-sm">{t('synergy.layers.layer1.synergy')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.application')}</Badge>
                    <p className="text-sm">{t('synergy.layers.layer1.applications')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.users')}</Badge>
                    <p className="text-sm text-muted-foreground">{t('synergy.layers.layer1.users')}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Layer 2 */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{t('synergy.layers.layer2.title')}</Badge>
                  <CardTitle className="text-lg">{t('synergy.layers.layer2.combination')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.role')}</Badge>
                    <p className="text-sm">{t('synergy.layers.layer2.synergy')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.standard')}</Badge>
                    <p className="text-sm">{t('synergy.layers.layer2.applications')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.users')}</Badge>
                    <p className="text-sm text-muted-foreground">{t('synergy.layers.layer2.users')}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Layer 3 */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{t('synergy.layers.layer3.title')}</Badge>
                  <CardTitle className="text-lg">{t('synergy.layers.layer3.combination')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.backup')}</Badge>
                    <p className="text-sm">{t('synergy.layers.layer3.synergy')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.application')}</Badge>
                    <p className="text-sm">{t('synergy.layers.layer3.applications')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.users')}</Badge>
                    <p className="text-sm text-muted-foreground">{t('synergy.layers.layer3.users')}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Layer 4 */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{t('synergy.layers.layer4.title')}</Badge>
                  <CardTitle className="text-lg">{t('synergy.layers.layer4.combination')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.preservation')}</Badge>
                    <p className="text-sm">{t('synergy.layers.layer4.synergy')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.metadata')}</Badge>
                    <p className="text-sm">{t('synergy.layers.layer4.applications')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="shrink-0">{t('synergy.badges.users')}</Badge>
                    <p className="text-sm text-muted-foreground">{t('synergy.layers.layer4.users')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Real-World Scenarios */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">{t('synergy.scenarios.title')}</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="scenario1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <span className="text-left">{t('synergy.scenarios.scenario1.title')}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 ml-11">
                    {(t('synergy.scenarios.scenario1.steps', { returnObjects: true }) as string[]).map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-semibold">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="scenario2">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <span className="text-left">{t('synergy.scenarios.scenario2.title')}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 ml-11">
                    {(t('synergy.scenarios.scenario2.steps', { returnObjects: true }) as string[]).map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-semibold">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="scenario3">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <span className="text-left">{t('synergy.scenarios.scenario3.title')}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 ml-11">
                    {(t('synergy.scenarios.scenario3.steps', { returnObjects: true }) as string[]).map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-semibold">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Integration Results Table */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">{t('synergy.results.title')}</h3>
            <p className="text-muted-foreground">{t('synergy.results.subtitle')}</p>
            
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">{t('synergy.results.table.challenge')}</th>
                      <th className="px-4 py-3 text-left font-semibold">{t('synergy.results.table.singleLimit')}</th>
                      <th className="px-4 py-3 text-left font-semibold">{t('synergy.results.table.integrated')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {(t('synergy.results.items', { returnObjects: true }) as Array<{challenge: string, singleLimit: string, integrated: string}>).map((item, index) => (
                      <tr key={index} className="hover:bg-muted/50">
                        <td className="px-4 py-3 font-medium">{item.challenge}</td>
                        <td className="px-4 py-3 text-muted-foreground">{item.singleLimit}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                            <Check className="h-3 w-3" />
                            {item.integrated}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-6 border-2 border-primary/20">
              <p className="text-center text-lg font-semibold text-foreground">
                {t('synergy.results.conclusion')}
              </p>
            </div>
          </div>
        </PageSection>

        {/* Validation Matrix */}
        <PageSection
          title={t('validation.title')}
          icon={<Check className="h-5 w-5" />}
        >
          
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">{t('validation.item')}</th>
                    <th className="px-4 py-3 text-left font-semibold">{t('validation.standard')}</th>
                    <th className="px-4 py-3 text-left font-semibold">{t('validation.tool')}</th>
                    <th className="px-4 py-3 text-center font-semibold">{t('validation.test')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {validationItems.map((item, index) => (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="px-4 py-3 font-medium">{item.item}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                          <Check className="h-3 w-3" />
                          {item.value}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{item.tool}</td>
                      <td className="px-4 py-3 text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <ExternalLink className="h-3 w-3" />
                            {t('validation.test')}
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </PageSection>
      </div>
    </Layout>
  );
};

export default ProposedStandard;