function cakes(recipe, available) {
    let res = [];
    let res1 = 0;
    let test = true;
    for(let key in recipe) {
        for(let key1 in available) {
            if(key === key1) {
                res.push(Math.floor(available.key1 / recipe.key));
                test = false;
                break;
            }
            if (test) {
                res = [0];
                break;
            }
        }
    }

    res1 = res[0];

    res.forEach((curr, index, arr) => {
        if(curr > 0 && curr < arr[index+1]) {
            res1 = curr;
        } else if(curr === 0) {
            res1 = 0;
        }
    })
    return res1;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))