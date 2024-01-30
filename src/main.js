const dom = {
  numInput: document.getElementById("number"),
  buttons: document.querySelectorAll(".input"),
  randomNum: document.getElementById("randomNum"),
  clear: document.getElementById("clear"),
  submit: document.getElementById("submit"),
  results: document.getElementById("results"),
};
const results = [];
function removeListeners() {
  dom.buttons.forEach((item) => {
    item.removeEventListener("click", (e) => {
      dom.numInput.innerText =
        dom.numInput.innerText + dom.buttons[i].innerHTML;
    });
  });
  dom.clear.removeEventListener("click", (e) => {
    dom.numInput.innerText = "";
  });
  document.submit.removeEventListener("click", (e) => {
    checkProblem(randomNum, dom.numInput.innerText);
  });
}
function checkProblem(num, input) {
  let inputNum = eval(input);
  dom.randomNum.innerHTML = dom.randomNum.innerHTML.replace("?", inputNum);
  console.log(inputNum);
  if (num === inputNum) {
    console.log("GOOD JOB ");
    dom.randomNum.innerHTML += " TRUE";
    dom.results.insertAdjacentHTML(
      "beforeend",
      `<h1>${dom.randomNum.innerHTML}</h1>`
    );
    simulation(results);
  } else {
    console.log("GO BACK TO 5THG RADE");
    dom.randomNum.innerHTML += " FALSE";
    dom.results.insertAdjacentHTML(
      "beforeend",
      `<h1>${dom.randomNum.innerHTML}</h1>`
    );
    simulation(results);
  }
}
function simulation(results) {
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomNum = getRandomIntInclusive(1, 18);
  dom.randomNum.innerHTML = randomNum + " = ?";
  dom.buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
      dom.numInput.innerText =
        dom.numInput.innerText + dom.buttons[i].innerHTML;
    });
  });
  dom.clear.addEventListener("click", (e) => {
    dom.numInput.innerText = "";
  });
  dom.submit.addEventListener("click", (e) => {
    checkProblem(randomNum, dom.numInput.innerText);
  });
}

simulation(results);
