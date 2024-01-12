document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertCurrency);
  });
  
  function convertCurrency() {
    const usdAmount = document.getElementById('usdAmount').value;
    const resultDiv = document.getElementById('result');
  
    if (!isNaN(usdAmount) && usdAmount !== '') {
      const convertedAmount = usdAmount * 83; // Replace with the current exchange rate
      resultDiv.innerHTML = `Converted Amount: ${convertedAmount.toFixed(0)} INR`;
    } else {
      resultDiv.innerHTML = 'Please enter a valid USD amount.';
    }
  }
  

  /*

  function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value.toLowerCase();
    const toCurrency = document.getElementById('to').value.toLowerCase();
    
    // const fromCurrencyToCurrency = `amount-${amount}-from-${fromCurrency}-to-${toCurrency}`;
    // console.log(fromCurrencyToCurrency);
    // const url = `https://paytm.com/tools/currency-converter/${fromCurrencyToCurrency}`;
    
    // fetch('https://paytm.com/tools/currency-converter/amount-3-from-usd-to-inr', {
    //     headers: {
    //         'Host': 'paytm.com',
    //     }
    // }).then(
    //     response => {
    //     console.log('API Response:', response.text);
    // })
    // .catch(
    //     error => {
    //     // Handle errors
    //     console.error('Error:', error);
    // });
}

document.getElementById('convert').onclick = function() {
    convertCurrency();
};

console.log("Test!!");

*/