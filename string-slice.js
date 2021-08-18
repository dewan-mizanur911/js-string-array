const anthem = 'Amar sonar bangla, ami tomay valobashi';
const splitAnthem = anthem.split(' ');
const sliceAnthem = anthem.slice(5, -1);
const substrAnthem = anthem.substr(5, 8);
const subStringAnthem = anthem.substring(5, 20);

console.log(subStringAnthem)
console.log(substrAnthem);
console.log(sliceAnthem);
console.log(splitAnthem);

const countries = ['Australia', 'England', 'USA', 'Japan', 'Bangladesh'];
const sliceCountries = countries.slice(0, -1);
const joinCountries = countries.join(', ');
console.log(joinCountries);
console.log(sliceAnthem);