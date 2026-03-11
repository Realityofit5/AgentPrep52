// ============================================================
// AR_curriculum.js — Arkansas Real Estate Study System
// Arkansas Real Estate Commission (AREC) Broker/Salesperson License — 2026
// Sources: Arkansas Real Estate Commission (AREC), NMLS, PSI Exams
// ============================================================

const CURRICULUM_AR = {

  meta: {
    title: "AR Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Arkansas",
    stateCode: "AR",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 70, mlo: 75, federal_law: 75, ethics: 75 }
  },

  tracks: {
    broker: {
      id: "broker",
      label: "AR Real Estate Salesperson/Broker",
      icon: "💎",
      color: "#BF0A30",
      description: "Arkansas Real Estate Commission (AREC) — 60-hour pre-license + PSI Exams + state-specific requirements",
      requirements: [
        "18+ years old",
        "60 hours of approved pre-license education (Salesperson)",
        "Pass PSI exam: national + state sections; 70% passing score",
        "Background check via Arkansas State Police",
        "Apply within 90 days of passing exam",
        "Must be sponsored by a licensed Arkansas broker",
        "No disqualifying criminal conviction"
      ],
      fees: [
        { item: "60-hour pre-license education", amount: "$200–$600", note: "varies by provider" },
        { item: "PSI exam fee", amount: "$75", source: "PSI Exams" },
        { item: "Salesperson license fee", amount: "$50", source: "AREC" },
        { item: "Background check", amount: "$25–$50", source: "State" },
        { item: "E&O Insurance", amount: "$200–$500/yr", note: "Required" }
      ],
      examStructure: {
        national: { items: 80, time: "150 minutes", passing: 70 },
        state: { items: 40, time: "90 minutes", passing: 70 }
      },
      modules: [
        {
          id: "ar_b01",
          order: 1,
          title: "Licensing Process & AREC Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map the complete Arkansas licensing process: pre-license education, PSI exam, application, and renewal requirements.",
          content: [
            {
              heading: "Who Regulates Arkansas Real Estate",
              body: "The Arkansas Real Estate Commission (AREC) licenses and regulates real estate salespersons and brokers in Arkansas.\n\nArkansas requires 60 hours of pre-license education before taking the PSI licensing exam.\n\nLicense types in Arkansas:\n• Salesperson — entry level; must work under a licensed broker\n• Broker — requires 2 years active experience + 60 additional hours; can operate independently\n\nThe PSI exam consists of a national section (80 questions, 150 min) and a state section (40 questions, 90 min). Passing score is 70% on both.\n\nCE requirements: 7 hours every year."
            },
            {
              heading: "60-Hour Pre-License Education",
              body: "Arkansas requires 60 hours of AREC-approved pre-license education covering:\n\n• Real estate principles and practices\n• Arkansas real estate law (Arkansas Real Estate License Law)\n• Agency law and disclosures\n• Contracts and purchase agreements\n• Finance and mortgages\n• Property ownership and transfer\n• Valuation and appraisal\n• Fair housing and anti-discrimination law\n• Environmental issues in Arkansas\n• Arkansas-specific statutes and regulations\n\nArkansas-specific education note: Arkansas uses a race-notice recording statute. Arkansas has specific disclosure requirements under the Arkansas Residential Disclosure Act. Arkansas does not have a state income tax on wages (phased out by 2024)."
            },
            {
              heading: "Exam Structure and Application Process",
              body: "Arkansas uses PSI Exams for its licensing exam.\n\nExam structure:\n• National section: 80 questions, 150 minutes, 70% passing score\n• State section: 40 questions, 90 minutes, 70% passing score\n• Must pass BOTH sections separately\n\nAfter passing:\n• Apply within 90 days of passing both sections\n• Submit application to AREC\n• Submit background check results (Arkansas State Police)\n• Pay license fee of $50\n• Identify sponsoring broker\n\nRetakes: Failed sections may be retaken separately. After 4 failed attempts, additional education may be required."
            },
            {
              heading: "License Renewal and Continuing Education",
              body: "Arkansas licenses are renewed annually (December 31 deadline).\n\nCE requirements: 7 hours per year.\n\nRequired CE topics include:\n• 1 hour Arkansas Real Estate Commission Update\n• Fair housing\n• Ethics\n• Additional elective hours\n\nArkansas-specific requirement: All licensees must complete the mandatory AREC Update course each year, which covers current law changes and regulatory updates."
            },
            {
              heading: "Arkansas-Specific Real Estate Law",
              body: "Key Arkansas real estate law topics:\n\nArkansas Residential Disclosure Act: Sellers of 1-4 unit residential properties must complete a disclosure form revealing known material defects.\n\nAgency: Arkansas adopted the Arkansas Real Estate License Law and Commission Rules governing agency relationships.\n\nArkansas unique aspects:\n• Non-attorney closing state — real estate licensees may not conduct closings; title companies or attorneys handle closings\n• Arkansas has no homestead exemption for purposes of forced sale by general creditors\n• Water rights follow the riparian rights doctrine (eastern Arkansas) in some areas\n\nEvery Arkansas real estate licensee must understand these state-specific requirements as they appear on the state exam and arise in daily practice."
            }
          ],
          quiz: [
            {
              id: "ar_b01q01",
              prompt: "How many hours of pre-license education does Arkansas require before taking the PSI exam?",
              choices: ["30 hours", "45 hours", "60 hours", "90 hours"],
              answer: 2,
              explanation: "Arkansas requires 60 hours of AREC-approved pre-license education for the Salesperson license. This must be completed before candidates can sit for the PSI licensing exam."
            },
            {
              id: "ar_b01q02",
              prompt: "What is the passing score required on both sections of the Arkansas PSI licensing exam?",
              choices: ["65%", "70%", "75%", "80%"],
              answer: 1,
              explanation: "Arkansas requires a passing score of 70% on both the national section and the state section of the PSI licensing exam. Both must be passed separately."
            },
            {
              id: "ar_b01q03",
              prompt: "Arkansas real estate licenses must be renewed by what annual deadline?",
              choices: ["September 30", "October 31", "December 31", "January 31"],
              answer: 2,
              explanation: "Arkansas real estate licenses expire December 31 each year and must be renewed annually. Licensees must complete 7 hours of CE including the mandatory AREC Update course before renewing."
            },
            {
              id: "ar_b01q04",
              prompt: "Under the Arkansas Residential Disclosure Act, which properties require a seller disclosure form?",
              choices: [
                "Only properties over $200,000",
                "All commercial and residential properties",
                "1-4 unit residential properties",
                "Only new construction properties"
              ],
              answer: 2,
              explanation: "The Arkansas Residential Disclosure Act requires sellers of 1-4 unit residential properties to complete a disclosure form revealing known material defects. This is a mandatory disclosure requirement in Arkansas."
            }
          ]
        },
        {
          id: "ar_b02",
          order: 2,
          title: "Property Ownership & Arkansas Land Law",
          week: "1-2",
          passingScore: 75,
          icon: "🏠",
          objective: "Identify property ownership types, encumbrances, legal descriptions, and Arkansas-specific land issues.",
          content: [
            {
              heading: "Real vs. Personal Property",
              body: "Real property: land and all permanently attached improvements. Personal property: movable items.\n\nFixture analysis uses the three-part test:\n1. Method of annexation\n2. Adaptation to the property\n3. Intent of the annexer\n\nArkansas recording: Documents are recorded at the county Circuit Clerk's office. Arkansas uses a race-notice recording statute."
            },
            {
              heading: "Concurrent Ownership in Arkansas",
              body: "Joint Tenancy:\n• Requires Four Unities: Time, Title, Interest, Possession (TTIP)\n• Right of survivorship — bypasses probate\n• Must be expressly stated in deed\n\nTenancy in Common:\n• Default for co-owners\n• Unequal shares allowed\n• No survivorship right\n\nArkansas marital property: Arkansas is a separate property state (not community property). However, dower and curtesy rights have been abolished and replaced by statutory inheritance rights."
            },
            {
              heading: "Encumbrances and Liens",
              body: "Liens in Arkansas:\n• Mortgage/Deed of Trust — voluntary, specific\n• Property tax liens — priority position\n• Mechanic's liens — must be filed within 120 days of last work\n• Judgment liens — attach to all real property in the county\n\nEasements:\n• Express easements by grant or reservation\n• Implied easements by prior use or necessity\n• Prescriptive easements: 7-year continuous use period in Arkansas\n\nArkansas homestead: A homestead exemption of up to $2,500 (urban) or 160 acres (rural) is protected from most creditor claims."
            },
            {
              heading: "Legal Descriptions in Arkansas",
              body: "Arkansas uses all three major legal description systems:\n\n1. Rectangular Survey — used throughout Arkansas; references the 5th Principal Meridian (shared with Missouri, Iowa, and other states).\n\n2. Metes and Bounds — used for older, irregular parcels in eastern Arkansas and the original land grant areas.\n\n3. Lot and Block (Recorded Plat) — used for subdivisions.\n\nArkansas River valley and delta lands often have complex descriptions due to historical surveys and waterway boundaries."
            }
          ],
          quiz: [
            {
              id: "ar_b02q01",
              prompt: "In Arkansas, real estate documents are recorded at the:",
              choices: [
                "State Secretary of State office",
                "County Circuit Clerk's office",
                "Arkansas Real Estate Commission headquarters",
                "Federal land records office"
              ],
              answer: 1,
              explanation: "Real estate documents in Arkansas are recorded at the county Circuit Clerk's office in the county where the property is located. Recording provides constructive notice to the world of ownership and encumbrances."
            },
            {
              id: "ar_b02q02",
              prompt: "Arkansas mechanic's liens must be filed within how many days of the last work performed?",
              choices: ["60 days", "90 days", "120 days", "180 days"],
              answer: 2,
              explanation: "Arkansas law requires mechanic's liens to be filed within 120 days of the date the last work was performed or materials were furnished. Missing this deadline forfeits the lien right."
            }
          ]
        },
        {
          id: "ar_b03",
          order: 3,
          title: "Agency Law & Arkansas Fiduciary Duties",
          week: "3-4",
          passingScore: 75,
          icon: "🤝",
          objective: "Explain agency creation, fiduciary duties, disclosure requirements, and dual agency rules under Arkansas law.",
          content: [
            {
              heading: "Agency in Arkansas",
              body: "Arkansas requires written agency agreements for buyer representation. The Arkansas Real Estate Commission rules require brokers to provide an agency disclosure at first substantive contact with a potential client.\n\nLicense types and agency:\n• Salesperson — can only work under and represent the interests of a supervising broker\n• Broker — can represent clients directly and supervise salespersons\n\nDual Agency: Legal in Arkansas with written informed consent from both parties."
            },
            {
              heading: "Fiduciary Duties in Arkansas",
              body: "Arkansas agents owe clients the following fiduciary duties (OLD CAR):\n\n• Obedience — follow all lawful client instructions\n• Loyalty — client's interests above all others\n• Disclosure — reveal all material facts\n• Confidentiality — protect client confidential information\n• Accounting — safeguard all funds\n• Reasonable Care — competent professional standard\n\nCustomers (non-clients) are owed honesty and fair dealing."
            },
            {
              heading: "Arkansas Agency Disclosure Requirements",
              body: "AREC rules require:\n• Written agency disclosure at first substantive contact\n• The disclosure must explain the types of agency available in Arkansas\n• Listing agreements and buyer agency agreements must be in writing\n\nArkansas allows designated agency within a brokerage — one agent represents the buyer and another represents the seller in the same transaction, avoiding the full dual-agent conflict."
            }
          ],
          quiz: [
            {
              id: "ar_b03q01",
              prompt: "When must an Arkansas broker provide the agency disclosure to a potential client?",
              choices: [
                "At the time of signing the purchase contract",
                "At first substantive contact",
                "Only when dual agency is involved",
                "After the property has been shown"
              ],
              answer: 1,
              explanation: "Arkansas Real Estate Commission rules require agency disclosure at first substantive contact — before confidential information is exchanged. Waiting until contract signing is too late."
            }
          ]
        }
      ]
    },

    mlo: {
      id: "mlo",
      label: "AR Mortgage Loan Originator",
      icon: "🏦",
      color: "#4C9AC9",
      description: "Arkansas MLO License — SAFE National Test + Uniform State Test + ASDFA requirements",
      requirements: [
        "Complete 20 hours NMLS-approved pre-licensing education",
        "Pass SAFE MLO National Test with Uniform State Test",
        "Criminal background check and credit report",
        "Submit application through NMLS",
        "Sponsored by an NMLS-licensed company in Arkansas",
        "Arkansas State Board of Finance (ASBF) or SBA approval"
      ],
      fees: [
        { item: "SAFE MLO Test", amount: "$110", source: "NMLS" },
        { item: "Application fee", amount: "$200", source: "Arkansas" },
        { item: "Criminal background check", amount: "$39", source: "NMLS" },
        { item: "Credit report", amount: "$15", source: "NMLS" },
        { item: "20-hour NMLS education", amount: "Varies by provider" }
      ],
      modules: [
        {
          id: "ar_m01",
          order: 1,
          title: "Arkansas MLO Licensing & NMLS",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map the Arkansas MLO licensing path through NMLS including education, testing, and application.",
          content: [
            {
              heading: "Arkansas MLO Licensing Authority",
              body: "The Arkansas Securities Department (formerly ASBF) regulates mortgage loan originators in Arkansas through the NMLS system.\n\nAll Arkansas MLO applications are submitted through NMLS. Arkansas requires 20 hours of NMLS-approved pre-license education (the federal minimum) plus passing the SAFE MLO National Test with Uniform State Test.\n\nArkansas MLO annual CE: 8 hours (3 federal law + 2 ethics + 2 non-traditional + 1 hour AR state law)."
            },
            {
              heading: "SAFE Exam and Application Process",
              body: "After completing education:\n1. Pass SAFE MLO National Test with Uniform State Test ($110)\n2. Wait for scores to post to NMLS record\n3. Submit criminal background check ($39)\n4. Submit credit report authorization ($15)\n5. Complete MU4 application in NMLS\n6. Pay state application fee (~$200)\n7. Obtain sponsorship from licensed company\n\nRetake rules: 30-day wait after 1st and 2nd failures; 180-day wait after 3rd failure."
            }
          ],
          quiz: [
            {
              id: "ar_m01q01",
              prompt: "How many hours of NMLS-approved pre-license education does Arkansas require for MLO licensing?",
              choices: ["16 hours", "18 hours", "20 hours", "22 hours"],
              answer: 2,
              explanation: "Arkansas requires 20 hours of NMLS-approved pre-license education, which is the federal minimum under the SAFE Act. This includes 3 hours federal law, 3 hours ethics, 2 hours non-traditional products, and 12 hours electives."
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
      description: "Arkansas real-world transaction skills: listing, buyer representation, investment analysis, closing",
      modules: [
        {
          id: "ar_p01",
          order: 1,
          title: "Arkansas Transaction Skills",
          week: "9-10",
          passingScore: 75,
          icon: "📅",
          objective: "Master Arkansas-specific transaction workflows including disclosure requirements, earnest money handling, and closing procedures.",
          content: [
            {
              heading: "Arkansas Transaction Timeline",
              body: "Typical Arkansas residential transaction timeline:\n\nDay 0: Mutual acceptance\nDay 1-3: Earnest money deposited in broker trust account\nDay 1-10: Inspection period\nDay 10-21: Financing contingency deadline\nDay 21-30: Appraisal and title work\nDay 30-45: Closing\n\nArkansas is a closing-attorney state — a licensed Arkansas attorney or title company must conduct the closing. Real estate licensees may not conduct closings themselves."
            },
            {
              heading: "Earnest Money in Arkansas",
              body: "Arkansas earnest money rules:\n• Must be deposited in broker's trust account promptly (within 2 banking days)\n• Commingling with operating funds is prohibited\n• Disbursement requires written agreement of all parties or court order\n• Broker may not release disputed earnest money without written consent or court order\n\nArkansas does not specify an exact dollar amount for earnest money — it is negotiated between parties."
            }
          ],
          quiz: [
            {
              id: "ar_p01q01",
              prompt: "Which professional MUST conduct real estate closings in Arkansas?",
              choices: [
                "The listing real estate broker",
                "The buyer's agent",
                "A licensed Arkansas attorney or title company",
                "Any licensed real estate agent"
              ],
              answer: 2,
              explanation: "Arkansas is a closing-attorney state. Real estate closings must be conducted by a licensed Arkansas attorney or title company. Real estate licensees are NOT authorized to conduct closings — this is a key Arkansas-specific requirement."
            }
          ]
        }
      ]
    }
  },

  studyPlan: [
    { weeks: "1-2", focus: "Arkansas licensing process, AREC rules, property law basics" },
    { weeks: "3-4", focus: "Agency law, contracts, disclosure requirements" },
    { weeks: "5-6", focus: "Federal mortgage law (RESPA, TILA, ECOA, SAFE Act)" },
    { weeks: "7-8", focus: "Arkansas state law deep dive + remediation" },
    { weeks: "9-10", focus: "Practical skills: transactions, earnest money, closing procedures" },
    { weeks: "11-12", focus: "Exam readiness: full mock exams, schedule PSI exam" }
  ],

  resources: [
    { label: "Arkansas Real Estate Commission", url: "https://www.arec.arkansas.gov/", category: "broker" },
    { label: "AREC License Application", url: "https://www.arec.arkansas.gov/licensing", category: "broker" },
    { label: "PSI Exam Scheduling", url: "https://candidate.psiexams.com/", category: "broker" },
    { label: "NMLS Arkansas Requirements", url: "https://mortgage.nationwidelicensingsystem.org/", category: "mlo" },
    { label: "Arkansas Securities Department", url: "https://securities.arkansas.gov/", category: "mlo" }
  ]
};

if (typeof module !== 'undefined') module.exports = CURRICULUM_AR;
