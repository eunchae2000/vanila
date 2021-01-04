// console은 변수보다 더 큰 object

// function의 다른 사용법
/*function Hi(name, age){
    console.log(`Hi ${name} you are ${age} years old`);
}

Hi("coco", 22);
*/

/*function Hi(name, age){
    return `Hi ${name} you are ${age} years old`;
}

const greet = Hi("coco", 22)

console.log(greet);  // greet는 Hi의 실행된 결과 값이다.
*/

const calculator = {
    plus: function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(5, 5) //이 의미는 함수 기능을 객체 안에서 구현해야 됨
console.log(plus)

// 예제 문제! const, calculator를 사용해서 더하기, 나누기, 곱하기, 빼기, 제곱근을 구현하기
/*
const calculator = {
plus : function(a,b){
    return a+b
},
minus : function(a,b){
    return a-b
},
multiple : function(a,b){
    return a*b
},
divide : function(a,b){
    return a/b
},
square : function(a,b){
    return a**b
}
};

const plus = calculator.plus(10,5);
const minus = calculator.minus(10,5);
const multiple = calculator.multiple(10,5);
const divide = calculator.divide(10,5);
const square = calculator.square(10,5);

console.log(plus);
console.log(minus);
console.log(multiple);
console.log(divide);
console.log(square);
*/
