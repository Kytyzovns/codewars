const numbers = [1, 5, 10, 35, 45, 100, 25];

const min = numbers.reduce((acc, currentNumber) => {
    console.log(acc);
    console.log(currentNumber);
    return acc;
});

console.log(min);

// const numbers = [1, 5, 10, 35, 45, 100, 25]; // find min number using reduce
// const res = numbers.reduce((acc, el) => {
//     console.log('acc: ', acc);
//     console.log('el: ', el);
//     return acc > el ? el : acc;
// });
//
// console.log(res);