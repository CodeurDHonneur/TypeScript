class Forme {
    private _nom: string;
    private _aspect: string;

    constructor(nom: string, aspect: string) {
        this._aspect = aspect;
        this._nom = nom;
    }

    present() {
        console.log("je suis une forme");
    };
}

class Rectangle extends Forme {
    private _largeur: number;
    private _longueur: number;

    constructor(nom: string, aspect: string, largeur: number, longueur: number){
        super(nom, aspect);
        this._longueur = longueur;
        this._largeur = largeur;
    }

    perimetre(){
        return this._largeur + this._longueur;
    }
}

class Carre extends Forme {

}

class Cercle extends Forme {

}

const rect1 = new Rectangle("Rect1", "rectangle", 10, 15);
console.log(rect1.perimetre());