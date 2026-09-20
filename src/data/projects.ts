export type Project = {
  slug: string;
  number: string;
  title: string;
  headline: string;
  lane: 'Trusted reporting' | 'Controlled automation' | 'Operating visibility' | 'Technical depth';
  context: string;
  summary: string;
  question: string;
  decision: string;
  situation: string;
  approach: string;
  validation: string;
  result: string;
  boundary: string;
  artifactTitle: string;
  artifactCaption: string;
  artifact: { label: string; detail: string }[];
  tools: string[];
  featured?: boolean;
  signal?: string;
};

export const projects: Project[] = [
  {
    slug: 'reporting-modernization', number: '01', title: 'Reporting modernization',
    headline: 'The reports worked. The logic was trapped.', lane: 'Trusted reporting', context: 'Enterprise reporting', featured: true,
    summary: 'Translated fragile SAP BusinessObjects behavior into clearer SQL logic and a more supportable path for finance reporting.',
    question: 'How do you change a report estate without changing what its numbers mean?',
    decision: 'Move the metric definition before the screen. Treat legacy outputs as evidence to reconcile, while checking whether historical behavior reflects business intent or an old implementation constraint.',
    situation: 'Finance-facing reports carried operational and control weight, but recurring logic lived inside assets that were difficult to inspect and reuse. The existing site identifies more than 170 reporting assets in modernization scope; that is a scope figure, not a count of completed migrations.',
    approach: 'I examined calculations and consequential filters, translated repeated behavior into reusable SQL patterns, and kept reporting continuity in the design. The work connected architecture, metric interpretation, and a staged modernization conversation.',
    validation: 'Compare translated calculations and filters with known outputs, then review discrepancies against the intended business definition. A matching screen alone is insufficient if it conceals ambiguous logic.',
    result: 'The effort established a clearer foundation for reusable finance metrics and a more disciplined modernization path. The public source describes the architecture and direction, but does not quantify completed migrations or adoption.',
    boundary: 'The 170+ figure describes reporting assets in scope. This diagram is a sanitized reconstruction of the decision sequence, not a screenshot of employer systems.',
    artifactTitle: 'A metric has to survive the move.',
    artifactCaption: 'The decision was to extract meaning from report behavior before treating a replacement screen as complete.',
    artifact: [
      { label: '01 / inherited behavior', detail: 'Calculations and filters embedded in SAP BusinessObjects assets' },
      { label: '02 / interpreted definition', detail: 'Separate intended finance meaning from historical workarounds' },
      { label: '03 / reusable logic', detail: 'SQL patterns that can be reviewed, compared, and applied again' },
      { label: '04 / trusted output', detail: 'Finance reporting with clearer continuity and validation' },
    ],
    tools: ['SAP BusinessObjects', 'SQL', 'Metric definition', 'Finance reporting'], signal: '170+ assets in scope',
  },
  {
    slug: 'reconciliation-automation', number: '02', title: '401(k) reconciliation automation',
    headline: 'Automation you can audit.', lane: 'Controlled automation', context: 'Organizational delivery', featured: true,
    summary: 'Reworked a manual reconciliation flow into staged ELT with visible checks and reviewer-facing exceptions.',
    question: 'How do you remove manual effort without removing the ability to explain a mismatch?',
    decision: 'Keep landing, matching, validation, and exception handling separate. An exception is a deliberate output, not a failed run hidden in a log.',
    situation: 'Recurring collection, handoffs, comparisons, and reviews consumed time and created continuity risk in a finance-adjacent process. Faster execution alone would have been a weak outcome if discrepancies became harder to inspect.',
    approach: 'Files landed in Azure Blob Storage. Synapse and SQL handled staged transformation and matching; Python supported validation and exception shaping. Distinct stages made failures easier to locate and rerun.',
    validation: 'Reviewers needed to trace an input through each stage and understand why it matched or became an exception. The public source describes these checkpoints but does not publish control samples or counts.',
    result: 'Related analytical automation efforts removed approximately 30 hours per month of manual work; the share from this reconciliation workflow has not been isolated. This process also became more repeatable and easier to inspect.',
    boundary: 'The time saving covers analytical automation work and is not an isolated measure of this pipeline. The trace shows architecture, not actual retirement records.',
    artifactTitle: 'Every exception keeps its trail.',
    artifactCaption: 'A reconciliation path that preserves review points after the manual work is reduced.',
    artifact: [
      { label: 'Received', detail: 'File lands in a controlled storage stage' },
      { label: 'Matched', detail: 'SQL applies repeatable comparison rules' },
      { label: 'Checked', detail: 'Python validation tests the staged result' },
      { label: 'Held for review', detail: 'Exceptions remain visible to a reviewer' },
    ],
    tools: ['Azure Synapse', 'Blob Storage', 'SQL', 'Python'], signal: '~30 hrs/mo across automation work',
  },
  {
    slug: 'portfolio-governance-platform', number: '03', title: 'Portfolio governance platform',
    headline: 'Status from evidence.', lane: 'Operating visibility', context: 'Organizational delivery', featured: true,
    summary: 'Connected intake and project activity to Power BI so portfolio health could be reasoned from observable signals.',
    question: 'What would project health say if it came from delivery behavior rather than a status color?',
    decision: 'Model project, milestone, timing, and status events before calculating executive health measures. Keep each signal explainable to business stakeholders.',
    situation: 'Leadership visibility was fragmented across local trackers and inconsistent status narratives. Comparisons across initiatives were difficult because the underlying operating data and definitions were not standardized.',
    approach: 'SharePoint became the intake and operating surface; project and time signals were modeled for reporting; Power BI and DAX expressed portfolio measures and executive rollups.',
    validation: 'Check whether inputs are comparable across project types and periods, then review whether a calculated health state matches observed delivery behavior. A score is only useful if the underlying signals can be explained.',
    result: 'The platform standardized workflow expectations and provided a more defensible view of project and portfolio health. The public account gives no adoption rate or measured lift.',
    boundary: 'The signal anatomy below is a conceptual reconstruction. It does not disclose a real project score, threshold, or employer data.',
    artifactTitle: 'Anatomy of project health.',
    artifactCaption: 'The reported state follows operating signals; the model makes the reasoning inspectable.',
    artifact: [
      { label: 'Intake', detail: 'A consistent record of requested work and ownership' },
      { label: 'Milestone movement', detail: 'Progress and timing tracked over reporting periods' },
      { label: 'Delivery state', detail: 'Observable completion and process signals' },
      { label: 'Health measure', detail: 'DAX turns modeled signals into an explainable view' },
    ],
    tools: ['SharePoint', 'Power BI', 'DAX', 'Dimensional modeling'],
  },
  {
    slug: 'enterprise-data-modeling', number: '04', title: 'Revenue accounting model',
    headline: 'Define the grain. Then define the metric.', lane: 'Trusted reporting', context: 'Enterprise proof of concept',
    summary: 'Shaped normalized operational data into fact and dimension structures built for stable Power BI relationships.',
    question: 'What is the unit of analysis, and which identity should reporting use?',
    decision: 'Keep business keys for traceability while using surrogate keys for analytical relationships where appropriate. Apply history patterns only when a changed attribute alters reporting meaning.',
    situation: 'Operationally normalized source structures forced analysts to reconstruct joins and business interpretation repeatedly.',
    approach: 'Mapped source entities to a proposed star schema organized around business-process grain, fact tables, dimensions, and reusable semantic definitions.',
    validation: 'Test the proposed grain and relationship behavior against the questions Power BI users need to answer, rather than judging the model solely by its diagram.',
    result: 'The proof of concept established a clearer architectural direction for reusable metrics and BI relationships. It is a modeling proof of concept, not a claimed production rollout.',
    boundary: 'The source describes model design and conceptual validation, not a deployed semantic layer or quantified reporting gain.',
    artifactTitle: 'A reporting model begins with grain.', artifactCaption: 'The operational key remains traceable while the reporting relationships become deliberate.',
    artifact: [
      { label: 'Operational entities', detail: 'Normalized source records and business keys' },
      { label: 'Business process grain', detail: 'One declared unit of analysis for each fact' },
      { label: 'Fact + dimensions', detail: 'Surrogate relationships with business identity retained' },
      { label: 'Semantic use', detail: 'Power BI measures and consistent filtering' },
    ], tools: ['Star schema', 'Power BI', 'Surrogate keys', 'Semantic modeling'],
  },
  {
    slug: 'external-analytics-enablement', number: '05', title: 'External analytics enablement',
    headline: 'Before the chart, audit the workbook.', lane: 'Trusted reporting', context: 'External organization engagement',
    summary: 'Rebuilt mixed workbook data into checked analytical datasets and leadership-ready findings without hiding unresolved totals.',
    question: 'Which conclusions can the source data honestly support?',
    decision: 'Validate and remediate the data before interpretation, and keep unresolved source discrepancies visible in the final story.',
    situation: 'A manually maintained workbook mixed row types, text dates, inconsistent year labels, and totals that could not be accepted at face value.',
    approach: 'Reviewed source risk, rebuilt attendance, baptism, and event datasets, checked records back to the workbook, and prepared executive material and future capture recommendations.',
    validation: 'Row-level review, formula checks, restored special-service records, and checks of event-level discrepancies kept the analysis tied to the source.',
    result: 'The organization received clearer reporting inputs, leadership-facing analysis, and a practical route to recurring analytics. Some source totals remained unreconciled and were presented with that limit.',
    boundary: 'This was an external engagement. Public materials do not establish whether it was a paid client relationship or quantify adoption.',
    artifactTitle: 'A total is a claim.', artifactCaption: 'The working data was cross-checked before a trend became a leadership conclusion.',
    artifact: [
      { label: 'Workbook risk', detail: 'Mixed rows, text dates, inconsistent labels' },
      { label: 'Controlled dataset', detail: 'Rebuilt events and attendance records' },
      { label: 'Source checks', detail: 'Row review and unresolved totals documented' },
      { label: 'Decision material', detail: 'Trends and recommendations with clear limits' },
    ], tools: ['Python', 'Jupyter', 'Data validation', 'Executive reporting'],
  },
  {
    slug: 'consultation-workflow-automation', number: '06', title: 'Consultation workflow automation',
    headline: 'The handoff is the system.', lane: 'Controlled automation', context: 'Independent MVP',
    summary: 'Joined Google Workspace steps with an authenticated Cloud Run service for stateful consultation preparation.',
    question: 'How can a small organization automate preparation without losing track of state?',
    decision: 'Use Workspace as the operating control plane and move Python and AI enrichment behind a separate authenticated service boundary.',
    situation: 'Bookings, intake responses, drafts, and preparation notes were scattered across tools, leaving follow-up and handoffs manual.',
    approach: 'An Apps Script workflow detects bookings, updates tracker state, creates drafts and briefs, matches intake responses, and calls Cloud Run for structured enrichment with Vertex AI.',
    validation: 'The MVP is designed to resume across scheduled executions and makes each tracker state inspectable. The public source does not report live usage or time saved.',
    result: 'A production-style MVP demonstrates practical workflow architecture and a clear AI service boundary. It should be evaluated as an implemented MVP, not a proven organization-wide rollout.',
    boundary: 'No user count, production adoption, or quantified operational result is stated in the public source.',
    artifactTitle: 'State is the continuity plan.', artifactCaption: 'A scheduled workflow can resume because each step leaves a readable state.',
    artifact: [
      { label: 'Booking detected', detail: 'Calendar event enters a tracker' },
      { label: 'Intake matched', detail: 'Forms response attaches to the right consultation' },
      { label: 'Brief prepared', detail: 'Authenticated service returns structured enrichment' },
      { label: 'Draft ready', detail: 'Workspace holds reviewable documents and messages' },
    ], tools: ['Apps Script', 'Cloud Run', 'FastAPI', 'Vertex AI'],
  },
  {
    slug: 'gcp-analytics-engineering', number: '07', title: 'GCP analytics engineering',
    headline: 'Let messy source data tell the truth.', lane: 'Technical depth', context: 'Independent build',
    summary: 'Built a narrow warehouse slice from Terraform infrastructure through raw BigQuery data, dbt staging, and a tested flight fact.',
    question: 'What must be proved before a raw file becomes a trustworthy fact table?',
    decision: 'Preserve source strings, parse defensively in staging, and test candidate natural keys before asserting fact grain.',
    situation: 'U.S. airline on-time performance data exposed type, key, and grain problems that a pipeline could easily conceal.',
    approach: 'Provisioned infrastructure with Terraform, loaded a raw file, declared dbt sources, built staging and fact models, and documented grain analysis.',
    validation: 'Notebook review and dbt tests checked row preservation, parsing, and key behavior. A surrogate key was used only after available business identifiers proved insufficient.',
    result: 'The current build is a working vertical slice with a validated fact model. Automated ingestion and business-facing marts are future work.',
    boundary: 'The source describes manual raw loading and implemented models; it does not claim a fully automated production pipeline.',
    artifactTitle: 'Raw data stays raw.', artifactCaption: 'Typing and business grain are earned in named layers, not assumed at ingestion.',
    artifact: [
      { label: 'BigQuery raw', detail: 'Source fields retained as strings' },
      { label: 'dbt staging', detail: 'Defensive parsing and explicit null handling' },
      { label: 'Grain analysis', detail: 'Candidate keys checked against records' },
      { label: 'Flight fact', detail: 'Tested model with documented identity' },
    ], tools: ['Terraform', 'BigQuery', 'dbt', 'Python'],
  },
  {
    slug: 'parqcel', number: '08', title: 'Parqcel', headline: 'Make big files workable.',
    lane: 'Technical depth', context: 'Independent product',
    summary: 'A desktop tool for exploring and transforming Parquet, CSV, and Excel files with a Polars engine behind a PyQt interface.',
    question: 'How do you give analysts direct control of large files without making the interface carry the computation?',
    decision: 'Separate UI events from typed data operations, paginate large tables, and keep optional AI assistance bounded and inspectable.',
    situation: 'Analysts frequently jump among spreadsheets, notebooks, scripts, and file viewers for routine exploration.',
    approach: 'Built a PyQt interface with a Polars-backed data layer for filtering, conversion, feature engineering, and responsive paged access.',
    validation: 'The public source frames responsiveness, engine separation, and bounded AI behavior as design tests, but does not publish performance benchmarks.',
    result: 'The product demonstrates an integrated analytical workflow and explicit interface/engine boundaries. User adoption is not documented.',
    boundary: 'No benchmark, user count, or commercial result is stated publicly.',
    artifactTitle: 'The table is a viewport.', artifactCaption: 'Paging keeps the interface focused while Polars performs the data work.',
    artifact: [
      { label: 'Files', detail: 'Parquet, CSV, and Excel inputs' },
      { label: 'Typed engine', detail: 'Polars handles transformations' },
      { label: 'Page boundary', detail: 'The GUI renders a useful slice' },
      { label: 'Analyst action', detail: 'Inspect, edit, and explore' },
    ], tools: ['Python', 'Polars', 'PyQt', 'Pagination'],
  },
  {
    slug: 'marketing-campaign-analysis', number: '09', title: 'Marketing campaign analysis',
    headline: 'Segments only matter if they change the action.', lane: 'Technical depth', context: 'MIT capstone',
    summary: 'Compared clustering methods and interpreted customer groups for more deliberate marketing recommendations.',
    question: 'Which customer differences justify a different outreach strategy?',
    decision: 'Compare model families and interpret segments against spending, engagement, and campaign response before recommending action.',
    situation: 'The academic brief called for customer segmentation across demographic, behavioral, and spending data.',
    approach: 'Cleaned data, explored features, scaled inputs, used PCA, compared hierarchical clustering, K-means, DBSCAN, K-medoids, and Gaussian mixtures, then described segment behavior.',
    validation: 'The analysis compared clustering behavior and business interpretability, rather than presenting one algorithm as self-evidently correct.',
    result: 'Produced customer-group interpretations and recommendations such as premium offers, loyalty efforts, and incentive outreach.',
    boundary: 'An academic capstone. There is no claim of campaign deployment or measured commercial lift.',
    artifactTitle: 'Model → segment → action.', artifactCaption: 'Business interpretation is the last required step of the analysis.',
    artifact: [
      { label: 'Feature set', detail: 'Demographic, behavioral, spend, response' },
      { label: 'Model comparison', detail: 'PCA and several clustering methods' },
      { label: 'Segment reading', detail: 'Distinct patterns and limitations' },
      { label: 'Recommendation', detail: 'Offer and outreach matched to behavior' },
    ], tools: ['Python', 'PCA', 'Clustering', 'Business interpretation'],
  },
  {
    slug: 'cloud-engineer-site', number: '10', title: 'Cloud Engineer publishing platform',
    headline: 'A technical site should be operated, not just launched.', lane: 'Technical depth', context: 'Independent build',
    summary: 'Built a structured documentation platform with local builds, CI/CD, Firebase Hosting, and a custom domain.',
    question: 'What publishing system can grow with technical material and remain maintainable?',
    decision: 'Use a documentation-first stack and automated deployment instead of a custom application with needless operational weight.',
    situation: 'A growing body of technical material needed coherent paths and repeatable publication beyond disconnected notes.',
    approach: 'Used MkDocs for structure, GitHub Actions for deployment, Firebase Hosting for delivery, and a custom domain for the public property.',
    validation: 'The project emphasized reliable local builds and a deployment path that could publish changes consistently.',
    result: 'Created a public technical publishing asset and a process for maintaining it over time.',
    boundary: 'The source does not state audience size or content impact.',
    artifactTitle: 'Publishing is a delivery pipeline.', artifactCaption: 'A small stack was chosen to make repeatable operation straightforward.',
    artifact: [
      { label: 'Source', detail: 'Structured technical writing' },
      { label: 'Local build', detail: 'MkDocs renders and checks pages' },
      { label: 'CI/CD', detail: 'GitHub Actions runs deployment' },
      { label: 'Public asset', detail: 'Firebase Hosting and custom domain' },
    ], tools: ['MkDocs', 'GitHub Actions', 'Firebase Hosting', 'Google Cloud'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const supportingProjects = projects.filter((project) => !project.featured);
