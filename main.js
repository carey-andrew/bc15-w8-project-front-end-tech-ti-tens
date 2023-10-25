// hide the true or false button until next is pressed
const tfButton = document.getElementById('tf-buttons');
tfButton.style.display = 'none';

// when next is clicked show T&F buttons -
// when next is clicked generate a random number to fetch the statment by id
// ( strech--- make it so a statment isnt returned more than once)
// when next is clicked replace the placeholder text with a statment
// send get request to api to fetch the statment
// store the answer in a variable

const nextButton = document.getElementById('NB')
let randomNumber = Math.floor(Math.random() * 20) + 1
nextButton.addEventListener('click', nextStatement);

async function getData(id){
    const apiUrl = `http://localhost:8800/quiz/${id}`;
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            console.error("this didnt work",error)
        }
    }
}

// async function nextStatement() {
//     console.log('We are a go');
//     tfButton.style.display = 'flex';

// }
// listen for button click and compare user answer to response answer
// if true, change boarder colour to green and display "well done this is true-press next to continue"
// display next question


