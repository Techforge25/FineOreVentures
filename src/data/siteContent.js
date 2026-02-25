export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Platform', to: '/our-platform' },
  {
    label: 'Our Ventures',
    to: '/our-ventures',
    children: [
      { label: 'Natural Resources', to: '/our-ventures/natural-resources' },
      { label: 'Telecommunications', to: '/our-ventures/telecommunications' },
      { label: 'Digital Systems', to: '/our-ventures/digital-systems' },
      { label: 'Investment & Structuring', to: '/our-ventures/investment-structuring' },
      { label: 'Ecosystem Partners', to: '/our-ventures/ecosystem-partners' },
      { label: 'Governance', to: '/our-ventures/governance' },
    ],
  },
  { label: 'Projects', to: '/projects' },
  { label: 'Engage Us', to: '/contact-us' },
];

export const homeContent = {
  hero: {
    pretitle: 'Fine Ore Ventures',
    title: 'Building National-Scale Infrastructure Platforms.',
    description:
      'Fine Ore Ventures operates and invests in critical infrastructure - aligning with sovereign priorities while delivering disciplined execution across mining, telecommunications, and digital systems.',
    ctaPrimary: 'Engage With Us',
    ctaSecondary: 'Explore Our Platform',
  },
  heroMedia: {
    video: '/assets/VID-2nd-2.mp4',
    image: '/assets/IMG-2025062pic18-WA0113-r9hgm6jfaxllkuav48qfsd47lv0vjx1kxb0ij30rvk.jpg',
  },
  highlights: [
    {
      title: 'Natural Resources',
      text: 'Mining and mineral operations designed for long-term export reliability and HSE discipline.',
    },
    {
      title: 'Technology & AI',
      text: 'Data, automation, and AI-enabled systems that improve planning, speed, and decision quality.',
    },
    {
      title: 'Telecommunications',
      text: 'Critical connectivity layers for field operations, control centers, and executive oversight.',
    },
    {
      title: 'Marketing & Digital',
      text: 'Growth communication, campaign execution, and digital visibility for portfolio scale-up.',
    },
  ],
  mandate: {
    title: 'Our Mandate',
    text: 'We partner with governments, institutional stakeholders, and strategic vendors to stabilize assets, modernize infrastructure, and unlock long-term commercial performance.',
  },
  partners: [
    { name: 'Ericsson', logo: '/assets/logos/ericsson.png' },
    { name: 'Nokia', logo: '/assets/logos/nokia.jpg' },
    { name: 'Huawei', logo: '/assets/logos/huawei.png' },
    { name: 'ZTE', logo: '/assets/logos/zte.png' },
    { name: 'Mavenir', logo: '/assets/logos/Mavenir_New_Logo.png' },
    { name: 'Ceragon', logo: '/assets/logos/Ceragon-official-distributor.png' },
    { name: 'Parallel Wireless', logo: '/assets/logos/paralelrwireless.png' },
    { name: 'TowerCos', logo: '/assets/logos/towerco.png' },
    { name: 'Microsoft Azure', logo: '/assets/logos/azure.png' },
    { name: 'Oracle', logo: '/assets/logos/Oracle-Logo.png' },
    { name: 'SAP', logo: '/assets/logos/sap.png' },
    { name: 'Amdocs', logo: '/assets/logos/amddocs.png' },
    { name: 'Comviva', logo: '/assets/logos/comviva.png' },
    { name: 'Cisco', logo: '/assets/logos/Cisco_logo_blue_2016.svg.png' },
    { name: 'Palo Alto Networks', logo: '/assets/logos/Palo-Alto-Networks.jpg' },
    { name: 'Samsung', logo: '/assets/logos/samsung.png' },
  ],
  kdmPartners: [
    { name: 'WINNING CONSORTIUM', logo: '/assets/kdmpatrnerlogos/winingconsortium.png' },
    { name: 'WAP', logo: '/assets/kdmpatrnerlogos/wap.jpeg' },
    { name: 'ANSUN', logo: '/assets/kdmpatrnerlogos/ansun.png' },
    { name: 'Caterpillar', logo: '/assets/kdmpatrnerlogos/caterpillar.png' },
    { name: 'LOVOL', logo: '/assets/kdmpatrnerlogos/lovol.png' },
  ],
  pillars: [
    {
      title: 'Natural Resources (Mining)',
      text: 'Operational mining programs designed for export reliability, safety discipline, and long-horizon national value creation.',
      image: '/assets/pillars/naturalResourcesMining.jpg',
      to: '/our-ventures/natural-resources',
    },
    {
      title: 'Telecommunications Infrastructure',
      text: 'Structured communications and control-layer systems that strengthen uptime, field coordination, and institutional oversight.',
      image: '/assets/pillars/telecomunicationInfrastructure.jpg',
      to: '/our-ventures/telecommunications',
    },
    {
      title: 'Digital & Data Systems',
      text: 'Data architecture, automation, and intelligent dashboards that improve governance visibility and execution velocity.',
      image: '/assets/pillars/digitalanddatasystem.jpg',
      to: '/our-ventures/digital-systems',
    },
  ],
  model: {
    title: 'Our Model',
    intro:
      'Our hybrid model combines asset stabilization, institutional governance, and infrastructure modernization to create a durable path from recovery to long-term commercial scale.',
    blocks: [
      {
        title: 'Stabilization & Recovery',
        text: 'Restore operational continuity, baseline KPIs, and immediate reliability across critical assets.',
      },
      {
        title: 'Governance & Institutional Reset',
        text: 'Implement transparent oversight, controls, and reporting systems aligned with sovereign and institutional standards.',
      },
      {
        title: 'Modernization & Digital Enablement',
        text: 'Execute sequenced upgrades with digital tooling, performance visibility, and execution discipline at every phase.',
      },
      {
        title: 'Commercial Structuring & Capital Alignment',
        text: 'Design bankable growth pathways through risk-screened structuring, phased investment, and long-term value governance.',
      },
    ],
  },
  technologyEnablement: {
    title: 'Technology Enablement Layer',
    intro:
      'Beyond physical operations, Fine Ore Ventures deploys digital control layers that improve visibility, governance, and execution speed across all portfolios.',
    tracks: [
      {
        title: 'Operational Intelligence',
        text: 'Executive dashboards for production, logistics, uptime, and cross-venture performance tracking.',
      },
      {
        title: 'Risk & Compliance Systems',
        text: 'Structured reporting controls, audit trails, and milestone governance for institutional oversight.',
      },
      {
        title: 'AI-Assisted Planning',
        text: 'Forecasting and scenario analysis to support phased investment and modernization decisions.',
      },
    ],
    metrics: [
      { value: 'Real-Time', label: 'Portfolio Visibility' },
      { value: 'Control-Led', label: 'Governance Architecture' },
      { value: 'Scale-Ready', label: 'Digital Operations Backbone' },
    ],
  },
  nationalMandate: {
    title: 'National Modernization Partner',
    statement:
      'Fine Ore Ventures partners with governments to stabilize strategic assets, modernize infrastructure systems, and build institutional capacity aligned with national development objectives.',
    points: [
      'Economic resilience and domestic value retention',
      'Infrastructure reliability and service continuity',
      'Institutional governance and transparent reporting',
      'Long-term local capability development',
    ],
  },
  sliderImages: [
    '/assets/IMG-2025062pic18-WA0113-r9hgm6jfaxllkuav48qfsd47lv0vjx1kxb0ij30rvk.jpg',
    '/assets/IMG-20250616-WA0019.jpg',
    '/assets/IMG-20250628-WA0097.jpg',
  ],
  banner: {
    text: 'Integrated Ventures. Institutional Discipline. Regional Impact.',
    image: '/assets/IMG-20250628-WA0036.jpg',
  },
  milestones: {
    title: 'Group Evolution',
    intro:
      'Our strategic transition built a platform that now combines asset-backed operations with digital and service-led growth tracks.',
    sideImage: '/assets/IMG-20250628-WA0109.jpg',
    items: [
      {
        year: '2023',
        title: 'Acquisition & New Leadership',
        text: 'Formerly AMR, the company entered a transformation phase after new ownership and strategic direction.',
      },
      {
        year: '2024',
        title: 'Rebranding & Restructuring',
        text: 'The operation was formally rebranded as KBM with renewed focus on compliance, transparency, and efficiency.',
      },
      {
        year: '2025',
        title: 'Multi-Vertical Execution',
        text: 'Technology, telecom, and digital programs were integrated into a single operating model.',
      },
      {
        year: '2025-2026',
        title: 'AI and Institutional Readiness',
        text: 'AI-led operating intelligence and governance frameworks added for enterprise and public-sector confidence.',
      },
    ],
  },
  partnership: {
    title: 'Built for Strategic and Institutional Partnerships',
    text:
      'Our partnership model supports private and public-sector delivery through transparent processes, dependable execution, and measurable outcomes.',
    quotes: [
      {
        image: '/assets/IMG-20250628-WA0082-1.jpg',
        text: 'Operational Strength with Governance Discipline',
      },
      {
        image: '/assets/IMG-20250628-WA0036.jpg',
        text: 'Cross-Sector Collaboration for National Projects',
      },
      {
        image: '/assets/IMG-20250628-WA0073.jpg',
        text: 'Execution Framework Built for Scale and Public Value',
      },
    ],
  },
  production: {
    title: 'Portfolio Strength at a Glance',
    stats: [
      { value: '6', label: 'Active Venture Verticals' },
      { value: 'Cross-Sector', label: 'Integrated Operating Model' },
      { value: 'Gov-Ready', label: 'Compliance and Reporting Posture' },
    ],
    images: [
      '/assets/IMG-20250616-WA00381.jpg',
      '/assets/IMG-20250617-WA00161.jpg',
      '/assets/IMG-20250628-WA0086-1.jpg',
      '/assets/IMG-20250617-WA00131.jpg',
      '/assets/IMG-20250628-WA0112.jpg',
      '/assets/IMG-20250628-WA0036.jpg',
    ],
  },
  platformModel: {
    title: 'Infrastructure Systems & Institutional Enablement',
    steps: [
      {
        title: 'Stabilize',
        text: 'Restore reliability, baseline KPIs, and implement rapid operational controls.',
      },
      {
        title: 'Modernize',
        text: 'Execute sequenced infrastructure upgrades tied to performance and cashflow discipline.',
      },
      {
        title: 'Institutionalize',
        text: 'Embed governance cadence, risk controls, and ministry-grade reporting architecture.',
      },
      {
        title: 'Scale',
        text: 'Expand only when operating stability and financial readiness are consistently proven.',
      },
    ],
  },
  economicImpact: {
    title: 'Economic Impact Framework',
    text: 'We track measurable outcomes to align project delivery with public-interest priorities and investor expectations.',
    metrics: [
      { value: 'Employment', label: 'Direct and indirect jobs created' },
      { value: 'Exports', label: 'Throughput and logistics performance' },
      { value: 'Revenue', label: 'Stabilization and cashflow resilience' },
      { value: 'Uptime', label: 'Network and infrastructure reliability' },
      { value: 'Digital', label: 'Adoption and oversight maturity' },
    ],
  },
  portProject: {
    title: 'Government-Ready Delivery Model',
    cards: [
      {
        title: 'Governance, Risk, and Compliance',
        text: 'Each venture follows documented controls, partner due diligence, and transparent reporting standards.',
      },
      {
        title: 'Execution with Public-Private Alignment',
        text: 'Our programs are structured to support national development priorities, regional jobs, and long-term competitiveness.',
      },
    ],
    imagePrimary: '/assets/IMG-20241228-WA0005-1.jpg',
    imageSecondary: '/assets/IMG-20250616-WA0019.jpg',
    worldMapImage: '/assets/IMG-20250628-WA0097.jpg',
    mineTitle: 'From Single Asset to Diversified Platform',
    mineText:
      'What started as a mining operation now operates as a broader venture platform covering resources, technology, AI, telecommunications, and market growth services.',
  },
};

export const aboutContent = {
  intro:
    'Fine Ore Ventures operates a diversified portfolio across natural resources, technology, AI, telecommunications, and digital growth services with strong governance and execution standards.',
  mission:
    'Our mission is to build resilient venture platforms that deliver commercial, institutional, and community value through disciplined operations and transparent governance.',
  vision:
    'To become a trusted regional group for venture delivery in strategic sectors, combining operational depth with future-ready innovation.',
  values: [
    'Safety and health first',
    'Operational discipline',
    'Transparency and integrity',
    'Sustainable development',
  ],
  details: [
    {
      heading: 'Why Sierra Leone',
      text: 'Sierra Leone is strategically located for Atlantic shipping routes and offers strong geological potential. These fundamentals support efficient export operations.',
    },
    {
      heading: 'National Context',
      text: 'The country has substantial mineral potential and a growing mining ecosystem that supports investment, logistics, and workforce development.',
    },
    {
      heading: 'Our Operational Focus',
      text: 'Mine planning, grade control, responsible transport, and strict compliance practices guide every phase of our operations.',
    },
  ],
};

export const galleryContent = {
  images: [
    '/assets/IMG-20250616-WA0019.jpg',
    '/assets/IMG-20250628-WA0073.jpg',
    '/assets/IMG-20250628-WA0097.jpg',
    '/assets/IMG-20250628-WA0112.jpg',
    '/assets/IMG-20241228-WA0005-1.jpg',
    '/assets/IMG-20250616-WA00381.jpg',
    '/assets/IMG-20250617-WA00131.jpg',
    '/assets/IMG-20250617-WA00161.jpg',
    '/assets/IMG-20250628-WA0036.jpg',
    '/assets/IMG-20250628-WA0082-1.jpg',
    '/assets/IMG-20250628-WA0086-1.jpg',
    '/assets/IMG-20250628-WA0088.jpg',
  ],
};

export const csrContent = {
  text:
    'In all businesses there can be no doubt as to the important role that business has in society. This role should be reflected and acknowledged in every business and operation.',
  pillars: [
    {
      title: 'Community Development',
      desc: 'Support for local priorities through targeted education, health, and livelihoods initiatives.',
    },
    {
      title: 'Education Access',
      desc: 'School support programs and strategic interventions that improve learning opportunities.',
    },
    {
      title: 'Healthcare & Wellbeing',
      desc: 'Collaboration with communities to promote preventive care and improve welfare outcomes.',
    },
  ],
  image: '/assets/IMG-20250628-WA0109.jpg',
};

export const contactContent = {
  title: 'Engage Us',
  description:
    'For business inquiries, sovereign partnerships, and strategic engagements, contact our team at info@fineoreventures.com.',
  fields: ['Name', 'Email', 'Message'],
};

export const footerContent = {
  about:
    'Fine Ore Ventures is committed to venture-led growth, responsible operations, and long-term value across strategic sectors.',
  quickLinks: [
    { label: 'Home', to: '/' },
    { label: 'Our Platform', to: '/our-platform' },
    { label: 'Our Ventures', to: '/our-ventures' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact Us', to: '/contact-us' },
  ],
  location: 'Meydan Grandstand,\nNad Al-Sheba Meydan,\nDubai. UAE',
  email: 'info@fineoreventures.com',
};

export const whoWeAreExtra = {
  metrics: [
    { value: '24/7', label: 'Operational Monitoring' },
    { value: 'HSE', label: 'Safety-First Culture' },
    { value: 'Port-Linked', label: 'Export Logistics Model' },
  ],
  timeline: [
    { year: '2023', text: 'Ownership transition and operational reset.' },
    { year: '2024', text: 'Process restructuring, compliance upgrades, and branding refresh.' },
    { year: '2025', text: 'Export continuity and development of new growth corridors.' },
  ],
};

export const galleryMediaBlocks = [
  {
    title: 'Field Operations',
    text: 'Daily mining and hauling activities across active zones.',
    image: '/assets/IMG-20250628-WA0086-1.jpg',
  },
  {
    title: 'Community & Workforce',
    text: 'Local workforce engagement, safety culture, and site coordination.',
    image: '/assets/IMG-20250628-WA0112.jpg',
  },
  {
    title: 'Logistics & Export',
    text: 'Port-driven transport readiness and cargo movement.',
    image: '/assets/IMG-20250628-WA0036.jpg',
  },
];

export const csrExtra = {
  initiatives: [
    'Community health outreach and welfare campaigns.',
    'Education support through school-level interventions.',
    'Local contractor and workforce inclusion initiatives.',
    'Environmental stewardship and land management awareness.',
  ],
  stats: [
    { value: '4', label: 'Core CSR Pillars' },
    { value: 'Local', label: 'Community-First Planning' },
    { value: 'Long-Term', label: 'Sustainable Social Value' },
  ],
};

export const contactExtra = {
  offices: [
    {
      title: 'Operations Office',
      text: 'support@fineoreventures.com',
    },
    {
      title: 'Business Inquiries',
      text: 'Info@fineoreventuress.com',
    },
    {
      title: 'Patrner Support',
      text: 'Partners@fineoreventures.com',
    },
    {
      title: 'Support Window',
      text: 'Monday to Saturday, 9:00 AM - 6:00 PM',
    },
  ],
};

export const mineralsContent = {
  title: 'Natural Resources',
  heroTitle: 'NATURAL RESOURCES',
  heroTagline: 'Mine-to-Market Optimization',
  intro:
    'We strengthen extraction, logistics, quality control, and export readiness through structured operational discipline.',
  focusAreas: {
    title: 'Operational Focus Areas',
    image: '/assets/naturalresources/n1.jpg',
    points: [
      'Throughput optimization across shifts, assets, and teams.',
      'Contractor governance with transparent accountability and oversight.',
      'Production planning and controls for predictable daily output targets.',
      'Quality assurance and reporting under auditable process discipline frameworks.',
      'HSE integration and compliance across sites, crews, operations consistently.',
    ],
  },
  logistics: {
    title: 'Logistics & Export Integration',
    text:
      'We coordinate transport corridors, port readiness, documentation flows, and inventory management to reduce bottlenecks and protect export reliability.',
    points: [
      'Corridor scheduling aligned with vessel and port windows',
      'Stockpile-to-shipment traceability with live handoff controls',
      'Documentation readiness to minimize customs and clearance delays',
      'Integrated dispatch cadence across mine, road, and port teams',
    ],
  },
  esg: {
    title: 'ESG & Community Alignment',
    intro: 'Responsible operations require structured engagement. We integrate:',
    points: [
      'Environmental monitoring frameworks',
      'Local workforce development',
      'Community alignment programs',
      'Transparent performance reporting',
    ],
  },
  digitization: {
    title: 'Industrial Digitization',
    text:
      'Digital systems enable scale. We deploy operational dashboards, performance analytics, and integrated reporting to strengthen visibility across the asset lifecycle.',
  },
  image: '/assets/minerals/mining-ops.jpg',
};

export const telecomContent = {
  intro:
    'Our telecommunication roadmap supports mining operations through reliable site connectivity, safety communication channels, and field-to-port information flow.',
  pillars: [
    {
      title: 'Field Communication',
      text: 'Radio and mobile-linked communication for coordination between pit teams, dispatch, and supervision.',
    },
    {
      title: 'Operations Control',
      text: 'Structured data exchange for planning updates, equipment movement, and operational reporting.',
    },
    {
      title: 'Safety Channels',
      text: 'Dedicated alert and incident escalation channels to support rapid response procedures.',
    },
    {
      title: 'Future Expansion',
      text: 'Scalable digital backbone for remote monitoring, tracking, and integrated site management.',
    },
  ],
  useCases: [
    'Live communication between excavation and haulage teams',
    'Port coordination updates for dispatch and vessel schedules',
    'Workforce notifications, safety alerts, and emergency triggers',
    'Operational dashboards for leadership and planning teams',
  ],
  image: '/assets/IMG-20250628-WA0036.jpg',
};

export const aboutUsContent = {
  title: 'About Us',
  intro:
    'We are a diversified investment and operations group focused on natural resources, infrastructure-linked services, and high-growth commercial ventures across emerging markets.',
  mission:
    'To build resilient, high-impact businesses that connect local opportunity with global standards, strengthen institutional confidence through transparent governance, and deliver long-term economic value for communities, partners, and national development priorities.',
  values: [
    'Operational discipline and accountability',
    'Safety and environmental responsibility',
    'Transparent partnerships and ethical conduct',
    'Long-term community and stakeholder value',
  ],
  milestones: [
    'Strategic transition and portfolio expansion',
    'Launch of integrated mining and export operations',
    'Diversification into technology and telecom-led ventures',
  ],
  image: '/assets/IMG-20250628-WA0088.jpg',
};

export const venturesOverview = [
  {
    title: 'Natural Resources',
    to: '/our-ventures/natural-resources',
    text: 'Responsible mine-to-market optimization and throughput scaling.',
    image: '/assets/pillars/naturalResourcesMining.jpg',
  },
  {
    title: 'Telecommunications',
    to: '/our-ventures/telecommunications',
    text: 'National telecom stabilization and phased modernization programs.',
    image: '/assets/pillars/telecomunicationInfrastructure.jpg',
  },
  {
    title: 'Digital Systems',
    to: '/our-ventures/digital-systems',
    text: 'Data, platforms, and digital infrastructure for industrial-scale performance.',
    image: '/assets/pillars/digitalanddatasystem.jpg',
  },
  {
    title: 'Investment & Structuring',
    to: '/our-ventures/investment-structuring',
    text: 'Structured investment models aligned to sovereign and commercial outcomes.',
    image: '/assets/pillars/investmentAndStructiong.jpg',
  },
  {
    title: 'Ecosystem Partners',
    to: '/our-ventures/ecosystem-partners',
    text: 'Ecosystem assembly across vendors, operators, institutions, and advisors.',
    image: '/assets/pillars/ecosystempartners.jpg',
  },
  {
    title: 'Governance',
    to: '/our-ventures/governance',
    text: 'Institutional governance systems designed for accountability and delivery discipline.',
    image: '/assets/pillars/governance.avif',
  },
];

export const venturesMeta = {
  thesis:
    'Our venture model combines asset-backed operations with scalable technology and service verticals, creating balanced growth across resources, infrastructure, AI, and digital capability.',
  pillars: [
    {
      title: 'Operational Depth',
      text: 'Execution discipline from field activity to final commercial outcomes.',
    },
    {
      title: 'Risk-Aware Expansion',
      text: 'Measured growth decisions through compliance, partner due diligence, and capital efficiency.',
    },
    {
      title: 'Integrated Value Chain',
      text: 'Linking extraction, logistics, technology, AI, communication, and market presence.',
    },
    {
      title: 'Long-Term Partnerships',
      text: 'Collaborative model with local communities, technical teams, and global buyers.',
    },
  ],
  metrics: [
    { value: '6', label: 'Active Venture Tracks' },
    { value: 'Cross-Sector', label: 'Integrated Business Model' },
    { value: 'Gov-Ready', label: 'Institutional Delivery Readiness' },
  ],
};

export const goldDiamondsContent = {
  title: 'Governance',
  heroTitle: 'GOVERNANCE & OPERATING MODEL',
  intro: 'Institutional credibility is built on cadence.',
  deliveryRhythm: {
    title: 'Delivery Rhythm',
    points: [
      'Daily operational oversight (where required)',
      'Weekly steering committees',
      'Monthly executive reporting',
      'Quarterly strategic resets',
    ],
  },
  oversightFramework: {
    title: 'Oversight Framework',
    points: [
      'Financial controls and audit readiness',
      'Fraud and revenue assurance monitoring',
      'Cyber and compliance posture tracking',
      'HSE and ESG reporting discipline',
    ],
  },
  capabilityTransfer: {
    title: 'Capability Transfer',
    intro: 'Every engagement includes:',
    points: [
      'Local team enablement',
      'Operating playbook development',
      'Skills transfer programs',
      'Institutional knowledge retention',
    ],
    close: 'Long-term resilience requires local strength.',
  },
  additions: {
    title: 'Institutional Assurance Additions',
    points: [
      'Board-level exception reporting and escalation pathways',
      'Integrated KPI architecture mapped to operational and financial outcomes',
      'Corrective-action loops with named accountability',
      'Evidence-based governance logs for external and regulatory review',
    ],
  },
  sections: [
    'Weekly steering cadence',
    'Board-level reporting framework',
    'KPI architecture',
    'Risk & compliance structure',
    'Local capability transfer model',
  ],
  image: '/assets/ventures/diamond.jpg',
};

export const technologyInvestmentsContent = {
  title: 'Investment & Structuring',
  heroTitle: 'INVESTMENT & STRUCTURING',
  intro: 'Fine Ore Ventures deploys capital selectively, aligning investment with operational execution.',
  commercial: {
    title: 'Commercial Alignment Models',
    image: '/assets/investmentandstructuring/commercialAlignment.avif',
    points: [
      'Equity participation',
      'Structured co-investment',
      'Revenue-sharing frameworks',
      'Performance-linked capital deployment',
      'Milestone-based disbursement governance',
      'Public-private risk-sharing structures',
      'Exit planning and value realization protocols',
    ],
  },
  riskArchitecture: {
    title: 'Risk Architecture',
    intro: 'We mitigate structural risk through:',
    points: [
      'Defined milestone gates',
      'Governance oversight',
      'Vendor performance clauses',
      'Capital deployment sequencing',
    ],
    close: 'Infrastructure transformation must be bankable, disciplined, and measurable.',
  },
  sections: [
    'Equity participation models',
    'Sovereign co-investment frameworks',
    'Revenue-sharing mechanisms',
    'Structured commercial alignment',
    'Risk mitigation architecture',
  ],
  image: '/assets/ventures/technology-investment.jpg',
};

export const aiIntelligentSystemsContent = {
  title: 'Digital Systems',
  heroTitle: 'AI-Powered Digital Systems - Architecture, Intelligence, and Secure Scale',
  intro:
    'Data & Platform Architecture: We design unified data frameworks to support operational transparency, executive oversight, and performance predictability.',
  lead:
    'Our AI layer transforms static reporting into decision intelligence - enabling faster interventions, risk anticipation, and measurable operating gains across telecom, infrastructure, and enterprise systems.',
  analytics: {
    title: 'Analytics & Decision Systems',
    image: '/assets/digitalsystemarchitecture/digitalsystemanalytics.jpg',
    points: [
      'Real-time operational dashboards for enterprise-wide visibility and control.',
      'KPI performance architecture with benchmark tracking across business units.',
      'Churn and ARPU analytics for proactive customer retention decisions.',
      'Asset performance modeling to forecast reliability and utilization trends.',
      'Predictive alerting frameworks for anomaly detection and early response.',
      'Executive decision playbooks linked to live operational intelligence streams.',
      'Cross-functional data governance standards for trusted planning outcomes.',
    ],
  },
  aiCommandCenter: {
    title: 'AI Command Center',
    intro: 'A centralized intelligence layer that links operations, finance, risk, and governance in one decision cockpit.',
    image: '/assets/pillars/digitalanddatasystem.jpg',
    capabilities: [
      'Predictive incident alerts for network, field, and service degradation',
      'Root-cause intelligence linked to operational and commercial KPIs',
      'Executive scenario simulation for investment and modernization planning',
      'Automated performance summaries for board and regulator reporting cadence',
    ],
  },
  aiUseCases: {
    title: 'Applied AI Use Cases',
    intro: 'AI is deployed as practical operating intelligence, not a standalone lab initiative.',
    items: [
      {
        title: 'Network Reliability Intelligence',
        text: 'Pattern detection models identify likely outage clusters before impact and trigger prioritized field response routing.',
        metric: 'Faster fault containment',
      },
      {
        title: 'Revenue Leakage Detection',
        text: 'Behavioral anomaly scoring flags suspicious events across billing, activation, and usage pathways for rapid control action.',
        metric: 'Improved revenue protection',
      },
      {
        title: 'Operational Forecast Engine',
        text: 'Demand and throughput forecasting supports staffing, spare allocation, and capacity planning by risk-weighted scenario.',
        metric: 'Higher planning accuracy',
      },
    ],
  },
  payments: {
    title: 'Digital Payments & Financial Controls',
    intro: 'We structure digital transaction systems with embedded risk controls:',
    points: [
      'KYC / KYB architecture',
      'Fraud detection frameworks',
      'Collections discipline',
      'Payment lifecycle governance',
    ],
  },
  cybersecurity: {
    title: 'Cybersecurity & Compliance',
    intro: 'Digital modernization must be secured. We implement:',
    points: [
      'Risk assessment frameworks',
      'Zero-trust access patterns',
      'Incident response discipline',
      'Regulatory alignment protocols',
    ],
  },
  governance: {
    title: 'AI Governance & Assurance',
    intro: 'AI deployment is governed through structured controls to ensure trust, compliance, and executive accountability.',
    points: [
      'Model governance with approval gates, ownership, and audit trails',
      'Data lineage controls from source ingestion to executive reporting outputs',
      'Bias and drift monitoring with corrective escalation workflows',
      'Human-in-the-loop approvals for high-impact operational decisions',
    ],
    close: 'AI value is sustained only when governance discipline is engineered from day one.',
  },
  roadmap: {
    title: 'AI Delivery Roadmap',
    intro: 'Execution follows phased adoption to protect reliability while scaling intelligence capability.',
    phases: [
      'Phase I: Data readiness, KPI dictionary, and baseline integration architecture',
      'Phase II: Priority AI pilots in operations, finance controls, and risk visibility',
      'Phase III: Enterprise rollout with governance automation and executive scorecards',
      'Phase IV: Continuous optimization through model monitoring and scenario planning',
    ],
  },
  outcomes: [
    { value: '24/7', label: 'AI-Assisted Monitoring' },
    { value: 'Real-Time', label: 'Decision Intelligence Layer' },
    { value: 'Audit-Ready', label: 'Governance & Compliance Controls' },
  ],
  sections: [
    'Data architecture & analytics',
    'Digital payments & financial controls',
    'Cybersecurity & compliance',
    'Integrated dashboards & KPI systems',
  ],
  image: '/assets/ventures/technology-datacenter.jpg',
};

export const telecommunicationsContent = {
  title: 'Telecommunications',
  heroTitle: 'National Network Stabilization & Modernization',
  intro:
    'Fine Ore Ventures designs and executes structured national telecom recovery and modernization programs aligned with sovereign priorities.',
  lead:
    'We engage in environments where network performance, financial discipline, and institutional governance must be restored before long-term modernization can occur.',
  heroImage: '/assets/internet5g.jpg',
  frameworkTitle: 'Structured National Operator Transition',
  frameworkIntro:
    'When a telecom operator requires stabilization or strategic realignment, we implement a phased, disciplined framework.',
  phases: [
    {
      phase: 'Phase I',
      title: 'Operational Stabilization & Service Quality Restoration',
      image: '/assets/telecommunications/phase1.avif',
      objective: 'Objective: Restore network reliability and public confidence.',
      points: [
        'Network KPI baselining (coverage, capacity, congestion)',
        'Rapid remediation sprints',
        'Core and RAN performance optimization',
        'QoS / QoE measurement architecture',
        'Field operations reset',
        'Vendor performance review and escalation framework',
      ],
      close: 'Modernization does not begin until service quality is stable.',
    },
    {
      phase: 'Phase II',
      title: 'Financial & Governance Reset',
      image: '/assets/telecommunications/phase2.jpg',
      objective: 'Objective: Protect cashflow and institutional integrity.',
      points: [
        'Revenue assurance frameworks',
        'Fraud control and SIM lifecycle governance',
        'Credit and collections discipline',
        'Cost structure rationalization',
        'Commercial contract review',
        'Vendor ecosystem realignment',
      ],
      close: 'National operators require governance architecture - not just engineering upgrades.',
    },
    {
      phase: 'Phase III',
      title: 'Structured Modernization Roadmap',
      image: '/assets/telecommunications/phase3.jpg',
      objective: 'Objective: Create a bankable, sequenced modernization path.',
      points: [
        'Core network resilience planning',
        'Transport and backbone optimization',
        'Security posture strengthening',
        'Data architecture modernization',
        'Digital channel enablement',
      ],
      close: 'Modernization is sequenced based on operational readiness and financial stability.',
    },
    {
      phase: 'Phase IV',
      title: 'Future Technology Enablement',
      image: '/assets/telecommunications/phase4.jpg',
      objective: 'Objective: Enable next-generation capability once stability is institutionalized.',
      points: [
        'Sustained 4G network quality',
        'Governance stability',
        'Revenue discipline',
        'Vendor ecosystem alignment',
      ],
      close: 'Future technology must be phased - not politically accelerated.',
    },
  ],
  controls: {
    title: 'Revenue & Fraud Controls',
    intro:
      'Operational cashflow protection is built through a simple but auditable lifecycle architecture.',
    flow: ['SIM', 'Activation', 'Billing', 'Collection'],
    points: [
      'Revenue assurance controls mapped from activation to reconciliation',
      'Fraud detection rules linked to SIM lifecycle governance',
      'Collections discipline with clear exception management',
      'Audit-ready reporting for finance, operations, and regulator interfaces',
    ],
  },
  futureEnablement: {
    title: 'Future Enablement',
    text:
      '5G readiness is introduced only after governance and operating stability are institutionalized. We position future capability as a sequenced gate, not a headline target.',
    gates: [
      'Sustained service quality baseline',
      'Stabilized operator governance cadence',
      'Predictable revenue and collections discipline',
      'Aligned vendor ecosystem and security controls',
    ],
  },
  capabilities: {
    title: 'Operator-Grade Capabilities',
    intro: 'Fine Ore Ventures integrates commercial discipline with technical oversight through:',
    points: [
      'Executive-level network governance',
      'Vendor restructuring and renegotiation',
      'Revenue protection architecture',
      'Fraud and risk mitigation',
      'KPI dashboard systems',
      'Structured steering committee cadence',
      'Institutional reporting frameworks',
    ],
  },
  sovereignAlignment: {
    title: 'Sovereign Alignment',
    intro: 'National telecom assets are strategic infrastructure. Our engagement model ensures:',
    points: [
      'Alignment with regulatory frameworks',
      'Transparency in performance metrics',
      'Structured ministry reporting',
      'Local capability transfer',
      'Workforce stabilization and training',
    ],
    close: 'Long-term resilience requires institutional strength.',
  },
  ecosystemAssembly: {
    title: 'Ecosystem Assembly',
    intro:
      'We assemble and govern a structured vendor and technology ecosystem across network equipment, core and transport, cloud data partners, OEMs, payment channels, and security advisors.',
    close: 'Transformation requires coordination - not fragmentation.',
  },
  engagementModel: {
    title: 'Engagement Model for National Operators',
    points: [
      'Transitional operating oversight',
      'Strategic modernization partnerships',
      'Commercial restructuring support',
      'Structured equity or revenue-aligned participation (where appropriate)',
    ],
    close: 'Each engagement is calibrated to national priorities and institutional constraints.',
  },
  closing:
    'National telecom transformation is not a technology project. It is an institutional modernization program. Fine Ore Ventures delivers structured stabilization, disciplined modernization, and future-ready enablement aligned with sovereign priorities and commercial sustainability.',
};

export const marketingDigitalServicesContent = {
  title: 'Ecosystem Partners',
  heroTitle: 'ECOSYSTEM PARTNERSHIPS',
  intro: 'Infrastructure transformation requires coordinated ecosystems.',
  categoriesImage: '/assets/ecosystempatnerships/ecosystemcategories.avif',
  categories: [
    'Network vendors for core, RAN, and transmission layers',
    'Equipment manufacturers for scalable infrastructure and field operations',
    'Cloud and data providers for secure platform performance',
    'Logistics operators for corridor reliability and timely distribution',
    'Financial institutions for structured capital and liquidity support',
    'Regulatory and advisory bodies for governance and compliance alignment',
  ],
  positioning: [
    'We do not operate in isolation.',
    'We build structured ecosystems aligned to delivery.',
  ],
  governanceLayer: {
    title: 'Partner Governance Layer',
    intro: 'Partnerships are governed through clear control architecture and operating cadence:',
    points: [
      'Role clarity and decision rights across partner lanes',
      'Joint KPI scorecards and milestone reporting',
      'Escalation protocols for delivery and compliance exceptions',
      'Quarterly capability review and ecosystem rebalancing',
    ],
  },
  executionPrinciples: {
    title: 'Execution Principles',
    points: [
      'Institution-first coordination before vendor expansion',
      'Outcome-led partner onboarding linked to delivery scope',
      'Risk-screened contracting and transparent performance metrics',
      'Structured ecosystem continuity across program phases',
    ],
    close: 'Ecosystem assembly is treated as operating infrastructure, not vendor marketing.',
  },
  image: '/assets/ventures/marketing-media.jpg',
};

export const mineralsContentExtra = {
  operatingLanes: [
    {
      title: 'Transformational Mining Leadership',
      text: 'Legacy mining assets can be stabilized and repositioned through governance discipline, stakeholder transparency, and execution rigor.',
    },
    {
      title: 'Logistics & Export Infrastructure',
      text: 'Dedicated logistics and port pathways are developed to connect local mineral corridors to global markets.',
    },
    {
      title: 'Community & Social Impact',
      text: 'Road access support, water initiatives, workforce development, and livelihood programs are integrated into operations.',
    },
    {
      title: 'Institutional Alignment',
      text: 'Mining programs are aligned with regulatory frameworks, sovereign priorities, and long-term economic planning.',
    },
  ],
  governance: [
    'Operational precision with measurable quality and safety controls',
    'Sustainability and stewardship in extraction and land use practices',
    'Integrated export capability with logistics and reporting transparency',
    'Institutional alignment with national development objectives',
    'Operational systems for production analytics and executive KPI visibility',
  ],
  timeline: [
    { stage: 'Phase 1', detail: 'Asset stabilization and governance reset.' },
    { stage: 'Phase 2', detail: 'Operational resilience and export activation.' },
    { stage: 'Phase 3', detail: 'Infrastructure expansion and scale-up readiness.' },
  ],
};

export const projectsContent = {
  intro:
    'Our project portfolio includes resource development, logistics infrastructure, AI enablement, and strategic ventures designed for long-term regional and institutional impact.',
  projects: [
    {
      title: 'Mining Expansion Program',
      text: 'Production corridor expansion with grade-control and dispatch optimization.',
      image: '/assets/IMG-20250616-WA00381.jpg',
    },
    {
      title: 'Port & Logistics Integration',
      text: 'Export-handling and vessel coordination infrastructure for shipment continuity.',
      image: '/assets/IMG-20241228-WA0005-1.jpg',
    },
    {
      title: 'Operational Communications Upgrade',
      text: 'Field-to-control communication streamlining for faster and safer decisions.',
      image: '/assets/ventures/telecom-fiber.jpg',
    },
    {
      title: 'Digital Commercial Acceleration',
      text: 'Digital marketing and partner outreach framework for growth and visibility.',
      image: '/assets/ventures/marketing-media.jpg',
    },
    {
      title: 'AI Program Delivery Suite',
      text: 'Applied AI workflows and dashboard systems for performance tracking, governance visibility, and decision support.',
      image: '/assets/ventures/technology-investment.jpg',
    },
  ],
};
