const ScoringUtils = {
  // Initialize empty scores
  initScores: () => {
    return { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  },
  
  // Save answers for current section
  saveSectionAnswers: (currentSection, selectedAnswers, scores) => {
    const startIdx = currentSection * CONFIG.questionsPerSection;
    const newScores = { ...scores };
    
    for (let i = 0; i < CONFIG.questionsPerSection; i++) {
      const questionIdx = startIdx + i;
      const answer = selectedAnswers[questionIdx];
      
      if (answer) {
        const q = QUESTIONS[questionIdx];
        for (let p in q.weights) {
          if (q.text.includes("(Reversed)")) {
            newScores[p] += (7 - answer) * q.weights[p];
          } else {
            newScores[p] += answer * q.weights[p];
          }
        }
      }
    }
    
    return newScores;
  },
  
  // Sort traits by score
  getSortedTraits: (scores) => {
    return Object.entries(scores).sort((a, b) => b[1] - a[1]);
  }
};