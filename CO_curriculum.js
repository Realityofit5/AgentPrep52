// ============================================================
// CO_curriculum.js — Colorado Real Estate Study System
// Colorado DORA / CREC Broker License — 2026
// Sources: Colorado Real Estate Commission (dora.colorado.gov/real-estate),
//          CREC Rules, C.R.S. Title 12, PSI Exams, CHFA
// Schema: identical to AK/CA/AZ/AL curriculum.js — drop-in replacement
// ============================================================

const CURRICULUM_CO = {

  meta: {
    title: "CO Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Colorado",
    stateCode: "CO",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 75, mlo: 75, federal_law: 75, ethics: 75 }
  },

  tracks: {

    // ──────────────────────────────────────────────────────
    // BROKER TRACK — COLORADO CREC BROKER LICENSE
    // ──────────────────────────────────────────────────────
    broker: {
      id: "broker",
      label: "CO Real Estate Broker",
      icon: "🏔️",
      color: "#1E88E5",
      description: "Colorado CREC Broker License — 168-hour pre-license + PSI exam + 2-year supervised practice before independent licensure",
      requirements: [
        "18+ years old",
        "168 hours of CREC-approved pre-license education (divided across specific subjects)",
        "Pass PSI Colorado broker exam: national + state sections; 75% passing score",
        "Background check through CREC",
        "Apply within 1 year of passing exam",
        "Must work under an employing broker for minimum 2 years before applying for independent broker status",
        "No felony conviction that would disqualify under C.R.S. 12-10-203"
      ],
      fees: [
        { item: "168-hour pre-license education", amount: "$500–$1,200", note: "varies by provider" },
        { item: "PSI exam fee", amount: "$44.95", source: "PSI Exams" },
        { item: "CREC broker license fee", amount: "$200", source: "Colorado DORA" },
        { item: "Background check", amount: "$39.50", source: "CREC" },
        { item: "E&O Insurance", amount: "$200–$500/yr", note: "Required in Colorado" }
      ],
      examStructure: {
        national: { items: 80, time: "150 minutes", passing: 75, note: "Plus up to 5 unscored experimental questions" },
        state: { items: 74, time: "110 minutes", passing: 71, note: "Colorado state exam; 71 correct out of 74 required" }
      },
      modules: [

        {
          id: "co_b01",
          order: 1,
          title: "Licensing Process & CREC Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Map the complete Colorado CREC broker licensing process including 168-hour education, PSI exam, supervised practice period, and continuing education requirements.",
          content: [
            {
              heading: "Colorado Real Estate Commission Overview",
              body: "The Colorado Real Estate Commission (CREC) operates under the Colorado Division of Real Estate within the Department of Regulatory Agencies (DORA). CREC licenses and regulates real estate brokers in Colorado under C.R.S. Title 12, Article 10.\n\nColorado license types:\n• Broker — the only license level in Colorado (Colorado eliminated the 'salesperson' designation; everyone is a broker from day one)\n• Employing Broker — a broker who employs other brokers; must have 2 years' experience and additional education\n• Independent Broker — a broker who works independently without an employing broker; also requires 2 years' experience\n\nThis single-tier system distinguishes Colorado from most states. In Colorado, you are a 'broker' from the day you pass your exam — but you must work under an employing broker for at least 2 years before you can practice independently or employ others.\n\nColorado's real estate market is one of the most active in the nation. The Front Range corridor (Denver-Boulder-Fort Collins) has been among the fastest-appreciating markets in the U.S. Colorado also has significant resort/second-home markets in mountain communities like Aspen, Vail, Breckenridge, and Telluride."
            },
            {
              heading: "168-Hour Pre-License Education",
              body: "Colorado requires 168 hours of CREC-approved pre-license education divided into specific courses:\n\n• Contracts and Regulations — 48 hours: Colorado-specific contracts (CREC standard forms), contract law, regulatory framework\n• Real Estate Law — 48 hours: property ownership, title, agency, disclosures, fair housing, environmental\n• Current Legal Issues — 8 hours: current CREC legal topics, recent case law, regulatory changes\n• Closings — 24 hours: closing procedures, HUD-1/CD, pro-rations, title insurance\n• Trust Accounts and Recordkeeping — 8 hours: Colorado trust account rules, recordkeeping requirements\n• Practical Applications — 32 hours: market analysis, listing, buyer representation, negotiation\n\nTotal: 168 hours\n\nKey rules:\n• Must be completed within 3 years before applying for the exam\n• Must be from CREC-approved providers\n• Online education is accepted\n• A passing grade in each course segment is required"
            },
            {
              heading: "PSI Exam and Application Process",
              body: "Colorado uses PSI Exams for its real estate broker licensing exam.\n\nExam structure:\n• National section: 80 questions, 150 minutes, 75% passing score\n• State section: 74 questions, 110 minutes, must get 71 correct (approximately 96%)\n• The state section is notably more difficult than many states' state exams\n\nAfter passing:\n• Must apply for license within 1 year of passing the exam\n• Submit application through DORA online portal\n• Submit background check results\n• Submit proof of E&O insurance\n• Pay license fee\n• Identify employing broker (required to activate license)\n\nE&O Insurance: Colorado requires all active licensees to carry E&O insurance. CREC administers a group E&O program through DORA.\n\nRetakes: No waiting period between retakes for the first two failures. After failing three times, must wait 30 days. Must complete additional education if failing repeatedly."
            },
            {
              heading: "Colorado's 2-Year Supervised Practice Requirement",
              body: "Colorado's unique two-year supervised practice requirement means:\n\n• New brokers must work under an 'employing broker' for at least 2 years\n• The employing broker is responsible for supervising the new broker's transactions\n• New brokers working under supervision are called 'employed brokers'\n• After 2 years of active practice, a broker can become an 'independent broker' or 'employing broker'\n\nBecoming an Independent/Employing Broker:\n• After 2 years (730 days) of active employed broker status\n• Must complete an additional 24-hour broker administration course (for employing brokers who want to supervise others)\n• Submit evidence of 2+ years of active practice\n• Pay updated license fee\n\nPractical implications:\n• An employed broker cannot open their own brokerage during the first 2 years\n• They MUST be affiliated with a licensed Colorado brokerage\n• The employing broker's name must appear in advertising\n• Supervision requirements include broker review of all contracts and trust account transactions"
            },
            {
              heading: "Continuing Education and License Renewal",
              body: "Colorado broker license renewal cycle: every 3 years, by December 31.\n\nCE requirements (24 hours per 3-year cycle):\n• 12 hours Annual Commission Update (ACU) course: 4 hours each year for 3 years — REQUIRED\n• The remaining 12 hours: elective CE from approved providers\n\nACU course: The Annual Commission Update is CREC's mandatory annual course that covers current legal issues, contract changes, regulatory updates, and case studies. Every licensed Colorado broker must complete the 4-hour ACU each year.\n\nFirst renewal for new brokers:\n• Must complete 12 hours of Annual Commission Update (3 years × 4 hours/year)\n• Plus additional education based on license type\n\nColorado-specific note: The ACU course is updated every year by CREC. It is specific to Colorado law and practice. Approved online and in-person providers are available statewide.\n\nReciprocity: Colorado offers reciprocity to applicants licensed in states with substantially equivalent requirements. Reciprocal applicants must still pass the Colorado state exam section and submit an application with background check."
            }
          ],
          quiz: [
            {
              id: "co_b01q01",
              prompt: "Colorado eliminated the 'salesperson' license level. What is the entry-level license designation in Colorado?",
              choices: ["Salesperson", "Associate Broker", "Broker", "Provisional Broker"],
              answer: 2,
              explanation: "Colorado uses a single-tier system where everyone is licensed as a 'broker' from the start. There is no 'salesperson' designation in Colorado. However, new brokers must work under an employing broker for 2 years before practicing independently."
            },
            {
              id: "co_b01q02",
              prompt: "How many hours of pre-license education does Colorado require before taking the PSI exam?",
              choices: ["60 hours", "90 hours", "120 hours", "168 hours"],
              answer: 3,
              explanation: "Colorado requires 168 hours of CREC-approved pre-license education divided across several specific courses including Contracts and Regulations (48 hrs), Real Estate Law (48 hrs), Closings (24 hrs), and others. This is significantly more than most states."
            },
            {
              id: "co_b01q03",
              prompt: "A Colorado broker passes their exam and wants to open their own brokerage immediately. Under Colorado law, they:",
              choices: [
                "Can open their own brokerage immediately after license issuance",
                "Must work under an employing broker for 2 years before practicing independently",
                "Must work under an employing broker for 1 year",
                "Can open their own brokerage after completing the 24-hour broker administration course"
              ],
              answer: 1,
              explanation: "Colorado requires all new brokers to work under an employing broker for at least 2 years (730 days) before they can apply for independent broker status or open their own brokerage. The additional 24-hour broker administration course is for those who want to become employing brokers (supervise others), but the 2-year experience requirement still applies."
            },
            {
              id: "co_b01q04",
              prompt: "The Colorado Annual Commission Update (ACU) course must be completed:",
              choices: [
                "Once per 3-year renewal cycle",
                "Every 4 hours per year (4 hours/year for 3 years)",
                "Only in the final year of the renewal cycle",
                "Every 5 years as continuing education"
              ],
              answer: 1,
              explanation: "The ACU is a 4-hour mandatory course that must be completed EACH YEAR (not once per cycle). Over a 3-year renewal cycle, brokers complete 12 hours of ACU (4 hours × 3 years). The ACU covers current CREC legal issues, contract changes, and regulatory updates specific to Colorado."
            },
            {
              id: "co_b01q05",
              prompt: "Colorado requires all active real estate licensees to maintain:",
              choices: [
                "A surety bond of $25,000",
                "Errors & Omissions (E&O) insurance",
                "General liability insurance",
                "A fidelity bond through CREC"
              ],
              answer: 1,
              explanation: "Colorado requires all active licensees to carry Errors & Omissions (E&O) insurance as a condition of licensure. CREC administers a group E&O program. E&O protects licensees against claims of negligence or errors in their professional real estate activities."
            }
          ]
        },

        {
          id: "co_b02",
          order: 2,
          title: "Property Ownership & Colorado Land Law",
          week: "1-2",
          passingScore: 75,
          icon: "🏔️",
          objective: "Identify property ownership types, concurrent ownership, water rights, and Colorado-specific land issues including mineral rights and oil/gas.",
          content: [
            {
              heading: "Real vs. Personal Property in Colorado",
              body: "Real property in Colorado consists of land and all attachments — improvements, buildings, structures, and items permanently attached to the land or structures. Personal property is movable.\n\nFixture analysis: Colorado courts use the classic three-part test:\n1. Method of annexation (how is it attached?)\n2. Adaptation (how adapted to the property?)\n3. Intent of the annexer\n\nColorado-specific fixture considerations:\n• Ski resort equipment: in Colorado mountain communities, lifts, snowmaking equipment, and ski patrol buildings are clearly fixtures\n• Agricultural irrigation systems: center-pivot irrigation systems are generally considered fixtures attached to farmland\n• Hot tubs and spa equipment: common in resort communities; must be specified in purchase agreements as included or excluded\n• Solar panels: increasingly common in Colorado's sunny climate; specify ownership (owned vs. leased) in every transaction"
            },
            {
              heading: "Colorado Water Rights — A Critical Distinction",
              body: "Water rights are CRITICAL in Colorado and often MORE VALUABLE than the land itself in agricultural areas.\n\nColorado follows the Prior Appropriation Doctrine ('First in time, first in right'):\n• Water rights in Colorado are separate from land ownership\n• A property can be sold WITHOUT its water rights, or vice versa\n• Senior water rights holders have priority over junior holders during shortages\n• Water rights are administered by the Colorado State Engineer's Office\n\nColorado water right types:\n• Absolute rights: water has actually been diverted and put to beneficial use\n• Conditional rights: water will be put to beneficial use if diversion works are completed\n• Augmentation plans: some users have plans allowing out-of-priority diversions\n\nDitch rights: Colorado has thousands of irrigation ditches. Properties may have ditch rights (right to use a specific amount of water from a specific ditch). These must be researched separately from the property title.\n\nWells: domestic wells in rural Colorado are LICENSED by the Colorado State Engineer — they are NOT water rights in the traditional sense but permits for limited use. Agricultural wells are separate.\n\nFor real estate agents: ALWAYS verify water rights when listing rural or agricultural property. Failure to disclose water rights issues is a common source of litigation in Colorado."
            },
            {
              heading: "Mineral Rights and Oil/Gas in Colorado",
              body: "Colorado's energy production creates significant mineral rights issues in real estate:\n\nSevered mineral estates:\n• In Colorado, mineral rights can be (and often are) severed from surface rights\n• Many Colorado properties have been 'split' — the surface owner and mineral owner are different people\n• A buyer may purchase land without knowing someone else owns the minerals beneath it\n• Colorado requires disclosure of mineral rights ownership (CREC forms include mineral rights disclosure)\n\nOil and Gas development:\n• Colorado has significant oil and gas production (Weld County DJ Basin is one of the most productive in the U.S.)\n• Surface owners may be forced to accommodate oil and gas development even if they don't own the minerals\n• Colorado Oil and Gas Conservation Commission (COGCC) regulates drilling setbacks from homes and schools\n• SB 181 (2019): gave local governments more authority over oil and gas development\n• Sellers must disclose known oil and gas leases or production on the property\n\nTitle search importance: every Colorado title search should include a mineral rights search. Standard title insurance policies may EXCLUDE mineral rights — buyers should purchase an endorsement or separate mineral title report."
            },
            {
              heading: "Concurrent Ownership and Marital Property",
              body: "Colorado concurrent ownership forms:\n\nJoint Tenancy:\n• Requires four unities (TTIP)\n• Right of survivorship — bypasses probate\n• Must be expressly created; 'as joint tenants with right of survivorship' language required\n• Common for Colorado couples, but NOT automatic for married couples\n\nTenancy in Common:\n• Default for unmarried co-owners\n• Unequal shares allowed\n• No survivorship right\n• Most common form for investment partnerships, family purchases\n\nMarital Property in Colorado:\n• Colorado is NOT a community property state\n• Colorado follows equitable distribution principles for divorce\n• Equitable ≠ equal; courts divide marital property 'fairly' but not necessarily 50/50\n• Separate property (owned before marriage, gifts, inheritances) is generally NOT divided in divorce\n\nHomestead Exemption:\n• Colorado homestead exemption: $250,000 for a family home ($350,000 for seniors and disabled)\n• Protects a portion of home equity from unsecured creditor judgment liens\n• Does NOT protect against mortgage foreclosure or property tax liens"
            },
            {
              heading: "Legal Descriptions and Recording",
              body: "Colorado uses three legal description systems:\n\n1. Rectangular Survey System — used throughout most of Colorado. The Sixth Principal Meridian (6th PM) and Baseline serve as the primary references. Colorado is divided into townships (rows) and ranges (columns).\n\n2. Metes and Bounds — used in older Spanish land grant areas in southern Colorado and San Luis Valley (Las Animas, Costilla, Huerfano counties). Many original grants date to Mexican or Spanish land grants before Colorado statehood.\n\n3. Lot and Block — used for subdivisions in all Colorado municipalities.\n\nRecording in Colorado:\n• Documents are recorded at the COUNTY CLERK AND RECORDER'S office in each of Colorado's 64 counties\n• Colorado follows a race-notice recording statute: first to record in good faith and without notice of prior claims prevails\n• The Colorado Torrens title system is no longer used in practice\n\nTitle insurance in Colorado:\n• ALTA forms used\n• Most lenders require lender's title insurance\n• Buyer's owner's title insurance is highly recommended\n• Colorado has a regulated premium system (rates set by DORA)\n• Title companies in Colorado are licensed and regulated by DORA"
            }
          ],
          quiz: [
            {
              id: "co_b02q01",
              prompt: "A Colorado agricultural property is listed for sale. The seller discloses that the mineral rights were severed 50 years ago. This means:",
              choices: [
                "The buyer will automatically receive the mineral rights as part of the purchase",
                "The surface and mineral estates are owned separately; the buyer will NOT receive mineral rights without a separate conveyance",
                "The property cannot be sold without the mineral rights",
                "The mineral rights automatically revert to the surface owner after 50 years"
              ],
              answer: 1,
              explanation: "A severed mineral estate means the mineral rights and surface rights are owned separately. A buyer who purchases the surface estate does NOT receive the mineral rights. Mineral rights must be specifically conveyed in a separate transaction or included in the deed. This is a critical disclosure issue in Colorado where mineral severance is common."
            },
            {
              id: "co_b02q02",
              prompt: "Colorado follows which water rights doctrine?",
              choices: ["Riparian rights doctrine", "Prior appropriation doctrine", "Community water rights doctrine", "Reasonable use doctrine"],
              answer: 1,
              explanation: "Colorado follows the Prior Appropriation Doctrine ('First in time, first in right'). Water rights are separate from land ownership and are administered by the State Engineer. Senior water rights holders have priority over junior holders. This is critical knowledge for any real estate transaction involving agricultural, irrigation, or rural properties in Colorado."
            },
            {
              id: "co_b02q03",
              prompt: "Colorado's homestead exemption protects a homeowner's equity from unsecured creditors up to:",
              choices: ["$75,000", "$150,000", "$250,000", "$500,000"],
              answer: 2,
              explanation: "Colorado's homestead exemption is $250,000 for most homeowners ($350,000 for seniors and disabled persons). This exemption protects home equity from judgment liens of unsecured creditors. It does NOT protect against mortgage foreclosure or property tax liens."
            },
            {
              id: "co_b02q04",
              prompt: "Real estate documents in Colorado are recorded with the:",
              choices: ["State Recorder's Office", "County Clerk and Recorder", "Colorado Division of Real Estate", "District Court Clerk"],
              answer: 1,
              explanation: "Real estate documents in Colorado are recorded at the COUNTY CLERK AND RECORDER'S office in each of Colorado's 64 counties. Colorado follows a race-notice recording statute."
            },
            {
              id: "co_b02q05",
              prompt: "In Colorado, married couples' marital property is divided in divorce according to:",
              choices: [
                "Community property rules — equal 50/50 division",
                "Equitable distribution — fair but not necessarily equal",
                "Separate property rules — each spouse keeps what they brought in",
                "Joint tenancy rules — right of survivorship applies"
              ],
              answer: 1,
              explanation: "Colorado is NOT a community property state. Colorado follows equitable distribution principles, where marital property is divided fairly but not necessarily equally. Courts consider factors like length of marriage, contributions, and economic circumstances."
            }
          ]
        },

        {
          id: "co_b03",
          order: 3,
          title: "Agency Law & CREC Relationship Disclosures",
          week: "3-4",
          passingScore: 75,
          icon: "🤝",
          objective: "Explain Colorado's unique agency disclosure requirements, the Brokerage Relationships in Real Estate Transactions Act (BRRETA), and seller/buyer agency duties.",
          content: [
            {
              heading: "Colorado's Agency Law — BRRETA",
              body: "Colorado's Brokerage Relationships in Real Estate Transactions Act (BRRETA) governs agency relationships. Colorado updated its agency framework significantly in recent years.\n\nColorado agency relationship types:\n• Seller's Agent (Listing Agent): represents the seller; owes seller fiduciary duties\n• Buyer's Agent: represents the buyer; owes buyer fiduciary duties\n• Transaction Broker: NOT an agent; assists both parties without representing either; most common in Colorado\n• Customer (No Agency): no brokerage relationship at all\n\nTransaction Broker: Colorado PRESUMES a brokerage relationship is a Transaction Broker relationship unless a different relationship is expressly established. This presumption is unique to Colorado.\n\nFiduciary duties in Colorado agency:\n• Loyalty (single agency only)\n• Obedience\n• Disclosure\n• Confidentiality\n• Accounting\n• Reasonable care\n\nTransaction Broker duties (different from agent):\n• Assist in closing the transaction\n• Present all offers and counteroffers promptly\n• Disclose adverse material facts known to the broker\n• Account for all money received\n• Keep information confidential (limited)\n• Exercise reasonable skill and care"
            },
            {
              heading: "Required Disclosures",
              body: "Colorado requires specific written disclosure of the brokerage relationship type BEFORE entering into a transaction.\n\nRequired forms:\n• Definitions of Working Relationships: must be provided to all parties before showing or conducting substantive discussions\n• Seller's Agency, Buyer's Agency, or Transaction Broker Agreement: must be signed to establish the specific relationship\n\nWhen disclosure is required:\n• Before any substantive discussion of a specific property\n• Before showing a property\n• At first meeting with a consumer where substantive discussion occurs\n\nDual agency: Colorado does NOT use the term 'dual agency.' In Colorado, when a broker is working with both buyer and seller in the same transaction, the broker typically converts to Transaction Broker status (with consent of both parties).\n\nA single broker CAN represent both parties in limited circumstances as a disclosed single agent for both — but this is extremely rare and risky.\n\nConfidentiality in Colorado:\n• A Transaction Broker must keep certain information confidential:\n  - Motivation of either party (why they're buying/selling)\n  - Bottom-line acceptable prices\n  - Loan qualification limits\n• Must still disclose adverse material facts to ALL parties"
            },
            {
              heading: "Seller's Disclosure Requirements",
              body: "Colorado requires sellers of residential property to complete a Seller's Property Disclosure (SPD) form.\n\nThe Colorado SPD covers:\n• Structural components (foundation, roof, walls)\n• Mechanical systems (HVAC, plumbing, electrical)\n• Water systems (well, septic, public)\n• Environmental concerns (lead paint, asbestos, radon, mold, underground tanks)\n• Mineral rights and oil/gas wells on or near the property\n• HOA information\n• Zoning and land use\n\nColorado-specific disclosures:\n• CDOT ROW (right-of-way): if property is affected by CDOT ROW issues, must be disclosed\n• Wildfire risk: Colorado has seen devastating wildfires (Marshall Fire 2021). Sellers must disclose known wildfire damage, mitigation measures, and fire risk.\n• Oil and gas activity: disclose known wells, pipelines, or oil/gas leases\n• Water rights: disclose any known water rights issues or limitations\n• HOA: Colorado has detailed HOA disclosure requirements — agents must provide all HOA documents before contract\n\nAs-is sales: sellers CAN sell as-is, but they still must disclose known material defects. Disclosing 'as-is' does not eliminate the obligation to disclose."
            },
            {
              heading: "Listing Agreements in Colorado",
              body: "Colorado CREC provides standard listing agreement forms that all brokers are encouraged (but not required) to use.\n\nExclusive Right-to-Sell Listing:\n• Broker earns commission regardless of who finds the buyer\n• Most common form in Colorado\n• Agent is protected even if the seller finds the buyer themselves\n\nExclusive Agency Listing:\n• Seller can sell themselves without paying commission\n• Broker earns commission if anyone other than the seller procures the buyer\n• Less common; creates ambiguity about seller-found buyers\n\nOpen Listing:\n• Non-exclusive; multiple brokers can be retained\n• Only the broker who procures the buyer earns a commission\n• Extremely rare in residential real estate\n\nColorado CREC standard forms:\n• Colorado uses CREC standard forms for most transactions\n• These forms are updated regularly by CREC\n• The Annual Commission Update (ACU) always covers form changes\n• Brokers MUST use CREC-approved forms for standard residential transactions unless an attorney prepares a custom contract"
            },
            {
              heading: "Colorado HOA Law",
              body: "Colorado has comprehensive HOA laws that are critical to know for real estate transactions:\n\nColorado Common Interest Ownership Act (CCIOA):\n• Governs condominiums, planned communities, and common interest communities\n• All HOAs formed after 1992 fall under CCIOA\n• Older HOAs may be grandfathered under prior law\n\nSeller disclosure for HOA properties:\n• HOA must provide a 'status letter' (certificate of status) disclosing:\n  - Current assessments owed\n  - Special assessments pending or approved\n  - Any violations recorded against the unit\n• HOA documents that must be provided: Declaration, Bylaws, Budget, Rules and Regulations, most recent financial statements\n• Buyer has a review period after receiving HOA documents (part of the Inspection Objection / HOA document deadline in the CREC contract)\n\nColorado HOA issues in practice:\n• Short-term rental restrictions: many Colorado HOAs prohibit Airbnb/VRBO; disclose STR restrictions\n• Pet restrictions: common in HOAs; disclose to buyers with pets\n• Transfer fees: HOAs may charge transfer fees; these must be disclosed\n• Management company: large Colorado HOAs use management companies; contact information must be disclosed"
            }
          ],
          quiz: [
            {
              id: "co_b03q01",
              prompt: "In Colorado, what is the PRESUMED brokerage relationship type unless a different relationship is expressly established?",
              choices: ["Seller's agent", "Buyer's agent", "Transaction broker", "Dual agent"],
              answer: 2,
              explanation: "Colorado PRESUMES a brokerage relationship is a Transaction Broker relationship unless a seller's agency, buyer's agency, or no-brokerage relationship is expressly established. This presumption is unique to Colorado and reflects the fact that most Colorado real estate transactions are handled by transaction brokers rather than agents."
            },
            {
              id: "co_b03q02",
              prompt: "A Colorado transaction broker learns the seller is desperate to close quickly due to financial distress. Under BRRETA, the transaction broker:",
              choices: [
                "Must disclose the seller's motivation to the buyer",
                "Must keep the seller's motivation confidential and NOT disclose it to the buyer",
                "Must disclose the motivation to the buyer's lender",
                "Must withdraw from the transaction"
              ],
              answer: 1,
              explanation: "Under Colorado's Transaction Broker rules (BRRETA), a transaction broker must keep each party's MOTIVATION confidential. The seller's financial distress and urgency to close are confidential information. However, the transaction broker must still disclose any adverse material facts about the property itself."
            },
            {
              id: "co_b03q03",
              prompt: "Which Colorado-specific item MUST be disclosed on the Colorado Seller's Property Disclosure form?",
              choices: [
                "Neighborhood crime statistics",
                "Previous offers received on the property",
                "Known wildfire damage, mitigation measures, and fire risk",
                "The seller's reason for moving"
              ],
              answer: 2,
              explanation: "Following devastating Colorado wildfires like the 2021 Marshall Fire, Colorado's SPD form includes disclosures about known wildfire damage, mitigation measures, and fire risk. This is a Colorado-specific disclosure reflecting the state's significant wildfire hazard. Neighborhood crime statistics and previous offers are generally not required disclosures."
            },
            {
              id: "co_b03q04",
              prompt: "Under Colorado's Common Interest Ownership Act (CCIOA), what must an HOA provide before a unit is sold?",
              choices: [
                "A market analysis of comparable sales",
                "A status letter disclosing current assessments, pending special assessments, and recorded violations",
                "An appraisal of the unit's current market value",
                "The HOA's investment portfolio statement"
              ],
              answer: 1,
              explanation: "Under CCIOA, the HOA must provide a status letter (certificate of status) disclosing current assessments owed, approved or pending special assessments, and any violations recorded against the unit. The full HOA documents (Declaration, Bylaws, Budget, Rules) must also be provided to the buyer before contract."
            },
            {
              id: "co_b03q05",
              prompt: "Colorado's standard residential purchase contract is prepared by:",
              choices: [
                "The Colorado Association of Realtors (CAR)",
                "The Colorado Real Estate Commission (CREC)",
                "The National Association of Realtors (NAR)",
                "The Colorado Bar Association"
              ],
              answer: 1,
              explanation: "The Colorado Real Estate Commission (CREC) prepares and regularly updates the standard forms used in Colorado residential transactions, including the Contract to Buy and Sell Real Estate. Brokers must use CREC-approved forms for standard residential transactions unless an attorney prepares a custom contract."
            }
          ]
        },

        {
          id: "co_b04",
          order: 4,
          title: "Colorado Contracts & Purchase Agreements",
          week: "3-4",
          passingScore: 75,
          icon: "📄",
          objective: "Master the CREC Contract to Buy and Sell Real Estate, Colorado-specific deadlines, contingencies, and closing procedures.",
          content: [
            {
              heading: "CREC Contract to Buy and Sell Real Estate",
              body: "Colorado uses the CREC Contract to Buy and Sell Real Estate (CBS) — one of the most detailed standard residential purchase contracts in the United States. The CBS has been updated numerous times and is considered a model for comprehensive real estate contracts.\n\nKey sections of the CBS:\n1. Property description and inclusions/exclusions\n2. Purchase price and terms\n3. Dates and deadlines (Colorado-specific — detailed timeline)\n4. Title insurance and title objections\n5. Inspection and due diligence\n6. New loan terms\n7. Closing provisions\n8. General provisions (default, dispute resolution, attorney's fees)\n\nInclusions and Exclusions:\n• The CBS has explicit lists of items included or excluded from the sale\n• Standard inclusions: fixtures, storm doors/windows, garage door openers, attached TV mounts, built-in appliances\n• Standard exclusions: seller's personal property, items removed before closing\n• Colorado practice: specify all inclusions/exclusions in writing to avoid disputes — especially solar panels, hot tubs, window treatments, and smart home equipment"
            },
            {
              heading: "Colorado Closing Deadlines and Contingencies",
              body: "The CBS uses a detailed 'Dates and Deadlines' section — unlike many states' contracts that use vague timelines. Colorado contracts set specific CALENDAR DATES for each step.\n\nKey dates and deadlines in the CBS:\n• Alternative Earnest Money Deadline: when earnest money must be deposited\n• Record Title Deadline: buyer receives and reviews title commitment\n• Record Title Objection Deadline: buyer raises title issues\n• Off-Record Title Deadline: due diligence for unrecorded items\n• Title Resolution Deadline: seller resolves title issues\n• HOA Documents Deadline: HOA documents must be provided\n• Right of First Refusal Deadline: if HOA has right of first refusal\n• Inspection Objection Deadline: buyer submits inspection issues\n• Inspection Resolution Deadline: parties resolve inspection issues\n• Appraisal Deadline: appraisal must be completed\n• Loan Objection Deadline: buyer can object to loan terms\n• Closing Date: scheduled closing\n\nColorado CBS practice: missing a deadline in the CBS can result in the contingency being WAIVED. Agents must carefully track all dates."
            },
            {
              heading: "Inspection and Due Diligence Process",
              body: "Colorado's inspection process under the CBS:\n\nInspection Period:\n• Buyer hires professional inspectors\n• Colorado licensed inspectors conduct general home inspection, radon, sewer scope, electrical, structural, etc.\n• Colorado has specific radon requirements — Colorado has elevated radon levels in many areas (Rocky Mountain region); radon testing is highly recommended and should be disclosed\n\nInspection Objection Notice:\n• If buyer finds issues, they submit an Inspection Objection Notice by the Inspection Objection Deadline\n• This does NOT automatically terminate the contract — it opens negotiation\n• Seller can: (1) agree to resolve issues, (2) partially agree, or (3) do nothing\n\nInspection Resolution Notice:\n• If parties agree on repairs or price reductions, an Inspection Resolution Notice is signed by the Resolution Deadline\n• If parties cannot agree by the Resolution Deadline, buyer can terminate and receive earnest money back\n• If buyer fails to send an Objection Notice by the deadline, the inspection contingency is waived\n\nColorado-specific inspection items:\n• Radon: common in Colorado due to granite bedrock — always recommend radon testing\n• Expansive soils: Colorado Front Range has significant expansive soil (clay) that causes foundation issues\n• Wildfire mitigation: defensible space, fire-resistant landscaping\n• Water quality: well water testing in rural areas"
            },
            {
              heading: "Colorado Title and Closing Process",
              body: "Colorado closing process:\n\nTitle companies close most Colorado residential transactions:\n• Title companies are licensed by DORA\n• Title company serves as escrow agent — collects funds, prepares closing statement, records documents\n• Attorney closings are NOT required in Colorado (unlike some Eastern states)\n\nTitle insurance in Colorado:\n• ALTA policies used\n• Owner's title insurance: protects buyer from prior title defects\n• Lender's title insurance: required by most lenders\n• Colorado regulated premium: title insurance rates are regulated — different title companies charge the same base premium\n\nTitle commitment review:\n• Title company issues a Commitment for Title Insurance before closing\n• Buyer must review and object by the Record Title Objection Deadline\n• Schedule A: current vesting, legal description, proposed coverage\n• Schedule B-1: requirements to close (clear liens, etc.)\n• Schedule B-2: exceptions to coverage (easements, HOA, taxes, etc.)\n\nColorado closing costs:\n• Transfer tax: Colorado has NO state transfer tax — cities like Telluride and Aspen have local transfer taxes\n• Recording fees: paid at closing\n• Title insurance premium\n• Prorations: property taxes prorated at closing (Colorado taxes paid in arrears)"
            },
            {
              heading: "Earnest Money and Default Provisions",
              body: "Earnest Money in Colorado:\n• Typically 1-3% of purchase price in Colorado markets\n• Must be deposited by the Alternative Earnest Money Deadline in the CBS\n• Held in the employing broker's trust account or title company escrow\n\nDefault provisions under the CBS:\n• Seller default: buyer can seek specific performance (force the sale) or sue for damages\n• Buyer default: seller can terminate and seek forfeiture of earnest money as liquidated damages, OR seek specific performance/additional damages\n\nLiquidated damages vs. specific performance:\n• Colorado CBS requires the parties to CHECK whether they intend earnest money to be liquidated damages or not\n• If the box is checked: seller's remedy for buyer default is limited to forfeiture of earnest money\n• If not checked: seller may sue for additional damages beyond earnest money\n\nColorado Trust Account Rules:\n• Earnest money must be placed in a trust/escrow account within 3 business days of receipt\n• Employing brokers maintain trust accounts; employed brokers do not have their own trust accounts\n• Trust account records must be kept for 4 years (CREC Rule E-1)\n• CREC audits brokers' trust accounts randomly and upon complaint"
            }
          ],
          quiz: [
            {
              id: "co_b04q01",
              prompt: "Under the Colorado CBS Contract, if a buyer fails to deliver an Inspection Objection Notice by the Inspection Objection Deadline:",
              choices: [
                "The contract is automatically terminated",
                "The inspection contingency is waived and the buyer accepts the property's condition",
                "The seller must make all disclosed repairs",
                "The buyer receives a 5-day extension to submit objections"
              ],
              answer: 1,
              explanation: "Under the Colorado CBS, if the buyer fails to submit an Inspection Objection Notice by the deadline, the inspection contingency is WAIVED — the buyer is deemed to have accepted the property's condition and cannot use inspection issues to terminate or negotiate. This deadline tracking is critical for Colorado brokers."
            },
            {
              id: "co_b04q02",
              prompt: "Colorado has no state transfer tax. Which Colorado communities are notable exceptions with local real estate transfer taxes?",
              choices: [
                "Denver and Colorado Springs",
                "Telluride and Aspen",
                "Boulder and Fort Collins",
                "Pueblo and Grand Junction"
              ],
              answer: 1,
              explanation: "While Colorado has no statewide real estate transfer tax, some mountain resort communities — most notably Telluride and Aspen — have local transfer taxes. These can be significant (Telluride's transfer tax can be up to 3%). Always check for local transfer taxes in resort and mountain communities."
            },
            {
              id: "co_b04q03",
              prompt: "Colorado requires employing brokers to place earnest money in a trust account within how many business days of receipt?",
              choices: ["1 business day", "3 business days", "5 business days", "7 business days"],
              answer: 1,
              explanation: "Colorado CREC rules require earnest money to be placed in a trust/escrow account within 3 BUSINESS DAYS of receipt. CREC trust account rules are strict — mishandling trust funds (commingling, conversion, failure to deposit) can result in license suspension or revocation."
            },
            {
              id: "co_b04q04",
              prompt: "Colorado's expansive soils condition primarily affects which part of the state and creates what type of problem?",
              choices: [
                "Western Slope — causes flooding problems",
                "Front Range — causes foundation problems due to expanding clay soils",
                "Eastern Plains — causes erosion problems",
                "Mountain communities — causes avalanche problems"
              ],
              answer: 1,
              explanation: "Colorado's Front Range (Denver metro, Colorado Springs, Fort Collins) has significant expansive soil (swelling clay). When wet, these soils expand dramatically, causing foundation cracking, heaving, and structural damage. Inspectors and agents should recommend foundation inspections in Front Range transactions."
            },
            {
              id: "co_b04q05",
              prompt: "Colorado trust account records must be kept for how long per CREC rules?",
              choices: ["1 year", "2 years", "4 years", "7 years"],
              answer: 2,
              explanation: "Under CREC Rule E-1, trust account records must be maintained for at least 4 YEARS. CREC conducts random audits of brokers' trust accounts and investigates complaints involving trust fund mishandling. Proper recordkeeping is essential for compliance."
            }
          ]
        },

        {
          id: "co_b05",
          order: 5,
          title: "Real Estate Finance & Colorado Lending",
          week: "5-6",
          passingScore: 75,
          icon: "💰",
          objective: "Explain Colorado financing options, CHFA programs, construction lending, and key federal mortgage regulations applicable to Colorado transactions.",
          content: [
            {
              heading: "Colorado Housing and Finance Authority (CHFA)",
              body: "Colorado Housing and Finance Authority (CHFA) is Colorado's state housing finance agency providing affordable homeownership and rental programs.\n\nCHFA first mortgage programs:\n• CHFA FirstStep: low fixed rates for first-time buyers; income and purchase price limits apply\n• CHFA SmartStep: down payment assistance paired with CHFA first mortgage\n• CHFA Preferred: for buyers who do NOT need down payment assistance but want CHFA rates\n\nCHFA down payment assistance:\n• CHFA Down Payment Assistance Grant: up to 4% of first mortgage; does NOT need to be repaid\n• CHFA Second Mortgage Loan: up to 4% of first mortgage; low-interest second mortgage\n\nCHFA income limits and purchase price limits:\n• Vary by county and household size\n• Higher limits in high-cost areas (Front Range metros have higher limits than rural counties)\n• Must be primary residence\n\nCHFA military programs:\n• CHFA offers special programs for active military, veterans, and surviving spouses\n• These can be combined with VA loan benefits in some cases\n\nColorado also has significant conventional lending activity due to the strong Front Range real estate market."
            },
            {
              heading: "Colorado Construction Lending",
              body: "Colorado's real estate market includes significant new construction activity, particularly on the Front Range and in resort communities.\n\nConstruction loan types:\n• Construction-to-permanent (C2P): single loan that converts from construction to mortgage at completion; one closing\n• Stand-alone construction loan + permanent mortgage: two separate closings; more complex but sometimes better rates\n\nConstruction draws:\n• Lender releases funds in stages ('draws') as construction milestones are met\n• Inspector or draw schedule verifies completion before each draw\n• Interest-only payments during construction phase (only on funds drawn)\n\nColorado mechanics' lien rules:\n• Colorado construction lenders must be aware of 'priority' mechanic's liens\n• Colorado mechanic's lien: must be filed within 4 months of last work (residential projects)\n• Title insurance for construction loans typically includes mechanic's lien coverage\n\nColorado builder disclosure requirements:\n• Builders of new homes must provide a New Home Construction Warranty\n• Workmanship and systems: 1 year\n• Structural defects: 7 years\n• Builders must disclose all known defects even if covered under warranty"
            },
            {
              heading: "Federal Mortgage Regulations",
              body: "Federal regulations that Colorado real estate professionals must understand:\n\nTILA-RESPA Integrated Disclosure (TRID):\n• Loan Estimate (LE): provided within 3 business days of complete application\n• Closing Disclosure (CD): provided at least 3 business days before closing\n• TRID applies to most residential mortgage transactions\n\nDodd-Frank and Qualified Mortgage (QM):\n• QM rule requires lenders to verify borrower's ability to repay\n• QM loans have specific features: max 30-year term, no negative amortization, no interest-only, max points/fees of 3%\n• Safe harbor: lenders following QM rules are generally protected from claims of irresponsible lending\n\nConventional loan limits in Colorado:\n• High-cost area loan limits apply in many Colorado counties\n• San Miguel County (Telluride), Eagle County (Vail), Pitkin County (Aspen), Summit County (Breckenridge) have among the highest loan limits in the U.S.\n• Check FHFA website annually for current loan limits by county\n\nFHA in Colorado:\n• FHA loans are common for first-time buyers on the Front Range\n• FHA MIP required for all FHA loans\n• FHA 203(k) rehabilitation loans useful for older Denver-area housing stock"
            }
          ],
          quiz: [
            {
              id: "co_b05q01",
              prompt: "The CHFA Down Payment Assistance Grant provides:",
              choices: [
                "A second mortgage that must be repaid over 10 years",
                "Up to 4% of the first mortgage amount that does NOT need to be repaid",
                "A forgivable loan that is forgiven after 5 years of occupancy",
                "Cash directly to the buyer at closing with no conditions"
              ],
              answer: 1,
              explanation: "The CHFA Down Payment Assistance Grant provides up to 4% of the first mortgage amount as a grant that does NOT need to be repaid. This is different from CHFA's Second Mortgage Loan, which is a low-interest loan that must be repaid. The Grant is ideal for buyers with limited cash but sufficient income to qualify for a mortgage."
            },
            {
              id: "co_b05q02",
              prompt: "Colorado counties like Eagle (Vail), Pitkin (Aspen), and San Miguel (Telluride) have high conventional loan limits because they are:",
              choices: [
                "Rural counties with lower property values",
                "High-cost areas where FHFA has set elevated conforming loan limits",
                "Special enterprise zones with no loan limits",
                "Colorado-only exception counties under state law"
              ],
              answer: 1,
              explanation: "Mountain resort counties like Eagle (Vail), Pitkin (Aspen), and San Miguel (Telluride) are designated as high-cost areas by FHFA, allowing higher conforming loan limits than the national baseline. This allows buyers to use conforming (Fannie Mae/Freddie Mac) loans for higher-priced properties in these markets."
            }
          ]
        },

        {
          id: "co_b06",
          order: 6,
          title: "Title, Ownership, and Colorado Recording",
          week: "5-6",
          passingScore: 75,
          icon: "📜",
          objective: "Distinguish deed types, title search process, title insurance, and Colorado recording requirements.",
          content: [
            {
              heading: "Deed Types in Colorado",
              body: "Colorado recognizes several types of deeds:\n\nGeneral Warranty Deed:\n• Broadest seller protection for buyer\n• Seller warrants against ALL defects, including those before seller's ownership\n• Covenants: seisin, quiet enjoyment, further assurance, warranty, right to convey\n• Most protective for buyers; requires clean title or acceptable exceptions\n\nSpecial Warranty Deed:\n• Seller warrants only against defects created DURING seller's ownership\n• Does NOT warrant against defects before seller acquired title\n• Common in Colorado commercial transactions and REO sales\n\nQuitclaim Deed:\n• No warranties at all — conveys only what the grantor has\n• Used for: adding/removing spouses, correcting errors, family transfers, clearing clouds on title\n• Should NOT be used for standard purchase transactions\n\nDeeds of Trust:\n• Colorado primarily uses deeds of trust (not mortgages) for residential lending\n• Three parties: trustor (borrower), trustee (third party holds legal title), beneficiary (lender)\n• Allows non-judicial foreclosure (see below) — faster and less expensive\n• Public trustee: Colorado uses PUBLIC trustees (county officials) rather than private trustees for deeds of trust — unique feature of Colorado law"
            },
            {
              heading: "Colorado Foreclosure — Public Trustee System",
              body: "Colorado's unique foreclosure system uses the PUBLIC TRUSTEE — a county official appointed to handle foreclosure proceedings.\n\nColorado non-judicial foreclosure process:\n1. Lender files Notice of Election and Demand (NED) with Public Trustee\n2. Public Trustee records the NED\n3. Cure period: borrower has right to cure the default up to the sale date\n4. Public Trustee's sale: conducted by the Public Trustee (not a private party)\n5. No redemption period after Public Trustee's sale for residential properties (immediate title transfer)\n\nTimeline: generally 3-5 months from NED to sale (much faster than judicial foreclosure)\n\nRight of redemption:\n• Colorado: NO redemption right for residential foreclosures after Public Trustee's sale\n• Exception: agricultural property has a 75-day redemption period\n\nDeficiency judgment:\n• After foreclosure, if sale price doesn't cover loan balance, lender can sue for deficiency\n• Colorado anti-deficiency protection: for one-action rule, lender electing non-judicial foreclosure generally waives right to deficiency judgment on residential properties\n\nColorado is debtor-friendly in this regard — the one-action rule and no redemption period create a relatively balanced system."
            },
            {
              heading: "Title Insurance in Colorado",
              body: "Colorado title insurance:\n\nTitle commitment (Commitment for Title Insurance):\n• Issued before closing by title company\n• Schedule A: proposed coverage amount, proposed insured, legal description\n• Schedule B-1: requirements (things that must happen for title to close)\n• Schedule B-2: exceptions (things NOT covered by the policy)\n\nOwner's policy:\n• Protects buyer against defects existing before closing\n• Issued at closing; one-time premium\n• Coverage continues as long as buyer or heirs own the property\n\nLender's policy:\n• Required by virtually all lenders\n• Protects only the lender; coverage decreases as loan is paid down\n• Does NOT protect the buyer\n\nColorado-specific title issues:\n• Mineral rights exceptions: standard Colorado policies often EXCLUDE mineral rights\n• ALTA 9 endorsement: covers comprehensive matters including encroachments\n• Subdivision plat restrictions: common in Colorado's mountain resort communities\n• HOA liens: can be priority liens; verify status before closing\n• Solar easements and solar rights: increasingly relevant in Colorado\n\nColored (sic) regulated rates: Colorado regulates title insurance premiums; rates are set by DORA. Consumers can negotiate other closing services fees."
            }
          ],
          quiz: [
            {
              id: "co_b06q01",
              prompt: "Which type of deed is most commonly used by lenders in Colorado residential REO (bank-owned) sales?",
              choices: ["General Warranty Deed", "Special Warranty Deed", "Quitclaim Deed", "Trustee's Deed"],
              answer: 1,
              explanation: "Banks selling REO (foreclosed) properties typically use Special Warranty Deeds in Colorado. The special warranty warrants only against defects created during the bank's ownership (typically very brief). Banks don't want to warrant against defects from prior owners, which is why they don't use General Warranty Deeds."
            },
            {
              id: "co_b06q02",
              prompt: "Colorado's unique foreclosure system uses a county official called the:",
              choices: ["Sheriff", "Public Trustee", "Circuit Court Judge", "State Foreclosure Commissioner"],
              answer: 1,
              explanation: "Colorado uses PUBLIC TRUSTEES — county officials — to conduct foreclosure sales. When a lender files a Notice of Election and Demand (NED), the Public Trustee handles the foreclosure process. This is unique to Colorado. Most states use private trustees or sheriffs for foreclosure proceedings."
            }
          ]
        },

        {
          id: "co_b07",
          order: 7,
          title: "Valuation & Colorado Market Analysis",
          week: "7-8",
          passingScore: 75,
          icon: "📊",
          objective: "Apply the three approaches to value, complete a Colorado CMA, and understand appraisal requirements for Colorado transactions.",
          content: [
            {
              heading: "The Three Approaches to Value",
              body: "Appraisers use three approaches to estimate market value:\n\n1. Sales Comparison Approach (Market Approach):\n• Most reliable for residential property\n• Compare subject property to recent sales of similar properties (comparables/comps)\n• Adjust for differences: location, size, age, condition, features\n• CREC requires agents to prepare CMAs using similar methodology\n\n2. Cost Approach:\n• Useful for new construction and unique properties\n• Land Value + Depreciated Cost of Improvements\n• Depreciation types: physical deterioration, functional obsolescence, external/economic obsolescence\n\n3. Income Approach:\n• Used for income-producing properties\n• Direct Capitalization: Value = NOI ÷ Cap Rate\n• GRM Method: Value = Gross Rent ÷ GRM\n\nColorado Front Range market characteristics:\n• High appreciation rates (Denver metro was among top markets 2013-2022)\n• Low inventory drove prices to record highs\n• Market correction began in 2022-2023 with rising interest rates\n• Multiple-offer situations were common at peak; understanding escalation clauses is important\n• Resort markets (Aspen, Vail, Breckenridge) have different market dynamics than Front Range"
            },
            {
              heading: "Colorado CMA Preparation",
              body: "A Comparative Market Analysis (CMA) is prepared by real estate agents (not licensed appraisers) to help sellers price their homes and buyers make competitive offers.\n\nCMA methodology:\n• Select comparable sales from the past 3-6 months (use 12 months in slow markets)\n• Properties within 1 mile in urban areas; wider radius in rural areas\n• Similar size (within 20% of GLA), age, condition, and style\n• Adjust for differences using CREC professional standards\n\nColorado-specific CMA considerations:\n• Mountain/resort properties: comparables may be limited; wider time and distance radius needed\n• Front Range tract housing: many comparables available; focus on same subdivision when possible\n• Agricultural land: price per acre + improvements; water rights separately valued\n• Luxury properties: $1M+ market has limited comparables; national databases (LuxuryRE.com, etc.) used\n\nCREC advertising rules:\n• Agents must use 'sold by' (not 'sold for') when describing comparable sales\n• CMAs must be presented with the caveat that it is an agent's opinion, not an appraisal\n• CREC Rule E-29 addresses broker pricing opinions and their limitations"
            }
          ],
          quiz: [
            {
              id: "co_b07q01",
              prompt: "An appraiser is valuing a Colorado ski resort condominium in Breckenridge. Which approach to value is LEAST reliable for this property?",
              choices: ["Sales Comparison Approach", "Cost Approach", "Income Approach", "All three approaches are equally reliable"],
              answer: 1,
              explanation: "The Cost Approach is least reliable for resort condominiums because the land value and cost to rebuild are difficult to separate in a condominium ownership structure. The Sales Comparison Approach (using comparable resort condo sales) and Income Approach (based on rental income potential) are more applicable for resort condominiums."
            },
            {
              id: "co_b07q02",
              prompt: "A Denver duplex generates $48,000 NOI annually. Comparable investments are selling at a 5.5% cap rate. The indicated value is:",
              choices: ["$264,000", "$480,000", "$872,727", "$960,000"],
              answer: 2,
              explanation: "Value = NOI ÷ Cap Rate = $48,000 ÷ 0.055 = $872,727. This is the Income Approach to value. A 5.5% cap rate for Denver multifamily is reasonable in a moderate-rate market."
            }
          ]
        },

        {
          id: "co_b08",
          order: 8,
          title: "Fair Housing & Colorado Anti-Discrimination Law",
          week: "7-8",
          passingScore: 75,
          icon: "⚖️",
          objective: "Apply federal Fair Housing Act requirements and Colorado's expanded protected classes under the Colorado Anti-Discrimination Act (CADA).",
          content: [
            {
              heading: "Federal Fair Housing Act",
              body: "The Federal Fair Housing Act (FHA, 1968) prohibits discrimination in the sale, rental, or financing of housing based on:\n• Race\n• Color\n• National origin\n• Religion\n• Sex\n• Familial status (families with children under 18)\n• Disability (added in 1988 Fair Housing Amendments Act)\n\nFHA prohibitions include:\n• Refusing to sell or rent\n• Discriminatory terms and conditions\n• Discriminatory advertising\n• Blockbusting\n• Steering\n• Redlining\n• Failure to make reasonable accommodations for disabled persons\n• Failure to allow reasonable modifications\n\nExemptions from FHA:\n• Owner-occupied 1-4 family dwellings where owner doesn't use a broker ('Mrs. Murphy exemption')\n• Religious organizations (for non-commercial purposes)\n• Private clubs\n• Age-restricted communities (55+ or 62+ communities) are exempt from familial status"
            },
            {
              heading: "Colorado Anti-Discrimination Act (CADA)",
              body: "Colorado's CADA provides broader protections than federal FHA and adds protected classes:\n\nColorado protected classes include all federal classes PLUS:\n• Creed (religious beliefs)\n• Sexual orientation\n• Gender identity and expression\n• Marital status\n• Ancestry\n• Source of income (Section 8/vouchers)\n\nSource of income protection:\n• Colorado prohibits housing discrimination based on source of income\n• Landlords CANNOT refuse to rent to Section 8 voucher holders\n• This is a major distinction from states without source-of-income protection\n• Colorado added this protection in 2020\n\nColorado Civil Rights Division (CCRD):\n• State agency that enforces CADA\n• Complaints filed with CCRD or HUD\n• CCRD can investigate, attempt conciliation, or refer to hearing\n• HUD also has concurrent jurisdiction\n\nColorado real estate practices that violate CADA:\n• Steering buyers away from or toward neighborhoods based on any protected characteristic\n• Suggesting a neighborhood's 'character' will change based on protected class composition\n• Advertising in ways that indicate a preference for or against any protected class"
            }
          ],
          quiz: [
            {
              id: "co_b08q01",
              prompt: "Colorado's Anti-Discrimination Act (CADA) adds which protected class NOT covered by the federal Fair Housing Act?",
              choices: ["Race", "Disability", "Source of income (Section 8 vouchers)", "Familial status"],
              answer: 2,
              explanation: "Colorado's CADA adds SOURCE OF INCOME as a protected class, which is NOT protected under the federal Fair Housing Act. This means Colorado landlords cannot refuse to rent to Section 8 voucher holders. This was added to Colorado law in 2020 and has significantly impacted rental housing practices."
            },
            {
              id: "co_b08q02",
              prompt: "A Colorado real estate agent shows a Black buyer homes only in predominantly Black neighborhoods, steering them away from other neighborhoods. This violates:",
              choices: [
                "Only the Colorado Anti-Discrimination Act",
                "Only the federal Fair Housing Act",
                "Both the federal Fair Housing Act and Colorado Anti-Discrimination Act",
                "Neither, because the agent was being helpful based on the buyer's presumed preferences"
              ],
              answer: 2,
              explanation: "Steering — directing buyers toward or away from neighborhoods based on race or other protected characteristics — violates BOTH the federal Fair Housing Act AND Colorado's CADA. An agent must not make assumptions about where buyers want to live based on their race, national origin, or any other protected characteristic."
            }
          ]
        },

        {
          id: "co_b09",
          order: 9,
          title: "Property Management & Colorado Landlord-Tenant Law",
          week: "9-10",
          passingScore: 75,
          icon: "🏢",
          objective: "Apply Colorado landlord-tenant law, security deposit rules, and property management requirements to residential leasing situations.",
          content: [
            {
              heading: "Colorado Landlord-Tenant Law",
              body: "Colorado landlord-tenant law is governed primarily by the Colorado Revised Statutes, Title 38, Articles 12 and 32.\n\nKey Colorado landlord-tenant rules:\n\nSecurity Deposit:\n• No statutory limit on security deposit amount in Colorado\n• Must be returned within 30 days of termination (or 60 days if lease allows and disclosed in lease)\n• If landlord retains any portion, must provide itemized written statement of deductions\n• Failure to return deposit: tenant can sue for up to 3x the wrongfully withheld amount\n\nEntry notice:\n• Colorado requires 24 hours advance notice for non-emergency entry\n• Emergency entry: no notice required\n\nHabitability:\n• Colorado Warranty of Habitability (C.R.S. 38-12-503): all residential landlords must maintain habitable premises\n• Heat, water, electrical systems must be functional\n• No mold, pests, or conditions endangering tenant health\n\nEviction process in Colorado:\n• Demand for compliance or possession: 3-day notice for non-payment; 10-day notice for lease violations\n• If not cured, landlord files forcible entry and detainer (eviction) in county court\n• Colorado has streamlined eviction procedures but tenant has right to appear at hearing"
            },
            {
              heading: "Colorado Short-Term Rental Regulations",
              body: "Colorado's resort communities have significant short-term rental (STR) markets, but regulations vary dramatically:\n\nStatewide Colorado STR:\n• No single statewide STR licensing system\n• Each municipality sets its own STR rules\n• Some HOAs prohibit STRs regardless of local law\n\nMajor Colorado STR regulatory environments:\n• Denver: requires STR license; owner must reside in the property (primary residence only); strict enforcement\n• Boulder: caps STR licenses; primary residence only; strict limits\n• Breckenridge: allows STRs broadly; STR license required\n• Aspen: limits STRs; requires license; significant local controversy\n• Steamboat Springs: actively promotes STR economy; licensing required\n\nReal estate agents and STR:\n• Buyers of Colorado investment properties must research STR feasibility before purchase\n• HOA restrictions, local licensing, and zoning must ALL be checked\n• An agent who fails to disclose known STR restrictions may face liability\n• Include STR feasibility in due diligence checklist for investment buyers\n\nColorado STR tax: STR revenue is subject to Colorado sales tax, lodging tax, and local taxes. These vary by jurisdiction."
            }
          ],
          quiz: [
            {
              id: "co_b09q01",
              prompt: "Under Colorado law, a landlord must return a security deposit within how many days after the tenancy ends (standard)?",
              choices: ["14 days", "21 days", "30 days", "45 days"],
              answer: 2,
              explanation: "Colorado requires security deposits to be returned within 30 DAYS of termination of tenancy (or 60 days if the lease allows and this is disclosed). If the landlord wrongfully withholds the deposit, the tenant can sue for up to 3 times the withheld amount."
            },
            {
              id: "co_b09q02",
              prompt: "A buyer in Denver wants to purchase a condo to use as an Airbnb. The agent should:",
              choices: [
                "Assure the buyer all condos in Denver can be used as STRs",
                "Advise the buyer to check Denver's STR licensing requirements, HOA restrictions, and verify the property qualifies as a primary residence",
                "Tell the buyer no STRs are allowed anywhere in Denver",
                "Recommend the buyer proceed with the purchase and figure out STR rules later"
              ],
              answer: 1,
              explanation: "Denver requires STR licensees to use only their primary residence as an STR. The agent must advise the buyer to check: (1) Denver's licensing requirements (primary residence only), (2) HOA restrictions on STRs, and (3) any zoning limitations. Failure to investigate and disclose these restrictions could expose the agent to liability."
            }
          ]
        },

        {
          id: "co_b10",
          order: 10,
          title: "Environmental Issues & Colorado-Specific Disclosures",
          week: "9-10",
          passingScore: 75,
          icon: "🌱",
          objective: "Identify environmental hazards requiring disclosure in Colorado transactions including radon, asbestos, wildfire risk, and oil/gas contamination.",
          content: [
            {
              heading: "Radon in Colorado",
              body: "Colorado has one of the highest concentrations of radon-prone areas in the United States due to its granite bedrock and uranium-rich soils in many regions.\n\nRadon facts:\n• Radon is a naturally occurring radioactive gas formed by decay of uranium in soil and rock\n• Second leading cause of lung cancer in the U.S. (after smoking)\n• EPA action level: 4 picocuries per liter (pCi/L)\n• Colorado average indoor radon is higher than the national average\n\nColorado radon disclosure:\n• Colorado law does not have a specific radon disclosure statute comparable to lead paint\n• However, CREC's SPD form asks about known radon test results\n• The Surgeon General's health advisory on radon recommends testing all homes\n• Colorado Department of Public Health and Environment (CDPHE) provides radon maps showing elevated risk areas\n\nColorado counties with elevated radon:\n• Boulder County, Jefferson County, Denver metro, Colorado Springs area — all have elevated radon risk\n• Mountain counties with granite geology (Clear Creek, Gilpin, Teller) — high risk\n\nRadon testing and mitigation:\n• Short-term test: 2-7 days (least accurate)\n• Long-term test: 90+ days (most accurate for annual average)\n• Mitigation: sub-slab depressurization system — $800-$2,500 installed\n• Post-mitigation testing required to verify effectiveness\n\nAgent best practice: Always recommend radon testing in Colorado. Include radon testing as a standard inspection item in buyer representation agreements."
            },
            {
              heading: "Wildfire Risk and Mitigation in Colorado",
              body: "Colorado faces significant and increasing wildfire risk, particularly in the wildland-urban interface (WUI) — areas where homes and wildland vegetation meet.\n\nMajor Colorado wildfires:\n• Cameron Peak Fire (2020): 208,913 acres — largest in Colorado history at the time\n• East Troublesome Fire (2020): 193,812 acres; killed two people\n• Marshall Fire (2021): destroyed 1,084 homes in Boulder County — most destructive in Colorado history in terms of structures\n\nColorado wildfire disclosure requirements:\n• SPD form includes disclosures about known wildfire damage and mitigation\n• Colorado law (HB 22-1007) added additional wildfire risk disclosure requirements\n• Sellers must disclose if they have received a wildfire home assessment\n• Some counties require wildfire risk disclosure for properties in high-risk areas\n\nDefensible space:\n• Zone 1 (0-30 feet): non-combustible zone around structure; limited vegetation\n• Zone 2 (30-100 feet): reduced fuel zone; thin and space vegetation\n• Colorado law requires defensible space for properties in high-risk areas\n\nInsurance implications:\n• Many Colorado homeowners in fire-prone areas are experiencing difficulty obtaining or renewing homeowner's insurance\n• Some insurers have left the Colorado market\n• Real estate agents should advise buyers to verify insurance availability BEFORE removing inspection contingencies"
            },
            {
              heading: "Oil, Gas, and Brownfield Issues",
              body: "Colorado's Front Range and Eastern Plains have significant oil and gas development that creates environmental concerns in real estate:\n\nOil and gas contamination:\n• Spills, leaks, and flowback from oil and gas operations can contaminate soil and groundwater\n• Methane migration from old wells is a known issue in Weld County (Firestone explosion 2017)\n• COGCC maintains a database of known contamination sites\n• Sellers must disclose known contamination\n\nBrownfield redevelopment:\n• Colorado has many former industrial sites (brownfields) being redeveloped, particularly in Denver\n• RiNo (River North), Berkeley, and other Denver neighborhoods have significant brownfield redevelopment\n• CDPHE manages the Voluntary Cleanup and Redevelopment Program (VCRP)\n• Title searches for brownfield properties should include environmental lien searches\n\nUnderground Storage Tanks (USTs):\n• Former gas station sites and industrial properties may have USTs\n• UST discovery can trigger expensive cleanup obligations\n• Always investigate property history for commercial or industrial use\n\nLead paint:\n• Federal lead paint disclosure required for pre-1978 homes\n• Colorado has significant housing stock from the 1940s-1970s (especially Denver) that may contain lead paint\n• HUD pamphlet and seller disclosure required for all pre-1978 residential transactions"
            }
          ],
          quiz: [
            {
              id: "co_b10q01",
              prompt: "The EPA's action level for radon in residential buildings is:",
              choices: ["2 pCi/L", "4 pCi/L", "8 pCi/L", "10 pCi/L"],
              answer: 1,
              explanation: "The EPA recommends taking action to reduce radon levels when they reach or exceed 4 PICOCURIES PER LITER (pCi/L). Colorado has higher-than-average radon risk due to its granite bedrock and uranium-rich soils. Colorado real estate agents should routinely recommend radon testing as part of the inspection process."
            },
            {
              id: "co_b10q02",
              prompt: "The 2021 Marshall Fire in Boulder County is notable in Colorado real estate because it:",
              choices: [
                "Destroyed the largest total acreage in Colorado history",
                "Was the most destructive Colorado fire in terms of structures destroyed, burning over 1,000 homes",
                "Was caused by oil and gas development",
                "Led to Colorado eliminating wildfire risk disclosures"
              ],
              answer: 1,
              explanation: "The 2021 Marshall Fire was the most destructive Colorado wildfire in terms of STRUCTURES DESTROYED, burning over 1,084 homes in Boulder County. While not the largest by acreage (Cameron Peak was larger), the Marshall Fire's impact on suburban neighborhoods led to increased wildfire risk disclosure requirements and insurance challenges throughout Colorado."
            },
            {
              id: "co_b10q03",
              prompt: "A Colorado seller is selling a pre-1978 home. Federal law requires the seller to:",
              choices: [
                "Remove all lead paint before the sale",
                "Provide a lead paint disclosure and EPA pamphlet to the buyer",
                "Have the home tested for lead paint before listing",
                "Place the home in a special 'lead paint' category on the MLS"
              ],
              answer: 1,
              explanation: "Federal law (LBPPA) requires sellers of pre-1978 homes to provide buyers with: (1) a Lead Paint Disclosure form disclosing known lead paint and lead paint hazards, (2) the EPA pamphlet 'Protect Your Family from Lead in Your Home,' and (3) an opportunity for the buyer to conduct a lead paint inspection. Sellers are NOT required to test or remove lead paint before selling."
            }
          ]
        },

        {
          id: "co_b11",
          order: 11,
          title: "Colorado CREC Rules, Ethics, and Trust Accounts",
          week: "11-12",
          passingScore: 75,
          icon: "⚖️",
          objective: "Apply CREC rules on advertising, trust accounts, conflicts of interest, and the Colorado Real Estate Recovery Fund.",
          content: [
            {
              heading: "CREC Advertising Rules",
              body: "Colorado CREC has specific rules governing advertising by real estate brokers:\n\nRule E-35: Broker advertising requirements:\n• All advertising must clearly identify the employing broker (brokerage name)\n• An employed broker cannot advertise without the employing broker's name\n• Internet advertising (websites, social media) must display the employing broker's name\n• Email solicitations must include employing broker contact information\n\nProhibited advertising practices:\n• Advertising property at a price other than the listed price without written consent\n• Advertising in a way that misleads consumers about the broker's identity\n• 'Blind ads' — advertising without identifying the broker\n\nTeam advertising:\n• Teams are popular in Colorado's competitive markets\n• Team names cannot imply a brokerage relationship that doesn't exist\n• The employing broker's name must still be prominently displayed\n\nSocial media:\n• Must identify broker affiliation\n• Cannot use client testimonials in a misleading way\n• Must comply with NAR Code of Ethics regarding advertising\n\nColorado 'for sale by owner' (FSBO): agents can assist FSBOs, but must clearly disclose their license status and who they represent"
            },
            {
              heading: "Colorado Real Estate Recovery Fund",
              body: "Colorado maintains a Real Estate Recovery Fund to compensate consumers who suffer losses due to a broker's fraudulent, deceptive, or dishonest conduct.\n\nFund details:\n• Maximum recovery: $50,000 per transaction\n• Must have an unsatisfied judgment against a licensed broker\n• Application must be filed within 1 year of judgment\n• Fund may pay when broker cannot satisfy judgment\n\nConsequences for the broker:\n• If the Recovery Fund pays on behalf of a broker, the broker's license is immediately suspended\n• The broker must repay the Fund with interest before license can be reinstated\n\nFund eligibility:\n• Only consumers who suffered financial loss from a broker's professional conduct\n• Must have first attempted to collect from the broker directly\n• Must obtain a judgment against the broker\n\nColorado Recovery Fund vs. E&O Insurance:\n• E&O insurance covers negligence — accidents and professional errors\n• Recovery Fund covers fraud and intentional misconduct — situations E&O typically does NOT cover\n• Both protections are available in Colorado; they serve different purposes"
            }
          ],
          quiz: [
            {
              id: "co_b11q01",
              prompt: "Under CREC Rule E-35, an employed Colorado broker's internet advertising must:",
              choices: [
                "Only display the employed broker's name",
                "Clearly identify the employing broker (brokerage name)",
                "Include the CREC license number in all ads",
                "Be pre-approved by CREC before publication"
              ],
              answer: 1,
              explanation: "CREC Rule E-35 requires all advertising by employed brokers to clearly identify the EMPLOYING BROKER (brokerage name). An employed broker cannot advertise under only their own name without the employing broker's identification. This applies to all advertising including internet, social media, and email."
            },
            {
              id: "co_b11q02",
              prompt: "The Colorado Real Estate Recovery Fund pays a maximum of how much per transaction?",
              choices: ["$25,000", "$50,000", "$100,000", "$250,000"],
              answer: 1,
              explanation: "The Colorado Real Estate Recovery Fund has a maximum payment of $50,000 per transaction. If the Fund pays on behalf of a broker, the broker's license is immediately suspended and the broker must repay the Fund with interest before reinstatement."
            }
          ]
        },

        {
          id: "co_b12",
          order: 12,
          title: "Investment Property & Colorado Tax Considerations",
          week: "11-12",
          passingScore: 75,
          icon: "📈",
          objective: "Analyze Colorado investment property metrics, 1031 exchange rules, and Colorado-specific tax considerations for real estate investors.",
          content: [
            {
              heading: "Colorado Property Tax System",
              body: "Colorado has a unique property tax system that has been the subject of significant voter activity:\n\nColorado property tax basics:\n• Administered by county assessors\n• Property reassessed every 2 years (odd years)\n• Actual value × assessment rate × mill levy = property tax\n\nAssessment rates in Colorado:\n• Residential property: 6.765% of actual value (as of 2023)\n• Commercial/industrial: 27.9% of actual value\n• Agricultural: 26.4%\n• This assessment rate difference explains why commercial properties pay much higher taxes than residential relative to their value\n\nBruce Ratchet (Gallagher Amendment) history:\n• Colorado's Gallagher Amendment (1982-2020) capped residential assessment ratio\n• Voters repealed the Gallagher Amendment in 2020\n• Since repeal, assessment rates have been set by the legislature\n\nSenior/disabled property tax exemption:\n• Colorado seniors (65+) and disabled persons owning their primary residence for 10+ years can receive a 50% reduction in assessed value on the first $200,000 of actual value\n• Must apply with county assessor\n• Significant benefit for long-term Colorado homeowners"
            },
            {
              heading: "1031 Exchange in Colorado",
              body: "IRC Section 1031 allows Colorado investors to defer capital gains tax by exchanging investment property for like-kind property.\n\n1031 rules:\n• 45 days to identify replacement property\n• 180 days to close on replacement property\n• Qualified Intermediary (QI) required — Colorado has many QI companies\n• Must be investment or business property (not primary residence)\n\nColorado-specific 1031 considerations:\n• Colorado has a state income tax (4.4% flat rate) — investors also defer Colorado income tax on capital gains\n• Popular Colorado exchange strategies: Front Range apartment building → mountain resort property; Denver commercial → Phoenix commercial (interstate exchange)\n• Colorado ski resort properties often attract 1031 exchange buyers from other states\n\nColorado capital gains:\n• Colorado taxes capital gains as ordinary income at the flat rate (4.4%)\n• No special Colorado long-term capital gains rate\n• Federal capital gains rates (0%, 15%, 20%) apply separately\n\nSection 121 exclusion:\n• Federal exclusion: $250,000 (single) / $500,000 (married) on primary residence gain\n• Colorado honors the Section 121 exclusion — the excluded federal gain is also excluded from Colorado income tax\n• Must have owned and lived in the home 2 of the last 5 years"
            }
          ],
          quiz: [
            {
              id: "co_b12q01",
              prompt: "In Colorado, a residential investor selling a rental property with a large capital gain can defer BOTH federal AND Colorado income taxes by using a:",
              choices: [
                "Section 121 exclusion",
                "1031 like-kind exchange",
                "Colorado homestead exemption",
                "Installment sale"
              ],
              answer: 1,
              explanation: "A 1031 like-kind exchange defers BOTH federal capital gains taxes AND Colorado state income taxes (4.4% flat rate) on the gain from selling investment property. By identifying replacement property within 45 days and closing within 180 days using a qualified intermediary, the entire gain can be deferred into the replacement property."
            },
            {
              id: "co_b12q02",
              prompt: "Colorado's residential property assessment rate (approximately 6.765%) is significantly lower than the commercial rate (27.9%). This means:",
              choices: [
                "Commercial properties pay lower taxes than residential",
                "Residential property owners pay lower taxes relative to their property's actual value compared to commercial owners",
                "Residential and commercial properties pay the same total tax amount",
                "Colorado exempts commercial property from property taxes"
              ],
              answer: 1,
              explanation: "Because Colorado's residential assessment rate (6.765%) is much lower than the commercial rate (27.9%), residential property owners pay significantly less in property taxes relative to their actual property value compared to commercial property owners. This is a major policy choice embedded in Colorado's property tax system."
            }
          ]
        }

      ] // end broker modules
    }, // end broker track

    // ──────────────────────────────────────────────────────
    // MLO TRACK — COLORADO MLO LICENSE
    // ──────────────────────────────────────────────────────
    mlo: {
      id: "mlo",
      label: "CO MLO License (SAFE Act)",
      icon: "🏦",
      color: "#1565C0",
      description: "NMLS SAFE MLO exam prep — 20-hour federal pre-license + Colorado DORA Division of Banking requirements",
      requirements: [
        "Complete 20 hours of NMLS-approved pre-license education",
        "Pass NMLS SAFE MLO National Test with Uniform State Content (75% passing score)",
        "Authorize credit report and criminal background check through NMLS",
        "Complete NMLS MU4 individual form",
        "Sponsored by a Colorado DORA-licensed mortgage company",
        "No felony conviction within 7 years; lifetime bar for financial crimes",
        "Annual CE: 8 hours per year (3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective)"
      ],
      fees: [
        { item: "NMLS application fee", amount: "$30", source: "NMLS" },
        { item: "SAFE MLO test fee", amount: "$110", source: "Prometric" },
        { item: "Colorado state license fee", amount: "$100", source: "Colorado DORA" },
        { item: "20-hour pre-license education", amount: "$200–$400", note: "varies by provider" },
        { item: "Credit report / background check", amount: "$30", source: "NMLS" }
      ],
      examStructure: {
        national: { items: 115, time: "190 minutes", passing: 75, note: "120 total; 115 scored + 5 unscored; Uniform State Content embedded" },
        state: { items: 0, time: "included in national exam", note: "No separate state exam — UST embedded in national test" }
      },
      modules: [
        {
          id: "co_m01",
          order: 1,
          title: "SAFE Act & Colorado MLO Licensing",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Navigate NMLS MU4 process, Colorado DORA requirements, CHFA programs, and annual renewal.",
          content: [
            {
              heading: "Colorado DORA Division of Banking",
              body: "Colorado MLOs are regulated by the Colorado Division of Banking within DORA (Department of Regulatory Agencies).\n\nStatute: Colorado Mortgage Loan Originator Licensing Act (C.R.S. 12-10-701 et seq.)\n\nColorado license types:\n• Individual MLO License: required for all persons taking mortgage applications or negotiating mortgage terms\n• Mortgage Company Registration: for companies\n\nAll Colorado MLOs must be registered through NMLS and hold a valid Colorado endorsement.\n\nAnnual renewal: by December 31 each year; 8 CE hours required (3 federal law, 2 ethics, 2 non-traditional, 1 elective)."
            },
            {
              heading: "CHFA and Colorado Mortgage Programs",
              body: "Colorado-specific mortgage programs MLOs must know:\n\nCHFA programs:\n• CHFA FirstStep: first-time homebuyer fixed-rate program with income limits\n• CHFA SmartStep: down payment assistance paired with CHFA first mortgage\n• CHFA Preferred: no down payment assistance but CHFA rates\n\nColorado Housing Assistance Corporation (CHAC): local Denver-area DPA programs\n\nFederal programs relevant in Colorado:\n• FHA: common in Denver metro for first-time buyers\n• VA: significant in communities near military installations (Fort Carson, Peterson, Buckley, JBER)\n• USDA Rural: applicable in rural eastern Colorado and small mountain towns\n• Conventional/Fannie/Freddie: dominant in Colorado's active market\n\nHigh-cost area loan limits: many Colorado counties qualify as high-cost areas with elevated conforming loan limits — check FHFA.gov annually."
            }
          ],
          quiz: [
            {
              id: "co_m01q01",
              prompt: "Which agency regulates Colorado MLO licenses?",
              choices: ["Colorado Real Estate Commission (CREC)", "Colorado Division of Banking (DORA)", "Colorado Attorney General", "CFPB"],
              answer: 1,
              explanation: "Colorado MLO licenses are regulated by the Colorado Division of Banking within DORA (Department of Regulatory Agencies). Real estate brokers are regulated by CREC, also under DORA, but MLOs fall under the Division of Banking."
            },
            {
              id: "co_m01q02",
              prompt: "A Colorado MLO must complete annual continuing education by:",
              choices: ["June 30 of each year", "September 30 of each year", "December 31 of each year", "January 31 of each year"],
              answer: 2,
              explanation: "Colorado MLO annual CE (8 hours: 3 federal law, 2 ethics, 2 non-traditional, 1 elective) must be completed and the license renewed by DECEMBER 31 of each year. Missing this deadline results in license lapse."
            }
          ]
        },

        {
          id: "co_m02",
          order: 2,
          title: "Federal Mortgage Law — RESPA, TILA, ECOA",
          week: "3-4",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master RESPA, TILA, ECOA, HMDA, and SAFE Act provisions for the NMLS national exam.",
          content: [
            {
              heading: "TRID — Loan Estimate and Closing Disclosure",
              body: "TRID (TILA-RESPA Integrated Disclosure) combines TILA and RESPA disclosures:\n\nLoan Estimate (LE):\n• Provided within 3 business days of complete application\n• 6 pieces of information trigger application: name, income, SSN, property address, property value, loan amount\n• LE is not a loan approval or commitment\n• Valid for 10 business days\n\nClosing Disclosure (CD):\n• Provided at least 3 business days before consummation\n• Cannot close before the 3-day waiting period\n• Waiting period can be waived only for bona fide personal financial emergency (very rare)\n\nChanged circumstances:\n• Certain events allow re-disclosure with revised LE\n• Changed circumstances: borrower-initiated changes, new information, acts of nature\n• Rate lock changes can trigger new LE\n\nTolerance levels:\n• Zero tolerance: origination charges, transfer taxes\n• 10% tolerance: recording fees, required third-party services\n• Unlimited tolerance: prepaid items, escrow, optional services"
            },
            {
              heading: "ECOA, Fair Lending, and HMDA",
              body: "ECOA (Equal Credit Opportunity Act / Regulation B):\n• Prohibits discrimination in credit: race, color, religion, national origin, sex, marital status, age (40+), public assistance income\n• Adverse action notice: within 30 days of application decision\n• Must state specific reasons for denial\n\nHMDA (Home Mortgage Disclosure Act / Regulation C):\n• Large lenders report data on mortgage applications by race, gender, income, geography\n• Used to detect discriminatory lending patterns\n• CFPB administers and publishes HMDA data publicly\n\nFair lending theories:\n• Disparate treatment: intentional discrimination based on protected class\n• Disparate impact: neutral policy with disproportionate adverse effect\n• Redlining: refusing to lend in areas based on race/ethnicity\n\nFCRA (Fair Credit Reporting Act):\n• Free annual credit report from each bureau\n• Right to dispute inaccurate information\n• Adverse action notice citing credit reasons\n\nColorado relevance: HMDA data shows Denver metro lending patterns; CRA (Community Reinvestment Act) requires banks to serve all communities including LMI areas."
            }
          ],
          quiz: [
            {
              id: "co_m02q01",
              prompt: "Under TRID, the Closing Disclosure must be received by the borrower at least how many business days before loan consummation?",
              choices: ["1 business day", "2 business days", "3 business days", "5 business days"],
              answer: 2,
              explanation: "Under TRID, the Closing Disclosure must be provided to the borrower at least 3 BUSINESS DAYS before loan consummation (closing). This mandatory waiting period allows borrowers to review final loan terms before closing. The closing cannot proceed until the 3-day period has passed."
            },
            {
              id: "co_m02q02",
              prompt: "Which act requires lenders to send an adverse action notice within 30 days of a credit application denial, stating specific reasons?",
              choices: ["RESPA", "TILA", "ECOA / Regulation B", "HMDA"],
              answer: 2,
              explanation: "ECOA (Regulation B) requires lenders to send an adverse action notice within 30 days of an adverse credit decision (denial, counteroffer, etc.). The notice must state the SPECIFIC reasons for the adverse action, allowing the applicant to understand and potentially address the issues."
            }
          ]
        },

        {
          id: "co_m03",
          order: 3,
          title: "Mortgage Products & Colorado Lending",
          week: "5-6",
          passingScore: 75,
          icon: "📊",
          objective: "Distinguish mortgage products, ARM structures, QM rules, and Colorado-specific lending considerations.",
          content: [
            {
              heading: "Conventional Loans and Colorado Market",
              body: "Conventional loans (Fannie Mae/Freddie Mac) dominate Colorado's residential mortgage market.\n\nColorado high-cost area conforming loan limits:\n• Most Colorado counties: standard conforming limit\n• Mountain resort counties (Eagle, Pitkin, San Miguel, Summit, Garfield): elevated limits\n• Denver-Boulder corridor counties: elevated limits\n\nColorado conventional characteristics:\n• Strong resale market; Fannie Mae and Freddie Mac purchase most Colorado loans\n• Condominium loans: Colorado has many condo buildings; must check Fannie Mae condo approval status\n• Jumbo loans: common in Aspen, Vail, Denver luxury markets\n\nArm structure review:\n• 5/1, 7/1, 10/1 ARMs common in Colorado jumbo market\n• Index: SOFR (replaced LIBOR)\n• Caps: 2/2/5 is common structure\n• First cap: max change at first adjustment\n• Periodic cap: max change at each subsequent adjustment\n• Lifetime cap: max change over life of loan"
            },
            {
              heading: "Construction and Renovation Loans in Colorado",
              body: "Colorado's new construction market requires specialized financing knowledge.\n\nConstruction-to-permanent loans:\n• One closing; converts from construction draw to permanent mortgage at CO\n• Common for custom homes in mountain communities and Front Range subdivisions\n\nFannie Mae HomeStyle Renovation:\n• Purchase or refinance with renovation costs rolled into loan\n• Useful for Denver's older housing stock needing updates\n• 5% down for primary residence\n\nFHA 203(k) Rehabilitation:\n• Purchase and renovation in one loan\n• Standard 203(k): over $35,000 in improvements; requires HUD consultant\n• Limited 203(k): under $35,000 in non-structural work\n• Common in older Denver neighborhoods (Globeville, Elyria-Swansea)\n\nCHFA HomeAccess:\n• Down payment assistance for disabled persons and families with disabled members\n• Part of CHFA's inclusive homeownership programs"
            }
          ],
          quiz: [
            {
              id: "co_m03q01",
              prompt: "A Colorado borrower wants to purchase and rehabilitate an older Denver home. The loan program that combines purchase and renovation costs in a single FHA-insured loan is:",
              choices: ["FHA HECM", "FHA 203(k) Rehabilitation Loan", "FHA Title I Home Improvement Loan", "FHA Energy Efficient Mortgage"],
              answer: 1,
              explanation: "The FHA 203(k) Rehabilitation Loan combines the purchase price and renovation costs into a single FHA-insured loan. It is particularly useful for purchasing older homes (like Denver's historic neighborhoods) that need significant improvements. The Standard 203(k) covers over $35,000 in work; the Limited 203(k) covers under $35,000."
            }
          ]
        }
      ] // end mlo modules
    }, // end mlo track

    // ──────────────────────────────────────────────────────
    // PRACTICAL TRACK — COLORADO FIELD SKILLS
    // ──────────────────────────────────────────────────────
    practical: {
      id: "practical",
      label: "CO Practical Field Skills",
      icon: "🏡",
      color: "#2E7D32",
      description: "Colorado real-world transaction skills: mountain resort markets, Front Range buyer rep, investment analysis, CREC contract mastery",
      requirements: [
        "Complete broker pre-license education",
        "Pass PSI exam",
        "Active Colorado broker license",
        "Working under employing broker"
      ],
      fees: [],
      examStructure: { national: { items: 0, time: "N/A", passing: 70, note: "Practical assessments" }, state: { items: 0, time: "N/A", passing: 70, note: "Field competency evaluations" } },
      modules: [
        {
          id: "co_p01",
          order: 1,
          title: "Colorado Listing Process & Mountain Market",
          week: "1-4",
          passingScore: 70,
          icon: "📋",
          objective: "Master Colorado listing procedures from pre-listing research through CREC SPD completion, pricing, and mountain resort market dynamics.",
          content: [
            {
              heading: "Colorado Listing Preparation",
              body: "Steps to prepare a Colorado listing:\n\n1. Pre-listing due diligence:\n• Pull tax records from county assessor\n• Check for HOA (contact management company; request status letter and documents)\n• Research mineral rights status — is the mineral estate severed?\n• Check for oil and gas wells, leases, or pipelines\n• Research water rights (agricultural properties)\n• Check for any known environmental liens or cleanup orders\n• CDOT (Colorado Department of Transportation) ROW issues if near highways\n\n2. Complete Seller's Property Disclosure (SPD):\n• All known defects must be disclosed\n• Radon test results (if available)\n• Wildfire damage or mitigation work\n• HOA assessments and violations\n• Water system type (public, well, cistern)\n• Mineral rights status\n\n3. Pricing analysis:\n• Prepare CMA using CREC methodology\n• Mountain resort properties: may need 12-month lookback; limited comparables\n• Front Range: use tightest radius possible; 3-6 month lookback in active market\n\n4. Marketing strategy:\n• Colorado MLS: REColorado (Denver metro), IRES (Northern Colorado), Pikes Peak MLS (Colorado Springs), Grand Junction MLS, Summit MLS\n• Professional photography: Colorado's mountain scenery is a selling point — invest in quality photos including aerial\n• Virtual tours: essential for mountain/resort properties where out-of-state buyers are common"
            },
            {
              heading: "Mountain Resort Market Dynamics",
              body: "Colorado's mountain resort markets (Aspen, Vail, Breckenridge, Telluride, Steamboat, Crested Butte) operate very differently from the Front Range:\n\nBuyer profile:\n• High-net-worth second-home buyers\n• Often cash buyers or jumbo loan buyers\n• Many are from Denver, Texas, California, New York\n• International buyers (Aspen has significant Latin American, European buyer base)\n\nSeason dynamics:\n• Ski season (November-April): peak activity for mountain markets\n• Summer season growing: mountain biking, hiking, festivals attract buyers\n• Off-season (May and October): slowest months; sellers may be more flexible\n\nMountain property unique features:\n• Ski-in/ski-out access: premium pricing; verify actual ski access in summer\n• Views: south-facing, protected views add significant value\n• Short-term rental potential: most resort town zoning allows STR with permit\n• HOA ski membership: some private ski clubs have HOA amenities\n\nAspen market specifics:\n• Some of the world's most expensive residential real estate\n• Transfer tax: Aspen and Pitkin County have real estate transfer taxes\n• APCHA (Aspen Pitkin County Housing Authority): deed-restricted affordable housing program\n• Many buyers looking for 'land banking' — buying land for future custom home"
            }
          ],
          quiz: [
            {
              id: "co_p01q01",
              prompt: "A Colorado listing agent has a new listing near Breckenridge. Before completing the Seller's Property Disclosure, the agent should research:",
              choices: [
                "Only the property's current tax value",
                "Mineral rights status, HOA documents, water rights, and any known environmental issues",
                "Only the property's recent sales comparables",
                "The seller's mortgage balance to calculate net proceeds"
              ],
              answer: 1,
              explanation: "Pre-listing due diligence in Colorado includes researching mineral rights (is the estate severed?), HOA status (documents, assessments, violations), water rights (especially for agricultural or rural properties), and any known environmental issues. These items affect both the disclosure requirements and the property's marketability."
            }
          ]
        },

        {
          id: "co_p02",
          order: 2,
          title: "Colorado Buyer Representation & CBS Contract",
          week: "5-8",
          passingScore: 70,
          icon: "🤝",
          objective: "Execute Colorado buyer representation from initial consultation through CREC CBS contract to successful close.",
          content: [
            {
              heading: "Buyer Consultation and Representation Agreement",
              body: "Colorado buyer representation process:\n\n1. Initial consultation:\n• Explain Colorado brokerage relationships (transaction broker vs. buyer's agent)\n• Disclose compensation (CREC forms updated to reflect NAR settlement changes)\n• Sign Buyer Agency or Transaction Broker agreement\n\n2. Financing pre-approval:\n• Colorado's competitive market requires pre-approval (ideally fully underwritten)\n• Know CHFA programs for first-time buyers\n• Know VA loan requirements for military buyers near Colorado Springs (Fort Carson) or Aurora (Buckley/JBER)\n\n3. Property search:\n• Multiple MLS systems in Colorado: REColorado (Denver), IRES (Northern CO), Pikes Peak MLS (Colorado Springs)\n• Explain neighborhood due diligence: school districts, HOAs, wildfire risk zones, radon risk areas\n\n4. Making an offer using CREC CBS contract:\n• Fill all Dates and Deadlines carefully\n• Earnest money amount and deadline\n• Specify all inclusions and exclusions\n• Loan objection deadline: allow enough time for full appraisal and underwriting\n• Inspection objection deadline: allow 7-14 days for all inspections\n• Colorado-specific contingencies: water rights contingency (agricultural), STR feasibility (investment), mineral rights inspection"
            },
            {
              heading: "Multiple Offers and Escalation Clauses",
              body: "Colorado's competitive Front Range market frequently involves multiple offers.\n\nMultiple offer strategy for Colorado buyers:\n• Strong earnest money: 2-3% of purchase price or more signals commitment\n• Short timelines: compress inspection and loan contingency periods\n• Appraisal gap coverage: offer to cover difference between appraised value and purchase price\n• Flexible possession: give seller rent-free period if they need time to move\n• Waiving minor inspection items: offer to accept property with minor defects\n\nEscalation clauses:\n• Automatically increases the buyer's offer above competing offers\n• 'I will pay $5,000 more than the highest competing bona fide offer, up to a maximum of $X'\n• Colorado CBS allows escalation clauses as addenda\n• Risk: seller may use the escalation to extract maximum price\n\nTransaction Broker in multiple offers:\n• If listing agent is a transaction broker, they must present ALL offers to the seller\n• Transaction broker cannot withhold offers or prefer one buyer without seller instruction\n• Multiple offers are presented simultaneously whenever possible"
            }
          ],
          quiz: [
            {
              id: "co_p02q01",
              prompt: "A Colorado buyer wants to offer $550,000 on a Front Range home but expects multiple offers. Their agent includes an escalation clause: '$5,000 above highest competing offer, up to $575,000.' A competing offer comes in at $568,000. Under the escalation clause, the buyer's offer becomes:",
              choices: ["$550,000", "$568,000", "$573,000", "$575,000"],
              answer: 2,
              explanation: "$568,000 (competing offer) + $5,000 = $573,000. This is within the buyer's cap of $575,000, so the escalation clause activates at $573,000. If the competing offer had been $571,000 or higher, the escalation would have hit the $575,000 cap."
            }
          ]
        },

        {
          id: "co_p03",
          order: 3,
          title: "Investment Property Analysis in Colorado",
          week: "9-12",
          passingScore: 70,
          icon: "📈",
          objective: "Analyze Colorado investment property using NOI, cap rates, GRM, and cash-on-cash return while accounting for Colorado property taxes and STR potential.",
          content: [
            {
              heading: "Colorado Rental Property Analysis",
              body: "Investment property analysis for Colorado:\n\nKey metrics:\n• NOI (Net Operating Income) = Gross Rents - Vacancy - Operating Expenses\n• Cap Rate = NOI ÷ Value (or Purchase Price)\n• Cash-on-Cash = Annual Cash Flow ÷ Total Cash Invested\n• GRM (Gross Rent Multiplier) = Price ÷ Annual Gross Rent\n\nColorado cap rate ranges (approximate, market-dependent):\n• Denver metro multifamily: 4-6% (lower = higher prices relative to income)\n• Colorado Springs: 5-7%\n• Mountain resort short-term rentals: cap rates vary widely based on STR income vs. long-term rent\n• Rural Eastern Plains: 7-10%+ (lower prices, limited appreciation)\n\nColorado property tax impact on NOI:\n• Use actual county assessor's assessed value × mill levy for projections\n• Front Range property taxes have risen significantly with appreciation\n• Buyer should verify tax records — don't rely on listing agent's tax estimate\n\nColorado STR income analysis:\n• Tools: AirDNA, Mashvisor, VRBO host analytics\n• Compare: STR gross income × (1 - vacancy) - STR-specific expenses vs. LTR rent\n• STR risks: regulatory changes, HOA rule changes, seasonal vacancy\n• Many Colorado mountain properties generate 2-4x LTR income as STRs"
            }
          ],
          quiz: [
            {
              id: "co_p03q01",
              prompt: "A Denver fourplex generates $84,000 annual gross rent. After 8% vacancy and $32,000 operating expenses, what is the NOI?",
              choices: ["$52,000", "$45,280", "$44,720", "$51,280"],
              answer: 2,
              explanation: "NOI = Gross Rent - Vacancy - Operating Expenses. Vacancy: $84,000 × 8% = $6,720. Effective Gross Income: $84,000 - $6,720 = $77,280. NOI: $77,280 - $32,000 = $45,280."
            }
          ]
        }
      ] // end practical modules
    } // end practical track

  }, // end tracks

  studyPlan: [
    { weeks: "1-2", focus: "CREC licensing roadmap + 168-hour pre-license + broker designation (no salesperson) + 2-year supervised practice + PSI exam structure + property ownership + water rights + mineral rights + severed estates" },
    { weeks: "3-4", focus: "Agency law — BRRETA — transaction broker presumption + disclosures + seller's disclosure (wildfire, radon, oil/gas) + CREC CBS contract + dates and deadlines + earnest money trust accounts" },
    { weeks: "5-6", focus: "Financing + CHFA programs + construction lending + Colorado deed of trust + Public Trustee foreclosure + title insurance + recording (County Clerk and Recorder) + race-notice recording" },
    { weeks: "7-8", focus: "Valuation + Colorado CMA + fair housing (CADA + source of income) + CREC advertising rules + trust account rules + Recovery Fund ($50,000 max) + ACU annual CE requirement" },
    { weeks: "9-10", focus: "Landlord-tenant (30-day deposit return, 3x penalty) + short-term rental regulations by municipality + environmental disclosures (radon, wildfire, oil/gas) + lead paint disclosure" },
    { weeks: "11-12", focus: "Investment analysis + Colorado property tax system + 1031 exchange (defer state + federal taxes) + mountain resort market dynamics + CREC exam readiness: full practice exams" }
  ],

  resources: [
    { label: "CREC License Requirements", url: "https://dora.colorado.gov/real-estate/brokers", category: "broker" },
    { label: "Colorado Revised Statutes Title 12 Art 10", url: "https://leg.colorado.gov/", category: "broker" },
    { label: "PSI Exams — Colorado", url: "https://candidate.psiexams.com/", category: "broker" },
    { label: "CREC Standard Forms", url: "https://dora.colorado.gov/real-estate/contracts-forms", category: "broker" },
    { label: "Colorado Division of Banking — MLO", url: "https://dora.colorado.gov/banking/mortgage-loan-originators", category: "mlo" },
    { label: "CHFA — Colorado Housing and Finance Authority", url: "https://www.chfainfo.com", category: "mlo" },
    { label: "CDPHE Radon Program", url: "https://cdphe.colorado.gov/radon", category: "broker" },
    { label: "Colorado State Engineer — Water Rights", url: "https://dwr.colorado.gov/", category: "broker" }
  ]
};

if (typeof module !== 'undefined') module.exports = CURRICULUM_CO;
