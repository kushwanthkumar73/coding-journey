function main() {
  const myArray = JSON.parse(readLine().replace(/'/g, '"'));
  function arrayToUpperCase(arr) {
    return arr.map(item => item.toUpperCase())
}
const res = arrayToUpperCase(myArray);

console.log(res);
  
  
}