

function exchangeCryptos() {
    
    const result = document.getElementById("result")
    const currencyMessageID = document.getElementById("message")
    const amount = document.getElementById("amount")

    if ( amount.value < 0) {
        currencyMessageID.innerHTML = "Please enter a valid amount"
    } 
    else {

        if ( amount.value < amount.min ) {
            currencyMessageID.innerHTML = "Please enter a number greater than " + (amount.min - 1)
        } else {

            if (result.innerHTML != 0) {
                currencyMessageID.innerHTML ="🎉 Exchange completed!"
            }else {
                currencyMessageID.innerHTML ="We had a problem :C"
            }

        }
    }

    amount.value = ""
    result.value = 0
}
