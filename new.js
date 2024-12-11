function smallest(n) {
    let str = n.toString()
    let res = [n, 0, 0]

    for(let i = 0; i < str.length; i++) {
        let rem = str.slice(0, i) + str.slice(i+1)
        for(let j = 0; j < rem.length+1; j++) {
            let newStr = rem.slice(0, j) + str[i] + rem.slice(j);
            if (Number(newStr) < res[0]) {
                res = [newStr, i, j]
            }
        }
    }

    return res
}

console.log(smallest(935855753))