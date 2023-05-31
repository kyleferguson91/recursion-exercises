function mute(str, leftover = []) { 
    let result = []
        if (leftover.length == 1) {
            result.push(str+leftover[0])
        }
 
    
    for (let char of str) {

        // for each char of the original string ('dogp') we are clling the below function 
        // with leftover equal to the other 3 leftover chars each time
    
        let first = str.slice(0,str.indexOf(char))
        let second = str.slice(str.indexOf(char)+1)
        let leftover = first + second
        console.log(char+leftover[0], leftover)
        // we wanna call the function with each char in leftover.. 
        for (let i = 0; i<leftover.length; i++) {


            mute(leftover)

        }
    
    }
    
    

    
    return result
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    console.log(mute('dogp'))