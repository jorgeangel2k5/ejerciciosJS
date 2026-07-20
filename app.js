const btnAgregar = document.querySelector("#btnAgregar");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");


btnAgregar.addEventListener("click", function(){
 
 if (inputTarea.value.trim() !== "") {
    
    const nuevaLista = document.createElement("li");
    
nuevaLista.className=" list-group-item d-flex justify-content-between";
    nuevaLista.innerHTML=`${inputTarea.value} <button class="btn btn-danger btn-sm">X</button>`;
          const btonPrioridad = document.createElement("button")
    btonPrioridad.innerText="Prioridad";
    btonPrioridad.className = "btn btn-warning btn-sm";
   nuevaLista.append(btonPrioridad);
   listaTareas.append(nuevaLista);

 btonPrioridad.addEventListener("click", function(){
    nuevaLista.classList.add('bg-warning')
 });


 const btonborrar = nuevaLista.querySelector(".btn-danger");
      btonborrar.addEventListener("click", function(){
        nuevaLista.remove();
  
    });


       inputTarea.value = "";
       inputTarea.focus();
 }
 else{
    alert ("❗Ingrese una Tarea y Luego haga click en Agregar"); 
    inputTarea.focus();

 }
});
