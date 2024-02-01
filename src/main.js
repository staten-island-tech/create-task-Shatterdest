const dom = {
  numInput: document.getElementById("number"),
  buttons: document.querySelectorAll(".input"),
  randomNumber: document.getElementById("randomNumber"),
  clear: document.getElementById("clear"),
  submit: document.getElementById("submit"),
  results: document.getElementById("results"),
};
const results = [];

function simulation(results) {
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
      dom.randomNumber.innerHTML += " TRUE";
      dom.results.insertAdjacentHTML(
        "beforeend",
        `<h1>${dom.randomNumber.innerHTML}</h1>`
      );
      newNumber();
    } else {
      console.log("GO BACK TO 5THG RADE");
      dom.randomNumber.innerHTML += " FALSE";
      dom.results.insertAdjacentHTML(
        "beforeend",
        `<h1>${dom.randomNumber.innerHTML}</h1>`
      );
      newNumber();
    }
  }
}

simulation(results);
