/* 
   user의 이름을 입력받아 저장하는 기능 구현
*/

// 텍스트 기능을 이용해 이름을 입력하는 박스를 공부

const form = document.querySelector(".js-form"),
 input = document.querySelector("input"),
 greeting = document.querySelector(".js-greeting")

const USER_LS = "currentUser",
 SHOWING_CN = "showing";

// 사용자가 입력한 정보를 저장하는 기능 (새로고침을 할 경우에도 정보가 저장되어 있어 바뀌지 않음)
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

/* 입력한 정보에 대해서 기본 기능을 없애고 새로운 기능을 입힘 
(기본 기능은 이름은 입력하고 enter를 치면 입력했던 정보가 사라짐)
입력했던 정보들을 사리지게 하지 않고 계속 저장해 두는 방식
*/

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// user에 대한 정보가 없는 경우에 입력받는 방법

function askForName(){  
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

// localStorage를 이용하고 paint (이름을 색칠하는 기능) 실행

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`        // text라는 변수에 어떤 문장이 있으면 Hello 뒤에 추가됨
}

// localStorage를 읽어서 만약 null 값이 아니라면 paintGreeting을 실행 (이름을 색칠하는 기능)

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){           // user의 내용이 저장되어 있지 않은 경우에 실행
        askForName();
    } else{                             // user의 내용이 저장되어 있는 경우에 사용
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();