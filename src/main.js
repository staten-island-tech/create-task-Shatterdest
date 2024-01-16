/* calculator guesser
calculator gui
1. Generate a random #
2. user enters an expression 
3. calculate if expresson === random # 
4. store results 
5. restart 

IF USER WANTS TO CHECK HISTORY ITERATE THRU RESULTS */
const dom = {
    numInput: document.getElementById('number'),
    buttons: document.querySelectorAll('.input'),
}
const results = []

function simulation(results) {
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }
    const randomNum = getRandomIntInclusive(1,18)
    console.log(randomNum)
    for(let i = 0; i < dom.buttons.length; i++) {
        console.log(dom.buttons[i].innerHTML)
        dom.buttons[i].addEventListener('click', (e) => {
            dom.numInput.innerText = dom.numInput.innerText + dom.buttons[i].innerHTML
        })
    }
}

simulation(results)