const numbers = [1, 5, 10, 35, 45, 100, 25];

const min = numbers.reduce((acc, currentNumber) => {
    console.log(acc);
    console.log(currentNumber);
    return acc;
});

console.log(min);