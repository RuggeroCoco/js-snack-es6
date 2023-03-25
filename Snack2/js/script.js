// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeams = [
  { name: "Catania", pointsMade: 0, foulsIncurred: 0 },
  { name: "Palermo", pointsMade: 0, foulsIncurred: 0 },
  { name: "Napoli", pointsMade: 0, foulsIncurred: 0 },
  { name: "Milan", pointsMade: 0, foulsIncurred: 0 },
  { name: "Roma", pointsMade: 0, foulsIncurred: 0 },
];

function generaRndNum(teams) {
  teams.forEach((element) => {
    if (element.pointsMade === 0) {
      element.pointsMade = Math.floor(Math.random() * 100) + 1;
    }
    if (element.foulsIncurred === 0) {
      element.foulsIncurred = Math.floor(Math.random() * 30) + 1;
    }
  });
}
generaRndNum(footballTeams);
console.log(footballTeams);

function nameAndFouls(teams) {
  return teams.map((element) => {
    const { name, foulsIncurred } = element;
    return { name, foulsIncurred };
  });
}

const teamsFouls = nameAndFouls(footballTeams);
console.log(teamsFouls);
