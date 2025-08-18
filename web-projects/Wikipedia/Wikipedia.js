//get the inputElement
let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function CreateAndAppendChild(result) {
    let {
        title,
        link,
        description
    } = result;
    // result Container div
    let resultEl = document.createElement("div");
    resultEl.classList.add("result-item");
    searchResultsEl.appendChild(resultEl);
    //title Element 
    let titleEl = document.createElement("a")
    titleEl.classList.add("result-title");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank" // create  a achor element to opens in new tap

    resultEl.appendChild(titleEl)
    // title break
    let titleBreakEl = document.createElement("br");
    resultEl.appendChild(titleBreakEl)
    //url element 
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultEl.appendChild(urlEl);
    //line break
    let lineBreakEl = document.createElement("br");
    resultEl.appendChild(lineBreakEl);
    //description
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("line-description");
    descriptionEl.textContent = description;
    resultEl.appendChild(descriptionEl);

}

function displayResults(search_results) {
    spinnerEl.classList.toggle("d-none");
    for (let result of search_results) { // to display all search results
        CreateAndAppendChild(result);
    }
}


// addEventListener to access the input 
function searchWikipedia(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = ""; // to empty the 
        spinnerEl.classList.toggle("d-none");
        let searchInput = searchInputEl.value;
        //after getting search input value now we put a http request
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            })

    }
}


searchInputEl.addEventListener("keydown", searchWikipedia);