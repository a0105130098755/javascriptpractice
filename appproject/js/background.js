const images = ["02.jpeg","03.jpeg","04.jpeg","06.jpeg","07.jpeg","08.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);