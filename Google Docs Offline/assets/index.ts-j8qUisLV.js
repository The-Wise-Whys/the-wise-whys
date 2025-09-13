chrome.runtime.onInstalled.addListener(async e=>{e.reason==="install"&&(await chrome.storage.local.clear(),chrome.tabs.create({active:!0,url:chrome.runtime.getURL("src/setup/index.html?type=install")})),e.reason==="update"&&chrome.tabs.create({active:!0,url:chrome.runtime.getURL("src/setup/index.html?type=update")})});chrome.tabs.onUpdated.addListener((e,c,o)=>{const r=o.url;r&&chrome.storage.local.get(["blockedSites","redirectUrl"],t=>{const s=t.blockedSites||[],l=t.redirectUrl||"https://google.com";s.some(n=>r.includes(n))&&chrome.tabs.update(e,{url:l})})});self.onerror=function(e,c,o,r,t){console.info(`Error: ${e}
Source: ${c}
Line: ${o}
Column: ${r}
Error object: ${t}`)};
