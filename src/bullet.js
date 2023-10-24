class Bullet {
  constructor(container, x, y) {
    this.container = container;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.vx = 15;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.backgroundColor = "red";
    this.element.style.borderRadius = "100px";

    this.container.appendChild(this.element);
  }

  move() {
    this.x += this.vx;
    this.element.style.left = `${this.x}px`;
  }
}
