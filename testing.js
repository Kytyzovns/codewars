function dirReduc(arr) {
    const check2 = () => {
        let i = 0;
        let j = false;

        for (i =0; i < arr.length; i++) {
            if (arr[i] + arr[i + 1] === "NORTHSOUTH" || arr[i] + arr[i + 1] === "SOUTHNORTH" || arr[i] + arr[i + 1] === "WESTEAST" || arr[i] + arr[i + 1] === "EASTWEST") {
                arr.splice(i, 2);
                j = true;
                break;
            }
        }

        if (j) {
            check2();
        }
    }
    check2();
    return arr;
}

console.log(dirReduc(["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]));