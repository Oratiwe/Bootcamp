let courses = ['Javascript',"Java","Angular","React"]

console.log(courses); ['Javascript','Java','Angular','React']
courses.length=10;

courses[4]="Typescript"
courses[5]="Vue"
console.log('number of courses available' + courses);
console.log(typeof courses);

//Injecting multiple values into a single array
courses.push(["c++","Flutter","C#","Python"])
console.log("New semter courses"+ courses)

let faculty= courses.toString();


console.log("course as a string" +faculty);
console.log(typeof faculty);
console.log(faculty.toLocaleUpperCase)

let learners= new Array() //undefined

learners[0]=1;
learners[1]=2;
learners[2]=3;
learners[3]=4;
learners[4]=5



console.log("Total number of leaners",learners.length )