//Description on kettle - Object

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


// Description of tea - Object

const tea = {
    name: "Azercay",
    brand: "Azersun Holding",
    types: ["Black tea", "Green tea", "Buket", "Classic", "Herbal Tea", "Fruit Tea"],
    typeIUse: "Buket",
    leaves: ["Dry", "Fresh leaves", "Plant"],   
    looseTea: true,
    bags: false,
    colour: "Golden red",
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

const object = "Kettle";
const name = "Bosch";
var item = object +"-"+ name;

console.log(item); //Kettle-Bosch


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

// Kettle - List of adjustable temperatures / Available boiling points

var temperture = [70, 75, 80, 85, 90, 95, 100];
console.log (temperture);

for (var i = 0; i < 7; i++){
    // console.log([i]);
    var number = temperture[i];

    console.log(number);

}


// Tea - My favorite flavors / Push method

var types = ["Buket", "Black tea", "Fruit Tea"];
    console.log(types);
    
    types.push ("Green Tea")
    console.log(types);


//______________________________
// BOOLEANS

//Kettle - Brandname

var brandName = ("Bosch");
if (brandName) {
    console.log (true);
} if (!brandName) {
    console.log (false);
}


// Tea - Water/tea must be hot.
var hot = true;
if (hot === false){    
    console.log ("The tea is cold");
} else {   
    console.log ("The tea is hot, aromatic, drinkable");
}

    
//______________________________
// KETTLE - Is the water temperture  perfect?

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

// Both Kettle and Tea - "Boiling water" and adding text as a paragraph

console.log (kettle.brand); // Bosch
console.log (kettle.model); // TWK7203
console.log (kettle.capasity); // 1.7 liter
console.log (tea.name); // Azercay
console.log (tea.typeIUse); // Buket

function LetUsBoilSomeWater() {
}
    let fill = "Fill the kettle once more with water";
    let pushButton = "and push the ON button again.";
    let boiling = "Water is boiling fast and";
    let boiled = "finally the water is boiled";  
    let enjoy = "for you to enjoy a second cup of tea!";

    result = (fill+" "+pushButton+" "+boiling+" "+boiled+" "+enjoy);
    console.log (result);


// Index.html - In this JS coding, I describe how to make tea/teapot - taken from "function LetUsBoilSomeWater"

let indexImage = document.getElementById("image");
let indexButton = document.getElementById("btn");
let indexText = document.getElementById("text");

function changeText() {
if (indexImage.src.match ("/images/0.jpeg")) {
    indexImage.src = "/images/1.jpeg";
    indexButton.innerHTML = "Here we go...";
    indexText.innerHTML = "Fill the kettle with water, push the button and let´s boil some water";    
    document.getElementById("btn2").style.display = "block";
    
    let powerButton = document.querySelector("#btn2");
    powerButton.addEventListener("click", function() {
      powerButton.textContent = "ON";
      powerButton.style.backgroundColor = "#46b84c";
    });
    
} else if (indexImage.src.match ("/images/1.jpeg")){
    indexImage.src = "/images/2.jpeg"; 
    indexButton.innerHTML = "Water is boiled and the next step is...";
    indexText.innerHTML = "to fill the can with aromatic leaves and then with hot water";
    document.getElementById("btn2").style.display = "none";
} else if (indexImage.src.match ("/images/2.jpeg")){
    indexImage.src = "/images/3.avif";
    indexButton.innerHTML = "More waiting in process...";
    indexText.innerHTML = "Let the the sitt for 10 minutes";
} else if (indexImage.src.match ("/images/3.avif")){
    indexImage.src = "/images/4.jpeg";
    indexButton.innerHTML = "Now that the waiting is done...";
    indexText.innerHTML = "fill the cups with tea";  
} else if (indexImage.src.match ("/images/4.jpeg")){
    indexImage.src = "/images/5.jpeg";
    indexButton.innerHTML = "Finally, a good cup of tea";
    indexText.innerHTML = "and enjoy your tea with some sweets, such as baklava...mhhm";
} else {
    indexImage.src = "/images/0.jpeg";
    indexButton.innerHTML = alert("Do you love tea?"); 
    indexButton.innerHTML = "If you do, then let us make more tea";
    indexText.innerHTML = "";
}
}
console.log (changeText);


