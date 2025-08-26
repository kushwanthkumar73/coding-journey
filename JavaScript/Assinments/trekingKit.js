function Trekking(item) {
  this.item = item;
}

// Prototype method → checks if the kit contains the item
Trekking.prototype.isKitContains = function(obj) {
  return Object.getOwnPropertyNames(obj).some(key => key === this.item);
};

function main() {
  const item = readLine();  // e.g. "ruckSackBag"
  
  const trekkingKit = {
    ruckSackBag : true,
    clothes: ["Shirt", "T-Shirt/Full sleeves", "Jeans"],
    firstAid: true,
    waterBottle: "2 liters",
    sunGlasses: "UV Protection",
    headTorch: true,
    medicines: true,
    footWear: "Non-skid",
    food: ["dry fruits", "nuts", "chocolate bars"]
  };

  const trekking = new Trekking(item);
  const result = trekking.isKitContains(trekkingKit);

  console.log(result);
}
