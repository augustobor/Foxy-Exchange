new Vue({
    el: '#app',
    
    data () {
        
      return {

        amount: 0,
        symbolInput: 'BTC',
        symbolOutput: 'ETH',
        currencies: [

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



      }
    },
    
    computed: {

        result() {
            
            let indexInput = this.currencies.findIndex(item => item.id == this.symbolInput)
            let indexOutput = this.currencies.findIndex(item => item.id == this.symbolOutput)
      
            return this.amount != undefined ? this.amount*(this.currencies[indexInput].price/this.currencies[indexOutput].price) : 0

        }

    }
    
    
  })