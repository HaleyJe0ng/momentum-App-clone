function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const units = "metric"; //섭씨 온도 받기
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${units}`;
  /* units = metric 가끔 동작 안함!! */
  console.log(url);
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weatherIconPan = document.createElement("img");
      const weatherCont = document.querySelector("#weather");
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      //  var weatherIcon = data.weather[0].icon;
      //var iconurl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

      //  weatherIconPan.src = iconurl;
      // weatherCont.appendChild(weatherIconPan);
      weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
      city.innerText = ` / ${data.name}`;
    })
  );
  /*call url > google chrome 개발자도구 > Network에 들어가면 url을 요청한게 보임!
  응답 결과는 Preview에서 확인 가능하다!
  fetch()는 promise > 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어남!! 서버의 응답을 기다려야함. 
    fetch().then()을 해주면 json 값을 받을 수 있음 
  */
}

function onGeoError() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //브라우저에서 위치 좌표를 가져옴
