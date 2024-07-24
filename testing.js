function dirReduc(arr) {
    let numArr = [];
    for (let i = 0; i<arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === "NORTH") {
            numArr[i] = 1;
        } else if (arr[i] === "SOUTH") {
            numArr[i] = -1;
        } else if (arr[i] === "WEST") {
            numArr[i] = 3;
        } else if (arr[i] === "EAST") {
            numArr[i] = -3;
        }
    }
    console.log(numArr);
    const check = () => {
        let i = 0;
        let j = false;
        for (i = 0; i < numArr.length; i++) {
            if (numArr[i] + numArr[i + 1] === 0) {
                numArr.splice(i, 2);
                j = true;
                break;
            }
        }

        if (j) {
            check();
        }
    }

    check();
    return numArr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));