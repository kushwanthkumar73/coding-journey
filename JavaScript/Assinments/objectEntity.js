function main() {
  const fruit = readLine();
  const objectEntities = [
    {
      fruit: "apple",
      vegetable: "broccoli"
    },
    {
      fruit: "kiwi",
      vegetable: "broccoli"
    },
    {
      fruit: "apple", 
      vegetable: "cauliflower"
    },
    {
      fruit: "orange", 
      vegetable: "mushrooms"
    },
  ];
  const result = objectEntities.filter( item => item.fruit == fruit )

    console.log(result);
}