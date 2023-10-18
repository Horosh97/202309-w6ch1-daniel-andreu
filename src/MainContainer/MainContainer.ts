import Component from "../Component/Component.js";

class MainContainer extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "main-container");

    parentElement.appendChild(this.element);
  }

  protected populate(): undefined {
    return undefined;
  }
}

export default MainContainer;
