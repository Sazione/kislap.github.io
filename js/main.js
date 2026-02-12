// Application state
let currentSection = 0;
let scores = ScoringUtils.initScores();
let selectedAnswers = {};

// Initialize quiz
function initQuiz() {
  showSection();
}

function showSection() {
  // Reset selected answers for this section
  selectedAnswers = {};
  
  // Update UI theme
  QuizUI.updateSectionTheme(currentSection);
  
  // Render questions
  QuizUI.renderQuestions(currentSection, selectedAnswers);
  
  // Scroll to top
  ScrollUtils.toTop();
}

// Event listener for next button
document.getElementById("next-btn").addEventListener("click", () => {
  // Check if all questions answered
  const startIdx = currentSection * CONFIG.questionsPerSection;
  let allAnswered = true;
  
  for (let i = 0; i < CONFIG.questionsPerSection; i++) {
    if (!selectedAnswers[startIdx + i]) {
      allAnswered = false;
      break;
    }
  }
  
  if (!allAnswered) {
    alert("Please answer all 6 questions before continuing!");
    return;
  }
  
  // Save answers
  scores = ScoringUtils.saveSectionAnswers(currentSection, selectedAnswers, scores);
  
  // Move to next section
  currentSection++;
  
  if (currentSection < QUESTIONS.length / CONFIG.questionsPerSection) {
    showSection();
  } else {
    // Show results
    ScrollUtils.toTopInstant();
    
    const sortedTraits = ScoringUtils.getSortedTraits(scores);
    const topTrait = sortedTraits[0][0];
    const topTraitColor = TRAIT_COLORS[topTrait];
    
    QuizUI.showResults(scores, topTrait, topTraitColor);
    
    // Scroll again after results load
    setTimeout(() => ScrollUtils.toTopInstant(), 50);
  }
});

// Start the quiz
window.onload = initQuiz;