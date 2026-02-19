
// ==================== MAIN.JS ====================
// Application state
let currentSection = 0;
let scores = {};
let selectedAnswers = {};

// Initialize quiz - MUST be global function
window.initQuiz = function() {
  console.log("🚀 initQuiz called, starting quiz...");
  console.log("CONFIG exists:", typeof CONFIG !== 'undefined');
  console.log("QUESTIONS exists:", typeof QUESTIONS !== 'undefined');
  console.log("QUESTIONS length:", QUESTIONS ? QUESTIONS.length : 'undefined');
  console.log("ScoringUtils exists:", typeof ScoringUtils !== 'undefined');
  console.log("QuizUI exists:", typeof QuizUI !== 'undefined');
  
  currentSection = 0;
  
  if (typeof ScoringUtils !== 'undefined' && ScoringUtils.initScores) {
    scores = ScoringUtils.initScores();
    console.log("Scores initialized:", scores);
  } else {
    console.error("ScoringUtils.initScores not available!");
    scores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  }
  
  selectedAnswers = {};
  console.log("Calling showSection...");
  showSection();
};

function showSection() {
  console.log("📌 Showing section:", currentSection);
  
  // Check if CONFIG exists
  if (typeof CONFIG === 'undefined') {
    console.error("CONFIG is not defined! Check config.js");
    return;
  }
  
  // Reset selected answers for this section
  selectedAnswers = {};
  
  // Update UI theme
  if (typeof QuizUI !== 'undefined' && QuizUI.updateSectionTheme) {
    QuizUI.updateSectionTheme(currentSection);
  } else {
    console.error("QuizUI.updateSectionTheme not available!");
  }
  
  // Render questions
  if (typeof QuizUI !== 'undefined' && QuizUI.renderQuestions) {
    QuizUI.renderQuestions(currentSection, selectedAnswers);
  } else {
    console.error("QuizUI.renderQuestions not available!");
  }
  
  // Scroll to top
  if (typeof ScrollUtils !== 'undefined' && ScrollUtils.toTop) {
    ScrollUtils.toTop();
  }
}

// Event listener for next button
document.addEventListener('DOMContentLoaded', function() {
  console.log("📋 DOM loaded, setting up next button listener");
  
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    console.log("Next button found, attaching event listener");
    nextBtn.addEventListener("click", () => {
      console.log("👉 Next button clicked, current section:", currentSection);
      
      // Check if CONFIG exists
      if (typeof CONFIG === 'undefined') {
        console.error("CONFIG not defined!");
        return;
      }
      
      // Check if all questions answered
      const startIdx = currentSection * CONFIG.questionsPerSection;
      let allAnswered = true;
      let unansweredQuestions = [];
      
      for (let i = 0; i < CONFIG.questionsPerSection; i++) {
        if (!selectedAnswers[startIdx + i]) {
          allAnswered = false;
          unansweredQuestions.push(startIdx + i + 1);
        }
      }
      
      console.log("All answered?", allAnswered, "Unanswered:", unansweredQuestions);
      
      if (!allAnswered) {
        alert(`Please answer all 6 questions before continuing! Unanswered: ${unansweredQuestions.join(', ')}`);
        return;
      }
      
      // Save answers
      if (typeof ScoringUtils !== 'undefined' && ScoringUtils.saveSectionAnswers) {
        scores = ScoringUtils.saveSectionAnswers(currentSection, selectedAnswers, scores);
        console.log("Scores after saving:", scores);
      } else {
        console.error("ScoringUtils.saveSectionAnswers not available!");
      }
      
      // Move to next section
      currentSection++;
      console.log("Moving to next section:", currentSection);
      
      if (currentSection < QUESTIONS.length / CONFIG.questionsPerSection) {
        showSection();
      } else {
        console.log("🎉 Quiz complete! Showing results...");
        // Show results
        if (typeof ScrollUtils !== 'undefined' && ScrollUtils.toTopInstant) {
          ScrollUtils.toTopInstant();
        }
        
        if (typeof ScoringUtils !== 'undefined' && ScoringUtils.getSortedTraits) {
          const sortedTraits = ScoringUtils.getSortedTraits(scores);
          console.log("Sorted traits:", sortedTraits);
          
          const topTrait = sortedTraits[0][0];
          const topTraitColor = TRAIT_COLORS[topTrait];
          
          if (typeof QuizUI !== 'undefined' && QuizUI.showResults) {
            QuizUI.showResults(scores, topTrait, topTraitColor);
          }
        }
        confetti();
        
        // Scroll again after results load
        setTimeout(() => {
          if (typeof ScrollUtils !== 'undefined' && ScrollUtils.toTopInstant) {
            ScrollUtils.toTopInstant();
          }
        }, 50);
      }
    });
  } else {
    console.error("❌ Next button not found in DOM!");
  }
});

console.log("main.js loaded, initQuiz available:", typeof initQuiz !== 'undefined');
