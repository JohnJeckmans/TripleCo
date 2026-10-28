// English texts for the whole site. nl.ts and de.ts must contain exactly the same keys.
// To add a line to a list (e.g. experience.roles), add it in all three files.
// Content source: LinkedIn profile (October 2026).
export const en = {
  titles: {
    home: 'John Jeckmans | Board Advisor | TripleCo',
  },
  language: {
    choose: 'Choose language',
  },
  nav: {
    menu: 'Menu',
    home: 'Home',
    about: 'Approach',
    services: 'Services',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    photoAlt: 'Portrait of John Jeckmans',
    headline: 'Board Advisor\u00A0· International Industrial Leader', // \u00A0 keeps "·" off the start of a line
    focus: 'Strategy, Transformation & Growth',
    location: 'Twente, the Netherlands · active across Europe',
    emailMe: 'Email me',
    linkedin: 'LinkedIn',
    saveContact: 'Save contact',
  },
  approach: {
    title: 'Approach',
    paragraphs: [
      'I bring international leadership experience across industrial, energy and technology-driven environments, with a focus on strategy, transformation and sustainable growth.',
      'I am particularly effective where organisations face strategic complexity, changing market conditions, stalled growth, or the need to align leadership, operations and long-term direction.',
      'Through TripleCo, I support boards, owners and leadership teams who need experienced judgement on growth, transformation, governance and strategic direction.',
    ],
    quote: 'Clarity over complexity, substance over rhetoric, results over presentation.',
  },
  services: {
    title: 'How I help',
    intro: 'Connecting long-term direction with practical execution and sustainable performance improvement.',
    items: [
      {
        title: 'Board advisory & governance',
        text: 'Experienced judgement on strategic direction, decision quality and accountability, built on board and venture-capital roles.',
      },
      {
        title: 'Strategy & transformation',
        text: 'Turnaround, repositioning and change: translating strategic ambition into structured execution.',
      },
      {
        title: 'Growth & business development',
        text: 'International business development, alliances and the commercialisation of new technology.',
      },
      {
        title: 'Leadership alignment',
        text: 'Aligning leadership, operations and stakeholders across organisations, disciplines and countries.',
      },
    ],
  },
  experience: {
    title: 'Experience',
    roles: [
      {
        role: 'International Project Director',
        org: 'KMTC Technologies Holding GmbH',
        period: '2022 – present',
        place: 'Fellbach, Germany',
        text: 'Leading international technology and industrial development programmes, including the Vortifer propulsion programme with academic and industrial partners.',
      },
      {
        role: 'Founder & Owner',
        org: 'TripleCo',
        period: '2004 – present',
        place: 'Europe',
        text: 'Independent platform for strategic advisory, business development and transformation support in industrial and growth-oriented environments.',
      },
      {
        role: 'Regional Director',
        org: 'The Alpha Group International',
        period: '2014 – 2021',
        place: 'Netherlands, Belgium, Luxembourg, Germany',
        text: 'Led peer advisory groups of CEOs and business owners on scaling, profitability, leadership alignment and business direction.',
      },
      {
        role: 'Partner',
        org: 'Dutch Executive Search',
        period: '2011 – 2018',
        place: 'Netherlands',
        text: 'Recruitment of senior executives, with a focus on leadership assessment, succession and executive fit.',
      },
      {
        role: 'CEO',
        org: 'LEIDS BV',
        period: '2011 – 2014',
        place: 'Enschede, Netherlands',
        text: 'Professional LED lighting solutions: strategic direction, commercial development and technology commercialisation.',
      },
      {
        role: 'CEO',
        org: 'EVU Anlagenbau International GmbH',
        period: '2006 – 2012',
        place: 'Gröditz, Germany',
        text: 'International engineering company in water treatment, renewable energy and environmental systems.',
      },
    ],
    boardTitle: 'Board roles',
    boards: [
      { role: 'Board Treasurer', org: 'Smart Energy & Technology Systems (SETS)', period: '2012 – 2014' },
      { role: 'Board Member', org: 'Stichting PPM Stimulans (venture capital)', period: '2002 – 2011' },
    ],
    sectorsTitle: 'Sectors',
    sectors: ['Energy', 'Water', 'Environmental systems', 'Manufacturing', 'Technology ventures', 'Maritime'],
  },
  education: {
    title: 'Education',
    items: [
      { degree: 'MBA, Technology Management', school: 'TSM Business School', period: '1999 – 2001' },
      { degree: "BSc Ship's Engineering", school: 'Amsterdam University of Applied Sciences', period: '1975 – 1979' },
      { degree: 'Executive Coaching, Business Development Programme', school: 'IIB', period: '2009' },
    ],
  },
  contact: {
    title: 'Contact',
    text: "Need things set in motion? Let's talk.",
    email: 'Email',
    saveContactHint: 'Adds my details to your phone or address book.',
    follow: 'Follow me',
  },
};

/** The shape every language file must follow (same keys as English). */
export type Translations = typeof en;
