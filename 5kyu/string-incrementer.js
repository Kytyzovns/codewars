//Problem: Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.

//Solution:
function incrementString (strng) {
    let word = "";
    let num = "";
    let was = false;
    for (let i = strng.length-1; i >= 0; i--) {
        if (!isNaN(Number(strng[i])) && !was) {
            num = strng[i] + num;
        } else {
            word = strng[i] + word;
            was = true;
        }
    }

    let num1 = Number(num) + 1;
    console.log(word);
    console.log(num);
    if(num === "") {
        return word + 1;
    } else if(num.length > num1.toString().length) {
        for(let i = 0; i < num.length - num1.toString().length; i++) {
            word += 0;
        }
        return word + num1
    } else {
        return word + num1
    }

}

console.log(incrementString("foobar000"));