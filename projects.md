---
layout: default
title: "Projects"
permalink: /projects/
---

<main class="projects-page">

  <section class="section">
    <p class="eyebrow">Portfolio</p>
    <h1 class="section-title"><strong>Selected Projects</strong></h1>
    <p class="lede">
      Production-oriented work across data engineering, analytics, and applied machine learning.
    </p>
  </section>

  <section class="section">
    <h2 class="section-title"><strong>Flagship Product</strong></h2>

    <article class="project-item">
      <p class="project-label"><strong>Product Engineering</strong></p>
      <h3 class="project-name"><strong><em>Parqcel — Desktop Workbench for Parquet, CSV, and Excel</em></strong></h3>

      <p class="project-desc">
        Parqcel is a professional-grade PyQt6 + Polars desktop application for data engineers, analysts, and data scientists
        working with large tabular data.
      </p>

      <ul class="feature-list">
        <li><strong>Multi-format support:</strong> work across Parquet, CSV, and Excel with clean export paths.</li>
        <li><strong>Large-data usability:</strong> pagination keeps big datasets responsive during inspection.</li>
        <li><strong>Inline editing:</strong> undo/redo, type conversion, and sorting for controlled updates.</li>
        <li><strong>Profiling + filtering:</strong> fast column statistics and targeted data slicing.</li>
        <li><strong>ML extras:</strong> PCA/UMAP workflows for clustering and projection.</li>
        <li><strong>Optional AI assistant:</strong> natural-language to Polars with validation before execution.</li>
      </ul>

      <p class="project-meta">
        <strong>Stack:</strong> Python · PyQt6 · Polars · scikit-learn · Plotly · UMAP · OpenAI/HuggingFace (optional)
      </p>

      <p class="project-links">
        <a class="text-link" href="https://github.com/SMcQueen2023/Parqcel" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        <span aria-hidden="true"> · </span>
        <a class="text-link" href="https://github.com/SMcQueen2023/Parqcel#readme" target="_blank" rel="noopener noreferrer">README / Guide</a>
      </p>
    </article>
  </section>

  <section class="section">
    <h2 class="section-title"><strong>Additional Projects</strong></h2>

    <article class="project-item">
      <p class="project-label"><strong>Data Engineering</strong></p>
      <h3 class="project-name"><strong><em>Streaming Stock Price Ingestion</em></strong></h3>
      <p class="project-meta"><strong>Timeline:</strong> Dec 2024 – Present</p>
      <p class="project-meta"><strong>Association:</strong> American Public University System (APUS)</p>
      <p class="project-desc">
        Streaming ingestion pipeline for AAPL pricing data using Yahoo Finance API + Kafka.
        Data is loaded to SQL Server and surfaced in Power BI for monitoring and analysis.
      </p>
      <p class="project-meta"><strong>Stack:</strong> Python · Kafka · GitHub · SQL Server · Power BI</p>
    </article>

    <article class="project-item">
      <p class="project-label"><strong>Analytics / Data Science</strong></p>
      <h3 class="project-name"><strong><em>Bank Customer Segmentation</em></strong></h3>
      <p class="project-meta"><strong>Association:</strong> MIT Professional Education (Applied Data Science program)</p>
      <p class="project-desc">
        Built customer segmentation using exploratory analysis plus PCA and t-SNE to identify actionable groups
        for more personalized and effective service strategies.
      </p>
      <p class="project-meta"><strong>Stack:</strong> Python · Pandas · NumPy · scikit-learn · Colab · Jupyter</p>
    </article>
  </section>

</main>
