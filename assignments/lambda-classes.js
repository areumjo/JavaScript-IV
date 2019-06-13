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