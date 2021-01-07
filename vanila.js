/* 
const title = document.querySelector("#title");  
//document.querySelector는 일치하는 요소를 찾아내는 방법. 일치하는 요소가 없을 경우 null을 반환
*/

/*
// window의 크기가 변경될 때마다 효과 적용

const title = document.querySelector("#title");

function handleResize(event){       //function say
    console.log(event);
}

window.addEventListener("resize", handleResize);

// title 변수에 있는 단어를 클릭할 때 색이 red로 변함

const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "red";
}

title.addEventListener("click", handleClick);  

+ addEventListener은 이벤트를 등록하는 가장 권장되는 방식으로
이 방식을 이용하면 여러개의 이벤트 핸들러를 등록할 수 있다.
*/


// if - else 문과 ===의 사용

if("10" === 10){            // ===는 ==와 달리 더 강력하게 검사하는 것으로 문자형까지 검사하는 것이다. 
    console.log("hi");      // 만약 "1" == 1 의 결과는 true가 되는데 "1" === 1 의 결과는 false를 반환하게 된다.
} else if("10" === "10"){ 
    console.log("ho");
} else{
    console.log("hu");
}

// &&와 ||

if(20>5 && "coco" === "coco"){      // &&을 사용하면 &&을 기준으로 왼쪽과 오른쪽의 결과값이
    console.log("Yes");             // 모두 true여야만 결과값이 반환된다. && = (그리고)
}else{                              // 그러므로 왼쪽과 오른쪽의 결과값이 모두 true이므로 Yes가 반환된다.
    console.log("No");
}

if(20>5 || "coco" === "coco"){      // ||을 사용하면 ||을 기준으로 왼쪽과 오른쪽의 결과값이
    console.log("Yes");             // 하나만 true여도 Yes라는 결과값이 반환된다. || = (또는)
}else{                              // 그러므로 왼쪽은 ture이고 오른쪽의 결과값이 false 이지만
    console.log("No");              // ||를 사용해 하나만 true여도 되는 것을 사용해 Yes가 반환된다.
}

// => 이 실행문의 결과값은 Yes이다


// title을 클릭하면 배경색과 같은 색이 되도록 하고 배경색과 같다면 원래의 색으로 되돌아가게 하는 것

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    
    /*title.addEventListener("mouseenter", handleClick);
     mouseenter = 마우스가 커서가 title 위치에 가기만 하면 반응하는 이벤트
     */ 

}
init();

// addEventListener의 속성에 있는 on, off 이벤트

function handleOffLine(){
    console.log("Bye bye");
}

function handleOnLine(){
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffLine);      // 와이파이가 offline일 경우 동작
window.addEventListener("online", handleOnLine);        // 와이파이가 online일 경우 동작

// => window에서 실행 가능, navigator에서는 실행 불가능