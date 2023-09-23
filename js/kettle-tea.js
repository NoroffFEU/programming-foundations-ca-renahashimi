// Description on kettle

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
   

// Description on tea

const tea = {
    name: "Ceylon",
    type: "Black tea",
    leaves: "Dry",
    beverage: true,
    water: true,
    hot: true,
    cold: false,
    loosetea: true,
    bags: false,
}
console.log(tea);



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
}  else { (setTemperture !== 80)
    console.log ("Water is too cold or too hot!")
}


// On/Off button on my kettle

var button = "off";
if(button === "on") {
    console.log ("Kettle is boiling");
}  else { 
    console.log ("Kettle is not boiling")
}



// Function
console.log (kettle.brand); // Bosch
console.log (kettle.model); // TWK7203
console.log (kettle.capasity); // 1.7 liter
console.log (tea.name); // Ceylon
console.log (tea.type); // Black tea


function LetsBoilSomeMoreWater() {
}
    let fill = "Fill the kettle once more with water";
    let pushButton = "and push the ON button again.";
    let boiling = "Water is boiling fast and";
    let boiled = "finally the water is boiled";  
    let enjoy = "for you to enjoy a second cup of tea!";

    result = (fill+" "+pushButton+" "+boiling+" "+boiled+" "+enjoy);
    console.log (result);


// Index.html - Lets make some tea 
let imgText = document.getElementById("image");
function changeText() {

if (imgText.src.match ("/images/0.jpeg")) {
    imgText.src = "/images/1.jpeg";
    document.getElementById("btn").innerHTML = "Here we go...";
    document.getElementById("text").innerHTML = "Let´s boil some water in a kettle";
} else if (imgText.src.match ("/images/1.jpeg")){
    imgText.src = "/images/2.jpeg"; 
    document.getElementById("btn").innerHTML = "Water is boiled, now the next step is...";
    document.getElementById("text").innerHTML = "to fill the can with aromatic leaves and then with hot water";
} else if (imgText.src.match ("/images/2.jpeg")){
    imgText.src = "/images/3.avif";
    document.getElementById("btn").innerHTML = "More waiting in process...";
    document.getElementById("text").innerHTML = "Let the the sitt for 10 minutes";
} else if (imgText.src.match ("/images/3.avif")){
    imgText.src = "/images/4.jpeg";
    document.getElementById("btn").innerHTML = "Now that the waiting is done..";
    document.getElementById("text").innerHTML = "fill the cups with tea";  
} else if (imgText.src.match ("/images/4.jpeg")){
    imgText.src = "/images/5.jpeg";
    document.getElementById("btn").innerHTML = "Finally, a good cup of tea";
    document.getElementById("text").innerHTML = "and enjoy your tea with some sweets, like baklava...mhhm";
} else {
    imgText.src = "/images/0.jpeg";
    document.getElementById("btn").innerHTML = "You want more tea?";
    document.getElementById("text").innerHTML = "";
}
}
console.log (changeText);