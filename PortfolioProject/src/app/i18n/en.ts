// English texts for the whole site. nl.ts and de.ts must contain exactly the same keys.
// To add a line to a list (e.g. resume.experience.items), add it in all three files.
export const en = {
  titles: {
    home: 'TripleCo Solutions',
    resume: 'John Jeckmans | TripleCo',
    engineering: 'Engineering Solutions | TripleCo',
  },
  language: {
    choose: 'Choose language',
  },
  common: {
    sendEmail: 'Click to send Email',
    location: 'Twente - Netherlands - EU',
    visitTripleCo: 'Visit TripleCo',
    about: 'About',
    experience: 'Experience',
  },
  nav: {
    menu: 'Menu',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  home: {
    title: 'Welcome to TripleCo',
    aboutTitle: 'Introduction',
    aboutImageAlt: 'Picture of me',
    tagline: 'Bringing ease in transformational changes by creating space!',
    callToAction: "Need things set in motion? Let's talk.",
    moreInfo: 'Click for more information',
    projectsTitle: 'Click to view Projects & Services',
    projects: {
      solutionsAlt: 'General Solutions',
      lightingTitle: 'Lighting by TripleCo Solutions',
      lightingAlt: 'Lighting',
      buyAtBol: 'Buy at Bol.com',
      webshopTitle: 'Webshop (under construction)',
      webshopAlt: 'Project',
      viewFesh: 'View Fesh Store',
      feshReferral: 'Referral fesh.store',
      engineeringTitle: 'Engineering Solutions',
      engineeringAlt: 'Engineering',
      viewProject: 'View Project',
    },
    businessCardsAlt: 'Business Cards',
  },
  resume: {
    skills: 'Skills',
    interests: 'Interests',
    quote: '"Bringing ease in transformational changes by creating space!"',
    intro: [
      'I have over 40 years of international experience in B2B industrial surroundings. Started with a technical foundation in operations & maintenance. Have designed, planned, built and commissioned complete production facilities. Ended up in product management, marketing & sales. Both executive as well as C-level. And started TripleCo in 2004.',
      'Have worked in and with industries like (petro-)chemicals; power generation conventional, renewable and nuclear; marine commercial and navy; automotive mechanical manufacturing, large water transport; fire fighting equipment; waste water & drinking water sector; pulp & paper',
      "From 2004, my aim is predominantly on assisting technical start-ups, SME's, both local, national and international.",
    ],
    experience: {
      title: 'Business Change Catalyst & Executioner',
      items: [
        'Executive & Organisational Coaching, based on the so-called Organisational Development Approach.',
        'Growth Financing.',
        'Strategic Consulting, including business plan development, marketing & sales strategy development.',
        '(New) business development, alliances both horizontal as well as vertical.',
        'Training, Coaching & counseling of individuals & teams.',
        'Change management & processes.',
        'ERP implementation.',
        'Data driven process valuations.',
        'Visualisation.',
        'Pain in the *ss, if need be.',
        'Start-up business development',
        'All via a very practical, down to earth, hands-on implementation. An active partner in a network of self-employed professionals in the same line of business.',
      ],
    },
    projectsTitle: 'Project (selection)',
    projects: [
      'Data visualisation and BI Dashboard development',
      'Business Development for programmable & intelligent professional LED lighting systems',
      'Strategic Procurement Department (corporate NL)',
      'Merger process consultation (renewable energy sector), management & control systems (finance, QA&QC) (Germany)',
      'Customerside ERP Implementation; strategy to processes, data cleansing, building a product configurator, (transfer) pricing, technical sales manuals, ISO 9000 system, complaint management, migration of financials, CRM application',
      'Divestment of a family owned/run SME (two owners)',
      'Reorganisation company processes, coaching of staff and owner, project/contract management equipment supplies food, offshore.',
      'Innovation Adviser Syntens in built environment (sustainability, collaboration in supply chain, coaching)',
      'Inventory and development plan change project electronics manufacturer(Taiwan).',
    ],
    interestItems: [
      'Getting to know more independent professionals worldwide, but at least in Netherlands, Germany.',
      'Everything related to new innovations, basic research for a sustainable future of all.',
    ],
  },
  engineering: {
    quote: '"Structural solutions to generate (additional) Engineering Capacity!"',
    intro: [
      'We are part of a business network "Dutch Company Doctors": specialised in change management, process development, matchmaking, outsourcing, training and co-partnerships in various fields.',
      'Thanks to our worldwide network and experiences gained over the last decennia, we are able to support you with the structural outsourcing of your engineering activities.',
    ],
    services: {
      title: 'ENGINEERING SERVICES',
      subtitle: 'Outsourcing as well as insourcing?',
      items: [
        'Combination of Engineering Solutions in a Manufacturing Environment',
        'Cost Effective',
        'Shorter Product Development Cycle.',
        'Flexible capacity, multi-shift operation',
        'Experience with PLM environment',
        'High security level - Data protection and confidentiality',
      ],
    },
    team: {
      title: 'ENGINEERING TEAM',
      items: [
        'A talent pool of 50+ qualified Engineers',
        'Qualifications: post graduate engineer, engineers and diploma engineers with multiple CAD Software skills.',
        'Software Infrastructure: Pro-E, Inventor, UG NX, Solid Works and AutoCAD with 30 workstations.',
      ],
    },
    support: {
      title: 'Our Support in the EU',
      subtitle: 'preparing & assisting your organisation',
      // The original page has three empty lines here, waiting for content.
      items: ['', '', '', 'in a very practical, down to earth, hands-on way of working.'],
    },
  },
};

/** The shape every language file must follow (same keys as English). */
export type Translations = typeof en;
