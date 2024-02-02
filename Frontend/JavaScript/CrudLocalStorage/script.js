const form = document.querySelector("form");
const input = document.querySelector("input");
const section = document.querySelector("section");

let todos = JSON.parse(localStorage.getItem("data")) || [];
if (todos.length) showTodos();

function setTodos() {
  localStorage.setItem("data", JSON.stringify(todos));
}

function showTodos() {
  const todos = JSON.parse(localStorage.getItem("data"));
  section.innerHTML = "";
  todos.map((item, index) => {
    section.innerHTML += `
         <div ondblclick="setCompleted(${index})" class="flex items-center justify-between w-1/3 p-3 text-white rounded-md ${
      item.completed ? "bg-green-600" : "bg-slate-600"
    }">
        <h1>${item.text}</h1>
        <div class="flex gap-3">
          <i class="fa-solid fa-pencil cursor-pointer" onclick="setEdit(${index})"></i>
          <i class="fa-solid fa-trash-can cursor-pointer" onclick="setDeleted(${index})"></i>
        </div>
      </div>
        `;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  const id = new Date().getTime();
  if (todoText.length > 0) {
    todos.push({ id, text: todoText, completed: false });
    input.value = "";
    setTodos();
    showTodos();
  }
});

function setDeleted(index) {
  const deletedTodos = todos.filter((item, i) => {
    return i !== index;
  });
  todos = deletedTodos;
  setTodos();
  showTodos();
}

function setCompleted(index) {
  const completedTodos = todos.map((item, i) => {
    return index == i
      ? { ...item, completed: item.completed == true ? false : true }
      : { ...item };
  });
  todos = completedTodos;
  setTodos();
  showTodos();
}

function setEdit(index) {
  const editedTodos = todos
    .map((item, i) => {
      return index == i ? (input.value = item.text) : item;
    })
    .filter((item, i) => {
      return i !== index;
    });
  todos = editedTodos;
  setTodos();
  showTodos();
}
