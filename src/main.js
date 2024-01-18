const dom = {
  numInput: document.getElementById("number"),
  buttons: document.querySelectorAll(".input"),
  randomNum: document.getElementById("randomNum"),
  clear: document.getElementById("clear"),
  submit: document.getElementById("submit"),
};
const results = [];
function checkProblem(num, input) {
  let inputNum = eval(input);
  dom.randomNum.innerHTML = dom.randomNum.innerHTML.replace('?', inputNum)
  console.log(inputNum);
  if (num === inputNum) {
    console.log("GOOD JOB ");
    dom.randomNum.innerHTML += ' TRUE'
  } else {
    console.log("GO BACK TO 5THG RADE");
    om.randomNum.innerHTML += ' FALSE'
  }
}
function simulation(results) {
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomNum = getRandomIntInclusive(1, 18);
  dom.randomNum.innerHTML = randomNum + ' = ?';
  for (let i = 0; i < dom.buttons.length; i++) {
    console.log(dom.buttons[i].innerHTML);
    dom.buttons[i].addEventListener("click", (e) => {
      dom.numInput.innerText =
        dom.numInput.innerText + dom.buttons[i].innerHTML;
    });
  }
  dom.clear.addEventListener("click", (e) => {
    dom.numInput.innerText = "";
  });
  dom.submit.addEventListener("click", (e) => {
    checkProblem(randomNum, dom.numInput.innerText);
  });
}

simulation(results);
