const addButton = document.getElementById('addButton');
const inputField = document.getElementById('input');
const listContainer = document.getElementById('listContainer');
let taskList = []

let dataFromLocalStorage = localStorage.getItem("tasks"); // string 

if(dataFromLocalStorage != null){
    taskList = JSON.parse(dataFromLocalStorage) // array
}



taskList.forEach(function(value, index, array){
    createUi(value)
})

addButton.addEventListener('click',()=>{
    let inputFieldValue = inputField.value;
    let taskobject = {
        id: Date.now(),
        name: inputFieldValue,
    }
    taskList.push(taskobject)

    localStorage.setItem("tasks", JSON.stringify(taskList))
    createUi(taskobject)
})


function createUi(obj){
    // console.log(obj)
    const li = document.createElement('li');
    li.setAttribute("id", obj.id)

    const span = document.createElement('span');
    span.innerText = obj.name;
    li.appendChild(span)

    const button = document.createElement('button');
    button.innerText = "X";
    button.addEventListener('click', ()=>{
        taskList = taskList.filter(function(value, index, array){
            if(value.id != li.id){
                return true;
            }
        })
        localStorage.setItem("tasks", JSON.stringify(taskList))
        li.remove();
    })
    li.appendChild(button);


    listContainer.appendChild(li)
}