let input = document.querySelector("input");

function insert(num) {
  input.value += num;
}

function clean() {
  input.value = "";
}

function back() {
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
  let exp = input.value;
  if (exp) {
    input.value = eval(exp);
  }
}
