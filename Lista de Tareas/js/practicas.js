const fechaNumero = document.querySelector('#fechaNumero');
const fechaTexto = document.querySelector('#fechaTexto');
const fechaMes = document.querySelector('#fechaMes');
const fechaAño = document.querySelector('#fechaAño');
const contenedorTareas = document.querySelector('#contenedorTareas')
// boton eliminar
// agregar id
let contadorID = 0;

const setDate = () => {
    // definir date 
    const fecha = new Date();
    // especificar que recibo del date tanto tipo de dato como longitud simple o mayor y el idioma
    fechaNumero.textContent = fecha.toLocaleDateString('es', {day: 'numeric'});
    fechaTexto.textContent = fecha.toLocaleDateString('es', {weekday: 'long'});
    fechaMes.textContent = fecha.toLocaleDateString('es', {month: 'short'});
    fechaAño.textContent = fecha.toLocaleDateString('es', {year: 'numeric'});
};

// Agregar una tarea
const addNewTask = event => {
    // prevenir reinicio de pagina
    event.preventDefault();
    // leer text area y validar
    const { value } =   event.target.taskText;
    if(!value) return;
    // crear un div
    const task = document.createElement('DIV');
    task.setAttribute("id", contadorID);
    // Crear parrafo
    const texto = document.createElement('p')
    texto.textContent = value;
    // Crear input para eliminar 
    const boton = document.createElement('input')
    boton.setAttribute("type", "button");
    boton.setAttribute("value", "Eliminar");
    boton.classList.add('eliminar', 'bordeRedondeado');
    // Asignar id al input
    boton.setAttribute("id", contadorID);
    // agregarle clases
    task.classList.add('tarea', 'bordeRedondeado','listaFlex');
    // evento click dentro de la tarea
    task.addEventListener('click', cambiarEstadoTarea);
    // Eliminar
    task.addEventListener('click',e =>{
        botonCerrar(e)
    })
    // crear texto y boton
    task.appendChild(texto)
    task.appendChild(boton)
    // agregar done y toDo y crear seccion en el div
    contenedorTareas.prepend(task);
    // vaciar text area
    event.target.reset();
    contadorID++;
};
// cambiar entre done y toDo
const cambiarEstadoTarea = event => {
    event.target.classList.toggle('done');
};
// Ordenar tareas 
const order = () => {
    // Array de done y toDo
    const done = [];
    const toDo = [];
    // recorrer y ver si tienen y done y toDo 
    contenedorTareas.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    // Retornar primero los toDo y luego los done
    return [...toDo, ...done];
};
// asociar evento de ordenar tareas cuando se crea otra para el boton ordenar
const renderOrderTasks = () => {
    order().forEach(el => contenedorTareas.appendChild(el))
}

setDate();

const botonCerrar = e=> {
    if(e.target.classList.contains("eliminar")) {
    document.getElementById([e.target.id]).remove();
}}

