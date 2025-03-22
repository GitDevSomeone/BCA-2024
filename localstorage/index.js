const studentNameInput = document.getElementById("student-name");
const studentIdInput = document.getElementById("student-id");
const addBtn = document.getElementById("add-btn");

const STUDENTS = JSON.parse(localStorage.getItem("students")) || [];
console.log(STUDENTS);
addBtn.addEventListener("click", () => {
  const studentName = studentNameInput.value;
  const studentId = studentIdInput.value;
  STUDENTS.push({
    name: studentName,
    id: studentId,
  });
  console.log(STUDENTS);
  localStorage.setItem("students", JSON.stringify(STUDENTS));
});

// LOcalstorage
// localstorage is an browser api which persist
//  the data across refresh of page in browser
// {
//   "key", value;
// }
// const arr = [1, 2, 3, 4, 5];
// const JSONArr = JSON.stringify(arr);

//setItem - used to set data in localstorage
// localStorage.setItem("newArr", JSONArr);

//getItem - used to retieve the already setted data
// const gettedArr = JSON.parse(localStorage.getItem("newArr"));
// console.log(gettedArr);

//removeItem
// localStorage.removeItem("newArr");
