abstract class Component {
  private readonly element: Element;
  private readonly parentElement: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.parentElement = parentElement;
    this.element.className = className;

    parentElement.appendChild(this.element);
  }

  public render(): void {
    this.parentElement.appendChild(this.element);
  }

  abstract populate(): void;
}

export default Component;
