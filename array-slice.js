const numbers = [2, 4, 9, 11, 13, 99, 44, 12, 98, 191];
const numbersSlice = numbers.slice(3, 8);
// const numbersSplice = numbers.splice(3, 3);
const numbersSplice = numbers.splice(3, 3, 88, 88, 77, 77);
console.log(numbersSplice);
console.log(numbers);