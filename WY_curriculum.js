// ============================================================
// WY_curriculum.js — Wyoming Real Estate Study System
// Wyoming Real Estate Commission — 2026
// Sources: Wyoming Real Estate Commission, NMLS, PSI Exams
// ============================================================

const CURRICULUM_WY = {

  meta: {
    title: "WY Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Wyoming",
    stateCode: "WY",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 70, mlo: 75, federal_law: 75, ethics: 75 }
  },

  tracks: {
    broker: {
      id: "broker",
      label: "WY Real Estate Salesperson/Broker",
      icon: "🦌",
      color: "#FFC425",
      description: "Wyoming Real Estate Commission — 54-hour pre-license + PSI Exams + state-specific requirements",
      requirements: [
        "18+ years old",
        "54 hours of approved pre-license education (Salesperson)",
        "Pass PSI exam: national + state sections; 70% passing score",
        "Background check",
        "Apply within 1 year of passing exam",
        "Must work under a licensed Wyoming broker",
        "No disqualifying criminal conviction"
      ],
      fees: [
        { item: "54-hour pre-license education", amount: "$200–$600", note: "varies by provider" },
        { item: "PSI exam fee", amount: "$100", source: "PSI Exams" },
        { item: "Salesperson license fee", amount: "$300", source: "WY RE Commission" },
        { item: "Background check", amount: "$40–$60", source: "State" },
        { item: "E&O Insurance", amount: "$200–$500/yr", note: "Required" }
      ],
      examStructure: {
        national: { items: 80, time: "150 minutes", passing: 70 },
        state: { items: 40, time: "90 minutes", passing: 70 }
      },
      modules: [
        {
          id: "wy_b01",
          order: 1,
          title: "Licensing Process & Wyoming Commission Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map the complete Wyoming licensing process: pre-license education, PSI exam, application, and renewal requirements.",
          content: [
            {
              heading: "Who Regulates Wyoming Real Estate",
              body: "The Wyoming Real Estate Commission licenses and regulates real estate salespersons and brokers in Wyoming.\n\nWyoming requires 54 hours of pre-license education before taking the PSI licensing exam.\n\nLicense types in Wyoming:\n• Salesperson — entry level; must work under a licensed broker\n• Broker-Salesperson — works under a broker but has more responsibilities\n• Broker — can operate independently and supervise salespersons\n\nThe PSI exam consists of a national section (80 questions) and a state section (40 questions). Passing score is 70% on both.\n\nCE requirements: 15 hours every 2 years (must include 3 hours Wyoming law)."
            },
            {
              heading: "54-Hour Pre-License Education",
              body: "Wyoming requires 54 hours of approved pre-license education covering:\n\n• Real estate principles and practices\n• Wyoming real estate law\n• Agency law and disclosures\n• Contracts and purchase agreements\n• Finance and mortgages\n• Property ownership and transfer\n• Valuation and appraisal\n• Fair housing and anti-discrimination law\n• Environmental issues in Wyoming\n• Wyoming-specific statutes and regulations\n\nWyoming-specific education note: Wyoming has no state income tax. Wyoming has unique land use regulations involving federal land management (BLM, Forest Service) since the federal government owns approximately 50% of Wyoming land. Water rights in Wyoming follow the prior appropriation doctrine ('first in time, first in right')."
            },
            {
              heading: "Exam Structure and Application Process",
              body: "Wyoming uses PSI Exams for its licensing exam.\n\nExam structure:\n• National section: 80 questions, 150 minutes, 70% passing score\n• State section: 40 questions, 90 minutes, 70% passing score\n• Must pass BOTH sections separately\n\nAfter passing:\n• Apply within 1 year of passing both sections\n• Submit application to Wyoming Real Estate Commission\n• Submit background check results\n• Pay license fee of $300\n• Identify sponsoring broker\n\nRetakes: Failed sections may be retaken separately after waiting period."
            },
            {
              heading: "Wyoming-Specific Real Estate Law",
              body: "Key Wyoming real estate law topics:\n\nWyoming is a prior appropriation state for water rights — water rights are property rights that must be disclosed and transferred with the property.\n\nFederal land adjacency: With approximately 50% of Wyoming owned by the federal government (BLM, National Parks, National Forests), boundary issues, access easements, and grazing rights are common real estate issues.\n\nMineral rights: Wyoming has significant mineral wealth (oil, gas, coal, trona). Mineral rights may be severed from surface rights — licensees must always investigate mineral rights ownership.\n\nNo state income tax, no state inheritance tax: Wyoming is a tax-friendly state that attracts investors and wealthy buyers.\n\nWater rights follow prior appropriation — 'first in time, first in right' — and must be transferred with property."
            }
          ],
          quiz: [
            {
              id: "wy_b01q01",
              prompt: "How many hours of pre-license education does Wyoming require before taking the PSI exam?",
              choices: ["40 hours", "54 hours", "60 hours", "90 hours"],
              answer: 1,
              explanation: "Wyoming requires 54 hours of approved pre-license education for the Salesperson license before candidates can sit for the PSI licensing exam."
            },
            {
              id: "wy_b01q02",
              prompt: "Wyoming follows which doctrine for water rights?",
              choices: [
                "Riparian rights (ownership by adjacency)",
                "Prior appropriation ('first in time, first in right')",
                "Federal allocation by the Bureau of Land Management",
                "Equal sharing among all neighboring landowners"
              ],
              answer: 1,
              explanation: "Wyoming follows the prior appropriation doctrine for water rights — 'first in time, first in right.' Water rights are property rights that can be separated from the land and must be properly disclosed and transferred in real estate transactions."
            },
            {
              id: "wy_b01q03",
              prompt: "Approximately what percentage of Wyoming's land is owned by the federal government?",
              choices: ["10%", "25%", "50%", "75%"],
              answer: 2,
              explanation: "Approximately 50% of Wyoming is owned by the federal government (BLM, National Parks, National Forests, etc.). This creates unique real estate issues around access easements, boundary disputes, and adjacency to federal land that Wyoming licensees must understand."
            },
            {
              id: "wy_b01q04",
              prompt: "In Wyoming, a property may have severed mineral rights. This means:",
              choices: [
                "The surface owner automatically owns all minerals below the ground",
                "Mineral rights may be owned separately from the surface rights",
                "Only the federal government can own mineral rights in Wyoming",
                "Mineral rights expire after 10 years if not used"
              ],
              answer: 1,
              explanation: "In Wyoming, mineral rights (oil, gas, coal, trona, etc.) may be severed from the surface rights and owned by a different party. Wyoming licensees must always investigate mineral rights ownership as it significantly affects property value and use."
            }
          ]
        },
        {
          id: "wy_b02",
          order: 2,
          title: "Wyoming Property Law & Federal Land Issues",
          week: "3-4",
          passingScore: 75,
          icon: "🏔️",
          objective: "Master Wyoming-specific property law including water rights, mineral rights, federal land adjacency, and deed types.",
          content: [
            {
              heading: "Water Rights in Wyoming",
              body: "Wyoming follows the prior appropriation doctrine — water rights are property rights independent of land ownership.\n\nKey principles:\n• Senior rights (older) have priority over junior rights (newer) in times of shortage\n• Water rights must be used beneficially or they can be abandoned\n• Water rights must be disclosed in real estate transactions\n• A title search for Wyoming property should include water rights research\n\nForms of water rights:\n• Adjudicated water rights: formally recognized by Wyoming State Engineer\n• Stock ponds and small impoundments: may not require formal appropriation\n• Groundwater permits: issued by Wyoming State Engineer's Office"
            },
            {
              heading: "Mineral Rights and Severance",
              body: "Wyoming is a major mineral-producing state. Mineral rights may be:\n• Unsevered: same owner as surface (full mineral rights with the property)\n• Severed: separate owner from surface (split estate)\n\nDisclosure requirements:\n• Wyoming licensees must disclose known mineral rights status\n• Oil and gas activity (wells, pipelines, surface use agreements) must be disclosed\n• Trona (sodium sesquicarbonate) mining is significant in southwest Wyoming\n\nFor buyers:\n• Always request a mineral rights title search\n• Surface Use Agreements govern how mineral owners can use the surface\n• Federal mineral rights are governed by federal law, not Wyoming state law"
            },
            {
              heading: "Federal Land and Access Issues",
              body: "Wyoming's unique federal land situation creates real estate issues:\n\nAccess to land-locked parcels:\n• Many private parcels are surrounded by or bordered by federal land\n• Access easements (RS 2477 rights-of-way) may exist\n• Always verify legal and physical access to any Wyoming property\n\nGrazing leases:\n• Federal grazing permits have value but are NOT real property\n• BLM and Forest Service grazing leases can be bought/sold but are not attached to land\n\nConservation easements:\n• Common in Wyoming to preserve ranch land\n• Reduces value for development but provides tax benefits\n• Must be disclosed to buyers"
            }
          ],
          quiz: [
            {
              id: "wy_b02q01",
              prompt: "A Wyoming property has senior water rights and junior water rights both drawing from the same stream. During drought conditions:",
              choices: [
                "All rights holders share equally regardless of seniority",
                "Junior rights are curtailed first; senior rights holders get their full allocation",
                "The state distributes water equally to all users",
                "The federal government controls all water allocation"
              ],
              answer: 1,
              explanation: "Under Wyoming's prior appropriation doctrine, senior (older) rights have priority over junior (newer) rights. In times of shortage, junior rights are curtailed first until senior rights holders receive their full appropriation."
            }
          ]
        },
        {
          id: "wy_b03",
          order: 3,
          title: "Wyoming Agency & Contracts",
          week: "3-4",
          passingScore: 75,
          icon: "📄",
          objective: "Apply Wyoming agency disclosure rules, contract requirements, and transaction management skills.",
          content: [
            {
              heading: "Agency Disclosure in Wyoming",
              body: "Wyoming requires written agency disclosure before substantive discussions. The Wyoming Real Estate Commission provides standard agency disclosure forms.\n\nTypes of agency in Wyoming:\n• Seller's agent — represents the seller\n• Buyer's agent — represents the buyer\n• Dual agent — represents both with written consent\n• Transaction broker — facilitates the transaction without representing either party\n\nThe transaction broker concept is used in Wyoming when a licensee assists both parties without creating a fiduciary relationship."
            },
            {
              heading: "Wyoming Contract Essentials",
              body: "Wyoming real estate contracts must include:\n• Identification of all parties\n• Legal description of property\n• Purchase price and terms\n• Earnest money provisions\n• Contingencies (inspection, financing, appraisal)\n• Closing date\n• Personal property inclusions/exclusions\n\nWyoming mineral rights: Purchase contracts should specifically address mineral rights — whether included, excluded, or what percentage transfers.\n\nEarnest money: Deposited in broker trust account within 2 banking days."
            }
          ],
          quiz: [
            {
              id: "wy_b03q01",
              prompt: "In a Wyoming real estate transaction, what is the role of a 'transaction broker'?",
              choices: [
                "The same as a dual agent — full fiduciary duties to both parties",
                "Facilitates the transaction without representing either party in a fiduciary capacity",
                "Only represents the seller in all transactions",
                "A title company employee who manages the transaction"
              ],
              answer: 1,
              explanation: "A transaction broker in Wyoming facilitates the transaction and assists both parties without creating a fiduciary agency relationship with either. This differs from dual agency (where fiduciary duties exist to both parties). Transaction brokerage requires disclosure and is used when neither party wants full representation."
            }
          ]
        }
      ]
    },

    mlo: {
      id: "mlo",
      label: "WY Mortgage Loan Originator",
      icon: "🏦",
      color: "#4C9AC9",
      description: "Wyoming MLO License — SAFE National Test + Uniform State Test + Wyoming Division of Banking requirements",
      requirements: [
        "Complete 20 hours NMLS-approved pre-licensing education",
        "Pass SAFE MLO National Test with Uniform State Test",
        "Criminal background check and credit report",
        "Submit application through NMLS",
        "Sponsorship by Wyoming-licensed mortgage company",
        "Wyoming Division of Banking approval"
      ],
      fees: [
        { item: "SAFE MLO Test", amount: "$110", source: "NMLS" },
        { item: "Application fee", amount: "$150", source: "Wyoming" },
        { item: "Criminal background check", amount: "$39", source: "NMLS" },
        { item: "Credit report", amount: "$15", source: "NMLS" },
        { item: "20-hour NMLS education", amount: "Varies by provider" }
      ],
      modules: [
        {
          id: "wy_m01",
          order: 1,
          title: "Wyoming MLO Licensing & NMLS",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map Wyoming MLO licensing through NMLS including education, testing, and Division of Banking application.",
          content: [
            {
              heading: "Wyoming MLO Regulatory Authority",
              body: "The Wyoming Division of Banking regulates mortgage loan originators in Wyoming.\n\nAll applications submitted through NMLS. Wyoming requires 20 hours of NMLS-approved pre-license education.\n\nWyoming MLO annual CE: 8 hours (3 federal law + 2 ethics + 2 non-traditional + 1 hour state law).\n\nWyoming unique consideration: Many Wyoming MLOs handle unique loan types including agricultural property loans, ranch financing, and loans involving severed mineral rights."
            }
          ],
          quiz: [
            {
              id: "wy_m01q01",
              prompt: "Which Wyoming state agency regulates mortgage loan originators?",
              choices: [
                "Wyoming Real Estate Commission",
                "Wyoming Division of Banking",
                "Wyoming Insurance Department",
                "Wyoming Secretary of State"
              ],
              answer: 1,
              explanation: "The Wyoming Division of Banking regulates mortgage loan originators in Wyoming. The Real Estate Commission handles real estate broker licenses, while the Division of Banking handles MLO licensing through the NMLS system."
            }
          ]
        }
      ]
    },

    practical: {
      id: "practical",
      label: "Practical Money Skills",
      icon: "💼",
      color: "#4CC97A",
      description: "Wyoming real-world skills: ranch transactions, mineral rights disclosure, federal land adjacency, investor analysis",
      modules: [
        {
          id: "wy_p01",
          order: 1,
          title: "Wyoming Ranch & Rural Transaction Skills",
          week: "9-10",
          passingScore: 75,
          icon: "🐄",
          objective: "Master Wyoming-specific transaction workflows for ranch, rural, and mineral-rights-involved properties.",
          content: [
            {
              heading: "Ranch Transaction Checklist",
              body: "Wyoming ranch transactions require additional due diligence beyond standard residential sales:\n\n□ Water rights inventory and adjudication status\n□ Mineral rights ownership (severed or intact)\n□ Grazing lease status (BLM, Forest Service, State)\n□ Access easements and road rights\n□ Fencing agreements with neighbors\n□ Conservation easements (if any)\n□ Agricultural use classification for property tax\n□ Water wells and stock ponds — permits and capacity\n□ Environmental issues (old fuel tanks, abandoned wells)\n\nMany Wyoming ranch sales require a specialized ranch and recreational property broker who understands these unique components."
            },
            {
              heading: "Mineral Rights in Transactions",
              body: "Best practices for Wyoming mineral rights in transactions:\n\n1. Always ask: Are mineral rights severed or intact?\n2. Run a mineral title search (separate from surface title)\n3. Disclose all known oil/gas activity, leases, or agreements\n4. Include mineral rights status in purchase contract\n5. Explain surface use agreement implications to buyer\n\nIf mineral rights are severed:\n• Buyer acquires surface only\n• Mineral owner retains right to surface access for extraction\n• Surface Use Agreement governs how access occurs\n• Buyers should understand the implications before closing"
            }
          ],
          quiz: [
            {
              id: "wy_p01q01",
              prompt: "When representing a buyer of Wyoming ranch property, which of the following is MOST important to investigate?",
              choices: [
                "HOA rules and regulations",
                "Water rights, mineral rights, and federal land access",
                "Local zoning for commercial development",
                "Neighborhood school ratings"
              ],
              answer: 1,
              explanation: "Wyoming ranch transactions require thorough investigation of water rights (prior appropriation), mineral rights (possible severance), and federal land access issues. These factors can significantly affect property value and use in ways that don't apply in most other states."
            }
          ]
        }
      ]
    }
  },

  studyPlan: [
    { weeks: "1-2", focus: "Wyoming licensing process, Commission rules, unique state law" },
    { weeks: "3-4", focus: "Water rights, mineral rights, federal land law" },
    { weeks: "5-6", focus: "Agency, contracts, federal mortgage law" },
    { weeks: "7-8", focus: "Wyoming state law deep dive + remediation" },
    { weeks: "9-10", focus: "Practical skills: ranch transactions, mineral rights disclosure" },
    { weeks: "11-12", focus: "Exam readiness: schedule PSI exam, full mock exams" }
  ],

  resources: [
    { label: "Wyoming Real Estate Commission", url: "https://realestate.wyo.gov/", category: "broker" },
    { label: "PSI Exam Scheduling", url: "https://candidate.psiexams.com/", category: "broker" },
    { label: "Wyoming Division of Banking", url: "https://will.wyo.gov/banking-division", category: "mlo" },
    { label: "NMLS Wyoming Requirements", url: "https://mortgage.nationwidelicensingsystem.org/", category: "mlo" },
    { label: "Wyoming State Engineer (Water Rights)", url: "https://seo.wyo.gov/", category: "broker" }
  ]
};

if (typeof module !== 'undefined') module.exports = CURRICULUM_WY;
