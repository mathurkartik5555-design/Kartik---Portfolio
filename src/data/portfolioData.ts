export interface ResearchPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  microSentence: string;
  microSystemFlow: string[];
  iconName: string;
  metrics: string[];
}

export interface BusinessEngineStep {
  step: string;
  title: string;
  subtitle: string;
  detail: string;
}

export interface ThesisNode {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  detail: string;
  metric?: string;
}

export interface ResearchWorkflowStage {
  step: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface CapabilityCluster {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  primarySkills: string[];
  expandedSkills: string[];
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
    heroTitle: "Equity Research Analyst",
    heroSupportingKeywords: "Fundamental Research · Valuation · Financial Modelling · Industry Analysis",
    location: "Delhi, India",
    email: "mathurkartik5555@gmail.com",
    phone: "+91 9953728525",
    phoneDisplay: "+91 99537 28525",
    linkedin: "https://www.linkedin.com/in/kartik-mathur-finance/",
    github: "https://github.com/mathurkartik5555-design",
    existingSite: "https://kartik-mathur-finance-portfolio.vercel.app/",
    avatarUrl: "/assets/images/kartik_mathur_portrait.png",
    statusBadge: "Open to Equity & Private Equity Internships",
    heroSupporting: "Deconstructing business economics, building linked financial models, and evaluating intrinsic value.",
    heroSecondary: "Research-led. Valuation-focused. Curious about how businesses compound.",
    heroBody: "Exploring businesses, markets, financial models, and the reasoning behind investment decisions.",
    professionalSummary: "Kartik is an Equity Research Analyst with hands-on project experience in equity research, fundamental analysis, financial modelling, and valuation. He has authored an initiating-coverage report on VRL Logistics Ltd. and built finance-oriented tools for earnings-call analysis, derivatives-strategy evaluation, and financial-news intelligence. He is seeking an Equity Research Analyst, Associate, or Research Intern opportunity.",
    cfaDesignation: "CFA Level I Candidate",
  },

  researchIdentity: {
    headline: "From business understanding to valuation discipline.",
    shortCopy: "A structured research methodology connecting business unit economics, financial statement forensics, DCF valuation, and modern research intelligence.",
    pillars: [
      {
        id: "fundamental",
        title: "Fundamental Research",
        subtitle: "Unit Economics & Moat",
        description: "Deconstructing business drivers, revenue models, industry dynamics, supply-chain positioning, and competitive advantage across macro cycles.",
        microSentence: "Deconstructing business drivers, unit economics, and competitive moats across economic cycles.",
        microSystemFlow: ["BUSINESS", "INDUSTRY", "COMPETITION", "DRIVERS", "THESIS"],
        iconName: "Compass",
        metrics: ["TAM Sizing", "Porter's 5 Forces", "Economic Moat"]
      },
      {
        id: "modelling",
        title: "Financial Modelling",
        subtitle: "Three-Statement Integration",
        description: "Constructing linked financial models, working-capital schedules, fixed-asset depreciation, debt schedules, and sensitivity tables in Excel.",
        microSentence: "Constructing linked 3-statement models, working capital cycles, and sensitivity tables in Excel.",
        microSystemFlow: ["REVENUE", "EBITDA", "FCF", "DCF"],
        iconName: "BarChart3",
        metrics: ["3-Statement Linking", "Schedule Building", "Scenario Analysis"]
      },
      {
        id: "valuation",
        title: "Valuation Discipline",
        subtitle: "DCF & Relative Frameworks",
        description: "Determining intrinsic enterprise and equity value through rigorous Unlevered DCF, WACC calculation, CAPM, and domestic/global peer multiples.",
        microSentence: "Determining intrinsic value through Unlevered DCF, WACC sensitivity, and peer trading multiples.",
        microSystemFlow: ["DCF", "COMPS", "MULTIPLES", "INTRINSIC VALUE"],
        iconName: "Calculator",
        metrics: ["DCF & WACC", "EV/EBIT & EV/Rev", "Peer Comps (5+ Peers)"]
      },
      {
        id: "intelligence",
        title: "Market Intelligence",
        subtitle: "NLP & Concall Analysis",
        description: "Augmenting classic financial analysis with AI-assisted concall transcript parsing, management tone tracking, guidance verification, and news aggregation.",
        microSentence: "Synthesizing earnings call transcripts, management guidance shifts, and market intelligence.",
        microSystemFlow: ["NEWS", "RESULTS", "CONCALL", "RESEARCH SIGNAL"],
        iconName: "Cpu",
        metrics: ["Concall Parsing", "Tone & Sentiment", "News Intelligence"]
      }
    ] as ResearchPillar[]
  },

  howIResearch: [
    {
      step: "01",
      title: "Business Understanding",
      headline: "Unit Economics & Economic Moats",
      description: "Deconstruct revenue streams, customer concentration, cost dynamics, unit economics, and durable competitive advantages.",
      deliverables: ["Revenue Driver Breakdown", "Economic Moat Audit", "Cost Structure Analysis"],
      iconName: "Building2"
    },
    {
      step: "02",
      title: "Industry & Macro Analysis",
      headline: "Sector Tailwinds & Competitive Forces",
      description: "Assess total addressable market (TAM), regulatory tailwinds, supply-demand dynamics, and Porter's 5 Forces.",
      deliverables: ["TAM Market Sizing", "Porter's 5 Forces", "Regulatory Tailwinds"],
      iconName: "TrendingUp"
    },
    {
      step: "03",
      title: "Financial Statement Forensics",
      headline: "Accounting Scrutiny & Cash Conversion",
      description: "Audit balance sheets, income statements, and cash flows over 5–10 years using DuPont ROE decomposition and working capital analysis.",
      deliverables: ["Historical 5-10Y Audit", "DuPont Decomposition", "Free Cash Flow Conversion"],
      iconName: "FileSpreadsheet"
    },
    {
      step: "04",
      title: "Valuation Framework",
      headline: "Intrinsic & Relative Enterprise Value",
      description: "Construct linked three-statement Excel models, Unlevered DCF with WACC sensitivity, and trading peer multiples.",
      deliverables: ["Linked 3-Statement Model", "DCF Sensitivity Matrix", "Peer Comps Multiples"],
      iconName: "Calculator"
    },
    {
      step: "05",
      title: "Investment Thesis Synthesis",
      headline: "Actionable Research Conclusion",
      description: "Synthesize findings into an institutional initiating coverage report with clear thesis drivers, catalysts, and downside risks.",
      deliverables: ["Initiating Coverage Report", "Thesis Catalysts", "Downside Risk Matrix"],
      iconName: "CheckCircle2"
    }
  ] as ResearchWorkflowStage[],

  featuredResearch: {
    ticker: "NSE: VRLLOG",
    title: "VRL Logistics Ltd.",
    badgeTitle: "Initiating Coverage",
    subtitle: "The Play of Operating Leverage in Indian Road Logistics",
    cohortBadge: "Equity Research Cohort · The Valuation School",
    mentor: "Parth Verma",
    reportPages: 34,
    date: "Dec 2025 – Jul 2026",
    pdfUrl: "/assets/docs/VRL_Logistics_Initiating_Coverage_Report.pdf",
    excelUrl: "/assets/docs/VRL_Logistics_Financial_Model_Kartik_Mathur.xlsx",
    coverImage: "/assets/images/vrl_report_cover.png",
    overview: "Authored an exhaustive 34-page initiating coverage equity research report on VRL Logistics Ltd., examining how transition from volume-chasing to margin-led growth drives operating leverage. Developed integrated financial models, DCF valuation, peer benchmarking against domestic and global logistics leaders, and corporate governance scrutiny.",
    disclaimer: "This project is an academic and portfolio research exercise conducted during the Equity Research Cohort at The Valuation School. It does not constitute investment advice, a target price, or a recommendation to buy, sell, or hold any security.",
    keyMetrics: [
      { label: "Report Length", value: "34 Pages", detail: "Comprehensive initiation study" },
      { label: "FY26 Net Revenue", value: "₹3,221 Cr", detail: "Tracked top-line execution" },
      { label: "EBITDA Margin", value: "20.8%", detail: "Operating margin expansion" },
      { label: "Return on Equity (ROE)", value: "21.0%", detail: "Benchmarked via DuPont analysis" },
      { label: "Indian Logistics TAM", value: "$178B → $429B", detail: "FY20 to FY35F projection" },
      { label: "Debt-Free Fleet", value: "77%", detail: "Fully depreciated asset-heavy fleet" },
    ],
    businessEngine: [
      { step: "01", title: "REVENUE", subtitle: "Freight Tariffs & Network Billing", detail: "Pan-India goods transport revenue generated through 1,290+ branches across 28 states." },
      { step: "02", title: "VOLUME GROWTH", subtitle: "B2B & LTL Tonnage Expansion", detail: "Market share capture from unorganized truckers accelerated by GST compliance." },
      { step: "03", title: "NETWORK SCALE", subtitle: "Hub-and-Spoke Density", detail: "Established transshipment hubs and ~5,900 vehicle fleet absorb higher route density." },
      { step: "04", title: "OPERATING LEVERAGE", subtitle: "Fixed Cost Absorption", detail: "Incremental volume routes at low marginal cost, driving dramatic margin throughput." },
      { step: "05", title: "EBITDA", subtitle: "20.8% Operating Margin", detail: "Operating margin expansion supported by in-house repairs and 77% debt-free fleet." },
      { step: "06", title: "FCF", subtitle: "Cash Flow Conversion", detail: "Strong operating cash conversion funds disciplined capex without debt stress." },
    ] as BusinessEngineStep[],
    thesisNodes: [
      {
        id: "fleet-moat",
        number: "01",
        title: "Asset-Heavy Competitive Moat",
        subtitle: "77% Debt-Free Fleet & In-House Workshops",
        summary: "VRL's dedicated fleet of ~5,900 commercial vehicles with in-house maintenance creates structural cost advantage.",
        detail: "Unlike asset-light aggregators dependent on volatile spot rates, VRL owns 77% of its fleet debt-free. In-house body-building and tyre retreading facilities lower operating cost per km by 12–15% versus unorganized peers.",
        metric: "77% Debt-Free"
      },
      {
        id: "operating-leverage",
        number: "02",
        title: "Operating Leverage Inflection",
        subtitle: "Fixed Network Infrastructure Arbitrage",
        summary: "With transshipment hubs already capitalized, incremental freight tonnage routes directly to operating profit.",
        detail: "A hub-and-spoke logistics network has high fixed overhead. As branch capacity utilization rises from 65% toward 80%, margin throughput accelerates without commensurate capital expenditure.",
        metric: "20.8% EBITDA"
      },
      {
        id: "macro-formalization",
        number: "03",
        title: "GST & Dedicated Freight Corridor",
        subtitle: "Structural Tailwinds Favoring Organized LTL",
        summary: "Indian road-freight TAM expanding from $178B to $429B by FY35 at 6.48% CAGR as formalization drives shift.",
        detail: "Strict compliance norms, E-way billing, and corporate vendor consolidation systematically shift volumes from unorganized operators to organized players with pan-India network tracking.",
        metric: "$429B TAM"
      },
      {
        id: "governance-balance-sheet",
        number: "04",
        title: "Capital Discipline & Governance Audit",
        subtitle: "60.2% Promoter Alignment & Zero Pledge",
        summary: "Promoter-led operating discipline with transparent capital allocation and robust return ratios (ROE 21.0%).",
        detail: "Comprehensive audit of board independence, auditor tenure, KMP remuneration, and related-party transactions confirmed clean governance posture with conservative balance sheet leverage.",
        metric: "21.0% ROE"
      }
    ] as ThesisNode[],
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
      description: "An AI-powered platform that processes quarterly earnings call transcripts to extract management commentary, financial highlights, guidance shifts, and Q&A tone analysis for rapid fundamental research.",
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

  technologyInResearch: {
    headline: "Technology in Research",
    subheadline: "Amplifying Fundamental Rigor",
    statement: "Experimenting with AI, automation and modern web technologies to improve how financial research is performed.",
    formula: [
      { label: "AI", role: "Transcript Parsing & NLP" },
      { label: "Automation", role: "Feed Ingestion & Model Pipeline" },
      { label: "Data", role: "Quantitative Market Signals" },
      { label: "Research", role: "Fundamental Thesis Discipline" }
    ],
    outcome: "Better Research Workflow",
    beyondTheTerminal: {
      title: "Beyond the Terminal",
      subtitle: "Finance → Technology → Experimentation",
      statement: "A focused experimentation space building custom software tools that accelerate financial analysis without replacing fundamental discipline.",
      experiments: [
        {
          id: "the-concall",
          title: "The Concall",
          category: "Earnings Call Intelligence",
          description: "AI-driven transcript parsing distilling 60-minute earnings calls into 2-minute actionable briefs with sentiment index and guidance tracking.",
          liveUrl: "https://the-concall.onrender.com/",
          accent: "#397C78"
        },
        {
          id: "optionforge",
          title: "OptionForge",
          category: "Derivatives Risk Analytics",
          description: "Black-Scholes Options Greeks calculator and multi-leg strategy payoff simulator with probability-of-profit modeling.",
          liveUrl: "https://preview-chat-adb68929-53bb-43eb-81d5-fd15060237fa.space-z.ai/",
          accent: "#65B89B"
        },
        {
          id: "news-aggregator",
          title: "Financial News Aggregator",
          category: "Real-Time Market Ingestion",
          description: "Multi-source RSS clustering platform categorizing corporate filings and headlines across sectors for pre-market preparation.",
          liveUrl: "https://news-aggregator-kartik.onrender.com/",
          accent: "#C5A46D"
        }
      ]
    }
  },

  capabilityClusters: [
    {
      id: "research",
      title: "Research",
      subtitle: "Company & Industry Discovery",
      iconName: "Compass",
      primarySkills: [
        "Company Analysis",
        "Industry Analysis",
        "Competitive Analysis",
        "Porter's Five Forces"
      ],
      expandedSkills: [
        "Equity Research",
        "SWOT Analysis",
        "Macroeconomic Analysis",
        "Investment Thesis Formulation",
        "Value Chain Mapping",
        "Market Sizing (TAM)",
        "Supply-Chain Positioning",
        "Corporate Governance Analysis"
      ]
    },
    {
      id: "financial-analysis",
      title: "Financial Analysis",
      subtitle: "Forensics & Financial Statements",
      iconName: "BarChart3",
      primarySkills: [
        "Financial Statements",
        "Ratio Analysis",
        "Financial Forecasting",
        "DuPont Analysis"
      ],
      expandedSkills: [
        "Working Capital Cycles",
        "Cash Flow Conversion",
        "Fixed Asset Schedules",
        "Forensic Accounting Checks",
        "Debt Schedules",
        "Historical 5-10Y Auditing",
        "Operating Margin Forensics"
      ]
    },
    {
      id: "valuation",
      title: "Valuation",
      subtitle: "Intrinsic & Relative Enterprise Value",
      iconName: "Calculator",
      primarySkills: [
        "Discounted Cash Flow (DCF)",
        "Trading Comps",
        "WACC & Cost of Equity",
        "CAPM Framework"
      ],
      expandedSkills: [
        "Relative Valuation",
        "EV/EBIT & EV/Revenue",
        "Terminal Growth Modeling",
        "Multi-Scenario Sensitivity Matrix",
        "Enterprise Value Triangulation",
        "Peer Multiples Benchmarking"
      ]
    },
    {
      id: "market",
      title: "Market",
      subtitle: "Market Intelligence & Derivatives",
      iconName: "Cpu",
      primarySkills: [
        "Market Intelligence",
        "Macroeconomics",
        "Sector Research",
        "Equity Derivatives"
      ],
      expandedSkills: [
        "Options Greeks (Delta, Gamma, Theta, Vega)",
        "Payoff Modeling",
        "Futures & Options Pricing",
        "Quarterly Concall Tracking",
        "Regulatory Filings Audit",
        "Screener.in & Financial Data Tools"
      ]
    }
  ] as CapabilityCluster[],

  // Legacy skills array maintained for backward compatibility
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
    },
    {
      id: "cfa-investing-simulator",
      title: "Investing Simulator Challenge 2026",
      issuer: "CFA Institute · Powered by AmplifyME",
      subtitle: "Simulated Institutional Multi-Asset Trading & Portfolio Management",
      issueDate: "October 8, 2026",
      status: "Challenge Completed",
      score: "100% Flow Execution · 0% Fat Finger Errors",
      imagePreview: "/assets/certificates/CFA_AmplifyME_Investing_Simulator_2026.jpg",
      pdfDownload: "/assets/certificates/AmplifyME_Asset_Management_Results.pdf",
      credentialDescription: "Completed the CFA Institute ICAN Investing Simulator Challenge (AmplifyME). Rotated across Sell-Side Investment Banking (Market Making) and Buy-Side Asset Management managing a simulated ~$20M institutional multi-asset book with real-time macro flow execution.",
      topics: [
        "Sell-Side Investment Banking: 56% Score · 100% First Flow Confirmation (FFC)",
        "Zero Operational Errors: 0% Fat Finger Errors across 76 real-time executions",
        "Buy-Side Asset Management: ~$19.8M Portfolio Value Managed",
        "Risk Containment: 68% Buy-Side Risk Management (BSRM) with ~50% Cash Preservation",
        "Live Market Equities: HSBC, Alibaba (BABA), BP, Volkswagen (VW), Microsoft (MSFT)",
        "Market Making: $51,350 Commission Generated across 63 Exchange & 13 Chat Trades"
      ]
    }
  ] as CertificateItem[],

  education: [
    {
      id: "cfa",
      degree: "CFA Level I Candidate",
      institution: "CFA Institute",
      period: "Active Candidate",
      gradeBadge: "CFA Program Candidate",
      highlights: [
        "Pursuing the global CFA program covering Financial Statement Analysis, Equity Valuation, Corporate Issuers, Fixed Income, Derivatives, Alternative Investments, and Ethical & Professional Standards.",
        "Disciplined focus on institutional-grade valuation frameworks and fiduciary ethics."
      ]
    },
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
        "Applying theoretical corporate finance to hands-on equity research, company valuation, and financial modelling."
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
        "Built strong quantitative foundation in Accountancy, Mathematics, Economics, and Business Studies."
      ]
    }
  ] as EducationItem[],

  careerTimeline: [
    {
      step: 1,
      title: "Class XII — Commerce with Mathematics",
      organization: "M.M. Public School, Delhi",
      periodOrDate: "2025",
      statusBadge: "Graduated",
      scoreOrDetail: "88% · Ranked 3rd in Class",
      description: "Established core quantitative foundation across Accountancy, Mathematics, Economics, and Business Studies.",
      type: "education"
    },
    {
      step: 2,
      title: "Bachelor of Commerce (Honours)",
      organization: "Vivekananda Institute of Professional Studies (VIPS-TC), Delhi",
      periodOrDate: "Aug 2025 – Present (Ongoing)",
      statusBadge: "Undergraduate Degree",
      scoreOrDetail: "CGPA: 8.20 / 10",
      description: "Rigorous curriculum covering Corporate Finance, Advanced Financial Accounting, Business Economics, and Financial Management.",
      type: "education",
      note: "Ongoing degree; research and certification milestones completed concurrently alongside academic terms."
    },
    {
      step: 3,
      title: "Equity Research Cohort",
      organization: "The Valuation School",
      periodOrDate: "2025–26 Cohort",
      statusBadge: "Mentored by Parth Verma",
      scoreOrDetail: "Completed & Certified",
      description: "Intensive cohort program focused on fundamental equity research, financial statement forensics, 3-statement financial modelling, and valuation discipline.",
      type: "cohort"
    },
    {
      step: 4,
      title: "NISM Series VIII — Equity Derivatives",
      organization: "National Institute of Securities Markets (NISM)",
      periodOrDate: "Jun 2026 · Valid until Jun 2029",
      statusBadge: "Passed Examination",
      scoreOrDetail: "Score: 70.25 / 100",
      description: "SEBI-mandated qualification verifying mastery in equity derivatives mechanics, Futures & Options pricing, Options Greeks hedging, and risk management.",
      type: "certification"
    },
    {
      step: 5,
      title: "VRL Logistics Ltd. Initiating-Coverage Report",
      organization: "Academic / Cohort Research Project",
      periodOrDate: "Dec 2025 – Jul 2026",
      statusBadge: "Initiating Coverage",
      scoreOrDetail: "34 Pages · Integrated Model",
      description: "Authored an exhaustive 34-page initiating coverage report on VRL Logistics Ltd. Conducted DCF valuation, relative EV/EBIT multiples, DuPont analysis, and peer benchmarking.",
      type: "research",
      note: "Cohort academic research project (not professional employment experience)."
    },
    {
      step: 6,
      title: "NISM Series XV — Research Analyst",
      organization: "National Institute of Securities Markets (NISM)",
      periodOrDate: "Aug 2026 · Valid until Aug 2029",
      statusBadge: "Passed Examination",
      scoreOrDetail: "Score: 61.75 / 100",
      description: "SEBI-mandated qualification for Research Analysts covering Indian regulatory frameworks, economic analysis, company valuation, and professional ethics.",
      type: "certification"
    },
    {
      step: 7,
      title: "CFA Level I Candidate",
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
