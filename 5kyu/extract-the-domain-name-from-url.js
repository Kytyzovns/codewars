//Problem : Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//Solution:
function domainName(url){
    //your code here
    let dots = []
    let slash = []
    for( let i = 0; i < url.length; i++){
        if(url[i] === "/") slash.push(i)
        if (url[i] === ".") dots.push(i)
    }
    if(url.slice(dots[0] - 3, dots[0] + 1) === "www.") {
        return url.slice(dots[0] + 1, dots[1])
    } else if((slash[1] - slash[0]) !== 1) {
        return url.slice(0, dots[0])
    } else {
        return url.slice(slash[1] + 1, dots[0])
    }
}

console.log(domainName("http://google.com"));