import MainContainer from "./MainContainer/MainContainer.js";

const bodyElement = document.querySelector("body")!;

const mainContainer = new MainContainer(bodyElement);
mainContainer.render();
