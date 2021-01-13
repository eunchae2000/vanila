// 시간을 실시간으로 새로고침 없이 변경하는 방법

const clockContainer = document.querySelector('.js-clock'),  
 clockTitle = clockContainer.querySelector('h1');

 /*
  querySelector은 js를 기준으로 html이나 css에서 해당 요소를 찾는 것
 */

function getTime(){
    const date = new Date();

    const minutes = date.getMinutes();  // date.getMinutes 구문은 현재 시간을 기준으로 Date 인스턴스의 분을 반환
    const hours = date.getHours();      // date.getHours 구문은 현재 시간을 기준으로 Date 인스턴스의 시간을 반환
    const seconds = date.getSeconds();  // date.getSeconds 구문은 현재 시간을 기준으로 Date 인스턴스의 초를 반환
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
    // innerText는 사용자가 보이는 텍스트 값만을 가져온다.
    // 복사 붙여 넣기와 같은 느낌

function init(){
    getTime();
    setInterval(getTime, 1000);
}
    // setInterval 함수는 일정한 시간 간격으로 작업을 수행하기 위해서 사용
    // clearInterval 함수를 사용하여 setInterval 사용을 중지할 수 있음

init();
// function init() 함수를 실행