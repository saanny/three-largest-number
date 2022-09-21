export function threeLargestNumber(arrayMain: Array<number>): Array<number> {
    const sortedArray = arrayMain.sort((a, b) => a - b);
    const sortedArrayLength = arrayMain.length
    const resultArray = [];
    for (let index = sortedArrayLength - 1; sortedArrayLength - 4 < index; index--) {
        resultArray.unshift(sortedArray[index])
    }
    return resultArray;
}
export function threeLargestNumber2(arrayMain: Array<number>): Array<number | null> {

    const largestNumbers: any = [null, null, null];

    for (const number of arrayMain) {
        if (largestNumbers[2] === null || number > largestNumbers[2]) {
            comparison(largestNumbers, number, 2)
        } else if (largestNumbers[1] === null || number > largestNumbers[1]) {
            comparison(largestNumbers, number, 1)
        } else if (largestNumbers[0] === null || number > largestNumbers[0]) {
            comparison(largestNumbers, number, 0)
        }
    }

    return largestNumbers;

}

function comparison(targetArray: any, number: number, targetIndex: number) {
    for (let index = 0; index <= targetIndex; index++) {
        if (index === targetIndex) {
            targetArray[targetIndex] = number;
        } else {
            targetArray[index] = targetArray[index + 1]
        }
    }
}