// Question 6:
// Write a JavaScript function that takes a year as input and checks if it is a leap year. Return true if it is a leap year, and false otherwise. (A leap year is divisible by 4 but not by 100, unless it is also divisible by 400.)
// Input: A year, e.g., 2024.


function leapYear(year){
    if(year%100 == 0){
        if(year%400 == 0) {
            console.log("true");
        }

        else{
            console.log("false");
        }
    }
    else{
        if(year%4 == 0){
            console.log("true")
        }
        else{
            console.log("false")
        }
       
    }
}

leapYear(2024)