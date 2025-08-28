function main() {
  const categoryOfItem = readLine();
  const item = readLine();

  const mart = [
    {
      category:"pulses",
      items: ["green gram", "green peas", "Turkish gram"]
    },
    {
      category:"soaps",
      items:["santoor", "dove", "lux", "pears"]
    }, 
    {
      category:"oil",
      items: ["sunflower oil", "grapeseed oil", "soybean oil"]
    }, 
    {
      category:"cereals",
      items: ["wheat", "rice", "maize", "oat"]
    }, 
    {
      category:"spices",
      items: ["cumin", "coriander", "black pepper", "clove"]
    }
  ];
  
  /* Write your code here */
   const searchItem = () => {
      return new Promise((resolve,reject) => {
          const categoryObject = mart.find(eachCategory => eachCategory.category === categoryOfItem);
          if (categoryObject !== undefined) {
              const isItemFound= categoryObject.items.includes(item);
                    if (isItemFound) {
                        resolve("Item Found");
                    } else {
                        reject("Item Not Found");
                    }
                    } else {
                        reject("Category Not Found");
                    }
                });
            };
  const myPromise = async () => {
      try {
          let result = await searchItem();
          console.log(result);
      } catch(rejection) {
          console.log(rejection);
      }
  };
  myPromise();
}
