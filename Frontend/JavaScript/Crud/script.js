const form = document.querySelector("form");
const wrapper = document.querySelector(".wrapper");
const userName = document.querySelector("#userName");
const emailAddress = document.querySelector("#emailAddress");
let inputData = {
  user: "",
  email: "",
};
let data = [];

function create() {
  wrapper.innerHTML = "";
  data.map((item, index) => {
    wrapper.innerHTML += `
    <div class="card flex justify-between items-center gap-3 bg-slate-400 p-2">
        <h1>${item.user}</h1>
        <h1>${item.email}</h1>
        <div class="flex gap-3">
          <button class="py-2 px-4 bg-blue-500 text-white" onclick=edit(${index})>EDIT</button>
          <button class="py-2 px-4 bg-red-500 text-white" onclick="del(${index})">DELETE</button>
        </div>
      </div>
  `;
  });
}

function reset() {
  userName.value = "";
  emailAddress.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userName.value.length > 0 && emailAddress.value.length > 0) {
    let newObj = {
      id: new Date().getTime(),
      user: userName.value,
      email: emailAddress.value,
    };
    data.push(newObj);
    create();
  } else {
    alert("malumotni toldiring");
  }
  reset();
});

const del = (index) => {
  if (confirm("malumotni uchiraymi?")) {
    data = data.filter((item) => item.id !== data[index].id);
    create();
  }
};

const edit = (index) => {
  userName.value = data[index].user;
  emailAddress.value = data[index].email;
  data = data.filter((item) => item.id !== data[index].id);
  create();
};

create();
