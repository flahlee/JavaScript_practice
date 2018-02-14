//1.  Write a function isEven() which takes a single numeric argument 
// and returns true if the number is even, and false otherwise
function isEvenn(num){
    if(num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// OR (shortcut)
function isEven(num) {
    return num % 2 === 0;
}

isEven(4); //true
isEven(21); //false
isEven(68); //true
isEven(333); //false



// 2. Write a function factorial() which takes a single numeric 
// argument and returns the factorial of that number- factorial (4) 4 x 3 x 2 x 1
function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    // return the result variable
    return result;
}

//OR (another solution)
function factorial(num) {
    if(num === 0) {
        return 1;
    }
    var result = num;
    for(var i = num-1; i >= 1; i--){
        return *= i;
    }
    return result;
}




// 3. Write a function kebabToSnake() which takes a single kebab-cased
//  string argument and returns the snake_cased version. Basically, replace "-"s with "_"s