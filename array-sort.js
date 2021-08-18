const numbers = [3, 5, 1, 9, 8, 6, 7, 2, 0];
const sortedNumbers = numbers.sort();
const sortedReverse = sortedNumbers.reverse();
console.log(sortedNumbers);

const newNumbers = [3, 22, 91, 19, 45, 88, 64, 56];
const newNumbersSorting = newNumbers.sort(function (a, b) {
    return a - b;
});
console.log(newNumbersSorting);