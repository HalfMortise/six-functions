//This doc contains only the Array Function
//ARRAY FUNCTION: sorting first row of students by age in ascending order
//Run in Node.js to see the array
let ages = [{
	"age": "24",
	"name": "Ryo",
}, {
	"age": "24.5",
	"name": "Sarah",
}, {
	"age": "31",
	"name": "Joe",
}, {
	"age": "35",
	"name": "Joy",
}, {
	"age": "32",
	"name": "Jude",
}];

ages.sort((a,b) => Number(a.age) - Number(b.age));
console.log("descending", ages);