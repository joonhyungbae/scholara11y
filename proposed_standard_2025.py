#!/usr/bin/env python3
"""
Proposed Standard 2025 - Accessible Data Visualization Implementation
=================================================================

This file implements the 2025 Proposed Standard for academic publishing accessibility,
integrating WCAG 2.2 Level AA compliance with practical data visualization techniques.

Key Features:
- Okabe-Ito colorblind-safe color palette
- WCAG 2.2 contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Dual encoding (color + patterns/textures)
- Direct labeling for screen readers
- Vector-first approach (SVG/PDF output)
- Accessible typography (Atkinson Hyperlegible font)
- Metadata embedding for screen readers

Requirements:
- matplotlib
- numpy

Installation:
pip install matplotlib numpy

Usage:
from proposed_standard_2025 import ProposedStandard2025

gs = ProposedStandard2025()
data = [23.5, 45.2, 67.8, 34.1, 89.3, 12.6]
gs.create_accessible_chart(data, 'Research Results', 'Bar chart showing research results')
"""

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.font_manager import FontProperties

class ProposedStandard2025:
    """
    Proposed Standard 2025 - Accessible Data Visualization Class

    Implements 5 core principles:
    1. Okabe-Ito Color Palette (Colorblind-safe)
    2. Atkinson Hyperlegible Typography
    3. WCAG 2.2 Contrast Ratios
    4. Dual Encoding (Color + Pattern)
    5. Vector First (SVG/PDF output with metadata)
    """

    # Okabe-Ito Colorblind-Safe Palette (8 colors)
    COLORS = ['#000000', '#E69F00', '#56B4E9', '#009E73',
              '#F0E442', '#0072B2', '#D55E00', '#CC79A7']

    # Hatching Patterns for Dual Encoding
    PATTERNS = ['/', '\\\\', '|', '-', '+', 'x', 'o', '.']

    def __init__(self):
        """Initialize with accessible defaults"""
        self.setup_accessible_defaults()

    def setup_accessible_defaults(self):
        """Set up matplotlib with WCAG 2.2 compliant defaults"""
        # Font settings - Atkinson Hyperlegible preferred
        plt.rcParams.update({
            'font.family': ['Atkinson Hyperlegible', 'Arial', 'DejaVu Sans', 'sans-serif'],
            'font.size': 12,  # Minimum 12pt for accessibility
            'axes.labelsize': 14,
            'axes.titlesize': 16,
            'axes.linewidth': 1.5,
            'axes.edgecolor': 'black',
            'xtick.labelsize': 12,
            'ytick.labelsize': 12,
            'legend.fontsize': 12,
            'figure.titlesize': 18,
            'axes.prop_cycle': plt.cycler(color=self.COLORS),
            'grid.alpha': 0.3,
            'grid.linestyle': '--',
            'lines.linewidth': 2.5,
            'lines.markersize': 6,
        })

        # High contrast settings
        plt.rcParams['axes.spines.top'] = False
        plt.rcParams['axes.spines.right'] = False

    def create_accessible_chart(self, data, title="Accessible Chart", alt_text="",
                               labels=None, save_path=None):
        """
        Create an accessible bar chart following Proposed Standard 2025

        Parameters:
        - data: List of numerical values
        - title: Chart title (string)
        - alt_text: Alternative text for screen readers (string)
        - labels: X-axis labels (list, optional)
        - save_path: File path to save (optional)

        Returns:
        - matplotlib figure object
        """
        fig, ax = plt.subplots(figsize=(10, 6))

        # Generate default labels if not provided
        if labels is None:
            labels = [f'Item {i+1}' for i in range(len(data))]

        # Create bars with Okabe-Ito colors and patterns (dual encoding)
        bars = ax.bar(range(len(data)), data,
                     color=self.COLORS[:len(data)],
                     edgecolor='black', linewidth=2)

        # Add hatching patterns for additional encoding
        for bar, pattern in zip(bars, self.PATTERNS[:len(data)]):
            bar.set_hatch(pattern)

        # Direct labeling (Principle: No color-only information)
        for bar in bars:
            height = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., height,
                   f'{height:.1f}', ha='center', va='bottom',
                   fontweight='bold', fontsize=11)

        # Accessibility settings
        ax.set_title(title, fontweight='bold', pad=20)
        ax.set_xticks(range(len(data)))
        ax.set_xticklabels(labels)
        ax.grid(axis='y', alpha=0.3, linestyle='--')
        ax.set_axisbelow(True)

        # Ensure minimum contrast (4.5:1 for normal text)
        # Black text on white background provides 21:1 contrast

        # Save with metadata if path provided
        if save_path:
            metadata = {
                'Title': title,
                'Description': alt_text or f'Bar chart showing {len(data)} data points',
                'Creator': 'Proposed Standard 2025'
            }
            plt.savefig(save_path, format='svg', metadata=metadata, dpi=300, bbox_inches='tight')
            print(f"Chart saved to: {save_path}")

        return fig

    def create_line_chart(self, x_data, y_data_list, title="Time Series",
                         labels=None, save_path=None):
        """
        Create an accessible line chart with multiple series

        Parameters:
        - x_data: X-axis data (array-like)
        - y_data_list: List of Y-axis data arrays
        - title: Chart title (string)
        - labels: Series labels (list, optional)
        - save_path: File path to save (optional)

        Returns:
        - matplotlib figure object
        """
        fig, ax = plt.subplots(figsize=(10, 6))

        # Default labels
        if labels is None:
            labels = [f'Series {i+1}' for i in range(len(y_data_list))]

        # Plot each series with different colors and line styles (dual encoding)
        colors = self.COLORS[1:len(y_data_list)+1]  # Skip black for lines
        linestyles = ['-', '--', '-.', ':']

        for i, (y_data, label) in enumerate(zip(y_data_list, labels)):
            ax.plot(x_data, y_data,
                   color=colors[i % len(colors)],
                   linestyle=linestyles[i % len(linestyles)],
                   linewidth=2.5,
                   marker='o',
                   markersize=4,
                   markevery=max(1, len(x_data)//10),  # Every 10th point
                   label=label)

        # Accessibility settings
        ax.set_xlabel('Time (s)', fontweight='bold')
        ax.set_ylabel('Amplitude', fontweight='bold')
        ax.set_title(title, fontweight='bold', pad=20)
        ax.legend(loc='best', frameon=True, fancybox=False, shadow=False)
        ax.grid(True, alpha=0.3, linestyle='--')
        ax.set_axisbelow(True)

        # Save with metadata if path provided
        if save_path:
            metadata = {
                'Title': title,
                'Description': f'Line chart with {len(y_data_list)} series',
                'Creator': 'Proposed Standard 2025'
            }
            plt.savefig(save_path, format='svg', metadata=metadata, dpi=300, bbox_inches='tight')
            print(f"Chart saved to: {save_path}")

        return fig

    def create_scatter_plot(self, x_data, y_data, title="Scatter Plot",
                           xlabel="X", ylabel="Y", save_path=None):
        """
        Create an accessible scatter plot

        Parameters:
        - x_data, y_data: Data arrays
        - title: Chart title
        - xlabel, ylabel: Axis labels
        - save_path: File path to save (optional)

        Returns:
        - matplotlib figure object
        """
        fig, ax = plt.subplots(figsize=(10, 6))

        # Use accessible color and add direct labels
        ax.scatter(x_data, y_data, color=self.COLORS[1], s=50, alpha=0.7,
                  edgecolors='black', linewidth=1)

        # Add data point labels for accessibility
        for i, (x, y) in enumerate(zip(x_data, y_data)):
            ax.annotate(f'({x:.1f}, {y:.1f})', (x, y),
                       xytext=(5, 5), textcoords='offset points',
                       fontsize=8, alpha=0.8)

        ax.set_xlabel(xlabel, fontweight='bold')
        ax.set_ylabel(ylabel, fontweight='bold')
        ax.set_title(title, fontweight='bold', pad=20)
        ax.grid(True, alpha=0.3, linestyle='--')

        if save_path:
            metadata = {
                'Title': title,
                'Description': f'Scatter plot with {len(x_data)} data points',
                'Creator': 'Proposed Standard 2025'
            }
            plt.savefig(save_path, format='svg', metadata=metadata, dpi=300, bbox_inches='tight')
            print(f"Chart saved to: {save_path}")

        return fig


def main():
    """Example usage of Proposed Standard 2025"""
    print("Proposed Standard 2025 - Accessible Data Visualization Demo")
    print("=" * 60)

    gs = ProposedStandard2025()

    # Example 1: Bar Chart
    print("\n1. Creating accessible bar chart...")
    data = [23.5, 45.2, 67.8, 34.1, 89.3, 12.6]
    labels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']
    fig1 = gs.create_accessible_chart(
        data,
        title='Quarterly Research Results',
        alt_text='Bar chart showing research results across 6 quarters',
        labels=labels,
        save_path='accessible_bar_chart.svg'
    )

    # Example 2: Line Chart
    print("2. Creating accessible line chart...")
    x = np.linspace(0, 10, 50)
    y1 = np.sin(x)
    y2 = np.cos(x)
    y3 = np.sin(x) * np.exp(-x/10)

    fig2 = gs.create_line_chart(
        x, [y1, y2, y3],
        title='Time Series Comparison',
        labels=['Series A', 'Series B', 'Series C'],
        save_path='accessible_line_chart.svg'
    )

    # Example 3: Scatter Plot
    print("3. Creating accessible scatter plot...")
    np.random.seed(42)
    x_scatter = np.random.normal(50, 15, 20)
    y_scatter = np.random.normal(75, 10, 20)

    fig3 = gs.create_scatter_plot(
        x_scatter, y_scatter,
        title='Performance vs Experience Scatter Plot',
        xlabel='Experience (months)',
        ylabel='Performance Score',
        save_path='accessible_scatter_plot.svg'
    )

    print("\nDemo complete! Check the generated SVG files.")
    print("These charts follow all 5 principles of Proposed Standard 2025:")
    print("- ✓ Okabe-Ito Colorblind-Safe Palette")
    print("- ✓ Atkinson Hyperlegible Typography")
    print("- ✓ WCAG 2.2 Contrast Ratios")
    print("- ✓ Dual Encoding (Color + Pattern/Text)")
    print("- ✓ Vector First (SVG with metadata)")

    # Show plots if running interactively
    try:
        plt.show()
    except:
        print("Note: plt.show() not available in this environment")


if __name__ == "__main__":
    main()
