const dom = {
  numInput: document.getElementById("number"),
  buttons: document.querySelectorAll(".input"),
  randomNumber: document.getElementById("randomNumber"),
  clear: document.getElementById("clear"),
  submit: document.getElementById("submit"),
  results: document.getElementById("results"),
  history: document.getElementById("show"),
};
const answers = [];

function simulation() {
  let randomNum;
  dom.buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
      dom.numInput.innerText = dom.numInput.innerText + item.innerHTML;
    });
  });
  dom.clear.addEventListener("click", (e) => {
    dom.numInput.innerText = "";
  });
  dom.submit.addEventListener("click", (e) => {
    checkProblem(randomNum, dom.numInput.innerText);
  });
  dom.history.addEventListener("click", (e) => {
    console.log(dom.history.value);
    if ((dom.history.value === "show")) {
      console.log("showign")
      answers.forEach((item) => {
        dom.results.insertAdjacentHTML("beforeend", `<h1>${item}</h1>`);
      });
      dom.history.value = "hide";
      dom.history.innerText = 'showing history'
    } else if ((dom.history.value === "hide")) {
      console.log("hiding")
      dom.results.innerHTML = ''
      dom.history.value = "show";
      dom.history.innerText = 'hiding history'
    }
  });
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function newNumber() {
    const num = getRandomIntInclusive(1, 18);
    dom.randomNumber.innerHTML = num + " = ?";
    randomNum = num;
  }
  newNumber();

  function checkProblem(num, input) {
    let inputNum = eval(input);
    dom.randomNumber.innerHTML = dom.randomNumber.innerHTML.replace(
      "?",
      inputNum
    );
    console.log(inputNum, num);
    if (num === inputNum) {
      console.log("GOOD JOB ");
      answers.push((dom.randomNumber.innerHTML += " TRUE"));
      dom.numInput.innerText = "";
      newNumber();
    } else {
      console.log("GO BACK TO 5THG RADE");
      answers.push((dom.randomNumber.innerHTML += " FALSE"));
      dom.numInput.innerText = "";
      newNumber();
    }
  }
}

simulation(results);
