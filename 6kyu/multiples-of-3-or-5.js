// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.


//SOLUTION:
function solution(number){
    var numbers = [];
    var sum = 0;
    var k = 0;
    number--;
    if(number >= 0) {
        for(var i = number; i > 2; i--) {
            if(i % 3 === 0 || i % 5 === 0) {
                numbers[k] = i;
                k++;
            }
        }

        for(var j = 0; j < numbers.length; j++) {
            sum += numbers[j];
        }
        return sum;
    } else {
        return 0;
    }
}

