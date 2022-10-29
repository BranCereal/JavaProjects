document.write(typeof "dog");

document.write(3E450); // using exponents e= the equivalent of ^

document.write(-3E410); // this is the reverse of the other giving negative infinity

document.write(10>3);
                            // simple booleans
document.write(3>10);

console.log(10+3);  // using console log to display results

document.write("14" + 45); // copmbining a string and a number

console.log(10<3); // console log to display result

document.write(10==4); // equal booleans that equal false

document.write(10 == (5+5)); // equal boolean for true
x=4
y="4" // delcaring variables for later
z=8
f=4

document.write(x===f);  // 4 is same value and data type

document.write(z===y); // 8 is not same value or type

document.write(x===y); // same value diff type

document.write(x===z); // same type diff value

document.write(10>3 && 3<5); // if both true then true

document.write(3>10 && 5<3); // if this is two false

document.write(3<10 || 10>1); // if one is true return true

document.write(3<10 || 10<3); // if one is true return true




// testing for Not a number functions jus use two // to remove parts not needed
function myFunction() {
    document.getElementById("test").innerHTML = 0/0
    document.getElementById("test").innerHTML = isNaN(007)
    document.getElementById("test").innerHTML = isNaN("dog")
}
//testing for the not function
function notFunction() {
    document.getElementById("Not").innerHTML = !(20 >10);
}
// testing for the not function again this is true
function notFunction2() {
    document.getElementById("Not2").innerHTML = !(5 >10);
}