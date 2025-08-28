function main() {
  const myString = readLine();
  const startString  = readLine();
  const endString = readLine();
  
  const startIndex = myString.indexOf(startString);
  const endIndex = myString.indexOf(endString,startIndex+startString.length);
  
  if (startIndex !== -1 && endIndex !== -1) {
      const slicedString = myString.slice(
          startIndex,
          endIndex
      );
      console.log(slicedString);
  } else {
      console.log("");
  }



}