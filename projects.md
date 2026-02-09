---
layout: default
title: "Projects"
permalink: /projects/
---

<main class="projects-page">

  <section class="section section-intro">
    <p class="eyebrow">Portfolio</p>
    <h1><strong>Selected Projects</strong></h1>
    <p class="lede">
      Production-oriented projects across data engineering, analytics, and applied machine learning.
      Built to solve operational problems, not just demo concepts.
    </p>
  </section>

  <hr class="section-divider" />

  <section class="section section-flagship">
    <h2><strong>Flagship Product</strong></h2>

    <article class="project-item">
      <p class="project-label"><strong>Product Engineering</strong></p>
      <h3 class="project-name"><strong><em>Parqcel — Desktop Workbench for Parquet, CSV, and Excel</em></strong></h3>

      <p class="project-desc">
        Parqcel is a professional-grade PyQt6 + Polars desktop application built for data engineers,
        analysts, and data scientists handling large tabular datasets. It combines spreadsheet-style usability
        with high-performance data workflows for exploration, editing, analysis, and transformation.
      </p>

      <ul class="feature-list">
        <li><strong>Multi-format workflows:</strong> open Parquet, CSV, and Excel; export to Parquet for fast downstream reuse.</li>
        <li><strong>Large-data usability:</strong> configurable pagination reduces memory pressure during exploration.</li>
        <li><strong>Reliable editing:</strong> inline edits, undo/redo, type conversion, add-column operations, and multi-column sort.</li>
        <li><strong>Practical analytics:</strong> profiling (count/null/unique/min/max/mean/median/std), quick filters, and advanced chained filters.</li>
        <li><strong>ML extras:</strong> featurization plus PCA/UMAP dimensionality reduction with visualization/export support.</li>
        <li><strong>Optional AI assistant:</strong> natural-language-to-Polars workflow with AST-based validation before execution.</li>
        <li><strong>Automation path:</strong> headless CLI for featurization, PCA generation, and assistant querying in scripted pipelines.</li>
      </ul>

      <p class="project-meta">
        <strong>Stack:</strong> Python · PyQt6 · Polars · scikit-learn · Plotly · UMAP · OpenAI/HuggingFace integrations (optional)
      </p>

      <p class="project-links">
        <a class="text-link" href="https://github.com/SMcQueen2023/Parqcel" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        <span aria-hidden="true"> · </span>
        <a class="text-link" href="https://github.com/SMcQueen2023/Parqcel#readme" target="_blank" rel="noopener noreferrer">README / Guide</a>
      </p>
    </article>
  </section>

  <hr class="section-divider" />

  <section class="section section-projects">
    <h2><strong>Additional Projects</strong></h2>

    <article class="project-item">
      <p class="project-label"><strong>Data Engineering</strong></p>
      <h3 class="project-name"><strong><em>Streaming Stock Price Ingestion</em></strong></h3>

      <p class="project-meta"><strong>Timeline:</strong> Dec 2024 – Present</p>
      <p class="project-meta"><strong>Association:</strong> American Public University System</p>

      <p class="project-desc">
        Built and maintained a streaming pipeline for Apple (AAPL) market data using Yahoo Finance API and Kafka.
        Data was cleaned and loaded into Microsoft SQL Server, then surfaced in Power BI for real-time visibility.
        Version control and collaboration were managed through GitHub, with generative AI used to accelerate code
        iteration and troubleshooting.
      </p>

      <p class="project-meta">
        <strong>Stack:</strong> Data Engineering · Python · GitHub · Kafka · Microsoft SQL Server · Power BI
      </p>
    </article>

    <article class="project-item">
      <p class="project-label"><strong>Analytics / Data Science</strong></p>
      <h3 class="project-name"><strong><em>Bank Customer Segmentation</em></strong></h3>

      <p class="project-meta"><strong>Association:</strong> MIT Professional Education (Applied Data Science Program)</p>

      <p class="project-desc">
        Designed a customer segmentation analysis to improve service responsiveness and targeting quality.
        Performed exploratory analysis, then applied PCA and t-SNE to reduce dimensionality and surface
        behavior-driven segments that informed action-oriented marketing and service recommendations.
      </p>

      <p class="project-meta">
        <strong>Stack:</strong> Python · Pandas · NumPy · scikit-learn · Google Colab · Jupyter · Statistics
      </p>
    </article>
  </section>

</main>
