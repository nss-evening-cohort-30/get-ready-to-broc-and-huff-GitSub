import { profile } from  "../components/profile.js";
import { repoCard } from "../components/repo-card.js"
import { pinnedRepoForm } from "../components/pinned-repo-form.js";
import { renderToDom } from "../utils/renderToDom.js";
// import { projects } from "../data/reference.js";
// import { repositories } from "../data/reference.js";
// import { packages } from "../data/reference.js";
import { profiles } from "../data/reference.js";
import { organizations } from "../data/reference.js";
import { sponsors } from "../data/reference.js";
import { pinnedRepositories } from "../data/reference.js";


//render the profile section to the dom using the profile.js component, and passing it through the renderToDom Function
const renderProfile = (array) => {
  let profileString = "";
 
  array.forEach(item => {
    profileString += profile(item);
    renderToDom('#profile-container', profileString);
  });

  //renders the organizations object to the profile card
const renderOrgPhotos = (array) => {
  let orgPhotoString = "";

  array.forEach(item => {
    orgPhotoString += `
      <img src="assets/images/${item.photoId}" alt="${item.name} organization logo">
    `
    renderToDom("#organizations", orgPhotoString);
  });
}

//renders the sponsors photos to the profile card
const renderSponsorPhotos = (array) => {
  let sponsorPhotoString = "";

  array.forEach(item => {
    sponsorPhotoString += `
      <img src="assets/images/${item.photoId}" alt="${item.name} headshot">
    `
    renderToDom("#sponsors", sponsorPhotoString);
  });
}

renderOrgPhotos(organizations);
renderSponsorPhotos(sponsors);

}

//Render the pinned repo cards to the dom using the repo-card.js component, and passing it through the renderToDom function
const renderRepoCards = (array) => {
  let repoString = "";

  // Slice the array to a maximum of 6 items
  const arrayToRender = array.slice(0, 6);

  arrayToRender.forEach(item => {
    repoString += repoCard(item);
    renderToDom('#main-content', repoString);
  });
}




//renders the pinned-repo-form.js component to the dom, passing it through the renderToDom function
const renderPinnedForm = () => {
  let pinString = "";
  pinString += pinnedRepoForm;
  renderToDom("#form-container", pinString)
}



// const eventListeners = () => {
// //toggle favorite button (star)

// const toggleStar = (e) => {
//   if (e.target.id.includes("fav-btn")) {
//    const [, id] = e.target.id.split('--');

//    const index = profiles.findIndex(item => item.repo_id === Number(id));

//    pinnedRepositories[index].favorite = !pinnedRepositories[index].favorite;
  
//    renderRepoCards();
//   }
// }

// document.querySelector("#repo-card").addEventListener('click', toggleStar);




//adding new pinned repos to the dom using the pinned-repo-form
  const pinnedForm = document.querySelector('#pinned-form');

  pinnedForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newPinnedRepo = {
          title: document.querySelector('#title').value,
          description: document.querySelector('#description').value,
          language: document.querySelector('#sel1').value,
          timesFavorited: Math.floor(Math.random()* 999) +1,
          timesForked: Math.floor(Math.random()* 999) +1,
    }

    pinnedRepositories.unshift(newPinnedRepo);

    renderRepoCards(pinnedRepositories);
    pinnedForm.reset();
  });
}

const startApp = () => {  
  renderProfile(profiles);
  renderRepoCards(pinnedRepositories);
  renderPinnedForm();
  eventListeners();
}

startApp();
