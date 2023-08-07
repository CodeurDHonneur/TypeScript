### Définition de TypeScript
TypeScript est un langage de programmation que l'on qualifié de "superset", un sur-ensemble du javascript. Il vient donc enrichir JavaScript en apportant un lot de nouvelles fonctionnalités qui permettent de construire des applications en JavaScript plus sûres et donc plus professionnelles.

# Fonctionnalités ajoutées :
- typage statique 

## installation globale : npm install -g typescript
## compilation : tsc my-code.ts
## tsc --init : génération du fichier de configuration tsconfig.json

### Les types en typeScript
## types de base
- number (entiers et nombres à virgule)
- string 
- boolean
- Array
Il existe deux manières équivalentes de définir un tableau
    .Array<T> => Array<string>
    . T[] => number[] 

- tuple (tableau fixe de longueur définie où chaque élément peut avoir un type différent)
        *Permet de définir un tableau constitué de valeur ayant des types différents
    . [boolean, string] => tuple de 2 nombres

- objet {}
    . {name (clé) : string (type), age (clé) : number (type)}

    . {[key : string] : number} => ceci s'appelle aussi dictionnaire. les clés sont des string et les valeurs des nombres.
    quand les clés sont du même type et que les clés en elles-mêmes sont des types

    // Déclaration d'un dictionnaire avec des clés de type chaîne et des valeurs de type nombre
    const scores: { [key: string]: number } = {
        "Alice": 95,
        "Bob": 78,
        "Eve": 89,
    };

    // Accès aux valeurs du dictionnaire
    console.log(scores["Alice"]); // Affiche : 95
    console.log(scores["Bob"]);   // Affiche : 78

    // Ajout d'une nouvelle entrée au dictionnaire
    scores["Charlie"] = 82;

    // Parcours des entrées du dictionnaire
    for (const person in scores) {
    console.log(`${person} a obtenu ${scores[person]}     points`);
    }

- enum (énumération)
enum JourSemaine {
  Lundi,
  Mardi,
  Mercredi,
  Jeudi,
  Vendredi,
  Samedi,
  Dimanche
}

Pour utiliser l'énumération, avoir accès aux variables, on peut utiliser "NomEnumeration.clé"
parcourir avec un "for(const nom in NomEnumeration) {
    //Logique
}"

- any 
    Permet tout type 

- void 
    Représente "rien", peut être utilisé comme valeur de retour de fonction. Seules les "null" et "undefined" font partie du type "void"

- never
    représente un type qui ne devrait jamais se produire, utilisé pour des fonctions qui lancent des exceptions ou des boucles infinies

- null 
    - type pour la valeur null . null est implicitement partie de chaque type, sauf si les vérifications NULL strictes sont activées

