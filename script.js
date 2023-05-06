// Utilizando la metodologia de dividir en bloques el codigo de sus funciones importamos los bloques sus funciones especificas a la vez debemos especificar en el html que este archivo es de modulos
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");
// aparentemente para seleccionar un data- se hace dentro de "[]"", para id, class o tag se hace "" y const sin nada,

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
    // Recuerde que cuando una funcion se le agrega () se manda a llamar inmediatamente, tambien que el appendChild reacciona en el orden de arriba a abajo, es decir similar a estar en el HTML
    taskContent.appendChild(checkComplete());
    
    taskContent.appendChild(titleTask);
    

    
    // const content = `<div>
    // <i class="far fa-check-square icon"></i>
    // <span class="task">${value}</span>
    // </div><i class="fas fa-trash-alt trashIcon icon"></i>`
    
    task.appendChild(taskContent);
    // Como i de la seccion card el ultimo i esta fuera del div por eso se declara hasta aca el hijo deleteIcon, recuerde la constante se convierte en funcion indirecta por eso ()
    task.appendChild(deleteIcon());
    
    // task.innerHTML = content;

    // El padre va ser la list y el hijo va ser la task
    list.appendChild(task);

    // con esto logramos que una vez daDO click se limpia el input
    input.value = ""; 
    console.log(value);
};


// btn.addEventListener("click", function(evento) {

// de la constante btn que agarra los datos de button en html tiene el evento de escuchar cuando se hace un click activa createTask
btn.addEventListener("click", createTask);


// en la configuracion de modo desarrollador del navegador, preserver log, sirve para conservar los .log generados aunque se recargue la pagina por eso del live server ejemplo.

// Todos los elementos en nuestro árbol de DOM son nodos y todos los nodos pueden ser accedidos vía JavaScript. Los nodos pueden ser eliminados, creados o modificados. Durante el curso utilizamos el método appendChild que siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre.

// Existen otros métodos que podemos utilizar para manipular nodos:

// ** insertBefore(padre, hijo): Coloca un nodo antes del otro
// ** replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1  por el nodo del elemento 2

// ** removeChild(elemento): Remueve un nodo del árbol
