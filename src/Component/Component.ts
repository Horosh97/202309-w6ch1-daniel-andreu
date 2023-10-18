abstract class Component {
  protected readonly element: Element;
  protected readonly parentElement: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.parentElement = parentElement;
    this.element.className = className;

    parentElement.appendChild(this.element);
  }

  public render(): void {
    this.parentElement.appendChild(this.element);
    this.populate();
  }

  protected abstract populate(): void;
}

export default Component;
