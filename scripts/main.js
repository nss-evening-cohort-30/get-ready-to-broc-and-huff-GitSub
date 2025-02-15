//imported functions, data, etc
import { createHeader } from "../components/navbar.js";
import { profile } from  "../components/profile.js";
import { repoCard } from "../components/repo-card.js"
import { pinnedRepoForm } from "../components/pinned-repo-form.js";
import { createFooter } from "../components/footer.js";
import { renderToDom } from "../utils/renderToDom.js";
import { projects } from "../data/reference.js";
// import { repositories } from "../data/reference.js";
import { packages } from "../data/reference.js";
import { profiles } from "../data/reference.js";
import { organizations } from "../data/reference.js";
import { sponsors } from "../data/reference.js";
import { pinnedRepositories } from "../data/reference.js";
//

// Profile
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
//

// Overview page
const overStart = () => {
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

  const eventListeners = () => {
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
  renderRepoCards(pinnedRepositories);
  renderPinnedForm();
  eventListeners();
}


//Packages page
const packStart = () => {
  //start of brocs packages page
  //main content innerHTML
    const mainContent = document.querySelector("#main-content")
    mainContent.innerHTML = `<div id="rendPack"></div>`
  //
  //basic loop through data to render it function
    const projectsOnDom = (a, b) => {
      let packItem = ""
      a.forEach((item) => {
        packItem += `<div class="pack-box-el">
        <h3 class="pack-title-el">${item.title}</h3>
        <p class="pack-desc-el">${item.description}</p>
        <button class="learn-El">Learn More</button></div>`
      })
      renderToDom(b, packItem)
    }
    projectsOnDom(packages, "#rendPack")
  //
  //form content innerhtml
    const formContainer = document.querySelector("#form-container")
    formContainer.innerHTML = `<h1 id="form-title-el">Create a new project</h1>
    <p id="form-desc-el">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</p>
    <form id="entry-el">
    <h3 id="form-name-el">Project board name</h3>
    <input id="form-entry-name-el">
    <h3 id="form-pro-desc-el">Description</h3><p id="form-prosub-desc-el">(optional)</p>
    <input id="form-entry-desc-el">
    <button type="submit" id="submit-el">Create project</button>
    </form>`
  //
  //form input button and new project without rendering to the dom
    const newProject = (e) => {
      e.preventDefault()
      let newPro = {
        project_id: projects.length + 1,
        title: document.querySelector("#form-entry-name-el").value,
        description: document.querySelector("#form-entry-desc-el").value,
        pinned: false,
        favorite: false,
        public: true
      }
      projects.push(newPro)
      formSubmission.reset()
    }
    const formSubmission = document.querySelector("#entry-el")
    formSubmission.addEventListener("submit", newProject)
  //
  //
  }
  //
  
  
  //Projects page
  const proStart = () => {
    //start of brocs project script
    //main content innerHTML
      const mainContent = document.querySelector("#main-content")
      mainContent.innerHTML = `<input id="pro-search-el" placeholder = "Search all projects">
          <div id="pro-view-el">
          <div id="pro-tab-el">
          </div>
          <div id="pro-item-el">
          </div>
          </div>`
    //
    //basic loop through data to render it function
      const projectsOnDom = (a, b) => {
        let proItem = ""
        a.forEach((item) => {
          proItem += `<p class="pro-title-el">${item.title}</p>
          <p class="pro-desc-el">${item.description}</p>`
        })
        renderToDom(b, proItem)
      }
      projectsOnDom(projects, "#pro-item-el")
    //
    //form content innerhtml
      const formContainer = document.querySelector("#form-container")
      formContainer.innerHTML = `<div id="pro-box-el">
      <h1 id="form-title-el">Create a new project</h1>
      <p id="form-desc-el">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</p>
      <form id="entry-el">
      <h3 id="form-name-el">Project board name</h3>
      <input id="form-entry-name-el">
      <h3 id="form-pro-desc-el">Description</h3>
      <p id="form-prosub-desc-el">(optional)</p>
      <input id="form-entry-desc-el">
      <button type="submit" id="submit-el">Create project</button>
      </form>
      </div>`
    //
    //form input button and new project
      const newProject = (e) => {
        e.preventDefault()
        let newPro = {
          project_id: projects.length + 1,
          title: document.querySelector("#form-entry-name-el").value,
          description: document.querySelector("#form-entry-desc-el").value,
          pinned: false,
          favorite: false,
          public: true
        }
        projects.push(newPro)
        projectsOnDom(projects, "#pro-item-el")
        formSubmission.reset()
      }
      const formSubmission = document.querySelector("#entry-el")
      formSubmission.addEventListener("submit", newProject)
    //
    //
    }
    //

//all of it put together and started
const startApp = () => {
  createHeader();
  createFooter();  
  renderProfile(profiles);
  const navOver = document.querySelector("#nav-overview")
  navOver.addEventListener("click", overStart)
  const navPack = document.querySelector("#nav-packages")
  navPack.addEventListener("click", packStart)
  const navPro = document.querySelector("#nav-projects")
  navPro.addEventListener("click", proStart)
}

startApp();
//
