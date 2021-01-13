// Math 함수를 이용해서 랜덤으로 배경사진을 바꾸는 기능

const body = document.querySelector("body");

// 사용할 사진 파일의 총 개수
const IMG_NUMBER = 6;

// 랜덤으로 보여줄 사진 파일을 주소
function paintImage(imgNumber){
    const image = new Image();
    image.src = `C:/Users/coco1/DEV/html_css_js/vanila/images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);
}

    // img.src는 배경으로 쓸 사진의 주소를 불러오는 것으로 사진 파일의 이름이 1.jpg부터 시작하기 때문에 +1을 해줌
    // image.classList.add는 image에 beimage 클래스를 추가
    // prepend는 콘텐트를 body 요소 내부의 시작 부분에서 (image) 요소를 삽입하는 것
    
    // append 는 선택된 요소 내부의 가장 뒤에 html, dom 요소 등을 추가
    // prepend 는 선택된 요소 내부의 가장 앞에 html, dom 요소 등 추가

// 랜덤 사용 함수
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
    //Math.floor = 소수점 이하를 버림, Math.random 정해진 범위(IMG_NUMBER)안에서 숫자를 랜덤으로 생성

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();