function smallest(n) {
    let res = [n, 0, 0]
    n = n.toString()
    let small = 0
    let big = 0
    let end = false
    for(let i = 0; i<n.length-1; i++) {
        for(let j = i+1; j<n.length; j++) {
            if(Number(n[i])>Number(n[j]) || Number(n[j])<Number(n[small])){
                small = j
                big = i
                console.log(small, big)
                end = true
            }
        }
        if(end) break
    }
    n = n.slice(0, big) + n[small] + n.slice(big, small) + n.slice(small+1)
    if(small - big === 1) {
        return [Number(n), small, big]
    } else {
        return [Number(n), big, small]
    }
}

smallest(261235)