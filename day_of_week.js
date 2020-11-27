// Created By: Jacob Bonner
// Created On: November 2020
// This program tells the user the day of the
//   week based on a date the user inputs.

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// This function finds the day of the week based on a date the user inputs.
function findWeekday(date, month, year, centuryCode, addingNumber) {
  // Calculating the first number for the century code
  var firstVariable = 0;
  if (centuryCode % 4 == 0) {
    firstVariable = 2;
  } else if (centuryCode % 4 == 1) {
    firstVariable = 0;
  } else if (centuryCode % 4 == 2) {
    firstVariable = 5;
  } else if (centuryCode % 4 == 3) {
    firstVariable = 3;
  } else {
    console.log("ERROR");
  }

  // Calculating the second variable
  var secondVariable = Math.floor(addingNumber / 12);

  // Calculating the third variable
  var thirdVariable = addingNumber % 12;

  // Calculating the fourth variable
  var fourthVariable = Math.floor(thirdVariable / 4);

  // Calculating final variable and reducing it to find the doomsday
  var fifthVariable = firstVariable + secondVariable 
                      + thirdVariable + fourthVariable;

  while (fifthVariable > 6) {
    fifthVariable = fifthVariable - 7;
  }

  // Finding the doomsday based on the month
  var doomsdayDate = 0;
  switch (month) {
    case 1:
      if (year % 4 == 0) {
        doomsdayDate = 4;
      } else {
        doomsdayDate = 3;
      }
      break;
    case 2:
      if (year % 4 == 0) {
        doomsdayDate = 29;
      } else {
        doomsdayDate = 28;
      }
      break;
    case 3:
      doomsdayDate = 14;
      break;
    case 4:
      doomsdayDate = 4;
      break;
    case 5:
      doomsdayDate = 9;
      break;
    case 6:
      doomsdayDate = 6;
      break;
    case 7:
      doomsdayDate = 11;
      break;
    case 8:
      doomsdayDate = 8;
      break;
    case 9:
      doomsdayDate = 5;
      break;
    case 10:
      doomsdayDate = 10;
      break;
    case 11:
      doomsdayDate = 7;
      break;
    case 12:
      doomsdayDate = 12;
      break;
    default:
      doomsdayDate = 0;
  }

  // This block finds a numeric value for the day of the week
  if (date < doomsdayDate) {
    while (date < doomsdayDate) {
      if (fifthVariable <= 0) {
        fifthVariable = 6;
        date = date + 1;
      } else {
        fifthVariable = fifthVariable - 1;
        date = date + 1;
      }
    }
  } else if (date > doomsdayDate) { 
    while (date > doomsdayDate) {
      if (fifthVariable >= 6) {
        fifthVariable = 0;
        date = date - 1;
      } else {
        fifthVariable = fifthVariable + 1;
        date = date - 1;
      }
    }
  } else {
    console.log("ERROR");
  }

  // This block finds the day of the week and returns its value
  var weekDayReturn = null;
  switch (fifthVariable) {
    case 0:
      weekDayReturn = "Sunday";
      break;
    case 1:
      weekDayReturn = "Monday";
      break;
    case 2:
      weekDayReturn = "Tuesday";
      break;
    case 3:
      weekDayReturn = "Wednesday";
      break;
    case 4:
      weekDayReturn = "Thursday";
      break;
    case 5:
      weekDayReturn = "Friday";
      break;
    case 6:
      weekDayReturn = "Saturday";
      break;
    default:
      weekDayReturn = null;
  }
  return weekDayReturn;
}

try {
  // Input for the date number
  var dateInput = prompt("Enter the date number: ");
  console.log();

  // Input for the month number
  var monthInput = prompt("Enter the month (number): ");
  console.log();

  // Input for the year
  var yearInput = prompt("Enter the year (four numbers): ");
  console.log();

  // Process
  // Splitting the year string in half to make for easier calculations
  var firstHalfYearStr = yearInput.slice(0, 2);
  var secondHalfYearStr = yearInput.slice(2, 4);

  // Ensuring all the variables are passed as integers
  var userDate = parseInt(dateInput, 10);
  var userMonth = parseInt(monthInput, 10);
  var userYear = parseInt(yearInput, 10);
  var firstHalfYear = parseInt(firstHalfYearStr, 10);
  var secondHalfYear = parseInt(secondHalfYearStr, 10);

  // Calling the function that will calculate the day of the week
  var dayOfTheWeek = findWeekday(userDate, userMonth, userYear, 
                                 firstHalfYear, secondHalfYear);

  // Output
  console.log();
  console.log("The day of the week is", dayOfTheWeek);

  // Catches and tells the user that an improper input was entered
} catch (err) {
  console.log("ERROR: Invalid Input");
}
