function Call_Loop() {
var x = "";
var y = 1;
    while(y<40) {
        x += "<br>" +y;
        y++;
        if (y==4) {continue}
    }
    document.getElementById("Loop").innerHTML = x;
}

function Len() {
    var x = "click to check length of this string"

    document.getElementById("strL").innerHTML = x.length

}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var y;


function for_Loop() {
    for (y=0; y< Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content
}


function pCards() {
    var pCard = [];
    pCard[0] = "clubs"
    pCard[1] = "hearts"
    pCard[2] = "spades"
    pCard[3] = "diamonds"

    document.getElementById("Array").innerHTML = "our playing card suit is: " + pCard[1] + "."
}

function constant_function() {
    const petList = {type:"Cat", name:"Fender", color:"black and white"};
    petList.color = "neopolitan";
    petList.price = "$2000";
    document.getElementById("Constant").innerHTML = "the cost of the " + 
        petList.type + " was " + petList.price;
}

function ret() {
    var x=5
    var y=12
    return x*y
}

let cat = {
    gender: "Female ",
    type:"tux ",
    sleepy:"yes, it's a cat",
    description : function() {
        return "the cat is a " + this.gender + this.type +"and is it sleepy? " + "<br>" + this.sleepy;
    }
}
document.getElementById("catobj").innerHTML = cat.description();
