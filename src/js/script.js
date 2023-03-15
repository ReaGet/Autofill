chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const keywords = JSON.parse(request.keywords);
  keywords.map(addKeyword);
});

function addKeyword(keyword) {
  const button = document.querySelector(".keyword-manual-input");

  button.click();
  setTimeout(() => {
    const input = document.querySelector(".ms-TextField-field");
    input.value = keyword;
    setTimeout(() => {
      const configButton = document.querySelector(".keyword-manual-input-confirm-button");
      configButton.click();
    }, 500);
  }, 500);
}