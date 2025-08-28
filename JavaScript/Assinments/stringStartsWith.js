function main() {
  const stringsArray = JSON.parse(readLine().replace(/'/g, '"'));
  const startString = readLine();
  const endString = readLine();
  const outputArray = stringsArray.filter( item => item.startsWith(startString) || item.endsWith(endString) );

    console.log(outputArray);

  
}