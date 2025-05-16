# Web Development Concepts Review

1.HTTP Methods & HTTP Status Codes
#HTTP Methods: are like commands that tell the server what action to perform. -'GET': Ask for data from the server (like opening a website). -`POST`: Send new data to the server (like submitting a form). -`PUT`: Update existing data on the server. -`DELETE`: Remove data from the server.

#HTTP Status Codes:are 3-digit numbers that show what happened after a request. -`200 OK`: Everything worked fine. -`404 Not Found`: The page or resource doesn't exist. -`500 Internal Server Error`: Something went wrong on the server. -`403 Forbidden`: You're not allowed to access this.


2.CSS Selectors
CSS selectors are used to select HTML elements and style them.
- element selector: Targets all elements of a type. Example: `p { color: blue; }`
- class selector: Targets elements with a specific class. Example: `.box { padding: 10px; }`
- id selector: Targets an element with a specific ID. Example: `#header { font-size: 24px; }`
- * selector: Selects all elements. Example: `* { margin: 0; padding: 0; }`


3.GIT Basics
Git is a tool to track changes in code.
- git init: Starts a new git project.
- git add: Adds changes to be saved. Example: `git add .` (adds all files).
- git commit -m "message": Saves a snapshot of your changes with a message.
- git push: Sends your commits to a remote server like GitHub.
- git pull: Gets the latest changes from the remote server.
- git clone: Copies a git project from a remote source to your computer.
- git branch: Shows the list of branches or creates a new one.


4.Callback & Higher-Order Functions
-Callback Function: A function that is passed into another function to run later.
Example:
function greet(name) {
console.log("Hello " + name);
}
function processUser(callback) {
callback("Alex");
}
processUser(greet); // Output: Hello Alex

Higher-Order Function: A function that takes another function as an argument or returns a function.
Example:
function doMath(operation, x, y) {
return operation(x, y);
}
function add(a, b) {
return a + b;
}
console.log(doMath(add, 2, 3)); // Output: 5


5. Array Methods
filter: Returns a new array with elements that match a condition.
[1, 2, 3, 4].filter(num => num > 2); // [3, 4]

map: Creates a new array by changing each element.
[1, 2, 3].map(num => num \* 2); // [2, 4, 6]

forEach: Runs a function on each element but doesn’t return a new array.
[1, 2, 3].forEach(num => console.log(num));

push: Adds an element to the end of an array.
let arr = [1, 2];
arr.push(3); // arr is now [1, 2, 3]

pop: Removes the last element from an array.
let arr = [1, 2, 3];
arr.pop(); // arr is now [1, 2]

