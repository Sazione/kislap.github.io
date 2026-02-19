const LikertComponent = {
// Generate Likert buttons for a question
generateButtons: (questionIndex) => {
  let buttons = '';
  for (let i = 1; i <= 6; i++) {
    // Gradient colors from red to green
    let borderColor = '';
    let textColor = '';
    let bgColor = '';
    let labelColor = '';
    
    if (i === 1) {
      borderColor = 'border-red-600';
      textColor = 'text-red-600';
      bgColor = 'bg-red-50';
      labelColor = 'text-red-600';
    } else if (i === 2) {
      borderColor = 'border-red-400';
      textColor = 'text-red-500';
      bgColor = 'bg-red-50';
      labelColor = 'text-red-500';
    } else if (i === 3) {
      borderColor = 'border-orange-400';
      textColor = 'text-orange-600';
      bgColor = 'bg-orange-50';
      labelColor = 'text-orange-600';
    } else if (i === 4) {
      borderColor = 'border-lime-400';
      textColor = 'text-lime-600';
      bgColor = 'bg-lime-50';
      labelColor = 'text-lime-600';
    } else if (i === 5) {
      borderColor = 'border-green-400';
      textColor = 'text-green-600';
      bgColor = 'bg-green-50';
      labelColor = 'text-green-600';
    } else if (i === 6) {
      borderColor = 'border-green-600';
      textColor = 'text-green-700';
      bgColor = 'bg-green-100';
      labelColor = 'text-green-700';
    }
    
    // Define labels for each number
    let label = '';
    if (i === 1) label = 'Strongly<br>Disagree';
    else if (i === 2) label = 'Moderately<br>Disagree';
    else if (i === 3) label = 'Slightly<br>Disagree';
    else if (i === 4) label = 'Slightly<br>Agree';
    else if (i === 5) label = 'Moderately<br>Agree';
    else if (i === 6) label = 'Strongly<br>Agree';
    
    buttons += `
      <div class="flex flex-col items-center">
        <button 
          data-question="${questionIndex}" 
          data-value="${i}"
          class="likert-btn w-12 h-12 rounded-full border-2 ${borderColor} ${bgColor} ${textColor} flex items-center justify-center font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-110 mb-1"
        >${i}</button>
        <span class="text-[10px] text-center ${labelColor} leading-tight">${label}</span>
      </div>
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
      
      // First, remove selected state from ALL buttons in this question
      document.querySelectorAll(`[data-question="${questionIdx}"]`).forEach(b => {
        // Remove selected state classes
        b.classList.remove('bg-red-500', 'bg-green-500', 'border-transparent');
        
        // Remove any inline styles
        b.style.color = '';
        b.style.backgroundColor = '';
        
        // Get the original value of this button
        const val = parseInt(b.dataset.value);
        
        // Restore original gradient colors based on value
        if (val === 1) {
          b.classList.remove('text-white');
          b.classList.add('border-red-600', 'text-red-600', 'bg-red-50');
        } else if (val === 2) {
          b.classList.remove('text-white');
          b.classList.add('border-red-400', 'text-red-500', 'bg-red-50');
        } else if (val === 3) {
          b.classList.remove('text-white');
          b.classList.add('border-orange-400', 'text-orange-600', 'bg-orange-50');
        } else if (val === 4) {
          b.classList.remove('text-white');
          b.classList.add('border-lime-400', 'text-lime-600', 'bg-lime-50');
        } else if (val === 5) {
          b.classList.remove('text-white');
          b.classList.add('border-green-400', 'text-green-600', 'bg-green-50');
        } else if (val === 6) {
          b.classList.remove('text-white');
          b.classList.add('border-green-600', 'text-green-700', 'bg-green-100');
        }
      });
      
      // Now add selected state to clicked button
      // Remove all color classes first
      this.classList.remove(
        'border-red-600', 'border-red-400', 'border-orange-400',
        'border-lime-400', 'border-green-400', 'border-green-600',
        'text-red-600', 'text-red-500', 'text-orange-600',
        'text-lime-600', 'text-green-600', 'text-green-700',
        'bg-red-50', 'bg-orange-50', 'bg-lime-50', 'bg-green-50', 'bg-green-100'
      );
      
      // Add selected state
      this.classList.add('border-transparent', 'text-white');
      
      if (value <= 3) {
        this.classList.add('bg-red-500');
      } else {
        this.classList.add('bg-green-500');
      }
      
      // Store the selected answer
      selectedAnswersRef[questionIdx] = value;
      console.log(`Question ${questionIdx + 1} selected: ${value}`);
    });
  });
}
};