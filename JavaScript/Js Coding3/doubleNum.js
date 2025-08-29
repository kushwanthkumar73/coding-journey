function main() {
  const myArray = JSON.parse(readLine().replace(/'/g, '"'));

/* Please do not modify anything above this line */

  const newArray = myArray.map(element => {
      if (typeof element === 'number'){
          return element*2
      } else {
          return typeof element
          }
      
  })
  console.log(newArray)
  
}