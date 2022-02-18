const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

//HTML에서 뭔가 가져오는게 아니라, Javascript에서 뭔가 만들어서 HTML에 추가하는 방법을 쓸거임!!
const bgImage = document.createElement("img");

bgImage.src = `assets/img/background/${chosenImage}`;

document.body.style = `background: url(${bgImage.src});`;
//document.body.appendChild(bgImage); // body에 html을 추가하는 코드
