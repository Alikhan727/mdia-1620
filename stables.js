console.log("Hello WORLD");

// An object is like a card with information about one thing.
// Here it is a card for the horse Angel.
// Each line is "property name: value".
let angel = {
    name: "Angel", // text (string)
    age: 8, // number
    favouriteTreat: "apples", // text (string)
    fee: 200, // number: how much the owner pays per month
    location: true,      // true/false (boolean): true = outside, false = inside
    color: "white", // my own extra property
    gender: "mare" // my own extra property
};


// Same kind of card for Thomas. He is inside (location: false)
let thomas = {
    name: "Thomas", 
    age: 10,
    favouriteTreat: "carrots",
    fee: 250,
    location: false,
    color: "brown",
    gender: "stallion"
};


// Card for Daisy. She is outside (location: true)
let daisy = {
    name: "Daisy", 
    age: 6,
    favouriteTreat: "hay cubes",
    fee: 150,
    location: true,
    color: "black",
    gender: "mare"
};

// Card for Harry. He is inside (location: false)
let harry = {
    name: "Harry", 
    age: 6,
    favouriteTreat: "Chippy Chips",
    fee: 150,
    location: false,
    color: "grey",
    gender: "gelding"
};


// An array is a list in square brackets.
// This list holds all 4 horses, so I can count them or loop over them later.
// Counting starts at 0: horses[0] is angel, horses[1] is thomas, and so on.
let horses = [angel, thomas, daisy, harry];

// Dot notation: object.property
// Here I ADD a new property "isHungry" to each horse (true = hungry, false = not hungry)
angel.isHungry = true;
thomas.isHungry = false;
daisy.isHungry = true;
harry.isHungry = false;

// A variable with the total number of stalls in the stable
let totalStalls = 10;

// A function is a block of code with a name that I can run whenever I want.
// This one finds how many stalls are free and prints the number.
function checkAvailableStalls() {
    // 10 stalls minus 4 horses (horses.length is the number of items in the array)
    let availableStalls = totalStalls - horses.length;
    // Backticks ` ` with ${} let me put a variable inside a text
    console.log(`Available stalls: ${availableStalls}`);
}
// Calling the function (without this line it would never run)
checkAvailableStalls();

// The late fee is 20% extra. 0.2 means 20%
let lateRateFee = 0.2;

// This function has a parameter called "horse".
// It is a placeholder: when I call the function, I give it a real horse.
function calculateLateFee(horse) {
    // Rent plus 20%: for example 250 * 1.2 = 300
    let lateFee = horse.fee * (1 + lateRateFee);
    // Prints the horse's name and the late fee
    console.log(`${horse.name} late fee is $${lateFee}`);
} 

// Calling the function and giving it thomas, so "horse" becomes thomas
calculateLateFee(thomas);

// This function RETURNS a value instead of printing it.
// "return" gives the answer back to the place where the function was called.
function getHorseNickname(horse) {
    return horse.name; 
}
// The function gives back "Angel", and console.log prints it here, outside the function
console.log(`Selected horse: ${getHorseNickname(angel)}`);






// MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH 
// Making another change in this line 
//






// MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH 
// Making another change in this line 
// 
