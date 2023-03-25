// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const roadBikes = [
  { name: "Atala", weight: 7.1 },
  { name: "Casati", weight: 6.7 },
  { name: "Olmo", weight: 7.9 },
  { name: "Pistidda", weight: 8.2 },
];

function Bikes(roadBikes) {
  let lightBikes = roadBikes[0];
  roadBikes.forEach((element) => {
    if (element.weight < lightBikes.weight) {
      lightBikes = element;
    }
  });
  return lightBikes;
}

const lightBikes = Bikes(roadBikes);

const printResult = document.querySelector(".title");
const result = `Bici più leggera:${lightBikes.name}--Peso:${lightBikes.weight} kg.`;
printResult.innerHTML = result;
