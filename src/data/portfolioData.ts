export interface ResearchPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metrics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  features: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  disclaimer?: string;
  accentColor: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  subtitle?: string;
  mentor?: string;
  issueDate: string;
  validUntil?: string;
  status: string;
  score?: string;
  imagePreview: string;
  pdfDownload?: string;
  credentialDescription: string;
  topics: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  gradeBadge?: string;
  highlights: string[];
}

export interface CareerTimelineMilestone {
  step: number;
  title: string;
  organization: string;
  periodOrDate: string;
  statusBadge: string;
  scoreOrDetail?: string;
  description: string;
  type: 'education' | 'cohort' | 'certification' | 'research' | 'candidacy';
  note?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kartik Mathur",
    heroTitle: "Aspiring Equity Research Analyst",
    location: "Delhi, India",
    email: "mathurkartik5555@gmail.com",
    phone: "+91 9953728525",
    phoneDisplay: "+91 99537 28525",
    linkedin: "https://www.linkedin.com/in/kartik-mathur-finance/",
    github: "https://github.com/mathurkartik5555-design",
    existingSite: "https://kartik-mathur-finance-portfolio.vercel.app/",
    avatarUrl: "/assets/images/kartik_mathur_portrait.png",
    statusBadge: "Open to entry-level Equity Research, Associate & Internship opportunities",
    heroSupporting: "Researching businesses, markets, financial statements, and the reasoning behind investment decisions.",
    heroSecondary: "Research-led. Valuation-focused. Curious about how businesses compound.",
    heroBody: "Exploring businesses, markets, financial models, and the reasoning behind investment decisions.",
    professionalSummary: "Kartik is an Equity Research Enthusiast Analyst with hands-on project experience in equity research, fundamental analysis, financial modelling, and valuation. He has authored an initiating-coverage report on VRL Logistics Ltd. and built finance-oriented AI tools for earnings-call analysis, derivatives-strategy evaluation, and financial-news intelligence. He is seeking an entry-level Equity Research Analyst, Associate, or Intern opportunity.",
    cfaDesignation: "CFA Level I Candidate",
  },

  researchIdentity: {
    headline: "From business understanding to valuation discipline.",
    shortCopy: "Kartik’s portfolio work brings together business and industry research, financial-statement analysis, valuation frameworks, and technology-assisted research workflows.",
    pillars: [
      {
        id: "fundamental",
        title: "Fundamental Research",
        subtitle: "Unit Economics & Moat",
        description: "Deconstructing business drivers, revenue models, industry dynamics, supply-chain positioning, and competitive advantage across macro cycles.",
        iconName: "Compass",
        metrics: ["TAM Sizing", "SWOT & Porter's 5F", "Operating Moat"]
      },
      {
        id: "modelling",
        title: "Financial Modelling",
        subtitle: "Three-Statement Integration",
        description: "Constructing linked financial models, working-capital schedules, fixed-asset depreciation, debt schedules, and sensitivity tables in Excel.",
        iconName: "BarChart3",
        metrics: ["3-Statement Linking", "Schedule Building", "Scenario Analysis"]
      },
      {
        id: "valuation",
        title: "Valuation Discipline",
        subtitle: "DCF & Relative Frameworks",
        description: "Determining intrinsic enterprise and equity value through rigorous Unlevered DCF, WACC calculation, CAPM, and domestic/global peer multiples.",
        iconName: "Calculator",
        metrics: ["DCF & WACC", "EV/EBIT & EV/Rev", "Peer Comps (5+ Peers)"]
      },
      {
        id: "intelligence",
        title: "Market Intelligence",
        subtitle: "NLP & Concall Analysis",
        description: "Augmenting classic financial analysis with AI-assisted concall transcript parsing, management tone tracking, guidance verification, and news aggregation.",
        iconName: "Cpu",
        metrics: ["Concall Parsing", "Tone & Sentiment", "News Intelligence"]
      }
    ] as ResearchPillar[]
  },

  featuredResearch: {
    ticker: "NSE: VRLLOG",
    title: "VRL Logistics Ltd. — Initiating Coverage",
    subtitle: "The Play of Operating Leverage in Indian Road Logistics",
    cohortBadge: "Equity Research Cohort · The Valuation School",
    mentor: "Parth Verma",
    reportPages: 34,
    date: "Dec 2025 – Jul 2026",
    pdfUrl: "/assets/docs/VRL_Logistics_Initiating_Coverage_Report.pdf",
    excelUrl: "/assets/docs/VRL_Logistics_Financial_Model_Kartik_Mathur.xlsx",
    coverImage: "/assets/images/vrl_report_cover.png",
    overview: "Authored an exhaustive 34-page initiating coverage equity research report on VRL Logistics Ltd., examining how transition from volume-chasing to margin-led growth drives operating leverage. Developed integrated financial models, DCF valuation, peer benchmarking against domestic and global logistics leaders, and corporate governance scrutiny.",
    disclaimer: "This project is an academic and portfolio research exercise. It does not constitute investment advice, a target price, or a recommendation to buy, sell, or hold any security.",
    keyMetrics: [
      { label: "Report Length", value: "34 Pages", detail: "Comprehensive initiation study" },
      { label: "FY26 Net Revenue", value: "₹3,221 Cr", detail: "Tracked top-line execution" },
      { label: "EBITDA Margin", value: "20.8%", detail: "Operating margin expansion" },
      { label: "Return on Equity (ROE)", value: "21.0%", detail: "Benchmarked via DuPont analysis" },
      { label: "Indian Logistics TAM", value: "$178B → $429B", detail: "FY20 to FY35F projection" },
      { label: "Debt-Free Fleet", value: "77%", detail: "Fully depreciated asset-heavy fleet" },
    ],
    peersAnalyzed: [
      { name: "Old Dominion Freight Line (ODFL)", type: "Global Benchmark (US LTL Leader)" },
      { name: "XPO Logistics", type: "Global Freight Network" },
      { name: "FedEx Freight", type: "Global Logistics Enterprise" },
      { name: "TCI Express", type: "Domestic Express Logistics" },
      { name: "Delhivery", type: "Domestic Tech-Enabled Logistics" }
    ],
    modules: [
      {
        step: "01",
        name: "Business Model Analysis",
        desc: "Analyzed VRL's integrated hub-and-spoke logistics network, ~5,900 commercial vehicle fleet, 1,290+ branches across 28 states, and in-house maintenance efficiency."
      },
      {
        step: "02",
        name: "Industry & Macro Outlook",
        desc: "Sized Indian road-freight TAM ($178B to $429B by FY35 at 6.48% CAGR), mapped GST collection milestones, National Logistics Policy (NLP), and DFC tailwinds."
      },
      {
        step: "03",
        name: "Financial & Ratio Benchmarking",
        desc: "Executed DuPont analysis, tracked cash-flow conversion, debt-to-equity, working capital cycles, and benchmarked ROE, ROCE, and EV/EBITDA against listed peers."
      },
      {
        step: "04",
        name: "DCF & Relative Valuation Framework",
        desc: "Built multi-scenario DCF with explicit forecast period, terminal growth, WACC sensitivity matrix, and relative valuation using EV/EBIT and EV/Revenue multiples."
      },
      {
        step: "05",
        name: "Governance & Risk Audit",
        desc: "Assessed promoter holding (60.2%), board composition, KMP remuneration, related-party transactions, fuel cost sensitivities, and road-freight competitive intensity."
      },
      {
        step: "06",
        name: "Research Synthesis",
        desc: "Formulated an analytical thesis detailing the impact of operating leverage as incremental freight volume routes through an established, 77% debt-free fleet."
      }
    ]
  },

  projects: [
    {
      id: "the-concall",
      title: "The Concall — AI Earnings Call Analyzer",
      category: "AI Financial Research Platform",
      headline: "Executive Commentary & Transcript Insights Platform",
      description: "An AI-powered platform that processes quarterly earnings call transcripts to extract management commentary, financial highlights, guidance shifts, margin dynamics, and Q&A tone analysis to support rapid fundamental research.",
      features: [
        "NLP Sentiment Engine: Categorizes quarterly concall guidance into bullish, neutral, and cautious signals.",
        "Executive Insights Extraction: Distills 60+ minute transcripts into structured 2-minute actionable briefs.",
        "Guidance Tracking: Identifies shifts in commentary regarding capex, volume growth, and pricing power.",
        "Research Acceleration: Designed to streamline quarterly earnings review workflows for fundamental analysts."
      ],
      tags: ["Python", "Financial NLP", "FastAPI", "React", "Render"],
      liveUrl: "https://the-concall.onrender.com/",
      githubUrl: "https://github.com/mathurkartik5555-design",
      accentColor: "#397C78"
    },
    {
      id: "optionforge",
      title: "OptionForge — AI-Powered F&O Strategy Builder",
      category: "Derivatives Analytics & Strategy Engine",
      headline: "Options Risk Analytics & Payoff Modeling Engine",
      description: "An AI-powered derivatives strategy and risk-analysis platform featuring real-time Options Greeks calculations (Delta, Gamma, Theta, Vega), multi-leg strategy payoff modeling, and probability-of-profit calculations.",
      features: [
        "Options Greeks Engine: Real-time calculation of Delta, Gamma, Theta, Vega, and Implied Volatility (IV).",
        "Interactive Payoff Visualization: Charts profit & loss curves across expiration dates and underlying spot levels.",
        "Probability of Profit (POP): Mathematical evaluation of win probability using statistical distributions.",
        "Risk-Adjusted Parameters: Analyzes Max Risk, Max Profit, Break-even boundaries, and Risk-Reward ratios."
      ],
      tags: ["Python", "Black-Scholes Model", "Options Greeks", "React", "TypeScript"],
      liveUrl: "https://preview-chat-adb68929-53bb-43eb-81d5-fd15060237fa.space-z.ai/",
      githubUrl: "https://github.com/mathurkartik5555-design",
      disclaimer: "Presented for research and educational evaluation; not financial advice.",
      accentColor: "#65B89B"
    },
    {
      id: "news-aggregator",
      title: "AI Financial News Intelligence Platform",
      category: "Market News & Sentiment Clustering",
      headline: "Real-Time Financial News Aggregator & Sentiment Engine",
      description: "An AI-powered financial news-aggregation platform integrating RSS feeds from leading financial publications, automated summarisation, keyword-based prioritisation, and thematic sector clustering.",
      features: [
        "Multi-Source Ingestion: Real-time feeds from BSE/NSE announcements, Economic Times, Mint, and Reuters.",
        "Automated Executive Summaries: Concise bulleted syntheses generated for high-velocity corporate developments.",
        "Sector & Ticker Prioritization: Automated tagging across logistics, banking, automotive, IT, and commodities.",
        "Clean Terminal Interface: Minimalist, distraction-free interface optimized for daily pre-market preparation."
      ],
      tags: ["Python", "RSS Integration", "AI Summarization", "React", "Render"],
      liveUrl: "https://news-aggregator-kartik.onrender.com/",
      githubUrl: "https://github.com/mathurkartik5555-design",
      accentColor: "#C5A46D"
    }
  ] as ProjectItem[],

  methodology: [
    {
      step: 1,
      title: "Understand the Business",
      headline: "Unit Economics & Moat",
      description: "Analyze the core business model, value proposition, revenue streams, cost structure, competitive advantage (economic moat), and organizational leadership.",
      deliverables: ["Value Chain Breakdown", "Moat Evaluation", "Revenue Driver Mapping"]
    },
    {
      step: 2,
      title: "Study the Industry & Macro Environment",
      headline: "Sector Tailwinds & Competitive Forces",
      description: "Examine macroeconomic indicators (GDP, inflation, interest rates, trade policy) and conduct Porter's Five Forces analysis to assess bargaining power and industry profitability.",
      deliverables: ["Total Addressable Market (TAM)", "Porter's 5 Forces", "Regulatory Tailwinds"]
    },
    {
      step: 3,
      title: "Analyse Financial Statements",
      headline: "Historical Quality & Accounting Scrutiny",
      description: "Audit balance sheets, income statements, and cash flows over 5–10 years. Execute ratio analysis, DuPont decomposition, working capital scrutiny, and cash-flow health checks.",
      deliverables: ["DuPont ROE Breakdown", "Working Capital Cycle", "Free Cash Flow Conversion"]
    },
    {
      step: 4,
      title: "Build Forecasts & Valuation Models",
      headline: "Intrinsic & Relative Enterprise Valuation",
      description: "Project three-statement models across base, bull, and bear scenarios. Calculate intrinsic value using Unlevered DCF (WACC, terminal value) alongside comparable peer multiples (EV/EBIT, EV/Revenue).",
      deliverables: ["Linked 3-Statement Excel Model", "DCF Sensitivity Matrix", "Peer Comps Table"]
    },
    {
      step: 5,
      title: "Evaluate Governance, Risks & Competition",
      headline: "Capital Allocation & Downside Protection",
      description: "Scrutinize management quality, promoter pledging, board independence, executive remuneration, related-party transactions, and quantify primary operational and financial risks.",
      deliverables: ["Promoter & Shareholding Audit", "Board Independence Check", "Risk Matrix (SWOT)"]
    },
    {
      step: 6,
      title: "Form a Reasoned Research Conclusion",
      headline: "Rigorous Synthesis & Thesis Articulation",
      description: "Synthesize fundamental findings into a structured Initiating Coverage report with clear investment rationale, risk factors, and sensitivity scenarios.",
      deliverables: ["Initiating Coverage Document", "Executive Summary Presentation", "Model Documentation"]
    }
  ],

  skills: [
    {
      category: "Research & Analysis",
      color: "border-finance-teal text-finance-mist",
      skills: [
        "Equity Research",
        "Fundamental Analysis",
        "Industry Analysis",
        "Sector Research",
        "Company Analysis",
        "Macroeconomic Analysis",
        "Market Research",
        "Competitive Analysis",
        "Porter’s Five Forces",
        "SWOT Analysis",
        "Investment Research",
        "Investment Analysis"
      ]
    },
    {
      category: "Valuation & Financial Modelling",
      color: "border-finance-jade text-finance-mist",
      skills: [
        "Financial Modelling",
        "Financial Forecasting",
        "Equity Valuation",
        "Discounted Cash Flow (DCF)",
        "WACC & Cost of Equity",
        "CAPM Framework",
        "Comparable Company Analysis",
        "Relative Valuation",
        "Ratio Analysis",
        "DuPont Analysis",
        "Financial Statement Analysis"
      ]
    },
    {
      category: "Reporting & Corporate Analysis",
      color: "border-finance-brass text-finance-mist",
      skills: [
        "Initiating Coverage Reports",
        "Research Report Writing",
        "Quarterly Earnings / Concall Analysis",
        "Management Quality Evaluation",
        "Corporate Governance Analysis",
        "Shareholding Pattern Analysis"
      ]
    },
    {
      category: "Markets, Tools & Instruments",
      color: "border-finance-navy text-finance-mist",
      skills: [
        "Capital Markets",
        "Equity Derivatives",
        "Futures & Options",
        "Options Greeks",
        "Payoff Analysis",
        "MS Excel (Financial Modelling)",
        "MS PowerPoint",
        "Screener.in",
        "Data Analysis",
        "Capital IQ"
      ]
    }
  ],

  credentials: [
    {
      id: "valuation-school",
      title: "Equity Research Cohort",
      issuer: "The Valuation School",
      mentor: "Parth Verma",
      issueDate: "August 25, 2026",
      status: "Completed & Certified",
      imagePreview: "/assets/certificates/Equity_Research_Cohort_Valuation_School.png",
      pdfDownload: "/assets/certificates/Equity_Research_Cohort_Valuation_School.pdf",
      credentialDescription: "Intensive equity research program covering comprehensive fundamental analysis, financial statement forensics, 3-statement financial modelling, DCF valuation, and publication of an initiating coverage report.",
      topics: [
        "Initiating Coverage Report Formulation",
        "Integrated Financial Modelling & DCF",
        "Industry TAM & Macro Analysis",
        "DuPont & Working Capital Forensics",
        "Peer Benchmarking & Relative Multiples"
      ]
    },
    {
      id: "nism-xv",
      title: "NISM Series XV — Research Analyst Certification",
      issuer: "National Institute of Securities Markets (NISM)",
      subtitle: "SEBI Mandated Certification for Research Analysts",
      issueDate: "August 5, 2026",
      validUntil: "August 4, 2029",
      status: "Passed Examination",
      score: "61.75 / 100",
      imagePreview: "/assets/certificates/NISM_Series_XV_Research_Analyst.jpg",
      credentialDescription: "SEBI-mandated certification establishing foundational knowledge in equities research, regulatory environment for Research Analysts in India, economic analysis, company valuation, and professional ethics.",
      topics: [
        "SEBI (Research Analysts) Regulations, 2014",
        "Macroeconomic & Industry Forecasting",
        "Quantitative Valuation Frameworks",
        "Corporate Actions & Financial Accounting",
        "Research Ethics & Code of Conduct"
      ]
    },
    {
      id: "nism-viii",
      title: "NISM Series VIII — Equity Derivatives Certification",
      issuer: "National Institute of Securities Markets (NISM)",
      subtitle: "SEBI Mandated Certification for Derivatives Markets",
      issueDate: "June 28, 2026",
      validUntil: "June 27, 2029",
      status: "Passed Examination",
      score: "70.25 / 100",
      imagePreview: "/assets/certificates/NISM_Series_VIII_Equity_Derivatives.png",
      credentialDescription: "SEBI-mandated qualification testing practical mechanics of Indian derivative markets, Futures & Options pricing models, Options Greeks hedging, risk containment mechanisms, and clearing & settlement.",
      topics: [
        "Options Greeks (Delta, Gamma, Theta, Vega)",
        "Futures & Options Payoff Structures",
        "Margin & Clearing Frameworks",
        "Hedging & Trading Strategies",
        "Regulatory & Compliance Norms"
      ]
    },
    {
      id: "wealth-management",
      title: "Investment Products & Wealth Management",
      issuer: "Vivekananda Institute of Professional Studies (VIPS-TC) × CIEL × FinX",
      subtitle: "Upskilling and Value Added Certification",
      issueDate: "Academic Year 2025–26",
      status: "Successfully Completed",
      imagePreview: "/assets/certificates/Investment_Products_Wealth_Management_CIEL_VIPS.png",
      credentialDescription: "Specialized academic certification on wealth management, mutual fund structuring, portfolio asset allocation, and alternative investment products delivered jointly by VIPS-TC, CIEL, and FinX.",
      topics: [
        "Wealth Planning & Asset Allocation",
        "Mutual Funds & Fixed Income Products",
        "Portfolio Risk Profiling",
        "Financial Products Evaluation"
      ]
    }
  ] as CertificateItem[],

  education: [
    {
      id: "bcom",
      degree: "Bachelor of Commerce (Honours) — B.Com (H)",
      institution: "Vivekananda Institute of Professional Studies (VIPS-TC), Delhi",
      location: "Delhi, India",
      period: "August 2025 – Present",
      gradeBadge: "CGPA: 8.20 / 10",
      highlights: [
        "Core focus in Corporate Finance, Advanced Accounting, Financial Management, and Business Economics.",
        "Recipient of the Investment Products & Wealth Management certification (FinX × CIEL × VIPS-TC).",
        "Actively applying theoretical finance concepts to hands-on equity research, company valuation, and financial modelling."
      ]
    },
    {
      id: "class-xii",
      degree: "Class XII — Commerce with Mathematics",
      institution: "M.M. Public School, Delhi",
      location: "Delhi, India",
      period: "2025",
      gradeBadge: "88% · Ranked 3rd in Class",
      highlights: [
        "Ranked 3rd in Class across the entire Commerce Stream.",
        "Built a strong quantitative foundation in Accountancy, Mathematics, Economics, and Business Studies."
      ]
    },
    {
      id: "cfa",
      degree: "CFA Level I Candidate",
      institution: "CFA Institute",
      period: "Active Candidate",
      gradeBadge: "Chartered Financial Analyst Candidate",
      highlights: [
        "Pursuing the global CFA program covering Financial Statement Analysis, Equity Valuation, Corporate Issuers, Fixed Income, Derivatives, Alternative Investments, Quantitative Methods, and Ethical & Professional Standards.",
        "Focus on institutional-grade valuation frameworks and disciplined fiduciary ethics."
      ]
    }
  ] as EducationItem[],

  careerTimeline: [
    {
      step: 1,
      title: "Completed Class XII — Commerce with Mathematics",
      organization: "M.M. Public School, Delhi",
      periodOrDate: "2025",
      statusBadge: "Graduated",
      scoreOrDetail: "88% · Ranked 3rd in Class",
      description: "Established core quantitative foundation across Accountancy, Mathematics, Economics, and Business Studies.",
      type: "education"
    },
    {
      step: 2,
      title: "Started Bachelor of Commerce (Honours)",
      organization: "Vivekananda Institute of Professional Studies (VIPS-TC), Delhi",
      periodOrDate: "August 2025 – Present (Ongoing)",
      statusBadge: "Undergraduate Degree",
      scoreOrDetail: "CGPA: 8.20 / 10",
      description: "Rigorous curriculum covering Corporate Finance, Advanced Financial Accounting, Business Economics, and Financial Management.",
      type: "education",
      note: "Ongoing degree; subsequent research and certification milestones were completed concurrently alongside academic terms."
    },
    {
      step: 3,
      title: "Joined the Equity Research Cohort",
      organization: "The Valuation School",
      periodOrDate: "2025–26 Cohort",
      statusBadge: "Mentored by Parth Verma",
      scoreOrDetail: "Completed & Certified",
      description: "Intensive cohort program focused on fundamental equity research, financial statement analysis, 3-statement financial modelling, and valuation discipline.",
      type: "cohort"
    },
    {
      step: 4,
      title: "Cleared NISM Series VIII — Equity Derivatives Certification",
      organization: "National Institute of Securities Markets (NISM)",
      periodOrDate: "Test Date: June 28, 2026 · Valid until: June 27, 2029",
      statusBadge: "Passed Examination",
      scoreOrDetail: "Score: 70.25 / 100",
      description: "SEBI-mandated qualification verifying mastery in equity derivatives mechanics, Futures & Options pricing, Options Greeks hedging, and risk management.",
      type: "certification"
    },
    {
      step: 5,
      title: "Completed VRL Logistics Ltd. Initiating-Coverage Report",
      organization: "Academic / Cohort Research Project",
      periodOrDate: "Dec 2025 – Jul 2026",
      statusBadge: "Academic Research Initiation",
      scoreOrDetail: "34 Pages · Integrated Model",
      description: "Authored an exhaustive 34-page initiating coverage report on VRL Logistics Ltd. Conducted DCF valuation, relative EV/EBIT multiples, DuPont analysis, and peer benchmarking. College/cohort research project, not professional employment experience.",
      type: "research",
      note: "College / cohort academic research project (not professional employment experience)."
    },
    {
      step: 6,
      title: "Cleared NISM Series XV — Research Analyst Certification",
      organization: "National Institute of Securities Markets (NISM)",
      periodOrDate: "Test Date: August 5, 2026 · Valid until: August 4, 2029",
      statusBadge: "Passed Examination",
      scoreOrDetail: "Score: 61.75 / 100",
      description: "SEBI-mandated qualification for Research Analysts covering Indian regulatory frameworks, economic analysis, company valuation, and professional ethics.",
      type: "certification"
    },
    {
      step: 7,
      title: "Current Status — CFA Level I Candidate",
      organization: "CFA Institute",
      periodOrDate: "Active Candidate",
      statusBadge: "CFA Program Candidate",
      scoreOrDetail: "Level I Candidate",
      description: "Active candidate in the globally recognized CFA Program. Registered candidate; not a CFA charterholder.",
      type: "candidacy",
      note: "Candidate designation strictly compliant with CFA Institute ethical guidelines."
    }
  ] as CareerTimelineMilestone[],

  footer: {
    disclaimer: "This portfolio presents personal academic research and project work for educational and professional showcase purposes. Nothing on this website constitutes investment advice, a target price, or a recommendation to buy, sell, or hold any security.",
    copyright: `© ${new Date().getFullYear()} Kartik Mathur. All rights reserved.`
  }
};
