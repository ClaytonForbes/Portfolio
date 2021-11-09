// we start by collecting all the divs called square from the html and  named square for our JS, using :
const square = document.querySelectorAll('.square')// learn what is querySelectorALl
//then we do the same for the mole 
const mole = document.querySelectorAll('.mole')
// AND FOR TIME LEFT USING querySelector we use # because it is an Id  to keep track of the id
const timeLeft = document.querySelector('#time-left')
//  we use let for the score because this varibale will change
let score = document .querySelector('#score')

//Creating the function for the game
let result = 0 
let currentTime = timeLeft.textContent

// we will start by removing any class from divs to do this :
// we need to creat e a function 
//Step one is to make a fucntion that randomly slectors a square on the grid
function randomSquare(){// start by removing any class from divs
    //using an arrow function and a foreach we romove class name for all of our square on the grid
    // and arrow function is another way to make a function. 
    // instead of using the key word function I used the => to create a function instead of 
    /*sqaure.forEach function  nameOfFunction(){
        className.classList.remove('mole')
    forEach is a loop in an Array method that execute a custom callback function on each item an array
    
    }
    */
    square.forEach(className => {
        className.classList.remove('mole')
    })
    //now we use math random to define a randomw postion on the grid
    let randomPosition = square[Math.floor(Math.random()*9)]// we use math floor to round to the nearest whole number so that it is already equal to 9
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPostion for us to use later hit postion for us to use later
     hitPosition = randomPosition.id


}
square.forEach(id => {
    id.addEventListener('mouseup', () =>{
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

 moveMole()

 function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
   
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('GAME OVER! Your final score is ' + result)
    }
 }
 let countDownTimerId = setInterval(countDown, 1000)
