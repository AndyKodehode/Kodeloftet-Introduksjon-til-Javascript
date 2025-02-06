/*
Datatyper

Oppgaver
1. Lag variabel name, age, isLearningJs, putt inn forskjellige datatyper om deg selv
2. Console.log hver variabel
3. Bruk console log for å finne datatypen til en variabel
4. Lag en array av forskjellige ingredienser til en bakeoppskrift

Funksjon

Oppgaver

1. lag en funksjon som console.log 'Hello World'
2. Lag en funksjon som legger sammen 2 tall
3. Lag en funksjon med en variabel som har en array og console.log arrayet


*/

//DATATYPER//

//Number

let number = 23;

console.log('dette er variabel for nummer:' + number);

//String

let firstName = 'Anders';

//Boleoon/

let isTeaching = true;

//Errordata

/**
 
Undefined
Null
Nan

 */

// Array

let shoppingList = ['såpe', 'Mel', 'Fjorland'];

let numberList = [0, 3, 5];

//Object

let firstObject = { firstName: 'Anders', age: 20, city: 'Bergen' };

// legger ny verdi til variabel firstName, fungerer kun med variabel som har let
firstName = 'Marie';

let nrOne = 45;
let nrTwo = 'Frank';

let sum = nrOne + nrTwo;

//Regular function
function addNr() {
  let bananas = 50;
  let apples = 73;

  let fruits = apples + bananas;

  console.log('samlet antall frukt er:' + ' ' + fruits);
}

addNr();

// Arrow function
let secondFunction = () => {
  console.log('this is the arrowfunction');
};

secondFunction();
