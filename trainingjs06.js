// Coding in function trueOrFalse, function accept 1 parameters:val, 
// try to use the conditional statement if...else, 
// if val value is false (val==false or it can convert to false), 
// should return a string "false", if not, return a string "true".

// function trueOrFalse(val){
//     if (val===false || ){
//         return "false"
//     } else {
//         return "true"
//     }
//   }

//best solution
function trueOrFalse(val){
    return Boolean(val).toString();
}


function trueOrFalse(val){
    return val ? true : false;             
}

