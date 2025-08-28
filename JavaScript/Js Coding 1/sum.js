function main() {
  let integers = JSON.parse(readLine());

  /* Please do not modify anything above this line */

  /* Write your code here */
  let cumulativeSum =0;
  const result = integers.map(num => {
      cumulativeSum += num;
      return cumulativeSum;
  });
  console.log('[ '+result.join(', ')+' ]');
}
