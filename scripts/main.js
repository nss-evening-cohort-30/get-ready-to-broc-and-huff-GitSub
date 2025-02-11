import { navBar } from "../components/navbar.js";
import { renderToDom } from "../utils/renderToDom.js";

const renderNav = () => {
  let navString = "";
  navString += navBar;
  renderToDom('#nav-container', navString);
}

renderNav();
