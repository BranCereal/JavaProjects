x = 10

function F() {
    x=11
    console.log(x)
    x= (x + 1)
    console.log(x)
}
//create a function and declare variables x and use console log to check x vbalues then coun t up one

function F2() {
    y = 12
    if(x>y) {
        document.write( "x is greater")
        console.log(x)
        console.log(y)
    }
}
// create a function and declare variable y then use an if statement to check for x>y note x does not exist in this

function timeMy() {
    //create new function for getting the date/time based off 24hr clock the check if clock is b4 or after 10AM using string outputs
    if(new Date().getHours() <10) {
        document.getElementById("date").innerHTML = "You are online before 10AM wow so early"
    }
    else {
        document.getElementById("date").innerHTML = "Getting online after 10AM to do your work? so lazy!"
    }
    
}

function guesser() {
    // first declare x then set it to a random number between 0 and 101 then set age to the value at element id "Age"
x =  Math.floor(Math.random() * 101) 
age = document.getElementById("Age").value

//next we check to see our random guess was correct if so display it if not display our guess
if (x == age) {
        document.getElementById("p2").innerHTML = "i guessed it right your age is  " + document.getElementById("Age").value
    } else {
    document.getElementById("p2").innerHTML = "I guessed wrong your age is not " + x
    }
}


