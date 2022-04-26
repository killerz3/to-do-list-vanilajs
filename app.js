// selectors
const task = document.querySelector(".task");
const dateTime = document.querySelector("#date");
const addButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todoList");
const option = document.querySelector(".select");
// event listner
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
option.addEventListener("click", filter);
//functions
function addTodo(event) {
    event.preventDefault();

    if (task.value != "") {

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        // create li
        const newTodo = document.createElement("li");
        newTodo.innerText = task.value;
        
        task.value = "";
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // create done button
        const doneBtn = document.createElement("button");
        doneBtn.innerHTML = '<i class="bi bi-check-square"></i>';
        doneBtn.classList.add("doneBtn");
        todoDiv.appendChild(doneBtn);
        // create trashbtn
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = '<i class="bi bi-trash"></i>';
        trashBtn.classList.add("trashBtn");
        todoDiv.appendChild(trashBtn);

        // add to list

        todoList.appendChild(todoDiv);
    }
}


function deleteCheck(e)
{   
    const item=e.target;
    if (item.classList[0] === "trashBtn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => todo.remove());
    }
    if (item.classList[0] === "doneBtn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filter(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo)=>{
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    
                    todo.style.display = "none";
                }
                break;
        }
    })


}

function save(todo) {
    let todos;
    if (localStorage.getItem("todos") == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todo));
    
}