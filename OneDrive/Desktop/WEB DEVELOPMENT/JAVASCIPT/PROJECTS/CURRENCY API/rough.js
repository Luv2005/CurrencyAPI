// const fromCurrency = "USD";
// const toCurrency = "INR";
// const amount = 10;

// const URL = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

// async function convertCurrency() {
//     try {
//         let response = await fetch(URL);
//         let data = await response.json();
//         console.log(`${amount} ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}`);
//     } catch (error) {
//         console.error("Conversion failed:", error);
//     }
// }

// convertCurrency();