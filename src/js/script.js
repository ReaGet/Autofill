chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const keywords = JSON.parse(request.keywords);
  keywords.map(addKeyword);
});

const url = "https://ui.ads.microsoft.com/ODataApi/Campaign/V2/Customers(252424537)/Accounts(151168915)/Default.BusinessCategoryRecommendations";
const headers = {

}

function addKeyword(keyword) {
  const button = document.querySelector(".keyword-manual-input");

  button.click();
  setTimeout(() => {
    // const input = document.querySelector(".ms-TextField-field");
    // input.focus();
    // setTimeout(() => {
    //   input.value = keyword;
    //   setTimeout(() => {
    //     const configButton = document.querySelector(".keyword-manual-input-confirm-button");
    //     configButton.click();
    //   }, 500);
    // }, 300);
    fetch(url, {
      "method": "POST",
      "headers": headers,
      "body": JSON.stringify({
        "Category": keyword,
        "Language": "English",
        "Criterions": [{
            "@odata.type": "#Model.LocationCriterion",
            "LocationId": 190,
            "CountryCode": "US",
            "GeoPoint": {
                "Longitude": -99.0183,
                "Latitude": 39.5036
            },
            "LocationStatus": "Active",
            "LocationType": "Country"
        }]
      }),
    })
  }, 500);
}