function main() {
  const myArray = JSON.parse(readLine().replace(/'/g, '"'));
  
   let arr=['recycling', 70, 'pastime', 'animal'];
  let result=myArray.every(function(value){
      return "string"=== typeof value;
  });
  console.log(result);

  
}