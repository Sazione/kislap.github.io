const QUESTIONS = [
  // Section 1: The Efficient Engineer (A)
  { text: "During groupwork, I suggest ways to save time and effort.", weights: { A:1 } },
  { text: "I enjoy improving an existing idea more than making something from the beginning.", weights: { A:1 } },
  { text: "I want to do tests to know which option works best.", weights: { A:1 } },
  { text: "I think that there are inventions that could make daily life easier.", weights: { A:1 } },
  { text: "I like making solutions that use less effort but keep good results.", weights: { A:1 } },
  { text: "I believe that solving problems should focus on saving time, effort, and money.", weights: { A:1 } },
  
  // Section 2: The Practical People-Helper (B)
  { text: "I immediately help when I see someone struggling.", weights: { B:1 } },
  { text: "I participate in volunteerism often.", weights: { B:1 } },
  { text: "I usually feel fulfilled rather than drained when helping someone.", weights: { B:1 } },
  { text: "I am motivated to help others because I genuinely care about their wellbeing.", weights: { B:1 } },
  { text: "I'm willing to work for a world where every human helps one another.", weights: { B:1 } },
  { text: "I put in the effort in making people smile.", weights: { B:1 } },
  
  // Section 3: The Environment Enthusiast (C)
  { text: "I segregate my trash wherever I go.", weights: { C:1 } },
  { text: "I save resources such as, but not limited to, electricity, water, and paper.", weights: { C:1 } },
  { text: "I avoid using plastic containers and would rather use reusable containers.", weights: { C:1 } },
  { text: "I use paper bags or reusable bags instead of plastic bags.", weights: { C:1 } },
  { text: "I pick up litter I see even if they're not from me.", weights: { C:1 } },
  { text: "I walk, bike, or commute instead of using private vehicles for transportation.", weights: { C:1 } },
  
  // Section 4: The Precise Problem-Solver (D)
  { text: "I am naturally drawn to issues that most people overlook.", weights: { D:1 } },
  { text: "I believe that it is time consuming and unnecessary to wait for all the facts before making a decision.", weights: { D:1 } }, // Note: This might be reversed-scored in practice
  { text: "If something malfunctions, I find myself trying to understand what happened first before asking others for help.", weights: { D:1 } },
  { text: "I see 'trial and error' as a way to gather data rather than as a series of failures.", weights: { D:1 } },
  { text: "I overlook the small details because I prefer to focus on the bigger picture.", weights: { D:1 } }, // Note: This might be reversed-scored
  { text: "I am motivated to refine and improve existing solutions to the persisting problems in our society.", weights: { D:1 } },
  
  // Section 5: The Resourceful Recycler (E)
  { text: "I am capable of improvising on doing a task when the materials I need for it is not available.", weights: { E:1 } },
  { text: "I can see the potential in objects aside from the standard purposes they usually are used for.", weights: { E:1 } },
  { text: "I am creative enough to not give up and work my way around, in times of limited resources.", weights: { E:1 } },
  { text: "I struggle to solve problems when I do not have the specific materials for it.", weights: { E:1 } }, // Reversed-scored
  { text: "I cannot start a task if I don't have every single tool that I need for it.", weights: { E:1 } }, // Reversed-scored
  { text: "I believe that new things and technologies can be made from everyday things that most if not all people have.", weights: { E:1 } },
  
  // Section 6: The Timeless Thinker (F)
  { text: "I care about the longevity of things.", weights: { F:1 } },
  { text: "I view innovation as something designed for permanence.", weights: { F:1 } },
  { text: "I strive to provide long-term solutions for persistent problems.", weights: { F:1 } },
  { text: "I am driven by the success of the future.", weights: { F:1 } },
  { text: "I view the past and the present as lessons for the future.", weights: { F:1 } },
  { text: "I care about leaving a mark on the world.", weights: { F:1 } },
];

console.log("✅ QUESTIONS loaded:", QUESTIONS.length);