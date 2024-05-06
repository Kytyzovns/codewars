//Problem: The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//Solution:
let maxSequence = function(arr){

    if (arr.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for(let i = arr.length; i >= 1; i-- ) {

            let k = 0;

            function check (i) {
                let sum1 = 0;

                for(let j = k; j < i + k; j++) {
                    sum1 += arr[j];
                }
                k++;

                if (sum1 > sum) {
                    sum = sum1;
                }

                if (i + k > arr.length) {
                    return;
                }
                check(i);
            }

            check(i);
            if(i === 1 && sum <= 0) {
                return 0;
            } else if (i === 1) {
                return sum;
            } else {
                check(i);
            }
        }
    }
}