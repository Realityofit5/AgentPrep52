// ============================================================
// AZ_curriculum.js — Arizona Real Estate Study System
// Arizona ADRE Salesperson + MLO Licensing — 2026
// Sources: AZ ADRE (azre.gov), AAR Forms, ARS Title 32,
//          Arizona Residential Landlord & Tenant Act, NMLS
// Schema: identical to WA/CA curriculum.js — drop-in replacement
// ============================================================

const CURRICULUM_AZ = {

  meta: {
    title: "AZ Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Arizona",
    stateCode: "AZ",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 75, mlo: 75, federal_law: 75, ethics: 75 }
  },

  tracks: {

    // ──────────────────────────────────────────────────────
    // BROKER TRACK — AZ ADRE SALESPERSON LICENSE
    // ──────────────────────────────────────────────────────
    broker: {
      id: "broker",
      label: "AZ Real Estate Salesperson",
      icon: "🏠",
      color: "#C9A84C",
      description: "Arizona ADRE Salesperson License — 90-hour in-person education + PSI exam prep",
      requirements: [
        "18+ years old",
        "Legal presence in the U.S. (citizen or authorized alien)",
        "90 hours of pre-license education from an ADRE-approved school — IN PERSON ONLY (online not accepted for pre-license)",
        "Pass the school's own exam with 75%",
        "Obtain a Fingerprint Clearance Card from Arizona Dept. of Public Safety (allow 8–10 weeks)",
        "Pass the PSI licensing exam: national + state sections",
        "Submit Disciplinary Actions Disclosure Form with application",
        "Must be sponsored by a licensed Arizona Broker to activate license",
        "Pay license fee: $110 + $10 Real Estate Recovery Fund = $120 total"
      ],
      fees: [
        { item: "School exam fee",              amount: "$75",    source: "ADRE-approved school" },
        { item: "Fingerprint Clearance Card",   amount: "~$67",   source: "AZ Dept. of Public Safety" },
        { item: "PSI licensing exam fee",       amount: "~$75",   source: "PSI Exams" },
        { item: "ADRE salesperson license fee", amount: "$110",   source: "ADRE" },
        { item: "Real Estate Recovery Fund",    amount: "$10",    source: "ADRE" },
        { item: "90-hour pre-license school",   amount: "$300–$700", note: "varies by provider" }
      ],
      examStructure: {
        national: { items: 80,  time: "150 minutes", passing: 75 },
        state:    { items: 60,  time: "90 minutes",  passing: 75,
                    note: "PSI administers both sections; must pass each section separately" }
      },
      modules: [

        // ── MODULE 1 ─────────────────────────────────────
        {
          id: "az_b01",
          order: 1,
          title: "Licensing Process & ADRE Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map the complete Arizona ADRE salesperson licensing process: 90-hour in-person school → school exam → Fingerprint Clearance Card → PSI exam → activation.",
          content: [
            {
              heading: "Who Regulates Arizona Real Estate",
              body: "The Arizona Department of Real Estate (ADRE) licenses and regulates all real estate brokers, salespersons, and property managers in Arizona. The Commissioner of Real Estate heads ADRE and is appointed by the Governor.\n\nGoverning statutes:\n• ARS Title 32, Chapter 20 — Real Estate Brokers and Salespersons\n• ADRE Administrative Rules (AAC Title 4, Chapter 28)\n\nADRE licenses three categories of licensees:\n1. Salesperson — entry-level; must work under a licensed broker\n2. Broker — requires 3 years active experience as a licensed agent in the last 5 years + 90 additional hours of education\n3. Property Manager — separate license pathway for residential property management"
            },
            {
              heading: "The 90-Hour Pre-License School Requirement",
              body: "Arizona requires 90 hours of pre-license education from an ADRE-approved school. CRITICAL RULE: the school must be attended IN PERSON (or synchronous live online as of recent ADRE guidance) — self-paced online courses are NOT accepted for pre-license education in Arizona.\n\nWhat the 90 hours cover:\n• Real estate principles and concepts\n• Arizona-specific real estate law (ARS Title 32)\n• Agency, contracts, finance, valuation\n• Property management basics\n• Fair housing, ethics, disclosures\n\nThe school administers its own final exam. You must pass the school exam with 75% before you can apply for the state PSI exam. School exam results are typically submitted electronically to ADRE.\n\nBroker upgrade: 90 additional hours of education + 3 years active experience as a licensed agent in the last 5 years."
            },
            {
              heading: "Fingerprint Clearance Card — Plan Ahead",
              body: "Arizona's most unique licensing requirement: you must obtain a Fingerprint Clearance Card (FCC) from the Arizona Department of Public Safety (DPS) before your license can be issued.\n\nKey facts:\n• Apply for the FCC early — it can take 8 to 10 weeks to process\n• Apply online at azidentity.com or via paper form at a DPS-approved fingerprint vendor\n• Cost is approximately $67\n• The FCC is issued by DPS, not ADRE\n• If you have a felony conviction or a crime involving moral turpitude, dishonesty, or breach of fiduciary duty, your FCC may be denied and you may be ineligible for a real estate license\n• You can request a pre-clearance fitness determination from ADRE before investing in your education\n\nSTRATEGY: Apply for your FCC on day one of your pre-license school. Do not wait until you finish the course — the 8–10 week processing time runs in parallel with your education."
            },
            {
              heading: "PSI Licensing Exam & Application",
              body: "After passing the school exam, you apply to take the PSI licensing exam at PSIexams.com.\n\nExam structure:\n• National section: 80 questions, 150 minutes, 75% to pass\n• State (Arizona) section: 60 questions, 90 minutes, 75% to pass\n• You must pass BOTH sections (can take on same day or separately)\n• Results provided immediately at the test center\n• Retakes: if you fail either section, you may retake only the failed section; no waiting period\n\nAfter passing PSI:\n1. Submit license application to ADRE at azre.gov\n2. Include Disciplinary Actions Disclosure Form (list any criminal history, license actions in other states)\n3. Attach proof of school completion\n4. Attach Fingerprint Clearance Card\n5. Pay $120 total license fee ($110 + $10 Recovery Fund)\n6. Get your broker's signature on the form (sponsoring broker must sign)\n\nLicense is issued for 2 years. First renewal requires 24 hours of CE."
            },
            {
              heading: "Disciplinary Actions Disclosure & Character",
              body: "Arizona requires a Disciplinary Actions Disclosure Form with every license application. You must disclose:\n• Any criminal conviction (including expunged or pardoned offenses)\n• Any professional license action in any state (suspension, revocation, denial)\n• Any civil judgments involving fraud, misrepresentation, or breach of fiduciary duty\n\nADRE reviews each disclosure case-by-case. Automatic disqualifiers:\n• Felony conviction within 5 years (some felonies are permanent bars)\n• Crime of moral turpitude (fraud, theft, embezzlement, etc.)\n• Prior real estate license revocation in Arizona\n\nIf you have history to disclose, you may request an Advisory Opinion from ADRE before spending money on education. This is a formal letter stating whether your history is likely to disqualify you — it is not binding but gives you guidance.\n\nReal Estate Recovery Fund: the $10 fee funds a state fund that compensates consumers who win judgments against Arizona licensees and cannot collect. If a licensee's license is used to satisfy a Recovery Fund claim, that license is automatically suspended until the fund is repaid with interest."
            }
          ],
          quiz: [
            {
              id: "az_b01q01",
              prompt: "What is the MOST important scheduling tip for Arizona pre-license students regarding the Fingerprint Clearance Card?",
              choices: [
                "Apply for it after passing the PSI exam, since you need your exam results first",
                "Apply for it on day one of school — it takes 8–10 weeks and runs parallel to your coursework",
                "Apply after ADRE approves your license application",
                "The FCC is only required for broker applicants, not salespersons"
              ],
              answer: 1,
              explanation: "The Arizona Fingerprint Clearance Card can take 8–10 weeks to process through the AZ Dept. of Public Safety. The smartest strategy is to apply immediately when you start school so the processing runs in parallel with your coursework. Waiting until after the PSI exam adds weeks to your timeline for no reason."
            },
            {
              id: "az_b01q02",
              prompt: "Arizona pre-license education must be completed:",
              choices: [
                "Online — self-paced courses are preferred by ADRE",
                "In person or synchronous live online at an ADRE-approved school",
                "Through any accredited college or university",
                "Online OR in-person; the student chooses"
              ],
              answer: 1,
              explanation: "Arizona does NOT accept self-paced online courses for pre-license education. The 90 hours must be completed in person (or synchronous live online) at an ADRE-approved school. This is one of Arizona's most distinctive licensing requirements."
            },
            {
              id: "az_b01q03",
              prompt: "What is the total ADRE license fee for a new Arizona salesperson?",
              choices: ["$75", "$110", "$120", "$245"],
              answer: 2,
              explanation: "The ADRE salesperson license fee is $110 for the license + $10 mandatory Real Estate Recovery Fund contribution = $120 total. The $75 is the school exam fee paid separately to the approved school."
            },
            {
              id: "az_b01q04",
              prompt: "A new Arizona salesperson applicant has a 7-year-old fraud conviction. The BEST first step is to:",
              choices: [
                "Enroll in the 90-hour school immediately and figure out the conviction later",
                "Request an Advisory Opinion from ADRE before investing in education",
                "Apply for the PSI exam first — ADRE only reviews convictions during renewal",
                "The conviction automatically bars them; no further steps are possible"
              ],
              answer: 1,
              explanation: "ADRE offers Advisory Opinions that allow applicants with prior criminal history to request a preliminary determination of whether their history is likely to disqualify them — before spending money on the 90-hour school. While not legally binding, it provides critical guidance."
            },
            {
              id: "az_b01q05",
              prompt: "On the Arizona PSI licensing exam, which statement is correct?",
              choices: [
                "There is one combined exam; you pass or fail the whole thing",
                "There are national and state sections; you must pass both with 75%",
                "The passing score is 70% on both sections",
                "You must pass the national section before scheduling the state section on a separate day"
              ],
              answer: 1,
              explanation: "The Arizona PSI licensing exam has two separate sections — national (80 questions, 75% to pass) and state (60 questions, 75% to pass). You must pass BOTH sections. If you fail one, you retake only the failed section. Both can be taken on the same day."
            }
          ]
        },

        // ── MODULE 2 ─────────────────────────────────────
        {
          id: "az_b02",
          order: 2,
          title: "Property Ownership & Legal Descriptions",
          week: "1-2",
          passingScore: 75,
          icon: "🏛️",
          objective: "Identify estates, concurrent ownership forms, encumbrances, and legal description systems including Arizona community property rules.",
          content: [
            {
              heading: "Real vs. Personal Property",
              body: "Real property = land + permanently attached improvements (buildings, fixtures). Personal property (chattel) = movable items.\n\nFixture test in Arizona (MARIA):\n• Method of annexation — how firmly is the item attached?\n• Adaptability to the property's use — was it installed for use with this specific property?\n• Relationship of the parties — buyer vs. seller disputes apply different standards than landlord vs. tenant\n• Intention of the annexor — did they intend it to be permanent?\n• Agreement of the parties — what does the contract say?\n\nArizona exam tip: always address fixtures in writing in the purchase contract. A custom built-in bookcase or chandelier can cause disputes if not specified."
            },
            {
              heading: "Arizona Community Property",
              body: "Arizona is a COMMUNITY PROPERTY state (ARS § 25-211). This is heavily tested on the Arizona exam.\n\nCommunity property: all property acquired by either spouse DURING the marriage through the labor or effort of either spouse. Each spouse owns an equal, undivided one-half interest.\n\nSeparate property: property owned before marriage, or received as a gift or inheritance during marriage, kept separate.\n\nKey Arizona rules:\n• BOTH spouses must sign to sell or encumber community property real estate — even if only one spouse's name is on the deed\n• A deed signed by only one spouse for community property is VOIDABLE\n• Domestic partners in Arizona do NOT automatically receive community property rights (unlike CA)\n• Registered domestic partners in AZ: check current statute — rights differ from married couples\n\nCommon exam trap: a husband purchases property during marriage with his own paycheck. This is community property even if only his name is on the deed, because wages earned during marriage are community property in Arizona."
            },
            {
              heading: "Concurrent Ownership Forms",
              body: "Joint Tenancy — requires Four Unities (TTIP): Time, Title, Interest, Possession. Includes right of survivorship — on death, the surviving owner inherits automatically, bypassing probate. Must be expressly stated in the deed ('as joint tenants with right of survivorship').\n\nTenancy in Common — default for unmarried co-owners. Unequal shares allowed. No survivorship right. Each owner can independently sell, will, or mortgage their share.\n\nCommunity Property — for married couples; each spouse owns an undivided one-half. BOTH must sign to convey.\n\nCommunity Property with Right of Survivorship — Arizona recognizes this form (ARS § 33-431). Combines community property tax benefits with survivorship rights. Must be expressly stated in the deed.\n\nSole and Separate Property — property held by one spouse as their individual separate property. Usually requires both spouses to sign a deed disclaiming community interest (a Disclaimer Deed) to make it clear."
            },
            {
              heading: "Encumbrances",
              body: "An encumbrance is any claim, lien, charge, or liability attached to real property that affects its value or use but does not prevent transfer.\n\nTypes of encumbrances:\n• Liens — monetary claims against property:\n  - Mortgage/Deed of Trust (voluntary, specific)\n  - Property tax lien (involuntary, specific — FIRST priority in AZ)\n  - Mechanic's lien (involuntary; relates back to first day of work)\n  - Judgment lien (involuntary, general — attaches to all real property in the county)\n• Easements — right to use another's land:\n  - Easement appurtenant: benefits a dominant estate, runs with the land\n  - Easement in gross: benefits a person/entity (utility lines), no dominant estate\n  - Prescriptive easement: open, notorious, hostile, continuous use for 10 years in AZ\n• Deed Restrictions / CC&Rs — private limitations on use\n• Encroachments — physical intrusion onto adjacent property\n\nArizona mechanic's lien: must be filed within 120 days of completion of work (ARS § 33-993). Priority relates back to when work began, NOT when the lien was recorded."
            },
            {
              heading: "Legal Descriptions",
              body: "Three systems used in Arizona:\n\n1. Rectangular Survey (Government Survey) — most common in Arizona. Divides land into Townships (6×6 miles = 36 sections) and Sections (1 mile square = 640 acres). Arizona uses the Gila and Salt River Base and Meridian as its reference point. This is ARIZONA'S PRIMARY REFERENCE SYSTEM — likely tested.\n\n2. Metes and Bounds — uses compass bearings and distances from a Point of Beginning (POB). Used for irregular parcels and older surveys, particularly in older Arizona ranch land.\n\n3. Lot and Block (Recorded Plat) — used for subdivisions. References a recorded plat map on file with the county recorder. Most common for residential Phoenix/Tucson area properties.\n\nAssessor Parcel Number (APN): used by county assessors for tax purposes. NOT a legal description and cannot be used in a deed to convey property."
            }
          ],
          quiz: [
            {
              id: "az_b02q01",
              prompt: "Arizona's rectangular survey system uses which base and meridian as its reference point?",
              choices: [
                "Mount Diablo Base and Meridian",
                "San Bernardino Base and Meridian",
                "Gila and Salt River Base and Meridian",
                "Navajo Base and Meridian"
              ],
              answer: 2,
              explanation: "Arizona uses the Gila and Salt River Base and Meridian as the reference point for its rectangular survey system. This is unique to Arizona and commonly tested on the AZ state exam section."
            },
            {
              id: "az_b02q02",
              prompt: "A husband earns $50,000 during the marriage and uses it to purchase land. The deed lists only his name. Under Arizona community property law, this property is:",
              choices: [
                "His separate property — only his name is on the deed",
                "Community property — wages earned during marriage are community property",
                "Joint tenancy property — it automatically becomes joint tenancy when married",
                "Separate property because he used his own earnings"
              ],
              answer: 1,
              explanation: "Under ARS § 25-211, wages and income earned during marriage are community property in Arizona. Purchasing property with community funds makes it community property regardless of whose name is on the deed. Both spouses have an equal undivided one-half interest."
            },
            {
              id: "az_b02q03",
              prompt: "How many acres are in the SE ¼ of the NW ¼ of Section 14?",
              choices: ["160 acres", "80 acres", "40 acres", "20 acres"],
              answer: 2,
              explanation: "One section = 640 acres. NW ¼ = 160 acres. SE ¼ of that = 40 acres. Formula: 640 ÷ 4 ÷ 4 = 40 acres."
            },
            {
              id: "az_b02q04",
              prompt: "In Arizona, a mechanic's lien must be filed within how many days of completion of work?",
              choices: ["60 days", "90 days", "120 days", "180 days"],
              answer: 2,
              explanation: "Under ARS § 33-993, an Arizona mechanic's lien must be filed within 120 days of the last day of work or furnishing of materials. Its priority relates back to the date work began, not the recording date — so a lender may find their deed of trust subordinated to a contractor who started work before the loan closed."
            },
            {
              id: "az_b02q05",
              prompt: "A married couple in Arizona wants to take title so their property passes to the surviving spouse automatically AND qualifies for community property tax treatment. The best ownership form is:",
              choices: [
                "Joint tenancy with right of survivorship",
                "Tenancy in common",
                "Community property with right of survivorship",
                "Sole and separate property"
              ],
              answer: 2,
              explanation: "Arizona recognizes Community Property with Right of Survivorship (ARS § 33-431). This form combines the survivorship right (property passes automatically to the survivor, avoiding probate) with the community property income tax benefits (stepped-up basis on the full property at death). It must be expressly stated in the deed."
            }
          ]
        },

        // ── MODULE 3 ─────────────────────────────────────
        {
          id: "az_b03",
          order: 3,
          title: "Agency Law & Fiduciary Duties",
          week: "3-4",
          passingScore: 75,
          icon: "🤝",
          objective: "Explain agency creation, the OLD CAR fiduciary duties, Arizona agency disclosure requirements, and dual agency rules under ARS Title 32.",
          content: [
            {
              heading: "Agency in Arizona Real Estate",
              body: "Agency is a legal relationship where one party (the agent/broker) is authorized to represent another (the principal/client).\n\nIn Arizona real estate:\n• Seller's Agent (Listing Agent) — represents the seller; full fiduciary duties\n• Buyer's Agent — represents the buyer; full fiduciary duties\n• Dual Agent — represents both buyer and seller; legal in AZ with written consent\n• Transaction Broker (Limited Agency) — Arizona allows a 'limited representation' role where the broker assists both parties without full fiduciary duties to either; must be disclosed in writing\n\nAgency is created by agreement (written or oral). Arizona requires agency agreements for real estate to be in writing to be enforceable (Statute of Frauds).\n\nImplied agency: can be created accidentally by conduct. Agents must be careful about giving advice to unrepresented parties — this can inadvertently create an implied agency relationship."
            },
            {
              heading: "Fiduciary Duties: OLD CAR",
              body: "Agents owe full fiduciary duties to their clients (principals):\n\n• Obedience — follow all LAWFUL instructions of the principal\n• Loyalty — put the client's interests above all others, including the agent's own interests\n• Disclosure — disclose all material facts known to the agent that affect the transaction\n• Confidentiality — protect the client's confidential information; this duty SURVIVES termination of the agency\n• Accounting — account for all funds; never commingle\n• Reasonable Care — use the skill and diligence of a competent real estate professional\n\nFor third parties (customers, not clients): owe honesty and fair dealing — NOT the full fiduciary duties above. BUT all Arizona agents must disclose known material defects to ALL parties regardless of who they represent."
            },
            {
              heading: "Arizona Agency Disclosure Requirements",
              body: "Arizona requires written agency disclosure under ARS § 32-2151.01.\n\nThe Arizona Agency Disclosure Form (AAR Form): must be provided to and signed by both buyers AND sellers before substantive discussions about a specific property. The form explains the different agency relationships available: seller's agent, buyer's agent, dual agent, and limited representation (transaction broker).\n\nKey timing rule: agency disclosure must occur at FIRST SUBSTANTIVE CONTACT — before any confidential information is exchanged.\n\nAAR (Arizona Association of Realtors) provides the standard agency disclosure form. While non-members can create their own form, it must meet ADRE's content requirements.\n\nThe three required disclosures in Arizona agency:\n1. The existence of the agency relationship\n2. Who the agent represents\n3. What duties are owed to each party"
            },
            {
              heading: "Dual Agency & Limited Representation",
              body: "Dual Agency — one agent or brokerage representing both buyer and seller in the same transaction.\n\nIn Arizona: LEGAL with written, informed consent from BOTH parties BEFORE the dual agency situation arises.\n\nA dual agent CANNOT:\n• Share the seller's bottom-line price with the buyer\n• Share the buyer's maximum willingness to pay with the seller\n• Advocate aggressively for either party's negotiating position\n\nLimited Representation (Transaction Broker) — unique to Arizona:\n• The broker/agent assists both parties without full fiduciary duties to either\n• Acts more like a facilitator than an advocate\n• Must be disclosed in writing; both parties acknowledge the limited role\n• The broker still owes honesty, fair dealing, and disclosure of material defects to both parties\n\nDesignated Agency: a broker designates one agent to represent the buyer and a different agent to represent the seller within the same firm. Reduces the dual agency conflict. The managing broker is still a dual agent in this arrangement."
            },
            {
              heading: "Material Facts & Disclosure Obligations",
              body: "Arizona is a FULL DISCLOSURE state. Both sellers and agents must disclose all known material facts.\n\nSeller's Property Disclosure Statement (SPDS — AAR Form): the seller completes this form disclosing all known material defects and issues. Required for residential sales in Arizona.\n\nAgent's obligation: in addition to the SPDS, agents must disclose any known material facts not covered in the SPDS, including:\n• Physical defects observed during the agent's inspection\n• Known neighborhood issues (noise, proximity to industrial uses)\n• Stigmatized property: Arizona does NOT require disclosure of deaths in a property (unless caused by a condition of the property itself, like carbon monoxide), or of being located near a registered sex offender. BUT the agent cannot affirmatively lie if asked.\n\nBedbug disclosure: Arizona requires bedbug disclosure in residential rentals (ARS § 33-1319). Also required at the time of residential sale (SPDS includes bedbug history).\n\nPool safety disclosure: required under ARS § 36-1681(E) for properties with pools — buyers must acknowledge pool safety requirements."
            }
          ],
          quiz: [
            {
              id: "az_b03q01",
              prompt: "Under Arizona law, agency disclosure must be provided to a buyer or seller:",
              choices: [
                "At the time of signing the purchase contract",
                "At first substantive contact, before confidential information is exchanged",
                "Only when dual agency is involved",
                "At the time the listing agreement is signed only"
              ],
              answer: 1,
              explanation: "Arizona requires agency disclosure at FIRST SUBSTANTIVE CONTACT — before any confidential information is exchanged. This protects consumers by ensuring they understand who represents them before they reveal anything sensitive like motivation, urgency, or price limits."
            },
            {
              id: "az_b03q02",
              prompt: "An Arizona listing agent discovers a crack in the foundation during their walkthrough. The seller asks the agent not to mention it. The agent MUST:",
              choices: [
                "Follow the seller's instruction — seller is the principal",
                "Disclose the foundation crack to the buyer as a known material fact",
                "Disclose only if the buyer specifically asks about foundation issues",
                "Report it to ADRE but not to the buyer"
              ],
              answer: 1,
              explanation: "Arizona is a full disclosure state. A foundation crack is a material defect. An agent cannot follow an instruction to conceal a known material defect — that instruction is NOT a lawful instruction. The agent must disclose it to the buyer regardless of the seller's preference."
            },
            {
              id: "az_b03q03",
              prompt: "Arizona's 'limited representation' or transaction broker role differs from full agency because:",
              choices: [
                "The broker charges less commission",
                "The broker assists both parties without full fiduciary duties to either party",
                "The broker only represents buyers, never sellers",
                "It is only available in commercial transactions"
              ],
              answer: 1,
              explanation: "Arizona allows 'limited representation' (transaction broker) where the agent assists both parties in completing the transaction without owing full fiduciary duties to either. It must be disclosed in writing. The agent still owes honesty and fair dealing and must disclose known material defects to all parties."
            },
            {
              id: "az_b03q04",
              prompt: "Which of the following does Arizona law require sellers to disclose on the SPDS?",
              choices: [
                "Deaths that occurred in the property from natural causes",
                "That the property is located near a registered sex offender",
                "Known bedbug history and pool safety acknowledgment",
                "Future neighborhood development plans by the city"
              ],
              answer: 2,
              explanation: "Arizona's SPDS requires disclosure of known bedbug history. Pool safety is disclosed under ARS § 36-1681(E). Deaths from natural causes are NOT required to be disclosed in Arizona (unless caused by a property condition). Proximity to sex offenders is also not required on the SPDS."
            }
          ]
        },

        // ── MODULE 4 ─────────────────────────────────────
        {
          id: "az_b04",
          order: 4,
          title: "Contracts & Arizona Purchase Agreements",
          week: "3-4",
          passingScore: 75,
          icon: "📝",
          objective: "Master contract formation, the AAR Residential Purchase Contract, earnest money rules, contingencies, and remedies for breach under Arizona law.",
          content: [
            {
              heading: "Elements of a Valid Contract",
              body: "All contracts require:\n• Offer and Acceptance — mutual assent (meeting of the minds)\n• Consideration — something of value exchanged by each party\n• Legal Capacity — parties must be 18+ and of sound mind\n• Lawful Object — the purpose must be legal\n• In writing — Arizona's Statute of Frauds (ARS § 44-101) requires all real estate contracts to be IN WRITING to be enforceable. This includes purchase contracts AND listing agreements.\n\nVoid vs. Voidable:\n• Void — has no legal effect from the start (illegal purpose, no consideration)\n• Voidable — valid but one party can cancel (minor signed, fraud, duress, misrepresentation)\n\nExecutory vs. Executed:\n• Executory — not yet fully performed (most contracts between signing and closing)\n• Executed — fully performed by all parties (at closing)"
            },
            {
              heading: "Arizona Residential Purchase Contract (AAR RPC)",
              body: "The standard Arizona purchase contract is the AAR Residential Purchase Contract (RPC), published by the Arizona Association of Realtors.\n\nKey sections of the AZ RPC:\n• Purchase price and down payment\n• Earnest money: amount, holder (typically title company or escrow), and forfeit conditions\n• Loan contingency: financing type, interest rate, and loan deadline\n• Inspection period: default 10 days (BINSR period)\n• Close of escrow date\n• Inclusions and exclusions (personal property and fixtures)\n• Seller's Property Disclosure Statement (SPDS) delivery\n• Title and vesting\n• Dispute resolution: mediation before arbitration or litigation\n\nArizona closing: typically handled by a title company acting as escrow agent — NOT attorneys (unlike NY). The title company holds funds, prepares closing documents, and records the deed."
            },
            {
              heading: "Earnest Money in Arizona",
              body: "Earnest money (EMD) is a good-faith deposit from the buyer showing serious intent to purchase.\n\nArizona earnest money rules:\n• Held by a neutral third party — typically the title company or escrow company, NOT the listing broker's trust account (unlike some states)\n• Must be deposited within the time specified in the contract (typically 1–3 business days after acceptance)\n• Typical amount: 1–3% of purchase price in AZ; no statutory minimum or maximum\n\nEarnest money disputes:\n• If buyer and seller cannot agree on who gets the earnest money, the holder (title company) cannot release it without either:\n  (a) Written agreement signed by both buyer and seller, OR\n  (b) Court order\n• The title company will not make the call — they interplead the funds to court if there's no agreement\n\nForfeiture: if the buyer defaults without a valid contingency, the seller is typically entitled to keep the earnest money as liquidated damages."
            },
            {
              heading: "BINSR — Buyer's Inspection Notice and Seller's Response",
              body: "The BINSR is Arizona's most important post-contract form. After the buyer conducts inspections during the 10-day inspection period, the buyer completes the BINSR to:\n\n1. ACCEPT the property in its current condition (close the inspection contingency), OR\n2. REQUEST specific repairs, credits, or price reduction, OR\n3. CANCEL the contract and receive earnest money back\n\nSeller has 3 days to respond to a BINSR repair request with:\n• AGREE to the buyer's requests\n• COUNTER with partial repairs or different terms\n• REFUSE all requests (buyer then has 3 days to accept the refusal or cancel)\n\nIf buyer sends no BINSR by the deadline, the inspection contingency is automatically deemed accepted — the buyer loses their right to cancel based on inspection.\n\nPro tip: the 10-day inspection period is calendar days in the AAR RPC — count carefully and use it fully. Hire inspectors immediately after mutual acceptance."
            },
            {
              heading: "Contingencies & Remedies for Breach",
              body: "Major contingencies in the AZ RPC:\n• Loan Contingency — buyer can cancel if financing cannot be obtained\n• Appraisal Contingency — buyer can cancel or renegotiate if appraisal is below purchase price\n• Inspection Contingency (BINSR period) — buyer can cancel for any reason during inspection window\n• HOA Documents Review — buyer has right to review CC&Rs, financials, and meeting minutes\n\nRemedies when buyer defaults:\n• Seller may: retain earnest money as liquidated damages, OR sue for specific performance\n• Most Arizona contracts specify earnest money forfeiture as the seller's remedy (liquidated damages clause)\n\nRemedies when seller defaults:\n• Buyer may: get earnest money back, AND/OR sue for specific performance (compel the sale)\n• Specific performance is a uniquely powerful remedy in real estate because each parcel is unique\n\nMeditation clause: the AAR RPC requires the parties to attempt mediation before filing a lawsuit or arbitration. Failure to attempt mediation can affect recovery of attorney's fees."
            }
          ],
          quiz: [
            {
              id: "az_b04q01",
              prompt: "Under Arizona law, which of the following real estate agreements MUST be in writing to be enforceable?",
              choices: [
                "Only purchase contracts over $10,000",
                "All real estate purchase contracts and listing agreements",
                "Only buyer representation agreements",
                "No contracts — oral agreements are valid in Arizona if witnessed"
              ],
              answer: 1,
              explanation: "Arizona's Statute of Frauds (ARS § 44-101) requires all real estate contracts — including purchase contracts and listing agreements — to be IN WRITING to be enforceable. An oral listing agreement is unenforceable in Arizona."
            },
            {
              id: "az_b04q02",
              prompt: "A buyer's BINSR inspection period expires and the buyer has NOT submitted a BINSR. What happens?",
              choices: [
                "The contract automatically cancels — buyer gets earnest money back",
                "The buyer gets an automatic 5-day extension",
                "The inspection contingency is deemed accepted — buyer can no longer cancel based on inspection",
                "The seller must re-open the inspection period"
              ],
              answer: 2,
              explanation: "Under the AAR RPC, if the buyer fails to submit a BINSR by the inspection deadline, the inspection contingency is AUTOMATICALLY ACCEPTED. The buyer waives their right to cancel based on the inspection and the contract moves forward toward closing."
            },
            {
              id: "az_b04q03",
              prompt: "An Arizona buyer defaults on a purchase contract that contains a liquidated damages clause. The seller's most common remedy is to:",
              choices: [
                "Sue the buyer for full purchase price",
                "Retain the earnest money as liquidated damages",
                "Re-list the property at any price immediately",
                "Demand specific performance — force the buyer to close"
              ],
              answer: 1,
              explanation: "When an Arizona purchase contract contains a liquidated damages clause (as the AAR RPC does), the seller's primary remedy upon buyer default is to retain the earnest money as liquidated damages. The seller can also sue for specific performance, but the earnest money forfeiture is the typical contractual remedy."
            },
            {
              id: "az_b04q04",
              prompt: "Who typically holds earnest money in an Arizona residential transaction?",
              choices: [
                "The listing broker in their trust account",
                "The buyer's broker in their trust account",
                "A title company or escrow company as neutral third party",
                "The seller directly until closing"
              ],
              answer: 2,
              explanation: "In Arizona, earnest money is typically held by a title company or escrow company as a neutral third party — not by the listing broker's trust account (as is common in some other states). This is consistent with Arizona's escrow-company-driven closing process."
            }
          ]
        },

        // ── MODULE 5 ─────────────────────────────────────
        {
          id: "az_b05",
          order: 5,
          title: "Real Estate Finance",
          week: "3-4",
          passingScore: 75,
          icon: "💰",
          objective: "Understand Arizona's use of deeds of trust, non-judicial trustee's sale process, anti-deficiency protections, loan types, and qualifying ratios.",
          content: [
            {
              heading: "Arizona Uses Deeds of Trust",
              body: "Like California, Arizona primarily uses DEEDS OF TRUST (not mortgages) to secure real estate loans. This is a key distinction for the AZ exam.\n\nDeed of Trust — three parties:\n• Trustor — the borrower (property owner)\n• Beneficiary — the lender\n• Trustee — neutral third party holding bare legal title as security (typically a title company)\n\nWhen the loan is paid off, the trustee records a Deed of Reconveyance returning full title to the trustor.\n\nKey advantage: deeds of trust allow non-judicial foreclosure (trustee's sale), which is faster and far cheaper than judicial mortgage foreclosure."
            },
            {
              heading: "Arizona Foreclosure: Trustee's Sale",
              body: "Non-judicial foreclosure (Trustee's Sale) is the standard Arizona foreclosure method (ARS § 33-801 et seq.):\n\nTimeline:\n1. Notice of Trustee's Sale recorded and mailed to trustor — must be at least 91 DAYS before the sale date\n2. Notice must be posted on the property AND published in a newspaper of general circulation for 4 consecutive weeks\n3. Trustee's Sale held at public auction — highest bidder wins\n4. Trustee's Deed issued to winning bidder\n\nKey Arizona anti-deficiency rules (ARS § 33-814):\n• After a trustee's sale on a purchase money mortgage on a single-family dwelling (one acre or less), the lender generally CANNOT pursue a deficiency judgment\n• The 'one acre or less' and 'one- or two-family dwelling utilized as a residence' are critical qualifiers\n• For commercial loans or larger properties, deficiency judgments may be available\n\nRight of redemption: Arizona has NO statutory right of redemption after a trustee's sale. Once the property is sold, the former owner cannot buy it back."
            },
            {
              heading: "Loan Types & Qualifying Ratios",
              body: "Loan types tested on the AZ exam:\n\n• Conventional — not government-backed. PMI required if LTV exceeds 80%.\n• FHA — 3.5% minimum down; MIP required regardless of down payment; best for lower credit scores.\n• VA — 0% down for eligible veterans; no PMI; funding fee required.\n• USDA Rural Development — 0% down for qualifying rural areas.\n• Hard Money — private lenders; short-term; based on asset value, not borrower's credit. Common in AZ fix-and-flip market.\n\nQualifying ratios (conventional guidelines):\n• Front-end (housing) ratio: PITI ÷ Gross Monthly Income ≤ 28%\n• Back-end (total) ratio: (PITI + all monthly debts) ÷ Gross Monthly Income ≤ 36–43%\n\nFHA ratios: 31% front-end / 43% back-end\n\nLTV = Loan Amount ÷ Appraised Value\nDown payment = Purchase Price × Down Payment %"
            },
            {
              heading: "Secondary Market & Loan Concepts",
              body: "The promissory note is the borrower's personal promise to repay. The deed of trust is the security pledging the property as collateral. They are SEPARATE instruments.\n\nSecondary Mortgage Market:\n• Fannie Mae (FNMA) — buys conventional conforming loans from lenders\n• Freddie Mac (FHLMC) — same function; competes with Fannie Mae\n• Ginnie Mae (GNMA) — guarantees mortgage-backed securities (MBS) backed by FHA/VA/USDA loans; does NOT buy loans directly\n\nConforming loan: meets Fannie/Freddie guidelines on amount, credit, DTI. 2025 conforming limit: $806,500 for most areas; higher in designated high-cost areas of Arizona (parts of Maricopa and Pima counties).\n\nDiscount points: prepaid interest at closing to 'buy down' the interest rate. One point = 1% of the loan amount. Common in Arizona to reduce monthly payments in the current rate environment.\n\nDue-on-sale clause: conventional loans require full repayment when ownership transfers. FHA and VA loans may be assumable with lender approval."
            }
          ],
          quiz: [
            {
              id: "az_b05q01",
              prompt: "In an Arizona deed of trust, who holds legal title to the property during the loan period?",
              choices: [
                "The borrower (trustor)",
                "The lender (beneficiary)",
                "The trustee",
                "The county recorder"
              ],
              answer: 2,
              explanation: "In an Arizona deed of trust, the TRUSTEE holds bare legal title to the property as security for the loan. The trustor (borrower) retains equitable title and the right to use the property. When the loan is paid, the trustee reconveys full title to the trustor via a Deed of Reconveyance."
            },
            {
              id: "az_b05q02",
              prompt: "Under Arizona's anti-deficiency statute (ARS § 33-814), after a trustee's sale on a purchase money loan, the lender generally CANNOT pursue a deficiency judgment when the property is:",
              choices: [
                "Any residential property in Arizona",
                "A one- or two-family dwelling on one acre or less used as a residence",
                "Any commercial property",
                "A condo unit regardless of size"
              ],
              answer: 1,
              explanation: "Arizona's anti-deficiency protection applies specifically to purchase money loans on one- or two-family dwellings on one acre or less that were utilized as a residence. Properties larger than one acre, commercial properties, or non-residential uses may not qualify for this protection."
            },
            {
              id: "az_b05q03",
              prompt: "The minimum time between recording the Notice of Trustee's Sale and the actual trustee's sale in Arizona is:",
              choices: ["30 days", "60 days", "91 days", "120 days"],
              answer: 2,
              explanation: "Under ARS § 33-809, the Notice of Trustee's Sale must be recorded at least 91 DAYS before the actual trustee's sale date. This notice period gives the borrower time to reinstate the loan, sell the property, or seek other solutions before losing the property at auction."
            },
            {
              id: "az_b05q04",
              prompt: "A buyer has a gross monthly income of $7,500. Their monthly PITI would be $1,800 and they have $500/month in car payments. What is their back-end DTI?",
              choices: ["24%", "30.7%", "31%", "30%"],
              answer: 0,
              explanation: "Back-end DTI = (PITI + all debts) ÷ Gross Monthly Income = ($1,800 + $500) ÷ $7,500 = $2,300 ÷ $7,500 = 30.67%, approximately 30.7%. This is well within conventional guidelines of 36–43%."
            }
          ]
        },

        // ── MODULE 6 ─────────────────────────────────────
        {
          id: "az_b06",
          order: 6,
          title: "Valuation & Market Analysis",
          week: "3-4",
          passingScore: 75,
          icon: "📊",
          objective: "Apply the three approaches to value, interpret depreciation, understand Arizona's Limited Property Value system, and build CMA logic.",
          content: [
            {
              heading: "Three Approaches to Value",
              body: "1. Sales Comparison Approach (Market Approach)\n— Best for: residential properties with recent comparable sales\n— Method: find 3+ sold comparables; adjust for differences\n— Adjustments: CBS — Comp Better, Subtract. If comp is better than subject, subtract from comp price. If comp is worse, add to comp price.\n\n2. Income Approach (Capitalization)\n— Best for: income-producing properties (apartments, retail, industrial)\n— Value = NOI ÷ Cap Rate\n— NOI = Gross Scheduled Income - Vacancy Loss - Operating Expenses (NOT debt service)\n— Gross Rent Multiplier (GRM) = Sale Price ÷ Annual Gross Rents\n\n3. Cost Approach\n— Best for: special-use properties (schools, churches, government buildings) with few comparables; new construction\n— Value = Land Value + (Replacement Cost New - Depreciation)\n— Three types of depreciation: Physical (wear), Functional obsolescence (outdated design), External/Economic obsolescence (outside causes — always incurable)"
            },
            {
              heading: "Arizona Property Tax Assessment: Full Cash Value vs. Limited Property Value",
              body: "Arizona uses a two-value assessment system — unique and heavily tested:\n\nFull Cash Value (FCV): the county assessor's estimate of market value. Used as the ceiling for assessment.\n\nLimited Property Value (LPV): the value actually used to calculate property taxes. Arizona law caps annual LPV increases at 5% per year (for most residential property) regardless of market changes — similar in concept to California's Prop 13, but the cap is 5% not 2%.\n\nWhen property is sold: the LPV resets toward FCV but must not exceed FCV. A new buyer should expect LPV to potentially increase in the years following purchase.\n\nResidential assessment ratio: 10% of LPV (meaning you pay tax on 10% of the LPV, multiplied by the tax rate).\n\nCommercial assessment ratio: 18% of LPV.\n\nHomeowner's Exemption: primary residences receive a reduction in FCV of up to $3,965 (2024 figure) for the homeowner's exemption."
            },
            {
              heading: "CMA in Arizona",
              body: "CMA (Comparative Market Analysis): a broker's pricing tool — NOT a licensed appraisal.\n\nArizona CMA process:\n1. Select 3–5 recently sold comparable properties (ideally within 90 days in active AZ markets)\n2. Adjust for differences (square footage, bedroom/bath count, pool, garage, condition, lot size)\n3. Weight the adjusted prices to arrive at a probable sale price range\n4. Factor in active listings (competition) and absorption rate\n\nAbsorption Rate = Active Listings ÷ Avg. Monthly Sales = Months of supply\n• Under 3 months = strong seller's market (common in Phoenix/Scottsdale/Tucson during boom periods)\n• 3–6 months = balanced\n• Over 6 months = buyer's market\n\nBrokers CANNOT call their analysis an 'appraisal' without a licensed appraiser's credentials. Arizona appraisers are licensed by the Arizona Board of Appraisal (ABOA)."
            }
          ],
          quiz: [
            {
              id: "az_b06q01",
              prompt: "In Arizona, the property value used to CALCULATE property taxes is:",
              choices: [
                "Full Cash Value (FCV) — the assessor's estimate of market value",
                "Limited Property Value (LPV) — capped at 5% annual growth",
                "Appraised value from a licensed appraiser",
                "Sale price from the most recent transaction"
              ],
              answer: 1,
              explanation: "Arizona uses Limited Property Value (LPV) to calculate property taxes. The LPV is capped at a 5% annual increase regardless of market conditions. Full Cash Value (FCV) is the market value estimate, but LPV is what generates the tax bill."
            },
            {
              id: "az_b06q02",
              prompt: "A comparable property sold for $400,000 and has a pool valued at $15,000. The subject property has no pool. How do you adjust?",
              choices: [
                "Add $15,000 to the comparable — it has more features",
                "Subtract $15,000 from the comparable — it is better than the subject",
                "Add $15,000 to the subject's estimated value",
                "No adjustment needed — pools don't affect Arizona home values"
              ],
              answer: 1,
              explanation: "CBS — Comp Better, Subtract. The comparable has a pool ($15,000 value) that the subject does not. The comp is better than the subject in this feature. Subtract $15,000 from the comp's price to make it comparable to the subject property."
            },
            {
              id: "az_b06q03",
              prompt: "An Arizona apartment complex generates $150,000 in NOI. Comparable buildings sell at a 7% cap rate. What is the indicated value?",
              choices: ["$1,050,000", "$2,142,857", "$10,500,000", "$150,000"],
              answer: 1,
              explanation: "Value = NOI ÷ Cap Rate = $150,000 ÷ 0.07 = $2,142,857. This is the Income Approach formula. A 7% cap rate is typical for secondary Arizona markets like Tucson, Mesa, or Chandler for smaller multifamily properties."
            }
          ]
        },

        // ── MODULE 7 ─────────────────────────────────────
        {
          id: "az_b07",
          order: 7,
          title: "Arizona State Law & ADRE Rules",
          week: "7-8",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master Arizona-specific licensing rules, ADRE disciplinary authority, trust fund handling, advertising rules, and the Commissioner's Rules (AAC Title 4, Chapter 28).",
          content: [
            {
              heading: "ADRE Licensing Structure (ARS Title 32)",
              body: "Arizona's real estate licensing law is ARS Title 32, Chapter 20. The Commissioner's Rules are in AAC Title 4, Chapter 28.\n\nLicense types:\n• Salesperson — entry-level; must work under a licensed broker. Cannot operate independently, cannot receive compensation directly from the public.\n• Broker — requires 3 years active experience as a licensed agent in the last 5 years + 90 additional education hours. Can operate independently, supervise salespeople, and receive compensation directly.\n• Property Manager — Arizona issues a separate license for property management; different from broker/salesperson. Most states include property management under the broker license.\n\nSupervisory broker's responsibility: the designated broker (employing broker) is responsible for the acts of all affiliated salespersons. If a salesperson commits a violation and the broker knew or should have known, the broker can also be disciplined.\n\nLicense expiration: Arizona real estate licenses expire every 2 years. 24 hours of CE required for renewal."
            },
            {
              heading: "Trust Fund Handling in Arizona",
              body: "ADRE has strict trust fund (earnest money) rules under AAC R4-28-1101:\n\n• Funds received on behalf of clients must be deposited into a trust account within 3 BANKING DAYS of receipt (or as specified in the contract)\n• The trust account must be kept at a federally insured financial institution in Arizona\n• The broker is responsible for all trust funds held by anyone in the brokerage\n\nCommingling: mixing personal/operating funds with client trust funds. PROHIBITED. Even accidentally putting one dollar of personal money into the trust account is commingling.\n\nConversion: using trust funds for personal use. Criminal offense — embezzlement. Results in license revocation.\n\nRecord keeping: trust fund records must be kept for 5 YEARS in Arizona (longer than most states).\n\nIn practice: in Arizona, earnest money is typically held by the title company, not the broker. But if the broker does hold earnest money, these rules apply strictly."
            },
            {
              heading: "ADRE Advertising Rules",
              body: "ADRE advertising regulations (AAC R4-28-502):\n\n• All advertising for real estate services must include the employing broker's name — it is the BROKER'S name that must appear, not just the salesperson's name\n• Salespersons cannot advertise using only their own name\n• Blind ads (ads that don't identify the advertiser as a real estate licensee) are PROHIBITED\n• Team names: allowed in Arizona, but the employing broker's name must appear in all team advertising\n• Social media posts about listings or services = advertising subject to all ADRE advertising rules\n• Digital advertising including websites and online listings must include the broker's license number\n\nProhibited advertising:\n• Guaranteed results or guaranteed sale price\n• False or misleading statements about the property, market, or the agent's credentials\n• Using 'appraiser' or 'appraisal' in a broker's CMA context without an appraisal license\n• Discriminatory language or preferences in violation of fair housing laws"
            },
            {
              heading: "Fair Housing in Arizona",
              body: "Federal Fair Housing Act (1968): 7 protected classes — Race, Color, Religion, National Origin, Sex, Familial Status, Disability.\n\nArizona Fair Housing Act (ARS § 41-1491 et seq.): mirrors the federal law; adds protection for:\n• Source of income (in some municipalities — Phoenix, Tucson have local ordinances)\n• Actual or perceived sexual orientation and gender identity (through administrative interpretation)\n• Familial status definitions slightly broader in some Arizona contexts\n\nFair housing violations in real estate:\n• Steering — directing buyers/renters toward or away from areas based on protected class\n• Redlining — refusing services to geographic areas based on racial composition\n• Blockbusting — inducing panic selling by suggesting protected class groups are moving in\n• Discriminatory advertising — using language expressing preference or limitation based on protected class\n\nComplaint process: file with HUD (federal) or Arizona Attorney General's Civil Rights Division (state). Statute of limitations: 1 year for administrative complaint; 2 years for federal court action.\n\nREALTOR Code of Ethics: Article 10 prohibits REALTORS from discriminating in their professional activities on any protected basis."
            },
            {
              heading: "ADRE Disciplinary Actions",
              body: "ADRE has broad authority to discipline licensees under ARS § 32-2153. Grounds for discipline:\n\n• Material misrepresentation or fraud\n• Failure to disclose known material facts\n• Conversion of trust funds\n• Commingling\n• Violated Commissioner's Rules\n• Conviction of a felony or crime involving moral turpitude\n• Incompetence, gross negligence\n• Violation of fair housing laws\n• Advertising violations\n\nDisciplinary actions available:\n• Letter of concern (informal, no formal record)\n• Consent order (formal agreement to correct behavior)\n• Civil penalty — up to $1,000 per violation for first offense\n• License suspension\n• License revocation\n• Criminal prosecution referral (for fraud, conversion)\n\nReal Estate Recovery Fund: if a consumer wins a judgment against a licensee related to their licensed activities and cannot collect, they can file a claim with the Recovery Fund (up to $30,000 per transaction; $90,000 lifetime per licensee). A Recovery Fund payment automatically suspends the licensee's license until fully repaid with interest."
            }
          ],
          quiz: [
            {
              id: "az_b07q01",
              prompt: "An Arizona salesperson receives a buyer's earnest money check on Monday. By when must it be deposited into the trust account?",
              choices: [
                "Same day (Monday)",
                "Within 3 banking days",
                "Within 5 business days",
                "Within 10 days of mutual acceptance"
              ],
              answer: 1,
              explanation: "Arizona's Commissioner's Rules (AAC R4-28-1101) require trust funds to be deposited within 3 BANKING DAYS of receipt (or per the contract terms if specified). This is one of the most tested trust fund rules on the Arizona state exam."
            },
            {
              id: "az_b07q02",
              prompt: "Under Arizona advertising rules, a salesperson runs a Facebook ad for a listing using only their own name and photo. This is:",
              choices: [
                "Acceptable — social media is informal advertising",
                "A blind ad violation — the employing broker's name must appear",
                "Acceptable if the salesperson's ADRE number is included",
                "Acceptable if the broker is tagged in the post"
              ],
              answer: 1,
              explanation: "Arizona requires ALL real estate advertising — including social media — to include the employing broker's name. A salesperson cannot advertise using only their own name. Running an ad without the broker's name is a blind ad violation under AAC R4-28-502."
            },
            {
              id: "az_b07q03",
              prompt: "How long must Arizona brokers retain trust fund records?",
              choices: ["1 year", "2 years", "3 years", "5 years"],
              answer: 3,
              explanation: "Arizona requires trust fund records to be retained for 5 YEARS — longer than most other states (CA requires 3 years). This is an Arizona-specific rule frequently tested on the state exam section."
            },
            {
              id: "az_b07q04",
              prompt: "The Arizona Real Estate Recovery Fund provides a maximum payment of how much per transaction?",
              choices: ["$10,000", "$30,000", "$50,000", "$100,000"],
              answer: 1,
              explanation: "The Arizona Real Estate Recovery Fund pays a maximum of $30,000 per transaction ($90,000 lifetime per licensee). A Recovery Fund payment automatically suspends the responsible licensee's license until the full amount is repaid with interest."
            },
            {
              id: "az_b07q05",
              prompt: "A real estate agent tells a white family that a neighborhood 'has been changing' and steers them toward a different area. This is BEST described as:",
              choices: [
                "Acceptable — the agent is sharing market knowledge",
                "Steering — a fair housing violation",
                "Blockbusting — only if done to induce a sale from current residents",
                "Redlining — refusing to show listings in a geographic area"
              ],
              answer: 1,
              explanation: "Steering is directing buyers toward or away from specific neighborhoods based on the racial composition of those areas or the protected characteristics of the buyers. It violates the federal Fair Housing Act and Arizona's fair housing laws. The agent's comment about the neighborhood 'changing' is a classic steering indicator."
            }
          ]
        },

        // ── MODULE 8 ─────────────────────────────────────
        {
          id: "az_b08",
          order: 8,
          title: "Title, Escrow & Closing in Arizona",
          week: "5-6",
          passingScore: 75,
          icon: "📜",
          objective: "Understand Arizona deed types, title insurance (ALTA/CLTA), the escrow process, recording requirements, and the Arizona race-notice recording system.",
          content: [
            {
              heading: "Deed Types in Arizona",
              body: "Arizona uses several deed types:\n\n• Warranty Deed (General Warranty Deed) — grantor warrants title against ALL claims, even those arising before grantor's ownership. Provides maximum buyer protection.\n\n• Special Warranty Deed — grantor warrants title only against defects created DURING the grantor's ownership period. Does NOT warrant against prior owner defects. Common in commercial transactions.\n\n• Quitclaim Deed — transfers only whatever interest the grantor has, if any. NO warranties. Used for: divorces (quit-claiming community property to one spouse), correcting defects, family transfers, removing clouds on title.\n\n• Trustee's Deed — issued by the trustee following a trustee's sale (foreclosure).\n\n• Disclaimer Deed — unique to Arizona; used when a spouse wants to confirm that a property is the other spouse's sole and separate property. Both spouses sign; the disclaiming spouse gives up any community property interest.\n\nValid deed requirements in Arizona: grantor's signature (notarized for recording), grantor and grantee identified, legal description of the property, granting clause, delivery and acceptance."
            },
            {
              heading: "Title Insurance in Arizona",
              body: "Arizona title insurance:\n\n• CLTA Standard Policy — covers matters of public record only. Protects against defects that would have been discovered by examining the public record (prior deeds, liens, judgments).\n\n• ALTA Extended Policy — covers both public record matters AND off-record risks such as encroachments, survey issues, unrecorded mechanic's liens, and rights of parties in possession. Required by most lenders.\n\nTwo policies at closing:\n1. Lender's Policy — protects the lender's interest (the loan amount). Decreases as the loan is paid down.\n2. Owner's Policy — protects the buyer's equity. One-time premium at closing. Does NOT decrease in coverage over time.\n\nIn Arizona: the seller traditionally pays for the owner's title insurance policy (CLTA). The buyer pays for the lender's ALTA policy if required by their lender. This can be negotiated.\n\nTitle search: title company examines the chain of title to verify there are no unresolved claims, liens, or defects before issuing insurance."
            },
            {
              heading: "Arizona Escrow & Closing Process",
              body: "Arizona uses ESCROW COMPANIES and title companies to close real estate transactions — NOT attorneys (unlike NY or some eastern states). This is the same as California.\n\nThe escrow officer:\n• Receives and holds funds and documents\n• Follows the signed purchase contract and escrow instructions\n• Orders the title search and title insurance\n• Prepares the Closing Disclosure (CD) for loan transactions\n• Coordinates payoff of existing loans and liens\n• Records the deed with the county recorder\n• Distributes funds to all parties at closing\n\nClosing cost splits in Arizona (customary but negotiable):\n• Seller typically pays: owner's title insurance, half of escrow fees, real estate commission, recording fees for existing loan payoffs\n• Buyer typically pays: lender's title insurance, half of escrow fees, loan origination/appraisal fees, prepaid insurance and property taxes\n\nArizona has no transfer tax (documentary transfer tax) at the state level — unlike California, Nevada, and many other states. This is a significant advantage for sellers."
            },
            {
              heading: "Recording & Priority in Arizona",
              body: "Arizona is a RACE-NOTICE state (ARS § 33-411).\n\nTo have recording priority over a prior unrecorded interest, a subsequent purchaser must:\n1. Record FIRST (race element), AND\n2. Take WITHOUT NOTICE of the prior interest at the time of purchase (notice element)\n\nActual notice: direct knowledge of a prior claim.\nConstructive notice: presumed knowledge because a document was properly recorded.\nInquiry notice: facts that would lead a reasonable person to investigate further.\n\nExample: Buyer A gets a deed but doesn't record. Buyer B later buys the same property from the same seller, records first, and had no knowledge of Buyer A's deed. Buyer B prevails because they recorded first AND had no notice of Buyer A.\n\nPriority exceptions:\n• Property tax liens have SUPER-PRIORITY — they come before all other liens regardless of recording date\n• Mechanic's liens relate back to the first day of work on the project\n\nArizona has NO transfer taxes: no state or county documentary transfer tax when real estate is conveyed. This is a key AZ fact for the exam."
            }
          ],
          quiz: [
            {
              id: "az_b08q01",
              prompt: "An Arizona married couple is divorcing. The wife is transferring her community property interest in the marital home to her husband. The most appropriate deed to use is:",
              choices: [
                "Warranty Deed — provides full protection",
                "Quitclaim Deed — she transfers whatever interest she has with no warranties",
                "Disclaimer Deed — used to disclaim a community property interest",
                "Trustee's Deed — used only in foreclosures"
              ],
              answer: 1,
              explanation: "A Quitclaim Deed is the most commonly used deed in divorce situations, where one spouse is transferring their interest to the other with no warranty as to the title. A Disclaimer Deed is specifically used in Arizona when a spouse wants to declare a property as the other spouse's sole and separate property (typically done at purchase, not divorce)."
            },
            {
              id: "az_b08q02",
              prompt: "Arizona has which type of documentary transfer tax on real estate sales?",
              choices: [
                "$1.10 per $1,000 of sale price — same as California",
                "A flat 0.5% of the sale price",
                "No state documentary transfer tax — Arizona does not impose one",
                "Transfer tax only on commercial properties over $1 million"
              ],
              answer: 2,
              explanation: "Arizona does NOT have a state or county documentary transfer tax on real estate conveyances. This is a significant advantage for Arizona sellers compared to states like California ($1.10 per $1,000) or Nevada. This is frequently tested on the AZ state exam section."
            },
            {
              id: "az_b08q03",
              prompt: "Buyer A receives a deed but does not record it. Buyer B later buys the same property, records first, and has no knowledge of Buyer A's prior deed. Under Arizona's recording law, who prevails?",
              choices: [
                "Buyer A — the first deed in time always wins in Arizona",
                "Buyer B — Arizona is a race-notice state; Buyer B recorded first without notice",
                "Neither buyer — both deeds are void when the seller conveys twice",
                "Buyer A — an unrecorded deed is still valid against all parties in Arizona"
              ],
              answer: 1,
              explanation: "Arizona is a RACE-NOTICE state (ARS § 33-411). To prevail over a prior unrecorded deed, a subsequent buyer must: (1) record first, AND (2) take without notice of the prior interest. Buyer B satisfies both conditions and prevails. This is a classic priority question on the AZ state exam."
            }
          ]
        },

        // ── MODULE 9 ─────────────────────────────────────
        {
          id: "az_b09",
          order: 9,
          title: "Land Use, Zoning & Environmental Disclosures",
          week: "5-6",
          passingScore: 75,
          icon: "🌵",
          objective: "Understand Arizona zoning, subdivision regulations, Superfund/environmental disclosures, and the Arizona Department of Environmental Quality (ADEQ) rules relevant to real estate.",
          content: [
            {
              heading: "Zoning & Land Use in Arizona",
              body: "Zoning: local government control of land use through ordinances dividing land into zones (residential, commercial, industrial, agricultural, open space).\n\nArizona zoning key concepts:\n• Non-conforming use: a use lawful when established that no longer conforms to current zoning. Protected ('grandfathered') but cannot be expanded. If substantially destroyed (typically 50%+ in AZ), must be rebuilt to current zoning.\n• Variance: a deviation from zoning requirements due to hardship. Requires application and public hearing.\n• Special Use Permit / Conditional Use Permit: allows a use conditionally permitted in the zone (e.g., a group home in a residential zone) with conditions.\n• Rezoning: changing the zone classification for a parcel. Requires legislative action by the city/county council.\n\nArizona Zoning Preemption: Arizona state law preempts local ordinances in several areas, including rent control (ARS § 33-1329 prohibits rent control statewide) and short-term rental regulation (Arizona prohibits outright bans on STRs but allows reasonable regulations)."
            },
            {
              heading: "Arizona Subdivisions & Public Report",
              body: "Arizona's subdivision law (ARS § 32-2181 et seq.) requires ADRE approval before a developer can offer subdivided land for sale.\n\nPublic Report (Notice of Intent to Subdivide): ADRE issues a Public Report for approved subdivisions. The developer MUST give buyers a copy of the Public Report BEFORE signing the purchase contract.\n\nBuyer's rescission right: if the buyer does not receive the Public Report before signing, they have 6 MONTHS to rescind the contract after they do receive it.\n\nTypes of subdivisions requiring ADRE Public Report:\n• Any land in AZ divided into 6 or more lots for sale\n• Out-of-state land sold to Arizona residents (under the AZ Subdivision laws)\n\nCC&Rs (Covenants, Conditions & Restrictions): private deed restrictions governing use within a subdivision. Enforced by HOA or neighbors — NOT by government. CC&Rs run with the land and bind all future owners."
            },
            {
              heading: "Environmental Disclosures in Arizona",
              body: "Key environmental disclosure requirements in Arizona real estate:\n\n• Lead-based paint: federal requirement for homes built before 1978. Buyer has 10-day inspection right. Required disclosure form.\n\n• ADEQ Database: the Arizona Department of Environmental Quality maintains databases of known contaminated sites. Agents should advise buyers to check ADEQ records for properties near industrial areas or former gas stations.\n\n• Superfund sites: sellers and agents should disclose known proximity to EPA or state Superfund sites. Arizona has several active Superfund sites — particularly in the greater Phoenix area (groundwater contamination from historic industrial uses).\n\n• Radon: not a mandatory disclosure in Arizona's standard SPDS, but it IS an environmental hazard in parts of Arizona (particularly higher-elevation areas). Best practice: recommend testing.\n\n• Bedbug disclosure: required in the SPDS for residential sales (prior infestation history).\n\n• Mold: not a specific mandatory disclosure category in AZ law, but known mold is a material defect that must be disclosed."
            },
            {
              heading: "Short-Term Rentals (STRs) in Arizona",
              body: "Arizona has specific state law governing short-term rentals (Airbnb, VRBO) that agents must understand for their clients:\n\nARS § 9-500.39: cities and towns CANNOT prohibit STRs outright but CAN regulate them for health, safety, and nuisance purposes. They can require registration/licensing and impose noise, occupancy, and parking rules.\n\nWhat local governments CAN do:\n• Require STR registration and annual fees\n• Impose occupancy limits\n• Require local responsible party contact info\n• Enforce nuisance, noise, and parking regulations\n• Inspect for health and safety compliance\n\nWhat local governments CANNOT do:\n• Ban STRs in residential zones entirely\n• Impose restrictions more burdensome than those for long-term rentals\n\nFor buyer clients: always check the specific city's STR registration requirements before marketing a property as an investment for short-term rental. Scottsdale, Sedona, and Phoenix all have specific registration requirements.\n\nHOA rules: an HOA CAN prohibit or restrict STRs through their CC&Rs — this is private contract law, not a government ban."
            }
          ],
          quiz: [
            {
              id: "az_b09q01",
              prompt: "An Arizona developer is selling lots in a new 8-lot subdivision. When must they give buyers a copy of the ADRE Public Report?",
              choices: [
                "At closing — once the buyer has already committed",
                "Before the buyer signs the purchase contract",
                "Within 3 days of mutual acceptance",
                "Only if the buyer specifically requests it"
              ],
              answer: 1,
              explanation: "Under Arizona's subdivision law (ARS § 32-2181 et seq.), the developer MUST give the buyer the ADRE-issued Public Report BEFORE the buyer signs the purchase contract. If the buyer doesn't receive it beforehand, they have 6 months to rescind the contract after receiving it."
            },
            {
              id: "az_b09q02",
              prompt: "Under Arizona law, can a city completely ban short-term rentals (like Airbnb) in residential neighborhoods?",
              choices: [
                "Yes — local zoning authority allows complete bans",
                "No — Arizona state law (ARS § 9-500.39) prohibits outright STR bans",
                "Only if the state legislature approves the specific city's ban",
                "Yes, but only if 60% of residents vote in favor of the ban"
              ],
              answer: 1,
              explanation: "Arizona state law (ARS § 9-500.39) expressly prohibits cities and towns from banning short-term rentals outright. Local governments CAN regulate STRs (registration, noise, occupancy) but CANNOT prohibit them entirely. However, an HOA CAN ban STRs through its CC&Rs — that is private contract law, not government action."
            }
          ]
        },

        // ── MODULE 10 ─────────────────────────────────────
        {
          id: "az_b10",
          order: 10,
          title: "Real Estate Math Mastery",
          week: "1-2 (ongoing)",
          passingScore: 75,
          icon: "🧮",
          objective: "Solve Arizona-specific commission calculations, property tax prorations using AZ's two-installment system, area calculations, and loan qualifying math.",
          content: [
            {
              heading: "Commission Calculations",
              body: "Commission = Sale Price × Commission Rate\n\nExample: $550,000 Arizona home at 5% total commission:\n$550,000 × 0.05 = $27,500 total\n\nEqual listing/buyer split (2.5% each):\n• Listing brokerage: $13,750\n• Buyer's brokerage: $13,750\n\nIf listing agent is on a 70/30 split with their broker:\n• Listing agent: $13,750 × 0.70 = $9,625\n• Listing broker keeps: $13,750 × 0.30 = $4,125\n\nNet to seller problems:\nSeller wants to net $400,000 after 5% commission:\nListing price = $400,000 ÷ (1 - 0.05) = $400,000 ÷ 0.95 = $421,053\n\nWorking backwards:\nAgent earned $8,750 at 2.5% → Sale price = $8,750 ÷ 0.025 = $350,000"
            },
            {
              heading: "Arizona Property Tax Proration",
              body: "Arizona property taxes are paid in TWO installments:\n• 1st installment: covers January 1–June 30 (due October 1; delinquent November 1)\n• 2nd installment: covers July 1–December 31 (due March 1; delinquent May 1)\n\nNote: Unlike California, Arizona's first installment covers the first HALF of the year (January–June), not the first half of the calendar year by fiscal year. The due dates are October and March.\n\nFor proration in Arizona escrow: use 30-day month / 360-day year (banker's year).\n\nExample: Annual taxes = $3,600. Close of escrow: August 15.\nDaily rate: $3,600 ÷ 360 = $10/day\nJanuary 1 to August 15 = 7 months + 15 days = 225 days\nSeller owes buyer credit of: 225 × $10 = $2,250\n(Taxes paid in arrears — seller credits buyer for their portion)\n\nProperties under $100 total annual tax: must pay in full by October 1 (no installment option)."
            },
            {
              heading: "Area & Loan Math",
              body: "Area calculations:\nSquare footage: Length × Width = sq ft\nAcres: sq ft ÷ 43,560 = acres\nOr: sq ft ÷ 640 = square miles\n\nExample: A rectangular lot is 150 ft × 200 ft. Area = 30,000 sq ft ÷ 43,560 = 0.689 acres.\n\nLoan math:\nLTV = Loan Amount ÷ Appraised Value\nDown payment = Purchase Price × Down Payment %\n\nExample: $400,000 purchase, 10% down:\nDown payment = $40,000; Loan amount = $360,000; LTV = 90%\n\nFirst month's interest:\n$360,000 × 6% ÷ 12 = $1,800\n\nGross income needed (28% front-end):\nPITI = $1,800 → Gross income needed = $1,800 ÷ 0.28 = $6,429/month"
            }
          ],
          quiz: [
            {
              id: "az_b10q01",
              prompt: "An Arizona home sells for $480,000 with a total 5% commission. The listing broker and buyer's broker split equally. The listing agent has a 65/35 split with their broker (agent gets 65%). What does the listing agent receive?",
              choices: ["$7,800", "$12,000", "$7,800", "$15,600"],
              answer: 0,
              explanation: "Total commission: $480,000 × 5% = $24,000. Each broker's side: $24,000 ÷ 2 = $12,000. Listing agent's 65%: $12,000 × 0.65 = $7,800."
            },
            {
              id: "az_b10q02",
              prompt: "Annual Arizona property taxes are $4,320. Escrow closes September 30. Using a 360-day year, what is the seller's tax credit to the buyer? (Taxes paid in arrears; seller owes Jan 1 – Sep 30)",
              choices: ["$3,240", "$2,160", "$1,080", "$4,320"],
              answer: 0,
              explanation: "Daily rate: $4,320 ÷ 360 = $12/day. Jan 1 to Sep 30 = 9 months = 270 days. Seller's credit to buyer: 270 × $12 = $3,240. Since taxes are paid in arrears, the seller credits the buyer for the portion of the year the seller owned the property."
            },
            {
              id: "az_b10q03",
              prompt: "A seller wants to net $350,000 after paying a 5.5% real estate commission. What must the property sell for?",
              choices: ["$367,500", "$370,370", "$369,900", "$365,000"],
              answer: 1,
              explanation: "Required sale price = Net ÷ (1 - Commission Rate) = $350,000 ÷ (1 - 0.055) = $350,000 ÷ 0.945 = $370,370 (rounded). Do not add the commission percentage to the net — that gives the wrong answer. Always divide by (1 - rate)."
            }
          ]
        }

      ] // end broker modules
    }, // end broker track

    // ──────────────────────────────────────────────────────
    // MLO TRACK — NMLS SAFE MLO (AZ DIFI)
    // ──────────────────────────────────────────────────────
    mlo: {
      id: "mlo",
      label: "AZ MLO License (SAFE Act)",
      icon: "🏦",
      color: "#4C9AC9",
      description: "NMLS SAFE MLO exam prep — 20-hour federal pre-license + Arizona DIFI state requirements",
      requirements: [
        "Complete 20 hours of NMLS-approved pre-license education",
        "Pass NMLS SAFE MLO National Test with Uniform State Content (115 scored questions, 75% to pass)",
        "Authorize credit report and criminal background check through NMLS",
        "Register through NMLS MU4 form",
        "Sponsored by an Arizona DIFI-licensed mortgage company",
        "Arizona DIFI: state application, background check, no felony convictions involving dishonesty",
        "Annual CE: 8 hours per year (3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective)"
      ],
      fees: [
        { item: "NMLS application fee",        amount: "$30",  source: "NMLS" },
        { item: "SAFE MLO test fee",            amount: "$110", source: "Prometric" },
        { item: "AZ DIFI state license fee",    amount: "$150", source: "AZ DIFI" },
        { item: "20-hour pre-license education",amount: "$200–$400", note: "varies by provider" },
        { item: "Credit report / background",   amount: "$30",  source: "NMLS" }
      ],
      examStructure: {
        national: { items: 115, time: "190 minutes", passing: 75,
                    note: "120 total items; 115 scored + 5 unscored; includes Uniform State Content" },
        state:    { items: 0,   time: "included in national test",
                    note: "Uniform State Content (UST) is embedded in the national exam" }
      },
      modules: [
        {
          id: "az_m01",
          order: 1,
          title: "SAFE Act & NMLS Licensing Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Navigate the NMLS MU4 process, SAFE Act requirements, Arizona DIFI-specific rules, and annual renewal obligations.",
          content: [
            {
              heading: "The SAFE Act & Arizona DIFI",
              body: "The SAFE Mortgage Licensing Act of 2008 established national MLO licensing standards through the NMLS (Nationwide Multistate Licensing System).\n\nArizona's mortgage regulator: the Arizona Department of Insurance and Financial Institutions (DIFI). DIFI regulates mortgage brokers and mortgage bankers under ARS Title 6, Chapter 9 (Mortgage Brokers and Mortgage Bankers).\n\nArizona license types:\n• Mortgage Broker License — brokers loan transactions between borrowers and lenders\n• Mortgage Banker License — originates loans using their own funds or warehouse lines\n• MLO License — individual license required for all loan originators\n\nAll MLOs who take applications, negotiate terms, or offer mortgage loans on residential property in Arizona MUST hold an active NMLS MLO license endorsed by the Arizona DIFI."
            },
            {
              heading: "NMLS Application & Exam",
              body: "Steps to obtain Arizona MLO license:\n1. Create NMLS account at nmls.stateregulatoryregistry.org\n2. Complete MU4 Individual Form\n3. Authorize credit report and federal/state criminal background check\n4. Complete 20 hours NMLS-approved pre-license education\n5. Pass SAFE MLO National Test with Uniform State Content (75% passing score)\n6. Apply for Arizona DIFI state license through NMLS\n7. Get sponsored by Arizona-licensed company\n8. Pay all fees\n\nExam retake rules:\n• Fail 1st: retest immediately\n• Fail 2nd or 3rd: 30-day wait each\n• Fail 3rd time: 180-day wait before 4th attempt\n\nAnnual renewal: 8 hours CE by December 31 each year (3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective). Same CE cannot be repeated in consecutive years ('safe harbor' rule)."
            },
            {
              heading: "Arizona DIFI-Specific Requirements",
              body: "Beyond the NMLS baseline, Arizona DIFI requires:\n\n• Surety bond: the employing company must maintain a surety bond. Individual MLOs are covered by their employer's bond.\n• Criminal history: no felony conviction within 7 years for any crime; lifetime bar for crimes of dishonesty, fraud, or breach of trust\n• Financial responsibility: DIFI reviews credit history; outstanding judgments or liens can delay licensing\n• Net worth requirements: mortgage broker companies must maintain minimum net worth\n\nArizona unique rules:\n• Arizona requires MLOs to provide a Mortgage Broker Disclosure form (similar to the CA MLDS) when acting as a mortgage broker arranging a loan\n• Prepayment penalty limits: AZ restricts prepayment penalties on owner-occupied residential loans; penalties cannot exceed 2% in the first year, 1% in the second year\n• Cooling-off period: for certain high-cost loans, Arizona requires a 3-day cooling-off period before the loan can close"
            }
          ],
          quiz: [
            {
              id: "az_m01q01",
              prompt: "Which Arizona agency regulates mortgage loan originators?",
              choices: [
                "ADRE — Arizona Department of Real Estate",
                "DIFI — Arizona Department of Insurance and Financial Institutions",
                "ADFI — Arizona Department of Financial Institutions (former name only)",
                "AZ Attorney General's Office"
              ],
              answer: 1,
              explanation: "Arizona mortgage loan originators are regulated by the Arizona Department of Insurance and Financial Institutions (DIFI). ADRE regulates real estate agents and brokers. DIFI regulates mortgage brokers, mortgage bankers, and MLOs under ARS Title 6."
            },
            {
              id: "az_m01q02",
              prompt: "How many hours of NMLS pre-license education are required before taking the SAFE MLO exam?",
              choices: ["12 hours", "20 hours", "24 hours", "30 hours"],
              answer: 1,
              explanation: "The SAFE Act requires 20 hours of NMLS-approved pre-license education: 3 hours federal law, 3 hours ethics, 2 hours non-traditional mortgage products, and 12 hours of electives. This is a federal minimum applicable in all states including Arizona."
            },
            {
              id: "az_m01q03",
              prompt: "An Arizona MLO fails the SAFE exam for the third time. How long must they wait before a fourth attempt?",
              choices: ["30 days", "60 days", "90 days", "180 days"],
              answer: 3,
              explanation: "After the third failure of the SAFE MLO exam, the waiting period is 180 days before taking it a fourth time. The first two failures each require a 30-day wait. After that, the 180-day wait applies."
            }
          ]
        },

        {
          id: "az_m02",
          order: 2,
          title: "Federal Mortgage Law Core",
          week: "3-4",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master RESPA, TILA, ECOA, HMDA, FCRA, and SAFE Act provisions tested on the NMLS national exam.",
          content: [
            {
              heading: "RESPA — Real Estate Settlement Procedures Act",
              body: "RESPA (Regulation X) governs residential mortgage settlement procedures.\n\nKey disclosures:\n• Loan Estimate (LE): provided within 3 business days of application\n• Closing Disclosure (CD): provided at least 3 business days before closing\n\nSection 8 — Anti-kickback: PROHIBITS giving or accepting any fee, kickback, or thing of value for referrals of settlement service business. No exceptions for 'marketing agreements' that are really just referral fees.\n\nLegal under RESPA:\n• Payment for actual services rendered\n• Affiliated Business Arrangements (AfBAs) with proper disclosure\n• Normal advertising and marketing\n\nEscrow rules: lenders can collect escrow for taxes and insurance; limits on cushion (no more than 1/6 of estimated annual disbursements)."
            },
            {
              heading: "TILA, ECOA & HMDA",
              body: "TILA (Regulation Z):\n• APR: true cost of credit including interest, points, and fees. Always higher than the note rate.\n• Right of Rescission: 3 business days for non-purchase refinances of primary residence. Does NOT apply to purchases.\n• High-Cost Mortgage (HOEPA): extra protections for loans above rate/fee thresholds.\n• ATR/QM Rule: lender must verify ability to repay. QM loans: max 3% points and fees (≥$100K loan); no negative amortization, interest-only, or balloon; max 30-year term; DTI generally ≤43%.\n\nECOA (Regulation B):\n• Prohibits credit discrimination based on race, color, religion, national origin, sex, marital status, age, public assistance receipt\n• 30-day adverse action notice required after denial\n\nHMDA (Regulation C):\n• Lenders collect and report data on mortgage applications\n• Purpose: detect redlining and discriminatory patterns\n• Administered by CFPB"
            },
            {
              heading: "Ethics, Fraud & Fair Lending",
              body: "Mortgage fraud types:\n• Occupancy fraud: stating owner-occupied when planning to rent/flip\n• Income fraud: inflating income on application\n• Straw buyer: using another's identity to obtain a loan\n• Equity skimming: buying distressed property, collecting rents, then letting it foreclose\n• Inflated appraisal: coordinating above-market appraisal to extract equity\n\nUDAAP (Dodd-Frank): prohibits Unfair, Deceptive, or Abusive Acts or Practices in consumer financial products.\n\nFair lending — three theories:\n• Disparate Treatment: intentional discrimination against a protected class\n• Disparate Impact: neutral policy with disproportionate adverse effect on a protected class\n• Redlining: refusing to lend in geographic areas based on racial composition\n\nFCRA: consumers have right to one free credit report annually; right to dispute inaccuracies; adverse action must cite credit reason.\n\nGLBA: lenders must send annual privacy notices; consumers can opt out of sharing with non-affiliates."
            }
          ],
          quiz: [
            {
              id: "az_m02q01",
              prompt: "A title company gives a real estate team free leads in exchange for title referrals. This is BEST described as:",
              choices: [
                "A legal AfBA if disclosed in writing",
                "A RESPA Section 8 kickback violation",
                "Legal if the agent passes the value to their clients as a discount",
                "Legal as long as both parties document it in a marketing agreement"
              ],
              answer: 1,
              explanation: "Providing free leads (anything of value) in exchange for settlement service referrals violates RESPA Section 8, regardless of how it is structured. A valid AfBA requires a genuine ownership interest, not a per-referral exchange of value."
            },
            {
              id: "az_m02q02",
              prompt: "Under TILA, a borrower has a 3-day right of rescission for which type of transaction?",
              choices: [
                "Purchase of a primary residence",
                "Refinance of a primary residence (non-purchase money)",
                "Purchase of an investment property",
                "All mortgage transactions"
              ],
              answer: 1,
              explanation: "TILA's 3-day right of rescission applies to non-purchase refinances of a primary residence — meaning the borrower is refinancing a home they already own. It does NOT apply to purchase transactions (including the purchase of a primary residence)."
            },
            {
              id: "az_m02q03",
              prompt: "The primary purpose of HMDA data collection is to:",
              choices: [
                "Set maximum interest rates for mortgage loans",
                "Detect discriminatory lending patterns and ensure communities are served",
                "Verify borrower income before underwriting decisions",
                "Calculate lenders' CRA (Community Reinvestment Act) scores"
              ],
              answer: 1,
              explanation: "HMDA (Home Mortgage Disclosure Act) requires lenders to collect and publicly report data on mortgage applications so regulators can detect discriminatory lending patterns (like redlining) and verify that lenders are serving all segments of their communities."
            },
            {
              id: "az_m02q04",
              prompt: "For a loan of $400,000 to qualify as a Qualified Mortgage (QM), total points and fees cannot exceed:",
              choices: ["$8,000 (2%)", "$12,000 (3%)", "$20,000 (5%)", "$4,000 (1%)"],
              answer: 1,
              explanation: "The QM rule caps points and fees at 3% of the total loan amount for loans ≥$100,000. For a $400,000 loan: $400,000 × 3% = $12,000 maximum points and fees. Exceeding this disqualifies the loan from QM status."
            }
          ]
        },

        {
          id: "az_m03",
          order: 3,
          title: "Mortgage Products & Underwriting",
          week: "5-6",
          passingScore: 75,
          icon: "📊",
          objective: "Distinguish loan types, explain ARM mechanics, reverse mortgages, and non-traditional products tested on the NMLS national exam.",
          content: [
            {
              heading: "ARM Mechanics",
              body: "Adjustable-Rate Mortgage (ARM): interest rate adjusts periodically based on index + margin.\n\nKey terms:\n• Index: benchmark rate (SOFR has replaced LIBOR; also Treasury rates, Prime Rate)\n• Margin: fixed spread added to index (e.g., 2.5%)\n• Note Rate = Index + Margin\n• Caps: limit rate changes\n  - Initial cap: how much rate can change at first adjustment\n  - Periodic cap: max change per subsequent adjustment period\n  - Lifetime cap: max total change over life of the loan\n\nExample: 5/1 ARM means: fixed rate for 5 years, then adjusts annually. Initial rate: 4%. At first adjustment: SOFR is 2.0% + margin 2.5% = 6.0%. Periodic cap 2%: change of 2% exactly; 6% allowed.\n\nARM disclosures required by TILA: ARM program disclosure at application; current index, margin, caps, and payment examples; history of index over past 15 years."
            },
            {
              heading: "Reverse Mortgages & Non-Traditional Products",
              body: "HECM (Home Equity Conversion Mortgage) — FHA-insured reverse mortgage:\n• Available to homeowners 62+\n• No monthly payments — loan balance grows over time\n• Repaid when borrower sells, moves, or dies\n• HUD-approved counseling required before application\n• Non-recourse: borrower or estate never owes more than home is worth\n• Arizona seniors: HECMs are popular in retirement communities (Scottsdale, Sun City, Green Valley)\n\nInterest-Only Loans:\n• Borrower pays only interest during initial period\n• Principal does not decrease during I-O period\n• Payment increases sharply when principal payments begin\n• NOT a Qualified Mortgage (generally)\n\nHELOC (Home Equity Line of Credit):\n• Variable rate line of credit; draw period + repayment period\n• Subject to ATR rule and TILA disclosures"
            }
          ],
          quiz: [
            {
              id: "az_m03q01",
              prompt: "A 5/1 ARM has a 2% periodic cap and starts at 3.5%. If the index + margin equals 7% at the first adjustment, what is the new rate?",
              choices: ["7% — the full index + margin", "5.5% — initial rate + periodic cap", "3.5% — rate cannot change in year 5", "6% — lifetime cap applies"],
              answer: 1,
              explanation: "The periodic cap limits how much the rate can CHANGE per adjustment. Rate can increase at most 2% from 3.5%. So maximum new rate = 3.5% + 2% = 5.5%, even though index + margin = 7%. The periodic cap overrides the calculated rate when it would exceed the cap."
            },
            {
              id: "az_m03q02",
              prompt: "Before a homeowner 62+ can receive an Arizona HECM reverse mortgage, they must:",
              choices: [
                "Pay off all existing liens on the property",
                "Complete HUD-approved reverse mortgage counseling",
                "Obtain approval from their adult children",
                "Demonstrate at least 50% equity in the property"
              ],
              answer: 1,
              explanation: "HUD requires all HECM applicants to complete counseling from a HUD-approved reverse mortgage counselor BEFORE applying for the loan. This protects seniors by ensuring they fully understand the product before committing. The counseling is mandatory, not optional."
            }
          ]
        },

        {
          id: "az_m04",
          order: 4,
          title: "Arizona MLO State Law (DIFI Overlay)",
          week: "7-8",
          passingScore: 75,
          icon: "🏛️",
          objective: "Master Arizona DIFI mortgage regulations, required state disclosures, prepayment penalty limits, and HOME program assistance for Arizona buyers.",
          content: [
            {
              heading: "Arizona Mortgage Laws (ARS Title 6)",
              body: "Arizona mortgage lending is governed by ARS Title 6, Chapter 9:\n\n• Mortgage Broker: arranges loans between borrowers and lenders; does NOT fund loans\n• Mortgage Banker: originates and funds loans with own money or warehouse lines; may sell loans on secondary market\n\nAll MLOs (individual originators) must hold:\n• NMLS MLO License with Arizona endorsement\n• Current sponsor (employer) who holds AZ DIFI company license\n\nKey AZ DIFI rules:\n• Mortgage brokers must give borrowers a written mortgage broker disclosure before taking an application fee or appraisal fee\n• The disclosure must state: the broker's fee, who the broker represents, whether the broker is paid more for certain loan products\n• Annual report: DIFI-licensed companies must file annual reports\n• Record keeping: loan files must be kept for 5 YEARS in Arizona"
            },
            {
              heading: "Arizona Home Buyer Assistance Programs",
              body: "Arizona offers state-level first-time buyer programs through the Arizona Department of Housing (ADOH) and the Arizona Industrial Development Authority (AzIDA):\n\n• HOME Plus Program: a 30-year fixed-rate mortgage combined with a 3% or 5% down payment assistance grant. The DPA is a true grant — does NOT need to be repaid. Available through participating lenders.\n  - Income limits: $122,100 statewide (most counties); higher in some areas\n  - Purchase price limits: $481,176 (FHA/VA/USDA) or $507,937 (conventional)\n  - All buyers must complete HUD-approved homebuyer education\n\n• Pathway to Purchase (P2P): targeted at specific Arizona zip codes; provides up to 10% of purchase price (up to $20,000) as forgivable loan for down payment and closing costs. Forgiven at 20% per year over 5 years.\n\n• ADOH Weatherization & HOME programs: for lower-income existing homeowners.\n\nMLOs in Arizona should know the HOME Plus program — it is heavily used by first-time buyers in the Phoenix and Tucson metro areas."
            },
            {
              heading: "Arizona Prepayment Penalties & Consumer Protections",
              body: "Arizona law restricts prepayment penalties on owner-occupied residential mortgage loans:\n\n• Prepayment penalty cannot exceed:\n  - 2% of the outstanding balance in the first year\n  - 1% of the outstanding balance in the second year\n  - After 2 years: no prepayment penalty allowed\n\n• Lenders must clearly disclose any prepayment penalty before the loan closes\n\nArizona cooling-off period:\n• For certain high-cost loans, Arizona requires a minimum 3-day cooling-off period between when the borrower receives the loan documents and when the loan can close\n• This is separate from the federal TILA right of rescission for refinances\n\nAnti-predatory lending: DIFI actively monitors for predatory lending patterns including:\n• Loan flipping (serial refinancing to generate fees)\n• Asset-based lending (approving loans based on equity alone, ignoring ability to repay)\n• Excessive fees or points\n• Steering borrowers into higher-cost products when they qualify for better terms"
            }
          ],
          quiz: [
            {
              id: "az_m04q01",
              prompt: "The Arizona HOME Plus program provides down payment assistance in the form of:",
              choices: [
                "A deferred second mortgage repaid at sale",
                "A shared appreciation loan requiring equity repayment",
                "A true grant — no repayment required",
                "A 0% interest loan forgiven after 30 years"
              ],
              answer: 2,
              explanation: "Arizona's HOME Plus program provides a 3% or 5% down payment assistance grant — a true grant that does NOT need to be repaid. This distinguishes it from deferred loans or shared appreciation programs. The grant is paired with a 30-year fixed-rate first mortgage from a participating lender."
            },
            {
              id: "az_m04q02",
              prompt: "Under Arizona law, the maximum prepayment penalty allowed in the FIRST year of an owner-occupied residential mortgage is:",
              choices: ["0.5% of the outstanding balance", "1% of the outstanding balance", "2% of the outstanding balance", "3% of the outstanding balance"],
              answer: 2,
              explanation: "Arizona limits prepayment penalties to a maximum of 2% of the outstanding balance in the first year, and 1% in the second year. After 2 years, no prepayment penalty is permitted on owner-occupied residential mortgages."
            },
            {
              id: "az_m04q03",
              prompt: "How long must Arizona DIFI-licensed mortgage companies retain loan files?",
              choices: ["2 years", "3 years", "4 years", "5 years"],
              answer: 3,
              explanation: "Arizona DIFI requires mortgage companies to retain loan files for 5 YEARS. This matches Arizona's real estate trust fund record retention requirement and is longer than the federal RESPA requirement of 5 years (RESPA § 2103.5 requires 5 years for settlement statements)."
            }
          ]
        },

        {
          id: "az_m05",
          order: 5,
          title: "Ethics, Fraud & UDAAP",
          week: "5-6",
          passingScore: 75,
          icon: "🛡️",
          objective: "Identify mortgage fraud schemes, UDAAP violations, and the MLO's ethical duties to Arizona borrowers.",
          content: [
            {
              heading: "Mortgage Fraud in Arizona",
              body: "Mortgage fraud is a material misrepresentation, misstatement, or omission relied upon by a lender or insurer.\n\nFraud for Property (Housing Fraud):\n• Occupancy fraud — stating owner-occupied when buyer plans to rent immediately\n• Income fraud — inflating income or fabricating employment\n• Asset fraud — using borrowed funds for down payment without disclosure\n\nFraud for Profit:\n• Straw buyer fraud — using another person's identity/credit\n• Equity stripping — taking out large loans on distressed property then letting it foreclose\n• Inflated appraisal schemes — coordinating above-market appraisals\n• Builder bailouts — seller (builder) secretly funds buyer's down payment through price inflation\n\nArizona-specific fraud trends: property flipping schemes using inflated appraisals have been particularly common in the Phoenix metro market during boom periods. DIFI actively investigates these with FBI partnerships.\n\nMLOs are mandatory reporters. Suspected fraud must be reported to the employer and potentially to DIFI and federal agencies."
            },
            {
              heading: "UDAAP & Consumer Protection",
              body: "UDAAP — Unfair, Deceptive, or Abusive Acts or Practices (Dodd-Frank Act):\n\nUnfair: causes substantial injury consumers cannot reasonably avoid; not outweighed by benefits.\nDeceptive: misleads or likely to mislead; material; affects behavior.\nAbusive: exploits consumers' lack of understanding; takes unreasonable advantage of vulnerability.\n\nExamples in mortgage context:\n• Misrepresenting the APR as the interest rate\n• Burying balloon payment or prepayment penalty in fine print\n• Targeting seniors or non-English speakers with high-cost products\n• Falsely claiming no closing costs while adding them to the loan\n• Pressuring borrowers to close quickly without time to review documents\n\nCFPB enforcement: can impose civil money penalties, consumer restitution, and ban MLOs from the industry.\n\nMexican border communities: Arizona has a significant Spanish-speaking population. MLOs who market in Spanish but provide documents in English only may face UDAAP and ECOA challenges."
            }
          ],
          quiz: [
            {
              id: "az_m05q01",
              prompt: "An Arizona MLO tells a Spanish-speaking borrower their interest rate will be '4.5%' but the actual APR is 6.2% due to points and fees. This BEST describes:",
              choices: [
                "A normal rate quote — APR and rate are always different",
                "A UDAAP violation — misrepresenting the cost of credit is deceptive",
                "An ECOA violation only if the borrower is denied",
                "Acceptable if the borrower signed the Loan Estimate"
              ],
              answer: 1,
              explanation: "Misrepresenting the interest rate as the APR — or failing to explain the difference to a borrower who cannot understand the documents — is a deceptive act under UDAAP. TILA requires the APR to be clearly disclosed. An MLO who downplays the true cost of credit to close a deal violates UDAAP regardless of what disclosures the borrower signed."
            },
            {
              id: "az_m05q02",
              prompt: "A Phoenix builder pays a buyer's 3% down payment through an inflated sales price, without disclosing this to the lender. This is BEST described as:",
              choices: [
                "A legal builder incentive — common in new construction",
                "A builder bailout — a form of mortgage fraud",
                "An undisclosed seller concession — only requires disclosure on the CD",
                "Acceptable if the appraiser approves the higher price"
              ],
              answer: 1,
              explanation: "A builder who secretly funds a buyer's down payment through an inflated purchase price without disclosing it to the lender is engaging in a 'builder bailout' scheme — a form of mortgage fraud. The lender believes the buyer has skin in the game when in fact all funds came from the seller. This misrepresents the true LTV and the buyer's financial commitment."
            }
          ]
        }
      ] // end mlo modules
    }, // end mlo track

    // ──────────────────────────────────────────────────────
    // PRACTICAL TRACK — ARIZONA
    // ──────────────────────────────────────────────────────
    practical: {
      id: "practical",
      label: "Practical Skills",
      icon: "💼",
      color: "#4CC97A",
      description: "Real-world Arizona skills: listings, buyer transactions, BINSR negotiation, investor analysis, and RESPA-compliant lead generation",
      requirements: [],
      fees: [],
      modules: [
        {
          id: "az_p01",
          order: 1,
          title: "Working with Buyers in Arizona",
          week: "9-10",
          passingScore: 70,
          icon: "🔑",
          objective: "Guide Arizona buyers from pre-approval through close: agency disclosure, buyer representation agreements, BINSR navigation, and contingency management.",
          content: [
            {
              heading: "Buyer Representation Agreements",
              body: "Following the 2024 NAR settlement, Arizona agents must have a written buyer representation agreement BEFORE touring homes with a buyer.\n\nAAR Buyer Broker Exclusive Employment Agreement: specifies services, compensation, duration, and geographic scope. The buyer acknowledges the agent's compensation and how it will be paid.\n\nKey conversations to have upfront:\n• Explain the agency disclosure (AAR form) and what it means to be represented\n• Discuss compensation — whether seller's broker is offering a buyer's agent commission, and what happens if it doesn't cover your fee\n• Confirm the buyer's pre-approval status before touring homes\n• Discuss earnest money amounts typical in the current Arizona market\n• Explain the 10-day BINSR inspection window and the importance of acting quickly\n\nDual agency conversation: before showing your own listing to a buyer client, you must get written consent for dual agency or offer limited representation. Have this conversation early."
            },
            {
              heading: "Navigating the Arizona BINSR",
              body: "The BINSR (Buyer's Inspection Notice and Seller's Response) is the most negotiated document after the offer in Arizona.\n\nBuyer's strategy during 10-day inspection window:\n• Schedule general inspection within 2–3 days of acceptance (inspectors book fast in active AZ markets)\n• Also schedule specialty inspections if needed: roof, HVAC, pool, pest (wood-destroying insects are rare in AZ, but occasional termite/scorpion issues), mold\n• Review inspection reports carefully with your inspector present or via a follow-up call\n\nBINSR options:\n1. Accept as-is — best in multiple offer situations where buyer wants to be strong\n2. Request repairs/credits — list specific items; be reasonable; ask for cash credit vs. repairs when possible (easier to close)\n3. Cancel — if inspection reveals deal-breakers, cancel within the window and recover earnest money\n\nCommon Arizona-specific inspection issues:\n• HVAC age and condition — critical in AZ heat; ACs die frequently in summer\n• Roof condition — flat roofs common in Phoenix; check for ponding water\n• Pool equipment and surface — pools add value but also cost\n• Drainage and grading — Arizona monsoon season can flood poorly graded yards\n• Caliche soil — dense soil layer that causes drainage and foundation issues in some areas"
            },
            {
              heading: "Closing Day in Arizona",
              body: "Arizona closing process:\n\n1. Final walkthrough: within 5 days of close. Verify property condition, agreed repairs completed, and nothing has changed since the inspection.\n\n2. Sign loan documents: typically 1–3 days before close of escrow. Lender sends documents to title company. Buyer signs at the title company office (or remotely via RON — Remote Online Notarization, legal in Arizona).\n\n3. Wire funds: buyer wires down payment and closing costs to the title company's escrow account. Wire fraud is a serious risk — always verify wire instructions by calling the title company directly using a phone number you independently looked up (not from an email).\n\n4. Recording: the county recorder records the deed electronically. In Maricopa County (Phoenix area) this is typically same-day or next-day. Recording is confirmed by the title company.\n\n5. Keys: once recording is confirmed, the title company authorizes key release. Buyer gets access.\n\nArizona unique fact: NO transfer tax at closing — seller and buyer save money compared to many other states."
            }
          ],
          quiz: [
            {
              id: "az_p01q01",
              prompt: "An Arizona buyer receives an inspection report showing the HVAC is 18 years old and showing signs of wear. The BINSR deadline is tomorrow. The buyer should:",
              choices: [
                "Wait — an aging HVAC is not reason to act urgently",
                "Request a specific credit or HVAC replacement in the BINSR before the deadline",
                "Cancel the contract — an old HVAC is always a deal-breaker in Arizona",
                "Accept as-is and negotiate HVAC after closing"
              ],
              answer: 1,
              explanation: "In Arizona's heat, HVAC condition is critical — a failed AC in summer is an emergency. The buyer should address the aging HVAC in the BINSR before the deadline. If the BINSR deadline passes without action, the inspection contingency is automatically accepted and the buyer loses the right to negotiate repairs."
            },
            {
              id: "az_p01q02",
              prompt: "At close of escrow in Arizona, how do buyers typically receive the keys to their new home?",
              choices: [
                "Immediately at the signing appointment",
                "After the county recorder confirms the deed has been recorded",
                "After the seller moves out, regardless of recording",
                "When the title company issues the title insurance policy"
              ],
              answer: 1,
              explanation: "In Arizona, key release is authorized by the title company after the county recorder confirms the deed has been recorded. Recording in Maricopa County is typically same-day or next-day via electronic recording. Buyers should not expect keys at the signing appointment — possession is granted at recording."
            }
          ]
        },

        {
          id: "az_p02",
          order: 2,
          title: "Listing & Selling in Arizona",
          week: "9-10",
          passingScore: 70,
          icon: "🏡",
          objective: "Execute an Arizona listing from consultation through close: CMA, SPDS, ADRE disclosures, marketing, and multiple-offer management.",
          content: [
            {
              heading: "The Arizona Listing Consultation",
              body: "Before the listing appointment:\n• Pull sold comps from the last 60–90 days (AZ markets move fast; use tighter date range in active markets)\n• Check active and pending listings for competition and absorption rate\n• Run a net proceeds estimate at multiple price points\n• Research the property's ADRE history (prior complaints, permit records)\n\nAt the appointment:\n• Provide the Agency Disclosure form FIRST\n• Walk through the listing agreement (AAR Form): listing price, term, commission, marketing authorization, lockbox authorization\n• Introduce the SPDS (Seller Property Disclosure Statement) — walk the seller through each question\n• Explain: seller pays for owner's title insurance policy (customary in AZ)\n• Explain: NO Arizona transfer tax — saves sellers money vs. many other states\n• Set pricing expectations using your CMA\n\nListing agreement must be IN WRITING (ARS Statute of Frauds). Verbal listing agreements are unenforceable."
            },
            {
              heading: "Arizona Seller Disclosure Checklist",
              body: "A complete Arizona residential listing disclosure package includes:\n\n1. SPDS (Seller Property Disclosure Statement — AAR Form): seller completes; agent reviews for completeness. Covers structural, mechanical, environmental, legal issues, HOA, pool, bedbug history, and more.\n\n2. Agency Disclosure (AAR Form AD): required before substantive discussions; identifies who agent represents.\n\n3. Lead-Based Paint Disclosure: required for pre-1978 homes; buyer has 10-day inspection right.\n\n4. HOA Documents (if applicable): CC&Rs, bylaws, budget, meeting minutes, financial statements. HOA must provide these within 10 days of request; seller orders them.\n\n5. Preliminary Title Report: ordered from title company; reveals existing liens, easements, and encumbrances.\n\n6. Pool Safety Disclosure (ARS § 36-1681(E)): if property has a pool, buyer must acknowledge pool barrier and safety requirements.\n\n7. CLDD (Community Facilities District Disclosure): if property is in a CFD/Mello-Roos type district with special assessments.\n\nAgent's visual inspection: while AZ does not require a separate AVID form like California, the listing agent must disclose any known material defects observed during their walkthrough — including those not mentioned by the seller."
            }
          ],
          quiz: [
            {
              id: "az_p02q01",
              prompt: "When is a seller required to complete the Arizona SPDS?",
              choices: [
                "Only for homes built after 2000",
                "For all residential property sales — it is mandatory under Arizona real estate practice",
                "Only when requested by the buyer's agent",
                "Only for properties with known defects"
              ],
              answer: 1,
              explanation: "The SPDS (Seller Property Disclosure Statement) is a mandatory disclosure for Arizona residential sales, required by Arizona real estate standards and the AAR purchase contract. It is not optional. The seller must complete it honestly, and the listing agent must review it for completeness."
            }
          ]
        },

        {
          id: "az_p03",
          order: 3,
          title: "Arizona Investment Property Analysis",
          week: "9-10",
          passingScore: 70,
          icon: "📈",
          objective: "Analyze Arizona investment properties using cap rate, GRM, cash-on-cash return, and 1031 exchanges — with understanding of Arizona's anti-deficiency rules for investors.",
          content: [
            {
              heading: "Arizona Investment Market Metrics",
              body: "Key metrics for Arizona investment property:\n\nCap Rate = NOI ÷ Value\n• NOI = Gross Rents - Vacancy (5–8%) - Operating Expenses (no debt service)\n• Phoenix metro cap rates: 5–6.5% for multifamily (varies by submarket)\n• Tucson: 5.5–7.5% for smaller multifamily\n• Higher cap rates in rural Arizona markets (Yuma, Kingman, Show Low)\n\nGross Rent Multiplier (GRM) = Purchase Price ÷ Annual Gross Rents\n• Phoenix metro GRMs: 12–18 for single-family rentals\n• Lower GRM = better value for investor\n\nCash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested\n• Accounts for actual financing; gives real return on out-of-pocket investment\n\nThe 1% Rule: monthly rent ≥ 1% of purchase price. More achievable in Arizona than coastal CA markets. Common in some Phoenix suburb zip codes, rare in Scottsdale or Paradise Valley.\n\nArizona's short-term rental market (Scottsdale, Sedona, Tucson, Flagstaff): significantly higher gross rents vs. long-term rental, but more management intensity and seasonal variation."
            },
            {
              heading: "1031 Exchange & Anti-Deficiency for Investors",
              body: "IRC Section 1031 Exchange allows deferral of capital gains tax when exchanging investment property for like-kind investment property:\n• 45 days to identify replacement property after closing relinquished property\n• 180 days to close on replacement property\n• Use a Qualified Intermediary (QI) — cannot touch the funds\n• Any real property for any real property (residential to commercial is fine)\n\nArizona investors: no state clawback rule (unlike California). An Arizona investor can exchange into an out-of-state property and sell it later without Arizona taxing the deferred gain.\n\nAnti-deficiency for investors:\n• Arizona's anti-deficiency protection (ARS § 33-814) only applies to purchase money loans on 1–2 family dwellings on 1 acre or less used as a RESIDENCE\n• Investment properties (non-owner-occupied) do NOT qualify — lender CAN pursue deficiency judgment after foreclosure on investment property\n• Investors should understand this risk when acquiring leveraged Arizona investment properties\n\nRent control preemption: Arizona prohibits local rent control (ARS § 33-1329). Unlike California, Arizona investors face no state or local rent caps on long-term rentals — a significant advantage for buy-and-hold investors."
            }
          ],
          quiz: [
            {
              id: "az_p03q01",
              prompt: "An Arizona investor owns a 4-unit apartment building (not owner-occupied) and defaults on the mortgage. After a trustee's sale, the lender wants to sue for the remaining loan balance. Under Arizona law, the lender:",
              choices: [
                "Cannot — Arizona's anti-deficiency statute protects all real estate loans",
                "Can pursue a deficiency judgment — the anti-deficiency rule does not cover non-owner-occupied investment property",
                "Cannot — but only if the loan was a purchase money loan",
                "Can pursue, but only in Justice Court for amounts under $10,000"
              ],
              answer: 1,
              explanation: "Arizona's anti-deficiency protection (ARS § 33-814) only applies to purchase money loans on 1–2 family dwellings on 1 acre or less that are used as a RESIDENCE. A non-owner-occupied 4-unit investment property does NOT qualify. The lender can pursue a deficiency judgment for the remaining balance after the trustee's sale."
            },
            {
              id: "az_p03q02",
              prompt: "An Arizona investor closes the sale of their relinquished property on May 1. What is the LATEST date they can identify replacement property in a 1031 exchange?",
              choices: ["May 31 (30 days)", "June 15 (45 days)", "July 31 (90 days)", "October 28 (180 days)"],
              answer: 1,
              explanation: "Under IRC Section 1031, the investor must identify replacement property within 45 DAYS of closing the relinquished property. May 1 + 45 days = June 15. They then have until October 28 (180 days from May 1) to close on the replacement property."
            }
          ]
        },

        {
          id: "az_p04",
          order: 4,
          title: "RESPA Compliance & Lead Generation in Arizona",
          week: "11-12",
          passingScore: 70,
          icon: "🎯",
          objective: "Build compliant lead generation systems for the Arizona market without creating illegal RESPA kickback arrangements.",
          content: [
            {
              heading: "RESPA Section 8 in the Arizona Market",
              body: "RESPA Section 8 prohibits giving or accepting anything of value for referrals of settlement service business. This applies to all Arizona real estate and mortgage professionals.\n\nILLEGAL:\n• Title company paying for an agent's marketing in exchange for referrals\n• Lender sponsoring office events in exchange for exclusive mortgage leads\n• MSAs (Marketing Services Agreements) that are disguised referral fee arrangements\n• Gifts (meals, events, trips) given in exchange for referrals\n\nLEGAL:\n• Paying fair market value for genuine services rendered (desk fees, print ads at market rate)\n• AfBAs with proper written disclosure and true ownership interest\n• Normal marketing and advertising\n• Co-hosting community events where no referral is conditioned on attendance\n\nArizona NAR settlement impact: with buyer agent compensation restructured post-2024, some creative but illegal compensation arrangements may emerge. MLOs and agents must ensure any creative structure passes RESPA Section 8 scrutiny."
            },
            {
              heading: "Arizona-Specific Lead Sources (Compliant)",
              body: "Arizona-compliant lead generation strategies:\n\n1. Active Adult / 55+ Communities:\n• Arizona has hundreds of active adult communities (Sun City, Trilogy, Robson Ranch)\n• Attend community events, offer free seminars on financing for downsizers, HECMs for seniors\n• NO payment for leads — education-based marketing only\n\n2. Arizona FSBO Outreach:\n• Maricopa County has significant FSBO activity\n• Offer a free pre-approval to any buyer a FSBO seller finds\n• Relationship-based; no referral fee involved\n\n3. New Construction Builder Partnerships:\n• Preferred lender arrangements with Arizona homebuilders (Pulte, Taylor Morrison, Shea, Meritage are all major in AZ)\n• Legal if: disclosed to buyer, buyer is free to use another lender, no required referral\n• Builder CANNOT require use of preferred lender as condition of purchase\n\n4. Relocation Companies:\n• Many Arizona buyers are corporate relocations from CA, IL, TX\n• Relocation referral fees ARE allowed (to licensed relocation companies/brokers) — this is carved out from RESPA's Section 8 prohibition for certain corporate relocation arrangements"
            }
          ],
          quiz: [
            {
              id: "az_p04q01",
              prompt: "A Scottsdale title company pays for an agent's annual ARMLS subscription in exchange for sending them all their title business. This is:",
              choices: [
                "Legal if the ARMLS fee is under $500",
                "A RESPA Section 8 violation — anything of value for referrals is prohibited",
                "Legal if disclosed to the agent's clients in writing",
                "Legal under an Affiliated Business Arrangement"
              ],
              answer: 1,
              explanation: "Paying for an agent's ARMLS (Arizona MLS) subscription in exchange for title referrals is giving a 'thing of value' for settlement service referrals — a classic RESPA Section 8 violation. The dollar amount is irrelevant. Disclosure alone does not cure a Section 8 violation."
            },
            {
              id: "az_p04q02",
              prompt: "An Arizona homebuilder tells a buyer they must use the builder's preferred lender to purchase the home. This requirement is:",
              choices: [
                "Legal — builders can set their own terms",
                "Legal only if the preferred lender offers competitive rates",
                "A RESPA violation — buyers cannot be required to use a specific settlement service provider",
                "Legal if disclosed in the purchase contract"
              ],
              answer: 2,
              explanation: "RESPA prohibits requiring buyers to use a specific settlement service provider as a condition of the sale or loan. While builders CAN have preferred lenders and offer incentives for using them, they CANNOT make it a mandatory condition of purchasing the home. Doing so violates RESPA's anti-tying provisions."
            }
          ]
        }

      ] // end practical modules
    } // end practical track

  }, // end tracks

  studyPlan: [
    { weeks: "1-2", focus: "AZ licensing roadmap + ADRE rules + Fingerprint Clearance Card + property ownership + community property + Gila & Salt River Meridian" },
    { weeks: "3-4", focus: "Agency (ARS § 32-2151.01) + SPDS + AAR Residential Purchase Contract + BINSR + finance (deeds of trust + anti-deficiency)" },
    { weeks: "5-6", focus: "Title & escrow + deed types + Disclaimer Deed + AZ recording (race-notice) + land use + STR laws + subdivision Public Report" },
    { weeks: "7-8", focus: "ADRE state law + trust funds (5-year records) + advertising rules + fair housing + Recovery Fund + valuation + LPV/FCV assessment system" },
    { weeks: "9-10", focus: "Practical skills: buyer rep, BINSR negotiation, listing disclosure, Arizona closing process" },
    { weeks: "11-12", focus: "Investment analysis + 1031 exchange + RESPA compliance + MLO state law (DIFI) + exam readiness: full practice exams" }
  ],

  resources: [
    { label: "ADRE Salesperson License Requirements", url: "https://www.azre.gov/Licensees/Licensing/SalespersonLicenses.aspx", category: "broker" },
    { label: "ADRE Commissioner's Rules (AAC Title 4 Ch 28)", url: "https://www.azre.gov/Licensees/CommissionersRules.aspx", category: "broker" },
    { label: "AZ Fingerprint Clearance Card — DPS", url: "https://www.azidentity.com", category: "broker" },
    { label: "AAR Standard Forms Library", url: "https://www.aaronline.com/store/forms/", category: "broker" },
    { label: "ARS Title 32 Chapter 20 (Real Estate Law)", url: "https://www.azleg.gov/arstitle/", category: "broker" },
    { label: "AZ Property Tax — Limited Property Value", url: "https://azdor.gov/businesses-arizona/property-tax", category: "broker" },
    { label: "AZ DIFI MLO Licensing", url: "https://difi.az.gov/financial-institutions/mortgage-brokers-bankers", category: "mlo" },
    { label: "NMLS SAFE MLO Exam Prep", url: "https://mortgage.nationwidelicensingsystem.org/profreq/testing/Pages/default.aspx", category: "mlo" },
    { label: "Arizona HOME Plus Program", url: "https://housing.az.gov/homebuyers/home-plus", category: "mlo" },
    { label: "CFPB RESPA Resources", url: "https://www.consumerfinance.gov/rules-policy/regulations/1024/", category: "mlo" },
    { label: "AZ Short-Term Rental Laws (ADOH)", url: "https://housing.az.gov", category: "broker" },
    { label: "AZ Real Estate Recovery Fund", url: "https://www.azre.gov/Licensees/RecoveryFund.aspx", category: "broker" }
  ]
};

// Export for use in app
if (typeof module !== 'undefined') module.exports = CURRICULUM_AZ;
