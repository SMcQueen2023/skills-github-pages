---
layout: default
title: GCP Analytics Engineering Project
permalink: /projects/gcp-analytics-engineering/
page_class: page-project-detail
description: Analytics engineering case study focused on Terraform, BigQuery, dbt, warehouse layering, testing, and grain analysis.
---

<section class="page-intro">
	<p class="intro-label"><a class="breadcrumb-link" href="{{ site.baseurl }}/projects/">Projects</a> / GCP Analytics Engineering</p>
	<h1>GCP Analytics Engineering Project</h1>
	<p>This project began as a cloud analytics build, but its real value comes from the warehouse decisions behind it: how raw data is preserved, how staging introduces meaning defensively, how grain is tested, and how a fact model earns its structure instead of assuming clean source identifiers.</p>
</section>

<section class="section-block">
	<div class="artifact-board">
		<div class="artifact-header">
			<p class="section-label">Architecture Snapshot</p>
			<h2>Understand the warehouse layers before reading the implementation notes.</h2>
			<p>The project is intentionally structured as a narrow but complete vertical slice: infrastructure, raw storage, defensive staging, validated fact modeling, and documented grain analysis.</p>
		</div>
		<div class="flow-diagram">
			<div class="flow-node">
				<strong>Landing data</strong>
				<span>Manual monthly source file and Cloud Storage landing pattern.</span>
			</div>
			<div class="flow-arrow">&rarr;</div>
			<div class="flow-node">
				<strong>Raw BigQuery</strong>
				<span>All 62 source columns preserved as strings for traceability.</span>
			</div>
			<div class="flow-arrow">&rarr;</div>
			<div class="flow-node">
				<strong>dbt staging + fact</strong>
				<span>Defensive parsing, tests, grain analysis, and surrogate-key reasoning.</span>
			</div>
		</div>
		<div class="artifact-grid">
			<article class="artifact-card">
				<h3>Design constraints</h3>
				<ul class="compact-list">
					<li>Source values include blanks, decimal-formatted numeric fields, and non-ideal identifiers.</li>
					<li>The first implementation had to prove warehouse behavior before full ingestion automation.</li>
					<li>Fact grain could not be assumed; it had to be tested against the actual source sample.</li>
				</ul>
			</article>
			<article class="artifact-card">
				<h3>Validation strategy</h3>
				<ul class="compact-list">
					<li>dbt tests on staging and fact models.</li>
					<li>Notebook-based checks for row preservation, conversions, and candidate-key behavior.</li>
					<li>Explicit documentation of surrogate-key justification and known source limitations.</li>
				</ul>
			</article>
		</div>
	</div>
</section>

<section class="section-block">
	<div class="case-study-shell">
		<div class="detail-stack">
			<article class="detail-section">
				<p class="card-kicker">Business problem</p>
				<h2>Why this was more than infrastructure</h2>
				<p>The initial goal was to build a production-minded analytics pipeline around U.S. airline on-time performance data. The deeper challenge was not just provisioning cloud services. It was designing a warehouse that could preserve messy source data, make type conversion explicit, and validate business grain before claiming analytics readiness.</p>
				<p>That meant treating warehouse layering, dbt modeling, and testing strategy as the center of the project rather than as secondary details beneath the cloud platform.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Architecture</p>
				<h2>Current implemented flow</h2>
				<div class="detail-flow">
					<div class="detail-flow-step">
						<strong>Terraform infrastructure</strong>
						<span>Provisioned a raw BigQuery dataset, an analytics dataset, a Cloud Storage landing bucket, and an ingestion service account.</span>
					</div>
					<div class="detail-flow-step">
						<strong>Raw and staging warehouse layers</strong>
						<span>The raw table preserves all 62 source columns as strings, while dbt staging models handle trimming, null conversion, date parsing, numeric casting, and boolean normalization.</span>
					</div>
					<div class="detail-flow-step">
						<strong>Fact modeling and validation</strong>
						<span>A tested fact model builds on the staging layer, and notebook-based validation checks row preservation, conversions, candidate grain behavior, and surrogate-key justification.</span>
					</div>
				</div>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Implementation</p>
				<h2>What is implemented today</h2>
				<p>The implemented vertical slice includes Terraform-provisioned infrastructure, a manually loaded raw source file, dbt source declarations, a first staging model, initial staging tests, notebook-based validation, a tested `fct_flights` fact model, and documented grain analysis.</p>
				<p>The staging layer was designed defensively. Raw values are trimmed, blank strings become null, dates are parsed from timestamp-like strings, numeric fields are cast carefully, and cancellation and diversion indicators become booleans without forcing malformed values to disappear silently.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Engineering decisions</p>
				<h2>Why the warehouse is shaped this way</h2>
				<ul class="detail-list">
					<li>Keep the raw layer permissive so source records remain visible even when they are messy or malformed.</li>
					<li>Centralize meaning in dbt staging rather than relying on ingestion-time coercion that could reject or distort source values.</li>
					<li>Test natural-key assumptions before asserting fact grain. The model does not pretend the source data is cleaner than it is.</li>
					<li>Use a surrogate key only after candidate business identifiers proved insufficient for record-level uniqueness.</li>
				</ul>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Tradeoffs</p>
				<h2>What the design chose not to hide</h2>
				<p>Keeping all raw fields as strings sacrifices early type enforcement, but it creates a much safer place to investigate malformed or ambiguous source values. For this project, that trade was worthwhile because traceability mattered more than premature strictness.</p>
				<p>The project also deliberately postponed full ingestion automation. Building Cloud Run jobs and scheduling earlier would have increased scope before the source behavior and modeling decisions were proven manually.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Validation</p>
				<h2>How the model was checked</h2>
				<p>Validation was not treated as a follow-up activity. The staging model was tested for required fields, the notebook compared raw and staged row behavior, and the candidate natural grain was deliberately challenged before the fact model accepted a surrogate key.</p>
				<p>That matters because a warehouse slice only becomes credible when the typing, grain, and business meaning are verified together instead of being assumed independently.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Outcome</p>
				<h2>What the current state proves</h2>
				<p>The project now demonstrates a credible analytics-engineering slice: reproducible infrastructure, layered warehouse design, tested transformations, notebook-based validation, and a fact model whose grain was evaluated rather than assumed.</p>
				<p>That is a more useful milestone than a broader but less disciplined roadmap because it shows how the system behaves today and why its design choices were made.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Future improvements</p>
				<h2>What would come next</h2>
				<p>The next logical steps are automated ingestion, time-normalization logic for airline time codes, and business-facing marts built on the validated fact table. Those would extend the vertical slice without changing the underlying warehouse principles that were already proven.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Lessons learned</p>
				<h2>Why this project matters</h2>
				<p>This project reads as an analytics engineering case study because it demonstrates defensive staging, warehouse layering, testing strategy, grain analysis, and honest tradeoff management. It does not rely on pretending the source data has a perfect natural key or that automation alone makes a pipeline production-minded.</p>
				<p>It is especially useful in the portfolio because it shows data-warehouse thinking in a modern cloud stack without reducing the work to cloud branding.</p>
			</article>
		</div>

		<aside class="case-study-aside">
			<article class="sticky-panel is-sticky">
				<p class="card-kicker">Project focus</p>
				<h3>Warehouse layering with explicit validation</h3>
				<div class="chip-list">
					<span>Terraform</span>
					<span>BigQuery</span>
					<span>dbt</span>
					<span>Testing strategy</span>
					<span>Grain analysis</span>
				</div>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">What it demonstrates</p>
				<ul class="detail-list">
					<li>Cloud warehouse design that stays honest about source-data quality.</li>
					<li>Defensive staging and tested fact modeling.</li>
					<li>Notebook-based validation used to support modeling decisions, not just exploration.</li>
				</ul>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">Related case studies</p>
				<ul class="detail-list">
					<li><a class="inline-link" href="{{ site.baseurl }}/projects/enterprise-data-modeling/">Revenue Accounting Modeling Proof of Concept</a></li>
					<li><a class="inline-link" href="{{ site.baseurl }}/projects/reconciliation-automation/">401(k) Reconciliation Automation</a></li>
				</ul>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">Back to overview</p>
				<p><a class="inline-link" href="{{ site.baseurl }}/projects/">Return to all projects</a></p>
			</article>
		</aside>
	</div>
</section>
