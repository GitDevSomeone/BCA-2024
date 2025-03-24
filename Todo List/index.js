// const addButton = document.getElementById('addButton');
// const inputField = document.getElementById('input');
// const listContainer = document.getElementById('listContainer');

// addButton.addEventListener("click", function(){
//     const taskList = document.createElement("li");

//     const span = document.createElement("span");
//     span.innerText = inputField.value;
//     taskList.appendChild(span);

//     const delButton = document.createElement('button');
//     delButton.innerText = "delete"

//     delButton.addEventListener('click', function(){
//         taskList.remove()
//     })

//     taskList.appendChild(delButton);

//     const editButton = document.createElement('button');
//     editButton.innerText = "Edit";
//     editButton.addEventListener("click", function(){
//        const newTask =  prompt('enter new task')
//        span.innerText = newTask
//     })
//     taskList.appendChild(editButton)

//     const checkbox = document.createElement('input');
//     checkbox.setAttribute('type', 'checkbox');
//     checkbox.addEventListener("change", function(){
//         if(checkbox.checked == true){
//             span.style.textDecoration = "line-through"
//         }else{
//             span.style.textDecoration = "none"
//         }
//     })

//     taskList.appendChild(checkbox)

//     listContainer.appendChild(taskList)
//     inputField.value  = "";
//     inputField.focus()
// })



