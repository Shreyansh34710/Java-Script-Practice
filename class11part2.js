// let newPromise = new Promise((resolve,reject)=>{
//     let a = 5;
//     let b = 5;
// })




// newPromise
//         .then((data)=>{
//             console.log('Recieved data: ',data)
//         })
//         .catch((error)=>{
//             console.log('error msg: ',error)
//         })
//         .finally(()=>{
//             console.log('promise is dor=ne or not')
//         })






const flipCoin = new Promise((resolve, reject) => {
  const isHeads = Math.random() > 0.5; // Random true/false
  
  if (isHeads) {
    resolve("It's Heads! You Win! 🌟"); // Success button
  } else {
    reject("It's Tails! You Lose. ❌"); // Failure button
  }
});

// Usage
console.log("1. Coin is in the air...");

flipCoin
  .then((successMessage) => {
    // This runs ONLY if resolve() was called
    console.log("Success:", successMessage);
  })
  .catch((errorMessage) => {
    // This runs ONLY if reject() was called
    console.log("Error:", errorMessage);
  })
  .finally(() => {
    console.log("3. Game Over.");
  });

console.log("2. Still waiting...");
