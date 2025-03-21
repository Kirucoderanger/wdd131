const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
//document.getElementById("h1").innerHTML = fruits.length;
//document.body.appendChild(fruits.length);

/*const img = document.createElement('img');
img.src = 'path/to/image.jpg';
img.alt = 'Description of image';
document.body.appendChild(img);*/
//fruits[5] = "mango";
//console.log(fruits[5]); // mango
//alert("ok");
//Increasing the length extends the array by adding empty slots without creating any new elements — not even undefined.
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
console.log(fruits); // ['banana', 'apple', 'peach', empty × 2, 'mango']
console.log(fruits[0]); // 'banana'
console.log(fruits[3]); // undefined
console.log(fruits[4]); // undefined
console.log(fruits[5]); // 'mango'

//Decreasing the length property does, however, delete elements.
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
console.log(fruits); // ['banana', 'apple']

//Iteration methods such as forEach don't visit empty slots at all
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

//keys do not treat empty slots specially and treat them as if they contain undefined
const colors1 = ["red", "yellow", "blue"];
colors1[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors1[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']

let scores = [100, 72, 83, 94, 88, 87];
let names = ['Nancy','Blessing','Jorge','Svetlana'];
let aScore = scores[0];  // The aScore variable is assigned the value of 100
console.log(scores[0])
//Arrays values can be modified:
scores[0] = 99; // This assignment expression changed the first score in the array from 100 to 99.
console.log(scores[0])

//Arrays can be iterated over using a classic for loop:

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

scores.forEach(function(score) {
    console.log(score);
  });

 // Arrays have a length property:

  let numScores = scores.length;
  console.log(numScores);

scores.push(100); // Adds a new element to the end of the array
scores.pop(); // Removes the last element from the array
scores.shift(); // Removes the first element from the array
scores.unshift(100); // Adds a new element to the beginning of the array
scores.slice(2,3); // Cut out a portion of the array starting at an index for a given length
scores.splice(2, 1); // Removes 1 element from the array starting at index 2
let numScores1 = scores.join(', '); // transform the array into a single string with a comma and space delimiter option
console.log(numScores1);
let numScores2 = scores.join(''); // transform the array into a single string with no delimiter
console.log(numScores2);
let numScores3 = scores.join(' '); // transform the array into a single string with a space delimiter
console.log(numScores3);

//concat() method! This cooperative function lets you merge two or more arrays into a single, harmonious array.
const fruits1 = ['apple', 'banana'];
const fruits2 = ['cherry', 'orange'];
const allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ["apple", "banana", "cherry", "orange"]

//indexOf() method! This intrepid function searches for a specified element in your array and returns its index
const fruits3 = ['apple', 'banana', 'cherry', 'banana'];
const bananaIndex = fruits3.indexOf('banana');
console.log(bananaIndex); // Output: 1

//lastIndexOf() method! This stalwart function searches for a specified element in your array and returns the last index at which it was found
const fruits4 = ['apple', 'banana', 'cherry', 'banana'];
const bananaIndex1 = fruits4.lastIndexOf('banana');
console.log(bananaIndex1); // Output: 3