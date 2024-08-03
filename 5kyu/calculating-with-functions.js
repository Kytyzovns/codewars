//Problem:This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

//Solution:
function zero(op) {
    return Math.floor(eval(op? "0" + op : "0"))
}
function one(op) {
    return Math.floor(eval(op? "1" + op : "1"))
}
function two(op) {
    return Math.floor(eval(op? "2" + op : "2"))
}
function three(op) {
    return Math.floor(eval(op? "3" + op : "3"))
}
function four(op) {
    return Math.floor(eval(op? "4" + op : "4"))
}
function five(op) {
    return Math.floor(eval(op? "5" + op : "5"))
}
function six(op) {
    return Math.floor(eval(op? "6" + op : "6"))
}
function seven(op) {
    return Math.floor(eval(op? "7" + op : "7"))
}
function eight(op) {
    return Math.floor(eval(op? "8" + op : "8"))
}
function nine(op) {
    return Math.floor(eval(op? "9" + op : "9"))
}

function plus(num) {
    return `+ ${num}`
}
function minus(num) {
    return `- ${num}`
}
function times(num) {
    return `* ${num}`
}
function dividedBy(num) {
    return `/ ${num}`
}

