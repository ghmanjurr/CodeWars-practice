//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(array) {
    // first: let's count occurences of all the elements in the array
    const hash = {};                 // object to serve as counter for all the items in the array (the items will be the keys, the counts will be the values)
    array.forEach(function(e) {    // for each item e in the array
      if(hash[e]) hash[e]++;       // if we already encountered this item, then increments the counter
      else hash[e] = 1;            // otherwise start a new counter (initialized with 1)
    });
    
    // second: we select only the numbers that occured an odd number of times
    const result = [];               // the result array
    for(const e in hash) {           // for each key e in the hash (the key are the items of the array)
      if(hash[e] % 2)              // if the count of that item is an odd number
        result.push(+e);           // then push the item into the result array (since they are keys are strings we have to cast them into numbers using unary +)
    }
    return result;
  }
  console.log(findOdd([1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 5, 5]));