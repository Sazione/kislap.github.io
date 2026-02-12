const LikertComponent = {
  // Generate Likert buttons for a question
  generateButtons: (questionIndex) => {
    let buttons = '';
    for (let i = 1; i <= 6; i++) {
      const color = i <= 3 ? 'border-red-400 text-red-500' : 'border-green-400 text-green-500';
      buttons += `
        <button 
          data-question="${questionIndex}" 
          data-value="${i}"
          class="likert-btn w-12 h-12 rounded-full border-2 ${color} flex items-center justify-center font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-110"
        >${i}</button>
      `;
    }
    return buttons;
  },
  
  // Attach click handlers to buttons
  attachHandlers: (selectedAnswersRef) => {
    document.querySelectorAll('.likert-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const questionIdx = parseInt(this.dataset.question);
        const value = parseInt(this.dataset.value);
        
        // Remove selected state from all buttons in this question
        document.querySelectorAll(`[data-question="${questionIdx}"]`).forEach(b => {
          b.classList.remove('bg-red-500', 'bg-green-500', 'text-white', 'border-transparent');
          const val = parseInt(b.dataset.value);
          if (val <= 3) {
            b.classList.add('border-red-400', 'text-red-500');
          } else {
            b.classList.add('border-green-400', 'text-green-500');
          }
        });
        
        // Add selected state to clicked button
        this.classList.remove('border-red-400', 'border-green-400', 'text-red-500', 'text-green-500');
        this.classList.add('border-transparent', 'text-white');
        
        if (value <= 3) {
          this.classList.add('bg-red-500');
        } else {
          this.classList.add('bg-green-500');
        }
        
        // Store the selected answer
        selectedAnswersRef[questionIdx] = value;
      });
    });
  }
};