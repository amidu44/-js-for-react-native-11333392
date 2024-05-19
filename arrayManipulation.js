function processArray(arr) {
    
    let result = [];

    
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] % 2 === 0) {
           
            result.push(arr[i] * arr[i]);
        } else {
            
            result.push(arr[i] * 3);
        }
    }

    
    return result;
}


const inputArray = [5,6,7,8,9];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [7, 8, 13, 20, 19]

function formatArrayStrings(arrayOfStrings, arrayOfNumbers) {
    if (arrayOfStrings.length !== arrayOfNumbers.length) {
        throw new Error("Arrays must be of equal length");
    }

    for (let i = 0; i < strings.length; i++) {
        if (arrayOfNumber[i] % 2 === 0) {
            arrayOfstrings[i] = arrayOfStrings[i].toUpperCase();
        } else {
            arrayOfStrings[i] = arrayOfStrings[i].toLowerCase();
        }
    }

    return arrayOfStrings;
}