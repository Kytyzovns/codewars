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