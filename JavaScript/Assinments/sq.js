function main() {
  const myArray = JSON.parse(readLine());
  function squareAlternate(arr) {
    return arr.map( (item, index) => {
        if (index % 2 == 0) {
            return item *= item;
        } else return item;
    })
}
console.log(squareAlternate(myArray));
  
  
}
