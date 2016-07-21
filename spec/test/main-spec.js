const main = require('../../main/main.js');

describe('quadratic-sum',() => {

    let numbers;

beforeEach(() => {
    numbers = [1,2,3,4,5,6,7,8];
});

it('should get oddNumbers',() => {
    const oddNumbers = main.getOddNumbers([1,2,3,4,5,6,7,8]);

const expectArray = [1,3,5,7];

expect(oddNumbers).toEqual(expectArray);
});

it('should build squareNumbers',() =>　{
    const squareNumbers = main.buildSquareNumbers([1,3,5,7]);

const expectArray = [1,9,25,49];

expect(squareNumbers).toEqual(expectArray);
});

it('should build quadraticSum',() => {
    const quadraticSum = main.buildQuadraticSum([1,9,25,49]);

const expectNumber = 84;

expect(quadraticSum).toEqual(expectNumber);
});

it('should print quadraticSum',() => {

    spyOn(console, 'log');
main.printQuadraticSum([1,2,3,4,5,6,7,8]);

const expectNumber = 84;

expect(console.log).toHaveBeenCalledWith(expectNumber);
});

});