const container = document.querySelector("#cards");
const modal_container = document.querySelector(".body");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector("#close-modal");
const open_modal = document.querySelector(".cart-button");
const more = document.querySelector("#more");
let items = [
  {
    id: 0,
    img: "./img/1.png",
    nomi: "fresh organic apricot",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 7,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 1,
    img: "./img/2.png",
    nomi: "cucumber",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 0,
    total: this.soni * this.narx,
    type: "vegetable",
  },
  {
    id: 2,
    img: "./img/3.png",
    nomi: "hazelnuts filbert nut",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 14,
    total: this.soni * this.narx,
    type: "nut",
  },
  {
    id: 3,
    img: "./img/4.png",
    nomi: "raw broccoli",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 11,
    total: this.soni * this.narx,
    type: "vegetable",
  },
  {
    id: 4,
    img: "./img/5.png",
    nomi: "organic quince",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 0,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 5,
    img: "./img/6.png",
    nomi: "red apple",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 16,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 6,
    img: "./img/7.png",
    nomi: "capsicum-green",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 5,
    total: this.soni * this.narx,
    type: "vegetable",
  },
  {
    id: 7,
    img: "./img/8.png",
    nomi: "pear fruit",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 8,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 8,
    img: "./img/9.png",
    nomi: "blueberry",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 9,
    img: "./img/10.png",
    nomi: "fresh raspberry",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 10,
    img: "./img/11.png",
    nomi: "ginger",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 0,
    total: this.soni * this.narx,
    type: "nut",
  },
  {
    id: 11,
    img: "./img/12.png",
    nomi: "two fresh figs",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 12,
    img: "./img/13.png",
    nomi: "strawberry",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "fruit",
  },
  {
    id: 13,
    img: "./img/14.png",
    nomi: "eggplant",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "vegetable",
  },
  {
    id: 14,
    img: "./img/15.png",
    nomi: "egg",
    narx: 12,
    soni: 1,
    liked: false,
    bought: false,
    quantity: 10,
    total: this.soni * this.narx,
    type: "nut",
  },
];
let products = [];
let cart = JSON.parse(localStorage.getItem("savat")) || [];

function setLocal(arr, key) {
  localStorage.setItem(key, JSON.stringify(arr));
}

function setData() {
  if (JSON.parse(localStorage.getItem("mahsulot"))) {
    products = JSON.parse(localStorage.getItem("mahsulot"));
  } else {
    localStorage.setItem("mahsulot", JSON.stringify(items));
    products = JSON.parse(localStorage.getItem("mahsulot"));
  }
}
setData();

open_modal.addEventListener("click", () => {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
});

close_modal.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
});

function renderQil() {
  container.innerHTML = "";
  products.map((item, index) => {
    container.innerHTML += `
        <div class="card">
          <picture>
            <img src="${item.img}" />
            ${item.liked
        ? `<i onclick="like(${index})" class="fa-solid fa-heart"></i>`
        : ` <i onclick="like(${index})" class="fa-regular fa-heart"></i>`
      }
          </picture>
          <div class="text-field">
            <h3>${item.nomi}</h3>
            <div class="flex">
              <p>$ ${item.narx}</p>
              <h4 class="${item.quantity > 0 ? "green" : "red"}"
              >${item.quantity > 0
        ? `В наличии (${item.quantity})`
        : "Нет в наличии"
      }</h4>
            </div>
            <hr />
            <div class="flex">
              <div class="btn">
                <button  onClick=decrement(${index})>-</button>
                <h4>${item.soni}</h4>
                <button onClick=increment(${index})>+</button>
              </div>
              ${item.bought
        ? `<i class="fa-solid fa-check"></i>`
        : `<button onclick="buy(${index})" class="shop">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>`
      }
            </div>
          </div>
        </div>
        `;
  });
}
renderQil();

function setRender() {
  modal_container.innerHTML = "";
  cart.map((item, index) => {
    modal_container.innerHTML += `
    <div class="card">
            <picture>
              <img src="${item.img}" alt="" />
            </picture>
            <div class="text-field">
              <h3>${item.nomi}</h3>
              <div class="flex">
                <p>$ ${item.narx}</p>
                <div class="btn">
                  <button>-</button>
                  <p>${item.soni}</p>
                  <button>+</button>
                </div>
              </div>
              <hr />
              <div class="flex">
                <h4>Total: $ ${item.total}</h4>
                <i onclick="cartDelete(${item.id})" class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
    `;
  });
}
setRender();

const increment = (elem) => {
  products = products.map((i) => {
    return i.id === products[elem].id &&
      products[elem].soni < products[elem].quantity
      ? { ...i, soni: i.soni + 1 }
      : i;
  });
  setLocal(products, "mahsulot");
  renderQil();
};

const decrement = (elem) => {
  products = products.map((i) => {
    return i.id === products[elem].id && products[elem].soni > 1
      ? { ...i, soni: i.soni - 1 }
      : i;
  });
  setLocal(products, "mahsulot");
  renderQil();
};

const like = (elem) => {
  products = products.map((i) =>
    i.id == products[elem].id ? { ...i, liked: i.liked ? false : true } : i
  );
  setLocal(products, "mahsulot");
  renderQil();
};

const buy = (param) => {
  if (
    cart.filter(
      (i) => i.id === products[param].id && products[param].quantity > 0
    ).length === 0
  ) {
    cart.push(products[param]);
    if (cart.find((el) => el.id === products[param].id)) {
      products = products.map((item) => {
        return item.id === products[param].id
          ? { ...item, bought: (item.bought = true) }
          : item;
      });
    }
  }
  setLocal(products, "mahsulot");
  setLocal(cart, "savat");
  setRender();
  renderQil();
  clicker();
};

function clicker() {
  more.innerHTML = cart.length;
}
clicker();
