// Esto es como recrear la seccion i del codigo html en js
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
    
  }
  
  const completeTask = (event) => {
    
    // Con esto la funcion en event arroja un objeto con las propiedades y en la seccion path muestra la estructura del elemneto que estamos tocando
    console.log(event);
  
    // por eso target es el elemento a cual estamos tocando
    const element = event.target;
    // existe add, remove y toggle donde toggle es si existe la quito si no existe la pongo
  
    // En estas clases se indaga en la pagina de iconos que se agregao la ref en el html y vemos que rellenar el check es con la etiqueta fas mientras  que far es sin relleno osea por defecto
    element.classList.toggle('fas');
    // completeIcon es la clase de color azul completado
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
  }

  export default checkComplete;
  