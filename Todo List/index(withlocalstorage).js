const addButton = document.getElementById('addButton');
const inputField = document.getElementById('input');
const listContainer = document.getElementById('listContainer');
let taskList = []

let dataFromLocalStorage = localStorage.getItem("tasks"); // string 

if(dataFromLocalStorage != null){
    taskList = JSON.parse(dataFromLocalStorage) // array
}



taskList.forEach(function(value, index, array){
    const li = document.createElement('li');
    li.innerText = value;

    listContainer.appendChild(li)
})

addButton.addEventListener('click',()=>{
    let inputFieldValue = inputField.value;
    taskList.push(inputFieldValue)

    localStorage.setItem("tasks", JSON.stringify(taskList))


    const li = document.createElement('li');
    li.innerText = inputFieldValue;

    listContainer.appendChild(li)

})