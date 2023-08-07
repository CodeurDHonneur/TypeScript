"use strict";
class Product {
    constructor(name) {
        this._ref = 1000;
        this._name = name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set ref(ref) {
        this._ref = ref;
    }
    get ref() {
        return this._ref;
    }
}
let bike = new Product('Super Bike');
console.log(bike.name);
//changer le nom du produit
let nouveauNom = bike.name = 'VTT';
console.log(nouveauNom);
//Affichage du prix en console
let price = bike.ref;
console.log(price);
//Modifier le prix
let nouveauPrix = bike.ref = 3000;
console.log(nouveauPrix);
