// Configuration and constants
const CONFIG = {
  questionsPerSection: 6,
  maxScorePerQuestion: 6,
  sectionBackgrounds: [
    "bg-amber-100", "bg-rose-100", "bg-emerald-100",
    "bg-indigo-100", "bg-teal-100", "bg-violet-100"
  ],
  sectionHeaderColors: [
    "bg-amber-500", "bg-rose-500", "bg-emerald-500",
    "bg-indigo-500", "bg-teal-500", "bg-violet-500"
  ],
  sectionAccentColors: [
    "bg-amber-600 hover:bg-amber-700", "bg-rose-600 hover:bg-rose-700",
    "bg-emerald-600 hover:bg-emerald-700", "bg-indigo-600 hover:bg-indigo-700",
    "bg-teal-600 hover:bg-teal-700", "bg-violet-600 hover:bg-violet-700"
  ],
  // ✅ SECTION IMAGES - these appear in the top box
  sectionImages: [
      "assets/images/efficient engineer.png", // or whatever you want to call it
      "assets/images/people helper.png",
      "assets/images/environment enthusiast.png",
      "assets/images/precise problem solver.png",
      "assets/images/resourceful recycler.png",
      "assets/images/timeless thinker.png"
  ],
  sectionFunFacts: [
    "⚡ Fun fact: The microwave was invented when an engineer walked past a radar tube and his chocolate bar melted!",
    "💝 Fun fact: The inventor of the modern fire extinguisher was inspired after watching a failed rescue at sea.",
    "🌍 Fun fact: A single recycled glass bottle saves enough energy to power a laptop for 30 minutes.",
    "🔬 Fun fact: Einstein didn't start talking until age 4. His teachers said he'd 'never amount to anything.'",
    "♻️ Fun fact: The 'happy birthday' song was originally written as 'Good Morning to All' by two sisters.",
    "⏳ Fun fact: The oldest known tree, Methuselah, is 4,856 years old."
  ],
  sectionNames: [
    "Efficiency",
    "Compassion",
    "Nature",
    "Precision",
    "Resourcefulness",
    "Timeless Thoughts"
  ]
};

// Personality trait colors
const TRAIT_COLORS = {
  A: { bg: "bg-amber-500", light: "bg-amber-100", hex: "#f59e0b", dark: "amber-700", button: "bg-amber-600 hover:bg-amber-700", text: "text-amber-600" },
  B: { bg: "bg-rose-500", light: "bg-rose-100", hex: "#f43f5e", dark: "rose-700", button: "bg-rose-600 hover:bg-rose-700", text: "text-rose-600" },
  C: { bg: "bg-emerald-500", light: "bg-emerald-100", hex: "#10b981", dark: "emerald-700", button: "bg-emerald-600 hover:bg-emerald-700", text: "text-emerald-600" },
  D: { bg: "bg-indigo-500", light: "bg-indigo-100", hex: "#6366f1", dark: "indigo-700", button: "bg-indigo-600 hover:bg-indigo-700", text: "text-indigo-600" },
  E: { bg: "bg-teal-500", light: "bg-teal-100", hex: "#14b8a6", dark: "teal-700", button: "bg-teal-600 hover:bg-teal-700", text: "text-teal-600" },
  F: { bg: "bg-violet-500", light: "bg-violet-100", hex: "#8b5cf6", dark: "violet-700", button: "bg-violet-600 hover:bg-violet-700", text: "text-violet-600" }
};

const TRAIT_NAMES = {
  A: "🔧 The Efficient Engineer",
  B: "🤝 The Practical People-Helper",
  C: "🌿 The Environment Enthusiast",
  D: "🔍 The Precise Problem-Solver",
  E: "♻️ The Resourceful Recycler",
  F: "⏳ The Timeless Thinker"
};

const TRAIT_DESCRIPTIONS = {
  A: "You optimize processes and value efficiency above all. You make things better, faster, and smarter.",
  B: "You're driven by compassion and community. Your innovations center around human needs.",
  C: "You champion sustainability. You create solutions that honor and protect our planet.",
  D: "You notice what others miss. Your analytical mind dissects problems with surgical precision.",
  E: "You see potential everywhere. Nothing goes to waste in your hands—you're a master of adaptation.",
  F: "You build for centuries, not seconds. Your work is your legacy, crafted with permanence in mind."
};

// ✅ RESULT IMAGES - these appear on the final results page (different/bigger images)
const RESULT_IMAGES = {
  A: "assets/images/efficient engineer.png", // or whatever you want to call it
  B: "assets/images/people helper.png",
  C: "assets/images/environment enthusiast.png",
  D: "assets/images/precise problem solver.png",
  E: "assets/images/resourceful recycler.png",
  F: "assets/images/timeless thinker.png"
};