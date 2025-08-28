function main() {
  const inputString = readLine();
  const separator = readLine();
  const replaceString = readLine();
  let array = inputString.split(separator);
  function seperator(inputString, separator, replaceString ) {
    let arr = inputString.split(separator);
    let res = arr.map(item => item.length > 7 ? item = replaceString : item = item);
    res.join("");
    console.log(...res);
}
seperator(inputString,separator,replaceString);


}