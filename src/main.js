const dom = {
  numInput: document.getElementById("number"),
  buttons: document.querySelectorAll(".input"),
  randomNumber: document.getElementById("randomNumber"),
  clear: document.getElementById("clear"),
  submit: document.getElementById("submit"),
  results: document.getElementById("results"),
};
const results = [];

function checkProblem(num, input) {
  let inputNum = eval(input);
  dom.randomNum.innerHTML = dom.randomNum.innerHTML.replace("?", inputNum);
  console.log(inputNum, num);
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
  dom.randomNumber.innerHTML = randomNum + " = ?";
}


simulation(results);
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