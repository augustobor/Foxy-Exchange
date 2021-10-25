

const currencies = ['BTC', 'SOL', 'ETH', 'ADA']

currencies[0] = 62000
currencies[1] = 200
currencies[2] = 4000
currencies[3] = 2


function showPrice() {

    const currencyAmountID = document.getElementById("amount")
    const currencyAmountValue = currencyAmountID.value
    
    const currencyListID = document.getElementById("currencies--output")
    const currencyListValue = currencyListID.value;

    console.log(currencyListValue)
    const currencyResultID = document.getElementById("result")

    const currencyPrice = currencies[currencies.findIndex(item => item = currencyListValue)]
    console.log(currencyPrice)

    currencyResultID.innerHTML= currencyAmountValue/currencyPrice   
}

function exchangeCryptos() {
    
    const result = document.getElementById("result")
    const resultValue = result.value
    const currencyMessageID = document.getElementById("message")

    console.log(resultValue)
    if (resultValue) {
     
        currencyMessageID.innerHTML ="🎉 Exchange completed!"
    }else {
        currencyMessageID.innerHTML ="We had a problem :C"
    }
}
