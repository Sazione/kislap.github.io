const ResultsComponent = {
  // Render results page - WITH RESULT IMAGE AND INNOVATIONS
  render: (scores, topTrait, topTraitColor) => {
    const sortedTraits = ScoringUtils.getSortedTraits(scores);
    
    let resultHTML = `
      <!-- ✅ BIG RESULT IMAGE - different from section icons -->
      <h2 class="text-3xl font-bold mb-2" style="color: ${topTraitColor.hex};"> CONGRATULATIONS! </h2>
      <div class="flex justify-center mb-6">
        <img src="${RESULT_IMAGES[topTrait]}" alt="${TRAIT_NAMES[topTrait]}" class="w-3/4 h-3/4 object-contain rounded-xl">
      </div>
      <p class="text-xl mb-4">You are...</p>
      <div class='space-y-3 text-left'>
    `;
    
    // Display top trait with highlight
    resultHTML += `<div class="p-4 border-2 rounded-lg mb-4" style="background-color: ${topTraitColor.light.replace('bg-', '')}; border-color: ${topTraitColor.hex};">
      <p class="text-xl font-black mt-1" style="color: ${topTraitColor.hex};">${TRAIT_NAMES[topTrait]}</p>
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
    
    // Add inspirational message before innovations
    resultHTML += `
      <div class="mt-6 p-4 bg-gray-50 rounded-lg italic text-gray-700 border-l-4" style="border-left-color: ${topTraitColor.hex};">
        <p>To further fuel your “kislap,” here are some Filipino-made and Filipino-serving Science & Technologies crafted like a true ${TRAIT_NAMES[topTrait]}! Showing how they were able to pursue their “kislap”, then you certainly can do it too!</p>
      </div>
    `;
    
    // Add innovations section
    resultHTML += `
      <div class="mt-4 pt-2">
        <p class="font-semibold text-lg mb-3" style="color: ${topTraitColor.hex};">Innovations You're Connected To:</p>
    `;
    
    // Get the two images for this personality
    const images = INNOVATION_IMAGES[topTrait];
    
    // Add both images
    resultHTML += `<img src="${images[0]}" class="w-full object-contain rounded-lg shadow-lg mb-4">`;
    resultHTML += `<img src="${images[1]}" class="w-full object-contain rounded-lg shadow-lg">`;
    
    resultHTML += `</div>`; // Close innovations div
    resultHTML += "</div>"; // Close the main space-y-3 div
    
    return resultHTML;
  }
};