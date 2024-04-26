const loginForm = document.querySelector("form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const greetingtext=document.querySelector("h1#greetingtext");
const username = localStorage.getItem("username");
const userclear = document.querySelector("button#userclear");
const hidden = "hidden";

function onLoginSubmit(event)
{
    localStorage.setItem("username",loginInput.value);
}
function clearuser()
{
    localStorage.removeItem("username");
}
if(username == null)
{
    loginForm.classList.remove(hidden);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else
{
    greetingtext.innerText= "Hello! "+ username;
    greeting.classList.remove(hidden);
    userclear.addEventListener("click",clearuser);
}
