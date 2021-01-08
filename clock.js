// 시간을 표시하는 방법

/*const clockContainer = document.querySelector(".js-clock"), 
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}`
}

function init(){
    getTime();
}

init();
*/

// 시간을 실시간으로 새로고침 없이 변경하는 방법

const clockContainer = document.querySelector('.js-clock'), 
 clockTitle = clockContainer.querySelector('h1');

function getTime(){
    const date = new Date();

    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();