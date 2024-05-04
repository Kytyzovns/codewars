//Problem: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//Solution:
function pigIt(str){
    let words = str.split(/(\s+|\W+)/);

    for(let i = 0; i < words.length; i++) {
        if(/^[a-zA-Z]+$/.test(words[i])){
            let k = words[i][0];
            words[i] = words[i].slice(1, words[i].length) + k + "ay";
        }
    }

    let result = "";
    for(let i = 0; i < words.length; i++) {
        result += words[i];
    }

    return result;
}