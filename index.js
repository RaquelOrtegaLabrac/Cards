let everyId = [];

let firstCard = [];
let secondCard = [];
let userDecision = "";
let puntuation = [];

const cards = [
  { id: "1", value: "A" },
  { id: "2", value: "2" },
  { id: "3", value: "3" },
  { id: "4", value: "4" },
  { id: "5", value: "5" },
  { id: "6", value: "6" },
  { id: "7", value: "7" },
  { id: "8", value: "8" },
  { id: "9", value: "9" },
  { id: "10", value: "10" },
  { id: "11", value: "J" },
  { id: "12", value: "Q" },
  { id: "13", value: "K" },
];

let iterateId = (palo) => {
  for (let i = 0; i < cards.length; i++) {
    everyId.push({
      symbol: palo,
      num: cards[i].id,
    });
  }
};
iterateId("corazones");
iterateId("espadas");
iterateId("tréboles");
iterateId("diamantes");

let generateRandomCard = () => {
  let randomPosition = Math.floor(Math.random() * 52);

  let randomId = everyId[randomPosition];
  alert(`Ha salido el ${randomId.num} de ${randomId.symbol}`);
  firstCard.push(randomId.num);
};

let generateAnotherRandomCard = () => {
  let randomPosition = Math.floor(Math.random() * 52);

  let randomId = everyId[randomPosition];
  alert(`Ha salido el ${randomId.num} de ${randomId.symbol}`);
  secondCard.push(randomId.num);
};

let askUserDecision = () => {
  let mayorOMenor = prompt(
    '¿Crees que la siguiente carta es mayor o menor? Escribe "mayor" o "menor".'
  );
  if (
    mayorOMenor === "mayor" ||
    mayorOMenor === "Mayor" ||
    mayorOMenor === "MAYOR"
  ) {
    userDecision = "mayor";
    generateAnotherRandomCard();
  } else if (
    mayorOMenor === "menor" ||
    mayorOMenor === "Menor" ||
    mayorOMenor === "MENOR"
  ) {
    userDecision = "menor";
    generateAnotherRandomCard();
  } else {
    alert('Error. Introduce "mayor" o "menor".');
    askUserDecision();
  }
};

let setPuntuation = () => {
  let onePoint = 1;
  let addOne = puntuation.push(onePoint);
  alert(`Your score is: ${addOne}.`);
};

let winTheGame = () => {
  alert("Has ganado, crack! sigue con el gambling.");
};

let loseTheGame = () => {
  alert("Has perdido, echa otro euro.");
};

// let loseTheGame = () => {};

let winOrLoss = () => {
  if (userDecision === "mayor") {
    console.log(firstCard, secondCard);
    if (firstCard[firstCard.length - 1] < secondCard[secondCard.length - 1]) {
      winTheGame();
      setPuntuation();
    } else if (
      firstCard[firstCard.length - 1] > secondCard[secondCard.length - 1]
    ) {
      alert("Has perdido");
    } else {
      alert("Empate");
    }
  }
  if (userDecision === "menor") {
    console.log(firstCard, secondCard);
    if (firstCard[firstCard.length - 1] > secondCard[secondCard.length - 1]) {
      winTheGame();
      setPuntuation();
    } else if (
      firstCard[firstCard.length - 1] < secondCard[secondCard.length - 1]
    ) {
      alert("Has perdido");
    } else {
      alert("Empate");
    }
  }
};

let doYouWantToPlayAgain = () => {
  let playAgain = confirm("¿Quieres volver a echar las cartas?");
  if (playAgain) {
    gameIsOn();
  } else {
    alert("chao, bye bye.");
  }
};
alert(
  "¡Bienvenido a Adivina la carta! Saldrá una primera carta y deberás intentar adivinar si la siguiente es mayor o menor."
);
let gameIsOn = () => {
  generateRandomCard();
  askUserDecision();
  winOrLoss();
  doYouWantToPlayAgain();
};

gameIsOn();
