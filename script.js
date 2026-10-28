const name = "Brandon";
const age = 30;
const favoriteDestination = "Bali";
const numberOfSiblings = 2;
const hasPets = false;

console.log(
  "Hej! Jag heter " + name +
  ", jag är " + age + " år gammal" +
  ", mitt favoritresmål är " + favoriteDestination +
  ", jag har " + numberOfSiblings + " syskon" +
  " och har jag husdjur? " + hasPets
);
 
 
const favoriteFruits = ["mango", "jordgubbe", "banan", "ananas", "vattenmelon"];
 
console.log(favoriteFruits[0]);
console.log(favoriteFruits[3]);
 
favoriteFruits.push("kiwi");

console.log(favoriteFruits);
 
 
const favoriteMovies = [
  "Inception",
  "Spirited Away",
  "The Matrix",
  "Interstellar",
  "Parasite",
  "Step Up",
  "Harry Potter",
  "Sagan Om Ringen"
];
 
console.log(favoriteMovies[4]);
console.log(favoriteMovies[favoriteMovies.length-1]);


//Ta bort sista filmen
favoriteMovies.pop();
console.log(favoriteMovies);
 
 
const pet = {
  type: "hund",
  breed: "golden retriever",
  age: 4,
  name: "Max",
  isHerbivore: false,
  bestFriend: {
    type: "kanin",
    breed: "dvärgvädur",
    name: "Stampe",
    age: 2,
    isHerbivore: true
  },
  makeSound: function () {
    console.log("Woof woof!");
  }
};
 
console.log(pet.age);
console.log(pet.bestFriend.name);
pet.makeSound();

 
const myName = "Brandon";
const myAge = 30;
const favoriteSport = "dans";
 
console.log(`Jag heter ${myName}, är ${myAge} år och min favoritsport är ${favoriteSport}.`);

 
const weather = "regnigt";
 
if (weather === "soligt") {
  console.log("Ta på dig solglasögon!");
} else if (weather === "regnigt") {
  console.log("Glöm inte paraply!");
} else if (weather === "snöigt") {
  console.log("Ta på dig vinterjackan!");
} else {
  console.log("Jag vet inte vad du ska ha på dig!");
}
 