// aparentemente para seleccionar un data- se hace dentro de "[]"", para id, class o tag se hace "",
const btn = document.querySelector("[data-form-btn]");

// console.log(btn);

// listener ejemplo click,
// como btn hace referencia al elemento button en html,por tanto se usan metodos y este seria addEventListener, y recibie dos parametros, el tipo de evento que quiere escuchar y la funcion a realizar

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    // const task = document.querySelector("[data-task]");
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    // con esta lineas agragamos la clase card a la task, algo asi como los estilos de "card" se le aplican al elemento "li"
    task.classList.add("card");

    // Vamos a reconstruir la seccion div de html en js
    const taskContent = document.createElement("div");
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    
    // const content = `<div>
    // <i class="far fa-check-square icon"></i>
    // <span class="task">${value}</span>
    // </div><i class="fas fa-trash-alt trashIcon icon"></i>`
    
    task.appendChild(taskContent);
    
    // task.innerHTML = content;

    // El padre va ser la list y el hijo va ser la task
    list.appendChild(task);

    // con esto logramos que una vez daDO click se limpia el input
    input.value = ""; 
    console.log(value);
};

// Esto es como recrear la seccion i del codigo html en js
const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-check-square");
  i.classList.add("icon");
  return i;
}
// btn.addEventListener("click", function(evento) {

// de la constante btn que agarra los datos de button en html tiene el evento de escuchar cuando se hace un click activa createTask
btn.addEventListener("click", createTask);

// en la configuracion de modo desarrollador del navegador, preserver log, sirve para conservar los .log generados aunque se recargue la pagina por eso del live server ejemplo.

// Todos los elementos en nuestro árbol de DOM son nodos y todos los nodos pueden ser accedidos vía JavaScript. Los nodos pueden ser eliminados, creados o modificados. Durante el curso utilizamos el método appendChild que siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre.

// Existen otros métodos que podemos utilizar para manipular nodos:

// ** insertBefore(padre, hijo): Coloca un nodo antes del otro
// ** replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1  por el nodo del elemento 2

// ** removeChild(elemento): Remueve un nodo del árbol