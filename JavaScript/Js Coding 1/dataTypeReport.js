function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));

  /* Please do not modify anything above this line */


  const typeCounts = {
      'number': 0,
      'object':0,
      'string':0,
      'boolean':0,
  };
  myArray.forEach(item => {
      const type = typeof item;
      if (type === 'number'){
          typeCounts.number++;
      } else if (type === 'object'){
          typeCounts.object++;
      } else if (type === 'string'){
          typeCounts.string++;
      } else if (type === 'boolean'){
          typeCounts.boolean++;
      }
  });
  console.log(`{ number: ${typeCounts.number}, object: ${typeCounts.object}, string: ${typeCounts.string}, boolean: ${typeCounts.boolean} }`);
  
}
