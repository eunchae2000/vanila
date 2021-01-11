const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

 const TODO_LS = "toDo";

 let toDo = [];
 // 함수 내에서 재할당해야 되기 때문에 let을 사용

 // todolist 항목을 선택적으로 삭제하는 기능
 function deleteToDo(event){
     const btn = event.target;  
     const li = btn. parentNode;  
     toDoList.removeChild(li);
     const cleanToDo = toDo.filter(function(toDo){
         return toDo.id !== parseInt(li.id);
     });
     toDo = cleanToDo;
     saveToDo();

     /*
      + event가 어떤 버튼에서 발생했는지 알기 위해서 event.target으로 사용
      + 해당하는 li도 삭제하기 위해서 btn에 부모노드를 추가
      + removeChild 는 노드 li의 자식노드를 삭제하는 것
      + toDo.filter(function(toDo) 는 toDo라는 배열을 순회하며 요소마다 조건 
      + 확인 후 조건을 만족하는 원소들로 구성된 새로운 배열 리턴
      + toDo id는 숫자, li id는 string이다. 그래서 parseInt 함수를 이용해 문자열을 정수로 바꿔줌
      + toDo를 새로운 배열로 만든 cleanToDo로 다시 정함
      + saveToDo로 todolist를 localStorage에 저장
     */
 }

 // 작성한 todolist를 string 형태로 localStorage에 저장
 function saveToDo(){
     localStorage.setItem(TODO_LS, JSON.stringify(toDo));

     /* 
      + localStorage.setItem은 TODO_LS에 JSON.stringify(toDO) 객체로 이루어진 데이터를 string 형태로 쓰는 것,
      localStorage에는 javaScript의 data를 저장 할 수 없고, 오직 strig 형태만 저장 가능
      + JSON.stringify(toDo)는 한번에 한 객체를 통체로 저장하는 방법으로 한번의 todolist가 작성될 때 마다 저장
     */

 }

 //
 function paintToDo(text){
     const li = document.createElement("li");   
     const delBtn = document.createElement("button");
     const span = document.createElement("span");
     const newId = toDo.length + 1;

     /*
      + createElement()는 요소를 만드는 것으로 html의 li 요소를 만드는 것
      + toDo 배열의 길이를 추가
     */

     delBtn.innerText = "❌";
     delBtn.addEventListener("click", deleteToDo);
     span.innerText = text;

     /*
      + innerText는 "❌"의 값만 가져오는 것
      + click이라는 이벤트 효과로 "❌"를 클릭했을 때 선택한 todolist 항목이 삭제
      */

     li.appendChild(span);
     li.appendChild(delBtn);
     li.id = newId;

     /*
      + appendChild는 li에 span과 delBtn을 자식노드로 추가
      + newId는 li와 toDo에 id를 설정해 각각의 id를 설정해 주기 위함
      */

     toDoList.appendChild(li);
     const toDoObj = {
         text: text,
         id : newId
     };
     toDo.push(toDoObj);
     saveToDo();

     /* 
      + li항목을 toDoList 항목에 자식노드로 추가
      + 새로 입력된 값을 잠시 담는 변수이고 push를 이용해서 기존의 toDo에 입력
      + saveToDo 함수를 이용해 새롭게 입력된 값을 저장
     */
 }

 // 기존 기능을 없애고 todolist 안에 데이터를 입력하여 값을 저장
 // submit event를 처리하는 함수
 function handleSubmit(event){
     event.preventDefault();
     const currentValue = toDoInput.value;
     paintToDo(currentValue);
     toDoInput.value = "";

     /*
      + preventDefault() 기본동작인 enter를 누를 때마다 새로고침이 되는 고유의 동작을 중단시키는 역할
      + toDoInput에 새로운 값을 넣고 그 값을 todolist 항목에 넣어주는 것
      + paintToDo() 함수의 인자로 currentValue에 담고 실행 => todolist 추가
      + toDoInput의 input 영역을 공백으로 지정해주기 위해서 ""로 지정
     */
 }

 // 저장된 todolist를 불러오는 것
 function loadTodo(){
     const loadTodo = localStorage.getItem(TODO_LS);
     if(loadTodo !== null){
         const parsedToDo = JSON.parse(loadTodo);
         parsedToDo.forEach(function(toDo){
             paintToDo(toDo.text);
         });
     }

     /*
     + localStorage에 TODO_LS로 저장된 값을 가져오는 것
     + JSON.parse()는 string 객체를 json 객체로 변환 시켜주는 것
     + forEach()는 주어진 함수를 배열 요소 각각에 대해 실행, 배열 객체에서만 사용 가능
     */

 }

 function init(){
     loadTodo();
     toDoForm.addEventListener("submit", handleSubmit);

     // loadTodo()를 실행하고 사용자의 상황에 따라 다음 과정을 순차적으로 진행
     // "submit"이라는 전송하는 이벤트를 실행하면 handleSubmit() 내용을 실행시켜 todolist의 기능을 빠짐없이 수행하도록 한다.
 }

 init();
