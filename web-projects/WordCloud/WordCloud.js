// get  elemets from Html
let wordsContainerE1 = document.getElementById('wordsContainer');
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

//Starting words to show initially
let wordCloud = ["Hello", "Welcome", "World", "JavaScript", "Code", "Kushu", "CCbp"];
// function to create and add the words to cloud 
function createAndAddWordToWordCloud(word) {
    let wordEl = document.createElement("span"); // create a span
    wordEl.textContent = word; //aet the text 
    wordEl.classList.add("m-2"); // add Bootstrap margin
    wordsContainerE1.appendChild(wordEl); // add to the page 

}
// add intial words to the page 
for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}

//add word to the cloud from userInput 
function onAddWordToWordCloud() {
    let userEnteredWord = userInputEl.value; //get word from input 
    if (userEnteredWord !== "") {
        //if not empty
        createAndAddWordToWordCloud(userEnteredWord); // add word to cloud 
        userInputEl.value = ""; // clear input box
    } else {
        // show error msg 
        errorMsgEl.textContent = "Please Enter a Word";
    }
}