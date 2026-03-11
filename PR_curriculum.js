// ============================================================
// PR_curriculum.js — Puerto Rico Real Estate Study System
// Puerto Rico Real Estate Board — 2026
// Sources: Puerto Rico Department of State, NMLS, PSI Exams
// ============================================================

const CURRICULUM_PR = {
  meta: {
    title: "PR Real Estate & MLO Licensing System 2026",
    version: "1.0",
    state: "Puerto Rico",
    stateCode: "PR",
    tracks: ["broker", "mlo", "practical"],
    passingScores: { broker: 75, mlo: 75, federal_law: 75, ethics: 75 }
  },
  tracks: {
    broker: {
      id: "broker",
      label: "PR Real Estate Broker",
      icon: "🌺",
      color: "#ED0C0C",
      description: "Puerto Rico Real Estate Board — pre-license education + Examination Board exam + PR-specific requirements",
      requirements: [
        "21+ years old (broker); 18+ for salesperson",
        "Complete required pre-license education hours",
        "Pass Puerto Rico Real Estate Board exam",
        "Background check",
        "No disqualifying criminal conviction",
        "Puerto Rico is a civil law jurisdiction — important distinction from U.S. common law states"
      ],
      fees: [
        { item: "Pre-license education", amount: "Varies by provider" },
        { item: "Exam fee", amount: "$50–$100", source: "Puerto Rico Board" },
        { item: "License fee", amount: "$100–$200", source: "PR Dept of State" },
        { item: "E&O Insurance", amount: "Required" }
      ],
      modules: [
        {
          id: "pr_b01",
          order: 1,
          title: "Puerto Rico Licensing & Civil Law System",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Understand Puerto Rico's unique civil law system, real estate licensing requirements, and how they differ from U.S. common law states.",
          content: [
            {
              heading: "Puerto Rico's Unique Legal System",
              body: "Puerto Rico operates under a civil law system derived from Spanish law, NOT the common law system used by all 50 U.S. states. This is the most important distinction for any U.S. licensee studying Puerto Rico.\n\nKey differences from common law:\n• Property rights are governed by the Puerto Rico Civil Code\n• 'Community property' (bienes gananciales) applies to married couples by default\n• Usufruct and other civil law property concepts are used\n• Mortgage vs. Deed of Trust: Puerto Rico uses mortgages, not deeds of trust\n• Property Registry: All property transactions are recorded in the Puerto Rico Property Registry, not a county recorder\n\nPuerto Rico Real Estate Board: Licenses and regulates real estate professionals under the Department of State."
            },
            {
              heading: "Puerto Rico Property Ownership",
              body: "Puerto Rico Civil Code governs property ownership:\n\nBienes gananciales (community property): Married couples automatically own property acquired during marriage as community property.\n\nUsufruct: A civil law concept giving the right to use and enjoy property owned by another. Common in estate planning in Puerto Rico.\n\nEasements (Servidumbres): Similar to U.S. easements but governed by Civil Code.\n\nCondominium Law: Puerto Rico has its own Condominium Act (Law 104) which is well-developed and commonly encountered in PR real estate due to high-rise and resort development.\n\nRacial/ethnic protections: All U.S. federal fair housing laws apply in Puerto Rico as a U.S. territory."
            },
            {
              heading: "Puerto Rico Exam and Licensing",
              body: "The Puerto Rico Real Estate Board administers licensing:\n\n• Salesperson exam + broker exam are separate\n• Exams are administered in Spanish and English\n• Pre-license education requirements set by the Board\n• Federal fair housing, RESPA, TILA, SAFE Act all apply in Puerto Rico\n• MLO licensing through NMLS with Puerto Rico OCIF oversight\n\nPuerto Rico-specific topics tested:\n• Puerto Rico Civil Code property concepts\n• Puerto Rico Condominium Act\n• Bienes gananciales (community property for married couples)\n• Puerto Rico Real Estate Brokers and Salesmen Act\n• Horizontal Property Act"
            }
          ],
          quiz: [
            {
              id: "pr_b01q01",
              prompt: "Puerto Rico's legal system is based on:",
              choices: [
                "English common law like all U.S. states",
                "Civil law derived from Spanish law, unlike U.S. common law states",
                "Federal law exclusively, with no state-level property law",
                "A combination of French and English common law"
              ],
              answer: 1,
              explanation: "Puerto Rico operates under a civil law system derived from Spanish law, making it fundamentally different from all 50 U.S. states which use English common law. This affects property ownership concepts, inheritance, marriage property rights, and real estate transactions."
            },
            {
              id: "pr_b01q02",
              prompt: "Under Puerto Rico's 'bienes gananciales' system, property acquired by a married couple during marriage is:",
              choices: [
                "Owned entirely by the husband under traditional Spanish law",
                "Community property owned equally by both spouses by default",
                "Owned entirely by whoever earned the money to purchase it",
                "Subject to a 10-year waiting period before full ownership vests"
              ],
              answer: 1,
              explanation: "Bienes gananciales (community property) means property acquired during marriage belongs equally to both spouses by default under Puerto Rico's civil law system. This is similar to community property states in the U.S. mainland but is based on Spanish civil law principles."
            },
            {
              id: "pr_b01q03",
              prompt: "Where are real estate transactions recorded in Puerto Rico?",
              choices: [
                "The county recorder's office",
                "The Puerto Rico Property Registry (Registro de la Propiedad)",
                "The U.S. federal land records system",
                "The Puerto Rico Department of Justice"
              ],
              answer: 1,
              explanation: "Puerto Rico has its own Property Registry (Registro de la Propiedad) where all real estate transactions are recorded. Unlike U.S. states which use county-level recording, Puerto Rico's Property Registry is organized by region under the Department of Justice."
            }
          ]
        }
      ]
    },
    mlo: {
      id: "mlo",
      label: "PR Mortgage Loan Originator",
      icon: "🏦",
      color: "#4C9AC9",
      description: "Puerto Rico MLO License — SAFE National Test + OCIF oversight + Puerto Rico-specific requirements",
      requirements: [
        "Complete 20 hours NMLS-approved pre-licensing education",
        "Pass SAFE MLO National Test with Uniform State Test",
        "Criminal background check and credit report",
        "Submit application through NMLS",
        "Puerto Rico OCIF (Office of the Commissioner of Financial Institutions) oversight"
      ],
      fees: [
        { item: "SAFE MLO Test", amount: "$110", source: "NMLS" },
        { item: "Application fee", amount: "$150–$300", source: "Puerto Rico OCIF" },
        { item: "Criminal background check", amount: "$39", source: "NMLS" },
        { item: "Credit report", amount: "$15", source: "NMLS" }
      ],
      modules: [
        {
          id: "pr_m01",
          order: 1,
          title: "Puerto Rico MLO Licensing",
          week: "1-2",
          passingScore: 75,
          icon: "📋",
          objective: "Understand Puerto Rico MLO licensing through NMLS and the Office of the Commissioner of Financial Institutions (OCIF).",
          content: [
            {
              heading: "Puerto Rico MLO Regulatory Framework",
              body: "The Puerto Rico Office of the Commissioner of Financial Institutions (OCIF) regulates mortgage loan originators in Puerto Rico.\n\nAll federal mortgage laws apply in Puerto Rico:\n• RESPA (Regulation X)\n• TILA (Regulation Z)\n• ECOA (Regulation B)\n• SAFE Act\n• HMDA\n• CFPB rules\n\nPuerto Rico-specific mortgage considerations:\n• Puerto Rico uses mortgages (not deeds of trust)\n• Notarial system: Real estate closings in Puerto Rico require a Puerto Rico notary (who must be an attorney)\n• Spanish-language documents are common\n• Flooding and hurricane risk affect insurance and lending requirements\n• FEMA flood maps and flood insurance are critical in PR"
            }
          ],
          quiz: [
            {
              id: "pr_m01q01",
              prompt: "Which Puerto Rico agency oversees mortgage loan originator licensing?",
              choices: [
                "Puerto Rico Real Estate Board",
                "Puerto Rico Office of the Commissioner of Financial Institutions (OCIF)",
                "Puerto Rico Department of Consumer Affairs",
                "The Federal Reserve Bank of New York"
              ],
              answer: 1,
              explanation: "The Puerto Rico Office of the Commissioner of Financial Institutions (OCIF) oversees MLO licensing in Puerto Rico. The Real Estate Board handles real estate broker licenses. Both use the federal NMLS system for licensing."
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
      description: "Puerto Rico real-world skills: civil law transactions, condominium law, flood risk, bilingual practice",
      modules: [
        {
          id: "pr_p01",
          order: 1,
          title: "Puerto Rico Transaction Skills",
          week: "9-10",
          passingScore: 75,
          icon: "📅",
          objective: "Master Puerto Rico-specific transaction requirements including notarial closing, civil law documents, and flood risk considerations.",
          content: [
            {
              heading: "Puerto Rico Closing Process",
              body: "Puerto Rico closings differ significantly from mainland U.S.:\n\n• All real estate transfers require a Puerto Rico Notary Public (who must be a licensed attorney)\n• The notary prepares the deed (escritura) and certifies all parties' signatures\n• No escrow companies as in the U.S. mainland — the notary handles the closing\n• Documents are typically in Spanish\n• Property Registry recordation by the notary after closing\n\nTitle insurance:\n• U.S. title insurers do offer coverage in Puerto Rico\n• The PR Property Registry's Torrens-like system provides title certainty but is not a substitute for title insurance\n\nFlood insurance:\n• Puerto Rico has significant flood risk from hurricanes (Maria 2017 was catastrophic)\n• FEMA NFIP flood insurance is available and frequently required by lenders\n• Flood zone determination is essential due diligence"
            }
          ],
          quiz: [
            {
              id: "pr_p01q01",
              prompt: "Who MUST be involved in all Puerto Rico real estate closings?",
              choices: [
                "A licensed escrow officer",
                "A Puerto Rico title company",
                "A Puerto Rico Notary Public (who must be a licensed attorney)",
                "A federal HUD closing agent"
              ],
              answer: 2,
              explanation: "All Puerto Rico real estate closings must be conducted by a Puerto Rico Notary Public, who must also be a licensed attorney. This is a civil law requirement that distinguishes Puerto Rico closings from mainland U.S. transactions."
            }
          ]
        }
      ]
    }
  },
  studyPlan: [
    { weeks: "1-2", focus: "Puerto Rico civil law system, licensing requirements" },
    { weeks: "3-4", focus: "Property ownership, bienes gananciales, condominium law" },
    { weeks: "5-6", focus: "Federal mortgage law (all apply in PR), OCIF requirements" },
    { weeks: "7-8", focus: "PR-specific law, notarial system, flood risk" },
    { weeks: "9-10", focus: "Transaction skills: PR closings, civil law documents" },
    { weeks: "11-12", focus: "Exam readiness: full mock exams, schedule exam" }
  ],
  resources: [
    { label: "Puerto Rico Real Estate Board", url: "https://www.estado.pr.gov/en/real-estate-broker/", category: "broker" },
    { label: "Puerto Rico OCIF", url: "https://ocif.pr.gov/", category: "mlo" },
    { label: "NMLS Puerto Rico Requirements", url: "https://mortgage.nationwidelicensingsystem.org/", category: "mlo" },
    { label: "Puerto Rico Property Registry", url: "https://www.justicia.pr.gov/registro-de-la-propiedad/", category: "broker" }
  ]
};
if (typeof module !== 'undefined') module.exports = CURRICULUM_PR;
