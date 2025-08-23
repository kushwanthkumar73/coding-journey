function main() {
  const pin = parseInt(readLine("Enter a Number: "));
  
  const myPromise=()=> { 
      return new Promise((resolve,reject)=>{
      resolve(pin);
  });
  }
  myPromise().then(response => console.log(response))
}