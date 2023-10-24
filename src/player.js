class Player {
  constructor(container) {
    this.container = container;
    this.width = 100;
    this.height = 100;
    this.x = 10;
    this.y = 340;
    this.vx = 0;
    this.bullets = [];
    this.hits = 30;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";

    this.element.style.background = `url(./assets/personaje1.png)`;
    this.element.style.backgroundSize = "cover";
    this.element.style.backgroundPosition = "bottom";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    this.container.appendChild(this.element);

    this.setListeners();
  }

  shoot() {
    this.bullets.push(
      new Bullet(
        this.container,
        this.x + this.width - 10,
        this.y + this.height / 2
      )
    );
  }

  move() {
    this.x += this.vx;

    if (this.x <= 0) {
      this.x = 0;
    }

    if (this.x + this.width >= this.container.offsetWidth) {
      this.x = this.container.offsetWidth - this.width;
    }

    this.element.style.left = `${this.x}px`;

    this.bullets.forEach((bullet) => {
      bullet.move();
    });

    this.cleanup();
  }

  cleanup() {
    const filteredBullets = this.bullets.filter((bullet) => {
      return bullet.x < this.container.offsetWidth;
    });

    this.bullets = filteredBullets;
  }

  setListeners() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          this.vx = 10;
          break;
        case "ArrowLeft":
          this.vx = -10;
          break;
        case "KeyF":
          this.shoot();
        default:
          console.log("estas parado");
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "ArrowRight":
        case "ArrowLeft":
          this.vx = 0;
          break;
        default:
          console.log("estas parado");
      }
    });
  }
}
