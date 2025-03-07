// fetching html element 

// const heading = document.querySelector("h1"); 
    //   first occurance of element that satisfies selector

// const heading = document.querySelectorAll("h1");
    // all the occurances of element that satisfies the selector
    
// const heading = document.getElementById("3") 
    // element with same id that we passed as an argument - single element

// const heading = document.getElementsByClassName("bca");
    // multiple element - array like structure

// const heading = document.getElementsByTagName("h1")
    // multiple element - array like structure


// console.log(heading)

// changing text of element

// heading.innerText = "hello Chitkara"



// div task

// const abc = document.getElementById("container");
// abc.innerText = "<h1>Hello World</h1>"
// abc.innerHTML = "<button>Hello World</button>"

// const heading = document.getElementById("head");
// console.log(heading.style)

// heading.addEventListener("click", function(){
//     heading.innerText = "hello BCA"
//     heading.style.color = "white";
//     heading.style.backgroundColor = "black"

// })

const input = document.getElementById("inp");

// input.addEventListener("keypress", function(){
//     // console.log('event triggered')
//     console.log(input.value)
// })


// const para = document.getElementById('real')

// input.addEventListener("input", function(){
//     // console.log('event triggered')
//     // console.log(input.value)
//     para.innerText = input.value;
// })


input.addEventListener("blur", function(){
   console.log('focus triggered')
})
