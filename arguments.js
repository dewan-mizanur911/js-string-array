function add() {
    let total = 0;
    for (const number of arguments) {
        total = total + number;
    }
    return total;
}
const numbers = add(3, 5, 6, 94823, 992, 1);
console.log(numbers);

function concatName() {
    let fullName = '';
    for (const name of arguments) {
        fullName = fullName + name + ' ';
    }
    return fullName;
}
const myName = concatName('rohim', 'korim', 'lala');
console.log(myName);