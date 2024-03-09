chrome.tabs.onActivated.addListener(tab => {
  // Handle tab activation
  console.log("Tab activated:", tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Handle tab updates
  console.log("Tab updated:", tab);
});

