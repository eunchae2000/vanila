// js를 이용해서 html 내용을 수정하기

/* const title = document.getElementById("title");

console.log(title);

const title = document.getElementById("title");  // html의 title요소에 접근
title.innerHTML = "Hi! From JS";  // html의 원래 요소를 바꾸는 속성으로 document.getElementById 메서드를 함께 사용
title.style.color = "red";  //html의 style.color 요소의 속성을 바꾸는 것으로 사용 예시를 잘 알아야 함
console.dir(document); // dir은 객체 => 자바스크립트 객체의 속성들을 출력

*/

const title = document.querySelector("#title");  //document.querySelector는 일치하는 요소를 찾아내는 방법. 일치하는 요소가 없을 경우 null을 반환
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.title = "I own you now";  // 웹페이지의 제목을 바꾸는 js 방법

/*
document에 있는 모든건 다 객체가 된다
모든 객체와 함수는 DOM(Document Object Model) 형태로 변경이 가능
*/