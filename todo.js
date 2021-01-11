const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

 const TODO_LS = "toDo";

 let toDo = [];

 function deleteToDo(event){
     const btn = event.target;  
     const li = btn. parentNode;  
     toDoList.removeChild(li);
     const cleanToDo = toDo.filter(function(toDo){
         return toDo.id !== parseInt(li.id);
     });
     toDo = cleanToDo;
     saveToDo();

     // event.target으로 이벤트 객체를 받아옴
     // parentNode 노드는 부모노드로 선언하고 빈 공간을 포함
     // removeChild 는 문서 계층 구조(toDoList)에서 하나의 노드 li를 삭제하는 것
     // toDo.filter(function(toDo) 는 toDo라는 배열을 순회하며 요소마다 조건 
     // 확인 후 조건을 만족하는 원소들로 구성된 새로운 배열 리턴
     // toDo id는 숫자, li id는 string이다. 그래서 parseInt 함수를 이용해 문자열을 정수로 바꿔준다.
     // toDo를 새로운 배열로 만든 cleanToDo로 다시 정함
     // saveToDo로 todolist를 저장
 }

 function saveToDo(){
     localStorage.setItem(TODO_LS, JSON.stringify(toDo));

     // localStorage.setItem은 TODO_LS에 JSON.stringify(toDO) 데이터를 쓰는 것으로
     // localStorage에는 javaScript의 data를 저장 할 수 없고, 오직 strig 형태만 저장 가능
     // JSON.stringify(toDo)는 한번에 한 객체를 통체로 저장하는 방법으로 한번의 todolist가 작성될 때 마다 저장

 }

 function paintToDo(text){
     const li = document.createElement("li");   // createElement()는 요소를 만드는 것으로 html의 li 요소를 만드는 것
     const delBtn = document.createElement("button");   //
     const span = document.createElement("span");
     const newId = toDo.length + 1;

     delBtn.innerText = "♬";
     delBtn.addEventListener("click", deleteToDo);
     span.innerText = text;

     li.appendChild(span);
     li.appendChild(delBtn);
     li.id = newId;

     toDoList.appendChild(li);
     const toDoObj = {
         text: text,
         id : newId
     };
     toDo.push(toDoObj);
     saveToDo();
 }

 function handleSubmit(event){
     event.preventDefault();
     const currentValue = toDoInput.value;
     paintToDo(currentValue);
     toDoInput.value = "";
 }

 function loadTodo(){
     const loadTodo = localStorage.getItem(TODO_LS);
     if(loadTodo !== null){
         const parsedToDo = JSON.parse(loadTodo);
         parsedToDo.forEach(function(toDo){
             paintToDo(toDo.text);
         });
     }
 }

 function init(){
     loadTodo();
     toDoForm.addEventListener("submit", handleSubmit);
 }

 init();
