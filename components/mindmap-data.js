/* mindmap-data.js, spoke grouping + career history for the mind-map portfolio.
   Reuses window.PROFILE / PROJECTS / EXPERTISE / SKILLS from data.js. */

// Five recruiter-friendly spokes that organize the portfolio around product
// strength areas and keep personal exploration in the same product story.
window.SPOKES = [
  {
    id: 'financial',
    label: 'Financial Systems',
    sub: 'Trust, accuracy & billing',
    icon: 'landmark',
    blurb: 'Statements, reconciliation, donations, and refunds, where accuracy, traceability, and reversibility are what build trust.',
    projectIds: ['merchant-statements', 'fundraising-payments'],
    expertise: ['Financial Systems & Payments'],
  },
  {
    id: 'registration',
    label: 'High-Stakes Journeys',
    sub: 'Registration & security',
    icon: 'gauge',
    blurb: 'High-volume, time-sensitive journeys, queueing, registration, and security recovery, kept calm and usable under pressure.',
    projectIds: ['queueing-system', 'registration-mobile', 'waitlist-decision', 'auth-security'],
    expertise: ['Performance & High-Stakes UX'],
  },
  {
    id: 'systems',
    label: 'Operational Workflows',
    sub: 'Client tools & staff operations',
    icon: 'megaphone',
    blurb: 'The tools our clients rely on to manage hiring, communications, and service operations, clear, legible, and built for real workload.',
    projectIds: ['forms-strategy', 'outbox'],
    expertise: ['Client Communication & Workflow Tooling'],
  },
  {
    id: 'platform',
    label: 'Product Platforms',
    sub: 'Design systems & leadership',
    icon: 'layout-grid',
    blurb: 'Design systems, AI adoption, and research infrastructure, creating clarity, consistency, and a better delivery rhythm across product teams.',
    projectIds: ['design-system', 'ai-leadership', 'research-documentation'],
    expertise: ['AI Transformation Leadership', 'Accessible Design Systems', 'Research, Analysis & Documentation'],
  },
  {
    id: 'personal',
    label: 'Personal Projects',
    sub: 'Product exploration',
    icon: 'rocket',
    blurb: 'Side projects that let me prototype product ideas quickly, focus on user value, and explore problems beyond the day job.',
    projectIds: ['volleyball-lineup-planner'],
    expertise: ['Product Design', 'Interaction Design', 'Prototyping'],
  },
];

// Look up a full expertise record by its heading.
window.expertiseByName = function (name) {
  return (window.EXPERTISE || []).find((e) => e.h === name) || { h: name, p: '', icon: 'dot' };
};

// Resolve a spoke's projects into full project records.
window.spokeProjects = function (spoke) {
  const by = {};
  (window.PROJECTS || []).forEach((p) => { by[p.id] = p; });
  return (spoke.projectIds || []).map((id) => by[id]).filter(Boolean);
};

// Career history (from Annabelle's résumé).
window.CAREER = [
  {
    company: 'CampBrain',
    location: 'Toronto, Ontario, Canada',
    span: 'Permanent · Full-time · 3 yrs 11 mos',
    roles: [
      {
        title: 'Product Designer, AI Transformation Lead',
        period: 'Mar 2025 – Present · 1 yr 5 mos',
        skills: 'Product Design · Information Architecture · AI Transformation · Prototyping',
        current: true,
      },
      {
        title: 'Senior Data Specialist',
        period: 'Jun 2024 – Apr 2025 · 11 mos',
        skills: 'Data Analysis · Technical Communication · SQL Querying · Project Management',
      },
      {
        title: 'Software & Data Specialist',
        period: 'Sep 2022 – Jun 2024 · 1 yr 10 mos',
        skills: 'Technical Communication · B2B2C · API Integration · Journey & Flow Mapping',
      },
    ],
  },
];
