function peak(arr, large = 0) {

// if array length is 0, return large
if (arr.length == 0) {
return large
}
else {
    if (arr[0] > large) {
        large = arr[0]
    }
    // else we are not through array, return the RESULT OF THE CALL
    // OF THE ARRAY BEING SHORTER
    // PASS LARGE SO WE KNOW EACH TIME
   return peak(arr.slice(1), large)
    
    
}





}





console.log(peak([8, 9, 10, 2, 5, 6]))