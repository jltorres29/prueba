class Enemy {
  constructor(container) {
    this.container = container;
    this.width = 70;
    this.height = 40;
    this.x = this.container.offsetWidth;
    this.y = 380;
    this.vx = -20;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";

    this.element.style.background = `url(./assets/enemy.webp)`;
    this.element.style.backgroundSize = "cover";
    this.element.style.backgroundPosition = "center";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    this.container.appendChild(this.element);
  }

  move() {
    this.x += this.vx;
    this.element.style.left = `${this.x}px`;
  }

  didCollide(obstacle) {
    const enemyRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      enemyRect.left < obstacleRect.right &&
      enemyRect.right > obstacleRect.left &&
      enemyRect.top < obstacleRect.bottom &&
      enemyRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
