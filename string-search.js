const names = [
    'Dewan Mizanur Rahman',
    'Dewan Aminur Rahman',
    'Dewan Rozy Rahman',
    'Dewan Alamgir Hossain',
    'Dewan Azahar Ali',
    'Dewan Nazrul Islam'
];
const searching = 'mizanur';
for (const name of names) {
    if (name.toLowerCase().includes(searching)) {
        // console.log(name);
    }
}
for (const name of names) {
    if (name.toLowerCase().startsWith('dewan')) {
        console.log(name);
    }
}