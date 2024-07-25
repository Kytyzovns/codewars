function cakes(recipe, available) {
    let res = [];
    let res1 = 0;
    let test = true;
    for(let key in recipe) {
        for(let key1 in available) {
            if(key === key1) {
                res.push(Math.floor(available[key1] / recipe[key]));
                test = false;
                break;
            }
        }
        if (test) {
            res = [0];
            break;
        }
    }
 console.log(res);
    res1 = res[0];

    res.forEach((curr, index, arr) => {
        if(curr > 0 && curr < arr[index+1] && res1 !==0) {
            res1 = curr;
        } else if(curr === 0) {
            res1 = 0;
        }
    })
    return res1;
}

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))