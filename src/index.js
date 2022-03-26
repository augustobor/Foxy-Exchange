

function exchangeCryptos() {
    
    const currencyMessageID = document.getElementById("message")
    const amount = document.getElementById("amount")


    if ( amount.value > 0 ) {
        currencyMessageID.innerHTML ="🎉 Exchange completed!"
    } else {
        console.log(amount.value)
        currencyMessageID.innerHTML = "Please enter a valid number 😶"
    }


    // amount.value = ""
    // result.value = 0
}
