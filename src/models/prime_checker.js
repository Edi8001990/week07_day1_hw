const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function(){

}

PrimeChecker.prototype.bindEvents = function(){

  PubSub.subscribe('FormView:number-submitted' ,(event) =>{
    const inputtedNumber = this.numberIsPrime(event.detail);
    PubSub.publish('PrimeChecker:result-calculated', inputtedNumber)
    //console.log('payload received in PrimeChecker:', inputtedNumber);
  });
};



PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};


module.exports = PrimeChecker;
