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
 

