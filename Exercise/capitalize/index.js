// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let splitted = str.split(" ");
    console.log(splitted);
    let test = [];

    for (let i = 0; i < splitted.length; i++) {
      test.push(splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1));
    }
    console.log(test.join(" "));
}

module.exports = capitalize;
