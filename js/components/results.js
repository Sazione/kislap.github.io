const ResultsComponent = {
  // Render results page - WITH RESULT IMAGE AND INNOVATIONS
  render: (scores, topTrait, topTraitColor) => {
    const sortedTraits = ScoringUtils.getSortedTraits(scores);
    
    let resultHTML = `
      <!-- ✅ BIG RESULT IMAGE - different from section icons -->
      <div class="flex justify-center mb-6">
        <img src="${RESULT_IMAGES[topTrait]}" alt="${TRAIT_NAMES[topTrait]}" class="object-cover rounded-xl shadow-lg border-4">
      </div>
      <h2 class="text-3xl font-bold mb-2" style="color: ${topTraitColor.hex};"> CONGRATULATIONS! </h2>
      <p class="text-xl mb-4">You are...</p>
      <div class='space-y-3 text-left'>
    `;
    
    // Display top trait with highlight
    resultHTML += `<div class="p-4 border-2 rounded-lg mb-4" style="background-color: ${topTraitColor.light.replace('bg-', '')}; border-color: ${topTraitColor.hex};">
      <p class="text-xl font-bold" style="color: ${topTraitColor.hex};">Your Dominant Style:</p>
      <p class="text-2xl font-black mt-1" style="color: ${topTraitColor.hex};">${TRAIT_NAMES[topTrait]}</p>
      <p class="text-md text-gray-700 justify mt-2">${TRAIT_DESCRIPTIONS[topTrait]}</p>
    </div>`;
    
    // Display all scores
    resultHTML += "<p class='font-semibold text-lg mt-4'>Your Complete Profile:</p>";
    sortedTraits.forEach(([trait, score]) => {
      const percentage = Math.round((score / 36) * 100);
      const traitColor = TRAIT_COLORS[trait];
      resultHTML += `<div class="mt-3">
        <div class="flex justify-between">
          <p><strong>${TRAIT_NAMES[trait]}</strong></p>
          <p class="font-bold" style="color: ${traitColor.hex};">${score} pts</p>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-3 mt-1">
          <div class="h-3 rounded-full" style="width: ${percentage}%; background-color: ${traitColor.hex};"></div>
        </div>
      </div>`;
    });
    
    // THEN display innovations for top trait
    resultHTML += `
      <div class="mt-6 pt-4 border-t-2 border-gray-300">
        <p class="font-semibold text-lg mb-3" style="color: ${topTraitColor.hex};">Innovations You're Connected To:</p>
    `;
    
    // Get images for this personality using the trait letter
    const personalityImages = INNOVATION_IMAGES[topTrait];
    
    // Add each innovation with its 2 images
    INNOVATIONS_BY_PERSONALITY[topTrait].forEach(innovation => {
      resultHTML += `
        <div class="mb-6">
          <h3 class="text-md font-bold mb-2" style="color: ${topTraitColor.hex};">${innovation}</h3>
          <div class="space-y-3">
            <div class="shadow-lg rounded-lg overflow-hidden">
              <img src="${personalityImages[0]}" alt="${innovation} - version 1" class="w-full object-contain">
            </div>
            <div class="shadow-lg rounded-lg overflow-hidden">
              <img src="${personalityImages[1]}" alt="${innovation} - version 2" class="w-full object-contain">
            </div>
          </div>
        </div>
      `;
    });
    
    resultHTML += `
      </div>
    `;
    
    resultHTML += "</div>";
    
    return resultHTML;
  }
};