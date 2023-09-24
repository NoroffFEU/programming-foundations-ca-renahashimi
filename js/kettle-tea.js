//OBJECT; KETTLE and TEA 


//______________________________
// Description on kettle

const kettle = {
    brand: "Bosch",
    model: "TWK7203",
    capasity: 1.7,
    on: false,
    material: "stainless steal",
    button: ["touchcontrol", "keepwarm", "on", "off"],
    colour: ["black", "grey"],
    watt: 2200,
    weight: 1.827,
    price: 1050,
    maxCelsius: 100,
    adjustableTemperature: true,
    setTemperture: [70, 75, 80, 85, 90, 95, 100],
    switch: function () {
        kettle.on = !kettle.on
    }
}
console.log(kettle);


// Description of tea

const tea = {
    name: "Azercay",
    brand: "Azersun Holding",
    types: ["Black tea", "Green tea", "Buket", "Classic", "Herbal Tea", "Fruit Tea"],
    typeIUse: "Buket",
    leaves: ["Dry", "Fresh leaves", "Plant"],   
    looseTea: true,
    bags: false,
    color: "Golden red",
    weightGram: 100,
    beverage: true,
    water: true,
    hot: true,
    cold: false,
    function: ["Immun system booster", "Produces antioxidant"]
}
console.log(tea);


//______________________________
// STRING

// Kettle




/*
const object = "Kettle";
const name = "Bosch";
var item = object +"-"+ name;

console.log(item);
*/



// Tea

var types = "Green Tea";
var gram = 90;
var bags = true;

if (types === "Buket" &&  gram < 100 && bags === true){
    console.log("I love this tea");
} else {
    if (types != "Buket") {
        console.log ("The type must be Buket");
    }
    if (types = "bags") {
        console.log ("The tea must be loose, not in bags");
    }  
    console.log("I do not like this tea");
}
  


//______________________________
// ARRAY & NUMBERS

// Kettle
// List of adjustable temperatures / Available boiling points

var temperture = [70, 75, 80, 85, 90, 95, 100];
console.log (temperture);

for (var i = 0; i < 7; i++){
    // console.log([i]);
    var number = temperture[i];

    console.log(number);
}


// Tea
// My favorite flavors / Push method

var types = ["Buket", "Black tea", "Fruit Tea"];
    console.log(types);
types.push ("Green Tea")
    console.log(types)


//______________________________
// BOOLEANS

//Kettle

var brandName = ("Bosch");
if (brandName) {
    console.log (true);
} if (!brandName) {
    console.log (false);
}


// Tea
// Water / tea must be hot.
var hot = true;
if (hot === false){    
    console.log ("This tea is cold");
} else {   
    console.log ("This tea is hot, aromatic, drinkable");
}


    

//______________________________
// KETTLE
// Water temperture 

var setTemperture = 80; //Perfect water temperture

if(setTemperture === 80){
    console.log ("Water is perfect")
}  else { (setTemperture !== 80)
    console.log ("Water is too cold or too hot!")
}

// On/Off button on the kettle

var button = "off";
if(button === "on") {
    console.log ("Kettle is boiling");
}  else { 
    console.log ("Kettle is not boiling")
}


//______________________________
// FUNCTION

// Both Kettle and Tea

console.log (kettle.brand); // Bosch
console.log (kettle.model); // TWK7203
console.log (kettle.capasity); // 1.7 liter
console.log (tea.name); // Ceylon
console.log (tea.typeIUse); // Black tea


function LetUsBoilSomeWater() {
}
    let fill = "Fill the kettle once more with water";
    let pushButton = "and push the ON button again.";
    let boiling = "Water is boiling fast and";
    let boiled = "finally the water is boiled";  
    let enjoy = "for you to enjoy a second cup of tea!";

    result = (fill+" "+pushButton+" "+boiling+" "+boiled+" "+enjoy);
    console.log (result);


// Lets make some tea 
// Index.html - In this JS coding, I describe how to make tea/teapot.

let imgText = document.getElementById("image");
function changeText() {

if (imgText.src.match ("/images/0.jpeg")) {
    imgText.src = "/images/1.jpeg";
    document.getElementById("btn").innerHTML = "Here we go...";
    document.getElementById("text").innerHTML = "Let´s boil some water in a kettle";
} else if (imgText.src.match ("/images/1.jpeg")){
    imgText.src = "/images/2.jpeg"; 
    document.getElementById("btn").innerHTML = "Water is boiled and the next step is...";
    document.getElementById("text").innerHTML = "to fill the can with aromatic leaves and then with hot water";
} else if (imgText.src.match ("/images/2.jpeg")){
    imgText.src = "/images/3.avif";
    document.getElementById("btn").innerHTML = "More waiting in process...";
    document.getElementById("text").innerHTML = "Let the the sitt for 10 minutes";
} else if (imgText.src.match ("/images/3.avif")){
    imgText.src = "/images/4.jpeg";
    document.getElementById("btn").innerHTML = "Now that the waiting is done...";
    document.getElementById("text").innerHTML = "fill the cups with tea";  
} else if (imgText.src.match ("/images/4.jpeg")){
    imgText.src = "/images/5.jpeg";
    document.getElementById("btn").innerHTML = "Finally, a good cup of tea";
    document.getElementById("text").innerHTML = "and enjoy your tea with some sweets, like baklava...mhhm";
} else {
    imgText.src = "/images/0.jpeg";
    document.getElementById("btn").innerHTML = "Shall we make more tea?";
    document.getElementById("text").innerHTML = "";
}
}
console.log (changeText);