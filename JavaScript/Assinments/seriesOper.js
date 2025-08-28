function main() {
  const myArray = JSON.parse(readLine());
  let result = myArray.map((eachNumber) => (eachNumber * 9 - 20) * 7);
  console.log(...result);

  
}