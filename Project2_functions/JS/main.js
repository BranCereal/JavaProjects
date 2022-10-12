
function MyF() {
    var redCar = "This car is now red";

    var blueCar = "This car is now blue";

document.getElementById("cars").innerHTML = redCar;

// First we create the function MyF
// We declare the functions redCar and blueCar giving them both strings to say what colour the car is
// then we use get element to find the p element with the id cars and change
// what the current text is to the variable called after innerhtml

}

function MyF2() {
    var sent = "If I looked at your car I would say..."

    sent += " This car is now the right colour!"

    document.getElementById("wheels").innerHTML = sent;

// First we create the function MyF2
// We are going to declare our variable sent with the text we want our sentence to start with
//we use the same variable with a += and a string to concatenate the two strings
// we then use get element targeting the p element with the id wheels and change it to the value used in sent
}