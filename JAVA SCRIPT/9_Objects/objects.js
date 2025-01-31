// OBJECT LITERALS
// ------------------------------

let person = {
  firstName: 'james',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  lastname:'bond'
}

// document.write(person.firstName+' '+person.lastname)

// document.write(person.hobbies[2])

// person.fun();

// Get single value
// -----------------------
// document.writeln(person.firstName)

// Get array value
// ----------------------
// document.writeln(person.hobbies[1]);

// Get embedded object
// ----------------------------
// document.writeln(person.address.city);

// Add property
// -----------------------
// person.email = 'jdoe@gmail.com';

// Array of objects
// ------------------
let todos = [
  {
    id: 1,
    text: 'Complete the assignemnt',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with friend',
    isComplete: false
  },
  {
    id: 3,
    text: 'Watch NF',
    isComplete: true
  }
];

for (a of todos)
{
  document.write(a.text+"--"+a.isComplete+"<br>")
}


// Get specific object value
// ----------------------------------
// for( t of todos)
// document.writeln(t.text+"<br>");

// Format as JSON
// ---------------------
// document.writeln(JSON.stringify(todos));





