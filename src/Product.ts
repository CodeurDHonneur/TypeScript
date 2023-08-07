class Product {
    //Membres
    private _name: string;
    protected _ref: number = 1000;

    constructor(name: string) {
        this._name = name;
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set ref(ref: number)  {
        this._ref = ref;
    }

    get ref(): number {
        return this._ref;
    }
}

let bike = new Product('Super Bike');
console.log(bike.name);

//changer le nom du produit
let nouveauNom = bike.name = 'VTT';
console.log(nouveauNom);


//Affichage du prix en console
let price: number = bike.ref;
console.log(price);

//Modifier le prix
let nouveauPrix: number = bike.ref = 3000;
console.log(nouveauPrix);

