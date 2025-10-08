const form =document.getElementById('taskForm');
const input =document.getElementById('taskInput');
const list=document.getElementById('taskList');

form.addEventListener('submit', e => {
    e.preventDefault();
    const value=input.value.trim();
    if(!value) return;

    const li=document.createElement('li');

    const span =document.createElement('span');
    span.textContent=value;

    const completeBtn =document.createElement('button');
    completeBtn.type= "button";
    completeBtn.textContent="complete";
    completeBtn.onclick =() => {
        span.style.textDecoration ==="line-through" ? "none" : "line=through";

    };

    const deleteBtn = document.createElement('button');
    deleteBtn.type ="button";
    deleteBtn.textContent ="Delete";
    deleteBtn.onclick =() => li.remove();

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    li.appendChild(li);

    input.value = "";
    input.focus();
})