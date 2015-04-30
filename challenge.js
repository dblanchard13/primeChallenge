// Objective:
// Write a program that prints out a multiplication table of the first 10 prime numbers.

// The program can be run from the command line by navigating to the the root directory and running the following: 
  // npm start

// The tests can be run from the command line by navigating to the the root directory and running the following:
  // npm test
  
// Since my solution is in JavaScript, the table is printed out as a series of console.logs


var primeGetter = function(n){
  // n is the number of primes to get
    // If no n is passed into the function, it defaults to 10
  n = n || 10;
  var primes = [];
  // Initialize x as the first prime number, 2
  var x = 2;

  // Keep looping until the primes array has n primes
  while(primes.length < n){
    // If the current value of x is prime, push to the array
    if(primeChecker(x)){
      primes.push(x);
    }
    x++;
  }
  return primes;
};

var primeChecker = function(num){
  var root = Math.sqrt(Math.abs(num));
  // Staring with 2, modulo every number up to the square root of num
    // You only need to check up to the square root because any potential factor above the square root will have a corresponding factor below the square root
      // For example, suppose the number I'm checking is 64. The square root of 64 is 8. 
      // While 64 % 32 === 0, I don't need to check up to 32 to find that out, I only need to check up to 2.
      // This simple optimization over checking every number less than num reduced run time from 1432 ms to 923 ms for finding the first 5000 primes.
  for(var i=2; i<=root; i++){
    if(num%i === 0){
      return false;
    }
  }
  return true;
};

var tablePrinter = function(n){
  // Get n primes, defaults to 10 primes if no n is specified
  var primes = primeGetter(n);

  // Use a matrix to format primes. Each array in the matrix corresponds to a row in the table
  // Initialize the first row with an x to fill the top left corner of the table
  var primeMatrix = [['x']];

  // Fill out the rest of the first row with the primes
  primes.forEach(function(prime){
    primeMatrix[0].push(prime);
  })

  primes.forEach(function(prime, index){
    // Initialize each new row with the prime, giving the effect of having the first column being occupied by all the primes
    var row = [prime];
    // Iterate over each value in the first row, excluding the formatting value of 'x'
    for(var i=1; i<primes.length; i++){
      // Multiply that value with the corresponding prime value for that column. Push the value into the current row array
      row.push(prime * primeMatrix[0][i]);
    }
    // Push the completed row into the matrix 
    primeMatrix.push(row);
  })

  // Print each row in the matrix to the console
  primeMatrix.forEach(function(row){
    console.log(row);
  })
};

// Invoke tablePrinter so that it prints a table to the console
tablePrinter();

// Export functions for testing
module.exports = {
  tablePrinter: tablePrinter,
  primeChecker: primeChecker,
  primeGetter: primeGetter
};
