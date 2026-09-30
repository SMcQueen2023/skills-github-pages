export type StandaloneProject = {
  slug: string;
  title: string;
  kind: string;
  status: string;
  role: string;
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
  artifacts?: { title: string; url: string; caption: string; kind: string }[];
};

/**
 * Independent products, builds, and academic work. Professional delivery cases
 * live in projects.ts; keep their scope and results separate from these projects.
 */
export const standaloneProjects: StandaloneProject[] = [
  {
    slug: 'finance-analytics-platform',
    title: 'Finance analytics platform',
    kind: 'Independent project · Synthetic data',
    status: 'Local mart implemented',
    role: 'I designed the data model, wrote the dbt transformations, and worked through local data and build defects.',
    headline: 'Monthly actuals with historical context and explicit sign rules.',
    summary: 'Built a ClickHouse and dbt demonstration that joins synthetic ledger entries to historical account and cost-center records, then calculates signed monthly actuals.',
    question: 'How should monthly reporting retain the account and cost-center context that applied when an entry was posted?',
    approach: 'I separated CSV inputs, raw ClickHouse tables, dbt staging models, and a monthly mart. Account and cost-center records use surrogate keys and effective dates, so the SQL can resolve a ledger entry to the dimension version valid on its posting date.',
    engineering: 'The mart uses left joins on business keys and inclusive effective-date ranges. It groups by fiscal year, fiscal period, and account and cost-center versions, retaining their labels. A CASE expression assigns the amount sign from the debit/credit flag and account natural sign before aggregation. Keeping dimension versions in the grouping preserves changes that occur within a period.',
    verification: 'The checked-in dbt schemas define unique and non-null entry and dimension keys, accepted debit/credit and current-record flags, and required mart fields. The project log records tests exposing duplicate loads and blank debit/credit values during local development. GitLab CI parses the dbt project; it does not run a database integration test.',
    outcome: 'Implemented a local path from synthetic ledger files to a monthly actuals mart, with readable SQL, source definitions, and data-quality test definitions available for review.',
    boundary: 'This is an independent demonstration with synthetic data. Airflow orchestration and full integration CI remain future work.',
    storyHeadings: ['Preserve historical reporting context.', 'Make the grain and sign calculation inspectable.', 'Separate data tests from CI parsing.'],
    stack: ['SQL', 'dbt', 'ClickHouse', 'Docker Compose', 'Dimensional modeling'],
    highlights: [
      { label: 'Historical joins', detail: 'Posting dates select effective account and cost-center versions.' },
      { label: 'Declared grain', detail: 'Fiscal year and period × cost-center version × account version.' },
      { label: 'Metric definition', detail: 'Signed actuals use the entry flag and the account’s natural sign.' },
    ],
    sourceUrl: 'https://gitlab.com/scottmcqueen2023/finance-analytics-platform',
    artifacts: [
      { title: 'Monthly actuals SQL', kind: 'Transformation', url: 'https://gitlab.com/scottmcqueen2023/finance-analytics-platform/-/blob/main/dbt/finance_analytics/models/marts/fct_actuals_by_cost_center_month.sql', caption: 'Inspect the effective-date joins, grouping columns, and signed-amount calculation that define the mart.' },
      { title: 'Staging data-quality tests', kind: 'dbt schema', url: 'https://gitlab.com/scottmcqueen2023/finance-analytics-platform/-/blob/main/dbt/finance_analytics/models/staging/schema.yml', caption: 'Defines uniqueness, required-field, and accepted-value checks for ledger and historical reference records.' },
      { title: 'Local validation and CI decisions', kind: 'Development record', url: 'https://gitlab.com/scottmcqueen2023/finance-analytics-platform/-/blob/main/project_log/001-week.md', caption: 'Records duplicate-load and debit/credit defects, followed by the decision to start CI with parsing only.' },
      { title: 'CI configuration', kind: 'Build configuration', url: 'https://gitlab.com/scottmcqueen2023/finance-analytics-platform/-/blob/main/.gitlab-ci.yml', caption: 'Shows the actual dbt parse job, making the current automation boundary visible.' },
    ],
  },
  {
    slug: 'everything-is-random',
    title: 'Everything is Random',
    kind: 'Independent browser product',
    status: 'Launched',
    role: 'I designed, built, tested, and launched the browser product.',
    headline: 'A playful toolbox with rigorous rules underneath.',
    summary: 'Designed, built, and launched a collection of browser-based random tools for decisions, games, creative work, test data, and credentials. The visible result is simple; the engineering handles fairness, limits, privacy, and delivery.',
    question: 'How can a random-tool site make many small interactions useful without hiding the rules that determine their results?',
    approach: 'A shared tool registry defines the catalog and routes. React, TypeScript, Vite, and React Router prerender a page for each tool; Firebase Hosting serves the static build. The browser generates results only after a visitor acts, using Web Crypto rather than a remote random-number service.',
    engineering: 'Small draws stay in the page. Larger generation runs in a cancellable worker. Bounded draws use rejection sampling, while the password tool samples valid strings under the selected character-class rules. Input limits, duplicate handling, previous-settings labels, and export formats are explicit. Lists and generated credentials stay in tab memory; the tools do not send generation requests to a backend.',
    verification: 'The project record describes automated checks for bounds, uniqueness, shuffle preservation, picker state, password constraints, UUID format, and exports. It also documents browser, local Hosting, and live privacy checks. The live product is available below; the test implementation is not linked publicly here.',
    outcome: 'The product launched on Firebase Hosting with a connected custom domain and a catalog spanning decision tools, data generators, creative prompts, and credential generators. It demonstrates product design, front-end engineering, validation, and operational delivery in one public build.',
    boundary: 'An independent product with no audience-size or independent cryptographic-audit claim. The documented release uses direct email contact.',
    storyHeadings: ['One registry. Many useful routes.', 'Keep generation in the browser.', 'Test the rules, routes, and release.'],
    stack: ['React', 'TypeScript', 'Vite', 'Web Crypto', 'Web Workers', 'Firebase Hosting'],
    highlights: [
      { label: 'One route per tool', detail: 'Static prerendering gives every tool a direct URL while generation remains in the browser.' },
      { label: 'Fair draws', detail: 'Web Crypto and rejection-sampled bounded selection avoid modulo bias in the documented generation path.' },
      { label: 'Responsive workload', detail: 'A cancellable worker keeps large batches away from the interface thread.' },
      { label: 'Clear limits', detail: 'The product spells out ranges, repeats, state, export behavior, and privacy boundaries.' },
    ],
    liveUrl: 'https://everythingisrandom.mcqueencloud.com/',
    artifacts: [
      { title: 'Live browser product', kind: 'Working interface', url: 'https://everythingisrandom.mcqueencloud.com/', caption: 'Try input validation, explicit sampling rules, and result exports. This demonstrates product behavior; it is not a substitute for reviewing the test code.' },
    ],
  },
  {
    slug: 'parqcel',
    title: 'Parqcel',
    kind: 'Independent product',
    status: 'Built',
    role: 'I built the desktop workflow and its Polars data operations.',
    headline: 'Get into the file without turning every question into code.',
    summary: 'Built a PyQt desktop tool for inspecting and transforming Parquet, CSV, and Excel files through a Polars data layer.',
    question: 'How can an analyst inspect a large table without asking the interface to render every row?',
    approach: 'Separated the PyQt interface from typed Polars operations for filtering, conversion, feature engineering, and paged access to tabular data.',
    engineering: 'The table model keeps a full Polars DataFrame and a separate current-page slice. Edits translate a visible row into its underlying row index, while undo and redo restore saved states. Filtering lives in a helper that can be tested without opening Qt dialogs. Pagination reduces rendered rows; it does not turn the app into an out-of-core processing engine.',
    verification: 'Public tests assert page sizes and navigation, sorting, date conversion, and data or column restoration through undo and redo. The model tests also check that a new mutation clears the redo branch. These are inspectable behavior checks; no measured speed or memory benchmark is claimed.',
    outcome: 'A desktop workflow brings file inspection and transformation into one interface.',
    boundary: 'No benchmark, user count, or commercial result is documented publicly.',
    storyHeadings: ['Separate the interface from the data.', 'Page the view. Preserve edit state.', 'Test navigation and reversible changes.'],
    stack: ['Python', 'Polars', 'PyQt', 'Parquet', 'Pagination'],
    highlights: [
      { label: 'Multiple formats', detail: 'Parquet, CSV, and Excel enter the same inspection workflow.' },
      { label: 'Engine boundary', detail: 'Polars handles typed data operations apart from GUI event logic.' },
      { label: 'Paged viewing', detail: 'The interface renders a slice of a table instead of its entire contents.' },
    ],
    sourceUrl: 'https://github.com/SMcQueen2023/Parqcel',
    artifacts: [
      { title: 'Paged table and edit-state model', kind: 'Python implementation', url: 'https://github.com/SMcQueen2023/Parqcel/blob/main/src/models/polars_table_model.py', caption: 'Shows how the visible page maps to the underlying table and how edits, schema changes, undo, and redo refresh the view.' },
      { title: 'Filtering transformations', kind: 'Polars implementation', url: 'https://github.com/SMcQueen2023/Parqcel/blob/main/src/logic/filtering.py', caption: 'Separates comparisons, inclusive ranges, and string filters from GUI prompts so they can be tested independently.' },
      { title: 'Table-model tests', kind: 'Behavior checks', url: 'https://github.com/SMcQueen2023/Parqcel/blob/main/tests/test_model.py', caption: 'Concrete assertions cover partial final pages, date parsing, sorting, column restoration, and clearing redo after a new change.' },
    ],
  },
  {
    slug: 'consultation-workflow-automation',
    title: 'Consultation workflow automation',
    kind: 'Independent MVP',
    status: 'MVP',
    role: 'I designed and implemented the Workspace workflow and its Cloud Run enrichment service.',
    headline: 'Give each consultation a state the next run can read.',
    summary: 'Built a consultation-preparation MVP across Google Workspace, Apps Script, and an authenticated Cloud Run service with structured Vertex AI assistance.',
    question: 'How does a scheduled workflow pick up a consultation after a booking, an intake response, or a partial run?',
    approach: 'Kept bookings, tracker rows, documents, and drafts in Google Workspace. Apps Script advances the workflow; Cloud Run handles Python dependencies, structured validation, and AI enrichment behind an authenticated boundary.',
    engineering: 'One runner executes booking sync, brief creation, draft creation, intake sync, document updates, and enrichment in a defined order. Enrichment requires a submitted intake and updated document, then records In Progress, Generated, or Failed in the tracker. Failed work is visible for intervention; the implementation does not provide a blanket automatic-retry guarantee.',
    verification: 'The source checks required headers, intake row references, and HTTP response codes. Pydantic models define the service payloads. The authentication guide documents identity-token and Cloud Run audience checks. No end-to-end automated test suite or production reliability result is claimed.',
    outcome: 'Implemented a working architecture for consultation preparation and AI-assisted briefs within a small-organization toolset.',
    boundary: 'This is an MVP; no production adoption or quantified operational result is claimed.',
    storyHeadings: ['Make consultation state explicit.', 'Sequence work and record failures.', 'Validate inputs and service access.'],
    stack: ['Apps Script', 'Google Workspace', 'Cloud Run', 'FastAPI', 'Vertex AI'],
    highlights: [
      { label: 'Workspace control plane', detail: 'Calendar, Forms, Sheets, Docs, Drive, and Gmail hold the operating artifacts.' },
      { label: 'Recorded state', detail: 'Readiness checks and explicit success or failure states make partial progress visible.' },
      { label: 'Service boundary', detail: 'Authenticated Cloud Run isolates Python and AI enrichment from Apps Script.' },
    ],
    sourceUrl: 'https://github.com/SMcQueen2023/consultation-workflow-automation',
    artifacts: [
      { title: 'Workflow sequence', kind: 'Apps Script', url: 'https://github.com/SMcQueen2023/consultation-workflow-automation/blob/main/app-scripts/workflow_runner.gs', caption: 'A single ordered runner makes the dependencies between booking, intake, documents, and enrichment explicit.' },
      { title: 'Enrichment state and error handling', kind: 'Apps Script', url: 'https://github.com/SMcQueen2023/consultation-workflow-automation/blob/main/app-scripts/ai_enrichment.gs', caption: 'Inspect readiness gates, required-header checks, HTTP handling, and tracker updates on success or failure.' },
      { title: 'Service request and response models', kind: 'Python / Pydantic', url: 'https://github.com/SMcQueen2023/consultation-workflow-automation/blob/main/cloud-run/app/models.py', caption: 'Defines the structured contract between the Workspace workflow and the enrichment service.' },
      { title: 'Authenticated invocation guide', kind: 'Implementation guide', url: 'https://github.com/SMcQueen2023/consultation-workflow-automation/blob/main/docs/app-script-cloud-run-authentication.md', caption: 'Documents the identity-token, audience, and invoker-permission decisions needed to connect Apps Script to Cloud Run.' },
    ],
  },
  {
    slug: 'gcp-analytics-engineering',
    title: 'GCP analytics engineering',
    kind: 'Independent build',
    status: 'Vertical slice',
    role: 'I built the cloud infrastructure and warehouse slice described in this project account.',
    headline: 'Test the keys before trusting the fact table.',
    summary: 'Built a BigQuery and dbt warehouse slice that preserves raw data, parses it defensively, and tests whether source identifiers can support a fact table.',
    question: 'Can the available business identifiers uniquely describe each fact record?',
    approach: 'Provisioned Google Cloud resources with Terraform, manually loaded an airline source file into BigQuery, preserved raw fields as strings, and used dbt for staging and a fact model.',
    engineering: 'Staging handles blanks, dates, numbers, and indicators explicitly. Notebook analysis and dbt tests challenged candidate natural keys; the fact model uses a surrogate key after those identifiers proved insufficient.',
    verification: 'The project account describes notebook checks and dbt tests for row preservation, conversions, required values, and candidate-key behavior. The source files are not currently linked publicly, so this case provides a design account rather than an inspectable implementation.',
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
    role: 'I completed the analysis and recommendations as an MIT Professional Education capstone.',
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
    sourceUrl: 'https://github.com/SMcQueen2023/Marketing-Campaign-Analysis',
    artifacts: [
      { title: 'Customer-segmentation notebook', kind: 'Academic analysis', url: 'https://github.com/SMcQueen2023/Marketing-Campaign-Analysis/blob/main/Capstone_Project_Reference_Notebook_Full_Code_Marketing_Campaign_Analysis%20(1).ipynb', caption: 'Contains preparation, feature analysis, clustering comparisons, visualizations, and marketing recommendations. This is coursework, with no deployed campaign or measured lift.' },
    ],
  },
  {
    slug: 'cloud-engineer-site',
    title: 'Cloud Engineer publishing platform',
    kind: 'Independent build',
    status: 'Published',
    role: 'I built the documentation site and its publishing workflow.',
    headline: 'Turn technical notes into a repeatable publishing system.',
    summary: 'Built a MkDocs technical documentation site with local builds, GitHub Actions deployment, Firebase Hosting, and a custom domain.',
    question: 'How can technical writing move from local notes to a maintainable public site?',
    approach: 'Organized content in MkDocs, set up a version-controlled build and deployment workflow in GitHub Actions, and published through Firebase Hosting.',
    engineering: 'Documentation structure, local rendering, CI/CD, hosting, and domain configuration form one publishing path.',
    verification: 'The existing project account describes local build checks and an automated deployment path. A public source or live URL is not currently linked for inspection.',
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
