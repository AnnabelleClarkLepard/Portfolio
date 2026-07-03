/* mindmap-data.js — spoke grouping + career history for the mind-map portfolio.
   Reuses window.PROFILE / PROJECTS / EXPERTISE / SKILLS from data.js. */

// Four richer spokes that combine project categories with expertise focus.
window.SPOKES = [
  {
    id: 'financial',
    label: 'Financial Systems',
    sub: 'Payments & Billing',
    icon: 'landmark',
    blurb: 'Statements, reconciliation, donations, and refunds — where accuracy, traceability, and reversibility are what build trust.',
    projectIds: ['merchant-statements', 'fundraising-payments'],
    expertise: ['Financial Systems & Payments'],
  },
  {
    id: 'registration',
    label: 'High-Stakes UX',
    sub: 'Registration & Security',
    icon: 'gauge',
    blurb: 'High-volume, time-sensitive journeys — queueing, waitlists, and security recovery — kept calm and usable under pressure.',
    projectIds: ['queueing-system', 'registration-mobile', 'waitlist-decision', 'auth-security'],
    expertise: ['Performance & High-Stakes UX'],
  },
  {
    id: 'systems',
    label: 'Client Operations',
    sub: 'Communication & Workflow Management',
    icon: 'megaphone',
    blurb: 'The tools our clients rely on to manage hiring and communicate with the people they serve — fast, clear, and built for real workloads.',
    projectIds: ['forms-strategy', 'outbox'],
    expertise: ['Client Communication & Workflow Tooling'],
  },
  {
    id: 'practice',
    label: 'Leadership',
    sub: 'AI & Design Excellence',
    icon: 'sparkles',
    blurb: 'Reshaping how teams work and what they build on — leading AI adoption, grounding decisions in research, and raising the design bar.',
    projectIds: ['design-system', 'ai-leadership', 'research-documentation'],
    expertise: ['AI Transformation Leadership', 'Accessible Design Systems', 'Research, Analysis & Documentation'],
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
