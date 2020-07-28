const fib = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1

  return fib(n - 1) + fib(n - 2)
}
console.log(fib(15))

const factorial = function(n) 
{        if(n == 0) {return 1} 
         else {return n * factorial(n - 1);}        }
 
console.log(factorial(9))


const isPrime = num => {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2; 
} 

console.log(isPrime(5)) 
console.log(isPrime(4)) 
