const STATES_DATA = {
  "AL": {
    "name": "Alabama",
    "code": "AL",
    "licensing": {
      "Regulator": "Alabama Real Estate Commission (AREC) | arec.alabama.gov | (334) 242-5544",
      "License Types": "Salesperson (Temporary then Permanent), Associate Broker, Broker, Company",
      "Pre-License Education": "60 hours approved pre-license course (Salesperson); must complete within 1 year of purchase; pass with minimum 70%",
      "Exam": "Pearson VUE | Must pass within 6 months of course completion; minimum 70% passing score; national + state sections",
      "Post-License": "30-hour post-license course required within first 12 months (active) or 6 months (inactive) to convert temp to permanent license",
      "Continuing Education": "15 hours every 2 years (by Sept 30 of even years); includes 3 mandatory hrs Risk Management course; 12 elective hrs; Brokers also need 3-hr Mandatory Broker CE",
      "Background Check": "Fingerprint via Fieldprint Alabama; FBI + state criminal background check; felony convictions may disqualify",
      "Reciprocity": "Full reciprocity with all U.S. states; reciprocal applicants need temp license for 180 days then permanent; must meet remaining requirements"
    },
    "contracts": {
      "Legal Doctrine": "CAVEAT EMPTOR (Buyer Beware) state for used/existing residential real estate \u2014 one of only ~3 remaining states",
      "Seller Disclosure": "NOT required by state law for used homes; seller must disclose: (1) known health/safety defects, (2) upon specific buyer inquiry, (3) when fiduciary relationship exists",
      "Agency Disclosure": "RECAD (Real Estate Consumer's Agency and Disclosure Act) governs agency relationships; agents must explain caveat emptor to buyers",
      "Lead Paint (Federal)": "Federal: Required for homes built before 1978 \u2014 EPA pamphlet, lead hazard disclosure, Lead Warning Statement, 10-day inspection period",
      "Standard Forms": "Alabama Association of Realtors Seller Disclosure Form widely used but NOT legally mandated; brokers may make it company policy",
      "As-Is Clause": "As-Is clause can limit seller liability but does NOT exempt from AREC License Act duties or NAR Code of Ethics"
    },
    "landlord_tenant": {
      "Governing Statute": "Alabama Uniform Residential Landlord and Tenant Act (Ala. Code Title 35-9A)",
      "Security Deposit": "Max: 1 month's rent (pet deposits additional, not counted in cap); no interest required; no specific storage requirement; return within 60 days with itemized statement; failure = double deposit penalty",
      "Entry Notice": "Minimum 2 days written notice for non-emergency entry; emergency entry allowed without notice; entry at reasonable times",
      "Eviction Notices": "Non-payment: 7-business-day Notice to Pay or Quit | Lease violation: 7-business-day Notice to Cure or Quit | No-fault termination: 30-day notice (monthly lease), 7-day (weekly)",
      "Eviction Process": "File with circuit court; no cure right after 2 violations of same type within 12 months",
      "Habitability": "Landlord must maintain property per local health/safety codes; repairs within 2 weeks of notice; no repair-and-deduct remedy for tenants",
      "Rent Control": "None. No statewide rent control.",
      "Local Overlays": "Check major city ordinances; generally landlord-friendly state with fewer local restrictions"
    },
    "property_tax": {
      "Administrator": "County level: County Assessor values property; County Treasurer collects. State: Alabama Dept. of Revenue oversees administration (revenue.alabama.gov)",
      "Assessment Method": "Appraised Value x Classification Rate = Assessed Value. Annual equalization program reviews 25% of properties per year (4-year full cycle). Notices of changes mailed in March.",
      "Classifications": "Residential/owner-occupied: 10% of appraised value | Agricultural: 10% | All other (commercial, personal property): 20%",
      "Exemptions": "",
      "Appeals Process": "File written protest with County Board of Equalization (BOE) within 30 days of valuation notice; informal hearing; then formal BOE hearing; then Circuit Court appeal within 30 days of BOE decision. Taxes must be paid by Dec 31 to preserve Circuit Court appeal rights.",
      "Due Dates": "Property taxes due October 1 (lien date); taxes on personal property reported Oct 1 billed following Oct 1"
    }
  },
  "AK": {
    "name": "Alaska",
    "code": "AK",
    "licensing": {
      "Regulator": "Alaska Real Estate Commission (AREC) | commerce.alaska.gov | 550 W 7th Ave Suite 1500, Anchorage AK 99501",
      "License Types": "Salesperson, Associate Broker, Broker",
      "Pre-License Education": "40 hours approved pre-license education (AS 08.88.171); certificate valid 18 months; must apply within 6 months of passing exam",
      "Exam": "Pearson VUE; National (80 Qs) + State (40 Qs) sections; plus up to 5 experimental questions; 4 hours total; passing score: 75 (scaled)",
      "Post-License": "30 hours post-license education required within 1 year of initial licensure (in addition to CE); affidavit + fee due within 30 days after 12-month period",
      "Continuing Education": "20 hours every 2 years (by Jan 31 of even years); includes 8-hr designated core curriculum + 12 hrs electives; CE not required if licensed within 90 days of expiration",
      "Background Check": "No felony or crime impacting trustworthiness; 7 years must lapse post-conviction sentence before eligibility",
      "Reciprocity": "Reciprocity with all states (full reciprocity); still must complete 40-hour AK pre-license course and pass exam; license history required from all prior states",
      "Other Requirements": "E&O Insurance required (RIAK group policy or equivalent); must work under licensed AK broker"
    },
    "contracts": {
      "Legal Doctrine": "Disclosure-required state; Alaska law requires sellers to disclose known material defects",
      "Seller Disclosure": "Sellers must disclose known material defects; Alaska does not follow caveat emptor for residential sales",
      "Agency Disclosure": "Written agency disclosure required; must identify relationship before substantive discussions",
      "Lead Paint (Federal)": "Federal: Required for homes built before 1978 \u2014 EPA pamphlet, disclosure, Lead Warning Statement, 10-day inspection period",
      "Standard Forms": "Alaska Association of Realtors provides standard forms; agency disclosure form required"
    },
    "landlord_tenant": {
      "Governing Statute": "Alaska Uniform Residential Landlord and Tenant Act (AS \u00a7 34.03)",
      "Security Deposit": "Max: 2 months' rent (unless rent exceeds $2,000/month, then no cap); additional pet deposit up to 1 month's rent (non-service animals only); non-refundable deposits ILLEGAL; must deposit in trust account; return within 30 days with itemized deductions",
      "Entry Notice": "24 hours' advance notice required for non-emergency entry; emergency entry allowed without notice; entry at reasonable times only",
      "Eviction Notices": "Non-payment: 7-day Notice to Pay or Quit (AS \u00a7 34.03.220(b)) | Lease violation: 10-day Notice to Cure or Quit | Month-to-month termination: 30-day notice | Weekly lease: 7-day notice",
      "Eviction Process": "FED (Forcible Entry & Detainer) action in court; $250 filing fee; hearing within 15 days of complaint; 2 days' notice to tenant before hearing",
      "Habitability": "Landlord must maintain all electrical, plumbing, sanitary, heating, ventilating, kitchen facilities; repairs within 10 days for most issues; provide running water, heat, hot water",
      "Rent Control": "None. No statewide rent control.",
      "Local Overlays": "No significant local rent control; check Anchorage, Fairbanks, Juneau municipal codes for local additions"
    },
    "property_tax": {
      "Administrator": "Administered by local borough or city assessors; no statewide property tax in Alaska. Alaska Dept. of Revenue oversees some aspects.",
      "Assessment Method": "Property assessed at full and true value by local assessor; assessment cycles vary by jurisdiction; boroughs set their own millage rates",
      "Exemptions": "Senior exemption (65+): Municipalities may offer; disabled veteran exemption; primary residence exemptions vary by borough. No mandatory statewide homestead exemption.",
      "Appeals Process": "Appeal to local Board of Equalization within 30 days of assessment notice (varies by borough); then Superior Court",
      "Due Dates": "Varies by municipality/borough. Most due in first half of calendar year.",
      "Note": "Alaska has no state income tax and no state sales tax; relies heavily on local property taxes; Permanent Fund Dividend offsets some costs"
    }
  },
  "AZ": {
    "name": "Arizona",
    "code": "AZ",
    "licensing": {
      "Regulator": "Arizona Department of Real Estate (ADRE) | azre.gov | Phoenix, AZ",
      "License Types": "Salesperson, Broker; also property management licenses",
      "Pre-License Education": "Salesperson: 90 hours from ADRE-approved school (in-person only; online NOT approved for pre-license) | Broker: 90 hours + 3 years experience as licensed agent in last 5 years",
      "Exam": "ADRE-approved school exam ($75 fee); Fingerprint Clearance Card from AZ Dept. of Public Safety (8-10 weeks); Disciplinary Actions Disclosure Form required",
      "Continuing Education": "24 hours every 2 years; includes mandatory topics; ADRE sets curriculum requirements",
      "Background Check": "Fingerprint Clearance Card required; felony or moral turpitude convictions disqualify; also crimes involving trust/fiduciary duty",
      "Reciprocity": "Arizona has agreements with several states; check ADRE for current reciprocity list",
      "Fees": "License fee: $120 ($110 license + $10 Real Estate Recovery Fund)"
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; sellers required to disclose known material defects",
      "Seller Disclosure": "Sellers must complete SPDS (Seller Property Disclosure Statement) disclosing all known material defects; required for residential sales",
      "Required Disclosures": "Lead-based paint (pre-1978 homes) | Bedbug disclosure | Pool safety disclosure (ARS \u00a7 36-1681(E)) | HOA disclosure | ALTA/survey disclosure",
      "Agency Disclosure": "Written agency disclosure required before substantive discussions; forms provided by AAR (Arizona Association of Realtors)",
      "Lead Paint (Federal)": "Federal: Required for homes built before 1978"
    },
    "landlord_tenant": {
      "Governing Statute": "Arizona Residential Landlord and Tenant Act (ARS \u00a7 33-1301 et seq.)",
      "Security Deposit": "Max: 1.5 months' rent; must be returned within 14 days of lease termination with itemized statement; failure can result in damages",
      "Required Disclosures": "Lead-based paint (pre-1978) | Bedbug educational materials | Name/address of authorized property manager and owner | Pool safety disclosure | Ratio utility billing disclosure if applicable | ARLTA availability (ARS \u00a7 33-1322)",
      "Entry Notice": "2 days' notice required for non-emergency entry (ARS \u00a7 33-1343); emergency entry without notice allowed; violation: tenant may recover actual damages not less than 1 month's rent",
      "Eviction Notices": "Non-payment: 5-day notice | Lease violation: 10-day notice to cure | Material/irreparable breach: immediate termination | End of lease: per lease terms",
      "Eviction Process": "File with Justice Court (evictions under $10,000) or Superior Court; FED (Forcible Entry & Detainer) action",
      "Habitability": "Landlord must comply with building/housing codes; maintain electrical, plumbing, heating, AC; repairs in reasonable time",
      "Rent Control": "None. Arizona state law preempts local rent control.",
      "Local Overlays": "Tucson and Phoenix have some additional tenant protections; check municipal codes"
    },
    "property_tax": {
      "Administrator": "County Assessors assess property; County Treasurers collect. Arizona Dept. of Revenue (ADOR) oversees.",
      "Assessment Method": "Full Cash Value (FCV) determined by county assessor; Limited Property Value (LPV) caps annual increases; residential assessment ratio = 10% of LPV; commercial = 18%",
      "Exemptions": "Homestead exemption: up to $3,965 (2024) reduction in FCV for primary residence (Prop 130) | Senior valuation protection: freezes LPV for qualifying seniors 65+ | Widows/widowers/disabled: additional exemptions | Veterans with disability rating",
      "Appeals Process": "File with County Assessor by April 1 (or 60 days after notice) for informal appeal; then Board of Equalization; then State Board of Equalization; then Tax Court",
      "Due Dates": "1st half due October 1 (delinquent Nov 1); 2nd half due March 1 (delinquent May 1); under $100 total = pay in full by Oct 1",
      "Note": "Arizona cities CANNOT tax residential rentals effective Jan 1, 2025 (ARS change); property owners must still register with county assessor"
    }
  },
  "AR": {
    "name": "Arkansas",
    "code": "AR",
    "licensing": {
      "Regulator": "Arkansas Real Estate Commission (AREC) | arec.state.ar.us | Little Rock, AR",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "60 hours approved pre-license education; must be 18 years old; background check assessed case-by-case",
      "Exam": "PSI Exams; national + state sections",
      "Continuing Education": "7 hours per year (salesperson); includes mandatory topics set by AREC",
      "Background Check": "Background check required; assessed case-by-case",
      "Reciprocity": "Reciprocity with several states; check AREC for current list. FL, GA, LA, MD, MA have limited reciprocity with AR."
    },
    "contracts": {
      "Legal Doctrine": "Caveat emptor state (one of ~3 remaining); sellers generally not required to disclose defects for existing homes",
      "Seller Disclosure": "Not mandated by state law for used residential property; federal lead paint disclosure still applies",
      "Agency Disclosure": "Written agency disclosure required; AREC provides forms",
      "Lead Paint (Federal)": "Federal: Required for homes built before 1978"
    },
    "landlord_tenant": {
      "Governing Statute": "Arkansas Residential Landlord-Tenant Act (ACA \u00a7 18-17-101 et seq.) \u2014 NOTE: Arkansas only adopted limited landlord-tenant statute; many common law rules apply",
      "Security Deposit": "Max: 2 months' rent; return within 60 days with itemized statement; no interest required",
      "Entry Notice": "No specific statutory notice period for non-emergency entry; 'reasonable notice' standard applies",
      "Eviction Notices": "Non-payment: 3-day Notice to Pay or Quit | Lease violation: varies | Month-to-month: 30-day notice to terminate",
      "Eviction Process": "Unlawful detainer action in District Court or Circuit Court",
      "Habitability": "Basic habitability implied warranty; landlord must maintain habitable conditions",
      "Rent Control": "None.",
      "Local Overlays": "",
      "Note": "Arkansas has limited landlord-tenant statutory protections compared to most states; common law and lease terms govern many situations"
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Collectors collect. Arkansas Dept. of Finance and Administration (DFA) oversees.",
      "Assessment Method": "20% of true market value for most real property; agricultural land assessed at lower rates based on use value",
      "Exemptions": "Homestead: $375 credit on property tax bill for primary residence (Act 1100 of 1999) | Disabled veterans: full exemption on homestead | 65+/disabled: assessment freeze on homestead",
      "Appeals Process": "County Equalization Board within 30 days of assessment notice; then Circuit Court",
      "Due Dates": "October 15 deadline; delinquent after October 15"
    }
  },
  "CA": {
    "name": "California",
    "code": "CA",
    "licensing": {
      "Regulator": "California Department of Real Estate (DRE) | dre.ca.gov | Sacramento, CA",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 3 college-level courses = 135 hours (Real Estate Principles, Real Estate Practice, + 1 approved elective). Effective Jan 1 2024: updated content requirements for Practice course | Broker: 8 courses = 360 hours + 2 years full-time experience as licensed salesperson",
      "Exam": "DRE administers exam; online scheduling at dre.ca.gov; must apply for license within 1 year of passing exam",
      "Continuing Education": "45 hours every 4 years; includes Ethics, Agency, Trust Funds, Fair Housing, Risk Management, Management/Supervision (mandatory topics); first renewal: 45 hrs including specific courses",
      "Background Check": "Live scan fingerprinting required; criminal history reviewed; moral turpitude convictions may disqualify",
      "Reciprocity": "No formal reciprocity; all out-of-state applicants must meet full CA requirements",
      "Fees": "Salesperson exam: $60; license: $245; Broker exam: $95; license: $300"
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; among the most comprehensive disclosure requirements in the U.S.",
      "Seller Disclosure": "Transfer Disclosure Statement (TDS) MANDATORY for all residential 1-4 unit sales; must be delivered before offer or within 3 days of acceptance; buyer has 3-day right to rescind after receipt",
      "Required Disclosures": "TDS (Civil Code \u00a7 1102) | Natural Hazard Disclosure (NHD) \u2014 fire, flood, earthquake, etc. | Mello-Roos and special assessment disclosure | Agent Visual Inspection Disclosure (AVID) | Lead paint (pre-1978) | Smoke detector/water heater compliance | Local transfer tax disclosure | Homeowner association disclosure | Statewide Buyer and Seller Advisory (SBSA) recommended",
      "Agency Disclosure": "Written agency disclosure required before signing listing or purchase agreement; AD form from CAR (California Association of Realtors)",
      "Timing": "TDS must be delivered as soon as practicable before transfer; 3-day rescission right after receipt",
      "Standard Forms": "CAR (California Association of Realtors) provides comprehensive standard forms library"
    },
    "landlord_tenant": {
      "Governing Statute": "California Civil Code \u00a7\u00a7 1940-1954.06; Civil Code \u00a7 1946 et seq. (termination); Code of Civil Procedure \u00a7 1161 (eviction)",
      "Security Deposit": "Max: 1 month's rent (unfurnished); reduced from 2 months effective July 1, 2024 (AB 12); pet deposit included in cap; must be returned within 21 days with itemized accounting",
      "Entry Notice": "24 hours' notice required for non-emergency; 48 hours for final move-out inspection; emergency entry without notice",
      "Eviction Notices": "Non-payment: 3-day Notice to Pay or Quit | Lease violation: 3-day Notice to Cure | No-fault/just cause: 30-day notice (under 1 year tenancy) or 60-day notice (over 1 year); RELOCATION ASSISTANCE required for no-fault evictions in covered units",
      "Eviction Process": "Court filing required; no self-help eviction",
      "Habitability": "Landlord must maintain habitable conditions; warranty of habitability implied; 'repair and deduct' remedy available (up to 1 month's rent); 'rent withholding' remedy for serious violations",
      "Rent Control": "No statewide rent cap law; AB 1482 caps rent increases at 5% + local CPI or 10%, whichever is lower, for qualifying units. Many cities have LOCAL rent control (LA, SF, Oakland, etc.)",
      "Just Cause Eviction": "AB 1482 (Tenant Protection Act 2019): Just cause required for eviction of tenants in qualifying units after 12 months of occupancy; applies to most multi-family units built before 2005",
      "Local Overlays": "Los Angeles, San Francisco, Oakland, San Jose, Santa Monica, Berkeley and many others have stricter local rent control and just cause eviction. ALWAYS check local ordinance."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Tax Collectors collect. California State Board of Equalization (BOE) oversees.",
      "Assessment Method": "Proposition 13 (1978): Property assessed at purchase price; annual increases CAPPED at 2% per year unless sale or new construction triggers reassessment to market value",
      "Exemptions": "Homeowner's Exemption: $7,000 reduction in assessed value for primary residence (saves ~$70-100/year) | Senior/disabled: Prop 19 allows seniors 55+ to transfer base year value to new home statewide (effective Feb 2021) | Disabled veterans: full or partial exemption | Non-profit exemption | Parent-child/grandparent-grandchild: Prop 19 limits exclusion to primary residence only (as of Feb 2021)",
      "Appeals Process": "File with Assessment Appeals Board (AAB) by September 15 (or 60 days after notice); informal review with Assessor's office first recommended; then AAB hearing",
      "Due Dates": "1st installment: November 1 (delinquent Dec 10) | 2nd installment: February 1 (delinquent April 10)",
      "Transfer Tax": "County Documentary Transfer Tax: $1.10 per $1,000 of value; cities may add additional (e.g., City of LA charges additional amounts; SF has significant additional transfer tax on high-value properties)"
    }
  },
  "CO": {
    "name": "Colorado",
    "code": "CO",
    "licensing": {
      "Regulator": "Colorado Real Estate Commission (CREC) | dre.colorado.gov | Denver, CO",
      "License Types": "Broker Associate, Independent Broker, Employing Broker (Colorado does not use 'salesperson' \u2014 everyone is a broker)",
      "Pre-License Education": "168 hours total (one of the highest in the nation): 48 hrs Real Estate Law, 48 hrs Colorado Contracts and Regulations, 8 hrs Current Legal Issues in Colorado RE, 32 hrs Real Estate Closings, 32 hrs Practical Applications",
      "Exam": "PSI Exams; national + state portions; Broker Associate must work under Employing Broker",
      "Continuing Education": "24 hours every 3 years; includes 3 CREC Annual Update courses (4 hrs each); remaining 12 hrs electives",
      "Background Check": "Fingerprinting required; criminal history reviewed; felony or crimes of moral turpitude may disqualify",
      "Reciprocity": "No formal reciprocity; all applicants must meet CO requirements; however some experience may be recognized",
      "Note": "Colorado is unique: all licensees start as Broker Associates under Employing Broker; must work 2 years before becoming Independent Broker"
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; Colorado uses standardized contracts from CREC/CAR (Colorado Association of Realtors)",
      "Seller Disclosure": "Seller's Property Disclosure (SPD) form required; covers structural, mechanical, environmental, and legal disclosures; must include known material defects",
      "Required Disclosures": "SPD form | Lead paint (pre-1978) | HOA disclosure (CCIOA) | Oil and gas well disclosure | Airport noise disclosure if applicable | Local transfer/excise tax disclosure | Source of water disclosure",
      "Agency Disclosure": "Written agency disclosure required; Definitions of Working Relationships form must be provided early in transaction",
      "Standard Forms": "CREC and CAR provide approved standard forms; agents encouraged/required to use approved forms"
    },
    "landlord_tenant": {
      "Governing Statute": "Colorado Revised Statutes \u00a7\u00a7 38-12-101 et seq. (Residential Tenants Act) | Warrant of Habitability | Security Deposits Act",
      "Security Deposit": "No statewide cap on amount; must be returned within 30 days (60 days if lease provides) with itemized statement; failure = up to 3x deposit as penalty",
      "Entry Notice": "No specific statutory minimum; '24-48 hours' is standard reasonable notice; emergency entry without notice",
      "Eviction Notices": "Non-payment: 10-day Demand for Compliance or Possession (for 9+ months tenancy) or 5-day (shorter tenancy) | Lease violation: 10-day cure notice | Month-to-month termination: 10-day notice for short tenancy; 21-day for 6+ month tenancy; 91-day notice for 3+ years",
      "Eviction Process": "Court filing required; no self-help eviction",
      "Habitability": "Warranty of habitability implied; 'repair and deduct' available; landlord must remedy within reasonable time (24-96 hrs depending on severity)",
      "Rent Control": "Colorado state law prohibits local rent control (CRS \u00a7 38-12-301); Denver attempted local control but state preempts",
      "Just Cause Eviction": "No statewide just cause eviction requirement; Denver has local just cause ordinance",
      "Local Overlays": "Denver: Just Cause Eviction ordinance (Ordinance 22-0988, effective 2023); Boulder: some additional protections"
    },
    "property_tax": {
      "Administrator": "County Assessors value property; County Treasurers collect; Colorado Div. of Property Taxation oversees (dola.colorado.gov/dpt)",
      "Assessment Method": "Residential: Assessed at 6.765% (2024) of Actual Value; Commercial: 29% of Actual Value; Actual Value set at market; reassessment every 2 years (odd years)",
      "Exemptions": "Homestead: Senior/disabled veteran exemption \u2014 50% of first $200,000 of actual value exempt for qualifying seniors 65+ or disabled veterans with at least 10% disability rating",
      "Appeals Process": "File with County Assessor by June 1 (protest period); informal appeal; Board of Assessment Appeals (BAA); then District Court",
      "Due Dates": "Full payment: April 30 OR two installments: Feb 28 and June 15"
    }
  },
  "CT": {
    "name": "Connecticut",
    "code": "CT",
    "licensing": {
      "Regulator": "Connecticut Department of Consumer Protection (DCP), Real Estate Division | portal.ct.gov/DCP | Hartford, CT",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 60 hours | Broker: 120 hours + 2 years experience as licensed salesperson",
      "Exam": "PSI Exams; national + state portions",
      "Continuing Education": "12 hours every 2 years; includes 6 mandatory hours; topics change each cycle; check DCP for current required topics",
      "Background Check": "Background check required; convictions reviewed",
      "Reciprocity": "Mutual reciprocity with many states (those where CT applicant passed written exam); must pass CT state exam; check DCP for current list. Limited applicability for FL, IL, IN applicants."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state",
      "Seller Disclosure": "Residential Property Condition Disclosure Report required for all residential sales; seller must complete and provide to buyer",
      "Required Disclosures": "Property Condition Disclosure Report | Lead paint (pre-1978) | Radon disclosure | Flood zone disclosure | Septic system disclosure | Underground oil/fuel storage tank disclosure",
      "Agency Disclosure": "Written agency disclosure required; Buyer Agency Agreement required for buyer representation"
    },
    "landlord_tenant": {
      "Governing Statute": "Connecticut General Statutes \u00a7\u00a7 47a-1 et seq. (Landlord and Tenant Act)",
      "Security Deposit": "Max: 2 months' rent (1 month for tenants 62+); must be returned within 30 days with itemized statement; must be kept in separate interest-bearing escrow account; interest payable annually",
      "Entry Notice": "Reasonable notice required; typically 24 hours for non-emergency; emergency without notice",
      "Eviction Notices": "Non-payment: 3-day Notice to Quit | Lease violation: 15-day Notice to Quit | Month-to-month: 3-day for non-payment; reasonable notice for no-fault",
      "Eviction Process": "Court filing required; no self-help eviction",
      "Habitability": "Strong warranty of habitability; 'repair and deduct' remedy available; right to withhold rent for serious violations",
      "Rent Control": "Some municipalities (e.g., Hartford) have limited rent controls; check local ordinances",
      "Just Cause Eviction": "Just cause for eviction required after initial lease term expires in many circumstances",
      "Local Overlays": ""
    },
    "property_tax": {
      "Administrator": "Town Assessors assess; Town Tax Collectors collect. Office of Policy and Management (OPM) oversees.",
      "Assessment Method": "70% of fair market value (General Statutes require revaluation at minimum every 5 years; grand list Oct 1)",
      "Exemptions": "Homeowner: $1,000 assessed value exemption | Veterans: additional exemptions | Elderly/disabled: Circuit Breaker program \u2014 tax credits/freezes for qualifying seniors",
      "Appeals Process": "Appeal to Board of Assessment Appeals by February 20 (after the Oct 1 grand list); then Superior Court",
      "Due Dates": "July 1 and January 1 (semi-annual); single installment option in some municipalities"
    }
  },
  "DE": {
    "name": "Delaware",
    "code": "DE",
    "licensing": {
      "Regulator": "Delaware Real Estate Commission | dpr.delaware.gov | Dover, DE",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "99 hours pre-license education (one of the higher requirements); must be 18+ years old",
      "Exam": "PSI Exams; national + state; felony convictions reviewed (5 years must elapse since conviction)",
      "Continuing Education": "21 hours every 2 years; 18 specific hours + 3 elective hours; first renewal may have different requirements based on timing",
      "Background Check": "Background check; felony convictions may disqualify (5 years required to have elapsed since conviction)",
      "Reciprocity": "Full reciprocity with all states; also requires Delaware law portion completion and 20 closed transactions in past 3 years OR alternative experience equivalency"
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state",
      "Seller Disclosure": "Seller's Disclosure of Real Property Condition Report required; comprehensive form covering all aspects of property condition",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | HOA disclosure | SIRB (Sellers Improved Real Property Report) for coastal properties | Underground storage tanks | Flood zone",
      "Agency Disclosure": "Written agency disclosure required; Buyer Agency Agreement for buyer representation"
    },
    "landlord_tenant": {
      "Governing Statute": "Delaware Residential Landlord-Tenant Code (25 Del. Code \u00a7 5101 et seq.)",
      "Security Deposit": "Max: 1 month's rent after tenant has rented for 1 year (initially can be higher); interest required if held over 1 year in account; return within 20 days with itemized statement",
      "Entry Notice": "24 hours' notice required for non-emergency; emergency without notice",
      "Eviction Notices": "Non-payment: 5-day notice | Lease violation: 7-day notice to cure | Month-to-month termination: 60-day notice",
      "Eviction Process": "Court filing required; no self-help eviction",
      "Habitability": "Strong warranty of habitability; repair and deduct available up to $250 per occurrence",
      "Rent Control": "None statewide.",
      "Local Overlays": ""
    },
    "property_tax": {
      "Administrator": "County Assessors (3 counties: New Castle, Kent, Sussex); municipalities may add additional taxes.",
      "Assessment Method": "Assessment values vary by county; New Castle County: regular reassessments; Sussex/Kent: less frequent; assessed at percentage of appraised value",
      "Exemptions": "Senior citizens: reduction programs vary by county; disabled veterans: exemptions available; school tax credit for seniors 65+",
      "Appeals Process": "File with County Board of Assessment Review; then Superior Court",
      "Due Dates": "Varies by county; generally September 30 for county taxes; school taxes vary",
      "Transfer Tax": "State: 2.5% of property value (shared by buyer and seller); County: additional 1.5% in some counties; total typically 3-4%"
    }
  },
  "FL": {
    "name": "Florida",
    "code": "FL",
    "licensing": {
      "Regulator": "Florida Real Estate Commission (FREC) | myfloridalicense.com | Orlando, FL",
      "License Types": "Sales Associate, Broker, Broker Associate",
      "Pre-License Education": "Sales Associate: 63-hour Florida-approved pre-license course; must pass with 70%; course valid for 2 years; must be 18+ with HS diploma or equivalent",
      "Exam": "Pearson VUE; state exam (40 questions); passing score: 75%; must apply within 2 years of passing",
      "Post-License": "45-hour post-license course required within first renewal period (18-24 months); Broker: 60-hour post-license course for first renewal",
      "Continuing Education": "14 hours every 2 years (on 18-24 month cycle); includes 3 hrs Core Law + 3 hrs Ethics/Business Practices + 8 hrs specialty courses",
      "Background Check": "LiveScan fingerprinting required; criminal history reviewed; felony and crime of moral turpitude may disqualify",
      "Reciprocity": "No formal reciprocity; BUT mutual recognition agreements with: AL, AR, CT, GA, IL, KY, MS, NE, RI, WV \u2014 residents of those states exempt from 63-hr pre-license course but must pass FL state exam; must not be FL resident at time of application"
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; seller must disclose known facts materially affecting property value",
      "Seller Disclosure": "Florida law (Johnson v. Davis, 480 So.2d 625) requires disclosure of known facts materially affecting value that are not readily observable and not known to buyer; no standard state-mandated form but disclosure highly advisable",
      "Required Disclosures": "Lead paint (pre-1978) | Homeowners Association/Condo disclosure (3-day right to void contract) | Coastal construction disclosure | Radon gas disclosure | Energy efficiency disclosure | Flood zone disclosure | Chinese drywall if applicable",
      "Agency Disclosure": "Written agency disclosure required; Broker Relationship Disclosure Act (BRD) governs; form must be given before substantive discussions",
      "Standard Forms": "FR/Bar (Florida Realtors/Florida Bar) approved standard contracts widely used",
      "Condo Disclosure": "Buyer has 3-day rescission right after receiving condo docs"
    },
    "landlord_tenant": {
      "Governing Statute": "Florida Residential Landlord and Tenant Act (Florida Statutes \u00a7\u00a7 83.40-83.682)",
      "Security Deposit": "No statewide cap on amount; must be held in separate Florida bank account (or surety bond); return within 15 days (if no claim) or 30 days (if withholding portion) with written notice; failure = forfeit right to claim against deposit",
      "Entry Notice": "12 hours' notice required for non-emergency entry (FS \u00a7 83.53); emergency without notice",
      "Eviction Notices": "Non-payment: 3-day Notice to Pay or Quit | Lease violation: 7-day notice to cure (if curable) or 7-day notice (non-curable) | Month-to-month: 15-day notice to terminate",
      "Eviction Process": "File with County Court; tenant has 5 business days to respond; hearing within 20 days; writ of possession if tenant doesn't comply",
      "Habitability": "Landlord must maintain premises in compliance with applicable building, housing, and health codes; 7-day notice required before tenant can withhold rent for serious violations",
      "Rent Control": "Florida state law PROHIBITS local rent control (FS \u00a7 125.0103, \u00a7 166.043 \u2014 preemption law strengthened 2023)",
      "Local Overlays": "Miami-Dade, Broward, Palm Beach have additional tenant protections in some areas; no local rent control permitted"
    },
    "property_tax": {
      "Administrator": "County Property Appraisers assess; County Tax Collectors collect. Florida Dept. of Revenue oversees (floridarevenue.com)",
      "Assessment Method": "Just value (market value) determined annually by county appraiser; Save Our Homes (SOH) cap: homestead property increases capped at 3% or CPI (whichever is lower) per year",
      "Exemptions": "Homestead Exemption: $25,000 from all taxes + additional $25,000 from non-school taxes (total up to $50,000) for primary residence owned and occupied by Jan 1 | Additional exemptions: senior ($500+), disability, veteran, surviving spouse | Portability: allows transfer of SOH benefit to new home within 2 years",
      "Appeals Process": "File with Value Adjustment Board (VAB) by September 18 (or 25 days after TRIM notice); informal conference with appraiser recommended first",
      "Due Dates": "Tax bills sent November 1; early payment discount: 4% if paid Nov, 3% Dec, 2% Jan, 1% Feb; delinquent April 1",
      "Transfer Tax": "Documentary Stamp Tax: $0.70 per $100 of consideration; Miami-Dade: $0.60 per $100 plus surtax"
    }
  },
  "GA": {
    "name": "Georgia",
    "code": "GA",
    "licensing": {
      "Regulator": "Georgia Real Estate Commission (GREC) | grec.state.ga.us | Atlanta, GA",
      "License Types": "Salesperson, Broker, Community Association Manager",
      "Pre-License Education": "75 hours approved pre-license courses OR 10 quarter-hours/6 semester hours from accredited college; must be 18+ with HS diploma or GED; pass background check; sponsoring broker required to activate",
      "Exam": "PSI Exams; national + state portions; FL residents must also take GA Supplemental Exam",
      "Post-License": "25-hour GREC-approved post-license course required within first year",
      "Continuing Education": "36 hours every 4 years; includes 3 hrs license law; license renewal every 4 years",
      "Background Check": "Criminal background check required; law enforcement report required (must be no more than 60 days old for reciprocity)",
      "Reciprocity": "Reciprocity with all states (must hold current, active license that passed state exam and is in good standing); must submit certified license history issued within 1 year; application fee $170; FL residents must take GA Supplemental Exam"
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; sellers must disclose known material defects",
      "Seller Disclosure": "Seller's Property Disclosure Statement widely used; not mandated by state statute but standard practice; agents must disclose known material defects",
      "Required Disclosures": "Lead paint (pre-1978) | Agency Disclosure (Brokerage Relationships in Real Estate Transactions Act \u2014 BRRETA) | HOA/Condo disclosure | Flood zone | Well/septic disclosure where applicable",
      "Agency Disclosure": "BRRETA (OCGA \u00a7 10-6A) governs; written agency disclosure required; Brokerage Engagement Agreement for buyer representation",
      "Standard Forms": "Georgia Association of Realtors (GAR) and Atlanta Realtors (AR) provide standard forms"
    },
    "landlord_tenant": {
      "Governing Statute": "Georgia landlord-tenant law found primarily in OCGA \u00a7 44-7-1 et seq.; Georgia does not have a comprehensive Uniform Residential Landlord-Tenant Act",
      "Security Deposit": "No statewide cap; must be returned within 30 days (or 1 month); itemized accounting required; held in escrow or bonded; failure to return with accounting = tenant may sue for double the deposit plus attorney's fees",
      "Entry Notice": "No specific statutory notice requirement; 'reasonable notice' standard; typically 24 hours",
      "Eviction Notices": "Non-payment or violation: Demand for possession (no specific statutory minimum notice period beyond demand); typically immediate for material breach; for month-to-month: 60-day notice (post-2023 law HB 404)",
      "Eviction Process": "Dispossessory warrant filed in Magistrate Court; hearing within 7 days of service; writ of possession if tenant doesn't comply",
      "Habitability": "Implied warranty of habitability; landlord must maintain property in good repair; tenant may repair and deduct for minor repairs",
      "Rent Control": "None. Georgia state law does not authorize local rent control.",
      "Local Overlays": ""
    },
    "property_tax": {
      "Administrator": "County Tax Assessors assess; County Tax Commissioners/Collectors collect. Georgia Dept. of Revenue oversees (dor.georgia.gov)",
      "Assessment Method": "40% of fair market value (FMV); county boards set millage rates; FMV determined annually or per county schedule",
      "Exemptions": "Homestead: $2,000 off assessed value for primary residence (state); additional county homestead exemptions vary widely | Senior: varies by county (many offer significant exemptions 62-65+) | Veteran: disabled vet exemptions | School tax exemption for seniors in many counties",
      "Appeals Process": "File with Board of Tax Assessors by deadline shown on notice (usually 45 days); then Board of Equalization; then Superior Court or Arbitration",
      "Due Dates": "Typically November 15-December 1 (varies by county); some counties have two payment dates",
      "Transfer Tax": "Real Estate Transfer Tax: $0.10 per $100 of consideration (seller typically pays)"
    }
  },
  "HI": {
    "name": "Hawaii",
    "code": "HI",
    "licensing": {
      "Regulator": "Hawaii Real Estate Commission (DCCA-REB) | cca.hawaii.gov/reb | Honolulu, HI",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 60 hours from DCCA-approved school; must be 18+, US citizen or authorized worker; pass with 70%; certificate valid 2 years. Broker: 80 hours + experience.",
      "Exam": "PSI Services; Salesperson: 80 national + 50 state questions; 150 + 90 minutes; 70% passing score; $61 fee. Apply within 2 years of passing.",
      "Continuing Education": "20 hours per biennium (by Nov 30 of even years); includes mandatory core curriculum.",
      "Background Check": "Criminal convictions, DUIs, civil actions reviewed; preliminary decision available pre-application; must obtain sponsoring broker.",
      "Reciprocity": "NO reciprocity with any state. Out-of-state holders may qualify for pre-license education equivalency (if active license within 1 year, similar state requirements) and/or uniform exam section equivalency. All applicants must pass Hawaii state section.",
      "Fees": "Even-year filing: $282; Odd-year: $382. Exam fee: $61."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; seller must disclose known material defects; tenant-friendly regulatory environment.",
      "Seller Disclosure": "Sellers must disclose known material defects; Real Estate Disclosure Statement (REDS) widely used; TAR/HiCentral forms available.",
      "Required Disclosures": "Lead paint (pre-1978) | Leasehold vs. fee simple disclosure (critical in Hawaii \u2014 many properties are leasehold) | Flood zone | HOA disclosure | Agent disclosure: name of owner/agent if owner on another island (HRS \u00a7 521-43) | Volcanic activity zone disclosure",
      "Agency Disclosure": "Written agency disclosure required before substantive discussions; Hawaii Association of Realtors forms.",
      "Lead Paint (Federal)": "Federal: Required for homes built before 1978.",
      "Special Note": "LEASEHOLD PROPERTY: Hawaii has significant leasehold real estate inventory \u2014 disclosure of land ownership status and lease expiration is critical and unique to Hawaii."
    },
    "landlord_tenant": {
      "Governing Statute": "Hawaii Residential Landlord-Tenant Code (HRS Chapter 521)",
      "Security Deposit": "Max: 1 month's rent (plus additional 1 month for pets \u2014 non-service animals only); non-refundable deposits prohibited; return within 14 days with itemized statement; failure = landlord forfeits right to retain deposit.",
      "Entry Notice": "Minimum 2 days' advance notice for non-emergency entry; emergency entry without notice; entry at reasonable hours only.",
      "Eviction Notices": "Non-payment: 5-day notice (HRS \u00a7 521-68) | Lease violation: 10-day notice to cure (HRS \u00a7 521-72) | Nuisance: 5-day notice, 24-hr cure | Month-to-month: 45-day notice to terminate | At-will weekly: 10-day notice.",
      "Eviction Process": "District Court (not Small Claims); $120 filing fee + $10 surcharge + sheriff fee; 5 business days for tenant to vacate after notice; 60 days to file after 5th day; no self-help eviction.",
      "Habitability": "Landlord must maintain habitability per HRS \u00a7 521-42; repairs within 12 business days of written notice (emergency: 3 business days); repair-and-deduct remedy: up to $500 per month.",
      "Rent Control": "None statewide. No rent control in Hawaii (though discussion ongoing).",
      "Local Overlays": "County ordinances may apply; check Honolulu, Maui, Kauai, Hawaii County codes. Act 202 (2025): mandatory mediation before eviction for non-payment. Act 200 (2024): tenant screening fee caps."
    },
    "property_tax": {
      "Administrator": "County Real Property Tax offices administer (4 counties: Honolulu, Maui, Hawaii, Kauai). No state property tax.",
      "Assessment Method": "Each county sets own rates and assessment methodology; properties assessed at 100% of market value; annual reassessment cycles vary by county.",
      "Exemptions": "Owner-occupant homeowner exemption: varies by county (Honolulu: $100,000 off assessed value for primary residence). Senior exemptions available. Disabled exemptions. Agricultural land classifications at lower rates.",
      "Appeals Process": "File with County Board of Review within 30 days of assessment notice; then Tax Appeal Court.",
      "Due Dates": "Honolulu: 1st installment Aug 20; 2nd installment Feb 20. Other counties vary.",
      "Note": "Hawaii has some of the highest property values but relatively low effective property tax rates due to high exemptions and county-managed systems."
    }
  },
  "ID": {
    "name": "Idaho",
    "code": "ID",
    "licensing": {
      "Regulator": "Idaho Real Estate Commission (IREC) | irec.idaho.gov | Boise, ID",
      "License Types": "Salesperson, Broker, Designated Broker",
      "Pre-License Education": "Salesperson: 90 hours approved pre-license education; must be 18+; pass with 70%. Broker: 90 additional hours + 2 years active experience.",
      "Exam": "PSI Exams; national + state sections; must apply within 1 year of passing.",
      "Continuing Education": "18 hours every 2 years (by Dec 31 of even years); includes mandatory topics set by IREC.",
      "Background Check": "Criminal background check; felony or crime of moral turpitude reviewed.",
      "Reciprocity": "NO formal reciprocity. Exam waiver system: active out-of-state licensees may waive national exam, pre-license education, and broker experience requirements; same license type as held in prior state; single-licensure state holders must hold Principal/Designated Broker to qualify for ID Broker."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; sellers must disclose known material defects.",
      "Seller Disclosure": "Seller's Property Condition Disclosure Form required; comprehensive coverage of property condition.",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | HOA disclosure | Well/septic disclosure | Flood zone | Irrigation water rights disclosure (critical in Idaho \u2014 water rights attach to land).",
      "Agency Disclosure": "Written agency disclosure required; Idaho Association of Realtors (IAR) provides approved forms.",
      "Special Note": "WATER RIGHTS: Idaho is a prior appropriation water rights state \u2014 disclosure of irrigation rights, water shares, and water delivery systems is critical and unique."
    },
    "landlord_tenant": {
      "Governing Statute": "Idaho Residential Landlord and Tenant Act (Idaho Code \u00a7 6-310 et seq. and \u00a7 55-208)",
      "Security Deposit": "No statewide cap; return within 21 days (30 days if written in lease) with itemized statement; failure = up to 3x wrongfully withheld amount as penalty.",
      "Entry Notice": "24 hours' notice required for non-emergency; emergency without notice; Idaho Code \u00a7 6-320.",
      "Eviction Notices": "Non-payment: 3-day Notice to Pay or Quit | Lease violation: 3-day Notice to Cure | Month-to-month termination: 1 month notice | Week-to-week: 5 days",
      "Eviction Process": "Unlawful detainer in District Court or Magistrate Court; Summary Eviction Process available.",
      "Habitability": "Implied warranty of habitability; landlord must maintain property in habitable condition; repair-and-deduct available.",
      "Rent Control": "None statewide; Idaho law does not authorize local rent control.",
      "Local Overlays": "Generally landlord-friendly; minimal local tenant protections beyond state law."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer/Tax Collector collects. Idaho State Tax Commission oversees (tax.idaho.gov).",
      "Assessment Method": "Assessed at 100% of market value; assessor determines market value annually; personal property also taxed.",
      "Exemptions": "Homeowner's Exemption: 50% of value (up to $125,000) for primary residence; Circuit Breaker: income-based property tax relief for low-income seniors/disabled (max ~$1,500); Veterans: 100% disabled veterans exempt from property tax on primary home.",
      "Appeals Process": "File with County Board of Equalization by June 15 (or within 30 days of assessment notice); then Board of Tax Appeals (BTA); then District Court.",
      "Due Dates": "1st half: Dec 20; 2nd half: June 20; or full payment by Dec 20."
    }
  },
  "IL": {
    "name": "Illinois",
    "code": "IL",
    "licensing": {
      "Regulator": "Illinois Department of Financial and Professional Regulation (IDFPR) | idfpr.com | Chicago, IL",
      "License Types": "Broker (entry-level), Managing Broker (supervises brokers); NOTE: Illinois eliminated 'Salesperson' license \u2014 everyone starts as Broker.",
      "Pre-License Education": "Broker: 75 hours approved pre-license education; pass with 75%; must apply within 2 years of passing exam. Managing Broker: 45 additional hours.",
      "Exam": "PSI Exams; national + Illinois-specific sections; Broker: 140 questions total.",
      "Post-License": "Broker: 45 hours post-license education required within first renewal period (2 years).",
      "Continuing Education": "12 hours every 2 years; includes mandatory topics.",
      "Background Check": "Criminal background check; case-by-case review.",
      "Reciprocity": "Partial reciprocity with: CO, CT, FL, GA, IN, IA, KY, NE, WI. Must pass IL state exam section; need active sponsoring IL broker; submit reciprocal application to IDFPR; $125 fee.",
      "Note": "Illinois uses Broker/Managing Broker system (no salesperson). Sponsors must hold active Broker or Managing Broker license in IL."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; Illinois requires seller disclosure for residential properties.",
      "Seller Disclosure": "Residential Real Property Disclosure Report (765 ILCS 77) required for residential sales; seller must disclose all known material defects; buyer has 5 business days to rescind after receipt.",
      "Required Disclosures": "Residential Disclosure Report | Lead paint (pre-1978) | Radon disclosure (recommended; testing widely required by buyers) | HOA/Condo disclosure (22-unit rider for condos) | Underground storage tank disclosure | Flood zone disclosure | Latent material defects",
      "Agency Disclosure": "Illinois Residential Real Property Disclosure Act; Consumer Notice required; Designated Agency allowed.",
      "Special Note": "ATTORNEY REVIEW: While not mandated statewide, attorney review clauses are standard in Chicago metro contracts.",
      "Standard Forms": "Illinois Association of Realtors (IAR) provides standard forms; atty review common in Chicago metro (3-5 business days typical)."
    },
    "landlord_tenant": {
      "Governing Statute": "Illinois law varies significantly: Statewide Landlord-Tenant Act is limited; Chicago has the Residential Landlord and Tenant Ordinance (RLTO); other municipalities have own codes.",
      "Security Deposit": "Statewide: no cap; return within 30 days. Chicago: max 1.5 months' rent; must earn interest (5-year T-bill rate annually); return within 30 days; failure = 2x deposit penalty.",
      "Entry Notice": "Statewide: reasonable notice. Chicago RLTO: 2 days' notice for non-emergency.",
      "Eviction Notices": "Non-payment: 5-day notice | Lease violation: 10-day notice to cure | Month-to-month termination: 30-day notice.",
      "Eviction Process": "Eviction Summons filed in Circuit Court; tenant has 5 days to respond after service.",
      "Habitability": "Warranty of habitability implied statewide; Chicago RLTO: repair-and-deduct up to $500 or 1 month's rent.",
      "Rent Control": "None statewide; Illinois preempts local rent control (50 ILCS 825).",
      "Just Cause Eviction": "Chicago RLTO: some just cause protections for tenants in buildings with 6+ units; check current Chicago ordinance.",
      "Local Overlays": "CHICAGO: The RLTO (MCC 5-12) is among the strongest tenant protection laws in the U.S. \u2014 covers security deposits, habitability, retaliation, just cause (some circumstances), subletting, and more. Evanston, Oak Park also have local protections."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer/Collector collects. Illinois Department of Revenue (IDOR) oversees. Cook County has unique assessment system.",
      "Assessment Method": "Cook County: residential assessed at 10% of market value; commercial at 25%. Downstate counties: assessed at 33.33% of market value. Quadrennial reassessment cycle in most areas.",
      "Exemptions": "General Homestead: up to $10,000 reduction in assessed value (Cook) or $6,000 (downstate) | Long-time Occupant (Cook): additional reduction for seniors 65+ | Senior Freeze: income-based freeze | Veterans: Returning Veterans, Disabled Veterans, Specially Adapted Housing exemptions.",
      "Appeals Process": "File with County Board of Review by deadline on assessment notice; then Illinois Property Tax Appeal Board (PTAB); then Circuit Court.",
      "Due Dates": "Cook County: 1st installment due March 1; 2nd installment due August 1. Downstate: varies by county, typically due in 2 installments."
    }
  },
  "IN": {
    "name": "Indiana",
    "code": "IN",
    "licensing": {
      "Regulator": "Indiana Real Estate Commission (IREC) | pla.in.gov | Indianapolis, IN",
      "License Types": "Broker (entry-level), Managing Broker; Indiana uses Broker for all licensees (no salesperson).",
      "Pre-License Education": "90 hours approved pre-license education; must be 18+; pass with 75%.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "36 hours every 3 years; mandatory topics include agency, ethics, contracts.",
      "Background Check": "Criminal background check; case-by-case review.",
      "Reciprocity": "No formal reciprocity, but endorsement pathway: if original state has 'substantially similar' requirements, applicant may take only the Indiana state section of the exam. Active IL license holders submit official IL license verification only; contact IREC at PLA10@PLA.IN.Gov."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; seller must disclose known material defects.",
      "Seller Disclosure": "Sales Disclosure Form (SDF) required by Indiana State Board of Accounts; must be filed with county auditor; covers all known defects.",
      "Required Disclosures": "Sales Disclosure Form | Lead paint (pre-1978) | HOA disclosure | Flood zone | Underground storage tanks | Well/septic",
      "Agency Disclosure": "Written agency disclosure required; Indiana Association of Realtors (IAR) forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Indiana Residential Landlord and Tenant Act (IC 32-31)",
      "Security Deposit": "No statewide cap; return within 45 days with itemized statement; failure = 2x deposit as penalty.",
      "Entry Notice": "Reasonable notice required; typically 24 hours for non-emergency; IC 32-31-5-6.",
      "Eviction Notices": "Non-payment: 10-day notice | Lease violation: 45-day cure notice (or 10-day for drug/criminal activity) | Month-to-month: 1 month notice.",
      "Eviction Process": "Small claims (up to $8,000) or Circuit/Superior Court; tenant has 48 hours to vacate after writ of possession.",
      "Habitability": "Warranty of habitability; landlord must maintain habitable condition; repair-and-deduct up to $500.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly. Indianapolis/Marion County: some local tenant protections. Check local ordinances."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. Indiana Department of Local Government Finance (DLGF) oversees.",
      "Assessment Method": "Assessed at 100% of true tax value (market value); annual reassessment cycle; trending system used.",
      "Exemptions": "Homestead: $48,000 assessed value deduction + 35% cap | Mortgage: $3,000 deduction | Over-65: additional deductions for income-qualified seniors | Veterans: 100% disabled veterans exempt up to $14,000 | Blind/disabled: deductions available.",
      "Appeals Process": "File with County Assessor (informal); then County Property Tax Assessment Board of Appeals (PTABOA); then Indiana Board of Tax Review; then Tax Court.",
      "Due Dates": "1st installment: May 10; 2nd installment: Nov 10.",
      "Transfer Tax": "Conveyance fee: $0.25 per $100 (county) + $0.10 per $100 (state audit) = ~$3.50 per $1,000."
    }
  },
  "IA": {
    "name": "Iowa",
    "code": "IA",
    "licensing": {
      "Regulator": "Iowa Real Estate Commission (IREC) | plb.iowa.gov/real-estate | Des Moines, IA",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 96 hours approved pre-license (divided into specific subject areas); must be 18+.",
      "Exam": "Pearson VUE; national + state sections.",
      "Continuing Education": "36 hours every 3 years; mandatory topics including fair housing, ethics.",
      "Background Check": "Criminal background check; character review.",
      "Reciprocity": "Partial reciprocity with: AR, GA, LA, MA, MN, MS, ND. Submit certificate of license history; undergo background check; provide E&O proof. Non-reciprocal states: may waive national exam if state uses ARELLO-accredited exam (NOT CA, FL, NJ, NY, WI)."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; seller must disclose known material defects.",
      "Seller Disclosure": "Residential Property Seller Disclosure Statement required; Iowa Code \u00a7 558A.",
      "Required Disclosures": "Seller Disclosure Statement | Lead paint (pre-1978) | HOA disclosure | Well/septic/private water | Radon testing recommended.",
      "Agency Disclosure": "Written agency disclosure required; Iowa Association of Realtors (IAR) forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Iowa Uniform Residential Landlord and Tenant Act (Iowa Code Chapter 562A)",
      "Security Deposit": "Max: 2 months' rent; return within 30 days with itemized statement; must be held in trust; failure = up to 2x deposit as penalty.",
      "Entry Notice": "24 hours' notice for non-emergency; emergency without notice; Iowa Code \u00a7 562A.19.",
      "Eviction Notices": "Non-payment: 3-day notice (pay or quit) | Lease violation: 7-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Forcible Entry and Detainer (FED) in District Court or Small Claims; tenant has 3 days after service to respond.",
      "Habitability": "Warranty of habitability; repair-and-deduct up to $175 or 1/2 month's rent after 7-day notice.",
      "Rent Control": "None statewide; Iowa prohibits local rent control.",
      "Local Overlays": "Iowa City has some additional tenant protections; check local ordinance."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. Iowa Department of Revenue oversees.",
      "Assessment Method": "Residential: assessed at 100% of actual value; assessment limitation rollback applies (caps taxable value increases); reassessment every 2 years (odd years).",
      "Exemptions": "Homestead: $4,850 credit on tax (no assessed value reduction) | Military: up to $1,852 exemption | Senior/Disabled: Rent Reimbursement program | Elderly/disabled: property tax credit programs.",
      "Appeals Process": "File with Board of Review by May 5 (or within 20 days of assessment notice); then Property Assessment Appeal Board; then District Court.",
      "Due Dates": "1st installment: Sept 1 (delinquent Oct 1); 2nd installment: March 1 (delinquent April 1)."
    }
  },
  "KS": {
    "name": "Kansas",
    "code": "KS",
    "licensing": {
      "Regulator": "Kansas Real Estate Commission (KREC) | krec.ks.gov | Topeka, KS",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 30-hour Principles course + 30-hour Kansas Practice course = 60 hours total; pass both exams.",
      "Exam": "Pearson VUE; national + state sections. Out-of-state applicants: may waive national exam via 'Client Exam Waiver'; must complete 30-hour Kansas Practice course and pass state section.",
      "Continuing Education": "12 hours every 2 years; mandatory topics required.",
      "Background Check": "Background check; character assessment.",
      "Reciprocity": "No formal reciprocity. Exam waiver: active out-of-state licensees may waive national exam; must complete 30-hour Kansas Practice course; pass state exam; complete remaining steps."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Seller's Disclosure of Property Condition required; standard form from Kansas Association of Realtors (KAR).",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | HOA disclosure | Well/septic | Flood zone.",
      "Agency Disclosure": "Written agency disclosure required; KAR forms widely used."
    },
    "landlord_tenant": {
      "Governing Statute": "Kansas Residential Landlord and Tenant Act (KSA 58-2540 et seq.)",
      "Security Deposit": "Max: 1 month's rent (unfurnished) + 1/2 month for pets; furnished: 1.5 months + 1/2 month pets; return within 30 days with itemized statement; failure = deposit + up to 1.5x wrongful amount.",
      "Entry Notice": "24 hours' advance notice required; KSA 58-2557.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: 14-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Forcible detainer in District Court; Small Claims for amounts under $4,000.",
      "Habitability": "Landlord must maintain habitable conditions; tenant may repair-and-deduct after notice.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly. Check Lawrence, Manhattan municipal codes."
    },
    "property_tax": {
      "Administrator": "County Appraisers assess; County Treasurer collects. Kansas Department of Revenue oversees.",
      "Assessment Method": "Residential: assessed at 11.5% of appraised value; commercial: 25%; agricultural: use value-based. Annual appraisal required.",
      "Exemptions": "Homestead: income-based refund program for seniors/disabled (not assessed value reduction) | Veterans: 100% disabled veterans full exemption on primary home | Low-income seniors: refund programs.",
      "Appeals Process": "File with County Board of Tax Appeals (BOTA); then District Court.",
      "Due Dates": "1st half: Dec 20; 2nd half: May 10."
    }
  },
  "KY": {
    "name": "Kentucky",
    "code": "KY",
    "licensing": {
      "Regulator": "Kentucky Real Estate Commission (KREC) | krec.ky.gov | Frankfort, KY",
      "License Types": "Sales Associate, Broker",
      "Pre-License Education": "Sales Associate: 96 hours approved pre-license education; pass with 75%.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "48 hours post-license within first 2 years of licensure.",
      "Continuing Education": "6 hours per year (12 hours per 2-year cycle); mandatory topics.",
      "Background Check": "Criminal background check; felony or crimes involving moral turpitude reviewed.",
      "Reciprocity": "Partial reciprocity with FL, OH, TN, WV. All must complete 40-hour reciprocal law course. Submit license history, application, fees; pass background check.",
      "Note": "Kentucky is generally considered a TURF state for non-reciprocal agents."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Seller's Disclosure of Property Condition Form required; covers all known defects.",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | HOA disclosure | Well/septic | Flood zone | Underground storage tanks.",
      "Agency Disclosure": "Written agency disclosure required; Kentucky Association of Realtors (KAR) forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Kentucky Uniform Residential Landlord and Tenant Act (KRS 383.505-383.715); NOTE: only applies in counties that have adopted it.",
      "Security Deposit": "URLTA counties: return within 30 days; no cap stated. Non-URLTA: common law applies, varies.",
      "Entry Notice": "URLTA: 2 days' notice for non-emergency; emergency without notice.",
      "Eviction Notices": "Non-payment: 7-day notice | Lease violation: 15-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Forcible detainer in District Court.",
      "Habitability": "Implied warranty of habitability (URLTA counties); repair-and-deduct available.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Louisville/Jefferson County and Lexington/Fayette County have adopted URLTA; check if county has adopted URLTA for full statutory protections.",
      "Note": "CRITICAL: Kentucky's URLTA only applies in counties that have adopted it by ordinance. Many rural counties rely entirely on common law."
    },
    "property_tax": {
      "Administrator": "County Property Value Administrators (PVAs) assess; County Sheriff collects. Kentucky Department of Revenue oversees.",
      "Assessment Method": "Assessed at 100% of fair cash value; annual assessment; some property classes assessed differently.",
      "Exemptions": "Homestead: $46,350 (2024-25) exemption for owner-occupants 65+ or disabled | Veterans: disability-related exemptions | Agricultural land: use value assessment.",
      "Appeals Process": "File with County PVA; then County Board of Assessment Appeals; then Kentucky Claims Commission; then Circuit Court.",
      "Due Dates": "Oct 31 (with 2% discount through Nov 30); face value Dec 31; penalty after Jan 1."
    }
  },
  "LA": {
    "name": "Louisiana",
    "code": "LA",
    "licensing": {
      "Regulator": "Louisiana Real Estate Commission (LREC) | lrec.gov | Baton Rouge, LA",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 90 hours (60 hours general real estate + 30 hours Louisiana-specific); must be 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "12 hours every year (annually); includes mandatory topics; 3-hour Louisiana-specific requirement.",
      "Background Check": "Criminal background check; fingerprinting required.",
      "Reciprocity": "Reciprocity with: AL, AR, CO, GA, IA, MS, NM, OK, PA. Applicants from reciprocal states: provide proof of licensing, same license type, background check; no additional exam or training; cannot substitute 30-hr Louisiana portion."
    },
    "contracts": {
      "Legal Doctrine": "Civil law state (Napoleonic Code); Louisiana uses unique civil law property system \u2014 different from common law states. Full disclosure required.",
      "Seller Disclosure": "Property Disclosure Document required; Louisiana RS 9:3196 \u2014 covers all known defects; also unique CAVEAT about civil law warranty system.",
      "Required Disclosures": "Property Disclosure Document | Lead paint (pre-1978) | Flood zone / flood history | HOA disclosure | Mineral rights disclosure | Servitudes (easements) disclosure \u2014 civil law specific.",
      "Agency Disclosure": "Agency Disclosure required; forms from Louisiana REALTORS.",
      "Special Note": "CIVIL LAW: Louisiana's property law is based on civil law (not common law). Key differences: usufruct, predial servitude, community property (with exceptions), warranties of ownership. Agents must understand these distinctions."
    },
    "landlord_tenant": {
      "Governing Statute": "Louisiana Civil Code Art. 2668-2729 (lease) + RS Title 9 (landlord-tenant provisions)",
      "Security Deposit": "No statewide cap; return within 1 month with itemized statement; failure = up to 2x deposit as penalty.",
      "Entry Notice": "Reasonable notice required; no specific statute; 24 hours typical.",
      "Eviction Notices": "Non-payment: 5-day notice (Rule for Possession) | Lease violation: varies | Month-to-month: 10-day notice.",
      "Eviction Process": "Rule for Possession filed in City/Parish Court; expedited process \u2014 hearing within 3-5 days.",
      "Habitability": "Lessor must maintain leased property in good condition; Civil Code Art. 2696-2697.",
      "Rent Control": "None statewide.",
      "Local Overlays": "New Orleans: some additional tenant protections post-Hurricane Katrina; check NOLA Code of Ordinances.",
      "Note": "Louisiana uses the term 'lessor/lessee' (civil law) rather than 'landlord/tenant'."
    },
    "property_tax": {
      "Administrator": "Parish Assessors assess; Parish Sheriff/Tax Collector collects. Louisiana Tax Commission oversees.",
      "Assessment Method": "Residential: assessed at 10% of fair market value; commercial: 15%; agricultural: use value. Annual listing required.",
      "Exemptions": "Homestead Exemption: first $75,000 of market value exempt from parish property taxes (Article VII, Section 20 of LA Constitution); does NOT apply to school taxes. Additional special assessment levels for seniors with income limits.",
      "Appeals Process": "File with Parish Board of Review; then Louisiana Tax Commission; then District Court.",
      "Due Dates": "December 31 annually (delinquent after); some parishes have different dates."
    }
  },
  "ME": {
    "name": "Maine",
    "code": "ME",
    "licensing": {
      "Regulator": "Maine Real Estate Commission (MREC) | maine.gov/pfr/professionallicensing | Augusta, ME",
      "License Types": "Associate Broker (entry-level), Broker, Designated Broker",
      "Pre-License Education": "Associate Broker: 55 hours approved pre-license education; must be 18+; pass with 75%.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "21 hours post-license within first year of licensure.",
      "Continuing Education": "21 hours every 2 years; mandatory topics required.",
      "Background Check": "Criminal background check; case-by-case review.",
      "Reciprocity": "No formal reciprocity agreements. Any out-of-state licensee must pass full Maine licensing exam (state law section). Non-resident affiliated with a Maine licensed agency can perform brokerage services. May waive education requirements if active license from equivalent state."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Property Disclosure Statement required for all residential transactions.",
      "Required Disclosures": "Property Disclosure Statement | Lead paint (pre-1978) | Radon | Well/septic | Flood zone | Shoreland zoning disclosure (critical in coastal Maine).",
      "Agency Disclosure": "Written agency disclosure required; Maine Association of Realtors (MAR) forms.",
      "Special Note": "SHORELAND ZONING: Maine has extensive shoreland zoning regulations affecting properties near water bodies; critical to disclose."
    },
    "landlord_tenant": {
      "Governing Statute": "Maine Landlord-Tenant Law (14 MRSA \u00a7\u00a7 6001-6046)",
      "Security Deposit": "Max: 2 months' rent; return within 30 days (21 days in some circumstances) with itemized statement; must be kept in escrow; interest required for deposits over 6 months.",
      "Entry Notice": "24 hours' notice required for non-emergency; 14 MRSA \u00a7 6025.",
      "Eviction Notices": "Non-payment: 7-day notice | Lease violation: 7-day notice to cure | Month-to-month: 30-day notice (tenants 70+ or disabled: 45-day notice required from landlord).",
      "Eviction Process": "Forcible Entry and Detainer (FED) in District Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct available after notice.",
      "Rent Control": "None statewide; Portland has had some local protections.",
      "Local Overlays": "Portland: local tenant protection ordinances; check Portland Code. Cape Elizabeth, Scarborough may have local additions."
    },
    "property_tax": {
      "Administrator": "Municipal Assessors assess; Municipal Tax Collector collects. Maine Revenue Services oversees.",
      "Assessment Method": "Assessed at 100% of just value (market value); municipalities set own mill rates.",
      "Exemptions": "Homestead: $25,000 exemption on primary residence owned by Oct 1 | Veterans: $6,000 exemption for qualifying veterans | Legally blind: $4,000 | Paraplegic veterans: full exemption.",
      "Appeals Process": "File with Municipal Board of Assessment Review within 60 days of tax commitment; then Superior Court.",
      "Due Dates": "Varies by municipality; typically October and/or April."
    }
  },
  "MD": {
    "name": "Maryland",
    "code": "MD",
    "licensing": {
      "Regulator": "Maryland Real Estate Commission (MREC) | dllr.maryland.gov/license/realestate | Baltimore, MD",
      "License Types": "Salesperson, Associate Broker, Broker",
      "Pre-License Education": "Salesperson: 60 hours approved pre-license education; must be 18+; pass with 70%.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "15-hour post-license required within 1st year.",
      "Continuing Education": "15 hours every 2 years; mandatory topics including ethics, fair housing.",
      "Background Check": "Criminal background check; fingerprinting required.",
      "Reciprocity": "Partial reciprocity only with PA and OK. All other states: must meet full MD requirements; no education waivers for other states."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; among the most comprehensive in the Mid-Atlantic.",
      "Seller Disclosure": "Maryland Residential Property Disclosure and Disclaimer Statement required; seller may choose 'Disclosure' (full disclosure of known defects) or 'Disclaimer' (sold as-is with reduced liability). Buyer has right to void contract within 5 days of receiving disclosure.",
      "Required Disclosures": "Disclosure/Disclaimer Statement | Lead paint (pre-1978 + Maryland's own disclosure for homes built before 1978 \u2014 stricter than federal) | Radon disclosure | Underground storage tanks | HOA disclosure | MDE (Maryland Dept. of Environment) environmental disclosure | Flood zone",
      "Agency Disclosure": "Written agency disclosure required; Maryland law strongly defines agency relationships; MREC forms.",
      "Special Note": "LEAD PAINT: Maryland has stricter lead paint requirements than federal law \u2014 applies to all rentals built before 1978 for children under 6 present.",
      "Transfer Tax": "State transfer tax: 0.5% (buyer/seller) or 0.25% (first-time buyer) | County transfer tax varies (0.5-1.5%) | Recordation tax varies by county."
    },
    "landlord_tenant": {
      "Governing Statute": "Maryland Code, Real Property, \u00a7\u00a7 8-201 et seq. (Security Deposits) + \u00a7 8-401 et seq. (landlord-tenant generally)",
      "Security Deposit": "Max: 2 months' rent; must be deposited in escrow within 30 days; must earn 1.5% interest annually; return within 45 days with itemized statement; failure = up to 3x deposit as penalty.",
      "Entry Notice": "Reasonable notice; typically 24 hours for non-emergency.",
      "Eviction Notices": "Non-payment: 4-day notice | Lease violation: 30-day notice (1st offense), 14-day (if within 12 months) | Month-to-month: 60-day notice (tenant) or 60-day (landlord per 2019 law).",
      "Eviction Process": "Failure to Pay Rent (FTPR) filed in District Court; Breach of Lease (BOL) process separate; expedited for non-payment.",
      "Habitability": "Warranty of habitability; rent escrow remedy available; repair-and-deduct limited.",
      "Rent Control": "Statewide: none. Takoma Park: local rent stabilization. Montgomery County: rent guideline increases. Check local county/city law.",
      "Local Overlays": "Montgomery County, Prince George's County, Baltimore City, Takoma Park all have additional tenant protections. ALWAYS check local law."
    },
    "property_tax": {
      "Administrator": "State Department of Assessments and Taxation (SDAT) assesses; County/City Collector collects. sdat.maryland.gov.",
      "Assessment Method": "Assessed at 100% of full cash value; reassessed every 3 years; phase-in of assessment increases over 3 years.",
      "Exemptions": "Homestead: caps annual assessment increase at 10% (or lower if county sets lower cap) for principal residences; credits vary | Renters Tax Credit for income-qualified | Senior Tax Credit (Homeowners' Property Tax Credit) | Disabled veterans: full exemption on principal residence.",
      "Appeals Process": "File with SDAT within 45 days of assessment notice; Supervisor of Assessments appeal; then Property Tax Assessment Appeals Board (PTAAB); then Maryland Tax Court.",
      "Due Dates": "July 1 (full year or 1st of 2 installments); 2nd installment December 31. Baltimore City: different schedule."
    }
  },
  "MA": {
    "name": "Massachusetts",
    "code": "MA",
    "licensing": {
      "Regulator": "Massachusetts Board of Registration of Real Estate Brokers and Salespersons | mass.gov/orgs/board-of-registration-of-real-estate-brokers-and-salespersons | Boston, MA",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 40 hours approved pre-license education (one of the shortest nationally); pass exam; sponsored by broker.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "12 hours every 2 years; mandatory topics including fair housing.",
      "Background Check": "Criminal background check; CORI check required.",
      "Reciprocity": "Partial reciprocity with: CT, RI, WV, NE, IA, TN, MS, CO, GA, PA, NM (and NY/OK brokers with 2+ years). Terms vary; some must take MA state exam; some may get education waiver. Check Board for current list."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; among the most buyer-protective in the Northeast.",
      "Seller Disclosure": "Massachusetts does not have a mandatory state-wide seller disclosure form. However, sellers must disclose known material defects; Material Fact Disclosure widely practiced.",
      "Required Disclosures": "Lead paint disclosure (mandatory; strict MA Lead Law for properties built before 1978 \u2014 must pass inspection or obtain Letter of Interim Control/Letter of Compliance if children under 6 present) | Smoke/CO detector compliance | Title V (septic) inspection required within 2 years of sale | HOA disclosure | Flood zone | Underground storage tanks | Stigmatized property disclosure.",
      "Agency Disclosure": "Mandatory Licensee-Consumer Relationship Disclosure at first personal meeting; offer of Buyer Agency required.",
      "Lead Paint (Federal)": "Massachusetts Lead Law: stricter than federal; buyer has 10-day inspection period for pre-1978 homes; landlords must disclose to tenants with children under 6 and may be required to delead.",
      "Special Note": "TITLE V: Septic system inspection (Title V) is mandatory before sale; seller typically responsible. This is a Massachusetts-specific requirement unique in its scope."
    },
    "landlord_tenant": {
      "Governing Statute": "Massachusetts General Laws Chapter 186 (Landlord-Tenant); Chapter 239 (Summary Process); Chapter 93A (Consumer Protection)",
      "Security Deposit": "Max: 1 month's rent; must be deposited in separate Massachusetts bank account; must pay 5% annual interest OR actual interest, whichever is greater; provide written receipt with bank name/account; return within 30 days with itemized statement; failure = 3x deposit + attorney fees.",
      "Entry Notice": "Reasonable notice required; typically 24 hours; no specific statute for residential entry.",
      "Eviction Notices": "Non-payment: 14-day Notice to Quit | Lease violation: 30-day Notice to Quit | No-fault (at-will): 30-day notice | After lease term: notice to quit 30 days before end of period.",
      "Eviction Process": "Summary Process filed in Housing Court or District Court; tenant has 7 days after service to respond; answer must include all defenses or waived.",
      "Habitability": "Very strong warranty of habitability; Sanitary Code (105 CMR 410) sets minimum standards; rent withholding available; repair-and-deduct up to 4 months' rent.",
      "Rent Control": "No statewide rent control; Boston/Cambridge/Somerville voted to allow in 2020 but state preemption still being litigated; check current status.",
      "Just Cause Eviction": "No statewide just cause required; some municipalities exploring.",
      "Local Overlays": "Boston, Cambridge, Somerville: active discussions on rent stabilization; check current local law status. Massachusetts is generally tenant-friendly."
    },
    "property_tax": {
      "Administrator": "Local Assessors assess; Tax Collector collects. Massachusetts Department of Revenue (DOR) oversees.",
      "Assessment Method": "100% of full and fair cash value; reassessment annually; triennial certification by DOR.",
      "Exemptions": "Elderly (65+): up to $1,000 reduction | Veterans: various exemptions | Blind: up to $5,000 | Surviving spouse: up to $175 | Circuit Breaker: income-based credit up to $1,500 for seniors 65+.",
      "Appeals Process": "File with Local Board of Assessors by first Monday of February; then Appellate Tax Board (ATB); then Appeals Court.",
      "Due Dates": "Fiscal year July 1-June 30; quarterly bills in many municipalities: Aug 1, Nov 1, Feb 1, May 1."
    }
  },
  "MI": {
    "name": "Michigan",
    "code": "MI",
    "licensing": {
      "Regulator": "Michigan Department of Licensing and Regulatory Affairs (LARA) | michigan.gov/lara | Lansing, MI",
      "License Types": "Salesperson, Associate Broker, Broker",
      "Pre-License Education": "Salesperson: 40 hours approved pre-license education (among the shortest nationally); must be 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "18 hours every 3 years; mandatory topics including legal issues.",
      "Background Check": "Criminal background check; case-by-case review.",
      "Reciprocity": "No formal reciprocity; all applicants must meet full Michigan requirements."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Michigan Seller's Disclosure Statement required for all residential sales; MCL 565.951 et seq. Seller must use official form; buyer has 72 hours to rescind after receipt.",
      "Required Disclosures": "Seller Disclosure Statement | Lead paint (pre-1978) | HOA disclosure | Well/septic (private systems) | Underground storage tanks | Flood zone | Radon (recommended).",
      "Agency Disclosure": "Disclosure of Representation required; Michigan Association of Realtors (MAR) forms widely used."
    },
    "landlord_tenant": {
      "Governing Statute": "Michigan Landlord-Tenant Relationships Act (MCL 554.601 et seq.); Security Deposit Act (MCL 554.601-554.616)",
      "Security Deposit": "Max: 1.5 months' rent; must be deposited in financial institution; send written notice of storage within 14 days; return within 30 days with itemized statement; failure = 2x deposit as penalty.",
      "Entry Notice": "24 hours' notice for non-emergency; MCL 554.636.",
      "Eviction Notices": "Non-payment: 7-day demand for payment | Lease violation: 30-day notice to cure | Month-to-month termination: 30-day notice.",
      "Eviction Process": "Summary Proceedings for possession filed in District Court; tenant has 7 days to respond.",
      "Habitability": "Michigan Landlord-Tenant Relationships Act requires habitable conditions; repair-and-deduct up to $200 or 1 month's rent.",
      "Rent Control": "None statewide; Michigan preempts local rent control (MCL 125.1439).",
      "Local Overlays": "Ann Arbor: some additional tenant protections; check local ordinances."
    },
    "property_tax": {
      "Administrator": "Township/City Assessors assess; Township/City Treasurer collects. Michigan Department of Treasury oversees.",
      "Assessment Method": "Assessed Value (AV) = 50% of true cash value; Taxable Value (TV) capped at lesser of AV or prior TV + 5% (or CPI if lower); 'uncapping' occurs on ownership transfer (Proposal A, 1994).",
      "Exemptions": "Principal Residence Exemption (PRE): exempts primary residence from school operating millage (saves significant taxes); Senior/Disabled: reduced taxes for qualifying income; Veterans: various exemptions; Renaissance Zones.",
      "Appeals Process": "March Board of Review (must protest here first); then Michigan Tax Tribunal; then Court of Appeals.",
      "Due Dates": "Summer taxes: July 1 (due Sept 14, delinquent Dec 1); Winter taxes: Dec 1 (due Feb 14 delinquent)."
    }
  },
  "MN": {
    "name": "Minnesota",
    "code": "MN",
    "licensing": {
      "Regulator": "Minnesota Department of Commerce | mn.gov/commerce | St. Paul, MN",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 90 hours approved pre-license education; pass with 75%; must be 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "30 hours every 2 years; mandatory topics including fair housing, agency.",
      "Background Check": "Criminal background check; character assessment.",
      "Reciprocity": "Partial reciprocity with: CO, IA, NE, ND, SD, OK. Submit application; no additional exam or education required for reciprocal states. Must have active license and pay fees."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Minnesota Seller's Property Disclosure Statement required for residential sales (MN Stat. \u00a7 513.52-513.60).",
      "Required Disclosures": "Seller Disclosure Statement | Lead paint (pre-1978) | Well/septic disclosure (septic compliance required before sale) | HOA disclosure | Underground storage tanks | Radon testing/results disclosure.",
      "Agency Disclosure": "Agency Disclosure required; Minnesota Association of Realtors (MNCAR) forms; Buyer Representation Agreement required for buyer agency.",
      "Special Note": "PRIVATE SEWAGE: Minnesota requires seller to disclose results of septic system inspection; compliance certificate may be required."
    },
    "landlord_tenant": {
      "Governing Statute": "Minnesota Landlord-Tenant Act (MN Stat. Chapter 504B)",
      "Security Deposit": "No statewide cap; must earn 1% simple annual interest; return within 21 days with itemized statement (or 5 days if landlord ends tenancy through no fault of tenant); failure = 2x deposit penalty.",
      "Entry Notice": "Reasonable notice required; 24-hour standard; \u00a7 504B.211.",
      "Eviction Notices": "Non-payment: 14-day notice | Lease violation: 14-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Eviction action (formerly 'unlawful detainer') in Housing Court or District Court.",
      "Habitability": "Covenant of habitability; Rent Escrow action available; repair-and-deduct up to $500.",
      "Rent Control": "No statewide rent control; Minneapolis and St. Paul have adopted rent stabilization ordinances (check current status after 2023 legislation).",
      "Local Overlays": "Minneapolis: Residential Tenant Protections (Chapter 244); St. Paul: Rent Stabilization (Chapter 193D). Both cities have significant additional protections."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. Minnesota Department of Revenue oversees.",
      "Assessment Method": "Residential homestead: 1st $500,000 taxed at 1% of market value; over $500,000 at 1.25%; non-homestead residential: 1.25%; commercial: 1.5% over $150,000.",
      "Exemptions": "Homestead: reduced class rate for primary residence; Targeting Program: refund for large increases; Renters/Homeowners Property Tax Refund: income-based state refund programs.",
      "Appeals Process": "File with County Assessor by appeal deadline; then Minnesota Tax Court.",
      "Due Dates": "1st half: May 15; 2nd half: Oct 15."
    }
  },
  "MS": {
    "name": "Mississippi",
    "code": "MS",
    "licensing": {
      "Regulator": "Mississippi Real Estate Commission (MREC) | mrec.ms.gov | Jackson, MS",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 60 hours approved pre-license education; pass exam; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "30 hours post-license within first year.",
      "Continuing Education": "16 hours every 2 years; includes mandatory topics.",
      "Background Check": "Criminal background check; three MS character references required (own land for 3+ years).",
      "Reciprocity": "Reciprocity with: AL, AR, GA, LA (and others \u2014 check MREC). Submit license history, application, fees; background check; affiliated with MS broker."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state for residential real estate.",
      "Seller Disclosure": "Seller's Disclosure Statement required; Mississippi Association of Realtors (MAR) standard forms.",
      "Required Disclosures": "Seller Disclosure | Lead paint (pre-1978) | HOA disclosure | Flood zone.",
      "Agency Disclosure": "Written agency disclosure required; MAR forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Mississippi Residential Landlord and Tenant Act (MCA \u00a7\u00a7 89-8-1 to 89-8-29); NOTE: applies only to residential tenancies in urban areas (populations over 15,000) OR where landlord owns 4+ units. Common law applies elsewhere.",
      "Security Deposit": "No statewide cap; return within 45 days with itemized statement; failure = deposit as penalty.",
      "Entry Notice": "Reasonable notice; no specific statutory minimum; 24 hours typical.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: 30-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Unlawful entry and detainer in Justice Court.",
      "Habitability": "Warranty of habitability in covered areas; repair-and-deduct available after notice.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly. Limited local tenant protections.",
      "Note": "Mississippi's RLTA has limited geographic applicability. Common law governs many rural tenancies."
    },
    "property_tax": {
      "Administrator": "County Tax Assessors assess; County Tax Collector collects. Mississippi State Tax Commission oversees.",
      "Assessment Method": "Residential/homestead: assessed at 10% of true value; commercial: 15%; agricultural: use value (varies). Annual listing; quadrennial reappraisal.",
      "Exemptions": "Homestead: $300 credit on tax bill; exemption up to $7,500 assessed value for homestead property | Additional exemptions for disabled veterans, blind persons, seniors 65+ with income limits.",
      "Appeals Process": "File with County Board of Supervisors; then Circuit Court.",
      "Due Dates": "February 1 (full payment) or installments by Feb 1 and Aug 1."
    }
  },
  "MO": {
    "name": "Missouri",
    "code": "MO",
    "licensing": {
      "Regulator": "Missouri Real Estate Commission (MREC) | pr.mo.gov/realestate | Jefferson City, MO",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 72 hours approved pre-license education; pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "12 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check; character assessment.",
      "Reciprocity": "Reciprocity with all states: active licensee + 2 years experience in last 30 months; submit application within 6 months of passing exam; license history less than 3 months old. Missouri is considered a TURF state \u2014 agent must physically come to Missouri to participate in transactions.",
      "Note": "TURF state: out-of-state agents cannot conduct RE business remotely in Missouri without MO license."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; seller must disclose known material defects.",
      "Seller Disclosure": "Seller's Disclosure Statement required; Missouri Association of Realtors (MAR) forms.",
      "Required Disclosures": "Seller Disclosure | Lead paint (pre-1978) | HOA disclosure | Flood zone | Underground storage tanks.",
      "Agency Disclosure": "Written agency disclosure required; Dual Agency permitted with consent; MAR forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Missouri Landlord-Tenant Act (RSMo \u00a7\u00a7 441.005-441.880 and \u00a7\u00a7 535.010-535.300)",
      "Security Deposit": "Max: 2 months' rent; return within 30 days with itemized statement; failure = up to 2x deposit as penalty.",
      "Entry Notice": "No specific statutory minimum for non-emergency; 24 hours reasonable; emergency without notice.",
      "Eviction Notices": "Non-payment: Rent demand + 5-day unlawful detainer | Lease violation: 10-day notice to quit.",
      "Eviction Process": "Rent and Possession (unlawful detainer) in Circuit Court; Small Claims for amounts under $5,000.",
      "Habitability": "Warranty of habitability; repair-and-deduct available.",
      "Rent Control": "None statewide; Missouri preempts local rent control (RSMo 441.045).",
      "Local Overlays": "Kansas City, St. Louis: some additional tenant protections. Check local ordinances."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Collector collects. Missouri State Tax Commission oversees.",
      "Assessment Method": "Residential: assessed at 19% of true value; agricultural: 12%; commercial: 32%. Biennial reassessment.",
      "Exemptions": "Senior/Disabled: Homestead Preservation Credit (freezes assessed value increase) for 62+ with income limits | Veterans: 100% disabled veterans full property tax exemption | Low-income renters: credit programs.",
      "Appeals Process": "File with County Board of Equalization by July 10 (1st Monday in July); then State Tax Commission; then Circuit Court.",
      "Due Dates": "December 31 annually."
    }
  },
  "MT": {
    "name": "Montana",
    "code": "MT",
    "licensing": {
      "Regulator": "Montana Board of Realty Regulation | boards.bsd.dli.mt.gov/rre | Helena, MT",
      "License Types": "Salesperson, Broker, Property Manager",
      "Pre-License Education": "Salesperson: 70 hours approved pre-license education; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "12 hours every 2 years.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "Reciprocity agreements with: Alberta (Canada), CO, GA, ID, IA, NE, NM, ND, OR, SD, TN, UT, WY. Submit application for equivalency determination; if approved, may need to complete additional hours or pass Montana exam."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Property Condition Disclosure Statement required for residential sales.",
      "Required Disclosures": "Property Disclosure | Lead paint (pre-1978) | Flood zone | Well/septic | Agricultural/water rights disclosure.",
      "Agency Disclosure": "Written agency disclosure required; Montana Association of Realtors (MAR) forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Montana Residential Landlord and Tenant Act (MCA \u00a7\u00a7 70-24-101 to 70-24-442)",
      "Security Deposit": "No statewide cap; return within 10 days (no deductions) or 30 days (with deductions); itemized statement required; failure = actual damages.",
      "Entry Notice": "24 hours' notice for non-emergency; MCA \u00a7 70-24-312.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: 14-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Unlawful detainer in Justice Court or District Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct after 14-day notice.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly. Minimal local additions beyond state law."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. Montana Department of Revenue oversees.",
      "Assessment Method": "Residential: appraised at market value; taxable at 1.35% of market value for residential; agricultural: productivity-based.",
      "Exemptions": "Homestead exemption: limited; Montana focuses on property tax assistance programs | Elderly Homeowner/Renter Credit: income-based refundable credit | Veterans: disabled vet reductions.",
      "Appeals Process": "File with Montana Tax Appeal Board within 30 days of assessment; then District Court.",
      "Due Dates": "1st half: Nov 30; 2nd half: May 31."
    }
  },
  "NE": {
    "name": "Nebraska",
    "code": "NE",
    "licensing": {
      "Regulator": "Nebraska Real Estate Commission (NREC) | realestate.nebraska.gov | Lincoln, NE",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 60 hours approved pre-license education; pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "18 hours every 2 years; includes mandatory CE topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "No formal reciprocity. Non-resident licensees must complete 3-hour course specific to Nebraska Real Estate License Act; submit license history; submit application; additional Nebraska-specific requirements. TURF state.",
      "Note": "Nebraska is a TURF state \u2014 out-of-state agents cannot operate in Nebraska without a Nebraska license."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Seller Property Condition Disclosure Statement required (NRS 76-2,120).",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | Well/septic | HOA disclosure | Flood zone.",
      "Agency Disclosure": "Written agency disclosure required; Nebraska REALTORS Association forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Nebraska Landlord-Tenant Act (NRS \u00a7\u00a7 76-1401 to 76-1449)",
      "Security Deposit": "Max: 1 month's rent (plus 1/4 month for pets); return within 14 days with itemized statement; failure = actual damages.",
      "Entry Notice": "1 day's notice for non-emergency; NRS \u00a7 76-1423.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: 14-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Forcible entry and detainer in County or District Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct available.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Omaha, Lincoln: check local ordinances for additions."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. Nebraska Dept. of Revenue oversees.",
      "Assessment Method": "Assessed at actual value (market value); agricultural land at use value. Annual assessment.",
      "Exemptions": "Homestead: income-based exemption up to $40,000+ for elderly/disabled; Veterans: 100% disabled vet exemption on homestead; Agricultural/horticultural land: special valuation.",
      "Appeals Process": "File with County Board of Equalization by July 31; then Nebraska Tax Equalization and Review Commission (TERC).",
      "Due Dates": "1st half: May 1; 2nd half: Sept 1."
    }
  },
  "NV": {
    "name": "Nevada",
    "code": "NV",
    "licensing": {
      "Regulator": "Nevada Real Estate Division (NRED) | red.nv.gov | Las Vegas & Carson City offices",
      "License Types": "Salesperson, Broker-Salesperson, Broker",
      "Pre-License Education": "Salesperson: 120 hours approved pre-license (45 hrs Principles, 45 hrs Law, 18 hrs Agency/Ethics, 12 hrs Nevada-specific); pass with 75%. Apply within 1 year of passing.",
      "Exam": "PSI Exams; national + state sections; $100 exam fee.",
      "Post-License": "Salesperson: 30 hours first renewal (18 hrs must be live instruction). Subsequent renewals: 36 hours every 2 years.",
      "Continuing Education": "36 hours every 2 years (after post-license); 3 hrs each Agency, Ethics, Law; 6 hrs Contracts; 18 hrs general.",
      "Background Check": "Fingerprinting required; criminal background check; E&O insurance required.",
      "Reciprocity": "Salesperson reciprocity with: AZ, CO, DE, ID, IL, IN, IA, KY, LA, MN, OK, SC, TX, UT, WA, WV. Must pass NV state exam; submit license history; 18-hr NV law course. Broker reciprocity with additional states."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Real Estate Disclosure Form required; NRS 113.130. Seller must disclose known material defects.",
      "Required Disclosures": "Disclosure Form | Lead paint (pre-1978) | HOA disclosure (NRS 116 \u2014 HOA disclosures very detailed in Nevada) | CC&Rs disclosure | Flood zone | Underground storage tanks.",
      "Agency Disclosure": "Duties Owed by a Nevada Licensee form required; agency disclosure mandatory.",
      "Special Note": "HOA: Nevada has extensive HOA laws (NRS Chapter 116); disclosure requirements for common interest communities are detailed and complex."
    },
    "landlord_tenant": {
      "Governing Statute": "Nevada Landlord and Tenant Act (NRS Chapter 118A)",
      "Security Deposit": "Max: 3 months' rent; return within 30 days with itemized statement; failure = actual damages + court costs.",
      "Entry Notice": "24 hours' notice for non-emergency; NRS \u00a7 118A.330; emergency without notice.",
      "Eviction Notices": "Non-payment: 7-day notice | Lease violation: 5-day notice to cure | No-cause: 30-day notice (less than 1 year tenancy) or 60-day notice (1+ year tenancy).",
      "Eviction Process": "Summary Eviction process in Justice Court (fastest in U.S. \u2014 can be completed in 7-10 days); formal eviction process also available.",
      "Habitability": "Warranty of habitability; repair-and-deduct after 14-day notice; up to $100 or 1 month's rent.",
      "Rent Control": "None statewide; Nevada prohibits local rent control (NRS 118B.155 for mobile homes).",
      "Local Overlays": "Las Vegas/Clark County, Reno/Washoe County: check for local tenant protections."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. Nevada Department of Taxation oversees.",
      "Assessment Method": "Assessed at 35% of taxable value; taxable value = replacement cost minus depreciation (not market value); cap on increase: 3% residential / 8% non-residential per year.",
      "Exemptions": "Veterans: $2,000-$3,000 reduction in taxable value; Nevada Veterans Exemption | Senior Citizens (62+): exemption programs based on income | Blind/disabled: additional exemptions.",
      "Appeals Process": "File with County Clerk/Treasurer by January 15 (or within 10 days of assessment notice); County Board of Equalization hearing; then State Board of Equalization.",
      "Due Dates": "Quarterly: Aug 17, Oct 4, Jan 3, March 4 (varies slightly by year)."
    }
  },
  "NH": {
    "name": "New Hampshire",
    "code": "NH",
    "licensing": {
      "Regulator": "New Hampshire Real Estate Commission (NHREC) | nhrec.net | Concord, NH",
      "License Types": "Salesperson, Associate Broker, Broker",
      "Pre-License Education": "Salesperson: 40 hours approved pre-license education; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "15 hours post-license within first year.",
      "Continuing Education": "15 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "Salesperson: partial reciprocity with MA, ME, VT, and GA. Must show proof of 6 real estate transactions with 50% involvement; complete 60-hr pre-license OR show reciprocity equivalency. Must pass NH state exam. Email nhrec@nhrec.net to inquire."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Property Disclosure Form required; covers known material defects.",
      "Required Disclosures": "Property Disclosure | Lead paint (pre-1978) | Radon | HOA disclosure | Well/septic | Flood zone.",
      "Agency Disclosure": "Written agency disclosure required; NH Association of Realtors forms."
    },
    "landlord_tenant": {
      "Governing Statute": "New Hampshire Landlord-Tenant Act (RSA Chapter 540; RSA Chapter 540-A)",
      "Security Deposit": "Max: 1 month's rent or $100, whichever is greater; return within 30 days with itemized statement; interest required if held over 1 year; failure = actual damages + $1,000 penalty.",
      "Entry Notice": "Adequate notice required; typically 24 hours; RSA 540-A:3.",
      "Eviction Notices": "Non-payment: 7-day demand | Lease violation: 30-day notice | No-cause: 30-day notice for tenants under 1 year; 60-day for 1+ year.",
      "Eviction Process": "Eviction Proceeding in Circuit Court (District Division).",
      "Habitability": "Warranty of habitability; repair-and-deduct available after notice.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly; minimal local additions."
    },
    "property_tax": {
      "Administrator": "Municipal Assessors assess; Municipal Tax Collector collects. NH Department of Revenue Administration (DRA) oversees.",
      "Assessment Method": "Assessed at full value (market value); municipalities set own rates; no state income or sales tax \u2014 heavy reliance on property tax.",
      "Exemptions": "Elderly (65+): income/asset-based exemption varies by municipality | Veterans: $500-4,000 credit | Blind: full exemption of primary residence | Disabled: various programs.",
      "Appeals Process": "File with Board of Tax and Land Appeals (BTLA) within 8 months of final notice; or Abatement to Selectmen by March 1.",
      "Due Dates": "Semi-annual: July 1 and December 1 (or quarterly in some municipalities).",
      "Note": "New Hampshire has NO state income tax and NO state sales tax; property tax is primary funding mechanism \u2014 rates are among the highest in the U.S."
    }
  },
  "NJ": {
    "name": "New Jersey",
    "code": "NJ",
    "licensing": {
      "Regulator": "New Jersey Real Estate Commission (NJREC) | njconsumeraffairs.gov/rec | Trenton, NJ",
      "License Types": "Salesperson, Broker-Salesperson, Broker",
      "Pre-License Education": "Salesperson: 75 hours approved pre-license education; pass with 70%; must be 18+ with HS diploma or GED.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "12 hours every 2 years; mandatory topics including fair housing.",
      "Background Check": "Criminal background check; fingerprinting required.",
      "Reciprocity": "NO reciprocity with any state; all applicants must meet full NJ requirements. TURF state.",
      "Note": "New Jersey is a TURF state \u2014 out-of-state agents cannot conduct real estate business in NJ without NJ license."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; NJ has unique attorney review requirement.",
      "Seller Disclosure": "Seller's Property Condition Disclosure Statement required.",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | Smoke/CO detector | Underground storage tanks | Industrial site disclosure (ISRA \u2014 Industrial Site Recovery Act if applicable) | Flood zone | HOA disclosure.",
      "Agency Disclosure": "Consumer Information Statement (CIS) required at first meeting with potential buyer/seller.",
      "Special Note": "ATTORNEY REVIEW: New Jersey contracts must include an 'Attorney Review' clause giving all parties 3 business days to have an attorney review and reject the contract. This is standard and effectively required in NJ."
    },
    "landlord_tenant": {
      "Governing Statute": "New Jersey Landlord-Tenant Law (NJSA 46:8-1 et seq.); Anti-Eviction Act (NJSA 2A:18-61.1 et seq.)",
      "Security Deposit": "Max: 1.5 months' rent; must earn interest (2 options: interest-bearing account OR invest in money market); pay interest annually; return within 30 days (or 5 days if fire/flood/condemnation) with itemized statement; failure = up to 2x deposit.",
      "Entry Notice": "Reasonable notice for non-emergency; 24-hour standard in practice.",
      "Eviction Notices": "Non-payment: 1 month demand for rent | Lease violation: 3-month notice (hardship) | Month-to-month no-cause: depends on tenancy length.",
      "Eviction Process": "Dispossess action in Special Civil Part of Superior Court.",
      "Habitability": "Warranty of habitability; rent abatement remedy; repair-and-deduct available.",
      "Rent Control": "No statewide rent control; over 100 municipalities have rent control ordinances (Newark, Jersey City, Hoboken, etc.). ALWAYS check local law.",
      "Just Cause Eviction": "Anti-Eviction Act: landlord must have just cause to evict in virtually all circumstances \u2014 among the strongest tenant protections in the U.S.",
      "Local Overlays": "Jersey City, Newark, Hoboken, Trenton, Camden and many others have rent control. NJSA 2A:18-61.1 requires just cause for eviction in most cases."
    },
    "property_tax": {
      "Administrator": "Municipal Tax Assessors assess; Municipal Tax Collector collects. NJ Division of Taxation oversees.",
      "Assessment Method": "Assessed at percentage of true market value (varies by municipality; NJ law requires 100% but municipalities vary); state revaluation required periodically.",
      "Exemptions": "Senior Citizen: $250 deduction | Veteran: $250 deduction | Disabled Veteran: full exemption | Homestead Benefit Program: income-based rebate for homeowners | ANCHOR Program (2022): property tax relief for homeowners and renters with income under $150,000/$250,000.",
      "Appeals Process": "File with County Board of Taxation by April 1 (or May 1 for most properties); then NJ Tax Court.",
      "Due Dates": "Quarterly: Feb 1, May 1, Aug 1, Nov 1.",
      "Note": "New Jersey has the highest property tax rates in the U.S. (average effective rate ~2.2%)."
    }
  },
  "NM": {
    "name": "New Mexico",
    "code": "NM",
    "licensing": {
      "Regulator": "New Mexico Real Estate Commission (NMREC) | nmrec.state.nm.us | Santa Fe, NM",
      "License Types": "Salesperson, Associate Broker, Qualifying Broker",
      "Pre-License Education": "Salesperson: 90 hours approved pre-license; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "36 hours every 3 years; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "Reciprocity with: GA, LA, MA. Submit license history; pay fees; contact nmrec@state.nm.us."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; New Mexico is a community property state.",
      "Seller Disclosure": "Real Estate Disclosure Statement required for residential sales.",
      "Required Disclosures": "Disclosure Statement | Lead paint (pre-1978) | Community property disclosure | HOA/POA disclosure | Flood zone | Well/septic | Acequia (irrigation ditch) water rights \u2014 unique to NM.",
      "Agency Disclosure": "Written agency disclosure required; New Mexico Association of Realtors (NMAR) forms.",
      "Special Note": "COMMUNITY PROPERTY: New Mexico is a community property state. Property acquired during marriage is jointly owned. Full title work and disclosure of marital status required."
    },
    "landlord_tenant": {
      "Governing Statute": "New Mexico Uniform Owner-Resident Relations Act (NMSA \u00a7\u00a7 47-8-1 to 47-8-51)",
      "Security Deposit": "Max: 1 month's rent (month-to-month) or as agreed in term lease; return within 30 days with itemized statement; failure = actual damages.",
      "Entry Notice": "24 hours' notice for non-emergency; NMSA \u00a7 47-8-24.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: 7-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Petition for Restitution in Magistrate or District Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct after 7-day notice; up to $100 per month.",
      "Rent Control": "None statewide; Santa Fe has explored but no current rent control law.",
      "Local Overlays": "Albuquerque, Santa Fe: check local ordinances."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. NM Taxation and Revenue Dept. oversees.",
      "Assessment Method": "Assessed at 1/3 of market value (33.33%); county mill rates applied; residential cap: annual increases limited.",
      "Exemptions": "Head of Family: $2,000 reduction in taxable value | Veterans: $4,000 reduction (NM residents who served) | 100% disabled veterans: full exemption | Low-income 65+: additional exemptions.",
      "Appeals Process": "Protest with County Assessor; then County Valuation Protests Board; then District Court.",
      "Due Dates": "Full payment by Nov 10, or 2 installments: Nov 10 and April 10."
    }
  },
  "NY": {
    "name": "New York",
    "code": "NY",
    "licensing": {
      "Regulator": "New York Department of State (DOS), Division of Licensing Services | dos.ny.gov | Albany, NY",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 77 hours approved qualifying education; pass with 70%; 18+; sponsored by broker. Broker: 152 hours + 2 years experience.",
      "Exam": "NY DOS administers; eAccessNY system; $15 exam fee; pass within 2 years of completing education.",
      "Continuing Education": "22.5 hours every 2 years; includes mandatory topics: ethical business practices, agency, disclosure, fair housing, cultural competency.",
      "Background Check": "Criminal background check; fingerprinting via IdentoGo; case-by-case character review.",
      "Reciprocity": "NY now has NO reciprocity with any state (changed in 2023 due to increased hour requirements). All applicants must meet full NY requirements."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; unique contract practices (attorney-driven).",
      "Seller Disclosure": "Property Condition Disclosure Act (PCDA): seller must provide disclosure form or give buyer $500 credit at closing (effective Jan 1, 2024: buyer credit option eliminated; disclosure now mandatory). Form covers all known defects.",
      "Required Disclosures": "Property Condition Disclosure Form (mandatory as of 1/1/2024) | Lead paint (pre-1978) | HOA/Condo disclosure | Radon | Underground storage tanks | Flood zone | Zoning compliance.",
      "Agency Disclosure": "Agency Disclosure form required at first substantive contact.",
      "Special Note": "ATTORNEY-DRIVEN: NY real estate transactions are almost universally attorney-driven; contract is typically prepared by attorney (not agent); contract signed only after attorney review. Binder/accepted offer is non-binding until attorney contract signed."
    },
    "landlord_tenant": {
      "Governing Statute": "New York Real Property Law; Real Property Actions and Proceedings Law (RPAPL); Rent Stabilization Law (NYC); Housing Stability and Tenant Protection Act (HSTPA 2019)",
      "Security Deposit": "Max: 1 month's rent (HSTPA 2019, effective statewide for most residential); interest required in NYC buildings with 6+ units; return within 14 days with itemized statement; failure = up to 2x deposit.",
      "Entry Notice": "Reasonable notice; typically 24 hours; RPAPL \u00a7 711.",
      "Eviction Notices": "Non-payment: 14-day rent demand | Lease violation: 10-day notice to cure | Month-to-month/no-cause: 30-day notice (under 1 year), 60-day (1-2 years), 90-day (2+ years).",
      "Eviction Process": "Holdover or Non-Payment Proceeding in Housing Court (NYC) or Town/Village Justice Court (upstate).",
      "Habitability": "Warranty of habitability (RPL \u00a7 235-b); rent withholding remedy.",
      "Rent Control": "NYC: Rent Stabilization (RS) covers most apartments; Rent Control (RC) for pre-1969 buildings; HSTPA 2019 significantly expanded protections. Check NYC Rent Guidelines Board annually. Upstate: Albany, Kingston have implemented rent stabilization.",
      "Just Cause Eviction": "HSTPA 2019: just cause eviction protections expanded statewide for rent-stabilized tenants.",
      "Local Overlays": "NEW YORK CITY: Among the most complex tenant protection systems in the U.S. \u2014 Rent Stabilization, preferential rent rules, vacancy/succession rights, preferential rent, HSTPA protections. Albany, Kingston: local rent stabilization. ALWAYS check local law."
    },
    "property_tax": {
      "Administrator": "City/Town/Village Assessors assess; locality collects. NY State Office of Real Property Tax Services (ORPTS) oversees.",
      "Assessment Method": "Assessment ratios vary by locality; NYC: Class 1 (1-3 family): assessed at 6% of value; Class 2 (condos/apartments): 45%; Class 4 (commercial): 45%. Capped increase system for Class 1.",
      "Exemptions": "STAR (School Tax Relief): Basic ($30,000 off assessed value) or Enhanced (62+ with income limits, ~$68,700 off assessed value) | Veterans: $12,000-$15,000 exemption | Senior Low Income: additional reductions | NYC: various co-op/condo abatements.",
      "Appeals Process": "File with Local Board of Assessment Review (BAR) by Grievance Day (4th Tuesday in May in most localities); then Small Claims Assessment Review (SCAR) for residential; then Supreme Court.",
      "Due Dates": "NYC: quarterly July 1, Oct 1, Jan 1, April 1. Upstate: varies by municipality."
    }
  },
  "NC": {
    "name": "North Carolina",
    "code": "NC",
    "licensing": {
      "Regulator": "North Carolina Real Estate Commission (NCREC) | ncrec.gov | Raleigh, NC",
      "License Types": "Provisional Broker (entry-level), Broker, Broker-in-Charge (BIC)",
      "Pre-License Education": "Provisional Broker: 75 hours approved pre-license education; pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "90 hours post-license within 18 months (3 courses of 30 hrs each) to remove Provisional status.",
      "Continuing Education": "8 hours annually; 4 hours mandatory (General Update or BIC Update); 4 hours elective.",
      "Background Check": "Criminal background check; fingerprinting via IdentoGo.",
      "Reciprocity": "Out-of-state licensees: no pre-license coursework required; no national exam required; must pass NC state exam only. Must have active license in good standing; submit license history from all states."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; NC uses standardized NCREC-approved forms.",
      "Seller Disclosure": "Residential Property and Owners' Association Disclosure Statement required (NCGS 47E); seller must disclose all known material defects; buyer has right to terminate within 3 days of receipt.",
      "Required Disclosures": "Residential Property Disclosure Statement | Lead paint (pre-1978) | HOA/POA disclosure | Flood zone | Underground storage tanks | Mineral/oil/gas rights disclosure.",
      "Agency Disclosure": "Working with Real Estate Agents Brochure required at first substantial contact; NCREC Working With Real Estate Agents (WWREA) form.",
      "Standard Forms": "NCREC-approved contract forms mandatory; Offer to Purchase and Contract (Form 2-T) standard."
    },
    "landlord_tenant": {
      "Governing Statute": "North Carolina Residential Rental Agreements Act (NCGS Chapter 42)",
      "Security Deposit": "Max: 2 months' rent (monthly lease) or 1.5 months (weekly/bi-weekly); must be deposited in trust account or bonded; return within 30 days with itemized statement (60 days if damage determination pending); failure = forfeit right to deductions.",
      "Entry Notice": "Reasonable notice; no specific statute; 24 hours standard.",
      "Eviction Notices": "Non-payment: 10-day notice (pay or vacate) | Lease violation: 30-day notice (1st offense) or immediate (2nd offense same issue) | Month-to-month: 7-day notice.",
      "Eviction Process": "Summary Ejectment in Small Claims Court (Magistrate); tenant has 10 days to appeal to District Court.",
      "Habitability": "Landlord must maintain fit/habitable premises; repair within reasonable time; tenant remedies include rent reduction.",
      "Rent Control": "None statewide; NC prohibits local rent control (NCGS 42-14.1).",
      "Local Overlays": "Generally landlord-friendly. Chapel Hill, Carrboro: some local tenant protections. Check local ordinances."
    },
    "property_tax": {
      "Administrator": "County Tax Assessors assess; County Tax Collector collects. NC Department of Revenue oversees.",
      "Assessment Method": "Assessed at 100% of appraised value; reappraisal required at least every 8 years (many counties do every 4-5 years).",
      "Exemptions": "Homestead: low-income seniors/disabled \u2014 exclusion of $25,000 or 50% of appraised value (whichever is greater) | Disabled veterans: up to $45,000 exclusion | Circuit Breaker: income-based property tax freeze for seniors/disabled.",
      "Appeals Process": "File with County Board of Equalization and Review; then Property Tax Commission; then NC Court of Appeals.",
      "Due Dates": "Sept 1 (bill sent); delinquent Jan 5 of following year."
    }
  },
  "ND": {
    "name": "North Dakota",
    "code": "ND",
    "licensing": {
      "Regulator": "North Dakota Real Estate Commission (NDREC) | realestate.nd.gov | Bismarck, ND",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 90 hours approved pre-license education (45-hr option + 15-hr post-license, or 90-hr course); 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "15 hours post-license within first year (if took 45-hr pre-license); annual 9-hr CE thereafter.",
      "Continuing Education": "9 hours annually; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "Partial reciprocity with: GA, IA, MN. Must be ND resident; active license in good standing; education requirements waived; must pass ND exam."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Seller's Property Disclosure Statement required; NDREC provides form.",
      "Required Disclosures": "Property Disclosure | Lead paint (pre-1978) | Flood zone | Well/septic | Agricultural land/water rights.",
      "Agency Disclosure": "Written agency disclosure required; North Dakota Association of Realtors (NDAR) forms."
    },
    "landlord_tenant": {
      "Governing Statute": "North Dakota Landlord-Tenant Act (NDCC Chapter 47-16)",
      "Security Deposit": "Max: 1 month's rent (2 months if pet); must earn interest (NDCC \u00a7 47-16-07.1); return within 30 days with itemized statement.",
      "Entry Notice": "Reasonable notice; no specific statute; 24 hours standard.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: 3-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Eviction proceeding in District Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct available.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly. Fargo, Bismarck: minimal local additions."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. ND State Tax Department oversees.",
      "Assessment Method": "Assessed at 50% of true and full value; annual assessment.",
      "Exemptions": "Homestead credit: primary residence exemption; veterans' homestead credit | Disabled veterans: additional exemption | Agricultural land: productivity-based assessment.",
      "Appeals Process": "File with County Board of Equalization; then State Board of Equalization; then District Court.",
      "Due Dates": "1st half: Feb 15; 2nd half: Oct 15."
    }
  },
  "OH": {
    "name": "Ohio",
    "code": "OH",
    "licensing": {
      "Regulator": "Ohio Division of Real Estate and Professional Licensing (ODRE) | com.ohio.gov/real-estate | Columbus, OH",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 120 hours (4 courses: RE Principles & Practices 40 hrs, RE Law 40 hrs, RE Finance 20 hrs, RE Appraisal 20 hrs); pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "20 hours post-license within first year.",
      "Continuing Education": "30 hours every 3 years; mandatory topics including civil rights law.",
      "Background Check": "Criminal background check; character review.",
      "Reciprocity": "Partial reciprocity with: AR, CT, KY, MS, NE, OK, WV, WY. Pass OH state exam; submit license history; background check; affiliated with OH broker."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Residential Property Disclosure Form required (ORC \u00a7 5302.30); covers known defects; buyer has 3 days to rescind after receipt.",
      "Required Disclosures": "Residential Disclosure Form | Lead paint (pre-1978) | HOA disclosure | Underground storage tanks | Radon | Flood zone.",
      "Agency Disclosure": "Consumer Guide to Agency Relationships required; Ohio Association of Realtors forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Ohio Landlord-Tenant Act (ORC \u00a7\u00a7 5321.01-5321.19)",
      "Security Deposit": "No statewide cap; if over $50 and held over 6 months: must earn 5% annual interest; return within 30 days with itemized statement; failure = forfeit right to retain deposit; up to 2x wrongfully withheld amount.",
      "Entry Notice": "24 hours' notice for non-emergency; ORC \u00a7 5321.05.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: varies | Month-to-month: 30-day notice.",
      "Eviction Process": "Forcible Entry and Detainer in Municipal or County Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct available; rent escrow available.",
      "Rent Control": "None statewide; Ohio prohibits local rent control (ORC \u00a7 4703.04).",
      "Local Overlays": "Generally landlord-friendly. Columbus, Cleveland, Cincinnati: check local codes."
    },
    "property_tax": {
      "Administrator": "County Auditors assess; County Treasurer collects. Ohio Department of Taxation oversees.",
      "Assessment Method": "Assessed at 35% of true value (market value); triennial reappraisal required; annual adjustment.",
      "Exemptions": "Homestead: income-based reduction for seniors 65+ and disabled; reduces taxable value | Owner-occupancy credit: 2.5% reduction for principal residence | Veterans: disabled vet additional credits.",
      "Appeals Process": "File with County Board of Revision by April 1; then Board of Tax Appeals (BTA); then Ohio Supreme Court.",
      "Due Dates": "1st half: Feb 14 (or last day of Feb); 2nd half: July 31."
    }
  },
  "OK": {
    "name": "Oklahoma",
    "code": "OK",
    "licensing": {
      "Regulator": "Oklahoma Real Estate Commission (OREC) | ok.gov/orec | Oklahoma City, OK",
      "License Types": "Sales Associate, Broker Associate, Broker",
      "Pre-License Education": "Sales Associate: 90 hours approved pre-license education; pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "21 hours every 3 years; mandatory topics.",
      "Background Check": "Criminal background check; fingerprinting.",
      "Reciprocity": "Reciprocity with: AL, AR, IA, LA, MD, NE, ND, SD. No additional training or exam required; submit license history, application, fees, background check.",
      "Note": "Out-of-state brokers may participate in cooperative arrangements with OK brokers conducting business in their respective states."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Residential Property Condition Disclosure required (60 OS \u00a7 833).",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | HOA disclosure | Flood zone | Well/septic.",
      "Agency Disclosure": "Broker Relationships Act governs; written disclosure required; OREC forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Oklahoma Residential Landlord and Tenant Act (41 OS \u00a7\u00a7 101-135)",
      "Security Deposit": "No statewide cap; return within 45 days of written demand; tenant must make written demand within 6 months or deposit becomes landlord's property.",
      "Entry Notice": "1 day's notice for non-emergency; 41 OS \u00a7 128.",
      "Eviction Notices": "Non-payment: 5-day notice | Lease violation: 10-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Forcible Entry and Detainer in District Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct available after notice.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly. Oklahoma City, Tulsa: check local codes."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. Oklahoma Tax Commission oversees.",
      "Assessment Method": "Assessed at 11% of fair cash value; annual cap: 5% increase per year for homestead | reappraisal annually by assessors.",
      "Exemptions": "Homestead: $1,000 assessed value reduction | Senior Valuation Freeze: income-qualified seniors 65+ \u2014 assessment frozen at year of eligibility | Veterans: disabled vet full exemption on homestead.",
      "Appeals Process": "File with County Board of Equalization by last Monday in April; then District Court.",
      "Due Dates": "Dec 31 (full) or 2 installments: Dec 31 and March 31."
    }
  },
  "OR": {
    "name": "Oregon",
    "code": "OR",
    "licensing": {
      "Regulator": "Oregon Real Estate Agency (OREA) | oregon.gov/rea | Salem, OR",
      "License Types": "Broker (entry-level), Principal Broker (supervises brokers)",
      "Pre-License Education": "Broker: 150 hours approved pre-license education; pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "30 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check; fingerprinting.",
      "Reciprocity": "Partial reciprocity with: AL, GA, NE, SD. Contact OREA for requirements. Military spouses/domestic partners: temporary authorization available."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Seller's Property Disclosure Statement required (ORS 105.464-105.490); all known defects.",
      "Required Disclosures": "Seller Disclosure | Lead paint (pre-1978) | HOA disclosure | Flood zone | Well/septic | Wildfire risk disclosure (ORS 477.490).",
      "Agency Disclosure": "Initial Agency Disclosure Pamphlet required; Oregon Association of Realtors (OAR) forms.",
      "Special Note": "WILDFIRE RISK: Oregon requires disclosure of wildfire risk for properties in designated high-risk areas (ORS 477.490), effective 2022."
    },
    "landlord_tenant": {
      "Governing Statute": "Oregon Residential Landlord and Tenant Act (ORS Chapter 90)",
      "Security Deposit": "No statewide cap; return within 31 days with itemized statement; failure = 2x wrongfully withheld amount.",
      "Entry Notice": "24 hours' notice for non-emergency; ORS \u00a7 90.322; emergency without notice.",
      "Eviction Notices": "Non-payment: 72-hour or 144-hour notice (depending on tenancy length/county) | Lease violation: 14-day notice to cure | No-cause: 30-day notice (under 1 year) or 90-day notice (1+ year).",
      "Eviction Process": "Court filing required; no self-help eviction",
      "Habitability": "",
      "Rent Control": "Oregon was the FIRST state to pass statewide rent control (SB 608, 2019): rent increases capped at 7% + CPI annually (not to exceed 10% total); does NOT apply to units built in last 15 years.",
      "Just Cause Eviction": "Oregon Senate Bill 608 (2019): Just Cause Eviction required after first year of tenancy; no-cause evictions prohibited during fixed-term lease.",
      "Local Overlays": "Portland: additional tenant protections (90-day no-cause, relocation assistance); Eugene, Bend: check local ordinances."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Tax Collectors collect. Oregon Department of Revenue oversees.",
      "Assessment Method": "Maximum Assessed Value (MAV) concept: initial MAV set at 100% of RMV; annual increase capped at 3% (Measure 50, 1997). MAV is often significantly below RMV.",
      "Exemptions": "Homestead: no separate exemption, but MAV cap provides protection; Senior/Disabled: deferral program (defer taxes until property sale) | Veterans: $18,837 off MAV for qualifying veterans.",
      "Appeals Process": "File with Magistrate Division of Oregon Tax Court by December 31; then Regular Division; then Oregon Supreme Court.",
      "Due Dates": "Nov 15 (full) or 3 installments: Nov 15, Feb 15, May 15."
    }
  },
  "PA": {
    "name": "Pennsylvania",
    "code": "PA",
    "licensing": {
      "Regulator": "Pennsylvania Real Estate Commission (PREC) | dos.pa.gov/professional-licensing | Harrisburg, PA",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 75 hours approved pre-license education; pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "14 hours every 2 years; mandatory topics including fair housing, ethics.",
      "Background Check": "Criminal background check; PA State Police report required.",
      "Reciprocity": "Reciprocity available for licensees from: AR, GA, LA, MD, MA, NY. Submit license history from each state; pass PA state exam; background check; affiliated broker.",
      "Note": "Pennsylvania is generally considered a TURF state for non-reciprocal states."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Seller's Property Disclosure Statement required (68 PS \u00a7 7301 et seq.); standard PA form.",
      "Required Disclosures": "Seller Disclosure | Lead paint (pre-1978) | HOA disclosure | Underground storage tanks | Flood zone | Radon | Sewage compliance.",
      "Agency Disclosure": "Consumer Notice required at first substantive contact; PREC form.",
      "Special Note": "ATTORNEY REVIEW: While not mandatory statewide, attorneys commonly review real estate contracts, especially in Philadelphia metro area."
    },
    "landlord_tenant": {
      "Governing Statute": "Pennsylvania Landlord and Tenant Act of 1951 (68 PS \u00a7\u00a7 250.101-250.602)",
      "Security Deposit": "Max: 2 months' rent 1st year, 1 month thereafter; if held over 2 years: must earn interest; return within 30 days with itemized statement; failure = double deposit + attorney fees.",
      "Entry Notice": "Reasonable notice for non-emergency; no specific statute; 24 hours typical.",
      "Eviction Notices": "Non-payment: 10-day notice | Lease violation: 15-day notice to quit (1st offense) | Month-to-month: 15-day notice.",
      "Eviction Process": "Landlord files complaint with Magisterial District Judge (MDJ); tenant has 10 days to appeal to Court of Common Pleas.",
      "Habitability": "Warranty of habitability (implied); Philadelphia and Pittsburgh have specific habitability codes.",
      "Rent Control": "None statewide; PA preempts local rent control.",
      "Local Overlays": "Philadelphia: Fair Housing protections, just cause eviction in some circumstances; Pittsburgh: additional tenant protections. Always check local codes."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; Township/City/School District collect. PA Dept. of Community & Economic Development oversees.",
      "Assessment Method": "Assessed at Common Level Ratio (CLR) \u2014 percentage of market value varies by county (some counties 100%, others much lower). Reassessment infrequent in some counties.",
      "Exemptions": "Homestead: $18,000 reduction in assessed value for principal residence | Farmstead: same for agricultural buildings | Senior: Act 1 Property Tax/Rent Rebate: up to $1,000 for seniors/disabled with income limits | Veterans: 100% disabled vet full exemption on homestead.",
      "Appeals Process": "File with Board of Assessment Appeals by deadline (varies by county, usually within 30-90 days of assessment); then Court of Common Pleas.",
      "Due Dates": "Varies by county and school district; typically March-April for discount, face value through June, penalties after."
    }
  },
  "RI": {
    "name": "Rhode Island",
    "code": "RI",
    "licensing": {
      "Regulator": "Rhode Island Department of Business Regulation (DBR), Real Estate Section | dbr.ri.gov | Providence, RI",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 45 hours approved pre-license education; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "24 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "Partial reciprocity with: CT, MA, and several others. Submit license history; pay fees; pass RI state exam if required. Contact DBR for current list."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Residential Real Property Disclosure Form required; RIGL \u00a7 5-20.8.",
      "Required Disclosures": "Property Disclosure | Lead paint (pre-1978) | HOA disclosure | Flood zone | Well/septic.",
      "Agency Disclosure": "Written agency disclosure required; RI Association of Realtors forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Rhode Island Residential Landlord and Tenant Act (RIGL \u00a7\u00a7 34-18-1 to 34-18-57)",
      "Security Deposit": "Max: 1 month's rent; return within 20 days (with no deductions) or 30 days (with itemized deductions) of lease end; failure = double deposit + attorney fees.",
      "Entry Notice": "2 days' notice for non-emergency; RIGL \u00a7 34-18-26.",
      "Eviction Notices": "Non-payment: 5-day notice | Lease violation: 20-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Eviction (failure to comply) in District Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct available.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Providence, Pawtucket: check local ordinances."
    },
    "property_tax": {
      "Administrator": "Municipal Tax Assessors assess; Municipal Tax Collector collects. RI Division of Municipal Finance oversees.",
      "Assessment Method": "Assessed at full fair market value; municipalities set own rates; revaluation required every 3 years.",
      "Exemptions": "Homeowner: exemptions vary by municipality | Veterans: various exemptions | Elderly/disabled: exemption programs | Providence: tiered residential rate.",
      "Appeals Process": "File with Municipal Board of Tax Assessment Review; then Superior Court.",
      "Due Dates": "Varies by municipality; typically quarterly or annual."
    }
  },
  "SC": {
    "name": "South Carolina",
    "code": "SC",
    "licensing": {
      "Regulator": "South Carolina Real Estate Commission (SCREC) | llr.sc.gov/re | Columbia, SC",
      "License Types": "Salesperson, Broker, Broker-in-Charge (BIC)",
      "Pre-License Education": "Salesperson: 90 hours approved pre-license education; pass with 70%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "10 hours every 2 years; 4 hrs mandatory core + 6 hrs electives.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "Partial reciprocity: out-of-state licensees may waive national exam; must take SC state exam; provide certified license history; active license required within last 6 months."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Residential Property Condition Disclosure Statement required (SC Code \u00a7 27-50-10 et seq.).",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | HOA/POA disclosure | Flood zone | Well/septic.",
      "Agency Disclosure": "Written agency disclosure required; South Carolina Association of Realtors (SCR) forms."
    },
    "landlord_tenant": {
      "Governing Statute": "South Carolina Residential Landlord and Tenant Act (SC Code \u00a7\u00a7 27-40-10 to 27-40-940)",
      "Security Deposit": "Max: varies by tenancy type; return within 30 days with itemized statement; failure = forfeiture of right to retain deposits + actual damages.",
      "Entry Notice": "24 hours' notice for non-emergency; SC Code \u00a7 27-40-530.",
      "Eviction Notices": "Non-payment: 5-day notice | Lease violation: 14-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Ejectment action in Magistrate Court.",
      "Habitability": "Warranty of habitability; repair-and-deduct up to $500 after 14-day notice.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly. Charleston, Columbia: check local codes."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. SC Dept. of Revenue oversees.",
      "Assessment Method": "Primary residence: assessed at 4% of appraised value; non-owner-occupied/commercial: 6%; agricultural: 4% use value; industrial: 10.5%.",
      "Exemptions": "Legal Residence: 4% assessment ratio (vs 6%) for primary residence \u2014 saves significant taxes | Homestead (65+/disabled/blind): $50,000 appraised value exemption | Veterans: 100% disabled vet full exemption.",
      "Appeals Process": "File with County Board of Assessment Appeals; then Administrative Law Court.",
      "Due Dates": "January 15 (delinquent after Jan 15, penalties apply)."
    }
  },
  "SD": {
    "name": "South Dakota",
    "code": "SD",
    "licensing": {
      "Regulator": "South Dakota Real Estate Commission (SDREC) | dlr.sd.gov/realestate | Pierre, SD",
      "License Types": "Broker Associate (entry-level), Broker",
      "Pre-License Education": "Broker Associate: 116 hours approved pre-license education; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "Post-license CE required: 60 hours divided over first two active license cycles.",
      "Continuing Education": "24 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "No formal reciprocity. Out-of-state licensees: if passed licensing exam in another state, may take only SD state exam; submit license history."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Seller's Property Disclosure Form required; South Dakota Association of Realtors forms.",
      "Required Disclosures": "Property Disclosure | Lead paint (pre-1978) | HOA disclosure | Well/septic | Flood zone.",
      "Agency Disclosure": "Written agency disclosure required; SDAR forms."
    },
    "landlord_tenant": {
      "Governing Statute": "South Dakota Landlord-Tenant Law (SDCL Chapter 43-32)",
      "Security Deposit": "Max: 1 month's rent (except pet deposits); return within 2 weeks with itemized statement; failure = double deposit as penalty.",
      "Entry Notice": "Reasonable notice; no specific statute; 24 hours typical.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: 3-day notice | Month-to-month: 30-day notice.",
      "Eviction Process": "Forcible entry and detainer in Magistrate or Circuit Court.",
      "Habitability": "Warranty of habitability; landlord must maintain habitable conditions.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Sioux Falls, Rapid City: minimal local additions. Generally landlord-friendly."
    },
    "property_tax": {
      "Administrator": "County Directors of Equalization assess; County Treasurer collects. SD Dept. of Revenue oversees.",
      "Assessment Method": "Assessed at full and true value; annual assessment.",
      "Exemptions": "Owner-occupied homestead: credit program reducing tax | Senior/Disabled Citizens: property tax freeze program for qualifying income | Veterans: disabled vet exemptions.",
      "Appeals Process": "File with Board of Equalization; then Circuit Court.",
      "Due Dates": "April 30 (full) or 2 installments: April 30 and Oct 31."
    }
  },
  "TN": {
    "name": "Tennessee",
    "code": "TN",
    "licensing": {
      "Regulator": "Tennessee Real Estate Commission (TREC) | tn.gov/commerce/licensing/real-estate | Nashville, TN",
      "License Types": "Affiliate Broker (entry-level), Broker",
      "Pre-License Education": "Affiliate Broker: 90 hours approved pre-license education; pass with 70%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "30 hours post-license within first year.",
      "Continuing Education": "16 hours every 2 years; mandatory topics including core (mandatory 3 hours).",
      "Background Check": "Criminal background check; fingerprinting.",
      "Reciprocity": "No formal reciprocity. Out-of-state licensees must complete required education and pass full exam. Submit full application."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Tennessee Residential Property Condition Disclosure required (TCA \u00a7 66-5-201 et seq.).",
      "Required Disclosures": "Property Condition Disclosure | Lead paint (pre-1978) | HOA/POA disclosure | Flood zone | Well/septic.",
      "Agency Disclosure": "Tennessee Disclosure of Agency form required; Tennessee Association of Realtors (TAR) forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Tennessee Uniform Residential Landlord and Tenant Act (TCA \u00a7\u00a7 66-28-101 to 66-28-521); NOTE: applies only in counties with populations over 75,000. Common law applies elsewhere.",
      "Security Deposit": "No statewide cap; return within 30 days (or amount of deposit as damages); itemized accounting required.",
      "Entry Notice": "24 hours' notice for non-emergency in URLTA counties; TCA \u00a7 66-28-403.",
      "Eviction Notices": "Non-payment: 14-day notice | Lease violation: 30-day notice to cure | Month-to-month: 30-day notice.",
      "Eviction Process": "Detainer warrant filed in General Sessions Court.",
      "Habitability": "Warranty of habitability in URLTA counties; repair-and-deduct available.",
      "Rent Control": "None statewide; TN prohibits local rent control.",
      "Local Overlays": "Nashville, Memphis, Knoxville, Chattanooga covered by URLTA. Rural counties: common law applies.",
      "Note": "Tennessee's URLTA has limited geographic applicability based on county population."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Trustees collect. TN State Board of Equalization oversees.",
      "Assessment Method": "Residential: assessed at 25% of appraised value; farm: 25%; commercial: 40%; industrial: 40%; personal property: 30%.",
      "Exemptions": "No statewide homestead exemption as a dollar amount. Tax Freeze for seniors 65+ with income limits (freezes tax amount). Elderly/Disabled low-income: Tax Relief program (state pays portion). Veterans: various local exemptions.",
      "Appeals Process": "File with County Board of Equalization by Aug 1 (June 1 in some counties); then State Board of Equalization; then Chancery Court.",
      "Due Dates": "Oct 1 billed; delinquent March 1 of following year."
    }
  },
  "TX": {
    "name": "Texas",
    "code": "TX",
    "licensing": {
      "Regulator": "Texas Real Estate Commission (TREC) | trec.texas.gov | Austin, TX",
      "License Types": "Sales Agent, Broker",
      "Pre-License Education": "Sales Agent: 180 hours (6 courses of 30 hrs each: Principles I & II, Law of Agency, Law of Contracts, Promulgated Contract Forms, Real Estate Finance); pass with 70%; 18+ with HS diploma; citizen/authorized alien; must have sponsoring broker to activate.",
      "Exam": "Pearson VUE; national + state sections; $54 exam fee.",
      "Post-License": "Sales Agent: 98 hours SAE (Sales Agent Apprentice Education) within first 2 renewals (18 months each); specific course requirements.",
      "Continuing Education": "18 hours every 2 years; 4 hrs mandatory legal update + 4 hrs mandatory ethics + 10 hrs elective.",
      "Background Check": "Fingerprinting via MorphoTrust; FBI criminal background check; felony/crime of moral turpitude reviewed.",
      "Reciprocity": "NO reciprocity with any state; all applicants must meet full TX requirements. Texas has longest pre-license requirement (180 hrs) in the U.S."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; TREC provides mandatory promulgated forms.",
      "Seller Disclosure": "Seller's Disclosure Notice (Texas Property Code \u00a7 5.008) required for residential sales; comprehensive defect disclosure.",
      "Required Disclosures": "Seller Disclosure Notice | Lead paint (pre-1978) | HOA disclosure | Addendum for Property Located Seaward of Gulf Intracoastal Waterway | Environmental assessment addendum | Texas Mold Disclosure | Flood zone.",
      "Agency Disclosure": "Information About Brokerage Services (IABS) form mandatory; TREC-promulgated form.",
      "Special Note": "PROMULGATED FORMS: Texas licensees MUST use TREC-promulgated contract forms; cannot use other forms for most residential transactions. Unauthorized form use = license violation.",
      "Standard Forms": "TREC provides all required forms at trec.texas.gov/forms; standard One to Four Family Residential Contract (Resale) = TREC Form 20-16."
    },
    "landlord_tenant": {
      "Governing Statute": "Texas Property Code, Title 8 (Landlord and Tenant), Chapters 91-94",
      "Security Deposit": "No statewide cap; return within 30 days of surrender with itemized statement (or 60 days with itemization if deductions); failure = 3x deposit + attorney fees.",
      "Entry Notice": "Reasonable notice; no specific statute for standard entry; typically 24 hours.",
      "Eviction Notices": "Non-payment or Lease violation: 3-day Notice to Vacate (Texas Property Code \u00a7 24.005) | Month-to-month termination: 1 month notice.",
      "Eviction Process": "Eviction (Forcible Entry and Detainer) in Justice of the Peace Court; expedited process; tenant has 5 days to appeal to County Court.",
      "Habitability": "Implied warranty of habitability (Tex. Prop. Code \u00a7 92.052); landlord must repair conditions affecting health/safety within 7 days of written notice; specific remedy/deduct available.",
      "Rent Control": "Texas state law prohibits local rent control (Texas Local Government Code \u00a7 214.902).",
      "Local Overlays": "Austin attempted rent control but state preemption blocks. Austin has Just Cause Eviction ordinance (suspended by state law). Houston, Dallas: check local codes for any protections not preempted."
    },
    "property_tax": {
      "Administrator": "Appraisal Districts (CADs) for each county appraise; Tax Assessor-Collectors collect. Texas Comptroller oversees.",
      "Assessment Method": "Appraised at 100% of market value; annual appraisal; residential homestead: capped at 10% increase per year (after initial year).",
      "Exemptions": "Homestead: $100,000 exemption off school district taxes (increased by HB 3, 2023) + $40,000 general homestead | Age 65+/Disabled: additional $10,000 school exemption + tax freeze on school taxes | Veterans: 100% disabled vet full exemption; sliding scale for partial disabilities | Over-65 school tax ceiling.",
      "Appeals Process": "Protest with Appraisal Review Board (ARB) by May 31 (or 30 days after notice); then District Court or Binding Arbitration.",
      "Due Dates": "Jan 31 (full) or installments: Jan 31 and June 30 (if under certain conditions); delinquent Feb 1."
    }
  },
  "UT": {
    "name": "Utah",
    "code": "UT",
    "licensing": {
      "Regulator": "Utah Division of Real Estate (UDRE) | realestate.utah.gov | Salt Lake City, UT",
      "License Types": "Sales Agent, Principal Broker, Associate Broker",
      "Pre-License Education": "Sales Agent: 120 hours approved pre-license education; pass with 70%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "18 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check; fingerprinting.",
      "Reciprocity": "Partial reciprocity with GA and MS only; no additional exam or training required. Other states: must complete full UT requirements. TURF state for non-reciprocal states.",
      "Note": "Utah is generally a TURF state; out-of-state agents must have Utah license to participate in Utah transactions."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; Utah uses REPC (Real Estate Purchase Contract) \u2014 standardized form.",
      "Seller Disclosure": "Seller's Property Condition Disclosure (SPCD) required; Utah Association of Realtors (UAR) forms.",
      "Required Disclosures": "SPCD | Lead paint (pre-1978) | HOA disclosure | Flood zone | Well/septic | Radon.",
      "Agency Disclosure": "Agency Disclosure required; Utah Listing/Agency contracts from UAR.",
      "Special Note": "REPC: Utah's standardized Real Estate Purchase Contract (REPC) is the predominant contract form; agents are strongly encouraged/expected to use it."
    },
    "landlord_tenant": {
      "Governing Statute": "Utah Fit Premises Act (Utah Code \u00a7 57-22-1 et seq.); Eviction: Utah Code \u00a7 78B-6-801 et seq.",
      "Security Deposit": "No statewide cap; return within 30 days (or lesser period stated in lease) with itemized statement; failure = up to 3x deposit as penalty.",
      "Entry Notice": "24 hours' notice for non-emergency; Utah Code \u00a7 57-22-4.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: 3-day notice to cure | Month-to-month: 15-day notice.",
      "Eviction Process": "Unlawful detainer in Justice Court or District Court.",
      "Habitability": "Fit Premises Act requires habitable conditions; repair-and-deduct available after written notice.",
      "Rent Control": "None statewide; Utah prohibits local rent control (Utah Code \u00a7 10-1-204).",
      "Local Overlays": "Generally landlord-friendly. Salt Lake City: some tenant protections; check local codes."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurers collect. Utah State Tax Commission oversees.",
      "Assessment Method": "Assessed at fair market value; primary residential: 55% assessment rate; all other: 100%.",
      "Exemptions": "Primary Residence: 45% of value exempt (built into 55% assessment rate) | Veterans: partial or full exemption based on disability rating | Circuit Breaker: income-based credit for seniors/disabled.",
      "Appeals Process": "File with County Board of Equalization by Sept 15; then Utah State Tax Commission; then Utah Supreme Court.",
      "Due Dates": "Nov 30 annually; delinquent Dec 1."
    }
  },
  "VT": {
    "name": "Vermont",
    "code": "VT",
    "licensing": {
      "Regulator": "Vermont Real Estate Commission (VREC) | sos.vermont.gov/professional-regulation | Montpelier, VT",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 40 hours approved pre-license education; 18+; NOTE: only in-person or Zoom classes (no self-paced online) accepted.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "16 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "No formal reciprocity agreements with any state."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Vermont Property Transfer Disclosure Statement required; sellers must disclose known defects.",
      "Required Disclosures": "Property Transfer Disclosure | Lead paint (pre-1978) | Act 250 permit disclosure (land use) | Well/septic | Flood zone | Radon.",
      "Agency Disclosure": "Written agency disclosure required; Vermont Association of Realtors (VAR) forms.",
      "Special Note": "ACT 250: Vermont's land use and development control law (Act 250) may affect property transfers; permit compliance must be disclosed."
    },
    "landlord_tenant": {
      "Governing Statute": "Vermont Residential Landlord-Tenant Act (9 VSA \u00a7\u00a7 4451-4480)",
      "Security Deposit": "No statewide cap; return within 14 days (if no damage) or 60 days (with itemized deductions); failure = actual damages.",
      "Entry Notice": "48 hours' notice for non-emergency; 9 VSA \u00a7 4460.",
      "Eviction Notices": "Non-payment: 14-day notice | Lease violation: 30-day notice to cure | No-cause: 60-day notice (or 90 days if 2+ years tenancy).",
      "Eviction Process": "Eviction proceeding in Superior Court (Civil Division).",
      "Habitability": "Warranty of habitability; repair-and-deduct available.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Burlington: some tenant protections; check local codes."
    },
    "property_tax": {
      "Administrator": "Town Listers/Assessors assess; Town Tax Collector collects. Vermont Dept. of Taxes oversees.",
      "Assessment Method": "Assessed at fair market value (100%); towns conduct reappraisals periodically; state oversees for equity.",
      "Exemptions": "Homestead Declaration: primary residence receives different (lower) education tax rate; must file annually | Income sensitivity adjustment: income-based property tax reduction | Veterans: exemptions vary by municipality.",
      "Appeals Process": "File with Board of Civil Authority by April 20; then Superior Court.",
      "Due Dates": "Varies by municipality; typically 2 installments.",
      "Note": "Vermont's education property tax (statewide) is separate from municipal property tax; homestead declaration important for reduced education tax rate."
    }
  },
  "VA": {
    "name": "Virginia",
    "code": "VA",
    "licensing": {
      "Regulator": "Virginia Department of Professional and Occupational Regulation (DPOR), Real Estate Board | dpor.virginia.gov | Richmond, VA",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 60 hours approved pre-license education; pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Post-License": "30 hours post-license within first renewal (2 years).",
      "Continuing Education": "16 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check; fingerprinting.",
      "Reciprocity": "Full reciprocity with all states: out-of-state agents may apply without pre-license education or national exam; must pass VA state exam; submit license history; affiliated VA broker. Currently active license required."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Residential Property Disclosure Statement required (Virginia Code \u00a7 55.1-700 et seq.); NOTE: Virginia's disclosure is limited \u2014 primarily checks 'yes/no' on specific items; sellers disclaim knowledge of many items.",
      "Required Disclosures": "Residential Property Disclosure Statement | Lead paint (pre-1978) | HOA/Condo disclosure (5-day right of rescission after HOA docs) | Flood zone | Megan's Law (sex offender) notice | Real estate purchaser advisory | Radon disclosure recommended.",
      "Agency Disclosure": "Disclosure of brokerage relationship required at first meeting; Virginia Association of Realtors forms."
    },
    "landlord_tenant": {
      "Governing Statute": "Virginia Residential Landlord and Tenant Act (VRLTA, Virginia Code \u00a7\u00a7 55.1-1200 to 55.1-1262)",
      "Security Deposit": "Max: 2 months' rent; must be deposited in escrow; return within 45 days with itemized statement; failure = actual damages + attorney fees.",
      "Entry Notice": "24 hours' notice for non-emergency; Virginia Code \u00a7 55.1-1229.",
      "Eviction Notices": "Non-payment: 14-day pay-or-quit | Lease violation: 21-day notice to cure (30-day if tenant is elderly/disabled) | Month-to-month: 30-day notice.",
      "Eviction Process": "Unlawful Detainer filed in General District Court; tenant has 21 days to respond.",
      "Habitability": "Warranty of habitability; repair-and-deduct available after 14-day notice; up to $1,500.",
      "Rent Control": "None statewide; Virginia law generally prohibits local rent control.",
      "Local Overlays": "Arlington, Alexandria, Fairfax: check local tenant protections. Generally consistent with state VRLTA."
    },
    "property_tax": {
      "Administrator": "Local Commissioners of the Revenue or Assessors; Treasurer/Finance collect. Virginia Dept. of Taxation provides oversight.",
      "Assessment Method": "Each locality sets own assessment ratio and rate; most localities assess at 100% of FMV; reassessment frequency varies (annual to every 6 years).",
      "Exemptions": "No statewide homestead exemption in traditional sense. Senior/Disabled: localities may provide exemptions or deferrals for qualifying seniors/disabled (Virginia Code \u00a7 58.1-3210 \u2014 mandatory program for localities). Veterans: 100% disabled vet full exemption on primary residence (constitutional amendment).",
      "Appeals Process": "File with Board of Equalization; then Circuit Court.",
      "Due Dates": "Varies by locality; most are June 5 and December 5 (2 installments)."
    }
  },
  "WA": {
    "name": "Washington",
    "code": "WA",
    "licensing": {
      "Regulator": "Washington Department of Licensing (DOL), Real Estate Program | dol.wa.gov/professional-licenses/real-estate-brokers | Olympia, WA",
      "License Types": "Broker (entry-level), Managing Broker",
      "Pre-License Education": "Broker: 90 hours (60 hrs Real Estate Fundamentals + 30 hrs Real Estate Practices); pass with 70%; 18+.",
      "Exam": "Pearson VUE; national + state sections.",
      "Post-License": "90 hours post-license clock hours within first 3 years to upgrade to status in good standing.",
      "Continuing Education": "30 hours every 2 years; includes 3 hrs Core curriculum; Managing Broker: 30 hrs including 3 hrs Core.",
      "Background Check": "Fingerprinting required; criminal background check; case-by-case review.",
      "Reciprocity": "Full reciprocity with all states: out-of-state broker can apply; must pass WA state exam; provide license history; affiliated WA firm or self-sponsor."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; Washington has strong buyer protections.",
      "Seller Disclosure": "Seller Disclosure Statement (SDS) required for residential sales (RCW 64.06); Form 17; buyer has 3 business days to rescind after receipt; applies to virtually all residential transactions.",
      "Required Disclosures": "Form 17 (SDS) | Lead paint (pre-1978) | HOA/HOA addendum | Flood zone | Septic/on-site sewage disclosure | Shoreline/critical areas | Waste/environmental hazards | Title report.",
      "Agency Disclosure": "Law of Real Estate Agency (RCW 18.86) governs; agency disclosure form required at first meeting.",
      "Special Note": "FORM 17: Washington's Seller Disclosure Statement (Form 17) is one of the most comprehensive in the U.S. \u2014 covers dozens of specific items including known latent defects, environmental issues, neighborhood features, HOA info, and more."
    },
    "landlord_tenant": {
      "Governing Statute": "Washington Residential Landlord-Tenant Act (RCW Chapter 59.18)",
      "Security Deposit": "No statewide cap; must be deposited in trust; written receipt required with bank name; return within 21 days with itemized statement; failure = up to 2x deposit; E-Notice allowed.",
      "Entry Notice": "2 days' notice for non-emergency (minimum); RCW 59.18.150; emergency without notice.",
      "Eviction Notices": "Non-payment: 14-day notice to pay or vacate (2021 law change) | Lease violation: 10-day notice to comply or vacate | Month-to-month no-cause: 20-day notice (JUST CAUSE EVICTION applies in many situations).",
      "Eviction Process": "Court filing required; no self-help eviction",
      "Habitability": "Strong warranty of habitability; repair-and-deduct available; rent withholding available in some circumstances.",
      "Rent Control": "No statewide rent control. Seattle has some local tenant protections but NOT rent control. WA law may restrict localities (check current law).",
      "Just Cause Eviction": "Washington Just Cause Eviction (RCW 59.18.650): after initial tenancy period, landlord must have just cause to evict or end tenancy; extensive list of acceptable causes.",
      "Local Overlays": "Seattle: extensive local tenant protections \u2014 relocation assistance, move-in fee limits, just cause, winter eviction ban, etc. Check Seattle Renting in Seattle (RRIO). Tacoma, Burien, Olympia: some local protections."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer/Tax Collector collects. WA Dept. of Revenue (DOR) oversees.",
      "Assessment Method": "Assessed at 100% of fair market value; annual revaluation cycle; most counties reassess annually.",
      "Exemptions": "Senior/Disabled: income-based exemption/deferral programs; qualifying seniors 61+ with income limits get significant reductions. Veterans: disabled vet exemptions. Homestead: no traditional homestead exemption in WA.",
      "Appeals Process": "File with County Board of Equalization; then Washington State Board of Tax Appeals (BTA); then Superior Court.",
      "Due Dates": "1st half: April 30; 2nd half: Oct 31; amounts under $50: full by April 30.",
      "Transfer Tax": "Real Estate Excise Tax (REET): graduated rates: 1.1% (under $525,000), 1.28% ($525,000-$1.525M), 2.75% ($1.525M-$3.025M), 3% (over $3.025M) effective 2020. Local REET additional."
    }
  },
  "WV": {
    "name": "West Virginia",
    "code": "WV",
    "licensing": {
      "Regulator": "West Virginia Real Estate Commission (WVREC) | wvrec.wvgov.org | Charleston, WV",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 90 hours approved pre-license education; pass with 70%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "7 hours per year; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "Partial reciprocity with KY only; plus open endorsement pathway for other states (submit license history, pass WV state exam, background check)."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Residential Property Disclosure required; West Virginia Association of Realtors (WVAR) forms.",
      "Required Disclosures": "Property Disclosure | Lead paint (pre-1978) | HOA disclosure | Well/septic | Flood zone | Underground storage tanks.",
      "Agency Disclosure": "Written agency disclosure required; WVAR forms."
    },
    "landlord_tenant": {
      "Governing Statute": "West Virginia Residential Landlord-Tenant Act (WV Code \u00a7\u00a7 37-6A-1 to 37-6A-31)",
      "Security Deposit": "No statewide cap; return within 60 days with itemized statement; failure = actual damages.",
      "Entry Notice": "Reasonable notice; no specific statute; 24 hours typical.",
      "Eviction Notices": "Non-payment: immediate notice | Lease violation: varies | Month-to-month: 1 month notice.",
      "Eviction Process": "Unlawful detainer in Magistrate Court.",
      "Habitability": "Warranty of habitability; landlord must maintain habitable conditions.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Generally landlord-friendly. Charleston, Huntington: check local codes."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Sheriff collects. WV State Tax Department oversees.",
      "Assessment Method": "Assessed at 60% of appraised value; Class I (intangibles, agriculture 15 acres+): 1.5%; Class II (owner-occupied residence): 1%; Class III (other real property): 1.5%; Class IV (commercial personal property): 2%.",
      "Exemptions": "Homestead: $20,000 assessed value exemption for owner-occupants 65+ or permanently disabled | Veterans: various exemptions based on disability.",
      "Appeals Process": "File with County Board of Equalization and Review by April 1; then Circuit Court.",
      "Due Dates": "1st half: Sept 1; 2nd half: March 1."
    }
  },
  "WI": {
    "name": "Wisconsin",
    "code": "WI",
    "licensing": {
      "Regulator": "Wisconsin Department of Safety and Professional Services (DSPS), Real Estate | dsps.wi.gov | Madison, WI",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 72 hours approved pre-license education; pass with 75%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "18 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "Partial reciprocity with IL and IN (take WI state exam only, no education). Other states: complete 13-hour sales education course before exam. Check DSPS for current requirements."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; WRA (Wisconsin REALTORS Association) provides comprehensive forms.",
      "Seller Disclosure": "Real Estate Condition Report (RECR) required for all 1-4 family residential transactions (Wis. Stat. \u00a7 709.01); extensive disclosure form.",
      "Required Disclosures": "Real Estate Condition Report | Lead paint (pre-1978) | HOA disclosure | Flood zone | Well/septic (Private Sewage Inspection required before sale in many cases) | Zoning compliance.",
      "Agency Disclosure": "Disclosure to Clients required; Wisconsin Real Estate Agency Law; WRA forms.",
      "Special Note": "WRA FORMS: Wisconsin uses a comprehensive library of standard WRA forms; agents expected to use WRA Offer to Purchase as standard contract."
    },
    "landlord_tenant": {
      "Governing Statute": "Wisconsin Landlord-Tenant Law (Wis. Stat. \u00a7\u00a7 704.01-704.95); Administrative Code ATCP 134",
      "Security Deposit": "No statewide cap; return within 21 days with itemized statement; ATCP 134 requires itemized checklist at move-in; failure = 2x wrongfully withheld amount.",
      "Entry Notice": "12 hours' advance notice for non-emergency (ATCP 134.09); emergency without notice.",
      "Eviction Notices": "Non-payment: 5-day notice (pay or vacate) | Lease violation: 5-day notice to cure | Month-to-month: 28-day notice.",
      "Eviction Process": "Eviction action in Small Claims Court (Circuit Court).",
      "Habitability": "Warranty of habitability; ATCP 134.04: landlord must maintain fit/habitable conditions.",
      "Rent Control": "None statewide; Wisconsin preempts local rent control (Wis. Stat. \u00a7 66.1015).",
      "Local Overlays": "Madison, Milwaukee: some additional tenant protections; check local codes. Madison has strong tenant ordinances."
    },
    "property_tax": {
      "Administrator": "Municipal/County Assessors assess; Municipal/County Treasurer collects. WI Department of Revenue (DOR) oversees.",
      "Assessment Method": "Assessed at full market value; municipalities certified at 100% of full value; equalized by DOR annually.",
      "Exemptions": "Homestead: income-based credit (School Property Tax Credit) for lower-income homeowners | Lottery and Gaming Credit: one-time credit on property tax bill for primary residence | Veterans: surviving spouse exemption; disabled vet reductions | Agricultural land: use value assessment.",
      "Appeals Process": "File with Board of Review by close of examination session; then Supervisor of Assessments; then Circuit Court.",
      "Due Dates": "Jan 31 (full) or 2 installments: Jan 31 and July 31."
    }
  },
  "WY": {
    "name": "Wyoming",
    "code": "WY",
    "licensing": {
      "Regulator": "Wyoming Real Estate Commission (WREC) | realestate.wyo.gov | Cheyenne, WY",
      "License Types": "Salesperson, Broker",
      "Pre-License Education": "Salesperson: 54 hours approved pre-license education; pass with 70%; 18+.",
      "Exam": "PSI Exams; national + state sections.",
      "Continuing Education": "12 hours every 2 years; mandatory topics.",
      "Background Check": "Criminal background check.",
      "Reciprocity": "No formal reciprocity. Out-of-state active licensees: exempt from Salesperson I Course and national exam section; all other requirements still apply (Salesperson II course, WY state exam, background check, application)."
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state.",
      "Seller Disclosure": "Seller's Disclosure Statement required; Wyoming Association of Realtors (WAR) forms.",
      "Required Disclosures": "Seller Disclosure | Lead paint (pre-1978) | HOA disclosure | Flood zone | Well/water rights | Mineral rights disclosure (CRITICAL in Wyoming \u2014 mineral rights often severed from surface rights).",
      "Agency Disclosure": "Written agency disclosure required; WAR forms.",
      "Special Note": "MINERAL RIGHTS: Wyoming has extensive mineral development; disclosure of oil/gas/coal rights separation from surface rights is critical. Buyers should always investigate whether mineral rights are included."
    },
    "landlord_tenant": {
      "Governing Statute": "Wyoming landlord-tenant law is primarily governed by common law and lease terms. Wyoming does not have a comprehensive Residential Landlord-Tenant Act.",
      "Security Deposit": "No statewide cap; return within 30 days with itemized statement; no specific statutory penalty (common law damages).",
      "Entry Notice": "Reasonable notice; no specific statute; 24 hours typical.",
      "Eviction Notices": "Non-payment: 3-day notice | Lease violation: varies | Month-to-month: reasonable notice (typically 1 month).",
      "Eviction Process": "Unlawful detainer in District Court.",
      "Habitability": "Implied warranty of habitability (common law); limited statutory landlord duties.",
      "Rent Control": "None statewide.",
      "Local Overlays": "Very landlord-friendly state; minimal local tenant protections. Cheyenne, Casper: check local codes.",
      "Note": "Wyoming has one of the least tenant-protective landlord-tenant law frameworks in the U.S. \u2014 primarily common law-based."
    },
    "property_tax": {
      "Administrator": "County Assessors assess; County Treasurer collects. Wyoming Dept. of Revenue oversees.",
      "Assessment Method": "Residential: assessed at 9.5% of fair market value; commercial/industrial: 11.5%; agricultural: 9.5% of productivity value; minerals: 100% of fair market value.",
      "Exemptions": "Veterans: $3,000 assessed value exemption | Homestead: no traditional homestead exemption | Low-income elderly: county-level programs vary.",
      "Appeals Process": "File with County Board of Equalization by 30 days of notice; then State Board of Equalization; then District Court.",
      "Due Dates": "Aug 10 (1st half) or Feb 28 (1st half with penalty); Sept 1 (2nd half) or Nov 10 (2nd half). Taxes due in 2 installments.",
      "Note": "Wyoming has NO state income tax and NO state sales tax; property tax and mineral severance tax are primary state revenue sources."
    }
  }

  ,
  "DC": {
    "name": "District of Columbia",
    "code": "DC",
    "licensing": {
      "Regulator": "DC Real Estate Commission | Department of Licensing and Consumer Protection (DLCP) | dlcp.dc.gov | (202) 442-4400",
      "License Types": "Salesperson, Associate Broker, Broker",
      "Pre-License Education": "60 hours approved pre-license course (Salesperson); 135 hours for Broker upgrade",
      "Exam": "PSI Exams | National section (80 Qs) + DC state section (40 Qs) | 75% passing score on both",
      "Post-License": "15 hours CE every 2 years; must include mandatory topics",
      "Continuing Education": "15 hours every 2-year cycle by December 31; includes fair housing, DC law update",
      "Background Check": "Required; criminal convictions reviewed on case-by-case basis",
      "Reciprocity": "Reciprocity available with Maryland and Virginia; reciprocal applicants may be exempt from pre-license education requirement",
      "Special Note": "Tenant Opportunity to Purchase Act (TOPA) is heavily tested on DC exam — tenants have right of first refusal when property is sold"
    },
    "contracts": {
      "Legal Doctrine": "Full disclosure state; sellers must disclose known material defects",
      "Seller Disclosure": "DC Property Condition Disclosure required for residential properties",
      "Required Disclosures": "Lead-based paint (pre-1978) | TOPA notice to tenants | Flood zone | Historic district | Condo/HOA | Rent control status",
      "Agency Disclosure": "Written agency disclosure required at first substantial contact; DC forms provided by DCAR",
      "Lead Paint (Federal)": "Required for homes built before 1978",
      "Special Note": "TOPA (Tenant Opportunity to Purchase Act): DC tenants have right of first refusal when their rental building is sold. Failure to comply allows tenants to void the sale."
    },
    "landlord_tenant": {
      "Governing Statute": "DC Rental Housing Act of 1985 (as amended) | DC Code Title 42, Chapter 35",
      "Security Deposit": "Max: 1 month's rent; must be held in separate interest-bearing account; return within 45 days with itemized statement; interest accrues annually",
      "Entry Notice": "24 hours advance notice required; emergency entry allowed without notice",
      "Eviction Notices": "Non-payment: 30-day notice | Lease violation: 30-day cure notice | No-fault: 90 days for month-to-month",
      "Eviction Process": "Filed in DC Superior Court; tenant has significant procedural protections; process is tenant-friendly",
      "Habitability": "Strong implied warranty of habitability; DC housing code extensively enforced",
      "Rent Control": "EXTENSIVE rent control: covers most residential buildings built before 1976 with 5+ units; annual increases based on CPI; vacancy decontrol allows resetting rent when unit vacates",
      "Local Overlays": "DC is one of the most tenant-protective jurisdictions in the U.S. TOPA, rent control, just-cause eviction protections apply to most rental housing."
    },
    "property_tax": {
      "Administrator": "DC Office of Tax and Revenue (OTR) | otr.cfo.dc.gov | Annual assessment",
      "Assessment Method": "Annual assessment at 100% of estimated market value; OTR uses mass appraisal methodology; Notices of Assessed Value mailed February 1",
      "Classifications": "Class 1 (owner-occupied residential): 0.85% | Class 2 (commercial and non-owner-occupied residential with 5+ units): 1.65% | Class 3 (vacant property): 5% | Class 4 (blighted property): 10%",
      "Exemptions": "Homestead Deduction: $84,000 off assessed value for owner-occupied principal residence | Senior/disabled: additional $149,360 deduction if income-eligible | New Home Buyer Credit available",
      "Appeals Process": "File with OTR Real Property Tax Appeals Commission by April 1; then DC Superior Court",
      "Due Dates": "Two installments: March 31 (first half) and September 15 (second half)"
    }
  },
  "PR": {
    "name": "Puerto Rico",
    "code": "PR",
    "licensing": {
      "Regulator": "Puerto Rico Real Estate Board | Department of State | estado.pr.gov | Puerto Rico's real estate licensing is governed by Law 10 of 1994",
      "License Types": "Salesperson, Broker; separate licenses with different requirements",
      "Pre-License Education": "Broker: 120-hour approved pre-license course; Salesperson: less hours required; courses in Spanish and/or English",
      "Exam": "Puerto Rico Real Estate Board examination; national concepts tested plus Puerto Rico Civil Code, Horizontal Property Act, Condominium Act",
      "Post-License": "Required continuing education for license renewal",
      "Continuing Education": "Required hours per renewal cycle; must include PR-specific law updates",
      "Background Check": "Required; character and fitness review",
      "Reciprocity": "Limited reciprocity; U.S. mainland licensees must meet PR requirements; civil law system differences make full reciprocity impractical",
      "Special Note": "Puerto Rico uses a CIVIL LAW system based on Spanish law — NOT common law like U.S. states. Property concepts include bienes gananciales, usufruct, and civil law deed requirements."
    },
    "contracts": {
      "Legal Doctrine": "Civil law jurisdiction; Puerto Rico Civil Code governs property transactions; NOT common law",
      "Seller Disclosure": "Disclosure requirements under PR law; all U.S. federal disclosure laws also apply",
      "Required Disclosures": "Lead-based paint (federal) | Flood zone (critical in PR due to hurricane risk) | FEMA flood maps | Material defects | Condominium rules and regulations",
      "Agency Disclosure": "Written agency disclosure required",
      "Lead Paint (Federal)": "Required for properties built before 1978",
      "Closing Requirements": "All real estate closings MUST be conducted by a Puerto Rico Notary Public (who must be a licensed attorney). Notary prepares the escritura (deed) and records in the Property Registry.",
      "Special Note": "Bienes gananciales: married couples automatically own property acquired during marriage as community property. Both spouses must sign to convey community property."
    },
    "landlord_tenant": {
      "Governing Statute": "Puerto Rico Civil Code | Law 464 of 1946 (Reasonable Rents Act) | Various amendments",
      "Security Deposit": "Permitted; specific requirements under PR law; return within time period set by agreement or PR law",
      "Entry Notice": "Reasonable notice required; emergency access without notice",
      "Eviction Notices": "Non-payment: formal notice required; Unlawful detainer action in PR court",
      "Eviction Process": "Puerto Rico courts; process in Spanish; significant tenant protections",
      "Habitability": "Landlord must maintain habitable conditions; implied warranty applies",
      "Rent Control": "Limited rent control exists for certain categories under older laws; most newer properties at market rate",
      "Local Overlays": "Hurricane preparedness disclosure is important in PR; flooding history should be disclosed. Post-Hurricane Maria (2017), flood zone compliance is critical."
    },
    "property_tax": {
      "Administrator": "Puerto Rico Center for Recaudacion de Ingresos Municipales (CRIM) | crim.pr.gov | Municipal property tax administration",
      "Assessment Method": "CRIM assesses property values; rates set municipally; assessments may not reflect current market value",
      "Exemptions": "Principal residence exemption (first $150,000 of assessed value exempt from municipal tax) | Agricultural exemptions | Veteran exemptions | Various economic development exemptions",
      "Appeals Process": "File with CRIM within established deadlines; then administrative review; then PR courts",
      "Due Dates": "Municipal tax due in 2 installments; dates vary by municipality",
      "Special Note": "Puerto Rico has significant property tax incentives for new residents (Act 22/Act 60 Individual Investors) and businesses. These incentives have attracted substantial mainland U.S. investment."
    }
  }
};
