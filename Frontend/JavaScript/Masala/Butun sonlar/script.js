// Butun sonlarga oid Masalalar

//   1

// function butun(bir) {
//     console.log(bir * 100);
// }
// butun(568)

//   2

// function butun(bir) {
//     natija = bir / 1000
//     console.log(parseInt(natija));
// }
// butun(2436)

//    3

// function butun(param) {
//   natija = param / 1024;
//   console.log(natija);
// }
// butun(2048)

//     4

// function butun(bir , ikki) {
//     if (bir > ikki) {
//         const natija = bir / ikki;
//         console.log(parseInt(natija));
//     } else {
//         console.log(`ikkinchi son katta birinchi sondan`);
//     }
// }
// butun(13 , 10)
//   5
// function butun(bir, ikki) {
//   if (bir > ikki) {
//     const natija = bir % ikki;
//       console.log(parseInt(natija));
//   } else {
//     console.log(`ikkinchi son katta birinchi sondan`);
//   }
// }
// butun(11, 10);

//    6

// function butun(bir) {
// const natija = bir / 10
// const natija2 = bir - (parseInt(natija) * 10)
// console.log(parseInt(natija));
// console.log(natija2);
// }
// butun(36)

//    7

// function butun(bir) {
//   const natija = bir / 10;
//   const natija2 = bir - parseInt(natija) * 10;
//   console.log(parseInt(natija) + natija2);
// }
// butun(17);

//   8

// function butun(bir) {
//   const param1 = parseInt(bir / 10);
//   const param2 = bir - parseInt(param1 * 10);
//   const natija = param2 * 10 + param1;
//   console.log(natija);
// }
// butun(23);

//   9

// function butun(number) {
//   const param1 = Math.floor(number / 100);
//   const param2 = Math.floor((number % 100) / 10);
//   const param3 = number % 10;
//   console.log(param1, param2, param3);
// }
// butun(325)

//   10

// function butun(number) {
//   const param1 = Math.floor(number / 100);
//   const param2 = Math.floor((number % 100) / 10);
//   console.log(param1, param2);
// }
// butun(325)

//   11

// function butun(number) {
//   const param1 = Math.floor(number / 100);
//   const param2 = Math.floor((number % 100) / 10);
//   const param3 = number % 10;
//   console.log(param1 + param2 + param3);
// }
// butun(325)

//    12

// function butun(number) {
//   const param1 = Math.floor(number / 100);
//   const param2 = Math.floor((number % 100) / 10) * 10;
//   const param3 = (number % 10) * 100;
//   const natija = param3 + param2 + param1;
//   console.log(natija);
// }
// butun(769);

//     13

// function butun(number) {
//   const param1 = Math.floor(number / 100);
//   const param2 = Math.floor((number % 100) / 10) * 100;
//   const param3 = (number % 10) * 10;
//   const natija = param3 + param2 + param1;
//   console.log(natija);
// }
// butun(169);

//    14

// function butun(number) {
//   const param1 = Math.floor(number / 100) * 10;
//   const param2 = Math.floor((number % 100) / 10);
//   const param3 = (number % 10) * 100;
//   const natija = param3 + param2 + param1;
//   console.log(natija);
// }
// butun(423);

//    15

// function butun(number) {
//   const param1 = Math.floor(number / 100) * 10;
//   const param2 = Math.floor((number % 100) / 10) * 100;
//   const param3 = number % 10;
//   const natija = param3 + param2 + param1;
//   console.log(natija);
// }
// butun(673);

//    16

// function butun(number) {
//   const param1 = Math.floor(number / 100) * 100;
//   const param2 = Math.floor((number % 100) / 10);
//   const param3 = (number % 10) * 10;
//   const natija = param3 + param2 + param1;
//   console.log(natija);
// }
// butun(673);

//    17

// function butun(number) {
//     const param1 = Math.floor(number / 1000)
//     const param2 = number - param1 * 1000;
//     const param3 = parseInt(param2 / 100);
//     console.log(param3);
// }
// butun(2534)

//====================================================================================

//     18

// function butun(number) {
//     const natija = Math.floor(number / 1000);
//     console.log(natija);
// }
// butun(7694)

//     19

// function butun(number) {
//   const sekund = number % 60;
//   const minut = Math.floor(number / 60);
//   const natija = `minut: ${minut}, sekund:${sekund}`;
//   console.log(natija);
// }
// butun(121);

//      20

// function butun(number) {
//   const sekund = number % 60;
//   const minut = Math.floor(number / 60) % 60;
//   const soat = Math.floor(number / 3600);
//   const natija = `soat:${soat}, minut: ${minut}, sekund:${sekund}`;
//   console.log(natija);
// }
// butun(1241);

//      21

// function butun(number) {
//   const sekund = number % 60;
//   const minut = Math.floor(number / 60);
//   const natija = `minut: ${minut}, sekund:${sekund}`;
//   console.log(natija);
// }
// butun(60);

//    22

// function butun(number) {
//   const sekund = number % 60;
//   const minut = Math.floor(number / 60) % 60;
//   const soat = Math.floor(number / 3600);
//   const natija = `soat:${soat}, minut: ${minut}, sekund:${sekund}`;
//   console.log(natija);
// }
// butun(12241);

//       23

// function butun(number) {
//   const sekund = number % 60;
//   const minut = Math.floor(number / 60) % 60;
//   const soat = Math.floor(number / 3600);
//   const natija = `soat:${soat}, minut: ${minut}, sekund:${sekund}`;
//   console.log(natija);
// }
// butun(12241);

//      24

// function butun(number) {
//   const days = [
//     "воскресенье",
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//   ];
//   const kun = 1;
//   const natija = (number + kun - 1) % 7;
//   return days[natija];
// }
// console.log(`День недели: ${butun(124)}`);

//   25

// function butun(number) {
//   const days = [
//     "воскресенье",
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//   ];
//   const kun = 3;
//   const natija = (number + kun) % 7;
//   return days[natija];
// }
// console.log(`День недели: ${butun(23)}`);

//   26

// function butun(number) {
//   const days = [
//     "",
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//     "воскресенье",
//   ];
//   const kun = 2;
//   const natija = ((((number % 7) + kun - 2) % 7) + 1);
//   console.log();
//   return days[natija];
// }
// console.log(`День недели: ${butun(7)}`);

//    27

// function butun(number) {
//   const days = [
//     "",
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//     "воскресенье",
//   ];
//   const kun = 7;
//   const natija = (((number % 7) + kun - 2) % 7) + 1;
//   return days[natija];
// }
// console.log(`День недели: ${butun(3)}`);

//      28

function butun(number , param) {
  const days = [
    "",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
    "Yakshanba",
  ];
  const natija = (((number % 7) + param - 2) % 7) + 1;
  return days[natija];
}
console.log(`Xafta kuni: ${butun(167, 5)}`);

//     30

// function butun(number) {
//   const natija = Math.ceil(number / 100)
//   return natija
// }
// console.log(butun(2024));
