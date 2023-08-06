import chalk from "chalk";

import inquirer from "inquirer";
// import { validateForHours, validateForSeconds } from "./validate.js";

export let currentDate = Date();

async function main() {
  var askForHours = await inquirer.prompt([
    {
      type: "number",
      name: "hours",
      message: chalk.blueBright("How many hours left for an event:"),
      validate: function validateForHours(input) {
        const hours = parseInt(input);
        if (Number.isInteger(hours) && hours >= 0 && hours <= 23) {
          return true;
        } else {
          console.log(chalk.redBright("Please enter a valid number (0-60)"));
        }
      },
    },

    // ...

    {
      type: "number",
      name: "minutes",
      message: chalk.blueBright("How many minutes left for an event:"),
      validate: function validateMinutes(input) {
        const minutes = parseInt(input); // Convert input to an integer
        if (Number.isInteger(minutes) && minutes >= 0 && minutes <= 59) {
          return true; // Input is valid
        } else {
          return "Please enter a valid number of minutes between 0 and 59.";
        }
      },
    },

    // ...

    {
      type: "number",
      name: "seconds",
      message: chalk.blueBright("How many seconds left for an event:"),
      validate: function validateSeconds(input) {
        const seconds = parseInt(input);
        if (Number.isInteger(seconds) && seconds >= 0 && seconds <= 59) {
          return true;
        } else {
          return "Please enter a valid number of seconds between 0 and 59.";
        }
      },
    },
  ]);
  let totalHoursInSecs = askForHours.hours * 60 * 60;
  let totalMinsInSecs = askForHours.minutes * 60;
  let secs = askForHours.seconds;
  let totalTimeInSecs = totalHoursInSecs + totalMinsInSecs + secs;

  function updateTimer() {
    const countdownInterval = setInterval(() => {
      // Update the total seconds remaining
      totalTimeInSecs--;

      if (totalTimeInSecs <= 0) {
        clearInterval(countdownInterval);
        console.log("\nCountdown finished!");
      } else {
        // Calculate remaining hours, minutes, and seconds
        const hours = Math.floor(totalTimeInSecs / 3600);
        const minutes = Math.floor((totalTimeInSecs % 3600) / 60);
        const seconds = totalTimeInSecs % 60;

        // Display the updated timer values on the same line

        process.stdout.write(
          chalk.whiteBright(
            `\rRemaining Time: ${chalk.greenBright(
              hours
            )} hours, ${chalk.greenBright(
              minutes
            )} minutes, ${chalk.greenBright(seconds)} seconds`
          )
        );
      }
    }, 1000); // Repeat every 1000 milliseconds (1 second)
  }

  // Start the countdown
  updateTimer();
}
export default main;
// function validateForMinutes() {
//   if (
//     askForHours.hours < 0 &&
//     askForHours.hours >= 60 &&
//     typeof askForHours.hours !== "number"
//   ) {
//     return true;
//   } else {
//     console.log(chalk.redBright("Please enter a valid number (0-60)"));
//   }
// }

// function validateForHours(input: number) {
//   if (
//     askForHours.hours <= 0 &&
//     askForHours.hours <= 23 &&
//     typeof askForHours.hours !== "number"
//   ) {
//     console.log(chalk.redBright("Please enter a valid number (0-24)"));
//   } else {
//     return true;
//   }
// }
// export async function validateForMinutes() {
//   if (hours < 0 && askForHours.hours >= 60 && typeof askForHours.hours !== "number") {
//     console.log(chalk.redBright("Please enter a valid number (0-60)"));
//     await main();
//   } else {
//     return true;
//   }
// }
