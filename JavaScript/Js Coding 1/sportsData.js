function main() {
  let sportsData = JSON.parse(readLine().replace(/'/g, '"'));

  /* Please do not modify anything above this line */

  /* Write your code here */
  const result ={};
  sportsData.forEach(([student, sport]) => {
      result[student] = sport;
  });
  let output = '{ ';
  const entries = Object.entries(result);
  output+= entries.map(([key,value]) => `${key}: '${value}'`).join(', ');
  output += ' }';
  console.log(output);
}
