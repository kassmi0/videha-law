export type PracticeArea = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
};

// Featured subset to match what the navbar shows initially.
// If you want *all* practice areas from the reference site, tell me and I’ll add the rest.
export const practiceAreas: PracticeArea[] = [
  {
    id: 'foreign-direct-investment',
    title: 'Foreign Direct Investment (FDI) & Market Entry',
    shortDescription:
      'Strategic legal support for foreign investors entering and expanding in Nepal.',
    fullDescription:
      'At Buddha Bhumi Law and Associates, our Foreign Direct Investment practice is designed to guide international investors, multinational corporations, and diaspora Nepalese through the complexities of entering and operating in the Nepalese market. Nepal offers significant opportunities in sectors such as hydropower, tourism, infrastructure, agriculture, and technology, but navigating the regulatory framework requires precise legal expertise. Our team provides comprehensive support from initial market feasibility studies to final investment approval, operational compliance, and profit repatriation. We understand that foreign investors face unique challenges including regulatory approvals, currency restrictions, land ownership limitations, and cultural nuances. Our goal is to simplify this process, mitigate risks, and ensure your investment is structured efficiently, compliantly, and sustainably under Nepalese law.',
    keyPoints: [
      'Market Entry Strategies & Structuring',
      'Regulatory Approvals & Compliance Framework',
      'Investment Protection & Profit Repatriation',
      'Sector-Specific Investment Advisory',
      'Due Diligence & Risk Management',
      'Post-Investment Support & Expansion',
      
    ],
  },
  {
    id: 'energy-and-infrastructure-law',
    title: 'Energy and Infrastructure Law',
    shortDescription:
      'Legal support for hydropower, renewables, and infrastructure projects in Nepal - from development to operations.',
    fullDescription:
      'At Buddha Bhumi Law and Associates, our Energy and Infrastructure Law practice is dedicated to supporting the development, financing, construction, and operation of critical projects that drive Nepal\'s economic growth. Nepal stands at a pivotal moment in its development trajectory, with immense potential in hydropower generation, renewable energy expansion, transportation networks, and urban infrastructure. However, realizing this potential requires navigating a complex web of regulatory frameworks, environmental safeguards, land acquisition procedures, and contractual relationships. Our team of specialized lawyers provides comprehensive legal counsel to project developers, independent power producers, engineering contractors, financial institutions, government agencies, and local communities involved in energy and infrastructure initiatives. We combine deep knowledge of Nepalese statutory regimes including the Electricity Act, Hydropower Development Policy, Public Procurement Act, and Environment Protection Act with practical transactional experience to deliver solutions that are legally robust, commercially viable, and socially responsible. Whether you are developing a run-of-river hydropower project, structuring a public-private partnership for road construction, or advising on transmission line expansion, we are your trusted legal partner from conception to commissioning and beyond',
    keyPoints: [
      'Hydropower & Renewable Energy Project Development',
      'Infrastructure Development & Public-Private Partnerships',
      'Regulatory Compliance & Licensing Framework',
      'Land Acquisition, Resettlement & Community Engagement',
      'Power Purchase Agreements & Energy Trading',
      'Construction, Engineering & Contract Management',
      'Project Finance, Investment Structuring & Security Arrangements',
      'Dispute Resolution & Risk Mitigation in Energy Projects',
      'Sector-Specific Advisory: Transmission, Distribution & Rural Electrification',
    ],
  },
  {
    id: 'company-law',
    title: 'Company Law and Corporate Governance',
    shortDescription:
      'Practical corporate legal support for incorporation, governance, compliance, restructuring, and shareholder matters in Nepal.',
    fullDescription:
      'At Buddha Bhumi Law and Associates, our Company Law practice provides comprehensive legal counsel to businesses at every stage of their lifecycle, from initial conception and incorporation through growth, restructuring, and eventual exit. Nepal\'s corporate landscape is governed primarily by the Companies Act, 2063 (2006), along with complementary legislation including the Securities Act, Insolvency Act, and various regulations issued by the Office of the Company Registrar, Nepal Rastra Bank, and the Securities Board of Nepal. Navigating this framework requires not only technical legal knowledge but also practical understanding of how corporate law intersects with commercial strategy, regulatory compliance, and stakeholder management. Our team of experienced corporate lawyers advises domestic companies, foreign subsidiaries, joint ventures, startups, family businesses, and public enterprises on all aspects of corporate law. We help clients establish robust legal foundations, maintain good corporate governance, manage shareholder relationships, and execute strategic corporate actions with confidence. Whether you are incorporating your first private limited company, preparing for an initial public offering, or managing a complex corporate restructuring, we provide the strategic guidance and meticulous execution needed to protect your interests and advance your objectives under Nepalese law.',
    keyPoints: [
      'Company Incorporation & Registration Services',
      'Corporate Governance & Board Advisory',
      'Compliance & Statutory Filings',
      'Shareholder Matters & Equity Management',
      'Corporate Restructuring & Reorganization',
      'Mergers, Amalgamations & Demergers',
      'Winding Up, Dissolution & Liquidation',
      'Director & Officer Liability Advisory',
      'Sector-Specific Corporate Advisory',
    ],
  },
  {
    id: 'commercial-contracts',
    title: 'Commercial Contracts',
    shortDescription:
      'Drafting, reviewing, and negotiating commercial agreements that protect your business and support growth in Nepal.',
    fullDescription:
      'At Buddha Bhumi Law and Associates, our Commercial Contracts practice is dedicated to safeguarding the operational backbone of your business through meticulously drafted, negotiated, and managed agreements. In the dynamic commercial environment of Nepal, every business transaction, whether it involves the sale of goods, provision of services, leasing of property, or partnership with vendors, relies on the strength of the underlying contract. A well-structured commercial contract not only defines the rights and obligations of the parties involved but also serves as the primary mechanism for risk allocation, dispute prevention, and legal enforcement. Our team of experienced lawyers specializes in the Nepalese Contract Act, Commercial Code, and related consumer protection laws, ensuring that every agreement we handle is not only commercially sound but also legally enforceable within the jurisdiction of Nepal. We work with businesses of all sizes, from local startups and family enterprises to multinational corporations and government entities, providing tailored contractual solutions that align with your specific operational needs and strategic goals. Whether you are securing a long-term supply chain, entering a service partnership, or protecting your intellectual property through licensing, we provide the legal precision needed to turn your commercial intentions into binding, protective realities.',
    keyPoints: [
      'Core Commercial Agreements We Handle',
      'Drafting & Negotiation Strategy',
      'Regulatory Compliance & Enforceability',
      'Risk Management & Dispute Resolution Clauses',
      'Sector-Specific Contractual Needs',
      'Contract Review & Audit Services',
    ],
  },
  {
    id: 'aviation-law',
    title: 'Aviation Law',
    shortDescription:
      'Specialized legal counsel for aviation regulatory compliance, aircraft transactions, and operational risk in Nepal.',
    fullDescription:
      'At Buddha Bhumi Law and Associates, our Aviation Law practice provides specialized legal counsel to airlines, airport operators, aircraft lessors, maintenance providers, cargo carriers, drone operators, and investors navigating Nepal\'s dynamic aviation sector. Nepal\'s unique geography, growing tourism industry, and strategic location in South Asia present significant opportunities for aviation development, but these opportunities come with complex regulatory requirements, safety obligations, and operational challenges. Our team combines deep knowledge of Nepalese aviation law, including the Civil Aviation Act, CAAN regulations, and international conventions such as the Chicago Convention, Montreal Convention, and Cape Town Convention, with practical experience in aviation transactions and dispute resolution. We advise clients on regulatory compliance, aircraft acquisition and financing, operational licensing, passenger and cargo liability, insurance matters, and emerging issues including drone regulation and sustainable aviation. Whether you are launching a new airline, expanding airport infrastructure, leasing aircraft to Nepalese operators, or responding to an aviation incident, we provide the strategic legal guidance needed to navigate the skies with confidence and compliance under Nepalese and international law.',
    keyPoints: [
      'Aviation Regulatory Compliance & Licensing',
      'Aircraft Transactions, Registration & Finance',
      'Air Operator Certification & Operational Compliance',
      'Passenger Rights, Cargo Liability & Insurance',
      'Aviation Dispute Resolution & Accident Investigation',
      'Drone/UAS & Emerging Aviation Technologies',
      'Airport Development & Infrastructure Law',
      'Sector-Specific Advisory: Airlines, MRO, Ground Handling & Aviation Services',
    ],
  },
  {
    id: 'banking-and-finance-law',
    title: 'Banking & Finance Law',
    shortDescription:
      'Comprehensive counsel for regulated financial institutions, lenders, borrowers, and fintech businesses in Nepal.',
    fullDescription:
      'At Buddha Bhumi Law and Associates, our Banking and Finance Law practice provides comprehensive legal counsel to banks, financial institutions, non-banking financial companies, fin-tech enterprises, corporate borrowers, project sponsors, and investors operating in Nepal\'s evolving financial sector. Nepal\'s banking and finance landscape is governed by a robust regulatory framework overseen primarily by Nepal Rastra Bank, supplemented by the Banks and Financial Institutions Act, the Negotiable Instruments Act, the Insolvency Act, the Securities Act, and various directives, circulars, and guidelines issued by regulatory authorities. Navigating this complex environment requires not only technical legal expertise but also a deep understanding of financial markets, credit risk, regulatory compliance, and commercial strategy. Our team of specialized finance lawyers advises clients on lending transactions, security structuring, regulatory licensing, capital markets activities, payment systems, fin-tech innovation, and financial dispute resolution. Whether you are a commercial bank extending credit to corporate clients, a borrower seeking project financing, a fintech startup launching digital payment solutions, or an investor participating in debt capital markets, we provide the strategic legal guidance needed to structure transactions that are commercially viable, legally enforceable, and compliant with Nepalese financial regulations.',
    keyPoints: [
      'Banking Regulatory Compliance & Licensing',
      'Lending Transactions & Credit Documentation',
      'Security Perfection, Registration & Enforcement',
      'Project Finance & Infrastructure Funding',
      'Fintech, Digital Banking & Payment Systems',
      'Non-Performing Assets, Recovery & Insolvency',
      'Capital Markets, Securities & Investment Services',
      'Foreign Exchange, Trade Finance & Cross-Border Transactions',
      'Compliance, AML/CFT & Financial Crime Prevention',
      'Insurance Law & Risk Transfer',
    ],
  },
];

