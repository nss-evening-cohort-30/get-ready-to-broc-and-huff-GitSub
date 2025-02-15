import { renderToDom } from "../utils/renderToDom.js";

export const createHeader = () => {
            const domString = `
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Overview</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="repos.html">Repos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="packages.html">Packages</a>
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
       
