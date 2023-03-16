chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const keywords = JSON.parse(request.keywords);
  keywords.map(addKeyword);
});

function addKeyword(keyword) {
  clickAddNewButton();
  setInputValue(keyword);
  clickConfirm();

  setTimeout(() => {

    setTimeout(() => {
    }, 300);
  }, 500);
}

function setInputValue(keyword) {
  const input = document.querySelector(".ms-TextField-field");
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
  nativeInputValueSetter.call(input, keyword);

  const event = new Event("input", { bubbles: true });
  event.simulated = true;
  input.dispatchEvent(event);
}

function clickConfirm() {
  const confirm = document.querySelector(".keyword-manual-input-confirm-button");
  confirm.click();
}

function clickAddNewButton() {
  const confirm = document.querySelector(".keyword-manual-input");
  confirm.click();

}