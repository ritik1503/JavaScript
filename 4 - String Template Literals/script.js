let string = "hello world"
// let num = "12345678911"
console.log(string[0]);
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim()); // remove space before starting and after ending of original string
console.log(string.trimStart());
console.log(string.trimEnd());
console.log(string.includes('world')); //it will search "world" in the string and it is case sensitive
console.log(string.indexOf("l")); //return index, only 1st occurrence index, and  gives -1 if not found
console.log(string.replace("hello",""));
console.log(string.replaceAll('l','L'));
console.log(string.concat(" ok chai")); //we can add multiple things too i.e. .concat(x,y,z);
console.log("hello ".padStart(11,'*'));// it will give ******world
console.log(string.charAt(1));
console.log(string.charCodeAt(1));


console.log(string.split(' ')); //splits and convert into array

console.log(`template literal is ${string}`);