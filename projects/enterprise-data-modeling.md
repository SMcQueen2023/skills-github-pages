---
layout: default
title: Revenue Accounting Modeling Proof of Concept
permalink: /projects/enterprise-data-modeling/
page_class: page-project-detail
description: Enterprise data modeling case study focused on dimensional design, business grain, surrogate keys, and semantic layer behavior.
---

<section class="page-intro">
	<p class="intro-label"><a class="breadcrumb-link" href="{{ site.baseurl }}/projects/">Projects</a> / Enterprise Data Modeling</p>
	<h1>Revenue Accounting Modeling Proof of Concept</h1>
	<p>This project focused on data warehouse thinking rather than dashboard cosmetics. The goal was to shape normalized enterprise data into an analytical structure that would behave predictably in reporting, reduce repeated join logic, and support clearer metric design in Power BI.</p>
</section>

<section class="section-block">
	<div class="artifact-board">
		<div class="artifact-header">
			<p class="section-label">Model Snapshot</p>
			<h2>The proof of concept was about business grain and reporting behavior, not just star-schema aesthetics.</h2>
			<p>The work moved from normalized operational entities into analytical structures that could support reusable metrics and predictable BI relationships.</p>
		</div>
		<div class="flow-diagram">
			<div class="flow-node">
				<strong>Normalized sources</strong>
				<span>Operational keys, entity relationships, and source-driven structures.</span>
			</div>
			<div class="flow-arrow">&rarr;</div>
			<div class="flow-node">
				<strong>Fact + dimensions</strong>
				<span>Business grain, surrogate keys, conformed context, and history where needed.</span>
			</div>
			<div class="flow-arrow">&rarr;</div>
			<div class="flow-node">
				<strong>Semantic consumption</strong>
				<span>Power BI relationships and reusable analytical definitions.</span>
			</div>
		</div>
		<div class="artifact-grid">
			<article class="artifact-card">
				<h3>Design constraints</h3>
				<ul class="compact-list">
					<li>Operational keys and structures were not optimized for downstream reporting behavior.</li>
					<li>The model had to support self-service BI usage without flattening away meaningful business structure.</li>
					<li>History had to be handled only where it materially changed analytical interpretation.</li>
				</ul>
			</article>
			<article class="artifact-card">
				<h3>Validation strategy</h3>
				<ul class="compact-list">
					<li>Confirm business grain before measure design.</li>
					<li>Review relationship behavior with Power BI and semantic-layer use in mind.</li>
					<li>Keep business keys available for traceability even when surrogate keys drive the joins.</li>
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
				<h2>Why the model needed to change</h2>
				<p>The source systems were suitable for operations and transactions, but not for fast, trustworthy analytical work. Analysts had to reconstruct business meaning repeatedly, and reporting logic became harder to standardize because the underlying structures were optimized for source processes instead of analytical use.</p>
				<p>The modeling proof of concept aimed to reduce that friction by turning normalized data into a star-schema shape that business users and BI tooling could work with more consistently.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Architecture</p>
				<h2>Core shape of the solution</h2>
				<div class="detail-flow">
					<div class="detail-flow-step">
						<strong>Normalized source systems</strong>
						<span>Operational entities and keys were reviewed to identify the actual business process grain and the attributes worth preserving analytically.</span>
					</div>
					<div class="detail-flow-step">
						<strong>Fact and dimension design</strong>
						<span>Fact tables were shaped around the business event, while dimensions carried descriptive context, history where necessary, and cleaner join behavior.</span>
					</div>
					<div class="detail-flow-step">
						<strong>Power BI semantic behavior</strong>
						<span>The model was evaluated with downstream relationship behavior in mind so measures and filters would perform more predictably in self-service use.</span>
					</div>
				</div>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Implementation</p>
				<h2>What the proof of concept covered</h2>
				<p>I mapped source entities into proposed fact and dimension structures, identified the role of business keys versus surrogate keys, and framed the model around how analytical consumers would actually use it rather than how the source application stored it.</p>
				<p>The proof of concept also considered how the model would support a semantic layer in practice, including reusable measures, conformed definitions, and reporting relationships that would remain understandable after implementation.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Engineering decisions</p>
				<h2>Why the design was intentional</h2>
				<ul class="detail-list">
					<li>Define grain before defining measures. If the business event is vague, every downstream KPI becomes harder to defend.</li>
					<li>Use surrogate keys to simplify joins and history management, while retaining business keys for traceability and business interpretation.</li>
					<li>Apply slowly changing dimension behavior only where attribute history materially changes analytical meaning.</li>
					<li>Design with Power BI relationship behavior in mind so the semantic layer remains stable under filtering and aggregation.</li>
				</ul>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Tradeoffs</p>
				<h2>Where the model balanced simplicity and fidelity</h2>
				<p>A highly normalized analytical model would have preserved source purity, but it would have made BI usage slower and more fragile. A flattened shortcut model might have simplified the first dashboard, but it would have made reuse and governance harder later.</p>
				<p>The proof of concept therefore emphasized a disciplined middle ground: enough structure to support reliable analytics, but not unnecessary complexity introduced only for architectural appearance.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Validation</p>
				<h2>How the model was tested conceptually</h2>
				<p>The validation focus was on behavior: whether the chosen grain, dimension boundaries, and relationship patterns would make downstream reporting more stable rather than just more visually organized.</p>
				<p>That meant reasoning from measure behavior and analytical use cases backward into the model, not simply drawing a cleaner data diagram.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Outcome</p>
				<h2>What the proof of concept demonstrated</h2>
				<p>The work showed how a dimensional model could reduce repeated analytical effort, improve relationship behavior in Power BI, and support more reusable business logic. It gave the reporting conversation a stronger architectural foundation.</p>
				<p>Most importantly, it shifted the discussion away from simply wanting a star schema and toward understanding why that structure solves specific analytical problems.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Future improvements</p>
				<h2>What would build on the proof of concept</h2>
				<p>The next step would be to formalize the semantic layer, add relationships and measures in a production BI environment, and extend the dimensional design where repeated analytical patterns justify more conformed model components.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Lessons learned</p>
				<h2>What this case study signals</h2>
				<p>Data modeling is not about producing a more impressive diagram. It is about making business grain, relationships, history, and definitions behave in a way that supports trustworthy reporting.</p>
				<p>This project is important in the portfolio because it shows warehouse judgment, semantic-layer thinking, and an understanding of how data models succeed or fail in real BI use.</p>
			</article>
		</div>

		<aside class="case-study-aside">
			<article class="sticky-panel is-sticky">
				<p class="card-kicker">Project focus</p>
				<h3>Warehouse structure for BI behavior</h3>
				<div class="chip-list">
					<span>Dimensional modeling</span>
					<span>Star schema</span>
					<span>Power BI</span>
					<span>Surrogate keys</span>
					<span>Semantic layer design</span>
				</div>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">What it demonstrates</p>
				<ul class="detail-list">
					<li>Business-grain analysis before report development.</li>
					<li>Clear reasoning around fact tables, dimensions, and historical attributes.</li>
					<li>Warehouse design tied directly to downstream BI behavior.</li>
				</ul>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">Related case studies</p>
				<ul class="detail-list">
					<li><a class="inline-link" href="{{ site.baseurl }}/projects/reporting-modernization/">Reporting Modernization and Trusted Finance Metrics</a></li>
					<li><a class="inline-link" href="{{ site.baseurl }}/projects/gcp-analytics-engineering/">GCP Analytics Engineering Project</a></li>
				</ul>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">Back to overview</p>
				<p><a class="inline-link" href="{{ site.baseurl }}/projects/">Return to all projects</a></p>
			</article>
		</aside>
	</div>
</section>
