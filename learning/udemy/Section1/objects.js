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

//objects are key value pairs
//each value has a name (which is the key)
//objects don;t have order, unlike arrays

printBanner("Objects -> key : value pairs (eq to hash map)");

var john = {
    name : "John",
    lastName : "Trivolta",
    title : " aka Khatru",
    isMarried : false
}

console.log(john);
console.log(john.name);
console.log(john["title"]);
printInfo("Data Mutation : update data of a variable/position")
john.isMarried = true;
console.log(john);

printInfo("Create Object using -> new Object()")
var jane = new Object();
jane.name = "jane";
jane.lastName = "Watson";
jane['yearOfBirth'] = 1969;
jane['job'] = "retired";
jane.isMarried = true;

console.log(jane);

