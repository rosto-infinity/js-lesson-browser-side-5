let obj ={
    //index:valeur
    pseudo:"rostodev",
    ville: "Bafoussam",
    admin:true,
    direBonjour : function (){
    console.log("Bonjour je suis à " +this.ville)
}
}
console.log(obj.direBonjour());
 

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




