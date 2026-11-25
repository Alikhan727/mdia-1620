//--- Setting up shop (Assignment 1) ---//
const stableName = "Sunny Stables";
const lateFeeRate = 0.2;
const welcomeMessage = `Welcome to ${stableName}!`;
console.log(welcomeMessage);

// --- Horse cards (Assignment 2) ---//
// Each horse has a card with information about them. 
// The card is an object with properties (name, age, favouriteTreat, fee, location, color, gender).
let angel = {
    name: "Angel",
    nickname: "Angie",
    age: 8,
    favouriteTreat: "apples",
    fee: 200,
    isOutside: true,
    color: "white",
    gender: "mare"
};


// Same kind of card for Thomas. He is inside (location: false)
let thomas = {
    name: "Thomas",
    nickname: "Tommy",
    age: 10,
    favouriteTreat: "carrots",
    fee: 250,
    isOutside: false,
    color: "brown",
    gender: "stallion"
};


// Card for Daisy. She is outside (location: true)
let daisy = {
    name: "Daisy",
    nickname: "Daze",
    age: 6,
    favouriteTreat: "hay cubes",
    fee: 150,
    isOutside: true,
    color: "black",
    gender: "mare"
};

const horses = [angel, thomas, daisy];


// Card for Harry. He is inside (location: false)
// new horse
let harry = {
    name: "Harry",
    nickname: "Hank",
    age: 6,
    favouriteTreat: "Chippy Chips",
    fee: 150,
    isOutside: false,
    color: "grey",
    gender: "gelding"
};

horses.push(harry)



// Hungry status (dot notation)
angel.isHungry = true;
thomas.isHungry = false;
daisy.isHungry = true;
harry.isHungry = false;


const lateMessage = `${angel.name}'s payment is late. Amount owing: $${angel.fee + angel.fee * lateFeeRate}`;
console.log(lateMessage);

const totalStalls = 10;


//function to check available stalls
function checkAvailableStalls() {
    const availableStalls = totalStalls - horses.length;
    console.log(`Available stalls: ${availableStalls}`);
}

// Calling the function (without this line it would never run)
checkAvailableStalls();

function calculateLateFee(horse) {
    const lateFee = horse.fee + horse.fee * lateFeeRate;
    console.log(`${horse.name}'s late fee is $${lateFee}`);
}
calculateLateFee(thomas);

// This function returns a value instead of printing it.
// "return" gives the answer back to the place where the function was called.
function getHorseNickname(horse) {
    return horse.nickname;
}

// The function gives back "Angel", and console.log prints it here, outside the function
console.log(`Selected horse: ${getHorseNickname(angel)}`);

// --- Day to day operations (Project 1) ---//



