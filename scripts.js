let input = document.getElementById("userInput");
let enter = document.getElementById("enter")
let showTodo = document.getElementById("show_todolist");

function inputLength(){
    return input.value.length;
}

// function createElement(){
//     let li = document.createElement("li");
//     li.innerHTML = input.value + "<br /> <button>Modifier</button>       <button>Supprimer</button>";
//     showTodo.appendChild(li);
//     input.value="";
//     }

    function createElement(){
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = `supprimer ${input.value}`;
        li.innerHTML = input.value;
        li.appendChild(deleteButton);
        showTodo.appendChild(li);
        input.value="";
        }
    

    function addListAfterClick(){
        if(inputLength() > 0){
            createElement();
        }
    }

    function addListAfterKeypress(e){
        if(inputLength() > 0 && e.which === 13 ){
            createElement();
        }
    }

    enter.addEventListener("click",addListAfterClick)
    input.addEventListener("keypress",addListAfterKeypress)


