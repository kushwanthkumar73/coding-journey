function main() {
  const nestedArray = JSON.parse(readLine().replace(/'/g, '"'));
  const depth = JSON.parse(readLine());
  
/* Please do not modify anything above this line */
  
  const flattenArray = nestedArray.flat(depth);
  const processedArray = flattenArray.map(item => {
      if(typeof item === 'string'){
          return item.length%2 ===0 ? item.toLowerCase() : item.toUpperCase();
      } else {
          return item
      }
  })
  console.log(processedArray)
  
}