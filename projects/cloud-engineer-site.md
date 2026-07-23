---
layout: default
title: Cloud Engineer by McQueen Cloud Advisory
permalink: /projects/cloud-engineer-site/
page_class: page-project-detail
description: Documentation platform case study focused on MkDocs, Firebase Hosting, GitHub Actions CI/CD, and public technical publishing.
---

<section class="page-intro">
	<p class="intro-label"><a class="breadcrumb-link" href="{{ site.baseurl }}/projects/">Projects</a> / Cloud Engineer</p>
	<h1>Cloud Engineer by McQueen Cloud Advisory</h1>
	<p>This project built a public technical documentation platform rather than a traditional application. Its value in the portfolio is architectural discipline: choosing a documentation-first publishing model, deploying it cleanly, and creating a public asset that could support structured technical writing over time.</p>
</section>

<section class="section-block">
	<div class="case-study-shell">
		<div class="detail-stack">
			<article class="detail-section">
				<p class="card-kicker">Business problem</p>
				<h2>Why a documentation platform was needed</h2>
				<p>A growing body of technical material needed a publishing model that was structured, repeatable, and maintainable. A simple notes repository would not have supported public learning paths, portfolio-ready project pages, or a coherent information architecture.</p>
				<p>The goal was to create a public technical asset that could evolve deliberately rather than becoming a collection of disconnected articles.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Architecture</p>
				<h2>How the platform was delivered</h2>
				<div class="detail-flow">
					<div class="detail-flow-step">
						<strong>MkDocs source structure</strong>
						<span>Documentation content is authored in a documentation-first structure suited to repeatable navigation, consistent page patterns, and long-form technical writing.</span>
					</div>
					<div class="detail-flow-step">
						<strong>GitHub Actions CI/CD</strong>
						<span>Version control and automated build-and-deploy workflows create a more reliable publishing process than manual edits or ad hoc hosting changes.</span>
					</div>
					<div class="detail-flow-step">
						<strong>Firebase Hosting and custom domain</strong>
						<span>The published site is served through Firebase Hosting with a McQueen Cloud Advisory subdomain, giving the platform a real public delivery boundary.</span>
					</div>
				</div>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Implementation</p>
				<h2>What the build emphasized</h2>
				<p>The work emphasized publishing discipline over novelty: local build reliability, source control, automated deployment, hosting configuration, and a custom domain that made the site a real public technical property rather than a local project artifact.</p>
				<p>It also created a platform that could support future project and pattern writing in a more systematic way than scattered documents or one-off static pages.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Engineering decisions</p>
				<h2>Why the approach was chosen</h2>
				<ul class="detail-list">
					<li>Use a documentation-first publishing model because the asset is meant to support structured learning paths and technical reference material.</li>
					<li>Automate builds and deploys so public publishing remains repeatable and less error-prone.</li>
					<li>Treat hosting, DNS, and delivery configuration as part of the product boundary, not as afterthoughts.</li>
				</ul>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Tradeoffs</p>
				<h2>What the project optimized for</h2>
				<p>A custom application stack might have offered more flexibility, but it would have added unnecessary overhead for the actual requirement: publish structured technical content well and maintain it safely over time.</p>
				<p>The chosen architecture favors clarity, maintainability, and delivery discipline over platform complexity for its own sake.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Outcome</p>
				<h2>What it proves</h2>
				<p>The project demonstrates that even a documentation platform benefits from architecture judgment, CI/CD discipline, and a clean public delivery model. It is practical evidence of building a stable technical publishing surface, not just writing content.</p>
				<p>It also supports the portfolio by showing a public cloud-delivery asset that is structured and maintained rather than improvised.</p>
			</article>

			<article class="detail-section">
				<p class="card-kicker">Lessons learned</p>
				<h2>Why it remains secondary</h2>
				<p>This project still demonstrates useful engineering discipline, but it is no longer one of the strongest signals for the current analytics-engineering and BI direction of the portfolio.</p>
				<p>Keeping it as secondary work is the right balance: it remains credible evidence of technical delivery without distracting from the analytics-first case studies.</p>
			</article>
		</div>

		<aside class="case-study-aside">
			<article class="sticky-panel is-sticky">
				<p class="card-kicker">Project focus</p>
				<h3>Public technical publishing as a real delivery asset</h3>
				<div class="chip-list">
					<span>MkDocs</span>
					<span>GitHub Actions</span>
					<span>Firebase Hosting</span>
					<span>Custom DNS</span>
					<span>Documentation platform</span>
				</div>
			</article>

			<article class="sticky-panel">
				<p class="card-kicker">Related case studies</p>
				<ul class="detail-list">
					<li><a class="inline-link" href="{{ site.baseurl }}/projects/consultation-workflow-automation/">Consultation Workflow Automation</a></li>
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
