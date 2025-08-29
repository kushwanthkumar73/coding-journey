function main() {
  const wordsList = JSON.parse(readLine().replace(/'/g, '"'));
  const myString = readLine();

/* Please do not modify anything above this line */
  
  const comvertedList = wordsList.map(word => {
      if (word.startsWith(myString) || word.endsWith(myString)){
          return word.toUpperCase();
      } else {
          return word;
      }
  })
  console.log(comvertedList)

}