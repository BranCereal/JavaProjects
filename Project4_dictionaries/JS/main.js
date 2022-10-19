function myDictionary () {
    var Car = {
        colour :"Black",
        wheels : 4,       //First we create then delcare values in our car object
        seats : 2,       // Then we delete the value stored in the pair FWD
        FWD : "no"      // Then we fetch the value stored at the wheels of our car object
    }
    delete Car.FWD
    document.getElementById("Dictionary").innerHTML =Car.wheels;
}