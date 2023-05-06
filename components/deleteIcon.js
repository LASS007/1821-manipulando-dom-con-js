const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
  }
  
  // de esta manera de accesa al target padre y con la funcion remove se eliman todo el padre que contiene la tarjeta card
  const deleteTask = (event) => {
    console.log(event.target.parentElement);
    const parent = event.target.parentElement;
    parent.remove();
  } 

  export default deleteIcon;