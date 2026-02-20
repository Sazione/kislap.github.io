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
    "⚡ You've been, Thunderstruck! But seriously, be careful around electricity                     ",
    "💝 <3 :D :) &#175;\_(&#12484;)_/&#175; ツ Be nice to people. Stay Determined                               ",
    "🌍 I like grass. I like trees. I like flowers. The world is nice.                                    ",
    "🔬 What's 10 + 9? (21). Not 67, please no.                                ",
    "♻️ Reduce, Reuse, and What? That's right, Recycle!                         ",
    "⏳ Time is relative. She's my grandma!                            "
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
  A: "As the Efficient Engineer, your “kislap” are the type of innovator that looks for better, faster, and smarter ways to do things. You look for solutions to save time, energy, and resources, whether in school, at home, or in everyday life. You are the kind of person who can turn simple ideas into useful inventions that help communities and industries work better. People with your mindset often thrive in fields like engineering, technology, and innovation, where creating better solutions matters. With your strive for improving systems, you could turn your “kislap” into efficient solutions that make life easier for every Filipino around you!",
  B: "As the Practial People-Helper, you are the type of innovator who focus around helping other people. You see problems that affect not only yourself, but also the community. As such, you try to make ways to help make the world a little brighter!",
  C: "As the Environment Enthusiast, you are the type of innovator whose main concern is the environment. Issues like global warming, deforestation, climate change, and environmental destruction deeply concern you. As such, you try to prevent the ruin of our beautiful world",
  D: "As the Precise Problem Solver, you are type of innovator who focuses on overlooked issues that others miss, diving deep into the “why’s” and “how’s” of the challenges you come across. You enjoy understanding the complexities of issues on your own before seeking the input of others and jumping to conclusions. A quick fix is not what you aim for, so when mistakes happen along the way, you do not see it as failure; instead, you see it as valuable information that will lead you closer to better solutions. Although your focus on precision admittedly takes longer, it helps you create solutions that are truly optimized and precise. People with your mindset make a natural fit for research, system analysis, and data science, among many others. These fields are known for being precise by spotting and solving hidden issues to boost progress. With your focus on details and refusal to settle for something that is just “good enough,” offer your “kislap” to take a step in solving problems in the Filipino community!",
  E: "As the Resourceful Recycler, you are the type of innovator that sees beyond the default purpose of everyday objects, and reimages it into extraordinary creations. You do not fear in handling problems without usual resources; in fact, you even thrive under the constraint, transforming accessible materials into functional solutions. Your ideas are proof that improvements does not necessitate advanced and expensive equipment—endless possibilities for enhancement can stem from even just the ordinary things that lie around. Turning the simple to groundbreaking, you are the reminder that true innovation is not about having more, but instead, seeing the “kislap” in what is already present in one’s hands. ",
  F: "As the Timeless Thinker, you are the type of innovator who cares deeply about the longevity of things. You seek permanent solutions for persistent problems and view the future as a better world. For you, the future is a blank canvas untapped with endless ideas and possibilities. While others get lost in the latest trends, you’re more focused on what will last. You pursue breakthroughs that will help and inspire others long after you’re gone. Go after your “kislap”—the future needs strong and capable minds like you! "
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