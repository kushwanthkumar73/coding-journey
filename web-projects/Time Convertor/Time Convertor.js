let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");

convertBtnEl.addEventListener("click", function() {
    let hours = (hoursInputEl.value);
    let minutes = (minutesInputEl.value);
    if (hours === "" || minutes === "") {
        errorMsgEl.textContent = "Please enter hours and minutes";
        timeInSecondsEl.textContent = "";
    } else {
        let timeSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
        timeInSecondsEl.textContent = timeSeconds;
        timeInSecondsEl.style.backgroundColor = "#ffffff"; // dark grey/black
        timeInSecondsEl.style.color = "#000000"; // white text for contrast
        timeInSecondsEl.style.padding = "12px 16px";
        timeInSecondsEl.style.borderRadius = "10px";
        timeInSecondsEl.style.fontWeight = "bold";
        timeInSecondsEl.style.textAlign = "center";
        timeInSecondsEl.style.width = "fit-content";
        timeInSecondsEl.style.marginTop = "12px";
        errorMsgEl.textContent = "";
    }
})