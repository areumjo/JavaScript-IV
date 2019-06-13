// CODE here for your Lambda Classes
class Person {
    constructor(att) {
      this.name = att.name;
      this.age = att.age;
      this.location = att.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
};


class Instructor extends Person {
    constructor(att) {
      super(att)
      this.specialty = att.specialty;
      this.favLanguege = att.favLanguege;
      this.catchPhrase = att.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(obj, sub) {
        console.log(`${obj.name} receives a perfect score on ${sub}`);
    }
    cP() {
        console.log(this.catchPhrase.forEach());
    }
    grading(obj) {
        let newGrade = obj.gradePoint+= Math.floor((Math.random() - 0.5) * 30);
        console.log(`${obj.name}'s new grade is`, newGrade);
        if (newGrade > 70) {
            console.log(`${obj.name} is ready to graduate from Lambda School`);
        } else {

        }
    }
};

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

fred.speak(); //Hello my name is Fred, I am from Bedrock
fred.demo('JS'); //Today we are learning about JS
fred.grade({name: 'Areum'}, 'JS'); //Areum receives a perfect score on JS


class Student extends Person {
    constructor(att) {
        super(att)
        this.previousBackground = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
        this.gradePoint = att.gradePoint;
    }
    listsSubjects() {
        this.favSubjects.forEach(elem => console.log(elem));
    }
    PRAssignment(sub) {
        console.log(`${this.name} has submitted a PR for ${sub}`);
    }
    sprintChalleng(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.gradePoint > 70) {
            console.log(`${this.name} is ready to graduate from Lambda School`);
        } else {
         
        }
    }
}
  
const areum = new Student({
    name: 'Areum',
    location: 'NY',
    age: 17,
    previousBackground: 'Neuroscience',
    className: 'WEB21',
    favSubjects: ["HTML", "CSS", "JS"],
    gradePoint: 76
});

areum.listsSubjects(); // HTML ; CSS ; JS
areum.PRAssignment('JS'); // Areum has submitted a PR for JS
areum.sprintChalleng('JavaScript'); // Areum has begun sprint challenge on JavaScript


class ProjectManager extends Instructor {
    constructor(att) {
        super(att)
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }
    standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel stand times`);
    }
    debugsCode(stuObj, sub) {
        console.log(`${this.name} debugs ${stuObj.name}'s code on ${sub}`);
    }
  }
  
const darren = new ProjectManager({
    name: 'Darren',
    location: 'DC',
    age: 23,
    favLanguage: 'LESS',
    specialty: 'Full stack web dev',
    catchPhrase: `gang gang`,
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell'
  });
  
  console.log(darren.gradClassName);
  console.log(darren.favInstructor); //Josh Knell
  darren.standUp('#web21_darren'); //Darren announces to #web21_darren, @channel stand times
  darren.debugsCode(areum, 'JS'); //Darren debugs Areum's code on JS

/*  Stretch Problem  */

// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.

console.log(areum.gradePoint);
darren.grading(areum);

