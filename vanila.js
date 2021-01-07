/* 
const title = document.querySelector("#title");  
//document.querySelector는 일치하는 요소를 찾아내는 방법. 일치하는 요소가 없을 경우 null을 반환
*/

// click 할 때마다 

// const title = document.querySelector("#title");

/*
const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;  
    
    // class 값을 자바스크립트에서 가져오기 위해서 className을 사용
    class 자체가 중요한 표현이라 단독으로 사용안됨

    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function handleClick(){
    const currentClass = title.className;  
    
    if(currentClass !== CLICKED_CLASS){
        title.className.add (CLICKED_CLASS);
    } else {
        title.className.remove(CLICKED_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick);
}

// click이라는 이벤트가 실행될 때마다 handClick 함수가 작동, 
함수 뒤에 ()을 붙이면 이 함수를 당장 실행하라는 의미이기 때문에 괄호는 안씀

init();
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";


// 1번

/* 
// contains를 사용하여 표현
function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);  // contains는 변수에 값이 존재하는지  체크(true/false)
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);     // add -> 클래스를 필요에 따라 삽입 (여기서 클래스는 classList)
    } else {
        title.classList.remove(CLICKED_CLASS);  // remove -> 클래스를 필요에 따라 제거한다 
    }
}
*/

// 1번의 내용을 toggle 함수를 써서 간략하게 표현

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();