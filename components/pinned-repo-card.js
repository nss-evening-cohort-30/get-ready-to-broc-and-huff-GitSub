export const pinnedRepoCard = (object) => {
  return `
    <div class="pinned-repo-card" id="repo-card-${object.repo_id}">
      <div class="pinned-repo-card-title">
        <i class="fa-solid fa-book"></i>
        <h4>${object.title}</h4><br>
      </div>      
      <p class="pinned-repo-description">${object.description}</p>
      <div class="pinned-repo-details">
        <span class="language">
          <img src="assets/images/${object.language.toLowerCase()}.png" alt="${object.language} logo">
          <p>${object.language.toUpperCase()}</p>
        </span>
        <p>
          ${object.favorite 
            ? `<i class="fa-solid fa-star" id="fav-btn--${object.repo_id}"></i>` 
            : `<i class="fa-regular fa-star" id="fav-btn--${object.repo_id}"></i>`} 
          <span id="times-fav-${object.repo_id}">${object.timesFavorited}</span>
        </p>
        <p><i class="fa-solid fa-code-fork"></i> <span>${object.timesForked}</span></p>
        <button id="delete-btn-pinned--${object.repo_id}"><i class="fa-regular fa-trash-can"></i></button>
      </div>
    </div>
  `;
};
