//imported functions, data, etc
import { createHeader } from "../components/navbar.js";
import { profile } from  "../components/profile.js";
import { pinnedRepoCard } from "../components/pinned-repo-card.js";
import { pinnedRepoForm } from "../components/pinned-repo-form.js";
import { repoCard } from "../components/repo-card.js";
import { repoForm } from "../components/repo-form.js";
import { createFooter } from "../components/footer.js";
import { renderToDom } from "../utils/renderToDom.js";
import { projects } from "../data/reference.js";
import { repositories } from "../data/reference.js";
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
      const arrayToRender = array.slice(0, 6);
    
      arrayToRender.forEach(item => {
        repoString += pinnedRepoCard(item);
      });
    
      renderToDom('#main-content', repoString);
    };
  
    const renderPinnedForm = () => {
      let pinString = pinnedRepoForm;
      renderToDom("#form-container", pinString);
      attachPinnedFormListener();
    };
  
    const attachPinnedFormListener = () => {
      const pinnedForm = document.querySelector('#pinned-form');
      if (pinnedForm) {
        pinnedForm.addEventListener('submit', (e) => {
          e.preventDefault();
  
          const newPinnedRepo = {
            repo_id: pinnedRepositories.length + 1,
            title: document.querySelector('#title').value,
            description: document.querySelector('#description').value,
            language: document.querySelector('#sel1').value,
            timesFavorited: Math.floor(Math.random() * 999) + 1,
            timesForked: Math.floor(Math.random() * 999) + 1,
          };
  
          pinnedRepositories.unshift(newPinnedRepo);
          renderRepoCards(pinnedRepositories);
          pinnedForm.reset();
        });
      } else {
        console.error("Pinned Form not found.");
      }
    };
  
    renderRepoCards(pinnedRepositories);
    renderPinnedForm();
  };


const toggleFollow = (e) => {
    if (e.target.id.includes("follow-btn")) {
        const [, id] = e.target.id.split('--');
        const index = profiles.findIndex(item => item.id === Number(id));

        if (index !== -1) {
            // Toggle following state
            profiles[index].isFollowing = !profiles[index].isFollowing;

            // Update follower count
            profiles[index].followers += profiles[index].isFollowing ? 1 : -1;

            // Update the followers count in the UI
            const followersCountEl = document.querySelector(`#followers-count-${id}`);
            if (followersCountEl) {
                followersCountEl.textContent = `${profiles[index].followers} Followers`;
            }

            // Re-render profile
            renderProfile(profiles);
        }
    }
};


  //Toggle the Heart Icon on the Sponsor Button
  const toggleHeart = (e) => {
    if (e.target.id.includes("heart-btn")) {
      const [, id] = e.target.id.split('--');
      const index = profiles.findIndex(item => item.id === Number(id));

      if (index !== -1){
        // Toggle profile sponsor state
        profiles[index].sponsor = !profiles[index].sponsor;

        // Ensure we are targeting the correct <i> element
        const heartIcon = e.target.tagName === "I" ? e.target : e.target.querySelector("i");
        
        if (heartIcon) {
          heartIcon.classList.toggle("fa-solid");
          heartIcon.classList.toggle("fa-regular");
        }

        // Re-render profile
        renderProfile(profiles);
      }
    }
};



  //Toggle Star Functionality for both the profile section and pinned repos section
  const toggleStar = (e) => {
    if (e.target.id.includes("fav-btn")) {
        const [, id] = e.target.id.split('--');
        const pinIndex = pinnedRepositories.findIndex(item => item.repo_id === Number(id));
        const profIndex = profiles.findIndex(item => item.id === Number(id));

        if (pinIndex !== -1) {
            // Toggle repo favorite state
            pinnedRepositories[pinIndex].favorite = !pinnedRepositories[pinIndex].favorite;
            
            // Update timesFavorited count correctly
            pinnedRepositories[pinIndex].timesFavorited += pinnedRepositories[pinIndex].favorite ? 1 : -1;

            // Update only the displayed count for repos
            const repoFavCountEl = document.querySelector(`#times-fav-${id}`);
            if (repoFavCountEl) {
                repoFavCountEl.textContent = pinnedRepositories[pinIndex].timesFavorited;
            }
        }

        if (profIndex !== -1) {
            // Toggle profile favorite state
            profiles[profIndex].favorite = !profiles[profIndex].favorite;
            
            // Update timesFavorited count correctly
            profiles[profIndex].timesFavorited += profiles[profIndex].favorite ? 1 : -1;

            // Update only the displayed count for profiles
            const profFavCountEl = document.querySelector(`#times-fav-${id}`);
            if (profFavCountEl) {
                profFavCountEl.textContent = profiles[profIndex].timesFavorited;
            }
        }

        // Toggle the star icon class
        e.target.classList.toggle("fa-solid");
        e.target.classList.toggle("fa-regular");

        // Re-render profile and repo sections
        renderProfile(profiles);
        renderRepoCards(pinnedRepositories);
    }
};


const eventListeners = () => {
  // //toggle favorite button (star)
  document.querySelector('#main-content').addEventListener('click', toggleStar);
  document.querySelector('#profile-container').addEventListener('click', toggleStar);
  document.querySelector('#profile-container').addEventListener('click', toggleHeart);
  document.querySelector('#profile-container').addEventListener('click', toggleFollow);

  const navOver = document.querySelector("#nav-overview")
  navOver.addEventListener("click", overStart)
  const navRepo = document.querySelector('#nav-repos')
  navRepo.addEventListener('click', repoStart)
  const navPack = document.querySelector("#nav-packages")
  navPack.addEventListener("click", packStart)
  const navPro = document.querySelector("#nav-projects")
  navPro.addEventListener("click", proStart)
  }


//Repositories Page
const repoStart = () => {
  //replace the main content div contnents from overview with an empty div to render repos page when clicked
  const mainContent = document.querySelector('#main-content');
  mainContent.innerHTML = `
  <div id="repo-container"></div>
  <div id="render-repo"></div>
  `;

  const initializeSearch = () => {
    const searchContainer = document.querySelector('#repo-container');
    searchContainer.innerHTML = '<input class="form-control mb-3" id="repo-search" placeholder="Search repositories...">';
  };
  
  initializeSearch();

  //loop through data
  const reposOnDom = (array) => {
    let repoString = "";
  
    const arrayToRender = array.slice(0, 6);
    
    arrayToRender.forEach(item => {
      repoString += repoCard(item);
    });
    renderToDom('#render-repo', repoString);
  }
  reposOnDom(repositories);

  //Form Content
  const formContainer = document.querySelector("#form-container");
  formContainer.innerHTML = repoForm;

  const repoFormSubmission = document.querySelector("#repo-form");

  const createRepo = (e) => {
    e.preventDefault();
  
    const newRepo = {
      repo_id: repositories.length + 1,
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
    };
  
    repositories.unshift(newRepo); 
    reposOnDom(repositories);
    repoFormSubmission.reset();
  };
  
  repoFormSubmission.addEventListener("submit", createRepo);

  //Search Repos

  const search = (e) => {
    const userInput = e.target.value.toLowerCase();
    const searchResult = repositories.filter(item => 
      item.title.toLowerCase().includes(userInput) ||
      item.description.toLowerCase().includes(userInput)
    );
    reposOnDom(searchResult);    
  };

  const repoSearch = document.querySelector('#repo-search');
  repoSearch.addEventListener("keyup", search);


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
          </div>`
    //
    //basic loop through data to render it function
      const projectsOnDom = (a, b) => {
        let proItem = ""
        a.forEach((item) => {
          proItem += `<div id="pro-item-el">
          <p class="pro-title-el">${item.title}</p>
          <p class="pro-desc-el">${item.description}</p>
          </div>`
        })
        renderToDom(b, proItem)
      }
      projectsOnDom(projects, "#pro-tab-el")
    //
    //form content innerhtml
      const formContainer = document.querySelector("#form-container")
      formContainer.innerHTML = `<div id="pro-box-el">
      <h1 id="form-title-el">Create a new project</h1>
      <p id="form-desc-el">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</p>
      <form id="entry-el">
      <h3 id="form-name-el">Project board name:</h3>
      <input id="form-entry-name-el">
      <h3 id="form-pro-desc-el">Description (optional):</h3>
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
  overStart()
  createHeader();
  overStart();
  createFooter();  
  renderProfile(profiles);
  eventListeners();
}

startApp();
//
