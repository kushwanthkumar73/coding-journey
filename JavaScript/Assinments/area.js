
function Circle(radius) {
  
  this.radius = radius
  this.getArea=() =>3.14*this.radius**2
  
  this.getCircumference=()=>  2*3.14*this.radius

}

/* Please do not modify anything below this line */

function main() {
  const radius = JSON.parse(readLine());
  
  const circle1 = new Circle(radius);

  console.log(circle1.getArea());
  console.log(circle1.getCircumference());
}