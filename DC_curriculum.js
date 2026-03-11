// ============================================================
// DC_curriculum.js — Washington D.C. Real Estate Study System
// DC Real Estate Commission — 2026
// Sources: DC DLCP, NMLS, PSI Exams
// ============================================================

const CURRICULUM_DC = {
  meta: {
    title: "DC Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "District of Columbia",
    stateCode: "DC",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 75, mlo: 75, federal_law: 75, ethics: 75 }
  },
  tracks: {
    broker: {
      id: "broker",
      label: "DC Real Estate Salesperson/Broker",
      icon: "🏛️",
      color: "#D22630",
      description: "DC Real Estate Commission (DLCP) — 60-hour pre-license + PSI Exams + District-specific requirements",
      requirements: [
        "18+ years old",
        "60 hours of approved pre-license education (Salesperson)",
        "Pass PSI exam: national + state sections; 75% passing score",
        "Background check",
        "Apply within 1 year of passing exam",
        "Must work under a licensed DC broker",
        "No disqualifying criminal conviction"
      ],
      fees: [
        { item: "60-hour pre-license education", amount: "$200–$700", note: "varies by provider" },
        { item: "PSI exam fee", amount: "$79", source: "PSI Exams" },
        { item: "Salesperson license fee", amount: "$200", source: "DC DLCP" },
        { item: "Background check", amount: "$40–$60", source: "DC Metro Police" },
        { item: "E&O Insurance", amount: "$200–$600/yr", note: "Required" }
      ],
      examStructure: {
        national: { items: 80, time: "150 minutes", passing: 75 },
        state: { items: 40, time: "90 minutes", passing: 75 }
      },
      modules: [
        {
          id: "dc_b01",
          order: 1,
          title: "Licensing Process & DC DLCP Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map the complete DC licensing process through the Department of Licensing and Consumer Protection.",
          content: [
            {
              heading: "Who Regulates DC Real Estate",
              body: "The DC Real Estate Commission, administered by the Department of Licensing and Consumer Protection (DLCP), licenses real estate salespersons and brokers in Washington, D.C.\n\nDC requires 60 hours of pre-license education. The PSI exam consists of a national section and DC-specific state section, both requiring 75% to pass.\n\nLicense types in DC:\n• Salesperson — entry level; must work under a licensed DC broker\n• Associate Broker — broker-level knowledge, still works under supervising broker\n• Broker — can operate independently\n\nCE requirements: 15 hours every 2 years."
            },
            {
              heading: "DC-Specific Real Estate Law",
              body: "Washington DC has unique real estate laws due to its status as the nation's capital:\n\nTenant Opportunity to Purchase Act (TOPA): DC tenants have a RIGHT OF FIRST REFUSAL when their building is sold. This is one of the strongest tenant protection laws in the nation and heavily tested on the DC exam.\n\nRent Control: DC has extensive rent control laws covering most residential properties built before 1976. Exemptions include single-family homes and buildings with 4 or fewer units if owner-occupied.\n\nHistoric Preservation: A significant portion of DC properties are in historic districts. Renovations require Historic Preservation Review Board (HPRB) approval.\n\nCondominium conversions: DC has strict regulations on converting rental buildings to condos, including tenant notification and purchase rights.\n\nTransfer tax: DC charges a recordation tax (buyer) and transfer tax (seller) on real estate transactions — both parties pay."
            },
            {
              heading: "Exam Structure and Application",
              body: "DC uses PSI Exams for its licensing exam.\n\nExam structure:\n• National section: 80 questions, 150 minutes, 75% passing score\n• State (DC) section: 40 questions, 90 minutes, 75% passing score\n• Must pass BOTH sections separately\n\nAfter passing:\n• Apply within 1 year of passing both sections\n• Submit application to DC DLCP\n• Submit background check\n• Pay license fee of $200\n• Identify sponsoring broker"
            }
          ],
          quiz: [
            {
              id: "dc_b01q01",
              prompt: "Under the DC Tenant Opportunity to Purchase Act (TOPA), what right do tenants have when their building is being sold?",
              choices: [
                "The right to receive 60 days notice before the sale closes",
                "The right of first refusal to purchase the property",
                "The right to remain in the property for 1 year after sale",
                "The right to negotiate reduced rent with the new owner"
              ],
              answer: 1,
              explanation: "DC's Tenant Opportunity to Purchase Act (TOPA) gives tenants a right of first refusal when their building is offered for sale. This is one of the strongest tenant protection laws in the nation and a heavily tested DC-specific topic. Tenants can purchase the property at the same price offered to outside buyers."
            },
            {
              id: "dc_b01q02",
              prompt: "DC rent control generally applies to residential properties built before which year?",
              choices: ["1968", "1976", "1985", "1990"],
              answer: 1,
              explanation: "DC rent control generally covers residential properties built before 1976, with exemptions for small buildings with 4 or fewer units if owner-occupied, single-family homes, hotels, and federally subsidized housing."
            },
            {
              id: "dc_b01q03",
              prompt: "In a DC real estate transaction, who pays the recordation tax and transfer tax?",
              choices: [
                "Only the buyer pays both taxes",
                "Only the seller pays both taxes",
                "Both the buyer (recordation) and seller (transfer) each pay their respective tax",
                "The taxes are split 50/50 between buyer and seller regardless of type"
              ],
              answer: 2,
              explanation: "In DC, the buyer pays the recordation tax and the seller pays the transfer tax. Unlike some states where only one party pays transfer costs, DC charges both parties separately."
            }
          ]
        },
        {
          id: "dc_b02",
          order: 2,
          title: "DC Tenant Law & Property Rights",
          week: "3-4",
          passingScore: 75,
          icon: "🏠",
          objective: "Master DC tenant protections, TOPA, rent control, and property rights unique to the District.",
          content: [
            {
              heading: "Tenant Opportunity to Purchase Act (TOPA) Deep Dive",
              body: "TOPA is the most DC-specific law tested on the DC real estate exam.\n\nTOPA applies when:\n• An owner wants to sell a rental property\n• The property is occupied by tenants\n\nTOPA process:\n1. Owner must give tenants written notice of intent to sell\n2. Tenants have the right to match any bona fide offer\n3. Tenants can assign their TOPA rights to a third party\n4. Specific deadlines apply based on building type\n\nBuilding-size deadlines vary:\n• 5+ units: 30 days to express interest, 120 days to settle\n• Smaller buildings: shorter timelines\n\nTOPA waiver: Tenants may waive TOPA rights in writing."
            },
            {
              heading: "DC Rent Control Essentials",
              body: "DC's Rental Housing Act provides rent control protections:\n\nCovered properties (generally):\n• Buildings with 5+ units built before 1976\n\nExemptions include:\n• Single-family homes\n• Buildings with 4 or fewer units if owner occupies one\n• Buildings built after 1975\n• Federally subsidized housing\n• Vacant units (vacancy decontrol — owner can reset rent to market)\n\nAllowable annual rent increases: Based on CPI (Consumer Price Index), set annually by DC\n\nHardship petitions: Landlords can petition for above-guideline increases; tenants can petition for rent reductions."
            }
          ],
          quiz: [
            {
              id: "dc_b02q01",
              prompt: "A tenant in a DC building with 5 or more units receives a TOPA notice. How many days do they typically have to express interest in purchasing?",
              choices: ["15 days", "30 days", "60 days", "90 days"],
              answer: 1,
              explanation: "Under TOPA for buildings with 5 or more units, tenants have 30 days to express their interest in purchasing after receiving the owner's notice of intent to sell. After expressing interest, they have up to 120 days to complete the purchase."
            }
          ]
        }
      ]
    },
    mlo: {
      id: "mlo",
      label: "DC Mortgage Loan Originator",
      icon: "🏦",
      color: "#4C9AC9",
      description: "DC MLO License — SAFE National Test + Uniform State Test + DC DFI requirements",
      requirements: [
        "Complete 20 hours NMLS-approved pre-licensing education",
        "Pass SAFE MLO National Test with Uniform State Test",
        "Criminal background check and credit report",
        "Submit application through NMLS",
        "Sponsorship by DC-licensed mortgage company"
      ],
      fees: [
        { item: "SAFE MLO Test", amount: "$110", source: "NMLS" },
        { item: "Application fee", amount: "$200", source: "DC" },
        { item: "Criminal background check", amount: "$39", source: "NMLS" },
        { item: "Credit report", amount: "$15", source: "NMLS" }
      ],
      modules: [
        {
          id: "dc_m01",
          order: 1,
          title: "DC MLO Licensing & NMLS",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map DC MLO licensing through NMLS and the DC Department of Insurance, Securities and Banking (DISB).",
          content: [
            {
              heading: "DC MLO Regulatory Authority",
              body: "The DC Department of Insurance, Securities and Banking (DISB) regulates mortgage loan originators in the District of Columbia.\n\nAll applications are submitted through NMLS. DC requires 20 hours of NMLS-approved pre-license education.\n\nDC-specific MLO considerations:\n• High property values mean large loan amounts are common\n• Condo loans are prevalent given DC's housing market\n• TOPA compliance affects some purchase transactions\n• Knowledge of DC-specific disclosure requirements is essential"
            }
          ],
          quiz: [
            {
              id: "dc_m01q01",
              prompt: "Which DC agency regulates mortgage loan originators?",
              choices: [
                "DC Real Estate Commission (DLCP)",
                "DC Department of Insurance, Securities and Banking (DISB)",
                "DC Office of the Attorney General",
                "The Federal Reserve Bank of DC"
              ],
              answer: 1,
              explanation: "The DC Department of Insurance, Securities and Banking (DISB) regulates mortgage loan originators in DC. The Real Estate Commission (under DLCP) handles real estate broker licenses. Both use NMLS for their respective licensing systems."
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
      description: "DC real-world skills: TOPA compliance, condo transactions, historic property, high-value urban market",
      modules: [
        {
          id: "dc_p01",
          order: 1,
          title: "DC Transaction Skills & TOPA Compliance",
          week: "9-10",
          passingScore: 75,
          icon: "📅",
          objective: "Master DC-specific transaction workflows including TOPA compliance, historic property considerations, and condo law.",
          content: [
            {
              heading: "TOPA Compliance in Transactions",
              body: "Every DC real estate professional must understand TOPA compliance:\n\nSeller's obligations:\n1. Serve written notice on ALL tenants before marketing the property\n2. Include specific required language about tenant rights\n3. Observe required waiting periods before accepting offers from outside buyers\n4. Record a Memorandum of TOPA rights at closing\n\nBuyer's due diligence:\n• Confirm TOPA process has been properly completed\n• Review tenant waivers or certificates of compliance\n• Understand timeline impact — TOPA adds weeks to a transaction\n\nPenalties for TOPA violations: tenants can void the sale and purchase the property themselves."
            }
          ],
          quiz: [
            {
              id: "dc_p01q01",
              prompt: "A DC seller fails to provide proper TOPA notice to tenants before selling the building. What can the tenants do?",
              choices: [
                "File a complaint with DLCP against the seller's agent",
                "Void the sale and exercise their right to purchase the property",
                "Collect money damages equal to 3 months rent",
                "Nothing — TOPA is optional for small buildings"
              ],
              answer: 1,
              explanation: "If a DC seller fails to properly comply with TOPA, the tenants have the right to void the sale and exercise their right to purchase the property. This is a powerful tenant remedy that makes TOPA compliance essential in every DC transaction involving tenanted property."
            }
          ]
        }
      ]
    }
  },
  studyPlan: [
    { weeks: "1-2", focus: "DC licensing process, DLCP rules, TOPA overview" },
    { weeks: "3-4", focus: "Rent control, tenant law, historic preservation" },
    { weeks: "5-6", focus: "Agency, contracts, federal mortgage law" },
    { weeks: "7-8", focus: "DC state law deep dive + condo law" },
    { weeks: "9-10", focus: "Practical skills: TOPA compliance, high-value transactions" },
    { weeks: "11-12", focus: "Exam readiness: schedule PSI exam, full mock exams" }
  ],
  resources: [
    { label: "DC Real Estate Commission (DLCP)", url: "https://dlcp.dc.gov/service/real-estate-licenses", category: "broker" },
    { label: "DC TOPA Information", url: "https://dhcd.dc.gov/page/tenant-opportunity-purchase", category: "broker" },
    { label: "DC Rent Control", url: "https://dhcd.dc.gov/service/rent-control", category: "broker" },
    { label: "DC DISB MLO Licensing", url: "https://disb.dc.gov/page/mortgage-lender-licensing", category: "mlo" },
    { label: "NMLS DC Requirements", url: "https://mortgage.nationwidelicensingsystem.org/", category: "mlo" }
  ]
};
if (typeof module !== 'undefined') module.exports = CURRICULUM_DC;
