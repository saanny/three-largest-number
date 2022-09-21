import { threeLargestNumber, threeLargestNumber2 } from './threeLargestNumber';

describe('ThreeLargestNumber', () => {

    test("it should return [18,141,541],[20, 141, 541]", () => {

        expect(threeLargestNumber([141, 1, 17, -7, -17, -24, 18, 541, 8, 7, 7])).toEqual([18, 141, 541])
        expect(threeLargestNumber([141, 1, -17, 18, 541, 8, 7, 7, -2])).toEqual([18, 141, 541])
        expect(threeLargestNumber([141, 1, -17, 18, 541, 8, 7, 7, -2, -5, -44, 20])).toEqual([20, 141, 541])

        expect(threeLargestNumber2([141, 1, 17, -7, -17, -24, 18, 541, 8, 7, 7])).toEqual([18, 141, 541])
        expect(threeLargestNumber2([141, 1, -17, 18, 541, 8, 7, 7, -2])).toEqual([18, 141, 541])
        expect(threeLargestNumber2([141, 1, -17, 18, 541, 8, 7, 7, -2, -5, -44, 20])).toEqual([20, 141, 541])

    });

});