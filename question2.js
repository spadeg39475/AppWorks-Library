// Question 2: Counting Sevens
// Let g(N) be the count of numbers that contain a 7 when you 
// write out all the numbers from 1 to N.

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