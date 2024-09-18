async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value.toLowerCase();
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || amount <= 0) {
        document.getElementById('result').innerHTML = 'Please enter a valid amount.';
        return;
    }
        const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.result === "error") {
            document.getElementById('result').innerHTML = 'Error fetching exchange rate data.';
            return;
        }
        console.log(fromCurrency);
        const exchangeRate = data[fromCurrency][toCurrency];
        console.log(exchangeRate);
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        document.getElementById('result').innerHTML = 
            `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error fetching data. Please try again.';
    }
}