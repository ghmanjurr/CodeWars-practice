// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, 
// function accept 1 parameters:n, 
// n is the number of customers to buy hotdogs, 
// different numbers have different prices (refer to the following table), 
// return a number that the customer need to pay how much money.

// +---------------+-------------+
// |  numbers n    | price(cents)|
// +---------------+-------------+
// |n<5            |    100      |
// +---------------+-------------+
// |n>=5 and n<10  |     95      |
// +---------------+-------------+
// |n>=10          |     90      |
// +---------------+-------------+

function saleHotdogs(n){
    if (n<5) {
        return (n*100)
    } else if(n>=5 && n<10){
        return (n*95)
    } else {
        return (n*90)
    }
}

//
function saleHotdogs(n){
    return n*(n<5?100:n<10?95:90);
  }

//  
const saleHotdogs=n=>n*(n<5?100:n<10?95:90);

//
const saleHotdogs = (n) => {
    switch (true) {
      case n < 5: return n * 100;
      case n < 10: return n * 95;
      default: return n * 90;
    }
  }




