(()=>{"use strict";const e=document.querySelector(".button"),t=document.querySelector(".textarea");e.addEventListener("click",(function(){const e=t.value.split(",").map((e=>e.trim()));chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{keywords:JSON.stringify(e)},(function(e){console.log(e)}))}))}))})();