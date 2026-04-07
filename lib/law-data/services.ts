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
    id: 'criminal-law',
    title: 'Criminal Law',
    image: '/images/services/criminal-law.png',
    shortDescription:
      'Expert defense and representation in criminal matters with proven track record.',
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
    id: 'corporate-law',
    title: 'Corporate Law',
    image: '/images/services/corporate-law.png',
    shortDescription:
      'Comprehensive legal solutions for businesses of all sizes and industries.',
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
    id: 'family-law',
    title: 'Family Law',
    image: '/images/services/family-law.png',
    shortDescription:
      'Compassionate guidance through family legal matters and domestic relations.',
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
    id: 'property-law',
    title: 'Property Law',
    image: '/images/services/property-law.png',
    shortDescription:
      'Protecting your real estate interests and property rights effectively.',
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
    id: 'immigration-law',
    title: 'Immigration Law',
    image: '/images/services/immigration-law.png',
    shortDescription:
      'Navigate complex immigration processes with experienced legal support.',
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
    id: 'civil-litigation',
    title: 'Civil Litigation',
    image: '/images/services/civil-litigation.png',
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
];

