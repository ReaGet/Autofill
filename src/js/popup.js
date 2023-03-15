import "../scss/index.scss";

const button = document.querySelector(".button"),
    textarea = document.querySelector(".textarea");

button.addEventListener("click", sendRequest);

function sendRequest() {
    const keywords = textarea.value.split(",").map((keywords) => keywords.trim());

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            keywords: JSON.stringify(keywords)
        }, function(response) {
            console.log(response);
        });
    });
}