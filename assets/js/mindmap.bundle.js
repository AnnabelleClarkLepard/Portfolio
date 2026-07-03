"use strict";

/* ---- components/data.js ---- */
(function () {
window.PROFILE = {
  name: "Annabelle Clark-Lepard",
  role: "Product Design Leader",
  location: "Toronto, Canada",
  email: "annabelle.clarklepard@gmail.com",
  linkedin: "www.linkedin.com/in/annabelle-clark-lepard",
  linkedinUrl: "https://www.linkedin.com/in/annabelle-clark-lepard",
  headline: "Designing clarity into complex systems.",
  subhead: "I lead product design for financial, operational, and accessible platforms at scale \u2014 turning audits, data, and constraints into experiences teams trust.",
  specialties: [
    "B2B financial & operational systems",
    "Payments, registration & data-heavy workflows",
    "Design & process AI transformation"
  ]
};
window.METRICS = [
  { n: "2M+", l: "Users guided through high-traffic events" },
  { n: "4 days", l: "Faster merchant statements, every month" },
  { n: "WCAG AA", l: "Accessible design system, by default" }
];
window.EXPERTISE = [
  {
    icon: "landmark",
    h: "Financial Systems & Payments",
    p: "Merchant statements, reconciliation, and billing flows where accuracy, traceability, and trust are non-negotiable."
  },
  {
    icon: "gauge",
    h: "Performance & High-Stakes UX",
    p: "Queueing, registration, and security-recovery flows that stay calm and usable under load, stress, and competitive pressure."
  },
  {
    icon: "megaphone",
    h: "Client Communication & Workflow Tooling",
    p: "Staff-facing tools for hiring and client communication \u2014 built for real volume, fast scanning, and legible status."
  },
  {
    icon: "sparkles",
    h: "AI Transformation Leadership",
    p: "Leading product teams from AI-skeptical to AI-fluent \u2014 embedding AI into delivery workflows responsibly, not just as novelty."
  },
  {
    icon: "search",
    h: "Research, Analysis & Documentation",
    p: "Turning noisy backlogs and scattered knowledge into synthesized themes, audits, and documentation teams actually use."
  },
  {
    icon: "layout-grid",
    h: "Accessible Design Systems",
    p: "Single sources of truth that bake WCAG AA into defaults \u2014 reducing friction, regressions, and rework across product and engineering."
  }
];
window.SKILLS = [
  { h: "Design", items: ["Product Design", "Design Systems", "Interaction Design", "Accessibility (WCAG AA)", "Prototyping", "Mobile-first UI"] },
  { h: "Research & Process", items: ["User Research", "Usability Testing", "Journey & Flow Mapping", "Edge-case Validation", "Project Management"] },
  { h: "Technical", items: ["Figma", "FigJam", "SQL Querying", "API Integration", "HTML & CSS"] }
];
window.PROJECTS = [
  {
    id: "design-system",
    tag: "Design Systems",
    title: "Accessible Design System as a Source of Truth",
    blurb: "A WCAG AA-compliant system that became the shared language between design, product, and engineering.",
    discipline: "Design systems that reduce friction, ensure consistency, and make it easier for teams to ship accessible, high-quality UX.",
    role: "Product Designer \xB7 Project Manager",
    context: "Figma \xB7 Mobile-first \xB7 B2B2C e-commerce",
    constraints: ["Legacy functionality", "WCAG AA audit requirements", "Non-technical product team", "Lack of design resources"],
    accent: "var(--color-teal)",
    image: "assets/proj-design-system.png",
    imageCaption: "Button system \u2014 primary, secondary, and contrast variants with documented states and accessibility rationale (WCAG AA).",
    solution: "A comprehensive, WCAG AA-compliant design system serving as a shared source of truth across product, design, and development \u2014 covering every reusable component in the codebase, not just buttons, with naming and semantics matched to the code so designers, PMs, and engineers were always referencing the same thing the same way.",
    solutionPoints: [
      "Every reusable component in the codebase represented in the system \u2014 inputs, cards, alerts, navigation, and more, not just buttons \u2014 each with documented states and accessibility rationale.",
      'Component naming and semantics matched directly to the codebase, so a "primary button" or "alert banner" in Figma was unambiguously the same thing a developer saw in code.',
      "Primary button variants documented with when, why, and the key accessibility decisions behind each.",
      "Foundational colours connected to variables, with guidance on when and why each colour applies."
    ],
    problems: [
      { who: "The User", sub: "E-commerce portal customers", t: "Inconsistent UI patterns created fragmented, confusing experiences." },
      { who: "The Developers", sub: "", t: "Lost time rebuilding or adapting components for every new feature." },
      { who: "The Product Team", sub: "", t: "Struggled to communicate with developers without a reliable reference point." },
      { who: "The Business", sub: "", t: "Growing WCAG requirements introduced real risk of non-compliance." }
    ],
    success: [
      "A single source of truth for design, product, and engineering.",
      "Accessible components by default \u2014 WCAG AA compliant.",
      "Faster, smoother feature delivery with fewer UX regressions.",
      "Clear communication across product and development."
    ],
    process: [
      "Audited the existing UI for inconsistencies, accessibility gaps, and legacy patterns \u2014 mapping end-to-end flows to see how components behaved in real scenarios.",
      "Defined system foundations: core components, states, patterns, typography, colour, spacing, and interaction principles built for scale and accessibility.",
      "Built the system in Figma with styles, variables, and components \u2014 every reusable component named and structured to match its counterpart in code \u2014 so consistency and accessibility were baked into defaults, not applied retroactively.",
      "Collaborated with PMs and developers to validate feasibility, align on needs, and drive adoption across teams."
    ],
    impact: [
      "Increased PM confidence communicating priorities through a shared, reliable source of truth.",
      "Improved developer clarity with reusable components whose names and semantics matched the code, cutting translation loss between design and engineering.",
      "Reduced WCAG AA compliance risk by embedding accessibility rather than reacting to it.",
      "Freed up team time to focus on product strategy under one aligned vision."
    ],
    challenge: "Aligning developers and non-technical product managers on priorities, tradeoffs, and feasibility while establishing a shared system.",
    takeaway: "Design systems align teams on more than pixels. Treated as a collaborative initiative, they create shared language, reduce friction between roles, and make accessibility and consistency the foundation a team can rely on."
  },
  {
    id: "merchant-statements",
    tag: "Financial Systems",
    title: "Integrated Payment Processing Merchant Statements",
    blurb: "An automated, transparent merchant statement experience connecting UI, SQL data, and APIs into one coherent system.",
    discipline: "Easy-to-use financial tools that balance accuracy, trust, and the realities of audits, reconciliation, and constraints.",
    role: "Product Designer \xB7 Product Manager \xB7 Project Manager",
    context: "Figma \xB7 SQL Financial Querying \xB7 API Integration \xB7 B2B",
    constraints: ["Legacy financial workflows", "Third-party integrations", "Data accuracy & audit requirements", "Non-technical users"],
    accent: "var(--color-sage)",
    image: "assets/proj-merchant.png",
    imageCaption: "Merchant statement portal \u2014 dated statements, fee history, and recipient management, opening the generated statement document.",
    solution: "A fully integrated, automated merchant statement experience accessible from the user portal \u2014 connecting UI design, SQL-driven data generation, and API responses into a single, coherent system.",
    solutionPoints: [
      "Built into the portal where users already work \u2014 letting them access dated statements and edit account settings without manual intervention."
    ],
    problems: [
      { who: "The User", sub: "Merchants", t: "Limited visibility into how statement totals were calculated reduced trust and usability." },
      { who: "The Developers", sub: "", t: "Manual processes and unclear data connections increased errors and slowed troubleshooting." },
      { who: "The Business", sub: "", t: "Manual invoicing introduced accuracy risk, delayed revenue communication, and operational overhead." }
    ],
    success: [
      "Clear, trustworthy merchant statements that explain financial outcomes.",
      "A shared data model aligning UI, APIs, and reconciliation logic.",
      "Automated statement generation with minimal manual intervention."
    ],
    process: [
      "Collaborated with payment operations to map user expectations, pain points, and typical billing and reconciliation flows.",
      "Partnered with third-party and internal engineers to align API responses with clearly structured, understandable financial data.",
      "Designed the merchant-facing UI for accessing and understanding statements \u2014 focused on clarity, hierarchy, and trust.",
      "Wrote and validated SQL queries generating statement data, ensuring accuracy, traceability, and reconciliation support.",
      "Tested statement data against edge cases to validate accuracy under varied scenarios."
    ],
    impact: [
      "Improved user trust through clearer, more transparent financial statements.",
      "Reduced troubleshooting ambiguity by aligning APIs directly to reconciliation needs.",
      "Eliminated manual errors through accurate, SQL-driven statement generation.",
      "Accelerated statement delivery by 4 days each month for faster reconciliation."
    ],
    challenge: "Bridging UI/UX design, data logic, and API constraints while keeping financial data accurate, explainable, and trustworthy for non-technical users.",
    takeaway: "Designing financial products requires ownership beyond the interface. When designers engage with data and system logic, experiences become clearer, more reliable, and more valuable to users."
  },
  {
    id: "queueing-system",
    tag: "Performance & Security",
    title: "Integrated High-Volume Queueing System",
    blurb: "A calm, predictable waiting-room experience that carried 2M+ users through high-stakes, high-traffic events.",
    discipline: "Clear, resilient experiences designed to remain usable during high traffic, system strain, and user stress.",
    role: "Product Designer \xB7 Operations Coordinator",
    context: "Figma \xB7 FigJam \xB7 JavaScript & CSS",
    constraints: ["High traffic volumes", "Users under stress", "Non-technical stakeholders", "Server scaling cost limits"],
    accent: "var(--color-sky)",
    image: "assets/proj-queueing.png",
    imageCaption: "Virtual waiting-room flow \u2014 decision logic across scheduled and global high-volume events, paired with live throughput monitoring.",
    solution: "An integrated external queueing system that managed high-volume traffic with a predictable, controlled flow \u2014 easing platform strain. The waiting room guided users through their place in line, expected wait times, and live updates during high-stakes, competitive transactions.",
    solutionPoints: [
      "Non-technical flow guide and queue-monitoring dashboard used to manage high-traffic events and keep system load controlled."
    ],
    problems: [
      { who: "The User", sub: "Registrants on a public portal", t: "Confusion and anxiety during high-traffic events led to frustration and abandoned transactions." },
      { who: "The Team", sub: "Developers & operations", t: "Errors and failures from high throughput required constant DevOps and operations monitoring." },
      { who: "The Business", sub: "", t: "Scaling quickly for unpredictable spikes was costly; uncontrolled events risked cost and user trust." }
    ],
    success: [
      "Users understand their place in the queue and expected wait times.",
      "A smooth, predictable experience for users and internal teams during peak traffic.",
      "Reduced frustration and improved trust during high-stakes events."
    ],
    process: [
      "Researched user behaviour during high-stress, competitive transactions to build a queueing flow that fostered trust and reduced stress.",
      "Partnered with operations to understand throughput and the pressure events placed on DevOps and support.",
      "Designed the waiting-room UI in Figma and mapped flows in FigJam to align internal teams on queue mechanics.",
      "Built the interface in JavaScript and CSS \u2014 clearly showing queue position, wait times, and live updates.",
      "Tested real scenarios for edge cases, keeping the experience predictable for users and manageable for teams."
    ],
    impact: [
      "Over 2 million end-users successfully navigated high-traffic events through the queueing system.",
      "Confident, calm users thanks to clear expectations and visible progress.",
      "Reduced errors and failures, with documentation easing strain on DevOps and support.",
      "Controlled flow enabled methodical scaling \u2014 reducing cost and building trust."
    ],
    challenge: "Balancing user needs under stress with operational strain \u2014 ensuring teams could support the system, clients, and users effectively.",
    takeaway: "Performance is a core part of UX. Thoughtful design guides users confidently through complex, competitive transactions instead of leaving them in the dark \u2014 turning stressful moments into ones that feel clear, reliable, and trustworthy."
  },
  {
    id: "fundraising-payments",
    thumbIcon: "hand-coins",
    tag: "Financial Systems",
    title: "Fundraising & Donations Payment Experience",
    blurb: "A full-lifecycle redesign of viewing, creating, editing, and refunding donations \u2014 built for trust and reversibility.",
    discipline: "High-stakes financial workflows made clear, trustworthy, and error-resistant \u2014 making donating and fundraising a breeze.",
    role: "Product Designer",
    context: "Figma \xB7 Payments \xB7 B2B2C",
    constraints: ["Compliance & receipting weight", "Recurring vs. one-time logic", "Staff under time pressure", "Legacy transaction states"],
    accent: "var(--color-sage)",
    image: "assets/proj-fundraising-payments.jpeg",
    imageCaption: "Edit a Donation modal \u2014 payment method, fund, campaign, and dedication details in one consistent, auditable structure.",
    solution: "A redesign of the full donation lifecycle \u2014 viewing, creating, editing, and removing gifts \u2014 with clearer action labels, a consistent modal structure, and the right information (amount, donor intent, transaction state) surfaced at the right moment.",
    solutionPoints: [
      "Refund editing and status indicators reworked so refund workflows are auditable and reliable under time pressure.",
      "Distinct status patterns separate one-time from recurring gifts, resolving downstream reporting and receipting confusion.",
      "Declined-payment messaging balances clarity with restraint \u2014 enough for users to self-correct without eroding trust."
    ],
    problems: [
      { who: "The Donor", sub: "", t: "Confusing transaction states and refund status made it hard to know what had actually happened to a gift." },
      { who: "Staff", sub: "Fundraising & finance", t: "Refunds, recurring gifts, and receipts were error-prone and hard to audit under time pressure." },
      { who: "The Business", sub: "", t: "Receipting carries real compliance weight; unclear flows increased support burden and risk." },
      { who: "Edge-case Donors", sub: "Tribute & dedication giving", t: "Specialized giving flows had feature gaps, leaving some donors as an afterthought." }
    ],
    success: [
      "A coherent donation lifecycle where every action and state is legible.",
      "Auditable, reversible refund and recurring-gift workflows.",
      "Reduced support burden around receipting and declined payments."
    ],
    process: [
      "Mapped the full arc of a donation \u2014 view, create, edit, remove \u2014 to find where state and intent got lost.",
      "Standardized modal structure (header, body, details, footer) and action labels across giving flows.",
      "Designed clearer status indicators for refunds, recurring gifts, and declined payments.",
      "Closed feature gaps for dedication and tribute giving so edge-case donors were first-class.",
      "Contributed to payment-record IA \u2014 cardholder and payment-method presentation, dashboard structure \u2014 for teams managing records at scale."
    ],
    impact: [
      "Clearer financial outcomes and transaction states for donors and staff.",
      "More auditable, reliable refund and receipting workflows.",
      "Fewer support escalations around declined payments and recurring gifts.",
      "Specialized giving flows brought up to the standard of the core experience."
    ],
    challenge: "Designing for trust and reversibility across a lifecycle where accuracy, compliance, and time pressure all compete.",
    takeaway: "In financial UX, confidence comes from reversibility and legible state. When people can always see what happened and undo what went wrong, high-stakes transactions stop feeling risky."
  },
  {
    id: "registration-mobile",
    tag: "Registration",
    title: "Mobile-First Registration Experience",
    blurb: "Meeting registrants on the devices they actually use \u2014 a systemic usability pass across the registration portal.",
    discipline: "Reducing friction in high-volume, time-sensitive registration journeys by designing for how \u2014 and where \u2014 registrants actually show up.",
    role: "Product Designer",
    context: "Figma \xB7 Registration portal \xB7 Mobile-first",
    constraints: ["High-volume, time-sensitive journeys", "Mobile & desktop parity", "legacy flows and user habits", "Scope spanning many screens and flows"],
    accent: "var(--color-sky)",
    image: "assets/proj-registration-portal.jpeg",
    imageCaption: "Registration portal \u2014 step-by-step registration flow with clear progress tracking.",
    solution: "A systemic mobile usability pass across the registration portal \u2014 tightening alerts, spacing, card layouts, and scroll behavior so the experience holds up on the devices registrants actually use, not just desktop.",
    solutionPoints: [
      "Alerts, spacing, and card layouts standardized for consistent, scannable mobile presentation.",
      "Empty-cart scenarios redesigned so users are not left stuck mid-task on smaller screens.",
      "Banner, warning, and scroll behavior refined for continuity across the mobile journey."
    ],
    problems: [
      { who: "The User", sub: "Registrants", t: "Inconsistent alerts, spacing, and card layouts made the portal harder to scan and use on mobile." },
      { who: "The User", sub: "Mid-task", t: "Empty-cart states created dead-ends and anxiety during time-sensitive registration on smaller screens." },
      { who: "The Team", sub: "", t: "Desktop-first patterns didn\u2019t hold up once ported to mobile, creating rework and inconsistency." }
    ],
    success: [
      "Consistent hierarchy, spacing, and alerts across mobile and desktop.",
      "Continuity through empty states, regardless of device.",
      "A ready-to-build backlog of discrete, implementable improvements."
    ],
    process: [
      "Ran a usability pass across alerts, spacing, card layouts, and mobile presentation.",
      "Redesigned empty-cart scenarios so users are not left stuck mid-task.",
      "Refined banner and warning treatments and scroll behavior for continuity across the journey.",
      "Broke the redesign into discrete, implementable stories for delivery."
    ],
    impact: [
      "More consistent, scannable hierarchy across the registration portal.",
      "Fewer dead-ends through redesigned empty states.",
      "A ready-to-build backlog of discrete, implementable improvements.",
      "A portal that holds up as well on mobile as it does on desktop."
    ],
    challenge: "Spanning dozens of systemic polish fixes across mobile and desktop without losing coherence across the journey.",
    takeaway: "Meeting registrants where they are means designing for the device in their hand, not retrofitting desktop patterns. Small, systemic fixes compound into a portal that feels coherent everywhere."
  },
  {
    id: "waitlist-decision",
    thumbIcon: "route",
    tag: "Registration",
    title: "Guided Waitlist Decision Flow",
    blurb: "Turning an ambiguous decision point into a guided two-path flow for registrants choosing what to do when a dependent lands on the waitlist.",
    discipline: "Reducing friction in high-stakes, time-sensitive registration moments \u2014 where a confusing decision can cost a family their spot.",
    role: "Product Designer",
    context: "Figma \xB7 Registration portal \xB7 Waitlist logic",
    constraints: ["Ambiguous decision points", "High-volume, time-sensitive journeys", "Multiple dependents per registration", "Legacy waitlist logic"],
    accent: "var(--color-sky)",
    image: "assets/proj-waitlist-decision.jpeg",
    imageCaption: 'The guided waitlist decision \u2014 "What matters most to Bryanna?" \u2014 with clear session-vs-session-option requirement handling.',
    solution: "A restructured waitlist flow that replaced a confusing decision point with a guided two-path model and clearer requirement handling \u2014 so a registrant with a waitlisted dependent always knows what to do next.",
    solutionPoints: [
      "Waitlist ambiguity resolved into a legible two-path flow with explicit requirement handling.",
      "Reassurance-focused copy for time-sensitive queue and waiting states.",
      "Clear handling for registrations with multiple dependents in different queue states."
    ],
    problems: [
      { who: "The Registrant", sub: "", t: "A confusing waitlist decision point left registrants unsure what to do or what was required when a dependent was waitlisted." },
      { who: "The Registrant", sub: "Multiple dependents", t: "Registering more than one dependent at once made mixed waitlist/confirmed states even harder to parse." },
      { who: "The Team", sub: "", t: "Ambiguous decision logic created support burden from confused registrants mid-registration." }
    ],
    success: [
      "A guided, legible waitlist flow that removes ambiguity.",
      "Clear next steps for registrants with one or more waitlisted dependents.",
      "Reduced anxiety during time-sensitive queue and waiting moments."
    ],
    process: [
      "Untangled the waitlist decision point and restructured it into a guided two-path model.",
      "Mapped how the decision changes when a registration includes multiple dependents in different states.",
      "Wrote reassurance-focused copy for time-sensitive queue and waiting states.",
      "Validated the flow against real registration scenarios with mixed waitlist outcomes."
    ],
    impact: [
      "Ambiguity turned into a clear, guided flow registrants can complete confidently.",
      "Fewer dead-ends and less confusion for registrations with multiple dependents.",
      "Reduced support burden from waitlist-related confusion."
    ],
    challenge: "Designing a single decision point that stays clear whether a registrant has one dependent or several, each in a different queue state.",
    takeaway: "The clearest flows account for the messy real case, not just the best-case path with a single dependent. Designing for multiple dependents in mixed states is what made the guided flow actually hold up."
  },
  {
    id: "auth-security",
    thumbIcon: "shield-check",
    tag: "Security",
    title: "Authentication & Security Recovery",
    blurb: "Designing recoverable moments in high-anxiety login and security flows \u2014 solving the real problem, not just the symptom.",
    discipline: "Where security infrastructure and UX intersect \u2014 designing calm, recoverable moments in high-anxiety flows.",
    role: "Product Designer",
    context: "Figma \xB7 Authentication \xB7 Security",
    constraints: ["High-anxiety failure states", "Infrastructure-driven constraints", "Lockout & escalation risk", "Detection vs. prevention tradeoffs", "PCI compliance for password resets"],
    accent: "var(--color-sky)",
    image: "assets/proj-auth-security.jpeg",
    imageCaption: 'Email verification recovery \u2014 a clear "Account Verified" confirmation guiding registrants straight back to sign-in.',
    solution: "A set of recovery-focused designs across authentication and security \u2014 starting from the insight that login failures are not always credential errors, and that infrastructure decisions have direct user-facing consequences.",
    solutionPoints: [
      'A "Wrong URL?" recovery prompt for users in the wrong environment \u2014 solving the real problem, not just the credential symptom.',
      "MFA setup fixes for missing controls and formatting issues, reducing lockout risk and support escalations.",
      "Research into firewall detection-vs-prevention mode and its user-facing implications \u2014 false positives, blocked access.",
      "Automated account locking based on fraud-risk signals, paired with manual tools for support staff to block or reactivate accounts.",
      "Identity verification built into the password-reset flow, aligned with PCI compliance requirements."
    ],
    problems: [
      { who: "The User", sub: "Locked out", t: "Login failures were treated as credential errors even when the real issue was being in the wrong environment." },
      { who: "The User", sub: "MFA setup", t: "Missing controls and formatting issues in multi-factor setup increased lockout risk." },
      { who: "The Business", sub: "", t: "Shifting a security system from detection to prevention risked false positives and blocked legitimate access." },
      { who: "The Business", sub: "Fraud risk", t: "Compromised or suspicious accounts needed fast, automatic locking based on fraud signals \u2014 with no reliable manual path to block or reactivate accounts when automation wasn\u2019t enough." },
      { who: "The User", sub: "Password reset", t: "Password resets lacked strong identity verification and PCI-aligned handling, creating both a security gap and compliance risk." }
    ],
    success: [
      "Recoverable login failures that guide users to the real fix.",
      "Lower lockout risk and fewer support escalations in MFA.",
      "Infrastructure decisions evaluated for real user consequences.",
      "Fast, automatic containment of compromised accounts with a reliable manual fallback.",
      "Password resets that meet PCI compliance without adding user friction."
    ],
    process: [
      "Reframed login failure as more than a credential problem \u2014 identifying the wrong-environment case.",
      "Designed a recovery path prompting users who reached the wrong URL.",
      "Fixed missing controls and formatting gaps in multi-factor setup.",
      "Investigated the user-facing implications of moving a firewall from detection to prevention mode.",
      "Designed automated account-locking logic triggered by fraud-risk signals, paired with manual block/reactivate tools for support staff to handle edge cases.",
      "Added identity verification to the password-reset flow and aligned it with PCI compliance requirements."
    ],
    impact: [
      "Users in the wrong environment recover instead of hitting a dead-end.",
      "Reduced lockout risk and MFA-related support escalations.",
      "A clear connection drawn between an infrastructure decision and real user consequences.",
      "Faster containment of compromised accounts through automatic, fraud-based locking.",
      "Support staff gained reliable manual tools to block or reactivate accounts when automation wasn\u2019t enough.",
      "Password resets now meet PCI compliance with stronger identity verification."
    ],
    challenge: "Designing calm, recoverable experiences on top of security infrastructure that is not primarily built around the user.",
    takeaway: "Security and UX are not opposites. The best recovery designs solve the real problem behind a failure \u2014 often an infrastructure or environment issue \u2014 rather than just the symptom the user first sees."
  },
  {
    id: "forms-strategy",
    thumbIcon: "file-check-2",
    tag: "Strategy",
    title: "Forms & Staff Workflow Strategy",
    blurb: "A structured evaluation of form and e-signature tooling \u2014 and a clearer source-of-truth model for staff form data.",
    discipline: "Strategic, systems-level solution design and vendor evaluation for internal tooling \u2014 analyzing downstream operational impact, not just features.",
    role: "Product Designer \xB7 Solution Design",
    context: "Vendor evaluation \xB7 Systems design \xB7 Integration",
    constraints: ["Fragmentation risk across tools", "Iframe integration limits", "API sync requirements", "Real staff application volume"],
    accent: "var(--color-teal)",
    image: "assets/proj-forms-strategy.jpeg",
    imageCaption: "Client volume by band \u2014 the real usage data behind the tooling and workflow strategy recommendation.",
    solution: "A structured evaluation of digital form and e-signature tools \u2014 assessed not as a feature comparison but as an analysis of downstream operational impact \u2014 paired with a clearer model for the source of truth for staff form data.",
    solutionPoints: [
      "Tools evaluated against configurability, embedded experience, integration approach, and data synchronization.",
      'A defined "source of truth" model addressing fragmentation across configuration, capture, and sync.',
      "Strategy grounded in real usage data (staff application volume) and technical constraints (iframe, API sync)."
    ],
    problems: [
      { who: "Staff", sub: "", t: "Form data was fragmented across configuration, capture, and sync, with no clear source of truth." },
      { who: "The Business", sub: "", t: "Choosing tooling on features alone risked downstream operational and integration problems." },
      { who: "Engineering", sub: "", t: "Iframe integration and API sync constraints shaped what was actually feasible." }
    ],
    success: [
      "A tooling recommendation grounded in operational impact, not feature lists.",
      "A clear source-of-truth model for staff form data.",
      "Alignment between strategy, real usage data, and technical constraints."
    ],
    process: [
      "Defined evaluation criteria: configurability, embedded experience, integration approach, data sync.",
      "Compared tools on downstream operational impact rather than surface features.",
      "Modeled what should be the source of truth to reduce fragmentation risk.",
      "Grounded the strategy in staff application volume and integration constraints (iframe, API)."
    ],
    impact: [
      "A defensible, systems-level tooling decision.",
      "Reduced fragmentation risk through a clear data-ownership model.",
      "Strategy connected directly to real usage and technical reality."
    ],
    challenge: "Evaluating tooling for long-term operational impact and data integrity, not just the strongest feature demo.",
    takeaway: "Solution design is UX. Choosing where data lives and how tools integrate shapes the staff experience as much as any screen \u2014 and getting it right prevents fragmentation before it starts."
  },
  {
    id: "outbox",
    thumbIcon: "send",
    tag: "Communication",
    title: "Outbox \u2014 Client Communications Tool",
    blurb: "Faster scanning and clearer status for the tool staff use to send and track communications to the people they serve.",
    discipline: "Staff-facing tooling whose improvements directly shape the client-facing communication experience \u2014 usability with downstream customer impact.",
    role: "Product Designer",
    context: "Figma \xB7 Staff tooling \xB7 Reporting",
    constraints: ["High volume of outgoing communications", "Staff usability \u2194 customer impact", "Status legibility (sent/pending/failed)", "Reporting & visibility needs"],
    accent: "var(--color-sage)",
    image: "assets/proj-outbox.jpeg",
    imageCaption: "Outbox records \u2014 searchable, filterable outgoing communications with instantly legible sent/paused/scheduled status.",
    solution: "A redesign of the Outbox \u2014 the interface staff use to send and track communications to registrants \u2014 improving how large volumes of outgoing messages are scanned, acted on, and verified, with clearer status and a path toward reporting.",
    solutionPoints: [
      "Header, table rows, and action dropdowns reworked so staff scan and act on volume faster.",
      "Progress and status indicators redesigned so sent, pending, and failed states are instantly legible.",
      "Individual message-viewing improved for reviewing exactly what a registrant received."
    ],
    problems: [
      { who: "Staff", sub: "High volume", t: "Scanning and acting on large volumes of outgoing communications was slow and cluttered." },
      { who: "Staff", sub: "Status", t: "It was hard to tell at a glance whether a communication had sent, was pending, or failed." },
      { who: "Registrants", sub: "Downstream", t: "Weak staff tooling directly affected what registrants received and when." }
    ],
    success: [
      "Staff scan and act on outgoing communications quickly.",
      "Instantly legible sent, pending, and failed status.",
      "Confidence in reviewing exactly what was sent to a registrant."
    ],
    process: [
      "Reworked the Outbox header, table rows, and action dropdowns for faster scanning.",
      "Redesigned progress and status indicators for clear delivery state.",
      "Improved the individual message-viewing experience.",
      "Contributed to reporting research \u2014 extending the work into communication-activity visibility over time."
    ],
    impact: [
      "Faster, less error-prone handling of high communication volume.",
      "Clear delivery status reduces uncertainty and rework.",
      "Better staff tooling improves the client-facing communication experience directly."
    ],
    challenge: 'Making a "boring but critical" internal tool measurably better while keeping the downstream customer impact in view.',
    takeaway: "Staff-facing tools are customer-facing by proxy. Improving how a team sends and tracks communications changes what people actually receive \u2014 internal usability and external experience are the same problem."
  },
  {
    id: "ai-leadership",
    thumbIcon: "sparkles",
    tag: "AI Leadership",
    title: "Leading AI Adoption Across Product Teams",
    blurb: "Moving three product teams from AI-skeptical to AI-fluent \u2014 leading organizational change in how teams work, not just an artifact.",
    discipline: "Leading responsible, mature AI adoption across product teams \u2014 organizational change and process redesign, grounded in firsthand practice.",
    role: "AI Transformation Lead \xB7 Product Designer",
    context: "Enablement \xB7 SDLC redesign \xB7 Change management",
    constraints: ["AI-skeptical starting point", "Responsible, embedded use over novelty", "Cross-team, cross-brand differences", "Adoption as behavior change, not a one-off"],
    accent: "var(--color-teal)",
    image: "assets/proj-ai-leadership.jpeg",
    imageCaption: "A custom Claude Code skill built to scope and audit feature conversions \u2014 AI embedded directly into the design workflow.",
    solution: "A dual role as both trainer and practitioner \u2014 guiding three product teams from limited or skeptical AI use to confident, embedded adoption, while applying AI-native workflows to my own product work so the guidance stayed grounded in firsthand use.",
    solutionPoints: [
      "Three product teams moved end-to-end from AI-skeptical to AI-fluent \u2014 a genuine behavior-change outcome.",
      "AI-assisted SDLC redesign: stronger acceptance criteria, clearer triage, milestone and roadmap structure, and a connected documentation hub.",
      "An AI-assisted workflow that drafts requirements from existing story, business-case, and delivery context \u2014 cutting documentation overhead."
    ],
    problems: [
      { who: "Product Teams", sub: "", t: "Limited or skeptical AI use meant teams were not seeing where it could meaningfully improve their work." },
      { who: "The Process", sub: "SDLC", t: "Ambiguous acceptance criteria, unclear triage, and scattered documentation slowed delivery." },
      { who: "The Org", sub: "", t: "Adoption risked being novelty-driven rather than responsible, embedded, and outcome-focused." }
    ],
    success: [
      "Teams confidently embedding AI into day-to-day workflows.",
      "A more legible SDLC \u2014 testable stories, clearer priorities, connected docs.",
      "Responsible use focused on better outcomes, not AI for its own sake."
    ],
    process: [
      "Held a dual trainer and practitioner role so guidance was grounded in firsthand AI-native work.",
      "Trained three product teams end-to-end from skeptical to fluent AI use.",
      "Translated a process-improvement roadmap into practical, AI-assisted workflow changes \u2014 acceptance criteria, triage models, milestone structure, and a connected documentation hub.",
      "Shaped an AI-assisted workflow drafting requirements from existing story, business-case, and delivery context.",
      "Ran recurring feedback and adoption check-ins, feeding friction points back into the rollout."
    ],
    impact: [
      "Three teams moved from AI-skeptical to AI-fluent as a lasting behavior change.",
      "Reduced documentation overhead through AI-assisted requirement drafting.",
      "A clearer, more testable delivery process with connected context.",
      "Enablement recommendations that generalize across teams and brands."
    ],
    challenge: "Driving responsible, embedded AI adoption as real behavior change \u2014 across teams with different workflows \u2014 rather than a one-time training event.",
    takeaway: "Leading AI adoption is change management, not tooling. Pairing hands-on practice with training, feedback loops, and process redesign is what moves teams from skeptical to fluent \u2014 and keeps the focus on better outcomes over novelty."
  },
  {
    id: "research-documentation",
    thumbIcon: "search",
    tag: "Research & Practice",
    title: "Research, Analysis & Documentation",
    blurb: "Using data synthesis and clear writing to move from raw backlog to actionable insight \u2014 the connective tissue beneath the case studies.",
    discipline: "Using data and writing to drive product decisions \u2014 grounding design in behavior, and turning institutional knowledge into reusable team resources.",
    role: "Product Designer \xB7 Research",
    context: "Data analysis \xB7 Component audits \xB7 Documentation",
    constraints: ["Large, noisy request backlogs", "Assumption-driven decisions", "UI & design-system fragmentation", "Scattered institutional knowledge"],
    accent: "var(--color-teal)",
    image: "assets/proj-research-documentation.jpeg",
    imageCaption: "A searchable internal knowledge base of documented issues, tagged and filterable \u2014 institutional knowledge turned into a reusable resource.",
    solution: "The research, analysis, and documentation practice underpinning the case studies \u2014 synthesizing user requests into themes, grounding decisions in real usage, auditing UI for inconsistency, and turning institutional knowledge into reusable resources.",
    solutionPoints: [
      "Large sets of user requests synthesized into pain-point themes \u2014 from raw backlog to actionable insight.",
      "Component and filter audits surfacing UI inconsistency and design-system fragmentation.",
      "Internal documentation for administration, security resets, onboarding, and design-role expectations."
    ],
    problems: [
      { who: "The Team", sub: "", t: "A large, noisy backlog of requests obscured the real, recurring pain points." },
      { who: "The Product", sub: "", t: "Decisions risked being driven by assumption rather than actual feature usage." },
      { who: "The System", sub: "", t: "UI inconsistency went unmeasured, and knowledge lived only in people's heads." }
    ],
    success: [
      "Actionable pain-point themes drawn from raw request data.",
      "Design decisions grounded in real behavior, not assumption.",
      "Reusable documentation that outlives any single project."
    ],
    process: [
      "Synthesized large sets of user requests into clear pain-point themes.",
      "Analyzed feature usage to ground design decisions in actual behavior.",
      "Ran component and filter audits to surface inconsistency and fragmentation.",
      "Improved data-quality patterns in form inputs (phone, titles, dates) for better reporting.",
      "Authored documentation on administration, security resets, onboarding, and design-role expectations."
    ],
    impact: [
      "Raw backlog turned into prioritized, actionable insight.",
      "Design grounded in usage data rather than assumption.",
      "Institutional knowledge captured as reusable team resources.",
      "Better input data quality with downstream reporting and support benefits."
    ],
    challenge: "Making research and documentation visible and valued as the foundation beneath more obviously designed work.",
    takeaway: "Research and writing are design. The synthesis, audits, and documentation are what let every other case study stand on evidence rather than assumption."
  }
];

})();

/* ---- components/mindmap-data.js ---- */
(function () {
window.SPOKES = [
  {
    id: "financial",
    label: "Financial Systems",
    sub: "Payments & Billing",
    icon: "landmark",
    blurb: "Statements, reconciliation, donations, and refunds \u2014 where accuracy, traceability, and reversibility are what build trust.",
    projectIds: ["merchant-statements", "fundraising-payments"],
    expertise: ["Financial Systems & Payments"]
  },
  {
    id: "registration",
    label: "High-Stakes UX",
    sub: "Registration & Security",
    icon: "gauge",
    blurb: "High-volume, time-sensitive journeys \u2014 queueing, waitlists, and security recovery \u2014 kept calm and usable under pressure.",
    projectIds: ["queueing-system", "registration-mobile", "waitlist-decision", "auth-security"],
    expertise: ["Performance & High-Stakes UX"]
  },
  {
    id: "systems",
    label: "Client Operations",
    sub: "Communication & Workflow Management",
    icon: "megaphone",
    blurb: "The tools our clients rely on to manage hiring and communicate with the people they serve \u2014 fast, clear, and built for real workloads.",
    projectIds: ["forms-strategy", "outbox"],
    expertise: ["Client Communication & Workflow Tooling"]
  },
  {
    id: "practice",
    label: "Leadership",
    sub: "AI & Design Excellence",
    icon: "sparkles",
    blurb: "Reshaping how teams work and what they build on \u2014 leading AI adoption, grounding decisions in research, and raising the design bar.",
    projectIds: ["design-system", "ai-leadership", "research-documentation"],
    expertise: ["AI Transformation Leadership", "Accessible Design Systems", "Research, Analysis & Documentation"]
  }
];
window.expertiseByName = function(name) {
  return (window.EXPERTISE || []).find((e) => e.h === name) || { h: name, p: "", icon: "dot" };
};
window.spokeProjects = function(spoke) {
  const by = {};
  (window.PROJECTS || []).forEach((p) => {
    by[p.id] = p;
  });
  return (spoke.projectIds || []).map((id) => by[id]).filter(Boolean);
};
window.CAREER = [
  {
    company: "CampBrain",
    location: "Toronto, Ontario, Canada",
    span: "Permanent \xB7 Full-time \xB7 3 yrs 11 mos",
    roles: [
      {
        title: "Product Designer, AI Transformation Lead",
        period: "Mar 2025 \u2013 Present \xB7 1 yr 5 mos",
        skills: "Product Design \xB7 Information Architecture \xB7 AI Transformation \xB7 Prototyping",
        current: true
      },
      {
        title: "Senior Data Specialist",
        period: "Jun 2024 \u2013 Apr 2025 \xB7 11 mos",
        skills: "Data Analysis \xB7 Technical Communication \xB7 SQL Querying \xB7 Project Management"
      },
      {
        title: "Software & Data Specialist",
        period: "Sep 2022 \u2013 Jun 2024 \xB7 1 yr 10 mos",
        skills: "Technical Communication \xB7 B2B2C \xB7 API Integration \xB7 Journey & Flow Mapping"
      }
    ]
  }
];

})();

/* ---- components/Work.jsx ---- */
(function () {
const MODAL_RESPONSIVE_CSS = `
  @media (max-width: 700px) {
    .modal-pad { padding-left: 22px !important; padding-right: 22px !important; }
    .modal-hero { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
    .modal-hero-thumb { width: 84px !important; height: 84px !important; }
    .two-col { grid-template-columns: 1fr !important; }
  }
`;
function ProjectCard({ p, onOpen, index }) {
  const [hover, setHover] = React.useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onClick: () => onOpen(p),
      style: {
        ...workStyles.card,
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: hover ? "translateY(-3px)" : "translateY(0)"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { ...workStyles.cardImg, background: `linear-gradient(150deg, var(--color-pale-blue), var(--color-pale-green))` } }, /* @__PURE__ */ React.createElement("span", { style: workStyles.cardNum }, String(index + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", { style: { ...workStyles.badge, position: "absolute", top: 16, left: 16 } }, p.tag)),
    /* @__PURE__ */ React.createElement("div", { style: workStyles.cardBody }, /* @__PURE__ */ React.createElement("h3", { style: workStyles.cardTitle }, p.title), /* @__PURE__ */ React.createElement("p", { style: workStyles.cardBlurb }, p.blurb), /* @__PURE__ */ React.createElement("span", { style: { ...workStyles.cardLink, color: hover ? "var(--color-teal)" : "var(--color-sky)" } }, "Read case study ", /* @__PURE__ */ React.createElement("span", { style: { transition: "transform 250ms ease", display: "inline-block", transform: hover ? "translateX(4px)" : "none" } }, "\u2192")))
  );
}
function Pillars({ p }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "var(--color-silver)", border: "1px solid var(--color-silver)", borderRadius: 10, overflow: "hidden" } }, [["Role", p.role], ["Tools & Context", p.context]].map(([k, v]) => /* @__PURE__ */ React.createElement("div", { key: k, style: { background: "#fff", padding: "16px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: modalStyles.metaLabel }, k), /* @__PURE__ */ React.createElement("div", { style: modalStyles.metaVal }, v))));
}
function Block({ label, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { marginTop: 32 } }, /* @__PURE__ */ React.createElement("div", { style: modalStyles.blockHead }, /* @__PURE__ */ React.createElement("span", { style: modalStyles.blockBar }), /* @__PURE__ */ React.createElement("span", { style: modalStyles.blockLabel }, label)), children);
}
function CheckList({ items, accent }) {
  return /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 } }, items.map((t, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { display: "flex", gap: 12, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "check", style: { width: 18, height: 18, color: accent || "var(--color-teal)", flexShrink: 0, marginTop: 3 } }), /* @__PURE__ */ React.createElement("span", { style: modalStyles.liText }, t))));
}
function ProjectModal({ p, onClose }) {
  React.useEffect(() => {
    if (!p) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [p]);
  if (!p) return null;
  return /* @__PURE__ */ React.createElement("div", { style: modalStyles.overlay, onClick: onClose }, /* @__PURE__ */ React.createElement("style", null, MODAL_RESPONSIVE_CSS), /* @__PURE__ */ React.createElement("div", { style: modalStyles.modal, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { style: modalStyles.close, onClick: onClose, "aria-label": "Close" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "x", style: { width: 20, height: 20 } })), /* @__PURE__ */ React.createElement("div", { className: "modal-pad modal-hero", style: { ...modalStyles.hero, background: `linear-gradient(150deg, var(--color-navy), var(--color-slate))`, display: "flex", alignItems: "center", gap: 32, justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { ...workStyles.badge, background: "rgba(125,191,170,0.18)", color: "var(--color-mint)", border: "1px solid rgba(125,191,170,0.3)" } }, p.tag), /* @__PURE__ */ React.createElement("h2", { style: modalStyles.title }, p.title), /* @__PURE__ */ React.createElement("p", { style: modalStyles.discipline }, p.discipline)), p.image && /* @__PURE__ */ React.createElement("div", { className: "modal-hero-thumb", style: modalStyles.heroThumb }, /* @__PURE__ */ React.createElement("img", { src: p.image, alt: "", style: modalStyles.heroThumbImg }))), /* @__PURE__ */ React.createElement("div", { style: modalStyles.body, className: "modal-pad" }, p.image && /* @__PURE__ */ React.createElement("figure", { style: modalStyles.figure }, /* @__PURE__ */ React.createElement("div", { style: modalStyles.figFrame }, /* @__PURE__ */ React.createElement("img", { src: p.image, alt: p.title, style: modalStyles.figImg })), /* @__PURE__ */ React.createElement("figcaption", { style: modalStyles.figCap }, p.imageCaption)), /* @__PURE__ */ React.createElement(Pillars, { p }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: modalStyles.constraintLabel }, "Constraints"), p.constraints.map((c) => /* @__PURE__ */ React.createElement("span", { key: c, style: modalStyles.constraint }, c))), /* @__PURE__ */ React.createElement(Block, { label: "The Solution" }, /* @__PURE__ */ React.createElement("p", { style: modalStyles.para }, p.solution), p.solutionPoints && /* @__PURE__ */ React.createElement("ul", { style: { margin: "14px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 } }, p.solutionPoints.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { display: "flex", gap: 12, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "arrow-right", style: { width: 16, height: 16, color: "var(--color-sky)", flexShrink: 0, marginTop: 4 } }), /* @__PURE__ */ React.createElement("span", { style: modalStyles.liText }, s))))), /* @__PURE__ */ React.createElement(Block, { label: "The Core Problems" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 } }, p.problems.map((pr, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: modalStyles.problemCard }, /* @__PURE__ */ React.createElement("div", { style: modalStyles.problemWho }, pr.who, pr.sub ? /* @__PURE__ */ React.createElement("span", { style: modalStyles.problemSub }, " \xB7 ", pr.sub) : null), /* @__PURE__ */ React.createElement("div", { style: modalStyles.problemText }, pr.t))))), /* @__PURE__ */ React.createElement("div", { style: modalStyles.twoCol, className: "two-col" }, /* @__PURE__ */ React.createElement(Block, { label: "What Success Looks Like" }, /* @__PURE__ */ React.createElement(CheckList, { items: p.success, accent: "var(--color-sage)" })), /* @__PURE__ */ React.createElement(Block, { label: "The Impact" }, /* @__PURE__ */ React.createElement(CheckList, { items: p.impact, accent: "var(--color-teal)" }))), /* @__PURE__ */ React.createElement(Block, { label: "The Process" }, /* @__PURE__ */ React.createElement("ol", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 } }, p.process.map((step, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { display: "flex", gap: 16, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: modalStyles.stepNum }, i + 1), /* @__PURE__ */ React.createElement("span", { style: { ...modalStyles.liText, paddingTop: 3 } }, step))))), /* @__PURE__ */ React.createElement(Block, { label: "Reflection" }, /* @__PURE__ */ React.createElement("div", { className: "two-col", style: modalStyles.reflectGrid }, /* @__PURE__ */ React.createElement("div", { style: modalStyles.reflectCard }, /* @__PURE__ */ React.createElement("div", { style: modalStyles.reflectLabel }, "Biggest challenge"), /* @__PURE__ */ React.createElement("p", { style: modalStyles.reflectText }, p.challenge)), /* @__PURE__ */ React.createElement("div", { style: { ...modalStyles.reflectCard, background: "var(--color-pale-green)", border: "1px solid var(--color-mint)" } }, /* @__PURE__ */ React.createElement("div", { style: { ...modalStyles.reflectLabel, color: "var(--color-teal)" } }, "Key takeaway"), /* @__PURE__ */ React.createElement("p", { style: modalStyles.reflectText }, p.takeaway)))))));
}
function Work({ onOpen }) {
  return /* @__PURE__ */ React.createElement("section", { style: workStyles.section }, /* @__PURE__ */ React.createElement("div", { style: workStyles.inner }, /* @__PURE__ */ React.createElement("div", { style: workStyles.overline }, "Selected Work"), /* @__PURE__ */ React.createElement("h2", { style: workStyles.heading }, "Three systems, built for trust at scale"), /* @__PURE__ */ React.createElement("div", { style: workStyles.bar }), /* @__PURE__ */ React.createElement("div", { style: workStyles.grid }, window.PROJECTS.map((p, i) => /* @__PURE__ */ React.createElement(ProjectCard, { key: p.id, p, index: i, onOpen })))));
}
const workStyles = {
  section: { background: "var(--color-cloud)", padding: "2rem 2rem 5rem" },
  inner: { maxWidth: 1200, margin: "0 auto" },
  overline: { fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 500 },
  heading: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.8rem,3.5vw,2.25rem)", color: "var(--color-navy)", margin: "14px 0 0" },
  bar: { width: 40, height: 3, background: "var(--color-teal)", margin: "16px 0 40px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 },
  card: { background: "#fff", border: "1px solid var(--color-silver)", borderRadius: 10, overflow: "hidden", cursor: "pointer", transition: "all 250ms ease" },
  cardImg: { position: "relative", height: 168, display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: 16 },
  cardNum: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 56, color: "rgba(46,64,87,0.16)", lineHeight: 0.8 },
  cardBody: { padding: "20px 20px 22px" },
  badge: { display: "inline-block", whiteSpace: "nowrap", background: "var(--color-pale-green)", color: "var(--color-teal)", fontWeight: 500, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", padding: "5px 11px", borderRadius: 4, fontFamily: "var(--font-body)" },
  cardTitle: { fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 19, lineHeight: 1.3, color: "var(--color-charcoal)", margin: "0 0 10px" },
  cardBlurb: { fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-graphite)", lineHeight: 1.6, margin: "0 0 16px" },
  cardLink: { fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, transition: "color 250ms ease" }
};
const modalStyles = {
  overlay: { position: "fixed", inset: 0, background: "rgba(26,31,36,0.55)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 24px", zIndex: 100, overflowY: "auto" },
  modal: { position: "relative", background: "#fff", borderRadius: 16, maxWidth: 760, width: "100%", overflow: "hidden", boxShadow: "var(--shadow-xl)", margin: "auto" },
  close: { position: "absolute", top: 18, right: 18, background: "rgba(255,255,255,0.92)", border: "none", borderRadius: 999, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-navy)", zIndex: 2, boxShadow: "var(--shadow-sm)" },
  hero: { padding: "40px 40px 36px" },
  heroThumb: { flexShrink: 0, width: 120, height: 120, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "var(--shadow-lg)", background: "#fff" },
  heroThumbImg: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" },
  title: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2rem)", lineHeight: 1.2, color: "#fff", margin: "16px 0 0", letterSpacing: "-0.01em", maxWidth: "20ch" },
  discipline: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: "var(--color-mist)", margin: "14px 0 0", maxWidth: "60ch" },
  body: { padding: "36px 40px 44px" },
  figure: { margin: "0 0 32px" },
  figFrame: { background: "var(--color-pale-blue)", border: "1px solid var(--color-silver)", borderRadius: 12, padding: 18, display: "flex", justifyContent: "center" },
  figImg: { maxWidth: "100%", maxHeight: 460, objectFit: "contain", borderRadius: 6, display: "block" },
  figCap: { fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-stone-aa)", lineHeight: 1.6, margin: "12px 2px 0", textAlign: "center", maxWidth: "64ch", marginLeft: "auto", marginRight: "auto" },
  metaLabel: { fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-stone-aa)", marginBottom: 5 },
  metaVal: { fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-charcoal)", fontWeight: 500, lineHeight: 1.5 },
  constraintLabel: { fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-stone-aa)", alignSelf: "center", marginRight: 4 },
  constraint: { fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--color-slate)", background: "var(--color-pale-blue)", borderRadius: 4, padding: "5px 11px", whiteSpace: "nowrap" },
  blockHead: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 },
  blockBar: { width: 24, height: 3, background: "var(--color-teal)", borderRadius: 2 },
  blockLabel: { fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-navy)", whiteSpace: "nowrap" },
  para: { fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.75, color: "var(--color-graphite)", margin: 0, maxWidth: "64ch" },
  liText: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.65, color: "var(--color-graphite)" },
  twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 },
  problemCard: { background: "var(--color-cloud)", border: "1px solid var(--color-silver)", borderRadius: 10, padding: "16px 18px" },
  problemWho: { fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 14, color: "var(--color-navy)", marginBottom: 8 },
  problemSub: { fontWeight: 400, fontSize: 12.5, color: "var(--color-stone-aa)" },
  problemText: { fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "var(--color-graphite)" },
  stepNum: { flexShrink: 0, width: 28, height: 28, borderRadius: 999, background: "var(--color-pale-blue)", color: "var(--color-teal)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" },
  reflectGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  reflectCard: { background: "var(--color-cloud)", border: "1px solid var(--color-silver)", borderRadius: 12, padding: "20px 22px" },
  reflectLabel: { fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-stone-aa)", marginBottom: 10, fontWeight: 500 },
  reflectText: { fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.7, color: "var(--color-graphite)", margin: 0 }
};
Object.assign(window, { Work, ProjectCard, ProjectModal });

})();

/* ---- components/MindMap.jsx ---- */
(function () {
const MM_CSS = `
  .mm-stage{position:relative;width:100%;height:100vh;min-height:500px;overflow:hidden;
    background:var(--color-cloud);font-family:var(--font-body);}
  .mm-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:5;}
  .mm-branch{stroke:var(--branch-aa);stroke-width:1.5;vector-effect:non-scaling-stroke;
    transition:stroke .4s ease,opacity .4s ease,stroke-width .4s ease;}
  .mm-branch.on{stroke:var(--accent);stroke-width:2.5;}
  .mm-branch.off{opacity:.28;}
  .mm-branch.hide{opacity:0;}
  .mm-ring{fill:none;stroke:var(--color-silver);opacity:.4;vector-effect:non-scaling-stroke;}
  .mm-childbranch{stroke:var(--accent);stroke-width:1.75;vector-effect:non-scaling-stroke;
    stroke-linecap:round;stroke-dasharray:5 5;animation:mm-dash .5s ease both;}
  @keyframes mm-dash{from{stroke-dashoffset:20;opacity:0;}to{stroke-dashoffset:0;opacity:.9;}}

  /* center node */
  .mm-center{position:absolute;transform:translate(-50%,-50%);z-index:30;
    display:flex;flex-direction:column;align-items:center;gap:14px;
    transition:opacity .35s ease,filter .35s ease;cursor:pointer;
    -webkit-tap-highlight-color:transparent;}
  .mm-center.dim{opacity:.22;filter:saturate(.7);pointer-events:none;}
  .mm-center.hidden{opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(.9);}
  .mm-photo-wrap{position:relative;width:176px;height:176px;border-radius:999px;
    padding:6px;background:#fff;box-shadow:var(--shadow-lg);
    transition:transform .3s ease,box-shadow .3s ease;}
  .mm-center:hover .mm-photo-wrap{transform:translateY(-3px);box-shadow:var(--shadow-xl);}
  .mm-photo-ring{position:absolute;inset:-6px;border-radius:999px;
    border:2px solid var(--accent);opacity:.55;transition:opacity .3s ease;}
  .mm-center:hover .mm-photo-ring{opacity:1;}
  .mm-photo{width:100%;height:100%;border-radius:999px;object-fit:cover;display:block;}
  .mm-photo-cta{position:absolute;left:50%;bottom:-2px;transform:translate(-50%,50%);
    background:var(--accent);color:#fff;font-family:var(--font-heading);font-weight:600;
    font-size:12.5px;letter-spacing:.02em;padding:7px 16px;border-radius:999px;white-space:nowrap;
    box-shadow:var(--shadow-md);display:flex;align-items:center;gap:6px;
    transition:background .25s ease,transform .25s ease;}
  .mm-center:hover .mm-photo-cta{transform:translate(-50%,50%) translateY(-1px);
    background:var(--accent-hover);}
  .mm-center-name{text-align:center;margin-top:8px;}
  .mm-center-name b{display:block;font-family:var(--font-heading);font-weight:600;
    font-size:16px;color:var(--color-navy);letter-spacing:-.01em;}
  .mm-center-name span{display:block;font-size:12px;color:var(--color-stone-aa);margin-top:2px;
    letter-spacing:.04em;}

  /* category spoke node */
  .mm-node{position:absolute;transform:translate(-50%,-50%);z-index:20;width:186px;
    background:#fff;border:1px solid var(--color-silver);border-radius:14px;
    padding:16px 16px 14px;cursor:pointer;text-align:left;
    box-shadow:var(--shadow-xs);-webkit-tap-highlight-color:transparent;
    transition:transform .45s cubic-bezier(.4,.1,.2,1),left .45s cubic-bezier(.4,.1,.2,1),top .45s cubic-bezier(.4,.1,.2,1),box-shadow .28s ease,border-color .28s ease,opacity .35s ease,background .28s ease;}
  .mm-node.hidden{opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(.88);}
  .mm-node:hover{transform:translate(-50%,-50%) translateY(-4px);box-shadow:var(--shadow-md);
    border-color:var(--accent);}
  .mm-node.active{border-color:var(--accent);background:var(--color-pale-green);
    box-shadow:var(--shadow-lg);z-index:60;
    transform:translate(-50%,-50%) scale(1.03);}
  .mm-node.dim{opacity:.28;filter:saturate(.7);pointer-events:none;}
  .mm-node-ico{width:38px;height:38px;border-radius:10px;background:var(--color-pale-blue);
    color:var(--accent);display:flex;align-items:center;justify-content:center;margin-bottom:12px;
    transition:background .28s ease;}
  .mm-node.active .mm-node-ico{background:#fff;}
  .mm-node-ico svg{width:20px;height:20px;}
  .mm-node h3{margin:0;font-family:var(--font-heading);font-weight:600;font-size:16px;
    line-height:1.25;color:var(--color-navy);}
  .mm-node .mm-node-sub{display:block;font-family:var(--font-body);font-weight:400;
    font-size:13px;color:var(--color-slate);margin-top:2px;}
  .mm-node-meta{display:flex;align-items:center;gap:6px;margin-top:12px;
    font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--color-stone-aa);
    font-weight:500;}
  .mm-node-meta .dotb{width:5px;height:5px;border-radius:999px;background:var(--accent);}

  /* child sub-spoke nodes */
  .mm-child{position:absolute;transform:translate(-50%,-50%);z-index:55;
    animation:mm-pop .32s cubic-bezier(.3,.7,.4,1) both;}
  @keyframes mm-pop{from{opacity:0;transform:translate(-50%,-50%) scale(.9);}
    to{opacity:1;transform:translate(-50%,-50%) scale(1);}}
  .mm-cproj{width:186px;text-align:left;background:#fff;border:1px solid var(--color-silver);
    border-radius:12px;padding:0;cursor:pointer;box-shadow:var(--shadow-sm);overflow:hidden;
    transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;}
  .mm-cproj:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg);border-color:var(--accent);}
  .mm-cproj-thumb{height:64px;position:relative;
    background:linear-gradient(150deg,var(--color-pale-blue),var(--color-pale-green));
    display:flex;align-items:flex-end;justify-content:flex-start;padding:9px;overflow:hidden;}
  .mm-cproj-thumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  .mm-cproj-thumb .ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
    color:var(--accent);}
  .mm-cproj-thumb .ph svg{width:26px;height:26px;opacity:.85;}
  .mm-cproj-thumb .tag{position:relative;z-index:1;background:#fff;color:var(--accent);
    font-size:9.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:3px 8px;
    border-radius:4px;box-shadow:var(--shadow-xs);}
  .mm-cproj-body{padding:10px 13px 12px;}
  .mm-cproj .ttl{font-family:var(--font-heading);font-weight:600;font-size:13px;line-height:1.3;
    color:var(--color-charcoal);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;
    overflow:hidden;}
  .mm-cproj .lnk{font-size:11.5px;font-weight:500;color:var(--accent);display:inline-flex;
    align-items:center;gap:5px;margin-top:7px;}
  .mm-cproj:hover .lnk .arw{transform:translateX(3px);}
  .mm-cproj .lnk .arw{transition:transform .22s ease;}
  .mm-cexp{width:158px;background:var(--color-pale-blue);border:1px solid var(--color-silver);
    border-radius:11px;padding:11px 12px;cursor:default;box-shadow:var(--shadow-xs);}
  .mm-cexp .type{font-size:9px;letter-spacing:.07em;text-transform:uppercase;color:var(--color-stone-aa);
    font-weight:600;display:flex;align-items:center;gap:6px;margin-bottom:8px;}
  .mm-cexp .type .eico{width:22px;height:22px;border-radius:6px;background:#fff;color:var(--accent);
    display:flex;align-items:center;justify-content:center;}
  .mm-cexp .type .eico svg{width:13px;height:13px;}
  .mm-cexp .nm{font-family:var(--font-heading);font-weight:600;font-size:13px;line-height:1.3;
    color:var(--color-navy);}
  .mm-cempty{width:210px;background:#fff;border:1px dashed var(--color-stone);border-radius:12px;
    padding:18px 18px 16px;box-shadow:var(--shadow-xs);}
  .mm-cempty svg{width:22px;height:22px;color:var(--accent);}
  .mm-cempty .et{font-family:var(--font-heading);font-weight:600;font-size:14px;color:var(--color-navy);
    margin:10px 0 5px;}
  .mm-cempty p{margin:0;font-size:12.5px;line-height:1.55;color:var(--color-slate);}
  .mm-cempty p b{color:var(--color-navy);}

  /* catcher */
  .mm-catcher{position:absolute;inset:0;z-index:40;cursor:default;}
  .mm-catcher.scrim{background:rgba(26,31,36,.28);}

  /* shared expansion content (side-panel mode) */
  .mm-panel-hd{display:flex;align-items:flex-start;gap:12px;}
  .mm-panel-hd .ico{width:40px;height:40px;border-radius:10px;background:var(--color-pale-blue);
    color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .mm-panel-hd .ico svg{width:21px;height:21px;}
  .mm-panel-hd h3{margin:0;font-family:var(--font-heading);font-weight:600;font-size:19px;
    color:var(--color-navy);line-height:1.2;}
  .mm-panel-hd .sub{font-size:13px;color:var(--color-slate);margin-top:2px;}
  .mm-x{margin-left:auto;flex-shrink:0;appearance:none;border:1px solid var(--color-silver);
    background:#fff;width:30px;height:30px;border-radius:999px;display:flex;align-items:center;
    justify-content:center;cursor:pointer;color:var(--color-slate);transition:all .2s ease;}
  .mm-x:hover{background:var(--color-cloud);color:var(--color-navy);border-color:var(--color-stone);}
  .mm-x svg{width:16px;height:16px;}
  .mm-blurb{font-size:14px;line-height:1.65;color:var(--color-graphite);margin:14px 0 0;}
  .mm-sublabel{display:flex;align-items:center;gap:10px;margin:22px 0 12px;}
  .mm-sublabel span:first-child{width:18px;height:3px;border-radius:2px;background:var(--accent);}
  .mm-sublabel b{font-family:var(--font-heading);font-weight:600;font-size:11px;
    letter-spacing:.07em;text-transform:uppercase;color:var(--color-navy);}

  .mm-proj{display:flex;gap:14px;align-items:stretch;width:100%;text-align:left;
    background:#fff;border:1px solid var(--color-silver);border-radius:12px;padding:12px;
    cursor:pointer;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;}
  .mm-proj + .mm-proj{margin-top:10px;}
  .mm-proj:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);border-color:var(--accent);}
  .mm-proj-thumb{width:76px;flex-shrink:0;border-radius:8px;overflow:hidden;
    background:linear-gradient(150deg,var(--color-pale-blue),var(--color-pale-green));
    display:flex;align-items:center;justify-content:center;}
  .mm-proj-thumb img{width:100%;height:100%;object-fit:cover;display:block;}
  .mm-proj-body{min-width:0;display:flex;flex-direction:column;gap:5px;padding:2px 2px 2px 0;}
  .mm-proj-tag{align-self:flex-start;background:var(--color-pale-green);color:var(--accent);
    font-size:10px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;
    padding:3px 8px;border-radius:4px;}
  .mm-proj-title{font-family:var(--font-heading);font-weight:600;font-size:14.5px;line-height:1.3;
    color:var(--color-charcoal);}
  .mm-proj-link{font-size:12.5px;font-weight:500;color:var(--accent);margin-top:auto;
    display:inline-flex;align-items:center;gap:5px;}
  .mm-proj:hover .mm-proj-link .arw{transform:translateX(3px);}
  .mm-proj-link .arw{transition:transform .22s ease;}

  .mm-exp{display:flex;gap:11px;align-items:flex-start;padding:11px 0;}
  .mm-exp + .mm-exp{border-top:1px solid var(--color-silver);}
  .mm-exp .eico{width:30px;height:30px;border-radius:8px;background:var(--color-pale-blue);
    color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .mm-exp .eico svg{width:16px;height:16px;}
  .mm-exp-h{font-family:var(--font-heading);font-weight:600;font-size:13.5px;color:var(--color-navy);}
  .mm-exp-p{font-size:12.5px;line-height:1.55;color:var(--color-graphite);margin-top:3px;}

  /* side panel */
  .mm-side{position:fixed;top:0;right:0;height:100vh;width:min(440px,92vw);z-index:50;
    background:#fff;border-left:1px solid var(--color-silver);box-shadow:var(--shadow-xl);
    padding:32px 30px 40px;overflow-y:auto;
    animation:mm-slide .34s cubic-bezier(.3,.7,.4,1) both;scrollbar-width:thin;}
  @keyframes mm-slide{from{transform:translateX(100%);}to{transform:translateX(0);}}

  /* header + hint overlays */
  .mm-head{position:absolute;top:26px;left:30px;z-index:35;pointer-events:none;}
  .mm-head .wm{font-family:var(--font-heading);font-weight:600;font-size:17px;color:var(--color-navy);}
  .mm-head .wm i{color:var(--accent);font-style:normal;}
  .mm-head .ov{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-stone-aa);
    margin-top:5px;font-weight:500;}
  /* drill-down chrome */
  .mm-back{position:absolute;top:24px;left:30px;z-index:46;display:inline-flex;align-items:center;
    gap:8px;background:#fff;border:1px solid var(--color-silver);border-radius:999px;
    padding:8px 15px 8px 12px;font-family:var(--font-heading);font-weight:600;font-size:13px;
    color:var(--color-navy);cursor:pointer;box-shadow:var(--shadow-xs);
    transition:border-color .2s ease,transform .2s ease,box-shadow .2s ease;
    animation:mm-fade .3s ease both;}
  .mm-back:hover{border-color:var(--accent);transform:translateX(-2px);box-shadow:var(--shadow-sm);}
  .mm-back svg{width:16px;height:16px;color:var(--accent);}
  @keyframes mm-fade{from{opacity:0;}to{opacity:1;}}
  .mm-drill-blurb{position:absolute;transform:translate(-50%,0);z-index:22;width:min(300px,80vw);
    text-align:center;animation:mm-fade .4s ease both;
    background:var(--color-cloud);padding:14px 18px;border-radius:12px;}
  .mm-drill-blurb .lead{font-size:11px;letter-spacing:.07em;text-transform:uppercase;
    color:var(--color-stone-aa);font-weight:600;margin-bottom:8px;}
  .mm-drill-blurb p{margin:0;font-size:14px;line-height:1.65;color:var(--color-graphite);}
  .mm-drill-blurb.narrow{text-align:center;transform:translate(-50%,0);}

  /* narrow-viewport drill-in: real document flow instead of percentage
     coordinates, so it always fits and scrolls regardless of card count
     or rendered height (percentage math can't know a card's real height). */
  .mm-drill-narrow{position:absolute;inset:0;overflow-y:auto;-webkit-overflow-scrolling:touch;
    display:flex;flex-direction:column;align-items:center;padding:86px 20px 72px;z-index:41;}
  .mm-drill-connector{width:2px;height:40px;flex-shrink:0;
    background:repeating-linear-gradient(to bottom,var(--accent) 0 5px,transparent 5px 10px);}
  .mm-node.static,.mm-child.static{position:static;left:auto;top:auto;transform:none;
    animation:mm-pop-static .32s cubic-bezier(.3,.7,.4,1) both;}
  .mm-node.static:hover{transform:translateY(-2px);}
  .mm-node.static.active{transform:none;}
  @keyframes mm-pop-static{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
  .mm-drill-blurb.static{position:static;transform:none;width:min(340px,86vw);margin:16px 0 6px;}
  .mm-cempty.static{width:min(210px,86vw);}

  /* Hidden earlier (wider) than the card-shrink breakpoint below \u2014 measured
     clearance to the overview category cards drops to single digits well
     before 760px, so it needs to disappear at a noticeably wider viewport
     to avoid crowding them. */
  @media (max-width:1100px){
    .mm-center-name{display:none;}
  }

  @media (max-width:760px){
    .mm-node{width:150px;padding:13px;}
    .mm-cproj{width:158px;}
    .mm-cexp{width:140px;}
    .mm-photo-wrap{width:132px;height:132px;}
    .mm-head{left:18px;top:18px;}
  }
`;
function layoutPositions(layout) {
  if (layout === "tree") {
    return { center: { x: 50, y: 15 }, nodes: [{ x: 15, y: 60 }, { x: 38.3, y: 60 }, { x: 61.7, y: 60 }, { x: 85, y: 60 }] };
  }
  if (layout === "constellation") {
    return { center: { x: 47, y: 49 }, nodes: [{ x: 18, y: 24 }, { x: 82, y: 20 }, { x: 27, y: 80 }, { x: 76, y: 74 }] };
  }
  return { center: { x: 50, y: 50 }, nodes: [{ x: 24, y: 28 }, { x: 76, y: 28 }, { x: 24, y: 72 }, { x: 76, y: 72 }] };
}
const CHILD_CARD_H_PX = 143;
const CHILD_CARD_W_PX = 186;
const PARENT_CARD_H_PX = 175;
const BLURB_H_PX = 115;
const ROW_GAP_PX = 32;
const GAP_AFTER_PARENT_PX = 22;
const GAP_AFTER_BLURB_PX = 26;
const DRILL_TOP_SAFE_PX = 110;
const DRILL_BOTTOM_SAFE_PX = 40;
const DRILL_SIDE_SAFE_PX = 40;
const STACK_MIN_GAP_PX = 56;
function drillLayout(count, width, height) {
  const slots = Math.max(count, 1);
  const w = width > 0 ? width : 1200;
  const h = height > 0 ? height : 800;
  return slots <= 2 ? drillLayoutLeftStack(slots, w, h) : drillLayoutTopRow(slots, w, h);
}
function drillLayoutLeftStack(slots, w, h) {
  const requiredHeightPx = slots * CHILD_CARD_H_PX + (slots - 1) * STACK_MIN_GAP_PX;
  const availableHeightPx = h - DRILL_TOP_SAFE_PX - DRILL_BOTTOM_SAFE_PX;
  const narrow = w <= 760 || requiredHeightPx > availableHeightPx;
  if (narrow) {
    return { parent: null, origin: null, blurb: null, children: [], narrow: true };
  }
  const parent = { x: 27, y: 40 };
  const childX = 66;
  const halfCardPct = CHILD_CARD_H_PX / 2 / h * 100;
  const bandTop = DRILL_TOP_SAFE_PX / h * 100 + halfCardPct;
  const bandBottom = 100 - DRILL_BOTTOM_SAFE_PX / h * 100 - halfCardPct;
  const bandCenter = (bandTop + bandBottom) / 2;
  const maxSpan = bandBottom - bandTop;
  const idealStepPct = (CHILD_CARD_H_PX + STACK_MIN_GAP_PX) / h * 100;
  const stepPct = slots > 1 ? Math.min(idealStepPct, maxSpan / (slots - 1)) : 0;
  const span = stepPct * (slots - 1);
  const startY = bandCenter - span / 2;
  const children = [];
  for (let i = 0; i < slots; i++) {
    children.push({ x: childX, y: slots === 1 ? bandCenter : startY + i * stepPct });
  }
  return { parent, origin: { x: 31, y: 40 }, blurb: { x: 27, y: 61 }, children, narrow: false };
}
function drillLayoutTopRow(slots, w, h) {
  const requiredRowPx = slots * CHILD_CARD_W_PX + (slots - 1) * ROW_GAP_PX + DRILL_SIDE_SAFE_PX * 2;
  const requiredVerticalPx = DRILL_TOP_SAFE_PX + PARENT_CARD_H_PX + GAP_AFTER_PARENT_PX + BLURB_H_PX + GAP_AFTER_BLURB_PX + CHILD_CARD_H_PX + DRILL_BOTTOM_SAFE_PX;
  const narrow = w <= 760 || w < requiredRowPx || h < requiredVerticalPx;
  if (narrow) {
    return { parent: null, origin: null, blurb: null, children: [], narrow: true };
  }
  const parentY = (DRILL_TOP_SAFE_PX + PARENT_CARD_H_PX / 2) / h * 100;
  const parentBottomPx = DRILL_TOP_SAFE_PX + PARENT_CARD_H_PX;
  const blurbY = (parentBottomPx + GAP_AFTER_PARENT_PX) / h * 100;
  const rowY = (h - DRILL_BOTTOM_SAFE_PX - CHILD_CARD_H_PX / 2) / h * 100;
  const totalRowWidthPx = slots * CHILD_CARD_W_PX + (slots - 1) * ROW_GAP_PX;
  const firstCenterPx = (w - totalRowWidthPx) / 2 + CHILD_CARD_W_PX / 2;
  const stepXPx = CHILD_CARD_W_PX + ROW_GAP_PX;
  const children = [];
  for (let i = 0; i < slots; i++) {
    children.push({ x: (firstCenterPx + i * stepXPx) / w * 100, y: rowY });
  }
  return {
    parent: { x: 50, y: parentY },
    origin: { x: 50, y: parentY + PARENT_CARD_H_PX / 2 / h * 100 },
    blurb: { x: 50, y: blurbY },
    children,
    narrow: false
  };
}
function spokeChildren(spoke) {
  return window.spokeProjects(spoke).map((p) => ({ type: "project", data: p, key: "p-" + p.id }));
}
function Branches({ pos, activeIdx, layout, drill, drillOrigin, drillChildren }) {
  const { center, nodes } = pos;
  const showRings = layout !== "tree" && !drill;
  return /* @__PURE__ */ React.createElement("svg", { className: "mm-svg", viewBox: "0 0 100 100", preserveAspectRatio: "none" }, showRings && [16, 27].map(
    (r) => /* @__PURE__ */ React.createElement("ellipse", { key: r, className: "mm-ring", cx: center.x, cy: center.y, rx: r, ry: r * 0.92 })
  ), nodes.map((n, i) => {
    let cls = "mm-branch";
    if (drill) cls += " hide";
    else if (activeIdx === i) cls += " on";
    else if (activeIdx != null) cls += " off";
    return /* @__PURE__ */ React.createElement("line", { key: i, className: cls, x1: center.x, y1: center.y, x2: n.x, y2: n.y });
  }), drill && drillChildren && drillChildren.map(
    (c, i) => /* @__PURE__ */ React.createElement("line", { key: "c" + i, className: "mm-childbranch", x1: drillOrigin.x, y1: drillOrigin.y, x2: c.x, y2: c.y })
  ));
}
function CenterNode({ pos, dim, hidden, onAbout }) {
  const P = window.PROFILE;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "mm-center" + (dim ? " dim" : "") + (hidden ? " hidden" : ""),
      style: { left: pos.center.x + "%", top: pos.center.y + "%", gap: "24px" },
      onClick: (e) => {
        e.stopPropagation();
        onAbout();
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onAbout();
        }
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "mm-photo-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "mm-photo-ring" }), /* @__PURE__ */ React.createElement("img", { className: "mm-photo", src: "assets/headshot.png", alt: P.name }), /* @__PURE__ */ React.createElement("span", { className: "mm-photo-cta" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "user" }), "About me")),
    /* @__PURE__ */ React.createElement("div", { className: "mm-center-name", style: { backgroundColor: "#FFFFFF", padding: "12px", borderRadius: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { backgroundColor: "#FFFFFF", borderRadius: "4px" } }, /* @__PURE__ */ React.createElement("b", null, P.name), " ", P.role))
  );
}
function SpokeNode({ spoke, style, state, onClick, staticFlow }) {
  const pc = spoke.projectIds.length;
  const meta = pc > 0 ? `${pc} project${pc > 1 ? "s" : ""}` : "In progress";
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "mm-node" + (staticFlow ? " static" : "") + (state === "active" ? " active" : "") + (state === "dim" ? " dim" : "") + (state === "hidden" ? " hidden" : ""),
      style,
      onClick: (e) => {
        e.stopPropagation();
        onClick();
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "mm-node-ico" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": spoke.icon })),
    /* @__PURE__ */ React.createElement("h3", null, spoke.label, /* @__PURE__ */ React.createElement("span", { className: "mm-node-sub" }, spoke.sub)),
    /* @__PURE__ */ React.createElement("div", { className: "mm-node-meta" }, /* @__PURE__ */ React.createElement("span", { className: "dotb" }), meta)
  );
}
function ChildNode({ child, style, onOpenProject, staticFlow }) {
  if (child.type === "project") {
    const p = child.data;
    return /* @__PURE__ */ React.createElement("div", { className: "mm-child" + (staticFlow ? " static" : ""), style }, /* @__PURE__ */ React.createElement("button", { className: "mm-cproj", onClick: (e2) => {
      e2.stopPropagation();
      onOpenProject(p);
    } }, /* @__PURE__ */ React.createElement("div", { className: "mm-cproj-thumb" }, p.image ? /* @__PURE__ */ React.createElement("img", { src: p.image, alt: p.title }) : /* @__PURE__ */ React.createElement("span", { className: "ph" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": p.thumbIcon || "folder" })), /* @__PURE__ */ React.createElement("span", { className: "tag" }, p.tag)), /* @__PURE__ */ React.createElement("div", { className: "mm-cproj-body" }, /* @__PURE__ */ React.createElement("div", { className: "ttl" }, p.title), /* @__PURE__ */ React.createElement("span", { className: "lnk" }, "View case study ", /* @__PURE__ */ React.createElement("span", { className: "arw" }, "\u2192")))));
  }
  const e = child.data;
  return /* @__PURE__ */ React.createElement("div", { className: "mm-child" + (staticFlow ? " static" : ""), style }, /* @__PURE__ */ React.createElement("div", { className: "mm-cexp" }, /* @__PURE__ */ React.createElement("div", { className: "type" }, /* @__PURE__ */ React.createElement("span", { className: "eico" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": e.icon })), "Focus area"), /* @__PURE__ */ React.createElement("div", { className: "nm" }, e.h)));
}
function ExpansionContent({ spoke, onOpenProject, onClose }) {
  const projects = window.spokeProjects(spoke);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mm-panel-hd", "data-comment-anchor": "6471c1c062-div-240-7" }, /* @__PURE__ */ React.createElement("div", { className: "ico" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": spoke.icon })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, spoke.label), /* @__PURE__ */ React.createElement("div", { className: "sub" }, spoke.sub)), /* @__PURE__ */ React.createElement("button", { className: "mm-x", "aria-label": "Close", onClick: onClose }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "x" }))), /* @__PURE__ */ React.createElement("p", { className: "mm-blurb" }, spoke.blurb), projects.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mm-sublabel" }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("b", null, projects.length > 1 ? "Case studies" : "Case study")), projects.map(
    (p) => /* @__PURE__ */ React.createElement("button", { key: p.id, className: "mm-proj", onClick: () => onOpenProject(p) }, /* @__PURE__ */ React.createElement("div", { className: "mm-proj-thumb" }, p.image ? /* @__PURE__ */ React.createElement("img", { src: p.image, alt: p.title }) : /* @__PURE__ */ React.createElement("i", { "data-lucide": p.thumbIcon || "folder", style: { width: 22, height: 22, color: "var(--accent)" } })), /* @__PURE__ */ React.createElement("div", { className: "mm-proj-body" }, /* @__PURE__ */ React.createElement("span", { className: "mm-proj-tag" }, p.tag), /* @__PURE__ */ React.createElement("div", { className: "mm-proj-title" }, p.title), /* @__PURE__ */ React.createElement("span", { className: "mm-proj-link" }, "View case study ", /* @__PURE__ */ React.createElement("span", { className: "arw" }, "\u2192"))))
  )), /* @__PURE__ */ React.createElement("div", { className: "mm-sublabel" }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("b", null, "Focus areas")), /* @__PURE__ */ React.createElement("div", null, spoke.expertise.map((name) => {
    const e = window.expertiseByName(name);
    return /* @__PURE__ */ React.createElement("div", { key: name, className: "mm-exp" }, /* @__PURE__ */ React.createElement("div", { className: "eico" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": e.icon })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mm-exp-h" }, e.h), e.p && /* @__PURE__ */ React.createElement("div", { className: "mm-exp-p" }, e.p)));
  })));
}
function useViewportSize() {
  const get = () => ({
    w: typeof window !== "undefined" ? window.innerWidth : 1200,
    h: typeof window !== "undefined" ? window.innerHeight : 800
  });
  const [size, setSize] = React.useState(get);
  React.useEffect(() => {
    const on = () => setSize(get());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return size;
}
function MindMap({ layout, reveal, onAbout }) {
  const [active, setActive] = React.useState(null);
  const [project, setProject] = React.useState(null);
  const { w: width, h: height } = useViewportSize();
  const pos = layoutPositions(layout);
  const spokes = window.SPOKES;
  const activeIdx = active ? spokes.findIndex((s) => s.id === active) : null;
  const activeSpoke = activeIdx != null && activeIdx >= 0 ? spokes[activeIdx] : null;
  const mode = !activeSpoke ? "overview" : reveal === "expand" ? "expand" : "panel";
  const drilling = mode === "expand";
  const children = drilling ? spokeChildren(activeSpoke) : [];
  const dl = drilling ? drillLayout(children.length, width, height) : null;
  const narrowDrill = drilling && dl.narrow;
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [layout, reveal, active, project, width]);
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActive(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  React.useEffect(() => {
    setActive(null);
  }, [layout, reveal]);
  const close = () => setActive(null);
  return /* @__PURE__ */ React.createElement("div", { className: "mm-stage", onClick: close }, /* @__PURE__ */ React.createElement("style", null, MM_CSS), drilling ? /* @__PURE__ */ React.createElement("button", { className: "mm-back", onClick: (e) => {
    e.stopPropagation();
    close();
  } }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "arrow-left" }), " All areas") : /* @__PURE__ */ React.createElement("div", { className: "mm-head" }, /* @__PURE__ */ React.createElement("div", { className: "wm" }, window.PROFILE.name, /* @__PURE__ */ React.createElement("i", null, ".")), /* @__PURE__ */ React.createElement("div", { className: "ov" }, "Product Designer \xB7 Portfolio")), /* @__PURE__ */ React.createElement(
    Branches,
    {
      pos,
      activeIdx: activeIdx != null && activeIdx >= 0 ? activeIdx : null,
      layout,
      drill: drilling,
      drillOrigin: !narrowDrill && dl ? dl.origin : null,
      drillChildren: !narrowDrill && dl ? dl.children : null
    }
  ), /* @__PURE__ */ React.createElement(CenterNode, { pos, dim: mode === "panel", hidden: mode === "expand", onAbout }), !narrowDrill && spokes.map((s, i) => {
    const n = pos.nodes[i];
    let state = "idle";
    if (mode !== "overview") state = s.id === active ? "active" : mode === "expand" ? "hidden" : "dim";
    const style = mode === "expand" && s.id === active ? { left: dl.parent.x + "%", top: dl.parent.y + "%" } : { left: n.x + "%", top: n.y + "%" };
    return /* @__PURE__ */ React.createElement(
      SpokeNode,
      {
        key: s.id,
        spoke: s,
        state,
        style,
        onClick: () => setActive(active === s.id ? null : s.id)
      }
    );
  }), activeSpoke && /* @__PURE__ */ React.createElement("div", { className: "mm-catcher" + (reveal === "panel" ? " scrim" : ""), onClick: close }), drilling && !narrowDrill && dl.blurb && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "mm-drill-blurb",
      style: { left: dl.blurb.x + "%", top: dl.blurb.y + "%" }
    },
    /* @__PURE__ */ React.createElement("div", { className: "lead" }, "In this area"),
    /* @__PURE__ */ React.createElement("p", null, activeSpoke.blurb)
  ), drilling && !narrowDrill && children.length > 0 && children.map(
    (c, i) => /* @__PURE__ */ React.createElement(
      ChildNode,
      {
        key: c.key,
        child: c,
        onOpenProject: setProject,
        style: { left: dl.children[i].x + "%", top: dl.children[i].y + "%" }
      }
    )
  ), drilling && !narrowDrill && children.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "mm-child", style: { left: dl.children[0].x + "%", top: dl.children[0].y + "%" } }, /* @__PURE__ */ React.createElement("div", { className: "mm-cempty" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "sparkles" }), /* @__PURE__ */ React.createElement("div", { className: "et" }, "Work in progress"), /* @__PURE__ */ React.createElement("p", null, "New case studies in this area are on the way. Open ", /* @__PURE__ */ React.createElement("b", null, "About me"), " for the full picture."))), narrowDrill && /* @__PURE__ */ React.createElement("div", { className: "mm-drill-narrow", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement(SpokeNode, { spoke: activeSpoke, state: "active", staticFlow: true, onClick: () => {
  } }), /* @__PURE__ */ React.createElement("div", { className: "mm-drill-blurb narrow static" }, /* @__PURE__ */ React.createElement("div", { className: "lead" }, "In this area"), /* @__PURE__ */ React.createElement("p", null, activeSpoke.blurb)), children.length > 0 ? children.map(
    (c) => /* @__PURE__ */ React.createElement(React.Fragment, { key: c.key }, /* @__PURE__ */ React.createElement("span", { className: "mm-drill-connector", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement(ChildNode, { child: c, onOpenProject: setProject, staticFlow: true }))
  ) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "mm-drill-connector", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("div", { className: "mm-cempty static" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "sparkles" }), /* @__PURE__ */ React.createElement("div", { className: "et" }, "Work in progress"), /* @__PURE__ */ React.createElement("p", null, "New case studies in this area are on the way. Open ", /* @__PURE__ */ React.createElement("b", null, "About me"), " for the full picture.")))), mode === "panel" && /* @__PURE__ */ React.createElement("div", { className: "mm-side", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement(ExpansionContent, { spoke: activeSpoke, onOpenProject: setProject, onClose: close })), window.ProjectModal && /* @__PURE__ */ React.createElement(window.ProjectModal, { p: project, onClose: () => setProject(null) }));
}
Object.assign(window, { MindMap });

})();

/* ---- components/AboutPanel.jsx ---- */
(function () {
const AB_CSS = `
  .ab-overlay{position:fixed;inset:0;z-index:120;background:rgba(26,31,36,.55);
    display:flex;justify-content:center;padding:40px 24px;overflow-y:auto;
    font-family:var(--font-body);animation:ab-fade .25s ease both;}
  @keyframes ab-fade{from{opacity:0;}to{opacity:1;}}
  .ab-sheet{position:relative;background:#fff;border-radius:18px;max-width:920px;width:100%;
    margin:auto;box-shadow:var(--shadow-xl);overflow:hidden;
    animation:ab-rise .3s cubic-bezier(.3,.7,.4,1) both;}
  @keyframes ab-rise{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}
  .ab-x{position:absolute;top:20px;right:20px;z-index:3;appearance:none;border:none;
    background:rgba(255,255,255,.92);width:40px;height:40px;border-radius:999px;cursor:pointer;
    display:flex;align-items:center;justify-content:center;color:var(--color-navy);
    box-shadow:var(--shadow-sm);transition:background .2s ease;}
  .ab-x:hover{background:var(--color-cloud);}
  .ab-x svg{width:20px;height:20px;}

  .ab-hero{display:flex;gap:28px;align-items:center;padding:44px 44px 36px;
    background:var(--color-pale-blue);border-bottom:1px solid var(--color-silver);}
  .ab-hero img{width:132px;height:132px;border-radius:16px;object-fit:cover;flex-shrink:0;
    box-shadow:var(--shadow-md);}
  .ab-hero .ov{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);
    font-weight:600;}
  .ab-hero h2{margin:8px 0 0;font-family:var(--font-heading);font-weight:700;font-size:28px;
    color:var(--color-navy);letter-spacing:-.01em;}
  .ab-hero .role{font-size:15px;color:var(--color-slate);margin-top:4px;}
  .ab-spec{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;}
  .ab-spec span{background:#fff;border:1px solid var(--color-silver);border-radius:999px;
    padding:5px 12px;font-size:12px;color:var(--color-slate);font-weight:500;}

  .ab-body{padding:40px 44px 44px;}
  .ab-sec + .ab-sec{margin-top:40px;}
  .ab-lbl{display:flex;align-items:center;gap:12px;margin-bottom:18px;}
  .ab-lbl b{font-family:var(--font-heading);font-weight:700;font-size:20px;letter-spacing:-.01em;
    text-transform:none;color:var(--color-navy);}
  .ab-p{font-size:15.5px;line-height:1.8;color:var(--color-graphite);margin:0 0 16px;max-width:64ch;}

  .ab-exp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  .ab-exp{background:var(--color-cloud);border:1px solid var(--color-silver);border-radius:12px;
    padding:18px 20px;}
  .ab-exp .eico{width:38px;height:38px;border-radius:10px;background:#fff;
    border:1px solid var(--color-silver);color:var(--accent);display:flex;align-items:center;
    justify-content:center;margin-bottom:12px;}
  .ab-exp .eico svg{width:20px;height:20px;}
  .ab-exp h4{margin:0 0 6px;font-family:var(--font-heading);font-weight:600;font-size:15px;
    color:var(--color-navy);line-height:1.3;}
  .ab-exp p{margin:0;font-size:13px;line-height:1.6;color:var(--color-graphite);}

  .ab-skills{display:flex;flex-direction:column;gap:20px;}
  .ab-skill-h{font-family:var(--font-heading);font-weight:600;font-size:13.5px;color:var(--color-slate);
    margin-bottom:10px;}
  .ab-pills{display:flex;flex-wrap:wrap;gap:9px;}
  .ab-pill{background:var(--color-pale-blue);color:var(--color-slate);font-weight:500;font-size:13px;
    border-radius:999px;padding:7px 14px;}

  .ab-timeline{position:relative;padding-left:26px;}
  .ab-timeline::before{content:"";position:absolute;left:6px;top:6px;bottom:10px;width:2px;
    background:var(--color-silver);}
  .ab-company{margin-bottom:6px;}
  .ab-company h4{margin:0;font-family:var(--font-heading);font-weight:600;font-size:17px;
    color:var(--color-navy);}
  .ab-company .meta{font-size:12.5px;color:var(--color-stone-aa);margin-top:3px;}
  .ab-role{position:relative;padding:14px 0 4px 0;}
  .ab-role::before{content:"";position:absolute;left:-26px;top:19px;width:12px;height:12px;
    border-radius:999px;background:#fff;border:2px solid var(--color-silver);}
  .ab-role.current::before{background:var(--accent);border-color:var(--accent);
    box-shadow:0 0 0 4px var(--color-pale-green);}
  .ab-role h5{margin:0;font-family:var(--font-heading);font-weight:600;font-size:15px;
    color:var(--color-charcoal);}
  .ab-role .per{font-size:12.5px;color:var(--accent);font-weight:500;margin-top:3px;}
  .ab-role .sk{font-size:12.5px;color:var(--color-graphite);margin-top:5px;}

  .ab-contact{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  .ab-ch{display:flex;align-items:center;gap:14px;background:var(--color-cloud);
    border:1px solid var(--color-silver);border-radius:12px;padding:14px 16px;
    text-decoration:none;color:var(--color-navy);transition:border-color .2s ease,transform .2s ease;}
  .ab-ch:hover{border-color:var(--accent);transform:translateY(-2px);}
  .ab-ch .ciw{width:40px;height:40px;border-radius:10px;background:var(--color-pale-blue);
    color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .ab-ch .ciw svg{width:18px;height:18px;}
  .ab-ch .cl{display:block;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--color-stone-aa);
    font-weight:500;}
  .ab-ch .cv{display:block;font-size:13.5px;color:var(--color-navy);margin-top:6px;word-break:break-all;}

  @media (max-width:720px){
    .ab-hero{flex-direction:column;text-align:center;padding:36px 24px 28px;}
    .ab-spec{justify-content:center;}
    .ab-body{padding:30px 24px 36px;}
    .ab-exp-grid,.ab-contact{grid-template-columns:1fr;}
  }
`;
function AboutPanel({ open, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    if (window.lucide) window.lucide.createIcons();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  const P = window.PROFILE;
  return /* @__PURE__ */ React.createElement("div", { className: "ab-overlay", onClick: onClose }, /* @__PURE__ */ React.createElement("style", null, AB_CSS), /* @__PURE__ */ React.createElement("div", { className: "ab-sheet", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "ab-x", "aria-label": "Close", onClick: onClose }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "x" })), /* @__PURE__ */ React.createElement("div", { className: "ab-hero" }, /* @__PURE__ */ React.createElement("img", { src: "assets/headshot.png", alt: P.name }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "ov" }, "About me"), /* @__PURE__ */ React.createElement("h2", null, P.name), /* @__PURE__ */ React.createElement("div", { className: "role" }, P.role, " \xB7 ", P.location), /* @__PURE__ */ React.createElement("div", { className: "ab-spec" }, P.specialties.map((s) => /* @__PURE__ */ React.createElement("span", { key: s }, s))))), /* @__PURE__ */ React.createElement("div", { className: "ab-body" }, /* @__PURE__ */ React.createElement("section", { className: "ab-sec" }, /* @__PURE__ */ React.createElement("div", { className: "ab-lbl" }, /* @__PURE__ */ React.createElement("b", null, "How I work")), /* @__PURE__ */ React.createElement("p", { className: "ab-p" }, "I'm a product design leader specialized in complex systems \u2014 financial workflows, payments, registration, and accessible platforms at scale. My favorite problems sit where legacy constraints, real data, and human needs collide, and my job is to make the result feel clear, accurate, and trustworthy."), /* @__PURE__ */ React.createElement("p", { className: "ab-p" }, "I work end to end and beyond the interface: research and flow mapping, design systems and accessibility, SQL and API alignment, prototyping in code, and the project management that keeps non-technical and engineering teams moving together. Increasingly, that means reshaping how design and delivery happen with AI \u2014 without losing rigor.")), /* @__PURE__ */ React.createElement("section", { className: "ab-sec" }, /* @__PURE__ */ React.createElement("div", { className: "ab-lbl" }, /* @__PURE__ */ React.createElement("b", null, "Expertise")), /* @__PURE__ */ React.createElement("div", { className: "ab-exp-grid" }, window.EXPERTISE.map((e) => /* @__PURE__ */ React.createElement("div", { key: e.h, className: "ab-exp" }, /* @__PURE__ */ React.createElement("div", { className: "eico" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": e.icon })), /* @__PURE__ */ React.createElement("h4", null, e.h), /* @__PURE__ */ React.createElement("p", null, e.p))))), /* @__PURE__ */ React.createElement("section", { className: "ab-sec" }, /* @__PURE__ */ React.createElement("div", { className: "ab-lbl" }, /* @__PURE__ */ React.createElement("b", null, "Skills")), /* @__PURE__ */ React.createElement("div", { className: "ab-skills" }, window.SKILLS.map((g) => /* @__PURE__ */ React.createElement("div", { key: g.h }, /* @__PURE__ */ React.createElement("div", { className: "ab-skill-h" }, g.h), /* @__PURE__ */ React.createElement("div", { className: "ab-pills" }, g.items.map((s) => /* @__PURE__ */ React.createElement("span", { key: s, className: "ab-pill" }, s))))))), /* @__PURE__ */ React.createElement("section", { className: "ab-sec" }, /* @__PURE__ */ React.createElement("div", { className: "ab-lbl" }, /* @__PURE__ */ React.createElement("b", null, "Experience")), window.CAREER.map((c) => /* @__PURE__ */ React.createElement("div", { key: c.company, className: "ab-timeline" }, /* @__PURE__ */ React.createElement("div", { className: "ab-company" }, /* @__PURE__ */ React.createElement("h4", null, c.company), /* @__PURE__ */ React.createElement("div", { className: "meta" }, c.location, " \xB7 ", c.span)), c.roles.map((r) => /* @__PURE__ */ React.createElement("div", { key: r.title, className: "ab-role" + (r.current ? " current" : "") }, /* @__PURE__ */ React.createElement("h5", null, r.title), /* @__PURE__ */ React.createElement("div", { className: "per" }, r.period), /* @__PURE__ */ React.createElement("div", { className: "sk" }, r.skills)))))), /* @__PURE__ */ React.createElement("section", { className: "ab-sec" }, /* @__PURE__ */ React.createElement("div", { className: "ab-lbl" }, /* @__PURE__ */ React.createElement("b", null, "Get in touch")), /* @__PURE__ */ React.createElement("div", { className: "ab-contact" }, /* @__PURE__ */ React.createElement("a", { className: "ab-ch", href: `mailto:${P.email}` }, /* @__PURE__ */ React.createElement("span", { className: "ciw" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "mail" })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "cl" }, "Email"), /* @__PURE__ */ React.createElement("span", { className: "cv" }, P.email))), /* @__PURE__ */ React.createElement("a", { className: "ab-ch", href: P.linkedinUrl, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("span", { className: "ciw" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "linkedin" })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "cl" }, "LinkedIn"), /* @__PURE__ */ React.createElement("span", { className: "cv" }, P.linkedin))), /* @__PURE__ */ React.createElement("div", { className: "ab-ch", style: { cursor: "default" } }, /* @__PURE__ */ React.createElement("span", { className: "ciw" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "map-pin" })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "cl" }, "Location"), /* @__PURE__ */ React.createElement("span", { className: "cv" }, P.location))), /* @__PURE__ */ React.createElement("div", { className: "ab-ch", style: { cursor: "default" } }, /* @__PURE__ */ React.createElement("span", { className: "ciw" }, /* @__PURE__ */ React.createElement("i", { "data-lucide": "briefcase" })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "cl" }, "Currently"), /* @__PURE__ */ React.createElement("span", { className: "cv" }, "Product Designer, AI Transformation Lead"))))))));
}
Object.assign(window, { AboutPanel });

})();

/* ---- src/app.jsx ---- */
(function () {
function App() {
  const [aboutOpen, setAboutOpen] = React.useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MindMap, { layout: "radial", reveal: "expand", onAbout: () => setAboutOpen(true) }), /* @__PURE__ */ React.createElement(AboutPanel, { open: aboutOpen, onClose: () => setAboutOpen(false) }));
}
ReactDOM.createRoot(document.getElementById("app")).render(/* @__PURE__ */ React.createElement(App, null));

})();
