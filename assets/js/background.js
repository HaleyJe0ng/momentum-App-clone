const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImageSrc = `assets/img/background/${chosenImage}`;
document.body.style = `background: url(${bgImageSrc});`;
