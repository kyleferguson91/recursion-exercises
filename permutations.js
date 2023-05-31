function mute(str) { 

let result = []

for (let char of str) {

    // for each char of the original string ('dogp') we are clling the below function 
    // with leftover equal to the other 3 leftover chars each time

    let first = str.slice(0,str.indexOf(char))
    let second = str.slice(str.indexOf(char)+1)
    let leftover = first + second
   
    // we wanna call the function with each char in leftover.. 
    mutehelp(char, leftover)

}


// this function is where we call progressively bigger strings and smaller leftover pools
// of each possible combo, which would go on forever except the fact that we eventually have a leftover
// equal to one character, at this point we can finalize that specific string and append to results array
// 
function mutehelp(str, leftover) {

if (leftover.length == 1) {
// only when we have a combo that leads to a full string (one letter left to add)

// then we push it to results!
   let final = str+leftover
result.push(final)
}


// we make more calls in the loop, we create the leftover characters from each leftover
// that are the result of each specific call..
else {
    for (let i = 0; i< leftover.length; i++) {
          

        // need to call function again with str and each of leftover, but each time reduce leftovers length  
        
               // remove element from leftover.. 
             
     

         // make a new leftover string..
         let first = leftover.slice(0,leftover.indexOf(leftover[i]))
         let second = leftover.slice(leftover.indexOf(leftover[i])+1)
         let whatsleft = first + second
      
                
                let newstr = str+leftover[i]
               // console.log(newstr, whatsleft, 'newstrwhatsleft')


// this continually calls larger strings and shorter whats left until whats left is only one letter
// added on to each string combination, at this point the above clause comes  into effect which returns
// each combo of string plus its specific one letter from the execution stack

                mutehelp(newstr,whatsleft)
        
            }
        
}

    }




return result
}






















console.log(mute('dogp'))