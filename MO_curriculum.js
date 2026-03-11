// ============================================================
// MO_curriculum.js — Missouri Real Estate Study System
// Missouri Real Estate Commission (MREC) Broker/Salesperson License — 2026
// Sources: Missouri Real Estate Commission (MREC), NMLS, PSI Exams
// Schema: identical to AK/CA/AZ/AL/CO curriculum.js — drop-in replacement
// ============================================================

const CURRICULUM_MO = {

  meta: {
    title: "MO Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Missouri",
    stateCode: "MO",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 75, mlo: 75, federal_law: 75, ethics: 75 }
  },

  tracks: {

    // ──────────────────────────────────────────────────────
    // BROKER TRACK — MO SALESPERSON/BROKER LICENSE
    // ──────────────────────────────────────────────────────
    broker: {
      id: "broker",
      label: "MO Real Estate Salesperson/Broker",
      icon: "🌉",
      color: "#002060",
      description: "Missouri Real Estate Commission (MREC) — 72-hour pre-license + PSI Exams exam + state-specific requirements",
      requirements: [
        "18+ years old",
        "72 hours of approved pre-license education",
        "Pass PSI Exams exam: national + state sections; 75% passing score",
        "Background check",
        "Apply within 1 year of passing exam",
        "Must be sponsored by a licensed Missouri broker",
        "No disqualifying criminal conviction"
      ],
      fees: [
        { item: "72-hour pre-license education", amount: "$400–$900", note: "varies by provider" },
        { item: "PSI Exams exam fee", amount: "$62", source: "PSI Exams" },
        { item: "Missouri license fee", amount: "$50", source: "Missouri Real Estate Commission (MREC)" },
        { item: "Background check", amount: "$30–$50", source: "State" },
        { item: "E&O Insurance", amount: "$200–$500/yr", note: "Required or recommended" }
      ],
      examStructure: {
        national: { items: 80, time: "150 minutes", passing: 75, note: "Plus up to 5 unscored experimental questions" },
        state: { items: 40, time: "60 minutes", passing: 75, note: "PSI Exams; state-specific law questions" }
      },
      modules: [

        {
          id: "mo_b01",
          order: 1,
          title: "Licensing Process & Missouri Real Estate Commission (MREC) Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map the complete Missouri licensing process including pre-license education, PSI Exams exam, application process, and renewal requirements.",
          content: [
            {
              heading: "Who Regulates Missouri Real Estate",
              body: "The Missouri Real Estate Commission (MREC) licenses and regulates real estate salespersons and brokers in Missouri.\n\nMissouri requires 72 hours of pre-license education before taking the PSI Exams licensing exam.\n\nLicense types in Missouri:\n• Salesperson/Broker Associate — entry level; must work under a licensed broker\n• Broker — highest level; can operate independently and supervise others\n\nMissouri uses PSI Exams for its licensing examination. The exam consists of a national section (80 questions) and a state section (40 questions). Passing score is 75% on both sections.\n\nCE requirements: 12 hours every 2 year(s)."
            },
            {
              heading: "72-Hour Pre-License Education",
              body: "Missouri requires 72 hours of approved pre-license education covering:\n\n• Real estate principles and practices\n• Missouri real estate law\n• Agency law and disclosures\n• Contracts and purchase agreements\n• Finance and mortgages\n• Property ownership and transfer\n• Valuation and appraisal\n• Fair housing and anti-discrimination law\n• Environmental issues in Missouri\n• Missouri-specific statutes and regulations\n\nAfter completing the course, candidates must pass the PSI Exams exam and apply for their license.\n\nMissouri-specific education note: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form."
            },
            {
              heading: "Exam Structure and Application Process",
              body: "Missouri uses PSI Exams for its licensing exam.\n\nExam structure:\n• National section: 80 questions, 150 minutes, 75% passing score\n• State section: 40 questions, 60 minutes, 75% passing score\n• Must pass BOTH sections separately\n• Results provided immediately at the test center\n\nAfter passing:\n• Apply for license within 1 year of passing\n• Submit application to Missouri Real Estate Commission (MREC)\n• Submit background check results\n• Pay license fee of $50\n• Identify sponsoring broker\n\nRetakes: If one section is failed, only the failed section needs to be retaken."
            },
            {
              heading: "License Renewal and Continuing Education",
              body: "Missouri licenses must be renewed every 2 year(s).\n\nCE requirements: 12 hours per renewal cycle.\n\nCE topics typically include:\n• Current real estate law updates\n• Fair housing\n• Ethics\n• Missouri-specific law\n• Elective topics\n\nMissouri-specific requirement: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form."
            },
            {
              heading: "Missouri-Specific Real Estate Law",
              body: "Key Missouri real estate law topics:\n\nMissouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form.\n\nAdditional Missouri-specific knowledge requirements:\n• State-specific disclosure requirements\n• Local zoning and land use regulations\n• Missouri landlord-tenant law\n• Environmental regulations specific to Missouri\n• Agency law under Missouri statutes\n\nMissouri unique aspect — seller disclosure and post-license requirement: Every Missouri real estate licensee must understand this state-specific area as it regularly appears on the state exam and arises in practice."
            }
          ],
          quiz: [
            {
              id: "mo_b01q01",
              prompt: "How many hours of pre-license education does Missouri require before taking the PSI Exams exam?",
              choices: [
                "36 hours",
                "72 hours",
                "108 hours",
                "144 hours"
              ],
              answer: 1,
              explanation: "Missouri requires 72 hours of approved pre-license education before candidates can take the PSI Exams licensing exam. This education covers real estate principles, Missouri law, agency, contracts, finance, and other required topics."
            },
            {
              id: "mo_b01q02",
              prompt: "How often must Missouri real estate licenses be renewed?",
              choices: [
                "Every 1 year",
                "Every 2 year(s)",
                "Every 4 years",
                "Every 5 years"
              ],
              answer: 1,
              explanation: "Missouri real estate licenses are renewed every 2 year(s). Licensees must complete 12 hours of continuing education per renewal cycle to maintain their license."
            },
            {
              id: "mo_b01q03",
              prompt: "Missouri's unique real estate requirement regarding seller disclosure and post-license requirement means that:",
              choices: [
                "Licensees only need to follow federal law and can ignore state requirements",
                "Licensees must understand and apply Missouri-specific rules that differ from most other states",
                "All transactions in Missouri follow the same rules as neighboring states",
                "Only brokers (not salespersons) need to understand seller disclosure and post-license requirement"
              ],
              answer: 1,
              explanation: "Missouri's unique seller disclosure and post-license requirement requirement means all licensees must understand state-specific rules. Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form."
            },
            {
              id: "mo_b01q04",
              prompt: "The PSI Exams exam used in Missouri consists of which two sections?",
              choices: [
                "Federal law and ethics sections",
                "National and state sections, each requiring 75% to pass",
                "Written and practical skills sections",
                "Theory and application sections"
              ],
              answer: 1,
              explanation: "The PSI Exams exam in Missouri consists of a national section (80 questions, 150 minutes) and a state section (40 questions, 60 minutes). Both sections require a 75% passing score and must be passed separately."
            },
            {
              id: "mo_b01q05",
              prompt: "A new Missouri licensee fails the national section of the PSI Exams exam but passes the state section. They must:",
              choices: [
                "Retake both sections in their entirety",
                "Retake only the failed national section",
                "Complete additional education before retaking any section",
                "Surrender their pre-license certificate and start over"
              ],
              answer: 1,
              explanation: "When only one section of the PSI Exams exam is failed, the candidate need only retake the FAILED section. The passing score on the other section is preserved. This is a significant benefit that prevents candidates from having to repeat sections they've already passed."
            }
          ]
        },

        {
          id: "mo_b02",
          order: 2,
          title: "Property Ownership & Missouri Land Law",
          week: "1-2",
          passingScore: 75,
          icon: "🏠",
          objective: "Identify property ownership types, concurrent ownership forms, encumbrances, legal descriptions, and Missouri-specific land issues.",
          content: [
            {
              heading: "Real vs. Personal Property in Missouri",
              body: "Real property consists of land and all permanently attached improvements. Personal property is movable.\n\nFixture analysis — courts typically use the three-part test:\n1. Method of annexation (how is it attached?)\n2. Adaptation (how adapted to the property?)\n3. Intent of the annexer\n\nMissouri-specific fixture considerations: heating systems, built-in appliances, and specialty systems common in Missouri must be specified in purchase contracts as included or excluded.\n\nA fixture that appears permanently attached becomes real property and transfers with the deed unless specifically excluded. The purchase agreement should list all included and excluded items to prevent disputes."
            },
            {
              heading: "Concurrent Ownership in Missouri",
              body: "Joint Tenancy:\n• Requires Four Unities: Time, Title, Interest, Possession (TTIP)\n• Right of survivorship — bypasses probate\n• Must be expressly created in the deed\n\nTenancy in Common:\n• Default for co-owners\n• Unequal shares allowed\n• No survivorship right\n• Each co-owner can sell, will, or mortgage their share\n\nMissouri marital property rules:\nMissouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form.\n\nHomestead protection in Missouri provides some protection of the primary residence from certain creditor claims, though the amount and scope varies by state law."
            },
            {
              heading: "Encumbrances in Missouri",
              body: "Encumbrances are claims, liens, or restrictions that affect property value or use.\n\nLiens (monetary claims):\n• Mortgage/Deed of Trust — voluntary, specific\n• Property tax liens — super priority in most states\n• Mechanic's liens — must be filed within state-specific deadline\n• Judgment liens — attach to all real property in jurisdiction\n\nEasements:\n• Express easements created by grant or reservation\n• Implied easements (prior use, necessity)\n• Prescriptive easements (varies by state)\n\nMissouri-specific encumbrance issues include HOA covenants and restrictions recorded against properties in planned communities, subdivision restrictions, and deed conditions."
            },
            {
              heading: "Legal Descriptions in Missouri",
              body: "Missouri uses standard legal description systems:\n\n1. Rectangular Survey (Government Survey) — used in most of Missouri where the public land survey system applies. Describes land by township, range, section, and subdivision.\n\n2. Metes and Bounds — used for irregularly shaped parcels and areas predating the rectangular survey system.\n\n3. Lot and Block (Recorded Plat) — used for subdivisions throughout Missouri.\n\nRecording in Missouri: Real estate documents are recorded at the county recorder's office (or equivalent) in the county where the property is located. Missouri follows a race-notice recording statute, meaning the first to record in good faith without notice of a prior claim prevails."
            },
            {
              heading: "Title and Transfer in Missouri",
              body: "Transfer of title in Missouri requires:\n• Written instrument (deed)\n• Grantor with legal capacity\n• Identifiable grantee\n• Adequate property description\n• Consideration (can be nominal)\n• Granting clause\n• Signature of grantor(s)\n• Delivery and acceptance\n• Recording (not required for validity between parties, but required for priority)\n\nMissouri deed types include: General Warranty Deed (most protection for buyer), Special Warranty Deed (limited warranty), and Quitclaim Deed (no warranty).\n\nTitle insurance is recommended for all Missouri property purchases. An owner's policy protects the buyer against defects existing before closing."
            }
          ],
          quiz: [
            {
              id: "mo_b02q01",
              prompt: "In Missouri, real estate documents are recorded at the:",
              choices: [
                "State Secretary of State office",
                "County Recorder or County Clerk office in the property's county",
                "Missouri Real Estate Commission (MREC) headquarters",
                "Federal land records office"
              ],
              answer: 1,
              explanation: "Real estate documents in Missouri are recorded at the county recorder's (or county clerk's) office in the county where the property is located. Recording provides constructive notice to the world of ownership and encumbrances."
            },
            {
              id: "mo_b02q02",
              prompt: "Which deed type provides the greatest protection for a Missouri buyer?",
              choices: [
                "Quitclaim Deed — no warranties",
                "Special Warranty Deed — limited warranty",
                "General Warranty Deed — broadest protection",
                "Deed of Trust — three-party instrument"
              ],
              answer: 2,
              explanation: "A General Warranty Deed provides the greatest protection for buyers in Missouri. The grantor warrants against ALL title defects, including those that arose before the grantor's ownership. A Special Warranty Deed covers only defects arising during the seller's ownership, and a Quitclaim Deed provides no warranties."
            },
            {
              id: "mo_b02q03",
              prompt: "Two friends purchase a Missouri property as tenants in common. One friend dies without a will. Under tenancy in common, the deceased friend's share:",
              choices: [
                "Automatically passes to the surviving co-owner by right of survivorship",
                "Passes to the deceased friend's heirs through their estate",
                "Reverts to the state of Missouri",
                "Must be sold at a public auction"
              ],
              answer: 1,
              explanation: "Under tenancy in common, there is NO right of survivorship. When one co-owner dies, their share passes through their estate (by will or intestate succession) — NOT automatically to the surviving co-owner. This is a key distinction from joint tenancy, which does have a right of survivorship."
            }
          ]
        },

        {
          id: "mo_b03",
          order: 3,
          title: "Agency Law & Missouri Disclosure Requirements",
          week: "3-4",
          passingScore: 75,
          icon: "🤝",
          objective: "Apply Missouri agency law, disclosure obligations, listing agreement types, and fiduciary duties.",
          content: [
            {
              heading: "Missouri Agency Relationships",
              body: "Missouri recognizes the following agency relationship types:\n\nSeller's Agency: The listing broker represents the seller. Fiduciary duties owed to the seller include loyalty, obedience, disclosure, confidentiality, accounting, and reasonable care.\n\nBuyer's Agency: The selling broker represents the buyer. Same fiduciary duties owed to buyer.\n\nDual Agency: When one broker represents both buyer and seller in the same transaction. Requires written informed consent from both parties. Significantly limits fiduciary duties — the dual agent cannot be fully loyal to both parties simultaneously.\n\nTransaction Broker/Facilitator: Some states allow a non-agency facilitator role. Check Missouri statutes for specific designation.\n\nMissouri agency disclosure requirements: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form."
            },
            {
              heading: "Seller's Disclosure Requirements",
              body: "Missouri sellers of residential property must provide a Seller's Property Disclosure (SPD) or equivalent form disclosing known material defects and property conditions.\n\nRequired disclosures typically include:\n• Structural components (foundation, roof, walls)\n• Mechanical systems (HVAC, plumbing, electrical)\n• Water and sewer systems\n• Environmental hazards (lead paint in pre-1978 homes, radon, asbestos, mold)\n• Any known legal encumbrances or disputes\n• HOA information (if applicable)\n\nMissouri-specific disclosure: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form.\n\nAs-is sales: Sellers may sell as-is, but they still must disclose known material defects. 'As-is' does not excuse fraudulent concealment."
            },
            {
              heading: "Listing Agreement Types",
              body: "Types of listing agreements in Missouri:\n\nExclusive Right-to-Sell:\n• Broker earns commission regardless of who finds buyer\n• Most common form\n• Agent is protected even if seller finds buyer\n\nExclusive Agency:\n• Seller can sell themselves without paying commission\n• Broker earns commission if anyone other than seller procures buyer\n\nOpen Listing:\n• Non-exclusive; multiple brokers retained\n• Only the procuring broker earns commission\n• Rare in residential real estate\n\nNet Listing:\n• Illegal or discouraged in many states (check Missouri law)\n• Broker keeps everything above a minimum net to the seller\n• Creates conflicts of interest\n\nMissouri specific: Review Missouri's statutes and CREC/Commission rules on listing agreement requirements."
            },
            {
              heading: "NAR Code of Ethics and Missouri Ethics",
              body: "The NAR Code of Ethics imposes professional standards on REALTORS® above and beyond state law requirements.\n\nKey NAR Code of Ethics Articles:\n• Article 1: Fiduciary duty to client; honest dealing with all parties\n• Article 2: No misrepresentation; no concealment of pertinent facts\n• Article 3: Cooperate with other brokers\n• Article 11: Competency — only take work within competence or disclose limitations\n• Article 12: Truthful advertising; no misleading advertising\n• Article 17: Dispute resolution — mediation/arbitration\n\nMissouri licensee obligations go beyond NAR Code:\n• Missouri Real Estate Commission (MREC) can discipline licensees independently of NAR\n• State discipline includes license suspension, revocation, fines\n• Criminal penalties possible for fraud or misrepresentation"
            }
          ],
          quiz: [
            {
              id: "mo_b03q01",
              prompt: "A Missouri listing agent discovers a significant foundation crack after signing the listing agreement. Under Missouri disclosure law, the agent must:",
              choices: [
                "Only disclose if the seller asks them to",
                "Disclose the foundation issue to prospective buyers as a known material defect",
                "Keep the information confidential as it was shared by the seller",
                "Withdraw from the listing rather than disclose"
              ],
              answer: 1,
              explanation: "Known material defects must be disclosed to prospective buyers in Missouri. A foundation crack is clearly a material defect that would affect a buyer's decision. While the listing agent has a duty of loyalty to the seller, that duty does not include concealing known defects from buyers."
            },
            {
              id: "mo_b03q02",
              prompt: "Under an Exclusive Right-to-Sell listing in Missouri, if the seller finds their own buyer without the agent's involvement, the agent:",
              choices: [
                "Receives no commission since they did not procure the buyer",
                "Receives their full commission under the listing agreement",
                "Receives half the commission as a negotiated amount",
                "Can sue only for marketing expenses, not commission"
              ],
              answer: 1,
              explanation: "Under an Exclusive Right-to-Sell listing, the broker earns the commission regardless of who finds the buyer — even if the seller finds their own buyer. This is the defining characteristic of the exclusive right-to-sell listing and the reason it is the most common form used in Missouri."
            }
          ]
        },

        {
          id: "mo_b04",
          order: 4,
          title: "Missouri Contracts & Purchase Agreements",
          week: "3-4",
          passingScore: 75,
          icon: "📄",
          objective: "Apply contract law elements, Missouri-specific contract requirements, contingencies, and closing procedures.",
          content: [
            {
              heading: "Essential Elements of a Valid Contract",
              body: "All real estate contracts in Missouri must contain the essential elements of a valid contract:\n\n1. Offer — a clear, definite proposal\n2. Acceptance — unqualified agreement to all terms\n3. Consideration — something of value exchanged\n4. Legal purpose — contract cannot be for an illegal purpose\n5. Competent parties — both parties must have legal capacity\n6. Mutual assent/meeting of the minds\n\nIn real estate, contracts must also be:\n• In WRITING (Statute of Frauds — requires real estate contracts to be written)\n• Signed by the party to be bound\n\nVoid contracts: lack an essential element; unenforceable.\nVoidable contracts: has a defect but can be enforced or avoided by one party (e.g., contract with a minor).\nUnenforceable contracts: valid but not enforceable for procedural reasons (e.g., oral real estate contract — violated Statute of Frauds)."
            },
            {
              heading: "Missouri Purchase Contract Structure",
              body: "A typical Missouri residential purchase agreement includes:\n\n1. Property identification (legal description and street address)\n2. Purchase price and financing terms\n3. Earnest money amount and deposit deadline\n4. Inspection and due diligence periods\n5. Title review and objection periods\n6. Financing contingency and loan application deadline\n7. Closing date and possession date\n8. Inclusions and exclusions\n9. Missouri-specific provisions (HOA documents, disclosure review)\n10. Default provisions and remedies\n\nMissouri specific contract consideration: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form.\n\nEarnest money in Missouri: Typically 1-3% of purchase price. Must be held in a trust/escrow account. Disposition of earnest money upon default is governed by the contract and Missouri law."
            },
            {
              heading: "Contingencies and Due Diligence",
              body: "Common contingencies in Missouri purchase contracts:\n\nInspection Contingency:\n• Buyer hires professional inspector\n• Review period allows buyer to identify issues\n• If defects found, buyer can: request repairs, request price reduction, or terminate\n• If contingency deadline passes without action, typically deemed waived\n\nFinancing Contingency:\n• Protects buyer if unable to obtain financing\n• Specifies loan type, amount, interest rate, and deadline\n• Buyer must apply for loan and diligently pursue financing\n• Cannot use financing contingency in bad faith to escape contract\n\nAppraisal Contingency:\n• Protects buyer if property appraises below purchase price\n• Buyer can: renegotiate price, pay difference, or terminate\n• Seller can reduce price or refuse and put back on market\n\nMissouri specific contingency: check Missouri statutes for any required disclosures or waiting periods."
            },
            {
              heading: "Closing Process in Missouri",
              body: "The closing (or settlement) in Missouri involves:\n\n1. Title search and title insurance issuance\n2. Preparation of closing statement/HUD-1/TRID Closing Disclosure\n3. Funding of loan proceeds\n4. Signing of all documents\n5. Disbursement of funds\n6. Recording of deed and mortgage/deed of trust\n7. Transfer of possession\n\nMissouri closing conducted by: seller disclosure and post-license requirement — check Missouri state law for who can conduct closings.\n\nMissouri closing costs typically include:\n• Lender fees (origination, points, underwriting)\n• Title insurance premiums (owner's and lender's)\n• Recording fees\n• Property tax prorations\n• Homeowner's insurance prepayment\n• Transfer taxes (if applicable in Missouri)"
            }
          ],
          quiz: [
            {
              id: "mo_b04q01",
              prompt: "Why must real estate contracts in Missouri be in writing?",
              choices: [
                "Because Missouri has a specific real estate writing requirement not found elsewhere",
                "Because of the Statute of Frauds, which requires contracts for the sale of real property to be written",
                "Because oral contracts are invalid in all situations",
                "Only for transactions over $10,000"
              ],
              answer: 1,
              explanation: "The Statute of Frauds requires contracts for the sale or transfer of real property to be in writing to be enforceable. This is a fundamental rule in all U.S. states including Missouri. An oral agreement to sell real estate is not enforceable."
            },
            {
              id: "mo_b04q02",
              prompt: "A Missouri buyer submits an offer with an inspection contingency. The inspection deadline passes without the buyer submitting an inspection objection notice. The result is:",
              choices: [
                "The contract is automatically terminated",
                "The inspection contingency is waived and the buyer accepts the property's condition",
                "The buyer gets a 7-day extension automatically",
                "The seller must make all repairs"
              ],
              answer: 1,
              explanation: "When an inspection contingency deadline passes without the buyer taking action (submitting an objection notice), the contingency is typically WAIVED. The buyer is deemed to have accepted the property's condition and cannot use the inspection to terminate or renegotiate. Deadline tracking is critical."
            }
          ]
        },

        {
          id: "mo_b05",
          order: 5,
          title: "Real Estate Finance & Missouri Mortgage Programs",
          week: "5-6",
          passingScore: 75,
          icon: "💰",
          objective: "Explain Missouri financing options, Missouri Housing Development Commission (MHDC) programs, and key federal mortgage regulations.",
          content: [
            {
              heading: "Missouri Housing Development Commission (MHDC) Programs",
              body: "Missouri Housing Development Commission (MHDC) provides affordable homeownership programs for Missouri residents:\n\nFirst-time homebuyer programs:\n• Below-market interest rate first mortgages\n• Income and purchase price limits apply (vary by county)\n• Must be primary residence\n\nDown payment assistance:\n• Grants or second mortgages for down payment and closing costs\n• Some programs forgivable after period of occupancy\n\nSpecial programs:\n• Veterans/military programs\n• Low-income and workforce housing programs\n• Renovation and rehabilitation loan programs\n\nMLO value in Missouri: understanding Missouri Housing Development Commission (MHDC) programs is essential as many Missouri first-time buyers use state housing agency financing."
            },
            {
              heading: "Federal Loan Programs in Missouri",
              body: "Federal loan programs important in Missouri:\n\nFHA Loans:\n• 3.5% down payment (with 580+ credit score)\n• MIP (mortgage insurance premium) required\n• Property must meet FHA minimum property standards\n• Common for first-time buyers in Missouri\n\nVA Loans:\n• 0% down for eligible veterans and active military\n• No PMI required\n• Funding fee applies (waived for disabled veterans)\n• Missouri military presence: check local military installations\n\nUSDA Rural Development:\n• 0% down for eligible rural properties\n• Income limits apply\n• Many Missouri rural areas may qualify\n\nConventional/Fannie Mae-Freddie Mac:\n• Dominant in Missouri's mortgage market\n• 3-20% down depending on program\n• Conforming loan limits vary by county"
            },
            {
              heading: "Deed of Trust vs. Mortgage in Missouri",
              body: "Most states use either mortgages or deeds of trust as the security instrument for home loans.\n\nMortgage (two-party instrument):\n• Borrower (mortgagor) and lender (mortgagee)\n• Lender must use judicial foreclosure — court process\n• Generally slower and more expensive process\n• Borrower typically has right of redemption after foreclosure sale\n\nDeed of Trust (three-party instrument):\n• Trustor (borrower), trustee (holds legal title), beneficiary (lender)\n• Allows non-judicial (trustee's sale) foreclosure — faster and cheaper\n• Redemption rights vary; many deed of trust states have no redemption period\n\nMissouri uses: check Missouri statutes to determine whether Missouri primarily uses mortgages or deeds of trust, and what the foreclosure process entails."
            }
          ],
          quiz: [
            {
              id: "mo_b05q01",
              prompt: "The Missouri Housing Development Commission (MHDC) provides down payment assistance to Missouri homebuyers primarily to:",
              choices: [
                "Make housing affordable for buyers who have sufficient income but insufficient down payment savings",
                "Provide financing for investment properties",
                "Fund commercial real estate development",
                "Replace private lenders in the mortgage market"
              ],
              answer: 0,
              explanation: "Missouri Housing Development Commission (MHDC) down payment assistance programs are designed to help buyers who qualify income-wise for a mortgage but lack the funds for a down payment. These programs make homeownership accessible to first-time buyers and low-to-moderate income households in Missouri."
            },
            {
              id: "mo_b05q02",
              prompt: "A Missouri veteran wants to purchase a home with 0% down payment and no private mortgage insurance. The most appropriate loan program is:",
              choices: [
                "FHA loan — 3.5% down required",
                "VA loan — 0% down for eligible veterans, no PMI",
                "USDA rural loan — income limits apply",
                "Conventional loan — 5% down minimum"
              ],
              answer: 1,
              explanation: "VA loans offer eligible veterans 0% down payment with NO private mortgage insurance (PMI). A VA funding fee applies (waived for veterans with service-connected disability). The VA loan is one of the most valuable home financing benefits available to eligible veterans."
            }
          ]
        },

        {
          id: "mo_b06",
          order: 6,
          title: "Valuation & Missouri Market Analysis",
          week: "5-6",
          passingScore: 75,
          icon: "📊",
          objective: "Apply the three approaches to value and prepare a Missouri CMA.",
          content: [
            {
              heading: "The Three Approaches to Value",
              body: "Appraisers and agents use three approaches to estimate market value:\n\n1. Sales Comparison Approach (Market Approach):\n• Most reliable for residential property\n• Compare subject to recent sales of similar properties\n• Adjust for differences: size, location, condition, age, features\n• Best approach when comparable sales are available\n\n2. Cost Approach:\n• Useful for new construction and unique/special-purpose properties\n• Value = Land Value + Depreciated Cost of Improvements\n• Depreciation types: physical deterioration, functional obsolescence, external obsolescence\n\n3. Income Approach:\n• Used for income-producing properties\n• Direct Capitalization: Value = NOI ÷ Cap Rate\n• GRM Method: Value = Gross Rent ÷ GRM\n\nMissouri market context: Missouri's real estate market has specific characteristics affecting value, including regional economic drivers, climate, and population trends."
            },
            {
              heading: "Comparative Market Analysis (CMA)",
              body: "A CMA is prepared by real estate agents (not licensed appraisers) to help price properties.\n\nCMA methodology:\n• Select comparable sales from past 3-6 months\n• Properties within similar distance and characteristics\n• Adjust for differences in size, condition, features, location\n• Develop indicated price range\n\nCMA vs. Appraisal:\n• CMA: prepared by licensee; for pricing guidance; not for loan purposes\n• Appraisal: prepared by licensed appraiser; for loan decisions; legally required for most mortgages\n\nMissouri market considerations:\n• Check local MLS for comparable sales data\n• Consider seasonal market patterns in Missouri\n• Account for Missouri-specific factors affecting value (location, waterfront, views, amenities)\n\nPricing strategy: overpriced listings sit on market; underpriced listings may have multiple offers. CMA should bracket the likely market value range."
            }
          ],
          quiz: [
            {
              id: "mo_b06q01",
              prompt: "A Missouri income property generates $60,000 NOI annually. Comparable properties sell at a 6% cap rate. The indicated value is:",
              choices: ["$360,000", "$600,000", "$1,000,000", "$720,000"],
              answer: 2,
              explanation: "Value = NOI ÷ Cap Rate = $60,000 ÷ 0.06 = $1,000,000. The Income Approach divides net operating income by the capitalization rate to indicate market value. This is a fundamental formula tested on the national real estate exam."
            },
            {
              id: "mo_b06q02",
              prompt: "Which approach to value is MOST reliable for a standard residential home in Missouri?",
              choices: [
                "Cost Approach — always most accurate",
                "Income Approach — based on rental income",
                "Sales Comparison Approach — uses recent comparable sales",
                "All three approaches are equally reliable for all property types"
              ],
              answer: 2,
              explanation: "The Sales Comparison Approach is the most reliable for standard residential properties because recent sales of comparable homes directly reflect what buyers are currently willing to pay. The Cost Approach is better for new construction, and the Income Approach is better for investment properties."
            }
          ]
        },

        {
          id: "mo_b07",
          order: 7,
          title: "Fair Housing & Missouri Anti-Discrimination Law",
          week: "7-8",
          passingScore: 75,
          icon: "⚖️",
          objective: "Apply federal Fair Housing Act and Missouri-specific anti-discrimination requirements.",
          content: [
            {
              heading: "Federal Fair Housing Act",
              body: "The Federal Fair Housing Act (1968) prohibits discrimination in housing based on:\n• Race\n• Color\n• National origin\n• Religion\n• Sex\n• Familial status (families with children under 18)\n• Disability (added 1988)\n\nProhibited practices:\n• Refusing to sell or rent\n• Discriminatory terms and conditions\n• Discriminatory advertising\n• Blockbusting (inducing sales by suggesting neighborhood change)\n• Steering (directing buyers to/from neighborhoods)\n• Redlining (refusing to lend in areas based on demographics)\n\nFHA exemptions:\n• Owner-occupied 1-4 family dwellings (Mrs. Murphy exemption) — owner doesn't use a broker\n• Religious organizations (non-commercial purposes)\n• Private clubs\n• 55+ housing communities (exempt from familial status only)"
            },
            {
              heading: "Missouri Fair Housing Protections",
              body: "Missouri may provide broader fair housing protections than federal law through state anti-discrimination statutes.\n\nAdditional protected classes in Missouri may include:\n• Sexual orientation\n• Gender identity\n• Marital status\n• Source of income\n• Age (beyond federal ECOA)\n• Ancestry\n• Other state-specific protected classes\n\nCheck Missouri state statutes for current protected classes under Missouri fair housing law.\n\nMissouri enforcement: File complaints with Missouri Real Estate Commission (MREC) and/or HUD within applicable time limits. Missouri Civil Rights agency may also have jurisdiction.\n\nPractical application: Agents must never steer buyers based on any protected characteristic, never make assumptions about where buyers want to live, and never market properties in ways that indicate a preference for or against any protected group."
            }
          ],
          quiz: [
            {
              id: "mo_b07q01",
              prompt: "The Federal Fair Housing Act was first passed in:",
              choices: ["1954", "1964", "1968", "1988"],
              answer: 2,
              explanation: "The Federal Fair Housing Act was passed in 1968 as part of the Civil Rights Act of 1968. It was amended in 1988 to add disability and familial status as protected classes. The 1964 Civil Rights Act addressed employment and public accommodations, not housing specifically."
            },
            {
              id: "mo_b07q02",
              prompt: "A real estate agent shows a Hispanic buyer only homes in predominantly Hispanic neighborhoods, without asking about their preferences. This is:",
              choices: [
                "Legal — the agent is trying to help the buyer find a comfortable community",
                "Steering — a Fair Housing Act violation",
                "Legal as long as the homes shown meet the buyer's budget",
                "Only illegal if the buyer objects"
              ],
              answer: 1,
              explanation: "Steering — directing buyers toward or away from neighborhoods based on protected characteristics like national origin or race — is a violation of the Fair Housing Act regardless of intent. The agent must show buyers all properties meeting their stated criteria, not make assumptions based on the buyer's protected characteristics."
            }
          ]
        },

        {
          id: "mo_b08",
          order: 8,
          title: "Property Management & Missouri Landlord-Tenant Law",
          week: "7-8",
          passingScore: 75,
          icon: "🏢",
          objective: "Apply Missouri landlord-tenant law, security deposit rules, and property management licensing requirements.",
          content: [
            {
              heading: "Missouri Landlord-Tenant Basics",
              body: "Missouri landlord-tenant law governs the relationship between residential landlords and tenants.\n\nKey Missouri rules:\n• Security deposit: Missouri sets limits on maximum security deposit amount and requires return within specified period\n• Entry notice: Missouri requires advance notice before non-emergency landlord entry (typically 24 hours)\n• Habitability: landlords must maintain premises in habitable condition\n• Eviction process: must follow state-specific notice and filing requirements\n\nLeases in Missouri:\n• Written leases recommended for all tenancies\n• Oral leases may be enforceable for short terms\n• Month-to-month tenancies can be terminated with proper notice\n• Long-term leases (over 1 year) must be in writing (Statute of Frauds)"
            },
            {
              heading: "Property Management Licensing in Missouri",
              body: "Property managers in Missouri generally need a real estate license if they:\n• Lease or rent property on behalf of another for compensation\n• Negotiate leases or rental agreements\n• Collect rents on behalf of property owners\n\nCheck Missouri statutes for specific property management licensing exemptions (some states exempt certain on-site managers or resident managers).\n\nTrust accounts for property management:\n• Rents collected on behalf of owners must be kept in a separate trust/escrow account\n• Must not be commingled with the broker's personal funds or operating account\n• Must maintain detailed records of all receipts and disbursements\n\nMissouri property management disclosure: property managers must disclose their agency relationship and compensation to property owners."
            }
          ],
          quiz: [
            {
              id: "mo_b08q01",
              prompt: "A Missouri landlord collects a security deposit from a tenant. Under Missouri landlord-tenant law, this deposit must be:",
              choices: [
                "Deposited into the landlord's personal checking account",
                "Held in a separate escrow or trust account and returned within the state's required time period",
                "Kept in cash by the landlord",
                "Immediately applied to first month's rent"
              ],
              answer: 1,
              explanation: "Security deposits in Missouri must be held separately from the landlord's personal funds (in many states, in a separate escrow or trust account). The deposit must be returned to the tenant within the state-required period after tenancy ends, with an itemized statement of any deductions."
            }
          ]
        },

        {
          id: "mo_b09",
          order: 9,
          title: "Environmental Issues & Missouri Disclosures",
          week: "9-10",
          passingScore: 75,
          icon: "🌱",
          objective: "Identify environmental hazards requiring disclosure in Missouri transactions.",
          content: [
            {
              heading: "Federal Environmental Disclosure Requirements",
              body: "Federal law requires specific environmental disclosures in residential real estate:\n\nLead Paint (LBPPA):\n• Applies to all pre-1978 residential dwellings\n• Seller must provide: Lead Paint Disclosure form, EPA pamphlet, opportunity for inspection\n• Does NOT require testing or removal — only disclosure of known conditions\n\nRadon:\n• No federal disclosure law, but Surgeon General recommends testing all homes\n• EPA action level: 4 pCi/L\n• Missouri radon risk varies by region — granite-rich areas have higher risk\n\nAsbestos:\n• Commonly found in pre-1980 construction (insulation, floor tiles, textured ceilings)\n• Must be disclosed if known\n• ACM (asbestos-containing material) not harmful if intact; friable asbestos is hazardous\n\nMold:\n• Not covered by specific federal disclosure law\n• Many states require mold disclosure — check Missouri statutes\n• Moisture, water intrusion, and mold are common inspection issues"
            },
            {
              heading: "Missouri-Specific Environmental Issues",
              body: "Missouri has unique environmental disclosure requirements related to its geography and industries:\n\nMissouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form.\n\nAdditional Missouri environmental issues may include:\n• Flood zones: FEMA flood zone maps determine flood insurance requirements\n• Wildfire risk: relevant in western states and other fire-prone areas\n• Underground storage tanks (USTs): former gas stations and industrial sites\n• Agricultural chemicals: pesticide and fertilizer contamination in farming areas\n• Mining contamination: abandoned mines and processing sites\n• Coastal/waterfront regulations: setbacks, wetland permits, shoreline rules\n\nPractical advice for Missouri agents: Include environmental due diligence in every buyer consultation. Recommend appropriate inspections based on property type and location."
            }
          ],
          quiz: [
            {
              id: "mo_b09q01",
              prompt: "Federal law requires lead paint disclosure for:",
              choices: [
                "All residential properties regardless of age",
                "Residential properties built before 1978",
                "Only properties with known lead paint present",
                "Commercial properties only"
              ],
              answer: 1,
              explanation: "The Lead-Based Paint Hazard Reduction Act (LBPPA) requires lead paint disclosure for ALL residential properties built BEFORE 1978. The seller must provide a disclosure form and the EPA pamphlet 'Protect Your Family from Lead in Your Home.' Testing is recommended but not required."
            },
            {
              id: "mo_b09q02",
              prompt: "The EPA's recommended action level for radon gas in residential buildings is:",
              choices: ["2 pCi/L", "4 pCi/L", "8 pCi/L", "10 pCi/L"],
              answer: 1,
              explanation: "The EPA recommends taking action to reduce radon when indoor levels reach or exceed 4 picocuries per liter (pCi/L). Radon is the second leading cause of lung cancer in the U.S. Missouri has varying radon risk depending on local geology."
            }
          ]
        },

        {
          id: "mo_b10",
          order: 10,
          title: "Missouri License Law, Ethics, and Trust Accounts",
          week: "9-10",
          passingScore: 75,
          icon: "⚖️",
          objective: "Apply Missouri license law requirements, trust account rules, advertising regulations, and the recovery fund.",
          content: [
            {
              heading: "Missouri License Law — Key Provisions",
              body: "Missouri real estate licensees must comply with:\n\nMissouri Real Estate Commission (MREC) rules and regulations\n• Advertising rules: must identify sponsoring broker; no blind ads\n• Trust account rules: earnest money and client funds must be deposited in separate trust accounts\n• Record keeping: maintain transaction records for required period (typically 3-5 years)\n• Disclosure requirements: disclose license status in all transactions\n• Conflicts of interest: disclose any personal interest in a transaction\n\nLicense suspension and revocation grounds:\n• Misrepresentation or fraud\n• Failure to disclose material facts\n• Trust fund violations (commingling or conversion)\n• Violations of fair housing law\n• Criminal convictions\n• Failure to maintain required insurance or CE\n\nMissouri specific: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form."
            },
            {
              heading: "Missouri Real Estate Recovery Fund",
              body: "Missouri maintains a Real Estate Recovery Fund (or similar mechanism) to compensate consumers harmed by licensee misconduct.\n\nKey features of Missouri's recovery fund:\n• Compensates consumers who obtain unsatisfied judgment against a licensee\n• Maximum payment amount (check current Missouri limits)\n• Broker's license automatically suspended if fund pays on their behalf\n• Broker must repay fund with interest before reinstatement\n\nDifference from E&O Insurance:\n• E&O covers negligence and errors\n• Recovery Fund covers fraud and dishonest conduct\n• Both may be available in Missouri\n\nMissouri trust account rules:\n• Client funds must be deposited promptly (check Missouri specific timeline)\n• Never commingle personal/operating funds with client trust funds\n• Complete records required for all deposits and disbursements\n• Subject to Missouri Real Estate Commission (MREC) audit at any time"
            }
          ],
          quiz: [
            {
              id: "mo_b10q01",
              prompt: "A Missouri broker deposits a client's earnest money into their personal checking account rather than a trust account. This is:",
              choices: [
                "Acceptable if the broker maintains separate records",
                "Commingling — a serious license law violation",
                "Acceptable for amounts under $1,000",
                "Required if the broker doesn't have a trust account"
              ],
              answer: 1,
              explanation: "Placing client funds (earnest money, security deposits, rents) in the broker's personal or operating account rather than a separate trust account is called COMMINGLING. Commingling is a serious violation of Missouri's license law and can result in license suspension or revocation."
            },
            {
              id: "mo_b10q02",
              prompt: "The Missouri Real Estate Recovery Fund pays a consumer who obtains a judgment against a licensee for fraud. What happens to the licensee's license?",
              choices: [
                "Nothing — the fund payment has no effect on the license",
                "The license is automatically suspended; must repay fund before reinstatement",
                "The license is permanently revoked",
                "The license is suspended for 30 days only"
              ],
              answer: 1,
              explanation: "When the Recovery Fund pays on behalf of a licensee, the licensee's license is automatically SUSPENDED. The licensee must fully repay the Recovery Fund with interest before their license can be reinstated. This provides an incentive for licensees to honor their obligations to clients."
            }
          ]
        },

        {
          id: "mo_b11",
          order: 11,
          title: "Investment Property & Missouri Tax Considerations",
          week: "11-12",
          passingScore: 75,
          icon: "📈",
          objective: "Analyze investment property metrics and Missouri-specific tax considerations for real estate investors.",
          content: [
            {
              heading: "Missouri Property Tax System",
              body: "Missouri property taxes are administered at the local level (county or municipal).\n\nMissouri property tax basics:\n• Assessed value determined by local assessor\n• Tax rate (mill levy) applied to assessed value\n• Homeowner exemptions may be available for primary residences\n• Senior/disabled property tax relief programs may apply\n\nMissouri transfer taxes:\n• Missouri may have state and/or county transfer taxes\n• Check current Missouri transfer tax rates — they vary by jurisdiction\n• Some Missouri municipalities charge additional local transfer taxes\n\nProperty tax protests/appeals:\n• Owners can appeal assessed value with county assessor\n• If unsuccessful, can appeal to county board\n• Further appeal through state administrative process\n• Appeals should be based on evidence of incorrect value (not just tax rate)"
            },
            {
              heading: "1031 Exchange and Missouri Investors",
              body: "IRC Section 1031 allows Missouri investors to defer capital gains tax:\n\n1031 rules:\n• 45 days to identify replacement property\n• 180 days to close on replacement property\n• Qualified Intermediary (QI) required\n• Must be investment or business property (not primary residence)\n• Like-kind exchange: real property for real property\n\nMissouri state income tax on 1031 exchanges:\n• If Missouri has state income tax, 1031 exchange defers state tax as well as federal\n• Some states have unique rules — check Missouri state tax law\n\nSection 121 Exclusion (Primary Residence):\n• $250,000 gain exclusion (single) / $500,000 (married filing jointly)\n• Must own and use as primary residence 2 of last 5 years\n• Cannot use within 2 years of prior exclusion\n\nDepreciation recapture:\n• Rental property depreciation reduces basis\n• At sale, recaptured depreciation taxed at max 25% federal rate\n• Missouri state tax also applies to depreciation recapture"
            }
          ],
          quiz: [
            {
              id: "mo_b11q01",
              prompt: "Under IRS Section 1031, after selling a relinquished property, an investor has how many days to identify replacement property?",
              choices: ["30 days", "45 days", "60 days", "90 days"],
              answer: 1,
              explanation: "Under IRC Section 1031, the investor has exactly 45 days after the sale of the relinquished property to identify potential replacement properties. This is a hard deadline — missing it terminates the exchange and makes the gain immediately taxable."
            },
            {
              id: "mo_b11q02",
              prompt: "A Missouri investor owns a rental house with an adjusted basis of $150,000. If sold for $350,000, the $200,000 gain is potentially subject to:",
              choices: [
                "Only federal capital gains tax",
                "Federal capital gains tax, Missouri state income tax (if applicable), and depreciation recapture tax",
                "Only depreciation recapture tax",
                "No tax if the investor lived in the property at any point"
              ],
              answer: 1,
              explanation: "The sale of a Missouri rental property triggers: (1) federal capital gains tax (0%, 15%, or 20% depending on income), (2) Missouri state income tax on the gain (if Missouri has income tax), and (3) depreciation recapture tax (max 25% federal) on any depreciation previously claimed. All must be considered in the analysis."
            }
          ]
        },

        {
          id: "mo_b12",
          order: 12,
          title: "Missouri State Law Review & Exam Prep",
          week: "11-12",
          passingScore: 75,
          icon: "📚",
          objective: "Review Missouri-specific exam topics, practice state exam questions, and prepare for the PSI Exams exam.",
          content: [
            {
              heading: "Missouri State Exam Key Topics",
              body: "Missouri state exam will focus on:\n\n1. Missouri license law — Missouri Real Estate Commission (MREC) rules and procedures\n2. Missouri agency law — specific state requirements\n3. Missouri contract forms and requirements\n4. Missouri disclosure laws\n5. Missouri property tax system\n6. Missouri closing procedures\n7. Missouri-specific restrictions and regulations\n8. Missouri fair housing additions\n9. Missouri landlord-tenant law\n10. Missouri environmental law\n\nMissouri unique state exam emphasis: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form.\n\nStudy strategy:\n• Review Missouri Real Estate Commission (MREC) website for current rules and statutes\n• Take multiple practice state exams\n• Focus on Missouri-specific rules that differ from other states\n• Review recent disciplinary actions for common violations"
            },
            {
              heading: "National Exam Review",
              body: "National exam topics (tested across all states):\n\nProperty ownership and transfer (10-15%):\n• Types of estates and interests\n• Transfer methods and requirements\n• Title insurance and recording\n\nLand use controls and regulations (5-10%):\n• Zoning, building codes, environmental regulations\n\nValuation and market analysis (10-15%):\n• Three approaches to value\n• Market analysis methodology\n\nFinancing (10-15%):\n• Loan types and programs\n• Federal mortgage regulations (RESPA, TILA, ECOA)\n\nLaws of agency (10-15%):\n• Agent duties and relationships\n• Disclosure requirements\n\nContracts (15-20%):\n• Contract elements and formation\n• Contingencies and conditions\n\nPractice of real estate (15-25%):\n• Listing and selling process\n• Closing procedures\n• Property management\n\nFair housing (5-10%):\n• Protected classes\n• Prohibited practices"
            }
          ],
          quiz: [
            {
              id: "mo_b12q01",
              prompt: "Which Missouri licensing body has the authority to suspend or revoke a real estate license?",
              choices: [
                "The National Association of Realtors (NAR)",
                "The Missouri Real Estate Commission (MREC)",
                "The federal Department of Housing and Urban Development (HUD)",
                "The local Multiple Listing Service (MLS)"
              ],
              answer: 1,
              explanation: "Only the Missouri Real Estate Commission (MREC) has the legal authority to suspend or revoke a Missouri real estate license. NAR can impose disciplinary action on REALTORS® (including expulsion), but this is separate from state licensing. HUD enforces fair housing law but does not issue or revoke state real estate licenses."
            },
            {
              id: "mo_b12q02",
              prompt: "A Missouri licensee who fails to renew their license by the renewal deadline will:",
              choices: [
                "Continue to practice legally for 90 days after expiration",
                "Have their license automatically expire; must cease real estate activities until renewed",
                "Be automatically converted to an inactive status with continued practice rights",
                "Need to retake the licensing exam to reinstate"
              ],
              answer: 1,
              explanation: "An expired Missouri real estate license means the licensee must CEASE real estate activities. Practicing with an expired license is itself a license law violation. Most states allow reinstatement within a period without retaking the exam (if CE is completed), but the licensee cannot practice during the expired period."
            }
          ]
        }

      ] // end broker modules
    }, // end broker track

    // ──────────────────────────────────────────────────────
    // MLO TRACK
    // ──────────────────────────────────────────────────────
    mlo: {
      id: "mlo",
      label: "MO MLO License (SAFE Act)",
      icon: "🏦",
      color: "#1565C0",
      description: "NMLS SAFE MLO exam prep — 20-hour federal pre-license + Missouri Division of Finance state requirements",
      requirements: [
        "Complete 20 hours of NMLS-approved pre-license education",
        "Pass NMLS SAFE MLO National Test with Uniform State Content (75% passing score)",
        "Authorize credit report and criminal background check through NMLS",
        "Complete NMLS MU4 individual form",
        "Sponsored by a Missouri-licensed mortgage company",
        "No felony conviction within 7 years; lifetime bar for financial crimes",
        "Annual CE: 8 hours per year (3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective)"
      ],
      fees: [
        { item: "NMLS application fee", amount: "$30", source: "NMLS" },
        { item: "SAFE MLO test fee", amount: "$110", source: "Prometric" },
        { item: "Missouri state license fee", amount: "$150–$300", source: "Missouri Division of Finance" },
        { item: "20-hour pre-license education", amount: "$200–$400", note: "varies by provider" },
        { item: "Credit report / background check", amount: "$30", source: "NMLS" }
      ],
      examStructure: {
        national: { items: 115, time: "190 minutes", passing: 75, note: "120 total; 115 scored + 5 unscored; Uniform State Content embedded" },
        state: { items: 0, time: "included in national exam", note: "No separate state exam — UST embedded in national test" }
      },
      modules: [
        {
          id: "mo_m01",
          order: 1,
          title: "SAFE Act & Missouri MLO Licensing",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Navigate NMLS MU4 process, Missouri Division of Finance requirements, and Missouri Housing Development Commission (MHDC) programs.",
          content: [
            {
              heading: "Missouri MLO Regulation — Missouri Division of Finance",
              body: "Missouri MLOs are regulated by the Missouri Division of Finance through NMLS.\n\nAll persons taking mortgage applications or negotiating mortgage terms in Missouri must hold an active NMLS MLO license with a Missouri state endorsement.\n\nLicensing steps:\n1. Create NMLS account; complete MU4 form\n2. Authorize criminal background check and credit report\n3. Complete 20 hours of NMLS-approved pre-license education\n4. Pass SAFE MLO National Test with Uniform State Content (75%)\n5. Apply for Missouri state endorsement through NMLS\n6. Obtain sponsorship from Missouri-licensed mortgage company\n7. Pay all fees\n\nAnnual renewal: 8 CE hours by December 31 (3hr federal, 2hr ethics, 2hr non-traditional, 1hr elective)."
            },
            {
              heading: "Missouri Housing Development Commission (MHDC) Programs",
              body: "Missouri Housing Development Commission (MHDC) provides mortgage programs for Missouri homebuyers:\n\n• First mortgage programs with below-market rates for income-qualified buyers\n• Down payment assistance programs (grants or second mortgages)\n• Special programs for veterans, teachers, and other qualifying groups\n\nFederal programs in Missouri:\n• FHA loans: common for first-time buyers\n• VA loans: for eligible veterans and service members\n• USDA rural development: for eligible rural Missouri areas\n• Conventional/conforming: Fannie Mae and Freddie Mac programs\n\nMLO value: knowing Missouri's state housing agency programs differentiates Missouri MLOs from competitors, especially for first-time and low-to-moderate income buyers."
            }
          ],
          quiz: [
            {
              id: "mo_m01q01",
              prompt: "Which agency regulates Missouri MLO licenses?",
              choices: [
                "Missouri Real Estate Commission (MREC)",
                "Missouri Division of Finance",
                "Missouri Attorney General",
                "CFPB"
              ],
              answer: 1,
              explanation: "Missouri MLO licenses are regulated by the Missouri Division of Finance. Real estate brokers and salespersons are regulated by the Missouri Real Estate Commission (MREC). These are separate regulatory systems — an MLO license and a real estate license are different credentials."
            },
            {
              id: "mo_m01q02",
              prompt: "An MLO in Missouri must complete annual continuing education by:",
              choices: ["June 30", "September 30", "December 31", "January 31"],
              answer: 2,
              explanation: "NMLS MLO annual CE (8 hours: 3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective) must be completed and the license renewed by DECEMBER 31 of each year."
            }
          ]
        },

        {
          id: "mo_m02",
          order: 2,
          title: "Federal Mortgage Law — RESPA, TILA, ECOA",
          week: "3-4",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master RESPA, TILA, ECOA, HMDA, and SAFE Act provisions for the NMLS national exam.",
          content: [
            {
              heading: "TRID — Loan Estimate and Closing Disclosure",
              body: "TRID (TILA-RESPA Integrated Disclosure):\n\nLoan Estimate (LE):\n• Provided within 3 business days of complete application\n• 6 pieces trigger application: name, income, SSN, property address, value, loan amount\n• Valid 10 business days\n\nClosing Disclosure (CD):\n• Provided at least 3 business days before consummation\n• Three-day waiting period cannot be waived except for bona fide personal financial emergency\n\nTolerance buckets:\n• Zero tolerance: origination charges, transfer taxes\n• 10% tolerance: recording fees, required third-party services\n• Unlimited: prepaid items, escrow, optional services\n\nChanged circumstances allow revised LE without tolerance violations."
            },
            {
              heading: "RESPA, ECOA, HMDA, and FCRA",
              body: "RESPA (Regulation X):\n• Section 8: no kickbacks for referrals of settlement services\n• AfBA (Affiliated Business Arrangement): legal with disclosure, no required use, genuine ownership\n• Escrow: max cushion = 1/6 of annual disbursements\n\nECOA (Regulation B):\n• Prohibits credit discrimination: race, color, religion, national origin, sex, marital status, age (40+), public assistance\n• 30-day adverse action notice\n\nHMDA (Regulation C):\n• Lenders report mortgage application data\n• Used to detect redlining and discriminatory lending patterns\n\nFCRA:\n• Free annual credit reports\n• Right to dispute\n• Adverse action notice must cite specific reasons\n\nUDAAPP: Dodd-Frank prohibits unfair, deceptive, or abusive acts and practices in consumer financial services."
            }
          ],
          quiz: [
            {
              id: "mo_m02q01",
              prompt: "Under TRID, the Closing Disclosure must be provided to the borrower at least how many business days before consummation?",
              choices: ["1 day", "2 days", "3 days", "5 days"],
              answer: 2,
              explanation: "TRID requires the Closing Disclosure to be provided to the borrower at least 3 BUSINESS DAYS before loan consummation. This waiting period allows borrowers to review final loan terms and compare them to the Loan Estimate before committing to close."
            },
            {
              id: "mo_m02q02",
              prompt: "RESPA Section 8 prohibits:",
              choices: [
                "Charging points on a mortgage",
                "Paying or receiving anything of value for referrals of settlement service business",
                "Using title insurance",
                "Charging origination fees"
              ],
              answer: 1,
              explanation: "RESPA Section 8 prohibits any person from giving or receiving a fee, kickback, or anything of value for referring settlement service business. This includes direct cash payments, gifts, free services, and disguised referral arrangements. Violations can result in criminal penalties and civil liability."
            }
          ]
        },

        {
          id: "mo_m03",
          order: 3,
          title: "Mortgage Products & Loan Analysis",
          week: "5-6",
          passingScore: 75,
          icon: "📊",
          objective: "Distinguish mortgage products, ARM structures, QM rules, and Missouri-specific lending.",
          content: [
            {
              heading: "Loan Types and Qualification",
              body: "Key mortgage products for Missouri borrowers:\n\nConventional loans:\n• Conforming (Fannie/Freddie): standard limits; 3-20% down\n• Non-conforming/jumbo: above conforming limits; stricter qualification\n\nGovernment loans:\n• FHA: 3.5% down (580+ FICO); MIP required\n• VA: 0% down; no PMI; funding fee; for eligible veterans\n• USDA: 0% down; rural areas; income limits\n\nDebt-to-Income (DTI) ratios:\n• Front-end (housing): PITI / gross monthly income (typically max 28%)\n• Back-end (total): all debt / gross monthly income (typically max 43%)\n• QM rule: max DTI 43% for non-GSE loans\n\nCredit analysis:\n• Tri-merge credit report (3 bureaus)\n• Middle score used for qualification\n• Credit factors: payment history, amounts owed, length, new credit, mix"
            },
            {
              heading: "ARM Products and QM Rule",
              body: "Adjustable-Rate Mortgages (ARMs):\n• Rate adjusts periodically based on Index + Margin\n• Index: SOFR (replaced LIBOR)\n• Caps: initial / periodic / lifetime (e.g., 2/2/5)\n• Common structures: 5/1, 7/1, 10/1\n\nQM (Qualified Mortgage) safe harbor requirements:\n• Max 30-year term\n• No negative amortization\n• No interest-only periods (some GSE exceptions)\n• No balloon payments (except small creditor QMs)\n• Points and fees ≤ 3% (for loans ≥$100K)\n• ATR: lender verifies Ability to Repay\n\nReverse Mortgages (HECM):\n• FHA-insured; for homeowners 62+\n• No monthly payments; balance grows\n• HUD-approved counseling required before applying\n• Non-recourse: never owe more than home value\n\nMissouri specific: check conforming loan limits for Missouri counties (high-cost areas have higher limits)."
            }
          ],
          quiz: [
            {
              id: "mo_m03q01",
              prompt: "A borrower's gross monthly income is $6,000. Their proposed PITI payment is $1,500. Their front-end DTI ratio is:",
              choices: ["15%", "20%", "25%", "30%"],
              answer: 2,
              explanation: "Front-end DTI = Housing expenses / Gross monthly income = $1,500 / $6,000 = 25%. Most conventional loan programs allow front-end DTIs of 28-31%. FHA allows up to 31%. This borrower is within conventional guidelines."
            },
            {
              id: "mo_m03q02",
              prompt: "Before a homeowner can receive a HECM reverse mortgage, federal law requires:",
              choices: [
                "Approval from their heirs",
                "Paying off all existing mortgage debt",
                "HUD-approved reverse mortgage counseling",
                "Demonstrating at least 50% equity"
              ],
              answer: 2,
              explanation: "HUD requires all HECM applicants to complete counseling from a HUD-approved reverse mortgage counselor BEFORE applying. This mandatory counseling ensures seniors understand the product, costs, and alternatives before committing."
            }
          ]
        }
      ] // end mlo modules
    }, // end mlo track

    // ──────────────────────────────────────────────────────
    // PRACTICAL TRACK
    // ──────────────────────────────────────────────────────
    practical: {
      id: "practical",
      label: "MO Practical Field Skills",
      icon: "🏡",
      color: "#2E7D32",
      description: "Missouri real-world transaction skills: listing, buyer representation, investment analysis, closing",
      requirements: [
        "Complete broker pre-license education",
        "Pass PSI Exams exam",
        "Active Missouri license",
        "Working under sponsoring broker"
      ],
      fees: [],
      examStructure: {
        national: { items: 0, time: "N/A", passing: 70, note: "Practical assessments" },
        state: { items: 0, time: "N/A", passing: 70, note: "Field competency" }
      },
      modules: [
        {
          id: "mo_p01",
          order: 1,
          title: "Missouri Listing Process",
          week: "1-4",
          passingScore: 70,
          icon: "📋",
          objective: "Master Missouri listing procedures from pre-listing due diligence through pricing and marketing.",
          content: [
            {
              heading: "Missouri Pre-Listing Preparation",
              body: "Steps to prepare a Missouri listing:\n\n1. Due diligence:\n• Pull county tax records\n• Research HOA (if applicable) — request documents and status\n• Check for any liens or encumbrances\n• Research Missouri-specific issues: seller disclosure and post-license requirement\n• Verify property boundary and any easements\n\n2. Complete Seller's Property Disclosure:\n• All known material defects must be disclosed\n• Missouri-specific disclosure items: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form.\n• Review for completeness before listing\n\n3. Pricing analysis:\n• Prepare CMA using recent comparables\n• Consider Missouri market conditions and seasonal patterns\n• Present price range with supporting data\n\n4. Marketing strategy:\n• MLS listing with professional photography\n• Online marketing (Zillow, Realtor.com, brokerage website)\n• Missouri-specific marketing channels\n• Open houses and showings protocol"
            },
            {
              heading: "Missouri Market Dynamics",
              body: "Missouri's real estate market has unique characteristics:\n\nMissouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form.\n\nKey factors affecting Missouri real estate values:\n• Regional economic drivers\n• Population growth/decline trends\n• Employment centers and job market\n• Climate and geographic factors\n• Infrastructure and transportation access\n• School quality and amenities\n\nMissouri market challenges:\n• Inventory levels and competition\n• Affordability for first-time buyers\n• Missouri-specific regulatory environment\n• Seasonal demand patterns\n\nAgent success in Missouri: Develop deep knowledge of local submarkets, neighborhoods, and communities. Specialize in specific property types or geographic areas where you can provide genuine expertise to clients."
            }
          ],
          quiz: [
            {
              id: "mo_p01q01",
              prompt: "During pre-listing due diligence for a Missouri property, an agent discovers the property may have seller disclosure and post-license requirement issues. The agent should:",
              choices: [
                "Ignore the issue and list the property without disclosure",
                "Research the issue thoroughly and ensure proper disclosure in the Seller's Property Disclosure",
                "Decline to list the property",
                "Only disclose if the buyer asks directly"
              ],
              answer: 1,
              explanation: "When an agent discovers potential seller disclosure and post-license requirement issues, they must research thoroughly and ensure proper disclosure. Material facts that would affect a buyer's decision must be disclosed. Concealing known issues exposes the agent and seller to liability."
            }
          ]
        },

        {
          id: "mo_p02",
          order: 2,
          title: "Missouri Buyer Representation",
          week: "5-8",
          passingScore: 70,
          icon: "🤝",
          objective: "Execute Missouri buyer representation from initial consultation through successful closing.",
          content: [
            {
              heading: "Buyer Consultation and Agency Agreement",
              body: "Missouri buyer representation process:\n\n1. Initial consultation:\n• Explain Missouri brokerage relationships and agency options\n• Discuss buyer needs, timeline, and budget\n• Sign buyer agency or transaction broker agreement\n• Explain compensation structure (post-NAR settlement changes)\n\n2. Pre-approval:\n• Connect buyer with mortgage professionals\n• Understand CHFA and Missouri Housing Development Commission (MHDC) programs for qualifying buyers\n• Assess budget including down payment, closing costs, and ongoing expenses\n\n3. Property search:\n• Use Missouri MLS systems\n• Research neighborhoods: schools, safety, amenities, commute\n• Educate buyer on Missouri-specific considerations: seller disclosure and post-license requirement\n\n4. Making offers:\n• Explain Missouri purchase contract terms\n• Discuss contingencies: inspection, financing, appraisal\n• Strategic advice on pricing and terms\n• Coordinate inspection and due diligence\n• Manage timeline to closing"
            },
            {
              heading: "Investment Property Buyer Representation",
              body: "Representing buyers of Missouri investment properties:\n\nInvestment analysis tools:\n• NOI (Net Operating Income) = Gross Rents - Vacancy - Expenses\n• Cap Rate = NOI ÷ Value\n• Cash-on-Cash = Annual Cash Flow ÷ Cash Invested\n• GRM = Price ÷ Annual Gross Rent\n\nMissouri investment property considerations:\n• Local cap rates for different property types\n• Rent trends and vacancy rates\n• Property tax impact on cash flow\n• Landlord-tenant law compliance costs\n• Property management availability and costs\n\nMissouri specific: seller disclosure and post-license requirement considerations for investment buyers in Missouri."
            }
          ],
          quiz: [
            {
              id: "mo_p02q01",
              prompt: "A Missouri investor is analyzing a property with $4,000 monthly gross rent. After 7% vacancy and $18,000 annual expenses, what is the NOI?",
              choices: ["$48,000", "$26,640", "$29,760", "$44,640"],
              answer: 1,
              explanation: "Annual gross rent: $4,000 × 12 = $48,000. Vacancy: $48,000 × 7% = $3,360. Effective Gross Income: $48,000 - $3,360 = $44,640. NOI: $44,640 - $18,000 = $26,640."
            }
          ]
        },

        {
          id: "mo_p03",
          order: 3,
          title: "Missouri Closing Process & RESPA Compliance",
          week: "9-12",
          passingScore: 70,
          icon: "🎯",
          objective: "Navigate Missouri closing procedures, RESPA compliance, and build ethical referral networks.",
          content: [
            {
              heading: "Missouri Closing Procedures",
              body: "The Missouri closing process:\n\n1. Pre-closing preparation:\n• Title company/attorney orders title search and issues commitment\n• Lender completes underwriting; issues clear to close\n• Closing disclosure prepared and delivered 3 business days before closing\n• Final walk-through by buyer\n\n2. Closing day:\n• Buyer and seller (or their representatives) attend closing\n• Sign all documents (deed, mortgage, closing disclosure, etc.)\n• Funds deposited and disbursed\n• Deed and mortgage recorded\n• Keys transferred\n\n3. Post-closing:\n• Confirm recording\n• Distribute closing packages to all parties\n• Upload documents to transaction management system\n• Collect commission\n\nMissouri closing practice: Missouri requires a 24-hour post-license course within 6 months of initial licensure. Missouri's Seller's Disclosure Law requires disclosure of known defects using the standard MREC form."
            },
            {
              heading: "RESPA Compliance in Missouri",
              body: "RESPA Section 8 compliance in Missouri real estate:\n\nILLEGAL:\n• Title company paying for agent's marketing in exchange for referrals\n• Lender sponsoring office expenses for mortgage referrals\n• Any payment in exchange for settlement service referrals\n• Marketing services agreements that function as referral fees\n\nLEGAL:\n• Genuine affiliated business arrangements (AfBA) with proper disclosure\n• Actual services for actual compensation\n• Educational co-marketing (properly structured)\n• Normal business development activities\n\nMissouri specific: small markets may create pressure for informal quid pro quo arrangements. Agents must be vigilant that referral relationships don't cross RESPA lines regardless of market size."
            }
          ],
          quiz: [
            {
              id: "mo_p03q01",
              prompt: "A Missouri title company offers to pay for a real estate agent's E&O insurance in exchange for referring all closings to the title company. Under RESPA, this arrangement is:",
              choices: [
                "Legal if the E&O premium is less than $500",
                "A RESPA Section 8 violation — providing anything of value for referrals is prohibited",
                "Legal if both parties sign a written agreement",
                "Legal because E&O insurance is not a settlement service"
              ],
              answer: 1,
              explanation: "Paying an agent's E&O insurance premium (or providing any other thing of value) in exchange for referrals of settlement service business is a RESPA Section 8 violation. The form of the payment (cash, insurance, free services) and the dollar amount are irrelevant — any quid pro quo arrangement for referrals is prohibited."
            }
          ]
        }
      ] // end practical modules
    } // end practical track

  }, // end tracks

  studyPlan: [
    { weeks: "1-2", focus: "Missouri licensing roadmap + 72-hour pre-license + PSI Exams exam structure + property ownership + concurrent ownership + seller disclosure and post-license requirement" },
    { weeks: "3-4", focus: "Agency law + disclosure requirements + Missouri purchase contract + contingencies + earnest money trust accounts" },
    { weeks: "5-6", focus: "Financing + Missouri Housing Development Commission (MHDC) programs + federal mortgage regulations + title insurance + recording system" },
    { weeks: "7-8", focus: "Valuation + CMA + fair housing (Missouri additions) + Missouri license law + advertising rules + trust accounts" },
    { weeks: "9-10", focus: "Landlord-tenant law + property management + environmental disclosures + Missouri-specific issues" },
    { weeks: "11-12", focus: "Investment analysis + Missouri tax considerations + 1031 exchange + Missouri state exam review + full practice exams" }
  ],

  resources: [
    { label: "Missouri License Requirements", url: "https://www.google.com/search?q=Missouri+real+estate+license+requirements", category: "broker" },
    { label: "Missouri Real Estate Commission (MREC) Website", url: "https://www.google.com/search?q=Missouri+Real+Estate+Commission+(MREC)+official+website", category: "broker" },
    { label: "PSI Exams — Missouri Exam", url: "https://www.google.com/search?q=PSI+Exams+Missouri+real+estate+exam", category: "broker" },
    { label: "Missouri Housing Development Commission (MHDC)", url: "https://www.google.com/search?q=Missouri+Housing+Development+Commission+(MHDC)+Missouri", category: "mlo" },
    { label: "Missouri Division of Finance", url: "https://www.google.com/search?q=Missouri+Division+of+Finance+MLO+license", category: "mlo" }
  ]
};

if (typeof module !== 'undefined') module.exports = CURRICULUM_MO;
