// ============================================================
// CURRICULUM-CA.JS — California Real Estate Study System
// California DRE Salesperson + MLO Licensing — 2026
// Sources: CA DRE, Civil Code, CAR Forms, NMLS, Pearson VUE
// Schema: identical to WA curriculum.js — drop-in replacement
// ============================================================

const CURRICULUM_CA = {

  meta: {
    title: "CA Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "California",
    stateCode: "CA",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 70, mlo: 75, federal_law: 75, ethics: 75 }
  },

  tracks: {

    // ──────────────────────────────────────────────────────
    // BROKER TRACK — CA DRE SALESPERSON LICENSE
    // ──────────────────────────────────────────────────────
    broker: {
      id: "broker",
      label: "CA Real Estate Salesperson",
      icon: "🏠",
      color: "#C9A84C",
      description: "California DRE Salesperson License — 135-hour education + DRE exam prep",
      requirements: [
        "18+ years old",
        "135 hours approved education: Real Estate Principles (45hr) + Real Estate Practice (45hr) + 1 approved elective (45hr)",
        "Pass DRE Salesperson exam: 150 questions, 3 hours, 70% to pass",
        "Live scan fingerprint/background check (criminal history reviewed)",
        "Apply for license within 1 year of passing exam",
        "Must work under a DRE-licensed Broker — cannot practice independently",
        "No residency requirement — must disclose out-of-state status"
      ],
      fees: [
        { item: "Salesperson exam fee",    amount: "$60",   source: "CA DRE" },
        { item: "Initial license fee",     amount: "$245",  source: "CA DRE" },
        { item: "Live scan fingerprinting",amount: "~$70",  note: "varies by vendor" },
        { item: "135-hour education",      amount: "$200–$600", note: "varies by provider" }
      ],
      examStructure: {
        national: { items: 150, time: "180 minutes", passing: 70 },
        state:    { items: 0,   time: "included above", passing: 70,
                    note: "CA exam is a single combined exam — no separate national/state split" }
      },
      modules: [

        // ── MODULE 1 ──────────────────────────────────────
        {
          id: "ca_b01",
          order: 1,
          title: "Licensing Process & Roadmap",
          week: "1-2",
          passingScore: 70,
          icon: "📋",
          objective: "Map the complete California DRE salesperson licensing process: 135-hour education → DRE exam → fingerprints → application → activation.",
          content: [
            {
              heading: "Who Qualifies",
              body: "You must be at least 18 years old. California has no residency requirement — you can live in any state, but you must disclose your out-of-state status and meet the same requirements as California residents. There is no high school diploma requirement for the salesperson license (though it is required for the broker upgrade).\n\nCharacter review: DRE conducts a fitness determination based on your background check. Convictions involving moral turpitude, dishonesty, or fraud may disqualify you. You can request a pre-application fitness determination before spending money on education."
            },
            {
              heading: "The 135-Hour Education Requirement",
              body: "Before applying for the DRE exam, you must complete three approved college-level courses, each a minimum of 45 semester hours (or equivalent quarter units):\n\n• Real Estate Principles — required for all applicants. Covers property rights, ownership, finance, contracts, agency, valuation, fair housing.\n• Real Estate Practice — required. Covers listing, selling, marketing, disclosures, forms, and brokerage operations. Updated requirements effective January 1, 2024.\n• Approved Elective — choose one from DRE's approved list: Real Estate Finance, Real Estate Appraisal, Real Estate Economics, Property Management, Real Estate Office Administration, Business Law, Mortgage Loan Brokering, Common Interest Developments, or others.\n\nCourses must be from DRE-approved providers (community colleges, online schools, universities). Certificates of completion are valid — you do NOT need a college degree."
            },
            {
              heading: "The DRE Exam",
              body: "After completing your courses, apply for the exam at dre.ca.gov. The DRE administers its own exam (unlike most states that use PSI or Pearson VUE).\n\nExam structure:\n• 150 multiple-choice questions\n• 3 hours (180 minutes)\n• Passing score: 70% (105 out of 150)\n• Results reported immediately at the test center\n• If you fail: 18-day waiting period before retake; unlimited retakes within 2 years of application approval\n\nApplication window: your exam application is valid for 2 years. You must pass and apply for your license within that window."
            },
            {
              heading: "After You Pass — Fingerprint & Activate",
              body: "1. Live scan fingerprinting: submit fingerprints through a DRE-approved live scan site (list at dre.ca.gov). Cost is approximately $70. FBI and DOJ background checks are run.\n2. License application: apply online at dre.ca.gov. Pay the $245 initial license fee. Include proof of completed education and exam pass date.\n3. You CANNOT activate your license or practice real estate until your license is issued AND you have affiliated with a licensed California broker (your supervising broker).\n4. Your broker will countersign your application electronically through the eLicensing system.\n\nLicense is valid for 4 years. First renewal requires 45 hours of CE including mandatory topics."
            },
            {
              heading: "Strategic Study Tip",
              body: "California's 150-question exam covers a broad range of topics but heavily weights Contracts, Finance, and Practice of Real Estate. The DRE publishes an exam content outline on their website — download it and structure your study around the domain weightings. Key topics by weight:\n• Practice of Real Estate & Disclosures: ~25%\n• Laws of Agency & Fiduciary Duties: ~17%\n• Property Ownership & Land Use: ~15%\n• Valuation & Market Analysis: ~14%\n• Financing Real Property: ~17%\n• Transfer of Property: ~8%\n• Contracts: ~4%\n\nSmart sequencing: complete the 3 courses (take good notes) → apply for exam → study DRE content outline hard for 2-4 weeks → schedule exam for when knowledge is fresh → pass → fingerprint → apply."
            }
          ],
          quiz: [
            {
              id: "ca_b01q01",
              prompt: "What is the minimum passing score on the California real estate salesperson exam?",
              choices: ["75% (113 questions)", "70% (105 questions)", "80% (120 questions)", "65% (98 questions)"],
              answer: 1,
              explanation: "California DRE requires a 70% passing score on the 150-question salesperson exam, meaning you must answer at least 105 questions correctly. The exam is 3 hours."
            },
            {
              id: "ca_b01q02",
              prompt: "Which THREE courses are required for the California real estate salesperson license?",
              choices: [
                "Real Estate Law, Real Estate Finance, Real Estate Math",
                "Real Estate Principles, Real Estate Practice, plus one approved elective",
                "Real Estate Principles, Real Estate Appraisal, Real Estate Contracts",
                "Real Estate Practice, Property Management, Real Estate Economics"
              ],
              answer: 1,
              explanation: "California requires: (1) Real Estate Principles, (2) Real Estate Practice, and (3) one approved elective from the DRE's approved list. Each course must be at least 45 semester hours from a DRE-approved provider."
            },
            {
              id: "ca_b01q03",
              prompt: "After passing the CA DRE salesperson exam, what is the maximum time you have to complete the license application?",
              choices: ["6 months", "1 year from passing the exam", "2 years from the exam application approval date", "There is no deadline"],
              answer: 2,
              explanation: "Your exam application is valid for 2 years from the date DRE approves your application. You must pass the exam and apply for your license within that 2-year window."
            },
            {
              id: "ca_b01q04",
              prompt: "What is the minimum total cost to obtain a California real estate salesperson license (exam + license fee + fingerprint)?",
              choices: ["About $100", "About $200", "About $375", "About $800"],
              answer: 2,
              explanation: "$60 exam fee + $245 license fee + ~$70 fingerprinting = approximately $375 in mandatory fees, before the cost of the 135-hour education courses."
            },
            {
              id: "ca_b01q05",
              prompt: "A licensed California salesperson can begin practicing real estate as soon as they:",
              choices: [
                "Pass the DRE exam",
                "Complete fingerprinting",
                "Receive their license AND affiliate with a licensed California broker",
                "Submit their license application online"
              ],
              answer: 2,
              explanation: "A salesperson cannot practice until two things happen: (1) DRE issues the license, AND (2) the salesperson affiliates with a licensed California supervising broker. Passing the exam alone does not authorize practice."
            }
          ]
        },

        // ── MODULE 2 ──────────────────────────────────────
        {
          id: "ca_b02",
          order: 2,
          title: "Property Ownership & Legal Descriptions",
          week: "1-2",
          passingScore: 70,
          icon: "🏛️",
          objective: "Identify estates, encumbrances, legal descriptions, and California-specific ownership forms including community property rules.",
          content: [
            {
              heading: "Real vs. Personal Property",
              body: "Real property = land + everything permanently attached (improvements, fixtures). Personal property = movable items (chattel).\n\nFixture test — CRITERIA (California uses this acronym):\n• Consent of the parties\n• Relationship of parties\n• Intent of annexor\n• Time and place\n• Existence of an agreement\n• Relative ease of removal\n• Adaptation\n\nPractical rule: if removal would damage the structure, it's likely a fixture (real property). When in doubt, negotiate in writing — always address fixtures in the purchase contract."
            },
            {
              heading: "Estates in Land",
              body: "Freehold estates (ownership):\n• Fee Simple Absolute — greatest ownership possible. No conditions, fully inheritable and transferable. Most common ownership form.\n• Fee Simple Defeasible — ownership with a condition. If violated, the property may revert to the grantor (Fee Simple Determinable) or grantor has right of re-entry (Fee Simple Subject to Condition Subsequent).\n• Life Estate — ownership for the duration of a specified person's life. The life tenant cannot commit waste. Upon death, property passes to the remainderman or reverts to the grantor.\n\nLeasehold estates (possession, not ownership):\n• Tenancy for Years — fixed start and end dates; no notice required to terminate.\n• Periodic Tenancy — auto-renews (month-to-month). Requires proper notice.\n• Tenancy at Will — either party may terminate.\n• Tenancy at Sufferance — holdover after lease expiration."
            },
            {
              heading: "California Community Property Rules",
              body: "California is a COMMUNITY PROPERTY state. This is heavily tested on the CA exam.\n\nCommunity property: all property acquired by either spouse DURING the marriage (except gifts and inheritances). Each spouse owns an EQUAL, UNDIVIDED one-half interest.\n\nSeparate property: property owned before marriage, or received as a gift or inheritance during marriage, or acquired after permanent separation.\n\nKey rules for the exam:\n• Both spouses must sign to transfer or encumber community property real estate.\n• A deed signed by only one spouse during marriage to community property is VOIDABLE (not void).\n• Upon death: the deceased spouse can will only their half. The surviving spouse keeps their half automatically.\n• Domestic partners: California grants domestic partners the same community property rights as married spouses."
            },
            {
              heading: "Concurrent Ownership",
              body: "Joint Tenancy — requires Four Unities (TTIP): Time, Title, Interest, Possession. Includes right of survivorship — surviving owner inherits automatically, bypassing probate. To create in CA: must be expressly stated in the deed ('as joint tenants').\n\nTenancy in Common — default form for unmarried co-owners in California. Unequal shares allowed. No survivorship rights. Each owner can independently sell, will, or mortgage their share.\n\nCommunity Property with Right of Survivorship — California-specific form. Combines community property tax benefits with survivorship rights. Must be expressly stated in deed.\n\nTenancy in Partnership — used by partnerships to hold business property."
            },
            {
              heading: "Legal Descriptions",
              body: "Three systems used nationwide (all tested on CA exam):\n\n1. Metes and Bounds — oldest system. Uses compass bearings and distances from a Point of Beginning (POB). Used in older California ranchos and irregular parcels.\n\n2. Rectangular Survey (Government Survey) — divides land into Townships (6 miles × 6 miles = 36 sections) and Sections (1 mile × 1 mile = 640 acres). Used throughout much of California. Mount Diablo Base and Meridian is California's primary reference point.\n\n3. Lot and Block (Recorded Plat) — used in subdivisions. References a recorded tract map. Most common for residential California properties.\n\nCalifornia also uses the Assessor's Parcel Number (APN) for tax purposes — this is NOT a legal description and cannot be used in a deed."
            }
          ],
          quiz: [
            {
              id: "ca_b02q01",
              prompt: "Under California community property law, a married person inherits $200,000 from their parent during the marriage. This inheritance is:",
              choices: [
                "Community property — acquired during marriage",
                "Separate property — inheritances are excluded from community property",
                "Community property unless converted by a prenuptial agreement",
                "Automatically split 50/50 on divorce"
              ],
              answer: 1,
              explanation: "Under California law, inheritances (and gifts) received by one spouse during a marriage are SEPARATE property belonging solely to the receiving spouse. Only property EARNED or ACQUIRED by effort during the marriage is community property."
            },
            {
              id: "ca_b02q02",
              prompt: "A California married couple wants to take title so that their property passes to the survivor automatically AND gets favorable community property tax treatment. Which form of ownership should they choose?",
              choices: [
                "Joint tenancy",
                "Tenancy in common",
                "Community property with right of survivorship",
                "Tenancy in partnership"
              ],
              answer: 2,
              explanation: "Community Property with Right of Survivorship (CPROS) is a California-specific ownership form that combines survivorship rights (property passes automatically to survivor, bypassing probate) with the tax advantages of community property (stepped-up basis on both halves at death)."
            },
            {
              id: "ca_b02q03",
              prompt: "What is California's principal baseline and meridian used in the rectangular survey system?",
              choices: [
                "Willamette Meridian",
                "Mount Diablo Base and Meridian",
                "San Bernardino Base and Meridian",
                "Both Mount Diablo and San Bernardino are used in California"
              ],
              answer: 3,
              explanation: "California uses TWO principal meridians: Mount Diablo (covering Northern and Central California) and San Bernardino (covering Southern California). Both are used in the rectangular survey system within the state."
            },
            {
              id: "ca_b02q04",
              prompt: "How many acres are in the NW ¼ of the SE ¼ of Section 22?",
              choices: ["640 acres", "160 acres", "80 acres", "40 acres"],
              answer: 3,
              explanation: "One section = 640 acres. SE ¼ = 160 acres. NW ¼ of that = 40 acres. Formula: 640 ÷ 4 ÷ 4 = 40 acres."
            },
            {
              id: "ca_b02q05",
              prompt: "A California husband sells community property real estate using only his signature on the deed. This deed is BEST described as:",
              choices: [
                "Void — community property requires both signatures",
                "Valid — one spouse can manage community property",
                "Voidable — the non-signing spouse can challenge it",
                "Valid only if the price was fair market value"
              ],
              answer: 2,
              explanation: "Under California law, a conveyance of community property real estate signed by only one spouse is VOIDABLE (not void). The non-signing spouse can challenge the transfer. To be safe and clear title, both spouses must sign deeds for community property."
            }
          ]
        },

        // ── MODULE 3 ──────────────────────────────────────
        {
          id: "ca_b03",
          order: 3,
          title: "Agency Law & Fiduciary Duties",
          week: "3-4",
          passingScore: 70,
          icon: "🤝",
          objective: "Explain agency creation, the OLD CAR fiduciary duties, California-specific agency disclosure requirements, and dual agency rules under Civil Code § 2079.",
          content: [
            {
              heading: "Agency Relationships in California",
              body: "Agency is a legal relationship where one party (the agent) is authorized to act on behalf of another (the principal/client).\n\nIn California real estate:\n• Seller's Agent (Listing Agent) — represents the seller. Full fiduciary duties to seller.\n• Buyer's Agent — represents the buyer. Full fiduciary duties to buyer.\n• Dual Agent — represents both buyer and seller in the same transaction. Legal in CA with WRITTEN informed consent from BOTH parties.\n• Subagent — an agent of a client who works with the other party. Rare in modern CA practice.\n\nAgency is generally created by written agreement (listing agreement or buyer representation agreement). Implied agency can be created accidentally by conduct — be careful."
            },
            {
              heading: "California Fiduciary Duties: OLD CAR",
              body: "Agents owe their clients (principals) six fiduciary duties:\n\n• Obedience — follow all LAWFUL instructions from the principal.\n• Loyalty — put the client's interests above all others, including your own financial interests.\n• Disclosure — reveal ALL material facts known to you that could affect the transaction or the principal's decision.\n• Confidentiality — protect the client's confidential information. This duty CONTINUES after the agency relationship ends.\n• Accounting — account for all funds and property entrusted to you. Never commingle.\n• Reasonable Care — exercise the skill, care, and diligence of a licensed real estate professional.\n\nFor third parties (customers you are NOT representing): owe honesty and fair dealing only — NOT full fiduciary duties. However, all agents must disclose known material defects to ALL parties regardless of who they represent."
            },
            {
              heading: "California Agency Disclosure Requirements",
              body: "California Civil Code § 2079 requires specific agency disclosure procedures.\n\nThe Disclosure Regarding Real Estate Agency Relationships (AD form, CAR Form AD) must be:\n• Given to SELLERS: before or when the listing agreement is signed\n• Given to BUYERS: before or when the buyer representation agreement is signed, or before making an offer if no agreement exists\n• Confirmed in the purchase contract: the final contract must identify the agent relationship for ALL parties\n\nThree-step California agency disclosure process:\n1. DISCLOSE — give the AD form and explain agency options\n2. ELECT — the client selects their desired agency arrangement\n3. CONFIRM — confirmed in the purchase contract\n\nThis three-step process is a major exam topic."
            },
            {
              heading: "Dual Agency in California",
              body: "Dual Agency: one agent OR one brokerage representing both buyer and seller in the same transaction.\n\nIn California: LEGAL but requires WRITTEN informed consent from BOTH parties BEFORE entering into the dual agency arrangement.\n\nA dual agent CANNOT:\n• Disclose the seller's lowest acceptable price without permission\n• Disclose the buyer's highest willingness to pay without permission\n• Advocate for either party's negotiating position\n\nDesignated Agency / Assigned Agency: a brokerage assigns one salesperson to represent the seller and a different salesperson to represent the buyer (within the same firm). This reduces the conflict of full dual agency but the MANAGING BROKER is still technically a dual agent.\n\nKey exam point: agents employed by the SAME broker are generally held to be dual agents even if different individuals represent each party."
            },
            {
              heading: "Material Facts & the Visual Inspection Duty",
              body: "All California licensees must conduct a reasonably competent and diligent visual inspection of ALL accessible areas of residential property (1-4 units) and disclose all material facts observed.\n\nThis is the Agent Visual Inspection Disclosure (AVID — CAR Form AVID).\n\nMaterial fact: any fact that could affect the value, desirability, or use of the property. Examples:\n• Physical defects (roof, foundation, plumbing, electrical)\n• Environmental hazards (mold, lead, asbestos)\n• Neighborhood conditions that affect value\n• Pending assessments or liens\n• Legal disputes affecting the property\n\nAgents CANNOT hide behind 'as-is' clauses when it comes to known material defects. Disclosure obligations exist regardless of the sale price or condition of the property."
            }
          ],
          quiz: [
            {
              id: "ca_b03q01",
              prompt: "Under California Civil Code § 2079, when must a listing agent give the Agency Disclosure (AD) form to the seller?",
              choices: [
                "At the first showing of the property",
                "Before or when the listing agreement is signed",
                "Only when dual agency is involved",
                "At the time the purchase contract is signed"
              ],
              answer: 1,
              explanation: "California requires the AD form to be given to the SELLER before or when the listing agreement is signed. For buyers, it must be given before or when the buyer representation agreement is signed (or before an offer if no agreement exists)."
            },
            {
              id: "ca_b03q02",
              prompt: "A California listing agent discovers the property's roof has significant undisclosed damage. The seller instructs the agent not to mention it. The agent MUST:",
              choices: [
                "Follow the seller's instructions — they are the principal",
                "Disclose the defect to the buyer — it is a known material fact",
                "Say nothing but not actively deny it if asked",
                "Disclose only to their managing broker, not the buyer"
              ],
              answer: 1,
              explanation: "In California, all agents must disclose known material facts to ALL parties regardless of whose interests they represent. A roof defect is clearly material. An instruction from the principal to conceal a material fact is NOT a lawful instruction — agents cannot follow it."
            },
            {
              id: "ca_b03q03",
              prompt: "The California three-step agency disclosure process is, in order:",
              choices: [
                "Confirm → Disclose → Elect",
                "Elect → Disclose → Confirm",
                "Disclose → Elect → Confirm",
                "Disclose → Confirm → Elect"
              ],
              answer: 2,
              explanation: "California's required agency disclosure process is: (1) DISCLOSE — give the AD form and explain options, (2) ELECT — client selects the desired agency arrangement, (3) CONFIRM — confirmed in the final purchase contract."
            },
            {
              id: "ca_b03q04",
              prompt: "In California, a dual agent may NOT do which of the following without the respective party's permission?",
              choices: [
                "Disclose the listing price",
                "Disclose the seller's minimum acceptable price to the buyer",
                "Show the buyer all active listings in the MLS",
                "Present the buyer's offer to the seller"
              ],
              answer: 1,
              explanation: "A dual agent must maintain each party's confidential information. Disclosing the seller's bottom-line acceptable price to the buyer without the seller's permission is a breach of the agent's fiduciary duty of confidentiality to the seller."
            }
          ]
        },

        // ── MODULE 4 ──────────────────────────────────────
        {
          id: "ca_b04",
          order: 4,
          title: "Contracts & California Purchase Agreements",
          week: "3-4",
          passingScore: 70,
          icon: "📝",
          objective: "Master contract formation, the California Residential Purchase Agreement (RPA), contingencies, breach remedies, and specific performance rules.",
          content: [
            {
              heading: "Elements of a Valid Contract",
              body: "All contracts require:\n• Offer and Acceptance (mutual assent/meeting of the minds)\n• Consideration — something of value exchanged by each party\n• Legal Capacity — parties must be adults (18+) of sound mind\n• Lawful Object — purpose must be legal\n• In writing — California's Statute of Frauds (Civil Code § 1624) requires all real estate contracts to be IN WRITING to be enforceable\n\nContract types:\n• Bilateral — both parties make promises (purchase agreement)\n• Unilateral — only one party makes a promise (option contract)\n• Express — stated in words (oral or written)\n• Implied — created by conduct\n• Executory — not yet fully performed\n• Executed — fully performed"
            },
            {
              heading: "California Residential Purchase Agreement (RPA)",
              body: "The RPA (CAR Form RPA) is the standard California purchase contract. Key sections:\n\n• Purchase Price and Down Payment\n• Loan Terms and Financing Contingency\n• Appraisal Contingency\n• Investigation (Inspection) Contingency — default 17 days\n• Title Review Period — default 17 days\n• Close of Escrow Date\n• Included/Excluded Items (fixtures, personal property)\n• Seller Disclosures\n• Dispute Resolution (Mediation first, then Arbitration if elected)\n\nEscrow: California commonly uses an escrow company (not an attorney) as the neutral third party to handle closings. Escrow instructions must be followed precisely."
            },
            {
              heading: "Contingencies in California",
              body: "Contingencies protect a party's right to cancel without penalty if conditions are not met.\n\nThe three major contingencies in California RPA:\n\n1. Loan Contingency — protects buyer if financing falls through. Default is 21 days. If buyer cannot get the loan, they can cancel and recover their deposit.\n\n2. Appraisal Contingency — protects buyer if the property appraises below the purchase price. Buyer can renegotiate or cancel.\n\n3. Inspection/Investigation Contingency — gives buyer the right to inspect the property and cancel for any reason within the contingency period (default 17 days).\n\nActive vs. Passive Contingency Removal:\n• ACTIVE removal: buyer signs a contingency removal form (CAR Form CR) — clear affirmative act required\n• PASSIVE removal: some contingencies auto-expire after a set number of days if neither party acts\n\nCalifornia uses ACTIVE removal as the default — buyer must sign a CR form to formally remove each contingency."
            },
            {
              heading: "Remedies for Breach",
              body: "If the buyer defaults:\n• Liquidated Damages — seller keeps the deposit (typically 3% of purchase price is the CA standard liquidated damages amount). The deposit CANNOT exceed 3% for residential property.\n• Specific Performance — seller can sue to force the buyer to complete the purchase.\n\nIf the seller defaults:\n• Specific Performance — buyer can sue to force the sale. This is a powerful remedy unique to real estate (each parcel is unique).\n• Damages — buyer can sue for money damages.\n\nMediation requirement: California RPA requires the parties to attempt MEDIATION before filing a lawsuit. Failure to attempt mediation can result in loss of the right to recover attorney's fees.\n\nArbitration: the RPA includes an OPTIONAL arbitration clause. If both parties initial it, disputes go to binding arbitration instead of court."
            },
            {
              heading: "Option Agreements & Right of First Refusal",
              body: "Option Contract:\n• A unilateral contract giving the optionee the RIGHT (but not obligation) to purchase property at a set price within a set period.\n• The optionor (seller) is bound; the optionee (buyer) is NOT bound.\n• Consideration must be paid for the option to be valid.\n• The option must be exercised strictly according to its terms.\n\nRight of First Refusal (ROFR):\n• Gives the holder the right to match any third-party offer before the owner can accept it.\n• ROFR holder is NOT bound to buy — they can refuse.\n• Very common in leases and partnership agreements."
            }
          ],
          quiz: [
            {
              id: "ca_b04q01",
              prompt: "Under California's Statute of Frauds, which of the following real estate agreements MUST be in writing to be enforceable?",
              choices: [
                "Only purchase agreements over $500",
                "All real estate contracts including listings and lease agreements over 1 year",
                "Only buyer representation agreements",
                "No real estate contracts — oral agreements are valid in California"
              ],
              answer: 1,
              explanation: "California Civil Code § 1624 (Statute of Frauds) requires all real estate purchase contracts, listing agreements, and lease agreements exceeding one year to be IN WRITING to be enforceable in court."
            },
            {
              id: "ca_b04q02",
              prompt: "A California buyer wants to remove their inspection contingency. Under the RPA, the buyer must:",
              choices: [
                "Simply allow the 17-day period to expire (passive removal)",
                "Sign a Contingency Removal (CR) form — active removal is required",
                "Send a verbal notice to the seller",
                "Submit a written notice directly to escrow only"
              ],
              answer: 1,
              explanation: "California's RPA uses ACTIVE contingency removal as the default. The buyer must sign the Contingency Removal (CAR Form CR) form to formally release each contingency. Simply letting the clock run does NOT automatically remove contingencies in the standard California contract."
            },
            {
              id: "ca_b04q03",
              prompt: "A seller accepts a buyer's offer with a 3% liquidated damages clause. The buyer later defaults. The maximum deposit the seller can retain on a residential property in California is:",
              choices: [
                "The entire deposit regardless of amount",
                "3% of the purchase price",
                "10% of the purchase price",
                "Whatever the actual damages were"
              ],
              answer: 1,
              explanation: "California Civil Code limits liquidated damages on residential property (1-4 units) to a maximum of 3% of the purchase price. Any deposit above 3% would need to be returned to the buyer even if the buyer defaults."
            },
            {
              id: "ca_b04q04",
              prompt: "In a California option contract, which party is legally BOUND to perform?",
              choices: [
                "Both parties are equally bound",
                "Neither party — options are non-binding",
                "The optionor (seller) only — the optionee has the option to buy or not",
                "The optionee (buyer) only — they paid for the option"
              ],
              answer: 2,
              explanation: "An option is a unilateral contract. The optionor (seller) is bound to keep the offer open and honor it if exercised. The optionee (buyer) has no obligation — they can choose to exercise the option or let it expire. This is the defining characteristic of an option contract."
            }
          ]
        },

        // ── MODULE 5 ──────────────────────────────────────
        {
          id: "ca_b05",
          order: 5,
          title: "Real Estate Finance",
          week: "3-4",
          passingScore: 70,
          icon: "💰",
          objective: "Understand California's use of deeds of trust (not mortgages), trust deed foreclosure, loan types, qualifying ratios, and the secondary mortgage market.",
          content: [
            {
              heading: "California: Deed of Trust vs. Mortgage",
              body: "Unlike many states, California primarily uses DEEDS OF TRUST (not mortgages) to secure real estate loans. This is a critical distinction for the CA exam.\n\nDeed of Trust — involves THREE parties:\n• Trustor — the borrower (owner of the property)\n• Beneficiary — the lender\n• Trustee — neutral third party (usually a title company) holding legal title\n\nThe trustor grants legal title to the trustee to hold as security for the loan. When the loan is paid off, the trustee reconveys title to the trustor via a Deed of Reconveyance.\n\nKey advantage of deed of trust: allows non-judicial foreclosure (trustee's sale) which is faster and cheaper than judicial mortgage foreclosure."
            },
            {
              heading: "California Foreclosure: Trustee's Sale",
              body: "Non-judicial foreclosure (Trustee's Sale) is the most common foreclosure method in California:\n\n1. Notice of Default (NOD) recorded — borrower is 90+ days delinquent\n2. 3-month reinstatement period — borrower can cure by paying all missed payments + fees\n3. Notice of Trustee's Sale — posted 20+ days before sale\n4. Trustee's Sale — property sold at public auction to highest bidder\n5. Trustee's Deed — new owner receives this after sale\n\nKey CA rules:\n• ONE ACTION RULE (CCP § 726): lender must exhaust the security (foreclose) before pursuing personal judgment against borrower\n• ANTI-DEFICIENCY RULE (CCP § 580b): for purchase money loans on owner-occupied 1-4 units, lender generally CANNOT pursue a deficiency judgment after foreclosure\n• Right of Redemption: California has ELIMINATED the right of redemption after a non-judicial trustee's sale — borrower cannot buy back the property after the sale"
            },
            {
              heading: "Loan Types & Qualifying",
              body: "Common loan types tested on the CA exam:\n\n• Conventional — not government-backed. Requires 3-20% down. PMI required if less than 20% down. Conforming loans follow Fannie/Freddie guidelines.\n• FHA — Federal Housing Administration backed. 3.5% minimum down. MIP required regardless of down payment. Best for buyers with lower credit scores.\n• VA — Veterans Administration backed. 0% down for eligible veterans. No PMI. Funding fee required.\n• CalHFA — California Housing Finance Agency. State first-time buyer programs with down payment assistance.\n\nQualifying Ratios:\n• Front-end (Housing) DTI: PITI ÷ Gross Monthly Income. Conventional guideline: ≤28%\n• Back-end (Total) DTI: (PITI + all monthly debts) ÷ Gross Monthly Income. Conventional guideline: ≤36% (can go higher with compensating factors)\n• FHA allows: 31% front-end / 43% back-end"
            },
            {
              heading: "Trust Deeds, Notes & the Secondary Market",
              body: "The promissory note is the PERSONAL promise to repay. The deed of trust is the SECURITY — it pledges the property as collateral. The note and trust deed are separate instruments.\n\nAssumable loans: some loans (FHA, VA) can be assumed by a new buyer with lender approval. Conventional loans typically contain a due-on-sale clause making them non-assumable.\n\nSecondary Mortgage Market:\n• Fannie Mae (FNMA) — purchases conventional conforming loans from lenders\n• Freddie Mac (FHLMC) — same function as Fannie Mae; competes for conforming loans\n• Ginnie Mae (GNMA) — guarantees MBS backed by FHA/VA/USDA loans (does NOT buy loans)\n\nDiscount Points: prepaid interest paid at closing to reduce the interest rate. One point = 1% of the loan amount. Used to 'buy down' the rate."
            }
          ],
          quiz: [
            {
              id: "ca_b05q01",
              prompt: "In California's deed of trust, who holds legal title to the property during the loan period?",
              choices: [
                "The borrower (trustor)",
                "The lender (beneficiary)",
                "The trustee (neutral third party)",
                "The title insurance company"
              ],
              answer: 2,
              explanation: "In a California deed of trust, the TRUSTEE holds legal title as security for the loan. The trustor (borrower) retains equitable title (the right to use and occupy the property). The trustee reconveys title to the trustor when the loan is fully paid."
            },
            {
              id: "ca_b05q02",
              prompt: "Under California's anti-deficiency rule (CCP § 580b), after a non-judicial foreclosure on a purchase money loan for an owner-occupied home, the lender:",
              choices: [
                "Can sue the borrower for any remaining balance",
                "Generally cannot pursue a deficiency judgment against the borrower",
                "Can file a deficiency claim only within 3 months of the sale",
                "Must obtain court approval before seeking a deficiency"
              ],
              answer: 1,
              explanation: "California's anti-deficiency statutes (CCP § 580b) protect borrowers with purchase money loans on 1-4 unit owner-occupied residential properties. After a non-judicial trustee's sale, the lender generally cannot pursue a deficiency judgment for the remaining loan balance."
            },
            {
              id: "ca_b05q03",
              prompt: "A buyer has a gross monthly income of $8,000. Their monthly PITI is $2,000 and they have $600/month in car payments. What is their back-end DTI ratio?",
              choices: ["25%", "32.5%", "33%", "40%"],
              answer: 1,
              explanation: "Back-end DTI = (PITI + all debts) ÷ Gross Monthly Income = ($2,000 + $600) ÷ $8,000 = $2,600 ÷ $8,000 = 32.5%."
            },
            {
              id: "ca_b05q04",
              prompt: "After a California non-judicial trustee's sale, the former owner has:",
              choices: [
                "6 months to redeem the property by paying the sale price",
                "3 months to redeem by paying the full loan balance",
                "No right of redemption — California eliminated redemption after trustee's sales",
                "A right of redemption only if they file in court within 30 days"
              ],
              answer: 2,
              explanation: "California has ELIMINATED the right of redemption after a non-judicial trustee's sale. Once the property is sold at a trustee's sale, the former owner has no right to redeem. This is different from judicial foreclosure, which retains a redemption period."
            }
          ]
        },

        // ── MODULE 6 ──────────────────────────────────────
        {
          id: "ca_b06",
          order: 6,
          title: "Valuation & Market Analysis",
          week: "3-4",
          passingScore: 70,
          icon: "📊",
          objective: "Apply the three approaches to value, interpret depreciation, understand California's Proposition 13 impact on valuations, and build CMA logic.",
          content: [
            {
              heading: "Three Approaches to Value",
              body: "1. Sales Comparison Approach (Market Approach)\n— Best for: residential properties with many comparable sales\n— Method: find 3+ recently sold comparable properties, adjust for differences\n— Adjustments: CBS — Comp Better, Subtract. If the comp is better than the subject, subtract the difference from the comp's price. If the comp is worse, add.\n\n2. Income Approach\n— Best for: income-producing properties (apartments, retail, office)\n— Formula: Value = Net Operating Income (NOI) ÷ Cap Rate\n— NOI = Gross Scheduled Income - Vacancy Loss - Operating Expenses (NOT including debt service)\n— Gross Rent Multiplier (GRM): Sale Price ÷ Gross Monthly Rent. Quick valuation shortcut.\n\n3. Cost Approach\n— Best for: special-use properties (schools, churches, public buildings) with few comps; new construction\n— Formula: Land Value + (Replacement Cost New - Depreciation) = Value\n— Three types of depreciation: Physical deterioration, Functional obsolescence, Economic/External obsolescence (only incurable type)"
            },
            {
              heading: "Proposition 13 & Its Appraisal Impact",
              body: "Proposition 13 (1978) fundamentally changed California real estate valuation:\n\n• Property is assessed at PURCHASE PRICE (not current market value)\n• Annual increases are CAPPED at 2% per year maximum\n• Property is REASSESSED to full market value only when: (1) sold/transferred, or (2) new construction is completed\n\nThis means a long-term California owner may have an assessed value far below market value — sometimes by hundreds of thousands of dollars. This creates a 'property tax lock-in' effect that discourages selling.\n\nProp 19 (2020): Updated parent-child transfer rules — parents can still transfer primary residence to children with base year value protection, but only if the child uses it as their primary residence. Other properties no longer qualify.\n\nFor exam questions: the ASSESSED VALUE under Prop 13 is NOT the same as market value or appraised value."
            },
            {
              heading: "Depreciation & Obsolescence",
              body: "Depreciation for appraisal purposes = loss in value from any cause.\n\nPhysical Deterioration:\n• Curable: deferred maintenance that's cost-effective to fix (broken window, worn carpet)\n• Incurable: structural issues where repair cost exceeds the value added\n\nFunctional Obsolescence:\n• Curable: outdated features that can be economically updated (old kitchen, no AC)\n• Incurable: structural deficiencies (outdated floor plan, insufficient closets)\n\nEconomic/External Obsolescence:\n• ALWAYS incurable — cause is outside the property (freeway noise, declining neighborhood, contaminated adjacent property)\n• Not the owner's fault; cannot be fixed by modifying the subject property\n\nKey rule: Economic obsolescence is the ONLY type that is always incurable."
            },
            {
              heading: "Broker Price Opinions & CMAs",
              body: "CMA (Comparative Market Analysis): a broker's pricing tool. NOT an appraisal. Used to advise sellers on listing price and buyers on offer price.\n\nBPO (Broker Price Opinion): a formal written valuation by a California licensee. California allows BPOs under certain conditions. Often ordered by lenders for short sales, loan modifications, or portfolio valuations.\n\nKey distinctions:\n• Brokers CANNOT call their analysis an 'appraisal' — that requires a separate appraiser license (BREA — Bureau of Real Estate Appraisers in California)\n• CMAs are not legally binding valuations\n• Appraisals are required for most mortgage transactions\n\nAbsorption Rate: Number of active listings ÷ Average monthly closed sales = Months of supply. Under 6 months = seller's market; over 6 months = buyer's market."
            }
          ],
          quiz: [
            {
              id: "ca_b06q01",
              prompt: "Under California's Proposition 13, when does a property's assessed value get reset to full current market value?",
              choices: [
                "Every 3 years during the county reassessment cycle",
                "When the property is sold or transferred, or when new construction is completed",
                "When the property's market value exceeds the assessed value by more than 10%",
                "Annually, capped at no more than 2% increase"
              ],
              answer: 1,
              explanation: "Under Proposition 13, a property's assessed value is locked at purchase price and increases only 2% per year — until the property is sold/transferred or new construction is completed, which triggers a full reassessment to current market value."
            },
            {
              id: "ca_b06q02",
              prompt: "A comparable property has 3 bathrooms; the subject property has 2 bathrooms. The market values each bathroom at $5,000. How should you adjust the comparable?",
              choices: [
                "Add $5,000 to the comparable — it is inferior to the subject",
                "Subtract $5,000 from the comparable — it is superior to the subject",
                "Add $5,000 to the subject's estimated value",
                "No adjustment — bathrooms are not a significant factor"
              ],
              answer: 1,
              explanation: "CBS — Comp Better, Subtract. The comparable has one more bathroom than the subject, making it better. Subtract $5,000 from the comparable's sale price to make it comparable to the subject property."
            },
            {
              id: "ca_b06q03",
              prompt: "A rental property generates $240,000 in annual NOI. Comparable properties trade at a 6% cap rate. What is the indicated value?",
              choices: ["$1,440,000", "$4,000,000", "$14,400,000", "$240,000"],
              answer: 1,
              explanation: "Value = NOI ÷ Cap Rate = $240,000 ÷ 0.06 = $4,000,000."
            },
            {
              id: "ca_b06q04",
              prompt: "A house near a newly built freeway has lost value due to noise and traffic. This type of depreciation is BEST described as:",
              choices: [
                "Physical deterioration — incurable",
                "Functional obsolescence — curable",
                "Economic/External obsolescence — incurable",
                "Physical deterioration — curable"
              ],
              answer: 2,
              explanation: "Loss in value caused by factors OUTSIDE the property (freeway, neighborhood decline, adjacent contamination) is Economic/External obsolescence. It is always INCURABLE because the owner cannot fix the external cause."
            }
          ]
        },

        // ── MODULE 7 ──────────────────────────────────────
        {
          id: "ca_b07",
          order: 7,
          title: "California State Law & DRE Rules",
          week: "7-8",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master California-specific licensing rules, DRE disciplinary authority, trust fund handling, advertising regulations, and the Transfer Disclosure Statement.",
          content: [
            {
              heading: "California Licensing Structure (Business & Professions Code)",
              body: "California real estate is governed by the Real Estate Law (Business and Professions Code § 10000 et seq.) and the Regulations of the Real Estate Commissioner (Title 10, CCR).\n\nLicense types:\n• Salesperson — entry-level. Must work under a DRE-licensed broker. Cannot operate independently. Cannot be self-employed.\n• Broker — full license. Can operate independently, manage a brokerage, supervise salespersons, and receive compensation directly from clients.\n• Broker-Associate — a licensed broker who works for another broker. Has broker-level training but works as an associate.\n\nBroker is required to supervise all salesperson activities. Brokers can be disciplined for the unlawful acts of their salespersons if the broker knew or should have known.\n\nDRE (Department of Real Estate) is the regulating agency. The Real Estate Commissioner heads the DRE and is appointed by the Governor."
            },
            {
              heading: "Trust Fund Handling",
              body: "California Real Estate Law imposes strict trust fund rules (Commissioner's Regulations § 2830-2846):\n\n• All client funds (earnest money, rents collected, deposits) must go into a SEPARATE trust account\n• Funds must be deposited within 3 BUSINESS DAYS of receipt (or as specified in the contract)\n• Trust funds must be kept in a federally insured bank or savings institution in California\n• The broker is PERSONALLY RESPONSIBLE for all trust funds even if handled by office staff\n\nCommingling: mixing personal or operating funds with client trust funds. PROHIBITED. Even depositing your own funds to maintain the minimum bank balance in the trust account is commingling.\n\nConversion: using trust funds for personal use. CRIMINAL offense (embezzlement) + license revocation.\n\nRecord keeping: maintain trust fund records for a minimum of 3 YEARS."
            },
            {
              heading: "Transfer Disclosure Statement (TDS)",
              body: "The Transfer Disclosure Statement (CAR Form TDS, Civil Code § 1102) is MANDATORY for all residential 1-4 unit property sales in California. Exceptions: new construction (builder disclosure instead), probate sales, foreclosure sales, court-ordered sales.\n\nWhat it covers:\n• Physical condition of the property (systems, features, defects)\n• Known defects, renovations, permits, legal issues\n• Neighborhood conditions, nuisances, litigation\n\nTiming rules:\n• Must be delivered AS SOON AS PRACTICABLE before transfer\n• Buyer has 3 DAYS to rescind after in-person delivery, OR 5 DAYS after mailing\n\nAll agents with access to the property must complete the AVID (Agent Visual Inspection Disclosure). Both listing agent AND buyer's agent must complete their own AVID.\n\nFailure to provide TDS: buyer can rescind the contract."
            },
            {
              heading: "California Advertising Rules",
              body: "DRE advertising regulations (Commissioner's Regulations § 2770):\n\n• All advertising must include the DRE licensee number OR the broker's name and DRE number\n• Blind ads (ads that don't identify you as a real estate licensee) are PROHIBITED\n• Salespersons CANNOT advertise under their own name only — must include the broker's name\n• Social media posts about listings = advertising subject to all advertising rules\n• 'Team' advertising: team names are allowed but broker's name must be prominently displayed\n\nProhibited advertising claims:\n• Guaranteed results (no broker can guarantee a specific sale price or timeline)\n• False or misleading statements about the property or market\n• Discriminatory preferences or limitations\n\nCALBRE → DRE: the Department of Real Estate was called CALBRE from 2013-2018. It reverted to DRE in 2018. The governing laws did not change."
            },
            {
              heading: "Fair Housing in California",
              body: "Federal Fair Housing Act (1968): 7 protected classes — Race, Color, Religion, National Origin, Sex, Familial Status, Disability.\n\nCalifornia Fair Employment and Housing Act (FEHA) adds many more protected classes:\n• Marital status\n• Sexual orientation\n• Gender identity and gender expression\n• Source of income (cannot refuse Section 8/housing vouchers)\n• Ancestry\n• Disability (broader than federal definition)\n• Age (40+)\n• Genetic information\n• Military and veteran status\n\nCalifornia Unruh Civil Rights Act: prohibits discrimination by all business establishments, including real estate businesses.\n\nThe California Association of Realtors' Fair Housing Advisory and the Statewide Buyer and Seller Advisory (SBSA) both address fair housing obligations in detail."
            }
          ],
          quiz: [
            {
              id: "ca_b07q01",
              prompt: "A California broker receives a buyer's earnest money check on a Monday. By when must it be deposited into the trust account?",
              choices: [
                "Same day (Monday)",
                "Within 2 banking days",
                "Within 3 business days",
                "Within 5 business days"
              ],
              answer: 2,
              explanation: "California Commissioner's Regulations require trust funds to be deposited within 3 BUSINESS DAYS of receipt (or per the terms of the purchase contract if specified differently). This is one of the most commonly tested trust fund rules."
            },
            {
              id: "ca_b07q02",
              prompt: "A California salesperson runs an Instagram ad for a listing using only their personal name without including their broker's name. This is:",
              choices: [
                "Acceptable for social media since it is informal",
                "A blind ad violation — broker's name must be included",
                "Acceptable if the salesperson's DRE number is included",
                "Acceptable as long as the brokerage website is linked"
              ],
              answer: 1,
              explanation: "California DRE requires all salesperson advertising to include the broker's name. Running an ad with only the salesperson's name — on ANY platform including social media — is a blind ad violation under Commissioner's Regulation § 2770."
            },
            {
              id: "ca_b07q03",
              prompt: "Which of the following is a protected class under California law but NOT under the federal Fair Housing Act?",
              choices: [
                "Familial Status",
                "National Origin",
                "Source of Income (housing vouchers)",
                "Disability"
              ],
              answer: 2,
              explanation: "Source of Income (including Section 8/Housing Choice Voucher recipients) is a protected class under California's Fair Employment and Housing Act. Landlords and agents cannot refuse to rent to someone solely because they use a housing voucher. This is NOT a federal Fair Housing protected class."
            },
            {
              id: "ca_b07q04",
              prompt: "The California Transfer Disclosure Statement (TDS) is MANDATORY for which type of sale?",
              choices: [
                "All real estate sales including commercial and vacant land",
                "All residential 1-4 unit sales (with limited exceptions such as probate and foreclosure sales)",
                "Only sales of owner-occupied single family homes",
                "Only sales involving an FHA or VA loan"
              ],
              answer: 1,
              explanation: "The TDS is required for all residential 1-4 unit sales in California. Exceptions include probate sales, foreclosure sales, court-ordered transfers, and transfers between spouses. It is NOT required for commercial property or vacant land."
            },
            {
              id: "ca_b07q05",
              prompt: "After personal delivery of the Transfer Disclosure Statement to the buyer, how many days does the buyer have to rescind?",
              choices: ["24 hours", "3 days", "5 days", "10 days"],
              answer: 1,
              explanation: "California Civil Code § 1102.3 gives the buyer 3 DAYS to rescind after in-person delivery of the TDS, or 5 days after mailing. This rescission right exists regardless of whether the buyer has already signed the purchase contract."
            }
          ]
        },

        // ── MODULE 8 ──────────────────────────────────────
        {
          id: "ca_b08",
          order: 8,
          title: "Real Estate Math Mastery",
          week: "1-2 (ongoing)",
          passingScore: 70,
          icon: "🧮",
          objective: "Solve California-specific commission calculations, Proposition 13 tax prorations, transfer tax, area calculations, and loan qualifying math.",
          content: [
            {
              heading: "Commission Calculations",
              body: "Commission = Sale Price × Commission Rate\n\nExample: $850,000 California home at 5% total commission:\n$850,000 × 0.05 = $42,500 total commission\n\nTypical split (listing side 50% / buyer side 50%):\n• Listing brokerage receives $21,250\n• Buyer's brokerage receives $21,250\n\nIf the listing agent has a 70/30 split with their broker:\n• Listing agent gets $21,250 × 0.70 = $14,875\n• Listing broker keeps $21,250 × 0.30 = $6,375\n\nWorking backwards:\n$25,000 commission at 2.5% = $25,000 ÷ 0.025 = $1,000,000 sale price\n\nNet to seller: if seller wants to net $750,000 after a 5% commission:\n$750,000 ÷ (1 - 0.05) = $750,000 ÷ 0.95 = $789,474 listing price"
            },
            {
              heading: "California Property Tax & Proration",
              body: "California property taxes are paid IN ARREARS in two installments:\n• 1st installment: covers July 1–December 31 (due November 1; delinquent December 10)\n• 2nd installment: covers January 1–June 30 (due February 1; delinquent April 10)\n\nFor proration in a California escrow, ALWAYS use a 30-day month / 360-day year (banker's year) unless told otherwise.\n\nExample: Annual taxes = $7,200. Close of escrow: March 15.\nDaily rate: $7,200 ÷ 360 = $20/day\nJanuary 1 to March 15 = 2 months + 15 days = 75 days\nSeller owes buyer credit of: 75 × $20 = $1,500 (taxes paid in arrears — seller owes for days they owned)\n\nDocumentary Transfer Tax (DTT):\nCounty rate: $1.10 per $1,000 of value (some cities add additional)\nExample: $600,000 sale: $600,000 ÷ 1,000 × $1.10 = $660 county DTT\nCity of Los Angeles adds $4.50/1,000 additional on most sales"
            },
            {
              heading: "Loan Math & Qualifying",
              body: "LTV (Loan-to-Value): Loan Amount ÷ Appraised Value\nExample: $680,000 loan on $850,000 property: $680,000 ÷ $850,000 = 80% LTV\n\nDown payment: $850,000 × 20% = $170,000 down\n\nPMI required if LTV exceeds 80% on conventional loans.\n\nMonthly interest on first payment:\nLoan amount × Annual rate ÷ 12\n$680,000 × 6% ÷ 12 = $680,000 × 0.005 = $3,400 first month's interest\n\nQualifying income needed:\nTarget mortgage payment $3,400/month at 28% front-end ratio:\n$3,400 ÷ 0.28 = $12,143/month gross income needed\n\nBack-end DTI at 36%: if monthly debts are $800:\n($3,400 + $800) ÷ 0.36 = $4,200 ÷ 0.36 = $11,667/month minimum income"
            }
          ],
          quiz: [
            {
              id: "ca_b08q01",
              prompt: "A California home sells for $950,000 with a 5% total commission. The listing broker and buyer's broker split equally. The listing agent receives 60% of the listing broker's side. What does the listing agent receive?",
              choices: ["$14,250", "$28,500", "$23,750", "$47,500"],
              answer: 0,
              explanation: "Total commission: $950,000 × 5% = $47,500. Listing broker's side: $47,500 ÷ 2 = $23,750. Listing agent's 60%: $23,750 × 0.60 = $14,250."
            },
            {
              id: "ca_b08q02",
              prompt: "Annual property taxes are $9,000 on a home in California. Escrow closes January 31. Using a 360-day year, what is the seller's tax proration credit to the buyer? (Taxes paid in arrears; seller owned Jan 1–Jan 31)",
              choices: ["$750", "$7,500", "$375", "$500"],
              answer: 0,
              explanation: "Daily rate: $9,000 ÷ 360 = $25/day. Seller owned January 1–31 = 30 days. Seller owes: 30 × $25 = $750 credit to buyer. (Taxes are paid in arrears — seller owes for the days they owned.)"
            },
            {
              id: "ca_b08q03",
              prompt: "What is the county Documentary Transfer Tax on a $720,000 property sale in California at the standard rate of $1.10 per $1,000?",
              choices: ["$72", "$720", "$792", "$7,920"],
              answer: 2,
              explanation: "$720,000 ÷ $1,000 × $1.10 = 720 × $1.10 = $792. This is the county-level Documentary Transfer Tax. Cities may charge additional transfer taxes on top of this."
            }
          ]
        },

        // ── MODULE 9 ──────────────────────────────────────
        {
          id: "ca_b09",
          order: 9,
          title: "Title, Escrow & Closing in California",
          week: "5-6",
          passingScore: 70,
          icon: "📜",
          objective: "Understand California deed types, title insurance, the escrow process, ALTA/CLTA policies, and recording requirements.",
          content: [
            {
              heading: "Deed Types in California",
              body: "California uses several deed types with different warranty levels:\n\n• Grant Deed — the MOST common residential deed in California. Grantor implies two warranties: (1) they haven't previously conveyed the property to anyone else, and (2) the property is free from undisclosed encumbrances the grantor created. Does NOT guarantee good title from ALL prior owners.\n\n• Warranty Deed (General Warranty Deed) — grantor warrants title against ALL prior claims, even before grantor owned the property. More protective for the buyer. Less common in California than the grant deed.\n\n• Quitclaim Deed — grantor conveys only whatever interest they have, if any. NO warranties whatsoever. Used for: removing clouds on title, gifts between family members, correcting defects, transferring between spouses.\n\n• Trustee's Deed — issued by the trustee after a foreclosure sale.\n\n• Sheriff's Deed — issued after a court-ordered sale.\n\nValid deed requirements: grantor's signature, grantor AND grantee identified, legal description, granting clause, and delivery and acceptance."
            },
            {
              heading: "Title Insurance in California",
              body: "Two types of title insurance policies in California:\n\n• CLTA (California Land Title Association) Standard Policy — covers matters of public record only. Standard for lenders. Does NOT cover matters discoverable by physical inspection or survey.\n\n• ALTA (American Land Title Association) Extended Coverage Policy — covers BOTH public record matters AND off-record risks (survey issues, encroachments, mechanic's liens that haven't yet been recorded, rights of parties in possession). Usually required by lenders; preferred by sophisticated buyers.\n\nTwo policies issued at closing:\n1. Lender's Policy (CLTA or ALTA) — protects the lender's interest up to the loan amount. Decreases as the loan balance decreases.\n2. Owner's Policy — protects the buyer's equity. Usually one-time premium at closing. Does NOT decrease; stays in force as long as the owner has an interest.\n\nIn California: seller typically pays for the owner's CLTA policy; buyer pays for the ALTA upgrade if desired."
            },
            {
              heading: "The California Escrow Process",
              body: "Unlike most states that use real estate attorneys, California uses ESCROW COMPANIES (or title companies) as neutral third parties to handle closings.\n\nThe escrow officer:\n• Receives and holds all documents and funds\n• Follows written escrow instructions from all parties\n• Prepares the settlement statement (or uses the CFPB's Closing Disclosure for loan transactions)\n• Orders title search and title insurance\n• Coordinates payoff of existing loans\n• Records the deed and distributes funds at closing\n\nEscrow opens when: the signed purchase contract is submitted to escrow with the buyer's initial deposit.\nEscrow closes when: all conditions are met, documents are signed and recorded, and funds are distributed.\n\nProration of costs at closing: property taxes, HOA dues, prepaid insurance, and rents are all prorated to the close of escrow date."
            },
            {
              heading: "Recording & Priority",
              body: "Recording a deed gives CONSTRUCTIVE NOTICE to the world — everyone is presumed to know about recorded documents.\n\nActual notice: direct knowledge of a fact.\nConstructive notice: notice presumed by law because a document was properly recorded.\n\nCalifornia Recording Priority (Race-Notice Statute):\nTo have priority, a later purchaser must:\n1. Record FIRST (race), AND\n2. Take without notice of the prior unrecorded interest (notice)\n\nA buyer who records first AND had no notice of a prior unrecorded deed wins over the earlier buyer who didn't record.\n\nPriority exceptions:\n• Property tax liens have FIRST priority regardless of recording date\n• Mechanic's liens relate back to the date work commenced (not when recorded)\n\nChain of title: the sequential history of all recorded ownership transfers. Must be unbroken. A 'cloud on title' is any claim or encumbrance that makes title uncertain."
            }
          ],
          quiz: [
            {
              id: "ca_b09q01",
              prompt: "A California seller transfers property using a Grant Deed. This deed implies which warranties?",
              choices: [
                "No warranties — the grantor conveys only what they have",
                "The grantor has not previously sold the property and has not created undisclosed encumbrances",
                "The grantor warrants against ALL prior claims going back to original title",
                "The grantor warrants only that the purchase price was fair"
              ],
              answer: 1,
              explanation: "A Grant Deed (the most common CA deed) implies two warranties: (1) the grantor hasn't previously conveyed the property to another party, and (2) the property is free from undisclosed encumbrances the grantor created. It does NOT warrant against defects created by prior owners."
            },
            {
              id: "ca_b09q02",
              prompt: "Which title insurance policy in California provides the BROADEST coverage, including off-record risks and encroachments?",
              choices: [
                "CLTA Standard Policy",
                "ALTA Extended Coverage Policy",
                "California Owner's Policy",
                "Homeowner's Title Policy (CLTA-R)"
              ],
              answer: 1,
              explanation: "The ALTA Extended Coverage Policy provides the broadest protection, covering both public record matters AND off-record risks such as unrecorded mechanic's liens, survey/encroachment issues, and rights of parties in possession. The CLTA Standard Policy covers only matters of public record."
            },
            {
              id: "ca_b09q03",
              prompt: "Buyer A has a signed but unrecorded deed to a property. Buyer B subsequently purchases the same property from the same seller, records first, and had no knowledge of Buyer A's deed. Under California's recording laws, who has priority?",
              choices: [
                "Buyer A — the first deed in time always prevails",
                "Buyer B — California is a race-notice state; B recorded first without notice",
                "Neither — both deeds are void when fraud is involved",
                "Buyer A — unrecorded deeds are still valid against all parties"
              ],
              answer: 1,
              explanation: "California is a RACE-NOTICE state. To prevail over a prior unrecorded deed, a subsequent buyer must: (1) record first, AND (2) take without notice of the prior interest. Buyer B satisfies both requirements and therefore has priority."
            }
          ]
        },

        // ── MODULE 10 ──────────────────────────────────────
        {
          id: "ca_b10",
          order: 10,
          title: "Land Use, Zoning & Environmental Disclosures",
          week: "5-6",
          passingScore: 70,
          icon: "🌍",
          objective: "Understand California zoning law, subdivision regulations, the Natural Hazard Disclosure, Mello-Roos, and environmental disclosure requirements unique to California.",
          content: [
            {
              heading: "Zoning & Land Use Controls",
              body: "Zoning: local government control of land use through ordinances dividing land into zones (residential, commercial, industrial, agricultural, mixed-use).\n\nNon-conforming use: a use that was lawful when established but no longer conforms to current zoning. Protected as a 'grandfathered' use. If the non-conforming use is discontinued or the structure is substantially destroyed, the non-conforming status is lost.\n\nVariance: official permission to deviate from zoning requirements because strict compliance would cause undue hardship. Requires public hearing and showing of hardship.\n\nConditional Use Permit (CUP): allows a use that is conditionally permitted in the zone (e.g., a daycare in a residential zone) with specific conditions imposed.\n\nGeneral Plan: California requires each city and county to adopt a General Plan — the 'constitution' of land use that all zoning must be consistent with."
            },
            {
              heading: "California Natural Hazard Disclosure (NHD)",
              body: "California requires sellers of residential 1-4 unit properties to provide a Natural Hazard Disclosure (NHD) statement before closing.\n\nThe NHD discloses whether the property is in:\n1. Special Flood Hazard Area (FEMA Flood Zone A or V)\n2. Area of Potential Flooding (dam inundation zone)\n3. High Fire Hazard Severity Zone (State Responsibility Area)\n4. Wildland Fire Area (local/state designation)\n5. Earthquake Fault Zone (Alquist-Priolo Act — within 50 feet of an active fault)\n6. Seismic Hazard Zone (liquefaction, landslide)\n\nSellers can use a licensed NHD company to prepare the report (a qualified third-party disclosure service). The agent is not required to independently verify all hazard zones if they rely on a NHD report.\n\nCAL FIRE maintains the official Fire Hazard Severity Zone maps. These are updated regularly and are more relevant than ever given California's wildfire history."
            },
            {
              heading: "Mello-Roos & Special Assessments",
              body: "Mello-Roos (Community Facilities District): a special tax district created to fund infrastructure (schools, roads, utilities) in newer developments. Property owners pay an ADDITIONAL annual tax beyond the standard property tax.\n\nDisclosure requirement: sellers must disclose Mello-Roos and special assessment districts on the Notice of Transfer and Financing Statement.\n\nBuyers can obtain a full Mello-Roos disclosure from the local CFD (Community Facilities District) — right to receive a disclosure is guaranteed by law.\n\nSpecial Assessment Districts (SADs): similar mechanism for specific improvements (street lights, sewers, landscaping). Appear as line items on the property tax bill.\n\nKey exam point: both Mello-Roos and special assessments ARE disclosed as part of the purchase and sale process and must be included in the NHD/disclosure package."
            },
            {
              heading: "California Environmental Disclosures",
              body: "California has the most comprehensive environmental disclosure requirements in the U.S.:\n\n• Lead-Based Paint: federal requirement for homes built before 1978. Buyer has 10-day inspection right.\n• Asbestos: disclosure required if known.\n• Mold: disclosure required if known (Civil Code § 1102.6).\n• Methamphetamine Contamination: disclosure required if property was used as a meth lab (must provide Phase 2 report).\n• Military Ordnance: disclosure if property is within 1 mile of known military ordnance location.\n• Industrial/Commercial Zones: disclosure if property is within 1 mile of industrial zone that may cause pollution.\n• State-designated Superfund/cleanup sites: must disclose proximity.\n\nAll disclosures are included in the Statewide Buyer and Seller Advisory (SBSA — CAR Form SBSA) which buyers and sellers are strongly advised to read."
            }
          ],
          quiz: [
            {
              id: "ca_b10q01",
              prompt: "A California seller's home is located within an Earthquake Fault Zone under the Alquist-Priolo Act. What must the seller disclose?",
              choices: [
                "Nothing — fault zone locations are only disclosed for commercial property",
                "The property is within 50 feet of an active earthquake fault zone on the Natural Hazard Disclosure",
                "Only that earthquakes have occurred in the general region",
                "The disclosure is optional — the NHD is not legally required"
              ],
              answer: 1,
              explanation: "The Alquist-Priolo Earthquake Fault Zone Act prohibits most structures for human occupancy within 50 feet of an active fault. Sellers must disclose Earthquake Fault Zone designation on the Natural Hazard Disclosure (NHD), which is MANDATORY for residential 1-4 unit sales."
            },
            {
              id: "ca_b10q02",
              prompt: "A California buyer wants to build a duplex on land zoned exclusively for single-family residential use. To get permission, they would most likely need a:",
              choices: [
                "Variance — based on hardship",
                "Non-conforming use permit",
                "Conditional Use Permit (CUP)",
                "Amendment to the General Plan"
              ],
              answer: 2,
              explanation: "A duplex in a single-family zone (if allowed at all under local ordinance) would typically require a Conditional Use Permit (CUP) — permission for a use that is conditionally allowed in a zone with specific conditions imposed. A variance is for DIMENSIONAL deviations (setbacks, height), not for changing the permitted use."
            }
          ]
        }

      ] // end broker modules
    }, // end broker track

    // ──────────────────────────────────────────────────────
    // MLO TRACK — NMLS SAFE MLO (CA DFI)
    // ──────────────────────────────────────────────────────
    mlo: {
      id: "mlo",
      label: "CA MLO License (SAFE Act)",
      icon: "🏦",
      color: "#4C9AC9",
      description: "NMLS SAFE MLO exam prep — 20-hour federal pre-license + California DFI state requirements",
      requirements: [
        "Complete 20 hours of NMLS-approved pre-license education (3hr federal law, 3hr ethics, 2hr non-traditional mortgages, 12hr electives)",
        "Pass NMLS SAFE MLO National Test with Uniform State Content (115 scored questions, 75% to pass)",
        "Authorize credit and background check through NMLS",
        "Register through NMLS MU4 form",
        "Sponsored by a DFI-licensed mortgage company",
        "California DFI requires: state application, additional background check, no felony convictions",
        "Annual CE: 8 hours per year (3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective)"
      ],
      fees: [
        { item: "NMLS application fee",        amount: "$30",  source: "NMLS" },
        { item: "SAFE MLO test fee",            amount: "$110", source: "Prometric" },
        { item: "CA DFI state license fee",     amount: "$300", source: "CA DFI" },
        { item: "20-hour pre-license education",amount: "$200–$400", note: "varies by provider" },
        { item: "Credit report / background",   amount: "$30",  source: "NMLS" }
      ],
      examStructure: {
        national: { items: 115, time: "190 minutes (3hr 10min)", passing: 75,
                    note: "120 total items; 115 scored + 5 unscored; includes Uniform State Content" },
        state:    { items: 0, time: "included in national test",
                    note: "Uniform State Content (UST) is embedded in the national exam — no separate state exam" }
      },
      modules: [
        {
          id: "ca_m01",
          order: 1,
          title: "SAFE Act & NMLS Licensing Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Navigate the NMLS MU4 process, SAFE Act requirements, California DFI-specific rules, and annual renewal obligations.",
          content: [
            {
              heading: "The SAFE Act Framework",
              body: "The SAFE Mortgage Licensing Act of 2008 created a national framework for MLO licensing through the Nationwide Multistate Licensing System (NMLS).\n\nKey SAFE Act rules:\n• All MLOs who take applications, negotiate terms, or offer mortgage loans secured by residential real estate MUST be licensed\n• Federal bank employees: registered (not licensed) through NMLS — different process\n• State-licensed MLOs: must complete 20 hours of pre-license education, pass the SAFE exam, pass credit/background check, and apply through NMLS\n\nCalifornia: the Department of Financial Innovation and Technology (DFPI — formerly DBO and DFI) oversees state-chartered MLOs under the California Financing Law (CFL) and the CRMLA (California Residential Mortgage Lending Act)."
            },
            {
              heading: "NMLS MU4 Application Process",
              body: "Steps to obtain your California MLO license:\n\n1. Create NMLS account at nmls.stateregulatoryregistry.org\n2. Complete MU4 (Individual Form) — your personal application\n3. Submit authorization for credit report and criminal background check\n4. Complete 20 hours of NMLS-approved pre-license education\n5. Pass the SAFE MLO National Test with Uniform State Content (75% passing score)\n6. Apply for California state license through NMLS\n7. Obtain sponsorship from a California DFI-licensed company\n8. Pay all fees (NMLS + CA DFI state fees)\n\nTest waiting periods:\n• First fail: can retest immediately\n• Second fail: 30-day wait\n• Third fail: 30-day wait\n• After three failures: 180-day wait before retesting"
            },
            {
              heading: "California DFI-Specific Requirements",
              body: "California has additional requirements beyond the NMLS baseline:\n\n• Surety bond: California requires MLOs to be covered by their employer's surety bond\n• No felony convictions within 7 years for financial crimes (lifetime bar for fraud, dishonesty, breach of fiduciary duty)\n• Must maintain active NMLS registration and keep all information current\n• California Annual License Fee: $300 (paid through NMLS)\n\nAnnual renewal:\n• Complete 8 hours of NMLS-approved CE by December 31 each year\n• CE breakdown: 3hr federal law, 2hr ethics, 2hr non-traditional mortgages, 1hr elective\n• Failure to complete CE by December 31 = license expires\n• 'Continuing education safe harbor': cannot take the same CE course in consecutive years"
            }
          ],
          quiz: [
            {
              id: "ca_m01q01",
              prompt: "How many hours of NMLS-approved pre-license education are required to obtain an MLO license under the SAFE Act?",
              choices: ["12 hours", "20 hours", "22 hours", "30 hours"],
              answer: 1,
              explanation: "The SAFE Act requires 20 hours of NMLS-approved pre-license education: 3 hours of federal law, 3 hours of ethics, 2 hours of non-traditional mortgage products, and 12 hours of electives. Some states (not California) require additional state-specific hours."
            },
            {
              id: "ca_m01q02",
              prompt: "What is the minimum passing score on the NMLS SAFE MLO National Test?",
              choices: ["70%", "75%", "80%", "85%"],
              answer: 1,
              explanation: "The SAFE MLO National Test (with Uniform State Content) requires a 75% passing score. The exam has 120 total questions — 115 scored and 5 unscored pretest items — and must be completed in 190 minutes."
            },
            {
              id: "ca_m01q03",
              prompt: "An MLO fails the SAFE exam three times. How long must they wait before taking it a fourth time?",
              choices: ["30 days", "60 days", "90 days", "180 days"],
              answer: 3,
              explanation: "After failing the SAFE exam three times, the waiting period before a fourth attempt is 180 days. The first two failures allow retesting after 30 days each. The third failure triggers the 180-day waiting period."
            }
          ]
        },

        {
          id: "ca_m02",
          order: 2,
          title: "Federal Mortgage Law Core",
          week: "3-4",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master RESPA, TILA, ECOA, HMDA, FCRA, and SAFE Act provisions tested on the NMLS national exam.",
          content: [
            {
              heading: "RESPA — Real Estate Settlement Procedures Act",
              body: "RESPA (Regulation X) governs residential mortgage transactions involving federally related loans.\n\nKey RESPA requirements:\n• Loan Estimate: must be provided within 3 business days of application receipt\n• Closing Disclosure: must be provided at least 3 business days before closing\n• Section 8 — Anti-kickback: PROHIBITS giving or receiving any fee, kickback, or thing of value for referrals of settlement service business. No fee-splitting with unaffiliated parties.\n• Affiliated Business Arrangements (AfBAs): allowed only with proper written disclosure; cannot require the consumer to use the affiliate\n• Escrow account rules: lenders can collect escrow for taxes and insurance; limits on cushion amounts\n\nSAFE HARBOR: paying for actual services rendered is NOT a Section 8 violation."
            },
            {
              heading: "TILA — Truth in Lending Act",
              body: "TILA (Regulation Z) requires clear disclosure of loan costs to borrowers.\n\nAnnual Percentage Rate (APR): the true cost of credit expressed as a yearly rate. Includes interest, points, and certain fees. ALWAYS higher than the note rate.\n\nRight of Rescission: for non-purchase refinances of primary residence — borrower has 3 business days to cancel after signing loan documents. Does NOT apply to purchase loans.\n\nHigh-Cost Mortgages (HOEPA): additional disclosures and restrictions for loans exceeding certain rate/fee thresholds. Consumer protections against predatory terms.\n\nATR/QM Rule (Ability to Repay): lenders must make a reasonable good faith determination that the borrower can repay. Qualified Mortgages (QM) get a safe harbor — must meet specific DTI and fee limits."
            },
            {
              heading: "ECOA & HMDA",
              body: "ECOA — Equal Credit Opportunity Act (Regulation B):\n• Prohibits credit discrimination based on: race, color, religion, national origin, sex, marital status, age, receipt of public assistance, exercise of consumer rights\n• Lender must provide adverse action notice within 30 days of denial\n• Note: ECOA protects CREDIT APPLICANTS; Fair Housing Act protects HOUSING seekers\n\nHMDA — Home Mortgage Disclosure Act (Regulation C):\n• Requires lenders to collect and report data on mortgage applications and originations\n• Data collected: loan type, purpose, amount, applicant race/ethnicity/sex, property location, action taken\n• Purpose: detect discriminatory lending patterns ('redlining') and ensure CRA (Community Reinvestment Act) compliance\n• Administered by CFPB"
            },
            {
              heading: "FCRA & GLBA",
              body: "FCRA — Fair Credit Reporting Act:\n• Governs use of consumer credit information\n• Consumers have the right to: one free credit report per year, dispute inaccurate information, know who accessed their report\n• Lenders must give adverse action notice citing the credit reason\n• Credit report retention: MLOs must destroy credit reports securely\n\nGLBA — Gramm-Leach-Bliley Act:\n• Requires financial institutions to send annual privacy notices to customers\n• Must explain what information is collected and how it is shared\n• Consumers have the right to OPT OUT of sharing with non-affiliated third parties\n• Safeguards Rule: institutions must have a written information security program\n\nSAFE Act privacy: MLO licensee information is public in the NMLS Consumer Access portal — name, license number, employer, and disciplinary history."
            }
          ],
          quiz: [
            {
              id: "ca_m02q01",
              prompt: "Under RESPA, a title company pays for a real estate agent's monthly office rent in exchange for referrals. This arrangement is:",
              choices: [
                "Legal if disclosed in an Affiliated Business Arrangement",
                "Legal if consumers can choose a different title company",
                "A Section 8 violation — paying for referrals is prohibited",
                "Legal as long as the payments are for fair market value"
              ],
              answer: 2,
              explanation: "RESPA Section 8 prohibits giving or accepting ANY thing of value for referrals of settlement service business. Paying office rent in exchange for referrals is a classic kickback arrangement. It cannot be cured by allowing consumers to choose a different provider."
            },
            {
              id: "ca_m02q02",
              prompt: "A borrower refinances their primary residence. Under TILA, how many business days do they have to rescind the transaction?",
              choices: [
                "No right of rescission on refinances",
                "1 business day",
                "3 business days",
                "5 business days"
              ],
              answer: 2,
              explanation: "TILA provides a 3 BUSINESS DAY right of rescission for non-purchase refinances of a primary residence. The clock starts when the borrower receives all required disclosures and the notice of right to rescind. Purchase transactions are NOT subject to the rescission right."
            },
            {
              id: "ca_m02q03",
              prompt: "The purpose of HMDA data collection is primarily to:",
              choices: [
                "Verify borrowers' income before underwriting",
                "Detect discriminatory lending patterns and ensure communities are served",
                "Set maximum interest rates lenders can charge",
                "Enforce the Community Reinvestment Act penalties"
              ],
              answer: 1,
              explanation: "HMDA (Home Mortgage Disclosure Act) requires lenders to collect and report data on mortgage applications so regulators can detect discriminatory lending patterns (redlining) and verify that lenders are serving all segments of their communities."
            },
            {
              id: "ca_m02q04",
              prompt: "Which federal law requires mortgage lenders to send annual privacy notices to their customers?",
              choices: ["FCRA", "RESPA", "ECOA", "GLBA"],
              answer: 3,
              explanation: "The Gramm-Leach-Bliley Act (GLBA) requires financial institutions, including mortgage lenders, to send annual privacy notices explaining what personal financial information they collect and how it is shared. Consumers have the right to opt out of sharing with non-affiliated third parties."
            }
          ]
        },

        {
          id: "ca_m03",
          order: 3,
          title: "Ethics, Fraud & Fair Lending",
          week: "5-6",
          passingScore: 75,
          icon: "🛡️",
          objective: "Identify mortgage fraud schemes, UDAAP violations, fair lending obligations, and the MLO's ethical duties under the SAFE Act.",
          content: [
            {
              heading: "Mortgage Fraud Types",
              body: "Mortgage fraud is any material misrepresentation, misstatement, or omission relied upon by a lender or insurer. Two categories:\n\nFraud for Property (Fraud for Housing):\n• Occupancy fraud — stating owner-occupied when planning to rent/flip\n• Income fraud — inflating income to qualify\n• Asset fraud — borrowing funds for down payment without disclosure\n• Identity fraud — using another person's identity to obtain a loan\n\nFraud for Profit:\n• Straw buyer — using another person as the borrower on a loan\n• Equity skimming — buying distressed property, collecting rents, then letting it foreclose\n• Inflated appraisals — coordinating an inflated appraisal to extract equity\n• Kickbacks — undisclosed payments to any transaction party\n• Builder bailouts — seller pays buyer's down payment through inflated pricing\n\nMLOs are mandatory reporters — must report suspected fraud to their employer and may have regulatory obligations to report to NMLS."
            },
            {
              heading: "UDAAP — Unfair, Deceptive, Abusive Acts or Practices",
              body: "The Dodd-Frank Act gave the CFPB authority to prohibit UDAAP in consumer financial products.\n\nUnfair: causes substantial injury to consumers that they cannot reasonably avoid and is not outweighed by benefits.\n\nDeceptive: misleads or is likely to mislead a consumer; material; affects consumer's behavior.\n\nAbusive: materially interferes with consumers' ability to understand a product, OR takes unreasonable advantage of consumers' lack of understanding.\n\nExamples of UDAAP violations:\n• Burying fees in fine print when they materially affect cost\n• Falsely claiming a loan product has no prepayment penalty\n• Targeting unsophisticated consumers with complex products\n• Misrepresenting APR, terms, or required payments\n\nCFPB can impose civil money penalties and consumer restitution."
            },
            {
              heading: "Fair Lending: ECOA & Fair Housing in Mortgage",
              body: "Two main fair lending laws:\n\n1. ECOA (Equal Credit Opportunity Act): prohibits discrimination in ANY credit transaction based on race, color, religion, national origin, sex, marital status, age, receipt of public assistance.\n\n2. Fair Housing Act: prohibits discrimination in residential real estate transactions (including mortgage lending) based on race, color, religion, national origin, sex, familial status, disability.\n\nThree theories of lending discrimination:\n• Disparate Treatment: intentional discrimination — treating an applicant differently because of protected class. Direct evidence OR circumstantial.\n• Disparate Impact: neutral policy that has a disproportionate adverse impact on a protected class (even with no intent to discriminate).\n• Redlining: refusal to lend in certain geographic areas based on the racial composition of the area.\n\nStatistical triggers: if a lender denies applications at significantly higher rates for minority applicants than similarly qualified majority applicants, this triggers a fair lending examination."
            }
          ],
          quiz: [
            {
              id: "ca_m03q01",
              prompt: "A borrower states on the loan application that they intend to occupy the property as their primary residence, but they actually plan to rent it out immediately. This is BEST described as:",
              choices: [
                "A minor administrative error",
                "Occupancy fraud — a form of mortgage fraud",
                "Legal as long as the borrower eventually moves in",
                "Only illegal if the lender discovers it within 30 days"
              ],
              answer: 1,
              explanation: "Stating on a loan application that you intend to occupy a property as a primary residence when you actually plan to rent it out is occupancy fraud — a material misrepresentation that could constitute mortgage fraud under federal law."
            },
            {
              id: "ca_m03q02",
              prompt: "A lender's policy requires a minimum 680 credit score for all loans. The policy disproportionately denies applicants from a minority neighborhood. This may violate fair lending under the theory of:",
              choices: [
                "Disparate Treatment — intentional discrimination",
                "Disparate Impact — neutral policy with discriminatory effect",
                "Redlining — geographic exclusion",
                "Steering — directing borrowers to unfavorable products"
              ],
              answer: 1,
              explanation: "A facially neutral policy (credit score minimum) that has a disproportionate adverse impact on a protected class may violate fair lending under the DISPARATE IMPACT theory — even without discriminatory intent. The lender must justify the policy with a legitimate business necessity."
            }
          ]
        },

        {
          id: "ca_m04",
          order: 4,
          title: "Mortgage Products & Underwriting",
          week: "5-6",
          passingScore: 75,
          icon: "📊",
          objective: "Distinguish loan types, explain QM/ATR rules, ARM mechanics, reverse mortgages, and non-traditional mortgage products.",
          content: [
            {
              heading: "Qualified Mortgages (QM) & ATR Rule",
              body: "Ability-to-Repay (ATR) Rule (Dodd-Frank/Regulation Z):\nLenders MUST make a reasonable good faith determination that the borrower has the ability to repay the loan.\n\nFactors considered: income, assets, employment, credit history, DTI, monthly payment.\n\nQualified Mortgage (QM) Safe Harbor:\n• Points and fees: ≤3% of loan amount (for loans ≥$100K)\n• No negative amortization, no interest-only period, no balloon payments (with narrow exceptions)\n• Maximum loan term: 30 years\n• DTI generally ≤43% for non-GSE eligible loans (Fannie/Freddie eligible loans get a 'patch')\n\nIf a loan is a QM: lender gets a safe harbor presumption that ATR was satisfied. Non-QM loans can still be made — just no safe harbor."
            },
            {
              heading: "ARM Mechanics & Disclosure",
              body: "Adjustable-Rate Mortgage (ARM) — interest rate changes periodically based on an index + margin.\n\nKey ARM terms:\n• Index: benchmark rate (SOFR replaced LIBOR; also Prime Rate, Treasury index)\n• Margin: fixed spread added to the index (e.g., 2.75%)\n• Note Rate = Index + Margin\n• Caps: limit how much the rate can change\n  - Periodic cap: max change per adjustment period (e.g., 2%)\n  - Lifetime cap: max total change over the life of the loan (e.g., 5%)\n  - Payment cap: limits payment increase (can cause negative amortization)\n\nARM disclosure requirements (TILA):\n• Must provide ARM program disclosure at application\n• Must provide current rate information, index source, margin, caps\n• One-time right to convert to fixed rate (if ARM has a conversion option)\n\nCommon ARM types: 5/1 ARM (fixed 5 years, adjusts annually); 7/1 ARM; 10/1 ARM."
            },
            {
              heading: "Reverse Mortgages & Non-Traditional Products",
              body: "HECM (Home Equity Conversion Mortgage) — the most common reverse mortgage, FHA-insured:\n• Available to homeowners 62+\n• No monthly mortgage payments — loan balance GROWS over time\n• Repaid when borrower sells, moves, or dies\n• Counseling required before applying (HUD-approved counselor)\n• Non-recourse loan — borrower/estate never owes more than the home is worth\n\nHELOC (Home Equity Line of Credit):\n• Variable rate line of credit secured by home equity\n• Draw period (typically 10 years): borrow and repay\n• Repayment period: principal + interest payments\n\nInterest-Only Mortgages:\n• Borrower pays only interest for an initial period\n• Principal balance does NOT decrease during interest-only period\n• Payment increases significantly when principal payments begin\n• NOT a QM under standard rules (except for some GSE products)"
            }
          ],
          quiz: [
            {
              id: "ca_m04q01",
              prompt: "Under the CFPB's Ability-to-Repay rule, what is the maximum points-and-fees threshold for a loan to qualify as a Qualified Mortgage (on loans ≥$100,000)?",
              choices: ["2% of the loan amount", "3% of the loan amount", "5% of the loan amount", "There is no fee limit for QM loans"],
              answer: 1,
              explanation: "For a loan ≥$100,000 to qualify as a Qualified Mortgage (QM), points and fees cannot exceed 3% of the total loan amount. Exceeding this threshold disqualifies the loan from QM status and removes the ATR safe harbor protection for the lender."
            },
            {
              id: "ca_m04q02",
              prompt: "A 5/1 ARM has an initial rate of 4%, a margin of 2.5%, a periodic cap of 2%, and a lifetime cap of 6%. If the index is at 3.5% at the first adjustment, what is the new rate?",
              choices: ["6% (3.5% index + 2.5% margin)", "6.5% (index + margin, at cap)", "5% (initial + 2% periodic cap — it's lower than index+margin)", "4% (rate cannot change in first year)"],
              answer: 0,
              explanation: "New rate = Index + Margin = 3.5% + 2.5% = 6.0%. The periodic cap limits how much the rate can CHANGE — here changing from 4% to 6% is exactly a 2% change, which equals the periodic cap. So 6% is the maximum and also the calculated rate. The periodic cap is not exceeded."
            }
          ]
        }
        ,

        // ── MODULE 5 ──────────────────────────────────────
        {
          id: "ca_m05",
          order: 5,
          title: "California MLO State Law (DFPI Overlay)",
          week: "7-8",
          passingScore: 75,
          icon: "🏛️",
          objective: "Master California-specific MLO rules under the CRMLA and CFL, DFPI enforcement, required disclosures, and CalHFA first-time buyer programs.",
          content: [
            {
              heading: "California Licensing Laws: CRMLA & CFL",
              body: "California regulates mortgage lending under two primary state laws:\n\n1. California Residential Mortgage Lending Act (CRMLA) — covers residential mortgage lenders and servicers who make or service residential mortgage loans. Administered by the DFPI.\n\n2. California Financing Law (CFL) — covers a broader range of lenders (consumer and commercial). MLOs employed by CFL licensees must hold an MLO endorsement through NMLS.\n\nKey distinctions:\n• CRMLA licensees: primarily mortgage companies making residential loans\n• CFL licensees: broader category including hard money lenders, consumer finance companies\n• Both require NMLS registration and state licensing\n\nDFPI (Department of Financial Protection and Innovation): replaced the DBO in 2020. Regulates banks, credit unions, mortgage lenders, and other financial services companies in California. Handles MLO license applications, renewals, and disciplinary actions."
            },
            {
              heading: "California-Required Mortgage Disclosures",
              body: "California requires additional disclosures beyond federal TILA/RESPA requirements:\n\n• Mortgage Loan Disclosure Statement (MLDS — RE Form 882): required for loans arranged by a real estate broker (not a bank). Must be given to the borrower BEFORE the loan is made. Discloses: broker compensation, loan terms, balloon payment (if any), costs.\n\n• Multi-Lender Disclosure: required when a loan involves multiple lenders.\n\n• California ARM Disclosure: additional state disclosure for adjustable-rate loans, supplementing the federal TILA ARM disclosure.\n\n• Prepayment Penalty Disclosure: California restricts prepayment penalties on residential loans. Any prepayment penalty must be clearly disclosed. For owner-occupied 1-4 unit properties: prepayment penalty period cannot exceed 36 months.\n\n• Points and Fees Disclosure: California imposes its own points-and-fees limits for certain loans, sometimes stricter than federal QM rules."
            },
            {
              heading: "CalHFA & California First-Time Buyer Programs",
              body: "California Housing Finance Agency (CalHFA) operates several first-time buyer programs:\n\n• MyHome Assistance Program: deferred-payment junior loan up to 3.5% (FHA) or 3% (conventional) of the purchase price for down payment or closing costs. No payments until the first loan is paid off, refinanced, or the property is sold.\n\n• CalHFA FHA Loan: 30-year fixed-rate FHA first mortgage at CalHFA rates. Must meet FHA guidelines + CalHFA income limits.\n\n• CalHFA Conventional Loan: 30-year fixed conventional first mortgage. PMI can be reduced with CalHFA programs.\n\n• Dream For All: shared appreciation program — CalHFA provides up to 20% of the purchase price; upon sale, the buyer repays the loan PLUS 20% of the appreciation. Limited funding each round.\n\nIncome limits and purchase price limits vary by county. For high-cost counties (San Francisco, Santa Clara, Los Angeles), limits are higher. MLOs working with first-time buyers in California should be fluent in these programs."
            },
            {
              heading: "DFPI Enforcement & MLO Discipline",
              body: "The DFPI has broad enforcement authority over California MLOs:\n\nGrounds for discipline:\n• Material misrepresentation in the license application\n• Failure to maintain adequate books and records\n• Fraud, dishonesty, or misrepresentation in a mortgage transaction\n• Violation of any provision of the CRMLA, CFL, or SAFE Act\n• Failure to pay required fees or maintain required insurance/bond\n\nDisciplinary actions available:\n• License suspension or revocation\n• Cease and desist orders\n• Civil money penalties (up to $10,000 per violation under CRMLA)\n• Criminal referral (for willful violations)\n\nMLO record-keeping requirement: all loan files must be retained for a minimum of 3 YEARS after the final disposition of the application.\n\nAnnual report: CRMLA licensees must file an annual report with the DFPI by March 15 covering all mortgage activity for the prior year."
            }
          ],
          quiz: [
            {
              id: "ca_m05q01",
              prompt: "A California real estate broker arranges a residential mortgage loan for a client. Which state disclosure MUST be given to the borrower before the loan is made?",
              choices: [
                "RESPA Loan Estimate only",
                "Mortgage Loan Disclosure Statement (MLDS — RE Form 882)",
                "Closing Disclosure only",
                "California ARM Disclosure (required for all loan types)"
              ],
              answer: 1,
              explanation: "When a real estate broker (not a bank) arranges a residential mortgage loan in California, they must provide the Mortgage Loan Disclosure Statement (MLDS, RE Form 882) to the borrower BEFORE the loan is made. This discloses broker compensation, loan terms, costs, and any balloon payment."
            },
            {
              id: "ca_m05q02",
              prompt: "Under California law, the maximum prepayment penalty period allowed on an owner-occupied 1-4 unit residential loan is:",
              choices: ["12 months", "24 months", "36 months", "60 months"],
              answer: 2,
              explanation: "California restricts prepayment penalties on owner-occupied residential 1-4 unit properties to a maximum of 36 months (3 years). The existence and terms of any prepayment penalty must be clearly disclosed to the borrower."
            },
            {
              id: "ca_m05q03",
              prompt: "The CalHFA 'Dream For All' program helps buyers with a 20% down payment contribution. When the property is eventually sold, the buyer must repay:",
              choices: [
                "Only the original 20% loan amount — no interest",
                "The 20% loan plus 20% of all appreciation since purchase",
                "The 20% loan plus full market interest at the current rate",
                "Nothing — Dream For All is a grant, not a loan"
              ],
              answer: 1,
              explanation: "CalHFA's Dream For All shared appreciation program provides up to 20% of the purchase price. Upon sale or refinance, the buyer repays the original 20% amount PLUS 20% of all appreciation since the purchase date — hence 'shared appreciation.'"
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
      label: "Practical Skills",
      icon: "💼",
      color: "#4CC97A",
      description: "Real-world skills: listings, negotiations, buyer transactions, and RESPA-compliant lead generation in California",
      requirements: [],
      fees: [],
      modules: [
        {
          id: "ca_p01",
          order: 1,
          title: "Working with Buyers in California",
          week: "9-10",
          passingScore: 70,
          icon: "🔑",
          objective: "Guide California buyers from pre-approval through close: agency disclosure, buyer representation agreements, offer strategy, and contingency management.",
          content: [
            {
              heading: "Buyer Representation Agreements",
              body: "Following the 2024 NAR settlement, California agents are required to have a written buyer representation agreement BEFORE touring homes with a buyer.\n\nCAR Form BRBC (Buyer Representation and Broker Compensation Agreement): outlines services, compensation, and duration of the representation. The buyer acknowledges they understand the agent's compensation.\n\nKey terms to negotiate with buyer clients:\n• Retainer vs. full compensation structure\n• Compensation rate and source\n• Exclusivity and duration\n• Property type and geographic area\n• Cancellation rights\n\nExplaining dual agency: before writing an offer on your own listing, you must obtain WRITTEN consent from the buyer for dual agency. Many buyers are unfamiliar with this — explain it clearly before any conflict arises."
            },
            {
              heading: "The California Offer Process",
              body: "Making an offer in California:\n\n1. Buyer completes CAR Form RPA (Residential Purchase Agreement)\n2. Submit with proof of funds (cash) or pre-approval letter (loan)\n3. Initial deposit (typically 1-3% of purchase price) accompanies offer or due within 3 days of acceptance\n4. Offer presented to seller by listing agent\n5. Seller: accepts, counters, or rejects\n6. Counter offers: use CAR Form COUNTER (Sequential Counter Offer form)\n7. Mutual acceptance occurs when all parties have signed and initialed all changes\n\nMultiple offer situations:\n• Seller can accept one offer, counter multiple, or issue a multiple counter offer (MCO — CAR Form MCO) to selected buyers\n• Request for Best and Final: seller asks all buyers to submit their highest/best offer by a deadline\n• Escalation clauses: allowed in California; the RPA can be adapted with an escalation addendum"
            },
            {
              heading: "Managing Contingencies Through Close",
              body: "After mutual acceptance, the transaction enters the contingency period. As the buyer's agent:\n\nDays 1-3: Coordinate earnest money deposit to escrow.\nDays 1-17: Schedule home inspection immediately. Review inspection reports with buyer. Decide: accept as-is, request repairs/credits via RRRR (Request for Repairs), or cancel.\nDays 1-17: Title review — buyer reviews preliminary title report (prelim) for any title issues, easements, or encumbrances.\nDays 1-21: Confirm loan status with lender. Ensure appraisal is ordered promptly.\n\nContingency removal:\n• Active removal required — buyer signs CAR Form CR\n• Remove contingencies one at a time as each is satisfied\n• DO NOT remove contingencies before the condition is truly satisfied\n\nClose of Escrow:\n• Final walkthrough within 5 days before COE\n• Sign loan documents (if applicable) 3+ days before COE (for Closing Disclosure timing)\n• Escrow records deed; funds distributed; keys delivered"
            }
          ],
          quiz: [
            {
              id: "ca_p01q01",
              prompt: "Under new California practice following the 2024 NAR settlement, when must a buyer's agent have a signed representation agreement?",
              choices: [
                "Only before writing an offer",
                "Before touring any homes with the buyer",
                "At mutual acceptance only",
                "Only if the agent wants to be compensated"
              ],
              answer: 1,
              explanation: "Following the 2024 NAR settlement, California agents must have a signed written buyer representation agreement BEFORE touring homes with a buyer. This applies regardless of whether compensation is being offered by the seller or listing broker."
            }
          ]
        },

        {
          id: "ca_p02",
          order: 2,
          title: "Listing & Selling in California",
          week: "9-10",
          passingScore: 70,
          icon: "🏡",
          objective: "Execute a California listing from consultation through close: CMA, listing agreement, disclosures, marketing, and offer management.",
          content: [
            {
              heading: "The Listing Consultation",
              body: "Before the listing appointment:\n• Pull recently sold comps (last 3-6 months, similar size/location/condition)\n• Research active competition and absorption rate\n• Calculate net proceeds at various price points\n• Prepare CMA with clear pricing recommendation\n• Review any Prop 13 tax implications for the seller\n\nAt the appointment:\n• Provide the Agency Disclosure form (AD) FIRST — before any substantive discussion\n• Review the Listing Agreement (CAR Form LA or LASC — Listing Agreement Seller Reservation of Right to Cancel)\n• Explain ALL disclosures required: TDS, NHD, AVID, SPQ, SBSA\n• Set realistic timeline and pricing expectations\n• Explain your marketing plan\n\nKey: the listing agreement must be IN WRITING. Oral listing agreements are not enforceable in California."
            },
            {
              heading: "California Seller Disclosures",
              body: "A California seller of residential 1-4 units must provide:\n\n1. Transfer Disclosure Statement (TDS — CAR Form TDS) — mandatory. Both the seller AND the listing agent complete it.\n2. Seller Property Questionnaire (SPQ — CAR Form SPQ) — detailed follow-up questions that expand on the TDS.\n3. Agent Visual Inspection Disclosure (AVID — CAR Form AVID) — listing agent's own visual inspection.\n4. Natural Hazard Disclosure (NHD) — typically ordered from a third-party NHD company.\n5. Preliminary Title Report — ordered from title company after listing.\n6. HOA Disclosures (if applicable): CC&Rs, bylaws, budget, meeting minutes, pending litigation.\n7. Lead-Based Paint Disclosure (pre-1978 homes).\n8. Statewide Buyer and Seller Advisory (SBSA) — strongly recommended.\n\nAs the listing agent: review ALL disclosures for completeness and accuracy BEFORE presenting to the buyer. Your AVID must reflect what YOU observed during your own visual inspection."
            }
          ],
          quiz: [
            {
              id: "ca_p02q01",
              prompt: "A California seller refuses to complete the Transfer Disclosure Statement, claiming the property is being sold 'as-is.' The listing agent should:",
              choices: [
                "Accept the seller's instructions — as-is sales are exempt from the TDS",
                "Explain that the TDS is MANDATORY and as-is clauses do not exempt the seller from disclosure",
                "Complete the TDS for the seller using their own observations",
                "Note in the MLS that TDS will not be provided"
              ],
              answer: 1,
              explanation: "The TDS is MANDATORY for residential 1-4 unit sales in California regardless of whether the sale is 'as-is.' An as-is clause limits the seller's obligation to repair — it does NOT eliminate the disclosure obligation. The listing agent must explain this to the seller."
            }
          ]
        }
        ,

        // ── PRACTICAL MODULE 3 ────────────────────────────
        {
          id: "ca_p03",
          order: 3,
          title: "California Investment Property Analysis",
          week: "9-10",
          passingScore: 70,
          icon: "📈",
          objective: "Analyze California income properties using cap rate, GRM, cash-on-cash return, and the 1031 exchange — with Prop 13 implications for investors.",
          content: [
            {
              heading: "Investment Property Metrics",
              body: "Key metrics for California investment property analysis:\n\nCap Rate = NOI ÷ Value\n• NOI = Gross Rents - Vacancy (5-8%) - Operating Expenses (NOT including debt service)\n• A 5-6% cap rate is typical for coastal California multifamily (SF, LA, San Diego)\n• Higher cap rates in inland markets (Fresno, Bakersfield, Riverside) = higher cash flow, more risk\n\nGross Rent Multiplier (GRM) = Purchase Price ÷ Annual Gross Rents\n• Quick and dirty valuation tool. Lower GRM = better for buyer.\n• GRMs of 15-20+ are common in high-demand CA coastal markets.\n\nCash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested\n• Total cash invested = down payment + closing costs + immediate repairs\n• Tells you what your actual cash yield is on your out-of-pocket investment\n• Does NOT account for appreciation or tax benefits\n\n1% Rule: monthly rent should be ≥1% of purchase price. RARELY achievable in coastal CA — use this as context, not a hard requirement in California markets."
            },
            {
              heading: "Proposition 13 & Investment Strategy",
              body: "Prop 13 creates a POWERFUL incentive to hold California investment property long-term:\n\n• Low base assessment means long-term owners pay tiny property taxes vs. current market\n• Selling triggers full reassessment for the buyer — dramatically increasing their carrying costs\n• This is why many CA investors hold for decades and refinance rather than sell\n\nProp 19 impact on inherited investment property:\n• As of February 2021, Prop 19 ELIMINATED the parent-child transfer exclusion for non-primary-residence property\n• Inherited investment/rental property IS NOW reassessed to market value upon transfer\n• Exception: the child must live in the inherited home as their primary residence within 1 year to keep the parent's base year value\n\nFor investors: factor the full Prop 13 reassessment into your buy analysis. The new buyer pays taxes on the purchase price — not the seller's old assessed value. This significantly increases holding costs vs. what the seller paid."
            },
            {
              heading: "1031 Exchange in California",
              body: "IRC Section 1031 allows investors to defer capital gains taxes by exchanging one investment property for another 'like-kind' property.\n\nKey 1031 rules:\n• Both properties must be held for investment or productive use in trade/business\n• Must identify replacement property within 45 DAYS of closing on relinquished property\n• Must close on replacement property within 180 DAYS of closing on relinquished property\n• Use a Qualified Intermediary (QI) — you CANNOT touch the proceeds\n• Must be 'like-kind' — any real property for any real property (apartment for land is fine)\n\nCalifornia Clawback Rule:\n• California has a 'clawback' provision — if you exchange California property for out-of-state property and eventually sell the out-of-state property, California may tax the gain that was originally deferred\n• File FTB Form 3840 annually until the replacement property is sold in a taxable transaction\n\nFor the CA exam: 45 days to identify, 180 days to close, Qualified Intermediary required, no constructive receipt of funds."
            },
            {
              heading: "AB 1482 & California Rent Control Impact on Investment",
              body: "California AB 1482 (Tenant Protection Act of 2019) affects investment property in qualifying units:\n\nCovered properties (generally):\n• Multi-family buildings built before January 1, 2005\n• NOT: single-family homes (with disclosure), condos, properties with affordable housing covenants\n\nRent increase cap: no more than 5% + local CPI (up to a combined maximum of 10%) per year.\n\nJust cause for eviction required after 12 months of tenancy.\n\nInvestor implications:\n• Cannot raise rents above the cap in covered units\n• Evicting long-term tenants to renovate/reposition requires just cause (or relocation assistance for no-fault evictions)\n• 'Substantial remodel' exception: can evict for gut-level renovations with proper notice and relocation assistance\n• New construction (post-2005) is EXEMPT — a major reason California developers target this\n\nLocal ordinances (LA, SF, Oakland, San Jose, Santa Monica, Berkeley) may be even stricter — ALWAYS check the local ordinance for the specific city."
            }
          ],
          quiz: [
            {
              id: "ca_p03q01",
              prompt: "A California investor is doing a 1031 exchange. They close on the sale of their relinquished property on March 1. By what date must they identify the replacement property?",
              choices: ["April 1 (30 days)", "April 15 (45 days)", "June 1 (90 days)", "August 28 (180 days)"],
              answer: 1,
              explanation: "Under IRC Section 1031, the investor must identify the replacement property within 45 DAYS of closing the relinquished property. March 1 + 45 days = April 15. They must then close on the replacement property within 180 days of March 1 (= August 28)."
            },
            {
              id: "ca_p03q02",
              prompt: "Under California AB 1482, the maximum annual rent increase for a covered unit is:",
              choices: [
                "3% per year flat",
                "5% + local CPI, up to a maximum of 10%",
                "10% per year under any circumstances",
                "Any amount, as long as 60 days' notice is given"
              ],
              answer: 1,
              explanation: "AB 1482 (Tenant Protection Act) caps annual rent increases at 5% PLUS local CPI, with a combined maximum of 10%. If local CPI is 3%, the max increase is 8% (5+3). If CPI is 6%, the max is still capped at 10%. This applies to qualifying units — not all California rentals."
            },
            {
              id: "ca_p03q03",
              prompt: "An investor purchases a 4-unit apartment building for $1,200,000. Annual gross rents are $80,000. What is the GRM?",
              choices: ["10", "15", "20", "24"],
              answer: 1,
              explanation: "GRM = Purchase Price ÷ Annual Gross Rents = $1,200,000 ÷ $80,000 = 15. A GRM of 15 means the property costs 15 times its annual gross rent — typical for mid-tier California markets."
            }
          ]
        },

        // ── PRACTICAL MODULE 4 ────────────────────────────
        {
          id: "ca_p04",
          order: 4,
          title: "RESPA Compliance & Lead Generation in California",
          week: "11-12",
          passingScore: 70,
          icon: "🎯",
          objective: "Build compliant lead generation systems in the California market without creating illegal RESPA kickback arrangements. Master AfBA rules and digital marketing compliance.",
          content: [
            {
              heading: "RESPA Section 8 — The Hard Line",
              body: "RESPA Section 8 prohibits giving or accepting any fee, kickback, or thing of value for referrals of settlement service business involving federally related mortgage loans.\n\nILLEGAL under RESPA Section 8:\n• Paying a real estate agent a flat fee per closed loan for sending borrowers\n• Receiving free advertising in exchange for title referrals\n• Shell company arrangements to collect referral fees\n• Gifting anything of value (meals, entertainment, trips) in exchange for referrals\n• Marketing services agreements (MSAs) that are not for genuine documented services\n\nLEGAL under RESPA:\n• Paying for genuine services actually rendered (processing, underwriting)\n• Affiliated Business Arrangements (AfBAs) with proper disclosure, where consumer use of the affiliate is not required\n• Sharing in an employer-employee relationship where the employee performs actual services\n• Normal marketing and advertising expenses"
            },
            {
              heading: "Affiliated Business Arrangements (AfBAs) in California",
              body: "An Affiliated Business Arrangement (AfBA) is legal under RESPA Section 8(c)(4) if:\n\n1. DISCLOSURE: the referring party gives a written AfBA disclosure to the consumer at or before the time of referral — must disclose the business relationship and the estimated charge.\n2. FREEDOM: the consumer is NOT required to use the affiliate — they can choose any provider.\n3. RETURN: the only return from the affiliate is a return on ownership interest — not a per-referral payment.\n\nExample of a legal AfBA: a real estate brokerage that owns a partial interest in a title company and refers its clients. Legal IF: written disclosure given, clients free to choose other title companies, and compensation is a dividend/ownership distribution — not a per-transaction fee.\n\nCalifornia DRE additional rules: real estate licensees participating in AfBAs must comply with both RESPA and DRE disclosure requirements. Any compensation arrangement between a licensee and a settlement service provider must be disclosed to both the buyer and seller."
            },
            {
              heading: "Compliant Lead Generation in the California Market",
              body: "California-specific lead generation strategies that are RESPA-compliant:\n\n1. Content Marketing & SEO:\n• YouTube/blog content targeting: 'first-time buyer grants California,' 'CalHFA income limits [county],' 'how to buy a home in LA with low down payment'\n• No RESPA issues — educational content is not a referral arrangement\n\n2. Open House Partnerships (Compliant):\n• Co-host open houses or homebuyer workshops with real estate agents\n• Each party provides their own service — no payment for referrals\n• Agents introduce their buyers; you present financing options\n\n3. For Sale By Owner (FSBO) Outreach:\n• Many FSBO sellers in California end up needing help — offer free pre-approval for their buyer\n• No agency or settlement service referral involved\n\n4. Realtor Partnership Agreements (Carefully):\n• Marketing Services Agreements (MSAs) with agents must be for genuine, documented, market-value marketing services — NOT a disguised per-referral fee\n• CFPB has pursued MSAs aggressively. Document everything. Use counsel to review any MSA.\n\n5. Builder Relationships:\n• Preferred lender arrangements with builders are legal if properly disclosed and the buyer is free to choose other lenders\n• Cannot be tied to getting the deal — builder CANNOT require use of preferred lender"
            }
          ],
          quiz: [
            {
              id: "ca_p04q01",
              prompt: "A title company offers to pay a California real estate agent's annual MLS dues in exchange for exclusive referrals. This arrangement is:",
              choices: [
                "Legal if documented in a Marketing Services Agreement",
                "Legal if the agent discloses it to their clients",
                "A RESPA Section 8 violation — paying anything of value for referrals is prohibited",
                "Legal as long as the client is free to choose a different title company"
              ],
              answer: 2,
              explanation: "Paying MLS dues — or anything of value — in exchange for referrals of settlement service business is a RESPA Section 8 violation. It cannot be cured by an MSA, disclosure alone, or allowing clients to choose alternatives. The core problem is the exchange of value FOR referrals."
            },
            {
              id: "ca_p04q02",
              prompt: "For an Affiliated Business Arrangement (AfBA) to be legal under RESPA, which condition is NOT required?",
              choices: [
                "Written disclosure to the consumer at or before the time of referral",
                "The consumer must be free to choose other settlement service providers",
                "The return to the referring party must be based on ownership interest, not per-referral fees",
                "The affiliated business must be located in the same state as the referring party"
              ],
              answer: 3,
              explanation: "There is no geographic requirement for an AfBA under RESPA. The three required conditions are: (1) written AfBA disclosure at or before referral, (2) consumer freedom to choose other providers, and (3) return based on ownership interest only — not per-transaction fees."
            }
          ]
        }

      ] // end practical modules
    } // end practical track
  }, // end tracks

  studyPlan: [
    { weeks: "1-2", focus: "CA licensing process + property ownership + community property + DRE exam structure" },
    { weeks: "3-4", focus: "Agency (Civil Code § 2079) + contracts (RPA) + finance (deeds of trust) + valuation" },
    { weeks: "5-6", focus: "Title/escrow + land use + NHD disclosures + MLO SAFE Act + federal mortgage law" },
    { weeks: "7-8", focus: "California DRE state law + trust funds + TDS + advertising + fair housing + ethics" },
    { weeks: "9-10", focus: "Practical skills: buyer rep, listing practice, offer management, contingency removal" },
    { weeks: "11-12", focus: "Exam readiness: full practice exams using DRE content outline, schedule and sit exam" }
  ],

  resources: [
    { label: "CA DRE Salesperson License Requirements", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html", category: "broker" },
    { label: "CA DRE Exam Content Outline", url: "https://www.dre.ca.gov/Examinees/SalesExamContent.html", category: "broker" },
    { label: "CA DRE eLicensing Portal", url: "https://www2.dre.ca.gov/PublicASP/pplinfo.asp", category: "broker" },
    { label: "CAR Standard Forms Library", url: "https://www.car.org/tools/standard-forms", category: "broker" },
    { label: "CA Civil Code § 1102 (TDS)", url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1102.", category: "broker" },
    { label: "Proposition 13 — CA BOE Guide", url: "https://www.boe.ca.gov/proptaxes/pdf/pub29.pdf", category: "broker" },
    { label: "CA DFPI MLO Licensing", url: "https://dfpi.ca.gov/licensees-and-industries/mortgage-loan-originators/", category: "mlo" },
    { label: "NMLS MLO State Requirements — CA", url: "https://mortgage.nationwidelicensingsystem.org/profreq/Pages/default.aspx", category: "mlo" },
    { label: "SAFE MLO Test Study Outline (NMLS)", url: "https://mortgage.nationwidelicensingsystem.org/profreq/testing/Pages/default.aspx", category: "mlo" },
    { label: "CFPB RESPA Guide", url: "https://www.consumerfinance.gov/rules-policy/regulations/1024/", category: "mlo" },
    { label: "CA Natural Hazard Disclosure Info", url: "https://www.nhd.com", category: "broker" },
    { label: "Free Practice Exam — Real Estate Prep Guide", url: "https://www.realestateprep.guide/california-real-estate-exam/", category: "broker" }
  ]
};

// Export for use in app
if (typeof module !== 'undefined') module.exports = CURRICULUM_CA;
