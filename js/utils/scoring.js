const ScoringUtils = {
  // Initialize empty scores
  initScores: () => {
    console.log("Initializing scores");
    return { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  },
  
  // Save answers for current section - NO MORE REVERSED LOGIC
  saveSectionAnswers: (currentSection, selectedAnswers, scores) => {
    console.log("=== SAVING SECTION", currentSection, "===");
    const startIdx = currentSection * CONFIG.questionsPerSection;
    const newScores = { ...scores };
    
    for (let i = 0; i < CONFIG.questionsPerSection; i++) {
      const questionIdx = startIdx + i;
      const answer = selectedAnswers[questionIdx];
      const question = QUESTIONS[questionIdx];
      
      if (answer) {
        console.log(`\nQ${questionIdx + 1}: ${question.text}`);
        console.log("Answer:", answer);
        
        for (let trait in question.weights) {
          // SIMPLE: just add the answer (6 = strongly agree = high in trait)
          const points = answer * question.weights[trait];
          console.log(`  Trait ${trait}: +${points}`);
          newScores[trait] += points;
        }
      }
    }
    
    console.log("\nNew scores after section:", newScores);
    return newScores;
  },
  
  // Sort traits by score
  getSortedTraits: (scores) => {
    console.log("Sorting traits:", scores);
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    console.log("Sorted:", sorted);
    return sorted;
  }
};

console.log("✅ ScoringUtils loaded");