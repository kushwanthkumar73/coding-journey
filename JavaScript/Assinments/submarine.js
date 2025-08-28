
class Submarine {
  constructor(totalTorpedos,torpedosFired) {
    this.isSubmerged = false;
    this.totalTorpedos = totalTorpedos;
      this.torpedosFired = torpedosFired;
   }
   PropertyDescriptionisSubmergedIt(Submerged){
      this.isSubmerged = Submerged;
   }
   DescriptiondiveWhen(){
      this.PropertyDescriptionisSubmergedIt(true);
      console.log('Submarine Submerged');
   }
   surfaceWhen(){
      this.PropertyDescriptionisSubmergedIt(false);
      console.log('Submarine Surfaced');
   }
   FireTorpedos(){
      console.log(`${this.torpedosFired} Torpedos Fired, ${this.totalTorpedos-this.torpedosFired} Left`);
   }


  
}

class WeaponUnit extends Submarine {

  
  DescriptiondiveWhen(){
      super.DescriptiondiveWhen();
   }
   surfaceWhen(){
      super.surfaceWhen();
   }
   FireTorpedos(){
      super.FireTorpedos();
   }
}

/* Please do not modify anything below this line */

function main() {
  const totalTorpedos = parseInt(readLine());
  const torpedosFired = parseInt(readLine());  
  
  const weaponUnit1 = new WeaponUnit(totalTorpedos, torpedosFired);
  
  weaponUnit1.DescriptiondiveWhen();
  weaponUnit1.FireTorpedos();
  weaponUnit1.surfaceWhen();
}