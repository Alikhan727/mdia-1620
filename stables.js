                    // --- Setting up shop (Assignment 1) ---//
const stableName = "Sunny Stables";
const lateFeeRate = 0.2;
const welcomeMessage = `Welcome to ${stableName}!`;
console.log(welcomeMessage);

                    // --- Horse cards (Assignment 2) ---//

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
console.log(`Selected horse: ${getHorseNickname(angel)}`);


                    // --- Day to day operations (Project 1) ---//

const wantedTreat = "apples"; 
for (const horse of horses) {
    if (horse.favouriteTreat === wantedTreat) {
        console.log(`${horse.name} loves ${wantedTreat}!`);
    }
    console.log(`${horse.name} doesn't like ${wantedTreat}. Next horse!`);
}

function describeHorse(horse) {
    if (horse.gender === "mare") {
        console.log(`${horse.name} is a ${horse.age}-year-old ${horse.color} ${horse.gender}. He loves ${horse.favouriteTreat}.`);
    }
    console.log(`${horse.name} is a ${horse.age}-year-old ${horse.color} ${horse.gender}. He loves ${horse.favouriteTreat}.`);
}
horses.forEach(describeHorse);

function feedHorses() {
    for (const horse of horses) {
        if (horse.isOutside) {
            horse.isOutside = false;
            console.log(`${horse.name} has been moved inside.`);
        }
        horse.isHungry = false;
        console.log(`${horse.name} has been fed ${horse.favouriteTreat} and is no longer hungry.`);
    }
}
feedHorses();


function moveOutside(isDark, horsesToMove) {
    for (const horse of horsesToMove) {
        if (isDark && horse.isOutside) {
            horse.isOutside = false;
            console.log(`${horse.name} has been moved outside to spend time in the sun.`);
        } else if (!isDark && !horse.isOutside) {
            horse.isOutside = true;
            console.log(`${horse.name} has been moved outside to spend time in the sun.`);
        }
    }
}