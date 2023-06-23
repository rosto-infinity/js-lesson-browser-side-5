let obj ={
    //index:valeur
    pseudo:"rostodev",
    ville: "Bafoussam",
    admin:true,
    direBonjour : function (){
    console.log("Bonjour je suis à " +this.ville)
}
}
// console.log(obj.direBonjour());
 

// console.log(obj);
// console.log(typeof obj);
let array = [1, "JS", 2, "PHP"]
// console.log(typeof array);
// console.log(document.body);
// console.log(typeof document.body);
// console.log(typeof null);

//Ajouter
obj.age = 23;
// console.log(obj);

//Modification des données la plus populaire

obj.pseudo ="infinity"
// console.log(obj);

//autrement et peut utiliser
obj["age"] =12
// console.log(obj);

//Suppriner
// delete obj.age;
// console.log(obj);


// Checker si propriété existe : tester si un paramètre existe
// console.log("pseudo" in obj);
// console.log("name" in obj);


//Parcourir l'objet
for( const key in obj){
    //liste des objets
    // console.log(key);
    // console.log(obj[key]);
    // console.log(key +": "+ obj[key]);
    // console.log(`${key}: ${obj[key]} `);
}

//Obtenir les clés
const keys = Object.keys(obj);
// console.log(keys);

//Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

const nesttedArray = Object.entries(obj);
// console.log(nesttedArray);


let obj2 ={
    //index:valeur
    taille:"rostodev",
    ville: "65kg",
}

// Fusionner objects
const fusionObj = Object.assign({}, obj, obj2);
// console.log(fusionObj);

//Empecher les modifications

const newObj = Object.seal(obj);
newObj.pseudo = "Test";
newObj.adresse = "Bafang rond point";
// console.log(newObj);

// Le script crée un nouvel objet scellé (sealed) appelé `newObj`, en utilisant la méthode `Object.seal()`. La méthode Object.seal() permet de geler un objet existant, c'est-à-dire qu'on ne peut plus ajouter de nouvelles propriétés/données à l'objet mais on peut modifier ou supprimer les propriétés existantes.

// Ensuite, on tente de définir deux nouvelles propriétés sur `newObj` : `pseudo` et `adresse`. Cependant, étant donné que `newObj` est scellé, les tentatives pour ajouter de nouvelles propriétés vont échouer, ce qui signifie que ni `pseudo` ni `adresse` ne seront ajoutés à l'objet.

// Enfin, `newObj` est affiché dans la console à l'aide de la méthode `console.log()`. Comme `newObj` n'a pas été modifié avec succès, la console affichera simplement l'objet tel qu'il a été créé par `Object.seal()`.

//-----------------------
// Constructeur
//-----------------------


// En JavaScript, un constructeur est une fonction qui est utilisée pour créer de nouveaux objets. Le constructeur est appelé avec le mot-clé "new", suivi du nom de la fonction, ce qui crée un nouvel objet à partir de la fonction. La fonction elle-même est utilisée pour initialiser les propriétés de l'objet nouvellement créé.




function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
}
// Dans cet exemple, la fonction Personne est utilisée comme constructeur. Elle prend deux paramètres, nom et age, qui sont utilisés pour initialiser les propriétés nom et age de l'objet créé.

// Pour utiliser ce constructeur, vous pouvez créer un nouvel objet à partir de la fonction Personne :



const eva = new Personne("Eva", 20);
// console.log(eva);
const rostand = new Personne("Rostand", 30);

// Dans cet exemple, deux nouveaux objets sont créés à partir de la fonction Personne. Le premier objet eva a le nom "Eva" et l'âge "20", comme spécifié lors de la création de l'objet. Le deuxième objet rostand a le nom "Rostand" et l'âge "30".

// Vous pouvez utiliser les propriétés de ces objets comme suit :



// console.log(eva.nom); // "Eva"
// console.log(eva.age); // 20

// console.log(rostand.nom); // "Rostand"
// console.log(rostand.age); // 30
// Cela vous permet d'accéder et d'utiliser les propriétés que vous avez définies dans le constructeur. Vous pouvez également ajouter des méthodes à votre constructeur pour aider à manipuler les propriétés de l'objet.

// Par exemple, vous pouvez ajouter une méthode parler au constructeur Personne pour que chaque objet créé puisse utiliser cette méthode :



function Personn(nom, age) {
  this.nom = nom;
  this.age = age;
    //Methode
  this.parler = function() {
    // console.log(this.nom + " parle.");
  }
}
// Maintenant, chaque objet créé à partir du constructeur Personne aura une méthode parler qui peut être appelée de la manière suivante :


// eva.parler(); // Eva parle.
// rostand.parler(); // Rostand parle.
// En résumé, un constructeur JavaScript est une fonction utilisée pour créer des objets. Le constructeur est appelé avec le mot-clé "new", suivi du nom de la fonction. La fonction elle-même est utilisée pour initialiser les propriétés de l'objet nouvellement créé. Vous pouvez ajouter des méthodes au constructeur pour aider à manipuler les propriétés de l'objet.

//Les Factory-----------------

// Les Factory functions sont une autre façon de créer des objets en JavaScript. Dans les Factory functions, une fonction retourne un nouvel objet, plutôt que d'utiliser le mot-clé `new`. Voici comment vous pouvez créer des objets avec Factory functions pour les exemples précédents:


function createPersonne(nom, age) {
  return {
    nom: nom,
    age: age,
    parler: function() {
    //   console.log(this.nom + " parle.");
    }
  }
}

// Dans cet exemple, la fonction `createPersonne` crée et retourne un nouvel objet avec les propriétés `nom`, `age` et `parler`. Vous pouvez créer des objets en appelant cette fonction, comme ceci:


const eva1 = createPersonne("Eva1", 20);
const rostand1 = createPersonne("Rostand1", 30);


// Vous pouvez alors utiliser les propriétés et les méthodes de ces objets, exactement de la même manière que pour les objets créés avec un constructeur:


// console.log(eva1.nom); // "Eva1"
// console.log(eva1.age); // 20

// console.log(rostand1.nom); // "Rostand1"
// console.log(rostand1.age); // 30

// eva1.parler(); // Eva1 parle.
// rostand1.parler(); // Rostand1 parle.


// En résumé, la création d'objets avec des Factory functions dans JavaScript est une méthode alternative à l'utilisation de constructeurs. La Factory function retourne un nouvel objet avec des propriétés et des méthodes spécifiées. Vous pouvez créer de nouveaux objets en appelant la fonction et utiliser les propriétés et les méthodes de la même manière que pour les objets créés avec un constructeur.



// Les classes et les méthodes sont une autre façon d'organiser et de définir des objets en JavaScript. Les classes sont des modèles pour créer des objets, tandis que les méthodes sont des fonctions associées à une classe qui peuvent être appelées sur des objets créés à partir de cette classe.

// Voici comment vous pouvez créer une classe `Personne` avec des propriétés `nom`, `age` et une méthode `parler` en utilisant la syntaxe de classe de JavaScript:


class Personne2 {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  parler() {
    // console.log(this.nom + " parle.");
  }
}

// Dans cet exemple, nous avons créé une classe `Personn2` qui a une méthode `constructor` qui prend les paramètres `nom` et `age` et initialise les propriétés correspondantes de l'instance de la classe. Nous avons également ajouté une méthode `parler` à la classe, qui imprime simplement le nom de la personne suivie de "parle".

// Pour créer une instance de la classe `Personne`, nous utilisons le mot-clé `new` et appelons la méthode `constructor` avec les arguments nécessaires:


// var eva = new Personne2("Eva", 20);
// var rostand = new Personne2("Rostand", 30);


// Nous pouvons ensuite utiliser les propriétés et les méthodes de ces objets exactement comme nous le ferions pour les objets créés avec une Factory function ou un constructeur:


// console.log(eva.nom); // "Eva"
// console.log(eva.age); // 20

// console.log(rostand.nom); // "Rostand"
// console.log(rostand.age); // 30

// eva.parler(); // Eva parle.
// rostand.parler(); // Rostand parle.


// En résumé, les classes et les méthodes sont une manière de structurer et de définir des objets en JavaScript. Avec la syntaxe de classe, nous pouvons créer une classe avec des propriétés et des méthodes, puis créer des objets à partir de cette classe en appelant le mot-clé `new`. Les propriétés et les méthodes peuvent être utilisées sur les objets de la même manière que pour les objets créés avec des Factory functions ou des constructeurs.

//------------Héritage en POO JavaScript

// L'héritage est un concept fondamental en programmation orientée objet (POO) qui permet de créer des classes dérivées à partir d'une classe de base parente. Les classes dérivées héritent des propriétés et des méthodes de leur classe parente et peuvent ensuite ajouter ou remplacer ces propriétés et méthodes selon leurs besoins spécifiques. En JavaScript, nous pouvons implémenter l'héritage en utilisant la syntaxe d'objet prototype.

// Voici comment vous pouvez créer une classe de base "Animal" avec une méthode "parler" en utilisant la syntaxe de classe de JavaScript:


class Animal {
  constructor(nom) {
    this.nom = nom;
  }
  
  parler() {
    console.log(`${this.nom} fait du bruit.`);
  }
}


// Dans cet exemple, nous avons créé une classe "Animal" avec un constructeur qui prend un paramètre "nom" et initialise la propriété "nom" de l'instance de la classe. Nous avons également ajouté une méthode "parler" qui imprime simplement le nom de l'animal et "fait du bruit".

// Maintenant, supposons que nous voulions créer une classe dérivée "Chien" qui hérite de la classe "Animal" et ajoute une méthode "aboyer". Voici comment cela pourrait être fait en utilisant la syntaxe de prototype en JavaScript:


class Chien extends Animal {
  constructor(nom) {
    super(nom);
  }
  
  parler() {
    console.log(`${this.nom} aboie.`);
  }
}


// Dans cet exemple, nous avons créé une classe dérivée "Chien" qui étend la classe de base "Animal" en utilisant le mot-clé "extends". Nous avons également redéfini la méthode "parler" pour qu'elle imprime le nom du chien suivi de "aboie". 

// La méthode "constructor" de la classe "Chien" appelle le constructeur de la classe "Animal" en utilisant le mot-clé "super" pour initialiser la propriété "nom" de l'instance de la classe Chien.

// Maintenant, nous pouvons créer des instances de la classe "Chien" comme suit :


let chien = new Chien("Milou");
// chien.parler(); // "Milou aboie."


// Comme vous pouvez le constater, la méthode "parler" de la classe "Chien" remplace la méthode "parler" de la classe "Animal", de sorte que l'appel de cette méthode sur une instance de "Chien" imprime "aboie" au lieu de "fait du bruit".

// En résumé, l'héritage en POO JavaScript nous permet de créer des classes dérivées à partir d'une classe de base parente, ce qui nous permet de réutiliser facilement du code et de créer des objets plus spécialisés. En utilisant la syntaxe de prototype en JavaScript, nous pouvons étendre la classe de base en définissant une nouvelle classe enfant. Les classes dérivées héritent des propriétés et des méthodes de la classe de base, et peuvent ajouter ou remplacer ces propriétés et méthodes selon leurs besoins spécifiques.



class Animal2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    saySomething(text) {
        console.log(`${this.name} dit : ${text}`);
    }
}
// const an = new Animal2("kiki", 12)
// console.log(an);

class Dog extends Animal2 {
    run(){
        console.log("Le chien court !");
    }
}

class Cat extends Animal2 {
    run(){
        console.log("J'ai tué un oiseau !");
    }
}

const kiki = new Dog("doudou", 7);
console.log(kiki);