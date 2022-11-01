function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote":"You are able to vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}
// Age function to declare both age and can vote, gets input from age then inputs it if lower than 18 returns you cant vote

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model =Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// vehicle object then sets all parameters of it which are make model year and color

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black")
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + "manufactured in " + Erik.Vehicle_Year;

}
// declares 3 new instances of the vehicles and their parameters then outputs and string using them

var Branden =  new Vehicle("Honda", "Challenger", "1999", "Flame decals")
function myF2() {
    document.getElementById("New_and_This").innerHTML = "Branden drives a " + Branden.Vehicle_Make + Branden.Vehicle_Model + " From the year " + Branden.Vehicle_Year + "and it has " + Branden.Vehicle_Color
}
// my own instance and output using same object class

function Pet(Type, Gender, petAge) {
    this.Pet_Type = Type;
    this.Pet_Gender = Gender;
    this.Pet_petAge = petAge;

}
// new object pet with three parameters type gender and age

var Li = new Pet("Cat", "F", 2)
var Grayson = new Pet("Cat", "F", "7")
// two new instances of my pet object

function myF3() {

    document.getElementById("NestedFunction").innerHTML = CountD()
        function CountD() {
            var starter = 10
            function Downer() {starter -= 1;}
            Downer();
            return starter;
        }
}
// function to count down using nested functions, veryu simple counting down function

