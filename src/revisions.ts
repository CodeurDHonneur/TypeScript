class Greeter {
    greeting : string;

    constructor (message : string) {
        this.greeting = message;
    }

    greet(): string {
        return this.greeting;
    }
}

let greeter = new Greeter("Hello, world");
console.log(greeter.greet());

const data : {[key: number | string]: number} = {
    1: 42,
    "two": 73,
    3: 58,
    "four": 91
};

console.log(data[1]);
console.log(data["four"]);

for (const person in data) {
    console.log(`${person} a obtenu ${data[person]}     points`);
    }


enum JourSemaine {
    Lundi,
  Mardi,
  Mercredi,
  Jeudi,
  Vendredi,
  Samedi,
  Dimanche
};

// let jour: JourSemaine = JourSemaine.Dimanche;
// console.log(jour);
for (const jour in JourSemaine) {
    console.log(`${jour}`)
}