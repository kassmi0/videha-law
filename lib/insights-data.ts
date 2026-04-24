export type InsightFaq = {
  question: string;
  answer: string;
};

export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  sections: InsightSection[];
  faqs?: InsightFaq[];
};

export const insightArticles: Record<string, InsightArticle> = {
'ngo-registration-nepal': {
    slug: 'ngo-registration-nepal',
    title: 'NGO Registration in Nepal',
    subtitle: 'A Complete Legal Guide by Videha Law and Associates',
    excerpt:
      'Establishing a Non-Governmental Organization (NGO) in Nepal involves a structured legal process governed by statutory laws and regulatory authorities. Our firm provides end-to-end legal assistance to ensure a seamless, compliant, and efficient registration process.',
    category: 'Non-Profit & Social Sector Law',
    publishedAt: '2025-03-15',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Establishing a Non-Governmental Organization (NGO) in Nepal involves a structured legal process governed by statutory laws and regulatory authorities. Our firm provides end-to-end legal assistance to ensure a seamless, compliant, and efficient registration process.',
        ],
      },
      {
        heading: 'Legal Framework',
        paragraphs: [
          'NGOs in Nepal are primarily regulated under the following laws:',
          '- Social Welfare Act, 1992',
          '- Associations Registration Act, 1977',
          '- Guidelines issued by the Social Welfare Council (SWC)',
          'These laws collectively govern the formation, operation, compliance, and oversight of NGOs in Nepal.',
        ],
      },
      {
        heading: 'Registration Process',
        paragraphs: [
          'The registration process involves multiple stages across different government bodies. Our firm simplifies and manages each step on your behalf:',
          'Step 1: Ward Office Recommendation - Obtain a recommendation letter from the local ward office where the NGO will be established.',
          'Step 2: District Coordination Committee Approval - Secure a recommendation from the District Coordination Committee.',
          'Step 3: Registration at District Administration Office (DAO) - Submit required documents and formally register the NGO.',
          'Step 4: Tax Registration (PAN) - Register with the Inland Revenue Department for tax compliance.',
          'Step 5: Affiliation with Social Welfare Council (SWC) - Obtain affiliation to legally operate and receive recognition as an NGO.',
        ],
      },
      {
        heading: 'Minimum Requirements',
        paragraphs: [
          '- Members Required: At least 7 founding members',
          '- Legal Structure: Non-profit, service-oriented organization',
          '- Office Requirement: Registered office with valid address proof',
        ],
      },
      {
        heading: 'Timeline',
        paragraphs: [
          'The registration process typically takes 1 to 2 months, depending on document readiness and administrative processing time.',
        ],
      },
      {
        heading: 'Government Fees',
        paragraphs: [
          'Authority and approximate fees (NPR):',
          '- Ward Office: 2,000 (may vary)',
          '- District Administration Office: 1,000 (may vary)',
          '- Social Welfare Council: 3,000',
          '- Inland Revenue Department: No fee',
          '- District Coordination Committee: No fee',
          'Total Estimated Cost: NPR 6,000 (subject to variation).',
        ],
      },
      {
        heading: 'Required Documentation',
        paragraphs: [
          '- Minutes of meeting (decision to establish NGO)',
          '- Citizenship certificates of all founding members',
          '- Passport-sized photographs of members',
          '- Police character certificates',
          '- Draft Constitution (Bidhan)',
          '- Office rent agreement',
        ],
      },
      {
        heading: 'Why Choose Our Firm',
        paragraphs: [
          '- Comprehensive Legal Support - From documentation to final approval',
          '- Efficient Processing - Minimized delays through expert handling',
          '- Regulatory Compliance - Ensuring adherence to all legal requirements',
          '- Client-Centric Approach - Tailored solutions for your organization',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the process for NGO registration in Nepal?',
        answer:
          'The process includes obtaining local recommendations, registering at the District Administration Office, completing tax registration, and securing affiliation with the Social Welfare Council.',
      },
      {
        question: 'How many members are required?',
        answer:
          'A minimum of 7 members is required to establish an NGO.',
      },
      {
        question: 'How long does the process take?',
        answer:
          'Typically 1-2 months, depending on document preparation and approvals.',
      },
      {
        question: 'What are the costs involved?',
        answer:
          'Approximately NPR 6,000 in government fees, subject to variation by district.',
      },
    ],
  },
  'corporate-governance-best-practices': {
    slug: 'corporate-governance-best-practices',
    title: 'Corporate Governance Best Practices',
    subtitle: 'Legal and operational controls for resilient organizations',
    excerpt:
      'Key governance practices every business should adopt to improve compliance, board accountability, and risk oversight.',
    category: 'Corporate & Governance',
    publishedAt: '2025-04-10',
    sections: [
      {
        heading: 'Core Practices',
        paragraphs: [
          'Strong governance starts with clear board responsibilities, conflict-of-interest controls, and documented authority matrices.',
          'Companies should implement periodic compliance reviews, whistleblower procedures, and transparent financial reporting to reduce legal and reputational risk.',
        ],
      },
      {
        heading: 'Practical Implementation',
        paragraphs: [
          'Use annual governance calendars for board meetings, policy updates, and regulatory filings. Keep minutes and resolutions complete and audit-ready.',
          'When governance is embedded in daily operations, organizations respond faster to disputes, regulatory inquiries, and investor due diligence.',
        ],
      },
    ],
  },
  'ip-protection-strategies': {
    slug: 'ip-protection-strategies',
    title: 'Company Registration in Nepal',
    subtitle: 'A Complete Legal Guide to Online Company Registration',
    excerpt:
      'Company registration in Nepal is primarily regulated by the Companies Act, 2006 (2063). This guide provides a detailed overview of the step-by-step process involved in online company registration in Nepal, highlighting the legal requirements, procedural aspects, and the role played by the OCR.',
    category: 'Corporate & Governance',
    publishedAt: '2026-01-05',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Company registration in Nepal is primarily regulated by the Companies Act, 2006 (2063), which serves as the main legal framework governing the incorporation, operation, and management of companies within the country. The authority responsible for overseeing and administering the registration process is the Office of the Company Registrar (OCR), which acts as the central body ensuring compliance with the relevant legal provisions. In recent years, the process of registering a company has been made more accessible through an online system, (via https://camis.ocr.gov.np/login ) allowing applicants to complete the necessary procedures digitally. This article provides a detailed overview of the step-by-step process involved in online company registration in Nepal, highlighting the legal requirements, procedural aspects, and the role played by the OCR in facilitating and regulating company formation.',
        ],
      },
      {
        heading: 'Types of Company',
        paragraphs: [
          'There are many types of company. Such as',
          '1. Private Company',
          '2. Public Company',
          '3. Profit not distributing Company',
          'Distinction on basis of ownership',
          '**• Government Company',
          '**• Holding and Subsidiary Companies',
          '**• Foreign Company',
        ],
      },
      {
        heading: '1. Private Company',
        paragraphs: [
          'A private company in Nepal can have a minimum of one and a maximum of 101 shareholders, and its shares cannot be publicly traded. In contrast, a public company must maintain a minimum paid-up capital of NPR 1 crore and is allowed to raise funds from the public. The company name of a private entity must include "Pvt. Ltd.", and holding an Annual General Meeting (AGM) is mandatory for compliance. While the Memorandum of Association (MOA) and Articles of Association (AOA) serve as the primary charter documents, in practice, certain consensus agreements among shareholders may prevail in internal matters, and compliance requirements for private companies are generally less stringent compared to public companies.',
        ],
      },
      {
        heading: '2. Public Company',
        paragraphs: [
          'A public company in Nepal, as per Section 3(2) of the Companies Act, must have a minimum of 7 shareholders with no upper limit, and its shares can be freely traded by the public, such as in capital market–listed companies. Unlike private companies, there is no concept of consensus agreements; instead, pre-incorporation agreements are recognized, which are entered into before the company is formally established. Public companies are subject to more rigorous compliance requirements, and their name must include "Limited," especially where the number of shareholders exceeds 101. Compared to private companies, which have shareholder limits and fewer compliance obligations, public companies operate under stricter regulatory frameworks, although in certain cases, holding an AGM may not be strictly necessary depending on specific conditions.',
        ],
      },
      {
        heading: '3. Profit Not Distributing Company',
        paragraphs: [
          'A profit-not-distributing company under Chapter 19 and Section 3(3) of the Companies Act, 2063, is established for social or public welfare objectives rather than for earning and distributing profit. Such a company does not have the concept of shareholders, as it operates on a membership basis, and at least five members are required for its incorporation. The members work collectively in line with the organization\'s objectives, which typically include social, charitable, academic, or public interest activities, and any income generated must be utilized solely for achieving these stated purposes without distributing dividends.',
        ],
      },
      {
        heading: 'Distinction Based on Ownership',
        paragraphs: [
          '**• Government Company',
          'A government-owned company in Nepal is typically incorporated as a public company, where the shares are held fully or predominantly by the government. In such companies, the government acts as the principal shareholder, exercising ownership and control over management and operations. For example, Nepal Rastra Bank functions as a public institution with government ownership, reflecting how public companies can exist under state control while operating within the broader legal framework of the Companies Act.',
          '**• Holding and Subsidiary Company',
          'ABC Company, with an authorized capital of NPR 10 lakh divided among shareholders holding NPR 1 lakh each, may have an objective stated in its Memorandum of Association (MOA) to invest in and establish other companies. Under this structure, ABC Company can incorporate separate entities such as C Company, D Company, and E Company. For instance, if C Company is formed with a capital of NPR 2 lakh entirely contributed by ABC Company, then C Company becomes a wholly owned subsidiary of ABC Company, meaning full ownership and control rests with the parent company.',
          'Shareholding structures generally determine the level of control a company has over another: (1) wholly owned (100%), where the parent company holds all shares; (2) majority holding (more than 51%), where control is maintained through dominant share ownership; and (3) minority holding, where influence exists but control is limited. For example, if D Company has a capital of NPR 2 lakh and ABC Company invests 1.5 lakh, it becomes a majority-owned subsidiary of ABC. In this setup, ABC acts as the holding company, exercising control over its subsidiaries through its Board of Directors, including decisions relating to investment, management, and business activities. As recognized under Section 142 of the Companies Act 2063, such holding companies are legally empowered to invest in, manage, and control subsidiary companies as part of their corporate structure.',
          '**• Foreign Company',
          'A company that operates in Nepal but is incorporated outside Nepal is considered a foreign company under Sections 154 to 158 of the Companies Act, 2063. Such companies can carry out business activities in Nepal through different modes.',
          '1. A foreign company may establish a liaison office in Nepal, which is limited to promoting the parent company\'s products and conducting market research, but it cannot engage in sales or commercial transactions.',
          '2. It may operate through a subsidiary company, which can be wholly owned, majority-owned, or minority-owned, depending on the level of investment and control.',
          '3. A foreign company can set up a branch office, where it is registered as a branch in Nepal without creating a separate legal entity.',
          '4. It may enter the Nepali market through a joint venture with a domestic company, involving shared investment or the establishment of a new business entity.',
        ],
      },
      {
        heading: 'Memorandum of Association, Articles of Association',
        paragraphs: [
          '**Sec 18 : Memorandum of Association',
          'The Memorandum of Association (MOA) of a company sets out its fundamental constitution and defines the scope of its activities. It clearly states the main business objectives of the company and the types of activities it will undertake to achieve those objectives. The MOA also specifies details regarding the shareholders (founders) of the company and the shares they initially hold at the time of incorporation. It further outlines the capital structure, including authorized capital, which is the maximum limit of capital that the company is permitted to raise from shareholders, and issued capital, which is the portion of authorized capital offered to shareholders. The paid-up capital refers to the amount of issued capital that has been fully paid by the shareholders and is actively used in the company\'s operations. Initially, shares are allotted to the founding members, and later additional shareholders may be included, resulting in further distribution of shares such as initial founder shares and subsequent shares issued to new investors. The MOA thus acts as the foundation document that defines the company\'s scope, capital framework, and shareholder structure.',
          '**Sec 20 : Article of Association',
          'A company frames its Articles of Association (AOA) to attain the objectives set forth in its Memorandum of Association (MOA) and to carry out its activities in a well-managed and systematic manner. The AOA serves as the internal rulebook of the company and governs its day-to-day operations. It generally includes the following matters:',
          '1. Rules relating to the management of the company and internal administration',
          '2. Procedures for appointment, qualification, powers, and removal of directors',
          '3. Rights, duties, and liabilities of shareholders and directors',
          '4. Rules regarding issue, transfer, transmission, and forfeiture of shares',
          '5. Procedures for conducting board meetings and general meetings (including AGM/EGM)',
          '6. Voting rights of shareholders and decision-making process',
          '7. Dividend declaration and distribution policy',
          '8. Maintenance of company accounts, audit, and financial reporting',
          '9. Borrowing powers and use of company funds',
          '10. Amendment procedure of the Articles of Association',
          '11. Winding up and dissolution procedures of the company',
          '**Sec 21 : Amendment of MOA and AOA',
          '1. If a company makes an amendment and the objective becomes restricted or inconsistent with the law, the amendment can be rejected by the Office of the Company Registrar (OCR).',
          '2. For any major change, a special resolution must be passed in a general meeting (AGM/EGM) after giving at least 21 days\' special notice to shareholders.',
          '3. After the resolution is passed by majority, the company must inform and submit the amendment to OCR, which then reviews and approves it.',
          '4. Once the AGM is completed, the company must notify the OCR within 30 days, and the OCR is required to verify the submission and issue notice/approval within 7 days.',
          '5. In cases such as name change or objective change, the company must apply for prior approval, submit necessary documents, and pay the prescribed fee before implementation.',
          '6. For change in objective clause, if OCR does not approve or if any shareholder objects, the amendment may be challenged.',
          '7. Under Section 21(4) (for public companies), certain procedural requirements must be followed, including proper disclosure and approval process.',
          '8. Under Section 21(5), the company must first inform the company and follow legal procedure before moving to court.',
          '9. A shareholder can file a case in court if they are dissatisfied, but they must hold at least 5% of the total shareholding to challenge the amendment.',
          '10. Unless the court orders otherwise, any amendment to the objective clause will not become effective if it is successfully challenged.',
        ],
      },
      {
        heading: 'Process of Registration of Company in Nepal',
        paragraphs: [
          '**1. Reservation of company name at the OCR',
          'The process starts with applying for name reservation at the Office of Company Registrar (OCR). The applicant proposes one or more names through the OCR online system. The Registrar checks whether the name is unique, not misleading, and not like already registered companies. If the name meets legal criteria, it gets approved and reserved for a limited period (usually around 35 days). Within this time, the incorporation process must be completed, or the reservation may lapse.',
          '**2. Online Submission of signed documents (AOA, MOA and Application) at OCR',
          'After name approval, the promoters prepare the key incorporation documents:',
          'Memorandum of Association (MOA) – defines the company\'s objectives, scope, and capital structure.',
          'Articles of Association (AOA) – contains internal rules regarding management, shares, meetings, etc.',
          'Application form – includes details of promoters, directors, registered office, and shareholding.',
          'These documents must be properly signed (sometimes witnessed or notarized if required) and then submitted through the OCR online portal along with necessary supporting documents like citizenship copies, consent letters, and office address proof.',
          '**3. Examination of submitted documents by OCR',
          'Once submitted, the OCR reviews all documents to ensure legal compliance under the Companies Act. This includes verifying:',
          '• Whether the objectives are lawful',
          '• Accuracy of shareholder and director details',
          '• Proper execution of MOA and AOA',
          '• Compliance with capital and structural requirements',
          'If there are errors or missing details, the OCR may issue queries or require amendments. The applicant must respond and correct the documents before approval proceeds.',
          '**4. Issuance of company registration certificate by OCR',
          'After successful verification, the OCR registers the company and issues a Certificate of Incorporation. This certificate confirms that the company is now a separate legal entity. It includes the company registration number, date of incorporation, and official recognition to carry out business as per its objectives.',
          '**5. Tax Registration (VAT/PAN) at the Inland Revenue Office',
          'Following incorporation, the company must register with the Inland Revenue Office (IRO) for taxation purposes.',
          '• PAN (Permanent Account Number) is mandatory for all companies.',
          '• VAT registration is required if the company meets the threshold or is engaged in taxable activities.',
          'This step enables the company to legally conduct financial transactions, open bank accounts, issue invoices, and comply with tax obligations under Nepalese law.',
        ],
      },
      {
        heading: 'Documents Needed',
        paragraphs: [
          '1. The Application is the first and most essential document in the company registration process. It serves as the formal request submitted to the concerned authority, providing basic details about the proposed company, such as its name, registered office, objectives, and information about promoters and directors.',
          '2. The Memorandum of Association and Articles of Association of the proposed company form the constitutional framework of the company. The Memorandum of Association defines the company\'s objectives, scope of activities, and capital structure, while the Articles of Association lay down the internal rules and regulations governing management, decision-making, and operational procedures.',
          '3. The National ID Card of the promoters or shareholders is required for identity verification. This ensures the authenticity of the individuals involved in forming the company and helps maintain transparency and legal compliance in the registration process.',
          '4. The Shareholder\'s Agreement (if any) is an optional but important document that outlines the rights, duties, and obligations of the shareholders. It helps prevent future disputes by clearly defining matters such as profit sharing, decision-making authority, and exit mechanisms.',
          '5. The Copy of Certificate of Registration and other registration documents (Memorandum of Association and Articles of Association) if the shareholder is required when a corporate entity is involved as a shareholder. This document verifies the legal existence and structure of the corporate shareholder.',
          '6. The Corporate Resolution of the shareholder if the shareholder is a company is another necessary document in such cases. It represents the formal decision of the company to invest in or become a shareholder of the proposed company, usually passed by its board of directors.',
          '7. The Copy of prior approval of the Department of Industry (DOI) in case the shareholder is a foreign investor is mandatory when foreign investment is involved. This approval ensures that the investment complies with the laws and regulations governing foreign direct investment in Nepal.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What law governs company registration in Nepal?',
        answer:
          'Company registration in Nepal is primarily governed by the Companies Act, 2006 (2063), administered by the Office of the Company Registrar (OCR).',
      },
      {
        question: 'What are the types of companies in Nepal?',
        answer:
          'The main types are Private Company, Public Company, and Profit Not Distributing Company. Companies can also be distinguished by ownership: Government Company, Holding and Subsidiary Companies, and Foreign Company.',
      },
      {
        question: 'What is the process for registering a company in Nepal?',
        answer:
          'The process involves: (1) Name reservation at OCR, (2) Online submission of MOA, AOA, and Application, (3) Examination of documents by OCR, (4) Issuance of Certificate of Incorporation, and (5) Tax registration (VAT/PAN) at the Inland Revenue Office.',
      },
      {
        question: 'What documents are needed for company registration?',
        answer:
          'Required documents include the Application form, MOA and AOA, National ID Cards of promoters, Shareholder\'s Agreement (if any), Certificate of Registration (if a corporate shareholder is involved), Corporate Resolution, and DOI approval for foreign investors.',
      },
      
    ],
  },
  'employment-contract-compliance-nepal': {
    slug: 'employment-contract-compliance-nepal',
    title: 'Employment Contract Compliance in Nepal',
    subtitle: 'How employers can draft enforceable and compliant contracts',
    excerpt:
      'A practical checklist for compliant employment contracts, covering probation, benefits, termination clauses, and dispute safeguards.',
    category: 'Labor & Employment',
    publishedAt: '2025-06-18',
    sections: [
      {
        heading: 'Why Contract Compliance Matters',
        paragraphs: [
          'Clear contracts reduce disputes and help employers align hiring practices with labor requirements and internal HR policies.',
          'A strong employment contract defines role expectations, compensation terms, confidentiality obligations, and lawful termination procedures.',
        ],
      },
      {
        heading: 'Key Clauses to Include',
        paragraphs: [
          'Include probation terms, leave and benefit rules, workplace conduct expectations, and dispute resolution clauses in plain language.',
          'Employers should periodically review templates to stay aligned with legal changes and avoid outdated or unenforceable wording.',
        ],
      },
    ],
  },
  'commercial-contract-risk-management': {
    slug: 'commercial-contract-risk-management',
    title: 'Commercial Contract Risk Management',
    subtitle: 'Preventing legal exposure through better drafting and review',
    excerpt:
      'Learn how businesses can reduce contractual disputes through clear payment terms, liability allocation, and practical enforcement mechanisms.',
    category: 'Commercial Law',
    publishedAt: '2025-08-02',
    sections: [
      {
        heading: 'Common Contract Risks',
        paragraphs: [
          'Many disputes arise from vague scope definitions, missing delivery milestones, and unclear payment triggers.',
          'Unchecked liability clauses and weak termination provisions often create disproportionate legal exposure for one party.',
        ],
      },
      {
        heading: 'Risk-Reduction Strategies',
        paragraphs: [
          'Use precise definitions, measurable obligations, and escalation clauses that define what happens when performance issues occur.',
          'A legal pre-signing review can significantly reduce litigation risk and improve enforceability if disputes arise.',
        ],
      },
    ],
  },
};

export const allInsightArticles = Object.values(insightArticles).sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);