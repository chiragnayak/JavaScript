console.log("Hello World !! This is first step to JS and giant leap of faith to destiny !")


printBanner("checking variable and types")
//String
var name = "chirag";
var sirName = "nayak";
console.log("Your Name is "+ name + " " + sirName);

// undefined
var someNumber;
console.log(someNumber);
//number
var num2 = 100;
console.log(num2);
//boolean
var bool1 = true;
console.log(bool1);
//null
var nullObj = null;
console.log(nullObj)

printBanner("checking functions");
            
/*
Function defination can be placed before or after the call
*/
console.log(addTwoNumber(10,20));

function addTwoNumber(num1, num2){
    return num1+num2;
}

console.log(addTwoNumber(40,20))

//general function (statement) to print message
function printBanner(someString){
    
    plus="+";
    for(i=0;i<someString.length;i++){
       plus=plus+"+" ;
    }
    
    console.log(plus)
    console.log(someString);
    console.log(plus);
}

function printInfo(someString){
    console.log("--> "+someString);
}

/*
Testing switch case, here token can be 
    - number
    - boolean
    - String
    - undefined
    - null
*/
printBanner("testing switch case");
testSwitchCase(10);
testSwitchCase("chirag");
testSwitchCase(true);
testSwitchCase();
testSwitchCase(nullObj);
testSwitchCase(null);

//function defination
//this is function statement
//generates an outcome
//observe function name 
function testSwitchCase(token){
    
    switch (token){
        case 10:
            console.log("You entered num 10");
            break;
        case 'chirag':
            console.log("You entered chirag");
            break;
        case true :
            console.log("you entered a boolean");
            break;
        case undefined:
            console.log("you entered undefined");
            break;
        case null:
            console.log("you entered null");
            break;
        default:
            console.log("You entered in default case");
    }
}

//function defination
//function expression
//observe no function name
printBanner("function expression")
var someFun = function(paramaters){
    console.log("i m function expression !")
}

printBanner("checking arrays")
/*
    arrays
*/

//same data types
var names = ['chirag', "Nayak", "thane", "maharashtra"];
var years = new Array(1990,1992,1992);

console.log(names);
console.log(years[0]+" "+years[1]+" "+years[2]);

//diff data types
var diffDataTypes = ["Chirag", 'nayak', 10, true];

console.log(diffDataTypes);

printBanner("Array Operations")

printInfo("slice() -> shallow copy")
var shallowCopy = names.slice();
console.log(shallowCopy);

printInfo("slice(fromIndex, toIndex) -> shallow copy from range")
shallowCopy = names.slice(1,3);
console.log(shallowCopy);

printInfo("slice(pos) -> shallow copy from position till end")
shallowCopy = names.slice(2);
console.log(shallowCopy);


printInfo("push() -> adds at last")
names.push("is a good boy");
console.log(names);

printInfo("pop() -> removes from last")
names.pop();
console.log(names);

printInfo("unshift() -> appends at beginning");
names.unshift("Mr. ");
console.log(names);

printInfo("shift() -> removes from beginning");
names.shift();
console.log(names);

printInfo("splice(pos, num) -> removed element from position pos and further num.");
names.splice(1,2);
console.log(names);

printInfo("splice(x) -> removed element from position x and further positions.");
names.splice(1);
console.log(names);

printInfo("foreach with function expression")
names.forEach(function(item, index, array){
    console.log(item, index, array);
});

/*
if you want to call some userDefined function here than number of parameters in that function 
will represeont as below

first will represent : element
second will represent : index.
thrid will represent the whole array
fourth parameter and all additional paramters will be "undefined" when printed.

*/
printInfo("foreach with function statements")
function printArray( item, index, array){
    console.log(index+" : "+item);
}

function printArray02(item, index){
    console.log(index+" : "+item);
}

function printArray03(item){
    console.log(item);
}

function printArray04(){
    console.log("MY EMPTY MESSAGE OR SOME CODE");
}

function printArray05(a, b, c, d){
     console.log(a+" : "+b+" "+c+" "+d);
}

printInfo("3 arguments callback in forEach");
years.forEach(printArray);

printInfo("2 arguments callback in forEach");
years.forEach(printArray02);

printInfo("1 arguments callback in forEach");
years.forEach(printArray03);

printInfo("0 arguments callback in forEach");
years.forEach(printArray04)

printInfo("4 arguments callback in forEach");
years.forEach(printArray05)


