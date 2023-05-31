function factorial(n) {

if (n == 1) {
    return 1
}


else {
    return     (n * factorial(n-1))
   
}









}
let arr = BigInt(factorial(99)).toString().split('')
console.log(arr.reduce((prev,curr) => {
    return +prev + +curr
}))