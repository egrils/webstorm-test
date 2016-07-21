function getOddNumbers(numbers) {
    return numbers.filter(number => number % 2 === 1);
}

function buildSquareNumbers(oddNumbers) {
    return oddNumbers.map(oddNumber => Math.pow(oddNumber,2));
}

function buildQuadraticSum(squareNumbers) {
    return squareNumbers.reduce((prev,curr) => prev + curr);
}

function printQuadraticSum(numbers) {
/*    const oddNumbers = getOddNumbers(numbers);
    const squareNumbers = buildSquareNumbers(oddNumbers);
    const quadraticSum = buildQuadraticSum(squareNumbers);

    console.log(quadraticSum);*/
    console.log(numbers.filter(number => number % 2 === 1)
        .map(oddNumber => Math.pow(oddNumber,2))
        .reduce((prev,curr) => prev + curr));
}


module.exports = {getOddNumbers,buildSquareNumbers,buildQuadraticSum,printQuadraticSum};