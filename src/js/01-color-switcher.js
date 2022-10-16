const startBt = document.querySelector('[data-start]');
const stopBt = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startBt.addEventListener("click", onStartBtClick);    
stopBt.addEventListener("click", onStopBtClick);

let updateColorId = null;

function onStartBtClick(e) {
   if (!updateColorId ) {updateColorId = setInterval(() =>
        body.style.backgroundColor = `${getRandomHexColor()}`, 1000); 
       console.log('Start');
    };
};

function onStopBtClick(e) {
    console.log('stop');
    clearInterval(updateColorId);
    updateColorId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}