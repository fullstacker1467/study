// class Odam {
//   constructor(name, age, job, id) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.id = id;
//   }
//   showParam(param) {
//     return `Hello, my name is ${this.name}, me ${this.age} years old; param:${param},  id:${this.id}`;
//   }
// }
// const nok = new Odam("Bobur", 23, "Casher", 42);
// const olma = new Odam("suhrob", 18, "Web Developer", 13);
// console.log(nok.showParam(67));
// console.log(olma.showParam(14));

// class Human {
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//     this.sayHello = function (ism) {
//       console.log(`Hello, I am ${ism}`);
//     };
//   }
// }

// const chris = new Human("suhrob", "bobur");
// const zell = new Human("shoxrux", "sherzod");
// console.log(chris.first);
// console.log(chris.sayHello("suhrob"));
// console.log(zell.first);

function choose(choice, ...availableChoices) {
  return availableChoices[choice];
}
console.log(choose(4, "one", "two", "three", "four", "fifth"));
