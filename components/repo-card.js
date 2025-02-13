export const repoCard = (object) => {
  return `
    <div class="repo-card">
      <div class="repo-card-title">
        <i class="fa-solid fa-book"></i>
        <h4>${object.title}</h4><br>
      </div>      
      <p class="repo-description">${object.description}</p>
      <div class="repo-details">
        <span class="language">
          <img src="assets/images/${object.language.toLowerCase()}.png" alt="${object.language} logo">
          <p>${object.language.toUpperCase()}</p>
        </span>
        <p>${object.favorite ? `<i class="fa-solid fa-star"></i>` : `<i class="fa-regular fa-star"></i>`} <span>${object.timesFavorited}</span></p>
        <p><i class="fa-solid fa-code-fork"></i> <span>${object.timesForked}</span></p>
      </div>
      
    </div>
  `;
}
