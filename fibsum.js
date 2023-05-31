function fibsum(n) {


function fibhelper(n) {

if (n == 1) {
    return [0,1]
}

else {

    let arr = fibhelper(n-1)

    // arr eventually equals [0,1] due to base case
    // then we return that spread out and add next value which is sum of last 2 values
    // and do that all the way up the line..
    return [...arr, arr[n-1]+arr[n-2]]
}




}

// now we want a way to sum the even terms.. can use a filter algorighm and a reduce

return fibhelper(n).filter((elem) => {
    // return only even elements, will only return elements that pass this test 
    // it does also add 0, which does nto matter for a sum.. but would matter for a product and 
    // would require adjustment to the code.
    return elem % 2 == 0
}).reduce((prev,current) => {
    return prev+current
}, 0)











}

console.log(fibsum(40))