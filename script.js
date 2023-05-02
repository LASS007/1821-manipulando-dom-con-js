// aparentemente para seleccionar un data- se hace dentro de "[]"", para id, class o tag se hace "",
const btn = document.querySelector("[data-form-btn]");



// console.log(btn);



// listener ejemplo click,
// como btn hace referencia al elemento button en html,por tanto se usan metodos y este seria addEventListener, y recibie dos parametros, el tipo de evento que quiere escuchar y la funcion a realizar

// btn.addEventListener("click", function(evento) {

// arrow functions o funciones anonimas
btn.addEventListener("click", (evento) => {

    // console.log("crear tarea")

    // con esto impedimos que el elemento resultado de la funcion trate de enviar lo de por defecto, como lo es la posicion, tiempo, refrescar pantallas etc. Asi no queda una variable limpia de solo que introducimos en input
    evento.preventDefault();
    
    // input.value agarra el valor en el momento que es ejecutado y para obtener nuevo valor se deve ejecutar otra vez, por eso se mete dentro de la funcion a hacer cuando existe ele evento click en el data btn
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
});

// en la configuracion de modo desarrollador del navegador, preserver log, sirve para conservar los .log generados aunque se recargue la pagina por eso del live server ejemplo.