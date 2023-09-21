// DESCRIPTION OF MY KETTLE

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
    maxcelsius: 100,
    setTemperture: [70, 75, 80, 85, 90, 95, 100]
}
console.log(kettle);




// String

const object = "Kettle";
const name = "Bosch";
var item = object +"-"+ name;

console.log(item);




// Array & Numbers

var temperture = [70, 75, 80, 85, 90, 95, 100];
console.log (temperture);

// Available boiling points / tempertures in a list

for (var i = 0; i < 7; i++){

    // console.log([i]);
    var number = temperture[i];

    console.log(number);
}




// Booleans

var brandName = ("Bosch");
if (brandName) {
    console.log (true);
} if (!brandName) {
    console.log (false);
}
    




// Water temperture

var setTemperture = 80; //Perfect water temperture

if(setTemperture === 80){
    console.log ("Water is perfect")
}   else { (setTemperture !== 80)
    console.log ("Water is too cold or too hot!")
}




// On/Off button on my kettle

var button = "off";
if(button === "on") {
    console.log ("Kettle is boiling");
}   else { 
    console.log ("Kettle is not boiling")
}





// Function

console.log (kettle.model); // TWK7203
console.log (kettle.capasity); // 1.7 liter



function boilSomeWater() {
    console.log ("Fill the kettle with water");
    console.log ("Push the ON button");
    console.log ("Water is boiling");
    console.log ("Water is boiled and kettle is OFF");
}

boilSomeWater();

// Function 2

function LetsBoilSomeMoreWater() {
}
    let fill = "Fill the kettle once more with water";
    let pushButton = "and push the ON button again.";
    let boiling = "Water is boiling fast and";
    let boiled = "finally the water is boiled";  
    let enjoy = "for you to enjoy a second cup of tea!";

    result = (fill+" "+pushButton+" "+boiling+" "+boiled+" "+enjoy);
    
    console.log (result);


// Button ON


function change(){
    document.getElementById("text").innerHTML = "ON";
    document.getElementById("btn").style.background = "rgb(0, 128, 0)";   
}

console.log (change);




/*else (!change) {
    document.getElementById("text").innerHTML = "OFF";
    document.getElementById("btn").style.background = "rgb(255, 0, 0)";
}
}


/*
    document.getElementById("text").innerHTML = "OFF";
    document.getElementById("btn").style.background = "rgb(255, 0, 0)";
*/








