// ============================================================
// AL_curriculum.js — Alabama Real Estate Study System
// Alabama AREC Salesperson + MLO Licensing — 2026
// Sources: AREC (arec.alabama.gov), Alabama Code Title 34 Ch.27,
//          RECAD, Ala. Code Title 35-9A (L/T Act), NMLS, Pearson VUE
// Schema: identical to WA/CA/AZ curriculum.js — drop-in replacement
// ============================================================

const CURRICULUM_AL = {

  meta: {
    title: "AL Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Alabama",
    stateCode: "AL",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 70, mlo: 75, federal_law: 75, ethics: 75 }
  },

  tracks: {

    // ──────────────────────────────────────────────────────
    // BROKER TRACK — AL AREC SALESPERSON LICENSE
    // ──────────────────────────────────────────────────────
    broker: {
      id: "broker",
      label: "AL Real Estate Salesperson",
      icon: "🏠",
      color: "#C9A84C",
      description: "Alabama AREC Salesperson License — 60-hour pre-license + Pearson VUE exam + 30-hour post-license",
      requirements: [
        "19+ years old (Alabama requires 19, not 18)",
        "High school diploma or equivalent (GED accepted)",
        "60 hours of approved pre-license education; complete within 1 year of course purchase; pass with 70%",
        "Pass Pearson VUE exam (national + state sections) within 6 months of course completion; 70% to pass",
        "Fingerprint via Fieldprint Alabama; FBI + state criminal background check",
        "Must be sponsored by a licensed Alabama broker to activate license",
        "License issued as TEMPORARY — must complete 30-hour post-license course within 12 months (active) or 6 months (inactive) to convert to PERMANENT",
        "Full reciprocity with all U.S. states — reciprocal applicants get a temporary license for 180 days"
      ],
      fees: [
        { item: "60-hour pre-license education",  amount: "$200–$500",  note: "varies by provider" },
        { item: "Pearson VUE exam fee",            amount: "$85",        source: "Pearson VUE" },
        { item: "Fingerprinting (Fieldprint)",     amount: "~$50",       source: "Fieldprint Alabama" },
        { item: "AREC salesperson license fee",    amount: "$150–$185",  source: "AREC" },
        { item: "30-hour post-license course",     amount: "$100–$300",  note: "varies by provider" }
      ],
      examStructure: {
        national: { items: 80,  time: "150 minutes", passing: 70 },
        state:    { items: 40,  time: "90 minutes",  passing: 70,
                    note: "Pearson VUE administers both sections; must pass each separately" }
      },
      modules: [

        // ── MODULE 1 ─────────────────────────────────────
        {
          id: "al_b01",
          order: 1,
          title: "Licensing Process & AREC Roadmap",
          week: "1-2",
          passingScore: 70,
          icon: "📋",
          objective: "Map the complete Alabama AREC salesperson licensing process: 60-hour education → Pearson VUE exam → fingerprints → temporary license → 30-hour post-license → permanent license.",
          content: [
            {
              heading: "Who Regulates Alabama Real Estate",
              body: "The Alabama Real Estate Commission (AREC) licenses and regulates all real estate salespersons, associate brokers, brokers, and companies in Alabama.\n\nGoverning law: Alabama Code Title 34, Chapter 27 (Real Estate Brokers' Licensing Act). AREC is headquartered in Montgomery and consists of seven commissioners appointed by the Governor.\n\nARECʼs purpose:\n• License and regulate real estate professionals\n• Investigate complaints and discipline licensees\n• Protect the public through education standards\n• Administer RECAD (Real Estate Consumer's Agency and Disclosure Act)\n\nKey Alabama fact: Alabama requires applicants to be at least 19 years old — one year older than most states. This is a commonly tested distinction on the Alabama state exam."
            },
            {
              heading: "The 60-Hour Pre-License Course",
              body: "Before applying for the Pearson VUE exam, you must complete 60 hours of AREC-approved pre-license education.\n\nCourse requirements:\n• Must be from an AREC-approved school or provider\n• Must complete within 1 year of purchasing/enrolling in the course\n• Must pass the course final exam with a minimum of 70%\n• Online and in-person courses are both accepted (unlike Arizona)\n\nCurriculum covers:\n• Alabama License Law (Title 34, Ch. 27) and AREC Rules\n• RECAD — Real Estate Consumer's Agency and Disclosure Act\n• Real estate principles: property ownership, contracts, finance, valuation, fair housing\n• Caveat emptor — Alabama's buyer-beware doctrine\n• Property management, agency, ethics\n\nAfter completing the course, your school submits your completion to AREC electronically. You then have 6 months to pass the Pearson VUE exam."
            },
            {
              heading: "Pearson VUE Exam & Application",
              body: "Schedule your exam at pearsonvue.com/arec after your school submits completion to AREC.\n\nExam structure:\n• National section: 80 questions, 150 minutes, 70% to pass\n• State (Alabama) section: 40 questions, 90 minutes, 70% to pass\n• Must pass BOTH sections (can take same day or separately)\n• Results provided immediately at the testing center\n• Retakes: no waiting period between attempts; must repass within 6 months of course completion\n\nAfter passing both sections:\n1. Submit application to AREC at arec.alabama.gov\n2. Undergo fingerprinting through Fieldprint Alabama\n3. Pay license fee\n4. Have your sponsoring broker sign the application\n5. AREC issues a TEMPORARY license\n\nCritical: your Alabama license starts as TEMPORARY. You cannot skip post-license and go directly to a permanent license."
            },
            {
              heading: "Temporary vs. Permanent License — The 30-Hour Post-License",
              body: "Alabama's two-stage licensing system is unique and heavily tested:\n\nTemporary License:\n• Issued immediately upon meeting initial requirements\n• Allows you to practice real estate under broker supervision\n• CANNOT be renewed — it is temporary by design\n\nTo convert to Permanent License:\n• ACTIVE licensees: complete 30-hour AREC-approved post-license course within 12 months of initial license issuance\n• INACTIVE licensees: complete 30 hours within 6 months of initial license issuance\n• If you miss the deadline, your license EXPIRES and you must start over from scratch\n\nThe 30-hour post-license course focuses on practical real estate skills:\n• Writing and presenting offers\n• Listing agreements and marketing\n• Contracts, closings, and escrow\n• Buyer and seller representation\n• Ethics and AREC rules in practice\n\nAfter converting to permanent: renewal is every 2 years with 15 hours of CE by September 30 of even-numbered years."
            },
            {
              heading: "Reciprocity — Alabama's Generous Policy",
              body: "Alabama has one of the most generous reciprocity policies in the United States: FULL RECIPROCITY WITH ALL U.S. STATES.\n\nHow it works for out-of-state licensees:\n• Submit proof of current, active real estate license in good standing from any U.S. state\n• Pass the Alabama state exam section (the national section is waived)\n• Submit application, fees, and background check\n• AREC issues a TEMPORARY license\n• The temporary license is valid for 180 DAYS\n• Within 180 days: complete Alabama-specific post-license requirements to convert to permanent\n\nRequirements for reciprocal applicants:\n• Current license must be in the same license category (salesperson reciprocal license = AL salesperson)\n• Cannot have had a license revoked, suspended, or surrendered in any state\n• Submit a certified license history from each state where licensed\n• Affiliated with a licensed Alabama broker\n\nAlabama is considered a 'turf' state in practice — out-of-state agents cannot conduct Alabama transactions without an Alabama license, but the path to getting one is very accessible."
            }
          ],
          quiz: [
            {
              id: "al_b01q01",
              prompt: "What is the minimum age to apply for an Alabama real estate salesperson license?",
              choices: ["18 years old", "19 years old", "20 years old", "21 years old"],
              answer: 1,
              explanation: "Alabama requires applicants to be at least 19 years old — one year older than the 18-year minimum in most other states. This is a frequently tested Alabama-specific fact on the state exam section."
            },
            {
              id: "al_b01q02",
              prompt: "An active Alabama salesperson receives their temporary license on March 1. By what date must they complete the 30-hour post-license course to convert to a permanent license?",
              choices: ["September 1 (6 months)", "March 1 of the following year (12 months)", "September 1 of the following year (18 months)", "March 1 two years later (24 months)"],
              answer: 1,
              explanation: "Active Alabama salespersons have 12 months from the date of initial license issuance to complete the 30-hour post-license course and convert to a permanent license. Inactive licensees have only 6 months. Missing the deadline causes the license to expire."
            },
            {
              id: "al_b01q03",
              prompt: "An out-of-state licensee from Colorado applies for an Alabama license through reciprocity. What section of the Pearson VUE exam must they pass?",
              choices: [
                "Both national and state sections — full exam required",
                "Only the Alabama state section — national is waived",
                "Only the national section — state is waived for reciprocal applicants",
                "No exam required — Alabama grants immediate permanent license"
              ],
              answer: 1,
              explanation: "Under Alabama's full reciprocity policy, out-of-state licensees only need to pass the Alabama STATE exam section. The national section is waived because they already hold a current license from another state. AREC issues a temporary license valid for 180 days after passing."
            },
            {
              id: "al_b01q04",
              prompt: "An Alabama salesperson passes their Pearson VUE exam on January 15. What is the LATEST date they can pass the exam and still be within the 6-month window from course completion?",
              choices: [
                "This question cannot be answered without knowing the course completion date",
                "July 15 — 6 months after exam passage",
                "The 6-month window runs from COURSE COMPLETION, not exam passage",
                "January 15 of the next year"
              ],
              answer: 2,
              explanation: "The 6-month deadline runs from COURSE COMPLETION, not from when the student first attempts the exam. If a student completed the 60-hour course on December 1, they must pass both Pearson VUE sections by June 1 — regardless of when their first attempt was."
            },
            {
              id: "al_b01q05",
              prompt: "Alabama AREC continuing education for salespersons requires how many hours, and by when?",
              choices: [
                "12 hours every 2 years by December 31",
                "15 hours every 2 years by September 30 of even-numbered years",
                "24 hours every 2 years by June 30",
                "30 hours every 3 years by September 30"
              ],
              answer: 1,
              explanation: "Alabama requires 15 hours of CE every 2 years, due by September 30 of even-numbered years. This includes 3 mandatory hours of Risk Management and 12 elective hours. Brokers must additionally complete a 3-hour Mandatory Broker CE course."
            }
          ]
        },

        // ── MODULE 2 ─────────────────────────────────────
        {
          id: "al_b02",
          order: 2,
          title: "Property Ownership & Legal Descriptions",
          week: "1-2",
          passingScore: 70,
          icon: "🏛️",
          objective: "Identify estates, concurrent ownership forms, encumbrances, and legal description systems including Alabama's property classification system.",
          content: [
            {
              heading: "Real vs. Personal Property",
              body: "Real property = land + everything permanently attached (improvements, fixtures). Personal property (chattel) = movable items.\n\nFixture test in Alabama — courts consider:\n• Method of annexation — how firmly attached?\n• Adaptation to the property — installed specifically for this property?\n• Intent of the person who attached it — meant to be permanent?\n• Agreement of the parties — what does the contract say?\n\nAlabama practical rule: address fixtures specifically in the purchase contract. Built-in appliances, ceiling fans, window treatments, and outbuildings are common disputes. The Alabama Association of Realtors purchase contract form has an inclusions/exclusions section — use it.\n\nTrade fixtures: fixtures installed by a commercial tenant for business use are personal property — the tenant can remove them at lease end (with proper restoration)."
            },
            {
              heading: "Estates in Land",
              body: "Freehold estates (ownership):\n• Fee Simple Absolute — greatest ownership. Fully inheritable and transferable with no conditions. Most common form of ownership in Alabama.\n• Fee Simple Defeasible — ownership subject to a condition. Two types:\n  - Fee Simple Determinable: automatically reverts to grantor if condition violated ('so long as used for residential purposes')\n  - Fee Simple Subject to Condition Subsequent: grantor has right of re-entry if condition violated (does not revert automatically)\n• Life Estate — ownership for the duration of a named person's life. The life tenant cannot commit waste. At death, property passes to the remainderman or reverts to the grantor.\n\nLeasehold estates (possession without ownership):\n• Tenancy for Years — fixed term; no notice needed to end\n• Periodic Tenancy — auto-renews (month-to-month); proper notice required\n• Tenancy at Will — either party may terminate with reasonable notice\n• Tenancy at Sufferance — holdover after lease expiration; landlord may treat as trespasser"
            },
            {
              heading: "Concurrent Ownership in Alabama",
              body: "Joint Tenancy — requires Four Unities (TTIP): Time, Title, Interest, Possession. Right of survivorship — surviving owner inherits automatically, bypassing probate. Must be expressly stated in the deed.\n\nNote: Alabama courts have historically required clear and unambiguous language to create joint tenancy. If unclear, courts may interpret as tenancy in common.\n\nTenancy in Common — default form for co-owners in Alabama when joint tenancy language is absent. Unequal shares allowed. No survivorship right. Each owner can sell, will, or mortgage their individual share.\n\nTenancy by the Entirety — Alabama recognizes tenancy by the entirety for married couples. Similar to joint tenancy but:\n• Only for legally married couples\n• Cannot be severed by one spouse alone\n• Provides creditor protection — one spouse's creditors generally cannot attach property held as tenancy by the entirety\n• Survivorship right included\n\nAlabama community property: Alabama is NOT a community property state. Alabama is a COMMON LAW (separate property) state. Each spouse can independently own property titled in their own name."
            },
            {
              heading: "Encumbrances",
              body: "Encumbrances are claims, liens, or limitations on a property that affect value or use but do not prevent transfer.\n\nLiens (monetary claims):\n• Mortgage liens — voluntary, specific (attaches to the mortgaged property only)\n• Property tax liens — involuntary, specific; SUPER PRIORITY in Alabama (comes before all others)\n• Mechanic's liens — involuntary; filed by contractors/suppliers for unpaid work; in Alabama, must be filed within 4 months of last day of work (6 months for improvements to real property)\n• Judgment liens — involuntary, general; attaches to all real property owned by the debtor in the county where docketed\n• IRS federal tax liens — general lien on all property\n\nEasements:\n• Appurtenant — benefits a dominant estate; runs with the land\n• In Gross — benefits a person/entity (utility company); no dominant estate\n• Prescriptive — acquired by open, notorious, hostile, continuous use. Alabama prescriptive easement period: 10 YEARS\n\nAlabama deed restrictions and CC&Rs: private limitations on land use enforced by neighboring property owners or HOAs. Discriminatory deed restrictions (based on race, religion, etc.) are unenforceable under the Fair Housing Act and void under Alabama law, but may still appear in old deeds."
            },
            {
              heading: "Legal Descriptions",
              body: "Three systems used in Alabama:\n\n1. Metes and Bounds — most common in Alabama, especially in older rural areas. Uses compass bearings and distances from a Point of Beginning (POB). Alabama has complex property histories due to land grants and original colonial-era surveys. Many rural properties still use metes and bounds.\n\n2. Rectangular Survey (Government Survey) — used in parts of Alabama west of the St. Stephens Meridian (most of Alabama) and parts governed by the Huntsville Meridian (north Alabama). Alabama uses TWO principal meridians:\n• St. Stephens Meridian — covers most of Alabama\n• Huntsville Meridian — covers northern Alabama counties\n\n3. Lot and Block (Recorded Plat) — used for subdivisions, especially in Birmingham, Huntsville, Montgomery, and Mobile metro areas.\n\nAlabama Assessor's Parcel Number (APN or PIN): used for tax administration only. NOT a legal description."
            }
          ],
          quiz: [
            {
              id: "al_b02q01",
              prompt: "Alabama is a ________ state, meaning each spouse may independently own property titled in their own name.",
              choices: [
                "Community property — all marital property is co-owned",
                "Common law (separate property) — spouses can hold separate title",
                "Tenancy by the entirety — all marital property is automatically jointly held",
                "Caveat emptor — buyer assumes all ownership risks"
              ],
              answer: 1,
              explanation: "Alabama is a COMMON LAW (separate property) state, not a community property state. Each spouse can independently own, sell, and mortgage property titled in their individual name. Property acquired during marriage in one spouse's name is their separate property, not automatically community property."
            },
            {
              id: "al_b02q02",
              prompt: "Which form of concurrent ownership in Alabama provides creditor protection, can only be created by legally married couples, and includes survivorship rights?",
              choices: [
                "Joint tenancy",
                "Tenancy in common",
                "Tenancy by the entirety",
                "Community property with right of survivorship"
              ],
              answer: 2,
              explanation: "Tenancy by the Entirety is Alabama's ownership form for married couples that includes: survivorship rights, protection from one spouse's individual creditors (the whole property cannot be attached for one spouse's debts alone), and the requirement that both spouses must act together to convey or mortgage the property."
            },
            {
              id: "al_b02q03",
              prompt: "Alabama uses TWO principal meridians for its rectangular survey system. They are:",
              choices: [
                "Mount Diablo and San Bernardino Meridians",
                "Gila and Salt River, and Navajo Meridians",
                "St. Stephens Meridian and Huntsville Meridian",
                "Tallahassee and Huntsville Meridians"
              ],
              answer: 2,
              explanation: "Alabama uses the St. Stephens Meridian (covering most of the state) and the Huntsville Meridian (covering northern Alabama counties). Knowing which meridian applies to which part of Alabama is an Alabama-specific exam topic."
            },
            {
              id: "al_b02q04",
              prompt: "In Alabama, a contractor must file a mechanic's lien within how many months of the last day of work?",
              choices: ["2 months", "4 months", "6 months", "12 months"],
              answer: 1,
              explanation: "In Alabama, a mechanic's lien for unpaid work must be filed within 4 months of the last day of work (6 months for improvements to real property under some circumstances). Missing this deadline extinguishes the lien right. This is tested on the Alabama state exam section."
            }
          ]
        },

        // ── MODULE 3 ─────────────────────────────────────
        {
          id: "al_b03",
          order: 3,
          title: "Agency Law & RECAD",
          week: "3-4",
          passingScore: 70,
          icon: "🤝",
          objective: "Master Alabama's RECAD (Real Estate Consumer's Agency and Disclosure Act), fiduciary duties, agency disclosure requirements, and dual agency rules under Alabama law.",
          content: [
            {
              heading: "RECAD — Alabama's Agency Law",
              body: "RECAD (Real Estate Consumer's Agency and Disclosure Act, Alabama Code § 34-27-80 et seq.) governs all agency relationships in Alabama real estate. It is unique to Alabama and one of the most heavily tested topics on the state exam.\n\nRECAD requires agents to:\n1. DISCLOSE their agency status and who they represent at first substantive contact\n2. Provide the RECAD-required agency disclosure forms\n3. Explain what duties are owed to each party\n4. Explain caveat emptor (buyer beware) to buyers — this is a RECAD requirement unique to Alabama\n\nRECAD agency options:\n• Seller's Agent — full fiduciary duties to the seller\n• Buyer's Agent — full fiduciary duties to the buyer\n• Disclosed Dual Agent — represents both; legal with written consent from both parties\n• Transaction Broker (Limited Agency) — assists transaction without full fiduciary duties; RECAD allows this role"
            },
            {
              heading: "Fiduciary Duties: OLD CAR",
              body: "Alabama agents owe their clients (principals) six fiduciary duties:\n\n• Obedience — follow all LAWFUL instructions from the principal\n• Loyalty — put the client's interests above all others, including the agent's own\n• Disclosure — disclose all material facts known to the agent that affect the transaction\n• Confidentiality — protect client's confidential information; this duty CONTINUES after the agency ends\n• Accounting — account for all funds entrusted; never commingle\n• Reasonable Care — use the skill and diligence of a competent professional\n\nFor customers (third parties you are NOT representing): owe honesty and fair dealing — NOT the full fiduciary duties. However, all Alabama agents must disclose known material defects that affect health or safety to ALL parties."
            },
            {
              heading: "Alabama Agency Disclosure Requirements",
              body: "RECAD mandates specific disclosure procedures:\n\nWhen to disclose: at FIRST SUBSTANTIVE CONTACT — before any confidential information is exchanged. This means before a buyer tells you their top price or a seller tells you their bottom line.\n\nWhat to disclose:\n• Who you represent (seller, buyer, or both)\n• What duties you owe to each party\n• In Alabama specifically: you must EXPLAIN CAVEAT EMPTOR to buyers — that Alabama is a buyer-beware state and sellers are not required to proactively disclose defects\n\nWritten confirmation: Alabama requires agency relationships to be confirmed in writing in the purchase contract or a separate disclosure form. The AAR (Alabama Association of Realtors) provides standard RECAD disclosure forms.\n\nListing agents and buyers: a listing agent who meets a buyer must immediately disclose they represent the seller. If the buyer wants representation, they should seek their own agent."
            },
            {
              heading: "Dual Agency in Alabama",
              body: "Disclosed Dual Agency in Alabama is legal under RECAD with written, informed consent from BOTH buyer and seller BEFORE the dual agency situation arises.\n\nA disclosed dual agent in Alabama:\n• Cannot reveal the seller's minimum acceptable price to the buyer\n• Cannot reveal the buyer's maximum willingness to pay to the seller\n• Must treat both parties honestly and fairly\n• Must disclose all material defects to both parties\n• Cannot advocate aggressively for either party's negotiating position\n\nDesignated Agency (within the same firm):\n• The broker designates one agent to represent the buyer and a different agent to represent the seller\n• Reduces the conflict inherent in full dual agency\n• The MANAGING BROKER remains technically a dual agent\n\nLimited Consensual Dual Agency: RECAD also provides for a limited agency arrangement where the agent assists both parties to complete a transaction without full fiduciary duties to either — similar to a transaction broker role. Both parties must consent in writing."
            },
            {
              heading: "Material Facts & Alabama's Disclosure Landscape",
              body: "Alabama is one of very few states that still maintains a CAVEAT EMPTOR (buyer beware) doctrine for used/existing residential real estate.\n\nWhat this means for sellers:\n• Alabama sellers are NOT legally required to proactively disclose known defects in existing residential property (unlike most states)\n• EXCEPTIONS — sellers MUST disclose:\n  1. Known health and safety defects (mold, structural failure, etc.) that could endanger occupants\n  2. Upon specific buyer inquiry — sellers cannot lie\n  3. When a fiduciary relationship exists (seller's agent must disclose)\n\nWhat this means for agents:\n• Listing agents must still disclose known material facts to buyers — their fiduciary duties override caveat emptor\n• RECAD requires agents to explain caveat emptor to buyer clients so buyers understand they must investigate\n• 'As-is' clauses are common in Alabama — they limit seller's repair obligations but do NOT eliminate agent disclosure duties\n• The AAR Seller Disclosure Form is widely used as a best practice but is NOT legally mandated by state law\n\nBuyer's due diligence is CRITICAL in Alabama: buyers should always get a professional home inspection."
            }
          ],
          quiz: [
            {
              id: "al_b03q01",
              prompt: "RECAD requires Alabama agents to explain which unique legal doctrine to buyer clients at first substantive contact?",
              choices: [
                "Community property — how marital property is divided",
                "Caveat emptor — that Alabama is a buyer-beware state and sellers are not required to proactively disclose defects",
                "Strict liability — sellers are liable for all defects regardless of knowledge",
                "Full disclosure — that all known defects must be disclosed"
              ],
              answer: 1,
              explanation: "RECAD specifically requires Alabama agents to explain CAVEAT EMPTOR (buyer beware) to buyer clients. This is a unique Alabama requirement reflecting the state's buyer-beware doctrine for existing residential property. Buyers must understand they bear the responsibility to investigate the property's condition."
            },
            {
              id: "al_b03q02",
              prompt: "An Alabama seller knows their roof has a significant leak but does not mention it. The buyer later discovers the leak after closing. Under Alabama's caveat emptor doctrine, the seller:",
              choices: [
                "Is liable — all known defects must be disclosed",
                "May not be liable for non-disclosure, BUT must disclose health/safety defects and cannot lie if asked",
                "Is never liable in Alabama — caveat emptor protects sellers completely",
                "Is liable only if the defect was visible during the buyer's walkthrough"
              ],
              answer: 1,
              explanation: "Alabama's caveat emptor doctrine means sellers are generally NOT required to proactively disclose defects in existing residential property. However, there are exceptions: sellers must disclose known health/safety defects, must answer buyer inquiries honestly, and the listing agent still has an independent duty to disclose known material facts. A hidden roof leak could qualify as a health/safety defect depending on severity."
            },
            {
              id: "al_b03q03",
              prompt: "When must an Alabama agent provide RECAD agency disclosure to a prospective client?",
              choices: [
                "At the time the purchase contract is signed",
                "At first substantive contact, before any confidential information is exchanged",
                "Only when dual agency is being proposed",
                "After the buyer has seen at least one property"
              ],
              answer: 1,
              explanation: "RECAD requires agency disclosure at FIRST SUBSTANTIVE CONTACT — before any confidential information is exchanged. This timing ensures buyers and sellers understand who represents them before they reveal sensitive information like their true motivation or price limits."
            },
            {
              id: "al_b03q04",
              prompt: "Under Alabama's RECAD, a disclosed dual agent may NOT do which of the following without permission from the respective party?",
              choices: [
                "Present the buyer's offer to the seller",
                "Show the buyer the listing's price history",
                "Reveal the seller's minimum acceptable price to the buyer",
                "Disclose that both parties are using the same agent"
              ],
              answer: 2,
              explanation: "A disclosed dual agent must maintain each party's confidential information. Sharing the seller's minimum acceptable price with the buyer — without the seller's permission — violates the agent's duty of confidentiality to the seller. This is the classic dual agency conflict."
            }
          ]
        },

        // ── MODULE 4 ─────────────────────────────────────
        {
          id: "al_b04",
          order: 4,
          title: "Contracts & Alabama Purchase Agreements",
          week: "3-4",
          passingScore: 70,
          icon: "📝",
          objective: "Master contract formation, the AAR purchase agreement, earnest money rules, contingencies, and breach remedies under Alabama contract law.",
          content: [
            {
              heading: "Elements of a Valid Contract",
              body: "All contracts require:\n• Offer and Acceptance — mutual assent; mirror image rule applies in Alabama (acceptance must match offer exactly)\n• Consideration — something of value exchanged by each party\n• Legal Capacity — parties must be 19+ (Alabama minimum age) and of sound mind\n• Lawful Object — purpose must be legal\n• In writing — Alabama Statute of Frauds requires real estate contracts to be IN WRITING to be enforceable\n\nAlabama contract types:\n• Bilateral — both parties exchange promises (purchase agreement)\n• Unilateral — one party makes a promise contingent on the other's performance (option contract)\n• Express — stated in words\n• Implied — created by conduct\n• Executory — not yet fully performed\n• Executed — fully performed by all parties\n\nVoid vs. Voidable:\n• Void — no legal effect (illegal purpose, no consideration)\n• Voidable — valid but cancellable by one party (minor, fraud, duress, mutual mistake)"
            },
            {
              heading: "Alabama Purchase Contract",
              body: "The Alabama Association of Realtors (AAR) provides the standard Residential Purchase Agreement used throughout Alabama.\n\nKey sections:\n• Purchase price and earnest money\n• Financing contingency — loan type, interest rate cap, and deadline to obtain commitment\n• Inspection contingency — buyer's right to inspect and request repairs\n• Survey contingency (common in Alabama due to metes-and-bounds properties)\n• Closing date and possession date\n• Inclusions and exclusions (appliances, fixtures, personal property)\n• As-is clause (commonly used in Alabama given caveat emptor)\n• Title requirements and survey\n• Dispute resolution\n\nAlabama closing: typically conducted by a real estate attorney or title company. Alabama is one of the states where attorneys are customarily involved in closings, particularly for review of title and preparation of closing documents.\n\nPossession: in Alabama, possession can be at closing or may be negotiated (sellers sometimes need time after closing — use a Seller Possession After Closing Addendum)."
            },
            {
              heading: "Earnest Money in Alabama",
              body: "Earnest money (EMD) is a good-faith deposit demonstrating the buyer's serious intent.\n\nAlabama earnest money rules:\n• Must be deposited in a trust account maintained by the broker\n• Brokers (not the buyer) are responsible for proper deposit and maintenance\n• Must be deposited within a reasonable time as specified in the contract (typically 1–3 business days after acceptance)\n• Typical amounts: 1–2% of purchase price in Alabama (varies by market and price range)\n\nDisputes:\n• If the buyer and seller cannot agree on disposition of earnest money, the broker CANNOT unilaterally release it\n• Broker must either:\n  (a) Wait for written agreement from both parties, OR\n  (b) File an interpleader action with the court\n• Mishandling earnest money is a serious AREC violation\n\nForfeit and damages:\n• If buyer defaults without a valid contingency, seller typically retains earnest money\n• This does not prevent seller from suing for additional damages if the contract so provides"
            },
            {
              heading: "Contingencies & Remedies",
              body: "Common contingencies in Alabama purchase contracts:\n• Financing contingency — buyer can cancel if they cannot obtain approved financing\n• Inspection contingency — buyer can inspect and negotiate repairs or cancel\n• Appraisal contingency — buyer can cancel or renegotiate if property appraises below purchase price\n• Sale of buyer's home contingency — purchase conditional on buyer selling their current property\n• Survey contingency — buyer can cancel if survey reveals unacceptable conditions\n\nRemedies for breach:\n\nIf buyer defaults:\n• Seller may retain earnest money as liquidated damages\n• Seller may sue for specific performance (compel the purchase)\n• Seller may sue for actual damages\n\nIf seller defaults:\n• Buyer may demand return of earnest money\n• Buyer may sue for specific performance (compel the sale) — powerful remedy because each parcel of real estate is unique and money damages may be inadequate\n• Buyer may sue for actual damages\n\nSpecific performance is available to BOTH parties in Alabama when money damages would be inadequate."
            }
          ],
          quiz: [
            {
              id: "al_b04q01",
              prompt: "An Alabama buyer verbally agrees to purchase a home and pays earnest money, but no written contract is signed. This agreement is:",
              choices: [
                "Valid — verbal agreements are binding if earnest money is paid",
                "Unenforceable — Alabama's Statute of Frauds requires real estate contracts to be in writing",
                "Valid if witnessed by two people",
                "Valid for 30 days until a written contract must be signed"
              ],
              answer: 1,
              explanation: "Alabama's Statute of Frauds requires all real estate purchase contracts to be IN WRITING to be enforceable. A verbal agreement to purchase real estate, even if accompanied by earnest money, is unenforceable in Alabama. The earnest money payment alone does not create a valid contract."
            },
            {
              id: "al_b04q02",
              prompt: "An Alabama buyer defaults on a purchase contract. The seller wants to keep the earnest money AND sue for additional damages. Under Alabama law, this is:",
              choices: [
                "Not possible — the earnest money is always the seller's sole remedy",
                "Possible if the contract does not limit the seller's remedies to the earnest money alone",
                "Not possible — suing for damages waives the right to the earnest money",
                "Possible only if the earnest money is less than 1% of the purchase price"
              ],
              answer: 1,
              explanation: "In Alabama, the seller's right to retain earnest money AND sue for additional damages depends on the contract language. If the contract does not include a liquidated damages clause limiting remedies to the earnest money, the seller may be able to pursue both. Parties should review the specific contract terms."
            },
            {
              id: "al_b04q03",
              prompt: "Which remedy allows a court to compel an unwilling seller to complete a real estate sale in Alabama?",
              choices: [
                "Liquidated damages",
                "Rescission",
                "Specific performance",
                "Novation"
              ],
              answer: 2,
              explanation: "Specific performance is a court order compelling a party to fulfill their contractual obligations. In real estate, where each property is unique and money damages may be inadequate, courts can order a seller (or buyer) to complete the transaction. Both parties have this remedy available in Alabama."
            }
          ]
        },

        // ── MODULE 5 ─────────────────────────────────────
        {
          id: "al_b05",
          order: 5,
          title: "Real Estate Finance",
          week: "3-4",
          passingScore: 70,
          icon: "💰",
          objective: "Understand Alabama's use of mortgages and deeds of trust, foreclosure process, loan types, qualifying ratios, and the secondary mortgage market.",
          content: [
            {
              heading: "Alabama: Mortgages AND Deeds of Trust",
              body: "Unlike Arizona and California (which primarily use deeds of trust), Alabama uses BOTH mortgages and deeds of trust. However, mortgages are more common in Alabama residential real estate than in western states.\n\nMortgage — TWO parties:\n• Mortgagor — the borrower (retains title)\n• Mortgagee — the lender (holds a lien)\n\nDeed of Trust — THREE parties:\n• Trustor — the borrower\n• Beneficiary — the lender\n• Trustee — neutral third party holding bare legal title\n\nAlabama foreclosure: Alabama allows BOTH non-judicial (power of sale) foreclosure and judicial foreclosure. The power of sale clause in the mortgage or deed of trust determines which method is used. Most Alabama lenders use non-judicial foreclosure because it is faster and cheaper."
            },
            {
              heading: "Alabama Foreclosure Process",
              body: "Non-Judicial Foreclosure (Power of Sale) — most common in Alabama:\n\n1. Lender must provide written notice of default to the borrower\n2. Notice of foreclosure sale must be published in a newspaper of general circulation once a week for 3 consecutive weeks\n3. Foreclosure sale held at courthouse or other public place\n4. Property sold to highest bidder; lender can bid the amount owed\n5. Foreclosure deed issued to winning bidder\n\nAlabama Right of Redemption:\n• Alabama provides a statutory right of redemption of ONE YEAR after the foreclosure sale\n• The borrower (or junior lienholders) can redeem the property within 12 months by paying the foreclosure sale price plus interest and costs\n• This is a significant consumer protection that investors and buyers of foreclosed properties must account for\n\nDeficiency judgments: in Alabama, if the foreclosure sale price is less than the loan balance, the lender CAN sue for a deficiency judgment. Alabama does NOT have broad anti-deficiency protections like Arizona or California."
            },
            {
              heading: "Loan Types & Qualifying",
              body: "Common loan types:\n\n• Conventional — not government backed. PMI required if LTV exceeds 80%.\n• FHA — 3.5% minimum down; MIP regardless of down payment; good for lower credit scores.\n• VA — 0% down for eligible veterans/service members; no PMI; funding fee.\n• USDA Rural Development — 0% down for qualifying rural/suburban areas. Alabama has significant rural areas that qualify for USDA loans — an important option for Alabama buyers.\n• Alabama Housing Finance Authority (AHFA) — state housing finance agency offering mortgage programs and down payment assistance for qualifying Alabama buyers.\n\nQualifying ratios (conventional):\n• Front-end (housing) DTI: PITI ÷ Gross Monthly Income ≤ 28%\n• Back-end (total) DTI: (PITI + all debts) ÷ Gross Monthly Income ≤ 36–43%\n\nFHA ratios: 31% front-end / 43% back-end"
            },
            {
              heading: "Secondary Market & Key Concepts",
              body: "Promissory note: the borrower's personal promise to repay. The mortgage or deed of trust is the SECURITY — pledges the property as collateral. These are separate instruments.\n\nSecondary Mortgage Market:\n• Fannie Mae (FNMA) — purchases conventional conforming loans\n• Freddie Mac (FHLMC) — same function; competes with Fannie Mae\n• Ginnie Mae (GNMA) — guarantees MBS backed by FHA/VA/USDA; does NOT buy loans\n\nAmortization: the process of paying off principal and interest over time through regular payments. Early payments are mostly interest; later payments are mostly principal.\n\nLTV = Loan Amount ÷ Appraised Value\nDown payment = Purchase Price × Down Payment %\n\nDiscount points: 1 point = 1% of loan amount. Paid upfront to reduce the interest rate.\n\nDue-on-sale clause: most conventional loans require full repayment when title transfers. FHA and VA loans may be assumable with lender approval — an important option in a high-rate environment."
            }
          ],
          quiz: [
            {
              id: "al_b05q01",
              prompt: "After a non-judicial foreclosure sale in Alabama, the former owner has how long to exercise their statutory right of redemption?",
              choices: [
                "No right of redemption — Alabama eliminated it",
                "3 months",
                "6 months",
                "1 year (12 months)"
              ],
              answer: 3,
              explanation: "Alabama provides a 1-year (12-month) statutory right of redemption after a non-judicial foreclosure sale. The former owner (or junior lienholders) can redeem the property within 12 months by paying the foreclosure sale price plus interest and costs. This is a significant Alabama-specific fact tested on the state exam."
            },
            {
              id: "al_b05q02",
              prompt: "A buyer has a gross monthly income of $6,000. Monthly PITI is $1,500 and car payments total $400. What is the back-end DTI?",
              choices: ["25%", "31.7%", "32%", "31%"],
              answer: 1,
              explanation: "Back-end DTI = (PITI + all debts) ÷ Gross Monthly Income = ($1,500 + $400) ÷ $6,000 = $1,900 ÷ $6,000 = 31.67%, approximately 31.7%. This falls within conventional guidelines of 36–43%."
            },
            {
              id: "al_b05q03",
              prompt: "Which secondary market entity guarantees mortgage-backed securities backed by FHA, VA, and USDA loans — but does NOT purchase loans directly from lenders?",
              choices: ["Fannie Mae (FNMA)", "Freddie Mac (FHLMC)", "Ginnie Mae (GNMA)", "Alabama Housing Finance Authority (AHFA)"],
              answer: 2,
              explanation: "Ginnie Mae (GNMA — Government National Mortgage Association) guarantees mortgage-backed securities backed by government loans (FHA, VA, USDA). Unlike Fannie Mae and Freddie Mac, Ginnie Mae does NOT purchase loans from lenders — it only guarantees the MBS issued against pools of these government loans."
            }
          ]
        },

        // ── MODULE 6 ─────────────────────────────────────
        {
          id: "al_b06",
          order: 6,
          title: "Valuation & Market Analysis",
          week: "3-4",
          passingScore: 70,
          icon: "📊",
          objective: "Apply the three approaches to value, interpret depreciation, understand Alabama's property classification and assessment system, and build CMA logic.",
          content: [
            {
              heading: "Three Approaches to Value",
              body: "1. Sales Comparison Approach\n— Best for: residential properties with comparable sales\n— Method: find 3+ recently sold comparable properties; adjust for differences\n— CBS rule: Comp Better, Subtract. If the comparable is better than the subject, subtract; if worse, add.\n\n2. Income Approach\n— Best for: income-producing properties (apartments, retail, commercial)\n— Value = NOI ÷ Cap Rate\n— NOI = Gross Rents - Vacancy Loss - Operating Expenses (exclude debt service)\n— GRM = Sale Price ÷ Annual Gross Rents (quick shortcut)\n\n3. Cost Approach\n— Best for: special-use properties (churches, schools, government buildings) with few comps; new construction\n— Value = Land Value + (Replacement Cost New - Depreciation)\n— Three types of depreciation:\n  • Physical deterioration — wear and age (curable or incurable)\n  • Functional obsolescence — outdated design (curable or incurable)\n  • Economic/External obsolescence — outside causes (ALWAYS incurable)"
            },
            {
              heading: "Alabama Property Tax Assessment",
              body: "Alabama's property tax system is unique and among the lowest effective rates in the nation:\n\nClassification system — Alabama taxes different property types at different percentages of appraised value:\n• Class I — Residential/owner-occupied: 10% of appraised value\n• Class II — Agricultural: 10% of appraised value\n• Class III — All other (commercial, investment, non-owner-occupied residential): 20% of appraised value\n\nHow the tax is calculated:\nAppraised Value × Classification Rate = Assessed Value\nAssessed Value × Millage Rate = Property Tax\n\nExample: $200,000 home (owner-occupied)\n$200,000 × 10% = $20,000 assessed value\n$20,000 × 0.050 (50 mills) = $1,000 annual tax\n\nThis explains why Alabama property taxes are among the lowest in the nation for owner-occupied homes — the 10% assessment ratio dramatically reduces the taxable base.\n\nProperty taxes due October 1 each year. The county assessor revalues 25% of properties per year (full cycle every 4 years)."
            },
            {
              heading: "Homestead Exemption in Alabama",
              body: "Alabama provides significant homestead exemptions that reduce property taxes for qualifying owners:\n\nStandard Homestead Exemption:\n• Available to all owner-occupants of their primary residence\n• Exempts $4,000 of assessed value from state taxes and $2,000 from county taxes\n\nAge 65+ Exemption:\n• Alabama residents age 65 or older with income below the threshold: FULL EXEMPTION from all state and county property taxes on their primary residence\n• One of the most generous senior property tax exemptions in the United States\n• Income threshold is tied to the federal poverty level — check current ADOR guidance for annual threshold\n\nDisabled Veterans Exemption:\n• 100% disability rating: full exemption from all property taxes on primary residence\n\nFor exam purposes: know that Alabama's classification system (10% vs. 20%) and the generous senior exemption (full exemption for qualifying 65+ residents) are uniquely Alabama topics."
            },
            {
              heading: "CMA in Alabama",
              body: "CMA (Comparative Market Analysis): a broker's pricing tool — NOT a licensed appraisal.\n\nAlabama CMA considerations:\n• Alabama markets are less active than coastal or Sun Belt states — good comps may be 3–6+ months old in rural areas\n• Caveat emptor creates disclosure asymmetry — buyers in Alabama must rely even MORE heavily on inspections and due diligence rather than seller disclosures, making accurate pricing more critical\n• As-is sales are common in Alabama — factor in estimated repair costs when pricing as-is properties\n\nAbsorption Rate = Active Listings ÷ Average Monthly Sales = Months of supply\n• Under 6 months = seller's market\n• 6 months = balanced\n• Over 6 months = buyer's market\n\nBrokers CANNOT call their CMA an 'appraisal' — Alabama appraisers are regulated by the Alabama Real Estate Appraisers Board (AREAB)."
            }
          ],
          quiz: [
            {
              id: "al_b06q01",
              prompt: "Under Alabama's property tax classification system, what percentage of appraised value is used as the assessed value for a commercial (non-owner-occupied) property?",
              choices: ["10%", "15%", "20%", "25%"],
              answer: 2,
              explanation: "Alabama uses a classification system. Commercial and non-owner-occupied properties (Class III) are assessed at 20% of appraised value. Owner-occupied residential and agricultural properties (Class I and II) are assessed at only 10%. This is why Alabama commercial property owners pay proportionally more than homeowners."
            },
            {
              id: "al_b06q02",
              prompt: "A comparable sold for $300,000 and has a finished basement valued at $20,000 that the subject property lacks. The adjusted value of the comparable is:",
              choices: ["$320,000 (add $20,000 — comp is worse)", "$280,000 (subtract $20,000 — comp is better)", "$300,000 (no adjustment needed)", "$310,000 (add half the value)"],
              answer: 1,
              explanation: "CBS — Comp Better, Subtract. The comparable has a finished basement ($20,000) that the subject does not. The comp is BETTER, so subtract $20,000 from the comp's sale price: $300,000 - $20,000 = $280,000 adjusted value."
            },
            {
              id: "al_b06q03",
              prompt: "An Alabama resident age 67 with income below the threshold applies for the senior property tax exemption. They qualify for:",
              choices: [
                "A $4,000 reduction in assessed value",
                "A 50% reduction in their property tax bill",
                "A full exemption from all state and county property taxes on their primary residence",
                "A reduction only on the county portion of their property tax"
              ],
              answer: 2,
              explanation: "Alabama's age 65+ homestead exemption is one of the most generous in the nation. Qualifying residents (age 65+, income below the threshold) receive a FULL exemption from ALL state AND county property taxes on their primary residence. This is a unique Alabama benefit frequently tested on the state exam."
            }
          ]
        },

        // ── MODULE 7 ─────────────────────────────────────
        {
          id: "al_b07",
          order: 7,
          title: "Alabama State Law & AREC Rules",
          week: "7-8",
          passingScore: 70,
          icon: "⚖️",
          objective: "Master Alabama-specific licensing law (Title 34 Ch. 27), AREC disciplinary authority, trust fund handling, advertising rules, and the Real Estate Recovery Fund.",
          content: [
            {
              heading: "AREC Licensing Structure",
              body: "Alabama's real estate licensing law is Alabama Code Title 34, Chapter 27. AREC administers the law and issues rules and regulations.\n\nLicense types:\n• Salesperson — entry-level, issued as TEMPORARY first; must work under a licensed broker; must complete 30-hour post-license to become permanent\n• Associate Broker — a licensee with broker-level qualifications who works under another broker (rather than independently)\n• Broker — requires additional education and experience; can operate independently and supervise salespersons\n• Company License — business entity license for a real estate firm\n\nThe supervising broker:\n• Responsible for the acts of all affiliated salespersons\n• Must review and sign all listing agreements and purchase contracts\n• Liable for trust fund violations by their salespersons\n• Must maintain the brokerage trust account\n\nAREC can investigate any complaint filed against a licensee and has authority to: issue letters of reprimand, impose fines, suspend or revoke licenses, and refer for criminal prosecution."
            },
            {
              heading: "Trust Fund Handling in Alabama",
              body: "AREC has strict trust fund rules under Alabama Code § 34-27-36:\n\n• All earnest money and client funds must be deposited in a SEPARATE trust account at a federally insured depository\n• Funds must be deposited within a reasonable time (as specified in the contract, typically within 3 banking days of receipt)\n• The broker's personal funds CANNOT be kept in the trust account (except a minimal amount to keep the account open — usually $100–$200 and this must be documented)\n• The broker is personally responsible for all trust funds even if handled by office staff\n\nCommingling: mixing personal/operating funds with client trust funds. PROHIBITED. Even one dollar of personal money in the trust account is a violation.\n\nConversion: using trust funds for personal use. A criminal offense (theft/embezzlement) AND a license revocation offense.\n\nRecord keeping: AREC requires trust fund records to be maintained for 3 YEARS.\n\nAudit: AREC has the authority to audit broker trust accounts at any time without prior notice."
            },
            {
              heading: "AREC Advertising Rules",
              body: "Alabama advertising rules under AREC regulations:\n\n• All advertising for real estate services must include the licensed broker's name or firm name\n• Salespersons cannot advertise using only their personal name without the broker's name\n• Blind ads — advertising without identifying the advertiser as a real estate licensee — are PROHIBITED\n• Team advertising: team names are allowed in Alabama, but the employing broker's name must be prominently disclosed\n• Social media posts about listings = advertising subject to all AREC rules\n• Online/digital ads must include the broker's or firm's name\n\nProhibited representations:\n• Guaranteed sale price or guaranteed timeline to sell\n• False or misleading statements about the property, market, or agent qualifications\n• Using 'appraiser' or 'appraisal' in a broker's pricing analysis context (requires a separate appraiser license)\n\nFair housing advertising: cannot use language expressing a preference, limitation, or discrimination based on any protected class."
            },
            {
              heading: "Fair Housing in Alabama",
              body: "Federal Fair Housing Act (1968): 7 protected classes — Race, Color, Religion, National Origin, Sex, Familial Status, Disability.\n\nAlabama Fair Housing Law (Alabama Code § 24-8-1 et seq.): mirrors the federal law. Alabama does NOT add significant additional protected classes at the state level (unlike California which adds many).\n\nFair housing violations in real estate:\n• Steering — directing buyers/renters toward or away from areas based on protected class\n• Redlining — refusing services to geographic areas based on racial composition\n• Blockbusting — inducing panic selling by suggesting protected-class groups are moving in\n• Discriminatory advertising — expressing a preference or limitation based on protected class\n\nComplaint process: file with HUD or Alabama Attorney General within 1 year. Federal court lawsuit within 2 years.\n\nNAR Code of Ethics: Article 10 prohibits REALTORS from discriminating in professional activities on any basis protected under federal, state, or local law."
            },
            {
              heading: "Alabama Real Estate Recovery Fund",
              body: "The Alabama Real Estate Recovery Fund compensates consumers who:\n1. Obtain a court judgment against a licensed Alabama real estate agent for acts in their licensed capacity\n2. Are unable to collect the judgment from the agent\n\nFund limits:\n• Maximum per transaction: $15,000\n• Maximum per licensee (lifetime): $15,000\n• Claimant must have exhausted all other collection remedies before the fund will pay\n\nConsequences for the licensee:\n• Payment from the Recovery Fund automatically suspends the licensee's license\n• The licensee cannot be relicensed until they repay the fund in full WITH INTEREST\n• The fund does NOT eliminate the licensee's personal liability\n\nAREC administers the fund, which is funded by a portion of new license fees and renewal fees. All salesperson applicants contribute to the fund as part of their initial licensing fee."
            }
          ],
          quiz: [
            {
              id: "al_b07q01",
              prompt: "An Alabama broker receives a buyer's earnest money check. The broker's obligation is to deposit these funds:",
              choices: [
                "Into the broker's general operating account",
                "Into a separate trust account within a reasonable time as specified in the contract",
                "With the seller directly as a gesture of good faith",
                "Into any bank account as long as it is a business account"
              ],
              answer: 1,
              explanation: "Alabama Code § 34-27-36 requires all client funds (earnest money, deposits) to be deposited in a SEPARATE trust account at a federally insured institution within the time specified in the contract. Depositing into the broker's operating account would be commingling — a serious AREC violation."
            },
            {
              id: "al_b07q02",
              prompt: "What is the maximum amount the Alabama Real Estate Recovery Fund will pay per transaction?",
              choices: ["$10,000", "$15,000", "$30,000", "$50,000"],
              answer: 1,
              explanation: "The Alabama Real Estate Recovery Fund pays a maximum of $15,000 per transaction and $15,000 lifetime per licensee. This is lower than some states (Arizona's is $30,000 per transaction). A Recovery Fund payment automatically suspends the licensee's license until repaid with interest."
            },
            {
              id: "al_b07q03",
              prompt: "How long must Alabama brokers retain trust fund records?",
              choices: ["1 year", "2 years", "3 years", "5 years"],
              answer: 2,
              explanation: "AREC requires trust fund records to be maintained for 3 YEARS. AREC has the authority to audit broker trust accounts at any time without advance notice. Failure to maintain adequate records is itself an AREC violation."
            },
            {
              id: "al_b07q04",
              prompt: "An Alabama salesperson runs a television ad using only their personal name and headshot, with no mention of their broker. This is:",
              choices: [
                "Acceptable for broadcast advertising",
                "A blind ad violation — the broker's name must be included in all advertising",
                "Acceptable if the salesperson's AREC license number appears",
                "Acceptable in Alabama because RECAD allows individual agent branding"
              ],
              answer: 1,
              explanation: "All Alabama real estate advertising — including broadcast media — must include the licensed broker's name or firm name. A salesperson cannot advertise real estate services using only their own name without identifying their supervising broker. This is a blind ad violation under AREC regulations."
            }
          ]
        },

        // ── MODULE 8 ─────────────────────────────────────
        {
          id: "al_b08",
          order: 8,
          title: "Title, Closing & Recording in Alabama",
          week: "5-6",
          passingScore: 70,
          icon: "📜",
          objective: "Understand Alabama deed types, title insurance, the closing process, attorney involvement, and Alabama's recording system.",
          content: [
            {
              heading: "Deed Types in Alabama",
              body: "Alabama uses several deed types:\n\n• Warranty Deed (General Warranty Deed) — grantor warrants title against ALL claims by ALL prior owners. Maximum protection for the buyer. Most common for standard residential sales.\n\n• Special Warranty Deed — grantor warrants title only against defects created DURING the grantor's ownership. Does NOT warrant against prior owner defects. Common in commercial and bank/REO (real estate owned) sales.\n\n• Quitclaim Deed — transfers only whatever interest the grantor has, if any. NO warranties. Used for: divorce transfers, removing clouds on title, correcting deed errors, family gifts.\n\n• Statutory Warranty Deed — created by Alabama statute (Code § 35-4-271). Contains implied covenants of seisin (grantor owns it), right to convey, freedom from encumbrances, and quiet enjoyment. A shorter form of warranty deed.\n\nValid Alabama deed requirements:\n• Grantor identified (and capacity stated if applicable)\n• Grantee identified\n• Legal description\n• Granting clause (words of conveyance)\n• Grantor's signature (notarized for recording)\n• Delivery and acceptance"
            },
            {
              heading: "Title Insurance & Attorney Closings",
              body: "Alabama title insurance follows ALTA standards:\n\n• Owner's Title Insurance Policy — protects the buyer's interest. Provides coverage for defects discoverable in the public record AND some off-record risks (depending on policy type). One-time premium; stays in force as long as owner has an interest.\n\n• Lender's Title Insurance Policy — protects the lender's interest. Required by most lenders. Decreases as the loan balance decreases.\n\nAlabama closing customs:\n• Alabama is an ATTORNEY STATE — real estate closings are typically conducted by or under the supervision of a licensed Alabama attorney\n• The attorney prepares the deed, closing statement, and other closing documents\n• Either party (buyer or seller) typically selects and pays for the closing attorney\n• Title companies can also conduct closings but attorney involvement is customary and expected for most residential transactions\n\nTitle commitment (binder): issued before closing; shows the state of title and what exceptions the title insurance policy will contain (liens to be paid, easements, etc.). Review carefully before closing."
            },
            {
              heading: "Recording & Alabama's Race-Notice System",
              body: "Alabama is a RACE-NOTICE state.\n\nTo have priority over a prior unrecorded interest, a subsequent purchaser must:\n1. Record FIRST (race element), AND\n2. Take WITHOUT NOTICE of the prior interest at the time of purchase (notice element)\n\nTypes of notice:\n• Actual notice — direct knowledge of a prior claim\n• Constructive notice — presumed knowledge because a document is properly recorded in the public record\n• Inquiry notice — facts that would cause a reasonable person to investigate further\n\nAlabama recording: documents are recorded with the Probate Judge's office in the county where the property is located (not the County Recorder as in many other states). This is a unique Alabama fact.\n\nDocumentary Transfer Tax: Alabama charges a deed tax (stamp tax) of $0.50 per $500 of value (or $1.00 per $1,000) on property conveyances. This is lower than most states. Additionally, a mortgage tax of $0.15 per $100 of the mortgage amount is charged.\n\nChain of title: the sequential history of recorded ownership. Must be unbroken. A 'cloud on title' is any claim or encumbrance that makes title uncertain and should be cleared before closing."
            }
          ],
          quiz: [
            {
              id: "al_b08q01",
              prompt: "In Alabama, real estate documents are recorded with which office?",
              choices: [
                "County Recorder's office",
                "County Clerk's office",
                "Probate Judge's office in the county where the property is located",
                "Alabama Secretary of State's office"
              ],
              answer: 2,
              explanation: "In Alabama, real estate documents (deeds, mortgages, liens) are recorded with the PROBATE JUDGE's office in the county where the property is located — not a County Recorder as in many other states. This is a uniquely Alabama procedure frequently tested on the state exam."
            },
            {
              id: "al_b08q02",
              prompt: "An Alabama deed that warrants title against defects arising only DURING the grantor's ownership period (not prior owners) is a:",
              choices: [
                "General Warranty Deed",
                "Special Warranty Deed",
                "Quitclaim Deed",
                "Bargain and Sale Deed"
              ],
              answer: 1,
              explanation: "A Special Warranty Deed in Alabama limits the grantor's warranty to defects that arose during the grantor's period of ownership only. It does NOT protect against defects created by prior owners. General Warranty Deeds protect against all prior claims, regardless of when they arose."
            },
            {
              id: "al_b08q03",
              prompt: "Alabama's deed tax (stamp tax) rate is:",
              choices: [
                "$1.10 per $1,000 of value",
                "$0.50 per $500 of value (equivalent to $1.00 per $1,000)",
                "$2.00 per $1,000 of value",
                "No deed tax — Alabama has no documentary transfer tax"
              ],
              answer: 1,
              explanation: "Alabama charges a deed tax (stamp tax) of $0.50 per $500 of value, which equals $1.00 per $1,000. For example, a $300,000 property: $300,000 ÷ $500 × $0.50 = $300 deed tax. Alabama also charges a mortgage tax of $0.15 per $100 of the mortgage amount."
            }
          ]
        },

        // ── MODULE 9 ─────────────────────────────────────
        {
          id: "al_b09",
          order: 9,
          title: "Land Use, Zoning & Alabama Landlord-Tenant Law",
          week: "5-6",
          passingScore: 70,
          icon: "🏘️",
          objective: "Understand Alabama zoning, subdivision regulations, and the Alabama Uniform Residential Landlord and Tenant Act (Title 35-9A).",
          content: [
            {
              heading: "Zoning & Land Use in Alabama",
              body: "Zoning: local government controls land use through ordinances dividing land into zones.\n\nAlabama zoning key concepts:\n• Non-conforming use: a use lawful when established but no longer conforming to current zoning. Protected as 'grandfathered.' Cannot be expanded; if substantially destroyed, must be rebuilt to current zoning.\n• Variance: deviation from zoning requirements due to hardship. Requires application and public hearing before the Board of Zoning Adjustment (BZA).\n• Special Use Permit / Conditional Use Permit: allows conditionally permitted uses in a zone with specific conditions.\n• Rezoning: requires action by the local governing body (city council, county commission).\n\nAlabama zoning authority: cities and counties have zoning authority in Alabama. Unincorporated areas may have county zoning or no zoning at all — important for rural property buyers.\n\nNo statewide zoning law: Alabama does not have a statewide comprehensive zoning law. Zoning is purely local and varies significantly by municipality."
            },
            {
              heading: "Alabama Landlord-Tenant Act (Title 35-9A)",
              body: "The Alabama Uniform Residential Landlord and Tenant Act (Ala. Code Title 35-9A) governs residential rentals.\n\nKey provisions:\n• Security deposit: maximum 1 month's rent (pet deposits are separate and not counted in the cap). Must be returned within 60 days of lease termination with an itemized statement. Failure to return = double deposit penalty.\n\n• Entry notice: minimum 2 days written notice for non-emergency entry; emergency entry allowed without notice. Entry must be at reasonable times.\n\n• Habitability: landlord must maintain property in compliance with local health and safety codes. If landlord fails to make required repairs within 2 weeks of written notice, tenant may have remedies. NOTE: Alabama does NOT provide a 'repair and deduct' remedy for tenants (unlike California).\n\n• No rent control: Alabama has no statewide rent control, and there is no mechanism for local rent control ordinances in Alabama.\n\n• Eviction process: through the circuit court. Two consecutive violations of the same lease provision within 12 months: tenant loses the right to cure."
            },
            {
              heading: "Alabama Eviction Notices",
              body: "Alabama eviction notice requirements under Ala. Code Title 35-9A:\n\nNon-payment of rent:\n• 7 BUSINESS DAYS' written notice to pay or quit\n• If tenant pays in full within 7 business days, the tenancy continues\n• Business days (not calendar days) — weekends and holidays don't count\n\nLease violation:\n• 7 BUSINESS DAYS' written notice to cure or quit\n• Tenant has 7 business days to fix the violation\n• If the same violation occurs twice within 12 months, landlord can terminate without right to cure\n\nMonth-to-month termination (no-fault):\n• 30 DAYS' written notice to terminate\n\nWeek-to-week termination:\n• 7 DAYS' notice to terminate\n\nEviction process after notice:\n• If tenant does not comply, landlord files an Unlawful Detainer action in circuit court\n• Court hearing is held; if landlord prevails, a writ of possession is issued\n• Self-help eviction (changing locks, removing belongings) is ILLEGAL in Alabama and exposes the landlord to liability"
            }
          ],
          quiz: [
            {
              id: "al_b09q01",
              prompt: "Under the Alabama Uniform Residential Landlord and Tenant Act, what is the maximum security deposit a landlord can charge for an unfurnished unit?",
              choices: [
                "No limit — Alabama does not cap security deposits",
                "1 month's rent",
                "2 months' rent",
                "1.5 months' rent"
              ],
              answer: 1,
              explanation: "Alabama's Landlord-Tenant Act caps security deposits at 1 month's rent for unfurnished units. Pet deposits are collected separately and do not count toward this cap. The deposit must be returned within 60 days of termination with an itemized accounting."
            },
            {
              id: "al_b09q02",
              prompt: "An Alabama tenant fails to pay rent. The landlord must give how many days' notice before beginning eviction proceedings?",
              choices: [
                "3 calendar days",
                "5 calendar days",
                "7 business days",
                "14 calendar days"
              ],
              answer: 2,
              explanation: "Alabama requires 7 BUSINESS DAYS' written notice (not calendar days) for non-payment of rent before the landlord can file for eviction. If the tenant pays in full within those 7 business days, the tenancy continues and eviction cannot proceed."
            },
            {
              id: "al_b09q03",
              prompt: "An Alabama tenant wants to repair a leaking roof themselves and deduct the cost from rent because the landlord hasn't fixed it. Under Alabama law, this is:",
              choices: [
                "Allowed if the repair cost is under $500",
                "Allowed after giving the landlord 30 days' written notice",
                "NOT allowed — Alabama does not provide a 'repair and deduct' remedy for tenants",
                "Allowed if the tenant has lived there for over 1 year"
              ],
              answer: 2,
              explanation: "Alabama does NOT provide a 'repair and deduct' remedy for tenants. Unlike California and many other states, Alabama tenants cannot make repairs and deduct the cost from rent. Tenants must use other remedies (complaint to housing authorities, court action) if the landlord fails to maintain habitability."
            }
          ]
        },

        // ── MODULE 10 ─────────────────────────────────────
        {
          id: "al_b10",
          order: 10,
          title: "Real Estate Math Mastery",
          week: "1-2 (ongoing)",
          passingScore: 70,
          icon: "🧮",
          objective: "Solve Alabama-specific commission calculations, property tax math using the classification system, deed tax calculations, proration, and loan qualifying math.",
          content: [
            {
              heading: "Commission Calculations",
              body: "Commission = Sale Price × Commission Rate\n\nExample: $250,000 Alabama home at 6% total commission:\n$250,000 × 0.06 = $15,000 total\n\nEqual split (3%/3%):\n• Listing broker: $7,500\n• Buyer's broker: $7,500\n\nIf listing agent has a 60/40 split with broker (agent gets 60%):\n• Listing agent: $7,500 × 0.60 = $4,500\n• Listing broker: $7,500 × 0.40 = $3,000\n\nNet to seller:\nSeller wants to net $200,000 after 6% commission:\nRequired sale price = $200,000 ÷ (1 - 0.06) = $200,000 ÷ 0.94 = $212,766\n\nWorking backwards:\nAgent earned $6,000 at 3% → Sale price = $6,000 ÷ 0.03 = $200,000"
            },
            {
              heading: "Alabama Property Tax Math",
              body: "Alabama property tax calculation steps:\n1. Appraised Value × Classification Rate = Assessed Value\n2. Assessed Value × Millage Rate = Annual Tax\n\nExample: $300,000 owner-occupied home; millage rate = 30 mills (0.030)\nStep 1: $300,000 × 10% = $30,000 assessed value\nStep 2: $30,000 × 0.030 = $900 annual tax\n\nCommercial property: same home as commercial (20% rate):\nStep 1: $300,000 × 20% = $60,000 assessed value\nStep 2: $60,000 × 0.030 = $1,800 annual tax\n(Twice the tax for the same value — this is why the classification matters)\n\nAlabama Deed Tax:\n$0.50 per $500 of value = $1.00 per $1,000\nExample: $250,000 sale: $250,000 ÷ $1,000 × $1.00 = $250 deed tax\n\nAlabama Mortgage Tax:\n$0.15 per $100 of mortgage amount\nExample: $200,000 mortgage: $200,000 ÷ $100 × $0.15 = $300 mortgage tax"
            },
            {
              heading: "Proration & Loan Math",
              body: "Proration: property taxes in Alabama are due October 1 for the current year. For proration purposes, use 30-day month / 360-day year (banker's year).\n\nExample: Annual taxes = $1,800. Close of escrow: June 15.\nDaily rate: $1,800 ÷ 360 = $5/day\nJanuary 1 to June 15 = 5 months + 15 days = 165 days\nSeller credit to buyer: 165 × $5 = $825\n\nLoan Math:\nLTV = Loan Amount ÷ Appraised Value\nDown payment = Purchase Price × Down Payment %\n\nExample: $220,000 purchase, 10% down:\n• Down payment: $22,000\n• Loan: $198,000\n• LTV: $198,000 ÷ $220,000 = 90%\n\nFirst month's interest:\n$198,000 × 5.5% ÷ 12 = $907.50\n\nIncome needed at 28% front-end ratio:\nPITI = $1,200 → Gross income needed = $1,200 ÷ 0.28 = $4,286/month"
            }
          ],
          quiz: [
            {
              id: "al_b10q01",
              prompt: "An Alabama commercial property is appraised at $500,000. The millage rate is 40 mills. What is the annual property tax?",
              choices: ["$2,000", "$4,000", "$20,000", "$5,000"],
              answer: 1,
              explanation: "Commercial = Class III = 20% of appraised value. Assessed value: $500,000 × 20% = $100,000. Annual tax: $100,000 × 0.040 (40 mills) = $4,000. If this were owner-occupied residential (10%), the tax would be $2,000 — half as much."
            },
            {
              id: "al_b10q02",
              prompt: "What is the Alabama deed tax on a $180,000 property sale?",
              choices: ["$90", "$180", "$198", "$360"],
              answer: 1,
              explanation: "Alabama deed tax = $0.50 per $500 of value = $1.00 per $1,000. $180,000 ÷ $1,000 × $1.00 = $180. In addition, the mortgage tax would apply to any loan: e.g., a $150,000 mortgage: $150,000 ÷ $100 × $0.15 = $225 mortgage tax."
            },
            {
              id: "al_b10q03",
              prompt: "A seller wants to net $175,000 after paying a 6% commission. What must the property sell for?",
              choices: ["$185,500", "$186,170", "$189,500", "$180,500"],
              answer: 1,
              explanation: "Required sale price = Net ÷ (1 - Commission Rate) = $175,000 ÷ 0.94 = $186,170 (rounded). Never add the commission percentage directly to the net — that gives the wrong answer. Always divide by (1 minus the commission rate)."
            }
          ]
        }

      ] // end broker modules
    }, // end broker track

    // ──────────────────────────────────────────────────────
    // MLO TRACK — NMLS SAFE MLO (ALABAMA SBA)
    // ──────────────────────────────────────────────────────
    mlo: {
      id: "mlo",
      label: "AL MLO License (SAFE Act)",
      icon: "🏦",
      color: "#4C9AC9",
      description: "NMLS SAFE MLO exam prep — 20-hour federal pre-license + Alabama State Banking Department requirements",
      requirements: [
        "Complete 20 hours of NMLS-approved pre-license education",
        "Pass NMLS SAFE MLO National Test with Uniform State Content (75% passing score)",
        "Authorize credit report and criminal background check through NMLS",
        "Complete NMLS MU4 individual form",
        "Sponsored by an Alabama SBD-licensed mortgage company",
        "No felony conviction within 7 years; lifetime bar for financial crimes",
        "Annual CE: 8 hours per year (3hr federal law, 2hr ethics, 2hr non-traditional, 1hr elective)"
      ],
      fees: [
        { item: "NMLS application fee",           amount: "$30",  source: "NMLS" },
        { item: "SAFE MLO test fee",               amount: "$110", source: "Prometric" },
        { item: "AL SBD state license fee",        amount: "$200", source: "AL SBD" },
        { item: "20-hour pre-license education",   amount: "$200–$400", note: "varies by provider" },
        { item: "Credit report / background check",amount: "$30",  source: "NMLS" }
      ],
      examStructure: {
        national: { items: 115, time: "190 minutes", passing: 75,
                    note: "120 total items; 115 scored + 5 unscored; Uniform State Content embedded" },
        state:    { items: 0,   time: "included in national exam",
                    note: "No separate state exam — UST is embedded in the national test" }
      },
      modules: [
        {
          id: "al_m01",
          order: 1,
          title: "SAFE Act & NMLS Licensing Roadmap",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Navigate the NMLS MU4 process, SAFE Act requirements, Alabama State Banking Department rules, and annual renewal obligations.",
          content: [
            {
              heading: "The SAFE Act & Alabama SBD",
              body: "The SAFE Mortgage Licensing Act of 2008 established national MLO licensing standards through the NMLS.\n\nAlabama's mortgage regulator: the Alabama State Banking Department (SBD). The SBD oversees mortgage brokers and mortgage originators under the Alabama Consumer Credit Act and the Mortgage Brokers, Lenders, and Servicers Licensing Act.\n\nAll MLOs who take applications, negotiate terms, or offer residential mortgage loans in Alabama must hold an active NMLS MLO license with an Alabama SBD endorsement.\n\nExceptions: bank employees are registered (not licensed) through NMLS under a different process. State-licensed MLOs at mortgage companies, credit unions not federally chartered, and independent mortgage bankers must be fully licensed."
            },
            {
              heading: "NMLS Application & Exam",
              body: "Steps to obtain an Alabama MLO license:\n1. Create NMLS account and complete MU4 Individual Form\n2. Authorize credit report and criminal background check\n3. Complete 20 hours of NMLS-approved pre-license education\n4. Pass SAFE MLO National Test with Uniform State Content (75% passing)\n5. Apply for Alabama SBD state license through NMLS\n6. Obtain sponsorship from Alabama SBD-licensed company\n7. Pay all fees\n\nExam retake rules:\n• First two failures: 30-day wait each\n• Third failure: 180-day wait before fourth attempt\n\nAnnual renewal: 8 CE hours by December 31 each year. Cannot retake the same CE course in consecutive years ('safe harbor' rule)."
            },
            {
              heading: "Alabama SBD-Specific Requirements",
              body: "Beyond the NMLS baseline, the Alabama SBD requires:\n\n• No felony conviction within 7 years; lifetime disqualification for crimes involving dishonesty, fraud, or breach of trust\n• Satisfactory credit history; outstanding judgments or recent bankruptcies reviewed case-by-case\n• Employer company must hold valid Alabama SBD mortgage license\n\nAlabama Housing Finance Authority (AHFA) programs for MLOs to know:\n• Step Up Program: 30-year fixed-rate mortgage + down payment assistance for first-time buyers and non-first-time buyers in qualified areas. Income and purchase price limits apply.\n• Mortgage Credit Certificate (MCC): federal tax credit program administered by AHFA; reduces federal income tax burden for eligible buyers; increases effective buying power\n\nAlabama's relatively straightforward mortgage regulatory environment makes it a common state for multi-state MLO licensing."
            }
          ],
          quiz: [
            {
              id: "al_m01q01",
              prompt: "Which Alabama agency regulates mortgage loan originators?",
              choices: [
                "AREC — Alabama Real Estate Commission",
                "Alabama State Banking Department (SBD)",
                "Alabama Department of Finance",
                "Alabama Securities Commission"
              ],
              answer: 1,
              explanation: "Alabama mortgage loan originators are regulated by the Alabama State Banking Department (SBD). AREC regulates real estate agents and brokers. The SBD oversees mortgage brokers, lenders, and servicers under the Mortgage Brokers, Lenders, and Servicers Licensing Act."
            },
            {
              id: "al_m01q02",
              prompt: "The AHFA Step Up program is primarily designed to help:",
              choices: [
                "MLOs pass the SAFE exam",
                "Qualifying Alabama buyers obtain down payment assistance paired with a fixed-rate mortgage",
                "Distressed homeowners avoid foreclosure",
                "Commercial developers obtain financing"
              ],
              answer: 1,
              explanation: "The Alabama Housing Finance Authority (AHFA) Step Up program provides qualifying Alabama home buyers with a 30-year fixed-rate mortgage combined with down payment assistance. It is available to both first-time buyers and repeat buyers in qualified areas, subject to income and purchase price limits."
            }
          ]
        },

        {
          id: "al_m02",
          order: 2,
          title: "Federal Mortgage Law Core",
          week: "3-4",
          passingScore: 75,
          icon: "⚖️",
          objective: "Master RESPA, TILA, ECOA, HMDA, FCRA, and SAFE Act provisions tested on the NMLS national exam.",
          content: [
            {
              heading: "RESPA & TILA",
              body: "RESPA (Regulation X):\n• Loan Estimate: within 3 business days of application\n• Closing Disclosure: at least 3 business days before closing\n• Section 8: PROHIBITS any fee, kickback, or thing of value for referrals of settlement service business\n• Legal: payment for actual services; AfBAs with disclosure and no required use\n• Escrow limits: cushion capped at 1/6 of annual escrow disbursements\n\nTILA (Regulation Z):\n• APR: must be disclosed; always higher than note rate\n• Right of Rescission: 3 business days for non-purchase refinances of primary residence\n• ATR/QM Rule: lenders must document ability to repay; QM safe harbor: ≤3% points/fees, no neg-am, no balloon, 30-year max term, DTI ≤43% (non-GSE)\n• HOEPA: high-cost loan triggers with additional protections"
            },
            {
              heading: "ECOA, HMDA & Fair Lending",
              body: "ECOA (Regulation B):\n• Prohibits discrimination in credit decisions: race, color, religion, national origin, sex, marital status, age, receipt of public assistance\n• 30-day adverse action notice after denial\n• Protects credit APPLICANTS\n\nHMDA (Regulation C):\n• Lenders collect and report data on mortgage applications\n• Detects redlining and discriminatory patterns\n• CFPB administers\n\nFair lending theories:\n• Disparate Treatment: intentional discrimination\n• Disparate Impact: neutral policy with disproportionate adverse effect on protected class\n• Redlining: refusal to lend in areas based on racial composition\n\nFCRA: right to one free credit report annually; right to dispute inaccuracies; adverse action must cite credit reason.\nGLBA: annual privacy notices required; consumers can opt out of sharing with non-affiliates."
            },
            {
              heading: "Mortgage Fraud & UDAAP",
              body: "Mortgage fraud — material misrepresentation, misstatement, or omission relied upon by a lender:\n\nFraud for Property:\n• Occupancy fraud: stating owner-occupied when planning to rent\n• Income fraud: inflating income or fabricating employment\n• Asset fraud: using borrowed down payment without disclosure\n\nFraud for Profit:\n• Straw buyer: using another's identity/credit\n• Inflated appraisal: coordinating above-market appraisals\n• Equity skimming: extracting equity, then letting property foreclose\n\nUDAAP (Dodd-Frank):\n• Unfair: causes substantial unavoidable injury\n• Deceptive: misleads; material; affects behavior\n• Abusive: exploits consumers' lack of understanding\n\nAlabama caveat emptor note: while sellers in Alabama are not required to disclose property defects, MLOs cannot use caveat emptor as a shield against required mortgage disclosures. TILA and RESPA disclosure obligations are federal and override any state buyer-beware doctrine."
            }
          ],
          quiz: [
            {
              id: "al_m02q01",
              prompt: "An Alabama MLO tells a borrower their rate is 5.5%, but the actual APR is 7.2% due to significant points and fees. Not explaining this difference is BEST described as:",
              choices: [
                "Acceptable — APR and rate are always different and borrowers should know this",
                "A UDAAP violation — misrepresenting the true cost of credit is deceptive",
                "An ECOA violation only if the borrower is a protected class",
                "A TILA violation only if the borrower did not receive the Loan Estimate"
              ],
              answer: 1,
              explanation: "Presenting only the interest rate and not explaining the significantly higher APR — which reflects the true cost of credit — constitutes a deceptive act under UDAAP. TILA also requires clear APR disclosure. An MLO who obscures the true cost to close a loan violates both TILA and UDAAP."
            },
            {
              id: "al_m02q02",
              prompt: "Under RESPA, the Closing Disclosure must be provided to the borrower at least how many business days before closing?",
              choices: ["1 business day", "2 business days", "3 business days", "5 business days"],
              answer: 2,
              explanation: "RESPA requires the Closing Disclosure (CD) to be delivered to the borrower at least 3 BUSINESS DAYS before the closing. This gives the borrower time to review the final loan terms before committing at the closing table. If the CD changes significantly, a new 3-day waiting period begins."
            }
          ]
        },

        {
          id: "al_m03",
          order: 3,
          title: "Mortgage Products & Underwriting",
          week: "5-6",
          passingScore: 75,
          icon: "📊",
          objective: "Distinguish loan types, explain ARM mechanics, USDA rural loans (important in Alabama), reverse mortgages, and QM/ATR rules.",
          content: [
            {
              heading: "USDA Loans in Alabama",
              body: "USDA Rural Development loans are particularly important in Alabama given the state's large rural population:\n\nUSDA Guaranteed Loan Program:\n• 0% down payment required\n• Available in USDA-designated rural and suburban areas (large portions of Alabama qualify)\n• Income limits apply (typically 115% of area median income)\n• Minimum credit score: typically 640+ for automated underwriting\n• Upfront guarantee fee: 1% of loan amount (can be financed)\n• Annual fee: 0.35% of outstanding balance\n• Primary residence only\n\nChecking USDA eligibility: the USDA maintains an online Property Eligibility Map. Many Alabama towns and suburbs outside major metro areas qualify — this expands buying options significantly for Alabama buyers.\n\nAlabama markets where USDA is commonly used: rural counties throughout the Black Belt region, areas around smaller cities (Dothan, Decatur, Gadsden, Anniston, Tuscaloosa suburbs)."
            },
            {
              heading: "ARM Mechanics & Conventional Loan Types",
              body: "ARM (Adjustable-Rate Mortgage):\n• Rate adjusts periodically based on Index + Margin\n• Key index: SOFR (replaced LIBOR); also Treasury rates\n• Caps: initial cap, periodic cap, lifetime cap\n• Common types: 5/1 ARM (fixed 5 years, adjusts annually), 7/1 ARM, 10/1 ARM\n• TILA requires ARM disclosure at application\n\nNew rate at adjustment = Index + Margin (subject to caps)\nExample: 5/1 ARM, initial rate 4%, margin 2.5%, periodic cap 2%. Index at first adjustment = 3.5%.\nCalculated rate: 3.5% + 2.5% = 6%. Change from 4% = 2% (exactly at cap). New rate = 6%.\n\nConventional loan types:\n• Fixed-rate: payment never changes; 30-year and 15-year most common\n• Conforming: meets Fannie/Freddie guidelines on amount, credit, DTI\n• Non-conforming (jumbo): exceeds conforming limits; stricter underwriting"
            },
            {
              heading: "Reverse Mortgages & QM Rule",
              body: "HECM Reverse Mortgages:\n• FHA-insured; homeowners 62+\n• No monthly mortgage payments; loan balance grows\n• Repaid when borrower sells, moves, or dies\n• HUD-approved counseling required before applying\n• Non-recourse: never owe more than home is worth\n• Popular in Alabama retirement communities and rural areas where seniors have significant home equity but limited income\n\nQM (Qualified Mortgage) Rule:\n• Points and fees ≤ 3% of loan amount (for loans ≥$100K)\n• No negative amortization\n• No interest-only period (exceptions for some GSE products)\n• No balloon payments (except small creditor QMs)\n• Max loan term: 30 years\n• DTI generally ≤ 43% for non-GSE loans\n• QM provides lender with safe harbor presumption of ATR compliance"
            }
          ],
          quiz: [
            {
              id: "al_m03q01",
              prompt: "USDA Rural Development loans require what down payment from the borrower?",
              choices: ["3% minimum", "3.5% minimum", "5% minimum", "0% — no down payment required"],
              answer: 3,
              explanation: "USDA Guaranteed Rural Housing loans require NO down payment (0%). This makes them one of only two major 0%-down loan programs (along with VA loans). They are particularly valuable in Alabama where large portions of the state are USDA-eligible rural and suburban areas."
            },
            {
              id: "al_m03q02",
              prompt: "A 5/1 ARM starts at 3.75% with a 2% periodic cap and a margin of 2.5%. At first adjustment, the SOFR index is 4.0%. What is the new interest rate?",
              choices: ["6.5% (index + margin)", "5.75% (initial rate + periodic cap)", "4.25% (index + 0.25%)", "4.0% (index only)"],
              answer: 1,
              explanation: "Calculated new rate = Index + Margin = 4.0% + 2.5% = 6.5%. Change from initial: 6.5% - 3.75% = 2.75%. But the periodic cap is only 2%. So the rate can only increase by 2%: 3.75% + 2% = 5.75% is the new rate. The periodic cap limits the change, not the resulting rate."
            }
          ]
        },

        {
          id: "al_m04",
          order: 4,
          title: "Alabama MLO State Law (SBD Overlay)",
          week: "7-8",
          passingScore: 75,
          icon: "🏛️",
          objective: "Master Alabama SBD mortgage regulations, AHFA buyer assistance programs, and Alabama-specific MLO compliance requirements.",
          content: [
            {
              heading: "Alabama Mortgage Licensing Law",
              body: "Alabama mortgage lending is governed by:\n• Alabama Mortgage Brokers, Lenders, and Servicers Licensing Act (Ala. Code § 5-25-1 et seq.)\n• Alabama Consumer Credit Act (Ala. Code § 5-20-1 et seq.)\n• Administered by the Alabama State Banking Department (SBD)\n\nLicense types:\n• Mortgage Broker License — company arranging loans between borrowers and lenders\n• Mortgage Lender License — company originating and funding loans\n• MLO License — individual endorsement on company license\n\nKey SBD requirements:\n• MLOs must be sponsored by a licensed Alabama mortgage company\n• All MLO activities must be conducted under the company license\n• Criminal history: no felony within 7 years; lifetime bar for financial crimes\n• Surety bond: company must maintain minimum surety bond amount\n• Record keeping: loan files must be maintained for 2 YEARS (Alabama's retention period is shorter than some states)"
            },
            {
              heading: "AHFA Programs for Alabama MLOs",
              body: "Alabama Housing Finance Authority (AHFA) operates several programs MLOs should know:\n\nStep Up Mortgage Program:\n• 30-year fixed first mortgage at below-market rates\n• Down payment assistance: secondary loan of 3% of purchase price at 0% interest, deferred for 10 years\n• Available to first-time buyers AND repeat buyers in qualified areas\n• Income limit: $130,000 (statewide, as of recent updates)\n• Purchase price limit: $481,176 (FHA/USDA/VA) or $305,000 (conventional)\n• Buyer must complete a HUD-approved homebuyer education course\n\nMortgage Credit Certificate (MCC):\n• Federal tax credit equal to a percentage of annual mortgage interest\n• Credit rate: 20–50% of interest paid annually (up to $2,000 per year)\n• Can be used with conventional, FHA, VA, and USDA loans\n• First-time buyer requirement (or property in targeted area)\n• Increases borrower's qualifying income for underwriting purposes\n\nBlack Belt region: AHFA has targeted programs for distressed areas of Alabama's Black Belt counties — a rural area with historically lower home values and limited credit access."
            }
          ],
          quiz: [
            {
              id: "al_m04q01",
              prompt: "The AHFA Step Up program's down payment assistance is structured as:",
              choices: [
                "A grant — does not need to be repaid",
                "A secondary loan at 0% interest, deferred for 10 years",
                "A shared appreciation loan repaid when the property is sold",
                "A forgivable loan forgiven after 5 years of occupancy"
              ],
              answer: 1,
              explanation: "AHFA's Step Up down payment assistance is structured as a secondary loan at 0% interest, deferred for 10 years. Unlike some states' grant programs, this must eventually be repaid (it is not forgiven), but no payments are due for 10 years, making it manageable for cash-strapped first-time buyers."
            },
            {
              id: "al_m04q02",
              prompt: "Alabama SBD requires mortgage loan files to be maintained for how long?",
              choices: ["1 year", "2 years", "3 years", "5 years"],
              answer: 1,
              explanation: "Alabama SBD requires mortgage loan files to be maintained for 2 YEARS. This is shorter than Arizona's 5-year requirement and California's 3-year requirement. Each state sets its own retention period — knowing your state's specific requirement is important for state exam purposes."
            }
          ]
        },

        {
          id: "al_m05",
          order: 5,
          title: "Ethics, Fraud & Fair Lending",
          week: "5-6",
          passingScore: 75,
          icon: "🛡️",
          objective: "Identify mortgage fraud schemes, UDAAP violations, and fair lending obligations for Alabama MLOs.",
          content: [
            {
              heading: "Mortgage Fraud & Ethical Obligations",
              body: "Mortgage fraud = material misrepresentation relied upon by a lender or insurer.\n\nFraud for Property:\n• Occupancy fraud — stating owner-occupied when planning to rent or flip immediately\n• Income fraud — inflating income; fabricating pay stubs or tax returns\n• Asset fraud — using borrowed funds for down payment without disclosing the source\n\nFraud for Profit:\n• Straw buyer — using another person's identity or credit\n• Equity skimming — buying distressed property with a loan, collecting rents, letting it foreclose\n• Builder bailout — builder secretly funds buyer's down payment through inflated price\n• Short sale fraud — buyer and seller secretly agree to a below-market short sale price so buyer can flip immediately at a profit\n\nMLO ethical obligations:\n• Always verify that what is in the loan application matches what the borrower told you\n• Never coach a borrower on how to misrepresent income, assets, or occupancy\n• Report suspected fraud to your employer; employer reports to appropriate authorities\n• Your license is your livelihood — a fraud conviction means lifetime bar from the industry"
            },
            {
              heading: "Fair Lending in Alabama",
              body: "Fair lending laws apply to every mortgage transaction in Alabama:\n\nECOA: prohibits discrimination in any aspect of a credit transaction based on race, color, religion, national origin, sex, marital status, age, or receipt of public assistance.\n\nFair Housing Act: prohibits discrimination in residential mortgage lending based on race, color, religion, national origin, sex, familial status, or disability.\n\nAlabama-specific context:\n• Historical redlining in Alabama's major cities (Birmingham, Montgomery, Mobile) has led to heightened HMDA scrutiny in these markets\n• The Black Belt region: historically underserved; CFPB and DOJ have focused on ensuring credit access in rural Alabama\n• Reverse redlining: targeting minority communities with high-cost loans is also a fair lending violation\n\nThree theories of discrimination:\n• Disparate Treatment: intentional; treating applicants differently because of protected class\n• Disparate Impact: neutral policy with disproportionate adverse effect on protected class\n• Redlining: geographic discrimination based on racial composition"
            }
          ],
          quiz: [
            {
              id: "al_m05q01",
              prompt: "An Alabama MLO discovers that a borrower's loan application overstates their income. The MLO should:",
              choices: [
                "Submit the application anyway — the underwriter will catch it",
                "Tell the borrower to get a different lender",
                "Correct the application to reflect accurate income and discuss options with the borrower",
                "Advise the borrower on how to get documentation that supports the stated income"
              ],
              answer: 2,
              explanation: "An MLO who discovers inaccurate information on a loan application must correct it — not submit it as-is or help the borrower fabricate supporting documentation. Submitting a loan application with known false information is mortgage fraud, which can result in federal prosecution, civil liability, and loss of the MLO license."
            },
            {
              id: "al_m05q02",
              prompt: "A lender's underwriting policy uses a minimum credit score that statistically denies applications from minority applicants at a significantly higher rate than similarly qualified non-minority applicants. This may be a fair lending violation under which theory?",
              choices: [
                "Redlining — geographic discrimination",
                "Disparate Treatment — intentional discrimination",
                "Disparate Impact — neutral policy with discriminatory effect",
                "Reverse redlining — targeting minority areas with high-cost loans"
              ],
              answer: 2,
              explanation: "A facially neutral underwriting policy (like a credit score minimum) that has a disproportionate adverse impact on a protected class may violate fair lending under the DISPARATE IMPACT theory — even without discriminatory intent. The lender must justify the policy as a business necessity and show it is the least discriminatory alternative."
            }
          ]
        }

      ] // end mlo modules
    }, // end mlo track

    // ──────────────────────────────────────────────────────
    // PRACTICAL TRACK — ALABAMA
    // ──────────────────────────────────────────────────────
    practical: {
      id: "practical",
      label: "Practical Skills",
      icon: "💼",
      color: "#4CC97A",
      description: "Real-world Alabama skills: buyer rep under caveat emptor, listing without mandatory disclosure, investor analysis, and RESPA-compliant lead generation",
      requirements: [],
      fees: [],
      modules: [
        {
          id: "al_p01",
          order: 1,
          title: "Working with Buyers in Alabama",
          week: "9-10",
          passingScore: 70,
          icon: "🔑",
          objective: "Guide Alabama buyers through the unique challenges of caveat emptor: agency disclosure, buyer representation, inspection strategy, and navigating as-is sales.",
          content: [
            {
              heading: "Buyer Representation in a Caveat Emptor State",
              body: "Representing buyers in Alabama requires extra diligence because of the caveat emptor doctrine. Buyers cannot rely on seller proactive disclosure — they must investigate.\n\nFirst meeting with buyer clients:\n1. Provide the RECAD agency disclosure form — explain who you represent and what duties you owe\n2. EXPLAIN CAVEAT EMPTOR — this is a RECAD-required duty. Tell buyers explicitly: 'Alabama law does not require sellers to proactively disclose known defects in used homes. As your agent, I will disclose what I know and observe, but you must conduct thorough due diligence through inspections.'\n3. Sign a buyer representation agreement (post-2024 NAR settlement requirement)\n4. Discuss earnest money amounts typical for the Alabama market\n5. Advise on pre-approval: in Alabama's market, sellers expect a pre-approval letter with offers\n\nInspection is non-negotiable for Alabama buyers. Recommend:\n• General home inspection (always)\n• Termite/pest inspection (Alabama has significant termite pressure — especially in Mobile, Montgomery, and coastal areas)\n• Radon testing (elevated in some Alabama areas)\n• Well and septic inspection (many rural Alabama properties are on private systems)"
            },
            {
              heading: "Navigating As-Is Sales in Alabama",
              body: "As-is sales are very common in Alabama given the caveat emptor environment. Many sellers include an as-is clause in the purchase contract.\n\nWhat 'as-is' DOES mean:\n• Seller is not agreeing to make any repairs\n• Buyer accepts the property in its current physical condition\n• Seller's repair obligations are waived\n\nWhat 'as-is' does NOT mean:\n• Seller can lie about known defects if directly asked\n• Seller's agent can conceal known material health/safety defects\n• Buyer waives their right to an inspection — buyers should ALWAYS inspect even in as-is sales\n• Buyer's financing appraisal is waived (lender still requires the property to meet minimum standards)\n\nStrategy for buyer clients in as-is transactions:\n1. ALWAYS inspect — even if seller won't negotiate repairs, the inspection informs the buyer's decision\n2. If inspection reveals significant issues: the buyer must decide to accept, renegotiate price (not repairs), or cancel during the inspection contingency period\n3. Price reduction is often more achievable than repair requests in as-is transactions\n4. Review the seller's RECAD-required disclosures and ask specific questions about any concerns"
            },
            {
              heading: "Alabama Closing Process",
              body: "Alabama closing is typically conducted by a real estate ATTORNEY — not just a title company (as in Arizona or California).\n\nThe attorney:\n• Prepares the deed, closing statement, and other closing documents\n• Conducts the title search or reviews the title commitment\n• Issues or coordinates issuance of title insurance\n• Presides at the closing table\n• Records the deed at the Probate Judge's office\n• Disburses funds\n\nClosing costs in Alabama (customary, always negotiable):\n• Buyer pays: loan origination/points, appraisal, title insurance (lender's policy), attorney fee (varies $300–$800+), recording fees, prepaid insurance and taxes, mortgage tax\n• Seller pays: owner's title insurance (negotiable), deed tax, real estate commission, attorney preparation of deed\n\nPossession: negotiate possession carefully. Some Alabama sellers need time after closing. Use a Seller Possession After Closing Addendum with a specific vacate date and holdover provisions.\n\nKey Alabama fact: deeds are recorded with the PROBATE JUDGE's office (not a County Recorder). First-time agents should confirm the correct office for the county."
            }
          ],
          quiz: [
            {
              id: "al_p01q01",
              prompt: "A buyer client in Alabama asks their agent if they still need a home inspection since the contract is 'as-is.' The agent should advise:",
              choices: [
                "No inspection needed — as-is means buyer accepts all conditions without investigation",
                "Yes, always get an inspection — as-is limits repair obligations, not the buyer's right to inspect and make an informed decision",
                "Inspection is optional only if the buyer is paying cash",
                "Only a termite inspection is required in Alabama as-is sales"
              ],
              answer: 1,
              explanation: "An 'as-is' clause means the seller is not agreeing to make repairs — it does NOT waive the buyer's right or ability to inspect. In Alabama, where caveat emptor already limits seller disclosure obligations, an inspection is even more critical than in other states. Buyers should always inspect regardless of as-is language."
            },
            {
              id: "al_p01q02",
              prompt: "In Alabama, after closing, where does the attorney record the deed?",
              choices: [
                "County Recorder's office",
                "Secretary of State's office",
                "Probate Judge's office in the county where the property is located",
                "Circuit Court Clerk's office"
              ],
              answer: 2,
              explanation: "Alabama deeds are recorded with the PROBATE JUDGE's office in the county where the property is located — not a County Recorder as in most other states. This is a uniquely Alabama procedure. Closing attorneys in Alabama are responsible for recording the deed after disbursing funds."
            }
          ]
        },

        {
          id: "al_p02",
          order: 2,
          title: "Listing & Selling in Alabama",
          week: "9-10",
          passingScore: 70,
          icon: "🏡",
          objective: "Execute an Alabama listing from consultation through close: CMA, RECAD disclosure, as-is vs. disclosed listing strategy, and offer management.",
          content: [
            {
              heading: "The Alabama Listing Consultation",
              body: "Before the listing appointment:\n• Pull sold comps from the past 90–180 days (Alabama markets outside major metros can have fewer transactions; use longer date ranges in rural areas)\n• Check active listings and absorption rate\n• Calculate net proceeds at multiple price points (include Alabama deed tax and attorney fees)\n• Research any outstanding liens or encumbrances at the Probate Judge's office\n\nAt the appointment:\n• Provide RECAD agency disclosure FIRST — before any substantive conversation\n• Walk through the listing agreement (AAR form): price, term, commission, marketing authorization\n• Discuss disclosure strategy:\n  - Alabama does NOT require sellers to complete a disclosure form by law\n  - BUT: the AAR Seller Disclosure Form is standard practice and highly recommended\n  - Advise seller: proactively disclosing reduces liability and buyer complaints post-closing\n  - As-is sales: explain what as-is means and doesn't mean\n• Set pricing expectations — use the full CMA with adjustments\n\nListing agreement must be IN WRITING. Oral listings are unenforceable in Alabama."
            },
            {
              heading: "Alabama Disclosure Strategy",
              body: "Navigating Alabama's caveat emptor doctrine as a listing agent:\n\nWhat the LISTING AGENT must do regardless of seller's preferences:\n• Disclose known material health and safety defects to ALL parties\n• Complete their portion of any disclosure form honestly\n• Cannot actively conceal or misrepresent known defects\n• Must answer buyer inquiries honestly\n• RECAD duties override any seller instruction to conceal\n\nSeller disclosure options to present:\n1. Full disclosure (AAR Seller Disclosure Form): seller discloses all known issues. PROS: reduces buyer complaints and post-closing litigation; builds buyer confidence; smoother transaction. CONS: identified defects may affect price.\n\n2. As-is, no disclosure: seller does not fill out a disclosure form. PROS: seller avoids scrutiny of specific items. CONS: buyers will heavily discount price to compensate for unknown risks; lenders may require inspection anyway; listing agent still has independent disclosure duties.\n\nBest practice recommendation: always recommend the seller complete the AAR Seller Disclosure Form. The legal protection provided to honest sellers who disclose typically outweighs the short-term concern about listed defects."
            }
          ],
          quiz: [
            {
              id: "al_p02q01",
              prompt: "An Alabama seller instructs the listing agent not to mention the basement flooding problem they are aware of. The agent should:",
              choices: [
                "Follow the seller's instructions — they are the principal",
                "Disclose the flooding to buyers — it is a known material health/safety defect and the agent's duties override the seller's instruction",
                "Not mention it proactively, but tell buyers if specifically asked about flooding",
                "Note it on the MLS as a 'known issue' without specifying details"
              ],
              answer: 1,
              explanation: "While Alabama's caveat emptor doctrine limits seller proactive disclosure obligations, it does NOT limit the listing agent's independent duty. RECAD requires agents to disclose known material facts — including health and safety defects like basement flooding. An agent who conceals a known material defect can face AREC discipline and civil liability."
            }
          ]
        },

        {
          id: "al_p03",
          order: 3,
          title: "Alabama Investment Property Analysis",
          week: "9-10",
          passingScore: 70,
          icon: "📈",
          objective: "Analyze Alabama investment properties using cap rate, GRM, cash-on-cash return, and 1031 exchanges — with understanding of Alabama's 1-year redemption period.",
          content: [
            {
              heading: "Alabama Investment Market Metrics",
              body: "Alabama offers some of the most affordable investment property in the Southeast:\n\nCap Rate = NOI ÷ Value\n• Birmingham metro: 6–9% cap rates typical for single-family rentals and small multifamily\n• Mobile and Huntsville: 6–8% for residential investment\n• Rural Alabama: 8–12%+ cap rates possible, but with higher vacancy risk and management challenges\n\nGRM = Purchase Price ÷ Annual Gross Rents\n• Alabama markets: GRMs of 7–12 are common (much lower than coastal markets)\n• The lower GRM means stronger cash flow relative to price — a major attraction for out-of-state investors\n\nCash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested\n\nThe 1% Rule: monthly rent ≥ 1% of purchase price. MORE achievable in Alabama than most states. Common in Birmingham, Huntsville, and rural markets. Example: $100,000 house renting for $1,000/month meets the 1% rule.\n\nAlabama investor caution: the 1-year right of redemption after foreclosure means buyers of foreclosed properties face risk for 12 months. Price this into the acquisition cost."
            },
            {
              heading: "1031 Exchange in Alabama",
              body: "IRC Section 1031 allows Alabama investors to defer capital gains by exchanging investment property for like-kind property:\n\n• 45 days to identify replacement property after closing relinquished property\n• 180 days to close on replacement property\n• Qualified Intermediary (QI) required — investor cannot touch proceeds\n• Like-kind: any real property for any real property\n• Alabama has NO state clawback provision (unlike California) — exchange into out-of-state property without state tax penalty\n\nAlabama-specific: with Alabama's low property prices and strong cap rates, a 1031 exchange from a coastal property into Alabama real estate can dramatically increase cash flow. MLOs and agents should be aware of this as a selling point for out-of-state investors.\n\nAlabama capital gains: Alabama imposes state income tax on capital gains at ordinary income rates (up to 5%). A 1031 exchange defers both federal AND Alabama state capital gains tax."
            },
            {
              heading: "Alabama Landlord-Tenant Law for Investors",
              body: "Key rules for Alabama residential landlords (Ala. Code Title 35-9A):\n\n• Security deposit: max 1 month's rent; return within 60 days with itemized accounting; failure = double deposit\n• Entry notice: 2 business days written notice for non-emergency\n• Eviction timeline: 7-business-day notice to pay → court filing → hearing → writ of possession. Faster than many states.\n• No rent control anywhere in Alabama\n• No repair-and-deduct remedy for tenants — landlord-favorable\n• Self-help eviction (lockout, removing belongings) is ILLEGAL\n\nAlabama is considered a LANDLORD-FRIENDLY state overall:\n• Short eviction notice periods (7 business days)\n• No rent control statewide\n• No repair-and-deduct remedy\n• Relatively straightforward landlord remedies\n• Low property taxes reduce holding costs\n\nThis combination makes Alabama an attractive buy-and-hold investment market, particularly for out-of-state investors seeking cash flow."
            }
          ],
          quiz: [
            {
              id: "al_p03q01",
              prompt: "An investor buys a foreclosed property at an Alabama trustee's sale for $120,000. The former owner has how long to redeem the property?",
              choices: [
                "No right of redemption",
                "3 months",
                "6 months",
                "12 months (1 year)"
              ],
              answer: 3,
              explanation: "Alabama provides a 1-year (12-month) statutory right of redemption after a non-judicial foreclosure sale. The investor who purchases at the trustee's sale must account for this risk — the former owner could pay the sale price plus interest and costs and reclaim the property within 12 months."
            },
            {
              id: "al_p03q02",
              prompt: "An Alabama investor purchases a 4-unit building for $240,000. Annual gross rents are $36,000. What is the GRM?",
              choices: ["6.7", "7.5", "10", "6"],
              answer: 0,
              explanation: "GRM = Purchase Price ÷ Annual Gross Rents = $240,000 ÷ $36,000 = 6.67 (approximately 6.7). A GRM under 7 in Alabama indicates strong cash flow relative to the purchase price — much better than coastal markets where GRMs of 15–20+ are common."
            }
          ]
        },

        {
          id: "al_p04",
          order: 4,
          title: "RESPA Compliance & Lead Generation in Alabama",
          week: "11-12",
          passingScore: 70,
          icon: "🎯",
          objective: "Build compliant lead generation systems for Alabama without creating illegal RESPA kickback arrangements. Understand AfBA rules in the Alabama market context.",
          content: [
            {
              heading: "RESPA in the Alabama Market",
              body: "RESPA Section 8 applies to all Alabama real estate and mortgage professionals working on federally related mortgage loans.\n\nILLEGAL in Alabama under RESPA Section 8:\n• Attorney referring buyers to a specific title company in exchange for fees\n• Title company paying closing attorneys referral fees\n• Lender sponsoring events at a real estate office in exchange for exclusive referrals\n• MSAs that are actually referral fee arrangements dressed up as marketing agreements\n• Any gift or item of value provided in exchange for referrals\n\nNote: in Alabama, closings often involve attorneys. Attorney-referral fee arrangements in real estate closings are particularly scrutinized by HUD and DOJ. Alabama attorneys who refer clients to affiliated settlement services must comply with both RESPA's AfBA requirements AND Alabama State Bar ethics rules."
            },
            {
              heading: "Alabama-Specific Lead Generation (Compliant)",
              body: "Alabama-compliant lead generation strategies:\n\n1. Military and Veterans Community:\n• Huntsville (Redstone Arsenal), Montgomery (Maxwell AFB), and Mobile have significant military populations\n• Offer VA loan education workshops — free educational events are not referral arrangements\n• Partner with military relocation programs (properly structured to avoid RESPA issues)\n\n2. Rural and Agricultural Buyers:\n• Alabama has significant agricultural land ownership\n• USDA loan knowledge is a powerful differentiator\n• Farm Bureau members, agricultural lenders, and county extension offices are networking opportunities\n• Farmland buyers often need specialized financing — FSA (Farm Service Agency) loans\n\n3. Investor Networks:\n• Birmingham Real Estate Investors Association (BREIA) and similar groups\n• Educational presentations at investor meetings — not referral arrangements\n\n4. Out-of-State Investor Outreach:\n• Alabama's low prices attract investors from CA, NY, and IL\n• Content marketing targeting 'Alabama investment property,' 'Birmingham rental market'\n• Never pay out-of-state agents for referrals without proper licensing and RESPA compliance\n\n5. Church and Community Networks:\n• Church networks are culturally significant in Alabama\n• Educational homebuyer workshops hosted through church community centers — legal, valuable, compliant"
            }
          ],
          quiz: [
            {
              id: "al_p04q01",
              prompt: "A Birmingham closing attorney refers all their real estate clients to a title company in exchange for a monthly 'marketing fee' from the title company. This is BEST described as:",
              choices: [
                "Legal under Alabama Bar rules since attorneys can receive referral fees",
                "A RESPA Section 8 violation — paying for settlement service referrals is prohibited",
                "Legal if disclosed to the client at closing",
                "Legal under an Affiliated Business Arrangement since the attorney and title company are related"
              ],
              answer: 1,
              explanation: "Paying a 'marketing fee' that is actually compensation for referrals of title services violates RESPA Section 8 regardless of how it is labeled. Alabama attorneys are also subject to state bar ethics rules prohibiting fee-splitting in this context. Disclosure alone does not cure a Section 8 violation."
            },
            {
              id: "al_p04q02",
              prompt: "An Alabama MLO wants to offer free VA loan education workshops for active duty military at Redstone Arsenal. Under RESPA, this is:",
              choices: [
                "Prohibited — any interaction with potential borrowers for marketing purposes violates RESPA",
                "Legal — genuine educational events are not referral arrangements",
                "Legal only if the MLO's company pays for any refreshments",
                "Prohibited unless all attendees sign a consent form"
              ],
              answer: 1,
              explanation: "Offering genuine, educational homebuyer or loan workshops does NOT violate RESPA. The prohibition is on providing things of value IN EXCHANGE FOR referrals — not on providing education. Free workshops where the MLO shares knowledge (with no referral condition attached) are a legitimate and compliant marketing strategy."
            }
          ]
        }

      ] // end practical modules
    } // end practical track

  }, // end tracks

  studyPlan: [
    { weeks: "1-2", focus: "AL licensing roadmap + 19-year-old minimum age + temporary vs. permanent license + 30-hour post-license + AREC rules + property ownership + St. Stephens and Huntsville Meridians" },
    { weeks: "3-4", focus: "RECAD + caveat emptor doctrine + agency disclosure + AAR purchase contract + earnest money + finance (mortgages + 1-year redemption right + no anti-deficiency)" },
    { weeks: "5-6", focus: "Title (Probate Judge recording) + attorney closings + deed types + race-notice recording + zoning + Alabama Landlord-Tenant Act (Title 35-9A)" },
    { weeks: "7-8", focus: "AREC state law + trust funds (3-year records) + advertising rules + fair housing + Recovery Fund ($15,000 cap) + property tax classification (10%/20%) + senior exemption" },
    { weeks: "9-10", focus: "Practical skills: buyer rep under caveat emptor, as-is transactions, inspector strategy, listing disclosure strategy" },
    { weeks: "11-12", focus: "Investment analysis + 1031 exchange + USDA loans in Alabama + AHFA Step Up program + RESPA compliance + MLO state law (SBD) + exam readiness" }
  ],

  resources: [
    { label: "AREC License Requirements", url: "https://www.arec.alabama.gov/Licensees/ApplyforaLicense.aspx", category: "broker" },
    { label: "AREC Commissioner's Rules", url: "https://www.arec.alabama.gov/Licensees/CommissionersRules.aspx", category: "broker" },
    { label: "Alabama Code Title 34 Ch. 27 (License Law)", url: "https://codes.lp.findlaw.com/alcode/34/27", category: "broker" },
    { label: "RECAD — Alabama Agency Disclosure Act", url: "https://www.arec.alabama.gov/Consumers/RECAD.aspx", category: "broker" },
    { label: "Pearson VUE — Alabama Exam Info", url: "https://home.pearsonvue.com/arec", category: "broker" },
    { label: "Fieldprint Alabama — Fingerprinting", url: "https://fieldprintusa.com", category: "broker" },
    { label: "Alabama Property Tax — ADOR", url: "https://www.revenue.alabama.gov/property-tax/", category: "broker" },
    { label: "Alabama SBD — MLO Licensing", url: "https://www.sbd.alabama.gov/MortgageLicensing.aspx", category: "mlo" },
    { label: "AHFA Step Up Program", url: "https://www.ahfa.com/homebuyers/step-up-program", category: "mlo" },
    { label: "AHFA Mortgage Credit Certificate", url: "https://www.ahfa.com/homebuyers/mortgage-credit-certificate", category: "mlo" },
    { label: "USDA Rural Development — Alabama", url: "https://www.rd.usda.gov/about-rd/state-offices/alabama", category: "mlo" },
    { label: "NMLS SAFE MLO Test Info", url: "https://mortgage.nationwidelicensingsystem.org/profreq/testing/Pages/default.aspx", category: "mlo" }
  ]
};

// Export for use in app
if (typeof module !== 'undefined') module.exports = CURRICULUM_AL;
