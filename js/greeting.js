
// 만들어진 코드로 유저의 정보 유무를 함
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNSME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(evnet){
  evnet.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNSME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeings(username);
}

function paintGreeings(username){
  greeting.innerText = `Hello! Welcome to ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNSME);
}

// 정보를 받은 후
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  //Show the form
  loginForm.classList.remove(HIDDEN_CLASSNSME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show greeting
  paintGreeings(savedUsername);
}
console.log(savedUsername);