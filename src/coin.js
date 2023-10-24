class Coin {
  constructor(container) {
    this.container = container;
    this.width = 30;
    this.height = 30;
    this.x = 100;
    this.y = 310;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";

    this.element.style.background = `url(./assets/coin.png)`;
    this.element.style.backgroundSize = "cover";
    this.element.style.backgroundPosition = "bottom";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.backgroundColor = this.color;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    this.container.appendChild(this.element);
  }
}
