function Ride(fare, distance) {
  
  this.fare=fare
  this.distance=distance
  this.getFarePerKilometer=()=> {
      return `${this.fare/this.distance}`
  }

}

/* Please do not modify anything below this line */

function main() {
  const fare = JSON.parse(readLine());
  const distance = JSON.parse(readLine());
  
  const ride1 = new Ride(fare, distance);
  
  console.log(ride1.getFarePerKilometer());
}