function main() {
  const father = JSON.parse(readLine().replace(/'/g, '"'));
  const mother = JSON.parse(readLine().replace(/'/g, '"'));
  const child = JSON.parse(readLine().replace(/'/g, '"'));
 
  const family={...father,...mother,...child}

/* Please do not modify anything below this line */
  console.log(`Mr and Mrs ${family.surname} went to a picnic in ${family.city} with a boy and a pet ${family.pet}. Mrs ${family.surname} made a special dish "${family.dish}"`);
}