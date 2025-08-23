const myPromise = new Promise((resolve, reject) => {
  resolve("Done");
});

myPromise.then(result => console.log(result));
