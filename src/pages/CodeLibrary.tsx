import { Layout } from "@/components/Layout";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const CodeLibrary = () => {
  const { t } = useTranslation('codeLibrary');

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "코드 라이브러리 - 학술 출판 접근성 가이드",
    "description": "접근성 있는 학술 출판을 위한 즉시 사용 가능한 코드 스니펫과 템플릿 모음. LaTeX, CSS, JavaScript, Python 등 다양한 프로그래밍 언어 지원.",
    "url": "https://scholara11y.vercel.app/code-library",
    "isPartOf": {
      "@type": "WebSite",
      "name": "학술 출판 접근성 표준 가이드 2025",
      "url": "https://scholara11y.vercel.app/"
    },
    "about": [
      {
        "@type": "CreativeWork",
        "name": "LaTeX 접근성 템플릿",
        "description": "학술 논문 작성을 위한 접근성 있는 LaTeX 템플릿"
      },
      {
        "@type": "CreativeWork",
        "name": "CSS 색상 팔레트",
        "description": "Okabe-Ito 색상 팔레트를 CSS 변수로 정의한 스타일시트"
      },
      {
        "@type": "CreativeWork",
        "name": "Python 시각화 코드",
        "description": "접근성 있는 데이터 시각화를 위한 Python/Matplotlib 코드"
      }
    ],
    "mainEntity": {
      "@type": "ItemList",
      "name": "코드 라이브러리 카테고리",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "LaTeX 템플릿"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "CSS 스타일시트"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "JavaScript 코드"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Python 스크립트"
        }
      ]
    }
  };

  return (
    <Layout
      pageTitle="코드 라이브러리"
      pageDescription="접근성 있는 학술 출판을 위한 즉시 사용 가능한 코드 스니펫 모음. LaTeX, CSS, JavaScript, Python 등 다양한 언어의 템플릿과 예제 코드 제공."
      pageKeywords={["LaTeX 템플릿", "CSS 접근성", "JavaScript 접근성", "Python 시각화", "코드 스니펫", "학술 출판 코드", "접근성 템플릿"]}
      structuredData={pageStructuredData}
    >
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        {/* Language Tabs */}
        <Tabs defaultValue="python" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="r">R</TabsTrigger>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
          </TabsList>

          {/* Python Tab */}
          <TabsContent value="python" className="space-y-8">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">{t('pythonSection.title')}</h2>
              
              <CodeBlock
                language="python"
                title="wcag_compliant_chart.py"
                code={`import matplotlib.pyplot as plt
import numpy as np

def create_wcag_compliant_chart():
    """${t('comments.wcagCompliant')}"""

    # ${t('comments.settings')}
    plt.rcParams['font.size'] = 12
    plt.rcParams['axes.labelsize'] = 14
    plt.rcParams['axes.titlesize'] = 16
    plt.rcParams['legend.fontsize'] = 12
    plt.rcParams['figure.titlesize'] = 18
    
    # 데이터
    categories = ['Q1', 'Q2', 'Q3', 'Q4']
    values_a = [25, 32, 28, 35]
    values_b = [20, 25, 30, 32]
    
    # 그림 생성
    fig, ax = plt.subplots(figsize=(10, 6))
    
    x = np.arange(len(categories))
    width = 0.35
    
    # Okabe-Ito 색상과 패턴
    bars1 = ax.bar(x - width/2, values_a, width, 
                   label='Series A', color='#0072B2',
                   edgecolor='black', linewidth=2, hatch='///')
    bars2 = ax.bar(x + width/2, values_b, width,
                   label='Series B', color='#D55E00',
                   edgecolor='black', linewidth=2, hatch='\\\\\\\\\\\\')
    
    # 직접 라벨링
    for bars in [bars1, bars2]:
        for bar in bars:
            height = bar.get_height()
            ax.annotate(f'{height}',
                       xy=(bar.get_x() + bar.get_width()/2, height),
                       xytext=(0, 3),
                       textcoords='offset points',
                       ha='center', va='bottom',
                       fontsize=11, fontweight='bold')
    
    # 축 설정
    ax.set_xlabel('Quarter', fontweight='bold')
    ax.set_ylabel('Values', fontweight='bold')
    ax.set_title('Quarterly Performance Comparison', 
                 fontweight='bold', pad=20)
    ax.set_xticks(x)
    ax.set_xticklabels(categories)
    ax.legend(loc='upper left', frameon=True, 
              fancybox=False, shadow=False)
    ax.grid(axis='y', alpha=0.3, linestyle='--')
    ax.set_axisbelow(True)
    
    # y축 범위 설정
    ax.set_ylim(0, max(max(values_a), max(values_b)) * 1.15)
    
    plt.tight_layout()
    
    # 메타데이터 포함 저장
    metadata = {
        'Title': 'Quarterly Performance Comparison',
        'Author': 'Research Team',
        'Description': 'Bar chart comparing Series A and B'
    }
    
    plt.savefig('accessible_chart.svg', format='svg', 
                metadata=metadata, dpi=300, bbox_inches='tight')
    plt.savefig('accessible_chart.pdf', format='pdf', 
                metadata=metadata, dpi=300, bbox_inches='tight')
    
    return fig

# 사용
fig = create_wcag_compliant_chart()
plt.show()`}
              />

              <CodeBlock
                language="python"
                title="okabe_ito_palette.py"
                code={`import matplotlib.pyplot as plt

# Okabe-Ito 색상 팔레트 (색맹 안전)
OKABE_ITO_COLORS = [
    '#000000',  # 검정
    '#E69F00',  # 주황
    '#56B4E9',  # 하늘색
    '#009E73',  # 청록색
    '#F0E442',  # 노랑
    '#0072B2',  # 파랑
    '#D55E00',  # 주홍
    '#CC79A7'   # 자홍
]

# 전역 설정
plt.rcParams['axes.prop_cycle'] = plt.cycler(color=OKABE_ITO_COLORS)

# 이중 인코딩 예시: 색상 + 패턴
def create_accessible_bar_chart(data, labels):
    """색상과 패턴을 함께 사용한 접근성 높은 차트"""
    patterns = ['/', '\\\\', '|', '-', '+', 'x', 'o', '.']
    colors = OKABE_ITO_COLORS[:len(data)]
    
    fig, ax = plt.subplots(figsize=(10, 6))
    bars = ax.bar(labels, data, color=colors, 
                  edgecolor='black', linewidth=2)
    
    # 패턴 추가
    for bar, pattern in zip(bars, patterns):
        bar.set_hatch(pattern)
    
    ax.set_ylabel('Values', fontsize=14)
    ax.set_title('Accessible Bar Chart Example', 
                 fontsize=16, weight='bold')
    
    # 직접 라벨링
    for bar in bars:
        height = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2., height,
                f'{height:.1f}', ha='center', va='bottom', 
                fontsize=12)
    
    plt.tight_layout()
    return fig

# 사용 예시
data = [23, 45, 56, 78, 32, 45]
labels = ['A', 'B', 'C', 'D', 'E', 'F']
fig = create_accessible_bar_chart(data, labels)
plt.show()`}
              />

              <CodeBlock
                language="python"
                title="line_chart_accessible.py"
                code={`import matplotlib.pyplot as plt
import numpy as np

def create_accessible_line_chart():
    """접근성 높은 선 그래프"""
    
    # 데이터
    x = np.linspace(0, 10, 100)
    y1 = np.sin(x)
    y2 = np.cos(x)
    y3 = np.sin(x) * np.exp(-x/10)
    
    fig, ax = plt.subplots(figsize=(10, 6))
    
    # Okabe-Ito 색상과 다양한 선 스타일
    ax.plot(x, y1, color='#0072B2', linewidth=2.5, 
            linestyle='-', label='Series A', marker='o', 
            markersize=4, markevery=10)
    ax.plot(x, y2, color='#D55E00', linewidth=2.5, 
            linestyle='--', label='Series B', marker='s', 
            markersize=4, markevery=10)
    ax.plot(x, y3, color='#009E73', linewidth=2.5, 
            linestyle='-.', label='Series C', marker='^', 
            markersize=4, markevery=10)
    
    # 축 설정
    ax.set_xlabel('Time (s)', fontsize=14, fontweight='bold')
    ax.set_ylabel('Amplitude', fontsize=14, fontweight='bold')
    ax.set_title('Time Series Comparison', 
                 fontsize=16, fontweight='bold', pad=20)
    
    # 범례 (명확한 배경)
    ax.legend(loc='best', frameon=True, fancybox=False, 
              shadow=False, fontsize=12)
    
    # 그리드
    ax.grid(True, alpha=0.3, linestyle='--')
    ax.set_axisbelow(True)
    
    plt.tight_layout()
    return fig

fig = create_accessible_line_chart()
plt.show()`}
              />
            </section>
          </TabsContent>

          {/* R Tab */}
          <TabsContent value="r" className="space-y-8">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">{t('rSection.title')}</h2>
              
              <CodeBlock
                language="r"
                title="accessible_ggplot2.R"
                code={`library(ggplot2)

# Okabe-Ito 팔레트 정의
okabe_ito <- c(
  "#000000", "#E69F00", "#56B4E9", "#009E73",
  "#F0E442", "#0072B2", "#D55E00", "#CC79A7"
)

# 접근성 테마 설정
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

# 샘플 데이터
data <- data.frame(
  category = rep(c("A", "B", "C", "D"), each = 3),
  group = rep(c("Group 1", "Group 2", "Group 3"), 4),
  value = c(23, 45, 32, 56, 43, 54, 67, 45, 38, 34, 56, 48)
)

# 접근성 높은 막대 그래프
ggplot(data, aes(x = category, y = value, fill = group)) +
  geom_bar(stat = "identity", position = "dodge",
           color = "black", linewidth = 1) +
  scale_fill_manual(values = okabe_ito[2:4]) +
  labs(
    title = "Accessible Bar Chart with ggplot2",
    x = "Category",
    y = "Value",
    fill = "Group"
  ) +
  theme_accessible() +
  # 직접 라벨링
  geom_text(aes(label = value), 
            position = position_dodge(width = 0.9),
            vjust = -0.5, size = 4, fontface = "bold")

ggsave("accessible_chart.pdf", width = 10, height = 6, dpi = 300)`}
              />

              <CodeBlock
                language="r"
                title="pattern_fill_ggplot2.R"
                code={`library(ggplot2)
library(ggpattern)  # 패턴 채우기 지원

# 색상과 패턴을 함께 사용
data <- data.frame(
  category = c("A", "B", "C", "D"),
  value = c(25, 45, 35, 60)
)

ggplot(data, aes(x = category, y = value, 
                 pattern_fill = category)) +
  geom_bar_pattern(
    aes(pattern = category),
    stat = "identity",
    color = "black",
    linewidth = 1,
    pattern_density = 0.5,
    pattern_spacing = 0.025
  ) +
  scale_pattern_fill_manual(values = okabe_ito[1:4]) +
  scale_pattern_manual(
    values = c("stripe", "crosshatch", "circle", "none")
  ) +
  labs(
    title = "Bar Chart with Color and Pattern",
    x = "Category",
    y = "Value"
  ) +
  theme_accessible() +
  theme(legend.position = "none") +
  geom_text(aes(label = value), vjust = -0.5, 
            size = 5, fontface = "bold")`}
              />

              <CodeBlock
                language="r"
                title="accessible_line_chart.R"
                code={`library(ggplot2)

# 시간 시계열 데이터
time_data <- data.frame(
  time = rep(1:50, 3),
  value = c(
    sin(1:50 / 5) + rnorm(50, 0, 0.1),
    cos(1:50 / 5) + rnorm(50, 0, 0.1),
    sin(1:50 / 5) * 0.5 + rnorm(50, 0, 0.1)
  ),
  series = rep(c("Series A", "Series B", "Series C"), each = 50)
)

# 접근성 높은 선 그래프
ggplot(time_data, aes(x = time, y = value, 
                      color = series, linetype = series)) +
  geom_line(linewidth = 1.2) +
  geom_point(size = 2, shape = 21, fill = "white") +
  scale_color_manual(values = okabe_ito[2:4]) +
  scale_linetype_manual(values = c("solid", "dashed", "dotted")) +
  labs(
    title = "Time Series with Multiple Encoding",
    x = "Time (s)",
    y = "Amplitude",
    color = "Series",
    linetype = "Series"
  ) +
  theme_accessible()

ggsave("line_chart_accessible.pdf", width = 10, height = 6, dpi = 300)`}
              />
            </section>
          </TabsContent>

          {/* JavaScript Tab */}
          <TabsContent value="javascript" className="space-y-8">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">JavaScript & D3.js</h2>
              
              <CodeBlock
                language="javascript"
                title="plotly_accessible.js"
                code={`// Plotly.js 접근성 설정
const okabeIto = [
  '#000000', '#E69F00', '#56B4E9', '#009E73',
  '#F0E442', '#0072B2', '#D55E00', '#CC79A7'
];

// 데이터
const data = [
  {
    x: ['Q1', 'Q2', 'Q3', 'Q4'],
    y: [25, 32, 28, 35],
    name: 'Series A',
    type: 'bar',
    marker: {
      color: okabeIto[5],
      line: { color: '#000', width: 2 }
    },
    text: [25, 32, 28, 35],
    textposition: 'outside',
    textfont: { size: 14, color: '#000' }
  },
  {
    x: ['Q1', 'Q2', 'Q3', 'Q4'],
    y: [20, 25, 30, 32],
    name: 'Series B',
    type: 'bar',
    marker: {
      color: okabeIto[6],
      line: { color: '#000', width: 2 }
    },
    text: [20, 25, 30, 32],
    textposition: 'outside',
    textfont: { size: 14, color: '#000' }
  }
];

// 레이아웃 설정
const layout = {
  title: {
    text: 'Quarterly Performance Comparison',
    font: { size: 18, family: 'Arial', color: '#000' }
  },
  xaxis: {
    title: { text: 'Quarter', font: { size: 14, color: '#000' } },
    tickfont: { size: 12, color: '#000' }
  },
  yaxis: {
    title: { text: 'Values', font: { size: 14, color: '#000' } },
    tickfont: { size: 12, color: '#000' },
    gridcolor: '#e0e0e0'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1,
  plot_bgcolor: 'white',
  paper_bgcolor: 'white',
  font: { family: 'Arial', color: '#000' },
  legend: {
    orientation: 'h',
    y: -0.2,
    font: { size: 12 }
  }
};

// 접근성 설정
const config = {
  displayModeBar: true,
  displaylogo: false,
  modeBarButtonsToRemove: ['lasso2d', 'select2d'],
  toImageButtonOptions: {
    format: 'svg',
    filename: 'accessible_chart',
    height: 600,
    width: 1000,
    scale: 1
  }
};

Plotly.newPlot('chart', data, layout, config);`}
              />

              <CodeBlock
                language="javascript"
                title="d3_accessible.js"
                code={`// D3.js 접근성 높은 차트
const okabeIto = [
  '#000000', '#E69F00', '#56B4E9', '#009E73',
  '#F0E442', '#0072B2', '#D55E00', '#CC79A7'
];

const data = [
  { category: 'A', value: 25 },
  { category: 'B', value: 45 },
  { category: 'C', value: 35 },
  { category: 'D', value: 60 }
];

// SVG 설정
const margin = { top: 40, right: 30, bottom: 60, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .attr('role', 'img')
  .attr('aria-label', 'Bar chart showing values for categories A through D')
  .append('g')
  .attr('transform', \`translate(\${margin.left},\${margin.top})\`);

// 스케일
const x = d3.scaleBand()
  .domain(data.map(d => d.category))
  .range([0, width])
  .padding(0.3);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value) * 1.1])
  .range([height, 0]);

// 축
svg.append('g')
  .attr('transform', \`translate(0,\${height})\`)
  .call(d3.axisBottom(x))
  .selectAll('text')
  .style('font-size', '12px')
  .style('font-weight', 'bold');

svg.append('g')
  .call(d3.axisLeft(y))
  .selectAll('text')
  .style('font-size', '12px');

// 막대 그래프
svg.selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', d => x(d.category))
  .attr('y', d => y(d.value))
  .attr('width', x.bandwidth())
  .attr('height', d => height - y(d.value))
  .attr('fill', (d, i) => okabeIto[i + 1])
  .attr('stroke', '#000')
  .attr('stroke-width', 2)
  .attr('role', 'graphics-symbol')
  .attr('aria-label', d => \`Category \${d.category}: \${d.value}\`)
  .attr('tabindex', '0');

// 값 라벨
svg.selectAll('.label')
  .data(data)
  .enter()
  .append('text')
  .attr('class', 'label')
  .attr('x', d => x(d.category) + x.bandwidth() / 2)
  .attr('y', d => y(d.value) - 5)
  .attr('text-anchor', 'middle')
  .style('font-size', '14px')
  .style('font-weight', 'bold')
  .text(d => d.value);

// 제목
svg.append('text')
  .attr('x', width / 2)
  .attr('y', -20)
  .attr('text-anchor', 'middle')
  .style('font-size', '18px')
  .style('font-weight', 'bold')
  .text('Accessible D3.js Bar Chart');`}
              />
            </section>
          </TabsContent>
        </Tabs>

        {/* Best Practices */}
        <Card className="p-6 bg-muted/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">코드 작성 핵심 원칙</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">1.</span>
              <span><strong>Okabe-Ito 팔레트 사용:</strong> 색맹 안전 색상 선택</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">2.</span>
              <span><strong>이중 인코딩:</strong> 색상 + 패턴/선 스타일 병행</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">3.</span>
              <span><strong>직접 라벨링:</strong> 모든 데이터 포인트에 값 표시</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">4.</span>
              <span><strong>명확한 테두리:</strong> 2px 검정 테두리로 요소 구분</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">5.</span>
              <span><strong>메타데이터 포함:</strong> SVG/PDF 저장 시 설명 추가</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">6.</span>
              <span><strong>ARIA 레이블:</strong> 인터랙티브 차트에 접근성 속성</span>
            </li>
          </ul>
        </Card>
      </div>
    </Layout>
  );
};

export default CodeLibrary;
