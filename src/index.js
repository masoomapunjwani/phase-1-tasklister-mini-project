document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toDoList(e.target['new-task-description'].value);=

  })
 
});


function toDoList(task){
  let ul = document.querySelector('#tasks')
  let li = document.createElement('li');
  li.textContent = `${task}`;


//add delete button
let btn = document.createElement('button');
btn.textContent = "y"
ul.appendChild(btn);
ul.appendChild(li);


btn.addEventListener('click', (e) => {
  e.targer.parentNode.remove();
})
}