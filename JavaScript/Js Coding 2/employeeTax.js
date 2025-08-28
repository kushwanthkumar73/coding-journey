function main() {
  const name = readLine();
  const role = readLine();
  const salary = JSON.parse(readLine());

  function Employee(name, role, salary) {
      this.name = name;
      this.role = role;
      this.salary = salary;
      
      this.getTaxAmount= function(){
          let taxPercentage = 0;
          if(this.salary>= 1000000) {
              taxPercentage=10;
          } else if (this.salary >= 500000) {
              taxPercentage = 5;
          }
          return this.salary * taxPercentage/100;
      }


  }

  const employee1 = new Employee(name,role,salary); // Write your code here

/* Please do not modify anything below this line */

  console.log(employee1.getTaxAmount());
}