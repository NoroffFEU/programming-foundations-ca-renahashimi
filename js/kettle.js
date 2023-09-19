
// My kettle

var object = "Kettle";
var name = "Bosch";
var item = object +"-"+ name;

console.log(item);


// Description of my kettle

const kettle = {
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
    setTemprature: [70, 75, 80, 85, 90, 95, 100]
}

console.log(kettle)


// Buttons on my kettle
  
var button = "off";

if(button === "on") {
    console.log ("Kettle is boiling");
}   else {
        console.log("Kettle is not boiling")
}

// Water temprature
var setTemprature = 70; //Perfect water temprature

if(setTemprature === 80){
    console.log ("Water is perfect")
}   else { (setTemprature !== 80)
    console.log ("Water is too cold or too hot!")
}


