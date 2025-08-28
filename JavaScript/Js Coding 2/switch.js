function main() {
  const month = readLine();


  let season;
switch(month){
    case 'December':
    case 'January':
        season = "Winter";
        break;
    case 'February':
    case 'March':
        season = "Spring";
        break;
    case 'April':
    case 'May':
    case 'June':
        season = "Summer";
        break;
    case 'July':
    case 'August':
    case 'September':
        season = "Monsoon";
        break;
    case 'October':
    case 'November':
        season = "Autumn";
        break;
    default:
          season = "Invalid Month";
 }
 console.log(season);
}