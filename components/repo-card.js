export const repoCard = (object) => {
  return `
    <div class="repo-card" id="repo-card--${object.repo_id}">
      <div class="repo-card-title">
        <h4>${object.title}</h4>
        <button id="delete-btn-repo--${object.repo_id}"><i class="fa-regular fa-trash-can"></i></button>
      </div>
      <div>
        <p class="repo-description">${object.description}</p>
      </div>     
      
    </div>
  `;
};
