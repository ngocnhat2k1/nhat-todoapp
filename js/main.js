const btnAddTask = document.querySelector('.js-btn-addtask')
const openFormEl = document.querySelector('.js-openform')
const tableTodoEl = document.querySelector('#list-todo')
const listEmptyRL = document.querySelector('.js-list-empty')
console.log(listEmptyRL);

let curentForm = 'Add Task';




//function
function switchForm() {
    if (curentForm === 'Add Task') {
        curentForm = 'Close Form'
    } else if (curentForm === 'Close Form') {
        curentForm = "Add Task"
    }
}


function reset() {
    openFormEl.classList.add('hidden')
    tableTodoEl.classList.add('hidden')
    listEmptyRL.innerHTML = 'Close Form'
}

function openform() {
    if (curentForm === 'Add Task') {
        openFormEl.classList.remove('hidden')
        btnAddTask.classList.remove('btn-info')
        btnAddTask.classList.add('btn-primary')
        btnAddTask.innerHTML = 'Close Form'
    } else if (curentForm === 'Close Form') {
        openFormEl.classList.add('hidden')
        btnAddTask.classList.add('btn-info')
        btnAddTask.classList.remove('btn-primary')
        btnAddTask.innerHTML = 'Add Task '
    }
    switchForm()
}















//building event
btnAddTask.addEventListener('click', openform)
reset()