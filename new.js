
function orderWeight(string) {
   let res = string.split(' ')
    res.sort((a, b) => {
        const j = a.split('').reduce((prev, curr) => prev + Number(curr), 0) - b.split('').reduce((prev, curr) => prev + Number(curr), 0);
        if(j !== 0) {
            return j
        } else {
            return a.localeCompare(b)
        }
    })
    return res.join(" ")
}

console.log(orderWeight("11 11 2000 10003 22 123 1234000 44444444 9999"))