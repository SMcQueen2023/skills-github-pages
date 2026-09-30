export type Project = {
  slug: string;
  number: string;
  title: string;
  headline: string;
  lane: 'Trusted reporting' | 'Controlled automation' | 'Operating visibility' | 'Technical depth';
  context: string;
  summary: string;
  role: string;
  status: string;
  contribution: string;
  collaboration: string;
  delivery: string[];
  technicalDetails: { label: string; detail: string }[];
  audiences: ('leadership' | 'delivery' | 'engineering')[];
  evidenceLinks?: { label: string; url: string; detail: string }[];
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

/** Roles describe responsibility on the work, not employment titles.
 * Process illustrations explain documented work; they are not historical records.
 */
export const workProjects: Project[] = [
  {
    slug: 'sas-to-azure-migration', number: '01', title: 'SAS-to-Azure reporting migration',
    headline: 'Give report owners a shared migration plan.', lane: 'Trusted reporting',
    context: 'Freight / enterprise reporting', featured: true,
    summary: 'Led cross-team planning for a 170-report SAS estate, secured VP sponsorship, and helped colleagues develop Power BI reports through live Office Hours.',
    role: 'Project lead for a cross-team group of about ten',
    status: 'Planning and initial proofs of concept completed during my involvement',
    contribution: 'I built the business case, brought report owners and IT into a shared technical direction, and coached teammates through Power BI development.',
    collaboration: 'I led the cross-team group; report owners contributed to the inventory and early migrations, and enterprise IT participated in architecture decisions. In Power BI Office Hours, I walked through report construction and worked through teammates’ questions in real time.',
    delivery: [
      'Created the business case and secured VP sponsorship for the migration effort.',
      'Led cross-team planning around a completed inventory of 170 SAS reports.',
      'Worked with enterprise IT on architecture and technical choices; the team migrated initial reports as proofs of concept.',
      'Held Power BI Office Hours to help colleagues work through report development questions.',
    ],
    technicalDetails: [
      { label: 'Scope before scale', detail: 'The report inventory established the size of the SAS estate before migration work expanded.' },
      { label: 'Test the target', detail: 'Initial reports were migrated as proofs of concept to inform the Azure and Power BI approach.' },
      { label: 'Shared development', detail: 'Live Power BI working sessions made report construction and troubleshooting available to teammates.' },
    ],
    audiences: ['leadership', 'delivery'],
    question: 'How could teams move a large SAS reporting estate with a shared technical direction and the capability to carry it out?',
    decision: 'Establish scope and sponsorship, test the target with initial reports, and help report owners develop the skills the migration required.',
    situation: 'Freight reporting included 170 SAS reports across teams. Moving the estate toward Azure and Power BI required agreement on scope, enterprise architecture, and how report owners would contribute.',
    approach: 'I created the business case and became project lead. Our cross-team group completed the report inventory, worked with IT on architecture and technical choices, and migrated some reports as proofs of concept. Alongside planning, I held Power BI Office Hours with live development and troubleshooting.',
    validation: 'The completed inventory established migration scope. Initial proof-of-concept reports and technical review with IT informed the approach. They established a starting point for migration, not evidence that the whole estate had moved.',
    result: 'The effort gained VP sponsorship, a complete 170-report inventory, cross-team technical direction, and initial Power BI proofs of concept.',
    boundary: 'I left before the full migration was underway. The 170 figure describes the inventory, not completed migrations.',
    artifactTitle: 'From business case to shared delivery.',
    artifactCaption: 'This reconstruction connects sponsorship, scope, technical decisions, and colleague enablement. It explains the preparation for migration; it is not a historical delivery plan.',
    artifact: [
      { label: 'Sponsorship', detail: 'Business case accepted by the VP' },
      { label: 'Shared scope', detail: '170 reports inventoried across teams' },
      { label: 'Technical direction', detail: 'Architecture work with IT and early report migrations' },
      { label: 'Colleague enablement', detail: 'Power BI Office Hours with live problem solving' },
    ],
    tools: ['SAS', 'Azure', 'Power BI', 'Cross-team planning'], signal: '170 reports inventoried',
  },
  {
    slug: 'reporting-modernization', number: '02', title: 'SAP BusinessObjects migration assessment',
    headline: 'Use the proof of concept to challenge the plan.', lane: 'Trusted reporting',
    context: 'Accounting / enterprise reporting', featured: true,
    summary: 'Led an Accounting migration assessment that showed why Power BI alone could not support most of a much larger BusinessObjects reporting estate.',
    role: 'Project lead and team Scrum Master; later Accounting business lead',
    status: 'Recommendation accepted; broader development moved to enterprise IT',
    contribution: 'I repaired and migrated proof-of-concept reports, assembled platform and dependency evidence, and recommended changing the migration approach.',
    collaboration: 'I led the assessment and served as team Scrum Master. The VP accepted my recommendation; enterprise IT took on development of the broader solution, and I became the Accounting business lead.',
    delivery: [
      'Repaired broken Power BI proof-of-concept reports and migrated a handful of BusinessObjects reports.',
      'Investigated data volume, semantic complexity, and upstream dependencies across the wider estate.',
      'Assembled query plans and Power BI Service stress-test evidence for the platform decision.',
      'Presented the recommendation and continued as Accounting business lead after enterprise IT took on development.',
    ],
    technicalDetails: [
      { label: 'Semantic dependency', detail: 'Much of the reporting logic lived in BusinessObjects universes, so copying individual report screens would not resolve the wider migration requirements.' },
      { label: 'Platform constraints', detail: 'EXPLAIN plans, Power BI Service stress tests, data size, and upstream dependencies informed the assessment.' },
      { label: 'Proof-of-concept scope', detail: 'A handful of reports demonstrated the initial path; hundreds of reports formed the estate being assessed.' },
    ],
    audiences: ['leadership', 'delivery', 'engineering'],
    question: 'Could Power BI carry hundreds of BusinessObjects reports as a standalone migration target?',
    decision: 'Test Power BI against representative reports and their underlying constraints before extending the migration approach across the estate.',
    situation: 'I joined a project to move SAP BusinessObjects reporting to Power BI. After fixing broken proof-of-concept reports, I became project lead and team Scrum Master. Much of the reporting logic lived in BusinessObjects universes. The estate contained hundreds of reports, while only a handful were migrated for the proof of concept.',
    approach: 'I investigated the data size, semantic complexity, and upstream dependencies behind the reports. I brought together EXPLAIN plans, Power BI Service stress-test results, and the proof-of-concept work to show where a Power BI-only migration would fall short.',
    validation: 'The limited report migrations tested what could move. Query plans, service tests, and dependency analysis supplied evidence of constraints affecting the wider estate. That evidence supported the recommendation to change course.',
    result: 'The VP accepted my recommendation to change course. Enterprise IT took on the broader solution, and I became the Accounting business lead.',
    boundary: 'This result was an accepted platform recommendation and limited proof of concept. It was not a completed migration of hundreds of reports.',
    artifactTitle: 'The evidence behind the change in direction.',
    artifactCaption: 'The reconstructed decision sequence shows how report tests and platform constraints informed an accepted recommendation. It does not reproduce the original query plans or test results.',
    artifact: [
      { label: 'Repair and migrate', detail: 'Fix the prototypes and move a handful of reports' },
      { label: 'Inspect the workload', detail: 'Query plans and Power BI Service stress tests' },
      { label: 'Explain the constraints', detail: 'Data size, semantic logic, and upstream dependencies' },
      { label: 'Change the approach', detail: 'VP-backed decision and enterprise IT development' },
    ],
    tools: ['SAP BusinessObjects', 'Power BI', 'EXPLAIN plans', 'Migration assessment'], signal: 'Accepted change in platform direction',
  },
  {
    slug: 'reconciliation-automation', number: '03', title: '401(k) reconciliation automation',
    headline: 'Replace monthly hand calculations with a repeatable workflow.', lane: 'Controlled automation',
    context: 'Enterprise / contribution reconciliation', featured: true,
    summary: 'Designed automation to aggregate and reconcile monthly 401(k) contribution totals across 30 source files.',
    role: 'Workflow designer and analytics developer',
    status: 'Monthly aggregation and reconciliation automated',
    contribution: 'I built the file-to-reconciliation flow using Azure storage, Synapse, SQL, and Python, replacing repeated manual calculations.',
    collaboration: 'My responsibility was the analytical workflow: translating recurring reconciliation work into aggregation, comparison, and reporting.',
    delivery: [
      'Translated the recurring manual calculation into a workflow covering 30 monthly source files.',
      'Built aggregation and comparison logic in the Azure analytics environment.',
      'Used Python to support result validation and surfaced balances or differences in the reconciliation report.',
    ],
    technicalDetails: [
      { label: 'File intake', detail: 'Monthly contribution files landed in Azure Blob Storage before transformation.' },
      { label: 'Aggregation and comparison', detail: 'Synapse and SQL transformed the inputs, calculated contribution totals, and compared those totals for reconciliation.' },
      { label: 'Operational output', detail: 'The report showed whether totals balanced and exposed differences when present. That is workflow behavior, separate from establishing calculation accuracy.' },
    ],
    audiences: ['leadership', 'engineering'],
    question: 'How could thirty monthly source files be totaled and reconciled without repeating the arithmetic by hand?',
    decision: 'Automate aggregation and comparison in one recurring workflow, then make balanced totals and differences visible in the report.',
    situation: 'Each month, a person calculated 401(k) contribution totals from 30 source files and reconciled them. The repeated arithmetic made the process dependent on manual work.',
    approach: 'I designed the workflow around files landing in Azure Blob Storage. Synapse and SQL handled transformation, aggregation, and comparison; Python supported validation of the result.',
    validation: 'Python supported validation of the aggregation and reconciliation result. The original validation cases and acceptance criteria are not included in this public account; the balance and difference states in the diagram describe system behavior.',
    result: 'Monthly contribution aggregation and reconciliation ran automatically across 30 source files, replacing manual calculations.',
    boundary: 'This case covers the monthly contribution calculation and reconciliation workflow across 30 source files.',
    artifactTitle: 'Follow the totals from files to reconciliation.',
    artifactCaption: 'This sanitized reconstruction explains the data flow and report outputs. It contains no retirement records and is not a validation test report.',
    artifact: [
      { label: 'Receive', detail: 'Thirty monthly contribution files enter Blob Storage' },
      { label: 'Aggregate', detail: 'Synapse and SQL calculate contribution totals' },
      { label: 'Compare', detail: 'The workflow reconciles the totals' },
      { label: 'Report', detail: 'Balanced totals or differences are made visible' },
    ],
    tools: ['Azure Synapse', 'Blob Storage', 'SQL', 'Python'], signal: '30 source files each month',
  },
  {
    slug: 'external-analytics-enablement', number: '04', title: 'Ministry analytics enablement',
    headline: 'Make the records trustworthy before presenting the trends.', lane: 'Trusted reporting',
    context: 'External organization / analytics enablement', featured: true,
    summary: 'Turned manually maintained ministry data into corrected reporting inputs, a leadership presentation, and practical guidance for recurring metrics.',
    role: 'Analytics and stakeholder-facing delivery',
    status: 'Analysis and guidance delivered; future capture process recommended',
    contribution: 'I repaired the datasets, checked findings against source records, and connected the analysis to recommendations for metric ownership and data capture.',
    collaboration: 'I prepared the analysis, leadership presentation, validation memo, and meeting guidance for stakeholder alignment. Recommendations gave the organization a practical basis for metric ownership and recurring review.',
    delivery: [
      'Assessed the workbook and identified which records and questions could support reliable analysis.',
      'Built corrected attendance, baptism, and event datasets and documented unresolved source discrepancies.',
      'Created a leadership presentation with a companion validation memo, keeping technical checks available without crowding the findings.',
      'Prepared meeting guidance and recommendations for data capture, metric ownership, and recurring review.',
    ],
    technicalDetails: [
      { label: 'Dates and exclusions', detail: 'A tab labeled 2024 contained later records; text-labeled special services also required explicit review to avoid silently dropping valid events.' },
      { label: 'Source traceability', detail: 'Cleaned attendance rows were cross-referenced with the original workbook, formulas were checked, and event-level discrepancies were investigated.' },
      { label: 'Capture design', detail: 'Recommendations separated dates from notes, made exclusions explicit, and kept Sunday baptisms distinct from event aggregates.' },
    ],
    audiences: ['leadership', 'delivery', 'engineering'],
    question: 'What could leadership learn from the existing records, and what would make reliable monthly reporting possible?',
    decision: 'Repair and validate the data before presenting trends, preserve unresolved discrepancies, and recommend simpler capture practices before adding technical complexity.',
    situation: 'Leadership wanted to understand attendance, baptism, and event patterns. The manually maintained workbook mixed row types, text dates, and inconsistent year labels. Direct analysis risked excluding valid records or assigning them to the wrong period.',
    approach: 'I rebuilt attendance, baptism, and event datasets, cross-checked them against the workbook, and prepared a leadership presentation. I kept validation detail in a companion memo and recommended a lightweight Google Forms and Sheets approach for future monthly reporting.',
    validation: 'I cross-referenced cleaned data with the source workbook row by row, checked attendance formulas, restored special-service records omitted because their dates were stored as text, and investigated event-level discrepancies. Unresolved source totals remained flagged rather than being forced to reconcile.',
    result: 'Delivered corrected reporting inputs, a leadership presentation, a validation memo, and guidance for data capture and recurring metrics review.',
    boundary: 'The engagement delivered analysis and recommendations. Adoption of the proposed capture process and recurring review is not measured in the available record.',
    artifactTitle: 'Connect the finding to the source check.',
    artifactCaption: 'This reconstruction shows the documented checks and the decisions they supported. The original workbook, notebook, and presentation are not published here.',
    artifact: [
      { label: 'Recording issue', detail: 'Mixed rows, text dates, and inconsistent year labels' },
      { label: 'Repair and trace', detail: 'Corrected datasets checked against source rows' },
      { label: 'Retain uncertainty', detail: 'Unresolved event totals remain explicit' },
      { label: 'Enable recurring use', detail: 'Leadership findings and practical capture guidance' },
    ],
    tools: ['Python', 'Jupyter', 'pandas', 'Source validation', 'Leadership reporting'], signal: 'Source checks linked to leadership findings',
  },
  {
    slug: 'portfolio-governance-platform', number: '05', title: 'Portfolio governance platform',
    headline: 'Connect portfolio status to recorded activity.', lane: 'Operating visibility',
    context: 'Enterprise / portfolio reporting',
    summary: 'Linked SharePoint intake and modeled project activity to Power BI measures for a more consistent portfolio view.',
    role: 'BI and workflow reporting designer',
    status: 'Reporting platform built',
    contribution: 'I connected intake structure, project data modeling, and DAX measures so portfolio reporting had explainable inputs.',
    collaboration: 'The reporting served leadership oversight. My contribution was the BI and workflow reporting design, connecting project records to an explainable portfolio view.',
    delivery: [
      'Structured project intake and operating information in SharePoint.',
      'Modeled project, milestone, timing, and status attributes for reporting.',
      'Built Power BI and DAX measures for portfolio-health views and executive rollups.',
    ],
    technicalDetails: [
      { label: 'Operating inputs', detail: 'SharePoint provided a common intake surface and project information instead of disconnected local trackers.' },
      { label: 'Reporting model', detail: 'Project, milestone, timing, and status attributes were shaped for comparison across work and reporting periods.' },
      { label: 'Semantic measures', detail: 'DAX translated modeled activity into portfolio-health measures. Actual formulas and thresholds are not published.' },
    ],
    audiences: ['leadership', 'engineering'],
    question: 'What observable project activity sits behind a portfolio-health measure?',
    decision: 'Structure the project inputs before calculating portfolio status, with enough consistency for comparison and explanations stakeholders can follow.',
    situation: 'Fragmented trackers and inconsistent status narratives made it difficult to compare initiatives. A useful executive view needed common definitions and structured operating inputs.',
    approach: 'I used SharePoint for intake and operating records, modeled project and time data, and built Power BI and DAX measures for executive rollups. The design connected process structure to the reporting layer.',
    validation: 'The documented design calls for comparing inputs across project types and periods and reviewing calculated health against delivery activity. Retained test results or acceptance records are not available in the public account.',
    result: 'The platform standardized reporting inputs and gave leadership a more consistent view of portfolio activity.',
    boundary: 'This case demonstrates BI and workflow reporting delivery. It does not imply ownership of the underlying project schedules, budgets, or outcomes.',
    artifactTitle: 'What feeds the portfolio view.',
    artifactCaption: 'This conceptual reconstruction identifies the inputs to the reporting model. It shows no actual project score, formula, threshold, or employer record.',
    artifact: [
      { label: 'Intake', detail: 'Consistent records of requested work and ownership' },
      { label: 'Milestones', detail: 'Progress and timing over reporting periods' },
      { label: 'Delivery state', detail: 'Recorded completion and process signals' },
      { label: 'Portfolio view', detail: 'DAX measures over modeled project activity' },
    ],
    tools: ['SharePoint', 'Power BI', 'DAX', 'Dimensional modeling'],
  },
  {
    slug: 'enterprise-data-modeling', number: '06', title: 'Revenue accounting model',
    headline: 'Define what a fact row means before building the report.', lane: 'Technical depth',
    context: 'Enterprise / modeling proof of concept',
    summary: 'Designed proposed fact and dimension structures around business grain for Power BI revenue accounting reporting.',
    role: 'Analytics model designer',
    status: 'Modeling proof of concept',
    contribution: 'I mapped normalized source entities into a proposed star schema with a stated grain and traceable business identity.',
    collaboration: 'My contribution was the proposed model design for Power BI reporting, translating operational entities into a structure intended for analytical use.',
    delivery: [
      'Mapped operational entities into proposed fact and dimension structures.',
      'Defined grain and relationships to support the intended reporting questions.',
      'Considered business keys, surrogate relationships, and attribute history in the design.',
    ],
    technicalDetails: [
      { label: 'Grain', detail: 'The design declared a unit of analysis for each fact rather than allowing report joins to determine row meaning implicitly.' },
      { label: 'Identity', detail: 'Business keys preserved source traceability; surrogate keys supported analytical relationships where appropriate.' },
      { label: 'History', detail: 'The design considered attribute history where changes would affect reporting meaning.' },
    ],
    audiences: ['engineering'],
    question: 'What does one fact row represent, and how should it relate to the dimensions?',
    decision: 'Make grain and business identity explicit before defining analytical relationships and measures.',
    situation: 'The normalized operational source required repeated joins and interpretation before analysts could answer reporting questions. The proof of concept explored a more useful structure for Power BI.',
    approach: 'I mapped source entities into a proposed star schema with a stated grain, fact and dimension tables, and semantic definitions. The design retained business keys for traceability and considered surrogate keys and attribute history where appropriate.',
    validation: 'This was a model design and conceptual validation exercise against the intended reporting questions. The case does not establish a production reconciliation or performance benchmark.',
    result: 'The proof of concept defined a direction for reusable metrics and Power BI relationships.',
    boundary: 'The documented result is a proposed model, not a deployed semantic layer or a measured reporting improvement.',
    artifactTitle: 'Preserve meaning through the model.',
    artifactCaption: 'This reconstruction explains the modeling choices. It is not the original schema and does not disclose employer entities or keys.',
    artifact: [
      { label: 'Source entities', detail: 'Normalized records and business keys' },
      { label: 'Business grain', detail: 'A declared unit of analysis for each fact' },
      { label: 'Fact and dimensions', detail: 'Analytical relationships with business identity retained' },
      { label: 'Reporting use', detail: 'A proposed structure for Power BI measures and filtering' },
    ],
    tools: ['Star schema', 'Power BI', 'Business grain', 'Surrogate keys'],
  },
];

export const featuredProjects = workProjects.filter((project) => project.featured);
export const supportingProjects = workProjects.filter((project) => !project.featured);
