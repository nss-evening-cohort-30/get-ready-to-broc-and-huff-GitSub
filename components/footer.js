import { renderToDom } from "../utils/renderToDom.js";

export const createFooter = () => {
   const domString = `
    <nav class="navbar navbar-expand-sm">
      <ul class="navbar-nav">
        <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
          </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Repos</a>
         </li>
           <li class="nav-item">
           <a class="nav-link" href="#">Packages</a>
           </li>
          <li class="nav-item">
           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
       </ul>
    </nav>
    <br>
    <p>© 2025 GitReady to Broc & Huff. All rights reserved.</p>
  `;
  
const footer = document.querySelector('#footer-container');
//  footer.style.backgroundColor = '#C4C4C4';
//  footer.style.width = '100%';
//  footer.style.height = '96px';
//  footer.style.textAlign = 'left';
//  footer.style.marginTop = '20px';
//  footer.style.padding = '20px';
//  footer.style.boxSizing = 'border-box';

 footer.innerHTML = domString;
  

  renderToDom("#footer-container", domString);
}
