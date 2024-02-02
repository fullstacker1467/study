//     1

// function order(a) {
//     if (a > -1) {
//         const natija = a+=1
//         return natija
//     }
// }
// console.log(order(6));

//      2

// function order(a) {
//   if (a > -1) {
//     const natija = (a += 1);
//     return natija;
//   } else {
//     const natija = (a -= 2);
//     return natija;
//   }
// }
// console.log(order(-6));

//      3

// function order(a) {
//   if (a > 0) {
//     const natija = (a += 1);
//     return natija;
//   } else if (a == 0) {
//     const natija = (a = 10);
//     return natija;
//   } else {
//     const natija = (a -= 2);
//     return natija;
//   }
// }
// console.log(order(-10));

//       4

// function order(a, b, c) {
//   let natija = 0;
//   if (a > 0) {
//     natija += 1;
//   }
//   if (b > 0) {
//     natija += 1;
//   }
//   if (c > 0) {
//     natija += 1;
//   }
//   return natija;
// }
// console.log(order(2, -4, -5));

//     5

// const a = -2,
//   b = -6,
//   c = -10;
// let musbat = 0;
// let manfiy = 0;
// if (a > 0) {
//   musbat += 1;
// } else {
//   manfiy += 1;
// }
// if (b > 0) {
//   musbat += 1;
// } else {
//   manfiy += 1;
// }
// if (c > 0) {
//   musbat += 1;
// } else {
//   manfiy += 1;
// }
// console.log(`musbat sonlar: ${musbat}, manfiy sonlar: ${manfiy}`);

//      6

// const a = 4, b = 3
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

//     7

// const a = 4,
//   b = 33;
// if (a > b) {
//     console.log('ikkinchi son kichik son');
// } else {
//     console.log('birinchi son kichik son');
// }

//     8

// const a = 44,
//   b = 33;
// if (a > b) {
//   console.log(a, b);
// } else {
//   console.log(b, a);
// }

//     9

// let a = 8
// let b = 5;
// let c = 0;
// if (a < b) {
//     console.log(a , b);
// } else {
//     c = b
//     b = a
//     a = c
//     console.log(a , b);
// }

//       10

// const a = 5, b = 5
// let natija = 0
// if (a !== b) {
//     natija = a + b
//     console.log(natija);
// } else {
//     console.log(a , b);
// }

//     11

// const a = 8,
//   b = 5;
// if (a !== b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(a, b);
// }

//     12

// const a = 5,
//   b = 4,
//   c = 33;
// if (a < b && a < c) {
//   console.log(a);
// }
// if (b < a && b < c) {
//   console.log(b);
// }
// if (c < b && c < a) {
//   console.log(c);
// }

//      13

// const a = 55,
//   b = 34,
//   c = 23;
// if ((a > b && a < c) || (a < b && a > c)) {
//   console.log(a);
// }
// if ((b > a && b < c) || (b < a && b > c)) {
//   console.log(b);
// }
// if ((c > a && c < b) || (c < a && c > b)) {
//   console.log(c);
// }

//       14