
function main() {
  const inputString = readLine();
  const subString = readLine();
   let isIncluded = inputString.includes(subString);
    if(isIncluded) {
            let reqIndex=inputString.indexOf(subString)
            const slicedString = inputString.slice(reqIndex,inputString.length);
            console.log(slicedString);
    } else {
        console.log(inputString);

}
  
  
}
