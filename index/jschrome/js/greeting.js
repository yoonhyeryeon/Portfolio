
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout-form");
const todoInput = document.querySelector("#todo-input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// loginForm.addEventListener("submit", onSubmit);


function logoutSubmit() {
    localStorage.removeItem(USERNAME_KEY);

}

function paintGreetings(username) {
    greeting.innerText = `😍HELLO, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
    todoInput.removeAttribute('disabled');
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    //show the form
} else {
    paintGreetings(savedUsername);
    //  show the greetings
}



function removeStorage() {
    localStorage.removeItem("username");
    localStorage.removeItem("todos");
}

logout.addEventListener("click",removeStorage);
