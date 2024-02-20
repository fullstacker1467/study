const container = document.querySelector("section .container");
const open_show = document.querySelector(".add_product");
const form_modal = document.querySelector(".form_body");
const close_show = document.querySelector(".close_product");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input");
const img_input = document.querySelector("input[type=file]");
const searchItem = document.querySelector("input[type=search]");
const cart_modal = document.querySelector(".cart_body");
const tbody = document.querySelector(".tbody");
const open_cart = document.querySelector(".open_cart");
const close_cart = document.querySelector(".close_cart");
const subTotal = document.querySelector(".subtotal");
const buySum = document.querySelector(".buySum");

open_show.addEventListener("click", () => {
  form_modal.classList.add("active");
  document.body.style.overflowY = "hidden";
});

close_show.addEventListener("click", () => {
  form_modal.classList.remove("active");
  document.body.style.overflowY = "auto";
});

open_cart.addEventListener("click", () => {
  cart_modal.classList.add("active");
  document.body.style.overflowY = "hidden";
});

close_cart.addEventListener("click", () => {
  cart_modal.classList.remove("active");
  document.body.style.overflowY = "auto";
});

const FAKE_DATA = [
  {
    id: 0,
    img: "../img/1.png",
    title: "chair",
    price: 20,
    stock: 11,
    count: 1,
    bought: false,
    liked: false,
  },
  {
    id: 1,
    img: "../img/2.png",
    title: "pitcher",
    price: 13,
    stock: 7,
    count: 1,
    bought: false,
    liked: false,
  },
  {
    id: 2,
    img: "../img/3.png",
    title: "bar chair",
    price: 27,
    stock: 0,
    count: 1,
    bought: false,
    liked: false,
  },
  {
    id: 3,
    img: "../img/4.png",
    title: "ceramic bottle",
    price: 19,
    stock: 25,
    count: 1,
    bought: false,
    liked: false,
  },
  {
    id: 4,
    img: "../img/5.png",
    title: "lamp",
    price: 35,
    stock: 114,
    count: 1,
    bought: false,
    liked: false,
  },
  {
    id: 5,
    img: "../img/6.png",
    title: "wooden chair",
    price: 8,
    stock: 0,
    count: 1,
    bought: false,
    liked: false,
  },
  {
    id: 6,
    img: "../img/7.png",
    title: "modern lamp",
    price: 22,
    stock: 5,
    count: 1,
    bought: false,
    liked: false,
  },
  {
    id: 7,
    img: "../img/8.png",
    title: "ceramic cup",
    price: 20,
    stock: 15,
    count: 1,
    bought: false,
    liked: false,
  },
  {
    id: 8,
    img: "../img/9.png",
    title: "chair",
    price: 10,
    stock: 23,
    count: 1,
    bought: false,
    liked: false,
  },
];
let products = [];
let cart = JSON.parse(localStorage.getItem("savat")) || [];
function setData() {
  if (JSON.parse(localStorage.getItem("mahsulot"))) {
    products = JSON.parse(localStorage.getItem("mahsulot"));
  } else {
    localStorage.setItem("mahsulot", JSON.stringify(FAKE_DATA));
    products = JSON.parse(localStorage.getItem("mahsulot"));
  }
}
setData();
function setLocal(arr, key) {
  localStorage.setItem(key, JSON.stringify(arr));
}
function subSum() {
  let sum = 0;
  cart.map((item) => {
    sum += item.price * item.count;
    return sum;
  });
  subTotal.innerHTML = sum;
}
subSum();
function setRender() {
  container.innerHTML = "";
  products.map((item, index) => {
    container.innerHTML += `
    <div class="card">
    ${
      item.liked
        ? `<i onClick='setLike(${JSON.stringify(
            item
          )})' class="fa-solid fa-heart love tomato"></i>`
        : `<i onClick='setLike(${JSON.stringify(
            item
          )})' class="fa-regular fa-heart love"></i>`
    }
    <figure>
      <img src="${item.img}" />
    </figure>
    <div class="about">
      <h5>${item.title}</h5>
      <div class="flex bir">
        <h4>$ ${item.price}</h4>
        <h3 class=${item.stock > 0 ? "green" : "tomato"}>in stock (${
      item.stock
    })</h3>
      </div>
      <div class="flex">
          ${
            item.bought
              ? ""
              : `
          <div class="btn_group">
          <button onClick='setDicrement(${item.id})'>-</button>
          <span>${item.count}</span>
          <button onClick='setIncrement(${item.id})'>+</button>
        </div>
                `
          }
        ${
          item.bought
            ? ` <button class="bought true">Added <i class="fa-solid fa-check"></i></button>`
            : `<button ${
                item.stock > 0 ? `onClick='setBought(${index})'` : ""
              } class="bought">Add <i class="fa-solid fa-cart-plus"></i></button>`
        }
      </div>
    </div>
  </div>
    `;
  });
}
setRender();

function cartRender() {
  tbody.innerHTML = "";
  cart.map((item, index) => {
    tbody.innerHTML += `
    <div class="card">
    <div class="item">
      <img src="${item.img}" alt="" />
      <div class="flex">
        <h2>${item.title}</h2>
        <h3>$ ${item.price}</h3>
      </div>
    </div>
    <div class="item">
      <div class="btn_group">
        <button onClick='setDicrementCart(${JSON.stringify(item)})'>-</button>
        <span>${item.count}<span>
        <button onClick='setIncrementCart(${JSON.stringify(item)})'>+</button>
      </div>
    </div>
    <div class="item"><h1>Total: $ ${item.count * item.price}</h1> </div>
    <div class="item"><button onClick='setDelete(${JSON.stringify(
      item
    )})'>Delete</button></div>
  </div>
    `;
  });
}
cartRender();
function setIncrement(id) {
  products = products.map((item) =>
    item.id == id && item.count < item.stock && item.bought == false
      ? { ...item, count: item.count + 1 }
      : item
  );
  setRender();
}

function setDicrement(id) {
  products = products.map((item) =>
    item.id == id && item.count > 1 && item.bought == false
      ? { ...item, count: item.count - 1 }
      : item
  );
  setRender();
}

function setLike(item) {
  products = products.map((elem) =>
    elem.id == item.id ? { ...elem, liked: elem.liked ? false : true } : elem
  );
  setLocal(products, "mahsulot");
  setRender();
}

function setBought(param) {
  if (
    cart.filter(
      (elem) => elem.id === products[param] && products[param].stock > 0
    )
  ) {
    cart.push(products[param]);
    if (cart.find((item) => item.id === products[param].id)) {
      products = products.map((item) => {
        return item.id === products[param].id
          ? { ...item, bought: (item.bought = true) }
          : item;
      });
    }
  }
  setLocal(cart, "savat");
  setLocal(products, "mahsulot");
  xisobla();
  subSum();
  setRender();
  cartRender();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  products.push({
    id: new Date().getTime(),
    title: inputs[0].value,
    price: inputs[1].value,
    stock: inputs[2].value,
    img: URL.createObjectURL(img_input.files[0]),
    bought: false,
    liked: false,
    count: 1,
  });
  form_modal.classList.remove("active");
  document.body.style.overflowY = "auto";
  setLocal(products, "mahsulot");
  setRender();
  inputs.forEach((input) => (input.value = ""));
});

function setDelete(elem) {
  cart = cart.filter((item) => item.id !== elem.id);
  products = products.map((item) => {
    return item.id === elem.id
      ? { ...item, bought: (item.bought = false) }
      : item;
  });
  setLocal(products, "mahsulot");
  setLocal(cart, "savat");
  setRender();
  cartRender();
  subSum();
  xisobla();
  if (cart.length <= 0) {
    cart_modal.classList.remove("active");
    document.body.style.overflowY = "auto";
  }
}

function setIncrementCart(elem) {
  cart = cart.map((item) =>
    item.id == elem.id && elem.count < elem.stock
      ? { ...elem, count: elem.count + 1 }
      : item
  );
  setLocal(cart, "savat");
  subSum();
  cartRender();
}

function setDicrementCart(elem) {
  cart = cart.map((item) =>
    item.id == elem.id && elem.count > 1
      ? { ...elem, count: elem.count - 1 }
      : item
  );
  setLocal(cart, "savat");
  subSum();
  cartRender();
}

function xisobla() {
  if (cart.length <= 0) {
    buySum.style.display = "none";
  } else {
    buySum.innerHTML = cart.length;
    buySum.style.display = "flex";
  }
}
xisobla();

searchItem.addEventListener("input", (e) => {
  if (e.target.value == "") {
    setRender();
  } else {
    container.innerHTML = "";
    products
      .filter((product) => product.title.includes(e.target.value))
      .map((item, index) => {
        container.innerHTML += `
        <div class="card">
        ${
          item.liked
            ? `<i onClick='setLike(${JSON.stringify(
                item
              )})' class="fa-solid fa-heart love tomato"></i>`
            : `<i onClick='setLike(${JSON.stringify(
                item
              )})' class="fa-regular fa-heart love"></i>`
        }
        <figure>
          <img src="${item.img}" />
        </figure>
        <div class="about">
          <h5>${item.title}</h5>
          <div class="flex bir">
            <h4>$ ${item.price}</h4>
            <h3 class=${item.stock > 0 ? "green" : "tomato"}>in stock (${
          item.stock
        })</h3>
          </div>
          <div class="flex">
              ${
                item.bought
                  ? ""
                  : `
              <div class="btn_group">
              <button onClick='setDicrement(${item.id})'>-</button>
              <span>${item.count}</span>
              <button onClick='setIncrement(${item.id})'>+</button>
            </div>
                    `
              }
            ${
              item.bought
                ? ` <button class="bought true">Added <i class="fa-solid fa-check"></i></button>`
                : `<button onClick='setBought(${index})' class="bought">Add <i class="fa-solid fa-cart-plus"></i></button>`
            }
          </div>
        </div>
      </div>
        `;
      });
  }
});
