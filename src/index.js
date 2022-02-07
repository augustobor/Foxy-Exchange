

const currencies = [
    {
        id: 'BTC',
        price: 62000
    },
    { 
        id: 'SOL',
        price: 200,
    },
    {  
        id: 'ETH',
        price: 4000,
    },
    { 
        id: 'ADA',
        price: 2,
    }
]



function showPrice() {

    const currencyAmountID = document.getElementById("amount")
    const currencyAmountValue = currencyAmountID.value
    
    const currencyListInputID = document.getElementById("currencies--input")
    const currencyListInputValue = currencyListInputID.value;


    const currencyListOutputID = document.getElementById("currencies--output")
    const currencyListOutputValue = currencyListOutputID.value;


    const currencyResultID = document.getElementById("result")


    const indexCurrencyInput = currencies.findIndex(item => item.id == currencyListInputValue)
    const indexCurrencyOutput = currencies.findIndex(item => item.id == currencyListOutputValue)


    const currencyPriceInput = currencies[indexCurrencyInput].price
    const currencyPriceOutput = currencies[indexCurrencyOutput].price

    currencyResultID.innerHTML= ((currencyAmountValue*currencyPriceInput)/currencyPriceOutput).toFixed(2)
}

function exchangeCryptos() {
    
    const result = document.getElementById("result")
    const currencyMessageID = document.getElementById("message")

    console.log(result)
    if (result.innerHTML != 0) {
        currencyMessageID.innerHTML ="🎉 Exchange completed!"
    }else {
        currencyMessageID.innerHTML ="We had a problem :C"
    }
}
