
function updateContextMenu(selectedText) {
    console.log("updateContextMenu called!!")
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create({
        title: `Convert ${selectedText} to other currencies`,
        contexts: ["page"],
        onclick: function () {
            convertSelectedText(selectedText);
        }
    });
}

function convertSelectedText(selectedText) {
    console.log("selectedText : " + selectedText);
    // Your currency conversion logic here using the selectedText
    // Use the same logic as in the convertCurrency function from popup.js
    // You may need to modify it to handle the selectedText instead of user input
    // Display the result using chrome.notifications or any other method you prefer
}

// Add this code to popup.js to handle context menu updates
chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === "updateContextMenu") {
        updateContextMenu(request.text);
    }
});

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;
    const convertedAmount = amount * 83;
    // ... Your existing conversion logic

    // Display result using notifications
    const notificationContainer = document.getElementById("notification-container");
    notificationContainer.innerHTML = `<p>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</p>`;
    setTimeout(() => {
        notificationContainer.innerHTML = "";
    }, 3000); // Clear notification after 3 seconds
}



document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertCurrencyManual);
});

function convertCurrencyManual() {
    const usdAmount = document.getElementById('usdAmount').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(usdAmount) && usdAmount !== '') {
        const convertedAmount = usdAmount * 83; // Replace with the current exchange rate
        resultDiv.innerHTML = `Converted Amount: ${convertedAmount.toFixed(0)} INR`;
    } else {
        resultDiv.innerHTML = 'Please enter a valid USD amount.';
    }
}

