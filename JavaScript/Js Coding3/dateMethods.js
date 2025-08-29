function main() {
  const birthdaysList = JSON.parse(readLine().replace(/'/g, '"'));
  const buntyBirthday = new Date("2000-06-13");

/* Please do not modify anything above this line */

  let sameDay = 0;
  let sameMonth =0;
  let sameYear =0;
  const buntyDay = buntyBirthday.getDate();
  const buntyMonth = buntyBirthday.getMonth()+1;
  const buntyYear = buntyBirthday.getFullYear();
  
  for (const dateStr of birthdaysList) {
      let date;
      if (dateStr.includes("-")){
          date = new Date(dateStr)
      }else if(dateStr.includes("/")){
          const parts = dateStr.split("/")
          date = new Date(`${parts[2]}-${parts[0]}-${parts[1]}`)
      } else {
          date = new Date(dateStr)
      }
      if(isNaN(date.getTime())) continue;
      const day = date.getDate()
      const month = date.getMonth()+1
      const year = date.getFullYear()
      if (day === buntyDay && month === buntyMonth) sameDay++
      if(month === buntyMonth) sameMonth++
      if (year === buntyYear) sameYear++
  }
  
  console.log(sameDay)
  console.log(sameMonth)
  console.log(sameYear)
  
}