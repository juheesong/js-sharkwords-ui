const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  // Replace this with your code
  // <div class="letter-box a"></div>
  // for (const ch in word) {
  //   const newDiv = document.createElement("div");    
  // }
  // const divContainer = document.createElement("div");  
  // newDiv.classList.add('word-container')  
  const wordContainer = document.getElementById('word-container')
  // console.log(wordContainer)
  for (const ch of word) {
    // console.log(`<div class="letter-box ${ch}"></div>`)
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${ch}"></div>`)    
  }
  
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  // Replace this with your code
  const letterButtons = document.getElementById('letter-buttons') 
  for (const letter of ALPHABET) {
    // console.log(letter)
    letterButtons.insertAdjacentHTML('beforeend', `<button class="letter-box">${letter}</button>`)    
  }
  
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
// //
// const disableLetterButton = (buttonEl) => {
//   const abutton = document.querySelector() 

const disableLetterButton = (evt) => {
  // Disable the button
  // You can disable an element by setting the "disabled" attribute to true
  // console.log(buttonEl)
  evt.target.disabled = true; 

  // <button type="button" disabled>Click Me!</button>
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  // Replace this with your code
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // Fxor now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';
  createDivsForChars(word);
  generateLetterButtons();

  const allButtons = document.querySelectorAll('button.letter-box')
  for (const button of allButtons) {
    button.addEventListener('click', disableLetterButton)
  }


  
  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call

  // call the function that makes a button for each letter in the alphabet
  // Replace this line with the function call

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
