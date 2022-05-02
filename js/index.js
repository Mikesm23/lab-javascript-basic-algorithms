// Iteration 1: Names and Input

// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Mike";

//1.2 Print `"The driver's name is XXXX"`.

console.log(`"The driver's name is ${hacker1}"`);

// 1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Sebastian";

// 1.4 Print `"The navigator's name is YYYY"`.

console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`); 
 } else if (hacker1.length < hacker2.length) {
   console.log(`It seems that navigator has the longest name, it has ${hacker2.length} characters`);
 } else {
   console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
 }

//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N":

console.log(hacker1.toUpperCase().split('').join(' '));

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

console.log(hacker2.split("").reverse().join(""));

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

function compareStr() {
    let result = hacker1.localeCompare(hacker2);
    
    if(result === -1) {
      console.log("The driver's name goes first.");
    } else if (result === 1){
    console.log("Yo, the navigator goes first definitely.");
    } else {
    console.log("What?! You both have the same name?");
    }
  }
  
  compareStr();


/* Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
*/

let loremParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar nibh lorem, non sodales augue porttitor eu. Proin nec dictum tortor. Sed dictum vestibulum mi pulvinar mollis. Duis id nisl varius, tempus quam sed, imperdiet elit. Fusce vitae imperdiet ligula, in rutrum leo. Cras mattis ex nec mi viverra, eu consequat sem dapibus. Sed vestibulum felis nulla, id iaculis quam malesuada ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in posuere eros. Maecenas vel est ut ligula suscipit tincidunt. Proin placerat dolor molestie, hendrerit nibh eget, suscipit enim. Nunc aliquet posuere lorem, quis convallis dolor molestie quis. Nulla at massa in elit fermentum interdum non ac diam."
+
"Praesent laoreet magna nunc, a pretium dui iaculis at. Praesent faucibus vel risus at vestibulum. Donec ut lorem accumsan orci faucibus finibus a id quam. Mauris sed orci ac velit tristique gravida vitae nec erat. Donec placerat metus ac tortor aliquam ullamcorper. Aenean faucibus odio ut lacinia dignissim. Etiam porta interdum urna, sed efficitur ipsum dictum vel. Vivamus consectetur cursus dui pulvinar tristique. Donec vitae odio nec risus mollis sagittis."
+
"Mauris tristique, enim eu congue molestie, eros nulla posuere nunc, ut laoreet est felis in massa. Quisque sed ultrices nisl. Mauris hendrerit nibh nec ipsum tempus, at ullamcorper tellus rhoncus. Sed ac efficitur neque. Nulla et placerat sem. Curabitur id porta libero, quis egestas massa. Etiam venenatis, dolor eget finibus venenatis, sem nulla commodo metus, et fringilla nunc turpis vitae lacus."

//Make your program count the number of words in the string.

const loremArr = loremParagraphs.split(' ');

console.log(loremArr.length);

// Make your program count the number of times the Latin word et appears.

/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value.
Write a code that will check if the value we assigned to this variable is a Palindrome.
*/