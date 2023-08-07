"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}
let greeter = new Greeter("Hello, world");
console.log(greeter.greet());
const data = {
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
var JourSemaine;
(function (JourSemaine) {
    JourSemaine[JourSemaine["Lundi"] = 0] = "Lundi";
    JourSemaine[JourSemaine["Mardi"] = 1] = "Mardi";
    JourSemaine[JourSemaine["Mercredi"] = 2] = "Mercredi";
    JourSemaine[JourSemaine["Jeudi"] = 3] = "Jeudi";
    JourSemaine[JourSemaine["Vendredi"] = 4] = "Vendredi";
    JourSemaine[JourSemaine["Samedi"] = 5] = "Samedi";
    JourSemaine[JourSemaine["Dimanche"] = 6] = "Dimanche";
})(JourSemaine || (JourSemaine = {}));
;
// let jour: JourSemaine = JourSemaine.Dimanche;
// console.log(jour);
for (const jour in JourSemaine) {
    console.log(`${jour}`);
}
