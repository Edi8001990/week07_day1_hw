const PubSub = require('../helpers/pub_sub.js')
const ResultView = function() {

}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeChecker:result-calculated', (event) =>{
    const numbers = event.detail;
    this.displayResult(numbers);
  });
}



ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `You entered ${result} number.`;
}




module.exports = ResultView;
