console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("Start : ");

let growth = 1; // % profit;
let countTimes = 0;
let currentAmount = 100;
let endAmount = currentAmount * 2;
while (currentAmount <= endAmount) {
  console.log("1st currentAmount : ", currentAmount);
  countTimes++;
  currentAmount = currentAmount + (currentAmount / 100) * growth;
  console.log("");
  console.log("");
  console.log("");
  console.log("currentAmount : ", currentAmount);
  console.log("countTimes : ", countTimes);
}

console.log("");
console.log("");
console.log("");
console.log("");
console.log("The final output : ");
console.log("");
console.log("");
console.log("");
console.log("currentAmount : ", currentAmount);
console.log("countTimes : ", countTimes);
console.log("endAmount : ", endAmount);
