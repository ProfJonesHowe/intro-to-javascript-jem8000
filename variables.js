// Using let
let name = "Jacob";
let age = 19;
let isStudent = true;
let job = "unemployed";
let hasInternship = true;
let dio = " "

document.getElementById("demo1").innerHTML =
  "Name: " + name + "<br>Age: " + age + "<br>Student: " + isStudent + "<br>Job: " + job;

var city = "Albany";     // Function-scoped
let state = "NY";        // Block-scoped
const country = "US";   // Cannot be reassigned


document.getElementById("demo2").innerHTML =
  "Location: " + city + ", " + state + ", " + country;




if (isStudent = true){
 dio = "I am a student in " +city +" "  +state;
}
else {
 dio = "I dont want to further my education";
}

document.getElementById("demo3").innerHTML = 
	"Waddup, my name is " + name+ " " + dio + " and I am " + age + "years old!";
	