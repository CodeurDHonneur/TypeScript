//generics 
function test<T>(arg: T): T {
    return arg;
}

let x = test<string>("Salut");

console.log(x);

class MaClasse {
    _x: number;
    _y: number;

    constructor(x: number, y: number){
        this._x = x;
        this._y = y;
    }
}
