// OOP


// ES6 CLASSES
// -------------------
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }


  getBirthYear() {
    return this.dob.getFullYear();
  }


  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('Mahesh', 'Babu', '19-8-75');
document.writeln(person1.getBirthYear());

document.writeln(person1.getFullName());
