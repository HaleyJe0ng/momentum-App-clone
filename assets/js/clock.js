const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}
  `;
}

getClock(); //처음 시작할때 바로 불러들여야함!
setInterval(getClock, 1000);
/*
const ddayCount = document.querySelector("#dday-count");

function getDday() {
  const day = new Date();
  const year = day.getFullYear();
  const christmas = new Date(`${year},11,24`);
  //var 객체명 = new Date(년, 월, 일, 시, 분, 초, 밀리세컨드);
  const elapsed = new Date(christmas - day);

  const date = Math.ceil(elapsed / (60 * 60 * 24 * 1000));
  const hours = String(
    Math.floor((elapsed % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((elapsed % (60 * 60 * 1000)) / (60 * 1000))
  ).padStart(2, "0");
  const seconds = String(Math.floor((elapsed % (60 * 1000)) / 1000)).padStart(
    2,
    "0"
  );

  `${days < 10 ? `0${days}` : days}d`;

  ddayCount.innerText = `${date}d ${hours}h ${minutes}m ${seconds}s`;
  console.log(`${date}d ${hours}h ${minutes}m ${seconds}s`);
}

getDday();
setInterval(getDday, 1000);
*/
