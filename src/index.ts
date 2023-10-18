import MainContainer from "./MainContainer/MainContainer";

const bodyElement = document.querySelector("body")!;

const mainContainer = new MainContainer(bodyElement);
mainContainer.render();
