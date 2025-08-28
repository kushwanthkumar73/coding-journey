
function main() {
  const isGrassTrimmerFound = JSON.parse(readLine());
  const isWaterHosePipeFound = JSON.parse(readLine());

  /* Write your code here */

 const cuttingGrass = () => {
      return new Promise((resolve, reject) => {
          isGrassTrimmerFound ? resolve("Grass Trimmed") : reject("Grass Trimmer Not Found");
      });
  };
  const cleaningGarden = () => {
      return new Promise((resolve, reject) => {
          resolve("Garden Cleaned");
      });
  };
  const wateringPlants = () => {
      return new Promise((resolve, reject) => {
          isWaterHosePipeFound ? resolve("Watered Plants") : reject("Water Hose Pipe Not Found");
      });
  };

  const myPromise = async () => {
    try {
      const firstTask = await cuttingGrass();
          console.log(firstTask);
          const secondTask = await cleaningGarden();
          console.log(secondTask);
          const thirdTask = await wateringPlants();
          console.log(thirdTask);

    } catch(error) {
  console.log(error);
    }
  };

  myPromise();
}