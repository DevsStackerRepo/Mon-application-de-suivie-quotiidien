let input = document.getElementById("userInput");
let enter = document.getElementById("enter");
let showTodo = document.getElementById("show_todolist");

function inputLength() {
  return input.value.length;
}

// function createElement(){
//     let li = document.createElement("li");
//     li.innerHTML = input.value + "<br /> <button>Modifier</button>       <button>Supprimer</button>";
//     showTodo.appendChild(li);
//     input.value="";
//     }

function createElement() {
  let li = document.createElement("li");
  li.innerHTML = input.value;

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `supprimer ${input.value}`;
  deleteButton.onclick = () => supprimerElement(li);

  let editButton = document.createElement("button");
  editButton.innerHTML = `editer ${input.value}`;
  editButton.onclick = () => editerElement(li);

  li.appendChild(deleteButton);
  li.appendChild(editButton);

  showTodo.appendChild(li);
  input.value = "";
}

function editerElement(element) {
  let editValue = prompt(
    "editer l'element selectionner",
    element.firstChild.nodeValue
  );
  element.firstChild.nodeValue = editValue;
}

function supprimerElement(element) {
  element.remove();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0 && e.which === 13) {
    createElement();
  }
}

enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
