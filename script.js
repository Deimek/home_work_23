

const ulTodo = document.querySelector('.todo__list');
const btnAddTodo = document.querySelector('.todo__btn');

ulTodo.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
})

btnAddTodo.addEventListener('click', (event) => {
    event.preventDefault();
    const inputTodo = document.querySelector('.todo__input')
    const inputTodoValue = inputTodo.value.trim();

    if (inputTodoValue === '') {
        return;
    }
    const liAddTodo = document.createElement('li');
    liAddTodo.textContent = inputTodoValue;
    ulTodo.appendChild(liAddTodo);


    const btnDel = document.createElement('button');
    btnDel.textContent = 'X';
    liAddTodo.appendChild(btnDel);
    // btnDel.addEventListener('click', () => {
    //     liAddTodo.remove();
    // });

    inputTodo.value = '';

})



