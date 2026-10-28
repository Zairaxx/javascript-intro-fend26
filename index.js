
// console.log("Javascript intro!")

//Variables


//String
let utbildning = "Frontendutvecklare";

utbildning = "Backendutvecklare";

//Number
let poang = 100;
// console.log(poang - 50);

let age = 17;
//Boolean

// console.log(age >= 18);

// let / const = Deklarera en variable
let student;

student = null;

// console.log(student);

//Array

let groceryList = ["Äpple","Päron",false,1000];

// console.log(groceryList[2]);

//Objekt

let person = {
    name: "Brandon",
    age: 32,
    likesWinter: false
}

// console.log(person.likesWinter)

// ------------- Functions --------------

function myFunction(){
    console.log("Hej från en funktion!");
}

myFunction(); // Anropar (kör) myFunction-koden

function greetMe(namn){
    return "Välkommen, " + namn + "!";
}

greetMe("Simon"); //Välkommen, Simon!
greetMe("Agneta"); //Välkommen, Agneta!

//Om ni vill se i konsolen vad en funktion returnerar kan ni skriva:
console.log(greetMe("Brandon"));

// En funktion som tar emot ett tal och dubblerar det.

function doubleIt(x){
    return x * 2;
}

// En funktion som tar in två tal, och multiplicerar de med varandra

function multiplyBy(a,b){
    let total = a * b;

    return total;
}

 // 7 och 5 kallas för argument - Värden som vi faktiskt lägger in i funktionen
multiplyBy(7,5)

// En funktion som omvandlar timmar till sekunder
function hoursToSeconds(hours){
    let minutes = hours*60; //Antal minuter
    let seconds = minutes*60; //Antal sekunder

    return seconds;
}

hoursToSeconds(2) //Omvandlar timmar(2) till antal sekunder(7200))
