// DESCRIPTION OF MY KETTLE

var kettle = {
    brand: "Bosch",
    model: "TWK7203",
    capasity: 1.7,
    material: "stainless steal",
    button: ["touchcontrol", "keepwarm", "on", "off"],
    colour: ["black", "grey"],
    watt: 2200,
    weight: 1.827,
    price: 1050,
    isItOn: false,
    isItOff: true,
    lowDegree: 0,
    highDegree: 100,
    setTemperture: [70, 75, 80, 85, 90, 95, 100]
}
console.log(kettle);


// STRING

var object = "Kettle";
var name = "Bosch";
var item = object +"-"+ name;

console.log(item);

// ARRAY & NUMBERS

var temperture = [70, 75, 80, 85, 90, 95, 100];
console.log (temperture);


// Available boiling points / tempertures in a list

for(var i = 0; i < 7; i++){

    // console.log([i]);
    var number = temperture[i];

    console.log(number);
}



// FUNCTION

// lag en knapp



// BOOLEANS




// Water temperture
var setTemperture = 80; //Perfect water temperture

if(setTemperture === 80){
    console.log ("Water is perfect")
}   else { (setTemperture !== 80)
    console.log ("Water is too cold or too hot!")
}


// Buttons on my kettle

var button = "off";
if(button === "on") {
    console.log ("Kettle is boiling");
}   else { 
    console.log ("Kettle is not boiling")
}
