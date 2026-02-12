const QuizUI = {
  // DOM Elements
  elements: {
    questionsList: document.getElementById("questions-list"),
    nextBtn: document.getElementById("next-btn"),
    header: document.getElementById("quiz-header"),
    sectionTitle: document.getElementById("section-title"),
    sectionFunFact: document.getElementById("section-fun-fact"),
    sectionImage: document.getElementById("section-image"), // ✅ ADD THIS
    questionsContainer: document.getElementById("questions-container"),
    sectionBox: document.getElementById("section-box")
  },
  
  // Update section appearance - NOW WITH IMAGE
  updateSectionTheme: (sectionIndex) => {
    QuizUI.elements.sectionTitle.textContent = CONFIG.sectionNames[sectionIndex];
    QuizUI.elements.sectionFunFact.textContent = CONFIG.sectionFunFacts[sectionIndex];
    
    // ✅ UPDATE SECTION IMAGE
    if (QuizUI.elements.sectionImage) {
      QuizUI.elements.sectionImage.src = CONFIG.sectionImages[sectionIndex];
      QuizUI.elements.sectionImage.alt = CONFIG.sectionNames[sectionIndex];
    }
    
    // Update body background
    CONFIG.sectionBackgrounds.forEach(bg => document.body.classList.remove(bg));
    document.body.classList.add(CONFIG.sectionBackgrounds[sectionIndex]);
    
    // Update header
    QuizUI.elements.header.className = `w-full ${CONFIG.sectionHeaderColors[sectionIndex]} text-white py-4 shadow-md mb-6`;
    
    // Update next button
    QuizUI.elements.nextBtn.className = `px-8 py-4 ${CONFIG.sectionAccentColors[sectionIndex]} text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105`;
  },
  
  // Render questions for current section
  renderQuestions: (sectionIndex, selectedAnswersRef) => {
    const startIdx = sectionIndex * CONFIG.questionsPerSection;
    const sectionQuestions = QUESTIONS.slice(startIdx, startIdx + CONFIG.questionsPerSection);
    
    QuizUI.elements.questionsList.innerHTML = sectionQuestions.map((q, index) => {
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
    
    LikertComponent.attachHandlers(selectedAnswersRef);
  },
  
  // Show results page - WITH RESULT IMAGE
  showResults: (scores, topTrait, topTraitColor) => {
    // Update header
    QuizUI.elements.header.className = `w-full ${topTraitColor.bg} text-white py-4 shadow-md mb-6`;
    
    // Update body
    CONFIG.sectionBackgrounds.forEach(bg => document.body.classList.remove(bg));
    document.body.classList.add(topTraitColor.light);
    
    // Render results
    QuizUI.elements.questionsContainer.innerHTML = `
      <div class="p-6 text-center">
        ${ResultsComponent.render(scores, topTrait, topTraitColor)}
        <button onclick="location.reload()" class="mt-8 px-8 py-4 ${topTraitColor.button} text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105">
          Take Quiz Again
        </button>
      </div>
    `;
    
    QuizUI.elements.nextBtn.style.display = 'none';
    QuizUI.elements.sectionBox.style.display = 'none';
  },
  
  // Hide results elements
  hideQuizElements: () => {
    QuizUI.elements.nextBtn.style.display = 'none';
    QuizUI.elements.sectionBox.style.display = 'none';
  }
};