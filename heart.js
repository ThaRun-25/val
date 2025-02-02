const hearts = [];
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6"];

class Heart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.theta = Math.random() * Math.PI * 2;
        
        const heartEl = document.createElement("div");
        heartEl.classList.add("heart");
        document.body.append(heartEl);
        
        const color = pinks[parseInt(Math.random() * pinks.length)];
        heartEl.style.background = color;

        const heartLeftEl = document.createElement("div");
        heartLeftEl.classList.add('left');
        heartLeftEl.style.background = color;
        heartEl.appendChild(heartLeftEl);

        const heartRightEl = document.createElement("div");
        heartRightEl.classList.add('right');
        heartRightEl.style.background = color;
        heartEl.appendChild(heartRightEl);

        this.el = heartEl;

        setTimeout(() => {
            this.el.style.opacity = "0"; // Fade out effect
            setTimeout(() => this.el.remove(), 2000); // Remove after fade-out
        }, 8000);
    }

    update() {
        this.x += Math.cos(this.theta) * 1;
        this.y += 1;
        this.theta += 0.01;
        this.el.style.left = `${this.x}px`;
        this.el.style.top = `${this.y}px`;
    }
}

setInterval(() => {
    const heart = new Heart(Math.random() * window.innerWidth, -100);
    hearts.push(heart);
}, 200);

setInterval(() => {
    hearts.forEach((heart) => heart.update());
}, 10);

function moveNoButton() {
    const noButton = document.querySelector(".no");
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 50);
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
