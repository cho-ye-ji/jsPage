const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
 
const TODOS_KEY = "todos";
//const -> 업데이트 가능하게 변경
let toDos = [];

function saveToDos() { 
    // localStorage.setItem("todos", toDos);
    // > 그냥 나열하듯 나와서 string으로 배열하여 보여주게 하는 방법은JSON.stringify()이다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//클릭하며 일어나니까 event
function deleteToDo(event) { 
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(typeof li.id);
    saveToDos();
    li.remove();
    //클릭한, 이벤트 발생한 부분의 부모 요소만 삭제하기 때문에!
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const liSpan = document.createElement("span");
    liSpan.innerText = newTodo.text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);

    // append 작성할 때는 맨 마지막에 배치를 해야한다.
    li.appendChild(liSpan);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) { 
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

//javascript 는 item이라는 arguement를 기본으로 제공해준다.
function sayHello(item) {  
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) { 
    const parsedTodos = JSON.parse(savedToDos); 
    toDos = parsedTodos; //정보가 있다면 이전에 있던 pasedTodos를 복원,
    parsedTodos.forEach(paintToDo);
    // = parsedTodos.forEach((item) => console.log("this ~", item) );
}

// 반응형용  

const todoBtn = document.getElementById("todoBtn");
const todoWrap = document.querySelector('.todo');
const todoCloseBtn = document.querySelector(".todoCloseBtn");
todoBtn.addEventListener("click", () => {
    todoWrap.style.display = "block";
    todoCloseBtn.style.display = "block";
});
todoCloseBtn.addEventListener("click", () => {
    todoWrap.style.display = "none";
});


