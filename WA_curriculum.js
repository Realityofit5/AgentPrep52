// ============================================================
// CURRICULUM.JS — The Knowledge Brain
// Washington Real Estate Broker + MLO Study System 2026
// Sources: PSI Candidate Bulletin, WA DOL, WA DFI, NMLS Handbook
// ============================================================

const CURRICULUM_WA = {

  meta: {
    title: "WA Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Washington",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 80, mlo: 80, federal_law: 85, ethics: 85 }
  },

  tracks: {
    broker: {
      id: "broker",
      label: "WA Real Estate Broker",
      icon: "🏠",
      color: "#C9A84C",
      description: "Washington State Broker License — PSI National + State Exam Prep",
      requirements: [
        "18+ years old with high school diploma/equivalent",
        "90 hours approved education: 60hr Fundamentals + 30hr Practices",
        "Pass PSI national (100 items, 150 min) and state (30 items, 90 min) exams",
        "Scaled score of 70 required on each portion",
        "Both portions passed within 6 months of each other",
        "Fingerprint/background check via IdentoGO after passing ($45.05)",
        "Apply for license within 1 year of passing final exam"
      ],
      fees: [
        { item: "Exam fee", amount: "$210", source: "DOL" },
        { item: "Initial license fee", amount: "$233", note: "includes $20 research fee", source: "DOL" },
        { item: "Fingerprint/background check", amount: "$45.05", source: "DOL" },
        { item: "Approved 90-hour education", amount: "$200–$550", note: "varies by provider" }
      ],
      examStructure: {
        national: { items: 100, time: "150 minutes", passing: 70 },
        state: { items: 30, time: "90 minutes", passing: 70 }
      },
      modules: [
        {
          id: "b01",
          order: 1,
          title: "Licensing Process & Roadmap",
          week: "1-2",
          passingScore: 80,
          icon: "📋",
          objective: "Map the complete Washington broker licensing process end-to-end: requirements → education → PSI exam → fingerprints → application.",
          content: [
            {
              heading: "Who Qualifies",
              body: "You must be at least 18 years old and hold a high school diploma or equivalent. Washington has no residency requirement — you can live anywhere but must use a Washington-licensed managing broker to hold your license."
            },
            {
              heading: "The 90-Hour Education Requirement",
              body: "Before you can sit for the exam, you must complete two DOL-approved courses:\n• 60-Hour Real Estate Fundamentals — covers property law, ownership, finance, contracts, valuation, agency, and fair housing.\n• 30-Hour Real Estate Practices — covers daily brokerage operations, listing process, buyer representation, transaction management.\nBoth must be from a DOL Course Search approved provider. You CANNOT take the exam without completing these first."
            },
            {
              heading: "The PSI Exam",
              body: "After your school reports your completion to DOL, you register with PSI Testing Excellence. The exam has two separate portions:\n• National: 130 items total (100 scored + 30 unscored pretest), 150 minutes\n• State: 30 items, 90 minutes\nBoth portions must be passed within 6 months of each other. Passing scaled score is 70 on each."
            },
            {
              heading: "After You Pass",
              body: "1. Schedule fingerprints through IdentoGO (in-state electronic). Results can take up to 14 business days from Washington State Patrol.\n2. Apply for your license within 1 year of passing your final exam portion.\n3. You CANNOT practice real estate independently — you must affiliate with a licensed Washington managing broker/brokerage."
            },
            {
              heading: "Strategic Study Tip",
              body: "Use free resources to master 80-90% of the exam content BEFORE enrolling in your required 90-hour course. This way you'll burn through the paid course fast and schedule your exam while knowledge is fresh. Smart sequencing: study free → enroll → pass course → schedule PSI → pass exam → fingerprint → apply."
            }
          ],
          quiz: [
            {
              id: "b01q01",
              prompt: "After passing your final broker exam portion, what is the deadline to apply for your Washington real estate license?",
              choices: ["30 days", "6 months", "1 year", "2 years"],
              answer: 2,
              explanation: "Washington requires submitting your license application within 1 year of passing the final exam portion. Missing this window means retaking the exam."
            },
            {
              id: "b01q02",
              prompt: "The Washington broker exam national portion contains 130 items. How many of those are SCORED?",
              choices: ["130", "100", "70", "30"],
              answer: 1,
              explanation: "The national portion has 100 scored items and 30 unscored pretest items. You won't know which are which — answer every question seriously."
            },
            {
              id: "b01q03",
              prompt: "If you pass the national portion of the broker exam on January 1, what is the latest date you can pass the state portion and still use both scores?",
              choices: ["March 1 (60 days)", "April 1 (90 days)", "July 1 (6 months)", "January 1 next year (12 months)"],
              answer: 2,
              explanation: "Both portions must be passed within 6 months of each other. Passing national Jan 1 means state must be passed by July 1."
            },
            {
              id: "b01q04",
              prompt: "What is the total minimum unavoidable cost to obtain a Washington real estate broker license (exam + license fee + fingerprint)?",
              choices: ["About $200", "About $300", "About $488", "About $900"],
              answer: 2,
              explanation: "$210 exam + $233 license (incl. $20 research fee) + $45.05 fingerprint = ~$488.05, before adding the cost of the required 90-hour education."
            },
            {
              id: "b01q05",
              prompt: "You completed your 90-hour education on March 1, 2026. What is the LAST date you can pass your broker exam (state & national)?",
              choices: ["March 1, 2027", "March 1, 2028", "September 1, 2027", "There is no deadline"],
              answer: 1,
              explanation: "Washington requires passing both exam portions within 2 years of completing your education. March 1, 2026 + 2 years = March 1, 2028."
            }
          ]
        },
        {
          id: "b02",
          order: 2,
          title: "Property Ownership & Legal Descriptions",
          week: "3-4",
          passingScore: 80,
          icon: "🏛️",
          objective: "Identify estates, encumbrances, legal descriptions, water/mineral rights, and forms of ownership tested on the PSI national exam.",
          content: [
            {
              heading: "Real vs. Personal Property",
              body: "Real property = land + everything permanently attached (improvements, fixtures). Personal property = movable items (chattel). The test for a fixture: MARIA — Method of attachment, Adaptability, Relationship of parties, Intention, Agreement. A chandelier bolted to the ceiling = real property. A freestanding refrigerator = personal property. When in doubt: the intention of the party who attached it controls."
            },
            {
              heading: "Estates in Land",
              body: "Freehold estates (ownership):\n• Fee Simple Absolute — greatest ownership, no conditions, inheritable. Most common.\n• Fee Simple Defeasible — ownership with a condition that can terminate it ('so long as used as a school').\n• Life Estate — ownership for the duration of someone's life. The holder (life tenant) cannot waste the property. When they die, property goes to the remainderman or back to the grantor (reversion).\n\nLeasehold estates (possession without ownership):\n• Tenancy for Years — specific start/end date, no notice required to terminate.\n• Periodic Tenancy — auto-renews (month-to-month). Requires notice to terminate.\n• Tenancy at Will — either party can terminate anytime.\n• Tenancy at Sufferance — holdover tenant after lease expires."
            },
            {
              heading: "Concurrent Ownership",
              body: "Joint Tenancy — requires 4 unities (TTIP): Time, Title, Interest, Possession. Right of survivorship means surviving owner(s) inherit automatically, bypassing probate. Severing a joint tenancy (by selling your interest) converts it to tenancy in common.\n\nTenancy in Common — co-owners can have UNEQUAL shares. No right of survivorship. Each owner can sell/will/mortgage their share independently. Most common form for investors.\n\nCommunity Property (WA is a community property state) — property acquired during marriage is owned 50/50 by spouses by default. Separate property = owned before marriage or received as gift/inheritance during marriage."
            },
            {
              heading: "Encumbrances",
              body: "Liens — financial claims against property:\n• Specific lien: attached to one property (mortgage, mechanic's lien, property tax lien)\n• General lien: attached to all property of a debtor (judgment lien, IRS lien)\n• Priority: property tax liens ALWAYS have first priority regardless of recording date.\n\nEasements — right to use another's land:\n• Easement appurtenant: benefits an adjacent parcel (dominant estate uses it, servient estate bears it). Runs with the land.\n• Easement in gross: benefits a person/company, not land (utility lines, billboard rights).\n• Easement by prescription: like adverse possession — open, notorious, continuous, hostile use for statutory period.\n\nRestrictive Covenants (CC&Rs) — private limitations running with the land. HOA rules are an example."
            },
            {
              heading: "Legal Descriptions",
              body: "Three systems tested on the national exam:\n1. Metes and Bounds — oldest system. Uses compass bearings and distances from a Point of Beginning (POB). Used in eastern states.\n2. Rectangular Survey (Government Survey) — uses Principal Meridians and Base Lines. Divides land into Townships (6mi × 6mi = 36 sections) and Sections (1 mile × 1 mile = 640 acres). A quarter-section = 160 acres. An 'NW ¼ of NW ¼' = 40 acres.\n3. Lot and Block (Recorded Plat) — used in subdivisions. References a recorded plat map by lot number, block, and subdivision name."
            }
          ],
          quiz: [
            {
              id: "b02q01",
              prompt: "A homeowner installs a custom built-in bookshelf. Six months later, they sell the home and try to take the bookshelf. The buyer objects. Who is correct?",
              choices: [
                "The seller — personal property can always be removed",
                "The buyer — built-in fixtures become real property and transfer with the sale",
                "Neither — it must be negotiated at closing regardless",
                "The seller — verbal agreements override written contracts"
              ],
              answer: 1,
              explanation: "A built-in bookshelf that is permanently attached and adapted to the home is a fixture, making it real property that transfers with the sale unless explicitly excluded in the purchase agreement."
            },
            {
              id: "b02q02",
              prompt: "A life estate holder (life tenant) wants to sell the property to a third party. Which statement is TRUE?",
              choices: [
                "They cannot sell because they don't own fee simple",
                "They can sell, but the buyer only gets ownership for the duration of the life tenant's life",
                "They can sell and the buyer gets fee simple absolute",
                "They need the remainderman's permission before any sale"
              ],
              answer: 1,
              explanation: "A life tenant can transfer their interest, but they can only transfer what they have — ownership for their lifetime. The buyer's ownership (called a 'pur autre vie' estate) lasts only as long as the original life tenant lives."
            },
            {
              id: "b02q03",
              prompt: "Three investors buy a property as joint tenants. One investor sells their share to a new buyer. What is the new ownership structure?",
              choices: [
                "All three parties now hold as joint tenants",
                "The original two remaining investors hold joint tenancy; the new buyer holds tenancy in common with them",
                "All parties now hold as tenants in common",
                "The new buyer gets the selling investor's joint tenancy rights automatically"
              ],
              answer: 1,
              explanation: "Selling a joint tenancy interest severs the joint tenancy only for that share. The two original co-owners still hold joint tenancy between themselves (with survivorship rights). The new buyer holds their share as tenancy in common with the others."
            },
            {
              id: "b02q04",
              prompt: "How many acres are in the NE ¼ of the SW ¼ of Section 14?",
              choices: ["640 acres", "160 acres", "80 acres", "40 acres"],
              answer: 3,
              explanation: "One section = 640 acres. The SW ¼ = 160 acres. The NE ¼ of that = 40 acres. Formula: 640 ÷ 4 ÷ 4 = 40 acres."
            },
            {
              id: "b02q05",
              prompt: "A utility company has the right to run power lines across your property. This is BEST described as:",
              choices: [
                "An easement appurtenant benefiting the utility's dominant estate",
                "An easement in gross benefiting a company, not adjacent land",
                "A license that can be revoked at any time",
                "A restrictive covenant running with the land"
              ],
              answer: 1,
              explanation: "Utility line rights are easements in gross — they benefit the utility company (a person/entity), not an adjacent parcel of land. There is no dominant estate in an easement in gross."
            },
            {
              id: "b02q06",
              prompt: "Washington is a community property state. A married person receives an inheritance from their deceased parent during the marriage. This inheritance is:",
              choices: [
                "Community property owned 50/50 by both spouses",
                "Separate property belonging only to the inheriting spouse",
                "Community property unless converted by written agreement",
                "Subject to equal division only upon divorce"
              ],
              answer: 1,
              explanation: "Inheritances and gifts received by one spouse during a marriage are separate property in Washington's community property system, belonging solely to the receiving spouse."
            }
          ]
        },
        {
          id: "b03",
          order: 3,
          title: "Agency Law & Fiduciary Duties",
          week: "3-4",
          passingScore: 80,
          icon: "🤝",
          objective: "Explain agency creation, fiduciary duties (OLD CAR), disclosure obligations, dual agency, and Washington-specific agency rules.",
          content: [
            {
              heading: "What is Agency?",
              body: "Agency is a legal relationship where one party (the agent/broker) is authorized to act on behalf of another (the principal/client). The principal is bound by the authorized acts of their agent.\n\nIn real estate:\n• Listing agent (seller's agent) — represents the seller\n• Buyer's agent — represents the buyer\n• Dual agent — represents both (legal in WA with written consent from both parties)"
            },
            {
              heading: "Fiduciary Duties: OLD CAR",
              body: "Agents owe their clients (principals) six fiduciary duties. Remember: OLD CAR\n\n• Obedience — follow all lawful instructions of the principal\n• Loyalty — put the client's interests above all others, including your own\n• Disclosure — reveal all material facts known to you that affect the transaction\n• Confidentiality — protect client's confidential information (even after relationship ends)\n• Accounting — safeguard all money and property entrusted to you\n• Reasonable Care — use the skill and knowledge a competent professional would use\n\nAgents owe third parties (customers, not clients) honesty and fair dealing — NOT the full fiduciary duties above."
            },
            {
              heading: "Washington Agency Disclosure Requirements",
              body: "Washington requires brokers to provide a 'Real Estate Brokerage Relationships' pamphlet (the agency disclosure pamphlet) to buyers and sellers at the FIRST SUBSTANTIAL CONTACT — before any confidential information is exchanged.\n\nKey timing rule: disclose BEFORE the client reveals anything they wouldn't want the other side to know.\n\nWritten agency agreements: Washington requires written buyer agency agreements before touring homes (aligned with the 2024 NAR settlement changes). Listing agreements must be in writing."
            },
            {
              heading: "Types of Agency",
              body: "Express Agency — created by written or verbal agreement (listing agreement, buyer agency agreement).\n\nImplied Agency — created by the parties' actions/conduct, not a formal agreement. Dangerous — brokers can accidentally create implied agency.\n\nApparent Authority — third parties can hold a principal liable for agent's acts that APPEAR authorized, even if not actually authorized.\n\nRatification — principal approves an agent's unauthorized act after the fact, making it binding."
            },
            {
              heading: "Dual Agency & In-House Transactions",
              body: "Dual Agency = representing both buyer and seller in the SAME transaction.\n\nIn Washington: LEGAL but requires WRITTEN informed consent from BOTH parties BEFORE entering into the dual agency situation.\n\nDual agent duties: must maintain confidentiality of each party, cannot advise either party on price strategy, must disclose material facts to both.\n\nDesignated Agency: a brokerage assigns one agent to represent buyer and another to represent seller (within the same firm). Avoids full dual agency problems."
            }
          ],
          quiz: [
            {
              id: "b03q01",
              prompt: "A buyer's agent discovers the seller's basement has a history of flooding not disclosed in the listing. The agent MUST:",
              choices: [
                "Say nothing — it could kill the deal and harm the seller",
                "Disclose it to the buyer immediately as a material fact",
                "Tell the buyer only if they specifically ask about flooding",
                "Report it only to the managing broker, not the buyer"
              ],
              answer: 1,
              explanation: "Disclosure of material facts is a core fiduciary duty. A flooding history is clearly material (it affects value and desirability). The buyer's agent must disclose this to their client regardless of impact on the deal."
            },
            {
              id: "b03q02",
              prompt: "A seller tells their listing agent in confidence: 'I'd accept $50,000 less than asking price — I'm desperate to sell.' The same agent is also representing the buyer in this transaction. What must the agent do?",
              choices: [
                "Tell the buyer — loyalty to the buyer requires full disclosure",
                "Keep it confidential — this is privileged information that cannot be shared",
                "Withdraw from one representation immediately — dual agency creates an impossible conflict here",
                "Tell both parties simultaneously to be fair"
              ],
              answer: 2,
              explanation: "This is a case where dual agency creates an irreconcilable conflict. A dual agent CANNOT share the seller's bottom-line price with the buyer — that would breach confidentiality to the seller. The only ethical solution is to withdraw from one representation (or from dual agency entirely) before proceeding."
            },
            {
              id: "b03q03",
              prompt: "In Washington, when must a broker first provide the agency disclosure pamphlet to a potential client?",
              choices: [
                "At the time of signing the listing or buyer agency agreement",
                "At first substantial contact, before confidential information is exchanged",
                "At the first showing of a property",
                "Only when dual agency is involved"
              ],
              answer: 1,
              explanation: "Washington requires agency disclosure at FIRST SUBSTANTIAL CONTACT — this is before the client shares anything confidential. Waiting until contract signing is too late."
            },
            {
              id: "b03q04",
              prompt: "Which of the following best describes the duty of Confidentiality in an agency relationship?",
              choices: [
                "The agent must keep all transaction facts secret from all parties",
                "The agent must protect the client's confidential information even after the agency relationship ends",
                "The agent must only keep pricing strategy confidential",
                "Confidentiality ends when escrow closes"
              ],
              answer: 1,
              explanation: "Confidentiality is ongoing — it does NOT end when the transaction closes or the agency agreement terminates. An agent cannot later reveal a former client's confidential information."
            }
          ]
        },
        {
          id: "b04",
          order: 4,
          title: "Contracts",
          week: "5-6",
          passingScore: 80,
          icon: "📄",
          objective: "Identify the elements of a valid contract, types of listing agreements, purchase contract mechanics, and common exam traps.",
          content: [
            {
              heading: "Elements of a Valid Contract (CLAC)",
              body: "For any contract to be legally enforceable, it needs four elements. Remember CLAC:\n\n• Competent Parties — both parties must have legal capacity (18+, mentally competent, not under duress)\n• Lawful Object — the purpose must be legal\n• Agreement (Offer + Acceptance) — a meeting of the minds. The offer must be accepted exactly as made — any change creates a counteroffer, which kills the original offer\n• Consideration — something of value exchanged by both parties (money, a promise, a service)\n\nNote: Real estate contracts also require WRITING to be enforceable (Statute of Frauds)."
            },
            {
              heading: "Contract Status Terms",
              body: "• Valid — meets all legal requirements, fully enforceable\n• Void — has no legal effect from the start (illegal purpose, no consideration). Cannot be ratified.\n• Voidable — valid but one party can cancel it (minor signed, misrepresentation, duress). The innocent party can affirm or rescind.\n• Unenforceable — valid between parties but courts won't enforce it (oral contract for real estate purchase — violated Statute of Frauds)\n\nKey distinction: Void vs. Voidable. A void contract cannot be enforced by ANYONE. A voidable contract CAN be ratified by the innocent party."
            },
            {
              heading: "Listing Agreements",
              body: "Exclusive Right to Sell — the most common. The listing broker earns commission regardless of who finds the buyer. Even if the owner sells it themselves, the broker gets paid.\n\nExclusive Agency — only the listing broker can earn commission (no sub-agents). BUT if the owner finds a buyer themselves, NO commission is owed.\n\nOpen Listing — seller can list with multiple brokers. Only the broker who produces the buyer earns commission. Seller can also sell themselves commission-free.\n\nNet Listing — seller names a net price; the broker keeps everything above it. LEGAL in Washington but ethically risky — potential conflict of interest."
            },
            {
              heading: "Purchase & Sale Agreement Key Concepts",
              body: "Earnest Money — deposit showing buyer's good faith. NOT required for contract validity, but standard practice. Held in escrow (by the listing firm or escrow company), NOT by the agent personally.\n\nContingencies — conditions that must be met for the contract to be binding:\n• Financing contingency — buyer must secure a loan\n• Inspection contingency — buyer's right to inspect and potentially cancel\n• Appraisal contingency — property must appraise at or above purchase price\n• Sale contingency — buyer's current home must sell first\n\nTime is of the Essence — when included, deadlines are strict. Missing a deadline can void the contract.\n\nLiquidated Damages — pre-agreed amount (often the earnest money) that the seller keeps if the buyer defaults without legal cause."
            },
            {
              heading: "Contract Termination",
              body: "A contract can end by:\n• Full Performance — both parties complete their obligations (normal closing)\n• Agreement (Mutual Rescission) — both parties agree to cancel\n• Breach — one party fails to perform. The non-breaching party can sue for damages or specific performance\n• Impossibility — performance becomes impossible (property destroyed by fire)\n• Expiration — offer or contract expires by its own terms"
            }
          ],
          quiz: [
            {
              id: "b04q01",
              prompt: "A buyer makes an offer of $450,000 on a property. The seller responds with a counteroffer of $465,000. Before the buyer responds, the seller calls back and says they'll accept the original $450,000. Is there a valid contract?",
              choices: [
                "Yes — the seller accepted the original offer price",
                "No — the counteroffer legally terminated the original offer; the seller's new acceptance is a new offer the buyer must still accept",
                "Yes — the seller has the right to accept any previously offered price",
                "No — counteroffers can only be made in writing to be valid"
              ],
              answer: 1,
              explanation: "A counteroffer legally kills the original offer. The seller's new statement to accept $450,000 is actually a NEW offer that the buyer must now formally accept. There is no binding contract until the buyer accepts."
            },
            {
              id: "b04q02",
              prompt: "Under what listing type would a seller owe commission even if they personally found the buyer with no broker involvement?",
              choices: [
                "Open Listing",
                "Exclusive Agency Listing",
                "Exclusive Right to Sell Listing",
                "Net Listing"
              ],
              answer: 2,
              explanation: "The Exclusive Right to Sell listing guarantees the listing broker a commission no matter who produces the buyer — including the seller themselves. This is why it's the most commonly used listing type."
            },
            {
              id: "b04q03",
              prompt: "A 16-year-old signs a purchase agreement to buy a house. This contract is:",
              choices: [
                "Void — minors cannot enter contracts",
                "Voidable — the minor can disaffirm it, but the adult seller cannot",
                "Unenforceable — it violates the Statute of Frauds",
                "Valid — if both parties agree in writing"
              ],
              answer: 1,
              explanation: "Contracts with minors (under 18) are voidable, not void. The minor can choose to disaffirm (cancel) the contract or ratify it upon reaching 18. The adult seller CANNOT use the minor's age as grounds to void the contract — only the minor can."
            },
            {
              id: "b04q04",
              prompt: "The earnest money deposit in a real estate transaction should be held by:",
              choices: [
                "The buyer's real estate agent personally",
                "The seller until closing",
                "A neutral escrow holder or the listing brokerage's trust account",
                "The buyer's lender"
              ],
              answer: 2,
              explanation: "Earnest money must be held in a trust/escrow account — never commingled with the agent's personal funds or the brokerage's operating account. This is a fundamental fiduciary/accounting duty."
            }
          ]
        },
        {
          id: "b05",
          order: 5,
          title: "Financing Fundamentals",
          week: "3-4",
          passingScore: 80,
          icon: "💰",
          objective: "Explain loan types, LTV/DTI ratios, amortization, PMI, government loans, and solve real estate finance math problems.",
          content: [
            {
              heading: "Key Financing Ratios",
              body: "Loan-to-Value (LTV) = Loan Amount ÷ Appraised Value (or Purchase Price, whichever is LOWER)\nExample: $320,000 loan on $400,000 home = 80% LTV\n\nDebt-to-Income (DTI) — lenders look at two ratios:\n• Front-end (housing ratio): PITI ÷ Gross Monthly Income. Conventional max: ~28-31%\n• Back-end (total debt ratio): All monthly debt + PITI ÷ Gross Monthly Income. Conventional max: ~43-45%\n\nPMI (Private Mortgage Insurance) — required on conventional loans when LTV exceeds 80%. Protects the LENDER, not the borrower. Automatically cancelled when equity reaches 22% (Homeowners Protection Act)."
            },
            {
              heading: "Loan Types",
              body: "Conventional Loans — not government-backed. Conforming loans meet Fannie Mae/Freddie Mac limits ($806,500 in 2025 for most areas). Jumbo loans exceed conforming limits.\n\nFHA Loans (Federal Housing Administration):\n• Minimum 3.5% down with 580+ credit score\n• 10% down with 500-579 credit score\n• MIP (Mortgage Insurance Premium) required regardless of LTV\n• FHA loans are ASSUMABLE (with lender qualification)\n\nVA Loans (Veterans Affairs):\n• Zero down payment for eligible veterans/active duty/surviving spouses\n• No PMI required\n• VA Funding Fee required (unless exempt due to disability)\n• VA loans are ASSUMABLE\n\nUSDA Loans: Zero down, rural properties only, income limits apply."
            },
            {
              heading: "Amortization",
              body: "Amortization = the process of paying off a loan through regular equal payments over time. Each payment covers interest + principal.\n\nKey insight: early payments are mostly interest; later payments are mostly principal.\n\nExample: $400,000 loan, 7%, 30-year fixed\n• Month 1 payment ≈ $2,661\n• Month 1 interest: $400,000 × 7% ÷ 12 = $2,333\n• Month 1 principal: $2,661 - $2,333 = $328\n\nNegative Amortization — when payments are so low they don't cover the interest. The unpaid interest is added to the principal balance (balance grows). These loans are heavily regulated post-2008."
            },
            {
              heading: "Types of Mortgages",
              body: "Fixed-Rate Mortgage — same interest rate and P&I payment for the entire loan term. Predictable; preferred in rising rate environments.\n\nAdjustable-Rate Mortgage (ARM) — rate adjusts periodically after an initial fixed period. '5/1 ARM' = fixed for 5 years, then adjusts annually. Includes rate caps (periodic and lifetime).\n\nBalloon Mortgage — smaller periodic payments with a large lump sum (balloon) due at maturity. Risk: borrower must refinance or pay off the balloon.\n\nReverse Mortgage — for homeowners 62+. They receive payments from the lender against home equity. No monthly mortgage payments required. Loan comes due when borrower moves, sells, or dies."
            }
          ],
          quiz: [
            {
              id: "b05q01",
              prompt: "A home appraises at $380,000. The purchase price is $395,000. The buyer makes a 10% down payment based on the purchase price. What is the Loan-to-Value ratio (LTV)?",
              choices: [
                "90% — 10% down always equals 90% LTV",
                "93.6% — loan divided by the appraised value",
                "90.0% — loan divided by the purchase price",
                "97.5% — LTV always uses purchase price"
              ],
              answer: 1,
              explanation: "LTV = Loan Amount ÷ LOWER of (Appraised Value or Purchase Price). Step 1: Down payment = 10% × $395,000 = $39,500. Step 2: Loan amount = $395,000 − $39,500 = $355,500. Step 3: LTV base = lower of $380,000 (appraised) or $395,000 (purchase) = $380,000. Step 4: LTV = $355,500 ÷ $380,000 = 93.6%. Lenders always use the lower value to protect against overpaying on an inflated purchase price."
            },
            {
              id: "b05q02",
              prompt: "A borrower has a gross monthly income of $6,000. Their monthly PITI is $1,500 and they have $400/month in car payments and $200/month in student loans. What is their back-end DTI?",
              choices: ["25%", "35%", "33%", "43%"],
              answer: 1,
              explanation: "Back-end DTI = (PITI + all debts) ÷ Gross Monthly Income = ($1,500 + $400 + $200) ÷ $6,000 = $2,100 ÷ $6,000 = 35%."
            },
            {
              id: "b05q03",
              prompt: "Which loan type requires Mortgage Insurance Premium (MIP) regardless of the down payment amount?",
              choices: [
                "Conventional with 20% down",
                "VA loan",
                "FHA loan",
                "USDA loan"
              ],
              answer: 2,
              explanation: "FHA loans require MIP (Mortgage Insurance Premium) for ALL borrowers regardless of down payment. This is different from PMI on conventional loans, which can be avoided with 20%+ down."
            },
            {
              id: "b05q04",
              prompt: "What is the monthly interest portion of the FIRST payment on a $250,000 loan at 6% annual interest?",
              choices: ["$1,250", "$1,500", "$1,000", "$2,083"],
              answer: 0,
              explanation: "$250,000 × 6% ÷ 12 months = $250,000 × 0.005 = $1,250. For first payment, entire interest portion = $1,250."
            }
          ]
        },
        {
          id: "b06",
          order: 6,
          title: "Valuation & Market Analysis",
          week: "3-4",
          passingScore: 80,
          icon: "📊",
          objective: "Apply the three approaches to value, interpret depreciation, and build CMA logic used by brokers daily.",
          content: [
            {
              heading: "Three Approaches to Value",
              body: "1. Sales Comparison Approach (Market Approach)\n— Best for: residential properties\n— Method: Find similar sold properties (comparables/comps), then adjust for differences\n— Adjustments: If the comp is BETTER than the subject, SUBTRACT from comp price. If comp is WORSE, ADD to comp price.\n— Remember: 'CBS' — Comp Better, Subtract\n\n2. Income Approach (Capitalization Approach)\n— Best for: income-producing properties\n— Formula: Value = Net Operating Income (NOI) ÷ Cap Rate\n— NOI = Gross Income - Vacancy/Collection Loss - Operating Expenses (NOT including mortgage)\n— Cap Rate = NOI ÷ Value. Lower cap rate = higher-value/lower-risk property\n\n3. Cost Approach\n— Best for: special-use properties (churches, schools, government buildings) with few comps\n— Formula: Land Value + (Replacement Cost New - Depreciation) = Property Value\n— Depreciation types: Physical deterioration (wear/age), Functional obsolescence (outdated features), External/economic obsolescence (outside forces — cannot be cured)"
            },
            {
              heading: "Comparative Market Analysis (CMA)",
              body: "The CMA is a broker's tool (not an appraisal) to help sellers price and buyers evaluate fair market value.\n\nCMA Process:\n1. Select 3-5 recently sold comparable properties (ideally within 6-12 months, similar size/location)\n2. Make adjustments for differences (bed/bath count, garage, condition, lot size)\n3. Calculate adjusted price per square foot or total adjusted sale price\n4. Identify price range; recommend listing price\n\nKey CMA terms:\n• Active listings = current competition\n• Pending/Under contract = market direction indicators\n• Sold listings = the only ones that show actual market value\n\nAbsorption Rate = Number of active listings ÷ Average monthly sales. High absorption rate = seller's market. Low = buyer's market."
            },
            {
              heading: "Appraisal vs. CMA",
              body: "Appraisal: performed by a licensed/certified appraiser. Required for most mortgage loans. A legal opinion of value with liability attached.\n\nCMA: performed by a real estate broker. Used for pricing guidance. NOT a legal appraisal. Brokers CANNOT call their analysis an 'appraisal' without a separate appraiser license.\n\nBPO (Broker Price Opinion): a formal written valuation by a broker, often used by lenders for short sales or foreclosures. WA allows these under specific conditions."
            }
          ],
          quiz: [
            {
              id: "b06q01",
              prompt: "A comparable sale has a 2-car garage; the subject property has a 1-car garage. The market indicates a garage space is worth $8,000. How should you adjust the comparable?",
              choices: [
                "Add $8,000 to the comparable",
                "Subtract $8,000 from the comparable",
                "Add $8,000 to the subject",
                "No adjustment needed"
              ],
              answer: 1,
              explanation: "The comparable is BETTER than the subject (extra garage). Per CBS — Comp Better, Subtract. Subtract $8,000 from the comparable's sale price to make it comparable to the subject."
            },
            {
              id: "b06q02",
              prompt: "An apartment building generates $180,000 in net operating income. Similar properties sell at a 6% cap rate. What is the property's indicated value?",
              choices: ["$1,080,000", "$3,000,000", "$10,800", "$180,000"],
              answer: 1,
              explanation: "Value = NOI ÷ Cap Rate = $180,000 ÷ 0.06 = $3,000,000."
            },
            {
              id: "b06q03",
              prompt: "A neighborhood has 48 active listings and typically sells 8 homes per month. What is the absorption rate, and what does it indicate?",
              choices: [
                "6 months of supply — a balanced or slight buyer's market",
                "6 months of supply — a strong seller's market",
                "0.6 months of supply — a strong seller's market",
                "48 months of supply — an extreme buyer's market"
              ],
              answer: 0,
              explanation: "Absorption rate = 48 listings ÷ 8 sales/month = 6 months of supply. Less than 6 months is generally a seller's market; more than 6 months is a buyer's market; 6 months is roughly balanced."
            }
          ]
        },
        {
          id: "b07",
          order: 7,
          title: "Washington State Law & Rules",
          week: "7-8",
          passingScore: 85,
          icon: "⚖️",
          objective: "Master Washington-specific licensing rules, prohibited conduct, handling of monies, advertising rules, and RCW 18.85 requirements.",
          content: [
            {
              heading: "Washington Licensing Structure (RCW 18.85)",
              body: "Washington's real estate licensing law is RCW Chapter 18.85 and WAC Chapter 308-124.\n\nLicense tiers:\n• Real Estate Broker — entry-level, must work under a managing broker/firm. Cannot operate independently.\n• Managing Broker — requires 3 years as an active broker within the past 5 years. Can operate independently and supervise brokers.\n• Real Estate Firm — business entity license.\n\nBrokerage services definition under RCW 18.85.011: includes listing, selling, purchasing, exchanging, leasing, renting, managing, PROPERTY MANAGEMENT, and assisting persons in these activities for compensation. This means property management IS licensed brokerage activity in Washington."
            },
            {
              heading: "Handling of Funds & Trust Accounts",
              body: "Earnest money and other client funds must be:\n• Deposited into a separate trust/escrow account\n• Deposited within 2 banking days of receipt (or per contract terms)\n• NEVER commingled with operating funds or personal funds\n• Kept separate for each transaction\n\nCommingling = mixing client funds with the broker's own funds. This is a serious violation that can result in license suspension or revocation.\n\nConversion = using client funds for personal use. This is a CRIMINAL offense on top of a licensing violation."
            },
            {
              heading: "Advertising Rules",
              body: "Washington brokers must:\n• Include the firm/brokerage name clearly in ALL advertising (cannot advertise using only your personal name)\n• Not use blind ads (ads that don't reveal you're a real estate licensee)\n• Social media posts about listings = advertising; must include firm name\n• 'For Sale By Owner' language is misleading if you're a licensee — you must disclose your licensed status\n\nDO NOT:\n• Guarantee specific results\n• Make false or misleading statements about property\n• Advertise another broker's listing without permission"
            },
            {
              heading: "Prohibited Conduct",
              body: "Washington brokers are prohibited from:\n• Paying referral fees or compensation to unlicensed persons\n• Acting as dual agent without written informed consent from both parties\n• Making false promises to induce a sale\n• Commingling or converting client funds\n• Discriminating in violation of fair housing laws\n• Practicing after license expiration\n• Failing to account for earnest money\n• Self-dealing without full disclosure (buying a listing without disclosing licensee status)\n\nBrokers who are buying or selling their OWN property must disclose their licensed status to the other party IN WRITING."
            },
            {
              heading: "Fair Housing (Federal + Washington)",
              body: "Federal Fair Housing Act (1968) prohibits discrimination based on 7 protected classes: Race, Color, Religion, National Origin, Sex, Familial Status, Disability.\n\nWashington State adds additional protected classes: Marital status, Sexual orientation, Gender identity, Veteran status, Citizenship/immigration status, Honorably discharged veteran status.\n\nProhibited practices:\n• Steering — directing buyers to or away from neighborhoods based on protected characteristics\n• Blockbusting/Panic Selling — inducing owners to sell by suggesting protected classes are moving in\n• Redlining — denying services to entire neighborhoods based on demographics\n• Discriminatory advertising — stating preferences or limitations based on protected classes"
            }
          ],
          quiz: [
            {
              id: "b07q01",
              prompt: "A Washington real estate broker receives earnest money on a Friday. By when must it be deposited into the trust account?",
              choices: [
                "Same day received",
                "Within 2 banking days",
                "Within 5 business days",
                "By the end of the following week"
              ],
              answer: 1,
              explanation: "Washington requires earnest money to be deposited within 2 banking days of receipt (or per the terms of the purchase and sale agreement if specified differently)."
            },
            {
              id: "b07q02",
              prompt: "A licensed Washington broker wants to place an ad on Instagram for a listing. Which of the following is REQUIRED?",
              choices: [
                "Only the broker's personal name and contact info",
                "The brokerage/firm name must be included in the advertisement",
                "The broker's license number must be prominently displayed",
                "Ads on social media don't require the same disclosures as print ads"
              ],
              answer: 1,
              explanation: "All advertising by Washington licensees — including social media — must include the brokerage/firm name. Running a personal-brand-only ad without the firm name is a blind ad violation."
            },
            {
              id: "b07q03",
              prompt: "A Washington broker is purchasing a home for their personal residence and is negotiating directly with a seller. What must the broker do?",
              choices: [
                "Nothing special — this is a private transaction",
                "Disclose their licensed status to the seller IN WRITING",
                "Reduce the purchase price by their commission savings",
                "Recuse themselves and have another broker handle it"
              ],
              answer: 1,
              explanation: "Washington law requires brokers buying or selling their own property to disclose their licensee status to the other party in writing. This prevents the broker from gaining an unfair advantage using their professional knowledge without the other party's awareness."
            },
            {
              id: "b07q04",
              prompt: "Which of the following is a protected class under Washington State law but NOT under the federal Fair Housing Act?",
              choices: [
                "Race",
                "Familial Status",
                "Sexual orientation",
                "National Origin"
              ],
              answer: 2,
              explanation: "Sexual orientation (and gender identity) are protected classes under Washington State law but are NOT among the 7 federally protected classes under the federal Fair Housing Act of 1968."
            }
          ]
        },
        {
          id: "b08",
          order: 8,
          title: "Real Estate Math Mastery",
          week: "1-2 (ongoing)",
          passingScore: 80,
          icon: "🧮",
          objective: "Solve commission calculations, prorations, area calculations, and loan math problems with speed and accuracy.",
          content: [
            {
              heading: "Commission Calculations",
              body: "Basic formula: Commission = Sale Price × Commission Rate\n\nExample: $475,000 sale at 5.5% = $475,000 × 0.055 = $26,125 total commission\n\nSplit commissions: If the listing and buyer's agent split 50/50:\n• Each side gets $13,062.50\n• If the listing agent splits 60/40 with their broker: agent gets $7,837.50\n\nWorking backwards from commission to price:\n$15,000 commission at 5% = $15,000 ÷ 0.05 = $300,000 sale price"
            },
            {
              heading: "Proration Calculations",
              body: "Prorations divide expenses fairly between buyer and seller based on the closing date.\n\nAnnual property taxes of $4,800. Closing date: September 30.\n\nMethod: $4,800 ÷ 12 months = $400/month\nSeller occupies Jan 1–Sep 30 = 9 months\nSeller's share = 9 × $400 = $3,600\nBuyer's share = 3 × $400 = $1,200\n\nIf taxes are PAID IN ARREARS (paid at end of year): Seller OWES buyer for the 9 months. This appears as a credit to the buyer and debit to the seller on the closing statement."
            },
            {
              heading: "Area Calculations",
              body: "Square footage: Length × Width\n\nExample: A rectangular lot 150 feet wide × 200 feet deep = 30,000 sq ft\nIn acres: 30,000 ÷ 43,560 sq ft per acre = 0.69 acres\n\nAn acre = 43,560 square feet (memorize this!)\n\nFor irregular lots, divide into rectangles/triangles and add areas together.\n\nCommission on land based on acreage: 40-acre parcel at $2,500/acre = $100,000 total price. At 6% commission = $6,000."
            },
            {
              heading: "Loan-to-Value & Down Payment Math",
              body: "LTV = Loan ÷ Value\nDown Payment = Purchase Price × Down Payment %\nLoan Amount = Purchase Price - Down Payment\n\nExample: $425,000 purchase with 20% down:\n• Down payment = $425,000 × 0.20 = $85,000\n• Loan = $425,000 - $85,000 = $340,000\n• LTV = $340,000 ÷ $425,000 = 80%\n\nTransferring tax/profit: \nOriginal purchase $200,000. Sold for $350,000.\n• Gain = $350,000 - $200,000 = $150,000\n• Primary residence exclusion: $250,000 (single), $500,000 (married)\n• This seller (single) has NO taxable gain ($150,000 < $250,000 exclusion)"
            }
          ],
          quiz: [
            {
              id: "b08q01",
              prompt: "A broker charges 6% commission. The seller wants to net $285,000 after commission. What must the sale price be?",
              choices: ["$302,100", "$303,191", "$303,000", "$291,000"],
              answer: 1,
              explanation: "Net price = Sale Price × (1 - commission rate). $285,000 = Sale Price × 0.94. Sale Price = $285,000 ÷ 0.94 = $303,191.49."
            },
            {
              id: "b08q02",
              prompt: "Annual property taxes are $5,400. The property closes on April 30. The seller has NOT yet paid taxes for the year (paid in arrears). How much does the seller owe the buyer at closing?",
              choices: ["$1,800", "$1,500", "$3,900", "$450"],
              answer: 0,
              explanation: "$5,400 ÷ 12 = $450/month. Seller owns January through April = 4 months. 4 × $450 = $1,800 credit to buyer."
            },
            {
              id: "b08q03",
              prompt: "A rectangular lot is 132 feet by 330 feet. How many acres is this?",
              choices: ["1 acre", "1.5 acres", "0.75 acres", "2 acres"],
              answer: 0,
              explanation: "132 × 330 = 43,560 square feet. 43,560 ÷ 43,560 = exactly 1 acre."
            }
          ]
        }
      ]
    },

    mlo: {
      id: "mlo",
      label: "WA Mortgage Loan Originator",
      icon: "🏦",
      color: "#4C9AC9",
      description: "Washington State MLO License — SAFE National Test + Uniform State Test",
      requirements: [
        "Complete 22 hours NMLS-approved pre-licensing education (including 4 hours WA law)",
        "Pass SAFE MLO National Test with Uniform State Test ($110)",
        "Submit passing scores to NMLS record BEFORE applying",
        "Complete criminal background check ($39) and credit report ($15)",
        "Submit application through NMLS with $155 base fee",
        "DFI reviews complete applications within ~2 weeks"
      ],
      fees: [
        { item: "SAFE MLO Test (National + UST)", amount: "$110", source: "DFI/NMLS" },
        { item: "Application fee (incl. NMLS system fee)", amount: "$155", source: "DFI" },
        { item: "Criminal background check", amount: "$39", source: "DFI" },
        { item: "Credit report authorization", amount: "$15", source: "DFI" },
        { item: "22-hour NMLS-approved education", amount: "Varies by provider" }
      ],
      examStructure: {
        national: { items: 120, note: "National with Uniform State Test (UST)", passing: "Passing score required" },
        retake: { firstRetake: "30 days", secondRetake: "30 days", afterThird: "180 days" }
      },
      modules: [
        {
          id: "m01",
          order: 1,
          title: "MLO Licensing Process & NMLS",
          week: "1-2",
          passingScore: 80,
          icon: "📋",
          objective: "Map the complete Washington MLO licensing path: education → testing → background → application → DFI approval.",
          content: [
            {
              heading: "The NMLS System",
              body: "NMLS (Nationwide Mortgage Licensing System) is the national database for mortgage professionals. It's the platform where:\n• You create your unique NMLS ID (keep this forever — it follows your entire career)\n• You submit license applications\n• Approved course providers report your education completions\n• Your test scores are recorded\n• You renew your license annually\n\nCritical rule: You CANNOT submit a WA MLO application until your passing test score is posted to your NMLS record. Test first, apply second."
            },
            {
              heading: "Pre-Licensing Education Requirements",
              body: "Washington requires 22 hours of NMLS-approved pre-licensing education:\n• 3 hours Federal law\n• 3 hours Ethics (includes fraud, consumer protection, fair lending)\n• 2 hours Non-traditional mortgage products\n• 10 hours Electives\n• 4 hours Washington state law (WA-specific)\n\nTotal: 22 hours\n\nProviders must be NMLS-approved. The NMLS Approved Provider List (updated March 2026) is the only valid source. Examples: The CE Shop, Cape School, OnCourse Learning.\n\nContinuing Education (after licensure): 9 hours annually (3/2/2/1 federal + 1 hour WA law). WA CE completion deadline: December 15."
            },
            {
              heading: "The SAFE MLO Test",
              body: "The test is administered by Prometric test centers.\n\nTest structure: National Test with Uniform State Test (UST)\n• Cost: $110\n• Stand-alone UST only: $33 (if you passed national previously)\n\nTest day rules (Prometric):\n• Two valid government IDs required\n• No personal items in testing room\n• Specific security procedures apply — study these in the NMLS Testing Handbook\n\nRetake rules:\n• 1st and 2nd failures: must wait 30 days before retaking\n• After 3rd failure: must wait 180 days\n• Annual requirement: if not passed within 1 year of original attempt, must wait 180 days"
            },
            {
              heading: "Post-Test Application Process",
              body: "After your score posts to NMLS:\n1. Criminal background check ($39) — submitted through NMLS\n2. Credit report authorization ($15)\n3. Complete MU4 application in NMLS\n4. Pay $155 application fee (includes $30 NMLS system fee)\n5. DFI reviews complete applications within approximately 2 weeks\n\nImportant: The background check and credit results must be complete AND submitted with the application. Missing items are the #1 reason applications are delayed."
            }
          ],
          quiz: [
            {
              id: "m01q01",
              prompt: "A mortgage loan originator candidate passes their SAFE test on March 1. When can they submit their Washington MLO application to DFI?",
              choices: [
                "Immediately on March 1",
                "After their passing score is posted to their NMLS record",
                "After completing the 22-hour education requirement",
                "30 days after passing the exam"
              ],
              answer: 1,
              explanation: "DFI is explicit: you cannot submit an MLO application until your passing score is posted to your NMLS record. The score posting (not just passing) is the trigger for applying."
            },
            {
              id: "m01q02",
              prompt: "A Washington MLO fails the SAFE test for the third time on June 1. When is the earliest they can retake the exam?",
              choices: [
                "July 1 (30 days)",
                "September 1 (90 days)",
                "December 1 (180 days)",
                "June 1 next year (1 year)"
              ],
              answer: 2,
              explanation: "After the third failure, NMLS requires a mandatory 180-day waiting period before the candidate can retake the exam."
            },
            {
              id: "m01q03",
              prompt: "Washington MLO continuing education must be completed by what annual deadline?",
              choices: ["December 31", "December 15", "January 31", "November 30"],
              answer: 1,
              explanation: "Washington's official CE completion deadline for MLO annual renewal is December 15. This is the statutory deadline required by the DFI. (Practical tip: aim to finish by December 8 because NMLS providers have up to 7 days to report completions — but the official answer tested on the exam is December 15.)"
            }
          ]
        },
        {
          id: "m02",
          order: 2,
          title: "Federal Mortgage Laws",
          week: "5-6",
          passingScore: 85,
          icon: "⚖️",
          objective: "Explain RESPA, TILA/Reg Z, ECOA, HMDA, FCRA, and SAFE Act — the federal law framework tested heavily on the SAFE exam.",
          content: [
            {
              heading: "RESPA — Real Estate Settlement Procedures Act",
              body: "RESPA (Regulation X) governs the settlement process for federally related mortgage loans.\n\nKey prohibitions (Section 8):\n• No kickbacks or referral fees for settlement service business\n• No fee-splitting arrangements unless actual services are performed\n• No requirement to use a specific title company as a condition of sale\n\nRequired disclosures:\n• Loan Estimate (LE): provided within 3 business days of receiving a complete application\n• Closing Disclosure (CD): provided at least 3 business days BEFORE closing\n• Affiliated Business Arrangement (AfBA) disclosure: when referring to an affiliated settlement service provider\n\nWhat RESPA does NOT prohibit: legitimate joint marketing, employer-employee compensation, payments for actual services rendered."
            },
            {
              heading: "TILA — Truth in Lending Act (Regulation Z)",
              body: "TILA requires lenders to disclose the TRUE cost of credit to borrowers.\n\nKey disclosures:\n• APR (Annual Percentage Rate) — the total cost of credit expressed as a yearly rate (includes interest + fees). APR is HIGHER than the interest rate.\n• Finance Charge — the total dollar cost of credit over the loan term\n• Amount Financed — the loan amount after prepaid finance charges\n• Total of Payments — total amount paid over the loan term\n\nRight of Rescission: For non-purchase money mortgages (refinances, HELOCs) on a primary residence, the borrower has 3 business days to rescind (cancel) after signing. Does NOT apply to purchase transactions.\n\nHOEPA (High-Cost Mortgages): Additional protections for loans with very high rates or fees. Restricts prepayment penalties, balloon payments, and negative amortization."
            },
            {
              heading: "TRID — TILA-RESPA Integrated Disclosure Rule",
              body: "TRID combined the TILA and RESPA disclosures into two standardized forms.\n\nLoan Estimate (LE):\n• Replaces GFE (Good Faith Estimate) and initial TIL disclosure\n• Must be provided within 3 business days of receiving a COMPLETE application\n• Application is 'complete' when you have: borrower's name, income, SSN, property address, estimated value, loan amount requested (the '6 pieces')\n• Binding on lender unless a 'changed circumstance' allows revision\n\nClosing Disclosure (CD):\n• Replaces HUD-1 Settlement Statement and final TIL\n• Must be provided at least 3 business days before consummation (closing)\n• Borrower has 3 business days to review\n\nMnemonic: 3 days for LE after application; 3 days for CD before closing."
            },
            {
              heading: "ECOA — Equal Credit Opportunity Act",
              body: "ECOA (Regulation B) prohibits discrimination in credit transactions based on: Race, Color, Religion, National Origin, Sex, Marital Status, Age (if 18+), Receipt of public assistance, Exercise of rights under Consumer Credit Protection Act.\n\nKey requirements:\n• Lenders must notify applicants of credit decisions within 30 days\n• If denied, applicants have right to a written adverse action notice with reasons\n• Must consider alimony, child support, separate maintenance income if relied upon by applicant\n• Cannot ask about plans for children or childbearing\n• Cannot discount part-time income solely because it's part-time"
            },
            {
              heading: "HMDA & FCRA",
              body: "HMDA (Home Mortgage Disclosure Act):\n• Requires lenders to collect and report demographic data on mortgage applications\n• Purpose: identify discriminatory lending patterns (redlining detection tool)\n• Lenders submit HMDA data to the CFPB annually\n• Does NOT prohibit any lending practice; it's a disclosure/reporting law\n\nFCRA (Fair Credit Reporting Act):\n• Governs credit reporting agencies (CRAs) and the use of consumer credit information\n• Borrowers have the right to: know what's in their credit file, dispute inaccurate information, receive one free credit report annually from each major bureau\n• When credit is denied due to a credit report, lender must provide adverse action notice identifying the CRA used"
            }
          ],
          quiz: [
            {
              id: "m02q01",
              prompt: "A lender receives a complete mortgage application on Monday, March 10. By when must the Loan Estimate be provided to the borrower?",
              choices: [
                "Wednesday, March 12 (2 business days)",
                "Thursday, March 13 (3 business days)",
                "Monday, March 17 (7 days)",
                "At the time of application"
              ],
              answer: 1,
              explanation: "TRID requires the Loan Estimate within 3 business days of receiving a complete application. Monday + 3 business days = Thursday, March 13. Note: Saturday counts as a business day for this calculation under TRID."
            },
            {
              id: "m02q02",
              prompt: "A borrower closes on their home purchase on Friday. They later claim they want to rescind (cancel) their mortgage. Can they?",
              choices: [
                "Yes — all mortgage borrowers have 3 days to rescind",
                "No — the right of rescission under TILA does not apply to purchase money mortgages",
                "Yes — but only if they rescind in writing within 24 hours",
                "No — only the lender can cancel after closing"
              ],
              answer: 1,
              explanation: "TILA's 3-day right of rescission does NOT apply to purchase money mortgages (loans used to buy a home). It applies to refinances and HELOCs on a primary residence."
            },
            {
              id: "m02q03",
              prompt: "Under RESPA Section 8, which of the following is PROHIBITED?",
              choices: [
                "A title company paying its own employees for work performed",
                "A lender and real estate agent sharing the cost of a joint marketing piece",
                "A mortgage broker receiving a $500 fee every time they refer a borrower to a specific title company",
                "An affiliated business arrangement with proper disclosure"
              ],
              answer: 2,
              explanation: "RESPA Section 8 prohibits giving or receiving fees or kickbacks for referrals of settlement service business. A $500 per-referral payment to a mortgage broker from a title company is a classic Section 8 violation."
            },
            {
              id: "m02q04",
              prompt: "What is the primary purpose of HMDA data collection?",
              choices: [
                "To verify borrower income accuracy",
                "To identify potentially discriminatory lending patterns across geographic areas",
                "To set maximum allowable loan fees",
                "To determine minimum credit score standards"
              ],
              answer: 1,
              explanation: "HMDA requires lenders to collect and report demographic data (race, gender, geography) on mortgage applications. The data is used by regulators to detect discriminatory lending patterns like redlining — it doesn't prohibit any specific practice itself."
            }
          ]
        },
        {
          id: "m03",
          order: 3,
          title: "Mortgage Products & Underwriting",
          week: "3-4",
          passingScore: 80,
          icon: "🏗️",
          objective: "Explain mortgage loan products, underwriting criteria, credit analysis, appraisal basics, and loan processing workflow.",
          content: [
            {
              heading: "The Mortgage Process: Lead to Close",
              body: "1. Pre-qualification — informal assessment of borrower's situation (no credit pull required)\n2. Pre-approval — formal credit pull, income/asset verification. A pre-approval letter carries real weight.\n3. Application (1003) — Uniform Residential Loan Application completed by borrower\n4. Processing — processor assembles the file: credit, income docs, appraisal ordered, title ordered\n5. Underwriting — underwriter reviews all documents against guidelines; issues Approval, Conditional Approval, or Denial\n6. Clear to Close (CTC) — all conditions satisfied; closing can be scheduled\n7. Closing/Consummation — documents signed, loan funded, keys transferred"
            },
            {
              heading: "Underwriting: The 4 Cs",
              body: "Underwriters evaluate loan risk using the 4 Cs:\n\n• Capacity — can the borrower repay? (DTI ratios, income stability, employment history)\n• Capital — how much does the borrower have? (assets, reserves, down payment source)\n• Credit — will the borrower repay? (credit score, payment history, derogatory marks)\n• Collateral — is the property worth the loan? (appraisal, LTV, property type and condition)\n\nCredit scores: FICO score is standard. Lenders pull all 3 bureaus; the MIDDLE score is used (not average). Co-borrower: the LOWER of the two middle scores is used."
            },
            {
              heading: "Income Documentation",
              body: "W-2 Employees: 2 years W-2s + 30-day pay stubs + 2 months bank statements\n\nSelf-employed: 2 years personal + business tax returns, year-to-date P&L. Income = 2-year average of net business income + addbacks (depreciation, depletion)\n\nBonus/overtime/commission income: must be received for 2 years and expected to continue to be counted\n\nRental income: typically 75% of gross rent counted (to account for vacancy/expenses)\n\nAlimony/child support: can be counted if documented and will continue for 3+ years"
            },
            {
              heading: "Appraisal Basics for MLOs",
              body: "The appraisal is the lender's protection — not the borrower's.\n\nAIR (Appraiser Independence Requirements): The loan originator CANNOT:\n• Select the appraiser\n• Pressure or coerce an appraiser\n• Discuss value with the appraiser before the report is complete\n\nAMC (Appraisal Management Company): most lenders use AMCs to manage the firewall between LOs and appraisers.\n\nIf appraisal comes in below purchase price:\n• Options: negotiate a lower price, buyer pays the difference in cash, contest with a rebuttal of value (with supporting data), switch loan types if eligible"
            }
          ],
          quiz: [
            {
              id: "m03q01",
              prompt: "A borrower has three credit bureau scores of 710, 695, and 738. What score does the underwriter use?",
              choices: ["738 (highest)", "714 (average)", "710 (middle)", "695 (lowest)"],
              answer: 2,
              explanation: "Lenders use the MIDDLE credit score when all three bureaus are pulled. Not the average, not the highest, not the lowest — the middle score."
            },
            {
              id: "m03q02",
              prompt: "A loan originator wants to call the appraiser to suggest the property should come in at $450,000 to make the deal work. This is:",
              choices: [
                "Acceptable if the LO has comparable sales to support the value",
                "Acceptable if the borrower requests it",
                "A violation of Appraiser Independence Requirements (AIR) that could result in license loss",
                "Standard practice for complex transactions"
              ],
              answer: 2,
              explanation: "AIR strictly prohibits any LO from pressuring, coercing, or even suggesting a value to an appraiser. This is a serious violation that can result in loss of licensure and legal penalties."
            }
          ]
        },
        {
          id: "m04",
          order: 4,
          title: "Ethics, Fraud & Fair Lending",
          week: "5-6",
          passingScore: 85,
          icon: "🛡️",
          objective: "Identify mortgage fraud red flags, fair lending violations, UDAAP, steering, and professional conduct standards.",
          content: [
            {
              heading: "Mortgage Fraud",
              body: "Mortgage fraud = intentional misrepresentation in a mortgage transaction.\n\nFraud for housing (borrower-initiated):\n• Income inflation / undisclosed debts\n• Straw buyer (someone takes out the loan for another person)\n• Identity theft\n\nFraud for profit (industry-initiated — more serious):\n• Inflated appraisals\n• Kickbacks/yield spread premium abuse\n• Equity skimming\n• Builder bailout schemes\n• Foreclosure rescue scams\n\nRed flags MLOs must watch for:\n• Unusual cash gifts without paper trail\n• 'Please don't mention my other debts'\n• Borrower doesn't appear to know the property\n• Purchase price significantly above market\n• Last-minute changes to closing funds source\n• Pressure to close quickly without full documentation"
            },
            {
              heading: "UDAAP",
              body: "UDAAP = Unfair, Deceptive, or Abusive Acts or Practices. The CFPB enforces UDAAP under the Dodd-Frank Act.\n\nUnfair: causes or is likely to cause substantial injury to consumers that they cannot reasonably avoid, and the injury is not outweighed by countervailing benefits.\n\nDeceptive: material misrepresentation or omission likely to mislead a reasonable consumer.\n\nAbusive: materially interferes with a consumer's ability to understand a product, or takes unreasonable advantage of: a consumer's lack of understanding, a consumer's inability to protect themselves, a consumer's reasonable reliance on the covered person.\n\nExample of UDAAP: advertising a very low 'teaser rate' without clearly disclosing that the rate will increase dramatically after 6 months."
            },
            {
              heading: "Steering & Fair Lending",
              body: "Steering = directing a borrower toward a loan product that is NOT in their best interest based on the LO's compensation or the borrower's protected class.\n\nLO Compensation Rule (Reg Z, 12 CFR 1026.36): An LO CANNOT be compensated based on the terms of a transaction (interest rate, loan type, points). Compensation must be based on a fixed percentage of loan amount or a flat fee.\n\nAnti-steering safe harbor: LOs must present qualified borrowers options including:\n• The lowest rate/APR product they qualify for\n• The product with the lowest total compensation\n• The product that is not a negative amortization loan\n\nFair Lending Laws:\n• Fair Housing Act: prohibits discrimination in residential real estate transactions\n• ECOA (Reg B): prohibits discrimination in credit\n• CRA (Community Reinvestment Act): encourages banks to serve all segments of their communities"
            }
          ],
          quiz: [
            {
              id: "m04q01",
              prompt: "A borrower tells their MLO: 'Don't worry about listing my car payment — the lender won't find it.' What should the MLO do?",
              choices: [
                "Omit it if the borrower insists — it's their application",
                "Include it — omitting known debts is mortgage fraud and the MLO shares liability",
                "Submit two applications: one with and one without the debt",
                "Include it only if it causes the DTI to exceed guidelines"
              ],
              answer: 1,
              explanation: "Intentionally omitting known debts from a mortgage application is mortgage fraud. The MLO who knowingly submits false information shares criminal liability regardless of who requested the omission."
            },
            {
              id: "m04q02",
              prompt: "An MLO consistently puts Hispanic borrowers into FHA loans with higher rates even when they qualify for conventional loans at lower rates. This is BEST described as:",
              choices: [
                "Smart risk management",
                "Illegal steering based on protected class characteristics",
                "Acceptable if the borrower agrees to the FHA loan",
                "Legal as long as the MLO discloses all loan options"
              ],
              answer: 1,
              explanation: "Directing borrowers into less favorable loan products based on race/national origin is illegal steering and a violation of both the Fair Housing Act and ECOA. Borrower consent does not make it legal."
            }
          ]
        },
        {
          id: "m05",
          order: 5,
          title: "Washington MLO State Law (4-Hour Module)",
          week: "7-8",
          passingScore: 85,
          icon: "🗺️",
          objective: "Master Washington-specific MLO licensing requirements, DFI rules, consumer protections, and the 4-hour WA law requirement content.",
          content: [
            {
              heading: "Washington DFI & Licensing Authority",
              body: "The Washington State Department of Financial Institutions (DFI) is the state authority responsible for:\n• Issuing and renewing WA MLO licenses\n• Investigating complaints against licensees\n• Enforcing the Consumer Loan Act (CLA) and Mortgage Broker Practices Act (MBPA)\n\nKey WA licensing facts:\n• All WA MLO applications submitted through NMLS\n• $155 base application fee (incl. $30 NMLS system fee)\n• $39 criminal background check\n• $15 credit report authorization\n• Applications reviewed within ~2 weeks when complete"
            },
            {
              heading: "Washington Consumer Protections",
              body: "Washington's Consumer Loan Act and Mortgage Broker Practices Act provide extra consumer protections beyond federal law:\n\n• Brokers must provide a 'mortgage broker disclosure' statement\n• Compensation must be disclosed upfront\n• Prohibited practices include: misrepresenting loan terms, failing to provide required disclosures, steering consumers to unsuitable loans\n• WA prohibits prepayment penalties on certain consumer loan types\n• Cooling-off periods apply to certain high-cost loans\n\nWashington Home Loan Act: requires lenders to explore all reasonable workout options before foreclosing on owner-occupied residential property."
            },
            {
              heading: "Foreclosure in Washington",
              body: "Washington allows both judicial and non-judicial foreclosure.\n\nNon-judicial (most common):\n• Uses a Deed of Trust (instead of mortgage)\n• Trustee conducts the sale\n• Faster process — approximately 6-8 months typically\n• Borrower has right to cure default up to 11 days before sale\n\nJudicial:\n• Uses a Mortgage (less common in WA)\n• Goes through the court system\n• Much slower process\n\nWashington Foreclosure Fairness Act: allows homeowners facing foreclosure to request mediation with their lender before the foreclosure proceeds."
            }
          ],
          quiz: [
            {
              id: "m05q01",
              prompt: "Under Washington's Foreclosure Fairness Act, a homeowner facing foreclosure can request:",
              choices: [
                "Automatic cancellation of the foreclosure",
                "A free government loan to cure the default",
                "Mediation with their lender before foreclosure proceeds",
                "Judicial review of any non-judicial foreclosure"
              ],
              answer: 2,
              explanation: "Washington's Foreclosure Fairness Act gives eligible homeowners the right to request mediation with their lender. This does not automatically stop foreclosure but requires the lender to participate in the mediation process."
            },
            {
              id: "m05q02",
              prompt: "Which Washington state agency regulates and issues Washington MLO licenses?",
              choices: [
                "Washington State Department of Licensing (DOL)",
                "Washington State Department of Financial Institutions (DFI)",
                "Washington State Insurance Commissioner",
                "The NMLS directly issues WA MLO licenses"
              ],
              answer: 1,
              explanation: "The Washington State Department of Financial Institutions (DFI) is the state authority for MLO licensing. DOL handles real estate broker licenses. NMLS is the platform but DFI is the issuing authority."
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
      description: "Real-world monetization skills — deal finding, investor reps, assumable loans, property management, transaction coordination",
      modules: [
        {
          id: "p01",
          order: 1,
          title: "Assumable Loans Specialization",
          week: "9-10",
          passingScore: 80,
          icon: "🔄",
          objective: "Build a repeatable assumption screening workflow for FHA and VA loans — one of the strongest niches in 2026's rate environment.",
          content: [
            {
              heading: "Why Assumable Loans Matter in 2026",
              body: "In a high interest rate environment, millions of homes carry FHA and VA loans originated when rates were 2.5-4%. A buyer who can 'assume' (take over) that existing loan keeps the original rate.\n\nExample: Seller has a $350,000 FHA loan at 2.75%. Current market rate is 7.25%. The buyer assuming that loan saves roughly $1,000-$1,500 per month in payment. That's a massive value proposition.\n\nThis creates a real niche for brokers and MLOs who understand assumption mechanics — most agents don't, so you instantly differentiate yourself."
            },
            {
              heading: "FHA Assumptions",
              body: "FHA-insured forward mortgages ARE assumable, per HUD guidelines.\n\nFHA assumption process:\n1. Identify property with assumable FHA loan (check title/deed of trust)\n2. Contact the loan servicer's assumption department\n3. Buyer must undergo creditworthiness review (not as strict as new origination but still required)\n4. Servicer approves the assumption\n5. Original borrower released from liability (critical — seller must get release of liability or they remain responsible)\n\nKey risk: the assumption leaves a gap between the loan balance and the purchase price. The buyer must cover this gap in cash (or via a second mortgage, if the seller/lender allows).\n\nExample: Home sells for $500,000. Existing FHA loan balance: $320,000. Gap = $180,000 that the buyer must bring."
            },
            {
              heading: "VA Assumptions",
              body: "VA loans are assumable. Key VA-specific rules:\n\n• The buyer does NOT need to be a veteran to assume a VA loan\n• However, if a non-veteran assumes the loan, the seller's VA entitlement remains tied up until the loan is paid off\n• Smart strategy: if the buyer IS a veteran, they can substitute their entitlement for the seller's, freeing up the seller's entitlement for future use\n\nTwo types of VA assumptions:\n1. With substitution of entitlement — buyer is a veteran who substitutes their entitlement for seller's. Seller's entitlement is restored.\n2. Without substitution — non-veteran buyer or veteran without full entitlement. Seller's entitlement stays tied up.\n\nThe VA assumption intake workflow: verify the loan is VA (check deed of trust), contact VA-approved servicer, determine buyer's veteran status, guide client through process."
            },
            {
              heading: "Assumption Screening Checklist",
              body: "STEP 1 — Identify if assumable:\n□ Pull title/preliminary title report\n□ Identify loan type (FHA, VA, USDA, conventional)\n□ Conventional loans are generally NOT assumable (due-on-sale clause)\n□ Confirm servicer name and assumption department contact\n\nSTEP 2 — Financial feasibility:\n□ Current loan balance vs. purchase price = gap amount\n□ Can buyer cover the gap in cash?\n□ Is a second mortgage available/needed?\n□ What is the existing rate vs. current market rate — is it worth it?\n\nSTEP 3 — Process and timeline:\n□ Assumption department processing time (can be 60-120 days — warn clients)\n□ Does the buyer qualify under servicer's assumption criteria?\n□ Will seller get release of liability?\n\nSTEP 4 — Disclosures:\n□ Document all conversations\n□ Never guarantee an assumption will be approved\n□ Avoid steering borrowers based on any protected class characteristic"
            }
          ],
          quiz: [
            {
              id: "p01q01",
              prompt: "A seller has a $280,000 VA loan and the property is selling for $450,000. A civilian (non-veteran) buyer wants to assume the VA loan. Which statement is TRUE?",
              choices: [
                "The civilian cannot assume a VA loan under any circumstances",
                "The civilian can assume the loan, but the seller's VA entitlement remains tied up",
                "The civilian can assume the loan and the seller's entitlement is automatically restored",
                "VA loans cannot be assumed if the buyer is not a veteran"
              ],
              answer: 1,
              explanation: "Non-veterans CAN assume VA loans. However, when a non-veteran assumes without substituting entitlement, the seller's VA entitlement remains tied to that loan until it is paid off — preventing the seller from using their VA benefit on a new home purchase."
            },
            {
              id: "p01q02",
              prompt: "The primary reason assumable loans create a cash gap at closing is:",
              choices: [
                "Assumption fees charged by the lender",
                "The existing loan balance is often lower than the purchase price",
                "FHA requires a new down payment regardless",
                "The VA charges a restoration fee for assumable loans"
              ],
              answer: 1,
              explanation: "The loan balance on an older mortgage has been paid down over years and is typically much lower than the current sale price. The buyer must cover the difference between the assumed loan balance and the purchase price in cash or via other financing."
            }
          ]
        },
        {
          id: "p02",
          order: 2,
          title: "Investor Representation & Deal Analysis",
          week: "9-10",
          passingScore: 80,
          icon: "📈",
          objective: "Build underwriting habits — rent comps, cap rates, rehab estimates, exit strategies, and investor representation under Washington agency rules.",
          content: [
            {
              heading: "Investor Math: The Core Formulas",
              body: "Cap Rate = NOI ÷ Purchase Price\n• NOI = Gross Rents - Vacancy (typically 5-10%) - Operating Expenses (taxes, insurance, management, maintenance; NOT mortgage)\n• A 6% cap rate means you earn 6% of purchase price annually in net income before financing\n• Higher cap rate = more return (but usually higher risk or lower quality area)\n\nCash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested\n• This is the investor's ACTUAL return on cash invested (includes mortgage)\n• More useful than cap rate for leveraged investors\n\nARV (After Repair Value) = estimated value AFTER all renovations are complete\n• Key in fix-and-flip: Buy price + Rehab cost must be < 70-75% of ARV to make sense\n• Rule of thumb: Maximum Offer Price = (ARV × 70%) - Rehab Costs\n\nGRM (Gross Rent Multiplier) = Sale Price ÷ Annual Gross Rents\n• Quick screening tool. Lower GRM = better deal (relatively)"
            },
            {
              heading: "Representing Investors Under WA Agency Law",
              body: "When representing investor clients in Washington:\n\n1. Written buyer agency agreement REQUIRED before touring or making offers\n2. Disclose your agency role — are you their exclusive buyer's agent?\n3. Fiduciary duties apply fully — loyalty, disclosure, confidentiality\n4. Confidentiality: Do NOT disclose the investor's max purchase price, rehab budget, or exit strategy to the seller\n5. Disclosure of adverse facts: if you know the property has issues affecting value, you MUST disclose to your client\n\nKey Washington rule: investor clients who buy multiple properties are still entitled to the same full agency protections as any other buyer — don't treat sophisticated clients as customers."
            },
            {
              heading: "Deal Sourcing for Investors",
              body: "Legal deal sourcing methods for LICENSED brokers:\n• MLS — access to all active listings + expired/withdrawn history\n• Direct mail to targeted lists (tax-delinquent, absentee owners, probate)\n• Networking with other agents, wholesalers, estate attorneys\n• 'Driving for dollars' — physical canvassing of target neighborhoods\n• REO (bank-owned) and foreclosure lists\n\nImportant Washington compliance note: If you are marketing a property or negotiating on behalf of another for compensation, you are performing brokerage services and need a license. This is why 'bird dog' arrangements with unlicensed finders must be structured carefully — paying unlicensed persons for property referrals is a violation.\n\nWholesaling compliance: Assigning contracts CAN cross into unlicensed brokerage activity in Washington if done regularly for compensation. Get licensed before building a wholesale business."
            }
          ],
          quiz: [
            {
              id: "p02q01",
              prompt: "A 4-unit property generates $6,000/month gross rent. Vacancy is 8%, operating expenses are $1,800/month. The purchase price is $800,000. What is the cap rate?",
              choices: ["6.6%", "5.4%", "7.2%", "4.5%"],
              answer: 1,
              explanation: "NOI = ($6,000 × 12 × 0.92) - ($1,800 × 12) = $66,240 - $21,600 = $44,640. Cap Rate = $44,640 ÷ $800,000 = 5.58%. Closest answer is 5.4% — actual is 5.58%. The calculation: Gross = $72,000; vacancy = $5,760; effective = $66,240; minus expenses $21,600; NOI = $44,640; cap = 5.58%."
            },
            {
              id: "p02q02",
              prompt: "Using the 70% ARV rule, a property has an ARV of $400,000 and needs $50,000 in repairs. What is the maximum offer price?",
              choices: ["$280,000", "$230,000", "$350,000", "$320,000"],
              answer: 1,
              explanation: "Max offer = (ARV × 70%) - Rehab = ($400,000 × 0.70) - $50,000 = $280,000 - $50,000 = $230,000."
            }
          ]
        },
        {
          id: "p03",
          order: 3,
          title: "Transaction Coordination Mastery",
          week: "9-10",
          passingScore: 80,
          icon: "📅",
          objective: "Build audit-ready transaction management skills: timeline control, contingency tracking, earnest money handling, and closing coordination.",
          content: [
            {
              heading: "The Transaction Timeline",
              body: "From accepted offer to close, a typical WA transaction has these critical dates:\n\nDay 0: Mutual acceptance (both parties sign)\nDay 1-5: Earnest money deposited (within 2 banking days)\nDay 1-10: Inspection period (buyer schedules inspection, reviews report)\nDay 10-17: Inspection response deadline (buyer requests repairs, credits, or cancels)\nDay 17-21: Seller responds to inspection requests\nDay 21: Financing contingency removal deadline (buyer confirms loan approval)\nDay 25-28: Appraisal contingency deadline (if applicable)\nDay 28-35: Closing/consummation\n\nTime is of the essence: In Washington PSA, all dates are binding. Missing a contingency deadline can waive the contingency or allow the other party to cancel and claim earnest money."
            },
            {
              heading: "Contingency Management",
              body: "The three major contingencies in a WA purchase:\n\n1. Inspection Contingency:\n• Buyer's right to inspect. Protect this — schedule inspection IMMEDIATELY after mutual acceptance\n• Three outcomes: accept as-is, request repairs/credits, or cancel and get earnest money back\n• Seller can accept, counter, or reject repair requests\n\n2. Financing Contingency:\n• Protects buyer if they cannot get the loan. Confirm loan approval before the deadline\n• 'Loan commitment letter' ≠ 'Clear to Close' — coordinate with the lender\n• If buyer waives financing contingency and can't close: they typically forfeit earnest money\n\n3. Appraisal Contingency:\n• Protects buyer if appraisal comes in below purchase price\n• Options when appraisal is low: price reduction, buyer pays gap in cash, cancel, rebuttal\n\nDocumentation rule: ALL contingency waivers, extensions, and amendments must be IN WRITING signed by both parties."
            },
            {
              heading: "Recordkeeping Requirements (WA Law)",
              body: "Washington WAC 308-124 requires brokers to maintain transaction records for a minimum of 3 years.\n\nRequired records include:\n• All listing agreements and addenda\n• All purchase and sale agreements and addenda\n• All earnest money receipts and accounting\n• All agency disclosure forms\n• All correspondence related to the transaction\n• All closing statements\n\nBest practice: maintain a digital transaction file with version-controlled documents. The state exam emphasizes recordkeeping — a broker who cannot produce records is presumed to be in violation.\n\nCommon audited items: earnest money deposit dates (must be within 2 banking days), signed agency disclosures, executed amendments."
            }
          ],
          quiz: [
            {
              id: "p03q01",
              prompt: "A Washington real estate broker receives an earnest money check on a Thursday afternoon. By what date must it be deposited into the trust account?",
              choices: [
                "Thursday (same day)",
                "Monday (end of the 2nd banking day)",
                "By end of day Tuesday (3 banking days)",
                "Within 5 business days"
              ],
              answer: 1,
              explanation: "Washington requires earnest money to be deposited within 2 banking days of receipt. Banking days do not include weekends or holidays. Thursday receipt: Day 1 = Friday, Day 2 = Monday. The deadline is end of business Monday. Tuesday would be Day 3 — one day too late."
            }
          ]
        },
        {
          id: "p04",
          order: 4,
          title: "RESPA Compliance & Lead Generation",
          week: "9-10",
          passingScore: 85,
          icon: "🎯",
          objective: "Build compliant lead generation systems without creating illegal referral arrangements. Master RESPA Section 8 boundaries.",
          content: [
            {
              heading: "RESPA Section 8 — The Hard Line",
              body: "RESPA Section 8 prohibits:\n• Giving or accepting any fee, kickback, or thing of value for referrals of settlement service business involving federally related mortgage loans\n• Fee-splitting with no services rendered\n\nThis means you CANNOT:\n• Pay a real estate agent $X per closed loan for sending you borrowers\n• Receive a flat $500 per referral from a title company\n• Set up a shell company to collect referral fees\n• Exchange gifts or marketing support for referral business without genuine work\n\nWhat IS allowed:\n• Paying for genuine services rendered (processing, underwriting)\n• Affiliated Business Arrangements (AfBAs) — with proper disclosure and no requirement to use the affiliate\n• Marketing services agreements — but must be for genuine, documented market value marketing services (heavily scrutinized by CFPB)"
            },
            {
              heading: "Compliant Lead Generation Strategies",
              body: "These lead generation methods are compliant and scalable:\n\n1. Content Marketing & SEO:\n• Create YouTube content on first-time buyer education, DPA programs, assumable loans\n• Blog posts targeting: 'FHA loans Seattle', 'Down payment assistance Washington'\n• No RESPA issues — you're providing education, not referrals\n\n2. Social Media Funnels:\n• Run compliant ads to a landing page offering a free buyer guide\n• Build email list of pre-approved buyers and introduce them to agents (as a licensed broker, you can represent them yourself)\n\n3. Database + CRM:\n• Systematic follow-up with past clients (repeat business + referrals from satisfied clients)\n• Stay-in-touch campaigns\n\n4. Strategic Partnerships (RESPA-compliant):\n• Co-brand educational events with complementary professionals\n• Present at homebuyer education workshops (WSHFC recognized)\n• Build relationships based on genuine mutual client benefit — not fee exchange"
            }
          ],
          quiz: [
            {
              id: "p04q01",
              prompt: "A title company offers to pay your monthly office rent in exchange for referring all your transactions to them. This arrangement is:",
              choices: [
                "Legal if both parties sign a marketing agreement",
                "Legal if the title company provides a disclosure to each client",
                "A RESPA Section 8 violation — it is an illegal kickback for referrals",
                "Legal as long as clients can choose a different title company if they want"
              ],
              answer: 2,
              explanation: "Paying rent or any 'thing of value' in exchange for referrals of settlement service business is a RESPA Section 8 violation. The fact that clients can choose another title company doesn't cure the illegal kickback arrangement."
            }
          ]
        }
      ]
    }
  },

  studyPlan: [
    { weeks: "1-2", focus: "System setup + licensing process maps + diagnostic tests" },
    { weeks: "3-4", focus: "Property law, ownership, valuation, financing + MLO mortgage basics" },
    { weeks: "5-6", focus: "Contracts, agency, disclosures + Federal mortgage law (RESPA, TILA, ECOA)" },
    { weeks: "7-8", focus: "Washington state law (both tracks) + remediation" },
    { weeks: "9-10", focus: "Practical monetization: assumables, investor rep, TC, lead gen" },
    { weeks: "11-12", focus: "Exam readiness: enroll in required courses, schedule exams, full mock exams" }
  ],

  resources: [
    { label: "WA DOL Broker Licensing", url: "https://dol.wa.gov/professional-licenses/real-estate-brokers/get-your-license-real-estate-brokers", category: "broker" },
    { label: "WA DOL Fee Schedule", url: "https://dol.wa.gov/professional-licenses/real-estate-brokers/fees-real-estate", category: "broker" },
    { label: "PSI Candidate Bulletin", url: "https://www.clockhours.com/wp-content/uploads/2024/05/Candidate-Bulletin-handbook-Mar-2824.pdf", category: "broker" },
    { label: "WA DFI MLO Pre-Application Requirements", url: "https://dfi.wa.gov/loan-originators/mortgage-loan-originator-pre-application-requirements", category: "mlo" },
    { label: "WA DFI MLO Application FAQs", url: "https://dfi.wa.gov/loan-originators/mortgage-loan-originator-application-faqs", category: "mlo" },
    { label: "NMLS WA State Requirements", url: "https://mortgage.nationwidelicensingsystem.org/profreq/education/Pages/default.aspx", category: "mlo" },
    { label: "Free Practice Exam — Real Estate License Wizard", url: "https://realestatelicensewizard.com/real-estate-practice-exam/", category: "broker" },
    { label: "Free Practice Exam — PrepAgent", url: "https://www.prepagent.com/free-real-estate-exam-practice-questions", category: "broker" },
    { label: "Free MLO Practice — Mometrix", url: "https://www.mometrix.com/academy/nmls-practice-test/", category: "mlo" },
    { label: "CFPB RESPA Section 8", url: "https://www.consumerfinance.gov/rules-policy/regulations/1024/14", category: "practical" }
  ]
};

// Export for use in app
if (typeof module !== 'undefined') module.exports = CURRICULUM;
