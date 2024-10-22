const fruitsArray = ["Apple", "Apple" ,"Banana", "Mango", "PineApple"];
console.log(fruitsArray.length);
// fruitsArray[2] = "Mange";
// fruitsArray[5] = "test";
                      
// const testingConst = 'Ritik'
// console.log(testingConst);
                      
//for Adding          
fruitsArray[fruitsArray.length]='hello'
fruitsArray.push("added ");
fruitsArray.push("added1", "added2", "added3");
console.log(fruitsArray);


//for deleting
fruitsArray.pop()


//Array Methods
//shift() -> removes element from start
// unshift(value) -> to add element from start
// concat() -> adds two array and return resulting array
// includes(value) -> True if exists the value
// indexOf(value) -> return the index of first occurring element
// reverse() -> to reverse the array
// sort() -> uses UTF Code,to sort the array, fails in  case of number
// slice(start,end) -> gives element from start till the end element, excluding end element
//1 -The splice() method of Array instances changes the contents of an array by removing or 
//2 -replacing existing elements and/or adding new elements in place.

