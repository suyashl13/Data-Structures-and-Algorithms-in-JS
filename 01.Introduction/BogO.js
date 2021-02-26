// Finding Big O notations

// Exercise 1
function someFunction(n) {
    for (var i=0;i<n*1000;i++) {
        for (var j=0;j<n*20;j++) {
            console.log(i+j);
        }
    }
}
// Answer  : O(n^2) There are two nested loops. Ignore the constants in front of n.

function someFunction2(n) {
    for (var i=0;i<n;i++) {
        for (var j=0;j<n;j++) {
            for (var k=0;k<n;k++) {
                for (var l=0;l<10;l++) {
                    console.log(i+j+k+l);
                }
            }
        }
    }
}
// Answer : O(n^3) There are four nested loops, but the last loop runs only until 10.

function someFunction3(n) {
    for (var i=0;i<1000;i++) {
        console.log("hi");
    }
}
// Answer : O(n) Linear complexity. The function runs from 0 to 10n. Constants are ignored in Big-O.


function someFunction4(n) {
    for (var i=0;i<n*10;i++) {
        console.log(n);
    }
}
// Answer : O(log2n) Logarithmic complexity. For a given n, this will operate only log2n times because i is incremented by multiplying by 2 rather than adding 1 as in the other examples
    