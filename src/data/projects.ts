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

export const workProjects: Project[] = [
  {
    slug: 'reporting-modernization', number: '01', title: 'SAP BusinessObjects migration assessment',
    headline: 'The proof of concept changed the plan.', lane: 'Trusted reporting', context: 'Accounting / enterprise reporting', featured: true,
    summary: 'Led the Accounting migration assessment after repairing Power BI proof-of-concept reports and testing whether the platform could support a much larger SAP BusinessObjects estate.',
    question: 'Could Power BI carry hundreds of BusinessObjects reports as a standalone target?',
    decision: 'Test the target against representative reports and the constraints behind them before committing the whole estate to a Power BI migration.',
    situation: 'I joined a project to move SAP BusinessObjects reporting to Power BI. After fixing broken proof-of-concept reports, I became project lead and team Scrum Master. Much of the reporting logic lived in BusinessObjects universes rather than in individual reports. The estate contained hundreds of reports; only a handful were migrated for the proof of concept.',
    approach: 'I migrated a handful of reports, investigated the data size, semantic complexity, and upstream dependencies affecting the wider portfolio, and assembled EXPLAIN plans, Power BI Service stress-test results, and other measures for the decision.',
    validation: 'The proof-of-concept migrations demonstrated what could be moved. Query plans, service tests, and dependency analysis showed why most of the estate could not move to Power BI alone.',
    result: 'The VP accepted my recommendation to change course. Enterprise IT took on development of the broader solution, and I became the Accounting business lead.',
    boundary: 'This was an assessment and limited proof of concept, not a completed migration of hundreds of reports. The diagram reconstructs the decision sequence without employer data.',
    artifactTitle: 'Test the destination before committing the estate.',
    artifactCaption: 'Proof-of-concept reports and platform evidence informed the migration decision.',
    artifact: [
      { label: '01 / Repair the proof of concept', detail: 'Fix broken reports and migrate a handful to Power BI' },
      { label: '02 / Test the target', detail: 'Stress the Power BI Service and inspect query EXPLAIN plans' },
      { label: '03 / Map the constraints', detail: 'Data volume, semantic complexity, and upstream dependencies' },
      { label: '04 / Change course', detail: 'VP-backed recommendation; enterprise IT development with an Accounting business lead' },
    ],
    tools: ['SAP BusinessObjects', 'Power BI', 'EXPLAIN plans', 'Migration assessment'], signal: 'Hundreds of reports in scope',
  },
  {
    slug: 'reconciliation-automation', number: '02', title: '401(k) reconciliation automation',
    headline: 'Thirty files. One automated reconciliation.', lane: 'Controlled automation', context: 'Organizational delivery', featured: true,
    summary: 'Automated monthly 401(k) contribution aggregation and reconciliation across 30 source files, replacing manual calculations.',
    question: 'Can thirty monthly source files be totaled and reconciled without a person doing the math?',
    decision: 'Aggregate the source files and compare contribution totals in a repeatable workflow. Use the report to show whether the totals balance and expose differences when they do not.',
    situation: 'Each month, a person had to calculate 401(k) contribution totals from 30 source files and reconcile them. The repeated arithmetic was the work to remove.',
    approach: 'Files landed in Azure Blob Storage. Synapse and SQL handled transformation, aggregation, and comparison; Python supported validation of the result.',
    validation: 'The reconciliation report showed when aggregated contribution totals balanced and surfaced differences when they did not.',
    result: 'The monthly contribution math and reconciliation ran automatically across 30 files. Related analytical automation work saved approximately 30 hours per month; the portion from this workflow is not isolated.',
    boundary: 'The time saving covers analytical automation work and is not an isolated measure of this pipeline. The diagram is a sanitized reconstruction, not actual retirement records.',
    artifactTitle: 'Thirty inputs. One reconciliation.',
    artifactCaption: 'Monthly contribution totals are aggregated and compared automatically.',
    artifact: [
      { label: 'Received', detail: 'Thirty monthly contribution files enter the workflow' },
      { label: 'Aggregated', detail: 'Contribution totals are calculated across the files' },
      { label: 'Reconciled', detail: 'The totals are compared automatically' },
      { label: 'Reported', detail: 'A balanced result is shown; differences surface when present' },
    ],
    tools: ['Azure Synapse', 'Blob Storage', 'SQL', 'Python'], signal: '30 source files each month',
  },
  {
    slug: 'portfolio-governance-platform', number: '03', title: 'Portfolio governance platform',
    headline: 'Project status needs a source.', lane: 'Operating visibility', context: 'Organizational delivery', featured: true,
    summary: 'Linked SharePoint intake and project activity to Power BI measures for portfolio reporting.',
    question: 'What activity sits behind a project health measure?',
    decision: 'Model project, milestone, timing, and status events before calculating the portfolio view. Make each input explainable to the people using the report.',
    situation: 'Local trackers and inconsistent status narratives made it difficult to compare initiatives. The underlying activity and definitions needed a common structure.',
    approach: 'Used SharePoint for intake and operating records, modeled project and time data for reporting, and built Power BI and DAX measures for executive rollups.',
    validation: 'Check whether inputs are comparable across project types and reporting periods. Review calculated health against observed delivery activity.',
    result: 'The platform standardized workflow expectations and gave leadership a more consistent portfolio view. The public account gives no adoption rate or measured lift.',
    boundary: 'The signal anatomy below is a conceptual reconstruction. It does not disclose a real project score, threshold, or employer data.',
    artifactTitle: 'What feeds the health measure.',
    artifactCaption: 'Project activity is modeled before it appears as an executive status.',
    artifact: [
      { label: 'Intake', detail: 'A consistent record of requested work and ownership' },
      { label: 'Milestone movement', detail: 'Progress and timing tracked over reporting periods' },
      { label: 'Delivery state', detail: 'Observable completion and process signals' },
      { label: 'Health measure', detail: 'DAX turns modeled signals into an explainable view' },
    ],
    tools: ['SharePoint', 'Power BI', 'DAX', 'Dimensional modeling'],
  },
  {
    slug: 'sas-to-azure-migration', number: '04', title: 'SAS-to-Azure reporting migration',
    headline: 'A 170-report migration began with a business case.', lane: 'Trusted reporting', context: 'Freight / enterprise reporting',
    summary: 'Built the business case and led cross-team planning to move a 170-report SAS estate toward Azure and Power BI.',
    question: 'How do teams move a large SAS reporting estate while sharing a technical direction and delivery method?',
    decision: 'Start with an inventory and proof-of-concept reports, involve enterprise IT in architecture decisions, and equip report owners to solve migration problems together.',
    situation: 'Freight reporting included 170 SAS reports across teams. I created the business case, secured VP sponsorship, and became project lead for a roughly ten-person cross-team group.',
    approach: 'The team completed the SAS report inventory, supported architecture and technical choices with IT, and migrated some reports as proofs of concept. I held Power BI office hours to walk through report construction and work through teammates’ questions in real time.',
    validation: 'Inventory established the migration scope; proofs of concept and shared technical review informed the target approach. The full estate had not been migrated when I left.',
    result: 'The project had VP sponsorship, a complete inventory, cross-team participation, technical direction with IT, and initial proof-of-concept migrations. I left before the full migration was underway.',
    boundary: 'The 170 figure is the number of reports inventoried for migration, not completed migrations. No later completion or adoption is claimed.',
    artifactTitle: 'Organize the migration before scaling it.', artifactCaption: 'Business case, inventory, architecture work, and proof-of-concept reports formed the delivery base.',
    artifact: [
      { label: 'Business case', detail: 'VP sponsorship for the migration effort' },
      { label: 'Inventory', detail: '170 SAS reports identified across teams' },
      { label: 'Technical direction', detail: 'Architecture decisions with enterprise IT and Power BI office hours' },
      { label: 'Proof of concept', detail: 'Initial reports migrated; full migration still ahead' },
    ],
    tools: ['SAS', 'Azure', 'Power BI', 'Cross-team delivery'], signal: '170 reports inventoried',
  },
  {
    slug: 'enterprise-data-modeling', number: '05', title: 'Revenue accounting model',
    headline: 'Every row needs a meaning.', lane: 'Trusted reporting', context: 'Enterprise proof of concept',
    summary: 'Designed fact and dimension structures around a declared business grain for Power BI reporting.',
    question: 'What does one fact row represent, and how should it relate to the dimensions?',
    decision: 'Keep business keys for traceability and use surrogate keys for analytical relationships where appropriate. Track attribute history only when the change affects reporting meaning.',
    situation: 'The normalized operational source required repeated joins and interpretation before analysts could answer reporting questions.',
    approach: 'Mapped source entities into a proposed star schema with a stated grain, fact and dimension tables, and reusable semantic definitions.',
    validation: 'Test the proposed grain and relationships against the questions Power BI users need to answer.',
    result: 'The proof of concept defined a direction for reusable metrics and BI relationships. It was a model design exercise, not a production rollout.',
    boundary: 'The source describes model design and conceptual validation, not a deployed semantic layer or quantified reporting gain.',
    artifactTitle: 'Choose relationships that preserve business meaning.', artifactCaption: 'Preserve business identity while choosing relationships for analysis.',
    artifact: [
      { label: 'Operational entities', detail: 'Normalized source records and business keys' },
      { label: 'Business process grain', detail: 'One declared unit of analysis for each fact' },
      { label: 'Fact + dimensions', detail: 'Surrogate relationships with business identity retained' },
      { label: 'Semantic use', detail: 'Power BI measures and consistent filtering' },
    ], tools: ['Star schema', 'Power BI', 'Surrogate keys', 'Semantic modeling'],
  },
  {
    slug: 'external-analytics-enablement', number: '06', title: 'Ministry analytics enablement',
    headline: 'Turn ministry records into a leadership view.', lane: 'Trusted reporting', context: 'External organization engagement',
    summary: 'Helped an external organization turn attendance, baptism, and event records into checked datasets, a leadership presentation, and a practical plan for recurring metrics.',
    question: 'What could leadership learn from existing ministry data, and what would need to change for reliable monthly reporting?',
    decision: 'Validate and repair the workbook before presenting trends. Keep unresolved source totals visible and recommend simpler data capture for future reporting.',
    situation: 'Leadership wanted to understand attendance, baptism, and event patterns. The manually maintained workbook had mixed row types, text dates, and inconsistent year labels, making direct analysis unreliable.',
    approach: 'Rebuilt attendance, baptism, and event datasets; cross-checked records against the workbook; prepared a leadership presentation; and proposed a lightweight capture process for recurring analytics.',
    validation: 'Row-by-row review, formula checks, restored special-service records, and event-level discrepancy checks established which findings were supportable. Some source totals remained unresolved.',
    result: 'Delivered corrected reporting inputs, a leadership presentation on the trends, and guidance for future data capture and monthly metrics review.',
    boundary: 'This was an external engagement. Public materials do not establish whether it was a paid client relationship or quantify adoption.',
    artifactTitle: 'From operational workbook to monthly insight.', artifactCaption: 'Validated records support the leadership conversation and future data capture.',
    artifact: [
      { label: 'Workbook risk', detail: 'Mixed rows, text dates, inconsistent labels' },
      { label: 'Controlled dataset', detail: 'Rebuilt events and attendance records' },
      { label: 'Source checks', detail: 'Row review and unresolved totals documented' },
      { label: 'Leadership view', detail: 'Attendance, baptism, and event patterns with clear limits' },
    ], tools: ['Python', 'Jupyter', 'Data validation', 'Executive reporting'],
  },
];

export const featuredProjects = workProjects.filter((project) => project.featured);
export const supportingProjects = workProjects.filter((project) => !project.featured);
