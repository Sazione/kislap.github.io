const QUESTIONS = [
  // Section 1: The Efficient Engineer
  { text: "During groupwork, I suggest ways to save time and effort.", weights: { A: 1 } },
  { text: "I enjoy improving an existing idea more than making something from the beginning.", weights: { A: 1 } },
  { text: "I want to do tests to know which option works best.", weights: { A: 1 } },
  { text: "I think that there are inventions that could make daily life easier.", weights: { A: 1 } },
  { text: "I like making solutions that use less effort but keep good results.", weights: { A: 1 } },
  { text: "I believe that solving problems should focus on saving time, effort, and money.", weights: { A: 1 } },
  
  // Section 2: The Practical People-Helper
  { text: "I instinctively help others when I see they are struggling.", weights: { B: 1 } },
  { text: "I actively seek out volunteering opportunities in my community.", weights: { B: 1 } },
  { text: "I prefer pets that are loyal and affectionate.", weights: { B: 1 } },
  { text: "I am motivated to help others because I genuinely care about their wellbeing.", weights: { B: 1 } },
  { text: "I believe a world where everyone helps one another is achievable.", weights: { B: 1 } },
  { text: "Making others smile brings me genuine joy.", weights: { B: 1 } },
  
  // Section 3: The Environment Enthusiast
  { text: "I actively try to reduce my carbon footprint in daily life.", weights: { C: 1 } },
  { text: "I feel a strong connection to nature and the outdoors.", weights: { C: 1 } },
  { text: "I believe businesses should be held accountable for environmental damage.", weights: { C: 1 } },
  { text: "I would pay more for sustainable and eco-friendly products.", weights: { C: 1 } },
  { text: "I get frustrated when I see people wasting resources like water or electricity.", weights: { C: 1 } },
  { text: "I think about how my choices today will affect the planet for future generations.", weights: { C: 1 } },
  
  // Section 4: The Precise Problem-Solver
  { text: "I am naturally drawn to issues that most people overlook.", weights: { D: 1 } },
  { text: "I believe that it is time consuming and unnecessary to wait for all the facts before making a decision. (Reversed)", weights: { D: 1 } },
  { text: "If something malfunctions, I find myself trying to understand what happened first before asking others for help.", weights: { D: 1 } },
  { text: "I see 'trial and error' as a way to gather data rather than as a series of failures.", weights: { D: 1 } },
  { text: "I overlook the small details because I prefer to focus on the bigger picture. (Reversed)", weights: { D: 1 } },
  { text: "I am motivated to refine and improve existing solutions to the persisting problems in our society.", weights: { D: 1 } },
  
  // Section 5: The Resourceful Recycler
  { text: "I am capable of improvising on doing a task when the materials I need for it is not available.", weights: { E: 1 } },
  { text: "I can see the potential in objects aside from the standard purposes they usually are used for.", weights: { E: 1 } },
  { text: "I am creative enough to not give up and work my way around, in times of limited resources.", weights: { E: 1 } },
  { text: "I struggle to solve problems when I do not have the specific materials for it. (Reversed)", weights: { E: 1 } },
  { text: "I cannot start a task if I don't have every single one tool that I need for it. (Reversed)", weights: { E: 1 } },
  { text: "I believe that new things and technologies can be made from everyday things that most if not all people have.", weights: { E: 1 } },
  
  // Section 6: The Timeless Thinker
  { text: "I am sentimental about enduring my legacy.", weights: { F: 1 } },
  { text: "I view innovation as something designed for permanence.", weights: { F: 1 } },
  { text: "I strive to provide long-term solutions for persistent problems.", weights: { F: 1 } },
  { text: "I am driven by the success of the future.", weights: { F: 1 } },
  { text: "I view the past and the present as lessons for the future.", weights: { F: 1 } },
  { text: "I care about leaving a mark on the world.", weights: { F: 1 } }
];