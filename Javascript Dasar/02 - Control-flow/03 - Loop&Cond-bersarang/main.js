let s = "";

// ! test-1
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// for (let i = 0; i < 10; i++) {
//   for (let b = 0; b <= i; b++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// ! test-2
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *
// for (let i = 10; i > 0; i--) {
//   for (let b = 0; b < i; b++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// ! test-3
//          *
//         **
//        ***
//       ****
//      *****
//     ******
//    *******
//   ********
//  *********
// **********
// for (let i = 1; i <= 10; i++) {
//   for (let spasi = 9; spasi >= i; spasi--) {
//     s += " ";
//   }
//   for (let b = 1; b <= i; b++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// ! test-4
// **********
//  *********
//   ********
//    *******
//     ******
//      *****
//       ****
//        ***
//         **
//          *
// for (let i = 1; i <= 10; i++) {
//   for (let spasi = 2; spasi <= i; spasi++) {
//     s += " ";
//   }
//   for (let b = 10; b >= i; b--) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// ! test-5
//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************
// for (let i = 1; i <= 10; i++) {
//   for (let spasi = 10 - 1; spasi >= i; spasi--) {
//     s += " ";
//   }
//   for (let b = 1; b <= i; b++) {
//     s += "*";
//   }
//   for (let c = 1; c <= i - 1; c++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// ! foreach
const pacarSaya = ['agus', 'samsul', 'bambang', 'jancok'];

pacarSaya.forEach((pacar, index) => {
  console.log(pacar, index + 1)
});