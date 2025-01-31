
// ARRAYS - Store multiple values in a variable
// // -----------------------------------------------
// let numbers = [1,2,3,4,5,'vit',false];

// for(i =0; i< numbers.length ;i++){
//     document.write(numbers[i]+"<br>");
// }








// // another way but not prefered
// let fruits = new Array( "apple", "orange", "mango" ); 



// document.writeln(numbers);

// Get one value - Arrays start at 0
// --------------------------
// document.writeln(fruits[1]);

// Add value
// -------------------
// fruits[4] = 'blueberries';
// document.writeln(fruits);


//iterate through the array

// for (i = 0; i < fruits.length; i++) {
//        document.writeln(fruits[i] )
//     }

// fLen = fruits.length;
 
// text = "<ul>";
// for (i = 0; i < fLen; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.write(text);


let fruits = ['apples', 'oranges', 'pears', 'grapes'];

// Add value using push()
// ----------------------------
fruits.push('1');
// document.writeln(fruits);

// Add to beginning
// ---------------------------
fruits.unshift('0');

// document.writeln(fruits);

// Remove last value
// ---------------------------
// fruits.pop();
document.writeln(fruits);

// Check if array
// ----------------------
// document.writeln(Array.isArray(fruits));

// // Get index
// --------------------
document.write("<br>");
document.writeln(fruits.indexOf('1'));

