const QUESTIONS = [
  // Section 1: The Efficient Engineer (A)
  { text: "During groupwork, I suggest ways to save time and effort.", weights: { A:1 } },
  { text: "I enjoy improving an existing idea more than making something from the beginning.", weights: { A:1 } },
  { text: "I want to do tests to know which option works best.", weights: { A:1 } },
  { text: "I think that there are inventions that could make daily life easier.", weights: { A:1 } },
  { text: "I like making solutions that use less effort but keep good results.", weights: { A:1 } },
  { text: "I believe that solving problems should focus on saving time, effort, and money.", weights: { A:1 } },
  
  // Section 2: The Practical People-Helper (B)
  { text: "I instinctively help others when I see they are struggling.", weights: { B:1 } },
  { text: "I actively seek out volunteering opportunities in my community.", weights: { B:1 } },
  { text: "I prefer pets that are loyal and affectionate.", weights: { B:1 } },
  { text: "I am motivated to help others because I genuinely care about their wellbeing.", weights: { B:1 } },
  { text: "I believe a world where everyone helps one another is achievable.", weights: { B:1 } },
  { text: "Making others smile brings me genuine joy.", weights: { B:1 } },
  
  // Section 3: The Environment Enthusiast (C)
  { text: "I actively try to reduce my carbon footprint in daily life.", weights: { C:1 } },
  { text: "I feel a strong connection to nature and the outdoors.", weights: { C:1 } },
  { text: "I believe businesses should be held accountable for environmental damage.", weights: { C:1 } },
  { text: "I would pay more for sustainable and eco-friendly products.", weights: { C:1 } },
  { text: "I get frustrated when I see people wasting resources like water or electricity.", weights: { C:1 } },
  { text: "I think about how my choices today will affect the planet for future generations.", weights: { C:1 } },
  
  // Section 4: The Precise Problem-Solver (D) - NO MORE REVERSED
  { text: "I am naturally drawn to issues that most people overlook.", weights: { D:1 } },
  { text: "I carefully analyze all available information before making decisions.", weights: { D:1 } }, // was reversed
  { text: "When something malfunctions, I systematically diagnose the root cause.", weights: { D:1 } },
  { text: "I view failures as valuable data for future improvements.", weights: { D:1 } },
  { text: "I pay close attention to small details in my work.", weights: { D:1 } }, // was reversed
  { text: "I am motivated to refine and improve existing solutions to persisting problems.", weights: { D:1 } },
  
  // Section 5: The Resourceful Recycler (E) - NO MORE REVERSED
  { text: "I can easily improvise when I don't have the exact materials I need.", weights: { E:1 } },
  { text: "I see creative potential in ordinary objects beyond their intended use.", weights: { E:1 } },
  { text: "I find creative ways to work around limited resources.", weights: { E:1 } },
  { text: "I can solve problems effectively even without specialized tools.", weights: { E:1 } }, // was reversed
  { text: "I am comfortable starting tasks even when I don't have every tool I might need.", weights: { E:1 } }, // was reversed
  { text: "I believe everyday items can be transformed into something new and useful.", weights: { E:1 } },
  
  // Section 6: The Timeless Thinker (F)
  { text: "I am sentimental about enduring my legacy.", weights: { F:1 } },
  { text: "I view innovation as something designed for permanence.", weights: { F:1 } },
  { text: "I strive to provide long-term solutions for persistent problems.", weights: { F:1 } },
  { text: "I am driven by the success of the future.", weights: { F:1 } },
  { text: "I view the past and the present as lessons for the future.", weights: { F:1 } },
  { text: "I care about leaving a mark on the world.", weights: { F:1 } },
];

console.log("✅ QUESTIONS loaded:", QUESTIONS.length);