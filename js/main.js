//Assign all playable cells to an array
let squares = document.querySelectorAll('.play')
let turnCounter = 0;

//Listen for user click on playable square and assign that square 'X'
squares.forEach(node => {
    node.addEventListener('click', e => {
        //Fill square if not yet played
        if( e.currentTarget.innerText === ''){
            e.currentTarget.innerText = 'X'
            turnCounter++
            //Player 2 goes as long as board is not filled
            if( turnCounter <5){
                playerTwoGoes();
            }
            //Check for board status/results after turn
            results()
        }
    })
})

//Computer turn
const playerTwoGoes = () => {
    //Look for a square on the board that is not yet in play and then assign it 'O'
    let computerTurn
    do{
        computerTurn = Math.ceil(Math.random()*9)
    } while (document.getElementById(`${computerTurn}`).innerText !== '')
    document.getElementById(`${computerTurn}`).innerText = 'O'
}

//Announce results
const results = () => {
    //Declare winner when 3-in-row is met
    //Horizontal
    if (document.getElementById('1').innerText === 'X' && document.getElementById('2').innerText === 'X' && document.getElementById('3').innerText === 'X'){
        document.querySelector('.result').innerText = "You Win! Try again."
    } else if (document.getElementById('4').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('6').innerText === 'X'){
        document.querySelector('.result').innerText = "You Win! Try again."
    } else if (document.getElementById('7').innerText === 'X' && document.getElementById('8').innerText === 'X' && document.getElementById('9').innerText === 'X'){
        document.querySelector('.result').innerText = "You Win! Try again."
    //Diagonal
    } else if (document.getElementById('1').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('9').innerText === 'X'){
        document.querySelector('.result').innerText = "You Win! Try again."
    } else if (document.getElementById('3').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('7').innerText === 'X'){
        document.querySelector('.result').innerText = "You Win! Try again."
    //Vertical
    } else if (document.getElementById('1').innerText === 'X' && document.getElementById('4').innerText === 'X' && document.getElementById('7').innerText === 'X'){
        document.querySelector('.result').innerText = "You Win! Try again."
    } else if (document.getElementById('2').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('8').innerText === 'X'){
        document.querySelector('.result').innerText = "You Win! Try again."
    } else if (document.getElementById('3').innerText === 'X' && document.getElementById('6').innerText === 'X' && document.getElementById('9').innerText === 'X'){
        document.querySelector('.result').innerText = "You Win! Try again."
    //Lose
    } else if (document.getElementById('1').innerText === 'O' && document.getElementById('2').innerText === 'O' && document.getElementById('3').innerText === 'O'){
        document.querySelector('.result').innerText = "You Lose! Try again."
    } else if (document.getElementById('4').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('6').innerText === 'O'){
        document.querySelector('.result').innerText = "You Lose! Try again."
    } else if (document.getElementById('7').innerText === 'O' && document.getElementById('8').innerText === 'O' && document.getElementById('9').innerText === 'O'){
        document.querySelector('.result').innerText = "You Lose! Try again."
    //Diagonal
    } else if (document.getElementById('1').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('9').innerText === 'O'){
        document.querySelector('.result').innerText = "You Lose! Try again."
    } else if (document.getElementById('3').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('7').innerText === 'O'){
        document.querySelector('.result').innerText = "You Lose! Try again."
    //Vertical
    } else if (document.getElementById('1').innerText === 'O' && document.getElementById('4').innerText === 'O' && document.getElementById('7').innerText === 'O'){
        document.querySelector('.result').innerText = "You Lose! Try again."
    } else if (document.getElementById('2').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('8').innerText === 'O'){
        document.querySelector('.result').innerText = "You Lose! Try again."
    } else if (document.getElementById('3').innerText === 'O' && document.getElementById('6').innerText === 'O' && document.getElementById('9').innerText === 'O'){
        document.querySelector('.result').innerText = "You Lose! Try again."
    //Declare tie if max turn occurred without winner
    } else if (turnCounter === 5){
        document.querySelector('.result').innerText = "Tied! Try again."
    }
}

//Reset all squares
const resetBoard = () => squares.forEach(node => {
    console.log(node)
    node.innerText = ""
    turnCounter = 0
    document.querySelector('.result').innerText = ""
})
document.querySelector('button').addEventListener('click', resetBoard)
