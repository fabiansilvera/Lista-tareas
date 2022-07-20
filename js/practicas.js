const fechaNumero = document.querySelector('#fechaNumero');
const fechaTexto = document.querySelector('#fechaTexto');
const fechaMes = document.querySelector('#fechaMes');
const fechaAño = document.querySelector('#fechaAño');
const contenedorTareas = document.querySelector('#contenedorTareas')

const setDate = () => {
    const fecha = new Date();
    fechaNumero.textContent = fecha.toLocaleDateString('es', {day: 'numeric'});
    fechaTexto.textContent = fecha.toLocaleDateString('es', {weekday: 'long'});
    fechaMes.textContent = fecha.toLocaleDateString('es', {month: 'short'});
    fechaAño.textContent = fecha.toLocaleDateString('es', {year: 'numeric'});
};

const addNewTask = event => {
    event.preventDefault();
    const { value } =   event.target.taskText;
    if(!value) return;
    const task = document.createElement('DIV');
    task.classList.add('tarea', 'bordeRedondeado');
    task.addEventListener('click', cambiarEstadoTarea);
    task.textContent = value;
    contenedorTareas.prepend(task);
    event.target.reset();
};

const cambiarEstadoTarea = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    contenedorTareas.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
};

const renderOrderTasks = () => {
    order().forEach(el => contenedorTareas.appendChild(el))
}

setDate();