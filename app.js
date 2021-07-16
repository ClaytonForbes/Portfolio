document.addEventListener('DOMContentLoaded', () => {
    //card options make an array to hold the cards for the grid.
   const cardArray = [
       {
           name:'pic1',
           img:'images/pic1.jpeg'
       },
       {
           name:'pic1',
           img:'images/pic1.jpeg'
       },
        {
           name:'pic2',
           img:'images/pic2.jpeg'
       },
        {
           name:'pic2',
           img:'images/pic2.jpeg'
       },
        {
           name:'pic3',
           img:'images/pic3.jpg'
       },
        {
           name:'pic3',
           img:'images/pic3.jpg'
       },
        {
           name:'pic4',
           img:'images/pic4.jpg'
       },
        {
           name:'pic4',
           img:'images/pic4.jpg'
       },
        {
           name:'pic5',
           img:'images/pic5.jpg'
       },
        {
           name:'pic5',
           img:'images/pic5.jpg'
       },
        {
           name:'pic6',
           img:'images/pic6.jpeg'
       },
        {
           name:'pic6',
           img:'images/pic6.jpeg'
       },
        
   ]
   
   cardArray.sort(() => 0.5 - Math.random())
   
   const grid = document.querySelector('.grid')
   const resultDisplay = document.querySelector('#result')
   var cardsChosen = []
   var cardsChosenId =[]
   var cardsWon = []
   
   
   //create game board 
   
   function createBoard() {
       for(let i = 0; i <cardArray.length; i++) {
           var card = document.createElement('img')
           card.setAttribute('src', 'images/blank.jpg')
           card.setAttribute('data-id', i)
           card.addEventListener('click', flipCard)
           grid.appendChild(card)
       }
   }
   
   
   //check for matches
   function checkForMatch() {
       var cards = document.querySelectorAll('img')
       const optionOneId = cardsChosenId[0]
       const optionTwoId = cardsChosenId[1]
       if (cardsChosen[0] === cardsChosen[1]) {
           alert('You got one dude')
           cards[optionOneId].setAttribute('src', 'images/grey.jpg')
           cards[optionTwoId].setAttribute('src', 'images/grey.jpg')
           cardsWon.push(cardsChosen)
            }else{
           cards[optionOneId].setAttribute('src', 'images/blank.jpg')
           cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
           alert('Sorry, try again Mate')
       }
       cardsChosen = []
       cardsChosenId = [                                                                                        ]
       resultDisplay.textContent = cardsWon.length
       if(cardsWon.length === cardArray.length/2 ) {
           resultDisplay.textContent = 'You did it'
       }
       
   }
   
   
   // flip your card 
   function flipCard() {
       var cardId = this.getAttribute('data-id')
       cardsChosen.push(cardArray[cardId].name)
       cardsChosenId.push(cardId)
       this.setAttribute('src', cardArray[cardId].img)
       if ( cardsChosen.length === 2) {
           setTimeout(checkForMatch, 500)
       }
   }
   
  createBoard()
   
   
   
})