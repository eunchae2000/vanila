// Math 함수를 이용해서 랜덤으로 배경사진을 바꾸는 기능

const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `C:/Users/coco1/DEV/html_css_js/vanila/images/${imgNumber + 1}.jpg`;   // +1을 해주는 이유는 사진이 1.jpg부터 시작
    image.classList.add("bgImage")
    body.prepend(image);    // prepend는 콘텐츠를 선택한 요소 내부의 시작 부분에서 삽입하는 것
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
    //Math.floor = 소수점 이하를 버림, Math.random 정해진 범위안에서 숫자를 랜덤으로 생성
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();