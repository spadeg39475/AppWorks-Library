
// Question 2: Counting Sevens
// Let g(N) be the count of numbers that contain a 7 when you 
// write out all the numbers from 1 to N.

// 1. What is g(1000)? Ans: 271
g(1000) //271
// 2. Write a computer program to compute g(N) and the test cases to evaluate the program.
function g(n) {
    let count = 0;
    let t;
    for(let i=1; i<=n; i++){
      t = i;
      while(t>=1){
        if( Math.floor(t%10) === 7){
          count++;
          break;
        }
        t = t/10;  
      }
    }
   return count;
}


//test cases
g(7)    // 1
g(20)   // 2
g(70)   // 8
g(75)   // 13
g(100)  // 19
g(200)  // 38
g(700)  // 134
g(710)  // 144