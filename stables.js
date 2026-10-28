console.log("Hello WORLD");

let angel = {
    name: "Angel", 
    age: 8,
    favouriteTreat: "apples",
    fee: 200,
    location: true,      
    color: "white",
    gender: "mare"
};


let thomas = {
    name: "Thomas", 
    age: 10,
    favouriteTreat: "carrots",
    fee: 250,
    location: false,
    color: "brown",
    gender: "stallion"
};


let daisy = {
    name: "Daisy", 
    age: 6,
    favouriteTreat: "hay cubes",
    fee: 150,
    location: true,
    color: "black",
    gender: "mare"
};

let harry = {
    name: "Harry", 
    age: 6,
    favouriteTreat: "Chippy Chips",
    fee: 150,
    location: false,
    color: "grey",
    gender: "gelding"
};


let horses = [angel, thomas, daisy, harry];

angel.isHungry = true;
thomas.isHungry = false;
daisy.isHungry = true;
harry.isHungry = false;

let totalStalls = 10;

function checkAvailableStalls() {
    let availableStalls = totalStalls - horses.length;
    console.log(`Available stalls: ${availableStalls}`);
}
checkAvailableStalls();

let lateRateFee = 0.2;

function calculateLateFee(horse) {
    let lateFee = horse.fee * (1 + lateRateFee);
    console.log(`${horse.name} late fee is $${lateFee}`);
} 

calculateLateFee(thomas);

function getHorseNickname(horse) {
    return horse.name; 
}
console.log(`Selected horse: ${getHorseNickname(angel)}`);






// MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH 
// Making another change in this line 
// 