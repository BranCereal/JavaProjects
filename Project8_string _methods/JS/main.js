function con() {
    var a ="this string is "
    var b ="a bit longer "
    var c ="than the previous one"
    var full= a.concat(b, c);
    document.getElementById("concat").innerHTML = full;
}
//concat function to add strings toggether

function slicer() {
    var first= "this is a string"
    var second = first.slice(10,16)
    document.getElementById("slice").innerHTML = second
}
//function to slice a part of a string out

function capital() {
    var x = "this is a string"
    x = x.toUpperCase()
    document.getElementById("capi").innerHTML = x
}
// function to turn something into caps

function searching() {
    var x = "this is a string"
    x = x.search("string")
    document.getElementById("sear").innerHTML = x
}
//function to search for the coordinates of a specific case sensitive item in a string

function strmeth() {
    var x = Math.random()
    document.getElementById("ntos").innerHTML = x.toString();
}
//function to convert a value to a string

function strmeth2() {
    var x = Math.random()
    document.getElementById("ntos2").innerHTML = x.toPrecision(3);
}
// function that returns the value to a string as a certain decimal point (3)

function fixed() {
    var x = Math.random()
    document.getElementById("fix").innerHTML = x.toFixed(3)
}
// returns your value to a string with a certain number of decimals

function valof() {
    var x = Math.random()
    document.getElementById("valof").innerHTML = x.valueOf()
}
// returns the primitive value of  the variable x