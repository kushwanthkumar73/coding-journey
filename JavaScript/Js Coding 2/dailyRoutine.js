

async function main() {
  const isHotWaterReady = JSON.parse(readLine());
  const isBreakfastReady = JSON.parse(readLine());
  try {
      const showerPromise = new Promise((resolve,reject) => {
          if(isHotWaterReady) {
              resolve("Taken Shower");
          } else {
              reject("Hot Water Not Ready");
          }
      });
      const breakfastPromise = new Promise((resolve,reject) => {
          if(isHotWaterReady) {
              resolve("Had Breakfast");
          } else {
              reject("Breakfast Not Ready");
          }
      });
      const workPromise = new Promise((resolve) => {
          resolve("Got to Work");
      });
      
      const showerResult = await showerPromise;
      console.log(showerResult);
      const breakfastResult = await breakfastPromise;
      console.log(breakfastResult);
      const workResult = await workPromise;
      console.log(workResult);
  } catch (error){
      console.log(error);
  }


}