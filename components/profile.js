export const profile = (object) => {
  return `
  <div class="profile-div">
    <img src="assets/images/angry-guy.png" alt="an angry programmer screams at their computer">
    <h3>${object.name}</h3>
    <h6>${object.username}</h6>
    <p class="profile-description">${object.description}</p>
    <div class="profile-btn-container">
      ${object.isFollowing
        ? `<button id="follow-btn--${object.id}">Following</button>`
        : `<button id="follow-btn--${object.id}">Follow</button>`}
      ${object.sponsor 
        ? `<button id="heart-btn--${object.id}"><i class="fa-solid fa-heart"></i> Sponsor</button>` 
        : `<button id="heart-btn--${object.id}"><i class="fa-regular fa-heart"></i> Sponsor</button>` }
      <button>...</button>
    </div>
    <div class="follow-container">
      <p>
        <i class="fa-solid fa-user-group"></i><span id ="followers-count-${object.id}"> ${object.followers}</span> Followers | ${object.following} Following | 
        ${object.favorite 
          ? `<i class="fa-solid fa-star fav-btn" id="fav-btn--${object.id}"></i>` 
          : `<i class="fa-regular fa-star fav-btn" id="fav-btn--${object.id}"></i>`} 
        <span id="times-fav-${object.id}">${object.timesFavorited}</span>
      </p>
    </div>
    <div class="profile-info">
      <p>
        <i class="fa-solid fa-location-dot"></i> ${object.location}<br>
        <i class="fa-solid fa-envelope"></i> ${object.email}<br>
        <i class="fa-solid fa-link"></i><a href="${object.website}"> ${object.website}</a><br>
        <i class="fa-brands fa-twitter"></i> ${object.social}<br>
      </p>
    </div>
    <div class="highlights">
      <h6>Highlights</h6>
      <p>
        <i class="fa-solid fa-asterisk"></i> Arctic Code Vault Contributer <br>
        <i class="fa-brands fa-github"></i> GitHub Star <br>
        <i class="fa-solid fa-shield-virus"></i> PRO <br>
      </p>
    </div>
    <h6 class="left">Organizations</h6>
    <div id="organizations"></div>
    <h6 class="left">Sponsors</h6>
    <div id="sponsors"></div>
  </div>
  `;
};

        
        
        
        
        
        