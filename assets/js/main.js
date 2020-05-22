//Declare Global Variables
const numberOfDice = document.querySelector('#numberOfDice');
const diieSides = document.querySelector('#diceSides')
const rollButton = document.querySelector('#rollButton');
const showRollsButton = document.querySelector('#showRollsButton');
const resetButton = document.querySelector('#resetButton');
let totalRolled = document.querySelector('#totalRolled');
let allRolls = document.querySelector('#allRollsList');
let dieRolls = [];
let numberRolled;

//Event Listener for Roll Dice
rollButton.addEventListener('click', function() {
    dieRolls = []; //Make sure array is empty
    diceCount = Number(numberOfDice.value);
    sides = Number(dieSides.value);
    //Check if user entered a number
    if ((diceCount < 1 || !diceCount) || (sides < 1 || !sides)) { 
        //No die rolled.. Alert User
        alert('You must roll at least 1 die');
    } else {
        //Die Rolled.. Proceed
        let ctr = 1; //Initialize Counter
        let sum = 0;
        while (ctr <= diceCount) {
            //Roll Dies
            numberRolled = Math.floor(Math.random() * sides) + 1;
            //Add Results to Array
            dieRolls.push(numberRolled);
            //Increase Counter
            ctr++;
            sum = sum + numberRolled;
        }
        //Display sum
        totalRolled.innerHTML = sum;
        //Clear all results if any
        allRolls.innerHTML = '';
    }
})

//Event Listener for Show Results
showRollsButton.addEventListener('click', function() {
    allRolls.innerHTML = '';
    let ctr = 0;
    while (ctr < dieRolls.length) {
        allRolls.innerHTML += '<li>' + dieRolls[ctr] + '</li>';
        ctr++;
    }
})

//Reset Button Event Listener
resetButton.addEventListener('click', function() {
    dieRolls = [];
    allRolls.innerHTML = '';
    totalRolled.innerHTML = '';
    numberOfDice.value = '';
    dieSides.value = '';
    numberOfDice.focus();
})