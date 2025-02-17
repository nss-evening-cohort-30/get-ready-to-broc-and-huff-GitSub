export const repoCard = (object) => {
  return `
    <div class="repo-card" id="repo-card--${object.repo_id}">
      <div class="repo-card-title">
        <h4>${object.title}</h4><br>
      </div>      
      <p class="repo-description">${object.description}</p>
    </div>
  `;
};
