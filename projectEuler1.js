//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.


//create a function that has a number as its value
function sumOf(nums){
  //created a variable for both sum and i
  //Sum= 0 because nothing is added in the start
  var i = 1;
  var sum = 0;
  //for loop to keep iterating until it reaches NUMS established in the function
  for (var i = 1 ; i<=nums; i++){
    //if dividing the number by 3 or 5 gets 0 that means it is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0){
      //once we established our multiples are true, we add them as we iterate through the loop
      sum += i;
    }
  }
  //calls on sum to begin doing the math
  return sum;
}
//logs the math in sum but now we specificy the 1000
console.log(sumOf(1000))
