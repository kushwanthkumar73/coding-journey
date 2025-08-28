
class Mobile {
    constructor(brand, ram, battery, isOnCall, song) {
        this.brand = brand;
        this.ram = ram;
        this.battery = battery;
        this.isOnCall = isOnCall;
        this.song = song;
    }

    charging() {
        if (this.battery < 100) {
            this.battery = 100;
            console.log('Mobile Fully Charged');
        } else {
            console.log('Mobile Already Fully Charged');


            this.removeChargingremoveChargingIt();
        }
    }

    playMusic() {
        console.log(`Playing ${this.song} Song`);
    }

    stopMusic() {
        console.log('Music Stopped');
    }

    makeCall() {
        this.isOnCall = true;
        console.log('Calling...');
    }

    endCall() {
        if (this.isOnCall) {
            console.log('Call Ended');
            this.isOnCall = false;
        } else {
            console.log('No Ongoing Call to End');
        }
    }

    removeChargingremoveChargingIt() {
        return console.log('Please remove charging');
    }
 
  

}

/* Please do not modify anything below this line */

function main() {
    const brand = readLine();
    const ram = readLine();
    const battery = parseInt(readLine());
    const song = readLine();
    const isOnCall = JSON.parse(readLine());
    const myMobile = new Mobile(brand, ram, battery, isOnCall, song);

      // The Mobile battery charged percentage

    myMobile.charging(); // The Mobile charging
    myMobile.playMusic(); // The Mobile will start playing a song
    myMobile.stopMusic(); // The Mobile will stop playing a song
    myMobile.endCall(); // The Mobile will end a call.
    myMobile.makeCall(); // The Mobile will make a call.
    myMobile.endCall(); // The Mobile will end a call.
}