export type StandaloneProject = {
  slug: string;
  title: string;
  kind: string;
  status: string;
  headline: string;
  summary: string;
  question: string;
  approach: string;
  engineering: string;
  verification: string;
  outcome: string;
  boundary: string;
  storyHeadings: [string, string, string];
  stack: string[];
  highlights: { label: string; detail: string }[];
  liveUrl?: string;
  sourceUrl?: string;
};

/**
 * Independent products, builds, and academic work. Professional delivery cases
 * live in projects.ts; keep their scope and results separate from these projects.
 */
export const standaloneProjects: StandaloneProject[] = [
  {
    slug: 'everything-is-random',
    title: 'Everything is Random',
    kind: 'Public browser product',
    status: 'Launched',
    headline: 'A playful toolbox with rigorous rules underneath.',
    summary: 'Designed, built, and launched a collection of browser-based random tools for decisions, games, creative work, test data, and credentials. The visible result is simple; the engineering handles fairness, limits, privacy, and delivery.',
    question: 'How can a random-tool site make many small interactions useful without hiding the rules that determine their results?',
    approach: 'A shared tool registry defines the catalog and routes. React, TypeScript, Vite, and React Router prerender a page for each tool; Firebase Hosting serves the static build. The browser generates results only after a visitor acts, using Web Crypto rather than a remote random-number service.',
    engineering: 'Small draws stay in the page. Larger generation runs in a cancellable worker. Bounded draws use rejection sampling, while the password tool samples valid strings under the selected character-class rules. Input limits, duplicate handling, previous-settings labels, and export formats are explicit. Lists and generated credentials stay in tab memory; the tools do not send generation requests to a backend.',
    verification: 'Automated tests cover bounds, uniqueness, shuffle preservation, picker state, password constraints, UUID format, and exports. Browser tests cover routes, generation flows, validation, themes, and responsive layout. A local Firebase Hosting test checks direct URLs, security headers, and CSP hashes; the repository also documents a live privacy check.',
    outcome: 'The product launched on Firebase Hosting with a connected custom domain and a catalog spanning decision tools, data generators, creative prompts, and credential generators. It demonstrates product design, front-end engineering, validation, and operational delivery in one public build.',
    boundary: 'The documented checks establish expected behavior for tested cases; they are not an independent cryptographic audit or a claim about audience size. The optional contact form was prepared but is not enabled in the documented public release.',
    storyHeadings: ['One registry. Many useful routes.', 'Keep generation in the browser.', 'Test the rules, routes, and release.'],
    stack: ['React', 'TypeScript', 'Vite', 'Web Crypto', 'Web Workers', 'Firebase Hosting'],
    highlights: [
      { label: 'One route per tool', detail: 'Static prerendering gives every tool a direct URL while generation remains in the browser.' },
      { label: 'Fair draws', detail: 'Web Crypto and rejection-sampled bounded selection avoid modulo bias in the documented generation path.' },
      { label: 'Responsive workload', detail: 'A cancellable worker keeps large batches away from the interface thread.' },
      { label: 'Clear limits', detail: 'The product spells out ranges, repeats, state, export behavior, and privacy boundaries.' },
    ],
    liveUrl: 'https://everythingisrandom.mcqueencloud.com/',
  },
  {
    slug: 'parqcel',
    title: 'Parqcel',
    kind: 'Independent product',
    status: 'Built',
    headline: 'Get into the file without turning every question into code.',
    summary: 'Built a PyQt desktop tool for inspecting and transforming Parquet, CSV, and Excel files through a Polars data layer.',
    question: 'How can an analyst inspect a large table without asking the interface to render every row?',
    approach: 'Separated the PyQt interface from typed Polars operations for filtering, conversion, feature engineering, and paged access to tabular data.',
    engineering: 'Pagination defines what the GUI renders; the data engine handles transformations. Optional AI assistance is bounded and inspectable rather than required for the core workflow.',
    verification: 'The project account describes the architecture and interaction boundaries, but does not publish performance benchmarks or usage results.',
    outcome: 'A desktop workflow brings file inspection and transformation into one interface.',
    boundary: 'No benchmark, user count, or commercial result is documented publicly.',
    storyHeadings: ['Separate the interface from the data.', 'Page the view. Process the table.', 'Performance remains unbenchmarked.'],
    stack: ['Python', 'Polars', 'PyQt', 'Parquet', 'Pagination'],
    highlights: [
      { label: 'Multiple formats', detail: 'Parquet, CSV, and Excel enter the same inspection workflow.' },
      { label: 'Engine boundary', detail: 'Polars handles typed data operations apart from GUI event logic.' },
      { label: 'Paged viewing', detail: 'The interface renders a slice of a table instead of its entire contents.' },
    ],
  },
  {
    slug: 'consultation-workflow-automation',
    title: 'Consultation workflow automation',
    kind: 'Independent MVP',
    status: 'MVP',
    headline: 'Give each consultation a state the next run can read.',
    summary: 'Built a consultation-preparation MVP across Google Workspace, Apps Script, and an authenticated Cloud Run service with structured Vertex AI assistance.',
    question: 'How does a scheduled workflow pick up a consultation after a booking, an intake response, or a partial run?',
    approach: 'Kept bookings, tracker rows, documents, and drafts in Google Workspace. Apps Script advances the workflow; Cloud Run handles Python dependencies, structured validation, and AI enrichment behind an authenticated boundary.',
    engineering: 'The tracker records inspectable states so later executions can resume work. Booking detection, intake matching, document updates, and Gmail draft creation remain attached to the consultation rather than to one uninterrupted script run.',
    verification: 'The MVP has inspectable state transitions and an authenticated service boundary. The public account does not establish live usage, organizational adoption, or time saved.',
    outcome: 'Implemented a working architecture for consultation preparation and AI-assisted briefs within a small-organization toolset.',
    boundary: 'This is an MVP; no production adoption or quantified operational result is claimed.',
    storyHeadings: ['Make consultation state explicit.', 'Resume after the scheduled run.', 'Keep the MVP boundary visible.'],
    stack: ['Apps Script', 'Google Workspace', 'Cloud Run', 'FastAPI', 'Vertex AI'],
    highlights: [
      { label: 'Workspace control plane', detail: 'Calendar, Forms, Sheets, Docs, Drive, and Gmail hold the operating artifacts.' },
      { label: 'Recorded state', detail: 'Scheduled executions can resume from the consultation tracker.' },
      { label: 'Service boundary', detail: 'Authenticated Cloud Run isolates Python and AI enrichment from Apps Script.' },
    ],
  },
  {
    slug: 'gcp-analytics-engineering',
    title: 'GCP analytics engineering',
    kind: 'Independent build',
    status: 'Vertical slice',
    headline: 'Test the keys before trusting the fact table.',
    summary: 'Built a BigQuery and dbt warehouse slice that preserves raw data, parses it defensively, and tests whether source identifiers can support a fact table.',
    question: 'Can the available business identifiers uniquely describe each fact record?',
    approach: 'Provisioned Google Cloud resources with Terraform, manually loaded an airline source file into BigQuery, preserved raw fields as strings, and used dbt for staging and a fact model.',
    engineering: 'Staging handles blanks, dates, numbers, and indicators explicitly. Notebook analysis and dbt tests challenged candidate natural keys; the fact model uses a surrogate key after those identifiers proved insufficient.',
    verification: 'Notebook checks and dbt tests examine row preservation, conversions, required values, and candidate-key behavior.',
    outcome: 'Completed a tested warehouse vertical slice with a documented key decision and fact model.',
    boundary: 'Raw loading was manual. Automated ingestion and business-facing marts are future work, not part of the implemented result.',
    storyHeadings: ['Preserve raw values first.', 'Test candidate keys before modeling.', 'Check rows, parsing, and identity.'],
    stack: ['Terraform', 'BigQuery', 'dbt', 'Python', 'Google Cloud'],
    highlights: [
      { label: 'Raw first', detail: 'Source values remain visible before parsing changes their types.' },
      { label: 'Defensive staging', detail: 'Conversion rules make blanks and malformed values explicit.' },
      { label: 'Tested identity', detail: 'The fact key follows source-data analysis rather than an assumed natural key.' },
    ],
  },
  {
    slug: 'marketing-campaign-analysis',
    title: 'Marketing campaign analysis',
    kind: 'Academic capstone',
    status: 'Completed',
    headline: 'Compare the segments before recommending the campaign.',
    summary: 'Used customer demographics, spending, engagement, and response data to compare clustering methods and make segment-level marketing recommendations.',
    question: 'Which customer patterns are distinct enough to support different outreach?',
    approach: 'Cleaned and explored the dataset, scaled features, applied PCA, and compared hierarchical clustering, K-means, DBSCAN, K-medoids, and Gaussian mixtures.',
    engineering: 'Model selection considered the interpretability of the resulting groups as well as their statistical separation. The analysis then tied each segment to spending and engagement behavior.',
    verification: 'Compared clustering outputs and their business interpretation before recommending a segmentation approach.',
    outcome: 'Produced customer-group interpretations and recommendations for premium offers, loyalty efforts, and incentive outreach.',
    boundary: 'This was an MIT Professional Education capstone. No campaign deployment or measured lift is claimed.',
    storyHeadings: ['Compare methods before naming groups.', 'Turn clusters into behavioral profiles.', 'Check the business interpretation.'],
    stack: ['Python', 'PCA', 'Clustering', 'Customer segmentation'],
    highlights: [
      { label: 'Prepare', detail: 'Clean and scale demographic, behavioral, and spending features.' },
      { label: 'Compare', detail: 'Evaluate several clustering methods instead of accepting one output.' },
      { label: 'Interpret', detail: 'Connect group behavior to plausible outreach choices.' },
    ],
  },
  {
    slug: 'cloud-engineer-site',
    title: 'Cloud Engineer publishing platform',
    kind: 'Independent build',
    status: 'Published',
    headline: 'Turn technical notes into a repeatable publishing system.',
    summary: 'Built a MkDocs technical documentation site with local builds, GitHub Actions deployment, Firebase Hosting, and a custom domain.',
    question: 'How can technical writing move from local notes to a maintainable public site?',
    approach: 'Organized content in MkDocs, set up a version-controlled build and deployment workflow in GitHub Actions, and published through Firebase Hosting.',
    engineering: 'Documentation structure, local rendering, CI/CD, hosting, and domain configuration form one publishing path.',
    verification: 'The source describes local build checks and an automated deployment path; it does not report audience or content impact.',
    outcome: 'Published a technical documentation site with a repeatable update process.',
    boundary: 'No readership, adoption, or commercial outcome is stated in the public account.',
    storyHeadings: ['Put documentation in source control.', 'Build a release path for the writing.', 'Check the build and deployment path.'],
    stack: ['MkDocs', 'GitHub Actions', 'Firebase Hosting', 'Google Cloud'],
    highlights: [
      { label: 'Structured source', detail: 'MkDocs keeps technical pages navigable and maintainable.' },
      { label: 'Repeatable release', detail: 'GitHub Actions builds and deploys from version-controlled content.' },
      { label: 'Public delivery', detail: 'Firebase Hosting and a custom domain serve the documentation.' },
    ],
  },
];
