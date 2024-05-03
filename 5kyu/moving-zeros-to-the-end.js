//Problem: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//Solution:
function moveZeros(arr) {
    let k = 0;
    let j = 0;
    let sol = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 0) {
            k++;
        } else {
            sol[j] = arr[i];
            j++;
        }
    }
    for(k; k > 0; k--) {
        sol.push(0);
    }
    return sol;
}