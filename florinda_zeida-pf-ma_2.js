// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray[1]);
// cow

// question 3
petArray.push("sheep");

// question 4
console.log(petArray.length);
// 4

// question 5
var catObject = {
    name: "Tasy",
    colour: "gray",
    age: "9"
};

// question 6
console.log(catObject.age);
// 9

// question 7
var catArray = [{
    name: "Tasy",
    colour: "gray",
    age: "9"
}];

// question 8
for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}
// Tasy gray 9

// question 9
function logToConsole(myTree) {
    console.log(myTree);
}

// question 10
logToConsole("donkey");
// donkey