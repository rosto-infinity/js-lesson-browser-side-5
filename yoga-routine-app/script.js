// const main = document.querySelector("main");
// const basicArray = [
//   { pic: 0, min: 1 },
//   { pic: 1, min: 1 },
//   { pic: 2, min: 1 },
//   { pic: 3, min: 1 },
//   { pic: 4, min: 1 },
//   { pic: 5, min: 1 },
//   { pic: 6, min: 1 },
//   { pic: 7, min: 1 },
//   { pic: 8, min: 1 },
//   { pic: 9, min: 1 },
// ];

// class Exercice{}

// // toutes les fonctions qui seront utiles au projet
// const utils ={
//     pageContent: function (title, content, btn){},
//     handleEventMinutes: function (){},
//     handleEventArrow: function (){},
//     reboot: function (){},
//     store: function (){},

// }

// const page ={
//     loby: function(){},
//     routine: function (){},
//     finish: function (){}
// }
// Le script Javascript ci-dessus comporte plusieurs éléments, décrits ci-dessous :

// 1. La première ligne de code qui déclare une constante "main" qui fait référence à l'élément HTML "main" de la page :
// ```const main = document.querySelector("main");```
// Cette ligne permet de retrouver et de stocker dans la variable "main" l'élément HTML "main" de la page, qui sera utilisé plus tard pour afficher et masquer des éléments.

// 2. La deuxième ligne de code qui déclare une constante "basicArray" qui contient un tableau d'objets :
// ```const basicArray = [ ... ];```
// Ce tableau d'objets est utilisé pour stocker des informations sur des images, avec chaque objet contenant deux propriétés : "pic" pour l'indice de l'image dans un autre tableau d'images, et "min" pour le temps minimum en secondes que l'utilisateur doit passer à regarder cette image.

// 3. Une classe "Exercice" est déclarée mais non utilisée dans ce script.

// 4. Le reste du code est constitué de deux objets :

// - L'objet "utils" qui contient plusieurs fonctions qui seront utilisées tout au long du projet pour gérer différents aspects de l'interface utilisateur, notamment pour charger du contenu HTML, ajouter des événements, réinitialiser l'application et stocker des données.

// - L'objet "page" qui contient également plusieurs fonctions pour gérer l'affichage des différentes pages de l'application, y compris la page d'accueil, la page principale d'exercice et la page de fin. Ces fonctions se basent sur le contenu HTML généré par les fonctions de l'objet "utils" pour afficher les éléments nécessaires à chaque étape du processus.

// En résumé, ce script Javascript met en place une structure d'application pour un exercice qui consiste à regarder des images pendant une certaine période de temps. Il utilise des tableaux d'objets pour stocker des données sur les images et des objets pour gérer l'interface utilisateur.



const main = document.querySelector("main");
const h1= document.querySelector("h1");
const bouton =document.querySelector(".btn-container");
// Variable qui sert à stocker tous les exercises

const basicArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];

class Exercice{};

// toutes les fonctions qui seront utiles au projet
const utils ={
    pageContent: function (title, content, btn){
        h1.innerHTML = title;
        main.innerHTML = content;
        bouton.innerHTML = btn;
    },
    handleEventMinutes: function (){},
    handleEventArrow: function (){},
    reboot: function (){},
    store: function (){},
};

const page ={
    lobby: function(){
        utils.pageContent(
            "Paramétrage <i id = 'reboot' class = 'fas fa-undo'></i>",
            "Exercice",
            "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
          );
    },
    routine: function (){},
    finish: function (){}
};
page.lobby();