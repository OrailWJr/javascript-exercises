const sumAll = function(num1, num2) {
    let sum = 0
    if (Number.isInteger(num1) && Number.isInteger(num2)){ 
        if (num1 >= 0 && num2 >= 0){
            let startingNumber = 0
        let endingNumber = 0 
    
        if (num1 <= num2) {
            startingNumber = num1
            endingNumber = num2
        }else {
            startingNumber = num2
            endingNumber = num1
        };

        while (startingNumber <= endingNumber){
            sum = sum + startingNumber
            startingNumber++
        };
        return sum
        }    
        else {
            return "ERROR"
        }
    
       
    } else {
        return "ERROR"
    }
}

;

// Do not edit below this line
module.exports = sumAll;
