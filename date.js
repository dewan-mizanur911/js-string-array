const myFavourite = new Date('1971-12-16');
// console.log(myFavourite);
const anotherDate = new Date(1971, 2, 21, 0, 0, 0, 0);
console.log(anotherDate);
if (myFavourite.getTime() > anotherDate.getTime()) {
    console.log('accepted');
}