const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const choosenImg = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./img/${choosenImg}`;
bgImage.classList.add("background-image");

console.log(bgImage);

document.body.appendChild(bgImage);