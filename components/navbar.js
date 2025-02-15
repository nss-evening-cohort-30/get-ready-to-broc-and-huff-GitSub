import { renderToDom } from "../utils/renderToDom.js";

export const createHeader = () => {
            const domString = `
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item" id="nav-overview">
                            <button class="nav-link active" aria-current="page">Overview</button>
                        </li>
                        <li class="nav-item" id="nav-repos">
                            <button class="nav-link">Repos</button>
                        </li>
                        <li class="nav-item" id="nav-projects">
                            <button class="nav-link">Projects</button>
                        </li>
                        <li class="nav-item" id="nav-packages">
                            <button class="nav-link">Packages</button>
                        </li>
                    </ul>
                </nav>
            `;
            
            const header = document.querySelector('#nav-container');
            // header.style.backgroundColor = '#C4C4C4';
            // header.style.width = '100%';
            // header.style.height = '96px';
            // header.style.textAlign = 'left';
            // header.style.padding = '20px';
            // header.style.boxSizing = 'border-box';
    
            
            header.innerHTML = domString;
            
            renderToDom("#nav-container", domString);
        }
       
