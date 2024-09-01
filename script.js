const inputBox = document.querySelector("#inputBox");
const AddBTN = document.querySelector("#AddBTN");
const todoList = document.querySelector("#todoList");


let editToDo = null;

const  addToDo = ()=> {
    const inputText = inputBox.value;

    if(inputBox.value == ""){
        alert("input filed is empty");
        return;
    }

    if(AddBTN.value === "Edit"){
        editToDo.target.previousElementSibling.innerHTML = inputText;
        AddBTN.value = "Add";
        inputBox.value = "";
    }

    else{

    const li = document.createElement("li");
    const p = document .createElement("p");

    li.style.backgroundColor = "#ffffff"
    li.style.borderRadius = "8px"
    li.style.padding = "6px 12px"
    li.style.border = "0.125px solid #a19f9f"
    li.style.margin = "4px"
    li.style.display = "flex"
    li.style.alignItems = "center"
    p.style.flexGrow = "1"

    p.innerHTML = inputText;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit"
    li.appendChild(editBtn);
    editBtn.style.fontSize = "16px"
    editBtn.style.fontWeight = "600"
    editBtn.style.cursor = "pointer"
    editBtn.style.color = "#008000"
    editBtn.style.padding = "8px"

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove"
    li.appendChild(deleteBtn);
    deleteBtn.style.fontSize = "16px"
    deleteBtn.style.fontWeight = "600"
    deleteBtn.style.cursor = "pointer"
    deleteBtn.style.color = "#ff0000"


    todoList.appendChild(li);
    inputBox.value = ""
    }
}

const updateToDo = (e)=> {
    if(e.target.innerHTML === "Remove"){
        todoList.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        AddBTN.value = "Edit"
        editToDo = e;
    }
}

AddBTN.addEventListener("click", addToDo);
todoList.addEventListener("click", updateToDo);