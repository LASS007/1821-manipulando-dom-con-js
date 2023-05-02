// aparentemente para seleccionar un data- se hace dentro de "[]"", para id, class o tag se hace "",
const btn = document.querySelector("[data-form-btn]");

// console.log(btn);

// listener ejemplo click,
// como btn hace referencia al elemento button en html,por tanto se usan metodos y este seria addEventListener, y recibie dos parametros, el tipo de evento que quiere escuchar y la funcion a realizar

const creatTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
};

// btn.addEventListener("click", function(evento) {

// arrow functions o funciones anonimas
btn.addEventListener("click", creatTask);

// en la configuracion de modo desarrollador del navegador, preserver log, sirve para conservar los .log generados aunque se recargue la pagina por eso del live server ejemplo.