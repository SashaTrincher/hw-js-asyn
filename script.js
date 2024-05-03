// #1


// let messagesAmount = 0;
// const myMessages = setInterval(() => {
//     messagesAmount++;
//     console.log(messagesAmount);
//     alert('Enter the ethereal world of Esperia in AFK Journey, an open-world, idle RPG based on the beloved casual card game, AFK Arena. With expansive landscapes and breathtaking visuals, this lively spinoff is full of wonder.');

//     if (messagesAmount === 5) {
//         clearInterval(myMessages);
//     };
// }, 1000);


// #2


// const colors = ['green', 'black', 'red', 'pink'];

// setInterval(function() {
//     let selectedColor = Math.floor(Math.random() * colors.length)
//     document.querySelector('.change').style.backgroundColor = colors[selectedColor];
// }, 3000);


// #3


// const timer = document.querySelector('.timer');
// const clicksCount = document.querySelector('.clickCount');
// const clickTarget = document.querySelector('.clickGame');

// let gameTimer = 15;
// let clicksAmount = 0;
// timer.innerHTML = `Time left: ${gameTimer}`;
// clicksCount.innerHTML = `Clicks: ${clicksAmount}`;

// const myClickGame = setInterval(() => {
//     gameTimer--;
//     console.log(gameTimer);
//     timer.innerHTML = `Time left: ${gameTimer}`;

//     if (gameTimer === 0) {
//         clearInterval(myClickGame);
//     };
// }, 1000);

// clickTarget.addEventListener('click', () => {
//     if (gameTimer !== 0) {
//         clicksAmount++;
//         clicksCount.innerHTML = `Clicks: ${clicksAmount}`;
//     } else {
//         return
//     }
// });


// #4


// const timeTrigger = document.querySelector('.timeSubmit').addEventListener('click', () => {
//     const timeInput = document.querySelector('.timeInput');
//     const timeElement = document.querySelector('.timeLeft');
//     let timeLeft = timeInput.value;

//     timeElement.innerHTML = `Message in: ${timeLeft}`;

//     const timeMagic = setInterval(() => {
//         timeLeft--;
//         timeElement.innerHTML = `Message in: ${timeLeft}`;

//         if (timeLeft === 0) {
//             clearInterval(timeMagic);
//             alert('Enter the ethereal world of Esperia in AFK Journey, an open-world, idle RPG based on the beloved casual card game, AFK Arena. With expansive landscapes and breathtaking visuals, this lively spinoff is full of wonder.')
//         }
//     }, 1000);
// });