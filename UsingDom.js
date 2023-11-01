const showAllTodos = document.querySelector("#alltodos")
const showcompletedTodos = document.querySelector("#completetodos")
const Button = document.querySelector("button")

const elements = alltodo.map((item)=>{
let li = document.createElement("li")
li.textContent = `${item}`;
return li
})

elements.forEach((element)=>{
    showAllTodos.appendChild(element)
})


const CompletedAllElement = CompletedResult.map((item)=>{
    const li = document.createElement("li")
    li.textContent = `${item}`;
    return li;
})

CompletedAllElement.forEach((element)=>{
    showcompletedTodos.appendChild(element);
})

