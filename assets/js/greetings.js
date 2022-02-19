const mainLogin = document.querySelector(".main--login");
const loginForm = mainLogin.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const mainGreetingCont = document.querySelector(".main--greetings");
const greeting = mainGreetingCont.querySelector(".user-container h1");
const logoutBtn = mainGreetingCont.querySelector(".main-header #logout");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  loginInput.value = "";
}

function paintGreetings(username) {
  const today = new Date();
  const hours = today.getHours();
  let greetingText = "";

  if (hours >= 22 || hours <= 4) greetingText = "Good Night";
  else if (hours > 4 && hours < 12) greetingText = "Good Morning";
  else if (hours >= 12 && hours <= 17) greetingText = "Good Afternoon";
  else greetingText = "Good Evening";

  greeting.innerText = `${greetingText}, ${username}!`;
  mainLogin.classList.add(HIDDEN_CLASSNAME);
  mainGreetingCont.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//logout
function onLogoutBtnClick() {
  if (savedUsername !== null) {
    mainLogin.classList.remove(HIDDEN_CLASSNAME);
    mainGreetingCont.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
  } else {
    console.log("Logout Error");
  }
}

logoutBtn.addEventListener("click", onLogoutBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);

if (savedUsername === null) {
  //SHOW THE FORM
  mainLogin.classList.remove(HIDDEN_CLASSNAME);
  mainGreetingCont.classList.add(HIDDEN_CLASSNAME);
} else {
  //HIDE THE FORM
  paintGreetings(savedUsername);
}
