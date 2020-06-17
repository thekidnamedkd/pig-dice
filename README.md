# Pig Dice

#### A program where two users can play Pig Dice against each other, {6/17/2020}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Specs

If user 1 hits the "roll" button the program will return a randomized number 1-6 per the user.
  * input: "roll" click
  * output: 5

If user 1 hits the "hold" button the program will store that current number to the user's "score" column.
  * input: "hold" click
  * output: 5 in user 1 column

If user 1 hits the "hold" button, being user 2's turn with "roll" button - see spec 1.
  * input: "roll" click
  * output: 3

If user 2 hits the "hold" button the program will store that current number to the user's "score" column.
  * input: "hold" click
  * output: 3

If either user rolls a 1, that user automatically "holds" the value of 0 to their score column and ends turn.
  * input: "roll" click yields 1
  * output: 0 to score column of user

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

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**