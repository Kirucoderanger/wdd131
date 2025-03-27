alert("ok");
console.log("ok");
let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
      street: "123 Camino Real",
      city: "Santa Rosa",
      country: "Honduras"
    },
    isEmployed: true,
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };


  

//document.getElementById("dbody").innerText= "ok";
//document.body.innerHTML = "ok";
person.age = 31;
  let dbody = document.getElementById("dbody");
  dbody.innerHTML = "ok1";
dbody.innerHTML = 
  `${person['isEmployed']},</br> ${person.hobbies[0]},<br> ${person.age},<br> ${person['address'].city}`;


  //console.log(person['isEmployed']),  // bracket notation
  //console.log(person.hobbies[0]),   // dot notation
  //console.log(person.age),  // dot notation
  //console.log(person['address'].city)  // combined notation

  let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
  };

  let ddbody = document.getElementById("ddbody");

  aCourse.sections = [
    { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
    { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
  ];

 //let ddbody = document.getElementById("ddbody");
 ddbody.innerHTML = `${aCourse.sections[0].section},</br> ${aCourse.sections[1].section},<br> ${aCourse.sections[1].enrolled},`;

 aCourse.sections1 = ["section 001","section 002"];
 function setCourseInformation(aCourse) {
    document.querySelector("#courseName").innerHTML = `${aCourse.code} – ${aCourse.title}`;
  }
 //ddbody.innerHTML = aCourse.sections1[0];
 let section = document.getElementById("section");
 let enrollment = document.getElementById("enrollment");
 let instractor = document.getElementById("instractor");
 let tbody = document.getElementById("tbody");
 let len = aCourse.sections.length;
 let len1 = 3;
 let html = "";
 for (let i = 0; i < len; i++) {
    //html += `${aCourse.sections[0].section},</br> ${aCourse.sections[1].section},<br> ${aCourse.sections[1].enrolled},hhhh`;
//<li>${items[i]}</li>;
html += `<tr><td>${aCourse.sections[i].section}</td><td>${aCourse.sections[i].enrolled}</td><td>${aCourse.sections[i].instructor}</td></tr>`;
}
tbody.innerHTML = html;

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

let ArrayFilter = document.getElementById("arryfilter");



function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
  

const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]

  ArrayFilter.innerHTML = `<h1>Array.prototype.filter()</h1></br> ${result}\n
  <br>Filtering out all small values:${filtered}<br>Find all prime numbers in an array:${array.filter(isPrime)}\n
  <br>Searching in array:${filterItems(fruits, "ap")}<br>Searching in array:${filterItems(fruits, "an")}\n
  <br>Using the third argument of callbackFn:${greatIDs}`;
 

  let ArrayMap = document.getElementById("arrymap");
  const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]

  let names1 = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
  let firstCharacter = names1.filter(name => name.charAt(0) === 'B');
  let nameLengths = names1.map((name) => name.length);
  let averageNamelength = names1.reduce((total, name) => total + name.length, 0) / names1.length;
  ArrayMap.innerHTML = `<h1>Array.prototype.map()</h1><br>${map1}<br>${reformattedArray}<br>${kvArray}\n
  <br> Names with first character:${firstCharacter}<br>length of each itmes in the array:${nameLengths}<br>Average name length:${averageNamelength}`;


