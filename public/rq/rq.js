const quoteContainer = document.getElementById("quote-container");
const quote = quoteContainer.querySelector(".rq__quote");
const author = quoteContainer.querySelector(".rq__author");
const category = document.getElementById("quote-category");
const newButton = document.getElementById("new-button");
const copyButton = document.getElementById("copy-button");
const loadingIndicator = document.getElementById("loading-indicator");
const newButtonImage = document.getElementById("new-button-image");
newButton.addEventListener("click", handleNewButtonClick);

async function handleNewButtonClick() {
    showLoading(true);
    try {
        const data = await fetchQuote();
        author.textContent = data.author;
        quote.textContent = data.quote;
        category.textContent = data.category
    }
    catch (error) {
        console.log(error);
    }
    finally {
        showLoading(false);
    }
}

async function fetchQuote() {
    //Simulate loading
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
        const response = await fetch('/quotes/random', {
            method: "GET"
        });
        if (!response.ok) {
            throw new Error(`Error :${response.status}`);
        }

        const data = await response.json();
        return data[0];
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

function showLoading(isLoading) {
    loadingIndicator.style.display = isLoading ? 'block' : 'none';
    newButton.disabled = isLoading ? true : false;
    newButtonImage.style.display = isLoading ? 'none' : 'block';
}

