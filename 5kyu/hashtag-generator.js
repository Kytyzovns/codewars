//Problem: The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

//Solution:
function generateHashtag (str) {
    let regex = /[a-zA-Z]+/;
    if(regex.test(str)) {

        let res = [];
        let words = str.split(" ");
        console.log(words);
        let j = 0;
        for(let i = 0; i < words.length; i++) {
            if(regex.test(words[i])) {
                res[j] = words[i][0].toUpperCase() + words[i].slice(1);
                j++;
            }
        }

        let result = "#";
        for (let i = 0; i < res.length; i++) {
            result += res[i];
        }

        if (result.length > 140) {
            return false;
        } else {
            return result;
        }

    } else {
        return false;
    }
}