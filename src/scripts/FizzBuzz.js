export function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Fizz-Buzz"
    }
    
    if (number % 3 === 0) {
        return "Fizz"
    }
    if (number % 5 === 0) {
        return "Buzz"
    }
    if (number % 3 === 0) {
        return "Fizz-Buzz"
    }
    return number
    

}