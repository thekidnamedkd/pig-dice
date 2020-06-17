# Pig Dice

#### _Application for Epicodus {6/17/2020}_

#### By _**{Kevin Davis and Vanessa Guerrero}**_

## Description

This is a program where two users can play [Pig Dice](https://en.wikipedia.org/wiki/Pig_%28dice_game%29) against each other. The goal of this project was for Epicodus students to exercise JavaScript programming skills with constructors, prototypes, objects, properties, methods, jQuery and DOM manipulation and traversal.

## Whiteboard
![image](/./img/pig-dice-whiteboard.jpg)

## Specs

If user 1 hits the "roll" button the program will return a randomized number 1-6 per the user.
  * input: "roll" click
  * output: 5

If user 1 does not roll a 1 and hits the "roll" button again, the progam will continue to return a randomized number 1-6 to the user and add all numbers 2-6 to the user's "turn total".
  * input: "roll" click
  * output: 4 (5+4=9)

If either user rolls a 1, that user will automatically "hold" the value of 0 to their score column and ends turn.
  * input: "roll" click yields 1
  * output: 0 to score column of user

If user 1 hits the "hold" button having not ever rolled a 1 the program will store that current "turn total" to the user's "total score" column.
  * input: "hold" click
  * output: 5 in user 1 column

If user 1 hits the "hold" button, being user 2's turn with "roll" button - see spec 1.
  * input: "roll" click
  * output: 3

If user 2 hits the "hold" button the program will store that current number to the user's "score" column.
  * input: "hold" click
  * output: 3



As turns rotate and users hold dice returns, those number values for each hold add together in the user's score column.
  * input: 3 + 5 + 6
  * output: 14

If either player returns a cumulative score over 100, the game ends with victory for that user.
  * input: score-96 + dice-5
  * output: 101-victory!

If score goes over 100 for either player, a reset button appears.
  * input: 101-victory!
  * output: "reset" click appears


## Setup/Installation Requirements

* Find the repository of this application [here]() and click the green "Clone or Download Folder" to download a zip file with all its contents.
* Once the file is downloaded, open with Visual Studio Code or the text editor of your choice to view the code.
* To view and intereact with the webpage using Visual Studio Code, click on Terminal > New Terminal. Once a terminal opens, type "open index.html" and hit enter. This will open the page onto a browser window.

## Known Bugs

There are no known bugs.

## Support and contact details

For feedback or concerns about this project, please contact one of the conbributors.

## Technologies Used

* HTML
* CSS
* JQuery
* JavaScript
* Bootstrap

### License

* This project is licensed under the MIT License.

Copyright (c) 2020 **_{Kevin Davis, Vanessa Guerrero}_**