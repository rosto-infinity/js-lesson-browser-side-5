const main = document.querySelector("main");
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

let exerciceArray = [];
//localStorage.exercices = JSON.stringify(basicArray);
//Get Stored exercies array
(() => {
  if (localStorage.exercices && typeof localStorage.exercices !== "undefined") {
    exerciceArray = JSON.parse(localStorage.exercices);
  } else {
    console.log("doesn't exist");
    localStorage.exercices = JSON.stringify(basicArray);
    exerciceArray = basicArray;
  }
})();

class Exercice {
  constructor() {
    this.index = 0;
    this.minutes = exerciceArray[this.index].min;
    this.seconds = 0;
  }
  updateCountDown() {
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    console.log("pass");
    setTimeout(() => {
      if (this.minutes === 0 && this.seconds == "00") {
        this.index++;
      } else if (this.seconds === "00") {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
        this.updateCountDown();
      }
    }, 10);
    console.log(this.seconds);

    main.innerHTML = `
        <div class = "exercice-container">
            <p>${this.minutes}:${this.seconds}</p>
            <img src = "./img/${exerciceArray[this.index].pic}.png">
            <div>${this.index + 1}/${exerciceArray.length}</div>

        </div>
        `;
  }
}

const utils = {
  pageContent: function (title, content, btn) {
    document.querySelector("H1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
  handleEventMinutes: function () {
    document.querySelectorAll(`input[type="number"]`).forEach((input) => {
      input.addEventListener("input", (e) => {
        exerciceArray.map((exo) => {
          if (exo.pic == e.target.id) {
            exo.min = parseInt(e.target.value);
          }
        });
        utils.store(exerciceArray);
      });
    });
  },
  handleEventArrow: function () {
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        let position = 0;
        exerciceArray.map((exo) => {
          if (e.target.dataset["pic"] == exo.pic && position !== 0) {
            [exerciceArray[position], exerciceArray[position - 1]] = [
              exerciceArray[position - 1],
              exerciceArray[position],
            ];
            page.lobby();
          } else {
            position += 1;
            console.log(position);
          }
        });
      });
    });
    utils.store(exerciceArray);
  },
  deleteItem: function () {
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let newArray = [];
        exerciceArray.map((exo) => {
          if (exo.pic != e.target.dataset.pic) {
            newArray.push(exo);
          }
        });
        exerciceArray = newArray;
        page.lobby();
      });
    });
    utils.store(exerciceArray);
  },
  reboot: function () {
    exerciceArray = basicArray;
    page.lobby();
    utils.store(exerciceArray);
  },
  store: function (data) {
    console.log(data);
    localStorage.exercices = JSON.stringify(data);
  },
};

const page = {
  lobby: function () {
    let mapArray = exerciceArray.map(
      (exo) =>
        `
            <li>
                <div class = 'card-header'>
                    <input type = "number" id= ${exo.pic} min="1" max="10" value=${exo.min}>
                    <span>min</span>
                </div>
                <img src= "./img/${exo.pic}.png">
                <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
                <i class = "fas fa-times-circle deleteBtn" data-pic = ${exo.pic}></i>
            </li>
          `
    );
    utils.pageContent(
      "Paramétrage <i id = 'reboot' class = 'fas fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",
      "<button id = 'start'> Commmencer<i class ='far fa-play-circle></i></button>"
    );
    utils.handleEventMinutes();
    utils.store();
    utils.handleEventArrow();
    utils.deleteItem();
    reboot.addEventListener("click", () => utils.reboot());
    start.addEventListener("click", () => this.routine());
  },
  routine: function () {
    const exercice = new Exercice();

    utils.pageContent("Routine", exercice.updateCountDown(), null);
  },
  finish: function () {
    utils.pageContent(
      "C'est Terminé",
      "<button id ='start'> Recommencer </button>",
      "<button id = 'reboot' class = 'btn-reboot'> Réinitialiser <i class='fasfa-times-circle'></i></button>"
    );
  },
};

//document.querySelector("h1").textContent = "Bonjour";
page.lobby();
