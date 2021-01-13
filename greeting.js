/* 
   user의 이름을 입력받아 저장하는 기능 구현
*/

// 텍스트 기능을 이용해 이름을 입력하는 박스를 공부

const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greeting")

const USER_LS = "User",
 SHOWING_CN = "showing";

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
    // preventDefault는 기존 기능을 없애는 효과, 창이 새로고침하여 실행되는 것을 막는 동작
    // input.value는 사용자의 값을 가져오는 것

// 사용자가 입력한 정보를 저장하는 기능 (새로고침을 할 경우에도 정보가 저장되어 있어 바뀌지 않음)
function saveName(text){
    localStorage.setItem(USER_LS, text);
}
    // localStorage는 데이터를 사용자 로컬에 보존하는 방식, 데이터를 (저장, 덮어쓰기, 삭제 증) 조작 가능
    // USER_LS에 text 데이터 쓰기

// user에 대한 정보가 없는 경우에 입력받는 방법
function askForName(){  
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
    // form.classList.add 는 form에 클래스 SHOWING_CN을 추가
    // addEventListener가 submit(전송) 이벤트 발생 시 handleSubmit이라는 함수를 실행

// localStorage를 이용하고 paint (이름을 색칠하는 기능) 실행
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}
    // text라는 변수에 어떤 문장이 있으면 Hello 뒤에 추가됨
    // greeting.innerText 는 보여지는 값을(text) Hello 뒤에 같이 출력   
    // form.classList.remove 는 form에 클래스 SHOWING_CN 제거
    // greeting.classList.add 는 greeting에 클랙스 SHOWING_CN 추가

// localStorage를 읽어서 만약 null 값이 아니라면 paintGreeting을 실행 (이름을 색칠하는 기능)

function loadName(){
    const User = localStorage.getItem(USER_LS);
    if(User === null){           // user의 내용이 저장되어 있지 않은 경우 askForName(이름을 묻는 기능)을 실행
        askForName();
    } else{                             // user의 내용이 저장되어 있는 경우
        paintGreeting(User);            // paintGreeting(저장되어 있는 이름 앞에 Hello를 붙여서 나타냄)을 사용
    }
}

function init(){
    loadName();         // loadName을 실행한 뒤 사용자의 여부에 따라 순차적으로 실행
}

init();