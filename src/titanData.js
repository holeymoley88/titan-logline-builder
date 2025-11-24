// =======================================================
// TITAN GENRE — WORD BANK (V2: objects with text + tags)
// Used by App.jsx (OptionLevel, Speedrun, SelectField, etc.)
// =======================================================

// ---------------------------
// HUMILIATION (Level 1)
// Public, unfair, costly
// ---------------------------
export const humiliationOptions = [
  {
    text: "accused of stealing in a crowded mall and fired on the spot",
    tags: ["public", "job", "security", "crowd"],
  },
  {
    text: "bag searched publicly and emptied onto the floor in front of customers",
    tags: ["retail", "security", "public"],
  },
  {
    text: "humiliated by a viral video that edits her words out of context",
    tags: ["viral", "online", "reputation"],
  },
  {
    text: "colleagues film her crying after a false accusation and share it in the office chat",
    tags: ["office", "coworkers", "online"],
  },
  {
    text: "publicly blamed for a client disaster during a company town hall",
    tags: ["corporate", "public", "job"],
  },
  {
    text: "eviction notice taped to her door while neighbours film from their windows",
    tags: ["housing", "public", "neighbours"],
  },
  {
    text: "security guards escort her out of the building while everyone watches",
    tags: ["security", "public", "job"],
  },
  {
    text: "her scholarship is revoked in front of the entire class",
    tags: ["school", "scholarship", "public"],
  },
  {
    text: "falsely accused of harassing a VIP customer and kicked out on camera",
    tags: ["retail", "vip", "public"],
  },
  {
    text: "her private complaint email is leaked and mocked in the group chat",
    tags: ["office", "online", "betrayal"],
  },
  {
    text: "she is dragged out of a hospital ward by security for 'non-payment'",
    tags: ["hospital", "debt", "public"],
  },
  {
    text: "her boss announces her 'incompetence' to the whole floor",
    tags: ["corporate", "boss", "public"],
  },
  {
    text: "her landlord throws her belongings into the corridor while neighbours watch",
    tags: ["housing", "landlord", "public"],
  },
  {
    text: "she is accused of cheating on an exam and marched out in front of classmates",
    tags: ["school", "exam", "public"],
  },
  {
    text: "a livestream shows her 'confession' edited to make her look like a scammer",
    tags: ["online", "livestream", "reputation"],
  },
  {
    text: "she is publicly labelled a thief over a missing wallet that later turns up",
    tags: ["retail", "wallet", "false-accusation"],
  },
  {
    text: "an influencer posts her face as 'the rude staff who ruined my day'",
    tags: ["influencer", "online", "job"],
  },
  {
    text: "her family argument is filmed by neighbours and posted with mocking captions",
    tags: ["family", "public", "online"],
  },
  {
    text: "she is denied entry to an event and told she 'looks like trouble' on camera",
    tags: ["event", "appearance", "public"],
  },
  {
    text: "her manager forces her to apologise on her knees in front of the team",
    tags: ["office", "power-abuse", "public"],
  },
  {
    text: "she is shouted at and fired in front of customers for something her boss did",
    tags: ["retail", "boss", "public", "unfair"],
  },
  {
    text: "a fake confession letter with her name is pinned to the notice board",
    tags: ["office", "school", "reputation"],
  },
  {
    text: "she is accused of leaking confidential info and locked out of her account mid-shift",
    tags: ["office", "online", "job"],
  },
  {
    text: "her mic is left on during a meeting, broadcasting a private plea for help",
    tags: ["office", "tech-mistake", "public"],
  },
  {
    text: "a CCTV clip of her defending herself is edited to look like she is attacking",
    tags: ["cctv", "online", "framed"],
  },
];

// ---------------------------
// VILLAIN (Level 2)
// Person with structural power over her
// ---------------------------
export const villainOptions = [
  {
    text: "HR manager who can blacklist her from the whole industry",
    tags: ["corporate", "hr", "job"],
  },
  {
    text: "landlord who owns half the block and evicts tenants at will",
    tags: ["housing", "landlord", "real-estate"],
  },
  {
    text: "rich influencer who weaponises followers to destroy reputations",
    tags: ["influencer", "online", "status"],
  },
  {
    text: "department head who crushes junior staff to hide her mistakes",
    tags: ["office", "boss", "corporate"],
  },
  {
    text: "hospital administrator who controls access to treatment and bills",
    tags: ["hospital", "healthcare", "admin"],
  },
  {
    text: "school principal who can revoke her scholarship overnight",
    tags: ["school", "scholarship", "education"],
  },
  {
    text: "property manager who decides who gets to stay in the building",
    tags: ["housing", "property-management"],
  },
  {
    text: "family elder who controls inheritance and family housing",
    tags: ["family", "inheritance", "housing"],
  },
  {
    text: "celebrity client who can get her fired with one public complaint",
    tags: ["celebrity", "retail", "online"],
  },
  {
    text: "corporate lawyer who threatens her with lawsuits she cannot afford",
    tags: ["legal", "corporate", "fear"],
  },
  {
    text: "union-busting manager who punishes anyone who speaks up",
    tags: ["corporate", "labour", "power"],
  },
  {
    text: "politician’s aide who can ruin her family’s business with one call",
    tags: ["politics", "family-business"],
  },
  {
    text: "loan shark who holds her family’s debts over her head",
    tags: ["debt", "crime", "threat"],
  },
  {
    text: "talent agency boss who can blacklist her from all casting lists",
    tags: ["entertainment", "agency", "career"],
  },
  {
    text: "head nurse who controls shift assignments and renewals",
    tags: ["hospital", "shift", "boss"],
  },
  {
    text: "charity director who can cancel the subsidy her family relies on",
    tags: ["charity", "subsidy", "family"],
  },
  {
    text: "board chairman who wants to make an example of her",
    tags: ["corporate", "board", "status"],
  },
  {
    text: "housing officer who can cancel her public housing application",
    tags: ["housing", "bureaucracy"],
  },
  {
    text: "producer who controls which stories and people get airtime",
    tags: ["media", "producer", "reputation"],
  },
  {
    text: "security chief who treats her like a threat and escalates everything",
    tags: ["security", "institution", "abuse"],
  },
];

// ---------------------------
// HEROINE (Level 3)
// Low/mid status + strain + likable
// ---------------------------
export const heroineOptions = [
  {
    text: "junior receptionist supporting her younger siblings",
    tags: ["office", "family", "low-status"],
  },
  {
    text: "overworked cashier paying off her father’s hospital bills",
    tags: ["retail", "family", "medical-debt"],
  },
  {
    text: "nursing assistant juggling back-to-back shifts to cover rent",
    tags: ["healthcare", "rent", "exhaustion"],
  },
  {
    text: "call-centre worker hiding mounting debt from her mother",
    tags: ["office", "call-centre", "debt"],
  },
  {
    text: "delivery rider sending most of her income back home",
    tags: ["gig", "remittance", "migrant"],
  },
  {
    text: "scholarship student terrified of being sent home in disgrace",
    tags: ["school", "scholarship", "pressure"],
  },
  {
    text: "single mother working nights while her child stays with relatives",
    tags: ["family", "single-parent", "night-shift"],
  },
  {
    text: "warehouse picker who covers her brother’s gambling debts",
    tags: ["warehouse", "debt", "family"],
  },
  {
    text: "hotel front-desk staff living in a cramped shared room",
    tags: ["hotel", "service", "housing"],
  },
  {
    text: "temp admin assistant who keeps getting her contracts quietly shortened",
    tags: ["office", "temp", "precarious"],
  },
  {
    text: "intern who sends money home instead of eating properly",
    tags: ["intern", "family", "sacrifice"],
  },
  {
    text: "library assistant paying off a secret loan for her mother",
    tags: ["library", "debt", "family"],
  },
  {
    text: "night-shift cleaner hiding from an abusive ex",
    tags: ["cleaning", "night", "safety"],
  },
  {
    text: "part-time tutor keeping her sibling in a good school",
    tags: ["education", "family", "side-job"],
  },
  {
    text: "live-in helper sending everything she earns to her kids abroad",
    tags: ["domestic-worker", "family", "migrant"],
  },
  {
    text: "junior accountant terrified of making a mistake that costs her job",
    tags: ["office", "finance", "anxiety"],
  },
  {
    text: "store stocker whose visa renewal depends on this job",
    tags: ["retail", "visa", "immigration"],
  },
  {
    text: "security desk receptionist paying off her own student loans",
    tags: ["security-desk", "loans"],
  },
  {
    text: "café barista sleeping on a friend’s sofa after a breakup",
    tags: ["cafe", "housing", "heartbreak"],
  },
  {
    text: "caregiver for an ill parent who skips sleep to work extra shifts",
    tags: ["caregiver", "family", "exhaustion"],
  },
];

// ---------------------------
// INCITING INCIDENT (Level 4)
// Desperate, binding, little/no way back
// ---------------------------
export const incitingIncidentOptions = [
  {
    text: "signs a brutal debt contract to clear her name",
    tags: ["contract", "debt", "no-return"],
  },
  {
    text: "moves into a cramped spare room he offers as her only housing option",
    tags: ["housing", "live-in", "proximity"],
  },
  {
    text: "accepts a personal loan from him with deliberately vague repayment terms",
    tags: ["debt", "loan", "power-imbalance"],
  },
  {
    text: "takes an assistant job with a contract that forbids her from quitting",
    tags: ["job", "contract", "trapped"],
  },
  {
    text: "agrees to fake a relationship to fix her reputation and his PR crisis",
    tags: ["fake-relationship", "reputation", "contract"],
  },
  {
    text: "signs a non-disclosure agreement without reading the fine print",
    tags: ["nda", "legal", "naive"],
  },
  {
    text: "accepts his offer to pay her debts in exchange for becoming live-in staff",
    tags: ["debt", "housing", "live-in"],
  },
  {
    text: "moves into his building as part of a 'staff housing' arrangement",
    tags: ["housing", "staff", "proximity"],
  },
  {
    text: "takes a night-shift job in his building security control room",
    tags: ["job", "security", "proximity"],
  },
  {
    text: "agrees to marry him on paper to solve an immigration problem",
    tags: ["marriage-contract", "immigration"],
  },
  {
    text: "accepts a mysterious scholarship that requires living under his rules",
    tags: ["scholarship", "rules", "housing"],
  },
  {
    text: "becomes his family’s live-in caregiver to avoid homelessness",
    tags: ["caregiver", "family", "housing"],
  },
  {
    text: "signs over power-of-attorney to him to unlock an inheritance",
    tags: ["legal", "inheritance", "trust"],
  },
  {
    text: "takes a job managing his 'empty' property, not knowing he lives there",
    tags: ["housing", "property", "proximity"],
  },
  {
    text: "agrees to act as a stand-in fiancée for his public image",
    tags: ["public-image", "fake-engagement"],
  },
  {
    text: "accepts a one-year work contract in a remote estate he controls",
    tags: ["remote", "estate", "contract"],
  },
  {
    text: "signs a clause making her responsible for a huge sum if she quits early",
    tags: ["contract", "penalty", "job"],
  },
  {
    text: "borrows money using her family home as collateral through his lawyer",
    tags: ["debt", "family-home", "risk"],
  },
  {
    text: "agrees to move into a 'staff dorm' that is actually inside his penthouse level",
    tags: ["housing", "penthouse", "proximity"],
  },
  {
    text: "accepts a 'trial period' job that includes living under constant surveillance",
    tags: ["job", "surveillance", "control"],
  },
];

// ---------------------------
// LOW DISGUISE / MYSTERY MAN (Level 5)
// How she reads him at first – low status, harmless
// ---------------------------
export const lowDisguiseOptions = [
  {
    text: "mild-mannered janitor who always seems to be on her floor",
    tags: ["janitor", "building", "low-status"],
  },
  {
    text: "quiet night guard who keeps showing up when trouble starts",
    tags: ["security", "night", "observer"],
  },
  {
    text: "tired delivery rider who naps in the lobby between jobs",
    tags: ["gig", "rider", "lobby"],
  },
  {
    text: "IT support guy who fixes things and then disappears silently",
    tags: ["office", "it-support"],
  },
  {
    text: "warehouse porter who helps her lift boxes without saying much",
    tags: ["warehouse", "porter", "helpful"],
  },
  {
    text: "coffee cart guy who remembers everyone’s orders but not their names",
    tags: ["coffee", "vendor", "background"],
  },
  {
    text: "maintenance worker in overalls always carrying a toolbox",
    tags: ["maintenance", "toolbox"],
  },
  {
    text: "chauffeur who waits outside with the car and avoids eye contact",
    tags: ["driver", "car", "service"],
  },
  {
    text: "handyman who shows up whenever something is broken",
    tags: ["handyman", "building"],
  },
  {
    text: "intern who quietly takes notes and never speaks in meetings",
    tags: ["intern", "office"],
  },
  {
    text: "groundskeeper trimming hedges when she walks past the estate",
    tags: ["estate", "gardener"],
  },
  {
    text: "airport shuttle driver who happens to be on every late run she takes",
    tags: ["driver", "airport"],
  },
  {
    text: "janitor mopping the floor outside HR every time she leaves crying",
    tags: ["janitor", "hr", "observer"],
  },
  {
    text: "security trainee scanning IDs at the gate",
    tags: ["security", "entrance"],
  },
  {
    text: "busboy clearing dishes at the staff canteen",
    tags: ["food", "canteen", "service"],
  },
];

// ---------------------------
// HIGH STATUS / TITAN IDENTITY (Level 6)
// Who he actually is once the mask drops
// ---------------------------
export const highStatusOptions = [
  {
    text: "media mogul whose network can destroy anyone’s reputation",
    tags: ["media", "reputation", "power"],
  },
  {
    text: "billionaire heir who secretly owns the entire building",
    tags: ["billionaire", "real-estate"],
  },
  {
    text: "underworld prince protected by politicians and police",
    tags: ["crime", "politics", "danger"],
  },
  {
    text: "tech founder whose apps control half the city’s payments",
    tags: ["tech", "fintech", "power"],
  },
  {
    text: "real estate tycoon who owns the neighbourhood she lives in",
    tags: ["real-estate", "housing", "landlord"],
  },
  {
    text: "hospital chain owner who can erase or invent medical records",
    tags: ["hospital", "healthcare", "power"],
  },
  {
    text: "casino family heir who launders power through 'charity'",
    tags: ["casino", "crime", "charity"],
  },
  {
    text: "shipping magnate whose containers cross every border unchecked",
    tags: ["shipping", "global", "influence"],
  },
  {
    text: "political fixer who trades favours at ministerial level",
    tags: ["politics", "fixer"],
  },
  {
    text: "conglomerate CEO whose group quietly funds both sides of conflicts",
    tags: ["conglomerate", "finance", "shadow"],
  },
  {
    text: "luxury hotel chain owner who can ban or host anyone",
    tags: ["hotel", "luxury", "status"],
  },
  {
    text: "celebrity producer who manufactures stars and scandals",
    tags: ["entertainment", "producer", "media"],
  },
  {
    text: "intelligence-linked businessman who trades in secrets",
    tags: ["intelligence", "secrets", "danger"],
  },
  {
    text: "private equity boss who buys companies and guts them overnight",
    tags: ["finance", "corporate", "fear"],
  },
  {
    text: "dynasty heir whose family name opens every door and closes others",
    tags: ["family-dynasty", "old-money"],
  },
  {
    text: "property developer behind the entire regeneration of her district",
    tags: ["real-estate", "urban", "gentrification"],
  },
  {
    text: "shadowy investor who bankrolls both her employer and her landlord",
    tags: ["investor", "double-bind"],
  },
  {
    text: "media conglomerate chairman who decides which scandals disappear",
    tags: ["media", "chairman"],
  },
  {
    text: "shipping and logistics king who can make evidence vanish in transit",
    tags: ["shipping", "evidence", "crime"],
  },
  {
    text: "old-money patriarch who owns the foundation that funds her scholarship",
    tags: ["old-money", "charity", "scholarship"],
  },
];

// ---------------------------
// SUBGENRE TAGS (for flavour)
// ---------------------------
export const subgenreTags = [
  "Corporate Titan",
  "Mafia Titan",
  "Celebrity Titan",
  "Political Titan",
  "Real-Estate Titan",
  "Hospital Titan",
  "Nanny / Domestic Titan",
  "Academic Titan",
  "Hotel Titan",
  "Media Titan",
];