// Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
// Input: An array of numbers, e.g., [2, 4, 6, 8].
// Output: The average of the numbers, e.g., 5.


function average(arr){
    let sum = 0;
    for(let i= 0; i< arr.length; i++){
        sum = sum+ arr[i]
        
    }
    console.log(sum/arr.length)
}

average([2,4,6,8])