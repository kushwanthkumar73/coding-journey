"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const userInput = parseInt(readLine());
  const correctPin = 9372;

  const MyPromise = () => {
      return new Promise((resolve,reject)=> {
          if (userInput === correctPin) {
              resolve("Success")
          } else{
              reject("Please enter valid pin")
          }
      });
  }
  MyPromise().then(response => console.log(response))
  MyPromise().catch(error => console.log(error))
}
