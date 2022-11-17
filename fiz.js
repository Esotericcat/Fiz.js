let answer = parseInt(prompt('enter a number to play FIzBUzz'))
for (let i = 1; i <= answer; i++) {
   
  
    if (i % 5 ===0 && i % 3 === 0){
        console.log('Fizz Buzz') }
     else if   (i % 5 === 0) {
        
         console.log('Buzz') }

       else if  (i % 3 === 0) {
        console.log('Fizz')
       } else {
        console.log(i)
       }
}
        


    