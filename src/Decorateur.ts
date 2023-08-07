//Décorateur de fonction normale
function monDecorateur(constructor: Function) {
    console.log("Appelle du décorateur");
}

function route(routePath: string) {
    return function(target: any, property: string, descriptor: PropertyDescriptor ){
        console.log( `Création d\'une route pour'${routePath}'`)
    }
}
@monDecorateur
class MaClass {
    @route("/home")
    getDashboard(){}

    @route("/music")
    getMusique(){}

    
    constructor() {
        console.log("MyClass créée");
    }
}

const c1 = new MaClass();
const c2 = new MaClass();