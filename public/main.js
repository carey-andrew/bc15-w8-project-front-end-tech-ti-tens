// hide the true or false button until next is pressed
const tfButton = document.getElementById("tf-buttons");
tfButton.style.display = "none";

const nextButton = document.getElementById("NB");

function randomNumber() {
  const num = Math.floor(Math.random() * 20) + 1;
  return num;
}
// nextButton.addEventListener("click", async function () {
//   getData(2);
// });

async function getData() {
  const questionId = randomNumber();
  // Declare a variable to store the HTTP response
  const response = await fetch(`http://localhost:8800/quiz/${questionId}`, {
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

const placeholderText = document.getElementById("statement-text");
// when next is clicked show T&F buttons -
// when next is clicked generate a random number to fetch the statment by id
// ( strech--- make it so a statment isnt returned more than once)
// when next is clicked replace the placeholder text with a statment
// send get request to api to fetch the statment
// store the answer in a variable
//taget the border
const container = document.getElementById("container");
nextButton.addEventListener("click", async function () {
  const response = await getData();
  console.log(response);
  //store speonses in variables
  let statement = response.data.statement;
  console.log(statement);
  let correctAns = response.data.answer;
  console.log(correctAns);
  //display the tf buttons
  tfButton.style.display = "flex";
  //change placeholder text to statement text
  placeholderText.innerHTML = statement;
  container.style.border = "solid 3px #e69138;";
});

// target the true button
const trueButton = document.getElementById("true-button");

// target the false button
const falseButton = document.getElementById("false-button");

// for true button
trueButton.addEventListener("click", async function () {
  const response = await getData();
  let correctAns = response.data.answer;
  if (correctAns == "True") {
    placeholderText.innerHTML = "Correct";
    container.style.border = "5px solid green";
  } else if (correctAns == "False") {
    placeholderText.innerHTML = "Incorrect";
    container.style.border = "5px solid red";
  }
});

falseButton.addEventListener("click", async function () {
  const response = await getData();
  let correctAns = response.data.answer;
  if (correctAns == "False") {
    placeholderText.innerHTML = "Correct";
  } else if (correctAns == "True") {
    placeholderText.innerHTML = "Incorrect";
  }
});

// async function nextStatement() {
//     console.log('We are a go');

// }
// listen for button click and compare user answer to response answer
// if true, change boarder colour to green and display "well done this is true-press next to continue"
// display next question

haya minhas