const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("search-input");
const searchError = document.getElementById("search-error");
const searchContainer = document.querySelector(".qr__search-container");
searchButton.addEventListener("click", handleSearch);
searchInput.addEventListener("input", clearErrors);
function handleSearch(event) {
    event.preventDefault();
    if (checkValidUrl(searchInput.value)) {
        window.location.href = (`qr2.html?url=${searchInput.value}`);
    }
    else {
        searchContainer.classList.add("error");
        searchError.style.display = "block";
    }
}

function checkValidUrl(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
}

function clearErrors() {
    if (searchContainer.classList.contains("error")) {
        searchContainer.classList.remove("error");
        searchError.style.display = "none";
    }
}

