const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const todoContainer = document.querySelector('.todoContainer');

btn.addEventListener('click', () =>{
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('todoAdd');
    todoContainer.appendChild(item);
    inputField.value = ' ';

    item.addEventListener('click', () => {
        item.classList.add('todoCompleted');
    })

    item.addEventListener('dblclick', () => {
        todoContainer.removeChild(item);
    })
})