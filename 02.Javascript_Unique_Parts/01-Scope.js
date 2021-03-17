let globalScope = "IamGlobalScope";
console.log(globalScope)

// In JavaScript, var is one keyword used to declare variables. These
// variable declarations “float” all the way to the top. This is known as
// variable hoisting. Variables declared at the bottom of the script will not
// be the last thing executed in a JavaScript program during runtime

function scope1(params) {
    var top = "StillGlobal"
    let bottom = "IamLocalVariable"

    console.log(bottom);    
}
scope1()

// Another Example
var a = 1
function two(){
    if(true){
        var a = 4
    }
    console.log(a) //Prints 4
}
two();
// 4 was printed, not the global value of 1, because it was redeclared
// and available in that scope.

// Decleration with let : Block Scope
function scope3(print) {
    if (print) {
        let insider = '12'
    }
    console.log(insider); //Error
}
scope3(true) // Error because let keyword scope is limited within above if statement only.
// In this example, nothing is logged to the console because the
// insideIf variable is available only inside the if statement block
