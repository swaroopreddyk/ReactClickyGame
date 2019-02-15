<h1>Memory Game</h1>

Live version: https://swaroopreddyk.github.io/memory-game/
https://shrouded-sands-36115.herokuapp.com/

<hr></hr>

Author: Swaroop Kondreddy

Feel free to use some or all of this code if you're trying to complete a similar project.

<hr></hr>

<h3> App screenshot </h3>

![alt text]( "Memory Game")

<h2> Project overview</h2>
This is a simple memory game created with React. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order. Once the user's score is reset after an incorrect guess, the game should restart.

<hr></hr>

<h2>Technology used</h2>

[Node.js](https://nodejs.org/en/)

[React](https://reactjs.org/)

<hr></hr>

<h2>How it works</h2>

- The application renders 15 different French Bulldog images.

- Pictures are shuffled each time a user clicks an image. The task for the user is to click on each image once and only once.

- The application keeps track of the user's score. Correct Guesses score is incremented each time the user clicks on an image for the first time in the current round.

- Correct guesses score is reset to 0, if the user clicks on an image they're already clicked on in the current round.

- The application keeps track of the users Best Score, and updates it when the user achieves a new Best Score.
