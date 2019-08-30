// Method 1
function generate() {
    let num = Math.random();
    console.log(num);
}
generate()  

// The Math.random() function returns a floating-point, pseudo-random number 
// in the range 0–1 (inclusive of 0, but not 1) with approximately uniform 
// distribution over that range, which you can then scale to your desired range

// Method 1.1 | Math.floor --- parseInt  --- round | Generate Integers Random Numbers
function generate() {
    let num = Math.floor(Math.random()*100);
    // let num = parseInt(Math.random()*100);
     // let num = Math.round(Math.random()*100);
    console.log(num);
}
generate() 

// The Math.floor() function returns the largest integer less than or equal to a given number.

// Method 2 - Generate random numbers in a range (min - max)
function generateRandom(min, max) {
    return Math.random() * (max - min) + min;
}
console.log (generateRandom(4, 7));

// Method 2.1 --- Max and Min range inclusive
function generateRandom(min, max) {
    return Math.random() * (1 + max - min) + min;
}
console.log (generateRandom(4, 7));

// Method 2.2 --- Using Ceil and Floor
function generateRandom(min, max) {
    min  = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (1 + max - min) + min);
}
console.log (generateRandom(4, 7));

// The Math.ceil() function always rounds a number up to the next largest whole number or integer.

// Method 3 --- How to populate an Array with random numbers
var array = [];
user_in = prompt(parseInt("Enter your number: "));

while (array.length < user_in) {
    array.push(Math.floor(1000*Math.random()));
    console.log(array);
}

