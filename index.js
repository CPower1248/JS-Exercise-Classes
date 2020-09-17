/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(attrs){
    this.name = attrs.name;
    this.age = attrs.age;
    this.stomach = [];
  }
  eat(food){
    if(this.stomach.length < 10){
      this.stomach.push(food);
    }
  }
  poop(){
    this.stomach = [];
  }
  toString(){
    return `${this.name}, ${this.age}`
  }
}

const personOne = new Person({name: "Corey", age: 29})
console.log(personOne)
const personTwo = new Person({name: "Phil", age: 27})
console.log(personTwo)
const personThree = new Person({name: "Aiden", age: 5})
console.log(personThree)

personOne.eat("pizza")
console.log(personOne)
personOne.poop()
console.log(personOne)
console.log(personOne.toString())

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(attrs){
    this.model = attrs.model;
    this.mpg = attrs.mpg;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons){
    this.tank += gallons;
  }
  drive(distance){
    if(this.tank <= distance / this.mpg){
      this.odometer += this.tank * this.mpg;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`
    } else {
      this.odometer += distance;
      this.tank -= distance / this.mpg;
    }
  }
}

const carOne = new Car({model: "Elantra", mpg: 30})
console.log(carOne)
carOne.fill(10)
console.log(carOne)
carOne.drive(150)
console.log(carOne)
console.log(carOne.drive(300))
console.log(carOne)

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

class Lambdasian {
  constructor(attrs){
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}
const lary = new Lambdasian({name: "Lary", age: 4, location: "San Ramon, CA"})
console.log(lary)
console.log(lary.speak())

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian {
  constructor(insAttrs){
    super(insAttrs);
    this.specialty = insAttrs.specialty;
    this.favLanguage = insAttrs.favLanguage;
    this.catchPhrase = insAttrs.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}`
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`
  }
}
const insOne = new Instructor({name: "Brit", age: 21, location: "Canada", specialty: "Remote Learning", favLanguage: "JavaScript", catchPhrase: "Winky frowny neck-beard guy"})
console.log(insOne)
console.log(insOne.demo("JavaScript"))
console.log(insOne.grade(personOne, "JavaScript"))

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian{
  constructor(stuAttrs){
    super(stuAttrs);
    this.previousBackground = stuAttrs.previousBackground;
    this.className = stuAttrs.className;
    this.favSubjects = stuAttrs.favSubjects;
  }
  listSubjects(){
    return `Loving ${this.favSubjects.join(', ')}`
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}
const stuOne = new Student({name: "Corey-student", age: 29, location: "MA", previousBackground: "CNA/Driver/YCSpecialist", className: "WEB36", favSubjects: ["JavaScript", "C#", "HTML", "CSS"]})
console.log(stuOne)
console.log(stuOne.listSubjects())
console.log(stuOne.PRAssignment("JavaScript"))
console.log(stuOne.sprintChallenge("JavaScript"))

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor{
  constructor(pmAttrs){
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}
const pmOne = new ProjectManager({name: "Nick", age: 21, location: "Lambda Universe", specialty: "Lambda Stuff", favLanguage: "C#", catchPhrase: "Yo!", gradClassName: "CS1", favInstructor: "Sean"})
console.log(pmOne)
console.log(pmOne.standUp("Example Channel"))
console.log(pmOne.debugCode(personOne, "C#"))

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
