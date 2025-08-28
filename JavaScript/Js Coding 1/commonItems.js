function readLine() {
  return inputString[currentLine++];
}

function main() {
  let arr1 = JSON.parse(readLine().replace(/'/g, '"'));
  let arr2 = JSON.parse(readLine().replace(/'/g, '"'));
  let arr3 = JSON.parse(readLine().replace(/'/g, '"'));

  /* Please do not modify anything above this line */

  /* Write your code here */
  const commonItems = arr1.filter(item => arr2.includes(item)&& arr3.includes(item));
  if(commonItems.length === 0){
      console.log("[]");
  } else {
      const formatted = commonItems.map(item => typeof item === 'string' ? `'${item}'` : item).join(', ');
      console.log(`[ ${formatted} ]`);
  }
  
}
