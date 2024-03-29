//Given 'n', take the sum of the digts of 'n'. If that value has more than
//one digit, continue reducing in this way until a single-digit number
//is produced. The input will be a non-negative integer.
//ex. 16 --> 1 + 6 = 7
// 942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6

function digital_root(n) {
    const arr = Array.from(n.toString()).map(Number)
    console.log(arr)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const sum  = arr.reduce(reducer)
    console.log(sum)

    if (sum > 9) {
        return digital_root(sum)
    }
    return sum    
}

// Best practices code

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

