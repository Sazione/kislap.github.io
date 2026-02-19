const QuizUI = {
  // DOM Elements
  elements: {
    questionsList: document.getElementById("questions-list"),
    nextBtn: document.getElementById("next-btn"),
    header: document.getElementById("quiz-header"),
    navbar: document.getElementById("quiz-navbar"), // ADD THIS
    sectionTitle: document.getElementById("section-title"),
    sectionFunFact: document.getElementById("section-fun-fact"),
    sectionImage: document.getElementById("section-image"),
    questionsContainer: document.getElementById("questions-container"),
    sectionBox: document.getElementById("section-box")
  },
  
  // Update section appearance
  updateSectionTheme: (sectionIndex) => {
    console.log("QuizUI.updateSectionTheme called for section:", sectionIndex);
    
    // Update section title
    if (QuizUI.elements.sectionTitle) {
      QuizUI.elements.sectionTitle.textContent = CONFIG.sectionNames[sectionIndex];
    }
    
    // Update fun fact
    if (QuizUI.elements.sectionFunFact) {
      QuizUI.elements.sectionFunFact.textContent = CONFIG.sectionFunFacts[sectionIndex];
    }
    
    // Update section image
    if (QuizUI.elements.sectionImage) {
      QuizUI.elements.sectionImage.src = CONFIG.sectionImages[sectionIndex];
      QuizUI.elements.sectionImage.alt = CONFIG.sectionNames[sectionIndex];
    }
    
    // Update body background
    CONFIG.sectionBackgrounds.forEach(bg => document.body.classList.remove(bg));
    document.body.classList.add(CONFIG.sectionBackgrounds[sectionIndex]);
    
    // UPDATE NAVBAR - this is the only new part
    if (QuizUI.elements.navbar) {
      // Remove all bg-* classes
      const navbar = QuizUI.elements.navbar;
      navbar.className = navbar.className.replace(/bg-\w+(-\d+)?/g, '');
      // Add new background color
      navbar.classList.add(CONFIG.sectionHeaderColors[sectionIndex]);
    }
    
    // Update header
    if (QuizUI.elements.header) {
      QuizUI.elements.header.className = `w-full ${CONFIG.sectionHeaderColors[sectionIndex]} text-white py-4 shadow-md mb-6`;
    }
    
    // Update next button
    if (QuizUI.elements.nextBtn) {
      QuizUI.elements.nextBtn.className = `px-8 py-4 ${CONFIG.sectionAccentColors[sectionIndex]} text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105`;
    }
  },
  
  // Render questions for current section
  renderQuestions: (sectionIndex, selectedAnswersRef) => {
    console.log("QuizUI.renderQuestions called for section:", sectionIndex);
    
    const startIdx = sectionIndex * CONFIG.questionsPerSection;
    const sectionQuestions = QUESTIONS.slice(startIdx, startIdx + CONFIG.questionsPerSection);
    
    if (!QuizUI.elements.questionsList) {
      console.error("questionsList element not found!");
      return;
    }
    
    // Generate HTML for questions
    const questionsHTML = sectionQuestions.map((q, index) => {
      const questionNumber = startIdx + index + 1;
      return `
        <div class="border-b border-gray-200 pb-6 last:border-0">
          <p class="text-lg font-semibold mb-4">${questionNumber}. ${q.text}</p>
          <div class="flex justify-center w-full" id="question-${startIdx + index}">
            <div class="flex justify-center space-x-3">
              ${LikertComponent.generateButtons(startIdx + index)}
            </div>
          </div>
          ${q.text.includes("(Reversed)") ? '<p class="text-xs text-gray-400 italic mt-1 text-center">(Reverse scored)</p>' : ''}
        </div>
      `;
    }).join('');
    
    QuizUI.elements.questionsList.innerHTML = questionsHTML;
    
    // Attach click handlers
    LikertComponent.attachHandlers(selectedAnswersRef);
  },
  
  // Show results page
  showResults: (scores, topTrait, topTraitColor) => {
    console.log("QuizUI.showResults called");
    
    // Update NAVBAR for results
    if (QuizUI.elements.navbar) {
      const navbar = QuizUI.elements.navbar;
      navbar.className = navbar.className.replace(/bg-\w+(-\d+)?/g, '');
      navbar.classList.add(topTraitColor.bg);
    }
    
    // Update header
    if (QuizUI.elements.header) {
      QuizUI.elements.header.className = `w-full ${topTraitColor.bg} text-white py-4 shadow-md mb-6`;
    }
    
    // Update body
    CONFIG.sectionBackgrounds.forEach(bg => document.body.classList.remove(bg));
    document.body.classList.add(topTraitColor.light);
    
    // Render results
    if (QuizUI.elements.questionsContainer) {
      QuizUI.elements.questionsContainer.innerHTML = `
        <div class="p-6 text-center">
          ${ResultsComponent.render(scores, topTrait, topTraitColor)}
          <button onclick="location.reload()" class="mt-8 px-8 py-4 ${topTraitColor.button} text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105">
            Take Quiz Again
          </button>
        </div>
      `;
    }
    
    if (QuizUI.elements.nextBtn) QuizUI.elements.nextBtn.style.display = 'none';
    if (QuizUI.elements.sectionBox) QuizUI.elements.sectionBox.style.display = 'none';
  },
  
  // Hide results elements
  hideQuizElements: () => {
    if (QuizUI.elements.nextBtn) QuizUI.elements.nextBtn.style.display = 'none';
    if (QuizUI.elements.sectionBox) QuizUI.elements.sectionBox.style.display = 'none';
  }
};

console.log("✅ QuizUI loaded successfully");