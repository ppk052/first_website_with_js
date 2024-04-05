const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos=[];
const todo_key = "todos";
const savedToDos = localStorage.getItem(todo_key);


function saveToDos()
{
    localStorage.setItem(todo_key,JSON.stringify(toDos));
}

function deletetodo(event)
{
    const deleteli =event.target.parentElement;
    toDos = toDos.filter(item=> item.id != event.target.parentElement.id);
    saveToDos();
    deleteli.remove();
}

function paintToDo(newTodo)
{
    const newli = document.createElement("li");
    newli.id=newTodo.id;
    const newspan = document.createElement("span");
    newspan.innerText=newTodo.text;
    const newbtn = document.createElement("button");
    newbtn.innerText="X";
    newbtn.addEventListener("click",deletetodo);
    newli.appendChild(newspan);
    newli.appendChild(newbtn);
    toDoList.appendChild(newli);  
    toDos.push(newTodo);
    saveToDos();
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newToDoobj = {
        text: newTodo,
        id:Date.now()
    }
    paintToDo(newToDoobj);
}

toDoForm.addEventListener("submit",handleToDoSubmit);
if(saveToDos!=null)
{   
    const parseToDos = JSON.parse(savedToDos);
    parseToDos.forEach(paintToDo);
}