// hide the true or false button until next is pressed
const tfButton = document.getElementById("tf-buttons");
tfButton.style.display = "none";

// when next is clicked show T&F buttons -
// when next is clicked generate a random number to fetch the statment by id
// ( strech--- make it so a statment isnt returned more than once)
// when next is clicked replace the placeholder text with a statment
// send get request to api to fetch the statment
// store the answer in a variable

const nextButton = document.getElementById("NB");

function randomNumber() {
  const num = Math.floor(Math.random() * 20) + 1;
  return num;
}
// nextButton.addEventListener("click", async function () {
//   getData(2);
// });

// async function getData(id) {
//   const apiUrl = `http://localhost:8800/quiz/${id}`;
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   console.log(data);
// }

async function getData() {
  // Declare a variable to store the HTTP response
  const response = await fetch("http://localhost:8800/quiz/1", {
    headers: {
      Accept: "application/json",
    },
  });

  // Check if the response failed, and if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  // return the parsed JSON from the response
  const data = await response.json();
  return data;
}

nextButton.addEventListener("click", async function () {
  const response = await getData();
  console.log(response);
});
// async function nextStatement() {
//     console.log('We are a go');
//     tfButton.style.display = 'flex';

// }
// listen for button click and compare user answer to response answer
// if true, change boarder colour to green and display "well done this is true-press next to continue"
// display next question
