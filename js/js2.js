var son = parseInt(prompt("Sonni kirit:"));
if (son % 4 === 0 && son % 6 === 0) {
  console.log(son + " iktasigayam bolinadi");
} else if (son % 4 === 0) {
  console.log(son + " 4 ga bolinadi");
} else if (son % 6 === 0) {
  console.log(son + " 6 ga bolinadi.");
} else {
  console.log(son + " iktasigayam bolinmidi");
}