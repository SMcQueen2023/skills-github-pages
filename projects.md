---
layout: default
title: Projects
permalink: /projects/
page_class: page-projects
---

<section class="page-intro">
	<p class="intro-label">Projects</p>
	<h1>Selected work that shows how I modernize reporting, design analytical structure, and turn technical effort into trusted systems.</h1>
	<p>The projects below are intentionally ordered from strongest analytics-engineering signal downward: warehouse layering, data modeling, tested transformations, and the reporting systems built on top of them.</p>
</section>

<section class="case-stack">
	<article class="project-case">
		<div class="case-header">
			<p class="card-kicker">Flagship analytics engineering project</p>
			<h2>GCP Analytics Engineering Project</h2>
			<p>Built a portfolio-scale warehouse slice with Terraform-provisioned infrastructure, BigQuery raw and analytics layers, dbt staging and fact models, notebook validation, and explicit grain analysis.</p>
			<div class="meta-list">
				<span>BigQuery</span>
				<span>dbt</span>
				<span>Terraform</span>
				<span>Warehouse layering</span>
				<span>Testing strategy</span>
				<span>Grain analysis</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/gcp-analytics-engineering/">Read full case study</a></p>
		</div>
		<div class="case-grid">
			<article class="case-panel">
				<h3>Business challenge</h3>
				<p>The project started as a cloud analytics build, but the real challenge was designing a warehouse that could preserve messy source data, make conversions explicit, and prove business grain before downstream analytics.</p>
			</article>
			<article class="case-panel">
				<h3>Architecture and implementation</h3>
				<p>The current implementation uses Terraform for infrastructure, a raw string-preserving BigQuery layer, dbt source and staging models for defensive parsing, a tested fact model, and notebook-based validation to confirm row preservation and key behavior.</p>
			</article>
			<article class="case-panel">
				<h3>Engineering decisions</h3>
				<p>The most important decisions were to keep the raw layer permissive, centralize typing in dbt, test candidate natural keys before asserting grain, and use a surrogate key only after the available business identifiers proved insufficient.</p>
			</article>
			<article class="case-panel">
				<h3>Outcome and lessons</h3>
				<p>The project now reads like an analytics engineering case study rather than an infrastructure roadmap. It demonstrates warehouse layering, testing discipline, and tradeoff-driven design instead of assuming clean source data or perfect natural keys.</p>
			</article>
		</div>
	</article>

	<article class="project-case">
		<div class="case-header">
			<p class="card-kicker">Enterprise data modeling</p>
			<h2>Revenue Accounting Modeling Proof of Concept</h2>
			<p>Designed a dimensional modeling proof of concept that turned normalized source systems into a star-schema structure built for Power BI relationships, reusable metrics, and analysis at the right business grain.</p>
			<div class="meta-list">
				<span>Dimensional modeling</span>
				<span>Star schema</span>
				<span>Power BI</span>
				<span>Surrogate keys</span>
				<span>Business keys</span>
				<span>Semantic layer design</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/enterprise-data-modeling/">Read full case study</a></p>
		</div>
		<div class="case-grid">
			<article class="case-panel">
				<h3>Business challenge</h3>
				<p>The source environment was normalized enough to support transactions, but not shaped for fast reporting or stable business definitions. Analysts were spending too much effort rebuilding joins and interpreting keys instead of answering questions.</p>
			</article>
			<article class="case-panel">
				<h3>Architecture and implementation</h3>
				<p>I designed fact tables and dimensions around business-process grain, mapped business keys to surrogate keys, and shaped the model so Power BI relationships and a future semantic layer would behave predictably.</p>
			</article>
			<article class="case-panel">
				<h3>Engineering decisions</h3>
				<p>The model separated analytical identity from operational keys. Surrogate keys simplified joins and history management, while business keys remained available for traceability. Slowly changing dimension patterns were applied only where attribute history changed reporting meaning.</p>
			</article>
			<article class="case-panel">
				<h3>Outcome and lessons</h3>
				<p>The proof of concept showed why warehouse design matters before dashboard design. The real value was not just having a star schema. It was creating a structure that made definitions reusable, relationships cleaner, and downstream metrics easier to trust.</p>
			</article>
		</div>
	</article>

	<article class="project-case">
		<div class="case-header">
			<p class="card-kicker">Controls-minded automation</p>
			<h2>401(k) Reconciliation Automation</h2>
			<p>Expanded a fragile manual reconciliation process into an auditable ELT workflow spanning Azure Synapse, Blob Storage, SQL, and Python.</p>
			<div class="meta-list">
				<span>Azure Synapse</span>
				<span>Blob Storage</span>
				<span>SQL</span>
				<span>Python</span>
				<span>Reconciliation logic</span>
				<span>Auditability</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/reconciliation-automation/">Read full case study</a></p>
		</div>
		<div class="case-grid">
			<article class="case-panel">
				<h3>Business challenge</h3>
				<p>A recurring reconciliation process depended on manual collection, handoffs, and review steps that consumed time and created continuity risk. The process worked, but it was difficult to scale and difficult to defend under pressure.</p>
			</article>
			<article class="case-panel">
				<h3>Architecture and implementation</h3>
				<p>I structured the flow as a staged ELT pipeline: files landed in Blob Storage, transformation and matching logic ran through Synapse and SQL, Python handled validation and exception shaping, and outputs supported review with clearer audit trails.</p>
			</article>
			<article class="case-panel">
				<h3>Engineering decisions</h3>
				<p>The main design decision was to preserve traceability at each reconciliation step instead of hiding logic inside a single opaque job. Validation checkpoints, exception outputs, and controlled transformations mattered as much as automation speed.</p>
			</article>
			<article class="case-panel">
				<h3>Outcome and lessons</h3>
				<p>The solution reduced manual effort, improved continuity, and strengthened auditability. It reinforced that automation in finance-adjacent workflows has to optimize for explainability and recoverability, not just throughput.</p>
			</article>
		</div>
	</article>

	<article class="project-case">
		<div class="case-header">
			<p class="card-kicker">Reporting modernization</p>
			<h2>Reporting Modernization and Trusted Finance Metrics</h2>
			<p>Modernized legacy SAP BusinessObjects reporting logic into more reusable SQL-based assets, clearer metric definitions, and a stronger path toward supportable finance reporting in a controls-minded environment.</p>
			<div class="meta-list">
				<span>SAP BusinessObjects</span>
				<span>SQL</span>
				<span>Reporting validation</span>
				<span>Trusted metrics</span>
				<span>Finance reporting</span>
				<span>SOX-aware delivery</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/reporting-modernization/">Read full case study</a></p>
		</div>
		<div class="case-grid">
			<article class="case-panel">
				<h3>Business challenge</h3>
				<p>Legacy reporting logic had accumulated across fragile assets, which made change risk high and metric trust uneven. Finance-facing reporting needed clearer continuity, validation discipline, and a cleaner path away from opaque report logic.</p>
			</article>
			<article class="case-panel">
				<h3>Architecture and implementation</h3>
				<p>I translated legacy reporting behavior into reusable SQL logic, aligned recurring calculations around trusted metric definitions, and supported a dimensional reporting direction that reduced repeated hand-built logic across downstream assets.</p>
			</article>
			<article class="case-panel">
				<h3>Engineering decisions</h3>
				<p>The key decision was to modernize semantics before chasing cosmetic report replacement. That meant validating calculations, separating reusable logic from presentation, and treating reporting continuity as a design constraint rather than an afterthought.</p>
			</article>
			<article class="case-panel">
				<h3>Outcome and lessons</h3>
				<p>The work helped reposition modernization as a business continuity issue rather than just a tooling refresh. It reinforced that reporting migrations fail when teams move screens before they move logic, controls, and metric ownership.</p>
			</article>
		</div>
	</article>

	<article class="project-case">
		<div class="case-header">
			<p class="card-kicker">BI governance platform</p>
			<h2>Project Portfolio Governance Platform</h2>
			<p>Built an operational governance platform that combined SharePoint intake, Power BI reporting, dimensional modeling, and DAX-based measures to compute project health from measurable signals.</p>
			<div class="meta-list">
				<span>SharePoint</span>
				<span>Power BI</span>
				<span>DAX</span>
				<span>Dimensional modeling</span>
				<span>Governance metrics</span>
				<span>Intake workflow</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/portfolio-governance-platform/">Read full case study</a></p>
		</div>
		<div class="case-grid">
			<article class="case-panel">
				<h3>Business challenge</h3>
				<p>Leadership needed portfolio visibility that went beyond manually reported status. Oversight was fragmented across updates, local trackers, and inconsistent health narratives that were hard to compare.</p>
			</article>
			<article class="case-panel">
				<h3>Architecture and implementation</h3>
				<p>I used SharePoint as the intake and operating surface, modeled project, time, and status signals into reporting structures, and built Power BI measures that rolled operational events into governance metrics and executive views.</p>
			</article>
			<article class="case-panel">
				<h3>Engineering decisions</h3>
				<p>A key decision was to compute health from observable signals such as milestone movement, intake aging, deliverable status, and process adherence instead of treating narrative status text as the source of truth.</p>
			</article>
			<article class="case-panel">
				<h3>Outcome and lessons</h3>
				<p>The platform standardized workflow expectations and gave executives a more defensible view of portfolio health. It also showed that governance reporting becomes far more useful when the model captures behavior, not just summaries.</p>
			</article>
		</div>
	</article>

	<article class="project-case">
		<div class="case-header">
			<p class="card-kicker">Product-minded analytics tooling</p>
			<h2>Parqcel</h2>
			<p>Developed a desktop data product for exploring, editing, and analyzing parquet, CSV, and Excel files with a Polars-backed engine and a separated GUI workflow.</p>
			<div class="meta-list">
				<span>Python</span>
				<span>Polars</span>
				<span>PyQt</span>
				<span>Pagination</span>
				<span>Feature engineering</span>
				<span>AI integration</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/parqcel/">Read full case study</a></p>
		</div>
		<div class="case-grid">
			<article class="case-panel">
				<h3>Business problem</h3>
				<p>Analysts often need fast inspection and lightweight transformation of large files without bouncing between scripts, notebooks, and spreadsheet tools.</p>
			</article>
			<article class="case-panel">
				<h3>Architecture and implementation</h3>
				<p>Parqcel separates the GUI from the data engine so large flat-file workflows can use Polars for paging, filtering, and transformation while the interface stays responsive and analyst-friendly.</p>
			</article>
			<article class="case-panel">
				<h3>Engineering decisions</h3>
				<p>The design prioritized pagination, typed operations, and clean boundaries between UI actions and data processing. Optional AI integration was treated as an assistive layer with explicit safety constraints instead of as the core product.</p>
			</article>
			<article class="case-panel">
				<h3>Outcome and lessons</h3>
				<p>The result is a stronger product case study than a simple utility script. It shows feature engineering, interaction design, and systems thinking around analyst productivity.</p>
			</article>
		</div>
	</article>
</section>

<section class="section-block">
	<div class="section-heading">
		<div>
			<p class="section-label">Additional work</p>
			<h2>Secondary projects that still reinforce the broader story.</h2>
		</div>
		<p>These are still useful supporting pieces, but they now sit behind the analytics engineering and BI case studies that better represent the current direction of the portfolio.</p>
	</div>
	<div class="impact-grid">
		<article class="project-card">
			<p class="card-kicker">Analytics enablement</p>
			<h3>External Organization Analytics Enablement</h3>
			<p>Turned a manually maintained workbook into defensible, leadership-ready reporting through validation, remediation, and a clearer path to recurring analytics.</p>
			<div class="tag-list">
				<span>Python</span>
				<span>Jupyter notebooks</span>
				<span>Validation workflow</span>
				<span>Executive presentation</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/external-analytics-enablement/">Read full case study</a></p>
		</article>
		<article class="project-card">
			<p class="card-kicker">Workflow automation</p>
			<h3>Consultation Workflow Automation</h3>
			<p>Built a state-driven workflow across Google Workspace, Cloud Run, and structured AI enrichment to automate intake matching, brief creation, and consultation preparation.</p>
			<div class="tag-list">
				<span>Apps Script</span>
				<span>Cloud Run</span>
				<span>FastAPI</span>
				<span>Vertex AI</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/consultation-workflow-automation/">Read full case study</a></p>
		</article>
		<article class="project-card">
			<p class="card-kicker">Applied analytics</p>
			<h3>MIT Capstone: Marketing Campaign Analysis</h3>
			<p>Built a customer-segmentation workflow that combined PCA, clustering comparison, and business interpretation to support more targeted marketing decisions.</p>
			<div class="tag-list">
				<span>Python</span>
				<span>PCA</span>
				<span>Hierarchical clustering</span>
				<span>Business interpretation</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/marketing-campaign-analysis/">Read full case study</a></p>
		</article>
		<article class="project-card">
			<p class="card-kicker">Cloud delivery</p>
			<h3>Cloud Engineer by McQueen Cloud Advisory</h3>
			<p>Built and deployed a public technical documentation platform with structured local builds, CI/CD, hosting, and a custom domain.</p>
			<div class="tag-list">
				<span>MkDocs</span>
				<span>GitHub Actions</span>
				<span>Firebase Hosting</span>
				<span>Google Cloud</span>
			</div>
			<p class="case-study-link"><a href="{{ site.baseurl }}/projects/cloud-engineer-site/">Read full case study</a></p>
		</article>
	</div>
</section>
