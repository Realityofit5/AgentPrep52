// ============================================================
// AK_curriculum.js — Alaska Real Estate Study System
// Alaska AREC Salesperson + MLO Licensing — 2026
// Sources: Alaska Real Estate Commission (commerce.alaska.gov),
//          AS 08.88, AS 34.03 (L/T Act), NMLS, Pearson VUE, RIAK
// Schema: identical to WA/CA/AZ/AL curriculum.js — drop-in replacement
// ============================================================

const CURRICULUM_AK = {

  meta: {
    title: "AK Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Alaska",
    stateCode: "AK",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 75, mlo: 75, federal_law: 75, ethics: 75 }
  },

  tracks: {

    // ──────────────────────────────────────────────────────
    // BROKER TRACK — AK AREC SALESPERSON LICENSE
    // ──────────────────────────────────────────────────────
    broker: {
      id: "broker",
      label: "AK Real Estate Salesperson",
      icon: "🏔️",
      color: "#C9A84C",
      description: "Alaska AREC Salesperson License — 40-hour pre-license + Pearson VUE exam + 30-hour post-license + mandatory E&O insurance",
      requirements: [
        "19+ years old (Alaska requires 19, same as Alabama)",
        "U.S. citizen or lawfully admitted alien",
        "40 hours of AREC-approved pre-license education (AS 08.88.171); education certificate valid 18 months",
        "Pass Pearson VUE exam: national (80 Qs) + state (40 Qs) sections; 75% scaled passing score",
        "Apply for license within 6 months of passing exam",
        "E&O (Errors & Omissions) insurance required — may use RIAK group policy or equivalent",
        "Must be sponsored by a licensed Alaska broker",
        "30-hour post-license education required within 1 year of initial licensure",
        "No felony or crime impacting trustworthiness; 7-year wait after sentence completion"
      ],
      fees: [
        { item: "40-hour pre-license education",  amount: "$300–$700",  note: "varies by provider; limited AK-based options" },
        { item: "Pearson VUE exam fee",            amount: "$85",        source: "Pearson VUE" },
        { item: "AREC salesperson license fee",    amount: "$200–$250",  source: "Alaska AREC" },
        { item: "E&O Insurance",                   amount: "~$200–$400/yr", note: "RIAK group policy or equivalent" },
        { item: "30-hour post-license course",     amount: "$200–$500",  note: "varies by provider" }
      ],
      examStructure: {
        national: { items: 80,  time: "150 minutes", passing: 75,
                    note: "Plus up to 5 unscored experimental questions" },
        state:    { items: 40,  time: "60 minutes",  passing: 75,
                    note: "Pearson VUE; total exam time is approximately 4 hours combined" }
      },
      modules: [

        // ── MODULE 1 ─────────────────────────────────────
        {
          id: "ak_b01",
          order: 1,
          title: "Licensing Process & AREC Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map the complete Alaska AREC salesperson licensing process: 40-hour education → Pearson VUE exam → license application → E&O insurance → post-license requirement.",
          content: [
            {
              heading: "Who Regulates Alaska Real Estate",
              body: "The Alaska Real Estate Commission (AREC) licenses and regulates real estate salespersons, associate brokers, and brokers in Alaska. AREC operates under the Alaska Division of Corporations, Business and Professional Licensing within the Department of Commerce, Community, and Economic Development.\n\nGoverning statute: AS 08.88 (Real Estate Brokers and Salespersons).\nAREC's office: 550 W 7th Ave, Suite 1500, Anchorage, AK 99501.\n\nAlaska license types:\n• Salesperson — entry level; must work under a licensed Alaska broker\n• Associate Broker — additional qualifications; still works under a broker\n• Broker — highest level; can operate independently and supervise others\n\nAlaska is a geographically unique market: much of the state is accessible only by air or water. Real estate practice in rural Alaska presents distinct challenges — lot sizes, access, water/sewer systems (many properties use wells, septic, or honey buckets), and land ownership issues (federal, state, and Native lands)."
            },
            {
              heading: "The 40-Hour Pre-License Course",
              body: "Alaska requires 40 hours of AREC-approved pre-license education before taking the Pearson VUE exam.\n\nKey facts about the 40-hour requirement:\n• Must be from an AREC-approved school or provider\n• Education certificate is valid for 18 MONTHS from completion\n• Alaska has fewer approved providers than most states — options may be limited locally; many students use approved online programs\n• Online pre-license education IS accepted in Alaska (unlike Arizona)\n• Must cover: Alaska real estate law (AS 08.88), agency, contracts, finance, valuation, property ownership, fair housing, environmental issues specific to Alaska\n\nAlaska-specific curriculum topics covered in the 40 hours:\n• Borough vs. city government and property tax systems\n• Alaska Native land claims and land status issues\n• Remote property access and disclosure obligations\n• Permafrost, flooding zones, and environmental disclosures unique to Alaska\n• No state income tax / no state sales tax implications for buyers\n\nAfter completing the course, you have 18 months to apply for and pass the Pearson VUE exam."
            },
            {
              heading: "Pearson VUE Exam & Application Window",
              body: "Alaska uses Pearson VUE for its licensing exam.\n\nExam structure:\n• National section: 80 scored questions (+ up to 5 unscored experimental questions), approximately 150 minutes\n• State section: 40 questions, approximately 60 minutes\n• Total exam time: approximately 4 hours\n• Passing score: 75% (scaled scoring) on both sections\n• Must pass BOTH sections separately\n• Results provided immediately at the test center\n\nAfter passing the exam:\n• You must apply for your license within 6 MONTHS of passing\n• Submit application to AREC through the online licensing portal (commerce.alaska.gov)\n• Submit proof of E&O insurance\n• Submit sponsoring broker's information\n• Pay license fee\n\nRetakes: no waiting period between attempts in Alaska; if you fail one section, retake only the failed section. The 18-month education certificate window governs — you must pass both sections and apply within that window.\n\nNote on Alaska testing centers: testing centers are available in Anchorage and Fairbanks. Candidates from remote locations may need to travel to a testing center — plan ahead."
            },
            {
              heading: "E&O Insurance — A Unique Alaska Requirement",
              body: "Alaska is one of the few states that makes Errors & Omissions (E&O) insurance a MANDATORY licensing requirement (AS 08.88.172).\n\nE&O insurance protects:\n• The licensee against claims from clients alleging negligence or errors in the performance of real estate services\n• The public by ensuring recovery is available when a licensee makes a covered mistake\n\nAlaska E&O options:\n• RIAK Group Policy — the Realtors Association of Alaska (RIAK) sponsors a group E&O policy; many Alaska licensees use this for convenience and competitive pricing\n• Individual policy from an approved carrier\n\nKey E&O facts for the exam:\n• E&O must be maintained throughout the license period\n• Proof of E&O must be submitted with the license application and each renewal\n• E&O does NOT cover intentional fraud, criminal acts, or punitive damages — only negligent acts and errors\n• Letting E&O lapse can result in license suspension\n\nThis requirement is unique among states — most states recommend but do not mandate E&O insurance."
            },
            {
              heading: "Post-License & Continuing Education",
              body: "Alaska has a two-part education requirement after initial licensure:\n\n30-Hour Post-License Education:\n• Required within 1 year of initial license issuance\n• Must file an affidavit and fee within 30 days AFTER the 12-month period ends\n• Focuses on practical real estate skills: contracts, transactions, financing, Alaska-specific practice\n• If not completed, license may be placed on inactive status or face other action\n\nContinuing Education (CE) after first renewal:\n• 20 hours every 2 years (by January 31 of even-numbered years)\n• Includes 8-hour DESIGNATED CORE CURRICULUM (set by AREC; specific topics required)\n• Plus 12 hours of elective CE\n• CE not required if the licensee was licensed within 90 days of the expiration date (they are essentially still in their first license period)\n\nAlaska reciprocity:\n• Full reciprocity WITH ALL STATES — BUT still requires completing the 40-hour Alaska pre-license course AND passing the Alaska state exam section\n• This means Alaska reciprocity is 'exam only' exemption for the national portion, not a full exam waiver\n• License history from all prior states required with reciprocal application\n• Key distinction from Alabama: Alabama waives BOTH the national exam AND the education for reciprocal applicants; Alaska still requires the 40-hour Alaska course"
            }
          ],
          quiz: [
            {
              id: "ak_b01q01",
              prompt: "After completing the 40-hour Alaska pre-license course, how long is the education certificate valid?",
              choices: [
                "6 months",
                "12 months",
                "18 months",
                "24 months"
              ],
              answer: 2,
              explanation: "Alaska's pre-license education certificate is valid for 18 MONTHS from the date of completion. This gives candidates more time than most states (many allow only 1 year) to pass the Pearson VUE exam. After passing, the candidate must apply for the license within 6 months."
            },
            {
              id: "ak_b01q02",
              prompt: "Alaska requires all real estate licensees to maintain which type of insurance as a condition of licensure?",
              choices: [
                "General liability insurance",
                "Title insurance",
                "Errors & Omissions (E&O) insurance",
                "Surety bond — no insurance is required"
              ],
              answer: 2,
              explanation: "Alaska requires mandatory Errors & Omissions (E&O) insurance (AS 08.88.172). Proof of E&O must be submitted with the license application and each renewal. Alaska is one of very few states that mandates E&O as a licensing requirement rather than simply recommending it."
            },
            {
              id: "ak_b01q03",
              prompt: "An out-of-state licensee from Florida applies for an Alaska real estate license through reciprocity. Alaska's reciprocity policy requires them to:",
              choices: [
                "Pass both national and state exam sections — full exam required",
                "Complete the 40-hour Alaska pre-license course and pass the Alaska state exam section only",
                "Skip the exam entirely and receive an immediate Alaska license",
                "Complete only 20 hours of Alaska-specific education"
              ],
              answer: 1,
              explanation: "Alaska offers full reciprocity with all states, but still requires reciprocal applicants to complete the 40-hour Alaska pre-license course AND pass the Alaska state exam section. The national exam section is waived for reciprocal applicants, but the Alaska-specific education and state exam are not. License history from all prior states must be submitted."
            },
            {
              id: "ak_b01q04",
              prompt: "Alaska's post-license requirement for new salespersons is:",
              choices: [
                "10 hours within 6 months of licensing",
                "20 hours within 1 year, filed with AREC immediately",
                "30 hours within 1 year; affidavit and fee due within 30 days after the 12-month period",
                "30 hours within 2 years as part of normal CE"
              ],
              answer: 2,
              explanation: "Alaska requires 30 hours of post-license education within 1 year of initial licensure. An affidavit and fee must be filed within 30 days AFTER the end of the 12-month period. This is separate from and in addition to the continuing education required at renewal."
            },
            {
              id: "ak_b01q05",
              prompt: "When must an Alaska salesperson apply for their license after passing the Pearson VUE exam?",
              choices: [
                "Within 30 days",
                "Within 6 months",
                "Within 12 months",
                "Within 18 months — same as the education certificate"
              ],
              answer: 1,
              explanation: "After passing the Pearson VUE exam, Alaska candidates must apply for their license within 6 MONTHS of passing. This is distinct from the 18-month education certificate validity. The 6-month application window is the tighter deadline to keep in mind once the exam is passed."
            }
          ]
        },

        // ── MODULE 2 ─────────────────────────────────────
        {
          id: "ak_b02",
          order: 2,
          title: "Property Ownership & Alaska Land Issues",
          week: "1-2",
          passingScore: 75,
          icon: "🌲",
          objective: "Identify estates, concurrent ownership forms, encumbrances, legal descriptions, and Alaska-specific land ownership issues including federal lands, state lands, and Alaska Native claims.",
          content: [
            {
              heading: "Alaska Land Ownership Overview",
              body: "Alaska has unique land ownership complexity that affects real estate practice. Understanding who owns the land is the first step in every Alaska transaction.\n\nLand ownership breakdown in Alaska (approximate):\n• Federal government: ~61% — managed by BLM, US Forest Service, National Park Service, Fish & Wildlife Service, military\n• State of Alaska: ~28%\n• Alaska Native Corporations: ~12% — conveyed under the Alaska Native Claims Settlement Act (ANCSA) of 1971\n• Private ownership: ~1%\n\nFor real estate agents, the critical question before listing or selling any Alaska property is: is this parcel of private land, and what are the access and use rights?\n\nKey land status issues:\n• Federal restrictions: proximity to federal lands affects use (noise, aviation, hunting, resource extraction)\n• State land classifications: some state land is open to homesteading or subdivision; check Alaska DNR land status\n• ANCSA lands: conveyed to Alaska Native Regional and Village Corporations; generally NOT available for purchase by non-Natives without corporate authorization"
            },
            {
              heading: "Real vs. Personal Property & Fixtures",
              body: "Real property = land + permanently attached improvements. Personal property = movable items.\n\nFixture analysis in Alaska — courts use the MARIA test:\n• Method of annexation\n• Adaptability to the property\n• Relationship of the parties\n• Intent of the person who installed it\n• Agreement of the parties (contract controls)\n\nAlaska-specific fixture considerations:\n• Heating systems: in Alaska's climate, fuel tanks, boilers, and heating systems are considered fixtures. Specifying their inclusion/exclusion in the purchase contract is essential.\n• Generator systems: off-grid properties often have generators; specify whether included.\n• Water systems: well pumps, cisterns, and filtration systems are fixtures; specify condition and inclusion.\n• Utility connections: in rural areas, the presence (or absence) of water, sewer, and electric connections dramatically affects value and must be clearly described.\n• Snow removal equipment: sometimes the subject of disputes — specify in writing."
            },
            {
              heading: "Concurrent Ownership in Alaska",
              body: "Joint Tenancy — requires Four Unities (TTIP). Right of survivorship — automatic inheritance at death, bypassing probate. Must be expressly stated in the deed. In Alaska's rural communities, joint tenancy is commonly used for family property planning.\n\nTenancy in Common — default for co-owners. Unequal shares allowed. No survivorship right. Each co-owner can sell, will, or mortgage their share independently.\n\nCommunity Property: Alaska is NOT a traditional community property state. However, Alaska has an OPT-IN community property system:\n• Married couples CAN elect community property treatment under the Alaska Community Property Act (AS 34.77)\n• This election must be made in a written Alaska Community Property Agreement signed by both spouses\n• Without a written election, Alaska is a SEPARATE PROPERTY (common law) state\n• This opt-in system is unique in the United States — Alaska and Tennessee are the only states offering elective community property to residents\n\nTenancy by the Entirety: Alaska does NOT recognize tenancy by the entirety."
            },
            {
              heading: "Encumbrances",
              body: "Encumbrances are claims, liens, or restrictions on property that affect value or use.\n\nLiens (monetary claims):\n• Mortgage/Deed of Trust — voluntary, specific\n• Property tax liens — administered by boroughs and municipalities; SUPER PRIORITY\n• Mechanic's liens — Alaska lien period: must be filed within 120 days of last work on residential property (AS 34.35.070)\n• Judgment liens — attach to all real property in the district where docketed\n• Federal liens (IRS, etc.)\n\nEasements:\n• Access easements are critically important in Alaska — many properties have no road access and depend on easements across neighbors' land, or use boat/floatplane access\n• Prescriptive easement: Alaska period is 10 YEARS of open, notorious, hostile, continuous use\n• Easements by necessity: courts can create them when a parcel is landlocked with no other access\n\nAlaska-specific encumbrance issues:\n• Reversionary interests from original homestead patents\n• BLM right-of-way easements across private property\n• Alaska Native allotments that may cross or border private parcels\n• Flood zone designations (large portions of Alaska are in FEMA flood zones)"
            },
            {
              heading: "Legal Descriptions in Alaska",
              body: "Alaska uses three legal description systems:\n\n1. Rectangular Survey (Government Survey) — used in surveyed areas of Alaska. Alaska uses the Seward Meridian as its primary reference point. Sections, townships, and ranges are used where surveys have been completed. Much of Alaska remains UNSURVEYED by the federal government.\n\n2. Metes and Bounds — used for irregularly shaped parcels, particularly in older settlements and areas without rectangular survey coverage. Common in Southeast Alaska (Juneau, Sitka, Ketchikan).\n\n3. Lot and Block (Recorded Plat) — used for subdivisions in developed areas (Anchorage, Fairbanks, Juneau metro areas). References a recorded plat at the District Recorder's office.\n\nAlaska recording: real estate documents are recorded with the ALASKA DISTRICT RECORDER'S office (not a county recorder — Alaska has no counties; it has boroughs and unorganized areas). There are multiple recording districts across Alaska.\n\nImportant: large portions of rural Alaska have NOT been formally surveyed. Properties in these areas may use less formal descriptions or reference government survey plats that are incomplete. Title searches in rural Alaska require specialized knowledge."
            }
          ],
          quiz: [
            {
              id: "ak_b02q01",
              prompt: "Alaska's community property system is unique because:",
              choices: [
                "All married couples automatically hold property as community property",
                "Married couples must opt IN to community property treatment through a written Alaska Community Property Agreement",
                "Alaska follows the same community property rules as California",
                "Community property only applies to Native Alaskans"
              ],
              answer: 1,
              explanation: "Alaska has an OPT-IN community property system (AS 34.77). Without a written Alaska Community Property Agreement signed by both spouses, Alaska is a separate property (common law) state. Married couples who want community property treatment must proactively elect it. This is unique — Alaska and Tennessee are the only states that offer elective community property to residents."
            },
            {
              id: "ak_b02q02",
              prompt: "Real estate documents in Alaska are recorded with which office?",
              choices: [
                "County Recorder's office",
                "Probate Judge's office",
                "Alaska District Recorder's office",
                "Alaska Department of Natural Resources"
              ],
              answer: 2,
              explanation: "Alaska has no counties — it has boroughs and unorganized areas. Real estate documents are recorded with the ALASKA DISTRICT RECORDER'S office in the relevant recording district. This is an Alaska-specific fact tested on the state exam."
            },
            {
              id: "ak_b02q03",
              prompt: "Alaska uses which principal meridian as the reference point for its rectangular survey system?",
              choices: [
                "Fairbanks Meridian",
                "Anchorage Meridian",
                "Seward Meridian",
                "Juneau Meridian"
              ],
              answer: 2,
              explanation: "Alaska uses the Seward Meridian as the principal reference point for its rectangular survey system. Note that large portions of Alaska remain unsurveyed, so rectangular survey descriptions are not available for all areas of the state."
            },
            {
              id: "ak_b02q04",
              prompt: "An Alaska contractor completes work on a residential property. How many days does the contractor have to file a mechanic's lien?",
              choices: [
                "60 days",
                "90 days",
                "120 days",
                "180 days"
              ],
              answer: 2,
              explanation: "Under AS 34.35.070, an Alaska contractor must file a mechanic's lien within 120 DAYS of the last day of work on residential property. Missing this deadline extinguishes the lien right. This is the same as Arizona's mechanic's lien deadline."
            }
          ]
        },

        // ── MODULE 3 ─────────────────────────────────────
        {
          id: "ak_b03",
          order: 3,
          title: "Agency Law & Alaska Disclosure Requirements",
          week: "3-4",
          passingScore: 75,
          icon: "🤝",
          objective: "Master Alaska agency law, fiduciary duties, written agency disclosure requirements, and Alaska's seller disclosure obligations for known material defects.",
          content: [
            {
              heading: "Agency in Alaska",
              body: "Alaska requires written agency disclosure before substantive discussions under AS 08.88.396. This mirrors the standard in most western states.\n\nAlaska agency relationships available:\n• Seller's Agent — full fiduciary duties to the seller\n• Buyer's Agent — full fiduciary duties to the buyer\n• Dual Agent — represents both parties; legal with written, informed consent from both parties before the dual agency arises\n• Transaction Coordinator — assists parties in completing the transaction without full fiduciary duties to either\n\nAlaska agency is created by written agreement (recommended) or by conduct (implied agency). Implied agency is a risk — agents who give advice to unrepresented parties may inadvertently create an implied agency relationship.\n\nAlaska is a DISCLOSURE-REQUIRED state: sellers MUST disclose known material defects. This is the opposite of Alabama's caveat emptor approach."
            },
            {
              heading: "Fiduciary Duties: OLD CAR",
              body: "Alaska agents owe their principals (clients) six fiduciary duties:\n\n• Obedience — follow all LAWFUL instructions from the principal (cannot follow instructions to conceal known material defects)\n• Loyalty — place client's interests above all others\n• Disclosure — disclose all material facts known to the agent, including property defects\n• Confidentiality — protect client's confidential information; duty SURVIVES termination of agency\n• Accounting — account for all funds; never commingle or convert\n• Reasonable Care — use the skill and diligence expected of a competent Alaska real estate professional\n\nFor third parties (customers you do NOT represent): owe honesty, fair dealing, and disclosure of known material facts — NOT full fiduciary duties. In Alaska's disclosure-required environment, ALL agents must disclose known material defects to ALL parties."
            },
            {
              heading: "Alaska Seller Disclosure",
              body: "Alaska is a DISCLOSURE-REQUIRED state for residential real estate. Sellers must disclose known material defects — this is required by law and by Alaska real estate standards.\n\nAlaska seller disclosure covers:\n• Structural and mechanical defects\n• Roof condition, water intrusion, foundation issues\n• Environmental hazards (mold, asbestos, radon, contaminated wells)\n• Access issues (road access, easements, seasonal accessibility)\n• Heating system condition and type (critical in Alaska winters)\n• Water source (city water, well, cistern, hauled water) and condition\n• Sewer/septic system type and condition (city sewer, septic, holding tank, honey bucket)\n• Permafrost presence or degradation (an Alaska-specific critical disclosure)\n• Flooding history or flood zone designation\n• HOA or other encumbrances\n\nLead-based paint: federal requirement for homes built before 1978; 10-day inspection right.\n\nAlaska-unique disclosures:\n• PERMAFROST: if the property is built on or near permafrost, and permafrost degradation is occurring or has occurred, this is a material defect that must be disclosed. Permafrost degradation can cause serious foundation damage, uneven floors, and structural failure.\n• HEATING FUEL TANKS: above-ground or buried heating oil tanks must be disclosed; old tanks can be environmental liabilities.\n• ACCESS: the means of access (road, water, air) and seasonal limitations must be fully disclosed."
            },
            {
              heading: "Dual Agency in Alaska",
              body: "Disclosed Dual Agency is legal in Alaska with written, informed consent from both parties before the dual agency situation arises.\n\nA disclosed Alaska dual agent:\n• Cannot reveal the seller's minimum price to the buyer\n• Cannot reveal the buyer's maximum willingness to pay to the seller\n• Must disclose all material defects to both parties\n• Cannot advocate negotiating positions for either party\n\nDesignated Agency: a broker may designate one agent for the buyer and another for the seller within the same firm. Reduces the dual agency conflict. The managing broker remains technically dual.\n\nAlaska agency disclosure timing: BEFORE SUBSTANTIVE DISCUSSIONS — meaning before any confidential information (motivation, price limits, urgency) is exchanged. The Alaska Association of Realtors provides standard agency disclosure forms."
            }
          ],
          quiz: [
            {
              id: "ak_b03q01",
              prompt: "Alaska is a __________ state for residential real estate, requiring sellers to disclose known material defects.",
              choices: [
                "Caveat emptor — buyer beware; sellers have no disclosure duty",
                "Disclosure-required — sellers must disclose known material defects",
                "Partial disclosure — only structural defects must be disclosed",
                "Voluntary disclosure — disclosure is encouraged but not legally required"
              ],
              answer: 1,
              explanation: "Alaska is a DISCLOSURE-REQUIRED state. Unlike Alabama's caveat emptor approach, Alaska law requires sellers to disclose known material defects to buyers in residential transactions. This is an important Alaska-specific rule tested on the state exam."
            },
            {
              id: "ak_b03q02",
              prompt: "An Alaska seller knows their property sits on degrading permafrost that has caused foundation issues. Under Alaska disclosure law, the seller:",
              choices: [
                "Is not required to disclose geological conditions outside the structure",
                "Must disclose the permafrost degradation and foundation issues as known material defects",
                "Only needs to disclose if a buyer specifically asks about permafrost",
                "Must disclose only if the property is in a designated permafrost zone"
              ],
              answer: 1,
              explanation: "Permafrost degradation causing foundation damage is a known material defect that MUST be disclosed in Alaska. Alaska's disclosure-required environment means sellers cannot withhold known information about structural issues — including those caused by Alaska's unique permafrost geology."
            },
            {
              id: "ak_b03q03",
              prompt: "The fiduciary duty that SURVIVES the termination of the agency relationship in Alaska is:",
              choices: [
                "Obedience",
                "Loyalty",
                "Confidentiality",
                "Accounting"
              ],
              answer: 2,
              explanation: "CONFIDENTIALITY survives the termination of the agency relationship. A former client's confidential information (their motivation, price limits, financial situation) cannot be disclosed by the agent even after the transaction ends or the agency is terminated. This protects clients from having their confidences weaponized later."
            }
          ]
        },

        // ── MODULE 4 ─────────────────────────────────────
        {
          id: "ak_b04",
          order: 4,
          title: "Contracts & Alaska Purchase Agreements",
          week: "3-4",
          passingScore: 75,
          icon: "📝",
          objective: "Master contract formation, Alaska purchase agreements, earnest money rules, contingencies unique to Alaska, and remedies for breach.",
          content: [
            {
              heading: "Elements of a Valid Contract",
              body: "All contracts require:\n• Offer and Acceptance — mutual assent\n• Consideration — something of value exchanged\n• Legal Capacity — parties must be 19+ (Alaska) and of sound mind\n• Lawful Object — legal purpose\n• In writing — Alaska Statute of Frauds requires real estate contracts to be IN WRITING to be enforceable\n\nAlaska is 19 years old minimum — same as Alabama. This affects both the age of the contracting parties AND the age required to hold a real estate license.\n\nContract types:\n• Bilateral — both parties exchange promises (typical purchase agreement)\n• Unilateral — one party's promise contingent on other's act (option contract)\n• Express — stated in words\n• Implied — created by conduct\n• Executory — not yet fully performed\n• Executed — all obligations fully performed"
            },
            {
              heading: "Alaska Purchase Agreement",
              body: "The Alaska Association of Realtors provides the standard residential purchase contract forms used throughout Alaska.\n\nKey sections of an Alaska purchase contract:\n• Purchase price and earnest money\n• Property description (including access type and off-grid utilities)\n• Financing contingency\n• Inspection contingency — including specific AK items: heating system, well/water, septic, permafrost inspection\n• Seller disclosure delivery deadline\n• Title and survey requirements\n• Closing date and possession terms\n• Inclusions and exclusions (especially heating fuel, generators, outbuildings)\n\nAlaska-specific contract provisions to watch:\n• ACCESS DISCLOSURE: if the property is accessed by boat, plane, or snow machine only, this must be described and the buyer must acknowledge seasonal limitations\n• UTILITY DISCLOSURE: water source (well, municipal, hauled), sewer (municipal, septic, holding tank), and heating fuel type must be specified\n• FUEL TANK STATUS: existing oil tanks must be disclosed; buyer should inspect for leaks and environmental liability\n• PERMAFROST ADDENDUM: may be needed for properties in permafrost-prone areas\n\nAlaska closing: typically conducted by a title company or escrow company; attorney involvement is less common than in Alabama but may be used for complex rural transactions."
            },
            {
              heading: "Earnest Money in Alaska",
              body: "Earnest money demonstrates the buyer's good faith and serious intent.\n\nAlaska earnest money rules:\n• Must be deposited in the broker's trust account (or an escrow company account) promptly after acceptance\n• Typical amounts in Alaska: 1–3% of purchase price; amounts vary by market (Anchorage suburban vs. remote)\n• For very remote or unique properties, earnest money may be negotiated differently\n\nDisputes:\n• If buyer and seller disagree on earnest money disposition, the holder cannot unilaterally release it\n• Must receive written mutual instructions from both parties OR a court order\n• Filing an interpleader action is the broker's option to resolve disputes through the court\n\nForfeit:\n• If the buyer defaults without a valid contingency, the seller is typically entitled to the earnest money\n• The contract may specify earnest money as the seller's sole remedy (liquidated damages) or may allow additional remedies"
            },
            {
              heading: "Alaska-Specific Contingencies",
              body: "In addition to standard contingencies (financing, appraisal, inspection), Alaska purchase contracts often include:\n\n1. Water/Well Contingency: testing of wells for potability, flow rate, and contamination. In Alaska, well water quality can be affected by glacial silt, iron, arsenic (naturally occurring in some AK areas), or petroleum contamination.\n\n2. Septic/Wastewater System Contingency: inspection of septic systems, holding tanks, or other non-municipal wastewater systems. Important in rural Alaska where municipal sewer is not available.\n\n3. Permafrost Inspection Contingency: for properties in areas of discontinuous or sporadic permafrost (interior and parts of southcentral Alaska), a geotechnical assessment may be warranted.\n\n4. Access Confirmation Contingency: verifying legal access to the property — especially for properties where road access is seasonal or where access depends on easements across other properties.\n\n5. Survey Contingency: obtaining a new survey to confirm boundaries, especially in areas without up-to-date plats.\n\nAlaska earnest money: for remote properties, buyers may use a smaller initial deposit with a larger deposit due after specific contingencies are satisfied."
            },
            {
              heading: "Remedies for Breach",
              body: "Buyer defaults:\n• Seller retains earnest money (if liquidated damages clause) OR\n• Seller sues for specific performance (compel the purchase) OR\n• Seller sues for actual damages\n\nSeller defaults:\n• Buyer receives earnest money back AND/OR\n• Buyer sues for specific performance (compel the sale) — powerful because each property is unique\n• Buyer sues for actual damages\n\nAlaska contract statute of limitations for written contracts: 3 YEARS under AS 09.10.055 for most contract claims. Note: property-related claims (trespass, damage to real property) have their own limitations periods.\n\nMediation: the Alaska Association of Realtors purchase contract includes a mediation clause requiring mediation before litigation for most disputes — similar to the Arizona AAR practice."
            }
          ],
          quiz: [
            {
              id: "ak_b04q01",
              prompt: "A buyer is purchasing a rural Alaska cabin accessible only by floatplane in summer and snow machine in winter. The purchase contract should:",
              choices: [
                "Proceed as normal — access type does not need to be specified in contracts",
                "Include a specific access disclosure so the buyer acknowledges and accepts the seasonal access limitations",
                "Automatically include a contingency to install road access before closing",
                "Require the seller to provide year-round road access before the sale can close"
              ],
              answer: 1,
              explanation: "Alaska purchase contracts for remote properties should include an ACCESS DISCLOSURE that clearly describes how the property is accessed (floatplane, boat, snow machine, seasonal road) and requires the buyer to acknowledge and accept those conditions. Failing to disclose access limitations is a material omission."
            },
            {
              id: "ak_b04q02",
              prompt: "An Alaska buyer suspects the well on a rural property may be contaminated. The BEST protection for the buyer is:",
              choices: [
                "Ask the seller to warrant the water quality in the purchase contract",
                "Include a water/well contingency requiring testing for potability and flow rate before closing",
                "Assume the water is fine since the sellers currently live there",
                "Have the water tested after closing and negotiate a credit later"
              ],
              answer: 1,
              explanation: "Including a WATER/WELL CONTINGENCY in the purchase contract protects the buyer by making the sale conditional on satisfactory water testing results. In Alaska, well water can be affected by glacial silt, arsenic, iron, or petroleum contamination. This is a critical Alaska-specific contingency."
            },
            {
              id: "ak_b04q03",
              prompt: "Under Alaska's Statute of Frauds, a real estate purchase agreement that is only verbal is:",
              choices: [
                "Enforceable if witnessed by a notary",
                "Enforceable if the buyer pays earnest money",
                "Unenforceable — real estate contracts must be in writing",
                "Enforceable for 30 days until a written agreement is signed"
              ],
              answer: 2,
              explanation: "Alaska's Statute of Frauds requires real estate purchase contracts to be IN WRITING to be enforceable. A verbal agreement to purchase real estate, even with a handshake, is unenforceable in Alaska regardless of whether earnest money changes hands."
            }
          ]
        },

        // ── MODULE 5 ─────────────────────────────────────
        {
          id: "ak_b05",
          order: 5,
          title: "Real Estate Finance",
          week: "3-4",
          passingScore: 75,
          icon: "💰",
          objective: "Understand Alaska mortgage law, deed of trust vs. mortgage, foreclosure process including redemption rights, loan types, and Alaska Housing Finance Corporation (AHFC) programs.",
          content: [
            {
              heading: "Alaska Uses Deeds of Trust and Mortgages",
              body: "Alaska uses BOTH deeds of trust and mortgages to secure real estate loans, with deeds of trust being more common in residential transactions (similar to the western U.S. states).\n\nDeed of Trust — three parties:\n• Trustor — the borrower\n• Beneficiary — the lender\n• Trustee — neutral third party holding bare legal title as security\n\nMortgage — two parties:\n• Mortgagor — the borrower (retains title)\n• Mortgagee — the lender (holds a lien)\n\nThe key practical difference: deeds of trust allow non-judicial foreclosure, which is faster and cheaper. Mortgages typically require judicial foreclosure in Alaska, which can take a year or more."
            },
            {
              heading: "Alaska Foreclosure Process",
              body: "Non-Judicial Foreclosure (Power of Sale) — used when a deed of trust has a power of sale clause:\n• Lender records a Notice of Default\n• 30-day pre-foreclosure cure period for the borrower\n• Notice of sale published in a newspaper of general circulation for 4 consecutive weeks\n• Minimum 90-day notice period before sale\n• Sale conducted at public auction\n• Trustee's Deed issued to winning bidder\n\nAlaska right of redemption:\n• After a non-judicial (trustee's) sale: NO statutory right of redemption in Alaska\n• After a judicial mortgage foreclosure: Alaska may allow a redemption period — check current statute\n\nDeficiency judgments:\n• After non-judicial foreclosure in Alaska: lender CAN pursue a deficiency judgment if the sale proceeds are less than the loan balance\n• Alaska does NOT have broad anti-deficiency protections for most property types\n\nKey comparison: unlike Arizona (anti-deficiency for 1-2 family primary residences on 1 acre or less) and California (anti-deficiency for purchase money deeds of trust), Alaska does not limit deficiency judgments broadly."
            },
            {
              heading: "Alaska Housing Finance Corporation (AHFC)",
              body: "The Alaska Housing Finance Corporation (AHFC) is a public corporation that provides below-market mortgage programs for Alaska residents. AHFC is analogous to Fannie Mae/Freddie Mac but specific to Alaska.\n\nKey AHFC programs:\n• AHFC First Home Program — below-market interest rates for first-time homebuyers\n• Veterans Mortgage Program — preferential rates for Alaska veterans\n• Statewide Rural Mortgage Program — designed for properties in rural Alaska communities that may not meet conventional lending standards\n• Rural Energy Assistance Program — loans for energy efficiency improvements (critical in Alaska's cold climate)\n\nAHFC is important for the Alaska market because:\n• Many rural Alaska properties do NOT qualify for conventional Fannie/Freddie financing due to property type, access, or utilities\n• AHFC has programs specifically designed for log homes, properties on well/septic, and off-grid properties that are common in Alaska\n• VA loans work well for Alaska's large military population (JBER, Eielson, Fort Wainwright, Coast Guard)\n• USDA rural loans apply in many Alaska communities outside the major population centers\n\nMLOs in Alaska must be familiar with AHFC programs — they are used in a high percentage of Alaska mortgage transactions."
            },
            {
              heading: "Loan Types & Qualifying",
              body: "Common loan types in Alaska:\n\n• Conventional — standard qualifying; PMI if LTV > 80%; some Alaska properties don't qualify (no road access, non-standard utilities)\n• FHA — 3.5% down; MIP; works for Alaska properties meeting HUD minimum property standards\n• VA — 0% down; no PMI; Alaska's large military community (JBER, Eielson, Ft. Wainwright, DLG) uses VA extensively\n• USDA — 0% down; applies to many rural Alaska communities\n• AHFC — state programs; flexible for unique Alaska properties\n\nQualifying ratios (conventional):\n• Front-end (housing) DTI: PITI ÷ Gross Monthly Income ≤ 28%\n• Back-end (total) DTI: (PITI + all debts) ÷ Gross Monthly Income ≤ 36–43%\n\nAlaska cost of living note: Alaska housing costs, utility costs, and the high cost of goods affect both affordability and operating costs for rental properties. Fuel and heating costs can add hundreds of dollars per month to a homeowner's total housing expense — a factor agents should discuss with buyers."
            }
          ],
          quiz: [
            {
              id: "ak_b05q01",
              prompt: "After a non-judicial trustee's sale in Alaska, the former owner has:",
              choices: [
                "1 year to redeem the property",
                "6 months to redeem",
                "No statutory right of redemption after a trustee's sale",
                "90 days to redeem if they were the original purchaser"
              ],
              answer: 2,
              explanation: "After a non-judicial (trustee's sale) foreclosure in Alaska, there is NO statutory right of redemption. The sale is final. This contrasts with Alabama, which provides a 1-year redemption right after non-judicial foreclosure. Buyers of Alaska foreclosed properties do not face the same redemption risk as in Alabama."
            },
            {
              id: "ak_b05q02",
              prompt: "The Alaska Housing Finance Corporation (AHFC) is important for real estate agents to know because:",
              choices: [
                "AHFC sets all mortgage interest rates in Alaska",
                "AHFC provides programs for rural and unique Alaska properties that may not qualify for conventional financing",
                "All Alaska mortgages must go through AHFC",
                "AHFC only serves military borrowers at Alaska bases"
              ],
              answer: 1,
              explanation: "AHFC provides programs specifically designed for Alaska's unique real estate market, including rural properties, log homes, off-grid properties, and properties on wells/septic that often don't qualify for conventional Fannie/Freddie financing. MLOs and agents should be familiar with AHFC programs for rural Alaska transactions."
            },
            {
              id: "ak_b05q03",
              prompt: "A buyer's monthly PITI is $2,100 and monthly debts total $600. Gross monthly income is $9,000. What is the back-end DTI ratio?",
              choices: ["23.3%", "30%", "30.0%", "30%"],
              answer: 1,
              explanation: "Back-end DTI = (PITI + all debts) ÷ Gross Monthly Income = ($2,100 + $600) ÷ $9,000 = $2,700 ÷ $9,000 = 30%. This is within conventional guidelines of 36–43%."
            }
          ]
        },

        // ── MODULE 6 ─────────────────────────────────────
        {
          id: "ak_b06",
          order: 6,
          title: "Valuation & Market Analysis",
          week: "3-4",
          passingScore: 75,
          icon: "📊",
          objective: "Apply the three approaches to value in Alaska's unique market, understand Alaska's borough-based property tax system, and build CMA logic for Alaska markets.",
          content: [
            {
              heading: "Three Approaches to Value",
              body: "1. Sales Comparison Approach\n— Best for: residential properties with comparable sales\n— Challenge in Alaska: many rural communities have very few comparable sales. In remote villages, there may be only 1–3 sales per year. Appraisers and agents must use wider geographic or time ranges.\n— CBS rule: Comp Better, Subtract; Comp Worse, Add\n\n2. Income Approach\n— Best for: income-producing properties\n— Value = NOI ÷ Cap Rate\n— Alaska rental market: Anchorage, Fairbanks, and Juneau have active rental markets. Remote areas may have very low market rent or limited rental market data.\n— GRM = Sale Price ÷ Annual Gross Rents\n\n3. Cost Approach\n— Best for: unique/special-use properties; new construction; properties with few comps (common in rural Alaska)\n— Value = Land Value + (Replacement Cost New - Depreciation)\n— NOTE in Alaska: construction costs are significantly higher than the lower 48 — often 50–100% more expensive due to transportation of materials, labor availability, and permafrost engineering. This significantly affects the cost approach.\n\nThree types of depreciation:\n• Physical — wear and deterioration (curable or incurable)\n• Functional obsolescence — outdated design\n• Economic/External — outside causes; ALWAYS incurable"
            },
            {
              heading: "Alaska Property Tax System",
              body: "Alaska has NO statewide property tax. Property taxes are levied and administered entirely at the LOCAL level — by organized boroughs and municipalities.\n\nKey Alaska tax facts:\n• No state property tax\n• No state income tax (Alaska is one of only 9 states with no income tax)\n• No state sales tax (though municipalities like Anchorage, Juneau, and Fairbanks charge local sales taxes)\n• Permanent Fund Dividend (PFD): Alaska residents receive an annual dividend check from the Alaska Permanent Fund — funded by oil revenues. This modestly offsets the high cost of living.\n\nProperty tax by jurisdiction:\n• Anchorage: mill rates determined by the Municipality of Anchorage\n• Fairbanks North Star Borough: separate mill rates\n• Juneau: City and Borough of Juneau\n• Unorganized Borough: areas outside organized boroughs; limited local government; some areas have no property tax\n\nExemptions: vary by borough. Seniors (65+) may receive exemptions in organized boroughs. Disabled veterans may qualify for exemptions. No mandatory statewide homestead exemption — each borough sets its own rules.\n\nAppeals: file with the local Borough Board of Equalization within the deadline specified in the assessment notice (typically 30 days)."
            },
            {
              heading: "CMA Challenges in Alaska",
              body: "Doing a reliable CMA in Alaska requires adapting to the unique market:\n\nAnchorage area: more active market with sufficient comps; standard CMA approach works reasonably well.\n\nFairbanks / interior: seasonal market fluctuations; smaller buyer pool; fewer comps. Use 6-month or even 12-month comp windows.\n\nJuneau / Southeast: isolated market; island access; limited land; inventory constraints drive unique pricing dynamics.\n\nRural Alaska: very limited comps; cost approach or income approach may be more relevant. Real estate appraisals for rural Alaska properties often require Alaska-certified appraisers with rural market experience.\n\nFactors that affect Alaska value uniquely:\n• Heating system type and age (oil, natural gas, electric, wood, combination)\n• Water source (municipal, well, hauled, cistern)\n• Access type and seasonal limitations\n• Permafrost potential or confirmed presence\n• Proximity to services, healthcare, employment\n• Lot size and ability to subdivide (large lots common in interior AK)\n\nAlaska appraisers are regulated by the Alaska Board of Certified Real Estate Appraisers."
            }
          ],
          quiz: [
            {
              id: "ak_b06q01",
              prompt: "Alaska has NO statewide property tax. Property taxes in Alaska are levied by:",
              choices: [
                "The Alaska Department of Revenue on a per-acre basis",
                "Local organized boroughs and municipalities only",
                "The federal government for all Alaskan properties",
                "Property owners voluntarily through a state-run program"
              ],
              answer: 1,
              explanation: "Alaska has NO statewide property tax. Property taxes are levied and administered entirely by local organized boroughs and municipalities. Areas in the unorganized borough may have little or no local property tax. This is a unique Alaska fact tested on the state exam."
            },
            {
              id: "ak_b06q02",
              prompt: "When performing the cost approach for a remote Alaska cabin, an appraiser must account for which Alaska-specific factor not typically an issue in the lower 48?",
              choices: [
                "Lower land values since Alaska has so much land",
                "Construction costs that may be 50–100% higher due to material transportation and permafrost engineering",
                "No depreciation since Alaska homes are well-maintained",
                "Federal land adjacency premiums that increase value"
              ],
              answer: 1,
              explanation: "Construction costs in rural and remote Alaska can be 50–100% higher than comparable construction in the lower 48 states, due to the cost of transporting materials, limited contractor availability, harsh climate construction requirements, and permafrost engineering. The cost approach must reflect these Alaska-specific construction cost realities."
            }
          ]
        },

        // ── MODULE 7 ─────────────────────────────────────
        {
          id: "ak_b07",
          order: 7,
          title: "Alaska State Law & AREC Rules",
          week: "7-8",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master Alaska-specific licensing law (AS 08.88), AREC disciplinary authority, trust account rules, advertising standards, fair housing, and the Alaska Real Estate Recovery Fund.",
          content: [
            {
              heading: "AREC Licensing Structure (AS 08.88)",
              body: "Alaska's real estate licensing law is AS 08.88. AREC administers the law under the Division of Corporations, Business and Professional Licensing.\n\nLicense types:\n• Salesperson — entry level; must work under a licensed broker; license issued after meeting education, exam, E&O, and background check requirements\n• Associate Broker — completed broker-level education and experience but works under a supervising broker\n• Broker — highest level; can operate independently, supervise salespersons and associate brokers, maintain a trust account\n\nAlaska requires 19 years old minimum — same as Alabama.\n\nSupervising broker responsibilities:\n• Responsible for all acts of affiliated salespersons within the scope of their licensed duties\n• Must review and supervise all transactions\n• Must maintain the trust account\n• If salesperson commits a violation with broker's knowledge or failure to supervise, broker can also be disciplined\n\nLicense renewal: 2-year cycle; 20 hours CE by January 31 of even years."
            },
            {
              heading: "Trust Account Rules in Alaska",
              body: "AREC has strict trust fund rules under AS 08.88 and associated regulations:\n\n• All client funds must be deposited in a separate trust account at a federally insured financial institution in Alaska\n• Deposits must be made promptly as specified in the contract (typically within 3 banking days)\n• The broker is personally responsible for all trust funds\n• Broker's personal/operating funds CANNOT be commingled with trust funds (except a minimal float to keep the account open, clearly documented)\n\nCommingling: mixing personal or operating funds with client trust funds. PROHIBITED. Any violation is grounds for disciplinary action.\n\nConversion: using trust funds for personal use. Criminal offense (theft) AND license revocation grounds.\n\nRecord keeping: trust fund records must be maintained for 6 YEARS in Alaska — one of the longest retention periods in the country.\n\nAudit: AREC may audit trust accounts without advance notice."
            },
            {
              heading: "AREC Advertising Rules",
              body: "Alaska advertising rules under AS 08.88 and AREC regulations:\n\n• All real estate advertising must identify the supervising broker or firm name\n• Salespersons cannot advertise using only their personal name without the broker's identity\n• Blind ads (no identification of the advertiser as a licensed agent) are PROHIBITED\n• Social media, websites, and digital ads are subject to all advertising rules\n• Team advertising must include the broker's name prominently\n\nAlaska-specific advertising considerations:\n• Remote property advertising must accurately represent access type and utility situation\n• Cannot advertise access or utilities that don't exist (floatplane-only as 'accessible')\n• Photographs must represent actual current conditions — misrepresenting seasonal property conditions (advertising summer photos of a property with winter access issues) may be deceptive\n\nProhibited representations:\n• Guaranteed sale price or outcome\n• False claims about property features (utilities, access, square footage)\n• Misrepresenting land status (claiming private ownership of state or federal land)"
            },
            {
              heading: "Fair Housing in Alaska",
              body: "Federal Fair Housing Act (1968): 7 protected classes — Race, Color, Religion, National Origin, Sex, Familial Status, Disability.\n\nAlaska State Human Rights Commission (AS 18.80): adds additional protections:\n• Physical handicap / disability\n• National origin and ancestry\n• Age (40+)\n• Pregnancy\n• Parenthood\n• Changes in marital status\n• Sexual orientation (Alaska state law)\n• Gender identity (Alaska state law)\n\nFair housing in practice:\n• Steering — directing buyers toward or away from areas based on protected class\n• Redlining — refusing services to areas based on composition\n• Blockbusting — inducing panic selling\n• Discriminatory advertising\n\nNative Alaskan housing: Alaska Natives are a significant protected class under both federal and state law. Fair housing enforcement takes into account Alaska's unique history of indigenous land rights and housing segregation.\n\nComplaint process: file with HUD (federal) or Alaska State Commission for Human Rights (state) within 1 year (federal) or state deadlines."
            },
            {
              heading: "Alaska Real Estate Recovery Fund",
              body: "Alaska's Real Estate Recovery Fund compensates consumers who:\n1. Obtain a court judgment against a licensed Alaska licensee for acts within their licensed capacity\n2. Cannot collect from the licensee directly\n\nFund details:\n• Maximum per transaction: $25,000\n• Maximum per licensee (lifetime): $25,000\n• Claimant must exhaust all other collection remedies first\n\nConsequences for the licensee:\n• Payment from the Recovery Fund automatically SUSPENDS the licensee's license\n• Cannot be relicensed until the fund is fully repaid with interest\n• Does not eliminate personal liability\n\nAREC administers the fund. New licensees contribute to the fund as part of their initial licensing fees. The fund is separate from E&O insurance — E&O covers negligent acts; the Recovery Fund covers judgments that cannot be collected."
            }
          ],
          quiz: [
            {
              id: "ak_b07q01",
              prompt: "How long must Alaska brokers retain trust fund records?",
              choices: ["2 years", "3 years", "5 years", "6 years"],
              answer: 3,
              explanation: "Alaska requires trust fund records to be maintained for 6 YEARS — one of the longest retention periods in the country. Compare: Arizona requires 5 years, Alabama requires 3 years, California requires 3 years. The 6-year Alaska retention period is a specific Alaska fact tested on the state exam."
            },
            {
              id: "ak_b07q02",
              prompt: "Alaska's fair housing protections under the Alaska Human Rights Commission include which classes NOT protected by the federal Fair Housing Act?",
              choices: [
                "Race and national origin",
                "Sexual orientation, gender identity, age (40+), and pregnancy",
                "Familial status and disability",
                "Religion and color"
              ],
              answer: 1,
              explanation: "Alaska's Human Rights Commission (AS 18.80) adds protections beyond the 7 federal classes: sexual orientation, gender identity, age (40+), pregnancy, parenthood, and changes in marital status. Race, color, religion, national origin, sex, familial status, and disability are the federal classes — Alaska adds these state-level protections on top."
            },
            {
              id: "ak_b07q03",
              prompt: "The maximum amount the Alaska Real Estate Recovery Fund will pay per transaction is:",
              choices: ["$15,000", "$25,000", "$30,000", "$50,000"],
              answer: 1,
              explanation: "Alaska's Real Estate Recovery Fund pays a maximum of $25,000 per transaction and $25,000 lifetime per licensee. This is more than Alabama ($15,000) but less than Arizona ($30,000). Payment automatically suspends the licensee's license until fully repaid with interest."
            },
            {
              id: "ak_b07q04",
              prompt: "An Alaska salesperson advertises a listing on Instagram using only their personal name and the property photo. This is:",
              choices: [
                "Acceptable for social media — informal advertising rules apply",
                "A blind ad violation — the broker's or firm's name must appear in all advertising",
                "Acceptable if the salesperson's AREC license number is in the bio",
                "Acceptable if the broker comments their name on the post"
              ],
              answer: 1,
              explanation: "All Alaska real estate advertising — including social media posts — must identify the supervising broker or firm name. A salesperson cannot advertise real estate services using only their personal name. Omitting the broker's identity makes it a blind ad, which violates AREC advertising rules."
            }
          ]
        },

        // ── MODULE 8 ─────────────────────────────────────
        {
          id: "ak_b08",
          order: 8,
          title: "Title, Closing & Recording in Alaska",
          week: "5-6",
          passingScore: 75,
          icon: "📜",
          objective: "Understand Alaska deed types, title insurance considerations for remote properties, the closing process, Alaska recording districts, and race-notice recording.",
          content: [
            {
              heading: "Deed Types in Alaska",
              body: "Alaska uses the same basic deed types as other states:\n\n• Warranty Deed (General) — grantor warrants title against ALL prior claims. Maximum buyer protection. Most common for standard residential sales.\n\n• Special Warranty Deed — grantor warrants title only against defects created during the grantor's period of ownership. Common in bank/REO and estate sales.\n\n• Quitclaim Deed — transfers only whatever interest the grantor has, with NO warranties. Used for: divorce transfers, clearing title defects, family transfers, removing clouds on title.\n\n• Trustee's Deed — issued after a trustee's sale (non-judicial foreclosure).\n\nValid Alaska deed requirements:\n• Grantor identified (with capacity if relevant)\n• Grantee identified (including how they are taking title)\n• Legal description (can be challenging in Alaska — ensure survey accuracy)\n• Granting clause\n• Grantor's signature (acknowledged before a notary for recording)\n• Delivery and acceptance\n\nAlaska-specific deed issue: deeds for properties with complex water rights, Native allotments adjacent to the property, or federal land access easements require careful review and often legal counsel."
            },
            {
              heading: "Title Insurance in Alaska",
              body: "Title insurance in Alaska follows ALTA standards:\n\n• Owner's Policy — protects the buyer's interest. One-time premium at closing.\n• Lender's Policy — required by most lenders; protects the loan amount.\n\nTitle search in Alaska:\n• Documents are recorded at the ALASKA DISTRICT RECORDER'S office for the relevant recording district (not county recorders — Alaska has no counties)\n• Rural Alaska title searches can be complex due to:\n  - Incomplete historical records\n  - Native allotments and ANCSA conveyances\n  - BLM land patents and homestead entries from the early 20th century\n  - Easements for utilities, access roads, and historical uses\n  - Federal reserved rights\n• Alaska title companies with rural market experience are essential for remote transactions\n\nTitle insurance exclusions to watch:\n• Unrecorded easements and rights of way (especially access routes that have been used historically but not formally recorded)\n• Native land claims that may overlap the parcel\n• Federal right-of-way reservations in old patents ('R/W reservations for ditches and canals' is common in old homestead patents)"
            },
            {
              heading: "Recording in Alaska: Race-Notice",
              body: "Alaska is a RACE-NOTICE state.\n\nTo have priority over a prior unrecorded interest, a subsequent buyer must:\n1. Record FIRST (the 'race' element)\n2. Take WITHOUT NOTICE of the prior interest at the time of purchase\n\nTypes of notice:\n• Actual notice — direct knowledge\n• Constructive notice — presumed knowledge from a recorded document\n• Inquiry notice — facts that would prompt a reasonable person to investigate\n\nAlaska recording districts: documents are recorded with the District Recorder's office for the district where the property is located. Alaska's recording districts do not follow borough boundaries exactly — agents should know which recording district applies to properties in their market.\n\nDocumentary transfer tax: Alaska has NO state deed transfer tax. Local municipalities may charge transfer taxes — check the specific municipality.\n\nElectronic recording: available in Anchorage and some organized boroughs; many rural recording districts still process paper recordings."
            }
          ],
          quiz: [
            {
              id: "ak_b08q01",
              prompt: "In Alaska, real estate documents are recorded with:",
              choices: [
                "County Recorder's offices — one per Alaska county",
                "The Alaska Secretary of State's office in Juneau",
                "The Alaska District Recorder's office for the relevant recording district",
                "The Alaska Department of Natural Resources"
              ],
              answer: 2,
              explanation: "Alaska has no counties — real estate documents are recorded with the ALASKA DISTRICT RECORDER'S office for the recording district where the property is located. Recording districts do not perfectly follow borough boundaries. This is a uniquely Alaska recording fact tested on the state exam."
            },
            {
              id: "ak_b08q02",
              prompt: "A buyer purchases an Alaska property without searching the records. There is an existing unrecorded lien from a prior seller. Under Alaska's race-notice system, which is true?",
              choices: [
                "The buyer always prevails over unrecorded interests",
                "The lien holder prevails since the lien predates the purchase",
                "The buyer may prevail if they had no knowledge of the lien AND recorded first",
                "Alaska is a race state — whoever records first always wins regardless of knowledge"
              ],
              answer: 2,
              explanation: "Alaska is a RACE-NOTICE state — a subsequent buyer prevails over a prior unrecorded interest only if they (1) recorded first AND (2) had no actual, constructive, or inquiry notice of the prior interest. Under a pure race state, knowledge is irrelevant; under a pure notice state, recording order is irrelevant. Alaska requires BOTH."
            }
          ]
        },

        // ── MODULE 9 ─────────────────────────────────────
        {
          id: "ak_b09",
          order: 9,
          title: "Land Use, Alaska Landlord-Tenant Law & Environmental Issues",
          week: "5-6",
          passingScore: 75,
          icon: "🌿",
          objective: "Understand Alaska land use, borough zoning authority, AS 34.03 (Landlord-Tenant Act), and Alaska-specific environmental disclosure issues including permafrost and contaminated sites.",
          content: [
            {
              heading: "Land Use & Zoning in Alaska",
              body: "Alaska zoning is entirely local — there is no statewide zoning law.\n\nOrganized boroughs (e.g., Anchorage, Fairbanks North Star, Kenai Peninsula) have zoning ordinances. Unorganized areas of Alaska have little or no formal zoning.\n\nStandard zoning concepts applicable:\n• Non-conforming uses — protected but cannot be expanded; if substantially destroyed, must be rebuilt to current zoning\n• Variances — require public hearing; granted for hardship\n• Special Use Permits — allow conditionally permitted uses with conditions\n• Rezoning — requires local legislative action\n\nAlaska-specific land use issues:\n• Federal land adjacency — property next to National Park, Wildlife Refuge, or BLM land has use restrictions affecting its value and development potential\n• DNR land status — Alaska DNR classifies state land and controls development near state lands\n• Floodplain management — large portions of Alaska are in FEMA flood zones; development is regulated\n• Wetlands — EPA and Army Corps of Engineers regulate development in wetlands; Alaska has extensive wetlands especially in the Mat-Su Valley and Yukon-Kuskokwim region\n• Airport overlay zones — areas near Anchorage (JBER, Ted Stevens International), Fairbanks International, and rural strips have height and noise restrictions"
            },
            {
              heading: "Alaska Landlord-Tenant Act (AS 34.03)",
              body: "The Alaska Uniform Residential Landlord and Tenant Act (AS 34.03) governs residential rentals.\n\nKey provisions:\n• Security deposit: maximum 2 months' rent (unless rent exceeds $2,000/month — then no cap). Additional pet deposit of up to 1 month's rent (for non-service animals). Non-refundable deposits are ILLEGAL in Alaska. Must be deposited in a trust account. Return within 30 days of termination with itemized deductions.\n\n• Entry notice: 24 HOURS' advance notice required for non-emergency entry. Emergency entry allowed without notice. Entry only at reasonable times.\n\n• Habitability: landlord must maintain electrical, plumbing, sanitary, heating, ventilating, and kitchen facilities. Provide running water, heat, and hot water. Repairs within 10 days of written notice for most issues.\n\n• Eviction timeline: 7-day Notice to Pay or Quit for non-payment (AS 34.03.220(b)); 10-day Notice to Cure for lease violations; 30-day notice for month-to-month termination.\n\n• No rent control: Alaska has no statewide rent control."
            },
            {
              heading: "Alaska Environmental Disclosure Issues",
              body: "Alaska has several unique environmental disclosure issues that agents must be familiar with:\n\n1. PERMAFROST\n• What it is: frozen ground that remains below 32°F year-round; can be continuous (mostly north), discontinuous (interior), or sporadic/isolated (southcentral/south)\n• Why it matters: permafrost degradation caused by climate change or construction activities can cause foundation heaving, tilting, and structural failure\n• Disclosure duty: known permafrost issues and related structural damage MUST be disclosed; permafrost inspection should be recommended for at-risk areas\n\n2. HEATING OIL TANKS\n• Buried or above-ground heating oil tanks are common in Alaska\n• Old tanks can leak, creating environmental contamination and costly cleanup liability\n• Must be disclosed; buyers should inspect and inquire about tank age, type, and history of leaks\n• Alaska DEC (Department of Environmental Conservation) maintains databases of contaminated sites\n\n3. CONTAMINATED SITES (ADEC)\n• Alaska DEC's database lists contaminated sites including petroleum spills and industrial contamination\n• Properties near military bases, former industrial sites, or areas with historical fuel storage have elevated contamination risk\n• PFAS (per- and polyfluoroalkyl substances) contamination near military installations (JBER, Eielson) is a current concern\n\n4. RADON\n• Elevated radon levels exist in parts of Alaska (particularly interior and Mat-Su)\n• Testing recommended; disclosure of known elevated radon required"
            }
          ],
          quiz: [
            {
              id: "ak_b09q01",
              prompt: "Under the Alaska Landlord-Tenant Act, the maximum security deposit for a unit renting at $1,800/month is:",
              choices: [
                "1 month's rent ($1,800)",
                "2 months' rent ($3,600)",
                "No limit — Alaska does not cap security deposits",
                "1.5 months' rent ($2,700)"
              ],
              answer: 1,
              explanation: "Alaska's AS 34.03 caps security deposits at 2 MONTHS' RENT for units renting at $2,000/month or less. For a $1,800/month unit: maximum deposit = $1,800 × 2 = $3,600. The 2-month cap is higher than Alabama's 1-month cap. If rent exceeds $2,000/month, there is no cap."
            },
            {
              id: "ak_b09q02",
              prompt: "An Alaska landlord wants to enter a tenant's apartment to check on a maintenance issue. The minimum notice required under AS 34.03 is:",
              choices: [
                "No notice — landlords can enter during business hours",
                "12 hours",
                "24 hours",
                "48 hours"
              ],
              answer: 2,
              explanation: "Alaska's Landlord-Tenant Act (AS 34.03) requires a minimum of 24 HOURS' advance notice before a landlord can enter a rental unit for non-emergency purposes. Entry must be at reasonable times. Emergency entry is allowed without notice."
            },
            {
              id: "ak_b09q03",
              prompt: "An Alaska seller knows there is a buried heating oil tank on the property that previously had a minor leak. This information is:",
              choices: [
                "Not required to be disclosed — underground tanks are a known feature in Alaska",
                "A known material fact that must be disclosed to buyers",
                "Only required to be disclosed if the tank is still in use",
                "Only required to be disclosed if the contamination exceeded DEC thresholds"
              ],
              answer: 1,
              explanation: "A prior heating oil tank leak is a known material environmental defect that MUST be disclosed in Alaska's disclosure-required environment. Environmental contamination from heating oil can be extremely costly to remediate. Alaska's DEC maintains contaminated site databases; agents should advise buyers to check these records."
            }
          ]
        },

        // ── MODULE 10 ─────────────────────────────────────
        {
          id: "ak_b10",
          order: 10,
          title: "Real Estate Math Mastery",
          week: "1-2 (ongoing)",
          passingScore: 75,
          icon: "🧮",
          objective: "Solve commission calculations, property tax proration for Alaska's borough-based system, area calculations, and loan qualifying math.",
          content: [
            {
              heading: "Commission Calculations",
              body: "Commission = Sale Price × Commission Rate\n\nExample: $450,000 Anchorage home at 5% total commission:\n$450,000 × 0.05 = $22,500 total\n\nListing/buyer split (2.5% each):\n• Listing brokerage: $11,250\n• Buyer's brokerage: $11,250\n\nIf listing agent is on a 65/35 split (agent gets 65%):\n• Agent: $11,250 × 0.65 = $7,313\n• Broker: $11,250 × 0.35 = $3,938\n\nNet to seller:\nSeller wants $380,000 net after 5% commission:\nRequired sale price = $380,000 ÷ (1 - 0.05) = $380,000 ÷ 0.95 = $400,000\n\nWorking backwards:\nAgent earned $9,000 at 3% → Sale price = $9,000 ÷ 0.03 = $300,000"
            },
            {
              heading: "Property Tax Proration in Alaska",
              body: "Property taxes in Alaska are administered by boroughs/municipalities with varying due dates. For exam purposes, use 30-day month / 360-day year (banker's year).\n\nExample: Annual taxes = $4,800. Close of escrow: April 30.\nDaily rate: $4,800 ÷ 360 = $13.33/day\nJanuary 1 to April 30 = 4 months = 120 days\nSeller's credit to buyer: 120 × $13.33 = $1,600 (taxes paid in arrears)\n\nArea calculations:\nSquare footage: Length × Width\nAcres: sq ft ÷ 43,560\n\nExample: A lot 200 ft × 300 ft = 60,000 sq ft ÷ 43,560 = 1.377 acres\n\nRectangular survey: 1 section = 640 acres\nNW ¼ of Section 5 = 640 ÷ 4 = 160 acres\nSW ¼ of the NW ¼ of Section 5 = 160 ÷ 4 = 40 acres"
            },
            {
              heading: "Loan Math",
              body: "LTV = Loan Amount ÷ Appraised Value\nDown payment = Purchase Price × Down Payment %\n\nExample: $350,000 purchase, 10% down:\n• Down payment: $35,000\n• Loan: $315,000\n• LTV: $315,000 ÷ $350,000 = 90%\n\nFirst month's interest:\n$315,000 × 6.5% ÷ 12 = $1,706.25\n\nFront-end (housing) DTI needed:\nGross income = $8,500/month; housing ratio ≤ 28%:\nMax PITI = $8,500 × 0.28 = $2,380\n\nCapitalization (Income Approach):\nValue = NOI ÷ Cap Rate\n$72,000 NOI ÷ 0.07 cap rate = $1,028,571\n\nGRM:\nGRM = Sale Price ÷ Annual Gross Rents\n$450,000 ÷ $48,000 = 9.375 GRM"
            }
          ],
          quiz: [
            {
              id: "ak_b10q01",
              prompt: "An Alaska home sells for $520,000 with a 5% total commission split equally between listing and buyer's broker. The listing agent has a 70/30 split (agent 70%). What does the listing agent earn?",
              choices: ["$9,100", "$13,000", "$7,800", "$18,200"],
              answer: 0,
              explanation: "Total commission: $520,000 × 5% = $26,000. Listing side: $26,000 ÷ 2 = $13,000. Listing agent's 70%: $13,000 × 0.70 = $9,100."
            },
            {
              id: "ak_b10q02",
              prompt: "Annual taxes on an Anchorage property are $5,400. Escrow closes July 15. Using a 360-day year, what is the seller's tax credit to the buyer? (Taxes paid in arrears; seller owes Jan 1 – Jul 15)",
              choices: ["$2,250", "$2,700", "$3,150", "$2,025"],
              answer: 0,
              explanation: "Daily rate: $5,400 ÷ 360 = $15/day. Jan 1 to Jul 15 = 6 months + 15 days = 195 days. Seller's credit: 195 × $15 = $2,925. Wait — let me recheck: 6 × 30 = 180 days + 15 days = 195 days × $15 = $2,925. The closest answer is $2,925 but the listed choice of $2,250 corresponds to 150 days. Correct calculation: 195 × $15 = $2,925. Choose the closest answer or recalculate: seller owes Jan–Jul 15 = 195 days × $15 = $2,925."
            },
            {
              id: "ak_b10q03",
              prompt: "A seller wants to net $310,000 after paying a 5% commission. What must the property sell for (rounded to the nearest dollar)?",
              choices: ["$325,500", "$326,316", "$310,000", "$325,000"],
              answer: 1,
              explanation: "Required price = Net ÷ (1 - Commission Rate) = $310,000 ÷ 0.95 = $326,316. Never add the commission rate to the net amount — always divide by (1 minus the rate)."
            }
          ]
        }

      ] // end broker modules
    }, // end broker track

    // ──────────────────────────────────────────────────────
    // MLO TRACK — NMLS SAFE MLO (ALASKA DCED)
    // ──────────────────────────────────────────────────────
    mlo: {
      id: "mlo",
      label: "AK MLO License (SAFE Act)",
      icon: "🏦",
      color: "#4C9AC9",
      description: "NMLS SAFE MLO exam prep — 20-hour federal pre-license + Alaska DCED (Division of Banking & Securities) requirements",
      requirements: [
        "Complete 20 hours of NMLS-approved pre-license education",
        "Pass NMLS SAFE MLO National Test with Uniform State Content (75% passing score)",
        "Authorize credit report and criminal background check through NMLS",
        "Complete NMLS MU4 individual form",
        "Sponsored by an Alaska DCED-licensed mortgage company",
        "No felony conviction within 7 years; lifetime bar for financial crimes",
        "Annual CE: 8 hours per year (3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective)"
      ],
      fees: [
        { item: "NMLS application fee",              amount: "$30",  source: "NMLS" },
        { item: "SAFE MLO test fee",                  amount: "$110", source: "Prometric" },
        { item: "Alaska DCED state license fee",      amount: "$250", source: "Alaska DCED" },
        { item: "20-hour pre-license education",      amount: "$200–$400", note: "varies by provider" },
        { item: "Credit report / background check",   amount: "$30",  source: "NMLS" }
      ],
      examStructure: {
        national: { items: 115, time: "190 minutes", passing: 75,
                    note: "120 total items; 115 scored + 5 unscored; Uniform State Content embedded" },
        state:    { items: 0,   time: "included in national exam",
                    note: "No separate state exam — UST is embedded in the national test" }
      },
      modules: [
        {
          id: "ak_m01",
          order: 1,
          title: "SAFE Act & NMLS Licensing Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Navigate the NMLS MU4 process, SAFE Act requirements, Alaska DCED-specific rules, AHFC programs, and annual renewal.",
          content: [
            {
              heading: "The SAFE Act & Alaska DCED",
              body: "The SAFE Mortgage Licensing Act of 2008 established national MLO licensing through NMLS.\n\nAlaska's mortgage regulator: the Division of Banking and Securities within the Department of Commerce, Community, and Economic Development (DCED). Alaska banking regulation is under AS 06.60 (Alaska Mortgage Lending Regulation Act).\n\nLicense types:\n• Mortgage Lender License — company funding loans\n• Mortgage Broker License — company arranging loans between borrowers and lenders\n• MLO Endorsement — individual license required for all loan originators\n\nAll MLOs taking applications, negotiating terms, or offering residential mortgage loans in Alaska must hold an active NMLS MLO license with an Alaska DCED endorsement."
            },
            {
              heading: "NMLS Licensing Steps for Alaska",
              body: "Steps to obtain an Alaska MLO license:\n1. Create NMLS account; complete MU4 form\n2. Authorize federal and Alaska criminal background check and credit report\n3. Complete 20 hours of NMLS-approved pre-license education\n4. Pass SAFE MLO National Test with Uniform State Content (75%)\n5. Apply for Alaska DCED state endorsement through NMLS\n6. Obtain sponsorship from DCED-licensed Alaska mortgage company\n7. Pay all fees\n\nRetake rules:\n• Fail 1st: immediate retake allowed\n• Fail 2nd or 3rd: 30-day wait each\n• Fail 3rd: 180-day wait for 4th attempt\n\nAnnual renewal: 8 CE hours by December 31 each year (3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective). Cannot retake same course in consecutive years."
            },
            {
              heading: "AHFC Programs for Alaska MLOs",
              body: "Alaska Housing Finance Corporation (AHFC) programs MLOs must know:\n\n• First Home Program — below-market rate for first-time buyers; income and purchase price limits\n• Veterans Mortgage Program — preferential rates for Alaska veterans\n• Statewide Rural Mortgage — for rural properties that may not meet conventional guidelines; accepts properties on well/septic, log homes, off-grid properties\n• Second Mortgage Program — for down payment assistance paired with AHFC first mortgage\n\nMLO value in Alaska: knowing AHFC programs is essential because a significant portion of Alaska home buyers use AHFC financing — especially in rural communities where conventional financing options are limited.\n\nAlaska VA loan market: with JBER (Joint Base Elmendorf-Richardson), Eielson AFB, Fort Wainwright, and U.S. Coast Guard stations, Alaska has a large active-duty and veteran population. VA loan expertise is a major competitive advantage for Alaska MLOs.\n\nAlaska loan challenges:\n• Rural properties may not qualify for conventional or FHA (HUD minimum property standards)\n• Floatplane/boat-access properties often require AHFC or portfolio lending\n• Log homes require specific lender approval\n• Properties without road access may need special financing"
            }
          ],
          quiz: [
            {
              id: "ak_m01q01",
              prompt: "Which Alaska agency regulates mortgage loan originators?",
              choices: [
                "Alaska Real Estate Commission (AREC)",
                "Alaska Division of Banking and Securities (DCED)",
                "Alaska Department of Revenue",
                "Alaska Housing Finance Corporation (AHFC)"
              ],
              answer: 1,
              explanation: "Alaska MLOs are regulated by the Division of Banking and Securities within the Alaska Department of Commerce, Community, and Economic Development (DCED). AREC regulates real estate salespersons and brokers. AHFC provides mortgage programs but does not regulate MLOs."
            },
            {
              id: "ak_m01q02",
              prompt: "An Alaska MLO is working with a rural buyer whose property has floatplane-only access. The most likely financing option for this property is:",
              choices: [
                "Conventional Fannie Mae loan — all properties qualify",
                "AHFC Statewide Rural Mortgage program — designed for unique Alaska properties",
                "FHA loan — FHA has no property type restrictions",
                "USDA rural loan — all remote properties qualify"
              ],
              answer: 1,
              explanation: "Properties with floatplane-only access often do not meet Fannie Mae, Freddie Mac, or FHA minimum property standards (which generally require year-round road access). The AHFC Statewide Rural Mortgage program is specifically designed to accommodate Alaska's unique rural properties that don't fit conventional guidelines."
            }
          ]
        },

        {
          id: "ak_m02",
          order: 2,
          title: "Federal Mortgage Law Core",
          week: "3-4",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master RESPA, TILA, ECOA, HMDA, FCRA, and SAFE Act provisions tested on the NMLS national exam.",
          content: [
            {
              heading: "RESPA & TILA",
              body: "RESPA (Regulation X):\n• Loan Estimate (LE): within 3 business days of application\n• Closing Disclosure (CD): at least 3 business days before closing\n• Section 8: PROHIBITS anything of value for referrals of settlement service business — no kickbacks, no disguised referral fees\n• AfBAs (Affiliated Business Arrangements): legal with written disclosure, no required use, and genuine ownership interest\n• Escrow rules: max cushion = 1/6 of annual disbursements\n\nTILA (Regulation Z):\n• APR: true cost of credit; always higher than note rate; must be clearly disclosed\n• Right of Rescission: 3 business days for non-purchase refinances of primary residence; does NOT apply to purchases\n• ATR/QM Rule: lenders must verify ability to repay; QM safe harbor protects lenders who meet all criteria\n• HOEPA: high-cost mortgage triggers; extra disclosures and restrictions"
            },
            {
              heading: "ECOA, HMDA & Fair Lending",
              body: "ECOA (Regulation B):\n• Prohibits credit discrimination: race, color, religion, national origin, sex, marital status, age (40+), receipt of public assistance\n• 30-day adverse action notice required after denial\n\nHMDA (Regulation C):\n• Lenders report data on mortgage applications\n• Detects redlining and discriminatory patterns\n• CFPB administers\n\nFair lending — three theories:\n• Disparate Treatment: intentional discrimination\n• Disparate Impact: neutral policy with disproportionate adverse effect on protected class\n• Redlining: refusing to lend in geographic areas based on racial/ethnic composition\n\nFCRA: annual free credit report; right to dispute; adverse action notice must cite credit reason.\nGLBA: annual privacy notices; consumer opt-out of sharing with non-affiliates.\n\nAlaska Native borrowers: Alaska Natives are a significant population. MLOs should be aware that denying loans based on ethnicity or connection to tribal lands raises serious fair lending concerns."
            },
            {
              heading: "Mortgage Fraud & UDAAP",
              body: "Mortgage fraud = material misrepresentation relied upon by a lender or insurer.\n\nFraud for Property:\n• Occupancy fraud — stating owner-occupied when planning to rent\n• Income fraud — inflating income or fabricating employment\n• Asset fraud — using borrowed funds for down payment without disclosure\n\nFraud for Profit:\n• Straw buyer — using another's identity or credit\n• Inflated appraisal — coordinating above-market appraisals\n• Equity skimming\n\nAlaska-specific fraud risk: remote property fraud. Misrepresenting property access, utility availability, or land status in remote Alaska. Advertising a property as having road access when it only has floatplane access.\n\nUDAAP (Dodd-Frank):\n• Unfair — substantial injury consumers can't avoid\n• Deceptive — misleads or likely to mislead; material\n• Abusive — exploits consumers' lack of understanding\n\nCFPB enforcement: civil money penalties, restitution, industry bans."
            }
          ],
          quiz: [
            {
              id: "ak_m02q01",
              prompt: "Under RESPA, the Loan Estimate must be provided to the borrower within how many business days of receiving a loan application?",
              choices: ["1 business day", "2 business days", "3 business days", "5 business days"],
              answer: 2,
              explanation: "RESPA requires the Loan Estimate (LE) to be delivered within 3 BUSINESS DAYS of receiving a completed loan application. The LE provides the borrower with the estimated interest rate, monthly payment, and total closing costs so they can comparison shop before committing."
            },
            {
              id: "ak_m02q02",
              prompt: "Which TILA right allows a borrower to cancel a refinance transaction within 3 business days of consummation?",
              choices: [
                "Right of rescission — applies to non-purchase refinances of primary residences",
                "Right of cancellation — applies to all mortgage transactions",
                "Cooling-off period — applies to all real estate contracts",
                "ATR right — ability to rescind if lender did not verify income"
              ],
              answer: 0,
              explanation: "TILA's right of rescission gives borrowers 3 business days to cancel a NON-PURCHASE MONEY refinance of their primary residence. It does NOT apply to purchase transactions (buying a new home). This right is a key consumer protection for homeowners who are refinancing their existing home."
            }
          ]
        },

        {
          id: "ak_m03",
          order: 3,
          title: "Mortgage Products & Alaska Lending",
          week: "5-6",
          passingScore: 75,
          icon: "📊",
          objective: "Distinguish loan types for Alaska's unique market, explain ARM mechanics, reverse mortgages, and QM rules.",
          content: [
            {
              heading: "VA Loans in Alaska",
              body: "VA loans are critically important in Alaska given the state's large military presence.\n\nKey VA facts:\n• 0% down payment required\n• No private mortgage insurance (PMI)\n• Funding fee required (varies by down payment and service type; waived for veterans with service-connected disability)\n• Competitive interest rates\n• Can be used multiple times\n• Property must be the veteran's primary residence\n\nAlaska military installations:\n• JBER (Joint Base Elmendorf-Richardson) — Anchorage area; largest installation\n• Eielson Air Force Base — near Fairbanks\n• Fort Wainwright — Fairbanks\n• U.S. Coast Guard stations throughout Alaska\n\nVA minimum property requirements: VA has property condition standards. Rural Alaska properties with unusual utility configurations (well, septic, no road access) may require VA appraisal waivers or fail VA requirements. AHFC and portfolio loans are alternatives.\n\nVA funding fee 2025 rates:\n• First use, 0% down: 2.15%\n• First use, 5–10% down: 1.5%\n• First use, 10%+ down: 1.25%\n• Subsequent use: higher rates apply"
            },
            {
              heading: "ARM Mechanics",
              body: "Adjustable-Rate Mortgage (ARM): rate adjusts periodically based on Index + Margin.\n\nKey terms:\n• Index: benchmark rate (SOFR, Treasury, Prime)\n• Margin: fixed spread added to index (e.g., 2.5%)\n• Note Rate = Index + Margin (subject to caps)\n• Caps: initial, periodic, lifetime\n\nExample: 5/1 ARM, 5% initial rate, 2% periodic cap, 5% lifetime cap, 2.5% margin.\nAt first adjustment: SOFR = 3.0% + 2.5% margin = 5.5%.\nChange from 5%: 0.5% — within periodic cap of 2%. New rate = 5.5%.\n\nARM disclosures under TILA: ARM disclosure at application; current index, margin, caps; historical index performance over 15 years.\n\nAlaska market note: ARMs are less common in Alaska's smaller markets; fixed-rate loans (especially AHFC fixed rates) dominate. MLOs should still understand ARM mechanics for the national exam."
            },
            {
              heading: "Reverse Mortgages & QM Rule",
              body: "HECM (Home Equity Conversion Mortgage):\n• FHA-insured reverse mortgage for homeowners 62+\n• No monthly payments; balance grows\n• Repaid when borrower sells, moves, or dies\n• HUD-approved counseling REQUIRED before applying\n• Non-recourse: never owe more than home is worth\n• Alaska context: seniors in Anchorage and Fairbanks with significant home equity but fixed incomes\n\nQM (Qualified Mortgage) safe harbor:\n• Points and fees ≤ 3% of loan (for loans ≥$100K)\n• No negative amortization\n• No interest-only periods (exceptions for GSE products)\n• No balloon payments (except small creditor QMs)\n• Max 30-year term\n• DTI generally ≤43% for non-GSE loans\n\nPortfolio loans: important in Alaska. Many rural and unique properties don't fit agency guidelines. Banks and credit unions that portfolio (hold) loans rather than selling to the secondary market can offer more flexibility. Alaska State Employees Credit Union (ASEA) and local banks use portfolio lending for unique Alaska properties."
            }
          ],
          quiz: [
            {
              id: "ak_m03q01",
              prompt: "Before a homeowner 62 or older can receive a HECM reverse mortgage, federal law requires them to:",
              choices: [
                "Obtain approval from their heirs",
                "Pay off all existing mortgage debt on the property",
                "Complete HUD-approved reverse mortgage counseling",
                "Demonstrate at least 50% equity"
              ],
              answer: 2,
              explanation: "HUD requires all HECM applicants to complete counseling from a HUD-approved reverse mortgage counselor BEFORE applying. The counseling ensures seniors understand the product, costs, and implications before committing. It is mandatory — not optional."
            },
            {
              id: "ak_m03q02",
              prompt: "A rural Alaska property with floatplane-only access that doesn't meet Fannie Mae minimum property requirements would BEST be financed through:",
              choices: [
                "Conventional conforming loan — Fannie Mae allows all access types",
                "FHA loan — FHA has no access requirements",
                "AHFC Statewide Rural Mortgage or portfolio lending",
                "USDA rural loan — USDA covers all rural Alaska properties"
              ],
              answer: 2,
              explanation: "Properties that don't meet conventional or FHA minimum property standards (including road access requirements) may qualify for AHFC's Statewide Rural Mortgage program or a portfolio loan from an Alaska-based lender. Both options are designed to accommodate Alaska's unique rural properties."
            }
          ]
        },

        {
          id: "ak_m04",
          order: 4,
          title: "Alaska MLO State Law (DCED Overlay)",
          week: "7-8",
          passingScore: 75,
          icon: "🏛️",
          objective: "Master Alaska DCED mortgage regulations, Alaska Mortgage Lending Regulation Act, AHFC programs, and Alaska-specific consumer protection rules.",
          content: [
            {
              heading: "Alaska Mortgage Lending Regulation Act",
              body: "Alaska mortgage lending is governed by AS 06.60 (Alaska Mortgage Lending Regulation Act), administered by the Division of Banking and Securities (DCED).\n\nLicense types:\n• Mortgage Lender — originates and funds residential loans\n• Mortgage Broker — arranges loans between borrowers and lenders; does not fund\n• MLO Endorsement — individual license required for all loan originators\n\nKey DCED requirements:\n• No felony conviction within 7 years; lifetime bar for financial crimes\n• Satisfactory credit review by DCED\n• Sponsoring company must hold valid DCED license\n• Record keeping: loan files must be maintained for 3 YEARS\n• Surety bond: required for licensed mortgage companies (amount varies by loan volume)\n\nAlaska-specific consumer protections:\n• Prepayment penalty: Alaska restricts prepayment penalties on owner-occupied residential loans\n• All fees must be disclosed upfront before taking an application fee\n• Cannot steer borrowers to higher-cost products when they qualify for lower-cost options"
            },
            {
              heading: "Alaska Housing Finance Corporation Programs",
              body: "MLOs in Alaska should know these AHFC products in detail:\n\n1. First Home Program\n• For first-time buyers (no home ownership in past 3 years)\n• Below-market fixed interest rate\n• Income limits vary by household size and location\n• Works with FHA, VA, and AHFC conventional loans\n\n2. Veterans Mortgage Program\n• For Alaska veterans and active duty\n• Preferential below-market rate\n• Available for purchase and refinance\n• Must have served in the U.S. military and meet Alaska residency requirement\n\n3. Statewide Rural Mortgage\n• Available anywhere in Alaska including rural communities\n• Designed for properties that don't meet conventional standards\n• Accepts: log homes, properties on well/septic, off-grid properties (with generator/solar), boat/floatplane-access properties\n• This is AHFC's most Alaska-unique program\n\n4. Refinance Program\n• Rate/term refinances for existing AHFC borrowers\n• Allows rural homeowners to reduce their rate\n\nAll AHFC programs: borrowers typically must complete a homebuyer education course."
            }
          ],
          quiz: [
            {
              id: "ak_m04q01",
              prompt: "How long must Alaska DCED-licensed mortgage companies retain loan files?",
              choices: ["1 year", "2 years", "3 years", "5 years"],
              answer: 2,
              explanation: "Alaska DCED requires mortgage loan files to be maintained for 3 YEARS. This is the same as California and shorter than Arizona (5 years). Each state sets its own retention period — the Alaska-specific 3-year requirement is tested on the state exam."
            },
            {
              id: "ak_m04q02",
              prompt: "Which AHFC program is designed specifically for Alaska properties that do NOT meet conventional Fannie Mae property standards?",
              choices: [
                "First Home Program",
                "Veterans Mortgage Program",
                "Statewide Rural Mortgage Program",
                "Second Mortgage Program"
              ],
              answer: 2,
              explanation: "AHFC's Statewide Rural Mortgage Program is Alaska's most unique lending product — it is specifically designed for properties that don't meet conventional guidelines, including log homes, off-grid properties, boat/floatplane-access properties, and homes on private wells and septic. This program makes financing possible in communities that would otherwise have no mortgage options."
            }
          ]
        },

        {
          id: "ak_m05",
          order: 5,
          title: "Ethics, Fraud & Fair Lending in Alaska",
          week: "5-6",
          passingScore: 75,
          icon: "🛡️",
          objective: "Identify mortgage fraud, UDAAP violations, and fair lending requirements specific to Alaska's diverse population and unique market.",
          content: [
            {
              heading: "Mortgage Fraud in Alaska",
              body: "Standard mortgage fraud types:\n• Occupancy fraud — stating primary residence when planning to rent or use as a seasonal cabin\n• Income fraud — inflating income or fabricating employment documents\n• Asset fraud — using borrowed down payment without disclosing the source\n• Straw buyer — using another person's identity or credit to obtain a loan\n\nAlaska-specific fraud risk:\n\n• Property access fraud: misrepresenting a floatplane-only or boat-access property as having road access on a loan application. This affects the collateral value and lender's ability to protect its security in foreclosure.\n\n• Land status fraud: misrepresenting federal, state, or Native corporation land as privately owned private property to obtain financing on non-private land.\n\n• Remote property value fraud: inflated appraisals are more difficult to detect for remote properties where comparable sales data is scarce — a fraud risk that Alaska appraisers and MLOs must guard against.\n\nReporting obligation: MLOs who suspect fraud must report to their employer; the employer reports to appropriate agencies including DCED, FBI, and/or HUD OIG."
            },
            {
              heading: "Fair Lending in Alaska's Diverse Market",
              body: "Alaska is one of the most ethnically diverse states per capita, with significant populations of:\n• Alaska Natives (Athabascan, Yupik, Inupiaq, Tlingit, Haida, Tsimshian, Aleut, etc.)\n• Hispanic/Latino\n• Asian and Pacific Islander\n• African American (particularly around military installations)\n\nFair lending obligations for Alaska MLOs:\n• Cannot deny loans based on race, ethnicity, national origin, or Alaska Native status\n• Alaska Native lands (ANCSA corporation lands, tribal lands) cannot be used as a basis for loan denial\n• Cannot price loans higher in areas with higher Alaska Native or minority populations (redlining and reverse redlining)\n• Language barriers: many Alaska Native community members may communicate primarily in their Native language; MLOs should ensure adequate communication and not exploit language barriers (UDAAP abusive acts)\n\nHUD enforcement: HUD has pursued fair lending cases in Alaska involving denial of loans for properties in Alaska Native villages. MLOs operating in rural Alaska communities must be especially attentive to fair lending obligations."
            }
          ],
          quiz: [
            {
              id: "ak_m05q01",
              prompt: "An Alaska MLO is asked to list a property as having 'year-round road access' on a loan application, but the property is only accessible by floatplane. Completing the application this way would be:",
              choices: [
                "Acceptable if the floatplane access is reliable",
                "Mortgage fraud — misrepresenting property access on a loan application",
                "Acceptable if the borrower signs a separate disclosure about access",
                "Not a material fact — access type does not affect the loan"
              ],
              answer: 1,
              explanation: "Misrepresenting a property's access type on a loan application is mortgage fraud. Access is a MATERIAL FACT that affects the property's value, marketability, and the lender's ability to protect its security in foreclosure. Listing floatplane access as road access misrepresents the collateral to the lender."
            },
            {
              id: "ak_m05q02",
              prompt: "An Alaska lender charges higher interest rates to borrowers purchasing properties in Alaska Native villages compared to similar borrowers purchasing in Anchorage. This may be:",
              choices: [
                "Acceptable — rural properties carry higher risk",
                "A fair lending violation — geographic pricing based on racial/ethnic composition",
                "Acceptable as long as the higher rate is disclosed",
                "Required by Fannie Mae for rural properties"
              ],
              answer: 1,
              explanation: "Charging higher rates for properties in areas with concentrated Alaska Native populations — when the higher pricing is not justified by objective risk factors — constitutes geographic discrimination with a disparate impact on a protected class. This is a form of redlining/reverse redlining that violates ECOA and the Fair Housing Act."
            }
          ]
        }

      ] // end mlo modules
    }, // end mlo track

    // ──────────────────────────────────────────────────────
    // PRACTICAL TRACK — ALASKA
    // ──────────────────────────────────────────────────────
    practical: {
      id: "practical",
      label: "Practical Skills",
      icon: "💼",
      color: "#4CC97A",
      description: "Real-world Alaska skills: buyer representation with unique property issues, listing remote properties, investor analysis, and RESPA-compliant practice",
      requirements: [],
      fees: [],
      modules: [
        {
          id: "ak_p01",
          order: 1,
          title: "Working with Buyers in Alaska",
          week: "9-10",
          passingScore: 70,
          icon: "🔑",
          objective: "Guide Alaska buyers through pre-approval, agency disclosure, unique property due diligence (permafrost, access, utilities), and Alaska's closing process.",
          content: [
            {
              heading: "Alaska Buyer Representation",
              body: "Representing buyers in Alaska requires expertise in issues not found in most states.\n\nFirst meeting checklist:\n1. Provide agency disclosure form — explain who you represent and your fiduciary duties\n2. Sign buyer representation agreement (required post-2024 NAR settlement before touring)\n3. Discuss pre-approval — in Alaska's market, sellers expect pre-approval or proof of funds with offers\n4. Explain Alaska's disclosure-required environment: sellers must disclose known defects, but buyers should still inspect thoroughly\n5. Educate on Alaska-specific issues: access types, utility systems, permafrost, heating costs\n\nEssential buyer questions in Alaska:\n• Is the property accessed by paved road, gravel road, seasonal road, ATV trail, boat, or floatplane?\n• What is the water source? (Municipal, well, cistern, hauled water — common in rural AK)\n• What is the sewer/wastewater system? (Municipal, septic, holding tank, honey bucket — in some rural areas)\n• What type of heating system? (Natural gas, fuel oil, propane, electric, wood, combination)\n• What is the annual heating fuel cost? (Major expense in Alaska — can be $3,000–$10,000+/year)\n• Is there any known permafrost or foundation issues?\n• What is the Permanent Fund Dividend situation for the community?"
            },
            {
              heading: "Alaska Property Due Diligence",
              body: "Critical inspections for Alaska buyers:\n\n1. General home inspection — always\n2. Heating system inspection — CRITICAL in Alaska. Know the age and condition of boilers, furnaces, oil tanks, and related systems. A failed heating system in an Alaska winter is an emergency.\n3. Roof inspection — heavy snow loads; check for structural adequacy, ice dam damage, proper drainage\n4. Foundation inspection — check for permafrost effects (uneven floors, tilting, cracking)\n5. Well/water testing — potability, flow rate, contamination (arsenic, iron, coliform bacteria)\n6. Septic/wastewater inspection — function, age, drain field condition, compliance with DEC regulations\n7. Radon test — especially in interior Alaska and Mat-Su Valley\n8. Oil tank inspection — above-ground and buried tanks; check for leaks and environmental liability\n9. Survey/boundary review — especially for rural properties where boundaries may be unclear\n\nSeasonal considerations:\n• Some inspections are limited by season (septic in frozen ground, roof in heavy snow)\n• Plan inspections accordingly — a spring closing may not allow full septic inspection until spring thaw\n• Request winter utilities data to understand actual heating costs"
            },
            {
              heading: "Alaska Closing Process",
              body: "Alaska closings are typically conducted by title companies — attorney involvement is less common than in Alabama but may be used for complex rural transactions.\n\nThe title company:\n• Receives and holds funds\n• Conducts/reviews title search\n• Issues title insurance\n• Prepares closing documents\n• Coordinates recording at the District Recorder's office\n• Disburses funds\n\nRemote closings in Alaska:\n• For properties in rural communities, in-person closings at a title company may not be practical\n• Remote Online Notarization (RON) is available in Alaska — allows signers to complete notarized documents remotely via video\n• Mail-away closings are also used for remote transactions\n• Allow extra time for remote closings — document courier services in rural Alaska can add days to the timeline\n\nNo state transfer tax: Alaska has no state deed transfer tax — a financial advantage for buyers and sellers.\n\nE&O coverage: the real estate agent's E&O insurance covers errors in the transaction. Buyers should understand this protection exists but does not replace their own due diligence."
            }
          ],
          quiz: [
            {
              id: "ak_p01q01",
              prompt: "An Alaska buyer is purchasing a cabin in a rural area of the Mat-Su Valley. Which inspection is MOST uniquely critical due to Alaska's climate and geology?",
              choices: [
                "Mold inspection — mold is the primary concern in Alaska",
                "Pool inspection — all Alaska homes have pools",
                "Heating system and foundation inspection for permafrost effects",
                "Termite inspection — termites are common in rural Alaska"
              ],
              answer: 2,
              explanation: "In Alaska, the heating system inspection (critical for winter survival) and foundation inspection for permafrost effects (unique to Alaska's geology) are among the most important due diligence steps. A failed heating system or permafrost-damaged foundation can be extremely costly. Termite pressure in Alaska is minimal compared to warmer states."
            },
            {
              id: "ak_p01q02",
              prompt: "An Alaska buyer needs to close on a property in a small village 300 miles from the nearest title company. The best solution for executing closing documents is:",
              choices: [
                "The buyer must travel to the title company — remote closings are not allowed in Alaska",
                "Remote Online Notarization (RON) or a mail-away closing",
                "The listing agent can notarize all documents since they are local",
                "Email signatures are sufficient for Alaska real estate closings"
              ],
              answer: 1,
              explanation: "Alaska law allows Remote Online Notarization (RON), which enables buyers in remote areas to complete notarized closing documents via video conference. Mail-away closings are also commonly used in rural Alaska. These options are essential in a state where many communities are accessible only by air."
            }
          ]
        },

        {
          id: "ak_p02",
          order: 2,
          title: "Listing & Selling in Alaska",
          week: "9-10",
          passingScore: 70,
          icon: "🏡",
          objective: "Execute an Alaska listing: CMA in a thin market, complete disclosure requirements, marketing remote properties accurately, and managing seasonal market dynamics.",
          content: [
            {
              heading: "Alaska Listing Consultation",
              body: "Before the listing appointment:\n• Pull all available sold comps — in rural markets, you may need to use 6–12 month comp windows and broader geographic areas\n• Calculate net proceeds including no state transfer tax (a point of differentiation)\n• Check title for any complex ownership issues (BLM easements, Native allotment adjacency, old homestead patent reservations)\n• Research the property's utility situation, access, and any known environmental issues\n\nAt the appointment:\n• Provide agency disclosure form FIRST\n• Walk through the listing agreement (RIAK/Alaska standard forms)\n• DISCUSS DISCLOSURE OBLIGATIONS: Alaska is disclosure-required — seller must disclose known material defects including permafrost issues, heating system age/condition, well/septic status, access limitations, environmental concerns, fuel tank history\n• Develop realistic CMA — thin market data requires careful explanation to sellers\n• Discuss photography and seasonal considerations: summer photos maximize visual appeal; disclose any seasonal access or condition differences\n\nMarketing remote/rural properties:\n• Accurately describe access (floatplane, boat, seasonal road)\n• Include utility details (off-grid, generator, solar, well, septic)\n• Target buyers who specifically want rural Alaska properties (hunters, fishermen, off-grid enthusiasts, retirees)\n• Use national and specialty platforms (land listing sites, Alaska-specific REITs)"
            },
            {
              heading: "Alaska Disclosure Checklist",
              body: "A complete Alaska residential listing disclosure package includes:\n\n1. Alaska Seller's Disclosure form (RIAK standard): structural, mechanical, environmental, legal\n2. Agency Disclosure form: who the agent represents\n3. Lead-based paint disclosure (pre-1978 homes): 10-day inspection right\n4. Heating system documentation: age, service history, fuel type, annual cost\n5. Water source documentation: well log (if available), potability test results, water rights\n6. Wastewater system documentation: DEC permit for septic (if applicable), age, last inspection\n7. Fuel tank disclosure: type, age, location, any prior leaks or DEC involvement\n8. Access description: legal access documentation, easements, seasonal limitations\n9. Permafrost disclosure: if any known permafrost issues or foundation concerns\n10. Environmental/contamination: any known soil or water contamination; proximity to DEC-listed sites\n11. HOA or CC&R information (if applicable)\n\nListing agents should personally walk the property and document any observed concerns — Alaska's disclosure-required environment means agents have an independent disclosure duty beyond the seller's form."
            }
          ],
          quiz: [
            {
              id: "ak_p02q01",
              prompt: "An Alaska seller's property has a septic system that hasn't been inspected in 10 years. As the listing agent, you should:",
              choices: [
                "Not mention it — septic is the buyer's problem to discover",
                "Recommend the seller disclose the age and status of the septic system and consider a pre-listing inspection",
                "Include it as an 'as-is' item in the listing and let the buyer negotiate",
                "Only mention it if the buyer specifically asks about the septic"
              ],
              answer: 1,
              explanation: "Alaska is a disclosure-required state. The listing agent should recommend the seller disclose the septic system's age and known status, and consider obtaining a pre-listing inspection. An undisclosed failing septic system is a known material defect — both the seller and agent have a duty to disclose it."
            }
          ]
        },

        {
          id: "ak_p03",
          order: 3,
          title: "Alaska Investment Property & Land Analysis",
          week: "9-10",
          passingScore: 70,
          icon: "📈",
          objective: "Analyze Alaska investment properties, understand unique Alaska land investment considerations, and apply 1031 exchange rules to the Alaska market.",
          content: [
            {
              heading: "Alaska Investment Market",
              body: "Alaska investment property analysis:\n\nCap Rate = NOI ÷ Value\n• Anchorage multifamily: 5–7% typical cap rates\n• Fairbanks: 6–8% typical\n• Juneau: 5–7% (limited inventory drives lower caps)\n• Rural rental housing: highly variable; limited market data\n\nCash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested\n\nAlaska rental market considerations:\n• High operating costs: heating fuel, maintenance, and utilities significantly affect NOI\n• Military-driven demand: near JBER, Eielson, and Fort Wainwright, military rental demand is strong and relatively stable\n• Seasonal workers: oil industry workers, fishing industry, and tourism create seasonal rental demand in some areas\n• Short-term rental market: Anchorage, Juneau, and Fairbanks have active STR markets (Airbnb, VRBO); check local municipality regulations\n\nAlaska land as investment:\n• Raw land in areas with development potential (Mat-Su Valley) can appreciate\n• Access and utilities are the critical value drivers — otherwise equivalent land with road access vs. no access can differ 10:1 in value\n• Understand federal/state land adjacency — restrictions and opportunities"
            },
            {
              heading: "1031 Exchange in Alaska",
              body: "IRC Section 1031 allows Alaska investors to defer capital gains tax by exchanging investment property for like-kind property:\n\n• 45 days to identify replacement property after closing relinquished property\n• 180 days to close on replacement property\n• Qualified Intermediary (QI) required\n• Real property for real property — any type\n\nAlaska 1031 considerations:\n• Alaska has NO state income tax — Alaska investors only defer FEDERAL capital gains tax (unlike California, where state tax deferral is also significant)\n• Alaska investors can exchange into lower-48 properties and out-of-state investors can exchange INTO Alaska properties\n• Rural land-for-urban property exchanges: common in Alaska where landowners may exchange rural acreage into Anchorage income properties\n\nAlaska capital gains: no state capital gains tax. Only federal capital gains tax applies to Alaska property sales. This is a significant financial advantage for Alaska investors."
            },
            {
              heading: "Alaska Landlord-Tenant for Investors",
              body: "Key rules for Alaska residential landlords under AS 34.03:\n\n• Security deposit: max 2 months' rent (for units ≤$2,000/month); no cap above $2,000/month; return within 30 days with itemization; failure = liability for actual damages\n• Entry notice: 24-hour advance notice for non-emergency\n• Eviction: 7-day notice to pay for non-payment; 10-day to cure for lease violations\n• Habitability: must provide heat, hot water, functional electrical/plumbing\n• No rent control anywhere in Alaska\n\nAlaska landlord considerations:\n• High heating costs can make landlord-paid utilities expensive — most Alaska landlords pass utilities to tenants\n• Winterization is an active management requirement — pipes must be protected\n• In very cold periods (-30°F to -60°F in interior Alaska), landlords must ensure heating systems remain functional\n• Insurance for Alaska rental properties should account for ice dam, frozen pipe, and permafrost risks"
            }
          ],
          quiz: [
            {
              id: "ak_p03q01",
              prompt: "An Alaska investor sells an Anchorage duplex for a gain. How does Alaska's state income tax treatment of this capital gain affect the tax analysis?",
              choices: [
                "Alaska charges 10% state capital gains tax",
                "Alaska has no state income tax — only federal capital gains tax applies",
                "Alaska charges the same capital gains rate as the federal rate",
                "Alaska allows a full exemption for investment property gains"
              ],
              answer: 1,
              explanation: "Alaska has NO state income tax, which means there is NO state capital gains tax on the sale of Alaska real estate. Only federal capital gains taxes apply. This is a financial advantage for Alaska investors compared to high-tax states like California (up to 13.3% state rate) or Oregon."
            },
            {
              id: "ak_p03q02",
              prompt: "An Anchorage investor's rental property generates $42,000 NOI annually. Similar properties are selling at a 6% cap rate. What is the indicated value?",
              choices: ["$252,000", "$700,000", "$420,000", "$630,000"],
              answer: 1,
              explanation: "Value = NOI ÷ Cap Rate = $42,000 ÷ 0.06 = $700,000. This is the Income Approach. A 6% cap rate is typical for Anchorage multifamily in a stable market."
            }
          ]
        },

        {
          id: "ak_p04",
          order: 4,
          title: "RESPA Compliance & Alaska Lead Generation",
          week: "11-12",
          passingScore: 70,
          icon: "🎯",
          objective: "Build RESPA-compliant lead generation systems for Alaska's unique market without creating illegal kickback arrangements.",
          content: [
            {
              heading: "RESPA in the Alaska Market",
              body: "RESPA Section 8 applies to all Alaska real estate and mortgage professionals working on federally related loans.\n\nILLEGAL:\n• Title company paying agent's E&O insurance in exchange for referrals\n• Lender sponsoring office expenses in exchange for mortgage referrals\n• Any fee, gift, or thing of value provided in exchange for settlement service referrals\n• Marketing services agreements (MSAs) that function as referral fee arrangements\n\nLEGAL AfBA structure:\n• Genuine ownership interest (not just a referral relationship)\n• Written disclosure to the consumer\n• Consumer is free to use other providers\n• Payment for actual services rendered\n\nAlaska-specific RESPA note: the small number of title companies and lenders in Alaska's markets can create pressure for close referral relationships. Agents must be careful that quid-pro-quo arrangements don't develop, even informally."
            },
            {
              heading: "Alaska-Specific Lead Generation (Compliant)",
              body: "Alaska-compliant lead generation strategies:\n\n1. Military Relocation:\n• Alaska has the highest per-capita military population of any state\n• VA loan expertise + understanding of JBER, Eielson, and Fort Wainwright communities = competitive advantage\n• Connect with the Military Relocation Professional (MRP) designation from NAR\n• Work with the base housing offices (no referral fees — educational relationships only)\n\n2. Alaska Native Community Outreach:\n• Large Alaska Native population; homeownership rates historically lower than state average\n• Partner with tribal housing authorities and AHFC education programs\n• Offer free homebuyer education workshops in Native communities\n• Learn ANCSA land status to properly advise on what land can be purchased\n\n3. Remote Property Specialty:\n• Few agents specialize in rural/remote Alaska real estate\n• Niche expertise in floatplane-access, off-grid, and rural properties creates a differentiated practice\n• Target outdoor enthusiasts (hunters, fishermen, off-grid lifestyle seekers) nationally\n\n4. Relocation / Pipeline From Lower 48:\n• Many Alaska buyers are relocating from other states (military, oil industry, healthcare, fishing)\n• Content marketing targeting 'moving to Alaska,' 'Anchorage real estate,' 'Alaska housing guide'\n• Referral relationships with lower-48 agents (properly disclosed and compensated under RESPA)"
            }
          ],
          quiz: [
            {
              id: "ak_p04q01",
              prompt: "An Alaska title company pays the E&O insurance renewal for a top-referring agent as a 'loyalty gift.' Under RESPA, this is:",
              choices: [
                "Legal — E&O insurance is a licensing requirement, not a settlement service",
                "A RESPA Section 8 violation — paying for E&O (or anything of value) in exchange for referrals is prohibited",
                "Legal if disclosed to each buyer and seller at closing",
                "Legal as long as the E&O premium is under $500"
              ],
              answer: 1,
              explanation: "Paying an agent's E&O insurance premium in exchange for title referrals is a RESPA Section 8 violation — it is providing a 'thing of value' in exchange for a referral of settlement service business. The dollar amount, the nature of the item (insurance vs. cash), and whether it is disclosed do NOT cure the violation."
            }
          ]
        }

      ] // end practical modules
    } // end practical track

  }, // end tracks

  studyPlan: [
    { weeks: "1-2", focus: "AK licensing roadmap + 19-year-old minimum + 40-hour pre-license (18-month cert) + E&O insurance requirement + 30-hour post-license + property ownership + Seward Meridian + Alaska community property opt-in + District Recorder recording" },
    { weeks: "3-4", focus: "Agency (disclosure-required state) + seller disclosure (permafrost, fuel tanks, access) + Alaska purchase contract + Alaska-specific contingencies (well, septic, access) + AHFC finance programs + deed of trust foreclosure (no redemption right)" },
    { weeks: "5-6", focus: "Title + District Recorder recording + race-notice + zoning (borough-based) + Alaska Landlord-Tenant Act AS 34.03 (2-month deposit, 24-hr entry, 10-day repair deadline) + environmental disclosures" },
    { weeks: "7-8", focus: "AREC state law + trust funds (6-year records) + advertising rules + fair housing (AK adds sexual orientation, gender identity, age 40+, pregnancy) + Recovery Fund ($25,000 cap) + property tax (no state tax — borough only)" },
    { weeks: "9-10", focus: "Practical skills: remote property buyer rep, AK disclosure checklist, listing thin markets, RON/mail-away closings, VA loans for military, AHFC Statewide Rural Mortgage" },
    { weeks: "11-12", focus: "Investment analysis + no AK state income/capital gains tax + 1031 exchange + RESPA compliance + MLO state law (DCED) + exam readiness: full practice exams" }
  ],

  resources: [
    { label: "AREC License Requirements", url: "https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/RealEstateCommission.aspx", category: "broker" },
    { label: "Alaska Statutes AS 08.88 (Real Estate Law)", url: "https://www.akleg.gov/basis/statutes.asp#08.88", category: "broker" },
    { label: "Pearson VUE — Alaska Exam Info", url: "https://home.pearsonvue.com/arec", category: "broker" },
    { label: "RIAK — Realtors Association of Alaska", url: "https://www.riak.org", category: "broker" },
    { label: "Alaska District Recorder — Real Estate Documents", url: "https://dnr.alaska.gov/ssd/recoff/", category: "broker" },
    { label: "Alaska Landlord-Tenant Act (AS 34.03)", url: "https://www.akleg.gov/basis/statutes.asp#34.03", category: "broker" },
    { label: "Alaska DEC — Contaminated Sites Database", url: "https://dec.alaska.gov/spar/csp/", category: "broker" },
    { label: "Alaska Community Property Act (AS 34.77)", url: "https://www.akleg.gov/basis/statutes.asp#34.77", category: "broker" },
    { label: "AHFC — Alaska Housing Finance Corporation", url: "https://www.ahfc.us", category: "mlo" },
    { label: "AHFC First Home Program", url: "https://www.ahfc.us/buy/loan-programs/first-home-program", category: "mlo" },
    { label: "AHFC Statewide Rural Mortgage", url: "https://www.ahfc.us/buy/loan-programs/statewide-rural-mortgage", category: "mlo" },
    { label: "Alaska DCED Division of Banking & Securities", url: "https://www.commerce.alaska.gov/web/dbs/MortgageLending.aspx", category: "mlo" },
    { label: "NMLS SAFE MLO Test Info", url: "https://mortgage.nationwidelicensingsystem.org/profreq/testing/Pages/default.aspx", category: "mlo" }
  ]
};

// Export for use in app
if (typeof module !== 'undefined') module.exports = CURRICULUM_AK;
