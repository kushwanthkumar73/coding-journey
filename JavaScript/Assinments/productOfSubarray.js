function main() {
  const nestedArray = JSON.parse(readLine());
  const resultArray = nestedArray.map(arr => {
        if ( arr.some(item => item % 2 === 0) ) {
            return arr.reduce( (acc, current) => acc * current )
        } else {
            return 0
        }
    });

    console.log(resultArray);

  
}
