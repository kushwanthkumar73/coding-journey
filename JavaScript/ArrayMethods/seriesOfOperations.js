
function main() {
  const myArray = JSON.parse(readLine());
  let result = myArray.map((eachValue) => (eachValue * -4 + 10) *3);
  console.log(...result);
}