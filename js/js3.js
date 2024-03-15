var son = parseInt(prompt("sonni kirit"));
if (son % 3 === 0 && son % 5 === 0) {
  console.log(" fizz bazz");
} else if (son % 3 === 0) {
  console.log( "fizz");
} else if (son % 5 === 0) {
  console.log( "bazz");
} else {
  console.log(" iktasigayam bolinmidi");
}