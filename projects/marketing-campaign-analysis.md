---
layout: default
title: Marketing Campaign Analysis
permalink: /projects/marketing-campaign-analysis/
page_class: page-project-detail
description: MIT capstone case study focused on customer segmentation, PCA, clustering comparison, and business interpretation.
---

<section class="page-intro">
	<p class="intro-label"><a class="breadcrumb-link" href="{{ site.baseurl }}/projects/">Projects</a> / Marketing Campaign Analysis</p>
	<h1>MIT Capstone: Marketing Campaign Analysis</h1>
	<p>This academic capstone remains on the site as supporting evidence of analytical judgment. Its value is not production deployment. It is the disciplined way the project moved from data preparation and model comparison into business-facing customer segmentation recommendations.</p>
</section>

<section class="section-block">
	<div class="case-study-shell">
		<div class="detail-stack">
			<article class="detail-section">
				<p class="card-kicker">Business problem</p>
				<h2>What the analysis needed to solve</h2>
				<p>The project addressed a marketing analytics question: how to identify meaningful customer segments from demographic, behavioral, spending, and campaign-response data so marketing effort could be allocated more deliberately.</p>
				<p>The objective was to improve targeting and recommendation quality by treating segmentation as a real analytical decision rather than a one-model classroom exercise.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Architecture</p>
				<h2>Analytical workflow</h2>
				<div class="detail-flow">
					<div class="detail-flow-step">
						<strong>Data preparation and cleanup</strong>
						<span>Missing income values, outliers, and low-value category inconsistencies were resolved before model selection began.</span>
					</div>
					<div class="detail-flow-step">
						<strong>PCA and clustering comparison</strong>
						<span>PCA reduced multicollinearity and compressed variance, while multiple clustering approaches were compared rather than accepting the first workable result.</span>
					</div>
					<div class="detail-flow-step">
						<strong>Business interpretation</strong>
						<span>The chosen clustering outcome was translated into segment-level recommendations for marketing strategy and offer design.</span>
					</div>
				</div>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Implementation</p>
				<h2>What the capstone covered</h2>
				<p>The project included data cleaning, exploratory data analysis, feature scaling, PCA-based dimensionality reduction, comparison of clustering methods such as hierarchical clustering, K-means, DBSCAN, K-medoids, and Gaussian mixture modeling, and segment-level business interpretation.</p>
				<p>Hierarchical clustering was ultimately recommended because it offered the best balance of flexibility, interpretability, and usable business insight for the observed structure of the data.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Engineering decisions</p>
				<h2>Why the analysis is still useful evidence</h2>
				<ul class="detail-list">
					<li>Clean and profile the data rigorously before attempting unsupervised learning.</li>
					<li>Use PCA intentionally to reduce multicollinearity and improve clustering quality in a high-dimensional behavioral dataset.</li>
					<li>Compare multiple models and justify the chosen one in business language instead of stopping at the first acceptable result.</li>
				</ul>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Tradeoffs</p>
				<h2>What the project does and does not claim</h2>
				<p>This is an academic capstone, not a production ML deployment. The value is analytical reasoning, not enterprise implementation. That distinction matters and is part of why the project stays in a secondary position on the site.</p>
				<p>Even so, the project is stronger than a typical notebook exercise because it emphasizes business framing, model comparison, and segment interpretation rather than only technical output.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Outcome</p>
				<h2>What the analysis produced</h2>
				<p>The project identified actionable customer groups with distinct spending and engagement patterns and translated them into targeted marketing recommendations such as premium offers, loyalty efforts, and incentive-based outreach.</p>
				<p>That outcome supports the portfolio by showing a structured analytical workflow that stays connected to business action.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Lessons learned</p>
				<h2>Why it still deserves a place</h2>
				<p>This project remains useful as supporting evidence of model-comparison discipline, PCA reasoning, and business interpretation. It is not central to the current BI and analytics-engineering story, but it does show analytical depth beyond reporting alone.</p>
				<p>Keeping it in a secondary role is the right balance between preserving credible earlier work and maintaining the site's current focus.</p>
			</article>
		</div>

		<aside class="case-study-aside">
			<article class="sticky-panel is-sticky">
				<p class="card-kicker">Project focus</p>
				<h3>Structured analytical modeling and interpretation</h3>
				<div class="chip-list">
					<span>Python</span>
					<span>PCA</span>
					<span>Hierarchical clustering</span>
					<span>Customer segmentation</span>
					<span>Business recommendations</span>
				</div>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">Related case studies</p>
				<ul class="detail-list">
					<li><a class="inline-link" href="{{ site.baseurl }}/projects/external-analytics-enablement/">External Organization Analytics Enablement</a></li>
					<li><a class="inline-link" href="{{ site.baseurl }}/projects/parqcel/">Parqcel</a></li>
				</ul>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">Back to overview</p>
				<p><a class="inline-link" href="{{ site.baseurl }}/projects/">Return to all projects</a></p>
			</article>
		</aside>
	</div>
</section>
