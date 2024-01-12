chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "updateContextMenu") {
      // Call the method in popup.js
      chrome.extension.getViews({ type: "popup" })[0].updateContextMenu(request.text);
    }
  });
  