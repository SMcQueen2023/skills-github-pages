---
layout: default
title: Consultation Workflow Automation
permalink: /projects/consultation-workflow-automation/
page_class: page-project-detail
description: Workflow automation case study focused on Apps Script, Cloud Run, Vertex AI, and state-driven operational design.
---

<section class="page-intro">
	<p class="intro-label"><a class="breadcrumb-link" href="{{ site.baseurl }}/projects/">Projects</a> / Consultation Workflow Automation</p>
	<h1>Consultation Workflow Automation</h1>
	<p>This project shows workflow and application architecture applied to a real operating problem: turning fragmented consultation intake, follow-up, and preparation work into a more repeatable system using the tools a small organization could realistically operate.</p>
</section>

<section class="section-block">
	<div class="case-study-shell">
		<div class="detail-stack">
			<article class="detail-section">
				<p class="card-kicker">Business problem</p>
				<h2>Why the workflow needed structure</h2>
				<p>Consultation bookings, intake responses, draft communications, and preparation notes often live across disconnected tools. That creates manual follow-up work, inconsistent handoffs, and weak visibility into where a consultation stands.</p>
				<p>The objective was to connect those steps into a practical workflow without forcing a small organization into heavyweight platform choices it would struggle to maintain.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Architecture</p>
				<h2>How the workflow is organized</h2>
				<div class="detail-flow">
					<div class="detail-flow-step">
						<strong>Google Workspace control plane</strong>
						<span>Calendar, Forms, Sheets, Docs, Drive, and Gmail anchor the operating workflow because they are already the tools the business uses day to day.</span>
					</div>
					<div class="detail-flow-step">
						<strong>State-driven orchestration</strong>
						<span>Apps Script updates tracker status, creates briefs and drafts, and resumes work safely across scheduled runs.</span>
					</div>
					<div class="detail-flow-step">
						<strong>Authenticated enrichment service</strong>
						<span>Cloud Run handles Python dependencies, structured validation, and Vertex AI integration behind an authenticated boundary.</span>
					</div>
				</div>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Implementation</p>
				<h2>What the system does</h2>
				<p>The current MVP supports booking detection from Google Calendar, tracker-row creation, research brief generation, Gmail draft creation, intake-response matching, document updates, authenticated Apps Script to Cloud Run communication, and structured AI-assisted consultation preparation.</p>
				<p>The workflow is deliberately state-driven so it can resume safely across scheduled executions rather than assuming the entire process completes in one uninterrupted run.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Engineering decisions</p>
				<h2>Why the boundaries matter</h2>
				<ul class="detail-list">
					<li>Keep Apps Script as the control plane because the source systems already live in Google Workspace.</li>
					<li>Move AI enrichment and Python dependencies into Cloud Run because service contracts, IAM protection, and structured validation are easier to manage there.</li>
					<li>Accept the transparency tradeoff of a Google Sheet tracker for the MVP because inspectability and ease of repair matter at this scale.</li>
				</ul>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Tradeoffs</p>
				<h2>What the design optimized for</h2>
				<p>Keeping everything in Apps Script would reduce moving parts, but it would make the AI boundary and Python dependency story much weaker. Moving everything into Cloud Run would create a cleaner backend, but it would add friction around documents, drafts, and other workflow artifacts that naturally belong in Workspace.</p>
				<p>The final shape optimizes for fast delivery, maintainability, and clear business-process ownership rather than platform purity.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Outcome</p>
				<h2>What this project demonstrates</h2>
				<p>The result is a production-style workflow architecture that small organizations could realistically operate: practical automation, authenticated service boundaries, and structured AI assistance tied to an actual process rather than a demo prompt.</p>
				<p>It broadens the portfolio by showing systems design in an operational workflow setting rather than only in analytics and BI contexts.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Lessons learned</p>
				<h2>Why it still belongs on the site</h2>
				<p>This is secondary portfolio work because it is less aligned with the current analytics-engineering focus, but it still demonstrates architecture judgment, workflow design, and clean service-boundary thinking.</p>
				<p>It also reinforces that useful automation is often about clarifying process state and ownership rather than only adding code.</p>
			</article>
		</div>

		<aside class="case-study-aside">
			<article class="sticky-panel is-sticky">
				<p class="card-kicker">Project focus</p>
				<h3>Workflow design with clear service boundaries</h3>
				<div class="chip-list">
					<span>Apps Script</span>
					<span>Cloud Run</span>
					<span>FastAPI</span>
					<span>Vertex AI</span>
					<span>State-driven workflow</span>
				</div>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">Related case studies</p>
				<ul class="detail-list">
					<li><a class="inline-link" href="{{ site.baseurl }}/projects/cloud-engineer-site/">Cloud Engineer by McQueen Cloud Advisory</a></li>
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
