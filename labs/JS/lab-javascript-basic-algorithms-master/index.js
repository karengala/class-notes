// Iteration 1: Names and Input
console.log("I'm ready!")
const hacker1 = "Pepe"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Pepe"
console.log(`"The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length){
      console.log (`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`)
  } else {
    console.log (`Wow, you both have equally long names, ${hacker2.length} characters!.`)
  }

// Iteration 3: Loops

let newName = "Aleix";
console.log(newName.toUpperCase() + " ");
let reservedName = "";
// Using the help of native built in methods from arrayMethods [join()] & string methods [split(), toUpperCase()]
const usingSplitMethod = newName.split("");
console.log(usingSplitMethod);

console.log("Iteration 003 - Using Native Methods ");
const updatedNewName = newName.split("").join(" ").toUpperCase();
console.log(updatedNewName);
console.log("Iteration 003 - Using Native Methods & a for loop ");
// Using a foor loop
for (let i = 0; i < newName.length; i++) {
  //   reservedName += newName[i].split("").join(" ").toUpperCase();
  reservedName += newName[i].toUpperCase() + " ";
}
console.log(reservedName);

console.log("Iteration 003 - Using Native Methods & a for OF loop ");
let driverName = "";
for (const aleixName of newName) {
  driverName += aleixName.toUpperCase() + " ";
}
console.log(driverName);

// ITERATION 3 - Reverse Order
//Iteration 3.3 - Condicional sencillo
console.log("Iteration 003.3 - Conditionals ");
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}