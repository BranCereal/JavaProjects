function MyF(){
    var addition = 4+2

    document.getElementById("Math").innerHTML = "4 + 2 = " + addition;
}
// This is the addition function
function MyF2() {
    var subtraction = 4-2

    document.getElementById("Math2").innerHTML = "4 - 2 = " + subtraction;
}
// This is my subtraction function
function MyF3() {
    var multiplication = 4*2

    document.getElementById("Math3").innerHTML = "4 x 2 = " + multiplication;
}
// This is the multi function
function MyF4() {
    var division = 4/2

    document.getElementById("Math4").innerHTML = "4 / 2 = " + division;
}
// this is for division
function MyF5() {
    var modulus = 48%5

    document.getElementById("Math5").innerHTML = "The remainder of 48 / 5 is: " + modulus
}
// this is for the modulus which is the remainder only of a division
function MyF6() {
    var negationOperator = 2

    document.getElementById("Math6").innerHTML = -negationOperator;
}
// this is the function for a negation operator which returns the opposite value of it's value
function MyF7() {
    var increment = 4
    increment++
    document.getElementById("Math7").innerHTML = "increment of 4 is " + increment;
}
// this is the function for an increment it increases by 1
function MyF8() {
    var decrement = 4
    decrement--
    document.getElementById("Math8").innerHTML = "decrement of 4 is " + decrement;
}
// this is the function for a decrement it decreases by 1
function MyF9() {
    var round = 4.8
    Math.round(round)  // this doesn't work??? why not???
    document.getElementById("Math9").innerHTML = "4.8 rounded is " + Math.round(round)
}
// this is my round function, if you are reading this could you send a message maybe explaining why Math.round(round) doesn't change the value in the
// variable round to it's rounded number
