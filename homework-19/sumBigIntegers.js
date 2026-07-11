/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

// let numStr1 = '9007199254740991';
// let numStr2 = '9007199254740991';

function sumBigIntegers(numStr1, numStr2) {
  return BigInt(numStr1) + BigInt(numStr2);
}

console.log(sumBigIntegers('9007199254740991', '9007199254740991'));