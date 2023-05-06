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

    // de esta manera podemos traer texto html y con ${} se pueden emplear variables no olvide las backticks `` 
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div><i class="fas fa-trash-alt trashIcon icon"></i>`
    
  // Escribe en el codigo HTML todo content donde task engloba un "li" con estilos de "card"
    task.innerHTML = content;

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