const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = []; //to Do List // localStorage 값이 있으면 이를 저장해둠

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;

  console.log(li.id); //li의 id값을 가져옴!
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //함수로 toDos인자를 전달
  saveToDos(); //다시 저장해주기
  li.remove(); //list 삭제
}

function getToDos() {
  localStorage.getItem(toDos);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  //toDos.push(newToDo); //매번 사용자가 적어둔 text를 push함..
  //나는 object를 push하고싶음!

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }; //id를 랜덤으로 생성해준다!

  toDos.push(newToDoObj);

  toDoInput.value = "";
  paintToDo(newToDoObj); //todo 생성시 id와 todo 내용을 같이 보내줌
  saveToDos(); //local Storage에 저장
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id; //li에 자체적으로 id를 줘서 각 todo에 특정 값을 부여함!!
  const span = document.createElement("span");
  const btn = document.createElement("button");

  span.innerText = newToDo.text;
  btn.innerText = "X";

  li.appendChild(span);
  li.appendChild(btn);

  toDoList.appendChild(li);
  btn.addEventListener("click", deleteToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  //만약 localStorage가 null이 아니면
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //toDos array를 업데이트 해준다.
  parsedToDos.forEach(paintToDo);
}
