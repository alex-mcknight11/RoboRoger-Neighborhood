# _Mr. RoboRoger's Neighborhood_

#### By _**Alex McKnight**_

#### _A Number Input Project_

## Technologies Used

- _JavaScript_
- _HTML_
- _JQuery_

## Description

_A project from Epicodus used to test different number inputs to give a different result. Entering a number from 1 to 100 will give a response from "Mr. RoboRoger" correlating to the number that was put in._

## Setup/Installation Requirements

- _Install Google Chrome browser_
- _Download GitHub file_
- _https://github.com/alex-mcknight11/roboroger_
- _Open folder labeled "RoboRoger-Neighborhood"_
- _Website will open in browser_

## Tests

Describe checkForMatch()

Test: "It should return an array of numbers starting from 0 up to the user's inputed number"
code: let numberArray = [];
	    for (let i = 0; number >= i; i++) {
		  const element = i.toString();
Expected Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

Test: "It should replace the number 1 with "Beep!"
Code: if (element.includes('1')) {
			numberArray.push(' Beep!');
Expected Output: Beep!

Test: "It should replace the number 2 with "Boop!"
Code: if (element.includes('2')) {
			numberArray.push(' Boop!');
Expected Output: Boop!

Test "It should replace the number 3 with "Won't you be my neighbor?"
Code: if (element.includes('3')) {
      numberArray.push('Won't you be my neighbor?');
Expected Output: Won't you be my neighbor?


## Known Bugs

- none at this time

## License

Copyright (c) _6/10/22_ _Alex McKnight_
