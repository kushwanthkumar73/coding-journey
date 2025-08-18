let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
let resultsHeadingEl = document.getElementById("resultsHeading");

function createAndAppendChild(book) {
    let {
        imageLink,
        author
    } = book;

    let col = document.createElement("div");
    col.classList.add("col-6", "col-md-4", "col-lg-3");

    let card = document.createElement("div");
    card.classList.add("result-card");

    let img = document.createElement("img");
    img.src = imageLink;
    img.classList.add("w-100"); // optional styling

    let authorP = document.createElement("p");
    authorP.textContent = author;

    card.appendChild(img);
    card.appendChild(authorP);
    col.appendChild(card);
    searchResultsEl.appendChild(col);
}

function displaySearchResults(searchResults) {
    searchResultsEl.textContent = ""; // Clear old results

    for (let book of searchResults) {
        createAndAppendChild(book);
    }
}

function getBooks(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        let searchInput = searchInputEl.value.trim();

        if (searchInput === "") {
            searchResultsEl.textContent = "Please enter a title to search.";
            resultsHeadingEl.textContent = "";
            return;
        }

        spinnerEl.classList.remove("d-none"); // Show spinner

        let url = "https://apis.ccbp.in/book-store?title=" + searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;

                spinnerEl.classList.add("d-none"); // Hide spinner

                if (search_results.length === 0) {
                    searchResultsEl.textContent = "No results found";
                    resultsHeadingEl.textContent = "";
                } else {
                    displaySearchResults(search_results);
                    resultsHeadingEl.textContent = "Search Results";
                }
            })
            .catch(function(error) {
                spinnerEl.classList.add("d-none");
                searchResultsEl.textContent = "Something went wrong. Please try again.";
                console.error("Fetch error:", error);
            });
    }
}

searchInputEl.addEventListener("keydown", getBooks);