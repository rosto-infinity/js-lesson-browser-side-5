const main = document.querySelector("main");
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
let exerciseArray = [];

// anonymous function - get stored exercises array
// ce lance 1 fois seulement au lancement de la page
(() => {
  if (localStorage.exercises) {
    exerciseArray = JSON.parse(localStorage.exercises);
  } else {
    exerciseArray = basicArray;
  }
})();

//---------------------------------------------

class Exercise {
  constructor() {
    this.index = 0;
    this.minutes = exerciseArray[this.index].min;
    this.seconds = 0;
  }

  updateCountdown() {
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    // compte à rebours
    setTimeout(() => {
      if (this.minutes === 0 && this.seconds === "00") {
        this.ring();
        this.index++;
        // 'if' ça continue, car on a encore des photos à faire passer
        if (this.index < exerciseArray.length) {
          this.minutes = exerciseArray[this.index].min;
          this.seconds = 0;
          this.updateCountdown(); // récursive
        } else {
          return page.finish(); // quand c'est terminé
        }
      } else if (this.seconds === "00") {
        this.minutes--;
        this.seconds = 59;
        this.updateCountdown(); // récursive
      } else {
        this.seconds--;
        this.updateCountdown(); // récursive
      }
    }, 1000);

    return (main.innerHTML = `
     <div class="exercice-container">
     <p>${this.minutes}:${this.seconds}</p>
     <img src="./img/${exerciseArray[this.index].pic}.png" />
     <div>${this.index + 1}/${exerciseArray.length}</div>
     </div>
     `);
  }

  // on instancie un objet natif Audio() qu'on appel audio, et on donne une source à cet audio
  ring() {
    const audio = new Audio();
    audio.src = "ring.mp3";
    audio.play();
  }
}

//---------------------------------------------
// methode DRY
const utils = {
  // sous-entend en paramètre h1, main, btn-container)
  // utils.pageContent(paramétrage) , sur la page routine je te passe le titre routine, et finish le titre: c'est terminé
  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
  // on se récupère l'évènement à l'input
  // on pointe tous les inputs de type number de la page (10), on dit pour chacun d'eux, je te fais un évènement
  // parseInt() transforme string to number
  handleEventMinutes: function () {
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.addEventListener("input", (e) => {
        exerciseArray.map((exo) => {
          if (exo.pic == e.target.id) {
            exo.min = parseInt(e.target.value);
            // console.log(exerciseArray);
            this.store(); // il faut se stocker le changement de minutes
          }
        });
      });
    });
  },

  handleEventArrow: function () {
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        let position = 0;
        exerciseArray.map((exo) => {
          if (exo.pic == e.target.dataset.pic && position != 0) {
            // on trouve la position de l'élément et on intervertit avec l'élément en dessous de lui (dans un tableau)
            [exerciseArray[position], exerciseArray[position - 1]] = [
              exerciseArray[position - 1],
              exerciseArray[position],
            ];
            // console.log(exerciseArray);
            // au clique un nouveau map est fait
            page.lobby();
            this.store();
          } else {
            position++;
          }
        });
      });
    });
  },

  deleteItem: function () {
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let newArr = [];
        exerciseArray.map((exo) => {
          if (exo.pic != e.target.dataset.pic) {
            newArr.push(exo);
          }
        });
        exerciseArray = newArr;
        // console.log(newArr);
        page.lobby();
        this.store();
      });
    });
  },

  reboot: function () {
    // si jamais on te reboot, tu réccupéres basicArray
    exerciseArray = basicArray;
    // actualiser le map, remettre les éléments
    page.lobby();
    // quand on fait un reboot, on veut restocker le nouveau tableau. 'this' car on est dans l'objet utils
    this.store();
  },

  store: function () {
    // exercises est crée dans le navigateur de l'utilisateur pour stocker les choses
    localStorage.exercises = JSON.stringify(exerciseArray);
  },
};

//---------------------------------------------
const page = {
  lobby: function () {
    let mapArray = exerciseArray
      .map((exo) => {
        return `
        <li>
            <div class="card-header">
              <input type="number" id=${exo.pic} min="1" max="10" value=${exo.min}>
              <span>min</span>
            </div>
            <img src="./img/${exo.pic}.png" />
            <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
            <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>

        </li>
        `;
      })
      .join("");

    utils.pageContent(
      "Paramètrage <i id='reboot' class='fas fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
    );
    utils.handleEventMinutes();
    utils.handleEventArrow();
    utils.deleteItem();
    reboot.addEventListener("click", () => utils.reboot());
    start.addEventListener("click", () => this.routine());
  },

  routine: function () {
    const exercise = new Exercise();
    // utils.pageContent("Routine", "Exercise avec chrono", null);
    utils.pageContent("Routine", exercise.updateCountdown(), null);
  },

  finish: function () {
    utils.pageContent(
      "C'est terminé !",
      "<button id='start'>Recommencer</button>",
      "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='fas fa-times-circle'></i></button>",
      null
    );

    // quand on appuie sur start, on relance la routine
    // reboot - on repart à zéro
    start.addEventListener("click", () => this.routine());
    reboot.addEventListener("click", () => utils.reboot());
  },
};

page.lobby();

//---------------------------------------------
// const page = {
//   // pointer notre h1, injecter à l'intérieur balise <i>
//   lobby: function () {
//     document.querySelector("h1").innerHTML =
//       "Paramètrage <i id='reboot' class='fas fa-undo'></i>";
//     main.innerHTML = "Exercises";
//     document.querySelector(".btn-container").innerHTML =
//       "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>";
//   },
//   // autre page
//   page: function () {},
//   // dernière page
//   finish: function () {},
// };

// page.lobby();
