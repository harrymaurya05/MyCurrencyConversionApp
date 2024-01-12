let selectedText;

document.addEventListener("mouseup", function () {
    console.log("mouseup action!!")
  selectedText = window.getSelection().toString().trim();
  try {
    chrome.runtime.sendMessage({ action: "updateContextMenu", text: selectedText }, function(response) {
      // Handle response if needed
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("updateContextMenu action!!")

  if (request.action === "updateContextMenu") {
    sendResponse({ text: selectedText });
  }
});
