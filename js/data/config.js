// Configuration and constants
const CONFIG = {
  questionsPerSection: 6,
  maxScorePerQuestion: 6,
  sectionBackgrounds: [
    "bg-amber-100", "bg-red-100", "bg-green-100",
    "bg-violet-100", "bg-blue-100", "bg-yellow-100"
  ],
  sectionHeaderColors: [
    "bg-amber-500", "bg-red-500", "bg-green-500",
    "bg-violet-500", "bg-blue-500", "bg-yellow-500"
  ],
  sectionAccentColors: [
    "bg-amber-600 hover:bg-amber-700", "bg-red-600 hover:bg-red-700",
    "bg-green-600 hover:bg-green-700", "bg-violet-600 hover:bg-violet-700",
    "bg-blue-600 hover:bg-blue-700", "bg-yellow-600 hover:bg-yellow-700"
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

// Personality trait colors - CORRECTED
const TRAIT_COLORS = {
  A: { bg: "bg-amber-500", light: "bg-amber-100", hex: "#f59e0b", dark: "amber-700", button: "bg-amber-600 hover:bg-amber-700", text: "text-amber-600" }, // Clock/Orange - CORRECT
  B: { bg: "bg-red-500", light: "bg-red-100", hex: "#ef4444", dark: "red-700", button: "bg-red-600 hover:bg-red-700", text: "text-red-600" }, // PH flag/Red - FIXED
  C: { bg: "bg-green-500", light: "bg-green-100", hex: "#22c55e", dark: "green-700", button: "bg-green-600 hover:bg-green-700", text: "text-green-600" }, // Flower/Green - FIXED
  D: { bg: "bg-violet-500", light: "bg-violet-100", hex: "#8b5cf6", dark: "violet-700", button: "bg-violet-600 hover:bg-violet-700", text: "text-violet-600" }, // Clipboard w/ Glasses/Violet - CORRECT
  E: { bg: "bg-blue-500", light: "bg-blue-100", hex: "#3b82f6", dark: "blue-700", button: "bg-blue-600 hover:bg-blue-700", text: "text-blue-600" }, // Trash Bin/Blue - FIXED
  F: { bg: "bg-yellow-500", light: "bg-yellow-100", hex: "#eab308", dark: "yellow-700", button: "bg-yellow-600 hover:bg-yellow-700", text: "text-yellow-600" } // Sand timer/Yellow - FIXED
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

const SHORT_TRAIT_DESCRIPTIONS = {
  A: "You optimize processes and value efficiency above all. You make things better, faster, and smarter.",
  B: "You're driven by compassion and community. Your innovations center around human needs.",
  C: "You champion sustainability. You create solutions that honor and protect our planet.",
  D: "You notice what others miss. Your analytical mind dissects problems with surgical precision.",
  E: "You see potential everywhere. Nothing goes to waste in your hands—you're a master of adaptation.",
  F: "You build for centuries, not seconds. Your work is your legacy, crafted with permanence in mind."
};

// ✅ RESULT IMAGES - these appear on the final results page (different/bigger images)
const RESULT_IMAGES = {
  A: "assets/images/The Efficient Engineer.png", // or whatever you want to call it
  B: "assets/images/The Practical People-Helper.png",
  C: "assets/images/The Environment Enthusiast.png",
  D: "assets/images/The Precise Problem-Solver.png",
  E: "assets/images/The Resourceful Recycler.png",
  F: "assets/images/The Timeless Thinker.png"
};

const INNOVATION_IMAGES = {
  A: [
    "assets/images/innovation images/EFFICIENT ENGINEER.png",
    "assets/images/innovation images/EFFICIENT ENGINEER (2).png"
  ],
  B: [
    "assets/images/innovation images/PRACTICAL PEOPLE HELPER.png",
    "assets/images/innovation images/PRACTICAL PEOPLE HELPER (2).png"
  ],
  C: [
    "assets/images/innovation images/ENVIRONMENTAL ENTHUSIAST.png",
    "assets/images/innovation images/ENVIRONMENTAL ENTHUSIAST (2).png"
  ],
  D: [
    "assets/images/innovation images/PRECISE PROBLEM SOLVER.png",
    "assets/images/innovation images/PRECISE PROBLEM SOLVER (2).png"
  ],
  E: [
    "assets/images/innovation images/RESOURCEFUL RECYCLER.png",
    "assets/images/innovation images/RESOURCEFUL RECYCLER (2).png"
  ],
  F: [
    "assets/images/innovation images/TIMELESS THINKER.png",
    "assets/images/innovation images/TIMELESS THINKER (2).png"
  ]
};