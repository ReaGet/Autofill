chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const keywords = JSON.parse(request.keywords);
  keywords.map(addKeyword);
});

const url1 = "https://ui.ads.microsoft.com/ODataApi/Campaign/V2/Customers(252424537)/Accounts(151168915)/Default.BusinessCategoryRecommendations";
const url2 = "https://ui.ads.microsoft.com/ODataApi/Mca/V1/Customers(252424537)/Accounts(151168915)/Default.GetMcaProductServiceRecommendations";
const headers = {
  "authorization": "CCMTSmallToken UaxesE2ZDh0SN1PjLn6GOjbXKEwEmXUEPjVThSAw7Mn2OBAyCcu9JJn7zWHUeH7fnWgSdU5RSaM8K60B2VUjg89MsBjYE0UgLAgOCftChQm39S8XKNMRpnD9usE9sBMh/WUzKZonTg+sYOrSpFmPyOpip0OtmOGJ8pL5zoENnuFDrB0YL4nBFTM/+r7XxPgzi+W+FoqibXv4Lsvy7Jij2h63iwb4HAA7ESfm+58S3XeTSm9XQPwOM0cZmx+5lzXXUlNOYJFlcGNNyU8Zn/Z6sr8lm1Pdn93iznJ6g3SjqoRXqaiAXD0IUl+hmC2LfU0YRAFDk9hSpfZrlOm/CgeWvcCnFi2mf/3whj43l46DE5tZnRcxCH414Dsklv0Mr4PtG2SYiHcLjYDylsVqF0qBO0v8gvu6Orv47/njin5R3zRiw1k7i7e5oR03IWD5hSyuMtP8MIDb7UWIj6+TR16PeOEi9NvjyQCfOZglyF4CziLUBRe5LEB9GNVT/OQrrXBcTQcHc+3KaABpmG9yzJpQ5klv6NdReb+Lv1+8ftFCEImhF7vZaw+Odh+Bzl8MRs2GXdOXGtFHgIBnbow4zvK4PSRQ6Oi9eKf+UsceV4xQNrcUPQUkYcxWDNC+MVQPuKv6HqeKQvIO6EPHwFbfgjRdOevQPuyK9RqWDpqGR7hRPDK37KF+iMW7qHdGMuj+K2d9qNTcU1fcwOVC3YA6I88BiRR1AxbL/L6Q9L4hgrlYpBXkDD5wOgDz2lPWOD3acZvBzBlgfDbzuzoOP03LozsJ6sixMBRu5fGYdhu8Ja+KqK9PBIlT081Oz3e51Hvh4ijJM94IqPyl5a8Fcb9dZvIFdBdzJrSqQrXFm0NWQifZlSHpeoHx6evv6RHRG7+WHx5YUb5lad6SmLNhml2qSu1wZA0oan+QJ5jafRujD5EahhKilwKSd+uXTgXjun7p4Ms1ccssE1WH1ERQZg1mcWc2nlYvBA6faRMdX3bYvCra+wdnMn9Sp1O6fki8ywGsEZaQP3jMX20AAZmy279KA/AER+tMZBFRsfdDohcMwBzrKKczphbLIIQPfwdzFLuxlNJzWzDWWtj896IZBYyRunAHWC6HyIp9LgXsICYNLn01KnzDcwmOpbXczzcoipinuJGTYqcNfwg4/MTAK78HuRTZNibglUqzlbUKvXWBwX035pT2hg8nrop/Bhn71bQniXQrpb/dE/FSgPkJLEk5e77SIBzsNje8UPh8oT3WqelhevlIXj5kLc4dL6xCW6eoHhNOa5GDQOEIJsGBj26pG240LY0=",
  "cache-control": "no-cache",
  "content-length": 238,
  "lcid": 1033,
  "content-type": "application/json",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  "x-ms-applicationname": "bingadsweb",
  "x-ms-lastwritetime": "Max",
  "x-ms-lcid": 1033,
  "x-ms-pagetrackingid": "07ca8cb6-d793-4872-80f6-8bf1055eb4e5",
  "x-ms-requestid": "aab80e4a-b4b1-4f4e-a9de-a8e78796c448",
};

const body1 = {
  "Category": "car",
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
};

const body2 = {
  "url": "https://www.dominos.com/index.intl.html",
  "goal": "IncreaseWebsiteVisit",
  "language": "English",
  "targets": [{
    "@odata.type": "#Model.LocationTarget",
    "Id": "14224931713667",
    "McaCampaignId": 14224931694388,
    "ClientId": "3f40c03c-0343-4f1f-ac8f-2f2793c91f32",
    "Status": "Active",
    "EntitySourceType": null,
    "ScCampaignCriterionId": null,
    "ScMigrationDateTime": null,
    "Name": "United States",
    "Latitude": 39.5036,
    "Longitude": -99.0183,
    "BingLocationId": 190,
    "CountryCode": "US",
    "City": null,
    "State": null,
    "LocationType": "Country",
    "NotSupportedChannels": [],
    "EnclosedLocationIds": [],
    "EditorialInfos": []
  }],
  "servingChannels": ["MicrosoftAdvertising"],
  "keywords": [{
    "KeywordText": "domino s pizza menu",
    "IsSelected": true,
    "IsSuggested": true,
    "SourceId": "MPSoffline"
  }, {
    "KeywordText": "pizza near me that delivers",
    "IsSelected": true,
    "IsSuggested": true,
    "SourceId": "MPSoffline"
  }, {
    "KeywordText": "dominos com coupon",
    "IsSelected": true,
    "IsSuggested": true,
    "SourceId": "autokeyword:5.0"
  }, {
    "KeywordText": "order pizza",
    "IsSelected": true,
    "IsSuggested": true,
    "SourceId": "MPSoffline"
  }, {
    "KeywordText": "pizza online",
    "IsSelected": true,
    "IsSuggested": true,
    "SourceId": "MPSoffline"
  }, {
    "KeywordText": "car",
    "IsSelected": true,
    "IsSuggested": false,
    "SourceId": null
  }]
};

function addKeyword(keyword) {
  const button = document.querySelector(".keyword-manual-input");

  button.click();
  setTimeout(() => {
    const input = document.querySelector(".ms-TextField-field");
    input.focus();
    setTimeout(() => {
      input.value = keyword;
      makeFetch(url1, body1)
        .then(() => {
          makeFetch(url2, body2)
            .then(() => {
              const configButton = document.querySelector(".keyword-manual-input-confirm-button");
              configButton.click();
              document.querySelector(".ms-stack-inner").insertAdjacentHTML("beforeend", `
              <div class="ms-StackItem css-209"><div class="preSelectedItem-1-2-363"><span title="car" class="preSelectedText-1-2-364 pre-selected-text">car</span><button type="button" class="ms-Button ms-Button--icon selected-keyword-delete deleteIcon-1-2-368 root-217" title="Delete" aria-label="Delete keyword: car" data-is-focusable="true"><span class="ms-Button-flexContainer flexContainer-196" data-automationid="splitbuttonprimary"><i data-icon-name="Cancel" aria-hidden="true" class="ms-Icon root-105 css-157 ms-Button-icon icon-204" style="font-family: FabricMDL2Icons;"></i></span></button></div></div>
              `);
            });
        });
    }, 300);
  }, 500);
}

function makeFetch(url, body) {
  return fetch(url, {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(body),
  });
}

function getToken() {
  const script = document.querySelector("#server-context").innerText;
  const token = script.match(/(?<="Token":)(.*?)(?=",)/);

  return token ? token[0].slice(1) : null;
}