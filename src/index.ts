import AppElement from "./AppElement/AppElement.js";

const bodyElement = document.querySelector("body")!;

const appElement = new AppElement(bodyElement);
appElement.render();
