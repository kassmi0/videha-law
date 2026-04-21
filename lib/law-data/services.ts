export type Service = {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
};

// Featured subset to match what the navbar shows initially.
export const services: Service[] = [


  {
    id: 'corporate-compliance',
    title: 'Corporate compliance services',
    image: '/images/services/Corporate compliance services.png',
    shortDescription:
      'Corporate compliance services ensure that a company follows all applicable laws, regulations, and internal policies. These services include maintaining statutory records, filing returns, meeting regulatory requirements, drafting contracts, and advising on corporate governance. Their main purpose is to reduce legal risk, avoid penalties, and ensure smooth and lawful business operations.',
    fullDescription:
      'Our criminal law practice provides comprehensive defense services for clients facing criminal charges. With decades of combined experience, our attorneys have successfully defended clients in cases ranging from misdemeanors to serious felonies.',
    keyPoints: [
      'White collar crime defense',
      'DUI and traffic violations',
      'Drug offense representation',
      'Assault and battery cases',
      'Theft and property crimes',
      'Expungement services',
    ],
  },
  {
    id: 'intellectual-property-investigation',
    title: 'Intellectual Property(IP) Investigation service in Nepal',
    image: '/images/services/Intellectual Property(IP) Investigation service in Nepal.png',
    shortDescription:
      'IP investigation services in Nepal focus on detecting and proving infringement of trademarks, copyrights, and designs. They include market monitoring, identifying infringers, collecting evidence, and supporting legal enforcement under laws like the Patent, Design and Trademark Act and Copyright Act.',
    fullDescription:
      'We provide strategic legal counsel to businesses, from startups to established corporations. Our corporate law services cover entity formation, contracts, mergers and acquisitions, compliance, and corporate governance.',
    keyPoints: [
      'Business formation and structuring',
      'Contract drafting and negotiation',
      'Mergers and acquisitions',
      'Corporate governance',
      'Regulatory compliance',
      'Intellectual property protection',
    ],
  },
  {
    id: 'trademark-filing-registration-opposition',
    title: 'Trademark Filing, Registration and Opposition in Nepal',
    image: '/images/services/Trademark Filing, Registration and Opposition in Nepal.png',
    shortDescription:
      'Trademark in Nepal involves filing an application, examination and publication, a period for opposition by third parties, and final registration if no valid objection is raised.',
    fullDescription:
      'Family matters require sensitivity and expertise. Our family law attorneys provide compassionate representation in divorce, custody disputes, adoption, and other domestic relations matters.',
    keyPoints: [
      'Divorce and legal separation',
      'Child custody and support',
      'Spousal support/alimony',
      'Adoption services',
      'Prenuptial agreements',
      'Domestic violence protection',
    ],
  },
  {
    id: 'foreign-direct-investment-business-incorporation',
    title: 'Foreign Direct Investment and Business Incorporation in Nepal',
    image: '/images/services/Foreign Direct Investment and Business Incorporation in Nepal.png',
    shortDescription:
      'Foreign Direct Investment (FDI) and business incorporation in Nepal involve obtaining approval (typically from the Department of Industry or Investment Board), registering the company with the Office of Company Registrar, and complying with sectoral, tax, and regulatory requirements to legally operate.',
    fullDescription:
      'Our property law practice handles all aspects of real estate transactions and disputes. We represent buyers, sellers, developers, and property owners in residential and commercial matters.',
    keyPoints: [
      'Real estate transactions',
      'Property disputes and litigation',
      'Landlord-tenant matters',
      'Title examination and insurance',
      'Zoning and land use',
      'Property development',
    ],
  },
  {
    id: 'ingo-ngo-compliance',
    title: 'INGO and NGO Compliance',
    image: '/images/services/NGO INGO Compliance in Nepal_ Essential.png',
    shortDescription:
      'NGO/INGO compliance in Nepal involves registration, renewal, and approval from relevant authorities (District Administration Office and Social Welfare Council for INGOs), submission of annual reports, audit reports, and ensuring activities align with approved objectives and government regulations.',
    fullDescription:
      'Immigration law is complex and ever-changing. Our immigration attorneys stay current with regulations to help individuals and families navigate the immigration process successfully.',
    keyPoints: [
      'Visa applications and renewals',
      'Green card and citizenship',
      'Family-based immigration',
      'Employment-based immigration',
      'Deportation defense',
      'Asylum applications',
    ],
  },
  {
    id: 'legal-advisor',
    title: 'Legal Advisor',
    image: '/images/services/Legal Advisor.png',
    shortDescription:
      'We provide legal guidance to ensure compliance with Nepalese laws, assist in drafting and reviewing documents, and help clients manage legal risks for smooth and lawful operations.',
    fullDescription:
      'Immigration law is complex and ever-changing. Our immigration attorneys stay current with regulations to help individuals and families navigate the immigration process successfully.',
    keyPoints: [
      'Visa applications and renewals',
      'Green card and citizenship',
      'Family-based immigration',
      'Employment-based immigration',
      'Deportation defense',
      'Asylum applications',
    ],
  },
  {
    id: 'construction-conflict-resolution',
    title: 'Construction Conflict Resolution',
    image: '/images/services/Construction Conflict Resolution.png',
    shortDescription:
      'We assist in resolving disputes in construction projects through negotiation, mediation, arbitration, and legal support. Our services help parties settle issues related to contracts, delays, payments, and project execution efficiently and in compliance with applicable laws.',
    fullDescription:
      'Our litigation team has extensive courtroom experience in state and federal courts. We represent clients in complex civil disputes, commercial litigation, and appellate matters.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },
  {
    id: 'branch-registration-compliance',
    title: 'Branch Registration and Compliance',
    image: '/images/services/Branch Registration and Compliance.png',
    shortDescription:
      'We support the registration of branch offices in Nepal and ensure ongoing compliance with legal, tax, and regulatory requirements, including approvals, filings, renewals, and reporting obligations for smooth business operations.',
    fullDescription:
      'Our litigation team has extensive courtroom experience in state and federal courts. We represent clients in complex civil disputes, commercial litigation, and appellate matters.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },
  {
    id: 'registration-of-aircraft',
    title: 'Registration of Aircraft',
    image: '/images/services/Aircraft.png',
    shortDescription:
      'We assist in the registration of aircraft in Nepal by handling required documentation, obtaining approvals from the Civil Aviation Authority of Nepal (CAAN), and ensuring compliance with aviation laws and safety regulations for lawful operation.',
    fullDescription:
      'Our litigation team has extensive courtroom experience in state and federal courts. We represent clients in complex civil disputes, commercial litigation, and appellate matters.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },

  {
    id: 'contract-drafting',
    title: 'Contract Drafting',
    image: '/images/services/Contract Drafting.png',
    shortDescription:
      'We prepare clear and legally sound contracts tailored to client needs, ensuring enforceability, risk protection, and compliance with applicable laws. Our services include drafting, reviewing, and negotiating agreements for individuals, businesses, and organizations.',
    fullDescription:
      'Our litigation team has extensive courtroom experience in state and federal courts. We represent clients in complex civil disputes, commercial litigation, and appellate matters.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },
  {
    id: 'hydropower-project-registration',
    title: 'Hydropower Project Registration',
    image: '/images/services/Hydropower Project Registration.png',
    shortDescription:
      'We assist in registering hydropower projects in Nepal by securing approvals from relevant authorities, preparing necessary documents, and ensuring compliance with energy, environmental, and regulatory requirements for project development and operation.',
    fullDescription:
      'Our litigation team has extensive courtroom experience in state and federal courts. We represent clients in complex civil disputes, commercial litigation, and appellate matters.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },
  {
    id: 'legal-reform',
    title: 'Legal Reform',
    image: '/images/services/Legal Reform.png',
    shortDescription:
      'Aggressive representation in civil disputes and commercial litigation.',
    fullDescription:
      'Our litigation team has extensive courtroom experience in state and federal courts. We represent clients in complex civil disputes, commercial litigation, and appellate matters.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },
  {
    id: 'company-registration',
    title: 'Company Registration',
    image: '/images/services/company registration.png',
    shortDescription:
      'We assist in registering companies in Nepal by preparing required documents, obtaining approvals from the Office of Company Registrar, and ensuring compliance with legal and tax requirements for smooth and lawful business establishment.',
    fullDescription:
      'Our litigation team has extensive courtroom experience in state and federal courts. We represent clients in complex civil disputes, commercial litigation, and appellate matters.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },
  {
    id: 'corporate-licensing-services',
    title: 'Corporate Licensing Services',
    image: '/images/services/Corporate Licensing Services.png',
    shortDescription:'We facilitate companies to acquire and renew necessary licenses  with legal requirements to conduct business in Nepal smoothly and legally.',
    fullDescription:
      'We assist businesses in obtaining and renewing required licenses in Nepal, ensuring compliance with sectoral regulations, government approvals, and legal requirements for smooth and lawful business operations.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },
  {
    id: 'legal-consulting',
    title: 'Legal Consulting',
    image: '/images/services/Legal Consulting.png',
    shortDescription:
      'We provide professional legal advice on corporate, regulatory, and dispute matters to help clients make informed decisions, ensure compliance with Nepalese laws, and effectively manage legal risks.',
    fullDescription:
      'Our litigation team has extensive courtroom experience in state and federal courts. We represent clients in complex civil disputes, commercial litigation, and appellate matters.',
    keyPoints: [
      'Contract disputes',
      'Personal injury claims',
      'Business litigation',
      'Employment disputes',
      'Class action lawsuits',
      'Appellate advocacy',
    ],
  },

  {
    id: 'family-law',
    title: 'Family Law',
    image: '/images/services/familylaw.png',
    shortDescription:
      'We provide legal services in family-related matters, ensuring protection of rights and lawful resolution of disputes under Nepalese law. Our services include court marriage, divorce, child custody, property division, and other domestic matters, handled with care, confidentiality, and legal precision.',
    fullDescription:
      'We provide legal services in family-related matters, ensuring protection of rights and lawful resolution of disputes under Nepalese law. Our services include court marriage, divorce, child custody, property division, and other domestic matters, handled with care, confidentiality, and legal precision.',
    keyPoints: [
      'Court marriage: legal formalities, documentation, and registration before the court',
      'Divorce: filing, negotiation, and court proceedings for a lawful and fair resolution',
      'Child custody and guardianship',
      'Property division and settlement',
      'Other domestic and family-related matters',
    ],
  },
  {
    id: 'civil-law',
    title: 'Civil Law',
    image: '/images/services/civillaw.png',
    shortDescription:
      'We provide legal services in civil matters including property disputes, contract issues, compensation claims, and other non-criminal cases, ensuring effective representation and lawful resolution under Nepalese law.',
    fullDescription:
      'We provide legal services in civil matters including property disputes, contract issues, compensation claims, and other non-criminal cases, ensuring effective representation and lawful resolution under Nepalese law.',
    keyPoints: [
      'Property disputes and documentation support',
      'Contract issues and enforcement',
      'Compensation and recovery claims',
      'Other non-criminal civil cases',
      'Negotiation, mediation, and court representation',
    ],
  },

  {
    id: 'Criminal Law Services',
    title: 'Criminal Law ',
    image: '/images/services/criminal law.png',
    shortDescription:
      'We provide legal support in criminal matters including defense representation, filing and responding to complaints, bail applications, and case proceedings. Our services ensure protection of legal rights and effective handling of criminal disputes under Nepalese law.',
    fullDescription:
      'We provide legal services in civil matters including property disputes, contract issues, compensation claims, and other non-criminal cases, ensuring effective representation and lawful resolution under Nepalese law.',
    keyPoints: [
      'Property disputes and documentation support',
      'Contract issues and enforcement',
      'Compensation and recovery claims',
      'Other non-criminal civil cases',
      'Negotiation, mediation, and court representation',
    ],
  },
];

